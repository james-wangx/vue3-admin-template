import request from '@/utils/request.ts'
import type {
  LoginReqData,
  LoginResData,
  LogoutResData,
  UserInfoResData,
} from '@/api/user/type.ts'

enum API {
  LOGIN_URL = '/admin/acl/index/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout',
}

export const reqLogin = (data: LoginReqData) =>
  request.post<any, LoginResData>(API.LOGIN_URL, data)

export const reqUserInfo = () =>
  request.get<any, UserInfoResData>(API.USERINFO_URL)

export const reqLogout = () => request.post<any, LogoutResData>(API.LOGOUT_URL)
