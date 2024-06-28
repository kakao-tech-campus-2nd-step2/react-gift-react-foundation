const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@stores': path.resolve(__dirname, 'src/stores/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@mocks': path.resolve(__dirname, 'src/mocks/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
    },
  },
};
