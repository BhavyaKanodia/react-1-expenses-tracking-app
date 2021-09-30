module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    quotes: ['error', 'single'],
    'max-len': 'off',
    'require-jsdoc': 'off',
    'new-cap': 'off',
  },
  parserOptions: {
    ecmaVersion: 2017,
  },
};
