<template>
  <v-app class="fill-height">
    <AppHeader />
    <v-row>
      <v-col align="center" class="pb-0 mt-12">
        <v-card
          max-width="90vw"
          min-width="90vw"
          class="py-10 my-15 px-15 d-none d-md-block"
          :elevation="0"
        >
          <v-card-item>
            <div align="left">
              <h1 class="text-h4 title align-center mb-10">
                <span><v-img src="/dot.png" :width="20" class="mr-2"/></span> ABOUT
              </h1>

              <div align="center">
                <v-img src="/logo-red.svg" width="400px" class="mb-10"/>
              </div>
              <p align="center" class="text-body-1 mb-10 mx-10">
                関西Ruby会議は、関西で定期的に開催されているプログラミング言語Rubyに関する技術カンファレンスです。<br>
                関西圏を中心にRubyistが集まり、Rubyに関する技術講演を聞いたり、Rubyist同士が知見を共有したりする場として開催しています。<br>
                また、知的好奇心を刺激し、新たなつながりを生む場となることを目指しています。<br>
                みなさまのご参加をお待ちしています！
              </p>
              <a href="mailto:kansai08@rubykaigi.org">
                <div align="center" class="mb-15">
                  <v-btn
                      size="x-large"
                      color="#700002"
                      prepend-icon="mdi-email-outline"
                      rounded
                      class="v-btn-contact px-15"
                    >
                      <template v-slot:prepend>
                        <v-icon color="white"></v-icon>
                      </template>
                      CONTACT
                  </v-btn>
                </div>
              </a>
              <h3 align="center" class="text-h3 mb-10">
                TEAM
              </h3>
              <h4 align="center" class="text-h4 mb-10">
                Organizers
              </h4>
              <v-row>
                <v-col
                  v-for="(organizer, index) in organizers"
                  :key="index"
                  md="3"
                  sm="4"
                >
                  <v-card
                    class="organizers"
                    align="center"
                    flat
                  >
                    <div class="py-2 px-2">
                      <v-img
                        :src="organizer.image"
                        max-height="145px"
                        max-width="145px"
                        rounded="circle"
                        cover
                      />
                      <v-card-title class="text-body-2">{{ organizer.name }}</v-card-title>
                      <v-card-subtitle class="text-body-2">{{ organizer.role }}</v-card-subtitle>
                      <div class="d-flex justify-center">
                        <a :href="organizer.twitter" v-if="organizer.twitter">
                          <v-btn
                          class="mx-2"
                          icon="mdi-twitter"
                          flat
                        />
                        </a>
                        <v-btn
                          class="mx-2"
                          icon="mdi-twitter"
                          flat
                          v-if="!organizer.twitter"
                          style="visibility: hidden;"
                        />
                        <a :href="organizer.github" v-if="organizer.github"><v-btn
                          class="mx-2"
                          icon="mdi-github"
                          flat
                        /></a>
                        <v-btn
                          class="mx-2"
                          icon="mdi-github"
                          flat
                          v-if="!organizer.github"
                          style="visibility: hidden;"
                        />
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
              <h4 align="center" class="text-h4 mb-10">
                Designers
              </h4>
              <v-row>
                <v-col
                  v-for="(designer, index) in designers"
                  :key="index"
                  md="3"
                  sm="4"
                >
                  <v-card
                    class="organizers"
                    align="center"
                    flat
                  >
                    <div class="py-2 px-2">
                      <v-img
                        :src="designer.image"
                        max-height="145px"
                        max-width="145px"
                        rounded="circle"
                        cover
                      />
                      <v-card-title class="text-body-2">{{ designer.name }}</v-card-title>
                      <v-card-subtitle class="text-body-2">{{ designer.role }}</v-card-subtitle>
                      <div class="d-flex justify-center">
                        <a :href="designer.twitter" v-if="designer.twitter">
                          <v-btn
                          class="mx-2"
                          icon="mdi-twitter"
                          flat
                        />
                        </a>
                        <v-btn
                          class="mx-2"
                          icon="mdi-twitter"
                          flat
                          v-if="!designer.twitter"
                          style="visibility: hidden;"
                        />
                        <a :href="designer.github" v-if="designer.github"><v-btn
                          class="mx-2"
                          icon="mdi-github"
                          flat
                        /></a>
                        <v-btn
                          class="mx-2"
                          icon="mdi-github"
                          flat
                          v-if="!designer.github"
                          style="visibility: hidden;"
                        />
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
              <h4 align="center" class="text-h4 mb-10">
                Wi-Fi and Network Operations
              </h4>
              <v-row>
                <v-col
                  v-for="(noc, index) in nocMembers"
                  :key="index"
                  md="3"
                  sm="4"
                >
                  <v-card
                    class="organizers"
                    align="center"
                    flat
                  >
                    <div class="py-2 px-2">
                      <v-img
                        :src="noc.image"
                        max-height="145px"
                        max-width="145px"
                        rounded="circle"
                        cover
                      />
                      <v-card-title class="text-body-2">{{ noc.name }}</v-card-title>
                      <v-card-subtitle class="text-body-2">{{ noc.role }}</v-card-subtitle>
                      <div class="d-flex justify-center">
                        <a :href="noc.twitter" v-if="noc.twitter">
                          <v-btn
                          class="mx-2"
                          icon="mdi-twitter"
                          flat
                        />
                        </a>
                        <v-btn
                          class="mx-2"
                          icon="mdi-twitter"
                          flat
                          v-if="!noc.twitter"
                          style="visibility: hidden;"
                        />
                        <a :href="noc.github" v-if="noc.github"><v-btn
                          class="mx-2"
                          icon="mdi-github"
                          flat
                        /></a>
                        <v-btn
                          class="mx-2"
                          icon="mdi-github"
                          flat
                          v-if="!noc.github"
                          style="visibility: hidden;"
                        />
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </v-card-item>
        </v-card>
        <v-card
          max-width="90vw"
          min-width="90vw"
          class="my-10 d-block d-md-none"
          :elevation="0"
        >
          <v-card-item>
            <div align="left">
              <h1 class="text-h4 title align-center mb-10">
                <span><v-img src="/dot.png" :width="20" class="mr-2"/></span> ABOUT
              </h1>

              <div align="center">
                <v-img src="/logo-red.svg" width="400px" class="mb-10"/>
              </div>
              <p align="center" class="text-body-1 mb-10 mx-5">
                関西Ruby会議は、関西で定期的に開催されているプログラミング言語Rubyに関する技術カンファレンスです。<br>
                関西圏を中心にRubyistが集まり、Rubyに関する技術講演を聞いたり、Rubyist同士が知見を共有したりする場として開催しています。<br>
                また、知的好奇心を刺激し、新たなつながりを生む場となることを目指しています。<br>
                みなさまのご参加をお待ちしています！
              </p>
              <a href="mailto:kansai08@rubykaigi.org">
                <div align="center" class="mb-15">
                  <v-btn
                      size="x-large"
                      color="#700002"
                      prepend-icon="mdi-email-outline"
                      rounded
                      class="v-btn-contact px-15"
                    >
                      <template v-slot:prepend>
                        <v-icon color="white"></v-icon>
                      </template>
                      CONTACT
                  </v-btn>
                </div>
              </a>
              <h3 align="center" class="text-h3 mb-10">
                TEAM
              </h3>
              <h4 align="center" class="text-h4 mb-10">
                Organizers
              </h4>
              <v-row>
                <v-col
                  v-for="(organizer, index) in organizers"
                  :key="index"
                  cols="6"
                >
                  <v-card
                    class="organizers"
                    align="center"
                    flat
                  >
                    <div class="py-2 px-2">
                      <v-img
                        :src="organizer.image"
                        max-height="145px"
                        max-width="145px"
                        rounded="circle"
                        cover
                      />
                      <v-card-title class="text-body-2">{{ organizer.name }}</v-card-title>
                      <v-card-subtitle class="text-body-2">{{ organizer.role }}</v-card-subtitle>
                      <div class="d-flex justify-center">
                        <a :href="organizer.twitter" v-if="organizer.twitter"><v-btn
                          class="mx-2"
                          icon="mdi-twitter"
                          flat
                        /></a>
                        <a :href="organizer.github" v-if="organizer.github"><v-btn
                          class="mx-2"
                          icon="mdi-github"
                          flat
                        /></a>
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
              <h4 align="center" class="text-h4 mb-10">
                Designers
              </h4>
              <v-row>
                <v-col
                  v-for="(designer, index) in designers"
                  :key="index"
                  cols="6"
                >
                  <v-card
                    class="organizers"
                    align="center"
                    flat
                  >
                    <div class="py-2 px-2">
                      <v-img
                        :src="designer.image"
                        max-height="145px"
                        max-width="145px"
                        rounded="circle"
                        cover
                      />
                      <v-card-title class="text-body-2">{{ designer.name }}</v-card-title>
                      <v-card-subtitle class="text-body-2">{{ designer.role }}</v-card-subtitle>
                      <div class="d-flex justify-center">
                        <a :href="designer.twitter" v-if="designer.twitter"><v-btn
                          class="mx-2"
                          icon="mdi-twitter"
                          flat
                        /></a>
                        <a :href="designer.github" v-if="designer.github"><v-btn
                          class="mx-2"
                          icon="mdi-github"
                          flat
                        /></a>
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
              <h4 align="center" class="text-h4 mb-10">
                Wi-Fi and Network Operations
              </h4>
              <v-row>
                <v-col
                  v-for="(noc, index) in nocMembers"
                  :key="index"
                  cols="6"
                >
                  <v-card
                    class="organizers"
                    align="center"
                    flat
                  >
                    <div class="py-2 px-2">
                      <v-img
                        :src="noc.image"
                        max-height="145px"
                        max-width="145px"
                        rounded="circle"
                        cover
                      />
                      <v-card-title class="text-body-2">{{ noc.name }}</v-card-title>
                      <v-card-subtitle class="text-body-2">{{ noc.role }}</v-card-subtitle>
                      <div class="d-flex justify-center">
                        <a :href="noc.twitter" v-if="noc.twitter"><v-btn
                          class="mx-2"
                          icon="mdi-twitter"
                          flat
                        /></a>
                        <a :href="noc.github" v-if="noc.github"><v-btn
                          class="mx-2"
                          icon="mdi-github"
                          flat
                        /></a>
                      </div>
                    </div>
                  </v-card>
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

export default{
  data: () => ({
    organizers: [
      {
        name: 'ydah',
        twitter: 'https://twitter.com/ydah_',
        github: 'https://github.com/ydah',
        role: 'Chief Organizer & Designer',
        image: 'https://avatars.githubusercontent.com/u/13041216',
      },
      {
        name: 'hachi',
        twitter: 'https://twitter.com/hachiblog',
        github: 'https://github.com/hayaokimura',
        role: 'Organizer',
        image: 'https://avatars.githubusercontent.com/u/8371588',
      },
      {
        name: 'おごもり',
        twitter: 'https://twitter.com/ogomr',
        github: 'https://github.com/ogom',
        role: 'Organizer',
        image: 'https://avatars.githubusercontent.com/u/471923',
      },
      {
        name: 'luccafort',
        twitter: 'https://twitter.com/luccafort',
        github: 'https://github.com/luccafort',
        role: 'Organizer',
        image: 'https://avatars.githubusercontent.com/u/1229937',
      },
      {
        name: 'onk',
        twitter: 'https://twitter.com/onk',
        github: 'https://github.com/onk',
        role: 'Organizer',
        image: 'https://avatars.githubusercontent.com/u/203046',
      },
      {
        name: 'smantani',
        role: 'Organizer',
        image: 'https://secure.gravatar.com/avatar/f95dd1e4bb869baf82e1e622488ae30e',
      },
      {
        name: 'spring_kuma',
        twitter: 'https://twitter.com/spring_kuma',
        role: 'Organizer',
        image: 'https://avatars.githubusercontent.com/u/194263?v=4',
      },
      {
        name: 'むらじゅん',
        twitter: 'https://twitter.com/murajun1978',
        github: 'https://github.com/murajun1978',
        role: 'Organizer & NOC member',
        image: 'https://avatars.githubusercontent.com/u/911903',
      },
      {
        name: 'すぎうり',
        twitter: 'https://twitter.com/uproad3',
        github: 'https://github.com/uproad',
        role: 'Organizer & NOC Lead',
        image: 'https://avatars.githubusercontent.com/u/7349115',
      },
      {
        name: 'pastak',
        twitter: 'https://twitter.com/pastak',
        github: 'https://github.com/pastak',
        role: 'Organizer',
        image: 'https://avatars.githubusercontent.com/u/191533',
      },
      {
        name: 'youcune',
        twitter: 'https://twitter.com/youcune',
        github: 'https://github.com/youcune',
        role: 'Organizer',
        image: 'https://avatars.githubusercontent.com/u/2869221',
      },
      {
        name: 'honeniq',
        twitter: 'https://twitter.com/honeniq',
        github: 'https://github.com/honeniq',
        role: 'Organizer',
        image: 'https://avatars.githubusercontent.com/u/1292385',
      },
      {
        name: 'znz',
        twitter: 'https://twitter.com/znz',
        github: 'https://github.com/znz',
        role: 'Organizer',
        image: 'https://avatars.githubusercontent.com/u/11857',
      },
      {
        name: 'toshima66',
        twitter: 'https://twitter.com/toshima66',
        github: 'https://github.com/toshima66',
        role: 'Organizer',
        image: 'https://avatars.githubusercontent.com/u/904191',
      },
      {
        name: 'khori',
        twitter: 'https://twitter.com/khoriosk',
        role: 'Organizer',
        image: '/kansai08/khori.png',
      },
      {
        name: 'k-yoshida',
        twitter: 'https://twitter.com/8maim0',
        github: 'https://github.com/k-yoshida',
        role: 'Organizer',
        image: 'https://avatars.githubusercontent.com/u/17219700',
      },
      {
        name: '無双',
        twitter: 'https://twitter.com/nishi_okashi',
        github: 'https://github.com/nishioka-shinji',
        role: 'Organizer',
        image: 'https://avatars.githubusercontent.com/u/46985135',
      },
      {
        name: '107steps',
        twitter: 'https://twitter.com/107steps',
        github: 'https://github.com/masoo',
        role: 'Organizer',
        image: 'https://avatars.githubusercontent.com/u/2397400',
      },
      {
        name: 'okeysea',
        twitter: 'https://twitter.com/okeysea1',
        github: 'https://github.com/okeysea',
        role: 'Organizer',
        image: 'https://avatars.githubusercontent.com/u/67820904',
      },
      {
        name: 'たろサ',
        twitter: 'https://twitter.com/momoonga',
        github: 'https://github.com/tarosay',
        role: 'Organizer',
        image: 'https://avatars.githubusercontent.com/u/1458076',
      },
      {
        name: 'sanfrecce_osaka',
        twitter: 'https://twitter.com/sanfrecce_osaka',
        github: 'https://github.com/sanfrecce-osaka',
        role: 'Organizer',
        image: 'https://avatars.githubusercontent.com/u/7955461',
      },
    ],
    designers: [
      {
        name: 'reina',
        role: 'Designer',
        image: '/kansai08/reina.png',
      },
      {
        name: 'Momoka',
        role: 'Designer',
        image: '/kansai08/momoka.jpg',
      },
      {
        name: 'ydah',
        twitter: 'https://twitter.com/ydah_',
        github: 'https://github.com/ydah',
        role: 'Chief Organizer & Designer',
        image: 'https://avatars.githubusercontent.com/u/13041216',
      },
    ],
    nocMembers: [
      {
        name: 'すぎうり',
        twitter: 'https://twitter.com/uproad3',
        github: 'https://github.com/uproad',
        role: 'Organizer & NOC Lead',
        image: 'https://avatars.githubusercontent.com/u/7349115',
      },
      {
        name: 'むらじゅん',
        twitter: 'https://twitter.com/murajun1978',
        github: 'https://github.com/murajun1978',
        role: 'Organizer & NOC member',
        image: 'https://avatars.githubusercontent.com/u/911903',
      },
      {
        name: '温井直輝',
        twitter: 'https://twitter.com/Kinukui2003',
        github: 'https://github.com/nnnnnnnnnke',
        role: 'NOC member',
        image: '/kansai08/Kinukui2003.png',
      },
      {
        name: 'Yoshi',
        twitter: 'https://twitter.com/mantohihi139697',
        github: 'https://github.com/mantohihi1',
        role: 'NOC member',
        image: 'https://avatars.githubusercontent.com/u/170410265',
      },
    ],
  }),
}
</script>

<script setup>
useSeoMeta({
  title: 'About - 関西Ruby会議08'
})
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

.v-btn-contact {
  color: white !important;
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

.text-h3, .text-h4 {
  font-family: "Kumbh Sans";
  color: #700002;
  font-weight: 500;
}

.text-body-2 {
  font-family: "Kumbh Sans";
  font-weight: 600;
  color: #222222;
  font-size: 0.900rem !important;
}

.v-card-subtitle {
  font-weight: 500 !important;
  font-size: 0.775rem !important;
}

</style>
