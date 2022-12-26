import { pow } from './pow';

test('exponentiation 10 ** 3 to equal 1000', () => {
  expect(pow(10, 3)).toBe(1000);
});
