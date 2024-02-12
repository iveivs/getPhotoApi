import { useState, useEffect, useCallback } from 'react'
// import Header from './components/Header'
import MainPhoto from './components/MainPhoto'
import HistoryPhoto from './components/HistoryPhoto'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { DataContext } from './components/DataContext'


// const ACCESS_KEY = 'ZkEfTk8JzhdpcPmsO-kjebZMh50n5vFX1zm_LYvoMV4' // key1
const ACCESS_KEY = 'AO618whAXmSZJKTg3Xq9cismWGCLC2BFkmOoitrTQo8' // key2
// const ACCESS_KEY = 'W95XwLtooev7UOVjBiDaNTBTyGNf-VnVDGYolEZg8ck'

function App() {
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)

  const getPhoto = useCallback(() => {
    fetch(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`)
    .then((response) => response.json())
    .then((data) =>  {
        setHistory((previousHistory) =>  [data, ...previousHistory])
        console.log('history from FETCH',history);
    })
    setLoading(false)
  }, [])

  function changeLike(e, dataId) {
    const isClicked = e.target.classList.contains('orange600');

    setHistory((previousHistory) => previousHistory.map(elem => {
        if(elem.id == dataId) {
            return {
              ...elem,
              liked_by_user: !elem.liked_by_user,
              likes: elem.likes + (isClicked ? -1 : 1) 
            }
        }
        return elem
    }))
  }

  useEffect(() => {
      getPhoto()
  }, [getPhoto])

  return (
    <DataContext.Provider value={{
      history,
      loading,
      getPhoto,
      changeLike
    }}>
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
