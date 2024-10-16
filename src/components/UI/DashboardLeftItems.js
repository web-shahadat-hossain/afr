import css from "@/styles/dashboard.module.css";
import { signOut } from "next-auth/react";
import Link from "next/link";

const DashboardLeftItems = ({ userItem }) => {
  const handleLogoutClick = () => {
    console.log("User logged out");
    signOut({ callbackUrl: "/login" }); // Redirect to login page after logout
  };

  return (
    <aside className={`bg-light ${css.dashboard_left_items}`}>
      <div className="p-3">
        <h3>Dashboard</h3>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link href="/" className="nav-link">
              <i className="fa-solid fa-house-chimney"></i> Home
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link href="/dashboard/analysis" className="nav-link">
              <i className="fa-solid fa-chart-simple"></i> Analysis
            </Link>
          </li> */}

          {userItem?.role === "admin" ? (
            <li className="nav-item">
              <Link href="/all-order" className="nav-link">
                <i className="fa-solid fa-arrow-trend-up"></i> All Orders
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link href="/my-orders" className="nav-link">
                <i className="fa-solid fa-arrow-trend-up"></i> My Orders
              </Link>
            </li>
          )}

          {userItem?.role === "admin" && (
            <>
              <li className="nav-item">
                <Link href="/completed-order" className="nav-link">
                  <i className="fa-solid fa-arrow-trend-up"></i> Completed
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/upload-product" className="nav-link">
                  <i className="fa-solid fa-circle-plus"></i> Upload Product
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/manage-products" className="nav-link">
                  <i className="fa-solid fa-people-roof"></i> Manage Products
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="p-3">
        <h3>Settings</h3>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link href="/dashboard" className="nav-link">
              <i className="fa-solid fa-user"></i> My Profile
            </Link>
          </li>
          {userItem?.role === "admin" && (
            <li className="nav-item">
              <Link href="/make-admin" className="nav-link">
                <i className="fa-solid fa-dice-d6"></i> Make Admin
              </Link>
            </li>
          )}
        </ul>
      </div>
      <button className="btn btn-danger m-3" onClick={handleLogoutClick}>
        Logout
      </button>
    </aside>
  );
};

export default DashboardLeftItems;
