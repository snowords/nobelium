import dynamic from 'next/dynamic'
import ReactMarkdown from 'react-markdown'
import 'react-markdown-editor-lite/lib/index.css'

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false
})

function Markdown () {
  return (
    <MdEditor
      style={{ height: '500px' }}
      renderHTML={(text) => (<ReactMarkdown>
        {text}
      </ReactMarkdown>)}
    />
  )
}

export default Markdown
