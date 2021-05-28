import Link from 'next/link'
import BLOG from '@/blog.config'
import Image from 'next/image'
import formatDate from '@/lib/formatDate'

const BlogPost = ({ post }) => {
  return (
    <article key={post.id} className="mb-3 md:mb-4 p-8 transition-all rounded-md shadow-sm relative bg-white dark:bg-gray-700 dark:text-white hover:shadow-md">
      <header className="flex flex-col justify-between md:flex-row md:items-baseline">
        <Link href={`${BLOG.path}/${post.slug}`}>
          <a>
            <h2 className="text-lg md:text-xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100">
              {post.title}
            </h2>
          </a>
        </Link>
        <time className="flex-shrink-0 text-gray-600 dark:text-gray-400">
          {formatDate(post?.date?.start_date || post.createdTime, BLOG.lang)}
        </time>
      </header>
      <main>
        <p className="hidden md:block leading-8 text-gray-700 dark:text-gray-300">
          {post.summary}
        </p>
      </main>
      {post.isTop ? (
      // <p className="absolute -top-0.5 -right-0.5 p-1 border-t-4 border-r-4 border-red-500">置顶</p>
        <div className="absolute -left-19 top-1">
          <Image
            alt="flower"
            width={96}
            height={96}
            src="/img/flower.png"
          />
        </div>
      ) : ''}
      
    </article>
  )
}

export default BlogPost
