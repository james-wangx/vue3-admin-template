<script lang="ts" setup>
import Logo from '@/layout/logo/index.vue'
</script>

<template>
  <div class="layout-container">
    <!-- 左侧菜单 -->
    <div class="layout-left">
      <logo />
      <el-scrollbar class="scrollbar">
        <el-menu background-color="#001529" text-color="white">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">数据大屏</el-menu-item>
          <el-sub-menu index="3">
            <template #title>
              <span>权限管理</span>
            </template>
            <el-menu-item index="3-1">用户管理</el-menu-item>
            <el-menu-item index="3-2">角色管理</el-menu-item>
            <el-menu-item index="3-3">菜单管理</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout-top">顶部导航</div>
    <!-- 内容区域 -->
    <div class="layout-main">
      <p style="height: 10000px; background: #d77272"></p>
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
    background: $base-layout-left-background;

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-logo-height);
    }
  }

  .layout-top {
    position: fixed;
    top: 0;
    left: $base-layout-left-width;
    width: calc(100% - $base-layout-left-width);
    height: $base-layout-top-height;
    background: $base-layout-top-background;
  }

  .layout-main {
    position: absolute;
    top: $base-layout-top-height;
    left: $base-layout-left-width;
    overflow: auto;
    width: calc(100% - $base-layout-left-width);
    height: calc(100vh - $base-layout-top-height);
    padding: 20px;
    background: $base-layout-main-background;
  }
}
</style>
