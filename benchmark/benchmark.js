// @ts-check
import { fakerKO as faker } from '@faker-js/faker'
import text from '@kokr/text'
import autoJosa from 'auto-josa'
import b from 'benny'
import { josa } from 'josa'
import { ko } from 'k-popo'

const name = () => faker.person.firstName()

void b.suite(
  '1 placeholder',

  b.add('k-popo', () => ko`${name()}(이)가`),
  b.add('@kokr/text', () => text`${name()}이`),
  b.add('auto-josa', () => autoJosa.josa`${name()}이`),
  b.add('josa', () => josa(`${name()}#{이}`)),
  b.cycle(),
  b.complete(),
  b.save({ file: 'one', format: 'table.html' }),
)

void b.suite(
  '6 placeholders',

  b.add(
    'k-popo',
    () => ko`${name()}(이)가 ${name()}(을)를 ${name()}(이)가 ${name()}(을)를 ${name()}(이)가 ${name()}(을)를`,
  ),
  b.add('@kokr/text', () => text`${name()}이 ${name()}을 ${name()}이 ${name()}을 ${name()}이 ${name()}을`),
  b.add('auto-josa', () => autoJosa.josa`${name()}이 ${name()}을 ${name()}이 ${name()}을 ${name()}이 ${name()}을`),
  b.add('josa', () =>
    josa(`${name()}#{이} ${name()}#{을} ${name()}#{이} ${name()}#{을} ${name()}#{이} ${name()}#{을}`),
  ),
  b.cycle(),
  b.complete(),
  b.save({ file: 'six', format: 'table.html' }),
)
