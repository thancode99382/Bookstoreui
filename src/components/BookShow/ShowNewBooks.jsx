import PropTypes from "prop-types";
import config from "../../config/index.js";
import { CardProductContext } from "../Cart/CardProductProvider.jsx";
import { useContext } from "react";

export default function ShowNewBook({ newBook, addToCart }) {
  const { setProduct } = useContext(CardProductContext);
  return (
    <div className="flex font-sans bg-white rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
      <div className="flex-none w-56 relative">
        <img
          style={{ height: 296 }}
          src={newBook.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
      </div>
      <form className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto font-medium text-slate-900">
            {newBook.title}
          </h1>
          <div
            className="w-full flex-none mt-2 order-1 text-3xl font-bold "
            style={{ color: "#2969ED" }}
          >
            {newBook.price}
          </div>
        </div>
        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200"></div>
        <div className="flex space-x-4 mb-5 text-sm font-medium">
          <div className="flex-auto flex space-x-4">
            <a
              className="h-10 px-5 font-semibold rounded-full text-white flex items-center justify-center  "
              style={{ background: "#2969ED" }}
              type="submit"
              href={`${config.routes.learnmore}/${newBook.isbn13}`}
              onClick={() => {
                setProduct(newBook);
              }}
            >
              More infor
            </a>
            <button
              className="h-10 px-8 font-semibold rounded-full border border-slate-200 text-slate-900"
              type="button"
              onClick={() => {
                addToCart(newBook);
              }}
            >
              <i className="bi bi-cart-check-fill"></i>
            </button>
          </div>
          <button
            className="flex-none flex items-center justify-center w-9 h-9 rounded-full text-violet-600 bg-violet-50"
            type="button"
            aria-label="Like"
          >
            <svg width={20} height={20} fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

ShowNewBook.propTypes = {
  newBook: PropTypes.any.isRequired,
  addToCart: PropTypes.any.isRequired,
};
