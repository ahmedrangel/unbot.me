import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event);
  const DB = useDB();
  const data = await DB.update(tables.users).set({
    active: 0
  }).where(eq(tables.users.id_user, session.user.id)).returning().get();
  return data;
});