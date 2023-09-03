export interface LoginReqData {
  username: string
  password: string
}

export interface ResData {
  code: number
  message: string
  ok: boolean
}

export interface LoginResData extends ResData {
  data: string
}

export interface UserInfoResData extends ResData {
  data: {
    routes: string[]
    buttons: string[]
    roles: string[]
    name: string
    avatar: string
  }
}

export interface LogoutResData extends ResData {
  data: null
}
