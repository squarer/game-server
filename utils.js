const proto = require('./dist/compiled')

module.exports = {
  encode: ({ message, payload }) => {
    const [package, command] = message.split('.')
    return {
      command,
      body: proto[package][command].encode(payload).finish()
    }
  },
  decode: ({ message, payload }) => {
  }
}
