'use strict';

module.exports = {
  "extends": [
    "prettier"
  ],
  "plugins": [
    "prettier"
  ],
  "env": {
    "es6": true,
    "node": true
  },
  "rules": {
    "prettier/prettier": ["error", {
      "singleQuote": true,
      "parser": "flow",
      "arrowParens": "always"
    }]
  }
};
