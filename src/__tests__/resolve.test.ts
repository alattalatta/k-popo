import { resolve } from '../resolve'

// Have to test against both ㄹ/non-ㄹ coda to distinguish with (으)로
describe('은/는, 이/가, 을/를, 과/와 아/야, 이어/여, 이*', () => {
  test('Can resolve against Korean string', () => {
    expect(resolve('(을)를', '나이프')).toEqual(['(을)를', '를'])
    expect(resolve('(을)를', '칼')).toEqual(['(을)를', '을'])

    expect(resolve('(이)가', '눈')).toEqual(['(이)가', '이'])
    expect(resolve('(이)가', '머리')).toEqual(['(이)가', '가'])

    expect(resolve('(과)와', '해')).toEqual(['(과)와', '와'])
    expect(resolve('(과)와', '달')).toEqual(['(과)와', '과'])

    expect(resolve('(아)야', '미소')).toEqual(['(아)야', '야'])
    expect(resolve('(아)야', '소민')).toEqual(['(아)야', '아'])

    expect(resolve('(이)여', '근무')).toEqual(['(이)여', '여'])
    expect(resolve('(이)여', '일요일')).toEqual(['(이)여', '이어'])

    expect(resolve('(이)', '부자')).toEqual(['(이)', ''])
    expect(resolve('(이)', '괴물')).toEqual(['(이)', '이'])
  })

  test('Can resolve against English words', () => {
    // Don't have to be exhaustive since it's rough approximations at best
    expect(resolve('(은)는', 'Null')).toEqual(['(은)는', '은'])
    expect(resolve('(은)는', 'Undefined')).toEqual(['(은)는', '는'])
  })

  test('Can resolve against numbers', () => {
    expect(resolve('(은)는', '0')).toEqual(['(은)는', '은'])
    expect(resolve('(은)는', '1')).toEqual(['(은)는', '은'])
    expect(resolve('(은)는', '2')).toEqual(['(은)는', '는'])
    expect(resolve('(은)는', '3')).toEqual(['(은)는', '은'])
    expect(resolve('(은)는', '4')).toEqual(['(은)는', '는'])
    expect(resolve('(은)는', '5')).toEqual(['(은)는', '는'])
    expect(resolve('(은)는', '6')).toEqual(['(은)는', '은'])
    expect(resolve('(은)는', '7')).toEqual(['(은)는', '은'])
    expect(resolve('(은)는', '8')).toEqual(['(은)는', '은'])
    expect(resolve('(은)는', '9')).toEqual(['(은)는', '는'])
    expect(resolve('(은)는', '10')).toEqual(['(은)는', '은'])
    expect(resolve('(은)는', '200')).toEqual(['(은)는', '은'])
    expect(resolve('(은)는', '3000')).toEqual(['(은)는', '은'])
    expect(resolve('(은)는', '40000')).toEqual(['(은)는', '은'])
    expect(resolve('(은)는', '500000000')).toEqual(['(은)는', '은'])
    expect(resolve('(은)는', '600000000000')).toEqual(['(은)는', '은'])

    expect(resolve('(은)는', '40,000')).toEqual(['(은)는', '은'])
  })
})

describe('으로/로*', () => {
  test('Can resolve against Korean words', () => {
    expect(resolve('(으)로', '칼')).toEqual(['(으)로', '로'])
    expect(resolve('(으)로', '눈')).toEqual(['(으)로', '으로'])
    expect(resolve('(으)로', '머리')).toEqual(['(으)로', '로'])
  })

  test('Can resolve against English words', () => {
    expect(resolve('(으)로', 'Null')).toEqual(['(으)로', '로'])
    expect(resolve('(으)로', 'System')).toEqual(['(으)로', '으로'])
    expect(resolve('(으)로', 'Undefined')).toEqual(['(으)로', '로'])
  })

  test('Can resolve against numbers', () => {
    expect(resolve('(으)로', '0')).toEqual(['(으)로', '으로'])
    expect(resolve('(으)로', '1')).toEqual(['(으)로', '로'])
    expect(resolve('(으)로', '2')).toEqual(['(으)로', '로'])
    expect(resolve('(으)로', '3')).toEqual(['(으)로', '으로'])
    expect(resolve('(으)로', '4')).toEqual(['(으)로', '로'])
    expect(resolve('(으)로', '5')).toEqual(['(으)로', '로'])
    expect(resolve('(으)로', '6')).toEqual(['(으)로', '으로'])
    expect(resolve('(으)로', '7')).toEqual(['(으)로', '로'])
    expect(resolve('(으)로', '8')).toEqual(['(으)로', '로'])
    expect(resolve('(으)로', '9')).toEqual(['(으)로', '로'])
    expect(resolve('(으)로', '10')).toEqual(['(으)로', '으로'])
    expect(resolve('(으)로', '200')).toEqual(['(으)로', '으로'])
    expect(resolve('(으)로', '3000')).toEqual(['(으)로', '으로'])
    expect(resolve('(으)로', '40000')).toEqual(['(으)로', '으로'])
    expect(resolve('(으)로', '500000000')).toEqual(['(으)로', '으로'])
    expect(resolve('(으)로', '600000000000')).toEqual(['(으)로', '으로'])

    expect(resolve('(으)로', '40,000')).toEqual(['(으)로', '으로'])
  })
})

describe('Token string processing', () => {
  test('Can process token string with extra characters into a token', () => {
    expect(resolve('(이)더냐', '부자')).toEqual(['(이)', ''])
    expect(resolve('(은)는 참 건강에 좋습니다', '사과')).toEqual(['(은)는', '는'])
  })

  test('Returns null if the given token string is unsupported or malformed', () => {
    expect(resolve('이더냐', '부자')).toBeNull()
    expect(resolve('의', '사과')).toBeNull()
  })
})
