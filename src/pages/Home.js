import { html } from '../utils/Preact.js'
import { useFetch } from '../index.js'

const Home = () => {
  const [data, error] = useFetch('/')

  return error
    ? html`<b>Error</b>`
    : !data
    ? html`<i>Loading...</i>`
    : html`${JSON.stringify(data)}`
}

export default Home
