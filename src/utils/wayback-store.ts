import { WaybackableState } from '~/types'

const pushDone = (state: WaybackableState, stateItem: string, stateValue: any) => {
  state.done[stateItem] = state.done[stateItem] === undefined ? [state[stateItem]] : state.done[stateItem]
  state.done[stateItem].push(stateValue)

  if (state.done[stateItem].length > Number(process.env.WAYBACK_STORE_LIMIT)) {
    state.done[stateItem].shift()
  }
}

const pushUndone = (state: WaybackableState, stateItem: string) => {
  state.undone[stateItem] = state.undone[stateItem] === undefined ? [] : state.undone[stateItem]
  state.undone[stateItem].push(state[stateItem])

  if (state.undone[stateItem].length > Number(process.env.WAYBACK_STORE_LIMIT)) {
    state.undone[stateItem].shift()
  }
}

export function doState(state: WaybackableState, stateItem: string, stateValue: any): void {
  pushDone(state, stateItem, stateValue)
  state.undone[stateItem] = []
  state[stateItem] = stateValue
}

export function undoState(state: WaybackableState, stateItem: string): void {
  const stateWayback = state.done[stateItem]

  if (stateWayback === undefined || stateWayback.length <= 1) {
    return
  }

  const previousSnapshotIndex = stateWayback.length - 2
  const stateItemSnapshot = stateWayback[previousSnapshotIndex]

  pushUndone(state, stateItem)
  state.done[stateItem].splice(-1, 1)
  state[stateItem] = stateItemSnapshot
}

export function redoState(state: WaybackableState, stateItem: string): void {
  const stateWayback = state.undone[stateItem]

  if (stateWayback === undefined || stateWayback.length === 0) {
    return
  }

  const previousSnapshotIndex = stateWayback.length - 1
  const stateItemSnapshot = stateWayback[previousSnapshotIndex]

  pushDone(state, stateItem, stateItemSnapshot)
  state.undone[stateItem].splice(-1, 1)
  state[stateItem] = stateItemSnapshot
}

export function clearSnapshots(state: WaybackableState, stateItem: string): void {
  state.done[stateItem] = [state[stateItem]]
  state.undone[stateItem] = [state[stateItem]]
}
