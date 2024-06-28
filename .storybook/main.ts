import type { StorybookConfig } from '@storybook/react-webpack5';
import * as path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
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
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, '../src/components/'),
      assets: path.resolve(__dirname, '../src/assets/'),
      utils: path.resolve(__dirname, '../src/utils/'),
      pages: path.resolve(__dirname, '../src/pages/'),
      hooks: path.resolve(__dirname, '../src/hooks/'),
      store: path.resolve(__dirname, '../src/store'),
    };

    return config;
  },
};
export default config;
