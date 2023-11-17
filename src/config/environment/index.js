const all = {
  env: process.env.APP_ENVIRONMENT || "local",
};

const curEnv = require(`./${all.env}.js`);

export default {
  ...curEnv,
};
