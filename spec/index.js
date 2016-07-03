import test           from 'tape';
import flatten        from '../src';
import getNestedArray from './helpers';

test('throws an error if not an Array is passed', (assert) => {
  assert.throws(() => flatten({}), new Error);

  assert.end();
});

test('flattens a simple Array', (assert) => {
  assert.deepEqual(flatten([1, [2, 3]]), [1, 2, 3]);

  assert.end();
});

test('flattens deeply nested Array', (assert) => {
  const array = flatten(getNestedArray(20));
  const numberOfNestedArrays = array.reduce((a, b) => Array.isArray(b) ? a + 1 : a, 0);

  assert.true(numberOfNestedArrays === 0);

  assert.end();
});

test('flattens extremely deeply nested Array, using trampoline to prevent Maximum call stack size exceeded', (assert) => {
  const array = flatten(getNestedArray(5000), true);
  const numberOfNestedArrays = array.reduce((a, b) => Array.isArray(b) ? a + 1 : a, 0);

  assert.true(numberOfNestedArrays === 0);

  assert.end();
});