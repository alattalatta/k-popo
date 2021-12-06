import { getLastChar } from './getLastChar'

type Parameter = string | readonly [display: string, pronunciation: string]

const ppMap: readonly [string, readonly [string, string]][] = [
  ['(은)는', ['은', '는']],
  ['(이)가', ['이', '가']],
  ['(을)를', ['을', '를']],
  ['(과)와', ['과', '와']],
  ['(으)로', ['으로', '로']],
  ['(이)여', ['이어', '여']],
  ['(이)', ['이', '']],
  ['(아)야', ['아', '야']],
]
const foreignCharsRecord: Readonly<Record<string, number>> = {
  0: 1,
  1: 8,
  3: 1,
  6: 1,
  7: 8,
  8: 8,
  b: 1,
  c: 1,
  g: 1,
  k: 1,
  l: 8,
  m: 1,
  n: 1,
  p: 1,
}

const hasNoCoda = (char: string, ignoreRieul: boolean): boolean => {
  const coda = char >= '가' && char <= '힣' ? (char.charCodeAt(0) - 0xac00) % 28 : foreignCharsRecord[char] || 0
  return !coda || (ignoreRieul && coda == 8)
}

/**
 * Resolves all Korean postposition placeholders right after a template slot with a fitting one.
 *
 * `(은)는`, `(이)가`, `(을)를`, `(과)와`, `(으)로`, `(이)여`, `(이)`, and `(아)야` are available.
 *
 * ```js
 * ko`그러자 ${name}(을)를 찾으며 말씀하시었으니, "${name}"(아)야, 어디 있느냐?`
 * // name=재민: 그러자 재민을 찾으며 말씀하시었으니, 재민아, 어디 있느냐?
 * // name=민재: 그러자 민재를 찾으며 말씀하시었으니, 민재야, 어디 있느냐?
 *
 * ko`${schedule}(이)여서 추가할 수 없어요. ${role}(이)가 필요합니다.`
 * // schedule=평일, role=관리자: 평일이어서 추가할 수 없어요. 관리자가 필요합니다.
 * // schedule=회의, role=어드민: 회의여서 추가할 수 없어요. 어드민이 필요합니다.
 * ```
 *
 * Tests against huge numbers or English words aren't perfect;
 * you may want to provide its pronunciation as well, if possible.
 *
 * ```js
 * const word = 'Supreme'
 * ko`${word}(이)야말로 최고의 피자다.`
 * // Supreme야말로 최고의 피자다.
 *
 * const pronunciation = '슈프림'
 * ko`${[word, pronunciation]}(이)야말로 최고의 피자다.`
 * // Supreme이야말로 최고의 피자다.
 * ```
 */
const ko = (template: Readonly<TemplateStringsArray>, ...words: readonly Parameter[]): string =>
  words.reduce<string>((acc, word, index) => {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    const withoutPronunciation = '' + word === word // typeof string

    // template is always 1 length longer, this should be safe
    const rightString = template[index + 1]
    const foundToken = ppMap.find((pair) => rightString.startsWith(pair[0]))
    const current = foundToken
      ? foundToken[1][+hasNoCoda(getLastChar(withoutPronunciation ? word : word[1]), foundToken[0] == '(으)로')] +
        rightString.slice(foundToken[0].length)
      : rightString

    return acc + (withoutPronunciation ? word : word[0]) + current
  }, template[0])

export { ko }
