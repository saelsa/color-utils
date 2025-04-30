import { test } from 'node:test';
import assert from 'node:assert';
import { adjustColor } from './color-utils.js';


test('blal', () => {
    assert.strictEqual(1, 1);
    }
);

// test('adjustColor - no change', () => {
//     const result = adjustColor('rgb(100, 150, 200)', 0);
//     assert.strictEqual(result, 'rgb(100, 150, 200)');
// })
// test('adjustColor - RGB to RGB', () => {
//   const result = adjustColor('rgb(100, 150, 200)', 0.1);
//   assert.strictEqual(result, 'rgb(110, 165, 220)');
// }
// );
// test('adjustColor - HEX to RGB', () => {
//   const result = adjustColor('#6496C8', 0.1);
//   assert.strictEqual(result, 'rgb(110, 165, 220)');
// }
// );