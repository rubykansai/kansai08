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
          <v-card-item class="d-none d-md-block">
            <h4 class="text-h4 title align-center mb-10">
                <span><v-img src="/dot.png" :width="20" class="mr-2"/></span> SPEAKERS
            </h4>
            <h4 align="center" class="text-h5 mb-10">
              KEYNOTE SPEAKERS
            </h4>
            <v-row class="justify-space-between mb-10">
              <v-col
                v-for="(speaker, index) in keyspeakers"
                :key="index"
                md="6"
                sm="12"
                xs="12"
              >
                <v-card
                  class="px-3 py-3"
                  align="center"
                  variant="outlined"
                  min-height="25rem"
                >
                  <div class="py-2 px-2">
                    <v-img
                      :src="speaker.image"
                      max-height="10rem"
                      max-width="10rem"
                      cover
                      class="speakers"
                    />
                    <v-card-title>{{ speaker.name }}</v-card-title>
                    <div class="d-flex justify-center">
                      <a :href="speaker.twitter"><v-btn
                        class="mx-2"
                        icon="mdi-twitter"
                        flat
                      /></a>
                      <a :href="speaker.github"><v-btn
                        class="mx-2"
                        icon="mdi-github"
                        flat
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
            </v-row>

            <h4 align="center" class="text-h5 mb-2">
              SPEAKERS
            </h4>
            <v-row>
              <v-col
                v-for="(speaker, index) in speakers"
                :key="index"
                lg="4"
                md="6"
                sm="12"
                xs="12"
              >
                <v-card
                  align="center"
                  variant="outlined"
                  min-height="530px"
                  class="px-3 py-3"
                >
                  <div class="py-2 px-2">
                    <v-img
                      :src="speaker.image"
                      max-height="10rem"
                      max-width="10rem"
                      class="speakers"
                      cover
                    />
                    <v-card-title>{{ speaker.name }}</v-card-title>
                    <div class="d-flex justify-center">
                      <a :href="speaker.twitter"><v-btn
                        class="mx-2"
                        icon="mdi-twitter"
                        flat
                      /></a>
                      <a :href="speaker.github"><v-btn
                        class="mx-2"
                        icon="mdi-github"
                        flat
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
            </v-row>
          </v-card-item>
          <v-card-item class="d-flex d-md-none">
            <h4 class="text-h4 title align-center mb-10">
                <span><v-img src="/dot.png" :width="20" class="mr-2"/></span> SPEAKERS
            </h4>
            <h4 align="center" class="text-h5 mb-10">
              KEYNOTE SPEAKERS
            </h4>
            <v-row class="justify-space-between mb-10">
              <v-col
                v-for="(speaker, index) in keyspeakers"
                :key="index"
                md="6"
                sm="12"
                xs="12"
              >
                <v-card
                  class="px-5 py-3"
                  align="center"
                  flat
                >
                  <div class="py-2 px-2">
                    <v-img
                      :src="speaker.image"
                      max-height="10rem"
                      max-width="10rem"
                      cover
                      class="speakers"
                    />
                    <v-card-title>{{ speaker.name }}</v-card-title>
                    <div class="d-flex justify-center">
                      <a :href="speaker.twitter"><v-btn
                        class="mx-2"
                        icon="mdi-twitter"
                        flat
                      /></a>
                      <a :href="speaker.github"><v-btn
                        class="mx-2"
                        icon="mdi-github"
                        flat
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
            </v-row>

            <h4 align="center" class="text-h5 mb-2">
              SPEAKERS
            </h4>
            <v-row>
              <v-col
                v-for="(speaker, index) in speakers"
                :key="index"
                lg="4"
                md="6"
                sm="12"
                xs="12"
              >
                <v-card
                  align="center"
                  class="px-5 py-3"
                  flat
                >
                  <div class="py-2 px-2">
                    <v-img
                      :src="speaker.image"
                      max-height="10rem"
                      max-width="10rem"
                      class="speakers"
                      cover
                    />
                    <v-card-title>{{ speaker.name }}</v-card-title>
                    <div class="d-flex justify-center">
                      <a :href="speaker.twitter"><v-btn
                        class="mx-2"
                        icon="mdi-twitter"
                        flat
                      /></a>
                      <a :href="speaker.github"><v-btn
                        class="mx-2"
                        icon="mdi-github"
                        flat
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
            </v-row>
          </v-card-item>
        </v-card>
        <FooterWave />
        <FooterBlock />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  setup() {
    const generateImgPath = (fileName) => {
      return new URL(`../../public/${fileName}`, import.meta.url).href
    }
    return {
      generateImgPath,
    }
  },
  data: () => ({
    keyspeakers: [
      {
        name: 'Shimba, Koji',
        twitter: 'https://twitter.com/shimbaco',
        github: 'https://github.com/shimbaco',
        description: '仕事ではRuby on Railsを使用したWebアプリケーション開発に携わっています。休日もRailsを使って個人開発をしており、現在はアニメ視聴記録サービスやマイクロブログサービス、Wikiアプリを作っています。新規サービスのHTMLなどのソースを見てどんな技術を使っているか想像するのが好きです。',
        image: 'https://avatars.githubusercontent.com/u/56767',
      },
      {
        name: 'Masataka Kuwabara',
        twitter: 'https://twitter.com/p_ck_',
        github: 'https://github.com/pocke',
        description: 'A maintainer of RBS, a Ruby committer.',
        image: 'https://avatars.githubusercontent.com/u/4361134',
      },
    ],
    speakers: [
      {
        name: '村瀬洋介',
        twitter: 'https://twitter.com/yohm13',
        github: 'https://github.com/yohm',
        description: '理化学研究所 計算科学研究センターに所属する研究者。専門は数理社会科学で、数理モデリングと大規模シミュレーションを通じて人間社会の複雑な現象の解明に取り組んでいる。ジョブ管理ツール OACIS の開発を2013年より主導し、現在も継続的にメンテナンスと機能拡張を行っている。RubyとRailsをベースとした研究支援ツールの開発を通じて、科学技術計算とRubyコミュニティの橋渡しを目指している。',
        image: 'https://avatars.githubusercontent.com/u/718731',
      },
      {
        name: 'bash',
        twitter: 'https://twitter.com/bash0C7',
        github: 'https://github.com/bash0C7',
        description: '#RubyMuscleMixin トレーニーRubyMuscleMixinとは、RubyMusicMixinから着想を得た活動です。筋肉を身につけるアクティビティーを行うRubyistとこれからRubyistになる可能性のある人たちの活動です',
        image: 'https://avatars.githubusercontent.com/u/137741',
      },
      {
        name: '影山勝彦',
        twitter: 'https://twitter.com/kishima',
        github: 'https://github.com/kishima',
        description: '（株）アプトポッドで、IoT、Robotics関連のソフトウェア開発およびインテグレーション業務に従事しています。',
        image: 'https://avatars.githubusercontent.com/u/291438',
      },
      {
        name: 'Akira Matsuda',
        twitter: 'https://twitter.com/a_matsuda',
        github: 'https://github.com/amatsuda',
        description: 'Rubyコミッター、Railsコミッター。Gem作家。RubyKaigiチーフオーガナイザー。Asakusa.rb主催。最後のRuby Hero。最新のRails Luminary。',
        image: 'https://avatars.githubusercontent.com/u/11493',
      },
      {
        name: 'yumu',
        twitter: 'https://twitter.com/myumura3',
        github: 'https://github.com/myumura',
        description: 'GMOペパボ株式会社でシニアエンジニアをしています。Shoryukenを推している人です。',
        image: 'https://avatars.githubusercontent.com/u/72910412',
      },
      {
        name: '桐生あんず(kiryuanzu)',
        twitter: 'https://twitter.com/anzu_mmm',
        github: 'https://github.com/Kiryuanzu',
        description: '神奈川県の三浦半島に住んでいるエンジニアです。今年の1月から東京 Ruby会議12 のセッション「Regional.rb and the Tokyo Metropolis」がきっかけで三浦半島.rb を立ち上げました。https://kiryuanzu.hatenablog.com/entry/2025/01/23/224006',
        image: 'https://avatars.githubusercontent.com/u/23164048',
      },
      {
        name: 'Akira Yagi',
        twitter: 'https://twitter.com/w_e_b_coffee',
        github: 'https://github.com/akira888',
        description: '元コーヒー屋さん系Rubyist。株式会社万葉でエンジニアをやっています。WEB記事でつぶやきprocessingの作品に出会い、衝撃を受けてからCreative Coding世界の住人に憧れています。p5.rbのおかげで初processingすることができてからはWASMやOpalにも興味が湧いています。',
        image: 'https://avatars.githubusercontent.com/u/1274183',
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

.speakers {
  border-radius: 50%;
}

.v-card--variant-outlined {
  border-color: #700002 !important;
  border-width: 2px !important;
  border-radius: 10px !important;
}

.dot {
  width: 20px;
  height: 20px;
}

.title {
  font-weight: 400;
  display: flex;
}

.text-h3, .text-h4, .text-h5 {
  font-family: "Kumbh Sans";
  color: #700002;
  font-weight: 500;
}

.text-link {
  color: #222222;
  text-decoration: none;
}

.text-link:hover {
  color: #419dbf;
  text-decoration: underline;
  box-sizing:border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  transition: all 0.1s ease-in-out;
}

.link:hover {
  border: #419dbf 0.5px solid;
  box-sizing:border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  transition: all 0.01s 0.01s ease-in-out;
}

@media (max-width: 600px) {
.v-col {
    flex-basis: inherit !important;
  }
}
</style>
