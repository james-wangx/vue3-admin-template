<script lang="ts" setup></script>

<template>
  <div class="layout-container">
    <!-- 左侧菜单 -->
    <div class="layout-left">左侧菜单</div>
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
