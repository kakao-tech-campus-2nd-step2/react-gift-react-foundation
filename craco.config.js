const { CracoAliasPlugin } = require('react-app-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
  babel: {
    presets: ['@emotion/babel-preset-css-prop'],
  },
};
