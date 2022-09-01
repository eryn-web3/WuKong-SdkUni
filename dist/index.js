
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./sdkuni.cjs.production.min.js')
} else {
  module.exports = require('./sdkuni.cjs.development.js')
}
