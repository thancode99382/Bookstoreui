import PropTypes from "prop-types";
export default function ShowNewBook({ newBook }) {
  return (
    <div className="card">
      <img src={newBook.image} className="card-img-top" alt={newBook.title} />
      <div className="card-body">
        <h5 className="card-title">{newBook.title}</h5>
        <p className="card-text">{newBook.subtitle}</p>
        <p className="card-text">ISBN: {newBook.isbn13}</p>
        <p className="card-text text-success">Price: {newBook.price}</p>
        <div className="d-flex">
          <a
            href={newBook.url}
            className="btn btn-outline-dark"
            style={{ marginRight: "10px" }}
          >
            More Info
          </a>
          <a
            href=""
            className="btn btn-outline-dark"
            style={{ marginLeft: "10px" }}
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}

ShowNewBook.propTypes = {
  newBook: PropTypes.any.isRequired,
};
