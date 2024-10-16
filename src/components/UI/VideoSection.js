/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";
import VideoModal from "./VideoModal";

const VideoSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="container-fluid video my-5">
        <div className="container">
          <div className="row g-0">
            {/* Left Content */}
            <div className="col-lg-6 py-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="py-5">
                <h1 className="display-6 mb-4">
                  Tea is a drink of <span className="text-white">health</span>{" "}
                  and <span className="text-white">beauty</span>
                </h1>
                <h5 className="fw-normal lh-base fst-italic text-white mb-5">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </h5>

                {/* List Items */}
                <div className="row g-4 mb-5">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 btn-lg-square bg-white text-primary rounded-circle me-3">
                        <i className="fa fa-check"></i>
                      </div>
                      <span className="text-dark">Great tea assortment</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 btn-lg-square bg-white text-primary rounded-circle me-3">
                        <i className="fa fa-check"></i>
                      </div>
                      <span className="text-dark">Spices & additives</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 btn-lg-square bg-white text-primary rounded-circle me-3">
                        <i className="fa fa-check"></i>
                      </div>
                      <span className="text-dark">Unique accessories</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 btn-lg-square bg-white text-primary rounded-circle me-3">
                        <i className="fa fa-check"></i>
                      </div>
                      <span className="text-dark">
                        Good for health & beauty
                      </span>
                    </div>
                  </div>
                </div>
                <a className="btn btn-light rounded-pill py-3 px-5" href="/">
                  Explore More
                </a>
              </div>
            </div>

            {/* Video Section */}
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div
                className="h-100 d-flex align-items-center justify-content-center"
                style={{ minHeight: "300px" }}
              >
                <button
                  onClick={() => setOpen(true)}
                  type="button"
                  className="btn-play"
                  data-bs-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                  data-bs-target="#videoModal"
                >
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {open && <VideoModal setOpen={setOpen} />}
    </>
  );
};

export default VideoSection;
