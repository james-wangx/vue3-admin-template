import { defineStore } from 'pinia'
import { LoginForm } from '@/api/user/type.ts'
import { reqLogin } from '@/api/user'

const useUserStore = defineStore('User', {
  state: () => {
    return {
      token: localStorage.getItem('TOKEN'),
    }
  },

  actions: {
    async userLogin(data: LoginForm) {
      const result = await reqLogin(data)

      if (result.code === 200) {
        this.token = result.data.token
        localStorage.setItem('TOKEN', this.token)
        // 保证当前 async 函数返回一个成功的 Promise
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },

  getters: {},
})

export default useUserStore
