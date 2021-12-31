import React, { useState } from 'react'
import Rating from './Rating'

const Filters = () => {
    const [nextDay, setNextDay] = useState(false);
    const [outOfStock, setOutOfStock] = useState(false);

    return (
        <div className='Filters'>
            <h3>Filter Products</h3>
            <ul>
                <label htmlFor="priceAscend">
                    Price: low to high
                    <input type="radio" />
                </label>
                <label htmlFor="priceDescend">
                    Price: high to low
                    <input type="radio" />
                </label>
                <label htmlFor="nextDay">
                    Next Day Delivery
                    <input 
                        onChange={() => setNextDay(true)} 
                        type="checkbox" />
                </label>
                <label htmlFor="outOfStock">
                    Show out of stock items
                    <input 
                        onChange={() => setOutOfStock(true)} 
                        type="checkbox" />
                </label>
                <Rating />
            </ul>
        </div>
    )
}

export default Filters
