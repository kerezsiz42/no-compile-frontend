import { html } from '../utils/Preact.js'
import { useRouter } from '../utils/rtr.js'

const pages = [
  { title: 'Home', href: '/' },
  { title: 'Portfolio', href: '/portfolio/' },
  { title: 'Shop', href: '/shop/' },
  { title: 'About', href: '/about/' },
  { title: 'Contact', href: '/contact/' }
]

const Nav = () => {
  const [path, changePath] = useRouter()
  return html`<nav class="bt bb tc mw7 center mt4">
    ${pages.map(
      (page) => html`<a
        class="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l ${path ===
        page.href
          ? 'bg-green'
          : ''}"
        onclick=${() => changePath(page.href)}
        >${page.title}</a
      >`
    )}
  </nav>`
}

export default Nav
