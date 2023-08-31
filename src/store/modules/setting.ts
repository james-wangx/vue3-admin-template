import { defineStore } from 'pinia'
import { SettingState } from '@/store/modules/types/type.ts'

const useSettingStore = defineStore('SettingStore', {
  state: (): SettingState => {
    return {
      fold: false, // 控制菜单折叠还是收起
    }
  },

  actions: {
    changeFold() {
      this.fold = !this.fold
    },
  },
})

export default useSettingStore
