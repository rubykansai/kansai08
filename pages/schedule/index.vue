<template>
  <v-app class="fill-height">
    <AppHeader />
    <v-row>
      <v-col align="center" class="pb-0 mt-12">
        <v-card
          max-width="80vw"
          min-width="80vw"
          class="mt-12"
          :elevation="0"
        >
          <v-card-item>
            <h1 class="text-h4 title align-center mb-15">
              <span><v-img src="/dot.png" :width="20" class="mr-2"/></span> SCHEDULE
            </h1>

            <v-btn-toggle
              v-model="selectedTable"
              mandatory
              class="mb-10"
            >
              <v-btn value="preparty" variant="tonal">
                前夜祭 2025.6.27
              </v-btn>
              <v-btn value="kaigi" variant="tonal">
                2025.6.28
              </v-btn>
            </v-btn-toggle>

            <v-table v-if="selectedTable === 'kaigi'">
              <tbody>
                <tr v-for="item in schedules" :key="item.name" :class="item.type" class="text-body-2">
                  <td align="center" class="text-h6 py-3">
                    {{ item.start }}~{{ item.end }}
                  </td>
                  <td v-if="item.isTalk" align="left" class="py-10">
                    <NuxtLink :to="item.url" class="text-link">
                      <v-row>
                        <v-col>
                          <v-chip
                            size="large"
                            color="#F2C6C6"
                            variant="flat"
                            density="compact"
                            class="px-3 mb-2"
                            rounded="lg"
                            v-if="item.type === 'keynote'"
                          >KEYNOTE</v-chip>
                          <v-chip
                            size="large"
                            color="#C2CBFB"
                            variant="flat"
                            density="compact"
                            class="px-3 mb-2"
                            rounded="lg"
                            v-if="item.type === 'basic'"
                          >SESSION</v-chip>
                          <v-chip
                            size="large"
                            color="#CFEEBC"
                            variant="flat"
                            density="compact"
                            class="px-3 mb-2"
                            rounded="lg"
                            v-if="item.type === 'panel'"
                          >PANEL DISCUSSION</v-chip>
                          <p class="text-h6 text-left">
                            {{ item.title }}
                          </p>
                          <div align="center" class="d-flex">
                            <v-img
                              :src="item.image"
                              max-height="1.5rem"
                              max-width="1.5rem"
                              min-width="1.5rem"
                              min-height="1.5rem"
                              cover
                              class="speaker-image mr-2"
                            />
                            <p class="text-subtitle text-left">
                              {{ item.name }}
                            </p>
                          </div>
                        </v-col>
                      </v-row>
                    </NuxtLink>
                  </td>

                  <td v-else class="py-10">
                    <p class="text-h6 text-left">
                      {{ item.title }}
                    </p>
                    <p class="text-subtitle text-left">
                      {{ item.name }}
                    </p>
                  </td>
                </tr>
              </tbody>
            </v-table>

            <div v-if="selectedTable === 'preparty'">
              <v-alert
                variant="tonal"
                density="compact"
                class="py-10 mb-10 text-left"
              >
                <h3 class="text-h6">関西Ruby会議08 前夜祭</h3>
                <v-divider class="my-5"></v-divider>
                <p>
                  前夜祭には当日チケットを取得された方のみご参加いただけます。詳細は connpass をご確認ください。
                </p>
                <v-btn
                  size="large"
                  class="mt-5"
                  align="center"
                  :href="'https://kyotorb.connpass.com/event/353449/'"
                  target="_blank"
                >
                  イベントページ(connpass)
                  <template v-slot:append>
                    <v-icon icon="mdi-open-in-new"></v-icon>
                  </template>
                </v-btn>
              </v-alert>
              <v-table>
                <tbody>
                  <tr v-for="item in schedules2" :key="item.name" :class="item.type" class="text-body-2">
                    <td align="center" class="text-h6 py-3">
                      {{ item.start }}~{{ item.end }}
                    </td>
                    <td v-if="item.isTalk" align="left" class="py-10">
                      <NuxtLink :to="item.url" class="text-link">
                        <v-row>
                          <v-col>
                            <v-chip
                              size="large"
                              color="#C2CBFB"
                              variant="flat"
                              density="compact"
                              class="px-3 mb-2"
                              rounded="lg"
                              v-if="item.type === 'basic'"
                            >SESSION</v-chip>
                            <p class="text-h6 text-left">
                              {{ item.title }}
                            </p>
                            <div align="center" class="d-flex">
                              <v-img
                                :src="item.image"
                                max-height="1.5rem"
                                max-width="1.5rem"
                                min-width="1.5rem"
                                min-height="1.5rem"
                                cover
                                class="speaker-image mr-2"
                              />
                              <p class="text-subtitle text-left">
                                {{ item.name }}
                              </p>
                            </div>
                          </v-col>
                        </v-row>
                      </NuxtLink>
                    </td>

                    <td v-else class="py-10">
                      <p class="text-h6 text-left">
                        {{ item.title }}
                      </p>
                      <p class="text-subtitle text-left">
                        {{ item.name }}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </v-table>
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
  title: 'Schedule - 関西Ruby会議08',
  ogTitle: 'Schedule - 関西Ruby会議08',
  description: '関西Ruby会議08のスケジュールです。',
  ogDescription: '関西Ruby会議08のスケジュールです。',
})
</script>

<script>
export default {
  data: () => ({
    selectedTable: 'kaigi',
    schedules: [
      {
        start: '10:00',
        end: '11:00',
        title: 'DOOR OPEN!!!',
        isTalk: false,
        type: 'primary',
      },
      {
        start: '11:00',
        end: '11:10',
        title: 'OPENING',
        isTalk: false,
        type: 'basic',
      },
      {
        start: '11:10',
        end: '11:40',
        name: 'Masataka Kuwabara (@pocke)',
        url: '/presentations/pocke',
        title: 'TBD',
        image: 'https://avatars.githubusercontent.com/u/4361134?v=4',
        isTalk: true,
        type: 'keynote',
      },
      {
        start: '11:40',
        end: '12:40',
        title: 'LUNCH BREAK',
        isTalk: false,
        type: 'break',
      },
      {
        start: '12:40',
        end: '13:00',
        name: '村瀬洋介',
        url: '/presentations/yohm',
        title: '「富岳」と研究者をRubyでつなぐ：シミュレーション管理ツールOACIS',
        image: 'https://avatars.githubusercontent.com/u/718731?v=4',
        isTalk: true,
        type: 'basic',
      },
      {
        start: '13:10',
        end: '13:30',
        name: '桐生あんず(kiryuanzu)',
        url: '/presentations/kiryuanzu',
        title: '「1ヶ月でWebサービスを作る会」で出会った rails new、そして今に至る rails new',
        image: 'https://avatars.githubusercontent.com/u/23164048?v=4',
        isTalk: true,
        type: 'basic',
      },
      {
        start: '13:40',
        end: '14:00',
        name: '影山勝彦',
        url: '/presentations/kishima',
        title: 'mrubyとmicro-ROSが繋ぐロボットの世界側',
        image: 'https://avatars.githubusercontent.com/u/291438?v=4',
        isTalk: true,
        type: 'basic',
      },
      {
        start: '14:10',
        end: '14:30',
        name: 'Akira Yagi',
        url: '/presentations/akira888',
        title: 'ふだんのWEB技術スタックだけでアート作品を作ってみる',
        image: 'https://avatars.githubusercontent.com/u/1274183?v=4',
        isTalk: true,
        type: 'basic',
      },
      {
        start: '14:30',
        end: '14:50',
        title: 'BREAK',
        isTalk: false,
        type: 'break',
      },
      {
        start: '14:50',
        end: '15:10',
        name: 'bash',
        url: '/presentations/bash',
        title: 'Rubyと💪を作り込む - PicoRubyとマイコンでの自作トレーニング計測装置を用いたワークアウトの理想と現実',
        image: 'https://avatars.githubusercontent.com/u/137741?v=4',
        isTalk: true,
        type: 'basic',
      },
      {
        start: '15:20',
        end: '15:40',
        name: 'yumu',
        url: '/presentations/yumu',
        title: '分散オブジェクトで遊ぼう！〜dRubyで作るマルチプレイヤー迷路ゲーム〜',
        image: 'https://avatars.githubusercontent.com/u/72910412?v=4',
        isTalk: true,
        type: 'basic',
      },
      {
        start: '15:50',
        end: '16:10',
        name: 'Akira Matsuda',
        url: '/presentations/amatsuda',
        title: 'Rubyで世界を作ってみる話',
        image: 'https://avatars.githubusercontent.com/u/11493?v=4',
        isTalk: true,
        type: 'basic',
      },
      {
        start: '16:10',
        end: '16:30',
        title: 'BREAK',
        isTalk: false,
        type: 'break',
      },
      {
        start: '16:30',
        end: '17:00',
        name: '関西地域.rb',
        url: '/presentations/kansairb',
        title: 'Regional.rb and the Kyoto City',
        image: 'https://avatars.githubusercontent.com/u/210475839?v=4',
        isTalk: true,
        type: 'panel',
      },
      {
        start: '17:35',
        end: '18:05',
        name: 'Koji Shimba (@shimbaco)',
        url: '/presentations/shimbaco',
        title: 'TBD',
        image: 'https://avatars.githubusercontent.com/u/56767?v=4',
        isTalk: true,
        type: 'keynote',
      },
      {
        start: '18:30',
        end: '18:40',
        title: 'CLOSING',
        isTalk: false,
      },
      {
        start: '19:00',
        end: '21:00',
        title: 'AFTER PARTY',
        isTalk: false,
        type: 'primary',
      },
    ],
    schedules2: [
      {
        start: '18:30',
        end: '19:00',
        title: 'DOOR OPEN!!!',
        isTalk: false,
        type: 'primary',
      },
      {
        start: '19:00',
        end: '19:05',
        title: 'OPENING',
        isTalk: false,
        type: 'basic',
      },
      {
        start: '19:05',
        end: '19:25',
        name: 'Miyuki Koshiba',
        url: '/presentations/chobishiba',
        title: 'Rubyでやりたい駆動開発',
        image: 'https://avatars.githubusercontent.com/u/1327211?v=4',
        isTalk: true,
        type: 'basic',
      },
      {
        start: '19:30',
        end: '19:50',
        name: 'joker1007',
        url: '/presentations/joker1007',
        title: 'RubyGem開発で鍛えるソフトウェア設計力',
        image: 'https://avatars.githubusercontent.com/u/116996?v=4',
        isTalk: true,
        type: 'basic',
      },
      {
        start: '19:55',
        end: '20:15',
        name: 'lni_T / ルニ',
        url: '/presentations/lnit',
        title: 'ruby.wasmで多人数リアルタイム通信ゲームを作ろう',
        image: 'https://avatars.githubusercontent.com/u/6626484?v=4',
        isTalk: true,
        type: 'basic',
      },
      {
        start: '20:20',
        end: '20:40',
        name: 'クドウマサヤ',
        url: '/presentations/msykd',
        title: 'DJ on Ruby Ver.0.1',
        image: 'https://avatars.githubusercontent.com/u/7447363?v=4',
        isTalk: true,
        type: 'basic',
      },
      {
        start: '21:00',
        end: '',
        title: 'CLOSING',
        isTalk: false,
        type: 'basic',
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

.v-application {
  color: #700002;
  position: relative;
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
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 18px;
  font-weight: 500;
}

.text-body-1 {
  line-height: 1.7;
}

.text-link {
  color: #000;
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

.link:hover {
  border: #700002 0.5px solid;
  box-sizing:border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  transition: all 0.01s 0.01s ease-in-out;
}

td:nth-child(1) {
  border-right: thin dashed #700002 !important;
}

td {
  border-bottom: thin solid #700002 !important;
}

tr.primary {
  background-color: #FEF0F0 !important;
}

tr.break {
  background-color: #F4F4F4 !important;
}

@media (max-width: 600px) {
.v-col {
    flex-basis: inherit !important;
  }
}

.speaker-image {
  border-radius: 50%;
}

.v-btn-toggle {
  border: 1px solid #700002 !important;
}

.v-btn-toggle .v-btn {
  color: #700002 !important;
}

.v-btn-toggle .v-btn--active {
  background-color: #700002 !important;
  color: white !important;
}
</style>
