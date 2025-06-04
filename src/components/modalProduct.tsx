"use client"
import Image from "next/image";
import { useState } from "react";

interface Product {
  id: number;
  nameProduct: string;
  price: string;
  urlToImage: string;
  createdAt: Date;
  updatedAt: Date | null;

}

export default function ProductModal({ product }: { product: Product }) {
  const [finalPrice, setFinalPrice] = useState(product.price)
  return (
    <div className="w-full flex flex-col gap-4 text-lg">
      <h1 className="text-2xl font-semibold text-center mb-2">Specify your order</h1>
      <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
        <div className="relative w-[210px] h-[210px]">
          <Image
            src={product.urlToImage}
            fill
            style={{ objectFit: "cover", borderRadius: "8px" }}
            alt={product.nameProduct}
          />
        </div>
        <div className="flex flex-col gap-4 justify-between p-2">
          <div className="font-medium">{product.nameProduct} <span className="text-gray-600">{product.price} pln</span></div>

          <div className="flex flex-col gap-2">
            <span className="font-bold text-xl">{finalPrice} pln</span>
            <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
