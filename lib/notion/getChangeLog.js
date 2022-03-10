import BLOG from '@/blog.config'
import { NotionAPI } from 'notion-client'

export async function getChangeLog () {
  const pageId = BLOG.changeLogPageId
  const api = new NotionAPI()
  const { block } = await api.getPage(pageId)
  return block
}
