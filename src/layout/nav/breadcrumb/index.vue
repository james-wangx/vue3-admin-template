<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
import useSettingStore from '@/store/modules/setting.ts'
import { useRoute } from 'vue-router'

const settingStore = useSettingStore()
const route = useRoute()

const changeIcon = () => {
  settingStore.fold = !settingStore.fold
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
    <el-breadcrumb-item
      v-for="(item, index) in route.matched"
      :key="index"
      v-show="item.meta.title"
      :to="item.path"
    >
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span>{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style lang="scss" scoped>
.nav-icon {
  margin-right: 10px;
}
</style>
