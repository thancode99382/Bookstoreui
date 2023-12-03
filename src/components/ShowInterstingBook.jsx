import PropTypes from "prop-types";

export default function ShowInterstingBook({ book }) {
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
              <button className="btn btn-dark btn-sm" type="button">
                <i className="fa fa-eye" />
                &nbsp;Learn more
              </button>
              <button
                className="btn btn-outline-dark btn-sm ms-auto"
                type="button"
              >
                <i className="fa fa-plus" />
                &nbsp;Add to cart
              </button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

ShowInterstingBook.propTypes = {
  book: PropTypes.array.isRequired,
};
