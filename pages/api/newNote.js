import graphcms from '@/lib/graphcms'

export default async ({ body }, res) => {
  // 有空格提交不上去
  const mutation = `
    mutation NewNote {
      createNote(data: { title: "${body.title.replace(/[\r\n]/g, '')}", content: "${body.content.replace(/[\r\n]/g, '')}" }) {
        id
      }
    }
  `

  const { createNote } = await graphcms.request(mutation)
  const publish = `
    mutation PublishBlogChangelog {
      publishNote(where: {id: "${createNote.id}"}, to: PUBLISHED) {
        id
      }
    }
  `

  await graphcms.request(publish)

  res.status(200).json({ success: true })
}
