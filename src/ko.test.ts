import test from 'ava'

import { ko } from './ko'

test('Can resolve all tokens in correct positions', (t) => {
  t.is(ko`${'눈'}(이)가 나쁘면 ${'코'}(이)가 고생한다.`, '눈이 나쁘면 코가 고생한다.')
  t.is(ko`${'머리'}(이)가 나쁘면 ${'발'}(이)가 고생한다.`, '머리가 나쁘면 발이 고생한다.')
})

test('Ignores template slots without postposition specified', (t) => {
  t.is(ko`이것은 ${'너'}의 이야기`, '이것은 너의 이야기')
  t.is(ko`이것은 ${'당신'}의 ${'인생'} 이야기`, '이것은 당신의 인생 이야기')
})

test('Uses provided pronunciation when specified', (t) => {
  t.is(ko`${'8000000000000'}(이)가 있으면 어떻게 할래?`, '8000000000000이 있으면 어떻게 할래?')
  t.is(ko`${['8000000000000', '팔조']}(이)가 있으면 어떻게 할래?`, '8000000000000가 있으면 어떻게 할래?')

  t.is(ko`8개의 ${'bit'}(이)가 ${'byte'}(을)를 만듭니다.`, '8개의 bit가 byte를 만듭니다.')
  t.is(ko`8개의 ${['bit', '빗']}(이)가 ${['byte', '바잍']}(을)를 만듭니다.`, '8개의 bit이 byte을 만듭니다.')
})
