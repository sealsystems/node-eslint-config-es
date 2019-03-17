'use strict';

const assert = require('assertthat');

const index = require('../lib/index');

suite('index', () => {
  test('is an object', async () => {
    assert.that(index).is.ofType('object');
  });
});
