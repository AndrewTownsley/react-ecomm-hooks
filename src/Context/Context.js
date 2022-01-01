import { createContext, useContext, useState, useReducer } from "react";
// import { cartReducer } from "./Reducers";
import faker from "faker";

const Cart = createContext();
faker.seed(100);

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);

  const products = [...Array(20)].map((p) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    inStock: faker.random.arrayElement([0,3,4,5,6,7]),
    nextDay: faker.datatype.boolean(),
    rating: faker.random.arrayElement([1,2,3,4,5]),
  }));

  // const [state, dispatch] = useReducer(cartReducer, {
  //   productsArray: productsArray,
  //   cart: [],
  // })

  const [productsArray] = useState(products);



  return (
    <Cart.Provider value={{ cart, setCart, productsArray }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;