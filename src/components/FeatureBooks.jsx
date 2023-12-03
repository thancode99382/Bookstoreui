// import { featureBooksJson } from "../json/FeatureBooksJson";
// import { FeatureBooksJson } from '../json/FeatureBooksJson'
// import FeatureBooksRender from "../json/FeatureBooksJson";

import FeatureBooksRender from "./FeatureBooksRender";

export default function FeatureBooks() {
  return (
    <div className="container" style={{ marginTop: 28 }}>
      <div className="row d-xl-flex justify-content-xl-center">
        <div className="col-xl-3">
          <div>
            <p
              className="d-xl-flex justify-content-xl-center"
              style={{ fontWeight: "bold", fontSize: 19 }}
            >
              NEW ARRIVALS
            </p>
          </div>
        </div>
        <div className="col-xl-3">
          <div />
          <p
            className="d-xl-flex justify-content-xl-center"
            style={{ fontWeight: "bold", fontSize: 19 }}
          >
            FEATURED PRODUCTS
          </p>
        </div>
        <div className="col-xl-3">
          <div />
          <p
            className="d-xl-flex justify-content-xl-center"
            style={{ fontWeight: "bold", fontSize: 19 }}
          >
            STAFF PICKS
          </p>
        </div>
      </div>
      <div className="row row-cols-2 d-xl-flex justify-content-xl-center">
        <div className="col-xl-3">
          <FeatureBooksRender from={0} to={4} />
        </div>
        <div className="col-xl-3">
          <FeatureBooksRender from={4} to={8} />
        </div>
        <div className="col-xl-3">
          <FeatureBooksRender from={8} to={12} />
        </div>
      </div>
    </div>
  );
}
