import FeaturedArticle from "@/components/home/FeaturedArticle";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/UI/PageHeader";
import Testimonial from "@/components/UI/Testimonial";

const Feature = () => {
  return (
    <Layout>
      <PageHeader title={"Feature"} />

      <FeaturedArticle />
      <Testimonial />
    </Layout>
  );
};

export default Feature;
