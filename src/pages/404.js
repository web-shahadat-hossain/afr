import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/UI/PageHeader";
import Link from "next/link";

const NotFound = () => {
  return (
    <Layout>
      <PageHeader title={"Not Found"} />
      <div className="container-xxl py-5">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              {/* Exclamation triangle icon */}
              <i className="bi bi-exclamation-triangle display-1 text-primary"></i>

              {/* 404 Title */}
              <h1 className="display-1">404</h1>

              {/* Page not found message */}
              <h1 className="mb-4">Page Not Found</h1>

              {/* Informational text */}
              <p className="mb-4">
                We’re sorry, the page you have looked for does not exist on our
                website! Maybe go to our home page or try to use a search?
              </p>

              {/* Link to go back to home */}
              <Link href="/">
                <span className="btn btn-primary rounded-pill py-3 px-5">
                  Go Back To Home
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
