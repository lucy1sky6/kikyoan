/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 明朝体（雑誌風の本文・見出し用）
        serif: [
          'ui-serif',
          'Georgia',
          'Cambria',
          '"Hiragino Mincho ProN"',
          '"Yu Mincho"',
          '"YuMincho"',
          '"Noto Serif CJK JP"',
          'serif',
        ],
        // ゴシック体（ボタン・UI要素用）
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Hiragino Sans"',
          '"Hiragino Kaku Gothic ProN"',
          '"Yu Gothic"',
          '"YuGothic"',
          'Meiryo',
          '"Noto Sans CJK JP"',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}

