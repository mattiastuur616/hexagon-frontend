import React from 'react'
//import { useNavigate } from 'react-router-dom'
import './product.css'

const Product = ({ imgUrl, title, productInfo, prize }) => {
    //const navigate = useNavigate()

    return (
        <div className='hex__product-container_book'>
            <div className='hex__product-container_book-image'>
                <img src={imgUrl} alt='bookCover' />
            </div>
            <div className='hex__product-container_book-content'>
                <div>
                    <h1>{title}</h1>
                    <p>{productInfo}</p>
                </div>
                <div className='hex__product-container_book-prize'>
                    <button type='button'>Purchase</button>
                    <p className='hex__product-container_book-prize-value'>{prize}</p>
                </div>
            </div>
        </div>
    )
}

export default Product