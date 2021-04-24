import Vue from 'vue'
import { ICookie } from 'cookie-universal/types'

interface Inject {
  $cookies: ICookie
}

declare module '*.vue' {
  export default Vue
}

declare module 'vue/types/vue' {
  interface Vue extends Inject {}
}

declare module '@nuxt/types' {
  interface NuxtAppOptions extends Inject {}
  interface Context extends Inject {}
}

declare module 'vuex/types/index' {
  interface Store<S> extends Inject {}
}
