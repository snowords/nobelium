import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import Pagination from '@/components/Pagination'
import { getAllPosts } from '@/lib/notion'
import { GithubOutlined, TwitterOutlined, MailOutlined } from '@ant-design/icons'
import BLOG from '@/blog.config'
import Link from 'next/link'

export async function getStaticProps () {
  const posts = await getAllPosts({ includePages: false })
  const postsToShow = posts.slice(0, BLOG.postsPerPage)
  const totalPosts = posts.length
  const showNext = totalPosts > BLOG.postsPerPage
  const totalPages = Math.ceil(totalPosts / BLOG.postsPerPage)
  const nowPage = '第1页 / 共' + totalPages + '页'
  const colorStyle = {
    backgroundSize: '100% 100vh'
  }
  const addOnClass = 'bg-mobilebg md:bg-desktopbg bg-left-top bg-contain bg-no-repeat bg-clip-content bg-fixed'
  return {
    props: {
      page: 1, // current page is 1
      postsToShow,
      showNext,
      nowPage,
      colorStyle,
      addOnClass
    },
    revalidate: 1
  }
}

const blog = ({ postsToShow, page, showNext, nowPage, colorStyle, addOnClass }) => {
  return (
    <Container title={BLOG.title} description={BLOG.description} containerStyle={colorStyle} addOnClass={addOnClass}>
      <div className="smFull grid grid-cols-1 text-center text-2xl text-night dark:text-day">
        <div className="self-center text-3xl">
          鹏程万里，始于一跃
        </div>
        <div className="self-end pb-8 md:pb-28 flex justify-center gap-4">
          <Link href={BLOG.githubLink}>
            <a target="_blank">
              <GithubOutlined />
            </a>
          </Link>
          <Link href={BLOG.socialLink}>
            <a target="_blank">
              <TwitterOutlined />
            </a>
          </Link>
          <Link href={'mailto:' + BLOG.email}>
            <a target="_blank">
              <MailOutlined />
            </a>
          </Link>
        </div>
      </div>
      {postsToShow.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
      {showNext && <Pagination page={page} showNext={showNext} nowPage={nowPage}/>}
    </Container>
  )
}

export default blog
