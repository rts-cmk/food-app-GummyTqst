import { Link, Outlet } from "react-router";
import "../styles/Layout.css";


// FontAwesome setup
// npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faPlus, faClipboardList, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Layout () {
    return (
        <div className="app-container">
            {/* Page content */}
            <Outlet />
            <footer>
                <nav className="bottom-nav">
                    <svg className="nav-background-svg"  viewBox="0 0 430 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M179.588 20.677L161.5 21L144.5 0H-19V90H437V0H285.5L273.5 19L251.129 19.3995C244.21 32.2588 230.626 41 215 41C199.897 41 186.702 32.8343 179.588 20.677Z" fill="#EF2A39"/>
                        <circle cx="144" cy="41" r="41" fill="#EF2A39"/>
                        <circle cx="286" cy="41" r="41" fill="#EF2A39"/>
                    </svg>
                    <div className="nav-content">
                        <Link to="/"><FontAwesomeIcon icon={faHouse} size="lg" /></Link>
                        <Link to="/profile"><FontAwesomeIcon icon={faUser} size="lg" /></Link>

                        <Link to="/" className="nav-fab-link">
                            <FontAwesomeIcon icon={faPlus} size="lg" />
                        </Link>

                        <Link to="/orders"><FontAwesomeIcon icon={faClipboardList} size="lg" /></Link>
                        <Link to="/favorites"><FontAwesomeIcon icon={faHeart} size="lg" /></Link>
                    </div>
                </nav>
            </footer>
        </div>
    )
}