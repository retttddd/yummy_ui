"use client";
import { useCounterStore } from "~/providers/order-store-provider";

export default function Page() {
  const { positions } = useCounterStore((state) => state);
  const test = useCounterStore((state) => state.positions);
  console.log(test);
  return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#2e026d] to-[#15162c] text-white px-4">
        <div className="flex flex-wrap justify-center gap-4 p-4">
          {positions.map((product, index) => (
            <p key={index}>{product.name}</p>
          ))}
        </div>
      </main>
  );
}
