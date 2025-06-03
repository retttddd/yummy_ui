import "server-only";
import { db } from "~/server/db";

export async function getProducts() {
  return await db.query.products.findMany();
}
export async function getCompany() {
  return await db.query.companies.findMany();
}
