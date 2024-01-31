import { useState } from 'react'
import MainPhoto from './components/MainPhoto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainPhoto  />
    </>
  )
}

export default App
