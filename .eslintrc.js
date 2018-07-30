module.exports = {
  parser: "babel-eslint",
  extends: "airbnb",
  plugins: ["react", "jsx-ally", "import"],
  rules: {
    "no-console": "off"
  },
  env: {
    jest: true,
    browser: true
  }
};
