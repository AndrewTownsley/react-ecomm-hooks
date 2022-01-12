import React from 'react'
import ProductDetail from './ProductDetail';
import { CartState } from '../Context/Context';

const ProductList = () => {
    const { state: {productsArray },
            productState: { sort, byStock, byNextDay, byRating, searchQuery }
            } = CartState();


    const transformProducts = () => {
        let sortedProducts = productsArray;

        if(sort) {
            sortedProducts = sortedProducts.sort((a,b) => 
                sort === "lowToHigh" ? a.price - b.price : b.price - a.price
            )
        }

        // if(!byStock) {
        //     sortedProducts = sortedProducts.filter((product) => product.inStock)
        // }

        if(byNextDay) {
            sortedProducts = sortedProducts.filter((product) => product.nextDay)
        }

        if(byRating) {
            sortedProducts = sortedProducts.filter((product) => product.rating === byRating)
        }

        if(searchQuery) {
            sortedProducts = sortedProducts.filter((product) => 
                product.name.toLowerCase().inclues(searchQuery)
            )
        }
        return sortedProducts;
    }

    return (
            <div className="product-list" >
        {
            transformProducts().map((product, index) => (
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
