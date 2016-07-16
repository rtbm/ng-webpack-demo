module.exports = (config) => {
  config.set({

    basePath: '',

    files: [
      'node_modules/jquery/dist/jquery.js',
      'src/boot.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/**/*.test.js',
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    reporters: ['spec'],

    preprocessors: {
      'src/**/*.js': ['eslint', 'webpack'],
    },

    plugins: [
      require('karma-eslint'),
      require('karma-webpack'),
      require('karma-spec-reporter'),
      'karma-chrome-launcher',
      'karma-jasmine',
    ],

    webpack: require('./webpack.config'),
  });
};
