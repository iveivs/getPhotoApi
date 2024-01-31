function HistoryItem({ id, src, name, likes }) {
    return (
        <div>
            {/* <p>History Item</p> */}
            <div className="image-box">
                <img className="image-item" src={src}></img>
                <p>{name}</p>
                <div className="likes-box">
                    <i id="material-icons" class="material-icons">
                        favorite_border
                    </i>
                    <p>{likes}</p>
                </div>
            </div>
        </div>
    );
}

export { HistoryItem };
