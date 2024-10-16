import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import css from "@/styles/dashboard.module.css"; // Retain your custom styles
import DashboardTopNav from "../UI/DashboardTopNav";
import DashboardLeftItems from "../UI/DashboardLeftItems";
import Spinner from "../UI/Spinner";

const DashboardLayout = ({ children }) => {
  const { data: session, status } = useSession();

  if (status === "loading") return <Spinner />;

  // If not authenticated, redirect to login page
  if (status === "unauthenticated") {
    signIn(); // Redirect to login
    return null;
  }

  return (
    <div className="container">
      <DashboardTopNav />
      <div className="container">
        <div className="row ">
          <div className="col-md-3">
            <DashboardLeftItems userItem={session} />
          </div>
          <div className={`col-md-9 ${css.dashboard_right_content}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
