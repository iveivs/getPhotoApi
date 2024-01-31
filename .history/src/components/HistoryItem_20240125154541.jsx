function HistoryItem ({id, src}) {
    return <div>
        {/* <p>History Item</p> */}
        <div className="image-item"></div>
        <img src={src}></img>
    </div>
}

export {HistoryItem}