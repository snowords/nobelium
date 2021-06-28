import Link from 'next/link'
import BLOG from '@/blog.config'
import { useLocale } from '@/lib/locale'

const Pagination = ({ page, showNext, nowPage }) => {
  const locale = useLocale()
  const currentPage = +page
  return (
    <div className="flex justify-between font-medium text-black dark:text-gray-100">
      <Link
        href={
          currentPage - 1 === 1
            ? `${BLOG.path || '/'}`
            : `/page/${currentPage - 1}`
        }
      >
        <a>
          <button
            rel="prev"
            className={`${
              currentPage === 1 ? 'invisible' : 'block'
            } cursor-pointer p-2 rounded-xl hover:bg-white hover:shadow transition-all duration-500 `}
          >
            ← {locale.PAGINATION.PREV}
          </button>
        </a>
      </Link>
      <p className="font-normal text-gray-500">{nowPage}</p>
      <Link href={`/page/${currentPage + 1}`}>
        <a>
          <button
            rel="next"
            className={`${+showNext ? 'block' : 'invisible'} cursor-pointer p-2 rounded-xl hover:bg-white hover:shadow transition-all duration-500 `}
          >
            {locale.PAGINATION.NEXT} →
          </button>
        </a>
      </Link>
    </div>
  )
}

export default Pagination
