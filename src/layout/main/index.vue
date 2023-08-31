<script setup lang="ts">
import useSettingStore from '@/store/modules/setting.ts'
import { nextTick, ref, watch } from 'vue'

const settingStore = useSettingStore()
const flag = ref(true) // 控制当前组件是否销毁重建

// 监听仓库内部数据是否发生变化，如果变化，则点击了刷新按钮
watch(
  () => settingStore.flash,
  () => {
    flag.value = false
    nextTick(() => (flag.value = true))
  },
)
</script>

<script lang="ts">
export default {
  name: 'LayoutMain',
}
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" v-if="flag" />
    </transition>
  </router-view>
</template>

<style scoped lang="scss">
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}

.fade-enter-active {
  transition: all 0.3s;
}

.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
