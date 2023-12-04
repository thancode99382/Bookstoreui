import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import config from "../config";

export default function BookShow({ book, addToCart, setProduct }) {
  const [isAddToCart, setIsAddToCart] = useState(false);

  function handleIsAddCart() {
    setIsAddToCart(true);
  }

  return (
    <div className="card m-1">
      <Link
        to={config.routes.learnmore}
        onClick={() => {
          setProduct(book);
        }}
      >
        <img className="card-img-top" src={book.image} alt={book.title} />{" "}
      </Link>

      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text text-muted">{book.subtitle}</p>
        <div className="d-flex justify-content-between align-items-center">
          <p className="card-text text-success h5">{book.price}</p>

          <button
            className={"btn btn-outline-dark"}
            onClick={() => {
              addToCart(book);
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

BookShow.propTypes = {
  book: PropTypes.any.isRequired,
  addToCart: PropTypes.func.isRequired,
  setProduct: PropTypes.any.isRequired,
};
