import { useState } from 'react'
import Header from './components/Header'
import MainPhoto from './components/MainPhoto'
import A

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header  />
      <MainPhoto  />
    </>
  )
}

export default App
