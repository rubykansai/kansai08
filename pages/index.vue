<template>
  <v-app class="fill-height">
    <AppHeader />
    <v-row>
      <div class="d-none d-sm-block">
        <v-img src="/lbottom.png" width="20vw" class="corner left-bottom"/>
        <v-img src="/ltop.png" width="45vw" class="corner left-top"/>
        <v-img src="/rbottom.png" width="10vw" class="corner right-bottom"/>
        <v-img src="/rtop.png" width="15vw" class="corner right-top"/>
      </div>
      <div class="d-flex d-sm-none">
        <v-img src="/lbottom-sm.png" width="60vw" class="corner left-bottom-sm"/>
        <v-img src="/ltop-sm.png" width="70vw" class="corner left-top-sm"/>
        <v-img src="/rbottom-sm.png" width="30vw" class="corner right-bottom-sm"/>
      </div>
      <v-col align="center" class="d-flex justify-center align-center">
        <v-card
          min-width="100vw"
          :elevation="0"
        >
          <v-card-item class="justify-center">
            <v-img src="/logo.svg" width="50vh" class="mb-8"/>
            <div class="text-h4 title mb-16 d-none d-sm-block">
              2025.6.28 <span class="text-h5 title mr-7">(Sat)</span>
              <a class="text-h5 title" href="https://www.kamogawa-odori.com/kaburenjou/">
                @先斗町歌舞練場
              </a>
            </div>
            <div class="text-h4 title mb-16 d-block d-sm-none">
              2025.6.28 <span class="text-h5 title">(Sat)</span>
              <a class="text-h5 title d-block mt-3" href="https://www.kamogawa-odori.com/kaburenjou/">
                @先斗町歌舞練場
              </a>
            </div>
            <div class="d-none d-sm-flex">
              <a
                href="https://ti.to/kansairubykaigi/08"
                target="_blank"
                class="mr-3"
              >
                <v-btn
                  size="x-large"
                  color="white"
                  rounded
                  class="v-btn-register mr-3"
                >REGISTER NOW</v-btn>
              </a>
              <a
                href="https://forms.gle/yxRKq3Bg1RUC8bocA"
                target="_blank"
                class="a-register"
              >
                <v-btn
                  size="x-large"
                  color="white"
                  variant="outlined"
                  rounded
                  class="v-btn-cfs"
                >CALL FOR SPEAKERS</v-btn>
              </a>
            </div>
            <div class="d-block d-sm-none">
              <a
                href="https://ti.to/kansairubykaigi/08"
                target="_blank"
              >
                <v-btn
                  size="x-large"
                  color="white"
                  rounded
                  class="v-btn-register mb-5"
                >REGISTER NOW</v-btn>
              </a>
              <a
                href="https://forms.gle/yxRKq3Bg1RUC8bocA"
                target="_blank"
                class="a-register"
              >
                <v-btn
                  size="x-large"
                  color="white"
                  variant="outlined"
                  rounded
                  class="v-btn-cfs"
                >CALL FOR SPEAKERS</v-btn>
              </a>
            </div>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<style scoped>
* {
  color: #fff;
  box-sizing: border-box;
}

.v-application, .v-card {
  background-color: #700002 !important;
  position: relative;
  z-index: 1;
}

.v-row {
  margin: 0 !important;
}

.a-register {
  text-decoration: none !important;
}

.title {
  font-family: "游明朝体", "Yu Mincho", YuMincho, serif;
}

.title a {
  text-decoration: underline 1px;
}

.v-btn-register {
  color: #700002 !important;
}

.v-btn-register, .v-btn-cfs {
  min-width: 18rem;
  font-family: 'Kumbh Sans', serif;
}

.corner {
  position: absolute;
  z-index: 10;
}

.left-top {
  top: 0px;
  left: 0px;
}

.right-top {
  top: 0px;
  right: 10%;
}

.left-bottom {
  bottom: 0px;
  left: 30%;
}

.right-bottom {
  bottom: 5%;
  right: 0px;
}

.left-top-sm {
  top: 0px;
  left: 0px;
}

.left-bottom-sm {
  bottom: 0px;
  left: 0px;
}

.right-bottom-sm {
  bottom: 28%;
  right: 0px;
}
</style>
