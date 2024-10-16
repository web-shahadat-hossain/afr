import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/UI/PageHeader";
import Link from "next/link";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter(); // Initialize useRouter for redirection

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://www.api.afroonbd.com/api/v1/users/create-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      toast.success("Sign Up successfully!");

      // Redirect to login page after successful signup
      router.push("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Layout>
        <PageHeader title={" Sign up "} />
        <div className="container">
          <div className="wrapper">
            <form className="form-signin" onSubmit={handleSubmit}>
              <h2 className="form-signin-heading mb-4 text-center">
                {" "}
                Sign up{" "}
              </h2>

              {/* Full Name Input */}
              <div className="mb-3 position-relative">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-person"></i> {/* Icon for Full Name */}
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoFocus
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="mb-3 position-relative">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-envelope"></i> {/* Icon for Email */}
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="mb-3 position-relative">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon2">
                    <i className="bi bi-lock"></i>
                  </span>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    name="password"
                    placeholder="*******"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                className="btn btn-lg btn-primary btn-block w-100"
                type="submit"
              >
                Sign Up
              </button>
            </form>

            {/* Signup Link */}
            <p className="account-signup text-center mt-4">
              Already have an account? <Link href="/login">Log in here</Link>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Signup;
