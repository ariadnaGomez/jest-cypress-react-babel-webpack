export function convertToArray(maybeArray) {
  if (Array.isArray(maybeArray)) {
    return maybeArray
  } else if (!maybeArray) {
    return []
  } else {
    return [maybeArray]
  }
}
