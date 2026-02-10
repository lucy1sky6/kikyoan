# 桔梗庵 & greengrass Webサイト

石川県能登町小木にある2つの施設「桔梗庵」と「greengrass」を紹介するWebサイトです。

## プロジェクト概要

### 桔梗庵
海にほど近い静かな場所で、心安らぐひとときをお過ごしいただける施設です。
レンタルスペースとしてご利用いただけます。（ただいま民泊に向けて準備中！）

### greengrass
網元の番屋を改造した建物で、1Fが作業場兼木材置き場、2Fが手作り木の椅子の展示スペースとなっています。

## 技術スタック

- **⚡ Vite** - 超高速ビルドツール
- **⚛️ React 19** - UIライブラリ
- **🔷 TypeScript** - 型安全な開発
- **🎨 Tailwind CSS 3** - ユーティリティファーストCSS
- **🧭 React Router 7** - クライアントサイドルーティング
- **🎬 Framer Motion** - アニメーションライブラリ
- **🎯 React Icons** - アイコンライブラリ
- **🔍 ESLint + Prettier** - コード品質管理

## セットアップ

### 前提条件

- Node.js 18以降
- npm または yarn

### インストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:5173](http://localhost:5173) を開いてアプリを表示します。

## スクリプト

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発モードでアプリを起動（ポート: 5173） |
| `npm run build` | 本番用ビルドを作成 |
| `npm run preview` | ビルドしたファイルをプレビュー |
| `npm run lint` | ESLintでコードをチェック |

## プロジェクト構造

```
kikyoan/
├── src/
│   ├── components/      # 再利用可能なコンポーネント
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Access.tsx
│   │   ├── Contact.tsx
│   │   ├── KikyoanSection.tsx
│   │   └── GreengrassSection.tsx
│   ├── pages/           # ページコンポーネント
│   │   ├── Landing.tsx
│   │   ├── KikyoanPage.tsx
│   │   └── GreengrassPage.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
└── public/              # 静的ファイル
```

## 主な機能

### ランディングページ
- 画面を2分割したデザイン（桔梗庵：薄紫、greengrass：蛍光黄緑）
- 各施設セクションをクリックで詳細ページへ遷移
- アクセス情報（Google Map埋め込み、交通手段の詳細）
- SNSリンク付きの連絡先情報

### 詳細ページ
- オーバーレイメニュー付きヘッダー
- 施設紹介文
- 8枚の写真をグリッドレイアウトで表示
- 各写真に説明文を表示
- レスポンシブデザイン対応

## 開発ガイド

### 新しいコンポーネントの追加

1. `src/components/` または `src/pages/` に新しいファイルを作成
2. TypeScriptで型安全に実装
3. Tailwind CSSでスタイリング
4. 親コンポーネントでインポート

### スタイリング

Tailwind CSSのユーティリティクラスを使用：

```tsx
<div className="flex items-center justify-center bg-purple-200 hover:bg-purple-300 transition-colors">
  <h1 className="text-4xl font-bold">桔梗庵</h1>
</div>
```

### ルーティングの追加

`src/App.tsx` でReact Routerを使用してルートを追加：

```tsx
<Route path="/new-page" element={<NewPage />} />
```

## デプロイ

### ビルド

```bash
npm run build
```

`dist/` フォルダに最適化されたファイルが生成されます。

### ホスティング

Cloudflare Pages（無料プラン）でデプロイ。mainへのpushで自動デプロイされる。

- URL: noto-kikyoan.com

## ライセンス

このプロジェクトはプライベートプロジェクトです。

## 開発者向け情報

Claude Codeで開発する場合は、`CLAUDE.md` を参照してください。プロジェクトの詳細な構造、開発ガイド、トラブルシューティングが記載されています。

---

**能登半島小木港で田舎のひととき**
