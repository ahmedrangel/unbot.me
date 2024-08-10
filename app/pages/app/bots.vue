<script setup lang="ts">
definePageMeta({ layout: "app", middleware: "session" });

const { loggedIn } = useUserSession();
</script>

<template>
  <main>
    <div v-if="loggedIn">
      <PrimeCard id="info" class="col-12 col-md-12 col-lg-6 mb-3 mx-auto">
        <template #title>
          <h4 class="mb-0 text-break">Default Identified Bots List</h4>
        </template>
        <template #content>
          <div class="text-start">
            <h5 v-for="(list, i) of botList" :key="i" class="mb-0 py-2">
              <a class="text-primary" target="_blank" :href="list.url">
                {{ list.name }}&nbsp;<Icon name="ci:external-link" />
              </a>
            </h5>
          </div>
        </template>
      </PrimeCard>
    </div>
  </main>
</template>
