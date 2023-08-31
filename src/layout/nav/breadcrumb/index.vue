<script lang="ts" setup>
import { ArrowRight, Expand } from '@element-plus/icons-vue'
</script>

<template>
  <el-icon class="nav-icon"><Expand /></el-icon>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item>promotion management</el-breadcrumb-item>
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style lang="scss" scoped>
.nav-icon {
  margin-right: 10px;
}
</style>
