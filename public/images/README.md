# 画像ポリシー

## サイズ・形式ルール

| 用途 | ディレクトリ | 長辺 | 形式 | 理由 |
|------|------------|------|------|------|
| ライトボックス拡大 | `gallery/` | 1600px | WebP | 拡大表示に耐えるサイズ |
| インライン表示 | それ以外 | ≤ 800px | WebP | 表示領域を超えない |

- **500KB超は要注意** — `images:check` が警告を出す
- access/ (200px)、qr/ (192px) など小さいものはそのまま。800px以下は全てOK

## gallery/ とそれ以外の使い分け

- `gallery/` はライトボックスで拡大表示する写真専用。**長辺1600px固定**
- それ以外（`greengrass/`, `kikyoan/`, `landing/`, `facilities/` 等）はインライン表示用。**長辺800px以下**
- 同じ写真をギャラリーにも使う場合は、1600px版を `gallery/` に、800px版をインライン用ディレクトリに、それぞれ配置する。同一写真の複数解像度は正常
- **拡大予定の写真とインライン写真を同じフォルダに混在させない**

## ディレクトリ構成

```
public/images/
├── gallery/           # ライトボックス拡大用（長辺1600px）
│   ├── kikyoan/       #   桔梗庵タグ（連番: 01.webp, 02.webp ...）
│   ├── greengrass/    #   greengrassタグ
│   ├── sea/           #   海タグ
│   ├── festival/      #   祭タグ
│   └── other/         #   その他タグ
├── landing/           # トップページヒーロー画像
├── kikyoan/           # 桔梗庵インライン写真
├── greengrass/        # greengrassインライン写真
├── facilities/        # 近くの施設
├── access/            # アクセスフローチャート（200x200）
├── logos/             # ロゴ画像
└── qr/                # QRコード（192x192）
```

## バリデーション

```bash
npm run images:check    # ポリシー違反を検出
npm run images:fix      # 違反画像を自動リサイズ（上書き）
```

## 画像の追加手順

1. WebP 形式で該当ディレクトリに配置
2. `npm run images:check` でポリシー違反がないことを確認
3. 違反があれば `npm run images:fix` で自動リサイズ、または手動で対応

## ファイル名規約

- 英数字とハイフンを使用（日本語ファイル名は避ける）
- 大文字小文字を区別する
- ギャラリーは連番: `01.webp`, `02.webp`, ...

## 画像の参照方法

```tsx
<img src="/images/gallery/kikyoan/01.webp" alt="桔梗庵" />
<img src="/images/greengrass/about.webp" alt="greengrassについて" />
<img src="/images/logos/site-logo.png" alt="桔梗庵 & greengrass" />
```

## 注意事項

- 個人情報が写り込んでいないか確認すること
- 画像は適切に圧縮してから配置すること
