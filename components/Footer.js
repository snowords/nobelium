import BLOG from '@/blog.config'
// import Vercel from '@/components/Vercel'
import Switcher from '@/lib/redux/switcher/Switcher' // 切换暗黑模式

const Footer = ({ fullWidth }) => {
  const d = new Date()
  const y = d.getFullYear()
  const from = +BLOG.since
  return (
    <div
      className={`mt-6 shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${
        !fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'
      }`}
    >
      <hr className="border-gray-200 dark:border-gray-600" />
      <div className="my-4 text-sm leading-6">
        <div className="flex align-baseline justify-between flex-wrap">
          <p>
          Muzhui Technology Inc. © {from === y || !from ? y : `${from} - ${y}`}
          </p>
          <p>
            Powered by <a className="hover:text-blue-600" href="https://nextjs.org/" target="_blank" rel="noreferrer">Next.</a>
            {/* <a className="hover:text-blue-600" href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a>,
            <a className="hover:text-blue-600" href="https://nextjs.org/" target="_blank" rel="noreferrer">Next</a> and <a className="hover:text-blue-600" href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a>. */}
          </p>
          <Switcher />
        </div>
      </div>
    </div>
  )
}

export default Footer
