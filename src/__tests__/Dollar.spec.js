import {Dollar} from 'Dollar'

describe('Dollar multiplication', () => {
  it('should multiply a currency by shares', () => {
    const five = new Dollar(5)
    const product = five.times(2)
    expect(product.equals(new Dollar(10))).toBe(true)
  })

  it('should check if two currencies are equal', () => {
    const five = new Dollar(5)
    expect(five.equals(new Dollar(5))).toBe(true)
  })
})
