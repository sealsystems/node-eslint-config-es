'use strict';

module.exports = {
  extends: ['prettier', 'eslint:recommended', 'plugin:jest/recommended'],
  plugins: ['jest', 'mocha', 'prettier'],
  env: {
    'jest/globals': true,
    node: true,
    mocha: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        parser: 'flow',
        arrowParens: 'always',
        printWidth: 120
      }
    ],

    // Enable rules in addition to "eslint:recommended": https://eslint.org/docs/rules/

    // Possible Errors

    'no-extra-parens': [2, 'functions'],

    // Best Practices

    'accessor-pairs': [
      2,
      {
        getWithoutSet: false,
        setWithoutGet: true
      }
    ],
    'array-callback-return': [
      2,
      {
        allowImplicit: true
      }
    ],
    'block-scoped-var': 2,
    'class-methods-use-this': 2,
    'default-case': 2,
    'guard-for-in': 2,
    'no-alert': 2,
    'no-caller': 2,
    'no-div-regex': 2,
    'no-else-return': 2,
    'no-empty-function': [
      2,
      {
        allow: ['methods']
      }
    ],
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-floating-decimal': 2,
    'no-implicit-coercion': 2,
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal-escape': 2,
    'no-proto': 2,
    'no-return-assign': [2, 'always'],
    'no-script-url': 2,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-useless-return': 2,
    'no-void': 2,
    'no-warning-comments': 2,
    'no-with': 2,
    radix: 2,
    'vars-on-top': 2,
    'wrap-iife': [2, 'inside'],
    yoda: [2, 'never'],

    // Strict Mode

    strict: [2, 'global'],

    // Variables

    'no-label-var': 2,
    'no-restricted-globals': 2,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-undef-init': 2,
    'no-use-before-define': 2,

    // Node.js

    'callback-return': [2, ['callback', 'done', 'next']],
    'global-require': 2,
    'handle-callback-err': [2, 'err'],
    'no-buffer-constructor': 2,
    'no-mixed-requires': [2, true],
    'no-new-require': 2,
    'no-path-concat': 2,
    'no-process-env': 2,
    'no-process-exit': 2,
    'no-sync': [
      2,
      {
        allowAtRootLevel: false
      }
    ],

    // ES 6

    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-var': 2,
    'object-shorthand': [2, 'always'],
    'prefer-arrow-callback': [
      2,
      {
        allowNamedFunctions: false,
        allowUnboundThis: true
      }
    ],
    'prefer-const': [
      2,
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true
      }
    ],
    'prefer-numeric-literals': 2,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'rest-spread-spacing': [2, 'never'],
    'sort-imports': [
      2,
      {
        ignoreCase: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['single', 'multiple', 'all', 'none']
      }
    ],
    'symbol-description': 2,
    'template-curly-spacing': [2, 'never'],
    'yield-star-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],

    // Jest: https://www.npmjs.com/package/eslint-plugin-jest#rules

    'jest/consistent-test-it': [
      0, // Not possible as long as there are still Mocha tests in some repositories
      {
        fn: 'it'
      }
    ],
    'jest/expect-expect': 0, // Not possible as long as there are still Mocha tests in some repositories
    'jest/no-empty-title': 2,
    'jest/no-test-callback': 2,
    'jest/no-test-return-statement': 2,
    'jest/prefer-spy-on': 2,
    'jest/prefer-strict-equal': 2,
    'jest/prefer-to-be-null': 2,
    'jest/prefer-to-be-undefined': 2,
    'jest/prefer-to-contain': 2,
    'jest/prefer-to-have-length': 2,
    'jest/prefer-inline-snapshots': 2,

    // Mocha: https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/README.md

    'mocha/handle-done-callback': 2,
    'mocha/max-top-level-suites': [
      2,
      {
        limit: 1
      }
    ],
    'mocha/no-exclusive-tests': 2,
    'mocha/no-global-tests': 2,
    'mocha/no-identical-title': 2,
    'mocha/no-nested-tests': 2,
    'mocha/no-pending-tests': 2,
    'mocha/no-return-and-callback': 2,
    'mocha/no-sibling-hooks': 2,
    'mocha/no-skipped-tests': 2,
    'mocha/no-synchronous-tests': 2,
    'mocha/no-top-level-hooks': 2,
    'mocha/no-async-describe': 2
  }
};
