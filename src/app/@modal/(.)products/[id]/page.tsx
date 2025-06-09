"use server"
import { Modal } from "./modal";
import { getOptionsForProduct, getProductsByID } from "~/server/queries";
import ProductModal from "~/components/modalProduct";

export default async function PhotoModal(
  {
    params,
  }: {
  params: Promise<{ id: number }>;
}) {
  const photoId = (await params).id;
  const [product, sizeOptions] = await Promise.all([
    getProductsByID(photoId),
    getOptionsForProduct({ groupName: "Size", productId: photoId })
  ]);
  if (!product) return <Modal><div>Product not found</div></Modal>;

  return <Modal><ProductModal product={product} sizeOptions={sizeOptions}/></Modal>
}
