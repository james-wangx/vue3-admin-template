<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
import useSettingStore from '@/store/modules/setting.ts'

const settingStore = useSettingStore()

const changeIcon = () => {
  settingStore.changeFold()
}
</script>

<script lang="ts">
export default {
  name: 'Breadcrumb',
}
</script>

<template>
  <el-icon class="nav-icon" @click="changeIcon">
    <component :is="settingStore.fold ? 'Expand' : 'Fold'"></component>
  </el-icon>
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
