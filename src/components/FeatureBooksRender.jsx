import PropTypes from "prop-types";
import ShowNewBook from "./ShowNewBooks";

const FeatureBooksRender = ({ newBooks }) => {
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
          <ShowNewBook newBook={newBook} />
        </div>
      ))}
    </div>
  );
};

FeatureBooksRender.propTypes = {
  newBooks: PropTypes.array.isRequired,
};

export default FeatureBooksRender;
