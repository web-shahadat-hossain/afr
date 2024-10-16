// pages/success.js
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/UI/PageHeader";
import Link from "next/link";
import { useRouter } from "next/router";

const SuccessPage = () => {
  const router = useRouter();
  const { orderId, totalPrice, paymentMethod, deliveryAddress } = router.query;

  return (
    <Layout>
      <PageHeader title={"Success"} />
      <div className="container text-center my-5">
        <h1>Thank You for Your Order!</h1>
        <div className="my-4">
          <span
            className="success-icon"
            style={{ fontSize: "100px", color: "green" }}
          >
            &#10004;
          </span>
        </div>
        <p className="lead">Your order has been successfully placed.</p>

        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Order Details</h5>
            <p className="card-text">
              <strong>Order ID:</strong> {orderId}
              <br />
              <strong>Total Price:</strong> {totalPrice}
              <br />
              <strong>Payment Method:</strong> {paymentMethod}
              <br />
              <strong>Delivery Address:</strong> {deliveryAddress}
            </p>
          </div>
        </div>

        <Link href="/">
          <span className="btn btn-primary">Return to Home</span>
        </Link>
      </div>
    </Layout>
  );
};

export default SuccessPage;
