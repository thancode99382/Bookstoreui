import { Link } from "react-router-dom";
import config from "../../config";
export default function Header() {
  return (
    <div
      className="container-fluid"
      style={{ paddingLeft: "0px", paddingRight: "0px" }}
    >
      <header>
        <div
          className="row d-xl-flex justify-content-xl-center align-items-xl-center"
          style={{ height: "90px" }}
        >
          <div className="col-xl-4 d-lg-flex align-items-lg-center justify-content-xl-start">
            <Link to={config.routes.homePage}>
              <img src="https://demo.joomlabuff.com/bookstore/images/logo/logo_green.png" />
            </Link>
          </div>
          <div className="col-lg-6 col-xl-5 offset-lg-0 d-xl-flex justify-content-lg-center align-items-lg-center justify-content-xl-end">
            <button
              className="btn btn-outline-dark"
              type="button"
              style={{ marginLeft: "-8px", marginRight: "10px" }}
            >
              Currency
            </button>
            <button className="btn btn-outline-dark" type="button">
              {/* <Link to={config.routes.cart}>Cart</Link> */}
              <Link to={config.routes.cart}>Cart</Link>
            </button>
          </div>
        </div>
        <div className="row g-0">
          <div className="col">
            <nav
              className="navbar navbar-expand-md bg-success"
              style={{ height: "58px" }}
            >
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  data-bs-toggle="collapse"
                  data-bs-target="#navcol-1"
                >
                  <span className="visually-hidden">Toggle navigation</span>
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  id="navcol-1"
                  className="collapse navbar-collapse text-uppercase text-light d-lg-flex justify-content-around"
                  style={{ color: "var(--bs-navbar-active-color)" }}
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link active link-light"
                        href="#"
                        style={{ fontWeight: "bold", marginRight: "10px" }}
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link link-light"
                        href="#"
                        style={{ fontWeight: "bold" }}
                      >
                        Text Book
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link link-light"
                        href="#"
                        style={{ fontWeight: "bold", marginRight: "10px" }}
                      >
                        Ebook
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link link-light"
                        href="#"
                        style={{ fontWeight: "bold", marginRight: "10px" }}
                      >
                        subcirption
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link link-light"
                        href="#"
                        style={{ fontWeight: "bold", marginRight: "10px" }}
                      >
                        features
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link link-light"
                        href="#"
                        style={{ fontWeight: "bold", marginRight: "10px" }}
                      >
                        pages
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link link-light"
                        href="#"
                        style={{ fontWeight: "bold", marginRight: "10px" }}
                      >
                        K2 Blog
                      </a>
                    </li>
                  </ul>
                  <i className="fa fa-search" style={{ fontSize: "28px" }}></i>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
