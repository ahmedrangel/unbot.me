import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id_user: integer("id_user").primaryKey(),
  user_login: text("user_login").notNull(),
  username: text("username"),
  refresh_token: text("refresh_token").notNull(),
  active: integer("active").notNull().default(1),
  created_at: integer("created_at").notNull(),
  updated_at: integer("updated_at").notNull()
});
