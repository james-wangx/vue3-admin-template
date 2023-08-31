<script lang="ts" setup>
import { Lock, User } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import useUserStore from '@/store/modules/user.ts'
import { useRoute, useRouter } from 'vue-router'
import { ElNotification, FormInstance, FormRules } from 'element-plus'
import { getTime } from '@/utils/time.ts'

interface LoginForm {
  username: string
  password: string
}

const userStore = useUserStore()
const route = useRoute()
const router = useRouter()
const loading = ref(false)
const loginFormRef = ref<FormInstance>()
const loginForm = reactive<LoginForm>({ username: 'admin', password: '111111' })

const validateUsername = (rule: any, value: any, callback: any) => {
  if (value.length >= 5) {
    callback()
  } else {
    callback(new Error('账号长度至少为 5 位'))
  }
}
const validatePassword = (rule: any, value: any, callback: any) => {
  if (value.length >= 6) {
    callback()
  } else {
    callback(new Error('账号长度至少为 6 位'))
  }
}

const loginRules = reactive<FormRules<LoginForm>>({
  // username: [
  //   {
  //     required: true,
  //     min: 6,
  //     max: 10,
  //     message: '账号长度应为 6 到 10 位',
  //     trigger: 'change',
  //   },
  // ],
  // password: [
  //   {
  //     required: true,
  //     min: 6,
  //     max: 15,
  //     message: '密码长度应为 6 到 15 位',
  //     trigger: 'change',
  //   },
  // ],
  username: [{ validator: validateUsername, trigger: 'blur' }],
  password: [{ validator: validatePassword, trigger: 'blur' }],
})

const login = async () => {
  await loginFormRef.value?.validate()
  loading.value = true
  try {
    await userStore.login(loginForm)
    const redirect: any = route.query.redirect
    if (redirect) {
      await router.push(redirect)
    } else {
      await router.push('/')
    }
    ElNotification({
      title: `嗨，${getTime()}好`,
      message: '登录成功',
      type: 'success',
    })
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
        <el-form
          ref="loginFormRef"
          :model="loginForm"
          :rules="loginRules"
          class="login-form"
        >
          <h1>hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              :prefix-icon="User"
              placeholder="用户名"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
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
