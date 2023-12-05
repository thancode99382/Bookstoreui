import { useState } from "react";
import PropTypes from "prop-types";

export default function Pagination({ onSubmit, totalElements, term }) {
  // const totalPages = Math.ceil(totalElements / 10);
  const [currentPage, setCurrentPage] = useState(1);
  // const [maxPageLimit, setMaxPageLimit] = useState(totalPages);
  // const [minPageLimit, setMinPageLimit] = useState(0);
  const [isLoading, setIsloading] = useState(false);

  console.log(totalElements);

  async function onPageChange(pageNumber) {
    setCurrentPage(pageNumber);
    setIsloading(true);
    await onSubmit(term, pageNumber);
    setIsloading(false);
  }

  async function onPrevClick() {
    const newCurrentPage = currentPage - 1;
    setCurrentPage(newCurrentPage);
    setIsloading(true);
    await onSubmit(term, newCurrentPage);
    setIsloading(false);
  }

  async function onNextClick() {
    const newCurrentPage = currentPage + 1;
    setCurrentPage(newCurrentPage);
    setIsloading(true);
    await onSubmit(term, newCurrentPage);
    setIsloading(false);
  }

  return (
    <div className="row" style={{ marginTop: 26 }}>
      <div className="col">
        <div id="pagination" className="d-flex justify-content-center">
          <button
            className={`pagination-item ${isLoading ? "disabled" : ""}`}
            onClick={onPrevClick}
          >
            <img src="/assets/img/icon_arrow-left.svg" />
            <span>Previos</span>
          </button>

          <button
            className={`pagination-item ${isLoading ? "disabled" : ""}`}
            onClick={onNextClick}
          >
            <span>Next</span>
            <img src="/assets/img/icon_arrow-right.svg" />np
          </button>
        </div>
        <div className="col text-center">
          <p className={`h4 ${isLoading && "text-muted"}`}>
            current page {currentPage}
          </p>
        </div>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  totalElements: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  term: PropTypes.string.isRequired,
};
