<script setup lang="ts">
definePageMeta({ layout: "access", middleware: "authenticated" });
const { loggedIn } = useUserSession();
</script>

<template>
  <main>
    <div v-if="!loggedIn">
      <h1>unbot.me</h1>
      <PrimeButton type="button" label="Join My Channel" icon="pi pi-sign-in" @click="navigateTo('/api/auth/twitch', { external: true })" />
    </div>
  </main>
</template>