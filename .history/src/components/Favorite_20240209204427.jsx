import { DataContext } from "./DataContext"
import { useContext } from "react"
import { FavoriteItem } from "./FavoriteItem"

export default function Favorite() {
    const { history } = useContext(DataContext)

    const likedObjects = history.filter(item => item.liked_by_user )

    if (!likedObjects || !likedObjects.length) {
        return <h5 className="container" ><span className="container grey-text text-darken-2">Информация отсутствует</span></h5>
    }

    return (
        <div className="container">
            <h4 className="title-name">Favorites:</h4>
            <h1></h1>
            <div className="favorite-wrapper">
            {
                likedObjects.map((item) => (
                    <FavoriteItem  key={item.id} src={item.urls.small} name={item.user.name} likes={item.likes} likesBuUser={item.liked_by_user}/>
                ))
            }
            </div>
        </div>
    )
}