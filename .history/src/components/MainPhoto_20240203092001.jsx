import { useEffect, useState } from "react"
import HistoryPhoto from "./HistoryPhoto"
import { Preloader } from "./Preloader"
import { useContext, createContext } from "react"
import { DataContext } from "./DataContext"


export default function MainPhoto () {
    const { history, loading, getPhoto, changeLike } = useContext(DataContext)

    const data = history[0]

    return (
        <div >
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

