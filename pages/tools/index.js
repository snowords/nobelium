import Container from '@/components/Container'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import lottie from 'lottie-web'

class Tools extends React.Component {
  constructor (props) {
    super(props)
    this.toolsList = [
      { id: 1, name: 'QRCode', summary: '在线二维码生成', to: '/tools/QRCode', iconUrl: '/img/QRCode.png' },
      { id: 2, name: 'MarkDown', summary: 'MD格式文档预览', to: '/tools/Markdown', iconUrl: '/img/MarkDown.png' },
      { id: 3, name: 'Base64转换', summary: 'BASE64加密解密', to: '/tools/Base64', iconUrl: '/img/trans.png' },
      { id: 4, name: 'MD5加密', summary: '摘要算法 不可逆', to: '/tools/MD5', iconUrl: '/img/MD5.png' },
      { id: 5, name: 'Time工具', summary: '时间格式处理', to: '/tools/TimeTool', iconUrl: '/img/time.png' },
      { id: 6, name: 'Color工具', summary: '颜色工具', to: '/tools/Color', iconUrl: '/img/color.png' },
      { id: 7, name: 'Regex工具', summary: '正则表达式', to: '/tools/RegexTool', iconUrl: '/img/regex.png' },
      { id: 8, name: '挪车电话', summary: 'CallMe挪车电话', to: '/tools/CallMe', iconUrl: '/img/call.png' },
      { id: 9, name: 'CSS效果', summary: 'CSS效果集合', to: '/tools/CssGroup', iconUrl: '/img/cssGroup.png' },
      { id: 10, name: 'GraphDemo', summary: 'GraphDemo', to: '/tools/Article', iconUrl: '/img/cssGroup.png' }
    ]
  }

  componentDidMount () {
    lottie.loadAnimation({
      container: document.getElementById('bike-man'),
      renderer: 'svg',
      loop: true,
      autoPlay: true,
      path: 'https://assets9.lottiefiles.com/datafiles/MUp3wlMDGtoK5FK/data.json'
    })
    lottie.loadAnimation({
      container: document.getElementById('paper-fly'),
      renderer: 'svg',
      loop: true,
      autoPlay: true,
      path: 'https://assets6.lottiefiles.com/packages/lf20_x62chJ.json'
    })
  }

  componentWillUnmount () {
    // console.log("组件销毁")
  }

  render () {
    return (
      <div>
        <Container className="bg-gray-600" title='在线工具' description='在线工具集合，不定期更新'>
          <p className="mb-4 text-xl text-gray-500">在线小工具</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {this.toolsList.map(tool => (
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
          <div id="bike-man" className="w-64 h-64 fixed left-0 bottom-0"></div>
          <div id="paper-fly" className="w-64 h-64 fixed right-0 top-0"></div>
        </Container>
      </div>
    )
  }
}

export default Tools
