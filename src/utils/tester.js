const assert = (message, assertion) => {
  console.log(
    `%c${assertion ? '\u2714' : '\u274C'} ${message}`,
    `color: ${assertion ? '#66FF00' : '#FF0800'}`
  )
}

const describe = (message, fn) => {
  console.group(message)
  fn()
  console.groupEnd()
}

const isDeeplyEqual = (a, b) => {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false
  }
  for (const key in a) {
    const av = a[key]
    const bv = b[key]
    const avIsObj = av instanceof Object
    if ((avIsObj && !isDeeplyEqual(av, bv)) || (!avIsObj && av !== bv)) {
      return false
    }
  }
  return true
}

export { assert, describe, isDeeplyEqual }
