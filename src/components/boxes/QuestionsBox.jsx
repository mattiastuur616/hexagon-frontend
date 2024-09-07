import React from "react";
import { motion } from 'framer-motion';
import questionMarks from '../../assets/whatHexBoxes/questionMarks.png';
import './boxesStyle.css';

const QuestionsBox = () => {
    return (
        <div className="questions_section">
            <div className="questions_section-text">
                <h3>Have You read enough?</h3>
                <h3>Challenge Yourself to asnwer the questions to earn Lore Points</h3>
            </div>
            <div className="questions_section-img">
                <img src={questionMarks} alt="questionMarks" />
            </div>
            <div>
                <motion.button className="questions_section-button"
                whileHover={{ scale: 1.1 }} 
                type="button" >The Hexagon Daily Question Box</motion.button>
            </div>
        </div>
    )
}

export default QuestionsBox