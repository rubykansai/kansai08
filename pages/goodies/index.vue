<template>
  <v-app class="fill-height">
    <AppHeader />
    <v-row>
      <v-col align="center" class="pb-0 mt-12">
        <v-card
          max-width="80vw"
          min-width="80vw"
          class="mt-12 goodies-card"
          :elevation="0"
        >
          <v-card-item>
            <h1 class="text-h4 title align-center mb-10">
              <span><v-img src="/dot.png" :width="20" class="mr-2"/></span> GOODIES
            </h1>
            <div>
              <v-card
                v-for="(content, index) in contents"
                :key="index"
                class="py-10 px-10"
                :elevation="0"
                max-width="800px"
              >
                <p>
                  <a
                    class="text-link text-h5 mb-2 name"
                    :href="content.url"
                    target="_blank"
                  >{{ content.name }}</a>
                </p>
                <a
                :href="content.url"
                target="_blank"
                >
                  <v-img
                    class="link"
                    :src="content.image"
                    max-height="600px"
                  />
                  <v-btn
                    size="large"
                    color="#700002"
                    rounded
                    class="link-btn mb-5"

                    v-if="content.type === 'download'"
                  >DOWNLOAD</v-btn>
                  <v-btn
                    size="large"
                    color="#700002"
                    rounded
                    class="link-btn mb-5"
                    v-else
                  >GO TO SHOP</v-btn>
                </a>

                <v-divider class="mt-5"></v-divider>
              </v-card>
            </div>
          </v-card-item>
        </v-card>
        <Footer />
      </v-col>
    </v-row>
  </v-app>
</template>

<script setup>
useSeoMeta({
  title: 'goodies - 関西Ruby会議08',
  ogTitle: 'goodies - 関西Ruby会議08',
  description: '関西Ruby会議08のグッズ情報を掲載しています。',
  ogDescription: '関西Ruby会議08のグッズ情報を掲載しています。',
})
</script>

<script>
export default {
  data: () => ({
    contents: [
      {
        name: 'KEYNOTE TEMPLATE',
        url: 'https://rubykansai.github.io/kansai08/keynote_template_kansairubykaigi08.key',
        image: '/kansai08/keynotetemplate.png',
        type: 'download',
      },
      {
        name: 'OFFICIAL GOODS',
        url: 'https://suzuri.jp/kyobashirb',
        image: '/kansai08/goods.png',
      },
    ],
  }),
}
</script>

<style scoped>
* {
  font-family: 'Noto Sans JP';
  box-sizing: border-box;
}

.goodies-card {
  max-width: 70vw;

  @media (max-width: 1280px) {
    max-width: 100vw;
  }
}

.v-application {
  color: #700002;
  position: relative;
}

.name {
  color: #222222 !important;
}

.text-link {
  color: #222222;
  text-decoration: none;
}

.text-link:hover {
  color: #700002;
  text-decoration: underline;
  box-sizing:border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  transition: all 0.1s ease-in-out;
}

.link-btn {
  width: 50%;
}

@media (max-width: 600px) {
.v-col {
    flex-basis: inherit !important;
  }
}

.dot {
  width: 20px;
  height: 20px;
}

.title {
  font-weight: 400;
  display: flex;
}

.text-h4 {
  color: #700002;
  font-weight: 500;
}

.text-h5 {
  color: #700002;
  font-weight: 600;
}

.text-h6 {
  color: #700002;
}
</style>
