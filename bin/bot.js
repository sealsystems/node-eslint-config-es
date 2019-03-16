#!/usr/bin/env node

'use strict';

var shell = require('shelljs');

shell.exec([
  'eslint . --color',
  'npm run test -- --colors',
  'depcheck --ignores "eslint-*"',
  'npm outdated'
].join(' && '));
