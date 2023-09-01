<script setup lang="ts">
import useUserStore from '@/store/modules/user.ts'

const userStore = useUserStore()
</script>

<template>
  <div>
    <h1>欢迎 {{ userStore.username }}</h1>
    <br />
    <img :src="userStore.avatar" alt="" />
  </div>
</template>

<style scoped></style>
