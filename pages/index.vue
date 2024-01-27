<script setup lang="ts">
definePageMeta({ layout: "access", middleware: "authenticated" });
const { loggedIn } = useUserSession();
</script>

<template>
  <main>
    <div v-if="!loggedIn">
      <div class="d-flex justify-content-center align-items-center mb-4">
        <div class="col-12 col-lg-7 col-md-12">
          <h1 class="mb-4"><b>unbot.me</b></h1>
          <PrimeCard>
            <template #content>
              <h5 class="mb-0"><span class="text-primary">@unbotme</span> is a bot for Twitch designed to automatically ban identified bots that persistently lurk in channels.</h5>
            </template>
            <template #footer>
              <PrimeButton type="button" label="JOIN MY CHANNEL" @click="navigateTo('/api/auth/twitch', { external: true })">
                <template #icon>
                  <Icon class="iconify me-1" style="font-size: 24px; width: 40px;" name="simple-icons:twitch" />
                </template>
              </PrimeButton>
            </template>
          </PrimeCard>
        </div>
      </div>
      <div class="row g-1">
        <div class="col-12 col-sm-6 col-md-6 col-lg-3">
          <PrimeCard class="h-100 text-center">
            <template #content>
              <h6 class="mb-3 text-start">Have you ever noticed random users like these appearing in your viewers list even when you're not live?</h6>
              <img class="img-fluid rounded" src="/images/bots_viewerlist.jpg" style="width: 100%; max-width: 300px;">
            </template>
          </PrimeCard>
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-lg-3">
          <PrimeCard class="text-center h-100">
            <template #content>
              <h5 class="mb-3">What they do?</h5>
              <div class="text-start">
                <h6>
                  <p>Most of them:</p>
                  <ul>
                    <li class="mb-3">
                      Are malicious bots (with few exceptions).
                    </li>
                    <li class="mb-3">
                      Attempts to attract attention, leading you or your auidience to visit their channels and possibly exposing you to ads to gain revenue or other unknown intentions.
                    </li>
                    <li class="mb-3">
                      Collects your metadata for unknown purposes.
                    </li>
                    <li class="mb-3">
                      Makes your viewer list very inaccurate compared to your actual number of spectators, as they don't count towards views.
                    </li>
                    <li class="mb-3">
                      Are identified and listed as bots on multilpe websites.
                    </li>
                  </ul>
                </h6>
              </div>
            </template>
          </PrimeCard>
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-lg-3">
          <PrimeCard class="text-center h-100">
            <template #content>
              <h5 class="mb-3">Our solution</h5>
              <div class="text-start">
                <h6 class="m-0">
                  <p>What <span class="text-primary">@unbotme</span> do:</p>
                  <ul>
                    <li class="mb-3">
                      Monitors your channel's viewer list, and upon detecting any of those bots, it automatically bans them for you.
                    </li>
                    <li class="mb-3">
                      Exempts banning good bots that are genuinely there for beneficial purposes.
                    </li>
                  </ul>
                  <img class="rounded" src="/images/example-1.jpg" style="width: 100%; max-width: 300px;">
                </h6>
              </div>
            </template>
          </PrimeCard>
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-lg-3">
          <PrimeCard class="text-center h-100">
            <template #content>
              <h5 class="mb-3">How to start?</h5>
              <div class="text-start">
                <h6>
                  <ol>
                    <li class="mb-3">
                      Click on the "JOIN MY CHANNEL" button.
                    </li>
                    <li class="mb-3">
                      Authenticate your Twitch channel.
                    </li>
                    <li class="mb-3">
                      This site will tell you that the bot has joined your channel.
                    </li>
                    <li class="mb-3">
                      Ensure that you have granted moderator privileges to <span class="text-primary">@unbotme</span>.
                    </li>
                  </ol>
                  <img class="rounded" src="/images/example-2.jpg" style="width: 100%; max-width: 300px;">
                </h6>
              </div>
            </template>
          </PrimeCard>
        </div>
      </div>
    </div>
  </main>
</template>