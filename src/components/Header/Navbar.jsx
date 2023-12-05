import User from "../Form/User";

export default function Navbar() {

  const userName = localStorage.getItem('username')


  return (
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
            {userName && <User/>}
          </div>
        </nav>
      </div>
    </div>
  );
}
