import Container from '@/components/Container'
import { useState } from 'react'
import BLOG from '@/blog.config'
import { Upload, Input, Button, message  } from 'antd';
import { DownloadOutlined, InboxOutlined  } from '@ant-design/icons';
import QRCodeReact from 'qrcode.react'

function QRCode() {
  const [text, setText] = useState("Hello world")

  const textChange = e => setText(e.target.value)
  const { TextArea } = Input
  const { Dragger } = Upload;

  const downloadPic = () => {
    const canvas = document.getElementById("qrImg")
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream")
    let downloadLink = document.createElement("a")
    downloadLink.href = pngUrl
    downloadLink.download = "二维码.png"
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      console.log(info)
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  return (
    <Container title={BLOG.title} description={BLOG.description}>

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
        {/* <div
          className="bg-white rounded-md p-2"
        >
          <Dragger {...props}
            >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">点击此处或者拖拽文件上传文件</p>
            <p className="ant-upload-hint">
              支持上传一个文件，请不要上传公司文件或者隐私数据！
            </p>
          </Dragger>
        </div> */}
      </div>
      
    </Container>
  )
}

export default QRCode
