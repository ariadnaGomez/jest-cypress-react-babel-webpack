import { dummyCoverage } from '../halfCoverage'
describe('this is a dummy test to show how little coverage matters', () => {
  test('my dummy coverage test', () => {
    const result = dummyCoverage(6)
    expect(result).toBe('Mayor que 5')
  })
})
