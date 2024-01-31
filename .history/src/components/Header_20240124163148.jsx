export default function Header() {
    return (
        <nav>
            <div className="nav-wrapper grey lighten-2">
                <a href="#" className="brand-logo" style={{color: '#ffb74d'}} >
                    Photo of the day
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {/* <li>
                        <a href="sass.html">Sass</a>
                    </li>
                    <li>
                        <a href="badges.html">Components</a>
                    </li>
                    <li>
                        <a href="collapsible.html">JavaScript</a>
                    </li> */}
                </ul>
            </div>
        </nav>
    );
}
