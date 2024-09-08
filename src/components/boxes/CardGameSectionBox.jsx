import React from "react";
import { motion } from 'framer-motion';
import cardsImage from '../../assets/whatHexBoxes/cardsImage.png';
import './boxesStyle.css';

const CardGameSectionBox = () => {
    return (
        <div className="card_game_section">
            <div className="card_game_section-text">
                <h3>Play the card game and</h3>
                <h3>upgarde Your characters</h3>
            </div>
            <div className="card_game_section-img">
                <img src={cardsImage} alt="cardsImage" />
            </div>
            <div className="card_game_section-archive_buttons">
                <div>
                    <motion.button className="card_game_section-archive_button"
                    whileHover={{ scale: 1.1 }} 
                    type="button" >Character store</motion.button>
                </div>
                <div>
                    <motion.button className="card_game_section-archive_button"
                    whileHover={{ scale: 1.1 }} 
                    type="button" >Your collection</motion.button>
                </div>
            </div>
            <div>
                <motion.button className="card_game_section-game_button"
                whileHover={{ scale: 1.1 }} 
                type="button" >Play the game</motion.button>
            </div>
        </div>
    )
}

export default CardGameSectionBox