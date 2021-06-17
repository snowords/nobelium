import { useRouter } from 'next/router'
import Container from '@/components/Container'
import TimeTool from '@/components/tools/TimeTool'
import BLOG from '@/blog.config'

const Tool = () => {
  const router = useRouter()
  const { tool } = router.query

  const toolComBox =  ''; 
  return (
    <Container title={BLOG.title} description={BLOG.description}>
      <p>工具名: {tool}</p>
      <TimeTool />
    </Container>
  )
}

export default Tool