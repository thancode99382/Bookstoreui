import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { CartContext } from "../Cart/CartContext.jsx";
import config from "../../config/index.js";
import { CardProductContext } from "../Cart/CardProductProvider.jsx";
export default function ShowInterstingBook({ book }) {
  const { addToCart } = useContext(CartContext);
  const { setProduct } = useContext(CardProductContext);
  const [isAddToCart, setIsAddToCart] = useState(false);

  function handleIsAddCart() {
    setIsAddToCart(true);
  }

  return (
    <div>
      <>
        <div>
          <div className="card border-dark">
            <div className="card-header bg-success text-light">
              <h5 className="m-0">{book.title}</h5>
            </div>
            <img
              className="img-fluid card-img w-100 d-block rounded-0"
              src={book.image}
            />
            <div className="card-body">
              <p className="card-text" style={{ paddingTop: 0 }}>
                {book.summary}
              </p>
            </div>
            <div className="d-flex card-footer">
              <a
                href={`${config.routes.learnmore}/${book.isbn13}`}
                onClick={() => {
                  setProduct(book);
                }}
                className="btn btn-dark btn-sm"
              >
                <i className="fa fa-eye" />
                &nbsp;Learn more
              </a>

              <button
                className="btn btn-outline-dark btn-sm ms-auto"
                type="button"
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
      </>
    </div>
  );
}

ShowInterstingBook.propTypes = {
  book: PropTypes.any.isRequired,
};
