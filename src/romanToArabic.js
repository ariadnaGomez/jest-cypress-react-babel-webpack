const mapRomanValues = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
}

export function romanToArabic(roman) {
  let arabic = 0

  const romanCharList = Array.from(roman)
  for (let i = 0; i < romanCharList.length; i++) {
    const romanChar = romanCharList[i]
    const romanValue = mapRomanValues[romanChar]

    const nextRomanChar = romanCharList[i + 1]
    const hasNextRomanValue = !!nextRomanChar

    if (hasNextRomanValue) {
      const nextRomanValue = mapRomanValues[nextRomanChar]
      if (romanValue >= nextRomanValue) {
        arabic += romanValue
      } else {
        arabic -= romanValue
      }
    } else {
      arabic += romanValue
    }
  }

  return arabic
}
