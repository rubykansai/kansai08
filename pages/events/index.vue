<template>
  <v-app class="fill-height">
    <AppHeader />
    <v-row>
      <v-col align="center" class="pb-0 mt-12">
        <v-card
          class="mt-12 events-card"
          :elevation="0"
        >
          <v-card-item>
            <h1 class="text-h4 title align-center mb-10">
              <span><v-img src="/dot.png" :width="20" class="mr-2"/></span> EVENTS
            </h1>
            <div align="left">
              <h2 align="center" class="text-h5 mb-2">
                Day0 - Fri, June 27
              </h2>
              <v-card
                v-for="(content, index) in day0"
                :key="index"
                class="py-10 px-10"
                :elevation="0"
              >
                <v-row>
                  <v-col lg="6" md="12" sm="12" xs="12">
                    <p>
                      <a
                        class="text-link text-h5 mb-2 name"
                        :href="content.url"
                        target="_blank"
                      >{{ content.name }}</a>
                    </p>
                    <v-divider class="my-4"></v-divider>
                    <p class="text-body1 mb-3"><v-icon icon="mdi-clock-time-two-outline"></v-icon> {{ content.time }}</p>
                    <p class="text-body1 mb-3"><v-icon icon="mdi-currency-jpy"></v-icon> {{ content.price }}</p>
                    <p class="text-body1 mb-5"><v-icon icon="mdi-map-marker-outline"></v-icon> {{ content.place }}</p>
                    <a
                    :href="content.url"
                    target="_blank"
                    >
                      <v-btn
                        size="large"
                        color="#700002"
                        rounded
                        class="register-btn mb-5"
                      >REGISTRATION</v-btn>
                    </a>
                    <p class="text-body1 mb-2">Sponsored and hosted by <a
                        class="name"
                        :href="content.sponsoredUrl"
                        target="_blank"
                      >{{ content.sponsored }}</a>
                    </p>
                  </v-col>
                  <v-col
                  >
                    <a
                      :href="content.url"
                      target="_blank"
                    >
                      <v-img
                        class="link"
                        :src="content.image"
                        max-height="600px"
                      />
                    </a>
                  </v-col>
                </v-row>
                <v-divider class="mt-5"></v-divider>
              </v-card>
              <h2 align="center" class="text-h5 mb-2">
                Day1 - Sat, June 28
              </h2>
              <v-card
                v-for="(content, index) in day1"
                :key="index"
                class="py-10 px-10"
                :elevation="0"
              >
                <v-row>
                  <v-col lg="6" md="12" sm="12" xs="12">
                    <p>
                      <a
                        class="text-link text-h5 mb-2 name"
                        :href="content.url"
                        target="_blank"
                      >{{ content.name }}</a>
                    </p>
                    <v-divider class="my-4"></v-divider>
                    <p class="text-body1 mb-3"><v-icon icon="mdi-clock-time-two-outline"></v-icon> {{ content.time }}</p>
                    <p class="text-body1 mb-3"><v-icon icon="mdi-currency-jpy" v-if="content.price"></v-icon> {{ content.price }}</p>
                    <p class="text-body1 mb-5"><v-icon icon="mdi-map-marker-outline"></v-icon> {{ content.place }}</p>
                    <a
                    :href="content.url"
                    target="_blank"
                    >
                      <v-btn
                        size="large"
                        color="#700002"
                        rounded
                        class="register-btn mb-5"
                        v-if="content.url"
                      >
                        <div v-if="!content.detail">REGISTRATION</div>
                        <div v-else>DETAILS</div>
                      </v-btn>
                    </a>
                  </v-col>
                  <v-col
                  >
                    <a
                      :href="content.url"
                      target="_blank"
                    >
                      <v-img
                        class="link"
                        :src="content.image"
                        max-height="600px"
                      />
                    </a>
                  </v-col>
                </v-row>
                <v-divider class="mt-5"></v-divider>
              </v-card>
              <h2 align="center" class="text-h5 mb-2">
                Day2 - Sun, June 29
              </h2>
              <v-card
                v-for="(content, index) in day2"
                :key="index"
                class="py-10 px-10"
                :elevation="0"
              >
                <v-row>
                  <v-col lg="6" md="12" sm="12" xs="12">
                    <p>
                      <a
                        class="text-link text-h5 mb-2 name"
                        :href="content.url"
                        target="_blank"
                      >{{ content.name }}</a>
                    </p>
                    <v-divider class="my-4"></v-divider>
                    <p class="text-body1 mb-3"><v-icon icon="mdi-clock-time-two-outline"></v-icon> {{ content.time }}</p>
                    <p class="text-body1 mb-3"><v-icon icon="mdi-currency-jpy"></v-icon> {{ content.price }}</p>
                    <p class="text-body1 mb-5"><v-icon icon="mdi-map-marker-outline"></v-icon> {{ content.place }}</p>
                    <a
                    :href="content.url"
                    target="_blank"
                    >
                      <v-btn
                        size="large"
                        color="#700002"
                        rounded
                        class="register-btn mb-5"
                        v-if="content.url"
                      >REGISTRATION</v-btn>
                    </a>
                    <p class="text-body1 mb-2" v-if="content.sponsored">Sponsored and hosted by <a
                        class="name"
                        :href="content.sponsoredUrl"
                        target="_blank"
                      >{{ content.sponsored }}</a>
                    </p>
                  </v-col>
                  <v-col
                  >
                    <a
                      :href="content.url"
                      target="_blank"
                    >
                      <v-img
                        class="link"
                        :src="content.image"
                        max-height="600px"
                      />
                    </a>
                  </v-col>
                </v-row>
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
  title: 'Events - 関西Ruby会議08',
  ogTitle: 'Events - 関西Ruby会議08',
  description: '関西Ruby会議08のイベント情報を掲載しています。',
  ogDescription: '関西Ruby会議08のイベント情報を掲載しています。',
})
</script>

<script>
export default {
  data: () => ({
    day0: [
      {
        name: 'ANDPAD × 関西Ruby会議08 Day0 晩餐会',
        url: 'https://andpad.connpass.com/event/356202/',
        image: '/kansai08/events/drinkup.png',
        time: 'June 27, 19:00 - 21:30',
        place: '東華菜館 本店',
        price: 'Free',
        sponsored: 'ANDPAD Inc.',
        sponsoredUrl: 'https://andpad.co.jp/',
      },
      {
        name: '関西Ruby会議08 前夜祭 RejectKaigi',
        url: 'https://kyotorb.connpass.com/event/353449/',
        image: '/kansai08/events/preparty.png',
        time: 'June 27, 19:00 - 21:00',
        place: '株式会社はてな 京都オフィス',
        price: 'Free',
        sponsored: '株式会社はてな',
        sponsoredUrl: 'https://hatenacorp.jp/',
      },
    ],
    day1: [
      {
        name: '@.bookstore at 関西Ruby会議08',
        url: 'https://bs.atdot.net/kanrk08.html',
        image: '/kansai08/events/bookstore.webp',
        time: 'June 28',
        place: '先斗町歌舞練場 受付付近',
        detail: true,
      },
      {
        name: '関西Ruby会議08 Official Party',
        url: 'https://ruby-tuesday.doorkeeper.jp/events/183977',
        image: '/kansai08/events/officialparty.png',
        time: 'June 28, 19:00 - 21:00',
        place: 'INDÉPENDANTS',
        price: '¥5,500',
      },
    ],
    day2: [
      {
        name: '関西Ruby会議08 After Party: 叡電LT 🚃',
        url: 'https://ruby-tuesday.doorkeeper.jp/events/185048',
        image: '/kansai08/events/eidenlt.png',
        time: 'June 29, 10:20 - 12:10',
        place: '叡山電車 出町柳駅',
        price: 'Free',
        sponsored: '株式会社6VOX',
        sponsoredUrl: 'https://6vox.com/',
      },
      {
        name: '関西Ruby会議08 非公式 打ち上げ!!!!!!',
        url: 'https://connpass.com/event/357281',
        image: '/kansai08/events/uchiage.png',
        time: 'June 29, 15:00 - 18:00',
        place: 'Beer Cafe 麦潤',
        price: 'Cash on (調整中)',
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

.events-card {
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

.register-btn {
  width: 100%;
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
