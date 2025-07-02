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
                      <v-card-title class="mt-3">{{ speaker.name }}</v-card-title>
                      <div align="left">
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

                  <v-card
                    v-if="communities && communities.length > 0"
                    class="communities-section mt-5 pa-4"
                    variant="outlined"
                    color="#700002"
                  >
                    <h3 class="text-subtitle-1 mb-3">
                      <v-icon icon="mdi-account-multiple" size="small" class="mr-2"/>Communities
                    </h3>
                    <v-row>
                      <v-col
                        v-for="(community, index) in communities"
                        :key="index"
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <a
                          :href="community.url"
                          target="_blank"
                          class="community-link"
                        >
                          <v-card
                            class="community-card pa-3"
                            variant="tonal"
                            color="#700002"
                          >
                            <v-card-text class="d-flex align-center">
                              <v-icon
                                icon="mdi-ruby"
                                size="small"
                                class="mr-2"
                              />
                              <span class="text-body-2">
                                {{ community.name }}
                                <v-icon
                                  icon="mdi-open-in-new"
                                  size="x-small"
                                  class="ml-auto"
                                />
                                </span>
                            </v-card-text>
                          </v-card>
                        </a>
                      </v-col>
                    </v-row>
                  </v-card>

                  <v-card
                    v-if="panelists && panelists.length > 0"
                    class="panelists-section mt-5 pa-4"
                    variant="outlined"
                    color="#700002"
                  >
                    <h3 class="text-subtitle-1 mb-3">
                      <v-icon icon="mdi-account-group" size="small" class="mr-2"/>Panelists
                    </h3>
                    <v-list density="compact" bg-color="transparent">
                      <v-list-item
                        v-for="(panelist, index) in panelists"
                        :key="index"
                        class="px-0"
                      >
                        <template v-slot:prepend>
                          <v-avatar size="40">
                            <v-img :src="panelist.image" />
                          </v-avatar>
                        </template>
                        <v-list-item-title>{{ panelist.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ panelist.affiliation }}</v-list-item-subtitle>
                      </v-list-item>
                    </v-list>
                  </v-card>

                  <v-card
                    v-if="moderator"
                    class="moderator-section mt-5 pa-4"
                    variant="outlined"
                    color="#700002"
                  >
                    <h3 class="text-subtitle-1 mb-3">
                      <v-icon icon="mdi-microphone" size="small" class="mr-2"/>Moderator
                    </h3>
                    <v-list density="compact" bg-color="transparent">
                      <v-list-item class="px-0">
                        <template v-slot:prepend>
                          <v-avatar size="40">
                            <v-img :src="moderator.image" />
                          </v-avatar>
                        </template>
                        <v-list-item-title>{{ moderator.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ moderator.affiliation }}</v-list-item-subtitle>
                      </v-list-item>
                    </v-list>
                  </v-card>

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
      name: '関西地域.rb Organizers',
      image: 'https://avatars.githubusercontent.com/u/210475839?v=4',
      title: 'Regional.rb and the Kyoto City',
      abstract: '関西の地域.rbのオーガナイザーが関西Ruby会議に集結！',
      type: 'panel',
    },
    communities: [
      { name: 'AKASHI.rb', url: 'https://akashi-rb.connpass.com/' },
      { name: 'Hirakata.rb', url: 'https://hirakatarb.connpass.com/' },
      { name: 'KOBE.rb', url: 'https://koberb.doorkeeper.jp/' },
      { name: 'Kyobashi.rb', url: 'https://kyobashirb.connpass.com/' },
      { name: 'Kyoto.rb', url: 'https://kyotorb.connpass.com/' },
      { name: 'naniwa.rb', url: 'https://naniwarb.doorkeeper.jp/' },
      { name: 'Ruby関西', url: 'https://rubykansai.doorkeeper.jp/' },
      { name: 'Ruby舞鶴', url: 'https://ruby-maizuru.connpass.com/' },
      { name: 'Ruby Tuesday', url: 'https://ruby-tuesday.doorkeeper.jp/' },
      { name: 'Shinosaka.rb', url: 'https://shinosakarb.doorkeeper.jp/' },
      { name: 'Wakayama.rb', url: 'https://wakayama-rb.connpass.com/' },
    ],
    panelists: [
      {
        name: '無双',
        affiliation: 'AKASHI.rb',
        image: 'https://avatars.githubusercontent.com/u/46985135?v=4'
      },
      {
        name: 'sago35',
        affiliation: 'AKASHI.rb',
        image: 'https://avatars.githubusercontent.com/u/9251039?v=4'
      },
      {
        name: 'sanfrecce_osaka',
        affiliation: 'Hirakata.rb',
        image: 'https://avatars.githubusercontent.com/u/7955461?v=4'
      },
      {
        name: 'youcune',
        affiliation: 'KOBE.rb',
        image: 'https://avatars.githubusercontent.com/u/2869221?v=4'
      },
      {
        name: 'hachi',
        affiliation: 'Kyobashi.rb',
        image: 'https://avatars.githubusercontent.com/u/8371588?v=4'
      },
      {
        name: 'ydah',
        affiliation: 'Kyobashi.rb',
        image: 'https://avatars.githubusercontent.com/u/13041216?v=4'
      },
      {
        name: 'luccafort',
        affiliation: 'Kyoto.rb',
        image: 'https://avatars.githubusercontent.com/u/1229937?v=4'
      },
      {
        name: 'onk',
        affiliation: 'Kyoto.rb',
        image: 'https://avatars.githubusercontent.com/u/203046?v=4'
      },
      {
        name: 'おごもり',
        affiliation: 'Ruby関西/naniwa.rb',
        image: 'https://avatars.githubusercontent.com/u/471923?v=4'
      },
      {
        name: 'znz',
        affiliation: 'Ruby関西',
        image: 'https://avatars.githubusercontent.com/u/11857?v=4'
      },
      {
        name: '107steps',
        affiliation: 'Ruby舞鶴',
        image: 'https://avatars.githubusercontent.com/u/2397400?v=4'
      },
      {
        name: 'toshima66',
        affiliation: 'Ruby Tuesday',
        image: 'https://avatars.githubusercontent.com/u/904191?v=4'
      },
      {
        name: 'むらじゅん',
        affiliation: 'Shinosaka.rb',
        image: 'https://avatars.githubusercontent.com/u/911903?v=4'
      },
      {
        name: 'たろサ',
        affiliation: 'Wakayama.rb',
        image: 'https://avatars.githubusercontent.com/u/1458076?v=4'
      },
    ],
    moderator: {
      name: 'pastak',
      affiliation: 'Kyoto.js',
      image: 'https://avatars.githubusercontent.com/u/191533'
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

.text-subtitle-1 {
  color: #700002;
  font-weight: 600;
  font-size: 16px;
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

.moderator-section,
.panelists-section,
.communities-section {
  border-color: rgba(112, 0, 2, 0.2) !important;
  background-color: rgba(254, 240, 240, 0.5);
}

.community-card {
  background-color: rgba(112, 0, 2, 0.08) !important;
  transition: all 0.2s ease-in-out;
}

.community-link {
  text-decoration: none;
  color: inherit;
}

.community-link:hover .community-card {
  background-color: rgba(112, 0, 2, 0.15) !important;
  transform: translateY(-2px);
}

.v-list-item {
  min-height: 48px;
}

.v-list-item-subtitle {
  font-size: 12px;
  opacity: 0.8;
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
