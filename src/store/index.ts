import { Store } from 'vuex'
import { initialiseStores } from '~/utils/store-accessor'
import type { Context as Context } from '@nuxt/types'
import type { ActionContext } from 'vuex'

const initializer = (store: Store<any>) => initialiseStores(store)

export const plugins = [initializer]
export * from '~/utils/store-accessor'

export const actions = {
  async nuxtServerInit(appContext: ActionContext<any, any>, context: Context): Promise<void> {
    console.log('Nuxt server initialized...')
  }
}
