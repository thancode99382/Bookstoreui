import BookShow from "./BookShow";
import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { CardProductContext } from "./CardProductProvider";

export default function BookList({ books }) {
  const { addToCart } = useContext(CartContext);
  const { setProduct } = useContext(CardProductContext);
  return (
    <div className="book-list row mt-5">
      {books.map((book) => (
        <div className="col-md-4" key={book.isbn13}>
          <BookShow book={book} addToCart={addToCart} setProduct={setProduct} />
        </div>
      ))}
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
};
