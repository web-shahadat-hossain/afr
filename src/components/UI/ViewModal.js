import css from "@/styles/dashboard.module.css";
import Image from "next/image";
import { useEffect } from "react";

const ViewModal = ({ setOpen, products }) => {
  useEffect(() => {
    // Close modal on Esc key press
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setOpen]);

  return (
    <>
      <div
        className={`modal fade show ${css.modal}`}
        style={{ display: "block" }}
      >
        <div className={`modal-dialog ${css.modal_box}`}>
          <div className={`modal-content`}>
            <div className={`modal-header`}>
              <h2 className="modal-title">Products</h2>
              <button
                className={`close ${css.close_button}`}
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className={`modal-body`}>
              <section className={css.all_order_container}>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Category</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>

                        <th>Created At</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 1</td>
                        <td>{products?.category}</td>
                        <td>
                          {products?.image.map((img, i) => (
                            <Image
                              key={i}
                              src={img}
                              alt={products?.title}
                              width={100}
                              height={50}
                              className="d-block"
                            />
                          ))}{" "}
                        </td>
                        <td>{products?.title}</td>
                        <td>৳{products?.price}</td>

                        <td>
                          {new Date(products?.createdAt).toLocaleString()}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Modal overlay for closing the modal */}
      <div
        className={`modal-backdrop fade show`}
        onClick={() => setOpen(false)}
        aria-label="Close modal overlay"
      ></div>
    </>
  );
};

export default ViewModal;
