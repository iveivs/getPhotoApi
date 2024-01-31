import { useCallback } from "react"
import { useEffect, useState } from "react"
import HistoryPhoto from "./HistoryPhoto"
import { Preloader } from "./Preloader"
import "./MainPhoto.css"

export default function MainPhoto () {
    // const ACCESS_KEY = 'ZkEfTk8JzhdpcPmsO-kjebZMh50n5vFX1zm_LYvoMV4' // key1
    // const ACCESS_KEY = 'AO618whAXmSZJKTg3Xq9cismWGCLC2BFkmOoitrTQo8' // key2
    const ACCESS_KEY = 'W95XwLtooev7UOVjBiDaNTBTyGNf-VnVDGYolEZg8ck'
    const [loading, setLoading] = useState(true)
    const [history, setHistory] = useState([])

    function getPhoto() {
        fetch(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`)
        .then((response) => response.json())
        .then((data) =>  {
            console.log(data);
            setHistory([...history, data])
        })
        setLoading(false)
    }

    function changeLike(dataId, likes) {
        const temaHistory = history.map(elem => {
            if(elem.id == dataId) {
                elem.liked_by_user = !elem.liked_by_user
                elem.likes++
            }
            return elem
        })
        console.log('test', temaHistory);
        setHistory(temaHistory)
    }

    useEffect(() => {
        getPhoto()
    }
    , [])

    const data = history.length ? history[history.length - 1] : null 
    // history.length

    return (
        <div className="container">
            <h4>Main Photo</h4>
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
                            <i onClick={() => changeLike(data.id, data.likes)} id="material-icons"  className={`material-icons ${data.liked_by_user ? "orange600" : " "}`} >
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
                <HistoryPhoto tempArrForHistory={history} />
            )}
        </div>
    );
}

// =========================
// другая реализация
// useEffect( function getPhoto() {
//     fetch(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`)
//     .then((response) => response.json())
//     .then((data) =>  {
//         console.log(data);
//         setData(data)
//         tempArrForHistory.push(data)
//         console.log('tempArrForHistory', tempArrForHistory);
        
//     })
//     setLoading(false)
    
// },[])
// =========================


    // =========================
// реализация через useCallback
    // const fetchPhoto = useCallback(async () => {
    //     try {
    //         setLoading(true);
    //     const response = await fetch(
    //         `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`
    //     );
    //     const data = await response.json();
    //     setData(data);
    //     tempArrForHistory.push(data)
    //     setLoading(false);
    //     localStorage.setItem('history', JSON.stringify(data) )
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, []);

    // useEffect(() => {
    //     fetchPhoto()
    // }, [fetchPhoto])
        // =========================




    // =============================
    // useEffect(() => {
    //     async function fetchPhoto() {
    //         setLoading(true)
    //         const response = await fetch(
    //             `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`
    //         );
    //         const data = await response.json();
    //         setData(data);
    //         setLoading(false)
    //         console.log('data', data);
            
    //     }
    //     fetchPhoto()
    // }, []);
    // =============================
