import { HistoryItem } from "./HistoryItem";
export default function HistoryPhoto(props) {
    const { tempArrForHistory = []} = props
    console.log('');
    if (!tempArrForHistory.length) {
        return <h5>Информация отсутствует</h5>
    }
    console.log('props', props);
    return <div>
        <HistoryItem  />
    </div>
}