import { getProducts } from "~/server/queries";
import { Suspense } from "react";
import ProductCard from "~/app/_components/ProductCard";

export const revalidate = 60; // ISR: revalidate every 60s

function LoadingSkeleton() {
  return (
    <div className="text-white text-xl animate-pulse p-10">Loading products...</div>
  );
}

async function ProductsList() {
  const products = await getProducts();
  return (
    <div
      className="flex flex-wrap justify-center gap-4 p-4"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#2e026d] to-[#15162c] text-white px-4">
      <Suspense fallback={<LoadingSkeleton />}>
        <ProductsList />
      </Suspense>
    </main>
  );
}
