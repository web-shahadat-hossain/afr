import React from "react";

const Contact = () => {
  return (
    <div className="container-xxl contact py-5">
      <div className="container">
        <div
          className="section-title text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <p className="fs-5 fw-medium fst-italic text-primary">Contact Us</p>
          <h1 className="display-6">Contact us right now</h1>
        </div>
        <div
          className="row justify-content-center wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="col-lg-8">
            <p className="text-center mb-5">
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
              ipsum et lorem et sit, sed stet lorem sit clita duo justo Diam
              dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
              ipsum et lorem et sit, sed stet lorem sit clita duo justo.
            </p>
            <div className="row g-5">
              <div
                className="col-md-4 text-center wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="btn-square mx-auto mb-3">
                  <i className="fa fa-envelope fa-2x text-white"></i>
                </div>
                <p className="mb-2">info@afroonbd.com</p>
                <p className="mb-0">support@afroonbd.com</p>
              </div>
              <div
                className="col-md-4 text-center wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="btn-square mx-auto mb-3">
                  <i className="fa fa-phone fa-2x text-white"></i>
                </div>
                <p className="mb-2">+8801886866844</p>
                <p className="mb-0">+8801886866844</p>
              </div>
              <div
                className="col-md-4 text-center wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="btn-square mx-auto mb-3">
                  <i className="fa fa-map-marker-alt fa-2x text-white"></i>
                </div>
                <p className="mb-2">Bhogai, Monahargunj, </p>
                <p className="mb-0">Cumilla-3570, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
