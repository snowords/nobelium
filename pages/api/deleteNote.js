import graphcms from '@/lib/graphcms'

export default async ({ body }, res) => {
  // 创建 graphql 查询语句 返回新增项的 id
  const mutation = `
    mutation DeleteNote {
      deleteNote(where: { id: "${body.id}" }) {
        id
      }
    }
  `
  await graphcms.request(mutation)
  res.status(200).json({ success: true })
}
