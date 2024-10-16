import Link from "next/link";

const ProductCard = ({ products }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-lg-4 col-md-6 mb-4" key={product._id}>
          <div className="card h-100">
            <Link href={`/product/${product._id}`}>
              <div className="card-img-top position-relative">
                {product.stock >= 0 && product.discount && (
                  <span className="badge bg-success position-absolute top-0 start-0 m-2">
                    -10% Off
                  </span>
                )}
                {product.stock === 0 && (
                  <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                    Sold Out
                  </span>
                )}
                <img
                  src={product.image[0]}
                  className="img-fluid"
                  alt={product.title}
                />
              </div>
            </Link>

            <div className="card-body">
              <Link href={`/product/${product._id}`} className="text-dark">
                <h5 className="card-title">{product.title}</h5>
              </Link>
              <p className="card-text text-muted">
                {product.description.slice(0, 55)}...
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="price">
                  {product.discount ? (
                    <h4 className="text-danger">
                      <del>৳ {product.price}</del>{" "}
                      <span>
                        ৳{" "}
                        {(
                          Number(product.price) -
                          (Number(product.price) * Number(product.discount)) /
                            100
                        ).toFixed(2)}
                      </span>
                    </h4>
                  ) : (
                    <h4>৳ {product.price}</h4>
                  )}
                </div>
                <button className="btn btn-primary">
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
