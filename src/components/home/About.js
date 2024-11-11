import React from "react";

const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-end">
                <img
                  className="img-fluid bg-white w-100 mb-3 wow fadeIn"
                  data-wow-delay="0.1s"
                  src="/img/about-1.jpg"
                  alt="About Image 1"
                />
                <img
                  className="img-fluid bg-white w-50 wow fadeIn"
                  data-wow-delay="0.2s"
                  src="/img/about-3.jpg"
                  alt="About Image 3"
                />
              </div>
              <div className="col-6">
                <img
                  className="img-fluid bg-white w-50 mb-3 wow fadeIn"
                  data-wow-delay="0.3s"
                  src="/img/about-4.jpg"
                  alt="About Image 4"
                />
                <img
                  className="img-fluid bg-white w-100 wow fadeIn"
                  data-wow-delay="0.4s"
                  src="/img/about-2.jpg"
                  alt="About Image 2"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="section-title">
              <p className="fs-5 fw-medium fst-italic text-primary">About Us</p>
              <h1 className="display-6">
                The success history of Afroon e-Shop in 25 years
              </h1>
            </div>
            <div className="row g-3 mb-4">
              <div className="col-sm-4">
                <img
                  className="img-fluid bg-white w-100"
                  src="/img/about-5.jpg"
                  alt="About Image 5"
                />
              </div>
              <div className="col-sm-8">
                <h5>Experience the World’s Favorite Tea</h5>
                <p className="mb-0">
                  Discover the rich taste and aroma of our premium tea, loved
                  worldwide for its quality and refreshing flavor. Made from the
                  finest ingredients, our tea offers a soothing and invigorating
                  experience with every sip.
                </p>
              </div>
            </div>
            <div className="border-top mb-4"></div>
            <div className="row g-3">
              <div className="col-sm-8">
                <h5>Daily use of a cup of tea is good for your health</h5>
                <p className="mb-0">
                  Yes, drinking a cup of tea daily can be very beneficial for
                  your health. Many studies have shown that regular, moderate
                  consumption of tea—especially black or green tea—can
                  contribute positively to various aspects of well-being. Here
                  are some key reasons why having a cup of tea every day is good
                  for you.
                </p>
              </div>
              <div className="col-sm-4">
                <img
                  className="img-fluid bg-white w-100"
                  src="/img/about-6.jpg"
                  alt="About Image 6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
