import css from "@/styles/dashboard.module.css";
import Image from "next/image";
import Link from "next/link";
// import profile from "@/components/assets/logo/profile.jpg";
// import Image from "next/image";

const DashboardTopNav = () => {
  return (
    <nav className={` ${css.dashboard_top_nav}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <Link href="/dashboard" className="navbar-brand">
          Dashboard
        </Link>

        <div>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {/* Uncomment and use this when ready */}
              <Image
                src="/img/profile.png"
                className="icon-circle"
                alt=""
                width={40}
                height={40}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DashboardTopNav;
