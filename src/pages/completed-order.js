import axios from "axios";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useState, useEffect } from "react";
import ViewModal from "@/components/UI/ViewModal";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export const ManageOrders = ({ orders }) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState({});

  // Filter states
  const [filteredOrders, setFilteredOrders] = useState(orders.data || []);
  const [statusFilter, setStatusFilter] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(5);

  // Filter function
  const filterOrders = () => {
    let filtered = orders.data || [];

    // Filter by status
    if (statusFilter) {
      filtered = filtered.filter((order) => order.status === statusFilter);
    }

    // Filter by date
    if (startDate) {
      filtered = filtered.filter(
        (order) => new Date(order.createdAt) >= new Date(startDate)
      );
    }
    if (endDate) {
      filtered = filtered.filter(
        (order) => new Date(order.createdAt) <= new Date(endDate)
      );
    }

    setFilteredOrders(filtered);
  };

  // Effect to run the filter whenever the filters change
  useEffect(() => {
    filterOrders();
  }, [statusFilter, startDate, endDate]);

  // Pagination logic
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
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
  return (
    <DashboardLayout>
      <section className="container mt-4">
        {/* Filters */}
        <div className="row mb-3">
          <div className="col-md-3">
            <select
              onChange={(e) => setStatusFilter(e.target.value)}
              value={statusFilter}
              className="form-select"
            >
              <option value="">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          <div className="col-md-3">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-md-3">
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="form-control"
            />
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered">
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
              </tr>
            </thead>

            <tbody>
              {currentOrders.map((order, i) => (
                <tr key={i}>
                  <td>{indexOfFirstOrder + i + 1}</td>
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
                      className="btn btn-success"
                    >
                      View
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => updateHandler(order._id, order.status)}
                      className="btn btn-secondary"
                    >
                      {order?.status}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <nav>
          <ul className="pagination justify-content-center">
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                key={index}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>

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
    revalidate: 1, // Revalidate every 1 second
  };
};

export default ManageOrders;
