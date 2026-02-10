/**
 * 画像ポリシーチェックスクリプト
 *
 * ポリシー:
 *   gallery/  → 長辺 1600px 推奨、1200px 以上は WARN、未満は FAIL
 *   それ以外  → 長辺 ≤ 800px（インライン表示用）
 *   全画像    → WebP 形式
 *   500KB超   → 注意（情報のみ）
 */

import { readdir, stat } from "node:fs/promises";
import { join, relative, extname } from "node:path";
import sharp from "sharp";

const IMAGES_DIR = new URL("../public/images", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");

const GALLERY_LONG_EDGE = 1600;
const GALLERY_MIN_LONG_EDGE = 1200;
const INLINE_MAX_LONG_EDGE = 800;
const SIZE_WARN_BYTES = 500 * 1024;

async function collectImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectImages(full)));
    } else if (/\.(webp|jpe?g|png|gif|avif|tiff?)$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

function isGallery(relPath) {
  return relPath.startsWith("gallery/") || relPath.startsWith("gallery\\");
}

async function checkImage(filePath) {
  const relPath = relative(IMAGES_DIR, filePath).replace(/\\/g, "/");
  const issues = [];

  // Format check
  const ext = extname(filePath).toLowerCase();
  if (ext !== ".webp") {
    issues.push({ level: "FAIL", msg: `形式が ${ext}（WebP以外）` });
  }

  // Dimensions check
  const metadata = await sharp(filePath).metadata();
  const longEdge = Math.max(metadata.width, metadata.height);

  if (isGallery(relPath)) {
    if (longEdge < GALLERY_MIN_LONG_EDGE) {
      issues.push({
        level: "FAIL",
        msg: `長辺${longEdge}px（最低${GALLERY_MIN_LONG_EDGE}px）`,
      });
    } else if (longEdge !== GALLERY_LONG_EDGE) {
      issues.push({
        level: "WARN",
        msg: `長辺${longEdge}px（推奨${GALLERY_LONG_EDGE}px）`,
      });
    }
  } else {
    if (longEdge > INLINE_MAX_LONG_EDGE) {
      issues.push({
        level: "FAIL",
        msg: `長辺${longEdge}px（上限${INLINE_MAX_LONG_EDGE}px）`,
      });
    }
  }

  // File size check
  const fileStat = await stat(filePath);
  if (fileStat.size > SIZE_WARN_BYTES) {
    const kb = Math.round(fileStat.size / 1024);
    issues.push({ level: "WARN", msg: `${kb}KB（500KB超）` });
  }

  return { relPath, issues };
}

async function main() {
  const files = await collectImages(IMAGES_DIR);
  let passed = 0;
  let failCount = 0;
  let warnCount = 0;

  for (const file of files.sort()) {
    const { relPath, issues } = await checkImage(file);
    if (issues.length === 0) {
      passed++;
      continue;
    }
    for (const { level, msg } of issues) {
      console.log(`[${level}] ${relPath} — ${msg}`);
      if (level === "FAIL") failCount++;
      if (level === "WARN") warnCount++;
    }
  }

  console.log();
  console.log(`[OK] ${passed} images passed`);
  if (warnCount > 0) console.log(`[WARN] ${warnCount} warnings`);
  if (failCount > 0) {
    console.log(`[FAIL] ${failCount} failures`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
