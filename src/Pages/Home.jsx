import React from 'react';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
// import { CartState } from '../Context/Context';


const Home = () => {
    // const {
    //     state: { productsArray },
    // } = CartState;

    return (
        <div className='Home'>
            <Filters/>
            <ProductList/>
        </div>
    )
}

export default Home
