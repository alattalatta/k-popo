export default {
  extensions: {
    ts: 'module',
  },
  nodeArguments: [
    '--loader=ts-node/esm',
    '--no-warnings=ExperimentalWarning',
    '--experimental-specifier-resolution=node',
  ],
}
