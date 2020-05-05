import {convertToArray} from '../convertToArray'

describe('covertToArray', () => {
  test('returns an array if given an array', () => {
    expect(convertToArray(['Elephant', 'Giraffe'])).toEqual([
      'Elephant',
      'Giraffe',
    ])
  })

  test('returns an empty array if given a falsy value', () => {
    expect(convertToArray()).toEqual([])
  })

  test(`returns an array with the given argument if it's not an array or falsy`, () => {
    expect(convertToArray('Leopard')).toEqual(['Leopard'])
  })
})
