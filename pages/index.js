import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import Pagination from '@/components/Pagination'
import { getAllPosts } from '@/lib/notion'
import BLOG from '@/blog.config'

export async function getStaticProps() {
  let posts = await getAllPosts()
  posts = posts.filter(
    post => post.status[0] === 'Published' && post.type[0] === 'Post'
  )
  const postsToShow = posts.slice(0, BLOG.postsPerPage)
  const totalPosts = posts.length
  const showNext = totalPosts > BLOG.postsPerPage
  const totalPages = Math.ceil(totalPosts / BLOG.postsPerPage)
  const nowPage = "第1页 / 共" + totalPages + "页"
  return {
    props: {
      page: 1, // current page is 1
      postsToShow,
      showNext,
      nowPage
    },
    revalidate: 1
  }
}

const blog = ({ postsToShow, page, showNext, nowPage }) => {
  return (
    <Container title={BLOG.title} description={BLOG.description}>
      {postsToShow.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
      {showNext && <Pagination page={page} showNext={showNext} nowPage={nowPage}/>}
    </Container>
  )
}

export default blog
