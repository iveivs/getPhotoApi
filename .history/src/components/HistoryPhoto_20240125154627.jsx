import { HistoryItem } from "./HistoryItem";
export default function HistoryPhoto(props) {
    const { tempArrForHistory = []} = props
    console.log('tempArrForHistory from HistoryPhoto', tempArrForHistory);
    if (!tempArrForHistory.length) {
        return <h5>Информация отсутствует</h5>
    }
    console.log('props', props);
    return <div className="history">
        <h4>History:</h4>
        <div className="history__wrapper">
            {tempArrForHistory.map( item => (
                <HistoryItem  key={item.id} src={item.urls.small} name={}/>
            ))}
        </div>
        
        {/* <HistoryItem  /> */}
    </div>
}