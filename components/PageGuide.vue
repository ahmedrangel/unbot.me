<template>
  <div class="row g-1">
    <div v-for="(guide, i) of INDEX.guide" :key="i" class="col-12 col-sm-6 col-md-6 col-lg-3">
      <PrimeCard class="text-center h-100">
        <template #content>
          <h5 class="mb-3">{{ guide.title }}</h5>
          <div class="text-center">
            <h6>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p class="text-start" v-html="guide.subtitle" />
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
</template>