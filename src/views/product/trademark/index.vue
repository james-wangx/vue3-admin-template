<script setup lang="ts">
import { ref } from 'vue'

const currentPage = ref(5)
const pageSize = ref(10)
const small = ref(false)
const background = ref(true)
</script>

<template>
  <el-card>
    <el-button type="primary" size="default" icon="Plus">添加品牌</el-button>
    <el-table border style="margin: 10px 0">
      <el-table-column label="序号" width="80" align="center" />
      <el-table-column label="品牌名称" align="center" />
      <el-table-column label="品牌 LOGO" align="center" />
      <el-table-column label="品牌操作" align="center" />
    </el-table>
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 30, 40, 50]"
      :small="small"
      :background="background"
      layout="sizes, prev, pager, next, jumper, ->, total"
      :total="1000"
    />
  </el-card>
</template>

<style scoped lang="scss"></style>
