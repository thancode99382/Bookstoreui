import { createContext } from "react";
import propTypes from "prop-types";
import { useState } from "react";
const CardProductContext = createContext();
function CardProductProvider({ children }) {
  const [cardProduct, setCardProduct] = useState();
  function setProduct(book) {
    setCardProduct(book);
  }
  return (
    <CardProductContext.Provider value={{ cardProduct, setProduct }}>
      {children}
    </CardProductContext.Provider>
  );
}
CardProductProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export { CardProductProvider, CardProductContext };
