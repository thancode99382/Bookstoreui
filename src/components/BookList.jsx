import BookShow from "./BookShow";
import PropTypes from "prop-types";

export default function BookList({ books }) {
  
  return (
    <div className="book-list row mt-5">
      {books.map((book) => (
        <div className="col-md-4" key={book.isbn13}>
          <BookShow book={book} />
        </div>
      ))}
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
};
