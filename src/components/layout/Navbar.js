import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../assets/img/logo.png";
import { useSession } from "next-auth/react";
import Spinner from "../UI/Spinner";

const Navbar = () => {
  const router = useRouter();
  const { data: session, status } = useSession(); // Get session and status

  // Function to check if the current route matches the link href
  const isActive = (path) =>
    router.pathname === path ? "nav-item nav-link active" : "nav-item nav-link";

  // Handle different session statuses
  if (status === "loading") {
    return <Spinner />; // Show loading state
  }

  return (
    <div className="container-fluid bg-white sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-2 py-lg-0">
          <Link href="/">
            <img
              className="img-fluid"
              src={logo.src}
              alt="Logo"
              style={{ width: "82px" }}
            />
          </Link>
          <button
            type="button"
            className="navbar-toggler ms-auto me-0"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <Link href="/" className={isActive("/")}>
                Home
              </Link>
              <Link href="/product" className={isActive("/product")}>
                Products
              </Link>

              <Link href="/store" className={isActive("/store")}>
                Store
              </Link>

              <Link href="/contact" className={isActive("/contact")}>
                Contact
              </Link>
              <Link href="/dealer" className={isActive("/dealer")}>
                Dealer
              </Link>
              <Link href="/about" className={isActive("/about")}>
                About
              </Link>
              {session ? (
                <Link href="/dashboard" className={isActive("/profile")}>
                  <i className="fa fa-user mr-2"></i> {"Dashboard"}
                </Link>
              ) : (
                <Link href="/login" className={isActive("/login")}>
                  <i className="fa fa-sign-in-alt mr-2"></i> Login
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
