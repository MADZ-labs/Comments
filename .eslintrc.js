module.exports = {
  parser: "babel-eslint",
  extends: "airbnb",
  rules: {
    "no-console": "off"
  },
  env: {
    jest: true,
    browser: true
  }
};
