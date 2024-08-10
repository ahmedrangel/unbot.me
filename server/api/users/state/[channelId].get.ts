import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const { channelId } = getRouterParams(event);
  const DB = useDB();
  const data = await DB.select({
    id_user: tables.users.id_user,
    active: tables.users.active
  }).from(tables.users).where(eq(tables.users.id_user, Number(channelId))).get();
  return data;
});
