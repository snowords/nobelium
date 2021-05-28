import Container from '@/components/Container'
import BLOG from '@/blog.config'
import Image from 'next/image'
import Link from 'next/link'

export async function getStaticProps() {
  const toolsList = [
    {name: "QRCode", summary: "在线二维码生成", to:"/tools/QRCode", iconUrl: "/img/QRCode.png"},
    {name: "MarkDown", summary: "MD格式文档预览", to:"/tools/QRCode", iconUrl: "/img/MarkDown.png"},
    {name: "MD5加密", summary: "在线MD5加密", to:"/tools/QRCode", iconUrl: "/img/MD5.png"},
    {name: "QRCode", summary: "在线二维码生成", to:"/tools/QRCode", iconUrl: "/img/QRCode.png"},
    {name: "MarkDown", summary: "MD格式文档预览", to:"/tools/QRCode", iconUrl: "/img/MarkDown.png"},
    {name: "MD5加密", summary: "在线MD5加密", to:"/tools/QRCode", iconUrl: "/img/MD5.png"},
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
          <Link href={tool.to}>
            <a>
              <div className="p-4 bg-white rounded-xl shadow-sm flex items-center space-x-4 hover:shadow dark:bg-gray-700 dark:text-white">
                <div class="flex-shrink-0">
                  <Image
                    alt={tool.name}
                    width={36}
                    height={36}
                    src={tool.iconUrl}
                  />
                </div>
                <div>
                  <div class="text font-medium text-black">{tool.name}</div>
                  <p class="text-sm text-gray-500">{tool.summary}</p>
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
