export class PrimeListGenerator {
  generate(number) {
    const primes = []
    for (let candidate = 2; number > 1; candidate++) {
      for (; number % candidate === 0; number /= candidate) {
        primes.push(candidate)
      }
    }
    return primes
  }
}
