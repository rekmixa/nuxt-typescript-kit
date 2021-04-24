import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { RootState } from '~/types'

@Module({
  name: 'main',
  stateFactory: true,
  namespaced: true,
})
export default class MainModule extends VuexModule implements RootState {
  helloWorld: string = ''

  @Mutation
  exampleMutation(helloWorld: string) {
    this.helloWorld = helloWorld
  }

  get helloWorldUppercase() {
    return this.helloWorld.toUpperCase()
  }
}
