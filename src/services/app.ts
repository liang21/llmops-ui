import type { DebugResponse } from "@/models/app"
import { post } from "@/utils/request"


export const debugApp = async (appId:string,query:string) => {
  return post<DebugResponse>(`apps/${appId}/debug`, {
    body: { query },
  })
}
