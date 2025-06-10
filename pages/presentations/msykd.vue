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
      name: 'クドウマサヤ',
      twitter: 'https://twitter.com/masaya_dev',
      github: 'https://github.com/msykd',
      description: '2009年に日本電子専門学校を卒業後、Webエンジニアとしてキャリアをスタート。0→1フェーズの新規開発を得意とし、スタートアップの立ち上げやフリーランスとしても数々のプロダクト開発を経験。Ruby、PHP、Perl、Go、Python、JavaScript(TypeScript)、C#など、多様な言語・フレームワークでの実務経験を持つ。株式会社iCARE CTO。',
      image: 'https://avatars.githubusercontent.com/u/7447363?v=4',
      title: 'ruby.DJ on Ruby Ver.0.1',
      abstract: '2025年4月末よりRubyでDJソフトウェアの開発に着手し始めました。\nPoC(Proof of Concept)版のデモ実演、工夫したポイントや技術的な課題、今後の展望をご紹介します。\n\n私はエンジニア歴15年、DJ歴16年という二足の草鞋を履き続けています。DJはPCで回しており、Serato ITCHというDJソフトウェアを愛用し続けています。\nRubyKaigi 2025にてRubyで音を鳴らすことをテーマにした発表が多く刺激を受け、DJソフトウェアの開発にチャレンジする決意をしました。\n\nPoC版は、Ruby(gtk4)で実装したアプリケーションUIから、Rustで実装したオーディオエンジンをFFIで呼び出す構成で開発を試しています。2トラックでのWavファイルの再生、およびクロスフェードで曲を繋ぐ様子をデモでお届けする予定です。',
      type: 'basic',
    },
  }),
}
</script>

<style>
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
