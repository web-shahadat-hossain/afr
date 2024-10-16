const ProductDetailsToggle = ({ productDetails }) => {
  return (
    <section className="container">
      <div>
        <div className="d-flex justify-content-center mb-4">
          <button className="btn btn-outline-secondary mx-2">Feature</button>
        </div>

        {productDetails?.feature?.map((info, i) => (
          <p key={i}>
            {" "}
            <span>🔸</span> {info}
          </p>
        ))}
      </div>
    </section>
  );
};

export default ProductDetailsToggle;
