import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/UI/PageHeader";
import React from "react";

const dealers = [
  {
    id: 1,
    name: "Dealer One",
    location: "Dhaka, Bangladesh",
    contact: "123-456-7890",
    email: "dealerone@example.com",
  },
  {
    id: 2,
    name: "Dealer Two",
    location: "Chittagong, Bangladesh",
    contact: "987-654-3210",
    email: "dealertwo@example.com",
  },
  {
    id: 3,
    name: "Dealer Three",
    location: "Sylhet, Bangladesh",
    contact: "555-555-5555",
    email: "dealerthree@example.com",
  },
];

const DealerPage = () => {
  return (
    <Layout>
      <PageHeader title={"Dealer"} />
      <div className="container my-4">
        <h2 className="text-center mb-4">Our Dealers</h2>
        <div className="text-center mt-4 mb-5">
          <a
            href="https://drive.google.com/drive/folders/1eIt4uAloARugjO_KegvJYlgVkHe_4cdL?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Dealer forms and agreements
          </a>
        </div>
        <div className="row">
          {dealers.map((dealer) => (
            <div key={dealer.id} className="col-12 col-sm-6 col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{dealer.name}</h5>
                  <p className="card-text">
                    <strong>Location:</strong> {dealer.location}
                  </p>
                  <p className="card-text">
                    <strong>Contact:</strong> {dealer.contact}
                  </p>
                  <p className="card-text">
                    <strong>Email:</strong> {dealer.email}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default DealerPage;
