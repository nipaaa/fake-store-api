import React from "react";

const UpdateProductModal = ({ setShowUpdateModal }) => {
  return (
    <div className="fixed bg-black/50 backdrop-blur-md h-screen w-full z-50 top-0 left-0 flex items-center justify-center">
      <div className="bg-white max-h-[90vh] overflow-y-scroll p-5 rounded scrollbar-hide">
        <form className="text-center">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              name="title"
              placeholder="Title"
              className="w-full border border-gray-200 p-2 rounded focus:outline-none"
              required
            />
            <input
              name="price"
              placeholder="Price"
              type="number"
              className="w-full border border-gray-200 p-2 rounded focus:outline-none"
              required
            />

            <input
              name="category"
              placeholder="Category"
              className="w-full border border-gray-200 p-2 rounded focus:outline-none"
              required
            />
            <input
              name="image"
              placeholder="Image URL"
              className="w-full border border-gray-200 p-2 rounded focus:outline-none"
              required
            />
          </div>
          <textarea
            name="description"
            placeholder="Description"
            className="w-full border border-gray-200 p-2 rounded focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-green-500 px-2 py-1 rounded text-white"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProductModal;
