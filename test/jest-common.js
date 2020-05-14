const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '..'),
  testPathIgnorePatterns: ['../src/solution'],
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, '../src'),
    'shared',
    path.join(__dirname),
  ],
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./style-mock.js'),
  },
  watchPlugins: ['jest-watch-select-projects'],
}
