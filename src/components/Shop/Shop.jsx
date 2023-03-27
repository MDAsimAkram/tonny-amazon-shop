import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    // akhn ami data gula k load korbo...
    const [products, setProducts] = useState([]);

    const [cart ,setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

     // event handler add korbo...
     const handleAddToCart = (product) =>{
    //  cart gula k add korbo..

    const newCart = [...cart ,product] ;
    setCart (newCart);
    }
    return (
        <div className='shop-container'>
            {/* ei div a caard gula thakbe */}

            <div className='products-container'>
                {/* product gula k daynamic vabe dekhabo */}

                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}

                        //  handleAddToCart k product er moddhe pathalam jno product k call korle oi  handleAddToCart k pabe..
                        handleAddToCart = {handleAddToCart}
                    > </Product>)
                }
            </div>

            {/* ei div a order summery thakbe jaa 5 vager 1 vaag jaigaa nibe.. */}
            <div className='cart-container'>
                <h4> Order Summary</h4>
                <p> Selected Items: {cart.length}</p>
            </div>

        </div>
    );
};

export default Shop;