export const SET_TOKEN = function (token: string) {
  localStorage.setItem('TOKEN', token)
}

export const GET_TOKEN = function (): string | null {
  return localStorage.getItem('TOKEN')
}
