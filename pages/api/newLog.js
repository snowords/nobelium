import graphcms from '@/lib/graphcms'

export default async ({ body }, res) => {
  // 新增数据的参数
  console.log('body', body)

  // 创建 graphql 查询语句 返回新增项的 id
  const mutation = `
    mutation CreateBlogChangelog {
      createBlogChangelog(data: { title: "${body.title}", number: ${body.number} }) {
        id
      }
    }
  `

  const { createBlogChangelog } = await graphcms.request(mutation)

  // 推送新增的一项 newLog.id
  // 新增也必须返回数据
  const publish = `
    mutation PublishBlogChangelog {
      publishBlogChangelog(where: {id: "${createBlogChangelog.id}"}, to: PUBLISHED) {
        id
      }
    }
  `

  await graphcms.request(publish)

  res.status(200).json({ success: true })
}
