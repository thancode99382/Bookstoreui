import PropTypes from "prop-types";
import { featureBooksJson } from "../json/FeatureBooksJson";

const FeatureBooksRender = ({ from, to }) => {
  return (
    <div>
      {featureBooksJson.slice(from, to).map((book, index) => (
        <div
          key={index}
          className="row"
          style={{
            marginTop: 14,
            marginRight: 0,
            border: "0.3px solid var(--bs-secondary-bg)",
            borderBottomWidth: 1,
            borderBottomColor: "var(--bs-secondary-bg)",
          }}
        >
          <div className="col-6 col-md-3 col-lg-3 col-xl-3">
            <img
              className="float-start"
              src={book.image}
              style={{ width: 78 }}
            />
          </div>
          <div className="col-6 col-md-6 col-lg-8 col-xl-8 d-xl-flex flex-column justify-content-xl-center align-items-xl-end">
            <p>{book.title}</p>
            <div className="d-xl-flex align-items-xl-center">
              {book.originalPrice && book.discountedPrice ? (
                <>
                  <p
                    className="align-items-xl-center"
                    style={{ marginRight: 22, textDecoration: "line-through" }}
                  >
                    {book.originalPrice}
                  </p>
                  <p
                    className="align-items-xl-center"
                    style={{ color: "rgb(39, 174, 97)", fontWeight: "bold" }}
                  >
                    {book.discountedPrice}
                  </p>
                </>
              ) : (
                <p
                  className="align-items-xl-center"
                  style={{ color: "rgb(39, 174, 97)", fontWeight: "bold" }}
                >
                  {book.price}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

FeatureBooksRender.propTypes = {
  from: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired,
};

export default FeatureBooksRender;
