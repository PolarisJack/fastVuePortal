require("babel-register")({
  presets: ['es2015', 'stage-3'],
  plugins: ['add-module-exports','transform-runtime']
})
require('babel-polyfill')
require('./index.js')
