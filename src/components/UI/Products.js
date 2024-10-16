import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const Products = ({ latestProducts }) => {
  const products = [
    {
      id: 1,
      title: "Black Tea",
      category: "black-tea",
      imgSrc: "/img/product-2.jpg",
      description:
        "Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum.",
    },
    {
      id: 2,
      title: "gold-tea",
      imgSrc: "/img/product-3.jpg",
      description:
        "Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum.",
    },
    {
      id: 3,
      title: "Organic Tea",
      category: "organic-tea",
      imgSrc: "/img/product-4.jpg",
      description:
        "Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum.",
    },
    {
      id: 4,
      title: "Green Tea",
      category: "green-tea",
      imgSrc: "/img/product-4.jpg",
      description:
        "Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum.",
    },
  ];

  // Slick Slider settings for responsiveness
  const settings = {
    dots: true, // Shows dots below the carousel
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 1, // Number of slides to scroll on click
    autoplay: false, // Enable auto slide
    autoplaySpeed: 3000, // Auto-slide interval (3 seconds)
    responsive: [
      {
        breakpoint: 1024, // For desktop screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container-fluid product py-5 ">
      <div className="container py-5 ">
        <div
          className="section-title text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <p className="fs-5 fw-medium fst-italic text-primary">Our Products</p>
          <h1 className="display-6">
            Tea has a complex positive effect on the body
          </h1>
        </div>
        <Slider {...settings}>
          {products.map((product) => (
            <Link
              href={{
                pathname: "/store",
                query: { category: "black-tea" },
              }}
              className="d-block product-item rounded"
              key={product.id}
            >
              <img src={product.imgSrc} alt={product.title} />
              <div className="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
                <h4 className="text-primary">{product.title}</h4>
                <span className="text-body">{product.description}</span>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Products;
