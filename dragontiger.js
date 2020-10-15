const protobuf = require('protobufjs')
const Card = require('./card')
const utils = require('./utils')
const HISTORY_SIZE = 48
const odds = {
  dragon: 2,
  tiger: 2,
  tie: 20
}
const walkthroughInit = {
  prepare: 10,
  deal: 2,
  place: 10,
  draw: 2,
  payout: 10
}

class Dragontiger {
  constructor ({ io, external }) {
    this.external = external
    this.status = 'prepare'
    this.dragon = this.tiger = this.result = null
    this.card = new Card(8)
    this.history = []
    this.pool = {}

    this.start(io)
    this.waitForClients()
    this.launch()
  }

  start (io) {
    this.io = io.of('/dragontiger')
    this.io.use(async (socket, next) => {
      const { platformId, token } = socket.handshake.query
      const player = await this.external.login({ platformId, token })
      if (!player) {
        return
      }

      socket.player = player
      next()
    })
  }

  waitForClients () {
    this.io.on('connection', socket => {
      console.info('connected')
      socket.emit('onData', socket.player)

      const payload = {
        ...socket.player,
        float_digits: 0,
      }
      socket.emit('onData', utils.encode({ message: 'systemProto.Welcome', payload }))

      this.pool[socket.id] = { dragon: [], tiger: [], tie: [] }
      const info = { status: this.status, numberOfStub: this.card.stub.length, history: this.history, balance: socket.player.balance }
      if (this.status === 'payout') {
        info.dragon = this.dragon
        info.tiger = this.tiger
      }
      if (['place', 'draw'].includes(this.status)) {
        info.pool = this.poolSummary()
      }
      socket.emit('info', info)
      socket.on('disconnect', () => {
        console.info('disconnect')
      })

      socket.on('place', message => {
        if (this.status !== 'place') {
          socket.emit('reject', '非下注階段')
          return
        }
        if (message.bet > socket.player.balance) {
          socket.emit('reject', '餘額不足')
          return
        }
        socket.player.balance -= message.bet
        this.pool[socket.id][message.area].push(message.bet)
        socket.emit('placed', { balance: socket.player.balance, area: message.area, bet: message.bet })

        const payload = {
          result: { result_code: 'Success' },
          user_betting: this.poolAmount(),
          balance: socket.player.balance,
        }
        socket.emit('onData', utils.encode({ message: 'dragontigerProto.UserBetResp', payload }))

        this.io.emit('pool', this.poolSummary())
      })
    })
  }

  launch () {
    let walkthrough = { ...walkthroughInit }

    setInterval(() => {
      if (walkthrough.prepare) {
        this.status = 'prepare'
        this.dragon = this.tiger = null
        this.io.emit('info', { dragon: this.dragon, tiger: this.tiger })
        this.io.emit('countdown', { status: this.status, left: --walkthrough.prepare })
      } else if (walkthrough.deal) {
        this.status = 'deal'
        this.io.emit('countdown', { status: this.status, left: --walkthrough.deal })
        if (!walkthrough.deal) {
          this.dragon = this.card.deal()
          this.tiger = this.card.deal()
          this.card.deal()
          this.io.emit('info', { numberOfStub: this.card.stub.length })
        }
      } else if (walkthrough.place) {
        this.status = 'place'
        this.io.emit('countdown', { status: this.status, left: --walkthrough.place })
      } else if (walkthrough.draw) {
        this.status = 'draw'
        this.io.emit('countdown', { status: this.status, left: --walkthrough.draw })
        if (!walkthrough.draw) {
          this.result = this.card.getResult(this.dragon, this.tiger)
          this.io.emit('draw', { dragon: this.dragon, tiger: this.tiger, result: this.result })
          if (this.history.length === HISTORY_SIZE) this.history = []
          this.history.push(this.result)
          this.io.emit('info', { history: this.history })
          if (this.card.stub.length < 100) {
            this.card.unpack()
            this.card.shuffle()
            this.io.emit('info', { numberOfStub: this.card.stub.length })
          }
        }
      } else if (walkthrough.payout) {
        if (this.status !== 'payout') {
          for (const [key, value] of Object.entries(this.pool)) {
            const prize = value[this.result].reduce((accu, curr) => accu + curr, 0) * odds[this.result]
            if (this.io.sockets[key]) {
              this.io.sockets[key].player.balance += prize
              this.io.to(key).emit('payout', this.io.sockets[key].player.balance)
            }
          }
        }
        this.status = 'payout'
        this.io.emit('countdown', { status: this.status, left: --walkthrough.payout })
        if (!walkthrough.payout) {
          walkthrough = { ...walkthroughInit }
          for (const key of Object.keys(this.pool)) {
            this.pool[key] = { dragon: [], tiger: [], tie: [] }
          }
        }
      }
    }, 1000)
  }

  poolSummary () {
    return Object.values(this.pool).reduce((accu, curr) => {
      for (const key of Object.keys(accu)) {
        accu[key] = accu[key].concat(curr[key])
      }
      return accu
    }, { dragon: [], tiger: [], tie: [] })
  }

  poolAmount () {
    const { dragon, tiger, tie } = this.poolSummary()
    return {
      dragon_area: dragon.reduce((a, b) => a + b, 0),
      tiger_area: tiger.reduce((a, b) => a + b, 0),
      tie_area: tie.reduce((a, b) => a + b, 0),
    }
  }
}

module.exports = Dragontiger
