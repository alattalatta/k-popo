require('@alattalatta/eslint-config/patch')

module.exports = {
  extends: ['@alattalatta/eslint-config'],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
}
