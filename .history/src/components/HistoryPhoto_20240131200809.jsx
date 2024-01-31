import { useContext } from "react";
import { DataContext } from "./MainPhoto";
import { HistoryItem } from "./HistoryItem";

export default function HistoryPhoto() {

    const history = useContext(DataContext)
    console.log('history HP' , history);
    if (!history || history.length) {
        return <h5>Информация отсутствует</h5>
    }
    
    return <div className="history">
        <h4 className="title-name">History:</h4>
        <div className="history__wrapper">
            {history.map( item => (
                <HistoryItem  key={item.id} src={item.urls.small} name={item.user.name} likes={item.likes} likesBuUser={item.liked_by_user}/>
            ))}
        </div>
    </div>
}