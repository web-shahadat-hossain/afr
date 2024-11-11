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
      text: "I have been working with AfroonBD for several months now, and I must say, their service has been exceptional. The team is highly professional, responsive, and dedicated to delivering top-quality work. I’m impressed by their attention to detail and commitment to meeting deadlines. I highly recommend AfroonBD for anyone looking for reliable and innovative solutions.",
      image: "img/profile.png",
      name: "Rafiqur Rahman",
      profession: "Dhaka, Bangladesh",
    },
    {
      id: 2,
      text: "AfroonBD has been an amazing partner for our digital marketing needs. Their strategies are clear, effective, and tailored to our specific goals. They helped increase our online presence and brought in more customers. Their team is friendly, professional, and always available to help with any questions. I’m very satisfied with their service and will continue to work with them in the future",
      image: "img/profile.png",
      name: "Sultana Begum",
      profession: " Chittagong, Bangladesh",
    },
    {
      id: 3,
      text: "We approached AfroonBD for video editing and digital content creation, and they exceeded our expectations. They were quick, efficient, and the final product was of the highest quality. Their creative team understood our vision and executed it perfectly. We’re thrilled with the results and will definitely continue working with AfroonBD for future projects.",
      image: "img/profile.png",
      name: "Jamal Hossain",
      profession: "Barisal, Bangladesh",
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
