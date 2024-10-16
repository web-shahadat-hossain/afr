import { useState } from "react";
import axios from "axios";
import css from "@/styles/dashboard.module.css";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Image from "next/image";
import Spinner from "@/components/UI/Spinner";
import { useRouter } from "next/router";

const ManageProducts = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // State to store the selected product for updating
  const [updatedProduct, setUpdatedProduct] = useState({
    title: "",
    price: "",
    category: "",
    discount: 0,
    stock: 0,
  }); // State to hold form data
  const productsPerPage = 5;
  const router = useRouter();

  if (!products) {
    return <Spinner />;
  }

  const totalPages = Math.ceil(products.data.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.data.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
      try {
        setLoading(true);
        await axios.delete(
          `https://www.api.afroonbd.com/api/v1/product/delete/${id}`
        );
        alert("Product deleted successfully!");
        router.reload();
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Error deleting the product. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  // Open modal and set product data for updating
  const handleUpdateClick = (product) => {
    setUpdatedProduct({
      title: product.title,
      price: product.price,
      category: product.category,
      discount: product.discount,
      stock: product.stock,
    });
  };

  // Handle input changes in the modal
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  // Submit the updated product
  const handleUpdateSubmit = async () => {
    try {
      const response = await axios.patch(
        `https://www.api.afroonbd.com/api/v1/product/update/${selectedProduct._id}`,
        updatedProduct
      );
      if (response.status === 200) {
        alert("Product updated successfully!");
        router.reload(); // Reload page to reflect changes
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <DashboardLayout>
      <section className={css.all_order_container}>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Images</th>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts?.map((product, i) => (
                <tr key={i}>
                  <td>{indexOfFirstProduct + i + 1}</td>
                  <td>
                    <Image
                      src={product?.image[0]}
                      alt={product?.title}
                      width={100}
                      height={50}
                    />
                  </td>
                  <td>{product?.title}</td>
                  <td>{product?.category}</td>
                  <td>{product?.price}</td>
                  <td>
                    <button
                      className={css.status_pending}
                      onClick={() => handleUpdateClick(product)}
                      data-bs-toggle="modal"
                      data-bs-target="#updateProductModal"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className={css.order_delete}
                      onClick={() => handleDelete(product._id)}
                      disabled={loading}
                    >
                      {loading ? (
                        "Deleting..."
                      ) : (
                        <i className="fa-solid fa-trash"></i>
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <ul className="pagination-list">
            <li
              className={`pagination-item ${
                currentPage === 1 ? "disabled" : ""
              }`}
            >
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => (
              <li
                key={i}
                className={`pagination-item ${
                  currentPage === i + 1 ? "active" : ""
                }`}
              >
                <button onClick={() => paginate(i + 1)}>{i + 1}</button>
              </li>
            ))}
            <li
              className={`pagination-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      </section>

      {/* Bootstrap Modal for Updating Product */}
      <div
        className="modal fade"
        id="updateProductModal"
        tabIndex="-1"
        aria-labelledby="updateProductModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="updateProductModalLabel">
                Update Product
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={updatedProduct.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    name="price"
                    value={updatedProduct.price}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">
                    Category
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="category"
                    name="category"
                    value={updatedProduct.category}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">
                    Discount
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="discount"
                    name="discount"
                    value={updatedProduct.discount}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">
                    Stock
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="stock"
                    name="stock"
                    value={updatedProduct.stock}
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpdateSubmit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pagination {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
        .pagination-list {
          display: flex;
          list-style: none;
        }
        .pagination-item {
          margin: 0 5px;
        }
        .pagination-item button {
          padding: 10px 15px;
          border: 1px solid #ccc;
          background-color: white;
          cursor: pointer;
        }
        .pagination-item.active button {
          background-color: #007bff;
          color: white;
        }
        .pagination-item.disabled button {
          cursor: not-allowed;
          background-color: #e9ecef;
        }
      `}</style>
    </DashboardLayout>
  );
};

export const getStaticProps = async () => {
  let products = [];

  try {
    const response = await axios.get(
      "https://www.api.afroonbd.com/api/v1/product"
    );
    products = response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return {
    props: {
      products,
    },
    revalidate: 1, // Revalidate every 5 seconds
  };
};

export default ManageProducts;
