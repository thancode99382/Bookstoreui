import BookShow from "./BookShow";
import PropTypes from "prop-types";

export default function BookList({ books }) {
  return (
    <div className="book-list row mt-5">
      {books.map((book, index) => (
        <div className="col-md-4" key={index}>
          <BookShow book={book} />
        </div>
      ))}
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
};
