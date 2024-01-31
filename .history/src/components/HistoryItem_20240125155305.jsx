function HistoryItem ({id, src, name}) {
    return <div>
        {/* <p>History Item</p> */}
        <div className="image-box">
            <img className="image-item" src={src}></img>
            <p>{name}</p>
        </div>
        
    </div>
}

export {HistoryItem}