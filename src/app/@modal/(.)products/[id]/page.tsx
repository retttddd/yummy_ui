"use server"
import { Modal } from "./modal";
import { getOptionsForProduct, getProductsByID } from "~/server/queries";
import ProductModal from "~/components/modalProduct";
import { motion } from "framer-motion";

export default async function ProductModalPage(
  {
    params,
  }: {
  params: Promise<{ id: number }>;
}) {
  try {
    const productId = (await params).id;

    const [product, sizeOptions] = await Promise.all([
      getProductsByID(productId),
      getOptionsForProduct({ groupName: "Size", productId: productId })
    ]);

    if (!product) {
      return (
        <Modal>
          <div className="p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Product not found</h2>
            <p>The requested product could not be found.</p>
          </div>
        </Modal>
      );
    }

    return (
      <Modal>
        <ProductModal product={product} sizeOptions={sizeOptions} />
      </Modal>
    );
  } catch (error) {
    console.error("Error loading product:", error);
    return (
      <Modal>
        <div className="p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
          <p>There was an error loading the product. Please try again later.</p>
        </div>
      </Modal>
    );
  }
}
