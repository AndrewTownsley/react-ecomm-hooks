import React from 'react'
import ProductDetail from './ProductDetail';
import { CartState } from '../Context/Context';

const ProductList = () => {
    const { productsArray } = CartState();
    return (
            
            <div className="product-list" >
        {
            productsArray.map((product, index) => (
                <ProductDetail 
                id={product.id} 
                key={product.id} 
                product={product}
                />
                ))
            }
    </div>
    )
}

export default ProductList
