/* import styles from "./Footer.module.scss";
import classNameNames from "classNamenames/bind";

export default function Footer() {
  const cx = classNameNames.bind(styles); // Bind the styles object to classNameNames
  return <div classNameName={cx("test")}>Footer</div>;
}
 */

export default function Footer() {
  return (
    <div>
      <div className="container-fluid">
        <div
          className="text-white border rounded border-0 border-light d-flex flex-column justify-content-between align-items-center flex-lg-row p-4 p-lg-5"
          data-bs-theme="light"
          style={{
            paddingTop: 0,
            paddingBottom: 0,
            background: "rgb(25, 135, 84)",
          }}
        >
          <div className="text-center text-lg-start py-3 py-lg-1">
            <h2 className="fw-bold mb-2">
              <strong>Subscribe to our newsletter</strong>
            </h2>
            <p className="mb-0">Imperdiet consectetur dolor.</p>
          </div>
          <form
            className="d-flex justify-content-center flex-wrap my-2"
            method="post"
          >
            <div className="my-2">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Your Email"
              />
            </div>
            <div className="my-2">
              <button className="btn btn-primary ms-sm-2" type="submit">
                Subscribe{" "}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="container">
        <footer style={{paddingTop:'50px'}}>
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col">
                  <img
                    className="d-lg-flex d-xl-flex justify-content-lg-start justify-content-xl-start align-items-xl-center"
                    src="https://demo.joomlabuff.com/bookstore/images/logo/logo_footer.png"
                    height="54"
                    width="244"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col d-md-flex align-items-md-center">
                  <i
                    className="bi bi-send-fill text-success d-md-flex align-items-md-center"
                    style={{ fontSize: "38px" }}
                  ></i>
                </div>
                <div className="col-md-8 col-xl-9">
                  <p className="d-md-flex justify-content-md-center">
                    <br />
                    <span style={{ color: "rgb(51, 51, 51)" }}>
                      868 Bechole Road, Victory Lorem Ispuse, New York
                    </span>
                    <br />
                    <br />
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col d-xl-flex align-items-xl-center">
                  <i
                    className="bi bi-telephone-fill text-success"
                    style={{ fontSize: "38px" }}
                  ></i>
                </div>
                <div className="col-xl-9">
                  <p>
                    <br />
                    <span style={{ color: "rgb(51, 51, 51)" }}>
                      Phone: (+80) 123 456 Fax: (+80) 123 456 789
                    </span>
                    <br />
                    <br />
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col d-xl-flex align-items-xl-center">
                  <i
                    className="bi bi-envelope-arrow-up-fill text-success "
                    style={{ fontSize: "38px" }}
                  ></i>
                </div>
                <div className="col-xl-9">
                  <p>
                    <br />
                    <span style={{ color: "rgb(51, 51, 51)" }}>
                      Email: Contact@bookstore.com Website: www.Bookstore.com
                    </span>
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-2">
              <div className="row">
                <div className="col">
                  <p>
                    <br />
                    <strong>
                      <span style={{ color: "rgb(51, 51, 51)" }}>
                        SHOPPING GUIDE
                      </span>
                    </strong>
                    <br />
                    <br />
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <p>How to buy</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>
                    <span style={{ color: "rgb(51, 51, 51)" }}>Faq&#39;s</span>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>
                    <span style={{ color: "rgb(51, 51, 51)" }}>
                      Where is my order
                    </span>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>
                    <span style={{ color: "rgb(51, 51, 51)" }}>
                      Return pocily
                    </span>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>
                    <span style={{ color: "rgb(39, 174, 97)" }}>Payman</span>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>
                    <span style={{ color: "rgb(51, 51, 51)" }}>Shipment</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col">
                  <p>
                    <br />
                    <strong>
                      <span style={{ color: "rgb(51, 51, 51)" }}>
                        INFORMATION
                      </span>
                    </strong>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>
                    <span style={{ color: "rgb(51, 51, 51)" }}>About us</span>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>Delivery information</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>Privacy policy</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>
                    <span style={{ color: "rgb(51, 51, 51)" }}>Discout</span>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>
                    <span style={{ color: "rgb(51, 51, 51)" }}>Customs</span>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>ServiceTerms &amp; condition</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="row">
                <div className="col">
                  <p>
                    <br />
                    <strong>
                      <span style={{ color: "rgb(51, 51, 51)" }}>
                        FIND YOUR LOCAL STORE
                      </span>
                    </strong>
                    <br />
                    <br />
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <img
                    src="https://demo.joomlabuff.com/bookstore/images/map/worldmap.png"
                    width="260"
                    height="161"
                  />
                </div>
              </div>
              <div className="row">
                <div
                  className="col d-xl-flex justify-content-xl-center"
                  style={{ marginTop: " 22px", marginRight: "30px" }}
                >
                  <i
                    className="bi bi-facebook text-success d-md-flex align-items-md-center"
                    style={{ fontSize: "38px", marginRight: "30px" }}
                  ></i>
                  <i
                    className="bi bi-instagram text-success d-md-flex align-items-md-center"
                    style={{ fontSize: "38px", marginRight: "30px" }}
                  ></i>
                  <i
                    className="bi bi-twitter text-success d-md-flex align-items-md-center"
                    style={{ fontSize: "38px", marginRight: "30px" }}
                  ></i>
                  <i
                    className="bi bi-google text-success d-md-flex align-items-md-center"
                    style={{ fontSize: "38px", marginRight: "30px" }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
