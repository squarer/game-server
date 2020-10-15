const Koa = require('koa')
const createReadStream = require('fs').createReadStream
const app = new Koa()
const server = require('http').createServer(app.callback())
const io = require('socket.io')(server)
const Dragontiger = require('./dragontiger')
const external = require('./external')
const game = new Dragontiger({ io, external })

app.use((ctx, next) => {
  ctx.type = 'html'
  ctx.body = createReadStream('public/index.html')
})

server.listen(3001)
