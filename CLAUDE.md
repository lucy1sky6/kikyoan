# Webサイト「桔梗庵 & greengrass」制作プロジェクト

## 1. 概要

「桔梗庵」と「greengrass」という２つの施設を紹介するWebサイトです。
ランディングページで両施設を紹介し、写真をクリックすると各施設ごとの詳細ページに遷移する構成となります。

**所在地**: 石川県鳳珠郡能登町小木

## 2. 技術スタック

- **フレームワーク:** React 19.1.1
- **ビルドツール:** Vite 7.1.12
- **言語:** TypeScript 5.9.3
- **スタイリング:** Tailwind CSS 3.x
- **ルーティング:** React Router DOM 7.x
- **アニメーション:** Framer Motion
- **アイコン:** React Icons 5.5.0
- **コード品質:** ESLint + Prettier

## 3. デザイン方針

- **配色:** ランディングページは画面を縦に2分割し、左半分（桔梗庵セクション）を薄紫色、右半分（greengrassセクション）を蛍光黄緑色とします。
- 写真が主役となるような、モダンでクリーンなデザイン。
- 手書きのタイトル画像を活かし、温かみのある雰囲気も加える。
- レスポンシブ対応し、スマートフォンでも快適に閲覧できること。

## 4. プロジェクト構造

```
kikyoan/
├── public/              # 静的ファイル
│   └── vite.svg         # Viteロゴ
├── src/
│   ├── components/      # 再利用可能なコンポーネント
│   │   ├── Header.tsx           # サイト共通ヘッダー（オーバーレイメニュー付き）
│   │   ├── Footer.tsx           # サイト共通フッター
│   │   ├── Access.tsx           # アクセス情報セクション
│   │   ├── Contact.tsx          # 連絡先情報セクション
│   │   ├── KikyoanSection.tsx   # 桔梗庵紹介セクション
│   │   └── GreengrassSection.tsx # greengrass紹介セクション
│   ├── pages/           # ページコンポーネント
│   │   ├── Landing.tsx          # ランディングページ
│   │   ├── KikyoanPage.tsx      # 桔梗庵詳細ページ
│   │   └── GreengrassPage.tsx   # greengrass詳細ページ
│   ├── App.tsx          # メインアプリケーション（ルーティング設定）
│   ├── main.tsx         # エントリーポイント
│   └── index.css        # Tailwind CSS + カスタムスタイル
├── tailwind.config.js   # Tailwind CSS設定
├── postcss.config.js    # PostCSS設定
├── vite.config.ts       # Vite設定
├── tsconfig.json        # TypeScript設定
├── eslint.config.js     # ESLint設定
├── .prettierrc          # Prettier設定
└── package.json         # パッケージ情報
```

## 5. ページ構成

### ランディングページ (`Landing.tsx`)
- 画面を左右2分割
  - 左: 桔梗庵セクション（薄紫背景）- クリックで詳細ページへ
  - 右: greengrassセクション（蛍光黄緑背景）- クリックで詳細ページへ
- `Access.tsx`: アクセス情報
  - 桔梗庵のGoogle Map埋め込み
  - greengrassへのリンク
  - 交通手段（車、飛行機、バス）の詳細
  - 近くの施設情報
- `Contact.tsx`: 連絡先情報とSNSリンク

### 詳細ページ
- `KikyoanPage.tsx`: 桔梗庵の詳細情報ページ
  - ヘッダー付き
  - 施設紹介文
  - 8枚の写真をグリッドレイアウトで表示
  - 各写真の下に説明文
  - トップに戻るリンク

- `GreengrassPage.tsx`: greengrassの詳細情報ページ
  - ヘッダー付き
  - 吹き出しデザインの「greengrassとは？？」
  - 施設紹介文
  - 8枚の写真をグリッドレイアウトで表示
  - 各写真の下に説明文
  - トップに戻るリンク

## 6. 開発コマンド

### 開発サーバーの起動
```bash
npm run dev
```
開発モードでアプリを起動します。
ブラウザで [http://localhost:5173](http://localhost:5173) を開いて表示を確認できます。
Viteの高速HMR（Hot Module Replacement）により、変更が即座に反映されます。

### プロダクションビルド
```bash
npm run build
```
本番環境用に最適化されたビルドを `dist` フォルダに生成します。

### プレビュー
```bash
npm run preview
```
ビルドしたファイルをローカルでプレビューします。

### リント
```bash
npm run lint
```
ESLintでコードをチェックします。

## 7. Claude Codeでの開発ガイド

### よくあるタスク

1. **新しいコンポーネントの追加**
   - `src/components/` に新しいファイルを作成（`.tsx`拡張子）
   - TypeScriptで型安全に実装
   - Tailwind CSSでスタイリング
   - 親コンポーネントでインポート

2. **新しいページの追加**
   - `src/pages/` に新しいページコンポーネントを作成
   - `App.tsx` でルーティングを追加

3. **スタイルの変更**
   - Tailwindのユーティリティクラスを使用
   - カスタムスタイルは `src/index.css` に記載

4. **画像の追加**
   - `public/` ディレクトリに画像を配置
   - コンポーネントで `/filename.jpg` として参照

### Tailwind CSS v3の使い方

- ユーティリティクラスで直接スタイリング
- レスポンシブ: `md:`, `lg:` などのプレフィックス使用
- ホバー効果: `hover:` プレフィックス
- カスタムカラーが必要な場合は `tailwind.config.js` の `theme.extend` に追加

### TypeScriptの型定義

- コンポーネントは関数コンポーネント形式
- Propsが必要な場合は型を定義
- React Routerの型も適切に使用

### 注意事項

- React 19とReact Router 7の最新APIを使用
- Viteの高速ビルドを活用
- ESLint + Prettierで自動整形

## 8. デプロイ

### Vercel（推奨）
```bash
npm install -g vercel
vercel
```

### Netlify
1. `npm run build` でビルド
2. `dist/` フォルダをドラッグ&ドロップ

### その他のホスティング
- ビルドコマンド: `npm run build`
- 出力ディレクトリ: `dist`
- Node.js バージョン: 18以上推奨

詳細は [Viteのデプロイガイド](https://vitejs.dev/guide/static-deploy.html)を参照してください。

## 9. トラブルシューティング

### Tailwindのスタイルが適用されない
1. `tailwind.config.js` の `content` 配列を確認
2. `src/index.css` に `@tailwind` ディレクティブがあるか確認
3. 開発サーバーを再起動

### ビルドエラー
1. `npm install` で依存関係を再インストール
2. `node_modules` と `dist` を削除して再ビルド

### 型エラー
1. `tsconfig.json` の設定を確認
2. 必要に応じて `@types/` パッケージをインストール
