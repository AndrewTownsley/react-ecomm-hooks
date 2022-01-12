import { createContext, useContext, useState, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducers";
import faker from "faker";

const Cart = createContext();
faker.seed(100);

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [prodCartQuantity, setProdCartQuantity] = useState(0);

  const productsArray = [...Array(60)].map((p) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    inStock: faker.random.arrayElement([0,3,4,5,6,7,25,47,68,73,84]),
    nextDay: faker.datatype.boolean(),
    rating: faker.random.arrayElement([1,2,3,4,5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    productsArray: productsArray,
    cart: [],
    prodCartQuantity: 0,
  })

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byNextDay: false,
    byRating: 0,
    searchQuery: "",
  })


  return (
    <Cart.Provider value={{ state, dispatch, cart, setCart, productsArray, prodCartQuantity, setProdCartQuantity, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};


export default Context;