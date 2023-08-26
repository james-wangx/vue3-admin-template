<script lang="ts" setup>
import setting from '@/setting.ts'
</script>

<template>
  <div class="logo">
    <img alt="" v-if="setting.logoHidden" :src="setting.logo" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  font-size: $base-logo-font-size;
  display: flex;
  align-items: center;
  width: 100%;
  height: $base-logo-height;
  color: white;
  padding: 20px;

  img {
    width: 40px;
    height: 40px;
  }

  p {
    margin-left: 10px;
  }
}
</style>
