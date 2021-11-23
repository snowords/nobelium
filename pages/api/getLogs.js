import { GraphQLClient } from 'graphql-request';

export default async ({ body }, res) => {
  console.log('body', body)
  const graphcms = new GraphQLClient(
    process.env.GRAPHCMS_PROJECT_API,
    {
      headers: {
        Authorization: `Bearer ${process.env.GRAPHCMS_PROD_AUTH_TOKEN}`
      },
    }
  );

  const { createBlogChangelog } = await graphcms.request(
    `query GetAllLogs {
      blogChangelogs {
        title
        lastest
        number
        updateTime
      }
    }`
  );

  console.log('createBlogChangelog', createBlogChangelog)

  res.status(201).json(createBlogChangelog);
};
