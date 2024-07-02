// craco.config.js
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@stories': path.resolve(__dirname, 'src/stories'),
      '@styles': path.resolve(__dirname, 'src/styles'),  // 새로운 styles 경로 추가
    },
  },
};
