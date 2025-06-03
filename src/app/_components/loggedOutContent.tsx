import { getProducts } from "~/server/queries";
import React from "react";

export default async function LoggedOutContent({
                                                 children,
                                               }: {
  children: React.ReactNode;
}) {
  const products = await getProducts();
  const featuredProducts = products.filter((product) => product.featured === true);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#2e026d] to-[#15162c] p-6 text-white gap-6">
      <div className=" flex flex-col gap-4 text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-purple-300 to-pink-500 rounded-2xl p-6">
        Promotions only inside an app:
        { featuredProducts.map((product) => (
          <h1 className={"text-2xl font-bold"} key={product.id}>- {product.nameProduct} for only {product.price} zl</h1>
        ))}
      </div>
      <h2 className="text-xl md:text-xl font-bold w-full text-center ">
        But Before you order...
      </h2>
      <div>
        {children}
      </div>
    </div>
  );
}
