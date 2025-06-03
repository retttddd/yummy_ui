import Image from "next/image";
import { getProducts } from "~/server/queries";

interface Product {
  id: number;
  nameProduct: string;
  price: string;
  urlToImage: string;
  createdAt: Date;
  updatedAt: Date | null;

}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-wrap contain-content backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 h-full max-w-lg shadow-2xl">
      <div className="flex gap-2 flex-col">
        <Image
          src={product.urlToImage}
          style={{ objectFit: "contain", borderRadius: "8px", marginBottom: "1rem"}}
          width={192}
          height={192}
          alt={product.nameProduct}
        />
        <div>{product.nameProduct}</div>
        <div>{product.price} pln</div>
        <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Add to cart</button>
      </div>
    </div>
  );
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#2e026d] to-[#15162c] text-white px-4">
        <div className="flex flex-wrap justify-center gap-4 p-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
    </main>
  );
}
