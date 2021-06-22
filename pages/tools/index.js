import Container from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'

export async function getStaticProps() {
  const toolsList = [
    {id: 1, name: "QRCode", summary: "在线二维码生成", to:"/tools/QRCode", iconUrl: "/img/QRCode.png"},
    {id: 2, name: "MarkDown", summary: "MD格式文档预览", to:"/tools/Markdown", iconUrl: "/img/MarkDown.png"},
    {id: 3, name: "Base64转换", summary: "BASE64加密解密", to:"/tools/Base64", iconUrl: "/img/trans.png"},
    {id: 4, name: "MD5加密", summary: "摘要算法 不可逆", to:"/tools/MD5", iconUrl: "/img/MD5.png"},
    {id: 5, name: "Time工具", summary: "时间格式处理", to:"/tools/TimeTool", iconUrl: "/img/time.png"},
    {id: 6, name: "Color工具", summary: "颜色工具", to:"/tools/Color", iconUrl: "/img/color.png"},
    {id: 7, name: "Regex工具", summary: "正则表达式", to:"/tools/RegexTool", iconUrl: "/img/regex.png"},
  ]
  return {
    props: {
      toolsList
    }
  }
}
const Tools = ({ toolsList }) => {
  return (
    <Container className="bg-gray-600" title='在线工具' description='在线工具集合，不定期更新'>
      <p className="mb-4 text-xl text-gray-500">在线小工具</p>
      <div className="grid grid-cols-3 gap-4">
        {toolsList.map(tool => (
          <Link href={tool.to} key={tool.id}>
            <a>
              <div className="p-4 rounded-lg shadow-sm flex items-center space-x-4 hover:shadow bg-white dark:bg-gray-700 dark:text-white">
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
