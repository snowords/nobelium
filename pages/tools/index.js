import Container from '@/components/Container'
import BLOG from '@/blog.config'
import Image from 'next/image'
import Link from 'next/link'

export async function getStaticProps() {
  const toolsList = [
    {id: 1, name: "QRCode", summary: "在线二维码生成", to:"/tools/QRCode", iconUrl: "/img/QRCode.png"},
    {id: 2, name: "MarkDown", summary: "MD格式文档预览", to:"/tools/Markdown", iconUrl: "/img/MarkDown.png"},
    {id: 3, name: "MD5加密", summary: "在线MD5加密", to:"/tools/QRCode", iconUrl: "/img/MD5.png"},
    {id: 4, name: "MarkDown", summary: "MD格式文档预览", to:"/tools/Markdown", iconUrl: "/img/MarkDown.png"},
    {id: 5, name: "MarkDown", summary: "MD格式文档预览", to:"/tools/Markdown", iconUrl: "/img/MarkDown.png"},
    {id: 6, name: "MarkDown", summary: "MD格式文档预览", to:"/tools/Markdown", iconUrl: "/img/MarkDown.png"},
    {id: 7, name: "MarkDown", summary: "MD格式文档预览", to:"/tools/Markdown", iconUrl: "/img/MarkDown.png"},
    {id: 8, name: "MarkDown", summary: "MD格式文档预览", to:"/tools/Markdown", iconUrl: "/img/MarkDown.png"},
    {id: 9, name: "MarkDown", summary: "MD格式文档预览", to:"/tools/Markdown", iconUrl: "/img/MarkDown.png"},
    {id: 10, name: "MarkDown", summary: "MD格式文档预览", to:"/tools/Markdown", iconUrl: "/img/MarkDown.png"},
  ]
  return {
    props: {
      toolsList
    }
  }
}
const Tools = ({ toolsList }) => {
  return (
    <Container title={BLOG.title} description={BLOG.description}>
      <p className="mb-4 text-xl text-gray-500">小工具</p>
      <div className="grid grid-cols-3 gap-4">
        {toolsList.map(tool => (
          <Link href={tool.to} key={tool.id}>
            <a>
              <div className="p-4 rounded-xl shadow-sm flex items-center space-x-4 hover:shadow bg-white dark:bg-gray-700 dark:text-white">
                <div className="flex-shrink-0">
                  <Image
                    alt={tool.name}
                    width={36}
                    height={36}
                    src={tool.iconUrl}
                  />
                </div>
                <div>
                  <div className="text font-medium text-black dark:text-white">{tool.name}</div>
                  <p className="text-sm text-gray-500 dark:text-gray-200">{tool.summary}</p>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </Container>
  )
}

export default Tools
