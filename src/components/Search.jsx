import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSliders } from '@fortawesome/free-solid-svg-icons';

import "../styles/Search.css";

export default function Search() {
    return (
        <>
            <form action="" className="search-bar-container">
                <div className="search-input-wrapper">
                    <FontAwesomeIcon icon={faSearch} size="lg" className="search-icon" />
                    <input type="search" placeholder="Search" className="search-input" />
                </div>
                <button className="filter-btn">
                    <FontAwesomeIcon icon={faSliders} size="2x" className="filter-icon" />
                </button>
            </form>
        </>
    )
}