// import { interestingBookJson } from "../json/InterestingBooksJson.jsx";
import { books } from "../../json/booksInteresting.jsx";
import PropTypes from "prop-types";
import ShowInterstingBook from "./ShowInterstingBook.jsx";

export default function InterstingBooks({ field }) {
  return (
    <>
      {books[field].map((book) => {
        return (
          <div key={book.isbn13} className="col-md-6 col-lg-4 filtr-item">
            <ShowInterstingBook book={book} />
          </div>
        );
      })}
    </>
  );
}

InterstingBooks.propTypes = {
  field: PropTypes.string.isRequired,
};
