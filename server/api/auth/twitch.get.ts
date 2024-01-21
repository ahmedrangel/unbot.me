export default oauth.twitchEventHandler({
  config: {
    emailRequired: true,
    scope: ["chat:read", "chat:edit", "channel:moderate", "moderator:read:chatters"]
  },
  async onSuccess(event, user) {
    await setUserSession(event, { user });
    return sendRedirect(event, "/");
  }
});
