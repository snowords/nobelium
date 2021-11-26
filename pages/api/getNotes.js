import graphcms from '@/lib/graphcms'

export default async ({ body }, res) => {
  const query = `
    query GetAllNotes {
      notes {
        id
        title
        content
      }
    }
  `
  const { notes } = await graphcms.request(query)

  res.status(200).json(notes)
}
