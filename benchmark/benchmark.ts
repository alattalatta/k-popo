import text from '@ko_kr/text'
import { josa as autoJosa } from 'auto-josa'
import b from 'benny'
import faker from 'faker'
import { josa } from 'josa'
import { ko } from 'k-popo'

faker.locale = 'ko'

const name = (): string => faker.name.firstName()

void b.suite(
  'Benchmark',

  b.add(
    'k-popo',
    () => ko`${name()}(이)가 ${name()}(을)를 ${name()}(이)가 ${name()}(을)를 ${name()}(이)가 ${name()}(을)를`,
  ),
  b.add(
    '@ko_kr/text',
    () => text`${name()}이 ${name()}을 ${name()}이 ${name()}을 ${name()}이 ${name()}을 ${name()}이 ${name()}을`,
  ),
  b.add(
    'auto-josa',
    () => autoJosa`${name()}이 ${name()}을 ${name()}이 ${name()}을 ${name()}이 ${name()}을 ${name()}이 ${name()}을`,
  ),
  b.add('josa', () =>
    josa(
      `${name()}#{이} ${name()}#{을} ${name()}#{이} ${name()}#{을} ${name()}#{이} ${name()}#{을} ${name()}#{이} ${name()}#{을}`,
    ),
  ),
  b.cycle(),
  b.complete(),
  b.save({ file: 'result', format: 'table.html' }),
)
