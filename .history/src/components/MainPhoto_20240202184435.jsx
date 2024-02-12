import { useEffect, useState } from "react"
import HistoryPhoto from "./HistoryPhoto"
import { Preloader } from "./Preloader"
import { useContext, createContext } from "react"
import { DataContext } from "./DataContext"


export default function MainPhoto () {
    const { history, loading, getPhoto } = useContext(DataContext)

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


    const data = history[history.length - 1]
    console.log('history MP',history, data);

    return (
        <div className="container">
            {!!data && <h5 className="title-name">Photo by: {data.user.name}</h5>}
            {loading ? ( <Preloader />
            ) : (
                data && (
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
        </div>
    );
}

