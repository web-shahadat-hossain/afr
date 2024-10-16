const ProductsFilterBox = ({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
}) => {
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    setPriceRange([10, value]); // Update the price range
  };

  return (
    <aside className="p-4 border bg-light">
      <div className="mb-4">
        <form>
          <input
            type="text"
            name="text"
            placeholder="Search"
            className="form-control"
          />
        </form>
      </div>

      <div className="mb-4">
        <h3 className="h6">Category</h3>
        <div className="btn-group-vertical w-100">
          <button
            type="button"
            className={`btn btn-outline-primary ${
              selectedCategory === "all" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("all")}
          >
            All
          </button>
          <button
            type="button"
            className={`btn btn-outline-primary ${
              selectedCategory === "black-tea" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("black-tea")}
          >
            Black Tea
          </button>
          <button
            type="button"
            className={`btn btn-outline-primary ${
              selectedCategory === "green-tea" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("green-tea")}
          >
            Green Tea
          </button>
          <button
            type="button"
            className={`btn btn-outline-primary ${
              selectedCategory === "gold-tea" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("gold-tea")}
          >
            Gold Tea
          </button>
          <button
            type="button"
            className={`btn btn-outline-primary ${
              selectedCategory === "organic-tea" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("organic-tea")}
          >
            Organic Tea
          </button>
          <button
            type="button"
            className={`btn btn-outline-primary ${
              selectedCategory === "detergent-powder" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("detergent-powder")}
          >
            Detergent Powder
          </button>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="h6">Price</h3>
        <p>৳{priceRange[1]}</p>
        <input
          type="range"
          min="300"
          max="10000"
          value={priceRange[1]}
          className="form-range"
          onChange={handlePriceChange}
        />
      </div>
    </aside>
  );
};

export default ProductsFilterBox;
