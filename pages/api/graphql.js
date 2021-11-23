import { GraphQLClient } from 'graphql-request';

export default async ({ body }, res) => {
  console.log(body)
  const graphcms = new GraphQLClient(
    process.env.GRAPHCMS_PROJECT_API,
    {
      headers: {
        Authorization: `Bearer ${process.env.GRAPHCMS_PROD_AUTH_TOKEN}`
      },
    }
  );

  const { createBlogChangelog } = await graphcms.request(
    `mutation newLog {
      createBlogChangelog(data: ${body}) {
        lastest
        title
        updateTime
        number
      }
    }`
  );

  await graphcms.request(
    `mutation publishLog {
      publishBlogChangelog(where: {id: "${createBlogChangelog.id}"}) {
        id
      }
    }`,
    { id: createVote.id }
  );

  res.status(201).json({ id: createBlogChangelog.id });
};
