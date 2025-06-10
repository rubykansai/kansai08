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
      name: '村瀬洋介',
      twitter: 'https://twitter.com/yohm13',
      github: 'https://github.com/yohm',
      description: '理化学研究所 計算科学研究センターに所属する研究者。専門は数理社会科学で、数理モデリングと大規模シミュレーションを通じて人間社会の複雑な現象の解明に取り組んでいる。ジョブ管理ツール OACIS の開発を2013年より主導し、現在も継続的にメンテナンスと機能拡張を行っている。RubyとRailsをベースとした研究支援ツールの開発を通じて、科学技術計算とRubyコミュニティの橋渡しを目指している。',
      image: 'https://avatars.githubusercontent.com/u/718731?v=4',
      title: '「富岳」と研究者をRubyでつなぐ：シミュレーション管理ツールOACIS',
      abstract: 'スーパーコンピュータ「富岳」のような高性能計算機を使った科学技術計算では、大量のシミュレーションジョブを管理する必要があります。ところが、最先端の研究現場であっても、ジョブ投入や結果整理などの作業は意外にも手作業が多く、煩雑でミスも起こりがちです。本発表では、私たちがRubyで開発しているジョブ管理ツール「OACIS（オアシス）」を紹介します。OACISは、リモートホストへのジョブ投入から、結果ファイルの自動収集、ログの整理、パラメータ探索までを一貫してサポートするWebアプリケーションです。科学研究の現場で実際に使われており、スパコンでも稼働しています。本発表では、OACISの機能と内部構成を解説しながら、科学技術計算の現場がどのようなものか、そしてRubyがどのように役立っているのかを紹介します。',
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
