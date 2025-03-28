<template>
  <v-app class="fill-height">
    <AppHeader />
    <v-row>
      <v-col align="center" class="pb-0 mt-12">
        <v-card
          max-width="90vw"
          min-width="90vw"
          class="pt-10 pb-10 mt-15 mb-15 pl-15 pr-15"
          :elevation="0"
        >
          <v-card-item>
            <div align="left">
              <h1 class="text-h4 title align-center mb-10">
                <span><v-img src="/dot.png" :width="20" class="mr-2"/></span> POLICIES
              </h1>

              <h2 align="center" class="text-h5 mb-10">
                アンチハラスメントポリシー
              </h2>
              <p align="center" class="text-body-1 mb-15 mr-10 ml-10">
                関西Ruby会議は、誰もがハラスメントを受けずに参加できるカンファレンスを目指しています。いかなる形であれハラスメントは許容できません。<br>
                このルールを破る人は誰であろうと、オーガナイザーの裁量で警告を与えたり、<br>カンファレンスやカンファレンス後の懇親の場から退場とすることもありえます。
              </p>
              <h2 class="text-h5 mb-5">
                目的
              </h2>
              <p class="text-body-1 mb-5">
                当ポリシーは、関西Ruby会議の参加者の全ての方に最大限に楽しんでいただくため、また、安心して参加していただくために設けられています。<br>
                当ポリシーに参加者の皆様の行動を制限する意図はありません。
              </p>
              <v-divider class="mb-10"></v-divider>
              <h2 class="text-h5 mb-5">
                適用範囲
              </h2>
              <p class="text-body-1 mb-5">
                当ポリシーは、関西Ruby会議の全てに適用されます。これには、カンファレンスの場、カンファレンス後の懇親の場でのコミュニケーションや振る舞い、プレゼンテーションの内容、ブログやソーシャルメディアでの発言が含まれます。<br>
                また、当ポリシーは参加者、スポンサー企業の皆様、スピーカー、スタッフ、その他の関係者全てに適用されます。
              </p>
              <v-divider class="mb-10"></v-divider>
              <h2 class="text-h5 mb-5">
                禁止されるハラスメント
              </h2>
              <p class="text-body-1 mb-2">
                ハラスメントには以下のようなものを含み、また、これに限りません。ハラスメント行為をやめるように要請された参加者は直ちに従ってください。
              </p>
              <ul class="text-body-1 mb-5">
                <li>- ジェンダー、性自認やジェンダー表現、性的指向、障碍、容貌、体型、人種、民族、年齢、宗教あるいは無宗教についての攻撃的なコメントをすること</li>
                <li>- 意図的な威嚇行為</li>
                <li>- 公共のスペースで性的な画像を掲示すること</li>
                <li>- 脅迫、ストーキング、つきまとい、または、それらを計画すること</li>
                <li>- いやがらせ目的の撮影や録音</li>
                <li>- 発表や他のイベントを継続的に妨害すること</li>
                <li>- 不適切な身体的接触</li>
                <li>- その他、性的な言葉や画像を含むコミュニケーション</li>
                <li>- ジェンダーを強く意識させるコンテキストで、特定の個人をほめたたえる行為</li>
                <li>- 以上のような行為を推奨したり、擁護したりすること</li>
              </ul>
              <v-divider class="mb-10"></v-divider>
              <h2 class="text-h5 mb-5">
                ハラスメントを受けたら、判断に迷ったら
              </h2>
              <p class="text-body-1 mb-5">
                ハラスメントを受けたと感じたり、他の参加者がハラスメントを受けているのを目撃した場合は、すぐに主催者またはスタッフにお知らせください。主催者は、すべての報告を機密に取り扱い、適切な対応を行います。
              </p>
              <v-divider class="mb-10"></v-divider>
              <h2 class="text-h5 mb-5">
                問い合わせ先
              </h2>
              <p class="text-body-1 mb-2">
                当ポリシーについてのご質問などがある場合は、下記までご連絡ください。
              </p>
              <ul class="text-body-1 mb-5">
                <li>- <a href="mailto:kansai08@rubykaigi.org">kansai08@rubykaigi.org</a></li>
              </ul>
              <v-divider class="mb-10"></v-divider>
              <h2 class="text-h5 mb-5">
                参考文献
              </h2>
              <ul class="text-body-1 mb-5">
                <li>- <a href="https://rubykaigi.org/2024/policies/">RubyKaigiアンチハラスメントポリシー</a></li>
                <li>- <a href="https://kaigionrails.org/2024/policies/">Kaigi on Railsアンチハラスメントポリシー</a></li>
              </ul>
              <v-divider class="mb-10"></v-divider>
              <h2 class="text-h5 mb-5">
                ライセンス
              </h2>
              <p class="text-body-1 mb-2">
                当ポリシーは <a
                  href="https://creativecommons.org/licenses/by/4.0/deed.ja"
                  target="_blank"
                >CC BY 4.0</a> のライセンス下で提供されます。
              </p>
              <p class="text-body-1 mb-5">
                This work is licensed under <a
                  href="https://creativecommons.org/licenses/by/4.0/deed.en"
                  target="_blank"
                >CC BY 4.0</a> .
              </p>
              <v-img
                src="/img-cc.png"
                max-width="120px"
              />
            </div>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<style>
* {
  font-family: 'Noto Sans JP';
  box-sizing: border-box;
}

.v-application {
  color: #700002;
  position: relative;
}

.v-card-item {
  color: #222222;
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
