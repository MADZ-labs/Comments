module.exports = {
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
