<script lang="ts" setup>
import { Lock, User } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import useUserStore from '@/store/modules/user.ts'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'

const loginForm = reactive({ username: 'admin', password: '111111' })
const userStore = useUserStore()
const router = useRouter()
const loading = ref(false)

const login = async function () {
  loading.value = true
  try {
    await userStore.userLogin(loginForm)
    await router.push('/')
    ElNotification({ type: 'success', message: '登录成功' })
  } catch (error) {
    ElNotification({ type: 'error', message: (error as Error).message })
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login-form">
          <h1>hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item>
            <el-input
              v-model="loginForm.username"
              :prefix-icon="User"
              placeholder="用户名"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="loginForm.password"
              :prefix-icon="Lock"
              placeholder="密码"
              show-password
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              class="login-btn"
              size="default"
              type="primary"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login-form {
    position: relative;
    top: 30vh;
    width: 80%;
    max-width: 600px;
    padding: 40px;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;

    h1 {
      font-size: 40px;
      color: white;
    }

    h2 {
      font-size: 20px;
      margin: 20px 0;
      color: white;
    }

    .login-btn {
      width: 100%;
    }
  }
}
</style>
