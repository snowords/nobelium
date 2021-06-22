import { useState } from 'react'
import remarkGfm from 'remark-gfm'
import remarkSlug from 'remark-slug'
import remarkToc from 'remark-toc'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import ReactMarkdown from 'react-markdown'
import { Input } from 'antd'

const Markdown = () => {
  const [text, setText] = useState(
  `# A demo of \`react-markdown\`
  \`react-markdown\` is a markdown component for React.
  👉 Changes are re-rendered as you type.
  ## Overview
  * Follows [CommonMark](https://commonmark.org)
  * Optionally follows [GitHub Flavored Markdown](https://github.github.com/gfm/)
  ## Syntax highlighting

  Here is an example of a plugin to highlight code:
  [\`rehype-highlight\`](https://github.com/rehypejs/rehype-highlight).`
  )

  const textChange = e => setText(e.target.value)

  const { TextArea } = Input

  return (
    <div>
      <div className="text-lg bold text-center">MarkDown文档在线预览工具</div>
      <div className="grid p-2 grid-cols-1 md:grid-cols-2 gap-2">
        <div className="p-4 rounded-md bg-gray-800 bg-opacity-80">
          <TextArea
            className="bg-transparent text-white"
            value={text}
            onChange={textChange}
            placeholder="请输入Markdown文档"
            autoSize={{ minRows: 8 }}
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
  )
}

export default Markdown
