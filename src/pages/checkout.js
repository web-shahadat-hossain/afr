import Layout from "@/components/layout/Layout";
import CheckoutForm from "@/components/UI/CheckoutForm";
import PageHeader from "@/components/UI/PageHeader";
import { useState } from "react";

export async function getServerSideProps(context) {
  const { product } = context.query; // Get product and price from query

  let productData = null;
  let error = null;

  try {
    const res = await fetch(
      `https://www.api.afroonbd.com/api/v1/product/single/${product}`
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    productData = data.data; // Assuming the product data is in this structure
  } catch (err) {
    error = err.message; // Capture error message
  }

  return {
    props: {
      productData, // Send product data to the page
      error, // Send error message if exists
    },
  };
}

const Checkout = ({ productData, error }) => {
  const [deliveryLocation, setDeliveryLocation] = useState("dhaka");

  if (error) {
    return <p>Error fetching product data: {error}</p>; // Display error message
  }

  if (!productData) {
    return <p>No product data found.</p>; // Handle case where no product data is returned
  }

  const discountPrice = productData.product?.discount
    ? (
        Number(productData?.product?.price) -
        (Number(productData?.product?.price) *
          Number(productData?.product?.discount)) /
          100
      ).toFixed(2)
    : productData?.product?.price;

  // Determine delivery charge based on location
  const deliveryCharge = deliveryLocation === "dhaka" ? 65 : 120;

  const totalPrice = Number(discountPrice) + Number(deliveryCharge); // Calculate total price

  return (
    <Layout>
      <PageHeader title={"Checkout"} />
      <section className="checkout_container">
        <div className="container">
          <div className="checkout_help checkout text-center p-3 bg-light">
            <h3 className="text-primary">
              ফোনে অর্ডার করতে কল করুন : +8801886866844
            </h3>
          </div>
          <div className="checkout_product checkout ">
            <h3>Order Items</h3>
            <div className="checkout_product_box d-flex justify-content-between align-items-center bg-white p-3 rounded shadow-sm">
              <div className="checkout_product_info d-flex align-items-center">
                <img
                  src={productData?.product?.image[0]} // Assuming product has an image array
                  alt="Product"
                  className="img-fluid"
                  style={{ width: "60px" }}
                />
                <h5 className="ms-3">{productData?.product?.title}</h5>{" "}
                {/* Display product title */}
              </div>
              <h6 className="text-success">৳ {totalPrice}</h6>{" "}
              {/* Display price */}
            </div>
          </div>
          <CheckoutForm
            product={productData}
            setDeliveryLocation={setDeliveryLocation}
            deliveryLocation={deliveryLocation}
            totalPrice={totalPrice}
          />
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
