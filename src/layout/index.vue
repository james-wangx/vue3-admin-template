<script lang="ts" setup>
import Logo from '@/layout/logo/index.vue'
import LayoutMenu from '@/layout/menu/index.vue'
import LayoutMain from '@/layout/main/index.vue'
import LayoutNav from '@/layout/nav/index.vue'
import useUserStore from '@/store/modules/user.ts'
import { useRoute } from 'vue-router'
import useSettingStore from '@/store/modules/setting.ts'

const userStore = useUserStore()
const settingStore = useSettingStore()
const route = useRoute()
</script>

<script lang="ts">
export default {
  name: 'Layout',
}
</script>

<template>
  <div class="layout-container">
    <!-- 左侧菜单 -->
    <div class="layout-left">
      <Logo />
      <el-scrollbar class="scrollbar">
        <el-menu
          :collapse="settingStore.fold"
          :default-active="route.path"
          active-text-color="yellowgreen"
          background-color="#001529"
          text-color="white"
        >
          <LayoutMenu :routes="userStore.routes" />
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div :class="{ fold: settingStore.fold }" class="layout-nav">
      <LayoutNav />
    </div>
    <!-- 内容区域 -->
    <div :class="{ fold: settingStore.fold }" class="layout-main">
      <LayoutMain />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-container {
  width: 100%;
  height: 100vh;

  .layout-left {
    width: $base-layout-left-width;
    height: 100vh;
    transition: all 0.3s;
    background: $base-layout-left-background;

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-logo-height);

      .el-menu {
        border-right: none;
      }
    }
  }

  .layout-nav {
    position: fixed;
    top: 0;
    left: $base-layout-left-width;
    width: calc(100% - $base-layout-left-width);
    height: $base-layout-nav-height;
    transition: all 0.3s;
    background: $base-layout-nav-background;

    &.fold {
      left: $base-layout-left-width-min;
      width: calc(100% - $base-layout-left-width-min);
    }
  }

  .layout-main {
    position: absolute;
    top: $base-layout-nav-height;
    left: $base-layout-left-width;
    overflow: auto;
    width: calc(100% - $base-layout-left-width);
    height: calc(100vh - $base-layout-nav-height);
    padding: 20px;
    transition: all 0.3s;
    background: $base-layout-main-background;

    &.fold {
      left: $base-layout-left-width-min;
      width: calc(100% - $base-layout-left-width-min);
    }
  }
}
</style>
