import { useEffect, useState } from "react"
import HistoryPhoto from "./HistoryPhoto"
import { Preloader } from "./Preloader"
import { useContext, createContext } from "react"
import { DataContext } from "./DataContext"


export default function MainPhoto () {
    const { history, loading, getPhoto, changeLike } = useContext(DataContext)

    const data = history[0]

    return (
        <div className="container">
            
            {loading ? (
                <Preloader />
            ) : (
                <HistoryPhoto />
            )}
        </div>
    );
}

