import axios from "axios";
import React, { useState } from "react";

const AddNewModal = ({ setShowAddNewModal, fetchProducts }) => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        price: parseFloat(formData.price),
      };
      const response = await axios.post(
        "https://fakestoreapi.com/products",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Product created:", response.data);
      alert("Product created successfully!");
      await fetchProducts();
      setFormData({});
      setShowAddNewModal(false);
    } catch (error) {
      console.error("error creating product:", error);
      alert("failed to create product");
    }
  };
  return (
    <div className="fixed bg-black/50 backdrop-blur-md h-screen w-full z-50 top-0 left-0 flex items-center justify-center">
      <div className="bg-white max-h-[90vh] overflow-y-scroll p-5 rounded scrollbar-hide">
        <form onSubmit={handleSubmit} className="text-center">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              name="title"
              placeholder="Title"
              className="w-full border border-gray-200 p-2 rounded focus:outline-none"
              onChange={handleChange}
              required
            />
            <input
              name="price"
              placeholder="Price"
              type="number"
              className="w-full border border-gray-200 p-2 rounded focus:outline-none"
              step="0.01"
              onChange={handleChange}
              required
            />

            <input
              name="category"
              placeholder="Category"
              className="w-full border border-gray-200 p-2 rounded focus:outline-none"
              onChange={handleChange}
              required
            />
            <input
              name="image"
              placeholder="Image URL"
              className="w-full border border-gray-200 p-2 rounded focus:outline-none"
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="description"
            placeholder="Description"
            className="w-full border border-gray-200 p-2 rounded focus:outline-none"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-green-500 px-2 py-1 rounded text-white"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewModal;
