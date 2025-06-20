"use client"
import Image from "next/image";
import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useCounterStore } from "~/providers/order-store-provider";

interface Product {
  id: number;
  nameProduct: string;
  price: string;
  urlToImage: string;
  createdAt: Date;
  updatedAt: Date | null;
}

interface SizeOption {
  productId: number;
  groupName: string;
  optionId: number;
  value: string;
  priceMultiplier: number | null;
}

const ProductModal = React.memo(function ProductModal({ product, sizeOptions }: { product: Product, sizeOptions: SizeOption[] }) {
  const basePrice = parseFloat(product.price);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [finalPrice, setFinalPrice] = useState<number>(basePrice);

  const { addPosition } = useCounterStore((state) => state);

  const handleAddItem = () => {
    const item = {
      name: product.nameProduct,
      price: finalPrice,
      size: selectedSize ?? "Default",
    };
    addPosition(item);
  };

  const changePrice = (value: string) => {
    const option = sizeOptions.find((o) => o.value === value);
    const multiplier = option?.priceMultiplier ?? 0;
    setSelectedSize(option?.value ?? null);
    setFinalPrice(basePrice + multiplier);
  };

  return (
    <div className="w-full flex flex-col gap-4 text-lg">
      <h1 className="text-2xl font-semibold text-center mb-2">Specify your order</h1>
      <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
        <div className="relative w-[210px] h-[210px]">
          <Image
            src={product.urlToImage}
            fill
            sizes="100vw, 50vw, 33vw"
            style={{ objectFit: "cover", borderRadius: "8px" }}
            alt={product.nameProduct}
          />
        </div>
        <div className="flex flex-col gap-4 justify-between p-2">
          <div className="font-medium">
            {product.nameProduct}{" "}
            <span className="text-gray-600">{product.price} PLN</span>
          </div>
          {sizeOptions.length > 0 && (
            <RadioGroup onValueChange={changePrice}>
              {sizeOptions.map((option) => (
                <div key={option.optionId} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value}>{option.value}</Label>
                </div>
              ))}
            </RadioGroup>
          )}
          <div className="flex flex-col gap-2">
            <span className="font-bold text-xl">{finalPrice.toFixed(2)} PLN</span>
            <button
              onClick={handleAddItem}
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProductModal;
