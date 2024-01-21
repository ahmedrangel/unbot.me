export default oauth.twitchEventHandler({
  config: {
    emailRequired: true,
    scope: ["chat:read", "chat:edit", "channel:moderate", "moderator:read:chatters"]
  },
  async onSuccess(event, session) {
    await setUserSession(event, { user: session });
    return sendRedirect(event, "/");
  }
});
