import React, { useState, useEffect } from 'react'
import { CartState } from '../Context/Context';


const CartItem = ({ product }) => {
    const { cart, setCart, prodCartQuantity, setProdCartQuantity } = CartState();

    return (
        <div>
            <article className='product-card'>
                {/* <img src={product.image} alt={product.item} /> */}
                <h5>{product.name}</h5>
                <p>${product.price}</p>
                {
                    product.nextDay ? <p><em>Next Day Shipping</em></p> : null
                }
                <p>Rating: {product.rating}/5</p>
            </article>
            <section>
                <div>

                    Quantity: {cart.length}
                        <select name="productQuantity" id="productQuantity">
                           {
                               [...Array(product.inStock).keys()].map((x) => (
                                   <option key={x + 1}>{x + 1}</option>
                               ))
                           }
                        </select>
                </div>
                <button onClick={() => setCart(cart.filter((c) => c.id !== product.id))}>Remove Item</button>
            </section>
        </div>
    )
}

export default CartItem
