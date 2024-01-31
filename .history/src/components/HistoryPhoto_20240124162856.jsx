import { HistoryItem } from "./HistoryItem";
export default function HistoryPhoto(props) {
    const { tempArrForHistory = []} = props

    if (!tempArrForHistory.length) {
        return
    }
    console.log('props', props);
    return <div>
        <HistoryItem  />
    </div>
}