import { useState, computed, useRequestFetch } from "#imports";
const useSessionState = () => useState("nuxt-session", () => ({}));
export const useUserSession = () => {
  const sessionState = useSessionState();
  return {
    loggedIn: computed(() => Boolean(sessionState.value.user)),
    user: computed(() => sessionState.value.user || null),
    session: sessionState,
    fetch,
    clear
  };
};
async function fetch() {
  useSessionState().value = await useRequestFetch()("/api/_auth/session", {
    headers: {
      Accept: "text/json"
    }
  }).catch(() => ({}));
}
async function clear() {
  await $fetch("/api/_auth/session", { method: "DELETE" });
  useSessionState().value = {};
}
