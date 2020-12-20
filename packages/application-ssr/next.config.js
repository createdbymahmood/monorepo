// next.config.js
const withTM = require("next-transpile-modules")(["@monorepo/components"]); // pass the modules you would like to see transpiled
module.exports = withTM();
