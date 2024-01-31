import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="deep-orange lighten-2">
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

                </ul>
            </div>
        </nav>
    );
}
