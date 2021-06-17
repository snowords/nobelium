import { useRouter } from 'next/router'
import Container from '@/components/Container'
import BLOG from '@/blog.config'

import TimeTool from '@/components/tools/TimeTool'
import Base64 from '@/components/tools/Base64'
import MarkDown from '@/components/tools/MarkDown'
import MD5 from '@/components/tools/MD5'
import QRCode from '@/components/tools/QRCode'

const Tool = () => {
  const router = useRouter()
  const { tool } = router.query

  const toolsList = new Map([
    [ "TimeTool", <TimeTool />],
    [ "Base64", <Base64 />],
    [ "MarkDown", <MarkDown />],
    [ "MD5", <MD5 />],
    [ "QRCode", <QRCode />],
  ])

  const ToolComBox =  toolsList.get(tool); 
  return (
    <Container title={BLOG.title} description={BLOG.description}>
      {ToolComBox}
    </Container>
  )
}

export default Tool