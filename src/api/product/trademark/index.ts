import request from '@/utils/request.ts'
import { Trademark, TrademarkResData } from '@/api/product/trademark/type.ts'

enum API {
  TRADEMARK_URL = '/admin/product/baseTrademark/',
  ADD_TRADEMARK = '/admin/product/baseTrademark/save',
  UPDATE_TRADEMARK = '/admin/product/baseTrademark/update',
}

export const reqHasTrademark = (page: number, limit: number) =>
  request.get<any, TrademarkResData>(API.TRADEMARK_URL + `${page}/${limit}`)

export const reqAddOrUpdateTrademark = (data: Trademark) => {
  // update
  if (data.id) {
    return request.put<any, any>(API.UPDATE_TRADEMARK, data)
    // add
  } else {
    return request.post<any, any>(API.ADD_TRADEMARK, data)
  }
}
