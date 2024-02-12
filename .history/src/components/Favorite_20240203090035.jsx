import { DataContext } from "./DataContext"
import { useContext } from "react"

export default function Favorite() {
    const { history } = useContext(DataContext)

    if (!history || !history.length) {

        return (<h5>Информация отсутствует</h5>
    }
    const likedObjects = history.filter(item => item.liked_by_user )

    console.log(likedObjects);
    return (
        <div>
            <h1>Favorites</h1>
            
        </div>
    )
}