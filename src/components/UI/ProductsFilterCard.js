import { useState } from "react";
import ProductCard from "./ProductCard";

const ProductsFilterCard = ({ latestProducts }) => {
  const [grid, setGrid] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState("default");
  const itemsPerPage = 6;

  // Sorting function
  const sortProducts = (products) => {
    return products.sort((a, b) => {
      switch (sortType) {
        case "price-lowest":
          return (a.price || 0) - (b.price || 0);
        case "price-highest":
          return (b.price || 0) - (a.price || 0);
        case "name-az":
          return (a.name || "").localeCompare(b.name || "");
        default:
          return 0; // Maintain original order
      }
    });
  };

  const sortedProducts = sortProducts([...latestProducts]);

  // Pagination logic
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSortChange = (e) => {
    setSortType(e.target.value);
    setCurrentPage(1); // Reset to first page on sort change
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 p-3">
        <div className="d-flex justify-content-between w-100 align-items-center">
          {/* Grid view buttons */}
          <div className="btn-group">
            <button
              onClick={() => setGrid(1)}
              className={`btn btn-outline-primary ${
                grid === 1 ? "active" : ""
              }`}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path>
              </svg>
            </button>
            <button
              onClick={() => setGrid(2)}
              className={`btn btn-outline-primary ${
                grid === 2 ? "active" : ""
              }`}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                ></path>
              </svg>
            </button>
          </div>

          {/* Product count */}
          <div className="navbar-text">
            <p className="mb-0">{latestProducts.length} Products Available</p>
          </div>

          {/* Sort dropdown */}
          <form className="d-inline-flex">
            <select
              name="sort"
              id="sort"
              className="form-select"
              onChange={handleSortChange}
            >
              <option value="default">Default</option>
              <option value="price-lowest">Price (lowest)</option>
              <option value="price-highest">Price (highest)</option>
              <option value="name-az">Name (A-Z)</option>
            </select>
          </form>
        </div>
      </nav>

      {/* Products grid */}
      <div
        className={`row ${grid === 2 ? "row-cols-1" : "row-cols-1"} g-4 mt-4`}
      >
        {currentProducts.length === 0 ? (
          <p className="text-center text-danger my-4">
            <i className="fa-solid fa-triangle-exclamation"></i> No products
            found.
          </p>
        ) : (
          <ProductCard products={currentProducts} />
        )}
      </div>

      {/* Pagination */}
      <nav aria-label="Page navigation" className="mt-4">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
              key={index}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProductsFilterCard;
