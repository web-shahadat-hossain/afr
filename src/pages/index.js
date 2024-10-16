import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import FeaturedArticle from "@/components/home/FeaturedArticle";
import Layout from "@/components/layout/Layout";
import Carousel from "@/components/UI/Carousel";
import Products from "@/components/UI/Products";
import Store from "@/components/UI/Store";
import Testimonial from "@/components/UI/Testimonial";
import VideoSection from "@/components/UI/VideoSection";

// Fetch data for the home page
export async function getStaticProps() {
  try {
    const res = await fetch(
      "https://www.api.afroonbd.com/api/v1/product/latest"
    );
    const latestProducts = await res.json();

    return {
      props: {
        latestProducts: latestProducts.data, // assuming API sends data in this structure
      },
      revalidate: 5, // Revalidate every 10 seconds
    };
  } catch (error) {
    console.error("Failed to fetch latest products:", error);
    return {
      props: {
        latestProducts: [], // Default to an empty array in case of error
      },
      revalidate: 5, // Attempt to revalidate every 10 seconds
    };
  }
}

export default function Home({ latestProducts }) {
  return (
    <Layout>
      <Carousel />
      <Store latestProducts={latestProducts} />
      <div className="my-5">
        {/* Pass latest products to the Products component */}
        <Products />
      </div>
      <About />
      <VideoSection />
      <FeaturedArticle />
      <Testimonial />
      <Contact />
    </Layout>
  );
}
