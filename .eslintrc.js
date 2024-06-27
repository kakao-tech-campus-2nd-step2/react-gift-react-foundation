module.exports = {
  "env" : {
    "browser": true,
    "es6": true,
    "node": true,
  },
  "extends": ['airbnb', 'plugin:storybook/recommended'],
  "rules": {
    "react/require-default-props": "off",
    "import/no-extraneous-dependencies": [
        "error",
        {
          "devDependencies": [
            "**/*.stories.*",
            "**/.storybook/**/*.*"
          ],
          "peerDependencies": true
        }
      ]
  }
};

