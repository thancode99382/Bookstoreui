import { exclusiveBooks } from "../../json/ExclusiveThisMonthJson.jsx";
export default function ExclusiveThisMonth() {
  return (
    <>
      {exclusiveBooks.map((exclusiveBook, index) => (
        <div key={index} className="flex font-sans mt-3">
          <div className="flex-none w-48 relative">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              src={exclusiveBook.image}
            />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-lg font-semibold text-slate-900">
              {exclusiveBook.title}
              </h1>
              
              <div className="w-full flex-none text-  sm font-medium text-slate-700 mt-2">
              {exclusiveBook.summary}
              </div>
            </div>
            <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            
            </div>
            <div className="flex space-x-4 mb-6 text-sm font-medium">
              <div className="flex-auto flex space-x-4">

                
                <button
                  className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                  type="submit"
                >
                  Buy now
                </button>
                <button
                  className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                  type="button"
                >
                  Add to cart
                </button>
              </div>
              <button
                className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
                type="button"
                aria-label="Like"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
          
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  />
                </svg>
              </button>
            </div>
            <p className="text-sm text-slate-700">
              Free shipping on all continental US orders.
            </p>
          </form>
        </div>
        // <div
        //   classNameName="col-md-6 col-lg-4 filtr-item"
        //   data-category="2,3"
        //   key={index}
        // >
        //   <div classNameName="card border-dark">
        //     <div classNameName="card-header bg-success text-light">
        //       <h5 classNameName="m-0">{exclusiveBook.title}</h5>
        //     </div>
        //     <img
        //       classNameName="img-fluid card-img w-100 d-block rounded-0"
        //       src={exclusiveBook.image}
        //     />
        //     <div classNameName="card-body">
        //       <p classNameName="card-text" style={{ paddingTop: 0 }}>
        //         {exclusiveBook.summary}
        //       </p>
        //     </div>
        //     <div classNameName="d-flex card-footer">
        //       <button classNameName="btn btn-dark btn-sm" type="button">
        //         <i classNameName="fa fa-eye" />
        //         &nbsp;Learn more
        //       </button>
        //       <button
        //         classNameName="btn btn-outline-dark btn-sm ms-auto"
        //         type="button"
        //       >
        //         <i classNameName="fa fa-plus" />
        //         &nbsp;Add to cart
        //       </button>
        //     </div>
        //   </div>
        // </div>
      ))}
    </>
  );
}
