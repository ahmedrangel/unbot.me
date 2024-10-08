<script setup lang="ts">
definePageMeta({ layout: "app", middleware: "session" });

const { loggedIn, user } = useUserSession() as UnbotmeUserSessionComposable;
const { data: userState } = await useFetch(`/api/users/state/${user.value.id}`);

const isActive = ref(userState.value?.active);

const socketEmit = async (event: string, value: object) => {
  const { io } = await import("socket.io-client");
  const socket = io(SITE.socket, { reconnectionAttempts: 3 });
  socket.on("connect", () => {
    socket.emit(event, value);
    socket.close();
  });
};

const leave = async () => {
  if (!import.meta.client) return;
  await socketEmit("leave", {
    id_user: user.value.id,
    user_login: user.value.login,
    username: user.value.display_name
  });
  await $fetch("/api/users/activate/0", { method: "PUT" }).catch(() => null);
  isActive.value = 0;
};

const join = async () => {
  if (!import.meta.client) return;
  await socketEmit("join", user.value);
  await $fetch("/api/users/activate/1", { method: "PUT" }).catch(() => null);
  isActive.value = 1;
};

useSeoMeta({
  title: "App | " + SITE.title,
  description: SITE.description,
  keywords: SITE.keywords,
  // Open Graph
  ogType: "website",
  ogTitle: "App | " + SEO.og.title,
  ogDescription: SEO.og.description,
  ogUrl: SEO.og.url,
  ogImage: SEO.og.image,
  // Twitter
  twitterCard: "summary",
  twitterTitle: "App | " + SEO.twitter.title,
  twitterDescription: SEO.twitter.description
});
</script>

<template>
  <main>
    <div v-if="loggedIn">
      <PrimeCard id="info" class="col-12 col-md-12 col-lg-6 mb-3 mx-auto">
        <template #title>
          <div class="d-flex justify-content-center align-items-center mb-3">
            <img :src="user.profile_image_url" width="80" class="rounded-circle me-3">
            <h4 class="mb-0 text-break">{{ user.display_name }}</h4>
          </div>
          <hr class="my-4">
          <span v-if="isActive">
            <span class="text-primary">@unbotme</span> has joined your channel!
          </span>
          <span v-if="!isActive">
            <span class="text-primary">@unbotme</span> just needs one last step!&nbsp;<Icon name="ph:arrow-fat-down-fill" />
          </span>
        </template>
        <template v-if="isActive" #content>
          <p class="text-muted">
            Make sure <span class="text-primary">@unbotme</span> is set up as a moderator in your channel. Without moderator privileges it won't be able to perform its functions effectively.
          </p>
          <p class="text-muted mb-0">
            <i>/mod unbotme</i>
          </p>
        </template>
      </PrimeCard>
      <PrimeCard :id="`${isActive ? 'danger' : ''}`" class="col-12 col-md-12 col-lg-6 mb-3 mx-auto">
        <template #content>
          <span v-if="isActive" class="text-muted">
            If you prefer the bot to no longer moderate, just click on "Leave My Channel", and it will depart.
          </span>
          <span v-if="!isActive" class="text-muted">
            Click "Join My Channel" to allow the bot to enter your channel.
          </span>
        </template>
        <template #footer>
          <PrimeButton v-if="isActive" type="button" class="fw-bold rounded text-dark" label="LEAVE MY CHANNEL" icon="pi pi-sign-out" severity="danger" @click="leave" />
          <PrimeButton v-if="!isActive" type="button" class="fw-bold rounded text-dark" label="JOIN MY CHANNEL" icon="pi pi-sign-in" @click="join" />
        </template>
      </PrimeCard>
    </div>
  </main>
</template>
