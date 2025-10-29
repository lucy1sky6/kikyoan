# 画像ファイル配置ガイド

このディレクトリには、サイトで使用する画像を配置します。

## ディレクトリ構成

### `landing/` - トップページのヒーロー画像
トップページの各セクションで使用する背景画像を配置します。

- `kikyoan-hero-01.webp, 02.webp, 03.webp` - 桔梗庵セクション (1200x800) ※3枚が自動切り替え
- `greengrass-hero-01.webp, 02.webp, 03.webp` - greengrassセクション (1200x800) ※3枚が自動切り替え
- `gallery-hero.webp` - のとフォトセクション (1200x800)

### `gallery/` - のとフォトで表示する写真
のとフォトページで表示される写真を配置します。タグごとにサブディレクトリに分類してください。

- `gallery/kikyoan/01.webp, 02.webp, 03.webp` - 桔梗庵タグの写真
- `gallery/greengrass/01.webp, 02.webp, 03.webp` - greengrassタグの写真
- `gallery/sea/01.webp, 02.webp, 03.webp` - 海タグの写真
- `gallery/festival/01.webp, 02.webp` - 祭タグの写真
- `gallery/other/01.webp` - その他タグの写真

**ファイル名の形式**: `01.webp`, `02.webp` など（連番）

### `kikyoan/` - 桔梗庵セクションで使用する写真
桔梗庵の紹介セクション（MagazineSection）で使用する写真を配置します。

- `about.webp` - 桔梗庵について (1200x900)
- `activities.webp` - ここでできること (1000x1000)
- `features.webp` - 施設の魅力 (1000x1000)
- `photo-intro.webp` - こんな方におすすめ (1200x900)

### `greengrass/` - greengrassセクションで使用する写真
greengrassの紹介セクション（MagazineSection）で使用する写真を配置します。

- `about.webp` - greengrassについて (1200x900)
- `chairs.webp` - 木の椅子へのこだわり (1000x1000)
- `peeling.webp` - ピーリングウッドとは (1000x1000)
- `workshop.webp` - 工房を訪れて (1200x900)
- `exhibition.webp` - 個展の開催 (1200x900)
- `media.webp` - メディア・導入事例 (1200x900)

### `facilities/` - 近くの施設の写真
近くの施設セクションで使用する写真を配置します。

- `ogi-port.webp` - 小木漁港 (800x600)
- `ika-no-eki.webp` - イカの駅 つくモール (800x600)
- `marine-center.webp` - のと海洋ふれあいセンター (800x600)
- `mawaki-ruins.webp` - 縄文真脇遺跡 (800x600)
- `yanagida-park.webp` - 柳田植物公園 (800x600)

### `access/` - アクセスフローチャートで使用する写真
アクセスセクションのフローチャートで使用する写真を配置します。

- `kanazawa-station.webp` - 金沢駅 (200x200)
- `noto-airport.webp` - のと里山空港 (200x200)
- `ogi-entrance.webp` - 小木入口 (200x200)
- `kikyoan.webp` - 桔梗庵 (200x200)
- `greengrass.webp` - greengrass (200x200)

### `logos/` - ロゴ画像
サイトロゴや各種アイコンを配置します。

### `qr/` - QRコード
サイトのQRコードを配置します。

- `qr-code.webp` - サイトのQRコード (192x192)

## 画像の参照方法

画像は `/images/` から始まるパスで参照します：

```tsx
// のとフォトの写真
<img src="/images/gallery/kikyoan/kikyoan-01.jpg" alt="桔梗庵の外観" />

// 桔梗庵セクションの写真
imageSrc="/images/kikyoan/exterior.jpg"

// ロゴ
<img src="/images/logos/site-logo.png" alt="桔梗庵 & greengrass" />

// QRコード
<img src="/images/qr/qr-code.webp" alt="QRコード" />
```

## 推奨画像サイズ

### のとフォトギャラリー
- **正方形**: 800x800px 以上
- **フォーマット**: JPEG (圧縮率80-90%)

### MagazineSection
- **横長 (landscape)**: 1200x900px 以上 (4:3)
- **正方形 (square)**: 1000x1000px 以上
- **フォーマット**: JPEG (圧縮率80-90%)

### ロゴ
- **PNG形式** (透過背景の場合)
- サイズは用途に応じて

### QRコード
- **正方形**: 192x192px 以上
- **フォーマット**: PNG または WebP

## 注意事項

- ファイル名は英数字とハイフンを使用（日本語ファイル名は避ける）
- 大文字小文字を区別します
- 画像は適切に圧縮してからアップロードしてください
- 個人情報が写り込んでいないか確認してください
