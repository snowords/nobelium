import { useState } from 'react'
import { Input, Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import QRCodeReact from 'qrcode.react'

function QRCode () {
  const [text, setText] = useState('')

  const textChange = e => setText(e.target.value)
  const { TextArea } = Input

  const downloadPic = () => {
    const canvas = document.getElementById('qrImg')
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream')
    const downloadLink = document.createElement('a')
    downloadLink.href = pngUrl
    downloadLink.download = '二维码.png'
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  const callPhone = () => {
    window.location.href = 'tel:13061417969'
  }
  return (
    <div className="grid p-2 grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 row-span-2 rounded-md bg-gray-800 bg-opacity-80">
        <TextArea
          className="bg-transparent text-white"
          value={text}
          onChange={textChange}
          placeholder="请输入要转换成二维码的内容"
          autoSize={{ minRows: 3 }}
          bordered={false}
        />
      </div>
      <div className="p-4 rounded-md bg-white bg-opacity-80 text-lg justify-self-center">
        <QRCodeReact
          id="qrImg"
          value={text}
          />
      </div>
      <div className="justify-self-center">
        <Button type="primary" shape="round" icon={<DownloadOutlined />} onClick={downloadPic}>
          Download
        </Button>
      </div>
      <div className="justify-self-center">
        <Button type="primary" shape="round" onClick={callPhone}>
          拨号测试
        </Button>
      </div>
    </div>
  )
}

export default QRCode
