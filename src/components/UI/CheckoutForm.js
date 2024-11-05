import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const CheckoutForm = ({
  product,
  setDeliveryLocation,
  deliveryLocation,
  totalPrice,
}) => {
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cash"); // Default to Cash on Delivery
  const [transactionId, setTransactionId] = useState(""); // State for transaction ID

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!customerName || !address || !contactNo) {
      toast.error("Please fill in all fields");
      return;
    }

    const formData = {
      customer_name: customerName,
      address: address,
      contact_no: contactNo,
      total_price: totalPrice,
      delivery_method: paymentMethod,
      product: product.product._id, // Assuming product has an _id field
      transaction_id: "online",
    };

    try {
      setLoading(true); // Show loading state
      const response = await fetch(
        "https://www.api.afroonbd.com/api/v1/order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to place order");
      }

      const data = await response.json();

      if (data && data.url) {
        // Assuming server returns a URL to redirect the user (like a payment gateway)
        window.location.replace(data.url);
      } else {
        toast.success("Order placed successfully!");
        const orderDetails = {
          orderId: data.data._id, // Assuming your API returns order ID
          totalPrice: data.data.total_price,
          paymentMethod: data.data.delivery_method,
          deliveryAddress: data.data.address,
        };

        // Serialize order details as a query string
        const queryString = new URLSearchParams(orderDetails).toString();
        window.location.replace(`/success?${queryString}`);
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  // Function to send the order details to Pathao API
  // const sendToPathao = async (orderData) => {
  //   const pathaoOrderData = {
  //     pickup_address: "Your Pickup Address",
  //     recipient_name: orderData.customer_name,
  //     recipient_phone: orderData.contact_no,
  //     delivery_address: orderData.address,
  //     total_price: orderData.total_price,
  //     // Add other necessary fields required by Pathao's API
  //   };

  //   try {
  //     const response = await axios.post("/api/pathao", {
  //       access_token: "eHfF3NX8zWJNSpy9dIJ5IMxEYSuSGtfw94CyVJ5j", // Use the token obtained from the previous step
  //       store_id: "222476",
  //       recipient_name: "John Doe",
  //       recipient_phone: "+880123456789",
  //       recipient_address: "123, Main Street",
  //       recipient_city: "Dhaka",
  //       recipient_zone: "Banani",
  //       delivery_type: "regular",
  //       item_type: "parcel",
  //       item_quantity: 1,
  //       item_weight: 2, // in kilograms
  //       amount_to_collect: 500, // amount to collect in BDT
  //       merchant_order_id: "MORD12345", // optional
  //       recipient_area: "Banani", // optional
  //       special_instruction: "Leave at the door if not home", // optional
  //       item_description: "Electronic accessories", // optional
  //     });

  //     console.log("Order created successfully:", response.data);
  //   } catch (error) {
  //     console.error(
  //       "Error creating order:",
  //       error.response?.data || error.message
  //     );
  //   }
  // };

  return (
    <div className="checkout mt-5">
      <form className="checkout_form" onSubmit={handleSubmit}>
        {/* Payment Method Selection */}
        <div className="mb-3">
          <label className="form-label">Payment Method</label>
          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                style={{ border: "1px solid #ced4da" }}
                id="cashOnDelivery"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={() => setPaymentMethod("cash")}
              />
              <label className="form-check-label" htmlFor="cashOnDelivery">
                Cash on Delivery
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                style={{ border: "1px solid #ced4da" }}
                type="radio"
                name="paymentMethod"
                id="onlinePayment"
                value="online"
                checked={paymentMethod === "online"}
                onChange={() => setPaymentMethod("online")}
              />
              <label className="form-check-label" htmlFor="onlinePayment">
                Online Payment (Bikash/Nagad/Bank)
              </label>
            </div>
          </div>
        </div>

        {/* Display Payment Options if Online Payment is Selected */}
        {paymentMethod === "online" && (
          <div className="mb-3">
            <label className="form-label">Payment Details</label>
            <p>Please use the following account numbers:</p>
            <ul>
              <li>Bikash: 018xxxxxxx</li>
              <li>Nagad: 019xxxxxxx</li>
              <li>Bank Account: 1234567890</li>
            </ul>
            {/* <div>
              <label htmlFor="transaction_id" className="form-label">
                Transaction ID
              </label>
              <input
                type="text"
                style={{ border: "1px solid #ced4da" }}
                className="form-control"
                id="transaction_id"
                name="transaction_id"
                placeholder="Enter your Transaction ID"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                required={paymentMethod === "online"} // Required only for online payment
              />
            </div> */}
          </div>
        )}

        {/* Delivery Location Selection */}
        <div className="mb-3">
          <label htmlFor="delivery_location" className="form-label">
            Delivery Location
          </label>
          <select
            className="form-select"
            id="delivery_location"
            value={deliveryLocation}
            onChange={(e) => setDeliveryLocation(e.target.value)}
          >
            <option value="dhaka">ঢাকা সিটির ভিতরে: ৳ 65</option>
            <option value="outside">ঢাকা সিটির বাইরে: ৳ 120</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="customer_name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            style={{ border: "1px solid #ced4da" }}
            id="customer_name"
            name="customer_name"
            placeholder="Enter your Full Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contact_no" className="form-label">
            Contact Number
          </label>
          <input
            type="tel"
            className="form-control"
            style={{ border: "1px solid #ced4da" }}
            id="contact_no"
            name="contact_no"
            placeholder="Enter your Contact No."
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <textarea
            className="form-control"
            style={{ border: "1px solid #ced4da" }}
            id="address"
            name="address"
            placeholder="Enter your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={loading}
        >
          {loading ? "Processing..." : "Purchase"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
