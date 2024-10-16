import Card from "./Card";

const RelatedProducts = ({ product }) => {
  return (
    <>
      <section className="related-products my-5">
        <div className="container">
          <div>
            <Card filterProduct={product} />
          </div>
        </div>
      </section>
    </>
  );
};

export default RelatedProducts;
