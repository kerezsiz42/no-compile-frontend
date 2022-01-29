import {
  useState,
  useEffect,
  createContext,
  html,
  useContext,
  useMemo,
  useCallback
} from './Preact.js'

const POPSTATE = 'popstate'

export const RouterContext = createContext()

export const useRouter = () => useContext(RouterContext)

export const Router = ({ children }) => {
  const [path, setPath] = useState(location.pathname)
  const changePath = useCallback((newPath) => {
    history.pushState(null, null, newPath)
    setPath(location.pathname)
  }, [])
  const value = useMemo(() => [path, changePath], [path])
  const onPopstate = useCallback(() => setPath(location.pathname), [])
  useEffect(() => {
    addEventListener(POPSTATE, onPopstate)
    return () => {
      removeEventListener(POPSTATE, onPopstate)
    }
  }, [])
  return html`<${RouterContext.Provider} value=${value} children=${children} />`
}

export const Switch = ({ children }) => {
  const [path, _] = useContext(RouterContext)
  return children.find(({ props }) => props?.path.test(path), null)
}
