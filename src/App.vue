<script setup lang="ts">
import { Edit, Message } from '@element-plus/icons-vue'

console.log(import.meta.env)
</script>

<template>
  <div class="box">
    <el-button type="primary">Primary</el-button>
    <el-button type="primary" :icon="Edit" circle />
    <el-button type="info" :icon="Message" circle />
  </div>
</template>

<style scoped></style>
