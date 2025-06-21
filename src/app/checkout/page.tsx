"use client";
import { useCounterStore } from "~/providers/order-store-provider";
import CartComponent from "~/app/_components/checkout";

export default function Page() {
  const { positions } = useCounterStore((state) => state);
  const CountFullPrice = positions.reduce((acc, item) => acc + item.price, 0);
  return (
    <main className="flex h-screen flex-col justify-between bg-gradient-to-br from-[#2e026d] to-[#15162c] px-4 text-white">
      <div>
        {positions.map((product, index) => (
          <div
            key={index}
            className="m-3.5 flex h-auto max-w-lg flex-wrap rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-lg contain-content"
          >
            <div className="flex flex-col gap-2">
              <CartComponent
                productName={product.name}
                price={product.price}
                index={index}
              ></CartComponent>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-4">
        <span>Total: {CountFullPrice}PLN</span>
      </div>

    </main>
  );
}
