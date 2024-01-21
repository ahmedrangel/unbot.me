export default oauth.twitchEventHandler({
  config: {
    emailRequired: true,
    scope: ["chat:read", "chat:edit", "channel:moderate", "moderator:read:chatters"]
  },
  async onSuccess(event, result) {
    const user = {
      ...result.user,
      tokens: result.tokens
    };
    await setUserSession(event, user);
    return sendRedirect(event, "/");
  }
});
