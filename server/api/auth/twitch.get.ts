export default oauth.twitchEventHandler({
  config: {
    emailRequired: true,
    scope: ["chat:read", "chat:edit", "channel:moderate", "moderator:read:chatters"]
  },
  async onSuccess(event, result) {
    await setUserSession(event, { user: result });
    return sendRedirect(event, "/");
  }
});
