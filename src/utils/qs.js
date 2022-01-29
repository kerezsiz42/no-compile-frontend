const qs = {
  parse: (s = '') =>
    s.length
      ? s
          .slice(1)
          .split('&')
          .reduce((acc, kv) => {
            const [k, v] = kv.split('=')
            if (!v) {
              return acc
            }
            if (/.+\[\]/.test(k)) {
              const nk = k.slice(0, -2)
              acc[nk] = !acc[nk] ? [v] : [...acc[nk], v]
            } else {
              acc[k] = v
            }
            return acc
          }, {})
      : {},
  stringify: (q = {}) =>
    Object.keys(q).length
      ? `?${Object.entries(q)
          .map(([k, v]) => {
            if (Array.isArray(v)) {
              return v.map((ve) => `${k}[]=${ve}`).join('&')
            }
            return `${k}=${v}`
          })
          .join('&')}`
      : ''
}

export default qs
