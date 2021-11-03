import Link from 'next/link'
import Image from 'next/image'
import BLOG from '@/blog.config'
import formatDate from '@/lib/formatDate'

const BlogPost = ({ post }) => {
  return (
    <article key={post.id} className="mb-5 md:mb-6 transition-all rounded-xl shadow-sm relative bg-white dark:bg-gray-800 dark:text-white hover:shadow-md">
      <div className="grid grid-cols-3">
        <div className="col-span-2 p-3 md:p-6">
          <header className="flex flex-col justify-between md:flex-row md:items-baseline">
            <Link href={`${BLOG.path}/${post.slug}`}>
              <a>
                <h2 className="text-lg md:text-xl font-medium mb-2 cursor-pointer hover:underline hover:animate-pulse text-black dark:text-gray-100">
                  {post.title}
                </h2>
              </a>
            </Link>
          </header>
          <main>
            <p className="pb-2 md:pb-4 hidden md:block leading-6 text-gray-600 dark:text-gray-300">
              {post.summary}
            </p>
            <time className="text-gray-600 dark:text-gray-400">
              {formatDate(post?.date?.start_date || post.createdTime, BLOG.lang)}
            </time>
          </main>
        </div>
        <div className="self-center rounded-r-xl">
          <Image src={post.image || '/img/blank.jpg'} alt={post.title} width='200%' height='100%' />
        </div>
      </div>
      {post.isTop
        ? (<div>
            <p className="absolute -top-0.5 -right-0.5 p-1 border-t-4 border-r-4 border-red-400 text-sm"> </p>
            <p className="absolute -top-0.5 -left-0.5 p-1 border-t-4 border-l-4 border-red-400"> </p>
          </div>)
        : ''}
    </article>
  )
}

export default BlogPost
