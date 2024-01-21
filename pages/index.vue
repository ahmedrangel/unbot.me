<script setup lang="ts">
definePageMeta({ layout: "access", middleware: "authenticated" });
const { loggedIn } = useUserSession();
</script>

<template>
  <div v-if="!loggedIn">
    <h1>Not logged in</h1>
    <a href="/api/auth/twitch">Login with Twitch</a>
  </div>
</template>