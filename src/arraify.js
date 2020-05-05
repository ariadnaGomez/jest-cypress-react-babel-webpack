export function arrayify(maybeArray) {
  if (Array.isArray(maybeArray)) {
    return maybeArray
  } else {
    return [maybeArray].filter(Boolean)
  }
}
