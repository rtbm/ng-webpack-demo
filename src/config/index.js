let config;

if (__DEV__) {
  config = require('./development');
}

if (__PRODUCTION__) {
  config = require('./production');
}

if (__TEST__) {
  config = require('./test');
}

if (!config) {
  throw new Error('Config not specified!');
}

module.exports = config;
