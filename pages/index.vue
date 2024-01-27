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
              <PrimeButton type="button" :label="INDEX.join_button" @click="navigateTo('/api/auth/twitch', { external: true })">
                <template #icon>
                  <Icon class="iconify me-1" style="font-size: 24px; width: 40px;" name="simple-icons:twitch" />
                </template>
              </PrimeButton>
            </template>
          </PrimeCard>
        </div>
      </div>
      <div class="row g-1">
        <div v-for="(guide, i) of INDEX.guide" :key="i" class="col-12 col-sm-6 col-md-6 col-lg-3">
          <PrimeCard class="text-center h-100">
            <template #content>
              <h5 class="mb-3">{{ guide.title }}</h5>
              <div class="text-center">
                <h6>
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