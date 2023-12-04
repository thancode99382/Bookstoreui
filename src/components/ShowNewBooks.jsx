import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import config from "../config";
import { CardProductContext } from "./CardProductProvider";
import { useContext } from "react";
export default function ShowNewBook({ newBook, addToCart }) {
  const [isAddToCart, setIsAddToCart] = useState(false);
  const { setProduct } = useContext(CardProductContext);
  function handleIsAddCart() {
    setIsAddToCart(true);
  }
  return (
    <div className="card">
      <img src={newBook.image} className="card-img-top" alt={newBook.title} />
      <div className="card-body">
        <h5 className="card-title">{newBook.title}</h5>
        <p className="card-text">{newBook.subtitle}</p>
        <p className="card-text">ISBN: {newBook.isbn13}</p>
        <p className="card-text text-success">Price: {newBook.price}</p>
        <div className="d-flex">
          <Link
            className="btn btn-outline-dark"
            to={config.routes.learnmore}
            onClick={() => {
              setProduct(newBook);
            }}
          >
            {" "}
            More Info
          </Link>
          <button
            href=""
            className="btn btn-outline-dark"
            style={{ marginLeft: "10px" }}
            onClick={() => {
              addToCart(newBook);
              handleIsAddCart();
            }}
          >
            {isAddToCart ? (
              <i className="bi bi-cart-check-fill"></i>
            ) : (
              "Add to cart"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

ShowNewBook.propTypes = {
  newBook: PropTypes.any.isRequired,
  addToCart: PropTypes.any.isRequired,
};
