'use strict';

module.exports = {
  extends: 'es/2015/server',
  rules: {
    'array-bracket-spacing': [2, 'never'],
    'object-curly-spacing': [2, 'always'],
    'arrow-body-style': [0, 'as-needed'],
    'arrow-parens': [2, 'always'],
    'callback-return': [1, ['callback', 'done', 'next']],
    'global-require': 0,
    'id-length': [0, {
      min: 2,
      max: Number.infinity,
      properties: 'always',
      exceptions: ['_', 'i', 'j', 'x', 'y', 'z']
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
    'newline-before-return': 0,
    'newline-per-chained-call': [0, { ignoreChainWithDepth: 2 }],
    'no-bitwise': 0,
    'no-empty-function': [0, { allow: ['methods'] }],
    'no-extra-parens': [0, 'all', { nestedBinaryExpressions: false }],
    'no-plusplus': [0, { allowForLoopAfterthoughts: true }],
    'no-restricted-syntax': [0, 'ClassDeclaration'],
    'no-underscore-dangle': [2, { allow: ['_id'] }],
    'prefer-arrow-callback': [1, { allowNamedFunctions: false, allowUnboundThis: true }],
    'prefer-reflect': [0, { exceptions: [] }],
    'prefer-rest-params': 0,
    'prefer-spread': 0
  }
};
