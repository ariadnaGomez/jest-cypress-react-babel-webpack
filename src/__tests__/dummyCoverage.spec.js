import { dummyCoverage } from '../dummyCoverage'
describe('this suit only has half coverage but is much better', () => {
  test('my dummy coverage test', () => {
    dummyCoverage(6)
    expect(true).toBe(true)
  })

  test('my second dummy coverage test', () => {
    dummyCoverage(3)
    expect(false).toBe(false)
  })
})
