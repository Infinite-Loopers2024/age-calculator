import { describe, test } from 'node:test';
import assert from 'node:assert';

describe('test if the testrunner is running', () => {
  test('1 eqauls 1', () => {
    assert.strictEqual(1, 1);
  });
});
