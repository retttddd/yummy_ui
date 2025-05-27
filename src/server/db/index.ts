import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const sql = neon(process.env.DATABASE_URL!);

export const db = drizzle(sql, { schema });
