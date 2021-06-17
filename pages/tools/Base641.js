import Container from '@/components/Container'
import { useState } from 'react'
import BLOG from '@/blog.config'
import { Upload, Input, Button, message  } from 'antd';
import { DownloadOutlined, InboxOutlined  } from '@ant-design/icons';
import enBase64 from 'crypto-js/enc-base64';

function Base64() {
  const [text, setText] = useState("")
  const [encodeText, setEncodeText] = useState("")
  const [encodedText, setEncodedText] = useState("")

  const textChange = e => {
    setText(e.target.value)
    if(e.target.value){
      setEncodeText(window.btoa(e.target.value))
      setEncodedText(enBase64(e.target.value))
    }
  }
  const enCodeTextChange = e => {
    setEncodeText(e.target.value)
    if(e.target.value){
      setText(window.atob(e.target.value))
    }
  }
  const { TextArea } = Input

  return (
    <Container title={BLOG.title} description={BLOG.description}>

      <div className="grid p-2 grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-md bg-gray-800 bg-opacity-80">
          <TextArea
            className="bg-transparent text-white"
            value={text}
            onChange={textChange}
            placeholder="请输入要加密的原文"
            autoSize={{ minRows: 5 }}
            bordered={false}
          />
        </div>
        <div className="p-4 rounded-md bg-white bg-opacity-80">
          <TextArea
              className="bg-transparent"
              value={encodeText}
              onChange={enCodeTextChange}
              placeholder="请输入要解密的Base64字符串"
              autoSize={{ minRows: 5 }}
              bordered={false}
            />
        </div>
        {encodedText}
      </div>
      
    </Container>
  )
}

export default Base64
