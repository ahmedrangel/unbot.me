<script setup lang="ts">
const { loggedIn, user, clear } = useUserSession();
const logOut = async () => {
  await clear();
  navigateTo("/", { replace: true });
};

const tabs: Record<string, any> = [
  {
    id: "app",
    name: "Home",
    type: "link",
    route: "/app"
  },
  {
    id: "bots",
    name: "Bot List",
    type: "link",
    route: "/app/bots"
  },
  {
    name: loggedIn ? String(user.value.display_name) : "Profile",
    type: "dropdown",
    prefix: "/app/profile",
    subtabs: [
      { name: "Log Out", callback: logOut }
    ]
  }
];

const { currentRoute, beforeEach } = useRouter();
const canonical = computed(() => SITE.host + currentRoute.value.path.replace(/\/+$/, ""));

useHead({
  link: [
    { rel: "canonical", href: canonical }
  ]
});

beforeEach(({ name }) => {
  currentRoute.value.name = name;
});

const isRouteActive = (prefix?: string) => {
  if (!currentRoute) return false;
  return currentRoute.value.path.startsWith(prefix ?? "");
};
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-secondary shadow-lg" data-bs-theme="dark">
      <div class="container-fluid container-md">
        <button class="navbar-toggler border-0 rounded-pill" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" />
        </button>
        <div class="navbar-brand ms-2 ms-lg-0 me-auto d-flex align-items-center gap-1 text-decoration-none">
          <img src="/images/unbotme.svg" width="45">
        </div>
        <div id="offcanvasNavbar" class="offcanvas offcanvas-start bg-secondary" tabindex="-1" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header px-5 pt-4 pb-0">
            <img src="/images/unbotme.svg" width="45">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 gap-1 fw-bold">
              <template v-for="(tab, i) of tabs" :key="i">
                <li v-if="tab.type === 'link'" class="nav-item" data-bs-dismiss="offcanvas">
                  <NuxtLink v-ripple class="nav-link d-flex align-items-center gap-1 position-relative overflow-hidden" aria-current="page" :to="tab.route">
                    <span>{{ tab.name }}</span>
                  </NuxtLink>
                </li>
                <li v-else-if="tab.type === 'dropdown'" class="nav-item dropdown">
                  <a v-ripple class="nav-link dropdown-toggle d-flex align-items-center gap-1 position-relative overflow-hidden" :class="{ active: isRouteActive(tab.prefix) }" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span>{{ tab.name }}</span>
                  </a>
                  <ul class="dropdown-menu bg-secondary px-0">
                    <template v-for="(subtab, j) of tab.subtabs" :key="j">
                      <li data-bs-dismiss="offcanvas">
                        <a v-if="subtab.callback" v-ripple class="dropdown-item position-relative overflow-hidden" href="#" @click="subtab.callback()">{{ subtab.name }}</a>
                        <NuxtLink v-else v-ripple class="dropdown-item position-relative overflow-hidden" :to="tab.prefix + subtab.route">{{ subtab.name }}</NuxtLink>
                      </li>
                    </template>
                  </ul>
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
