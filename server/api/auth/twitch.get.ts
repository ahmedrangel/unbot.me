export default defineOAuthTwitchEventHandler({
  config: {
    emailRequired: true,
    scope: ["moderator:read:chatters"]
  },
  async onSuccess (event, result) {
    const { user, tokens } = result as { user: UnbotmeUser, tokens: UnbotmeUserTokens };
    const today = Date.now();

    const DB = useDB();
    await DB.insert(tables.users).values({
      id_user: Number(user.id),
      user_login: user.login,
      username: user.display_name,
      refresh_token: tokens.refresh_token,
      created_at: today,
      updated_at: today
    }).onConflictDoUpdate({
      target: tables.users.id_user,
      set: {
        user_login: user.login,
        username: user.display_name,
        refresh_token: tokens.refresh_token,
        updated_at: today
      }
    }).returning().get();

    await setUserSession(event, { user: { ...user, tokens } });
    return sendRedirect(event, "/");
  }
});
