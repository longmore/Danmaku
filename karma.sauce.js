const customLaunchers = {
  'SL-Chrome': {
    base: 'SauceLabs',
    browserName: 'Chrome',
    platform: 'Windows 10'
  },
  'SL-Firefox': {
    base: 'SauceLabs',
    browserName: 'Firefox'
  },
  'SL-Safari': {
    base: 'SauceLabs',
    browserName: 'Safari',
    platform: 'OS X 10.11'
  },
  'SL-Opera': {
    base: 'SauceLabs',
    browserName: 'Oprea'
  },
  'SL-Opera-11.5': {
    base: 'SauceLabs',
    browserName: 'Oprea',
    version: '11.5'
  },
  'SL-Edge': {
    base: 'SauceLabs',
    browserName: 'MicrosoftEdge'
  },
  'SL-IE-11': {
    base: 'SauceLabs',
    browserName: 'Internet Explorer',
    version: '11'
  },
  'SL-IE-10': {
    base: 'SauceLabs',
    browserName: 'Internet Explorer',
    version: '10'
  },
  'SL-IE-9': {
    base: 'SauceLabs',
    browserName: 'Internet Explorer',
    version: '9'
  },
  'SL_iOS_Safari_9': {
    base: 'SauceLabs',
    browserName: 'iPhone',
    version: '9.3'
  },
  'SL_iOS_Safari_7': {
    base: 'SauceLabs',
    browserName: 'iPhone',
    version: '7'
  },
  'SL_Android_5': {
    base: 'SauceLabs',
    browserName: 'Android',
    version: '5.1'
  },
  'SL_Android_4': {
    base: 'SauceLabs',
    browserName: 'Android',
    version: '4'
  }
};

module.exports = function(config) {
  config.set({
    singleRun: true,
    concurrency: 3,
    captureTimeout: 300000,
    frameworks: ['mocha'],
    browsers: Object.keys(customLaunchers),
    customLaunchers: customLaunchers,
    files: [
      'node_modules/chai/chai.js',
      'test/test.js'
    ],
    preprocessors: {
      'test/test.js': ['rollup']
    },
    rollupPreprocessor: {
      format: 'iife',
      globals: {
        chai: 'chai'
      }
    },
    reporters: ['progress', 'saucelabs'],
    sauceLabs: {
      testName: 'Danmaku test',
      recordScreenshots: false
    },
  });
};
