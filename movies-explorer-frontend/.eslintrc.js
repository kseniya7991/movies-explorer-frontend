module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:react/recommended'],

  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-underscore-dangle': ['error', { allow: ['_id', '_message'] }],
    'linebreak-style': 0,
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
