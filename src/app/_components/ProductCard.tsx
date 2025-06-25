"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Product {
  id: number;
  nameProduct: string;
  price: string;
  urlToImage: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      className="flex flex-wrap contain-content backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 h-auto max-w-lg shadow-2xl"
    >
      <div className="flex gap-2 flex-col">
        <Link rel="preload" href={`/products/${product.id}`}>
          <Image
            src={product.urlToImage}
            alt={product.nameProduct}
            width={192}
            height={192}
            placeholder="blur"
            blurDataURL="/placeholder.png" // update with actual blur data URL
            style={{
              objectFit: "contain",
              borderRadius: "8px",
              marginBottom: "1rem",
            }}
          />
        </Link>
        <div>{product.nameProduct}</div>
        <div>{product.price} PLN</div>
        <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
          <Link rel="preload" href={`/products/${product.id}`}>
            Configure
          </Link>
        </button>
      </div>
    </motion.div>
  );
}
