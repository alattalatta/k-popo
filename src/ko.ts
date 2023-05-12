import { resolve } from './resolve'

type Parameter = string | readonly [display: string, pronunciation: string]

/**
 * Resolves all postposition tokens right after a template slot to a fitting one.
 *
 * `(은)는`, `(이)가`, `(을)를`, `(과)와`, `(으)로`, `(이)여`, `(이)`, and `(아)야` are available.
 *
 * @example
 * ko`그러자 ${name}(을)를 찾으며 말씀하시었으니, "${name}"(아)야, 어디 있느냐?`
 * // name=재민: 그러자 재민을 찾으며 말씀하시었으니, 재민아, 어디 있느냐?
 * // name=민재: 그러자 민재를 찾으며 말씀하시었으니, 민재야, 어디 있느냐?
 *
 * const pronunciation = '슈프림'
 * ko`${[word, pronunciation]}(이)야말로 최고의 피자다.`
 * // Supreme이야말로 최고의 피자다.
 */
const ko = (template: Readonly<TemplateStringsArray>, ...words: readonly Parameter[]): string =>
  words.reduce<string>((acc, word, index) => {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    let withoutPronunciation = '' + word === word // typeof string

    // template is always 1 length longer, this should be safe
    let succeeding = template[index + 1]
    let tokenInfo = resolve(succeeding, withoutPronunciation ? (word as string) : word[1])

    return (
      acc +
      (withoutPronunciation ? (word as string) : word[0]) +
      (tokenInfo ? tokenInfo[1] + succeeding.slice(tokenInfo[0].length) : succeeding)
    )
  }, template[0])

export { ko }
