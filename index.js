'use strict';

module.exports = {
  "extends": [
    "prettier"
  ],
  "plugins": [
    "prettier",
    "mocha"
  ],
  "env": {
    "node": true,
    "mocha": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "rules": {
    "prettier/prettier": ["error", {
      "singleQuote": true,
      "parser": "flow",
      "arrowParens": "always",
      "printWidth": 120
    }],
    "no-console": "error",
    "no-unused-vars": "error",
    "no-undef": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-unreachable": "error",
    "mocha/no-exclusive-tests": "error"
  }
};
