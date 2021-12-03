import text from '@ko_kr/text'
import { josa as autoJosa } from 'auto-josa'
import b from 'benny'
import faker from 'faker'
import { ko } from 'k-popo'

faker.locale = 'ko'

const run = (fn: (name: string) => void): (() => void) => {
  return () => {
    fn(faker.name.firstName())
  }
}

void b.suite(
  'Benchmark',

  b.add('k-popo', () =>
    run(
      (name) =>
        void ko`Lorem ipsum dolor ${name}(이)가 amet, consectetur adipiscing elit. ${name}(이)가 Nulla pulvinar iaculis risus`,
    ),
  ),
  b.add('@ko_kr/text', () =>
    run(
      (name) =>
        void text`Lorem ipsum dolor ${name}이 amet, consectetur adipiscing elit. ${name}이 Nulla pulvinar iaculis risus`,
    ),
  ),
  b.add('auto-josa', () =>
    run(
      (name) =>
        void autoJosa`Lorem ipsum dolor ${name}이 amet, consectetur adipiscing elit. ${name}이 Nulla pulvinar iaculis risus`,
    ),
  ),

  b.cycle(),
  b.complete(),
  b.save({ file: 'result', format: 'table.html' }),
)
