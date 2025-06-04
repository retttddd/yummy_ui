import { Modal } from "./modal";
import { getProductsByID } from "~/server/queries";
import ProductModal from "~/components/modalProduct";

export default async function PhotoModal(
  {
    params,
  }: {
  params: Promise<{ id: number }>;
}) {
  const photoId = (await params).id;
  const product = await getProductsByID(photoId);
  if (!product) return <Modal><div>Product not found</div></Modal>;

  return <Modal><ProductModal product={product}/></Modal>
}
