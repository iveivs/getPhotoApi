function Favorite({ id, src, name, likes, likesBuUser }) {
    return (
        <div>
            <div className="image-box">
                <img className="image-item" src={src}></img>
                <div className="image-description">
                    <p>{name}</p>
                    <div className="likes-box">
                        <i id="material-icons" className={`material-icons ${likesBuUser ? "orange600" : " "}`}>
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
