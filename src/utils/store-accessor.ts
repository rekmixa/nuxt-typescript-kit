import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import MainModule from '../store/main'

let mainModule: MainModule

function initialiseStores(store: Store<any>): void {
  mainModule = getModule(MainModule, store)
}

export {
  initialiseStores,
  mainModule
}
