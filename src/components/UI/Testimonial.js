import React from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Dynamically import OwlCarousel without SSR
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      text: "Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo",
      image: "img/testimonial-1.jpg",
      name: "Client Name",
      profession: "Profession",
    },
    {
      id: 2,
      text: "Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo",
      image: "img/testimonial-2.jpg",
      name: "Client Name",
      profession: "Profession",
    },
    {
      id: 3,
      text: "Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo",
      image: "img/testimonial-3.jpg",
      name: "Client Name",
      profession: "Profession",
    },
  ];

  return (
    <div className="container-fluid testimonial py-5 my-5">
      <div className="container py-5">
        <div
          className="section-title text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <p className="fs-5 fw-medium fst-italic text-white">Testimonial</p>
          <h1 className="display-6">What our clients say about our tea</h1>
        </div>
        <OwlCarousel
          className="owl-carousel testimonial-carousel wow fadeInUp"
          data-wow-delay="0.5s"
          loop
          margin={10}
          nav
          items={1}
          autoplay={true}
          smartSpeed={1000}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item p-4 p-lg-5">
              <p className="mb-4">{testimonial.text}</p>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  className="img-fluid flex-shrink-0"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="text-start ms-3">
                  <h5>{testimonial.name}</h5>
                  <span className="text-primary">{testimonial.profession}</span>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Testimonial;
