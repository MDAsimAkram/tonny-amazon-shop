import React from 'react';
import './Product.css'
// icon import korlam...
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // distructuring korbo jno ber ber likha na lage..

    const { img, name, seller, ratings, price } = props.product;
    // console.log(props);

    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className='product-info'>
                <h6 className='product-name'> {name}</h6>
                <p> Price:$ {price}</p>

                <p> Manufacturer: {seller}</p>
                <p> Rating: {ratings} Star</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'> 
            Add to Cart <FontAwesomeIcon icon={faShoppingCart} /> </button>
        </div>
    );
};

export default Product;