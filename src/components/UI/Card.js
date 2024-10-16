import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Card = ({ filterProduct }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 881,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 504,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {filterProduct?.map((product) => (
          <div className="box p-" key={product._id}>
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
      </Slider>
    </>
  );
};

export default Card;
