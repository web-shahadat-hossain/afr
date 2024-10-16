/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/UI/PageHeader";
import ProductDetailContent from "@/components/UI/ProductDetailContent";
import Head from "next/head";
import Image from "next/image";
import css from "@/styles/productDetails.module.css";
import { useState } from "react";
import Zoom from "react-medium-image-zoom"; // Import the zoom library
import "react-medium-image-zoom/dist/styles.css"; // Import the styles for zoom
import ProductDetailsToggle from "@/components/UI/ProductDetailsToggle";
import RelatedProducts from "@/components/UI/RelatedProducts";
import Spinner from "@/components/UI/Spinner";

// Fetch product data based on the slug
export async function getStaticPaths() {
  try {
    const res = await fetch("https://www.api.afroonbd.com/api/v1/product");
    const products = await res.json();

    // Ensure products.data is defined and is an array
    if (!products.data || !Array.isArray(products.data)) {
      throw new Error("No products found or invalid data structure");
    }

    // Create paths for each product
    const paths = products.data.map((product) => {
      return { params: { slug: product._id.toString() } }; // Ensure the slug is a string
    });

    return { paths, fallback: true }; // Use fallback for new products
  } catch (error) {
    console.error("Failed to fetch products for paths:", error);
    return { paths: [], fallback: true }; // Fallback if fetching fails
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  try {
    const res = await fetch(
      `https://www.api.afroonbd.com/api/v1/product/single/${slug}`
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const productData = await res.json();

    return {
      props: {
        product: productData.data, // Assuming the product data is in this structure
      },
      revalidate: 5, // Revalidate every 5 seconds
    };
  } catch (error) {
    console.error("Failed to fetch product details:", error);
    return {
      props: {
        product: null, // Default to null if an error occurs
      },
      revalidate: 5,
    };
  }
}

const ProductDetails = ({ product: productData }) => {
  const productDetails = productData?.product;

  const [mainImage, setMainImage] = useState(
    productDetails?.image?.length > 0
      ? productDetails.image[0]
      : "/img/store-product-1.jpg"
  );

  // Function to change main image when a thumbnail is clicked
  const handleImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <>
      <Head>
        <title>{productDetails?.title} - Afroon BD</title>
        <meta
          name="description"
          content={productDetails?.description} // Update to use product description
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeader title={"Product Details"} />
        <section className={`my-5 ${css.product_details}`}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-12">
                <div className={css.images_box}>
                  {/* Main Image with Zoom functionality */}
                  <Zoom>
                    <Image
                      src={mainImage}
                      alt="Product Image"
                      width={500}
                      height={500}
                      layout="responsive"
                      objectFit="contain"
                    />
                  </Zoom>

                  {/* Thumbnails */}
                  <div className="mt-3 d-flex gap-2">
                    {productDetails?.image &&
                    productDetails.image.length > 0 ? (
                      <div className="mt-3 d-flex gap-2">
                        {productDetails.image.map((image, index) => (
                          <div key={index} className={css.thumbnail}>
                            <Image
                              src={image}
                              alt={`Product Thumbnail ${index + 1}`}
                              width={100}
                              height={100}
                              objectFit="cover"
                              onClick={() => handleImageClick(image)} // Set the clicked image as the main image
                              className={css.thumbnail_image}
                              style={{ cursor: "pointer" }} // Indicate that these images are clickable
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p>No images available</p> // Fallback message when no images exist
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <ProductDetailContent product={productDetails} />
              </div>
            </div>
          </div>
          <div
            className={`${css.product_feature}`}
            style={{ background: "#ecf0f1" }}
          >
            <ProductDetailsToggle productDetails={productDetails} />
          </div>
          <RelatedProducts product={productData?.relatedProducts || []} />
        </section>
      </Layout>
    </>
  );
};

export default ProductDetails;
