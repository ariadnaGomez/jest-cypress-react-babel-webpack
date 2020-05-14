import { RomanNumberConverter } from '../RomanNumbers'

describe('Roman Numbers', () => {
  it('should convert arabic 1 to roman I', () => {
    const converter = new RomanNumberConverter()
    const result = converter.arabicToRoman(1)
    expect(result).toBe('I')
  })

  it('should convert arabic 2 to roman II', () => {
    const converter = new RomanNumberConverter()
    const result = converter.arabicToRoman(2)
    expect(result).toBe('II')
  })

  it('should convert arabic 3 to roman III', () => {
    const converter = new RomanNumberConverter()
    const result = converter.arabicToRoman(3)
    expect(result).toBe('III')
  })

  it('should convert arabic 4 to roman IV', () => {
    const converter = new RomanNumberConverter()
    const result = converter.arabicToRoman(4)
    expect(result).toBe('IV')
  })
  it('should convert arabic 5 to roman V', () => {
    const converter = new RomanNumberConverter()
    const result = converter.arabicToRoman(5)
    expect(result).toBe('V')
  })
  it('should convert arabic 7 to roman VII', () => {
    const converter = new RomanNumberConverter()
    const result = converter.arabicToRoman(7)
    expect(result).toBe('VII')
  })
  it('should convert arabic 9 to roman IX', () => {
    const converter = new RomanNumberConverter()
    const result = converter.arabicToRoman(9)
    expect(result).toBe('IX')
  })
  it('should convert arabic 15 to roman XV', () => {
    const converter = new RomanNumberConverter()
    const result = converter.arabicToRoman(16)
    expect(result).toBe('XVI')
  })
  it('should convert arabic 90 to roman XC', () => {
    const converter = new RomanNumberConverter()
    const result = converter.arabicToRoman(90)
    expect(result).toBe('XC')
  })
  it('should convert arabic 45 to roman XLV', () => {
    const converter = new RomanNumberConverter()
    const result = converter.arabicToRoman(45)
    expect(result).toBe('XLV')
  })
  it('should convert arabic 434 to roman CDXXXIV', () => {
    const converter = new RomanNumberConverter()
    const result = converter.arabicToRoman(434)
    expect(result).toBe('CDXXXIV')
  })

  it('should convert arabic 985 to roman CMLXXXV', () => {
    const converter = new RomanNumberConverter()
    const result = converter.arabicToRoman(985)
    expect(result).toBe('CMLXXXV')
  })

  it('should convert arabic 2423 to roman MMCDXXIII', () => {
    const converter = new RomanNumberConverter()
    const result = converter.arabicToRoman(2423)
    expect(result).toBe('MMCDXXIII')
  })
})
