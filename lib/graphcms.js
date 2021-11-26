import { GraphQLClient } from 'graphql-request'

const graphcms = new GraphQLClient(
  process.env.GRAPHCMS_PROJECT_API,
  {
    headers: {
      Authorization: `Bearer ${process.env.GRAPHCMS_PROD_AUTH_TOKEN}`
    }
  }
)

export default graphcms
