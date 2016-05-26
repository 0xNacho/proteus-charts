'use strict';

// Protractor configuration
var config = {
  specs: ['test/e2e/*.spec.js']
};

if (process.env.TRAVIS) {
  config.capabilities = {
    browserName: 'firefox'
  };
}

exports.config = config;