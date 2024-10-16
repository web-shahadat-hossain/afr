import Link from "next/link";
import React from "react";

const Store = ({ latestProducts }) => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="section-title text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <p className="fs-5 fw-medium fst-italic text-primary">Online Store</p>
          <h1 className="display-6">Want to stay healthy? Choose tea taste</h1>
        </div>
        <div className="row g-4">
          {latestProducts?.map((product) => (
            <div
              key={product._id}
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={product.delay}
            >
              <div className="store-item position-relative text-center">
                <img
                  className="img-fluid"
                  src={product.image[0]}
                  alt={product.title}
                />
                <div className="p-4">
                  <div className="text-center mb-3">
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                  </div>
                  <h4 className="mb-3">{product.title}</h4>
                  <p>{product.description.slice(0, 80)}...</p>
                  <h4 className="text-primary">৳{product.price}</h4>
                </div>
                <div className="store-overlay">
                  <Link
                    href={`/product/${product._id}`}
                    className="btn btn-primary rounded-pill py-2 px-4 m-2"
                  >
                    More Detail <i className="fa fa-arrow-right ms-2"></i>
                  </Link>
                  <Link
                    href={`/product/${product._id}`}
                    className="btn btn-dark rounded-pill py-2 px-4 m-2"
                  >
                    Add to Cart <i className="fa fa-cart-plus ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <div
            className="col-12 text-center wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <Link
              href="/product"
              className="btn btn-primary rounded-pill py-3 px-5"
            >
              View More Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
