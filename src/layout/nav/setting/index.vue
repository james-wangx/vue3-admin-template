<script lang="ts" setup>
import {
  ArrowDown,
  FullScreen,
  Refresh,
  Setting,
} from '@element-plus/icons-vue'
import useSettingStore from '@/store/modules/setting.ts'

const settingStore = useSettingStore()

/**
 * 刷新页面
 */
const flash = () => {
  settingStore.flash = !settingStore.flash
}

/**
 * 全屏切换
 */
const fullscreen = () => {
  // DOM 对象的一个属性，可以用来判断当前是否全屏
  const full = document.fullscreenElement

  if (full) {
    document.exitFullscreen()
  } else {
    document.documentElement.requestFullscreen()
  }
}
</script>

<script lang="ts">
export default {
  name: 'Setting',
}
</script>

<template>
  <el-button :icon="Refresh" circle size="small" @click="flash"></el-button>
  <el-button
    :icon="FullScreen"
    circle
    size="small"
    @click="fullscreen"
  ></el-button>
  <el-button :icon="Setting" circle size="small"></el-button>
  <img
    alt=""
    class="nav-avatar"
    src="/logo.png"
    style="width: 24px; height: 24px"
  />
  <el-dropdown>
    <span class="el-dropdown-link">
      Admin
      <el-icon class="el-icon--right">
        <ArrowDown />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped>
.nav-avatar {
  margin-left: 10px;
}
</style>
