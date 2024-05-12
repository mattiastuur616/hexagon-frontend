import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './product.css';

const Product = ({ imgUrl, title, productInfo, prize, chapter }) => {
    const navigate = useNavigate()

    function moveToPayment() {
        localStorage.setItem("chapter", chapter);
        localStorage.setItem("title", title);
        localStorage.setItem("prize", prize);
        localStorage.setItem("imgUrl", imgUrl);

        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate("/payment");
    }

    function moveToLibrary() {
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate("/library");
    }

    function ShowOptions() {
        const [purchased, setPurchased] = useState(false);

        React.useEffect(() => {
            axios.get(`http://localhost:8080/api/isPurchased?email=${localStorage.getItem("user")}&chapter=${chapter}`)
            .then(res => {
                setPurchased(res.data)
            }).catch(error => {
                console.log(error)
            });
        })

        if (purchased === true) {
            return (
                <div className='hex__product-container_book-prize'>
                    <motion.button 
                    whileHover={{ scale: 1.1 }} 
                    type='button' 
                    onClick={moveToLibrary}>Go to library</motion.button>

                    <p className='hex__product-container_book-prize-value'>{prize}</p>
                </div>
            )
        } else {
            return (
                <div className='hex__product-container_book-prize'>
                    <motion.button 
                    whileHover={{ scale: 1.1 }} 
                    type='button' 
                    onClick={moveToPayment}>Purchase</motion.button>

                    <p className='hex__product-container_book-prize-value'>{prize}</p>
                </div>
            )
        }
    }

    return (
        <div className='hex__product-container_book'>
            <div className='hex__product-container_book-image'>
                <img src={imgUrl} alt='bookCover' />
            </div>
            
            <div className='hex__product-container_book-content'>
                <div>
                    <p>Chapter {chapter}</p>
                    <h1>{title}</h1>
                    <p>{productInfo}</p>
                </div>
                <ShowOptions />
            </div>
        </div>
    )
}

export default Product