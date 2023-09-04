export interface ResData {
  code: number
  message: string
  ok: boolean
}

/**
 * 已有品牌的 ts 类型
 */
export interface Trademark {
  id?: number
  tmName: string
  logoUrl: string
}

/**
 * 包含全部品牌的 ts 类型
 */
export type Records = Trademark[]

/**
 * 获取全部品牌的 ts 类型
 */
export interface TrademarkResData extends ResData {
  data: {
    records: Records
    total: number
    size: number
    current: number
    searchCount: boolean
    pages: number
  }
}
