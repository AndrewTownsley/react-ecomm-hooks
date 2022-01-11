import Rating from './Rating'
import { CartState } from '../Context/Context';

const Filters = () => {
    const { productState: {
        byStock,
        byNextDay,
        byRating,
        searchQuery,
    }, productDispatch } = CartState();

    console.log(byRating);

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
                        type="checkbox" />
                </label>
                <label htmlFor="outOfStock">
                    Show out of stock items
                    <input 
                        type="checkbox" />
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
            </ul>
        </div>
    )
}

export default Filters
