const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias(
    {
      // "baseUrl": ".",
      // "paths": {
      //   "@/*": ["src/*"],
      //   "@components/*": ["src/Components/*"],
      //   "@story/*": ["src/stories/*"],
      //   // ... 원하는 폴더 추가
      // },
    "@": "src", // 절대경로 설정
    "@Story" : "src/stories",
    "@Component" : "src/Components"
    }
    // configPaths("./tsconfig.paths.json")
  )(config);

  return config;
};
