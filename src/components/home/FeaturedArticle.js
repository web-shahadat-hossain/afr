/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";

const FeaturedArticle = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          {/* Image Column */}
          <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <img className="img-fluid" src="img/article.jpg" alt="Article" />
          </div>
          {/* Text Column */}
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="section-title">
              <p className="fs-5 fw-medium fst-italic text-primary">
                Featured Article
              </p>
              <h1 className="display-6">Experience the World’s Favorite Tea</h1>
            </div>
            <p className="mb-4">
              Discover the rich taste and aroma of our premium tea, loved
              worldwide for its quality and refreshing flavor. Made from the
              finest ingredients, our tea offers a soothing and invigorating
              experience with every sip.
            </p>
            <p className="mb-4">
              Discover the rich taste and aroma of our premium tea, loved
              worldwide for its quality and refreshing flavor. Made from the
              finest ingredients, our tea offers a soothing and invigorating
              experience with every sip.
            </p>
            <a href="/" className="btn btn-primary rounded-pill py-3 px-5">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;
