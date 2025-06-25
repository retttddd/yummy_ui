"use client";
import { useCounterStore } from "~/providers/order-store-provider";
import CartComponent from "~/app/_components/checkout";
import { motion } from 'framer-motion';

export default function Page() {
  const { positions } = useCounterStore((state) => state);
  console.log(positions);
  const CountFullPrice = positions.reduce((acc, item) => acc + item.price, 0);
  return (
    <motion.div
      animate={{
        opacity: [0.7, 1],
        transition: { duration: 0.6, ease: ["easeIn", "easeOut"] }
      }}
    >
      <main className="flex flex-col min-h-screen justify-between bg-gradient-to-br from-[#2e026d] to-[#15162c] px-4 text-white">
        <div>
          {positions.map((product, index) => (
            <div
              key={index}
              className="m-3.5 flex max-h-50 max-w-1/3 flex-wrap rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-lg contain-content"
            >
                  <CartComponent
                    productName={product.name}
                    price={product.price}
                    index={index}
                    imageUrl={product.imageUrl}
                  />
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-4">
          <span>Total: {CountFullPrice}PLN</span>
        </div>

      </main>
    </motion.div>
  );
}
