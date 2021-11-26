import graphcms from '@/lib/graphcms'

export default async ({ body }, res) => {
  // console.log('body', body)

  const query = `
    query GetAllLogs {
      blogChangelogs {
        title
        lastest
        number
        updateTime
      }
    }
  `
  const { blogChangelogs } = await graphcms.request(query)

  res.status(200).json(blogChangelogs)
}
