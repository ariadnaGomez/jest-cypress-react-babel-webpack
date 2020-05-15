const sum = (a, b) => a + b
const substract = (a, b) => a - b

test('sum should sum two numbers', () => {
  const result = sum(3, 5)
  const expected = 8
  expect(result).toBe(expected)
})

test('substract should substract two numbers', () => {
  const result = substract(5, 3)
  const expected = 2
  expect(result).toBe(expected)
})

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
  }
}

function test(title, callback) {
  try {
    callback()
    console.log(`√ ${title}`)
  } catch (error) {
    console.error(`x ${title}`)
    console.error(error)
  }
}
