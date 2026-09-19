const { test, describe } = require('node:test');
const assert = require('node:assert');
const { env } = require('../../src/config');

describe('Config Environment (Unit)', () => {
  test('env has default port and environment', () => {
    assert.ok(typeof env.port === 'number');
    assert.ok(env.port > 0);
    assert.ok(typeof env.nodeEnv === 'string');
  });
});
