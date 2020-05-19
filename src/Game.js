export class Game {
  constructor() {
    this.tiradas = []
  }
  tirar(bolos) {
    this.tiradas.push(bolos)
  }
  calcularPuntuacion() {
    let puntuacion = 0
    let indiceTiradas = 0
    for (let indiceJugada = 0; indiceJugada < 10; indiceJugada++) {
      if (this.esSemipleno(indiceTiradas)) {
        puntuacion += this.calcularPuntuacionSemipleno(indiceTiradas)
      } else {
        puntuacion += this.calcularPuntuacionJugadaNormal(indiceTiradas)
      }
      indiceTiradas += 2
    }
    return puntuacion
  }

  esSemipleno(indiceTirada) {
    return this.tiradas[indiceTirada] + this.tiradas[indiceTirada + 1] === 10
  }

  calcularPuntuacionSemipleno(indiceTirada) {
    return (
      this.tiradas[indiceTirada] +
      this.tiradas[indiceTirada + 1] +
      this.tiradas[indiceTirada + 2]
    )
  }
  calcularPuntuacionJugadaNormal(indiceTirada) {
    return this.tiradas[indiceTirada] + this.tiradas[indiceTirada + 1]
  }
}
