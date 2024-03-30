import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import paymentSuccessHex from '../../assets/PaymentSuccessfulHex.png';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import './paymentForm.css';

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            color: "#fff",
            iconColor: "#c4f0ff",
            fontSize: "16px",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSmoothing: "antialiased",
            "::placeholder": { color: "#87bbfd" },
            ":-webkit-autofill": { color: "#fce883" }
        },
        invalid: {
            color: "#ffc7ee",
            iconColor: "#ffc7ee"
        }
    }
}

export default function PaymentForm() {

    useEffect(() => {
        document.title = "Purchase - The Hexagon Story";
    })

    const navigate = useNavigate()

    function moveBackToStore() {
        localStorage.removeItem("chapter");
        localStorage.removeItem("title");
        localStorage.removeItem("prize");
        localStorage.removeItem("imgUrl");

        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate("/store");
    }

    function moveToLibrary() {
        localStorage.removeItem("chapter");
        localStorage.removeItem("title");
        localStorage.removeItem("prize");
        localStorage.removeItem("imgUrl");

        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate("/library");
    }

    const [success, setSuccess] = useState(false);

    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        if (!error) {
            try {
                const {id} = paymentMethod
                const response = await axios.post("http://localhost:4000/payment", {
                    amount: 100,
                    id
                })

                if (response.data.success) {
                    await axios.post(`http://localhost:8080/api/purchase?email=${localStorage.getItem("user")}&chapter=${localStorage.getItem("chapter")}`)
                    .then(
                        localStorage.removeItem("chapter"),
                        localStorage.removeItem("title"),
                        localStorage.removeItem("prize"),
                        localStorage.removeItem("imgUrl"),
                        console.log("Successful payment"),
                        setSuccess(true)
                    ).catch(error => {
                        console.log(error)
                    })
                }
            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }

    return (
        <>
        {!success ?
        <div className='gradient__bg'>
            <div className='hex__payment'>
                <div className='hex__payment-container_book'>
                    <div className='hex__payment-container_book-image'>
                        <img src={localStorage.getItem("imgUrl")} alt='bookCover' />
                    </div>

                    <div className='hex__payment-container_book-content'>
                        <div>
                            <p>The Book: "Hexagon: {localStorage.getItem("title")}"</p>
                            <p>The Prize: {localStorage.getItem("prize")}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <form onSubmit={handleSubmit}>
                        <div className='hex__payment-form-header'>
                            <h1>Enter Your card data</h1>
                        </div>

                        <fieldset style={{background: "#819efc"}}  className='hex__payment-form-group'>
                            <div className='hex__payment-form-row'>
                                <CardElement options={CARD_OPTIONS} />
                            </div>
                        </fieldset>

                        <div className='hex__payment-btn'>
                            <motion.button 
                            whileHover={{ scale: 1.1 }} 
                            onClick={handleSubmit}>Pay</motion.button>
                        </div>

                        <div className='hex__payment-btn'>
                            <motion.button 
                            whileHover={{ scale: 1.1 }} 
                            onClick={moveBackToStore}>Cancel</motion.button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        :
        <div className='gradient__bg'>
            <div className='hex__payment-result'>
                <h1 className='gradient__text'>Congratulations, You have bought a new Book!</h1>

                <div className='hex__payment-result-image'>
                    <img src={paymentSuccessHex} alt='paymentSuccessHex' />
                </div>

                <div className='hex__payment-result-btns'>
                    <div className='hex__payment-btn'>
                        <motion.button 
                        whileHover={{ scale: 1.1 }} 
                        onClick={moveToLibrary}>
                            Go to Your Library
                            </motion.button>

                        <motion.button 
                        whileHover={{ scale: 1.1 }} 
                        onClick={moveBackToStore}>
                            Back to Store
                            </motion.button>
                    </div>
                </div>
            </div>
        </div>
        }
        </>
    )
}
