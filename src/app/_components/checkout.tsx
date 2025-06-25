import React from "react";
import { useCounterStore } from "~/providers/order-store-provider";
import Image from "next/image";
import { motion } from "motion/react";

type CartComponentProps = {
  productName: string;
  imageUrl: string;
  price: number;
  index: number;
};

export default function CartComponent({ productName, price, index, imageUrl }: CartComponentProps) {
  const removePosition = useCounterStore( (state) => state.removePosition)
  const handleRemove = () => {
    removePosition(index);
  };

  return (
    <div className="flex w-full flex-row-reverse justify-between">
      <div className="flex flex-col justify-center gap-1.5 ">
        <span className="size-3 w-full font-extrabold">{productName}</span>
        <span className="font-light">{price} pln </span>
        <motion.div
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.8 }}
        >
          <button
            className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            onClick={handleRemove}
          >
            Remove
          </button>
        </motion.div>
      </div>
      <div>
        <Image
          src={imageUrl}
          width={120}
          height={120}
          alt={productName}
          className="rounded-2xl"
        />
      </div>
    </div>

  );
}