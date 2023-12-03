import { createContext, useState } from "react";
import propTypes from "prop-types";
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems([...cartItems, book]);
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.isbn13 !== id);
    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
CartProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export { CartContext, CartProvider };
