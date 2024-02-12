import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="grey lighten-5">
            <div className="nav-wrapper">
                <h4 className="brand-logo">
                <span className="blue-text text-darken-2">Photo of the day</span>
                    
                </h4>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/history">History</Link>
                    </li>  
                    <li>
                        <Link to="/favorite">Favorites</Link>
                    </li>  
                </ul>
            </div>
        </nav>
    );
}