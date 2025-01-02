// .eslintrc.js
module.exports = {
  // TypeScriptを使う場合のパーサー設定
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // モダンなJavaScriptの構文を扱えるようにする設定
    ecmaVersion: 2020,
    // import/export を使う場合に必要
    sourceType: 'module',
    // JSX(Reactの構文)を扱うための設定
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    // Reactのバージョンを自動検出する設定
    react: {
      version: 'detect',
    },
  },
  // 適用するルールセットを指定する場所
  extends: [
    // ESLintで基本的なJavaScript文法の警告を出してくれる
    'eslint:recommended',
    // Reactに関するルールセット
    'plugin:react/recommended',
    // React Hooks(関数コンポーネントのuseState/useEffect等)のルールセット
    'plugin:react-hooks/recommended',
    // TypeScriptに関するルールセット
    'plugin:@typescript-eslint/recommended',
    // Prettierとの競合を無効化し、Prettierでのフォーマットを優先する設定
    'plugin:prettier/recommended',
  ],
  // 追加したい/上書きしたい個別のルール
  rules: {
    // 例: セミコロン無しにしたい場合は下記のように書く
    // 'semi': ['error', 'never'],
  },
}
