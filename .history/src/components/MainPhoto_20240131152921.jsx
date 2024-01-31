import { useEffect, useState } from "react"
import HistoryPhoto from "./HistoryPhoto"
import { Preloader } from "./Preloader"
import { useContext, createContext } from "react"

export const DataContext = createContext(null)

export default function MainPhoto () {
    // const ACCESS_KEY = 'ZkEfTk8JzhdpcPmsO-kjebZMh50n5vFX1zm_LYvoMV4' // key1
    const ACCESS_KEY = 'AO618whAXmSZJKTg3Xq9cismWGCLC2BFkmOoitrTQo8' // key2
    // const ACCESS_KEY = 'W95XwLtooev7UOVjBiDaNTBTyGNf-VnVDGYolEZg8ck'
    const [loading, setLoading] = useState(true)
    const [history, setHistory] = useState([])

    function getPhoto() {
        fetch(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`)
        .then((response) => response.json())
        .then((data) =>  {
            setHistory([...history, data])
            createContext(history)
            console.log('history Fetch', );
        })
        setLoading(false)
    }

    function changeLike(e, dataId) {
        const isClicked = e.target.classList.contains('orange600');
        const tempHistory = history.map(elem => {
            if(elem.id == dataId) {
                elem.liked_by_user = !elem.liked_by_user
                elem.likes = elem.likes + (isClicked ? -1 : 1) 
            }
            return elem
        })
        setHistory(tempHistory)
    }

    useEffect(() => {
        getPhoto()
    }
    , [])

    const data = history.length ? history[history.length - 1] : null 
    console.log('history MP',history);

    return (
        <div >
            <DataContext.Provider value={ history }>
            {!!data && <h5 className="title-name">Photo by: {data.user.name}</h5>}
            {loading ? ( <Preloader />
            ) : (
                !!data && (
                    <div className="main-box">
                        <img
                            className="main-picture"
                            src={data.urls.regular}
                            alt="picture"
                        />
                        <div className="likes-box">
                            <i onClick={(e) => changeLike(e, data.id)} 
                                id="material-icons"  
                                className={`material-icons ${data.liked_by_user ? "orange600" : " "}`} >
                                favorite_border
                            </i>
                            <p>{data.likes}</p>
                        </div>
                    </div>
                )
            )}

            <br />
            <button className="btn" onClick={() => { getPhoto()}}
            >
                NEXT
            </button>
            {loading ? (
                <Preloader />
            ) : (
                <HistoryPhoto />
            )}
            </DataContext.Provider>
        </div>
    );
}

