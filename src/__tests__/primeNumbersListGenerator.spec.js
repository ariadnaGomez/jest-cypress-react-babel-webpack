import { PrimeListGenerator } from 'PrimeNumberGenerator'

describe('primeNumbersListGenerator', () => {
  it('should return empty list when generating list for input 1', () => {
    const generator = new PrimeListGenerator()
    const actual = generator.generate(1)
    const expected = []
    expect(actual).toEqual(expected)
  })

  // it('should return empty list when generating list for input 2', () => {
  //   const generator = new PrimeListGenerator()
  //   const actual = generator.generate(2)
  //   const expected = [2]
  //   expect(actual).toEqual(expected)
  // })

  // it('should return empty list when generating list for input 3', () => {
  //   const generator = new PrimeListGenerator()
  //   const actual = generator.generate(3)
  //   const expected = [3]
  //   expect(actual).toEqual(expected)
  // })

  // it('should return empty list when generating list for input 4', () => {
  //   const generator = new PrimeListGenerator()
  //   const actual = generator.generate(4)
  //   const expected = [2, 2]
  //   expect(actual).toEqual(expected)
  // })

  // it('should return empty list when generating list for input 5', () => {
  //   const generator = new PrimeListGenerator()
  //   const actual = generator.generate(5)
  //   const expected = [5]
  //   expect(actual).toEqual(expected)
  // })

  // it('should return empty list when generating list for input 6', () => {
  //   const generator = new PrimeListGenerator()
  //   const actual = generator.generate(6)
  //   const expected = [2, 3]
  //   expect(actual).toEqual(expected)
  // })

  // it('should return empty list when generating list for input 8', () => {
  //   const generator = new PrimeListGenerator()
  //   const actual = generator.generate(8)
  //   const expected = [2, 2, 2]
  //   expect(actual).toEqual(expected)
  // })

  // it('should return empty list when generating list for input 9', () => {
  //   const generator = new PrimeListGenerator()
  //   const actual = generator.generate(9)
  //   const expected = [3, 3]
  //   expect(actual).toEqual(expected)
  // })
})
