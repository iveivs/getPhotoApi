import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="grey darken-1">
            <div className="nav-wrapper">
                <h4 className="brand-logo">
                    Photo of the day
                </h4>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/history">History</Link>
                    </li>  
                    <li>
                        <Link to="/history">Favorites</Link>
                    </li>  
                </ul>
            </div>
        </nav>
    );
}
