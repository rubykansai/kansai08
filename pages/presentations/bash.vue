<template>
  <v-app class="fill-height">
    <AppHeader />
    <v-row>
      <v-col align="center" class="pb-0 mt-12">
        <v-card
          max-width="70vw"
          min-width="70vw"
          class="py-10"
          :elevation="0"
        >
          <v-card-item>
            <h1 class="text-h4 title align-center mb-15">
              <span><v-img src="/dot.png" :width="20" class="mr-2"/></span> SCHEDULE
            </h1>
            <div align="left">
              <v-row>
                <v-col
                  md="4"
                  sm="12"
                  xs="12"
                >
                  <v-card
                    class="speaker px-10 py-5"
                    align="center"
                    flat
                  >
                    <div class="py-2 px-2">
                      <v-img
                        :src="speaker.image"
                        max-height="10rem"
                        max-width="10rem"
                        cover
                        class="rounded-circle"
                      />
                      <v-card-title>{{ speaker.name }}</v-card-title>
                      <div class="d-flex justify-center">
                        <a :href="speaker.twitter"><v-btn
                          class="mx-2"
                          icon="mdi-twitter"
                          flat
                          color="#FEF0F0"
                        /></a>
                        <a :href="speaker.github"><v-btn
                          class="mx-2"
                          icon="mdi-github"
                          flat
                          color="#FEF0F0"
                        /></a>
                      </div>
                      <div align="left">
                        <p class="text-body-2 mt-5">
                          {{ speaker.description }}
                        </p>
                      </div>
                    </div>
                  </v-card>
                </v-col>
                <v-col>
                  <v-chip
                    size="large"
                    color="#F2C6C6"
                    variant="flat"
                    density="compact"
                    class="px-3 mb-2"
                    rounded="lg"
                    v-if="speaker.type === 'keynote'"
                  >KEYNOTE</v-chip>
                  <v-chip
                    size="large"
                    color="#C2CBFB"
                    variant="flat"
                    density="compact"
                    class="px-3 mb-2"
                    rounded="lg"
                    v-if="speaker.type === 'basic'"
                  >SESSION</v-chip>
                  <v-chip
                    size="large"
                    color="#CFEEBC"
                    variant="flat"
                    density="compact"
                    class="px-3 mb-2"
                    rounded="lg"
                    v-if="speaker.type === 'panel'"
                  >PANEL DISCUSSION</v-chip>
                  <h2 class="text-h6 mb-2">
                    {{ speaker.title }}
                  </h2>
                  <v-divider class="mb-5" />
                  <p class="text-body-1 abstract">
                    {{ speaker.abstract }}
                  </p>
                  <v-divider class="my-5" />
                  <a
                    v-if="speaker.slide"
                    :href="speaker.slide"
                    target="_blank"
                  >
                    <v-btn
                      class="slide-btn"
                      rounded="xl"
                      size="large"
                      color="#700002"
                    ><v-icon icon="mdi-presentation" size="medium" /> Slides ></v-btn>
                  </a>
                </v-col>
              </v-row>
            </div>
          </v-card-item>
        </v-card>
        <Footer />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    speaker: {
      name: 'bash',
      twitter: 'https://twitter.com/bash0C7',
      github: 'https://github.com/bash0C7',
      description: '#rubymusclemixin トレーニー。日本Ruby会議2009-2011実行委員、東京Ruby会議10実行委員長、RubyWorld Conference2014スピーカーなどを務める。業務ではピクシブ株式会社でプロダクト開発ギルド長としてプロダクトマネージャー、デザイナー、エンジニアの職能別強化組織、コミュニティーと社内をつなぐDeveloper Relations、開発サイクル改善のCoEをとりまとめて、総合的な開発力強化に取り組んでいる。',
      image: 'https://avatars.githubusercontent.com/u/137741?v=4',
      title: 'Rubyと💪を作り込む - PicoRubyとマイコンでの自作トレーニング計測装置を用いたワークアウトの理想と現実',
      abstract: 'ウェイトトレーニングと Ruby の意外な共通点、それは「計測と改善の継続」です。本セッションではESP32を搭載したマイコンのATOM Matrix上で動くPicoRubyで開発した計測機構による、Velocity Based Training(VBT)に基づく重量設定のためのトレーニングの挙上速度・挙上加速度という客観的データをリアルタイムに計測・分析するシステムの開発ストーリーを共有します。\nこの分野では歴史的に「限界まで挙げる」的な主観的指標がもっぱら用いられてきました。ただそのような指標はコンディションや感覚の影響も大きく、適切な負荷設定には高度な勘と経験が必要でした。近年はセンサーの発展により「0.4m/秒で動く」的な動作を扱うことができるようになり、速度と重さの相関関係をもとにした的確な負荷設定が可能になり、スポーツ現場への適用が進んでいます。\nしかしその装置は個人レベルで気軽に手に取れる状況にはありません。そこでRuby の柔軟性とマイコンの手軽さを組み合わせることで、高価な専用機器なしでもVBTは実現可能と考え、この開発過程と、そこから得られた知見を紹介します。\n筋肉もRubyも計測して改善してこそ継続した強化が行えます。Rubyをたのしむ心と、健康寿命を支えるキーとなる筋肉作り。全くかけ離れた活動にみえますが、実は同じように高めることができるのです。',
      type: 'basic',
    },
  }),
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

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

.speaker {
  background-color: #FEF0F0 !important;
}

.abstract {
  white-space: pre-wrap;
}

svg.v-icon__svg {
  transform: none;
}

.slide-btn .v-icon {
  margin-right: 7px;
}

@media (max-width: 600px) {
.v-col {
    flex-basis: inherit !important;
  }
}

.v-chip__content {
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 500;
  font-size: 12px;
}
</style>
