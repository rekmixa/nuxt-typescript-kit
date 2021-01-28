export interface WaybackSnapshot {
  [key: string]: any[]
}

export interface WaybackableState {
  done: WaybackSnapshot
  undone: WaybackSnapshot
}

export interface RootState extends WaybackableState {}
