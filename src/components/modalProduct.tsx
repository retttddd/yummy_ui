import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  nameProduct: string;
  price: string;
  urlToImage: string;
  createdAt: Date;
  updatedAt: Date | null;

}

export default function ProductModal({ product }: { product: Product }) {
  //console.log(product);
  return (
    <div className="flex flex-wrap contain-content backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 h-full max-w-lg shadow-2xl">
      <div className="flex gap-2 flex-col">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.urlToImage}
            style={{ objectFit: "contain", borderRadius: "8px", marginBottom: "1rem"}}
            width={192}
            height={192}
            alt={product.nameProduct}
          />
        </Link>
        <div>{product.nameProduct}</div>
        <div>{product.price} pln</div>
        <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Add to cart</button>
      </div>
    </div>
  );
}