import PropTypes from "prop-types";
import ShowNewBook from "./ShowNewBooks";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const FeatureBooksRender = ({ newBooks }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1rem",
      }}
    >
      {newBooks.map((newBook) => (
        <div key={newBook.isbn13}>
          <ShowNewBook newBook={newBook} addToCart={addToCart} />
        </div>
      ))}
    </div>
  );
};

FeatureBooksRender.propTypes = {
  newBooks: PropTypes.array.isRequired,
};

export default FeatureBooksRender;
