import { BowlingGame } from '../BowlingGame'

describe('Bowling game', () => {
  let game
  beforeEach(() => {
    game = new BowlingGame()
  })

  function rollMultipleTimes(times, spin) {
    for (let i = 0; i < times; i++) {
      game.roll(spin)
    }
  }

  it('dadas 10 tiradas sin tirar ningun bolo la puntuación debería ser cero', () => {
    const expectedScore = 0

    rollMultipleTimes(20, 0)
    const result = game.getScore()

    expect(expectedScore).toEqual(result)
  })

  it('dadas 10 tiradas tirando un bolo cada tirada la puntuación debería ser 10', () => {
    const expectedScore = 20

    rollMultipleTimes(20, 1)
    const result = game.getScore()

    expect(expectedScore).toEqual(result)
  })

  it('dada una tirada con pleno debería añadir el bonus de pleno', () => {
    const expectedScore = 14
    game.roll(5)
    game.roll(5)
    game.roll(2)
    rollMultipleTimes(17, 0)
    const result = game.getScore()

    expect(expectedScore).toEqual(result)
  })

  it('dada una tirada de strike y dos normal debería añadir el bonus de strike', () => {
    const expectedScore = 24
    game.roll(10)
    game.roll(5)
    game.roll(2)
    rollMultipleTimes(16, 0)
    const result = game.getScore()

    expect(expectedScore).toEqual(result)
  })
  it('dada la partida perfecta la puntuación debería sumar 300', () => {
    const expectedScore = 300

    rollMultipleTimes(12, 10)
    const result = game.getScore()

    expect(expectedScore).toEqual(result)
  })
})
