'use strict';

module.exports = {
  extends: 'prettier',
  parserOptions: {
    ecmaVersion: 6
  },
  rules: {
    'id-length': [0, {
      min: 2,
      max: Number.infinity,
      properties: 'always',
      exceptions: ['_']
    }],
    'max-params': [1, { max: 5 }],
    'max-statements': [1, { max: 100 }],
    'max-len': [1, {
      code: 200,
      tabWidth: 2,
      comments: 200,
      ignoreComments: false,
      ignoreTrailingComments: false,
      ignoreUrls: true
    }],
    quotes: [ 2, 'single', { avoidEscape: false, allowTemplateLiterals: true }]
  }
};
