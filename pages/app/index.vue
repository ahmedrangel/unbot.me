<script setup lang="ts">
definePageMeta({ layout: "app", middleware: "session" });
const { loggedIn, user, clear } = useUserSession();
const { data: userState } = await useFetch(`/api/users/state/${user.value.id}`);

const logOut = async() => {
  await useFetch("/api/users/disable", { method: "PUT" });
  await clear();
  navigateTo("/", { replace: true });
};

if (!userState.value?.active) logOut();

const socketEmit = async (event: string, value: Object) => {
  const { io } = await import("socket.io-client");
  const socket = io("https://unbotme.yizack.com");
  socket.on("connect", () => {
    socket.emit(event, value);
    socket.close();
  });
};

onMounted(async () => {
  socketEmit("login", user.value);
});

const leave = () => {
  socketEmit("logout", {
    id_user: user.value.id,
    user_login: user.value.login,
    username: user.value.display_name
  });
  logOut();
};
</script>

<template>
  <main>
    <div v-if="loggedIn">
      <div class="d-flex justify-content-center align-items-center mb-5">
        <img :src="user.profile_image_url" width="80" class="rounded-circle me-3">
        <h3 class="mb-0">{{ user.display_name }}</h3>
      </div>
      <PrimeCard class="col-12 col-md-6 mb-3 mx-auto">
        <template #title>
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
      <PrimeCard class="col-12 col-md-6 mb-3 mx-auto">
        <template #content>
          <span class="text-muted">
            To cease the bot's moderation on your channel, simply click "Leave My Channel" to prompt its departure.
          </span>
        </template>
        <template #footer>
          <PrimeButton type="button" label="Leave My Channel" icon="pi pi-sign-out" severity="danger" @click="leave" />
        </template>
      </PrimeCard>
    </div>
  </main>
</template>
