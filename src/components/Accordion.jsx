// import brick_png from "../../assets/img/bg_brick.jpg";
import brick_png from "/assets/img/bg_brick.jpg";
import { slides } from "../json/Slide";

export default function Accordion() {
  return (
    <div
      className="row"
      style={{
        background: `url(${brick_png})`,
        paddingLeft: 26,
        paddingRight: 26,
      }}
    >
      <div className="col-xl-3 d-xl-flex flex-column justify-content-xl-center">
        <h2 style={{ color: "#27ae61", fontWeight: "bold" }}>
          CHOOSE YOUR BRAIN FOOD
        </h2>
        <h2 className="fw-bolder" style={{ marginTop: 30 }}>
          SALES UP TO 70% OFF
        </h2>
        <div>
          <button
            className="btn btn-primary"
            type="button"
            style={{ background: "#229955", fontWeight: "bold" }}
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
            {slides.map((slide, index) => (
              <li key={index}>
                <a className="image_title" href="#">
                  {slide.title}
                </a>
                <a href="">
                  <img src={slide.imageUrl} alt={slide.title} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
