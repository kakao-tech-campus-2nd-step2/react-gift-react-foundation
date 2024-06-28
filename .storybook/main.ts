import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/Button/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/Input/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/Image/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/GoodsItem/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/Grid/**/*.stories.@(js|jsx|mjs|ts|tsx)',
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
  staticDirs: ['../public'],
};
export default config;
