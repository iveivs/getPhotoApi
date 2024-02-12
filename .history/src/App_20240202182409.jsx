import { useState } from 'react'
// import Header from './components/Header'
import MainPhoto from './components/MainPhoto'
import HistoryPhoto from './components/HistoryPhoto'
import { Routes, Route } from 'react-router-dom'
import './App.css'
// import { Layout } from './components/Layout'
import Header from './components/Header'
import { DataContext } from './components/DataContext'



function App() {
  const ACCESS_KEY = 'ZkEfTk8JzhdpcPmsO-kjebZMh50n5vFX1zm_LYvoMV4' // key1
    // const ACCESS_KEY = 'AO618whAXmSZJKTg3Xq9cismWGCLC2BFkmOoitrTQo8' // key2
    // const ACCESS_KEY = 'W95XwLtooev7UOVjBiDaNTBTyGNf-VnVDGYolEZg8ck'
  const [count, setCount] = useState(0)
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)

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
    <DataContext.Provider>
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPhoto  />} />
          <Route path="/history" element={<HistoryPhoto  />} />
        </Route>
      </Routes> */}
      <Header  />
        <Routes>
            <Route index element={<MainPhoto  />} />
            <Route path="/history" element={<HistoryPhoto  />} />
        </Routes>
      {/* <Outlet /> */}
    </DataContext.Provider>
  )
}

export default App
