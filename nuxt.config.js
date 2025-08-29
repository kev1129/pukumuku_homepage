import pkg from './package'
import { defineNuxtConfig } from '@nuxt/bridge'

const fs = require('fs');
const CdJson = JSON.parse(fs.readFileSync('static/json/cds.json'));
const MenuTopJson = JSON.parse(fs.readFileSync('static/json/menu-top.json'));
const MenuMainJson = JSON.parse(fs.readFileSync('static/json/menu-main.json'));
const NoticeJson = JSON.parse(fs.readFileSync('static/json/notice.json'));
const flyerJson = JSON.parse(fs.readFileSync('static/json/flyer.json'));
const MenuAllNoMilkEggJson = JSON.parse(fs.readFileSync('static/json/menu-nothing-milk-egg.json'));
const MenuAllBananaJson = JSON.parse(fs.readFileSync('static/json/menu-use-banana.json'));
const MenuAllEggJson = JSON.parse(fs.readFileSync('static/json/menu-use-egg.json'));
const MenuAllMilkJson = JSON.parse(fs.readFileSync('static/json/menu-use-milk.json'));
const MenuAllPeahutsJson = JSON.parse(fs.readFileSync('static/json/menu-use-peanuts.json'));
const MenuAllSasumeJson = JSON.parse(fs.readFileSync('static/json/menu-use-sasume.json'));
const MenuAllWalnatJson = JSON.parse(fs.readFileSync('static/json/menu-use-walnat.json'));



export default {

  /*
  ** Headers of the page
  */
  site: { 
    url: 'https://pankobopukumuku.com', 
    name: 'パン工房プクムクのHP' 
  }, 
  head: {
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    title: 'パン工房プクムク',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1'},
      { name: 'description', content: 'パン工房プクムクのHP | 中野区南台のパン屋さん' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},

      // OGP用
      { name: 'og:title', content: 'パン工房プクムク | 中野区南台のパン屋さん' },
      { name: 'og:description', content: 'パン工房プクムクのHP | 中野区南台のパン屋さん' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://pankobopukumuku.com' },
      { property: 'og:image', content: 'https://https://pankobopukumuku.com/og-image.png' },
      { name: 'og:locale', content: 'ja_JP' },

      // Twitterカード
      { name: 'twitter:site', content: 'パン工房プクムクのHP | 中野区南台のパン屋さん' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'パン工房プクムクのHP' },
      { name: 'twitter:description', content: 'パン工房プクムクのHP | 中野区南台のパン屋さん' },
      { name: 'twitter:image', content: 'https://https://pankobopukumuku.com/og-image.png' }
    ],
    link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }, // apple home icon
        { rel: 'manifest', href: '/site.webmanifest' }, // Android系
    ],

      
    
    script: [
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: 'favicon/imo.png' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css', integrity: 'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf', crossorigin: 'anonymous' },
    ],
    googleAnalytics: {
      id: 'G-0R60E7END0',
    //  debug: false
    },
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
    },
    publicRuntimeConfig: {
      googleAnalytics: {
        id: process.env.GOOGLE_ANALYTICS_ID
      }

      
    }
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],
  
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src:"~plugins/vue2-google-maps.js"}
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/vuetify',
    'nuxt-webfontloader',
    '@nuxtjs/google-analytics',
    '@nuxtjs/google-gtag',
  ],
  'google-gtag': {
    id: "G-0R60E7END0",
    debug: false
  },

  /*
  ** Build configuration
  */
 build: {
   /*
    ** You can extend webpack config here
    */
   extend(config, ctx) {
      config.externals = config.externals || [];
      if (!ctx.isClient) {
        // This instructs Webpack to include `vue2-google-maps`'s Vue files
        // for server-side rendering
        config.externals.splice(0, 0, function (context, request, callback) {
          if (/^vue2-google-maps($|\/)/.test(request)) {
            callback(null, false)
          } else {
            callback()
          }
        })
      }
    },
    extractCSS: true
  },
  vendor:["vue2-google-maps"],
  env: {
    cds: CdJson,
    menuMain: MenuMainJson,
    menuTop: MenuTopJson,
    notice: NoticeJson,
    flyer: flyerJson,
    menuAllNoMilkEgg: MenuAllNoMilkEggJson,
    menuAllBanana: MenuAllBananaJson,
    menuAllEgg: MenuAllEggJson,
    menuAllMilk: MenuAllMilkJson,
    menuAllPeahuts: MenuAllPeahutsJson,
    menuAllSasume: MenuAllSasumeJson,
    menuAllWalnat: MenuAllWalnatJson
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  },
  webfontloader: {
    google: {
      families: [
        'M+PLUS+Rounded+1c',
        'Baloo+Bhai',
        'Londrina+Solid',
        'Nunito',
        'Asap',
        'Nunito+Sans:900',
        'Nunito:400,900',
        'Open+Sans',
        // title EN
        'Francois+One',
        // text JP
        'Sawarabi+Gothic'
      ]
    }
  },
}