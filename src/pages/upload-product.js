import DashboardLayout from "@/components/layout/DashboardLayout";
import Spinner from "@/components/UI/Spinner";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-toastify";

const UploadProduct = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [discount, setDiscount] = useState("");
  const [stock, setStock] = useState(0);
  const [features, setFeatures] = useState("");
  const [uploadedUrls, setUploadedUrls] = useState([]);
  const [uploading, setUploading] = useState(false);
  const maxDescriptionLength = 350;
  const { data: session, status } = useSession(); // Get session and status

  // Handle different session statuses
  if (status === "loading") {
    return <Spinner />; // Show loading state
  }

  const onDescriptionChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= maxDescriptionLength) {
      setDescription(inputValue);
    }
  };

  const handleFileChange = async (e) => {
    if (e.target.files) {
      const uploadedImageUrls = [];
      setUploading(true);

      for (const file of Array.from(e.target.files)) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "lawyermanagementsystem");

        try {
          const uploadResponse = await fetch(
            "https://api.cloudinary.com/v1_1/dwqz8bows/image/upload",
            {
              method: "POST",
              body: formData,
            }
          );

          const uploadedImageData = await uploadResponse.json();
          uploadedImageUrls.push(uploadedImageData.secure_url);
        } catch (error) {
          toast.error(`Failed to upload ${file.name}`);
        }
      }

      setUploadedUrls(uploadedImageUrls);
      setUploading(false);
      toast.success("Images uploaded successfully");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      title,
      price,
      description,
      category,
      image: uploadedUrls, // assuming image URLs are sent as a string
      stock: Number(stock),
      feature: features.split(",").map((feature) => feature.trim()), // convert features to an array
      discount: discount ? Number(discount) : 0,
    };

    try {
      const response = await fetch(
        "https://www.api.afroonbd.com/api/v1/product/create-product",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        }
      );

      if (response.ok) {
        toast.success("Product created successfully");

        // Clear the form fields after successful submission
        setTitle("");
        setPrice("");
        setDescription("");
        setCategory("");
        setDiscount("");
        setStock(0);
        setFeatures("");
        setUploadedUrls([]); // Clear the image URLs
      } else {
        toast.error("Failed to create product");
      }
    } catch (error) {
      toast.error("Error submitting product");
    }
  };

  return (
    <DashboardLayout>
      <section className="container py-4">
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="title" className="form-label">
                Title <small className="text-danger">*</small>
              </label>
              <input
                required
                type="text"
                name="title"
                className="form-control"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="price" className="form-label">
                Price <small className="text-danger">*</small>
              </label>
              <input
                required
                type="text"
                name="price"
                className="form-control"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="category" className="form-label">
                Category <small className="text-danger">*</small>
              </label>
              <select
                id="category"
                name="category"
                required
                className="form-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="black-tea">Black Tea</option>
                <option value="green-tea">Green Tea</option>
                <option value="gold-tea">Gold Tea</option>
                <option value="organic-tea">Organic Tea</option>
                <option value="detergent-powder">Detergent Powder</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="image" className="form-label">
                Images <small className="text-danger">*</small>
              </label>
              <input
                type="file"
                name="image"
                className="form-control"
                multiple
                onChange={handleFileChange}
              />
              {uploading && <p>Uploading images...</p>}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="stock" className="form-label">
                Quantity <small className="text-danger">*</small>
              </label>
              <input
                required
                type="number"
                name="stock"
                className="form-control"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="discount" className="form-label">
                Discount
              </label>
              <input
                type="number"
                name="discount"
                className="form-control"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description (Max {maxDescriptionLength} characters)
            </label>
            <textarea
              name="description"
              value={description}
              onChange={onDescriptionChange}
              placeholder="Enter product description"
              className="form-control"
              id="description"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="features" className="form-label">
              Features
            </label>
            <textarea
              name="feature"
              placeholder="Enter product feature requests, separated by commas"
              className="form-control"
              id="features"
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Submit Now
          </button>
        </form>
      </section>
    </DashboardLayout>
  );
};

export default UploadProduct;
