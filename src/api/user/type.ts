export interface LoginForm {
  username: string
  password: string
}

interface Data {
  token: string
}

export interface LoginResponseData {
  code: number
  data: Data
}

interface User {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}

export interface UserResponseData {
  code: number
  data: User
}
