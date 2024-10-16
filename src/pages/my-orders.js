import DashboardLayout from "@/components/layout/DashboardLayout";
import Link from "next/link";

const MyOrders = () => {
  return (
    <DashboardLayout>
      <div className="container d-flex justify-content-center  ">
        <div className="card text-center shadow-lg p-4">
          <div className="card-body">
            <h3 className="card-title text-danger mb-3">No Orders Found</h3>

            <Link href="/product" className="btn btn-primary mt-3">
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Bootstrap Styles */}
      <style jsx>{``}</style>
    </DashboardLayout>
  );
};

export default MyOrders;
