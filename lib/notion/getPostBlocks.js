import BLOG from '@/blog.config'
import { NotionAPI } from 'notion-client'

export async function getPostBlocks (id) {
  const api = new NotionAPI()
  const pageBlock = await api.getPage(id)
  return pageBlock
}
