import Container from '@/components/Container'
import BLOG from '@/blog.config'
import ReactMarkdown from 'react-markdown'
import { useState } from 'react'
import gfm from 'remark-gfm'
import { DatePicker } from 'antd';

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

  return (
    <div>
      <div className="h-4 rounded-md"><DatePicker /></div>
      <div className="grid h-screen p-2 grid-cols-2 grid-rows-8 gap-2">
        <div className="p-4 rounded-md bg-gray-800 bg-opacity-80">
          <textarea className=""
            onChange={e => setTextValue(e.target.value)}>
            {text}
          </textarea>
        </div>
        <div className="p-4 rounded-md bg-white bg-opacity-80">
          <ReactMarkdown remarkPlugins={[gfm]} children={text} />
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
