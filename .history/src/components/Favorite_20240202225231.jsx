import { DataContext } from "./DataContext"

export default function Favorite() {
    const { history } = useContext(DataContext)
    return (
        <div>
            <h1>Favorites</h1>
        </div>
    )
}