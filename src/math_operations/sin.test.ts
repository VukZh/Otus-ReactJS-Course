import { sin } from './sin';

test('sin 90 equal 1', () => {
  expect(sin(90)).toBe(1);
});

test('sin 30 equal 0.49999999999999994', () => {
  expect(sin(30)).toBe(0.49999999999999994);
});

test('sin 20 equal 0.3420201433256687', () => {
  expect(sin(20)).toBe(0.3420201433256687);
});