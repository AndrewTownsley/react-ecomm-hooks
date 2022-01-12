import Rating from './Rating'
import { useState } from "react";

import { CartState } from '../Context/Context';

const Filters = () => {
    const { productState: {
        sort,
        byStock,
        byNextDay,
        byRating,
    }, productDispatch } = CartState();

    console.log("sort: ",sort);
    console.log("byStock: ", byStock);
    console.log("byNextDay: ", byNextDay);
    console.log("byRating: ", byRating);

    return (
        <div className='Filters'>
            <h3>Filter Products</h3>
            <ul>
                <label htmlFor="priceAscend">
                    Price: low to high
                    <input onChange={() => 
                        productDispatch({
                            type: "SORT_BY_PRICE",
                            payload: "lowToHigh",
                        })
                    }
                        name="sortGroup"
                        id="radioSortLow"
                        type="radio" 
                        checked={sort === "lowToHigh" ? true : false}
                    />
                </label>
      
                <label htmlFor="priceDescend">
                    Price: high to low
                    <input onChange={() => 
                        productDispatch({
                            type: "SORT_BY_PRICE",
                            payload: "highToLow",
                        })
                    }
                        name="sortGroup"
                        id="radioSortHigh" 
                        type="radio"
                        checked={sort === "highToLow" ? true : false} 
                    />
                </label>
                <label htmlFor="nextDay">
                    Next Day Delivery
                    <input 
                        onClick={() => 
                            productDispatch({
                                type: "FILTER_BY_DELIVERY"
                            })
                        }
                        type="checkbox" 
                        checked={byNextDay}
                    />
                </label>
                <label htmlFor="outOfStock">
                    Show out of stock items
                    <input 
                        onChange={() => 
                            productDispatch({
                                type: "FILTER_BY_STOCK"
                            })
                        }
                        type="checkbox" 
                        checked={byStock}
                    />
                </label>
                <label htmlFor="rating">Rating: </label>
                <Rating
                    rating={byRating}
                    onClick={(i) => 
                        productDispatch({
                            type: "FILTER_BY_RATING",
                            payload: i + 1,
                    })}
                />
                <button onClick={() => 
                    productDispatch({
                        type: "CLEAR_FILTERS",
                    })
                }>Clear Filters
                </button>
            </ul>
        </div>
    )
}

export default Filters
