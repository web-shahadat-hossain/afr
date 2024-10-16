import { useRouter } from "next/router";
import { useState } from "react";
import css from "@/styles/productDetails.module.css";

const ProductDetailContent = ({ product }) => {
  const router = useRouter();

  // Calculate the total price and handle buy now action
  const handleBuyNow = () => {
    const url = `/checkout?product=${product?._id}`;
    router.push(url);
  };

  return (
    <section>
      <div className={css.product_details_box}>
        <summary>
          <h5 className="text-muted">{product?.title}</h5>
          <h2 className="mb-3">{product?.title}</h2>
          <div className={`${css.review_box} mb-3`}>
            <span>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </span>
            <span className="ms-2">(13 customer reviews)</span>
          </div>
          <h4 className={`${css.price} mb-3`}>
            Deal of the Day:{" "}
            {product?.discount ? (
              <>
                {" "}
                <del>৳ {product?.price}</del>{" "}
                <span>
                  ৳
                  {(
                    Number(product?.price) -
                    (Number(product?.price) * Number(product?.discount)) / 100
                  ).toFixed(2)}
                </span>{" "}
              </>
            ) : (
              <span>৳ {product?.price}</span>
            )}
          </h4>
          <p className={`${css.description} mb-3`}>{product?.description}</p>

          <div className={`${css.product_data_info} mb-3`}>
            <p>
              Available:{" "}
              {product?.stock ? (
                <span> In Stock</span>
              ) : (
                <span style={{ color: "red" }}> Out of Stock</span>
              )}
            </p>
          </div>

          <div className="mb-3">
            <p className={`${css.quantity} mb-0`}>
              ফোনে অর্ডার করুন: <a href="tel:+8801886866844">+8801886866844</a>
            </p>
          </div>

          {/* Button to handle buy now */}
          <div className={`${css.button_group} mt-3`}>
            <button
              className="btn btn-primary"
              style={{
                width: "100%",
              }}
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </summary>
      </div>
    </section>
  );
};

export default ProductDetailContent;
