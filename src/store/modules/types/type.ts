import type { RouteRecordRaw } from 'vue-router'

export interface UserState {
  token: string | null
  routes: Readonly<RouteRecordRaw[]>
  username: string
  avatar: string
}

export interface SettingState {
  fold: boolean
  flash: boolean
}
