import { Link, Outlet } from "react-router";
import "../styles/Layout.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faPlus, faClipboardList, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Layout () {
    return (
        <div className="app-container">
            <Outlet />

            <nav className="bottom-nav">
                <Link to="/"><FontAwesomeIcon icon={faHouse} size="lg" /></Link>
                <Link to="/profile"><FontAwesomeIcon icon={faUser} size="lg" /></Link>
                <Link to="/"><FontAwesomeIcon icon={faPlus} size="lg" /></Link>
                <Link to="/orders"><FontAwesomeIcon icon={faClipboardList} size="lg" /></Link>
                <Link to="/favorites"><FontAwesomeIcon icon={faHeart} size="lg" /></Link>
            </nav>
        </div>
    )
}