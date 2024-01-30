<script setup lang="ts">
definePageMeta({ layout: "access", middleware: "authenticated" });
const { loggedIn } = useUserSession();

useSeoMeta({
  title: SITE.title,
  description: SITE.description,
  keywords: SITE.keywords,
  // Open Graph
  ogType: "website",
  ogTitle: SEO.og.title,
  ogDescription: SEO.og.description,
  ogUrl: SEO.og.url,
  ogImage: SEO.og.image,
  // Twitter
  twitterCard: "summary",
  twitterTitle: SEO.twitter.title,
  twitterDescription: SEO.twitter.description
});
useHead({
  link: [
    { rel: "canonical", href: SITE.host }
  ]
});
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