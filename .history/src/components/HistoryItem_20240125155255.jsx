function HistoryItem ({id, src, name}) {
    return <div>
        {/* <p>History Item</p> */}
        <div className="image-box">
            <img src={src}></img>
            <p>{name}</p>
        </div>
        
    </div>
}

export {HistoryItem}