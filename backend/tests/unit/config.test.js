import { test, describe } from 'node:test';
import assert from 'node:assert';
import { env } from '../../src/config/index.js';

describe('Config Environment (Unit)', () => {
  test('env has default port and environment', () => {
    assert.ok(typeof env.port === 'number');
    assert.ok(env.port > 0);
    assert.ok(typeof env.nodeEnv === 'string');
  });
});
