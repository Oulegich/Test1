module.exports = {
    env: {
      node: true,
      es6: true,
      jest: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:jest/recommended',
    ],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {},
    plugins: ['jest'],
    settings: {
      jest: {
        version: '29', // Версия Jest, установленная в вашем проекте
      },
    },
  };
  