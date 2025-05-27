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
                  min-height="400px"
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

            <h4 align="center" class="text-h5 mb-2">
              PRE-PARTY SPEAKERS
            </h4>
            <v-row>
              <v-col
                v-for="(speaker, index) in prespeakers"
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
                <v-divider class="mx-2" color="#700002"></v-divider>
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
                  <v-divider class="mx-2" color="#700002"></v-divider>
                </v-card>
              </v-col>
            </v-row>

            <h4 align="center" class="text-h5 mb-2">
              PRE-PARTY SPEAKERS
            </h4>
            <v-row>
              <v-col
                v-for="(speaker, index) in prespeakers"
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
                  <v-divider class="mx-2" color="#700002"></v-divider>
                </v-card>
              </v-col>
            </v-row>
          </v-card-item>
        </v-card>
        <Footer />
      </v-col>
    </v-row>
  </v-app>
</template>

<script setup>
useSeoMeta({
  title: 'Speakers - 関西Ruby会議08',
  ogTitle: 'Speakers - 関西Ruby会議08',
  description: '関西Ruby会議08のスピーカー情報を掲載しています。',
  ogDescription: '関西Ruby会議08のスピーカー情報を掲載しています。',
})
</script>

<script>
export default {
  data: () => ({
    keyspeakers: [
      {
        name: 'Koji Shimba (@shimbaco)',
        twitter: 'https://twitter.com/shimbaco',
        github: 'https://github.com/shimbaco',
        description: '仕事ではRuby on Railsを使用したWebアプリケーション開発に携わっています。休日もRailsを使って個人開発をしており、現在はアニメ視聴記録サービスやマイクロブログサービス、Wikiアプリを作っています。新規サービスのHTMLなどのソースを見てどんな技術を使っているか想像するのが好きです。',
        image: 'https://avatars.githubusercontent.com/u/56767',
      },
      {
        name: 'Masataka Kuwabara (@pocke)',
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
        description: '#rubymusclemixin トレーニー。日本Ruby会議2009-2011実行委員、東京Ruby会議10実行委員長、RubyWorld Conference2014スピーカーなどを務める。業務ではピクシブ株式会社でプロダクト開発ギルド長としてプロダクトマネージャー、デザイナー、エンジニアの職能別強化組織、コミュニティーと社内をつなぐDeveloper Relations、開発サイクル改善のCoEをとりまとめて、総合的な開発力強化に取り組んでいる。',
        image: 'https://avatars.githubusercontent.com/u/137741',
      },
      {
        name: '影山勝彦',
        twitter: 'https://twitter.com/kishima',
        github: 'https://github.com/kishima',
        description: '@kishimaとして活動しているmruby好きな組み込みソフト系エンジニアです。普段は（株）アプトポッドで、IoT、Robotics関連のソフトウェア開発やインテグレーション業務に携わってます。',
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
        description: 'GMOペパボ株式会社でエンジニアをしています。エンジニアになってからずっとRubyist。Shoryukenを推しています。',
        image: 'https://avatars.githubusercontent.com/u/72910412',
      },
      {
        name: '桐生あんず(kiryuanzu)',
        twitter: 'https://twitter.com/anzu_mmm',
        github: 'https://github.com/Kiryuanzu',
        description: '神奈川県の三浦半島に住んでいるエンジニアです。Classi株式会社所属。東京Ruby会議12をきっかけに今年の1月から三浦半島.rb を立ち上げました。ひとりポッドキャスト「桐生あんず電波局」をやっています。',
        image: 'https://avatars.githubusercontent.com/u/23164048',
      },
      {
        name: 'Akira Yagi',
        twitter: 'https://twitter.com/w_e_b_coffee',
        github: 'https://github.com/akira888',
        description: '元コーヒー屋さん系Rubyist。株式会社万葉でエンジニアをやっています。WEB記事でprocessingの作品に出会い衝撃を受けてから Creative Coding の世界の住人に憧れています。p5.rbやOpal、WASMなどに興味があります。',
        image: 'https://avatars.githubusercontent.com/u/1274183',
      },
    ],
    prespeakers: [
      {
        name: 'Miyuki Koshiba',
        twitter: 'https://twitter.com/chobishiba',
        github: 'https://github.com/ksbmyk',
        description: 'Rubyist & Creative coder 株式会社スマートバンク ソフトウェアエンジニア',
        image: 'https://avatars.githubusercontent.com/u/1327211',
      },
      {
        name: 'joker1007',
        twitter: 'https://twitter.com/joker1007',
        github: 'https://github.com/joker1007',
        description: 'Repro株式会社 執行役員チーフアーキテクト。Reproにおける中心となる技術基盤の設計・構築・運用、中長期的な技術選定、チームを跨いだ設計レビューとアドバイスなどを行っている。業務や趣味でそれなりの数のRubyGemを作ってきた。パーフェクトRuby、及びパーフェクトRails著者陣の一人。',
        image: 'https://avatars.githubusercontent.com/u/116996',
      },
      {
        name: 'lni_T / ルニ',
        twitter: 'https://twitter.com/lni_T',
        github: 'https://github.com/lnit',
        description: 'メドピア株式会社に勤めるサーバーサイドエンジニアで、自社開発サービスのリードエンジニアを担っています。普段はRailsやHotwireと格闘する日々を過ごしていますが、時折ruby.wasmの力を借り、Rubyの新たな使い道を開拓して楽しんでいます。',
        image: 'https://avatars.githubusercontent.com/u/6626484',
      },
      {
        name: 'クドウマサヤ',
        twitter: 'https://twitter.com/masaya_dev',
        github: 'https://github.com/msykd',
        description: '2009年に日本電子専門学校を卒業後、Webエンジニアとしてキャリアをスタート。0→1フェーズの新規開発を得意とし、スタートアップの立ち上げやフリーランスとしても数々のプロダクト開発を経験。Ruby、PHP、Perl、Go、Python、JavaScript(TypeScript)、C#など、多様な言語・フレームワークでの実務経験を持つ。株式会社iCARE CTO。',
        image: 'https://avatars.githubusercontent.com/u/7447363',
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
