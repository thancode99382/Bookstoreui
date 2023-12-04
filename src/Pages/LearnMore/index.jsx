import { useContext } from "react";
import { CardProductContext } from "../../components/CardProductProvider";
function LearnMore() {
  const { cardProduct } = useContext(CardProductContext);
  return (
    <div className="container border border-2 mt-5 p-5 rounded">
      <div className="row">
        <div className="col">
          <div
            className="row d-lg-flex justify-content-lg-start"
            style={{ marginTop: "24px " }}
          >
            <div className="col d-lg-flex align-items-lg-center justify-content-xl-center">
              <img
                src={cardProduct.image}
                style={{ width: "392px", height: "394px" }}
              />
            </div>
          </div>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              type="button"
              className="btn btn-outline-success border-2"
              style={{ width: "218px", marginRight: "20px" }}
            >
              Thêm vào giỏ hàng
            </button>

            <button
              type="button"
              className="btn btn-success  border-2"
              style={{ width: "218px" }}
            >
              Mua Ngay
            </button>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <p>
                <br />
                <strong>
                  <span style={{ color: " rgb(51, 51, 51)" }}>
                    {cardProduct.title}
                  </span>
                </strong>
                <br />
                <br />
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col">
                  <p>
                    <span style={{ color: " rgb(51, 51, 51)" }}>
                      Nhà cung cấp:
                    </span>
                    <a href="https://www.fahasa.com/tan-viet">
                      <strong>
                        <span style={{ color: " rgb(36, 137, 244)" }}>
                          Tân Việt
                        </span>
                      </strong>
                    </a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>
                    <span style={{ color: " rgb(51, 51, 51)" }}>
                      Nhà xuất bản:
                    </span>
                    <strong>
                      <span style={{ color: " rgb(51, 51, 51)" }}>Dân Trí</span>
                    </strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col d-xl-flex justify-content-xl-end">
                  <p>
                    <span style={{ color: " rgb(51, 51, 51)" }}>Tác giả:</span>
                    <strong>
                      <span style={{ color: " rgb(51, 51, 51)" }}>
                        {cardProduct.author}
                      </span>
                    </strong>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col d-xl-flex justify-content-xl-end">
                  <p>
                    <span style={{ color: " rgb(51, 51, 51)" }}>
                      Hình thức bìa:
                    </span>
                    <strong>
                      <span style={{ color: " rgb(51, 51, 51)" }}>
                        Bìa Cứng
                      </span>
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>
                <br />
                <strong>
                  <span
                    style={{
                      color: "rgb(201, 33, 39)",
                      backgroundColor: "transparent",
                    }}
                  >
                    {cardProduct.price}
                  </span>
                </strong>
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "rgb(13, 14, 15)",
                  }}
                >
                  245.000
                </span>
                <strong>
                  <span
                    style={{
                      color: "rgb(255, 255, 255)",
                      backgroundColor: "rgb(201, 33, 39)",
                    }}
                  >
                    -40%
                  </span>
                </strong>
                <br />
                <br />
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col">
                  <p>
                    <span style={{ color: "rgb(51, 51, 51)" }}>
                      Thời gian giao hàng
                    </span>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>
                    <span style={{ color: "rgb(51, 51, 51)" }}>
                      Chính sách đổi trả
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col">
                  <p>Giao hàng đến</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>
                    <span style={{ color: "rgb(51, 51, 51)" }}>
                      Đổi trả sản phẩm trong30ngày
                    </span>
                    <strong>
                      <span style={{ color: "rgb(36, 137, 244)" }}>
                        Xem thêm
                      </span>
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>
                <br />
                <span style={{ color: "rgb(85, 85, 85)" }}>Số lượng:</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnMore;
