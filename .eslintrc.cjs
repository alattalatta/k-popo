const path = require('node:path')
require('@alattalatta/eslint-config/patch')

const tsconfig = path.join(process.cwd(), 'tsconfig.json')

module.exports = {
  root: true,
  extends: ['@alattalatta/eslint-config'],
  rules: {
    'prefer-const': 'off',
  },
  parserOptions: {
    project: [tsconfig],
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: tsconfig,
      },
    },
  },
}
