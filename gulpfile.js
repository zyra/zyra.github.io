'use strict';
const { join } = require('path');

require('ts-node').register({
  project: __dirname,
  compilerOptions: {
    target: 'es5',
    module: 'commonjs',
    lib: [
      'dom',
      'es6'
    ]
  }
});

require('./gulptasks');