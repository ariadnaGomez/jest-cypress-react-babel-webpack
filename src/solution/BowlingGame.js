export class BowlingGame {
  constructor() {
    this.rolls = []
  }

  roll(pins) {
    this.rolls.push(pins)
  }

  getScore() {
    let score = 0
    let frameIndex = 0
    for (let i = 0; i < 10; i++) {
      if (this.hasScoredStrike(frameIndex)) {
        score +=
          this.rolls[frameIndex] +
          this.rolls[frameIndex + 1] +
          this.rolls[frameIndex + 2]
        frameIndex += 1
      } else if (this.hasScoredSpare(frameIndex)) {
        score +=
          this.rolls[frameIndex] +
          this.rolls[frameIndex + 1] +
          this.rolls[frameIndex + 2]
        frameIndex += 2
      } else {
        score += this.rolls[frameIndex] + this.rolls[frameIndex + 1]
        frameIndex += 2
      }
    }
    return score
  }

  frameSpins(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1]
  }

  hasScoredSpare(frameIndex) {
    return this.frameSpins(frameIndex) === 10
  }
  hasScoredStrike(frameIndex) {
    return this.rolls[frameIndex] === 10
  }
}
