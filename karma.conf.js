// Karma configuration
// Generated on Tue Sep 08 2015 12:39:34 GMT+1200 (New Zealand Standard Time)
var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'spec.js'
    ],

    preprocessors: { 'spec.js': ['webpack'] },

    // list of files to exclude
    exclude: [],

    webpack: {
      devtool: 'inline-source-map',
      babel: {
        presets: ['es2015']
      },
      isparta: {
        embedSource: true,
        noAutoWrap: true,
        babel: {
          presets: ['es2015']
        }
      },
      module : {
        preLoaders: [{
          test: /\.js$/,
          // Exclude anything that shouldn't be in the code coverage report below
          exclude: /(node_modules|spec|test)/,
          loader: 'isparta'
        }],
        loaders: webpackConfig.module.loaders
      }
    },

    webpackServer: {
      noInfo: true // prevent console spamming when running in Karma!
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha','coverage'],

    htmlReporter: {
      outputFile: 'reports/karma/units.html'
    },

    coverageReporter: {
      dir: 'reports/coverage/',
      includeAllSources: true,
      reporters: [{
        type: 'html'
      },{
        type: 'text-summary'
      }]
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true

  })
};