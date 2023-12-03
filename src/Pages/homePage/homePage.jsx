import FeatureBooks from "../../components/FeatureBooks.jsx";
import Accordion from "../../components/Accordion.jsx";
import InterestingBooks from "../../components/InterstingBooks.jsx";
import ExclusiveThisMonth from "../../components/ExclusiveThisMonth.jsx";
import SubscribeNewsletter from "../../components/SubscribeNewsletter.jsx";
import Pagination from "../../components/Pagination.jsx";
import Blog from "../../components/Blog.jsx";
import SearchForm from "../../components/SearchForm.jsx";
import searchBooks from "../../api/searchBookApi.js";
import { useState } from "react";
import BookList from "../../components/BookList.jsx";

export default function Body() {
  const [books, setBooks] = useState([]);

  async function handleSubmit(term) {
    const result = await searchBooks(term);
    setBooks(result);
  }

  const [field, setField] = useState("bestSellers");

  function handleButtonClick(fieldClick) {
    setField(fieldClick);
  }

  return (
    <>
      <div className="container-fluid">
        <Accordion />
        <section
          className="d-xl-flex justify-content-xl-center"
          style={{ margin: "0px auto", transform: "translateY(-65px)" }}
        >
          <div
            className="row d-xl-flex justify-content-xl-center align-items-xl-center"
            style={{
              background: "#27ae61",
              paddingTop: 15,
              paddingBottom: 15,
              borderRadius: 7,
            }}
          >
            <div
              className="col-xl-4"
              style={{
                color: "var(--bs-body-bg)",
                borderRightStyle: "double",
                borderRightColor: "var(--bs-emphasis-color)",
              }}
            >
              <div className="row">
                <div className="col-xl-3 d-xl-flex justify-content-xl-center align-items-xl-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="bi bi-telephone-fill"
                    style={{ fontSize: 34 }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                    />
                  </svg>
                </div>
                <div className="col">
                  <p>24/7 CUSTOMER SUPPORT</p>
                  <p>Call: +0123 456 789</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4" style={{ color: "var(--bs-body-bg)" }}>
              <div className="row">
                <div className="col-xl-3 d-xl-flex justify-content-xl-center align-items-xl-center">
                  <i className="bi bi-airplane-fill" style={{ fontSize: 34 }} />
                </div>
                <div className="col-xl-9">
                  <p>free shipping world wide</p>
                  <p>On Order Over $99</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4"
              style={{
                color: "var(--bs-body-bg)",
                borderLeftStyle: "double",
                borderLeftColor: "var(--bs-emphasis-color)",
              }}
            >
              <div className="row">
                <div className="col-xl-3 d-xl-flex justify-content-xl-center align-items-xl-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 24 24"
                    width="1em"
                    fill="currentColor"
                    style={{ fontSize: 34 }}
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />
                  </svg>
                </div>
                <div className="col">
                  <p>money back guarantee</p>
                  <p>45 Days Return Service</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div
            className="row d-xl-flex justify-content-xl-center"
            style={{ marginBottom: 27, marginTop: 0 }}
          >
            <div
              className="col-xl-3"
              style={{
                background: "#e4e0e0",
                marginLeft: 10,
                marginRight: 10,
                marginTop: 10,
                marginBottom: 10,
                padding: 10,
                borderRadius: 9,
              }}
            >
              <div className="row">
                <div
                  className="col-xl-6 d-xl-flex flex-column justify-content-xl-center align-items-xl-start"
                  style={{ paddingLeft: 55 }}
                >
                  <p className="font-monospace fw-semibold">SHOP CATEGORY</p>
                  <span
                    className="fw-semibold"
                    style={{
                      fontSize: 21,
                      fontWeight: "bold",
                      color: "#27ae61",
                    }}
                  >
                    E-BOOKS
                  </span>
                  <p
                    className="font-monospace fw-semibold"
                    style={{ fontSize: 13 }}
                  >
                    SHOP NOW{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 24 24"
                      width="1em"
                      fill="currentColor"
                      style={{ fontSize: 23 }}
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </p>
                </div>
                <div className="col-lg-11 col-xl-6 d-xl-flex justify-content-xl-center align-items-xl-center">
                  <img
                    className="img-fluid"
                    src="/assets/img/—Pngtree—creative%20electronic%20paper%20book_622858.png"
                    style={{
                      transform: "rotate(10deg) scale(1.63)",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className="col-xl-3"
              style={{
                background: "#e4e0e0",
                margin: 10,
                padding: 10,
                borderRadius: 9,
              }}
            >
              <div className="row">
                <div
                  className="col-xl-6 d-xl-flex flex-column justify-content-xl-center align-items-xl-start"
                  style={{ paddingLeft: 55 }}
                >
                  <p className="font-monospace fw-semibold">SHOP CATEGORY</p>
                  <span
                    className="fw-semibold"
                    style={{
                      fontSize: 21,
                      fontWeight: "bold",
                      color: "#27ae61",
                    }}
                  >
                    TEXT BOOKS
                  </span>
                  <p
                    className="font-monospace fw-semibold"
                    style={{ fontSize: 13 }}
                  >
                    SHOP NOW{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 24 24"
                      width="1em"
                      fill="currentColor"
                      style={{ fontSize: 23 }}
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </p>
                </div>
                <div className="col-xl-6 d-xl-flex align-items-xl-center">
                  <img
                    className="img-fluid"
                    src="/assets/img/pngwing.com.png"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div
              className="col-xl-3"
              style={{
                background: "#e4e0e0",
                margin: 10,
                padding: 10,
                borderRadius: 9,
              }}
            >
              <div className="row">
                <div
                  className="col-xl-6 d-xl-flex flex-column justify-content-xl-center align-items-xl-start"
                  style={{ paddingLeft: 55 }}
                >
                  <p className="font-monospace fw-semibold">SHOP CATEGORY</p>
                  <span
                    className="fw-semibold"
                    style={{
                      fontSize: 21,
                      fontWeight: "bold",
                      color: "#27ae61",
                    }}
                  >
                    OFFER ZONE
                  </span>
                  <p
                    className="font-monospace fw-semibold"
                    style={{ fontSize: 13 }}
                  >
                    SHOP NOW{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 24 24"
                      width="1em"
                      fill="currentColor"
                      style={{ fontSize: 23 }}
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </p>
                </div>
                <div className="col-xl-6 d-xl-flex align-items-xl-center">
                  <img
                    className="img-fluid"
                    src="/assets/img/pngwing.com(1).png"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <section className="py-5">
          <div className="container">
            <h1 className="text-center mb-4" style={{ color: "#229955" }}>
              INTERESTING BOOKS
            </h1>
            <div className="filtr-controls text-center lead text-uppercase mb-3">
              <button
                className="d-inline-block mx-3 py-1 position-relative"
                style={{
                  padding: 5,
                  background: "#229955",
                  color: "var(--bs-body-bg)",
                  fontWeight: "bold",
                }}
                onClick={() => handleButtonClick("bestSellers")}
              >
                BEST SELLER
              </button>
              <button
                className="d-inline-block mx-3 py-1 position-relative"
                style={{
                  padding: 5,
                  background: "#229955",
                  color: "var(--bs-body-bg)",
                  fontWeight: "bold",
                }}
                onClick={() => handleButtonClick("ebooks")}
              >
                E-Books
              </button>
              <button
                className="d-inline-block mx-3 py-1 position-relative"
                style={{
                  padding: 5,
                  background: "#229955",
                  color: "var(--bs-body-bg)",
                  fontWeight: "bold",
                }}
                onClick={() => handleButtonClick("textBooks")}
              >
                Text books
              </button>
            </div>
            <div className="row filtr-container">
              <InterestingBooks field={field} />
            </div>
          </div>
        </section>
      </div>
      <div
        className="container-fluid"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <blockquote className="quote-card bg-success text-white">
          <p>
            The more that you read, the more things you will know. The more that
            you learn, the more places you ll go.
          </p>
          <cite>Dr. Seuss</cite>{" "}
        </blockquote>
      </div>
      <div className="container">
        <section className="py-5">
          <div className="container">
            <div>
              <div
                className="col-xl-4 justify-content-xl-center align-items-xl-center"
                style={{
                  margin: "0px auto",
                  borderStyle: "solid",
                  borderColor: "var(--bs-emphasis-color)",
                }}
              >
                <h1
                  className="justify-content-xl-center align-items-xl-center text-center mb-4"
                  style={{
                    color: "var(--bs-emphasis-color)",
                    fontSize: 24,
                    paddingBottom: 0,
                    paddingTop: 23,
                  }}
                >
                  EXCLUSIVE THIS MONTH
                </h1>
              </div>
            </div>
            <div className="row filtr-container">
              <ExclusiveThisMonth />
            </div>
          </div>
        </section>
      </div>
      <div
        className="container-fluid"
        style={{
          background: 'url("assets/img/parallax.jpg")',
          paddingBottom: 18,
        }}
      >
        <div className="row d-xl-flex justify-content-xl-center">
          <div className="col-xl-6 d-xl-flex justify-content-xl-center align-items-xl-center">
            <p style={{ color: "var(--bs-body-bg)", fontSize: 20 }}>
              <br />
              <strong>
                Join <span style={{ color: "rgb(39, 174, 97)" }}>100,321</span>{" "}
                Happy readers And Get Access To Our Entire Collection Of 1000
                ebooks For The Price Of One
              </strong>
            </p>
          </div>
        </div>
        <div
          className="row d-xl-flex justify-content-xl-center"
          style={{ marginTop: 15 }}
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
              <br />
              <br />
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col d-xl-flex justify-content-xl-center">
            <button
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
                style={{ fontSize: 26 }}
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <FeatureBooks />
      <SearchForm onSubmit={handleSubmit} />
      <BookList books={books} />
      <div className="container py-4 py-xl-5">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h4>LATEST FROM OUR BLOG</h4>
            <p className="w-lg-50" style={{ fontStyle: "italic" }}>
              We love to share our thoughts
            </p>
          </div>
        </div>
        <Blog />
        <Pagination />
      </div>
      <SubscribeNewsletter />
    </>
  );
}
