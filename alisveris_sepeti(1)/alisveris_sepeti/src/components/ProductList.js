import React from 'react'
import Product from './Product';
import products from '../products.json';
import { Link } from "react-router-dom";
function ProductList({ basket, setBasket }) {
    return (

        <div className='productContainer'>
            <div className='productBoxs'>

                {
                    products.map(product => (
                        <Product key={product.id} basket={basket} setBasket={setBasket} product={product} />
                    ))
                }

            </div>

        </div>

    )
}

export default ProductList