import React, {  useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartState } from '../Context/Context';

const Header = () => {
    const {
         state: {cart},
         productState: { searchQuery },
         dispatch, 
         productDispatch  
        } = CartState();
        console.log(cart);

    return (
        <div className='header'>
            <h2>Hello Hello!!</h2>
            <label htmlFor="product-search">
                Search Products
                <input 
                    onChange={(e) => {
                        productDispatch({
                            type: "FILTER_BY_SEARCH",
                            payload: e.target.value
                        })
                    }}
                    type="text" 
                    id="product-search" />
            </label>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cart">Cart{cart.length}</Link></li>  
                </ul>
            </nav>
        </div>
    )
}

export default Header
