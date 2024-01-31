function HistoryItem ({id, src}) {
    return <div>
        {/* <p>History Item</p> */}
        <div className="image-item">
        <img src={src}></img>
        <p></p>
        </div>
        
    </div>
}

export {HistoryItem}