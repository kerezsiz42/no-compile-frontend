import { html, useState, useCallback } from '../utils/Preact.js'

const Button = () => {
  const [value, setValue] = useState(0)
  const increment = useCallback(() => {
    setValue(value + 1)
  }, [value])

  return html`<a
    class="f6 link dim br2 ph3 pv2 mb2 dib white bg-near-black ma1"
    onClick=${increment}
  >
    Counter: ${value}
  </a>`
}

export default Button
