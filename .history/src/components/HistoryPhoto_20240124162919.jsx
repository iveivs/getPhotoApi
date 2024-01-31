import { HistoryItem } from "./HistoryItem";
export default function HistoryPhoto(props) {
    const { tempArrForHistory = []} = props

    if (!tempArrForHistory.length) {
        return <h3>Информация отсутству</h3>
    }
    console.log('props', props);
    return <div>
        <HistoryItem  />
    </div>
}