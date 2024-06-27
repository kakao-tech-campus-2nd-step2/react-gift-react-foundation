const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@api': path.resolve(__dirname, 'src/api'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@mocks': path.resolve(__dirname, 'src/mocks'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@stories': path.resolve(__dirname, 'src/stories'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@utils': path.resolve(__dirname, 'src/utils')
    }
  }
};
