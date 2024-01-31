function HistoryItem({ id, src, name, likes }) {
    return (
        <div>
            {/* <p>History Item</p> */}
            <div className="image-box">
                <img className="image-item" src={src}></img>
                <div className="image-description">
                    <p>{name}</p>
                    <div className="likes-box">
                        <i id="material-icons" className={`material-icons ${data.liked_by_user ? "orange600" : " "}`}>
                            favorite_border
                        </i>
                        <p>{likes}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { HistoryItem };
