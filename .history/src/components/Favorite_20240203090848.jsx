import { DataContext } from "./DataContext"
import { useContext } from "react"
import { FavoriteItem } from "./FavoriteItem"

export default function Favorite() {
    const { history } = useContext(DataContext)

    if (!history || !history.length) {
        return <h5>Информация отсутствует</h5>
    }
    const likedObjects = history.filter(item => item.liked_by_user )
    // console.log(object);

    console.log('', likedObjects);
    return (
        <div className="container">
            <h1>Favorites</h1>
            { !!likedObjects.length && (
                likedObjects.map(item => {
                    <FavoriteItem  key={item.id} src={item.urls.small} name={item.user.name} likes={item.likes} likesBuUser={item.liked_by_user}/>
                })
            ) }
        </div>
    )
}