class Card {
  constructor (numberOfDeck = 1) {
    this._numberOfDeck = Math.floor(Math.max(1, numberOfDeck))
    this.unpack()
    this.shuffle()
  }

  get stub () {
    return this._stub
  }

  set stub (value) {
    this._stub = value
  }

  unpack () {
    this._stub = []
    for (let i = 0; i < this._numberOfDeck; ++i) {
      this._stub = this._stub.concat(deckOfCards)
    }
  }

  shuffle () {
    for (let i = this._stub.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const tmp = this._stub[j]
      this._stub[j] = this._stub[i]
      this._stub[i] = tmp
    }
  }

  deal () {
    return this._stub.shift()
  }

  getResult (a, b) {
    const aRank = +a.replace('T', 10).replace('J', 11).replace('Q', 12).replace('K', 13).replace('A', 1).slice(0, -1)
    const bRank = +b.replace('T', 10).replace('J', 11).replace('Q', 12).replace('K', 13).replace('A', 1).slice(0, -1)
    if (parseInt(aRank) > parseInt(bRank)) {
      return 'dragon'
    }
    if (aRank < bRank) {
      return 'tiger'
    }

    const aSuit = a[a.length - 1]
    const bSuit = b[a.length - 1]
    if (aSuit === bSuit) return 'tie'
    if (suits.indexOf(aSuit) > suits.indexOf(bSuit)) return 'dragon'

    return 'tiger'
  }
}

const ranks = ['2', '3', '4', '5', '6', '7', '8', '9' ,'T', 'J', 'Q', 'K', 'A']
const suits = ['d', 'c', 'h', 's']

const deckOfCards = ranks.reduce((accu, rank) => {
  return accu.concat(suits.map(suit => rank + suit))
}, [])

module.exports = Card
