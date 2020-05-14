function arabicRomanSymbol(arabic, roman) {
  return { arabic, roman }
}

const romanNumberSymbols = [
  arabicRomanSymbol(1000, 'M'),
  arabicRomanSymbol(900, 'CM'),
  arabicRomanSymbol(500, 'D'),
  arabicRomanSymbol(400, 'CD'),
  arabicRomanSymbol(100, 'C'),
  arabicRomanSymbol(90, 'XC'),
  arabicRomanSymbol(50, 'L'),
  arabicRomanSymbol(40, 'XL'),
  arabicRomanSymbol(10, 'X'),
  arabicRomanSymbol(9, 'IX'),
  arabicRomanSymbol(5, 'V'),
  arabicRomanSymbol(4, 'IV'),
]

export class RomanNumberConverter {
  arabicToRoman(arabic) {
    let roman = ''
    romanNumberSymbols.forEach(symbol => {
      while (arabic >= symbol.arabic) {
        roman += symbol.roman
        arabic -= symbol.arabic
      }
    })
    while (arabic > 0) {
      roman += 'I'
      arabic--
    }
    return roman
  }
}
