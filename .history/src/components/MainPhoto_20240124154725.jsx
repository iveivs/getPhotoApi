import { useCallback } from "react"
import { useEffect, useState } from "react"
import MainPhotoItem from "./HistoryPhoto"
import "./MainPhoto.css"

export default function MainPhoto () {
    const ACCESS_KEY = 'ZkEfTk8JzhdpcPmsO-kjebZMh50n5vFX1zm_LYvoMV4'
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()
    const [history, setHistory] = useState([])

    const tempArrForHistory = []

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

    // другая реализация
    useEffect( function getPhoto() {
        fetch(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`)
        .then((response) => response.json)
        .then((data) => setData())
    })
    return (
        <div className="container">
            <h4>Main Photo</h4>
            {loading && <p>Loading...</p>}

            {/* реализация через useCallback
            {data && (!loading && <img src={data.urls.regular} alt="" />)} */}

            {/* <button onClick={() =>{fetchPhoto()}}>NEXT</button> */}
            < HistoryPhoto tempArrForHistory={tempArrForHistory} />
        </div>
    )
}












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
