import { createContext, useEffect } from "react";
import propTypes from "prop-types";
import { useState } from "react";
const CardProductContext = createContext();

function CardProductProvider({ children }) {
  const [cardProduct, setCardProduct] = useState({});

  useEffect(() => {
    const storedProduct = localStorage.getItem("cardProduct");
    if (storedProduct) {
      setCardProduct(JSON.parse(storedProduct));
    }
  }, []);

  function setProduct(book) {
    setCardProduct(book);
    localStorage.setItem("cardProduct", JSON.stringify(book));
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
