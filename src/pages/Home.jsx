import { useEffect, useState } from "react";
import burgerData from "../API/api.json";

// Components
import Search from "../components/Search";
import FoodCard from "../components/FoodCard";

// Images
import profileImg from "../assets/profile.png";

// Styles
import "../styles/Home.css";

export default function Home() {
    const [burgers, setBurgers] = useState([]);

    useEffect(() => {
        setBurgers(burgerData.burgers);
    }, [])


    return (
        <section className="home-page">
            <div className="header">
                <div className="header-text">
                    <h1>Foodgo</h1>
                    <p>Order your favourite food!</p>
                </div>
                <div className="header-img">
                    <img src={profileImg} alt="" />
                </div>
            </div>
            <Search></Search>
            <div className="food-grid">
                {burgers.map((burger) => (
                    <FoodCard key={burger.id} burger={burger} />
                ))}
            </div>
        </section>
    );
}