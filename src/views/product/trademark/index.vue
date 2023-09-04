<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { reqHasTrademark } from '@/api/product/trademark'
import { Records } from '@/api/product/trademark/type.ts'

const currentPage = ref<number>(1)
const pageSize = ref<number>(3)
const small = ref<boolean>(false)
const total = ref<number>(0)
const background = ref<boolean>(true)
const trademarkArr = ref<Records>()

const getHasTrademark = async () => {
  const result = await reqHasTrademark(currentPage.value, pageSize.value)
  console.log(result)

  if (result.code === 200) {
    total.value = result.data.total
    trademarkArr.value = result.data.records
  }
}

onMounted(() => getHasTrademark())
</script>

<template>
  <el-card>
    <el-button type="primary" size="default" icon="Plus">添加品牌</el-button>
    <el-table border style="margin: 10px 0" :data="trademarkArr">
      <el-table-column label="序号" width="80" align="center" type="index" />
      <!-- el-table-column 默认用 div 展示数据 -->
      <el-table-column label="品牌名称" align="center" prop="tmName" />
      <!-- 作用域插槽 -->
      <el-table-column label="品牌 LOGO" align="center">
        <template #default="{ row }">
          <img :src="row.logoUrl" alt="没有图片" style="width: 100px" />
        </template>
      </el-table-column>
      <el-table-column label="品牌操作" align="center">
        <template #default="{ row }">
          <el-button type="primary" size="small" icon="Edit" />
          <el-button type="primary" size="small" icon="Delete" />
        </template>
      </el-table-column>
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
