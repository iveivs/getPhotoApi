import { useState } from 'react'
// import Header from './components/Header'
import MainPhoto from './components/MainPhoto'
import HistoryPhoto from './components/HistoryPhoto'
import { Routes, Route } from 'react-router-dom'
import './App.css'
// import { Layout } from './components/Layout'
import Header from './components/Header'



function App() {
  const [count, setCount] = useState(0)
  const [history, setHistory] = useState([])

  function getPhoto() {
    fetch(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`)
    .then((response) => response.json())
    .then((data) =>  {
        console.log("DATA", data);
        setHistory([...history, data])
        console.log('history from FETCH',history);
    })
    setLoading(false)
}

  useEffect(() => {
      getPhoto()
  }
  , [])

  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPhoto  />} />
          <Route path="/history" element={<HistoryPhoto  />} />
        </Route>
      </Routes> */}
      <Header  />
      <Provider>
        <Routes>
            <Route index element={<MainPhoto  />} />
            <Route path="/history" element={<HistoryPhoto  />} />
        </Routes>
      </Provider>
      {/* <Outlet /> */}
    </>
  )
}

export default App
