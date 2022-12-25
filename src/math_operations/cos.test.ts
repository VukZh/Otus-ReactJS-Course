import { cos } from './cos'

test('cos 0 equal 1', () => {
    expect(cos(0)).toBe(1);
});

test('cos 30 equal 0.8660254037844387', () => {
    expect(cos(30)).toBe(0.8660254037844387);
});

test('cos 20 equal 0.9396926207859084', () => {
    expect(cos(20)).toBe(0.9396926207859084);
});