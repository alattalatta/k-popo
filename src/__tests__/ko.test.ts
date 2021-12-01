import { ko } from '../ko'

describe('은/는, 이/가, 을/를, 과/와 아/야, 이어/여, 이*', () => {
  test('Can resolve against Korean words', () => {
    // Have to test against both ㄹ/non-ㄹ coda to distinguish with (으)로
    expect(ko`${'나이프'}(을)를 활용하세요.`).toBe('나이프를 활용하세요.')
    expect(ko`${'칼'}(을)를 활용하세요.`).toBe('칼을 활용하세요.')

    expect(ko`${'눈'}(이)가 나쁘면 ${'코'}(이)가 고생한다.`).toBe('눈이 나쁘면 코가 고생한다.')
    expect(ko`${'머리'}(이)가 나쁘면 ${'발'}(이)가 고생한다.`).toBe('머리가 나쁘면 발이 고생한다.')

    expect(ko`${'도'}(을)를 쳐보세요.`).toBe('도를 쳐보세요.')
    expect(ko`${'황'}(을)를 쳐보세요.`).toBe('황을 쳐보세요.')
    expect(ko`${'솔'}(을)를 쳐보세요.`).toBe('솔을 쳐보세요.')

    expect(ko`${'해'}(과)와 바람`).toBe('해와 바람')
    expect(ko`${'눈'}(과)와 구름`).toBe('눈과 구름')
    expect(ko`${'불'}(과)와 태양`).toBe('불과 태양')

    expect(ko`${'미소'}(아)야 오늘 저녁 뭐니?`).toBe('미소야 오늘 저녁 뭐니?')
    expect(ko`${'소민'}(아)야 오늘 저녁 뭐니?`).toBe('소민아 오늘 저녁 뭐니?')
    expect(ko`${'민솔'}(아)야 오늘 저녁 뭐니?`).toBe('민솔아 오늘 저녁 뭐니?')

    expect(ko`그 때는 ${'근무'}(이)여서 놀 수 없어요.`).toBe('그 때는 근무여서 놀 수 없어요.')
    expect(ko`그 때는 ${'일요일'}(이)여서 놀 수 없어요.`).toBe('그 때는 일요일이어서 놀 수 없어요.')

    expect(ko`네가 정녕 ${'부자'}(이)더냐?`).toBe('네가 정녕 부자더냐?')
    expect(ko`네가 정녕 ${'괴물'}(이)더냐?`).toBe('네가 정녕 괴물이더냐?')
    expect(ko`네가 정녕 ${'사람'}(이)더냐?`).toBe('네가 정녕 사람이더냐?')

    expect(ko`${'부자'}(이)란 무엇인가?`).toBe('부자란 무엇인가?')
    expect(ko`${'괴물'}(이)란 무엇인가?`).toBe('괴물이란 무엇인가?')
    expect(ko`${'사람'}(이)란 무엇인가?`).toBe('사람이란 무엇인가?')
  })

  test('Can resolve against English words', () => {
    // Don't have to be exhaustive since it's just a rough approximation at best
    // Coda ㄹ(널) is tested here
    expect(ko`${'Null'}(은)는 좋지 않습니다. ${'Editor'}(이)가 싫어합니다.`).toBe(
      'Null은 좋지 않습니다. Editor가 싫어합니다.',
    )
    expect(ko`${'Undefined'}(은)는 좋지 않습니다. ${'System'}(이)가 싫어합니다.`).toBe(
      'Undefined는 좋지 않습니다. System이 싫어합니다.',
    )
  })

  test('Can resolve against numbers', () => {
    expect(ko`알고 계셨나요? ${'0'}(은)는 미지의 수입니다.`).toBe('알고 계셨나요? 0은 미지의 수입니다.')
    expect(ko`알고 계셨나요? ${'1'}(은)는 미지의 수입니다.`).toBe('알고 계셨나요? 1은 미지의 수입니다.')
    expect(ko`알고 계셨나요? ${'2'}(은)는 미지의 수입니다.`).toBe('알고 계셨나요? 2는 미지의 수입니다.')
    expect(ko`알고 계셨나요? ${'3'}(은)는 미지의 수입니다.`).toBe('알고 계셨나요? 3은 미지의 수입니다.')
    expect(ko`알고 계셨나요? ${'4'}(은)는 미지의 수입니다.`).toBe('알고 계셨나요? 4는 미지의 수입니다.')
    expect(ko`알고 계셨나요? ${'5'}(은)는 미지의 수입니다.`).toBe('알고 계셨나요? 5는 미지의 수입니다.')
    expect(ko`알고 계셨나요? ${'6'}(은)는 미지의 수입니다.`).toBe('알고 계셨나요? 6은 미지의 수입니다.')
    expect(ko`알고 계셨나요? ${'7'}(은)는 미지의 수입니다.`).toBe('알고 계셨나요? 7은 미지의 수입니다.')
    expect(ko`알고 계셨나요? ${'8'}(은)는 미지의 수입니다.`).toBe('알고 계셨나요? 8은 미지의 수입니다.')
    expect(ko`알고 계셨나요? ${'9'}(은)는 미지의 수입니다.`).toBe('알고 계셨나요? 9는 미지의 수입니다.')
    expect(ko`알고 계셨나요? ${'10'}(은)는 미지의 수입니다.`).toBe('알고 계셨나요? 10은 미지의 수입니다.')
    expect(ko`알고 계셨나요? ${'200'}(은)는 미지의 수입니다.`).toBe('알고 계셨나요? 200은 미지의 수입니다.')
    expect(ko`알고 계셨나요? ${'3000'}(은)는 미지의 수입니다.`).toBe('알고 계셨나요? 3000은 미지의 수입니다.')
    expect(ko`알고 계셨나요? ${'40000'}(은)는 미지의 수입니다.`).toBe('알고 계셨나요? 40000은 미지의 수입니다.')
    expect(ko`알고 계셨나요? ${'500000000'}(은)는 미지의 수입니다.`).toBe('알고 계셨나요? 500000000은 미지의 수입니다.')
    expect(ko`알고 계셨나요? ${'600000000000'}(은)는 미지의 수입니다.`).toBe(
      '알고 계셨나요? 600000000000은 미지의 수입니다.',
    )

    expect(ko`알고 계셨나요? ${'40,000'}(은)는 미지의 수입니다.`).toBe('알고 계셨나요? 40,000은 미지의 수입니다.')
  })
})

describe('으로/로*', () => {
  test('Can resolve against Korean words', () => {
    expect(ko`${'나이프'}(으)로 제압하세요.`).toBe('나이프로 제압하세요.')
    expect(ko`${'총'}(으)로 제압하세요.`).toBe('총으로 제압하세요.')
    expect(ko`${'칼'}(으)로 제압하세요.`).toBe('칼로 제압하세요.')

    expect(ko`${'디자이너'}(으)로서 좌시할 수 없다.`).toBe('디자이너로서 좌시할 수 없다.')
    expect(ko`${'원청'}(으)로서 좌시할 수 없다.`).toBe('원청으로서 좌시할 수 없다.')
    expect(ko`${'경찰'}(으)로서 좌시할 수 없다.`).toBe('경찰로서 좌시할 수 없다.')
  })

  test('Can resolve against English words', () => {
    expect(ko`우리의 프로미스는 ${'Number'}(으)로 이행하게 됩니다.`).toBe('우리의 프로미스는 Number로 이행하게 됩니다.')
    expect(ko`우리의 프로미스는 ${'String'}(으)로 이행하게 됩니다.`).toBe(
      '우리의 프로미스는 String으로 이행하게 됩니다.',
    )
    expect(ko`우리의 프로미스는 ${'Null'}(으)로 이행하게 됩니다.`).toBe('우리의 프로미스는 Null로 이행하게 됩니다.')
  })

  test('Can resolve against numbers', () => {
    expect(ko`${'0'}(으)로 곱하면 안전하지 않습니다.`).toBe('0으로 곱하면 안전하지 않습니다.')
    expect(ko`${'1'}(으)로 곱하면 안전하지 않습니다.`).toBe('1로 곱하면 안전하지 않습니다.')
    expect(ko`${'2'}(으)로 곱하면 안전하지 않습니다.`).toBe('2로 곱하면 안전하지 않습니다.')
    expect(ko`${'3'}(으)로 곱하면 안전하지 않습니다.`).toBe('3으로 곱하면 안전하지 않습니다.')
    expect(ko`${'4'}(으)로 곱하면 안전하지 않습니다.`).toBe('4로 곱하면 안전하지 않습니다.')
    expect(ko`${'5'}(으)로 곱하면 안전하지 않습니다.`).toBe('5로 곱하면 안전하지 않습니다.')
    expect(ko`${'6'}(으)로 곱하면 안전하지 않습니다.`).toBe('6으로 곱하면 안전하지 않습니다.')
    expect(ko`${'7'}(으)로 곱하면 안전하지 않습니다.`).toBe('7로 곱하면 안전하지 않습니다.')
    expect(ko`${'8'}(으)로 곱하면 안전하지 않습니다.`).toBe('8로 곱하면 안전하지 않습니다.')
    expect(ko`${'9'}(으)로 곱하면 안전하지 않습니다.`).toBe('9로 곱하면 안전하지 않습니다.')
    expect(ko`${'10'}(으)로 곱하면 안전하지 않습니다.`).toBe('10으로 곱하면 안전하지 않습니다.')
    expect(ko`${'200'}(으)로 곱하면 안전하지 않습니다.`).toBe('200으로 곱하면 안전하지 않습니다.')
    expect(ko`${'3000'}(으)로 곱하면 안전하지 않습니다.`).toBe('3000으로 곱하면 안전하지 않습니다.')
    expect(ko`${'40000'}(으)로 곱하면 안전하지 않습니다.`).toBe('40000으로 곱하면 안전하지 않습니다.')
    expect(ko`${'500000000'}(으)로 곱하면 안전하지 않습니다.`).toBe('500000000으로 곱하면 안전하지 않습니다.')
    expect(ko`${'600000000000'}(으)로 곱하면 안전하지 않습니다.`).toBe('600000000000으로 곱하면 안전하지 않습니다.')

    expect(ko`${'40,000'}(으)로 곱하면 안전하지 않습니다.`).toBe('40,000으로 곱하면 안전하지 않습니다.')
  })
})

describe('Punctuations', () => {
  test('Can resolve postposition against strings ending with a quotation mark', () => {
    expect(ko`${`'너'`}(은)는 모른다.`).toBe(`'너'는 모른다.`)
    expect(ko`${`"너"`}(은)는 모른다.`).toBe(`"너"는 모른다.`)
    expect(ko`${`'당신'`}(은)는 모른다.`).toBe(`'당신'은 모른다.`)
    expect(ko`${`"당신"`}(은)는 모른다.`).toBe(`"당신"은 모른다.`)
  })

  test('Can resolve postposition against strings ending with a parenthesis group', () => {
    expect(ko`${`너(당신)`}(은)는 모른다.`).toBe(`너(당신)는 모른다.`)
    expect(ko`${`당신(너)`}(은)는 모른다.`).toBe(`당신(너)은 모른다.`)
  })

  test('Can resolve postposition against strings with a quotation mark and a parenthesis group mixed', () => {
    expect(ko`${`'너'(you)`}(은)는 모른다.`).toBe(`'너'(you)는 모른다.`)
    expect(ko`${`"너"(you)`}(은)는 모른다.`).toBe(`"너"(you)는 모른다.`)
    expect(ko`${`'당신'(you)`}(은)는 모른다.`).toBe(`'당신'(you)은 모른다.`)
    expect(ko`${`"당신"(you)`}(은)는 모른다.`).toBe(`"당신"(you)은 모른다.`)

    expect(ko`${`'너(you)'`}(은)는 모른다.`).toBe(`'너(you)'는 모른다.`)
    expect(ko`${`"너(you)"`}(은)는 모른다.`).toBe(`"너(you)"는 모른다.`)
    expect(ko`${`'당신(you)'`}(은)는 모른다.`).toBe(`'당신(you)'은 모른다.`)
    expect(ko`${`"당신(you)"`}(은)는 모른다.`).toBe(`"당신(you)"은 모른다.`)
  })
})

describe('Others', () => {
  test('Ignores template slots without postposition specified', () => {
    expect(ko`이것은 ${'너'}의 이야기`).toBe('이것은 너의 이야기')
    expect(ko`이것은 ${'당신'}의 ${'인생'} 이야기`).toBe('이것은 당신의 인생 이야기')
  })

  test('Uses provided pronunciation when specified', () => {
    expect(ko`${'8000000000000'}(이)가 있으면 어떻게 할래?`).toBe('8000000000000이 있으면 어떻게 할래?')
    expect(ko`${['8000000000000', '팔조']}(이)가 있으면 어떻게 할래?`).toBe('8000000000000가 있으면 어떻게 할래?')

    expect(ko`8개의 ${'bit'}(이)가 ${'byte'}(을)를 만듭니다.`).toBe('8개의 bit가 byte를 만듭니다.')
    expect(ko`8개의 ${['bit', '빗']}(이)가 ${['byte', '바잍']}(을)를 만듭니다.`).toBe('8개의 bit이 byte을 만듭니다.')
  })
})
