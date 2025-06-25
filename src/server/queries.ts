import "server-only";
import { db } from "~/server/db";
import { and, eq } from "drizzle-orm";
import { productOptionGroups, productOptionValues, products } from "~/server/db/schema";
import type { GetOptionsParams } from "~/server/types";
import { cache } from "react";

export const getProducts = cache(async () => {
  return await db.query.products.findMany();
});

export const getProductsByID = cache(async (productID: number) => {
  return await db.query.products.findFirst({
    where: eq(products.id, productID),
  });
});

export const getCompany = cache(async () => {
  return await db.query.companies.findMany();
});

export const getOptionsForProduct = cache(async (params: GetOptionsParams) => {
  const { groupName, productId } = params;

  return db
    .select({
      productId: productOptionGroups.productId,
      groupName: productOptionGroups.name,
      optionId: productOptionValues.id,
      value: productOptionValues.value,
      priceMultiplier: productOptionValues.priceMultiplier,
    })
    .from(productOptionValues)
    .innerJoin(
      productOptionGroups,
      eq(productOptionValues.optionGroupId, productOptionGroups.id)
    )
    .where(
      productId !== undefined
        ? and(
          eq(productOptionGroups.name, groupName),
          eq(productOptionGroups.productId, productId)
        )
        : eq(productOptionGroups.name, groupName)
    );
});
