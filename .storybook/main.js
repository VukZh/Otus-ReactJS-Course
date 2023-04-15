const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-next-router",
    "storybook-addon-next"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  staticDirs: ['../public/assets'],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'Icons': path.resolve(__dirname, '../public/assets/icons'),
    };
    return config;
  },
}