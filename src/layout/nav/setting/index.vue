<script lang="ts" setup>
import {
  ArrowDown,
  FullScreen,
  Refresh,
  Setting,
} from '@element-plus/icons-vue'
</script>

<template>
  <el-button :icon="Refresh" circle size="small"></el-button>
  <el-button :icon="FullScreen" circle size="small"></el-button>
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
