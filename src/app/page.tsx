"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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

  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-red-500 text-3xl font-bold text-center mb-4">
          Get all products {products?.length}
        </h1>
        <div className="grid grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div key={index} className="rounded shadow p-3">
              <div className="h-[150px] overflow-hidden">
                <Image
                  height={150}
                  width={250}
                  src={product?.image}
                  alt="pic"
                  className="mx-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
