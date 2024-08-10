export default oauthTwitchEventHandler({
  config: {
    emailRequired: true,
    scope: ["chat:read", "chat:edit", "channel:moderate", "moderator:manage:banned_users"]
  },
  async onSuccess (event, result) {
    const { user, tokens } = result as { user: UnbotmeUser, tokens: UnbotmeUserTokens };

    await setUserSession(event, { user: { ...user, tokens } });
    return sendRedirect(event, "/");
  }
});
