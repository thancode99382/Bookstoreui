import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import config from "../../config/index.js";

export default function BookShow({ book, addToCart, setProduct }) {
  const [isAddToCart, setIsAddToCart] = useState(false);

  function handleIsAddCart() {
    setIsAddToCart(true);
  }

  return (
    <div  className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-5 ">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-center text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
        <Link
          to={`${config.routes.learnmore}/${book.isbn13}`}
          onClick={() => {
            setProduct(book);
          }}
        >
          <img
            className="mx-auto"
            style={{ width: "156px", height: "150px" }}
            src={book.image}
            alt={book.title}
          />{" "}
        </Link>
      </div>
      <div className="p-6">
        <h5 style={{fontSize:'14px'}} className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        {book.title}
        </h5>
        <p style={{fontSize:'14px'}} className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
        {book.subtitle}
        </p>
      </div>
      <div className="text-lg font-semibold ml-6 ">
      {book.price}
      </div>
      <div className="p-6 pt-0">
        <button
        onClick={() => {
                    addToCart(book);
                    handleIsAddCart();
                  }}
          data-ripple-light="true"
          type="button"
          className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
         {isAddToCart ? (
               <i className="bi bi-cart-check-fill"></i>
            ) : (
              "Add to cart"
           )}
        </button>
      </div>
    </div>
    // <div className="card m-1">
    //   <Link
    //     to={`${config.routes.learnmore}/${book.isbn13}`}
    //     onClick={() => {
    //       setProduct(book);
    //     }}
    //   >
    //     <img className="card-img-top" src={book.image} alt={book.title} />{" "}
    //   </Link>

    //   <div className="card-body">
    //     <h5 className="card-title">{book.title}</h5>
    //     <p className="card-text text-muted">{book.subtitle}</p>
    //     <div className="d-flex justify-content-between align-items-center">
    //       <p className="card-text text-success h5">{book.price}</p>

    //       <button
    //         className={"btn btn-outline-dark"}
    //         onClick={() => {
    //           addToCart(book);
    //           handleIsAddCart();
    //         }}
    //       >
    //         {isAddToCart ? (
    //           <i className="bi bi-cart-check-fill"></i>
    //         ) : (
    //           "Add to cart"
    //         )}
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}

BookShow.propTypes = {
  book: PropTypes.any.isRequired,
  addToCart: PropTypes.func.isRequired,
  setProduct: PropTypes.any.isRequired,
};
