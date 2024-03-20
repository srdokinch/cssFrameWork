/** @type {import('tailwindcss').Config} */
export default {
  // tailwindを適用したいファイル群を指定
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        // 'カラー名': 'カラーコード'
        'main-font': '#24A8BF',
      },
    },
    fontFamily: {
      hiragino: [
        'ヒラギノ角ゴシック',
        'Hiragino Sans',
      ],
    },
  },
  plugins: [],
}

