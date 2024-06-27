const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@": "src", // 절대경로 설정
  })(config);

  return config;
};
