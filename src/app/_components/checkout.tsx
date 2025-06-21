import React from "react";
import { useStore } from "zustand";
import { useCounterStore } from "~/providers/order-store-provider";

type CartComponentProps = {
  productName: string;
  price: number;
  index: number;
};

export default function CartComponent({ productName, price, index }: CartComponentProps) {
  const removePosition = useCounterStore( (state) => state.removePosition)
  const handleRemove = () => {
    removePosition(index);
  };

  return (
    <div className="w-full h-auto flex flex-col justify-center gap-1.5">
      <span className="size-3 font-extrabold w-full">{productName}</span>
      <span className="font-light">{price} pln </span>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleRemove}
      >
        Remove
      </button>
    </div>
  );
}