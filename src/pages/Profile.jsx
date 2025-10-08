import { useNavigate } from "react-router";

import Form from "../components/Form";
import "../styles/profile.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faGear } from '@fortawesome/free-solid-svg-icons';

import profileImg from "../assets/profile.png";

export default function Profile() {
    const navigate = useNavigate();


    return (
        <main className="profile-page">
            <div className="profile-header">
                <div className="header-top">
                    <button className="back-btn" onClick={() => navigate(-1)}>
                        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                    </button>
                    <button className="settings-btn">
                        <FontAwesomeIcon icon={faGear} size="lg" />
                    </button>
                </div>
                <div className="profile-photo">
                    <img src={profileImg} alt="" className="profile-img" />
                </div>
            </div>
            <div className="profile-body">
                <Form />
                <div className="profile-btns">
                    <button className="profile-edit">Edit profile</button>
                    <button className="profile-logout">Log out</button>
                </div>
            </div>
        </main>
    );
}