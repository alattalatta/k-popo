import test from 'ava'

import { resolve } from './resolve'

test('Can resolve 은/는, 이/가, 을/를, 과/와 아/야, 이어/여, 이*', (t) => {
  t.deepEqual(resolve('(을)를', '나이프'), ['(을)를', '를'])
  t.deepEqual(resolve('(을)를', '칼'), ['(을)를', '을'])

  t.deepEqual(resolve('(이)가', '눈'), ['(이)가', '이'])
  t.deepEqual(resolve('(이)가', '머리'), ['(이)가', '가'])

  t.deepEqual(resolve('(과)와', '해'), ['(과)와', '와'])
  t.deepEqual(resolve('(과)와', '달'), ['(과)와', '과'])

  t.deepEqual(resolve('(아)야', '미소'), ['(아)야', '야'])
  t.deepEqual(resolve('(아)야', '소민'), ['(아)야', '아'])

  t.deepEqual(resolve('(이)여', '근무'), ['(이)여', '여'])
  t.deepEqual(resolve('(이)여', '일요일'), ['(이)여', '이어'])

  t.deepEqual(resolve('(이)', '부자'), ['(이)', ''])
  t.deepEqual(resolve('(이)', '괴물'), ['(이)', '이'])
})

test('Can resolve 은/는, 이/가, 을/를, 과/와 아/야, 이어/여, 이* against English', (t) => {
  // Don't have to be exhaustive since it's rough approximations at best
  t.deepEqual(resolve('(은)는', 'Null'), ['(은)는', '은'])
  t.deepEqual(resolve('(은)는', 'Undefined'), ['(은)는', '는'])
})

test('Can resolve 은/는, 이/가, 을/를, 과/와 아/야, 이어/여, 이* against numbers', (t) => {
  t.deepEqual(resolve('(은)는', '0'), ['(은)는', '은'])
  t.deepEqual(resolve('(은)는', '1'), ['(은)는', '은'])
  t.deepEqual(resolve('(은)는', '2'), ['(은)는', '는'])
  t.deepEqual(resolve('(은)는', '3'), ['(은)는', '은'])
  t.deepEqual(resolve('(은)는', '4'), ['(은)는', '는'])
  t.deepEqual(resolve('(은)는', '5'), ['(은)는', '는'])
  t.deepEqual(resolve('(은)는', '6'), ['(은)는', '은'])
  t.deepEqual(resolve('(은)는', '7'), ['(은)는', '은'])
  t.deepEqual(resolve('(은)는', '8'), ['(은)는', '은'])
  t.deepEqual(resolve('(은)는', '9'), ['(은)는', '는'])
  t.deepEqual(resolve('(은)는', '10'), ['(은)는', '은'])
  t.deepEqual(resolve('(은)는', '200'), ['(은)는', '은'])
  t.deepEqual(resolve('(은)는', '3000'), ['(은)는', '은'])
  t.deepEqual(resolve('(은)는', '40000'), ['(은)는', '은'])
  t.deepEqual(resolve('(은)는', '500000000'), ['(은)는', '은'])
  t.deepEqual(resolve('(은)는', '600000000000'), ['(은)는', '은'])

  t.deepEqual(resolve('(은)는', '40,000'), ['(은)는', '은'])
})

test('Can resolve 으로/로*', (t) => {
  t.deepEqual(resolve('(으)로', '칼'), ['(으)로', '로'])
  t.deepEqual(resolve('(으)로', '눈'), ['(으)로', '으로'])
  t.deepEqual(resolve('(으)로', '머리'), ['(으)로', '로'])
})

test('Can resolve 으로/로* against English', (t) => {
  t.deepEqual(resolve('(으)로', 'Null'), ['(으)로', '로'])
  t.deepEqual(resolve('(으)로', 'System'), ['(으)로', '으로'])
  t.deepEqual(resolve('(으)로', 'Undefined'), ['(으)로', '로'])
})

test('Can resolve 으로/로* against numbers', (t) => {
  t.deepEqual(resolve('(으)로', '0'), ['(으)로', '으로'])
  t.deepEqual(resolve('(으)로', '1'), ['(으)로', '로'])
  t.deepEqual(resolve('(으)로', '2'), ['(으)로', '로'])
  t.deepEqual(resolve('(으)로', '3'), ['(으)로', '으로'])
  t.deepEqual(resolve('(으)로', '4'), ['(으)로', '로'])
  t.deepEqual(resolve('(으)로', '5'), ['(으)로', '로'])
  t.deepEqual(resolve('(으)로', '6'), ['(으)로', '으로'])
  t.deepEqual(resolve('(으)로', '7'), ['(으)로', '로'])
  t.deepEqual(resolve('(으)로', '8'), ['(으)로', '로'])
  t.deepEqual(resolve('(으)로', '9'), ['(으)로', '로'])
  t.deepEqual(resolve('(으)로', '10'), ['(으)로', '으로'])
  t.deepEqual(resolve('(으)로', '200'), ['(으)로', '으로'])
  t.deepEqual(resolve('(으)로', '3000'), ['(으)로', '으로'])
  t.deepEqual(resolve('(으)로', '40000'), ['(으)로', '으로'])
  t.deepEqual(resolve('(으)로', '500000000'), ['(으)로', '으로'])
  t.deepEqual(resolve('(으)로', '600000000000'), ['(으)로', '으로'])

  t.deepEqual(resolve('(으)로', '40,000'), ['(으)로', '으로'])
})

test('Can process token string with extra characters into a token', (t) => {
  t.deepEqual(resolve('(이)더냐', '부자'), ['(이)', ''])
  t.deepEqual(resolve('(은)는 참 건강에 좋습니다', '사과'), ['(은)는', '는'])
})

test('Returns null if the given token string is unsupported or malformed', (t) => {
  t.is(resolve('이더냐', '부자'), null)
  t.is(resolve('의', '사과'), null)
})
