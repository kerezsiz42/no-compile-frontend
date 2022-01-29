import { useState, useEffect } from './Preact.js'
import qs from './qs.js'

const useFetchFactory =
  (baseUrl) =>
  (pathname, { method, body, params } = { method: 'GET' }) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(
          `${baseUrl}${pathname}${qs.stringify(params)}`,
          {
            method,
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
          }
        )
        const newData = await response.json()
        if (response.ok) {
          setData(newData)
        } else {
          setError(newData)
        }
      }
      fetchData()
    }, [baseUrl, method, body, params])
    return [data, error]
  }

export default useFetchFactory
