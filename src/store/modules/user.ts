import { defineStore } from 'pinia'
import { reqLogin, reqLogout, reqUserInfo } from '@/api/user'
import type { UserState } from '@/store/modules/types/type.ts'
import { DEL_TOKEN, GET_TOKEN, SET_TOKEN } from '@/utils/token.ts'
import { routes } from '@/router/routes.ts'

const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      routes,
      username: '',
      avatar: '',
    }
  },

  actions: {
    async login(data: any) {
      const result = await reqLogin(data)

      if (result.code === 200) {
        this.token = result.data as string
        SET_TOKEN(this.token)
        // 保证当前 async 函数返回一个成功的 Promise
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },

    async getUserInfo() {
      const result = await reqUserInfo()

      if (result.code === 200) {
        this.username = result.data.name
        this.avatar = result.data.avatar
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },

    async logout() {
      const result = await reqLogout()

      if (result.code === 200) {
        this.token = ''
        this.username = ''
        this.avatar = ''
        DEL_TOKEN()
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
  },

  getters: {},
})

export default useUserStore
