// import React from 'react'



import brick_png from '/assets/img/bg_brick.jpg'
// import slides from '../../json/Slide'


export default function Body() {



  return (
      <>
        <div className="container-fluid">
          <div
              className="row"
              style={{
                background: `url(${brick_png})`,
                paddingLeft: 26,
                paddingRight: 26,
              }}    
          >
            <div className="col-xl-3 d-xl-flex flex-column justify-content-xl-center">
              <h2 style={{color: "#27ae61", fontWeight: "bold"}}>
                CHOOSE YOUR BRAIN FOOD
              </h2>
              <h2 className="fw-bolder" style={{marginTop: 30}}>
                SALES UP TO 70% OFF
              </h2>
              <div>
                <button
                    className="btn btn-primary"
                    type="button"
                    style={{background: "#229955", fontWeight: "bold"}}
                >
                  Learn more
                </button>
                <button
                    className="btn btn-primary"
                    type="button"
                    style={{
                      marginLeft: 15,
                      background: "#229955",
                      fontWeight: "bold",
                    }}
                >
                  Shop now
                </button>
              </div>
            </div>
            <div className="col">
              <div className="accordian">
                <ul>
                 {/*  {slides.map((slide) => {
                    <li>
                    <a className="image_title" href="#">
                     {slide.title}
                    </a>
                    <a href="#">
                      <img src={slide.imageUrl}/>
                    </a>
                  </li>
                  })} */}
                  <li>
                    <a className="image_title" href="#">
                     Slide 1
                    </a>
                    <a href="#">
                      <img src="https://st4.depositphotos.com/13193658/22460/i/450/depositphotos_224600602-stock-photo-beautiful-woman-glasses-reading-pile.jpg"/>
                    </a>
                  </li>
                  <li>
                    <a className="image_title" href="#">
                    Slide 2
                    </a>
                    <a href="#">
                      <img src="https://static7.depositphotos.com/1030334/715/i/600/depositphotos_7157131-stock-photo-books.jpg"/>
                    </a>
                  </li>
                  <li>
                    <a className="image_title" href="#">
                    Slide 3
                    </a>
                    <a href="#">
                      <img src="https://st4.depositphotos.com/13193658/22462/i/600/depositphotos_224629482-stock-photo-beautiful-blonde-woman-glasses-reading.jpg"/>
                    </a>
                  </li>
                  <li>
                    <a className="image_title" href="#">
                    Slide 4
                    </a>
                    <a href="#">
                      <img src="https://st3.depositphotos.com/13349494/18797/i/600/depositphotos_187975840-stock-photo-floor-stack-different-books-red.jpg"/>
                    </a>
                  </li>
                  <li>
                    <a className="image_title" href="#">
                    Slide 5
                    </a>
                    <a href="#">
                      <img src="https://st4.depositphotos.com/13324256/19674/i/600/depositphotos_196748072-stock-photo-open-book-front-row-books.jpg"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <section
              className="d-xl-flex justify-content-xl-center"
              style={{margin: "0px auto", transform: "translateY(-65px)"}}
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
                        style={{fontSize: 34}}
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
              <div className="col-xl-4" style={{color: "var(--bs-body-bg)"}}>
                <div className="row">
                  <div className="col-xl-3 d-xl-flex justify-content-xl-center align-items-xl-center">
                    <i className="fa fa-plane" style={{fontSize: 34}}/>
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
                        style={{fontSize: 34}}
                    >
                      <path d="M0 0h24v24H0z" fill="none"/>
                      <path
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
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
                style={{marginBottom: 27, marginTop: 0}}
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
                      style={{paddingLeft: 55}}
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
                        style={{fontSize: 13}}
                    >
                      SHOP NOW{" "}
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 24 24"
                          width="1em"
                          fill="currentColor"
                          style={{fontSize: 23}}
                      >
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
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
                      style={{paddingLeft: 55}}
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
                        style={{fontSize: 13}}
                    >
                      SHOP NOW{" "}
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 24 24"
                          width="1em"
                          fill="currentColor"
                          style={{fontSize: 23}}
                      >
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                      </svg>
                    </p>
                  </div>
                  <div className="col-xl-6 d-xl-flex align-items-xl-center">
                    <img
                        className="img-fluid"
                        src="/assets/img/pngwing.com.png"
                        style={{width: "100%"}}
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
                      style={{paddingLeft: 55}}
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
                        style={{fontSize: 13}}
                    >
                      SHOP NOW{" "}
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 24 24"
                          width="1em"
                          fill="currentColor"
                          style={{fontSize: 23}}
                      >
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                      </svg>
                    </p>
                  </div>
                  <div className="col-xl-6 d-xl-flex align-items-xl-center">
                    <img
                        className="img-fluid"
                        src="/assets/img/pngwing.com(1).png"
                        style={{width: "100%"}}
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
              <h1 className="text-center mb-4" style={{color: "#229955"}}>
                INTERESTING BOOKS
              </h1>
              <div className="filtr-controls text-center lead text-uppercase mb-3">
              <span
                  className="d-inline-block mx-3 py-1 position-relative"
                  data-filter={1}
                  style={{
                    padding: 5,
                    background: "#229955",
                    color: "var(--bs-body-bg)",
                    fontWeight: "bold",
                  }}
              >
                BEST SELLER
              </span>
                <span
                    className="d-inline-block mx-3 py-1 position-relative"
                    data-filter={2}
                    style={{
                      padding: 5,
                      background: "#229955",
                      color: "var(--bs-body-bg)",
                      fontWeight: "bold",
                    }}
                >
                E-Books
              </span>
                <span
                    className="d-inline-block mx-3 py-1 position-relative"
                    data-filter={3}
                    style={{
                      padding: 5,
                      background: "#229955",
                      color: "var(--bs-body-bg)",
                      fontWeight: "bold",
                    }}
                >
                Text books
              </span>
              </div>
              <div className="row filtr-container">
                <div className="col-md-6 col-lg-4 filtr-item" data-category="2,3">
                  <div className="card border-dark">
                    <div className="card-header bg-success text-light">
                      <h5 className="m-0">Find the Way Home</h5>
                    </div>
                    <img
                        className="img-fluid card-img w-100 d-block rounded-0"
                        src="/assets/img/s-l400-28544216.jpg"
                    />
                    <div className="card-body">
                      <p className="card-text" style={{paddingTop: 0}}>
                        Finding the Way Home
                        <br/>A woman leaves her busy San Francisco life behind
                        and returns to her <br/>
                        small hometown after her mother s death. She struggles to
                        reconnect with
                        <br/> family and old friends while dealing with
                        unresolved issues from her <br/>
                        childhood.
                      </p>
                    </div>
                    <div className="d-flex card-footer">
                      <button className="btn btn-dark btn-sm" type="button">
                        <i className="fa fa-eye"/>
                        &nbsp;Learn more
                      </button>
                      <button
                          className="btn btn-outline-dark btn-sm ms-auto"
                          type="button"
                      >
                        <i className="fa fa-plus"/>
                        &nbsp;Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 filtr-item" data-category="1,3">
                  <div className="card border-dark">
                    <div className="card-header bg-success text-light">
                      <h5 className="m-0">The Museum of Lost Art</h5>
                    </div>
                    <img
                        className="img-fluid card-img w-100 d-block rounded-0"
                        src="/assets/img/11228371_master.jpg"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        The Museum of Lost Art
                        <br/>
                        An art history professor becomes obsessed with tracking
                        down three <br/>
                        valuable paintings that have been stolen and missing for
                        decades. Her <br/>
                        search takes her all over the world and puts her in great
                        danger.
                      </p>
                    </div>
                    <div className="d-flex card-footer">
                      <button className="btn btn-dark btn-sm" type="button">
                        <i className="fa fa-eye"/>
                        &nbsp;Learn more
                      </button>
                      <button
                          className="btn btn-outline-dark btn-sm ms-auto"
                          type="button"
                      >
                        <i className="fa fa-plus"/>
                        &nbsp;Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 filtr-item" data-category="2,3">
                  <div className="card border-dark">
                    <div className="card-header bg-success text-light">
                      <h5 className="m-0">Under the Harvest Moon</h5>
                    </div>
                    <img
                        className="img-fluid card-img w-100 d-block rounded-0"
                        src="/assets/img/9780718023614-3450056858.jpg"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Under the Harvest Moon
                        <br/>
                        In 1850s Illinois, a family of settlers face challenges in
                        establishing <br/>
                        their farm near a small frontier town. Their oldest
                        daughter catches the
                        <br/> eye of a local boy with a mysterious past.
                      </p>
                    </div>
                    <div className="d-flex card-footer">
                      <button className="btn btn-dark btn-sm" type="button">
                        <i className="fa fa-eye"/>
                        &nbsp;Learn more
                      </button>
                      <button
                          className="btn btn-outline-dark btn-sm ms-auto"
                          type="button"
                      >
                        <i className="fa fa-plus"/>
                        &nbsp;Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
            className="container-fluid"
            style={{paddingLeft: 0, paddingRight: 0}}
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
                <div className="col-md-6 col-lg-4 filtr-item" data-category="2,3">
                  <div className="card border-dark">
                    <div className="card-header bg-success text-light">
                      <h5 className="m-0">Apollo 13</h5>
                    </div>
                    <img
                        className="img-fluid card-img w-100 d-block rounded-0"
                        src="/assets/img/9780618056651-4241336187.jpg"
                    />
                    <div className="card-body">
                      <p className="card-text" style={{paddingTop: 0}}>
                        A&nbsp; Defining Moment in Space Exploration
                        <br/>
                        An exhaustive account of the harrowing Apollo 13 mission
                        using <br/>
                        interviews with key figures and newly available archival
                        material to <br/>
                        provide a definitive behind-the-scenes look.
                      </p>
                    </div>
                    <div className="d-flex card-footer">
                      <button className="btn btn-dark btn-sm" type="button">
                        <i className="fa fa-eye"/>
                        &nbsp;Learn more
                      </button>
                      <button
                          className="btn btn-outline-dark btn-sm ms-auto"
                          type="button"
                      >
                        <i className="fa fa-plus"/>
                        &nbsp;Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 filtr-item" data-category="1,3">
                  <div className="card border-dark">
                    <div className="card-header bg-success text-light">
                      <h5 className="m-0">Nomadland</h5>
                    </div>
                    <img
                        className="img-fluid card-img w-100 d-block rounded-0"
                        src="/assets/img/2595620555325dbc36757b7355c6d57b-398172689.jpg"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Surviving America in the Twenty-First Century An
                        investigative look at older Americans forced into a
                        nomadic <br/>
                        existence, living in RVs and traveling between temporary
                        jobs after <br/>
                        being impacted by the Great Recession.
                      </p>
                    </div>
                    <div className="d-flex card-footer">
                      <button className="btn btn-dark btn-sm" type="button">
                        <i className="fa fa-eye"/>
                        &nbsp;Learn more
                      </button>
                      <button
                          className="btn btn-outline-dark btn-sm ms-auto"
                          type="button"
                      >
                        <i className="fa fa-plus"/>
                        &nbsp;Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 filtr-item" data-category="2,3">
                  <div className="card border-dark">
                    <div className="card-header bg-success text-light">
                      <h5 className="m-0">Just Mercy</h5>
                    </div>
                    <img
                        className="img-fluid card-img w-100 d-block rounded-0"
                        src="/assets/img/th-2106389133.jpg"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        A Story of Justice and Redemption
                        <br/>A legal drama and real-life story about a gifted
                        young lawyer <br/>
                        challenging racial discrimination and economic injustice
                        in Alabama s <br/>
                        broken legal system one case at a time.
                      </p>
                    </div>
                    <div className="d-flex card-footer">
                      <button className="btn btn-dark btn-sm" type="button">
                        <i className="fa fa-eye"/>
                        &nbsp;Learn more
                      </button>
                      <button
                          className="btn btn-outline-dark btn-sm ms-auto"
                          type="button"
                      >
                        <i className="fa fa-plus"/>
                        &nbsp;Add to cart
                      </button>
                    </div>
                  </div>
                </div>
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
                    style={{fontSize: 26}}
                >
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="container" style={{marginTop: 28}}>
          <div className="row d-xl-flex justify-content-xl-center">
            <div className="col-xl-3">
              <div>
                <p
                    className="d-xl-flex justify-content-xl-center"
                    style={{fontWeight: "bold", fontSize: 19}}
                >
                  NEW ARRIVALS
                </p>
              </div>
            </div>
            <div className="col-xl-3">
              <div/>
              <p
                  className="d-xl-flex justify-content-xl-center"
                  style={{fontWeight: "bold", fontSize: 19}}
              >
                FEATURED PRODUCTS
              </p>
            </div>
            <div className="col-xl-3">
              <div/>
              <p
                  className="d-xl-flex justify-content-xl-center"
                  style={{fontWeight: "bold", fontSize: 19}}
              >
                STAFF PICKS
              </p>
            </div>
          </div>
          <div className="row row-cols-2 d-xl-flex justify-content-xl-center">
            <div className="col-xl-3">
              <div
                  className="row"
                  style={{
                    marginTop: 14,
                    marginRight: 0,
                    border: "0.3px solid var(--bs-secondary-bg)",
                    borderBottomWidth: 1,
                    borderBottomColor: "var(--bs-secondary-bg)",
                  }}
              >
                <div className="col-6 col-md-3 col-lg-3 col-xl-3">
                  <img
                      className="float-start"
                      src="/assets/img/book23.png"
                      style={{width: 78}}
                  />
                </div>
                <div
                    className="col-6 col-md-6 col-lg-8 col-xl-8 d-xl-flex flex-column justify-content-xl-center align-items-xl-end">
                  <p>Thrillers Story</p>
                  <div className="d-xl-flex align-items-xl-center">
                    <p
                        className="align-items-xl-center"
                        style={{color: "rgb(39, 174, 97)", fontWeight: "bold"}}
                    >
                      $100.00
                    </p>
                  </div>
                </div>
              </div>
              <div
                  className="row"
                  style={{
                    marginTop: 14,
                    marginRight: 0,
                    border: "0.3px solid var(--bs-secondary-bg)",
                    boxShadow: "0px 0px",
                  }}
              >
                <div className="col-6 col-md-3 col-xl-3">
                  <img
                      className="float-start"
                      src="/assets/img/book19.png"
                      style={{width: 78}}
                  />
                </div>
                <div
                    className="col-6 col-md-3 col-xl-8 d-xl-flex flex-column justify-content-xl-center align-items-xl-end">
                  <p>The Myths 3</p>
                  <div className="d-xl-flex align-items-xl-center">
                    <p
                        className="align-items-xl-center"
                        style={{marginRight: 22, textDecoration: "line-through"}}
                    >
                      $600.00
                    </p>
                    <p
                        className="align-items-xl-center"
                        style={{color: "rgb(39, 174, 97)", fontWeight: "bold"}}
                    >
                      $300.00
                    </p>
                  </div>
                </div>
              </div>
              <div
                  className="row"
                  style={{
                    marginTop: 14,
                    marginRight: 0,
                    border: "0.3px solid var(--bs-secondary-bg)",
                    boxShadow: "0px 0px",
                  }}
              >
                <div className="col-6 col-md-3 col-lg-3 col-xl-3">
                  <img
                      className="float-start"
                      src="/assets/img/book7.png"
                      style={{width: 78}}
                  />
                </div>
                <div
                    className="col-6 col-md-3 col-xl-8 d-xl-flex flex-column justify-content-xl-center align-items-xl-end">
                  <p>Colorless Tsukur</p>
                  <div className="d-xl-flex align-items-xl-center">
                    <p
                        className="align-items-xl-center"
                        style={{color: "rgb(39, 174, 97)", fontWeight: "bold"}}
                    >
                      $200.00
                    </p>
                  </div>
                </div>
              </div>
              <div
                  className="row"
                  style={{
                    marginTop: 14,
                    marginRight: 0,
                    border: "0.3px solid var(--bs-secondary-bg)",
                    boxShadow: "0px 0px",
                  }}
              >
                <div className="col-6 col-md-3 col-xl-3">
                  <img
                      className="float-start"
                      src="/assets/img/book3.png"
                      style={{width: 78}}
                  />
                </div>
                <div
                    className="col-6 col-md-3 col-xl-8 d-xl-flex flex-column justify-content-xl-center align-items-xl-end">
                  <p>The Thrid Planet</p>
                  <div className="d-xl-flex align-items-xl-center">
                    <p
                        className="align-items-xl-center"
                        style={{marginRight: 22, textDecoration: "line-through"}}
                    >
                      $100.00
                    </p>
                    <p
                        className="align-items-xl-center"
                        style={{color: "rgb(39, 174, 97)", fontWeight: "bold"}}
                    >
                      $30.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div
                  className="row"
                  style={{
                    marginTop: 14,
                    marginRight: 0,
                    border: "1px solid var(--bs-secondary-bg)",
                    borderBottomColor: "var(--bs-secondary-bg)",
                  }}
              >
                <div className="col-6 col-md-3 col-xl-3">
                  <img
                      className="float-start"
                      src="/assets/img/book14.png"
                      style={{width: 78}}
                  />
                </div>
                <div
                    className="col-6 col-md-3 col-xl-8 d-xl-flex flex-column justify-content-xl-center align-items-xl-end">
                  <p>The Book Of Love</p>
                  <div className="d-xl-flex align-items-xl-center">
                    <p
                        className="align-items-xl-center"
                        style={{color: "rgb(39, 174, 97)", fontWeight: "bold"}}
                    >
                      $400.00
                    </p>
                  </div>
                </div>
              </div>
              <div
                  className="row"
                  style={{
                    marginTop: 14,
                    marginRight: 0,
                    border: "1px solid var(--bs-secondary-bg)",
                    borderBottomColor: "var(--bs-secondary-bg)",
                  }}
              >
                <div className="col-6 col-md-3 col-xl-3">
                  <img
                      className="float-start"
                      src="/assets/img/book10.png"
                      style={{width: 78}}
                  />
                </div>
                <div
                    className="col-6 col-md-3 col-xl-8 d-xl-flex flex-column justify-content-xl-center align-items-xl-end">
                  <p>Vacation</p>
                  <div className="d-xl-flex align-items-xl-center">
                    <p
                        className="align-items-xl-center"
                        style={{marginRight: 22, textDecoration: "line-through"}}
                    >
                      $600.00
                    </p>
                    <p
                        className="align-items-xl-center"
                        style={{color: "rgb(39, 174, 97)", fontWeight: "bold"}}
                    >
                      $259.00
                    </p>
                  </div>
                </div>
              </div>
              <div
                  className="row"
                  style={{
                    marginTop: 14,
                    marginRight: 0,
                    border: "1px solid var(--bs-secondary-bg)",
                    borderBottomColor: "var(--bs-secondary-bg)",
                  }}
              >
                <div className="col-6 col-md-3 col-xl-3">
                  <img
                      className="float-start"
                      src="/assets/img/book9.png"
                      style={{width: 78}}
                  />
                </div>
                <div
                    className="col-6 col-md-3 col-xl-8 d-xl-flex flex-column justify-content-xl-center align-items-xl-end">
                  <p>2states</p>
                  <div className="d-xl-flex align-items-xl-center">
                    <p
                        className="align-items-xl-center"
                        style={{color: "rgb(39, 174, 97)", fontWeight: "bold"}}
                    >
                      $300.00
                    </p>
                  </div>
                </div>
              </div>
              <div
                  className="row"
                  style={{
                    marginTop: 14,
                    marginRight: 0,
                    border: "1px solid var(--bs-secondary-bg)",
                    borderBottomColor: "var(--bs-secondary-bg)",
                  }}
              >
                <div className="col-6 col-md-3 col-xl-3">
                  <img
                      className="float-start"
                      src="/assets/img/book6.png"
                      style={{width: 78}}
                  />
                </div>
                <div
                    className="col-6 col-md-3 col-xl-8 d-xl-flex flex-column justify-content-xl-center align-items-xl-end">
                  <p>Loving Kitchen 2</p>
                  <div className="d-xl-flex align-items-xl-center">
                    <p
                        className="align-items-xl-center"
                        style={{marginRight: 22, textDecoration: "line-through"}}
                    >
                      $400.00
                    </p>
                    <p
                        className="align-items-xl-center"
                        style={{color: "rgb(39, 174, 97)", fontWeight: "bold"}}
                    >
                      $20.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-7 col-xl-3">
              <div
                  className="row"
                  style={{
                    marginTop: 14,
                    border: "1px solid var(--bs-secondary-bg)",
                    borderBottomColor: "var(--bs-secondary-bg)",
                  }}
              >
                <div className="col-6 col-md-4 col-xl-3">
                  <img
                      className="float-start"
                      src="/assets/img/book23.png"
                      style={{width: 78}}
                  />
                </div>
                <div
                    className="col-6 col-md-7 col-xl-8 d-xl-flex flex-column justify-content-xl-center align-items-xl-end">
                  <p>Suspendisse Vel</p>
                  <div className="d-xl-flex align-items-xl-center">
                    <p
                        className="align-items-xl-center"
                        style={{color: "rgb(39, 174, 97)", fontWeight: "bold"}}
                    >
                      $100.00
                    </p>
                  </div>
                </div>
              </div>
              <div
                  className="row"
                  style={{
                    marginTop: 14,
                    border: "1px solid var(--bs-secondary-bg)",
                    borderBottomColor: "var(--bs-secondary-bg)",
                  }}
              >
                <div className="col-6 col-md-4 col-xl-3">
                  <img
                      className="float-start"
                      src="/assets/img/book17.png"
                      style={{width: 78}}
                  />
                </div>
                <div
                    className="col-6 col-md-7 col-xl-8 d-xl-flex flex-column justify-content-xl-center align-items-xl-end">
                  <p>Nam Dolor Felis</p>
                  <div className="d-xl-flex align-items-xl-center">
                    <p
                        className="align-items-xl-center"
                        style={{marginRight: 22, textDecoration: "line-through"}}
                    >
                      $105.00
                    </p>
                    <p
                        className="align-items-xl-center"
                        style={{color: "rgb(39, 174, 97)", fontWeight: "bold"}}
                    >
                      $100.00
                    </p>
                  </div>
                </div>
              </div>
              <div
                  className="row"
                  style={{
                    marginTop: 14,
                    border: "1px solid var(--bs-secondary-bg)",
                    borderBottomColor: "var(--bs-secondary-bg)",
                  }}
              >
                <div className="col-6 col-md-4 col-xl-3">
                  <img
                      className="float-start"
                      src="/assets/img/book1.png"
                      style={{width: 78}}
                  />
                </div>
                <div
                    className="col-6 col-md-7 col-xl-8 d-xl-flex flex-column justify-content-xl-center align-items-xl-end">
                  <p>The Storyteller</p>
                  <div className="d-xl-flex align-items-xl-center">
                    <p
                        className="align-items-xl-center"
                        style={{marginRight: 22, textDecoration: "line-through"}}
                    >
                      $50.00
                    </p>
                    <p
                        className="align-items-xl-center"
                        style={{color: "rgb(39, 174, 97)", fontWeight: "bold"}}
                    >
                      $20.00
                    </p>
                  </div>
                </div>
              </div>
              <div
                  className="row"
                  style={{
                    marginTop: 14,
                    border: "1px solid var(--bs-secondary-bg)",
                    borderBottomColor: "var(--bs-secondary-bg)",
                  }}
              >
                <div className="col-6 col-md-4 col-xl-3">
                  <img
                      className="float-start"
                      src="/assets/img/book11.png"
                      style={{width: 78}}
                  />
                </div>
                <div
                    className="col-6 col-md-7 col-xl-8 d-xl-flex flex-column justify-content-xl-center align-items-xl-end">
                  <p>Eos Lobortis</p>
                  <div className="d-xl-flex align-items-xl-center">
                    <p
                        className="align-items-xl-center"
                        style={{color: "rgb(39, 174, 97)", fontWeight: "bold"}}
                    >
                      $200.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-4 py-xl-5">
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h4>LATEST FROM OUR BLOG</h4>
              <p className="w-lg-50" style={{fontStyle: "italic"}}>
                We love to share our thoughts
              </p>
            </div>
          </div>
          <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
            <div className="col-xl-4">
              <div className="card">
                <img
                    className="card-img-top w-100 d-block fit-cover"
                    style={{height: 200}}
                    src="/assets/img/d61d44254608dd06ccdd2ff02982d14d_XL.jpg"
                />
                <div className="card-body p-4">
                  <p className="text-primary card-text mb-0">Article</p>
                  <h4 className="card-title">Best selling book - March</h4>
                  <p className="card-text">
                    The month of March saw some shakeups on the bestseller lists,
                    with new <br/>
                    fiction releases and anticipation-heavy titles hitting the top
                    spots. <br/>
                    Nora Roberts concluded her latest trilogy with The
                    Awakening...
                  </p>
                  <div className="d-flex">
                    <img
                        className="rounded-circle flex-shrink-0 me-3 fit-cover"
                        width={50}
                        height={50}
                        src="/assets/img/avatar_1.png"
                    />
                    <div>
                      <p className="fw-bold mb-0">John Smith</p>
                      <p className="text-muted mb-0">Erat netus</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                    className="card-img-top w-100 d-block fit-cover"
                    style={{height: 200}}
                    src="/assets/img/94d43e327d9303539cb1e2aac7032668_XL.jpg"
                />
                <div className="card-body p-4">
                  <p className="text-primary card-text mb-0">Article</p>
                  <h4 className="card-title">Most recommended Books</h4>
                  <p className="card-text">
                    As we bid farewell to March, a clear picture has emerged of
                    the books <br/>
                    that caught the imagination of readers this month thanks to{" "}
                    <br/>
                    word-of-mouth buzz and recommendations to friends...
                  </p>
                  <div className="d-flex">
                    <img
                        className="rounded-circle flex-shrink-0 me-3 fit-cover"
                        width={50}
                        height={50}
                        src="/assets/img/icons8-avatar-480.png"
                    />
                    <div>
                      <p className="fw-bold mb-0">John Smith</p>
                      <p className="text-muted mb-0">Erat netus</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                    className="card-img-top w-100 d-block fit-cover"
                    style={{height: 200}}
                    src="/assets/img/ada9a09acea936d776a6f55c82778c43_XL.jpg"
                />
                <div className="card-body p-4">
                  <p className="text-primary card-text mb-0">Article</p>
                  <h4 className="card-title">Top 10 E-books to read</h4>
                  <p className="card-text">
                    This months hottest digital reads showcase the diverse
                    interests of <br/>
                    modern readers. Topping the charts is the poignant literary
                    fiction The <br/>
                    Four Winds while the latest Outlander transports romantic
                    historical...
                  </p>
                  <div className="d-flex">
                    <img
                        className="rounded-circle flex-shrink-0 me-3 fit-cover"
                        width={50}
                        height={50}
                        src="/assets/img/icons8-user-foo-foo-480.png"
                    />
                    <div>
                      <p className="fw-bold mb-0">John Smith</p>
                      <p className="text-muted mb-0">Erat netus</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{marginTop: 26}}>
            <div className="col">
              <div id="pagination" className="d-flex justify-content-center">
                <a className="pagination-item disabled" href="#">
                  <img src="/assets/img/icon_arrow-left.svg"/>
                  <span>Previos</span>
                </a>
                <a className="pagination-item active" href="#">
                  1
                </a>
                <a className="pagination-item" href="#">
                  2
                </a>
                <a className="pagination-item" href="#">
                  3
                </a>
                <a className="pagination-item" href="#">
                  ...
                </a>
                <a className="pagination-item" href="#">
                  <span>Next</span>
                  <img src="/assets/img/icon_arrow-right.svg"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <section
              className="py-4 py-xl-5"
              style={{paddingTop: 0, paddingBottom: 0}}
          >
            {/* <div className="container-fluid">
              <div
                  className="text-white border rounded border-0 border-light d-flex flex-column justify-content-between align-items-center flex-lg-row p-4 p-lg-5"
                  data-bs-theme="light"
                  style={{paddingTop: 0, paddingBottom: 0, background: "rgb(25, 135, 84)"}}
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
            </div> */}
          </section>
        </div>
      </>
  );
}
