import {Link} from "react-router-dom";
import config from "../config/index.js";

export default function SignUp() {
  return (
      <div className="container-fluid"
           style={{
             background: 'url("assets/img/parallax.jpg")',
             paddingBottom: 18,
           }}>
        <div className="row d-xl-flex justify-content-xl-center">
          <div className="col-xl-6 d-xl-flex justify-content-xl-center align-items-xl-center">
            <p style={{color: "var(--bs-body-bg)", fontSize: 20}}>
              <br/>
              <strong>
                Join <span style={{color: "rgb(39, 174, 97)"}}>100,321</span>{" "}
                Happy readers And Get Access To Our Entire Collection Of 1000
                ebooks For The Price Of One
              </strong>
            </p>
          </div>
        </div>
        <div
            className="row d-xl-flex justify-content-xl-center"
            style={{marginTop: 15}}
        >
          <div className="col-xl-5 d-xl-flex justify-content-xl-center align-items-xl-center">
            <p
                className="justify-content-xl-center align-items-xl-center"
                style={{
                  color: "var(--bs-secondary-bg)",
                  paddingTop: 1,
                  paddingBottom: 0,
                  marginBottom: 25,
                }}
            >
              We offer a 45 Day Money Back Guarantee, so joining is risk-free!
              <br/>
              <br/>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col d-xl-flex justify-content-xl-center">
            <Link to={config.routes.register}
                  className="btn btn-primary btn-outline-dark"
                  type="button"
                  style={{
                    background: "var(--bs-btn-disabled-bg)",
                    borderStyle: "solid",
                    borderColor: "var(--bs-btn-active-color)",
                    color: "var(--bs-btn-hover-color)",
                  }}
            >
              SIGN UP TODAY
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 24 24"
                  width="1em"
                  fill="currentColor"
                  style={{fontSize: 26}}
              >
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
  )
}