import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  app: {
    head: {
      title: '関西Ruby会議08',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '関西Ruby会議は、関西で定期的に開催しているRubyプログラミング言語に関するカンファレンスです。Rubyに関する知見・技術を共有し、またRubyistの交流の場として、皆様に楽しんでいただけるカンファレンスを目指しています。' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: '関西Ruby会議08' },
        { property: 'og:image', content: 'https://rubykansai.github.io/kansai08/ogp.jpg' },
        { property: 'og:description', content: '関西Ruby会議は、関西で定期的に開催しているRubyプログラミング言語に関するカンファレンスです。Rubyに関する知見・技術を共有し、またRubyistの交流の場として、皆様に楽しんでいただけるカンファレンスを目指しています。' },
        { property: 'og:url', content: 'https://regional.rubykaigi.org/kansai08/' },
        { property: 'og:title', content: '関西Ruby会議08' },
        { name: 'twitter:title', content: '関西Ruby会議08' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@rubykansai' },
        { name: 'twitter:image', content: 'https://rubykansai.github.io/kansai08/ogp.jpg' },
        { name: 'twitter:description', content: '関西Ruby会議は、関西で定期的に開催しているRubyプログラミング言語に関するカンファレンスです。Rubyに関する知見・技術を共有し、またRubyistの交流の場として、皆様に楽しんでいただけるカンファレンスを目指しています。' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/kansai08/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&family=Zen+Old+Mincho&display=swap',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap',
          crossorigin: '',
        },
      ],
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: http://ogp.me/ns#',
      },
    },
    baseURL: '/kansai08/',
  },

  compatibilityDate: '2025-02-05',
})
