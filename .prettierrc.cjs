const { Options } = require("prettier");

/** @type {Options} */
const gtsConfig = require("gts/.prettierrc.json");

/** @type {Options} */
const config = {
  ...gtsConfig,
};

module.exports = config;
