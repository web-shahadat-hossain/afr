import axios from "axios";
import css from "@/styles/dashboard.module.css";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useState } from "react";
import Spinner from "@/components/UI/Spinner";
import ViewModal from "@/components/UI/ViewModal";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const ManageOrders = ({ orders }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const router = useRouter();

  // Delete order handler
  const deleteHandler = async (id) => {
    if (confirm("Are you sure you want to delete this order?")) {
      try {
        setIsLoading(true);
        await axios.delete(`https://www.api.afroonbd.com/api/v1/order/${id}`);
        toast("Order deleted successfully!");
        // Optionally refresh or fetch updated data
      } catch (error) {
        console.error("Error deleting order:", error);
        alert("Error deleting the order. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Update order status handler
  const updateHandler = async (id, currentStatus) => {
    let newStatus;
    switch (currentStatus) {
      case "pending":
        newStatus = "completed";
        break;
      case "completed":
        newStatus = "cancelled";
        break;
      case "cancelled":
        newStatus = "pending";
        break;
      default:
        newStatus = "pending"; // Fallback case
    }

    try {
      setIsLoading(true);
      const data = await axios.patch(
        `https://www.api.afroonbd.com/api/v1/order/${id}`,
        {
          status: newStatus,
        }
      );
      toast(`Order status updated to ${newStatus}!`);
      router.reload(); // Reload page to reflect changes

      // Optionally refresh or fetch updated data
    } catch (error) {
      console.error("Error updating order status:", error);
      toast("Error updating order status. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Filter orders to show only pending ones
  const pendingOrders = orders?.data?.filter(
    (order) => order.status === "pending"
  );

  return (
    <DashboardLayout>
      <section className={css.all_order_container}>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Full Name</th>
                <th>Contact No</th>
                <th>Address</th>
                <th>Price</th>
                <th>Shipping</th>
                <th>Product</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>
            {isLoading ? (
              <Spinner />
            ) : (
              <tbody>
                {pendingOrders?.map((order, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{order?.customer_name}</td>
                    <td>{order?.contact_no}</td>
                    <td>{order?.address}</td>
                    <td>৳{order?.total_price}</td>
                    <td>{order?.delivery_method}</td>
                    <td>
                      <button
                        onClick={() => {
                          setOpen(true);
                          setItems(order?.product);
                        }}
                        className={css.status_success}
                      >
                        View
                      </button>
                    </td>
                    <td>
                      {/* Update order status button */}
                      <button
                        onClick={() => updateHandler(order._id, order.status)}
                        className={css.status_pending}
                      >
                        {order?.status}
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => deleteHandler(order._id)}
                        className={css.order_delete}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
        {open && <ViewModal products={items} setOpen={setOpen} />}
      </section>
    </DashboardLayout>
  );
};

// Fetch orders using getStaticProps
export const getStaticProps = async () => {
  let orders = [];

  try {
    const response = await axios.get(
      "https://www.api.afroonbd.com/api/v1/order"
    );
    orders = response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
  }

  return {
    props: {
      orders,
    },
    revalidate: 1, // Revalidate every second
  };
};

export default ManageOrders;
