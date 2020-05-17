import { romanToArabic } from 'romanToArabic'

describe('roman to arabic', () => {
  test('should convert roman I to arabic 1', () => {
    const roman = 'I'
    const expected = 1
    const value = romanToArabic(roman)
    expect(value).toEqual(expected)
  })

  test('should convert roman II to arabic 2', () => {
    const roman = 'II'
    const expected = 2
    const value = romanToArabic(roman)
    expect(value).toEqual(expected)
  })

  test('should convert roman III to arabic 3', () => {
    const roman = 'III'
    const expected = 3
    const value = romanToArabic(roman)
    expect(value).toEqual(expected)
  })

  test('should convert roman V to arabic 5', () => {
    const roman = 'V'
    const expected = 5
    const value = romanToArabic(roman)
    expect(value).toEqual(expected)
  })

  test('should convert roman VI to arabic 6', () => {
    const roman = 'VI'
    const expected = 6
    const value = romanToArabic(roman)
    expect(value).toEqual(expected)
  })

  test('should convert roman X to arabic 10', () => {
    const roman = 'X'
    const expected = 10
    const value = romanToArabic(roman)
    expect(value).toEqual(expected)
  })

  test('should convert roman IV to arabic 4', () => {
    const roman = 'IV'
    const expected = 4
    const value = romanToArabic(roman)
    expect(value).toEqual(expected)
  })

  test('should convert roman IX to arabic 9', () => {
    const roman = 'IX'
    const expected = 9
    const value = romanToArabic(roman)
    expect(value).toEqual(expected)
  })

  test('should convert roman L to arabic 50', () => {
    const roman = 'L'
    const expected = 50
    const value = romanToArabic(roman)
    expect(value).toEqual(expected)
  })

  test('should convert roman XL to arabic 40', () => {
    const roman = 'XL'
    const expected = 40
    const value = romanToArabic(roman)
    expect(value).toEqual(expected)
  })
  test('should convert roman XLIV to arabic 44', () => {
    const roman = 'XLIV'
    const expected = 44
    const value = romanToArabic(roman)
    expect(value).toEqual(expected)
  })

  test('should convert roman C to arabic 100', () => {
    const roman = 'C'
    const expected = 100
    const value = romanToArabic(roman)
    expect(value).toEqual(expected)
  })
  test('should convert roman D to arabic 500', () => {
    const roman = 'D'
    const expected = 500
    const value = romanToArabic(roman)
    expect(value).toEqual(expected)
  })
  test('should convert roman M to arabic 1000', () => {
    const roman = 'M'
    const expected = 1000
    const value = romanToArabic(roman)
    expect(value).toEqual(expected)
  })

  test('should convert roman MMDCCLXXXVI to arabic 2786', () => {
    const roman = 'MMDCCLXXXVI'
    const expected = 2786
    const value = romanToArabic(roman)
    expect(value).toEqual(expected)
  })
  test('should convert roman MMDCCLXXXVI to arabic 99', () => {
    const roman = 'XCIX'
    const expected = 99
    const value = romanToArabic(roman)
    expect(value).toEqual(expected)
  })
  test('should convert roman CMXXXIX to arabic 939', () => {
    const roman = 'CMXXXIX'
    const expected = 939
    const value = romanToArabic(roman)
    expect(value).toEqual(expected)
  })
})
