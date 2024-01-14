import { expect, test } from 'vitest'

import { getLastChar } from './getLastChar'

test('Can get the last character of a string', () => {
  expect(getLastChar('hello')).toBe('o')
  expect(getLastChar('hello(apple)')).toBe('o')
  expect(getLastChar("hello(apple)'")).toBe('o')
  expect(getLastChar('hello(apple)"')).toBe('o')
  expect(getLastChar('hell"o"')).toBe('o')
  expect(getLastChar(`'hello'`)).toBe('o')
  expect(getLastChar(`hello('apple')`)).toBe('o')
  expect(getLastChar(`'hello'(apple)`)).toBe('o')
})
