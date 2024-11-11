/* eslint-disable react/no-unescaped-entities */
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/UI/PageHeader";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      setStatus("Message sent successfully!");
    } else {
      setStatus("Error sending message. Please try again.");
    }

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Layout>
      <PageHeader title={"Contact Us"} />
      <div className="container-xxl contact py-5">
        <div className="container">
          <div
            className="section-title text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <p className="fs-5 fw-medium fst-italic text-primary">Contact Us</p>
            <h1 className="display-6">
              If You Have Any Query, Please Contact Us
            </h1>
          </div>
          <div className="row g-5 mb-5">
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
              <p className="mb-2">Bhogai, Monahargunj,</p>
              <p className="mb-0">Cumilla-3570, Bangladesh</p>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h3 className="mb-4">Get in Touch with Us</h3>
              <p className="mb-4">
                Need assistance or have any questions? Our contact form is here
                to make reaching out easy. Fill in your details, and our team
                will get back to you as soon as possible. We're here to help
                with anything you need!
              </p>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        name="message"
                        style={{ height: "120px" }}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary rounded-pill py-3 px-5"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                  {status && (
                    <div className="col-12">
                      <p className="text-success">{status}</p>
                    </div>
                  )}
                </div>
              </form>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <iframe
                  className="w-100 rounded"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.510405038347!2d91.12786779999999!3d23.078404399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754998624e03ec3%3A0x9233b86f04edd5ac!2sAfroon%20tea%20supplier's!5e0!3m2!1sen!2sbd!4v1727266524268!5m2!1sen!2sbd"
                  frameBorder="0"
                  style={{ height: "100%", minHeight: "300px", border: "0" }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
