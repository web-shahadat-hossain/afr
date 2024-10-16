import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/UI/PageHeader";
import Head from "next/head";
import Link from "next/link";

const TermsAndCondition = () => {
  return (
    <>
      <Head>
        <title>
          Afroon BD - Terms and Condition - Your Ultimate E-commerce Destination
          for Attar, Jersey, Panjabi, Borka, Gadgets, Kids Essentials, Sneakers,
          and Bags
        </title>
        <meta
          name="description"
          content="Discover a world of style and elegance at Afroon BD, the leading E-commerce platform. Explore our exquisite collection of Attar, trendy Jerseys, traditional Panjabis, modest Borkas, cutting-edge Gadgets, adorable Kids' fashion, exclusive Sneakers, and fashionable Bags"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeader title={"Terms and Conditions"} />
        <div className="container my-5">
          <h2 className="text-center mb-4">Afroon BD Terms and Conditions</h2>
          <p className="text-center">
            Last Updated: Thursday, February 10, 2024
          </p>

          <div className="accordion" id="termsAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  1. Acceptance of Terms
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#termsAccordion"
              >
                <div className="accordion-body">
                  Welcome to Afroon BD. By accessing or using our website (the
                  Site) and its services, you agree to comply with and be bound
                  by these Terms and Conditions (the Terms). If you do not agree
                  with these Terms, please do not use our services.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  2. Scope of Services
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#termsAccordion"
              >
                <div className="accordion-body">
                  Afroon BD operates an e-commerce platform, offering a variety
                  of products including Attar, Jersey, Panjabi, Borka, Gadgets,
                  Kids, and Bags (the Products).
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  3. Account Registration
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#termsAccordion"
              >
                <div className="accordion-body">
                  To access certain features of the Site, you may be required to
                  register for an account. You agree to provide accurate,
                  current, and complete information during the registration
                  process. You are responsible for maintaining the
                  confidentiality of your account credentials and for all
                  activities that occur under your account.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  4. Product Information
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#termsAccordion"
              >
                <div className="accordion-body">
                  We make every effort to display accurate and up-to-date
                  information about our Products, including pricing and
                  availability. However, we do not guarantee the accuracy of
                  this information and reserve the right to modify or update it
                  at any time.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  5. Ordering and Payment
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#termsAccordion"
              >
                <div className="accordion-body">
                  By placing an order on our Site, you agree to provide accurate
                  and complete information. We reserve the right to refuse or
                  cancel any order for any reason, including but not limited to
                  product availability, errors in product information, or issues
                  with payment.
                  <br />
                  Payment methods and details are specified during the checkout
                  process. By providing payment information, you represent and
                  warrant that you have the legal right to use any payment
                  method used in connection with your order.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  6. Shipping and Delivery
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#termsAccordion"
              >
                <div className="accordion-body">
                  We aim to deliver Products in a timely manner. Shipping and
                  delivery times may vary based on location and other factors.
                  We are not responsible for any delays or damages that occur
                  during the shipping process.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSeven">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  7. Returns and Refunds
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                aria-labelledby="headingSeven"
                data-bs-parent="#termsAccordion"
              >
                <div className="accordion-body">
                  Please refer to our{" "}
                  <Link
                    href="/return-policy"
                    className="text-decoration-underline"
                  >
                    Return Policy
                  </Link>{" "}
                  for information on returning Products and requesting refunds.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEight">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  8. Privacy Policy
                </button>
              </h2>
              <div
                id="collapseEight"
                className="accordion-collapse collapse"
                aria-labelledby="headingEight"
                data-bs-parent="#termsAccordion"
              >
                <div className="accordion-body">
                  Your use of the Site is also governed by our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-decoration-underline"
                  >
                    Privacy Policy
                  </Link>
                  , which outlines how we collect, use, and share your personal
                  information.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingNine">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseNine"
                  aria-expanded="false"
                  aria-controls="collapseNine"
                >
                  9. Intellectual Property
                </button>
              </h2>
              <div
                id="collapseNine"
                className="accordion-collapse collapse"
                aria-labelledby="headingNine"
                data-bs-parent="#termsAccordion"
              >
                <div className="accordion-body">
                  All content on the Site, including text, images, logos, and
                  product descriptions, is the property of Afroon BD and
                  protected by intellectual property laws. You may not use,
                  reproduce, or distribute any content from the Site without our
                  prior written consent.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTen">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTen"
                  aria-expanded="false"
                  aria-controls="collapseTen"
                >
                  10. Contact Information
                </button>
              </h2>
              <div
                id="collapseTen"
                className="accordion-collapse collapse"
                aria-labelledby="headingTen"
                data-bs-parent="#termsAccordion"
              >
                <div className="accordion-body">
                  If you have any questions or concerns about these Terms and
                  Conditions, please contact us at{" "}
                  <a href="mailto:baraqahshop1@gmail.com">
                    baraqahshop1@gmail.com
                  </a>
                  .
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEleven">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEleven"
                  aria-expanded="false"
                  aria-controls="collapseEleven"
                >
                  11. Changes to Terms
                </button>
              </h2>
              <div
                id="collapseEleven"
                className="accordion-collapse collapse"
                aria-labelledby="headingEleven"
                data-bs-parent="#termsAccordion"
              >
                <div className="accordion-body">
                  We reserve the right to modify or update these Terms at any
                  time. It is your responsibility to review these Terms
                  periodically. Your continued use of the Site after any changes
                  constitutes acceptance of the updated Terms.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default TermsAndCondition;
