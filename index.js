const Koa = require('koa')
const createReadStream = require('fs').createReadStream
const app = new Koa()
const server = require('http').createServer(app.callback())
const io = require('socket.io')(server)
const Dragontiger = require('./dragontiger.js')
const game = new Dragontiger(io)

app.use((ctx, next) => {
  ctx.type = 'html'
  ctx.body = createReadStream('public/index.html')
})

server.listen(3001)
