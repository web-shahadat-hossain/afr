import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/UI/PageHeader";
import Store from "@/components/UI/Store";
import { useRouter } from "next/router";

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

const StoreTea = ({ latestProducts }) => {
  const router = useRouter();
  const category = router?.query.category;

  // Filter products by category if one is selected
  const filteredProducts = category
    ? latestProducts.filter((product) => product.category === category) // Adjust property name based on your API response
    : latestProducts;

  return (
    <Layout>
      <PageHeader title={"Tea Store"} />
      <div className="py-5">
        {filteredProducts?.length === 0 ? (
          <p className="text-center text-danger my-4">
            <i className="fa-solid fa-triangle-exclamation"></i> No products
            found.
          </p>
        ) : (
          <>
            {" "}
            <Store latestProducts={filteredProducts} />
          </>
        )}
      </div>
    </Layout>
  );
};

export default StoreTea;
