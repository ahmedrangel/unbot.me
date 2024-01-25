<script setup lang="ts">
definePageMeta({ layout: "access", middleware: "authenticated" });
const { loggedIn } = useUserSession();
</script>

<template>
  <main>
    <div v-if="!loggedIn">
      <div class="d-flex justify-content-center align-items-center">
        <div class="col-12 col-md-7">
          <h1 class="mb-5"><b>unbot.me</b></h1>
          <h6 class="mb-5">Unbotme is a bot for Twitch designed to automatically ban identified bots that persistently lurk in channels.</h6>
          <PrimeButton type="button" label="JOIN MY CHANNEL" @click="navigateTo('/api/auth/twitch', { external: true })">
            <template #icon>
              <Icon class="iconify me-1" style="font-size: 24px; width: 40px;" name="simple-icons:twitch" />
            </template>
          </PrimeButton>
        </div>
      </div>
    </div>
  </main>
</template>