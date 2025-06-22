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
      name: 'Akira Matsuda',
      twitter: 'https://twitter.com/a_matsuda',
      github: 'https://github.com/amatsuda',
      description: 'Rubyコミッター、Railsコミッター。Gem作家。RubyKaigiチーフオーガナイザー。Asakusa.rb主催。最後のRuby Hero。最新のRails Luminary。',
      image: 'https://avatars.githubusercontent.com/u/11493?v=4',
      title: 'Rubyで世界を作ってみる話',
      abstract: 'オブジェクト指向プログラミング(OOP)を初めて学んだ時、OOPなら全てを表現できる！と教わったものです。たとえば、動物という抽象クラスを継承した犬クラスと猫クラスがあって、どっちも`鳴く`メソッドを呼ぶとポリモーフィックに"ワン"とか"ニャー"とか鳴かせれるんですよ！みたいな？確かに世界は全てオブジェクトでできてる気がするし、それらのデータと振る舞いとしてうまいことモデリングすれば作れないものはない！……気がしてきます。\n実際、リンネ先生があらゆる生物をツリー構造で分類してみたところ、この体系は数百年経っても破綻せずに使い続けられてるわけです。つまり、生物は全てRubyのclassで表現できますよね。真無盲腸目ハリネズミ科とネズミ目ヤマアラシ科の生物はツリー上では全く違うところに居るのにめちゃ似てるじゃん？っていう疑問も、平行進化の過程で獲得した「トゲトゲ」moduleをincludeしてやれば、ほらでき上がり！\nなんか界隈では近年OOPオワコン説みたいなのが聞かれますが、みんな窮屈なフレームワークに縛られすぎて、あるいはお仕事の業務アプリがプログラミングの全てだと思い込んでしまって、Rubyの表現力を過小評価してませんか？そこで、今日は初心に帰って素直に世界の全てを実装し直してみようと思います。とりあえず出発点は、このへんから始めてみましょうか。\n\nclass Atom\nend',
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
