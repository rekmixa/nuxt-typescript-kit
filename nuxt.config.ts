require('dotenv').config()

export default {
  srcDir: 'src/',
  env: {},
  head: {
    title: 'Hello, World!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hello, World!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#3B8070' },
  css: [
    './src/assets/styles/main.scss'
  ],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv'
  ],
  dotenv: {
    path: __dirname,
    only: []
  },
  modules: [
    'cookie-universal-nuxt',
    '@nuxtjs/axios',
  ],
  plugins: [
    './plugins/example',
  ],
  axios: {}
}
