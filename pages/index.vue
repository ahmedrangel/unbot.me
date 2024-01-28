<script setup lang="ts">
definePageMeta({ layout: "access", middleware: "authenticated" });
const { loggedIn } = useUserSession();
</script>

<template>
  <main>
    <div v-if="!loggedIn">
      <div class="d-flex justify-content-center align-items-center mb-4">
        <div class="col-12 col-lg-7 col-md-12">
          <h1 class="mb-4"><b>{{ SITE.name }}</b></h1>
          <PrimeCard>
            <template #content>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <h5 class="mb-0" v-html="INDEX.description" />
            </template>
            <template #footer>
              <PrimeButton type="button" :label="INDEX.login_button" @click="navigateTo('/api/auth/twitch', { external: true })">
                <template #icon>
                  <Icon class="iconify me-1" style="font-size: 24px; width: 40px;" name="simple-icons:twitch" />
                </template>
              </PrimeButton>
            </template>
          </PrimeCard>
        </div>
      </div>
      <PageGuide />
    </div>
  </main>
</template>