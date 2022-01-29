import { html, render } from './utils/Preact.js'
import { Router, Switch } from './utils/rtr.js'
import useFetchFactory from './utils/ftch.js'
import Nav from './components/Nav.js'
import Home from './pages/Home.js'
import About from './pages/About.js'
import { FRONTEND_APP_API_URL } from './config.js'

export const useFetch = useFetchFactory(FRONTEND_APP_API_URL)

const App = () => {
  return html`<main>
    <${Router}>
      <header class="bg-white black-80 tc pv4 avenir">
        <h1 class="mt2 mb0 baskerville i fw1 f1">Title</h1>
        <h2 class="mt2 mb0 f6 fw4 ttu tracked">Your amazing subtitle</h2>
        <${Nav} />
      </header>
      <${Switch}>
        <${Home} path=${/^\/$/} />
        <${About} path=${/^\/about/} />
      <//>
    <//>
  </main>`
}

render(App(), document.body)
