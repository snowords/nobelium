import BLOG from '@/blog.config'
import { NotionAPI } from 'notion-client'

export async function getChangeLog () {
  const pageId = BLOG.changeLogPageId
  console.log(pageId)
  const authToken = BLOG.changeLogAccessToken || null
  console.log(authToken)
  const api = new NotionAPI({ authToken })
  const response = await api.getPage(pageId)
  return response
}
