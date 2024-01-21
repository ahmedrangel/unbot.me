import { io } from "socket.io-client";

export default oauth.twitchEventHandler({
  config: {
    emailRequired: true,
    scope: ["chat:read", "chat:edit", "channel:moderate", "moderator:read:chatters"]
  },
  async onSuccess(event, result) {
    await setUserSession(event, { user: result });
    const socket = io("http://localhost:3000", {
      withCredentials: true
    });

    socket.emit("login", result);
    return sendRedirect(event, "/");
  }
});
