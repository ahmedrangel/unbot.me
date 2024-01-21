<script setup lang="ts">
definePageMeta({ layout: "app", middleware: "session" });
const { loggedIn, user, clear } = useUserSession();

onMounted(async () => {
  const { io } = await import("socket.io-client");
  const socket = io("https://unbotme.yizack.com");
  socket.on("connect", () => {
    socket.emit("login", user.value);
    socket.close();
  });
});
</script>

<template>
  <div v-if="loggedIn">
    <h1>Welcome {{ user.login }}!</h1>
    <p>Access token: {{ user.tokens.access_token }}</p>
    <p>Refresh token: {{ user.tokens.refresh_token }}</p>
    <button @click="clear">Logout</button>
  </div>
</template>
