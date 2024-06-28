import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/Button/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/GoodsItem/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/Grid/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/Image/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/Input/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/Layout/**/*.stories.@(js|jsx|ts|tsx)',
  ],
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
};
export default config;
