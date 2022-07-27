const path = require("path");

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "webpackFinal": async (config) => {
    config.resolve.alias = {
      'components': path.resolve(__dirname, '../components'),
      'templates': path.resolve(__dirname, '../components/templates'),
      'uiParts': path.resolve(__dirname, '../components/uiParts'),
      'utils': path.resolve(__dirname, '../utils')
    }
    return config
  }
}
