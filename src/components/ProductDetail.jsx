import { CartState } from '../Context/Context';

const ProductDetail = ({ product }) => {
  const {
      state: { cart },
      dispatch,
  } = CartState();

    return (
        <article className='product-card'>
          <h5>{product.name}</h5>
          <p>${product.price}</p>
          {
            product.nextDay ? <p>Next Day Shipping</p> : null
          }
          <p>Rating: {product.rating}/5</p>
                {cart.some(p => p.id === product.id) ?
                  (
                  <button
                  // className="add remove" 
                  onClick={() => 
                    dispatch({
                      type: 'REMOVE_FROM_CART',
                      payload: product})}
                  >
                    Remove from Cart
                  </button>
                    ) 
                    : 
                    (
                  <button 
                    className="add" 
                    onClick={() => 
                        dispatch({
                          type: 'ADD_TO_CART',
                          payload: product})}
                  >
                    Add to Cart
                  </button>
                )}
    </article>
    )
}

export default ProductDetail
