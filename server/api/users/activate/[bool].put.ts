import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event);
  const { bool } = getRouterParams(event);
  const DB = useDB();
  const data = await DB.update(tables.users).set({
    active: Number(bool)
  }).where(eq(tables.users.id_user, session.user.id)).returning().get();
  return data;
});