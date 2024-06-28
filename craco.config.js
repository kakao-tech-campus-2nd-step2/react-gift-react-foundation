const { CracoAliasPlugin } = require('react-app-alias');
const path = require('path');

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        aliases: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@assets': path.resolve(__dirname, 'src/assets'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@styles': path.resolve(__dirname, 'src/styles'),
          '@utils': path.resolve(__dirname, 'src/utils'),
        },
      },
    },
  ],
};
