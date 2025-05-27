<template>
  <div>
    <v-app-bar :elevation="0">
      <div align="left" class="ml-10">
        <NuxtLink to="/" >
          <v-img src="/logo-nav.svg" :width="150" :height="40" class="d-none d-md-block" />
        </NuxtLink>
      </div>
      <v-app-bar-nav-icon class="d-flex d-md-none" variant="text" @click.stop="drawer = !drawer" />
      <template #append>
        <NuxtLink v-for="(page, index) in pages" :key="index" class="d-none d-md-block" :to="page.to">
          <v-btn>{{ page.title }}</v-btn>
        </NuxtLink>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <NuxtLink v-for="(page, index) in pages" :key="index" :to="page.to">
          <v-list-item>{{ page.title }}</v-list-item>
        </NuxtLink>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    pages: [
      { title: 'SPEAKERS', to: '/speakers' },
      { title: 'EVENTS', to: '/events' },
      { title: 'SPONSORS', to: '/sponsors' },
      { title: 'JOB BOARD', to: '/jobs' },
      { title: 'VENUE', to: 'https://www.kamogawa-odori.com/kaburenjou/' },
      { title: 'POLICIES', to: '/policies' },
      { title: 'ABOUT', to: '/about' },
      { title: 'GOODIES', to: 'https://suzuri.jp/kyobashirb' },
    ],
  }),
}
</script>

<style scoped>
.v-toolbar {
  background-color: #700002 !important;
}

@media screen and (min-width:600px) {
  .v-toolbar {
    border-bottom: #fff solid 1px !important;
  }
}

.v-navigation-drawer {
  background-color: #700002 !important;
}

.v-list-item, a {
  font-family: 'Kumbh Sans', serif;
  color: #fff;
}

button {
  font-family: 'Kumbh Sans', serif;
  color: #fff;
}

</style>
