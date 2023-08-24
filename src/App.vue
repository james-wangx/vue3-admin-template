<script setup lang="ts">
import { onMounted } from 'vue'
import { reqLogin } from '@/api/user'

onMounted(() =>
  reqLogin({
    username: 'admin',
    password: '111111',
  }),
)
</script>

<template>
  <div>
    <h1>APP 根组件</h1>
  </div>
</template>

<style scoped lang="scss"></style>
