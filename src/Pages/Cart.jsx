import React, { useState, useEffect, useContext } from 'react'
import CartItem from '../components/CartItem';
import { CartState } from '../Context/Context';

const Cart = () => {
    const [total, setTotal] = useState("0");
    const {state: {
            cart,
            setCart,    
            dispatch,
            prodCartQuantity
        }} = CartState();
    console.log(prodCartQuantity);

    useEffect(() => {
        setTotal(cart.reduce((a, b) => a + Number(b.price) * Number(b.qty), 0))
    }, [cart])


    return (    
        <div className='cart'>
            <h3>Cart</h3>
            <h4>{cart.length} Items</h4>
            <h5>Total: ${total}</h5>
            <div className="product-container">
                {
                    cart.map((product, index) => (
                        <CartItem 
                            prodCartQuantity={prodCartQuantity}
                            key={index} 
                            product={product} 
                            cart={cart} 
                            setCart={setCart} />
                    ))
                }
            </div>
        </div>
    )
}

export default Cart
