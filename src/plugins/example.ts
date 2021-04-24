import { Plugin } from '@nuxt/types'
import { Context } from '@nuxt/types'

interface ExamplePlugin {
  someInjectedFunction(): void
}

declare module 'vue/types/vue' {
  interface Vue extends ExamplePlugin {}
}

declare module '@nuxt/types' {
  interface NuxtAppOptions extends ExamplePlugin {}
  interface Context extends ExamplePlugin {}
}

declare module 'vuex/types/index' {
  interface Store<S> extends ExamplePlugin {}
}

const examplePlugin: Plugin = (context: Context, inject) => {
  inject('someInjectedFunction', () => {
    console.log('Hello, World!')
  })
}

export default examplePlugin
