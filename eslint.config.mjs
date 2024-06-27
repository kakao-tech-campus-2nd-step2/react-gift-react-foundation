import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    extends: [
      "plugin:react/recommended", // 리액트 추천 룰셋
      "plugin:@typescript-eslint/recommended", // 타입스크립트 추천 룰셋
      // eslint의 typescript 포매팅 기능을 제거(eslint-config-prettier)
      "prettier/@typescript-eslint",
      // eslint의 포매팅 기능을 prettier로 사용함. 항상 마지막에 세팅 되어야 함.
      "plugin:prettier/recommended",
    ],
  },
];
