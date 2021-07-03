import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BLOG from '@/blog.config'
import { useLocale } from '@/lib/locale'
import { Menu, Dropdown } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

const NavBar = () => {
  const locale = useLocale()
  const versionPage = 'https://www.notion.so/snowords/cb7d2e9d431749a89506b4300b5e9e98?v=ed3a2f9d6c6c470c96da8d519b4b6cc0'
  const links = [
    { id: 0, name: locale.NAV.INDEX, to: BLOG.path || '/', show: true },
    { id: 1, name: locale.NAV.SEARCH, to: '/search', show: true },
    { id: 2, name: locale.NAV.TOOLS, to: '/tools', show: true },
    { id: 3, name: locale.NAV.RSS, to: versionPage, show: true },
    { id: 4, name: locale.NAV.ABOUT, to: '/about', show: BLOG.showAbout }
  ]
  const menu = (
    <Menu className="dark:bg-gray-600 shadow-lg">
      {links.map(link => link.show && (
        <Menu.Item
          className="dark:text-gray-200 hover:bg-gray-400 mx-2"
          key={link.id}>
            <Link href={link.to}>
              <a target="_blank">{link.name}</a>
            </Link>
        </Menu.Item>
      )
      )}
    </Menu>
  )

  return (
    <div className="flex-shrink-0">
      <ul className="md:flex flex-row hidden">
        {links.map(link => link.show && (
          <li
            key={link.id}
            className="block ml-4 text-black dark:text-gray-50 nav"
          >
            <Link href={link.to}>
              <a target="_blank">{link.name}</a>
            </Link>
          </li>
        )
        )}
      </ul>
      <div className="md:hidden -mt-1 pb-2 px-4 text-lg">
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <MenuOutlined className="text-night dark:text-day"/>
          </a>
        </Dropdown>
      </div>
    </div>
  )
}

const Header = ({ navBarTitle, fullWidth }) => {
  const useSticky = !BLOG.autoCollapsedNavBar
  const navRef = useRef(null)
  const sentinalRef = useRef([])
  const handler = ([entry]) => {
    if (navRef && navRef.current && useSticky) {
      if (!entry.isIntersecting && entry !== undefined) {
        navRef.current.classList.add('sticky-nav-full')
      } else {
        navRef.current.classList.remove('sticky-nav-full')
      }
    } else {
      navRef.current.classList.add('remove-sticky')
    }
  }
  useEffect(() => {
    const obvserver = new window.IntersectionObserver(handler)
    obvserver.observe(sentinalRef.current)
    // Don't touch this, I have no idea how it works XD
    // return () => {
    //   if (sentinalRef.current) obvserver.unobserve(sentinalRef.current)
    // }
  }, [sentinalRef])
  return (
    <>
      <div className="observer-element h-4 md:h-12" ref={sentinalRef}></div>
      <div
        className={`sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-8 py-4 md:py-8 bg-opacity-60 ${
          !fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'
        }`}
        id="sticky-nav"
        ref={navRef}
      >
        <div className="flex items-center">
          <a href="/">
            <Image
              alt="LogoPic"
              width={24}
              height={24}
              src="/img/logo.png"
            />
          </a>
          <div className="pl-2 font-bold text-lg mb-1 text-night dark:text-day">Snoword’s Blog</div>
          {/* {navBarTitle
            ? (<p className="ml-2 font-medium text-day dark:text-night header-name">
                {navBarTitle}
              </p>)
            : (<p className="ml-2 font-medium text-day dark:text-night header-name">
                {BLOG.title},{' '}
                <span className="font-normal">{BLOG.description}</span>
              </p>)} */}
        </div>
        <NavBar />
      </div>
    </>
  )
}

export default Header
