import { DataContext } from "./DataContext"
import 

export default function Favorite() {
    const { history } = useContext(DataContext)

    if (!history || !history.length) {
        return <h5>Информация отсутствует</h5>
    }
    return (
        <div>
            <h1>Favorites</h1>
        </div>
    )
}