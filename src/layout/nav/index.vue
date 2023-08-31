<script lang="ts" setup>
import Breadcrumb from '@/layout/nav/breadcrumb/index.vue'
import Setting from '@/layout/nav/setting/index.vue'
</script>

<template>
  <div class="nav">
    <div class="nav-left">
      <Breadcrumb />
    </div>
    <div class="nav-right">
      <Setting />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  .nav-left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  .nav-right {
    display: flex;
    align-items: center;
  }
}
</style>
