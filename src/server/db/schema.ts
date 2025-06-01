// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { index, pgTableCreator } from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `yummy_ui_${name}`);

export const companies = createTable(
  "company",
  (d) => ({
    id: d.integer().primaryKey().generatedByDefaultAsIdentity(),
    name: d.varchar({ length: 256 }),
    createdAt: d
      .timestamp({ withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: d.timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
  }),
  (t) => [index("name_idx").on(t.name)],
);

export const customers = createTable(
  "customer",
  (d) => ({
    id: d.integer().primaryKey().generatedByDefaultAsIdentity(),
    phone: d.varchar({ length: 15 }),
    createdAt: d
      .timestamp({ withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: d.timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
  }),
  (t) => [index("phone_idx").on(t.phone)],
);

export const products = createTable(
  "product",
  (d) => ({
    id: d.serial("id").primaryKey(),
    nameProduct: d.varchar({ length: 256 }).notNull(),
    price: d.varchar({ length: 15 }).notNull(),
    urlToImage: d.varchar({ length: 1024 }).notNull(),
    featured: d.boolean(),
    createdAt: d
      .timestamp({ withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: d.timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
  }),
  (t) => [index("nameProduct_idx").on(t.nameProduct)],
);

