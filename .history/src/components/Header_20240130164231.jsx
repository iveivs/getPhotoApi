import { Link } from "react-router-dom";
function Header() {
    return (
        <nav className="deep-orange lighten-2">
            <div className="nav-wrapper">
                <h4 className="brand-logo">
                    React Movies
                </h4>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>    

                </ul>
            </div>
        </nav>
    );
}
export { Header };
