import { useState } from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import ProductsFilterBox from "@/components/UI/ProductsFilterBox";
import ProductsFilterCard from "@/components/UI/ProductsFilterCard";
import PageHeader from "@/components/UI/PageHeader";

// Fetch data for the home page
export async function getStaticProps() {
  try {
    const res = await fetch("https://www.api.afroonbd.com/api/v1/product");
    const latestProducts = await res.json();

    return {
      props: {
        latestProducts: latestProducts.data, // assuming API sends data in this structure
      },
      revalidate: 5, // Revalidate every 5 seconds
    };
  } catch (error) {
    console.error("Failed to fetch latest products:", error);
    return {
      props: {
        latestProducts: [], // Default to an empty array in case of error
      },
      revalidate: 5, // Attempt to revalidate every 5 seconds
    };
  }
}

const FeatureProducts = ({ latestProducts }) => {
  // State for filters
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 10000]);

  // Filter products based on selected category and price range
  const filteredProducts = latestProducts.filter((product) => {
    const withinPriceRange =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return withinPriceRange && matchesCategory;
  });

  return (
    <>
      <Head>
        <title>
          Afroon BD - Shop - Your Ultimate E-commerce Destination for Attar,
          Jersey, Panjabi, Borka, Gadgets, Kids Essentials, Sneakers, and Bags
        </title>
        <meta
          name="description"
          content="Discover a world of style and elegance at Afroon BD, the leading E-commerce platform. Explore our exquisite collection of Attar, trendy Jerseys, traditional Panjabis, modest Borkas, cutting-edge Gadgets, adorable Kids' fashion, exclusive Sneakers, and fashionable Bags"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeader title={"Products"} />
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-3 mb-4">
              <ProductsFilterBox
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
              />
            </div>

            <div className="col-lg-9">
              <ProductsFilterCard latestProducts={filteredProducts} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default FeatureProducts;
