import graphcms from '@/lib/graphcms'

export default async ({ body }, res) => {
  const mutation = `
    mutation NewNote {
      createNote(data: { title: "${body.title}", content: "${body.content}" }) {
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
