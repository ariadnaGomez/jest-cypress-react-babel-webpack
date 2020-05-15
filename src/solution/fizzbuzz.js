const fizz = 'fizz'
const buzz = 'buzz'

export const fizzbuzz = {
  convert(numerical) {
    if (
      isDivisibleBy15(numerical) ||
      (has3Char(numerical) && has5Char(numerical))
    ) {
      return fizz + buzz
    }
    if (isDivisibleBy3(numerical) || has3Char(numerical)) {
      return fizz
    }
    if (isDivisibleBy5(numerical) || has5Char(numerical)) {
      return buzz
    }
    return numerical.toString()
  },
}

function isDivisibleBy3(numerical) {
  return numerical % 3 === 0
}

function isDivisibleBy5(numerical) {
  return numerical % 5 === 0
}

function isDivisibleBy15(numerical) {
  return numerical % 15 === 0
}

function has3Char(numerical) {
  const stringNumber = numerical.toString()
  return stringNumber.indexOf(3) !== -1
}

function has5Char(numerical) {
  const stringNumber = numerical.toString()
  return stringNumber.indexOf(5) !== -1
}
