import React, {  useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartState } from '../Context/Context';

const Header = () => {
    const { cart, setCart} = CartState();

    return (
        <div className='header'>
            <h2>Hello Hello!!</h2>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cart">Cart</Link></li>  
                </ul>
            </nav>
        </div>
    )
}

export default Header