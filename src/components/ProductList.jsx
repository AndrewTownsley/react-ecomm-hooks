import React from 'react'
import ProductDetail from './ProductDetail';
import { CartState } from '../Context/Context';

const ProductList = () => {
    const { productsArray } = CartState();
    console.log(productsArray);
    return (
        <div className="product-list" >
        {
            productsArray.map((product, index) => (
               <ProductDetail 
                id={product.id} 
                key={index} 
                product={product}
                />
            ))
        }
    </div>
    )
}

export default ProductList
