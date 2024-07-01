module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "prettier",
  ],
  rules: {
    "react/require-default-props": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
        js: "never",
        jsx: "never",
      },
    ],
    "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
    "import/prefer-default-export": "off",  
    "no-restricted-globals": ["error", "isFinite", "isNaN"],  
    "no-unused-vars": ["error", { "varsIgnorePattern": "Meta" }],
    "react/jsx-props-no-spreading": "off", 
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/stories/**",
        ],
        "optionalDependencies": false
      }
    ]
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        paths: ["src"],
      },
    },
  },
};
