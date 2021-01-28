import Vuex from 'vuex'
import type { Context as AppContext } from '@nuxt/types'
import type { ActionContext, ActionTree, GetterTree, MutationTree } from 'vuex'
import type { RootState } from '../types'

export const state = (): RootState => ({
  done: {},
  undone: {}
})

export const mutations: MutationTree<RootState> = {}

export const getters: GetterTree<RootState, RootState> = {}

interface Actions<S, R> extends ActionTree<S, R> {
  nuxtServerInit(actionContext: ActionContext<S, R>, appContext: AppContext): void
}

export const actions: Actions<RootState, RootState> = {
  async nuxtServerInit({ state, commit }, context): Promise<void> {
    console.log('Nuxt server initialized...')
  }
}

export const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
