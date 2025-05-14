<template>
  <div>
    <v-app-bar :elevation="0">
      <v-app-bar-nav-icon class="d-flex d-sm-none" variant="text" @click.stop="drawer = !drawer" />
      <template #append>
        <NuxtLink v-for="(page, index) in pages" :key="index" class="d-none d-sm-block" :to="page.to">
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
      { title: 'HOME', to: '/' },
      { title: 'VENUE', to: 'https://www.kamogawa-odori.com/kaburenjou/' },
      { title: 'ABOUT', to: '/about' },
      { title: 'POLICIES', to: '/policies' },
      { title: 'GOODIES', to: 'https://suzuri.jp/kyobashirb' },
    ],
  }),
}
</script>

<style scoped>
.v-toolbar {
  background: transparent !important;
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
