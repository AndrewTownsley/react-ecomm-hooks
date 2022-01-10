import React, { useState, useEffect } from 'react'
import Rating from './Rating'
import { CartState } from '../Context/Context';

const Filters = () => {
    const { state: { cart, setCart }} = CartState();
    const [rate, setRate] = useState(3);
    // const [nextDay, setNextDay] = useState(false);
    // const [outOfStock, setOutOfStock] = useState(false);

    // useEffect(() => {
    //     const sortProductPrice = () => {
    //         setCart(cart.sort((a,b) => a.price - b.price))
    //     }
    //     sortProductPrice();
    // }, [cart, setCart])

    return (
        <div className='Filters'>
            <h3>Filter Products</h3>
            <ul>
                <label htmlFor="priceAscend">
                    Price: low to high
                    <input name="price-sort" type="radio" />
                </label>
                <label htmlFor="priceDescend">
                    Price: high to low
                    <input name="price-sort" type="radio" />
                </label>
                <label htmlFor="nextDay">
                    Next Day Delivery
                    <input 
                        // onChange={() => setNextDay(true)} 
                        type="checkbox" />
                </label>
                <label htmlFor="outOfStock">
                    Show out of stock items
                    <input 
                        // onChange={() => setOutOfStock(true)} 
                        type="checkbox" />
                </label>
                <Rating
                    onClick={(i) => setRate(i + 1)}
                    rate={rate}
                    setRate={setRate}
                />
            </ul>
        </div>
    )
}

export default Filters
