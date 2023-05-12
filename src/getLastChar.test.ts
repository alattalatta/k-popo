import test from 'ava'

import { getLastChar } from './getLastChar'

test('Can get the last character of a string', (t) => {
  t.is(getLastChar('hello'), 'o')
  t.is(getLastChar('hello(apple)'), 'o')
  t.is(getLastChar("hello(apple)'"), 'o')
  t.is(getLastChar('hello(apple)"'), 'o')
  t.is(getLastChar('hell"o"'), 'o')
  t.is(getLastChar(`'hello'`), 'o')
  t.is(getLastChar(`hello('apple')`), 'o')
  t.is(getLastChar(`'hello'(apple)`), 'o')
})
