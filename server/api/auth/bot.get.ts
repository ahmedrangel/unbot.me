export default oauthTwitchEventHandler({
  config: {
    emailRequired: true,
    scope: ["chat:read", "chat:edit", "channel:moderate", "moderator:manage:banned_users"]
  },
  async onSuccess (event, result) {
    const user = result.user as UserSession["user"];
    user.tokens = result.tokens;

    await setUserSession(event, { user });
    return sendRedirect(event, "/");
  }
});
