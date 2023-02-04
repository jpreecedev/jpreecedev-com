module.exports = {
  plugins: [
    require("postcss-nesting"),
    require("postcss-preset-env")({ stage: 0 }),
  ],
};
