import Form from "../components/Form";
import "../styles/profile.css"

import profileImg from "../assets/profile.png";

export default function Profile() {
    return (
        <main className="profile-page">
            <div className="profile-header">
                <div className="profile-header-bg"></div>
                <div className="profile-img-wrapper">
                    <img src={profileImg} alt="" className="profile-img" />
                </div>
            </div>
            <div className="profile-content">
                <Form />
                <div className="profile-btns">
                    <button className="profile-edit">Edit profile</button>
                    <button className="profile-logout">Log out</button>
                </div>
            </div>
        </main>
    );
}