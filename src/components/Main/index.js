import { useState } from 'react'
import Search from './Search'
import Error from './Error'
import Definition from './Definition'

const Main = () => {
  const [status, setStatus] = useState(undefined)
  const [data, setData] = useState(undefined)

  const getDefinition = async (word) => {
    if (!word) {
      setData(undefined)
      setStatus(undefined)
      return
    }
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    )
    setStatus(res?.status)
    const data = await res.json()
    setData(data)
  }

  return (
    <>
      <Search getDefinition={getDefinition} />
      {status === 404 && (
        <Error
          title={data?.title}
          message={`${data?.message} ${data?.resolution}`}
        />
      )}
      {status === 200 && data && <Definition data={data} />}
    </>
  )
}

export default Main
