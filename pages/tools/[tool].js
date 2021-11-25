import { useRouter } from 'next/router'
import Container from '@/components/Container'

import TimeTool from '@/components/tools/TimeTool'
import Base64 from '@/components/tools/Base64'
import Markdown from '@/components/tools/Markdown'
import MD5 from '@/components/tools/MD5'
import QRCode from '@/components/tools/QRCode'
import RegexTool from '@/components/tools/RegexTool'
import CallMe from '@/components/tools/CallMe'
import CssGroup from '@/components/tools/CssGroup'

const router = useRouter()
const { tool } = router.query

const Tool = () => {
  const toolsList = new Map([
    ['TimeTool', <TimeTool />],
    ['Base64', <Base64 />],
    ['Markdown', <Markdown />],
    ['MD5', <MD5 />],
    ['QRCode', <QRCode />],
    ['RegexTool', <RegexTool />],
    ['CallMe', <CallMe />],
    ['CssGroup', <CssGroup />]
  ])

  const ToolComBox = toolsList.get(tool)
  return (
    <Container title={tool} description='在线小工具，尽情享用哦~'>
      {ToolComBox}
    </Container>
  )
}

export default Tool
