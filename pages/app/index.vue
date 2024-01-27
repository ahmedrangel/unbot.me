<script setup lang="ts">
definePageMeta({ layout: "app", middleware: "session" });
const { loggedIn, user, clear } = useUserSession();
const { data: userState } = await useFetch(`/api/users/state/${user.value.id}`);

const logOut = async () => {
  await $fetch("/api/users/disable", { method: "PUT" }).catch(() => null);
  await clear();
  navigateTo("/", { replace: true });
};

if (!userState.value?.active) logOut();

const socketEmit = async (event: string, value: Object) => {
  const { io } = await import("socket.io-client");
  const socket = io("https://unbotme.yizack.com", {
    reconnectionAttempts: 3,
  });
  socket.on("connect", () => {
    socket.emit(event, value);
    socket.close();
  });
};

const leave = async () => {
  if (!process.client) return;
  await socketEmit("logout", {
    id_user: user.value.id,
    user_login: user.value.login,
    username: user.value.display_name
  });
  await logOut();
};

onMounted(async () => {
  await socketEmit("login", user.value);
});
</script>

<template>
  <main>
    <div v-if="loggedIn">
      <PrimeCard id="info" class="col-12 col-md-6 mb-3 mx-auto">
        <template #title>
          <div class="d-flex justify-content-center align-items-center mb-3">
            <img :src="user.profile_image_url" width="80" class="rounded-circle me-3">
            <h3 class="mb-0">{{ user.display_name }}</h3>
          </div>
          <hr class="my-4">
          <span class="text-primary">@unbotme</span> has joined your channel!
        </template>
        <template #content>
          <p class="text-muted">
            Make sure <span class="text-primary">@unbotme</span> is set up as a moderator in your channel. Without moderator privileges it won't be able to perform its functions effectively.
          </p>
          <p class="text-muted mb-0">
            <i>/mod unbotme</i>
          </p>
        </template>
      </PrimeCard>
      <PrimeCard id="danger" class="col-12 col-md-6 mb-3 mx-auto">
        <template #content>
          <span class="text-muted">
            If you prefer the bot to no longer moderate, just click on "Leave My Channel", and it will depart.
          </span>
        </template>
        <template #footer>
          <PrimeButton type="button" class="fw-bold" label="LEAVE MY CHANNEL" icon="pi pi-sign-out" severity="danger" @click="leave" />
        </template>
      </PrimeCard>
      <hr class="my-5">
      <div class="row g-1">
        <div v-for="(guide, i) of INDEX.guide" :key="i" class="col-12 col-sm-12 col-md-4 col-lg-4">
          <PrimeCard v-if="i < INDEX.guide.length - 1" class="text-center h-100">
            <template #content>
              <h5 class="mb-3">{{ guide.title }}</h5>
              <div class="text-center">
                <h6 class="mb-0">
                  <!-- eslint-disable-next-line vue/no-v-html -->
                  <p v-html="guide.subtitle" />
                  <component :is="String(guide.list_type)">
                    <!-- eslint-disable-next-line vue/no-v-html -->
                    <li v-for="(list, j) of guide.list" :key="j" class="mb-3 text-start" v-html="list" />
                  </component>
                  <img class="rounded" :src="guide.image" style="width: 100%; max-width: 300px;">
                </h6>
              </div>
            </template>
          </PrimeCard>
        </div>
      </div>
    </div>
  </main>
</template>
