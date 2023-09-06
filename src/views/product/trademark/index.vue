<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import {
  reqAddOrUpdateTrademark,
  reqHasTrademark,
} from '@/api/product/trademark'
import { Records, Trademark } from '@/api/product/trademark/type.ts'
import { ElMessage, UploadProps } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'

const currentPage = ref<number>(1)
const pageSize = ref<number>(3)
const small = ref<boolean>(false)
const total = ref<number>(0)
const background = ref<boolean>(true)
const trademarkArr = ref<Records>()
const dialogFormVisible = ref<boolean>(false)
const form = reactive<Trademark>({ tmName: '', logoUrl: '' })

const getHasTrademark = async () => {
  const result = await reqHasTrademark(currentPage.value, pageSize.value)

  if (result.code === 200) {
    total.value = result.data.total
    trademarkArr.value = result.data.records
  }
}

const callbackSizeChange = async () => {
  currentPage.value = 1
  await getHasTrademark()
}

const callbackAddTrademark = async () => {
  dialogFormVisible.value = true
  // 清空表单
  form.tmName = ''
  form.logoUrl = ''
}

const callbackUpdateTrademark = async () => {
  dialogFormVisible.value = true
}

const callbackBeforeUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (
    rawFile.type !== 'image/png' &&
    rawFile.type !== 'image/jpeg' &&
    rawFile.type !== 'image/gif'
  ) {
    console.log(rawFile)
    ElMessage.error('必须上传 png, jpeg 或者 gif')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('图片大小不可以超过 2MB')
    return false
  }
  return true
}

const callbackOnSuccess: UploadProps['onSuccess'] = (response) => {
  form.logoUrl = response.data
}

const confirm = async () => {
  const result = await reqAddOrUpdateTrademark(form)

  if (result.code === 200) {
    dialogFormVisible.value = false
    ElMessage.success('添加品牌成功')
    // 重新获取数据
    await getHasTrademark()
  } else {
    ElMessage.error('添加品牌失败')
  }
}

onMounted(() => getHasTrademark())
</script>

<template>
  <div>
    <el-card>
      <el-button
        type="primary"
        size="default"
        icon="Plus"
        @click="callbackAddTrademark"
      >
        添加品牌
      </el-button>
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
            <el-button
              type="primary"
              size="small"
              icon="Edit"
              @click="callbackUpdateTrademark"
            />
            <el-button type="primary" size="small" icon="Delete" />
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[3, 5, 7, 9]"
        :small="small"
        :background="background"
        layout="sizes, prev, pager, next, jumper, ->, total"
        :total="total"
        @current-change="getHasTrademark"
        @size-change="callbackSizeChange"
      />
    </el-card>

    <el-dialog v-model="dialogFormVisible" title="Shipping address">
      <el-form>
        <el-form-item label="品牌名称">
          <el-input v-model="form.tmName" placeholder="请您输入品牌名称" />
        </el-form-item>
        <el-form-item label="品牌LOGO">
          <el-upload
            class="avatar-uploader"
            action="/api/admin/product/fileUpload"
            :show-file-list="false"
            :on-success="callbackOnSuccess"
            :before-upload="callbackBeforeUpload"
          >
            <img
              v-if="form.logoUrl"
              :src="form.logoUrl"
              class="avatar"
              alt=""
            />
            <el-icon v-else class="avatar-uploader-icon">
              <component :is="Plus" />
            </el-icon>
          </el-upload>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="confirm">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped lang="scss">
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
