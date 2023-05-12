export default {
  extensions: {
    ts: 'module',
  },
  nodeArguments: [
    '--loader=@swc-node/register/esm',
    '--no-warnings=ExperimentalWarning',
    '--experimental-specifier-resolution=node',
  ],
}
