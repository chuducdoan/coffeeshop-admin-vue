module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser', // Nếu bạn dùng JS, nếu dùng TS thì đổi thành '@typescript-eslint/parser'
    ecmaVersion: 2020,
    sourceType: 'module',
    requireConfigFile: false,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended', // Hoặc vue3-essential nếu bạn muốn ít rule hơn
    'plugin:prettier/recommended', // Bật Prettier và báo lỗi nếu format sai
  ],
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }], // Fix lỗi CRLF/LF khác hệ điều hành
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // ✅ Tùy chỉnh rule Vue (ví dụ cấm inline style)
    // "vue/no-v-html": "off",
    'vue/multi-word-component-names': 'off', // Cho phép tên component 1 từ
  },
};
