"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AddNewModal from "./components/AddNewModal";
import { useRouter } from "next/navigation";
import UpdateProductModal from "./components/UpdateProductModal";

const HomePage = () => {
  interface IRating {
    rate: number;
    count: number;
  }
  interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: IRating;
  }

  const [products, setProducts] = useState<Product[]>([]);
  const [showAddNewModal, setShowAddNewModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const router = useRouter();

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("error", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleNavigate = (id) => {
    router.push(`/products/${id}`);
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-red-500 text-3xl font-bold ">
            Get all products {products?.length}
          </h1>
          <button
            onClick={() => setShowAddNewModal(true)}
            className="bg-green-500 px-2 py-1 rounded text-white"
          >
            Add New
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div key={index} className="rounded shadow p-3">
              <div
                onClick={() => handleNavigate(product.id)}
                className="h-[150px] overflow-hidden mb-4"
              >
                <Image
                  height={150}
                  width={250}
                  src={product?.image}
                  alt="pic"
                  className="mx-auto object-cover"
                />
              </div>
              <button
                onClick={() => setShowUpdateModal(true)}
                className="bg-green-500 px-2 py-1 rounded text-white"
              >
                Update
              </button>
            </div>
          ))}
        </div>
      </div>
      {showAddNewModal && (
        <AddNewModal
          setShowAddNewModal={setShowAddNewModal}
          fetchProducts={fetchProducts}
        />
      )}
      {showUpdateModal && (
        <UpdateProductModal setShowUpdateModal={setShowUpdateModal} />
      )}
    </div>
  );
};

export default HomePage;
