import { useContext } from "react";
import { CartContext } from "../../components/CartContext";
function Cart() {
  const { cartItems } = useContext(CartContext);
  const { removeFromCart } = useContext(CartContext);
  return (
    <div className="container">
      <div className="shopping-cart">
        <div className="px-4 px-lg-0">
          <div className="pb-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="border-0 bg-light" scope="col">
                            <div className="p-2 px-3 text-uppercase">
                              Product
                            </div>
                          </th>
                          <th className="border-0 bg-light" scope="col">
                            <div className="py-2 text-uppercase">Price</div>
                          </th>
                          <th className="border-0 bg-light" scope="col">
                            <div className="py-2 text-uppercase">Quantity</div>
                          </th>
                          <th className="border-0 bg-light" scope="col">
                            <div className="py-2 text-uppercase">Remove</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((cart, index) => {
                          return (
                            <tr key={index}>
                              <th className="border-0" scope="row">
                                <div className="p-2">
                                  <img
                                    className="img-fluid rounded shadow-sm"
                                    src={cart.image}
                                    alt
                                    width="70"
                                  />
                                  <div className="ml-3 d-inline-block align-middle">
                                    <h5 className="mb-0">
                                      <a
                                        className="text-dark d-inline-block align-middle"
                                        href="#"
                                      >
                                        {cart.title}
                                      </a>
                                    </h5>
                                    <span className="text-muted font-weight-normal font-italic d-block">
                                      Category: Watches
                                    </span>
                                  </div>
                                </div>
                              </th>
                              <td className="border-0 align-middle">
                                <strong>{cart.price}</strong>
                              </td>
                              <td className="border-0 align-middle">
                                <strong>3</strong>
                                <input type="number " />
                              </td>
                              <td className="border-0 align-middle">
                                <a className="text-dark" href="#">
                                  <i
                                    className="bi bi-trash-fill"
                                    onClick={() => {
                                      removeFromCart(cart.isbn13);
                                    }}
                                  ></i>
                                </a>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="row py-5 p-4 bg-white rounded shadow-sm">
                <div className="col-lg-6">
                  <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                    Coupon code
                  </div>
                  <div className="p-4">
                    <p className="font-italic mb-4">
                      If you have a coupon code, please enter it in the box
                      below
                    </p>
                    <div className="input-group mb-4 border rounded-pill p-2">
                      <input
                        className="form-control border-0"
                        type="text"
                        placeholder="Apply coupon"
                        aria-describedby="button-addon3"
                      />
                      <div className="input-group-append border-0">
                        <button
                          id="button-addon3"
                          className="btn btn-dark px-4 rounded-pill"
                          type="button"
                        >
                          <i className="fa fa-gift mr-2"></i>Apply coupon
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                    Instructions for seller
                  </div>
                  <div className="p-4">
                    <p className="font-italic mb-4">
                      If you have some information for the seller you can leave
                      them in the box below
                    </p>
                    <textarea
                      className="form-control"
                      name
                      cols="30"
                      rows="2"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                    Order summary{" "}
                  </div>
                  <div className="p-4">
                    <p className="font-italic mb-4">
                      Shipping and additional costs are calculated based on
                      values you have entered.
                    </p>
                    <ul className="list-unstyled mb-4">
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">Order Subtotal </strong>
                        <strong>$390.00</strong>
                      </li>
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">
                          Shipping and handling
                        </strong>
                        <strong>$10.00</strong>
                      </li>
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">Tax</strong>
                        <strong>$0.00</strong>
                      </li>
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">Total</strong>
                        <h5 className="font-weight-bold">$400.00</h5>
                      </li>
                    </ul>
                    <a
                      className="btn btn-dark rounded-pill py-2 btn-block"
                      href="#"
                    >
                      Procceed to checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="row g-0">
          <div className="col-md-12 col-lg-8">
            <div className="items">
              <div className="product"></div>
              <div className="product"></div>
              <div className="product"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
