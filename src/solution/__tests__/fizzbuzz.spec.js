import { fizzbuzz } from '../fizzbuzz'

describe('fizzbuzz converter', () => {
  it('given a 1 it should return a 1', () => {
    const expected = '1'
    const actual = fizzbuzz.convert(1)
    expect(actual).toBe(expected)
  })

  it('given a 3 it should return fizz', () => {
    const expected = 'fizz'
    const actual = fizzbuzz.convert(3)
    expect(actual).toBe(expected)
  })

  it('given a 5 it should return buzz', () => {
    const expected = 'buzz'
    const actual = fizzbuzz.convert(5)
    expect(actual).toBe(expected)
  })

  it('given a 15 it should return fizzbuzz', () => {
    const expected = 'fizzbuzz'
    const actual = fizzbuzz.convert(15)
    expect(actual).toBe(expected)
  })

  it('given a 13 it should return fizz', () => {
    const expected = 'fizz'
    const actual = fizzbuzz.convert(13)
    expect(actual).toBe(expected)
  })

  it('given a 52 it should return buzz', () => {
    const expected = 'buzz'
    const actual = fizzbuzz.convert(52)
    expect(actual).toBe(expected)
  })

  it('given a 53 it should return buzz', () => {
    const expected = 'fizzbuzz'
    const actual = fizzbuzz.convert(53)
    expect(actual).toBe(expected)
  })
})
