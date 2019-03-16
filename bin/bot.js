#!/usr/bin/env node

'use strict';

var shell = require('shelljs');

shell.exec(`   npm run lint \
            && npm run test \
            && depcheck --ignores 'eslint-*' \
            && npm outdated \
           `);
