export default function UserInformation() {
  const userName = localStorage.getItem('username')
  return (
    <div className="container-fluid">
      <h3 className="text-dark mb-4">Profile</h3>
      <div className="card shadow mb-3">
        <div className="card-header py-3">
          <p className="text-primary m-0 fw-bold">User Settings</p>
        </div>
        <div className="card-body">
          <form>
            <div
              className="row"
              style={{ marginBottom: 25, textAlign: "left" }}
            >
              <div
                className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-xxl-2"
                style={{
                  display: "inline",
                  textAlign: "center",
                  marginBottom: 25,
                }}
              >
                <img
                  className="rounded-circle mb-3 mt-4 img-fluid"
                  src="https://cdn.vectorstock.com/i/1000x1000/79/06/cute-santa-with-a-christmas-present-flat-vector-39797906.webp"
                  style={{ display: "inline", maxHeight: 110 }}
                />
                <br />
                <button
                  id="photoBtn"
                  className="btn btn-primary btn-sm"
                  type="button"
                >
                  Change Photo
                </button>
              </div>
              <div className="col-sm-8 col-md-8 col-lg-9 col-xl-10 col-xxl-10 align-self-center">
                <div className="row">
                  <div className="col-md-12 text-start">
                    <div className="mb-3">
                      <label className="form-label" htmlFor="username">
                        <strong>userName</strong>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Username"
                        name="username"
                        required=""
                        disabled
                        value={userName}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
