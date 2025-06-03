import "server-only";
import { db } from "~/server/db";
import { eq } from 'drizzle-orm';
import { products } from "~/server/db/schema";

export async function getProducts() {
  return await db.query.products.findMany();
}

export async function getProductsByID(productID: number) {
  return await db.query.products.findFirst({
    where: eq(products.id, productID),
  });
}

export async function getCompany() {
  return await db.query.companies.findMany();
}
