import PropTypes from "prop-types";

export default function BookShow({ book }) {
  return (
    <div className="card m-4">
      <img className="card-img-top" src={book.image} alt={book.title} />

      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text text-muted">{book.subtitle}</p>
        <div className="d-flex justify-content-between align-items-center">
          <p className="card-text text-success h5">{book.price}</p>

          <button className="btn btn-outline-dark">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

BookShow.propTypes = {
  book: PropTypes.any.isRequired,
};
