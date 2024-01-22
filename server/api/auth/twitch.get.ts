export default oauth.twitchEventHandler({
  config: {
    emailRequired: true,
    scope: ["moderator:read:chatters"]
  },
  async onSuccess(event, result) {
    const user = result.user as UserSession["user"];
    user.tokens = result.tokens;

    const today = Date.now();

    const DB = useDB();
    await DB.insert(tables.users).values({
      id_user: Number(user.id),
      user_login: user.login,
      username: user.display_name,
      refresh_token: user.tokens.refresh_token,
      created_at: today,
      updated_at: today,
    }).onConflictDoUpdate({
      target: tables.users.id_user,
      set: {
        active: 1,
        user_login: user.login,
        username: user.display_name,
        refresh_token: user.tokens.refresh_token,
        updated_at: today,
      }
    }).returning().get();

    await setUserSession(event, { user });
    return sendRedirect(event, "/");
  }
});
