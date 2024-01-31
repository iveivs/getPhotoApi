import { useCallback } from "react"
import { useEffect, useState } from "react"
import HistoryPhoto from "./HistoryPhoto"
import { Preloader } from "./Preloader"
import "./MainPhoto.css"

export default function MainPhoto () {
    const ACCESS_KEY = 'ZkEfTk8JzhdpcPmsO-kjebZMh50n5vFX1zm_LYvoMV4' // key1
    // const ACCESS_KEY = 'AO618whAXmSZJKTg3Xq9cismWGCLC2BFkmOoitrTQo8' // key2
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState()
    const [history, setHistory] = useState([])

    const tempArrForHistory = []
    set

    // console.log(typeof history);
    // console.log('history',history);

    function getPhoto() {
        fetch(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`)
        .then((response) => response.json())
        .then((data) =>  {
            setData(data)
        })
        setLoading(false)
    }

    useEffect(() => {
        getPhoto()
    }
    , [])

    return (
        <div className="container">
            <h4>Main Photo</h4>
            {
                loading ? <Preloader /> : (data && <img className="main-picture" src={data.urls.regular} alt="" />) 
            }
            <br />
            <button className="btn" onClick={() => {getPhoto()}} >NEXT</button>
            {
                loading ? <Preloader /> : <HistoryPhoto  tempArrForHistory={tempArrForHistory} />
            }
            
        </div>
    )
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
