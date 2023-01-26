// Задание первого уровня 3
// Есть общая функция omit которая удаляет поле из объекта и возвращает его без этого поля
// Нужно заменить FIXME на соответствующий тип

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Obj = Record<string, string | number | boolean | object | symbol | undefined>;
type Key = keyof Obj;
type FIXME = Record<Key, Obj[Key]>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const omit = <T extends Record<any, any>, K extends keyof T>(
  obj: T,
  keyToOmit: K
): FIXME => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { [keyToOmit]: _, ...withoutKey } = obj;
  return withoutKey;
}

// test

const test1 = omit({
  a: 1,
  b: 2,
  c: 3
}, 'a');

console.log('> ', test1);

const test2 = omit({
  123: 456,
  abc: 'def',
  obj: {
    1: 2,
    a: 'b'
}
}, 'abc');

console.log('> ', test2);