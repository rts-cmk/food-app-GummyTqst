import { useNavigate, useParams } from "react-router";
import burgerData from "../API/api.json";
import { useEffect, useState } from "react";
import "../styles/BurgerInfo.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function BurgerInfo() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [burger, setBurger] = useState(null)
    const [spice, setSpice] = useState(0)
    const [portion, setPortion] = useState(1)

    useEffect(() => {
        const foundBurger = burgerData.burgers.find(burger => burger.id === parseInt(id))
        setBurger(foundBurger)
    }, [id])

    if (!burger) {
        return <p>Burger not found</p>
    }

    return (
        <section className="burger-info-page">
            <button className="back-btn" onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faArrowLeft} size="lg" />
            </button>

            <img src={burger.img} alt={burger.shortName} className="burger-img" />

            <div className="burger-info">
                <h2 className="burger-title">{burger.shortName} {burger.extraName}</h2>
                <p className="burger-rating">{burger.rating} - {burger.time} mins</p>
                <p className="burger-desc">{burger.description}</p>
            </div>

            <div className="burger-options">
                <div className="spice-options">
                    <label className="spice-label">Spice</label>
                    <input type="range" min="1" max="5" value={spice} onChange={(e) => setSpice(e.target.value)} className="spice-slider" />
                    <div className="spice-text">
                        <span className="spice-mild">Mild</span>
                        <span className="spice-hot">Hot</span>
                    </div>
                </div>

                <div className="portion-options">
                    <button onClick={() => setPortion((p) => Math.max(1, p - 1))}>-</button>
                    <span>{portion}</span>
                    <button onClick={() => setPortion((p) => Math.max(1, p + 1))}>+</button>
                </div>
            </div>

            <div className="burger-footer">
                <span className="burger-price">{burger.price}</span>
                <button className="burger-order">order now</button>
            </div>
        </section>
    )
}

