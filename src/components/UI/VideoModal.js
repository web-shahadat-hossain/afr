import React, { useState } from "react";

const VideoModal = ({ setOpen }) => {
  const [videoSrc, setVideoSrc] = useState(
    "https://www.youtube.com/embed/4JQHUFrYPtc"
  );

  const handleCloseModal = () => {
    setOpen(false); // Clear the video source when closing
  };

  return (
    <>
      {/* Video Modal */}
      <div
        className="modal modal-video fade"
        id="videoModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        onClick={handleCloseModal} // Close video when clicking outside the content
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">
                Youtube Video
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleCloseModal}
              ></button>
            </div>
            <div className="modal-body">
              {/* 16:9 aspect ratio */}
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item"
                  src={videoSrc}
                  id="video"
                  title="YouTube video"
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoModal;
