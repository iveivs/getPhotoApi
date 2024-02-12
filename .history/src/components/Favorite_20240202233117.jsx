import { DataContext } from "./DataContext"
import { useContext } from "react"

export default function Favorite() {
    const { history } = useContext(DataContext)

    if (!history || !history.length) {
        return <h5>Информация отсутствует</h5>
    }
    likedObj
    return (
        <div>
            <h1>Favorites</h1>
            
        </div>
    )
}