import { drizzle as drizzleD1, type DrizzleD1Database } from "drizzle-orm/d1";
import { drizzle, type BetterSQLite3Database } from "drizzle-orm/better-sqlite3";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Database from "better-sqlite3";

export * as tables from "../db/schema";

let _db: DrizzleD1Database | BetterSQLite3Database | null = null;

export const useDB = () => {
  if (!_db) {
    if (process.env.DB) {
      // d1 in production
      _db = drizzleD1(process.env.DB);
    }
    else if (import.meta.dev) {
      // local sqlite in development
      const sqlite = new Database("server/db/db.sqlite");
      _db = drizzle(sqlite);
    }
    else {
      throw createError({
        statusCode: 500,
        message: "No database configured for production"
      });
    }
  }
  return _db as DrizzleD1Database;
};
