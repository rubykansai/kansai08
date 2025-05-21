<template>
  <v-app class="fill-height">
    <AppHeader />
    <v-row>
      <v-col align="center" class="pb-0 mt-12">
        <v-card
          max-width="70vw"
          min-width="70vw"
          class="mt-12"
          :elevation="0"
        >
          <v-card-item>
            <h1 class="text-h4 title align-center mb-10">
              <span><v-img src="/dot.png" :width="20" class="mr-2"/></span> JOB BOARD
            </h1>
            <div align="left">
              <v-row>
                <v-col
                  v-for="(content, index) in boards"
                  :key="index"
                  lg="3"
                  md="4"
                  sm="4"
                  xs="6"
                  cols="6"
                  class="justify-center"
                  align="center"
                >
                  <a
                    :href="content.url"
                    target="_blank"
                  >
                    <v-img
                      class="link"
                      :src="content.image"
                      max-height="300px"
                      max-width="300px"
                    />
                  </a>
                  <p>
                    {{ content.description }}
                  </p>
                  <a
                    :href="content.url"
                    target="_blank"
                  >
                    <v-btn
                      size="large"
                      color="#700002"
                      rounded
                      class="my-3 px-8"
                    >SEE MORE</v-btn>
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
    boards: [
      {
        name: '株式会社SmartHR',
        url: 'https://hello-world.smarthr.co.jp/',
        description: '社会の仕組みを変え、歴史に残る模範的なソフトウェアをつくる仲間を探しています。フルリモート勤務可能！',
        image: '/kansai08/sponsors/smarthr.png',
      },
      {
        name: 'Tebiki株式会社',
        url: 'https://herp.careers/v1/tebiki/vVi21TcbkNA9',
        description: '動画×AI×ビッグデータで現場DXの未来を共に切り拓く！製造業を革新する「tebiki」の開発エンジニア募集！',
        image: '/kansai08/sponsors/tebiki.png',
      },
      {
        name: '株式会社タイミー',
        url: 'https://hrmos.co/pages/timee/jobs/1682251404118319104',
        description: '【フルリモート / フレックス】スポットワークを支える大規模システムを開発！中長期的な技術課題解決を推進するバックエンドエンジニア募集',
        image: '/kansai08/sponsors/timee.png',
      },
      {
        name: '株式会社ナレッジラボ',
        url: 'https://hrmos.co/pages/knowledgelabo/jobs/1852352624351100966',
        description: '【SaaSプロダクト開発】SREチームの立ち上げフェーズであるナレッジラボで、急成長中自社プロダクトの開発生産性向上に取り組んだくださるSREを募集！',
        image: '/kansai08/sponsors/knowledgelabo.png',
      },
      {
        name: '株式会社アジャイルウェア',
        url: 'https://agileware.jp/careers/recruiting/',
        description: '【社員の定着率向上により現在エンジニア募集を停止中ですが、再開時はぜひ！',
        image: '/kansai08/sponsors/agileware.png',
      },
      {
        name: '株式会社永和システムマネジメント',
        url: 'https://agile.esm.co.jp/hire/carrier-recruitment.html',
        description: 'Rubyとアジャイルソフトウェア開発を通じてコミュニティと成長したいエンジニアを絶賛募集中！',
        image: '/kansai08/sponsors/esm.png',
      },
      {
        name: '株式会社インゲージ',
        url: 'https://mite.ingage.co.jp/join-us/',
        description: "[77,97,116,122,12364,25216,34899,39015,21839,12398,73,78,71,65,71,69].pack('U*')",
        image: '/kansai08/sponsors/ingage.png',
      },
      {
        name: '株式会社マネーフォワード',
        url: 'https://hrmos.co/pages/moneyforward/jobs/0004175',
        description: 'すべての人のお金の課題解決へ、あなたの経験を活かしてみませんか？全国5都市（東京・大阪・京都・名古屋・福岡）でエンジニア募集中！',
        image: '/kansai08/sponsors/moneyforward.png',
      },
      {
        name: 'ポノス株式会社',
        url: 'https://www.ponos.jp/recruit/mid/Recruitment/%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%82%B5%E3%82%A4%E3%83%89%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2/',
        description: '12年以上運営中の代表タイトル「にゃんこ大戦争」は、累計1億DLを突破！',
        image: '/kansai08/sponsors/ponos.png',
      },
      {
        name: '株式会社Ruby開発',
        url: 'https://www.ruby-dev.jp/recruit_lp',
        description: 'RubyとAIで未来を切り拓く。挑戦者を募集中。私たちと一緒に、Ruby×AIで未来を創造しませんか？',
        image: '/kansai08/sponsors/rubydevelopment.png',
      },
      {
        name: 'エースチャイルド株式会社',
        url: 'https://www.as-child.com/recruit/',
        description: '「子どもの未来を明るく」社会に貢献するRailsプロダクトを、主体的に挑戦・成長できる環境で共につくりませんか？',
        image: '/kansai08/sponsors/aschild.png',
      },
      {
        name: '株式会社mov',
        url: 'https://recruit.mov.am/',
        description: 'インバウンドの「ド」真ん中で活躍したい人、「日本のポテンシャルを最大化する」ことに興味ある人、ぜひお話しましょう！',
        image: '/kansai08/sponsors/mov.png',
      },
      {
        name: '株式会社ネットワーク応用通信研究所',
        url: 'https://www.netlab.jp/recruit/',
        description: 'プログラミングが好きな人を募集しています！',
        image: '/kansai08/sponsors/nacl.png',
      },
      {
        name: '合同会社ユーキューブ',
        url: 'https://youcube.jp/jobs/',
        description: 'ほぼリモートの神戸の小さな会社です。多くのことにチャレンジでき、自分の仕事は自分で考えて進める裁量のある環境で成長し放題です。',
        image: '/kansai08/sponsors/youcube.png',
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

.text-body-1 {
  line-height: 1.7;
  font-family: "Noto Sans JP";
}
</style>
