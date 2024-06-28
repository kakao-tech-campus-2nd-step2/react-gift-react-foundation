module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // TypeScript 파일 확장자 추가
      },
    },
  },
};
