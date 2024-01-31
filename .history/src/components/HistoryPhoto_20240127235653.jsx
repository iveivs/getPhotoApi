import { HistoryItem } from "./HistoryItem";
export default function HistoryPhoto(props) {
    const { tempArrForHistory = []} = props
    if (!tempArrForHistory.length) {
        return <h5>Информация отсутствует</h5>
    }
    console.log('test 1',tempArrForHistory[0]);
    tempArrForHistory.reverse()
    console.log('test 2',tempArrForHistory[0]);
    return <div className="history">
        <h4 className="title-name">History:</h4>
        <div className="history__wrapper">
            {tempArrForHistory.map( item => (
                <HistoryItem  key={item.id} src={item.urls.small} name={item.user.name} likes={item.likes} likesBuUser={item.liked_by_user}/>
            ))}
        </div>
        
        {/* <HistoryItem  /> */}
    </div>
}