import Container from '@/components/Container'
import BLOG from '@/blog.config'

function QRCode() {
  return (
    <Container title={BLOG.title} description={BLOG.description}>
      <div className="grid grid-col-2 gap-2">
        <div>
          <input value="安能摧眉折腰势权贵"/>
        </div>
        <div>
          <input value="使我不能开心颜"/>
        </div>
      </div>
      
    </Container>
  )
}

export default QRCode
