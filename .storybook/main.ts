import type { StorybookConfig } from '@storybook/react-webpack5';
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  staticDirs: ['..\\public'],
  webpackFinal: async config => {
    if (!config) {
      throw new Error('webpackFinal received an undefined config.');
    }

    return {
      ...config,
      plugins:
        config.plugins?.filter(plugin => {
          // ESLintWebpackPlugin 플러그인을 필터링하여 제거
          if (plugin?.constructor?.name === 'ESLintWebpackPlugin') {
            return false;
          }
          return true;
        }) || [],
    };
  },
};
export default config;
