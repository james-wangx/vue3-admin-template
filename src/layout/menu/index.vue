<script lang="ts" setup>
defineProps(['routes'])
</script>

<script lang="ts">
export default {
  name: 'LayoutMenu',
}
</script>

<template>
  <template v-for="route in routes" :key="route.path">
    <!-- 没有子路由 -->
    <el-menu-item v-if="!route.children && route.meta.show" :index="route.path">
      <template #title>
        <span>标&nbsp;</span>
        <span>{{ route.meta.title }}</span>
      </template>
    </el-menu-item>
    <!-- 有子路由，但只有一个 -->
    <el-menu-item
      v-if="
        route.children &&
        route.children.length === 1 &&
        route.children[0].meta.show
      "
      :index="route.children[0].path"
    >
      <template #title>
        <span>标&nbsp;</span>
        <span>{{ route.children[0].meta.title }}</span>
      </template>
    </el-menu-item>
    <!-- 有两个及以上的子路由 -->
    <el-sub-menu
      v-if="route.children && route.children.length >= 2 && route.meta.show"
      :index="route.path"
    >
      <template #title>
        <span>标&nbsp;</span>
        <span>{{ route.meta.title }}</span>
      </template>
      <!-- 递归 -->
      <LayoutMenu :routes="route.children" />
    </el-sub-menu>
  </template>
</template>

<style lang="scss" scoped></style>
