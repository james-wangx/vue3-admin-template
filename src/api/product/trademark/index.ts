import request from '@/utils/request.ts'
import { TrademarkResData } from '@/api/product/trademark/type.ts'

enum API {
  TRADEMARK_URL = '/admin/product/baseTrademark/',
}

export const reqHasTrademark = (page: number, limit: number) =>
  request.get<any, TrademarkResData>(API.TRADEMARK_URL + `${page}/${limit}`)
