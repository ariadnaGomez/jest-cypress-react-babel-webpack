import { Game } from 'Game'

describe('BowlingGame', () => {
  let game

  beforeEach(() => {
    game = new Game()
  })

  function hacerMultiplesTiradas(bolos, totalTiradas) {
    for (let i = 0; i < totalTiradas; i++) {
      game.tirar(bolos)
    }
  }

  function tirarUnSemipleno() {
    game.tirar(4)
    game.tirar(6)
  }

  it('tiramos todas las tiradas cero bolos y la puntuación debe ser cero', () => {
    hacerMultiplesTiradas(0, 20)
    expect(game.calcularPuntuacion()).toBe(0)
  })

  it('tiramos todas las tiradas un bolo y la puntuación debe ser 20', () => {
    hacerMultiplesTiradas(1, 20)
    expect(game.calcularPuntuacion()).toBe(20)
  })

  it('tiramos un semipleno, luego 3 bolos y lo demás ceros', () => {
    tirarUnSemipleno()
    game.tirar(3)
    hacerMultiplesTiradas(0, 17)
    expect(game.calcularPuntuacion()).toBe(16)
  })

  it('si la segunda tirada de una jugada mas la primera tirada de la siguiente suman 10 no hay que sumarle el bonus', () => {
    game.tirar(3)
    game.tirar(6)
    game.tirar(4)
    game.tirar(4)
    hacerMultiplesTiradas(0, 16)
    expect(game.calcularPuntuacion()).toBe(17)
  })

  it('tiramos un semipleno en la ultima tirada', () => {
    hacerMultiplesTiradas(0, 18)
    game.tirar(6)
    game.tirar(4)
    game.tirar(4)
    expect(game.calcularPuntuacion()).toBe(14)
  })
})
