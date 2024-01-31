function HistoryItem({ id, src, name, likes }) {
    return (
        <div>
            {/* <p>History Item</p> */}
            <div className="image-box">
                <img className="image-item" src={src}></img>
                .image
            </div>
        </div>
    );
}

export { HistoryItem };
