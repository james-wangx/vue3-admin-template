import { defineStore } from 'pinia'
import type { LoginForm } from '@/api/user/type.ts'
import { reqLogin, reqUserInfo } from '@/api/user'
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
    async login(data: LoginForm) {
      const result = await reqLogin(data)

      if (result.code === 200) {
        this.token = result.data.token as string
        SET_TOKEN(this.token)
        // 保证当前 async 函数返回一个成功的 Promise
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },

    async getUserInfo() {
      const result = await reqUserInfo()

      if (result.code === 200) {
        this.username = result.data.checkUser.username
        this.avatar = result.data.checkUser.avatar
        return 'ok'
      } else {
        return Promise.reject('获取用户信息失败')
      }
    },

    async logout() {
      this.token = ''
      this.username = ''
      this.avatar = ''
      DEL_TOKEN()
    },
  },

  getters: {},
})

export default useUserStore
