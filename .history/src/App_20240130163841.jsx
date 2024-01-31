import { useState } from 'react'
import Header from './components/Header'
import MainPhoto from './components/MainPhoto'

import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPhoto  />} />
          <Route path="/history" element={<HistoryPhoto  />} />
        </Route>
      </Routes>
      <Header />
      <MainPhoto />
    </>
  )
}

export default App
