import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  // story 파일들의 경로를 설정 (main.js의 상대적 경로로 지정)
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  // storybook addon(스토리북 제공 기능) 설정 배열
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  // react를 사용
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ["..\\public"],
};
export default config;
