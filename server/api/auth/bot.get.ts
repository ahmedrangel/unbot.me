export default oauth.twitchEventHandler({
  config: {
    emailRequired: true,
    scope: ["chat:read", "chat:edit", "channel:moderate"]
  },
  async onSuccess(event, result) {
    const user = result.user as UserSession["user"];
    user.tokens = result.tokens;

    await setUserSession(event, { user });
    return sendRedirect(event, "/");
  }
});
