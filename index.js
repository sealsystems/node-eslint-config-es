'use strict';

module.exports = {
  "extends": [
    "prettier"
  ],
  "plugins": [
    "prettier"
  ],
  "env": {
    "node": true,
    "mocha": true
  },
  "parserOptions": {
    "ecmaVersion": 2017
  },
  "rules": {
    "prettier/prettier": ["error", {
      "singleQuote": true,
      "parser": "flow",
      "arrowParens": "always"
    }],
    "no-console": "error",
    "no-unused-vars": "error"
  }
};
