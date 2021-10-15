import Layout from '@/layouts/layout'
import { getAllPosts, getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'
import { createHash } from 'crypto'

const BlogPost = ({ post, blockMap, emailHash }) => {
  if (!post) return null
  return (
    <Layout
      blockMap={blockMap}
      frontMatter={post}
      emailHash={emailHash}
      fullWidth={post.fullWidth}
    />
  )
}

export async function getStaticPaths () {
  const posts = await getAllPosts({ includePages: true })
  // 只在构建的时候生成所有页面的地址
  return {
    paths: posts.map(row => `${BLOG.path}/${row.slug}`),
    fallback: true
  }
}
// getStaticProps 的入参是 context 对象
// context 对象包含了以下属性：
// {
//   params: { slug: string }, // 动态路由的参数 和 getStaticPaths 一起使用
//   preview: boolean, // 是否是预览模式
//   previewData: object, // 预览模式的数据
//   locale: string, // 当前语言
//   locales: arr[], // 所有支持的语言
//   defaultLocale: string, // 默认语言
// }
// return 返回的对象包含以下属性
// {
//   props: {} // 将会传递给页面的 props
//   revalidate: number // 以秒为单位的时间，增量静态再生
//   notFound: boolean // 是否返回空数据 404
//   redirect: string // 重定向,不允许构建时重定向
// }
export async function getStaticProps ({ params: { slug } }) {
  const posts = await getAllPosts({ includePages: true })
  const post = posts.find(t => t.slug === slug)
  const blockMap = await getPostBlocks(post.id)
  const emailHash = createHash('md5')
    .update(BLOG.email)
    .digest('hex')
    .trim()
    .toLowerCase()

  return {
    props: { post, blockMap, emailHash },
    revalidate: 1
  }
}

export default BlogPost
