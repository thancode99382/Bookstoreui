import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../Cart/CartContext.jsx";
import config from "../../config/index.js";
import { CardProductContext } from "../Cart/CardProductProvider.jsx";
export default function ShowInterstingBook({ book }) {
  const { addToCart } = useContext(CartContext);
  const { setProduct } = useContext(CardProductContext);
  return (
    <div className="flex font-sans bg-white rounded-xl bg-clip-border text-gray-700 shadow-md">
      <div className="flex-none w-48 relative">
        <img
          src={book.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <form className="flex-auto p-2">
        <div className="flex flex-wrap">
          <h1
            style={{ fontSize: "14px", marginRight: "50px" }}
            className=" font-semibold text-slate-900"
          >
            {book.title}
          </h1>
          <div
            style={{ fontSize: "14px" }}
            className="text-lg font-semibold text-slate-500"
          >
            {book.price}
          </div>
        </div>
        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200"></div>
        <div className="flex space-x-4 mb-6 text-sm font-medium">
          <div className="flex-auto flex space-x-4">
            <a
            
            href={`${config.routes.learnmore}/${book.isbn13}`}
                        onClick={() => {
                          setProduct(book);
                        }}
                        style={{fontSize:'13px' ,display:'flex' , alignItems:'center'}}
              className="h-10 px-6 font-semibold rounded-md bg-black text-white"
              type="submit"
            >
              More Infor
            </a>
            <button
              onClick={() => {
                addToCart(book);
              }}
              className="h-10 px-2 font-semibold rounded-md border border-slate-200 text-slate-900"
              type="button"
            >
              <i className="bi bi-cart-check-fill"></i>
            </button>
          </div>
          <button
            className="flex-none flex items-center justify-center"
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

    // <div>
    //   <>
    //     <div>
    //       <div className="card">

    //         <img
    //           className="img-fluid card-img w-100 d-block rounded-0"
    //           src={book.image}
    //         />
    //         <div>
    //           <h5 className="m-2  ">{book.title}</h5>
    //         </div>
    //         <div className="card-body">
    //           <p className="card-text" style={{ paddingTop: 0  }}>
    //             {book.summary}
    //           </p>
    //         </div>
    //         <div className="d-flex card-footer">
    //           <a
    //             href={`${config.routes.learnmore}/${book.isbn13}`}
    //             onClick={() => {
    //               setProduct(book);
    //             }}
    //             className="btn btn-dark btn-sm"
    //           >
    //             <i className="fa fa-eye" />
    //             &nbsp;Learn more
    //           </a>

    //           <button
    //             className="btn btn-outline-dark btn-sm ms-auto"
    //             type="button"
    //             onClick={() => {
    //               addToCart(book);
    //               handleIsAddCart();
    //             }}
    //           >
    //             {isAddToCart ? (
    //               <i className="bi bi-cart-check-fill"></i>
    //             ) : (
    //               "Add to cart"
    //             )}
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </>
    // </div>
  );
}

ShowInterstingBook.propTypes = {
  book: PropTypes.any.isRequired,
};
