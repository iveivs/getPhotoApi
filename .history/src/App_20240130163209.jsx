import { useState } from 'react'
import Header from './components/Header'
import MainPhoto from './components/MainPhoto'
import { BrowserRouter } from 'react-router-dom';

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainPhoto />
    </>
  )
}

export default App
