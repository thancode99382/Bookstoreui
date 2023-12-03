export default function Pagination() {
  return (
    <div className="row" style={{ marginTop: 26 }}>
      <div className="col">
        <div id="pagination" className="d-flex justify-content-center">
          <a className="pagination-item disabled" href="#">
            <img src="/assets/img/icon_arrow-left.svg" />
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
            <img src="/assets/img/icon_arrow-right.svg" />
          </a>
        </div>
      </div>
    </div>
  );
}
