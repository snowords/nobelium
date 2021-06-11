import Container from '@/components/Container'
import BLOG from '@/blog.config'
import { useState } from 'react'
import remarkGfm from 'remark-gfm'
import remarkSlug from 'remark-slug'
import remarkToc from 'remark-toc'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import ReactMarkdown from 'react-markdown'
import { DatePicker, Input } from 'antd';

const MarkDown = () => {
  const [text, setText] = useState(
  `A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.

  * Lists
  * [ ] todo
  * [x] done

  A table:

  | a | b |
  | - | - |
  `
  )

  const setTextValue = (value) => {
    setText(value)
  }

  const textChange = e => setTextValue(e.target.value)

  const { TextArea } = Input

  return (
    <div>
      <div className="grid h-16 p-2 m-2 rounded-md bg-white bg-opacity-80"><DatePicker /></div>
      <div className="grid h-screen p-2 grid-cols-1 md:grid-cols-2 gap-2">
        <div className="p-4 rounded-md bg-gray-800 bg-opacity-80">
          <TextArea
            className="bg-transparent text-white"
            value={text}
            onChange={textChange}
            placeholder="请输入Markdown文档"
            autoSize={{ minRows: 3 }}
            bordered={false}
          />
        </div>
        <div className="p-4 rounded-md bg-white bg-opacity-80 text-lg">
          <ReactMarkdown 
            className=""
            remarkPlugins={[remarkGfm, remarkToc, remarkSlug]} 
            rehypePlugins={[rehypeHighlight, rehypeRaw]}
            >
            {text}
          </ReactMarkdown>
        </div>
      </div>
    </div>
    // <Container title={BLOG.title} description={BLOG.description}>

    //   <div className="grid grid-col-2 gap-2">
    //     <div>
    //       <input value="安能摧眉折腰势权贵"/>
    //     </div>
    //     <div>
    //       <input value="使我不能开心颜"/>
    //     </div>
    //   </div>
      
    // </Container>
  )
}

export default MarkDown
