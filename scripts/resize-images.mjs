/**
 * 画像ポリシー違反の自動修正スクリプト
 *
 * --dry-run（デフォルト）: 変更内容をプレビュー
 * --apply: 実際にリサイズして上書き（git で戻せる）
 *
 * ポリシー:
 *   gallery/  → 長辺 1600px にリサイズ
 *   それ以外  → 長辺 800px にリサイズ（800px以下はスキップ）
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";
import sharp from "sharp";

const IMAGES_DIR = new URL("../public/images", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");

const GALLERY_LONG_EDGE = 1600;
const INLINE_MAX_LONG_EDGE = 800;

const applyMode = process.argv.includes("--apply");

async function collectImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectImages(full)));
    } else if (/\.webp$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

function isGallery(relPath) {
  return relPath.startsWith("gallery/") || relPath.startsWith("gallery\\");
}

async function processImage(filePath) {
  const relPath = relative(IMAGES_DIR, filePath).replace(/\\/g, "/");
  const inputBuffer = await readFile(filePath);
  const metadata = await sharp(inputBuffer).metadata();
  const longEdge = Math.max(metadata.width, metadata.height);

  let targetLongEdge;
  if (isGallery(relPath)) {
    if (longEdge === GALLERY_LONG_EDGE) return null;
    // アップスケールは品質劣化するためスキップ（元画像を差し替えて対応）
    if (longEdge < GALLERY_LONG_EDGE) {
      console.log(
        `[スキップ] ${relPath} — 長辺${longEdge}px < ${GALLERY_LONG_EDGE}px（アップスケール不可、元画像を差し替えてください）`
      );
      return null;
    }
    targetLongEdge = GALLERY_LONG_EDGE;
  } else {
    if (longEdge <= INLINE_MAX_LONG_EDGE) return null;
    targetLongEdge = INLINE_MAX_LONG_EDGE;
  }

  const resizeOpts =
    metadata.width >= metadata.height
      ? { width: targetLongEdge }
      : { height: targetLongEdge };

  if (applyMode) {
    const outputBuffer = await sharp(inputBuffer)
      .resize(resizeOpts)
      .webp({ quality: 80 })
      .toBuffer();
    await writeFile(filePath, outputBuffer);
  }

  return {
    relPath,
    from: `${metadata.width}x${metadata.height}`,
    toLongEdge: targetLongEdge,
  };
}

async function main() {
  console.log(applyMode ? "=== APPLY MODE ===" : "=== DRY RUN (--apply で実行) ===");
  console.log();

  const files = await collectImages(IMAGES_DIR);
  let count = 0;

  for (const file of files.sort()) {
    const result = await processImage(file);
    if (result) {
      const action = applyMode ? "リサイズ済" : "リサイズ予定";
      console.log(
        `[${action}] ${result.relPath} — ${result.from} → 長辺${result.toLongEdge}px`
      );
      count++;
    }
  }

  console.log();
  if (count === 0) {
    console.log("ポリシー違反の画像はありません。");
  } else {
    console.log(`${count} 枚を${applyMode ? "リサイズしました" : "リサイズ予定です"}。`);
    if (!applyMode) {
      console.log("実行するには: npm run images:fix");
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
