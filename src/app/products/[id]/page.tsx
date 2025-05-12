"use client";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SingleProducts = () => {
  const [singleData, setSingleData] = useState();
  const { id } = useParams();
  const fetchSingleProduct = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setSingleData(response.data);
    try {
    } catch (error) {
      console.error("single data fetch error:", error);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);
  return (
    <div>
      <div className="rounded shadow p-3">
        <div className="h-[150px] overflow-hidden">
          {singleData && (
            <Image
              height={150}
              width={250}
              src={singleData?.image}
              alt="pic"
              className="mx-auto object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
