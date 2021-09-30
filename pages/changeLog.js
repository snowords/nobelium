import Container from '@/components/Container'
import { getChangeLog } from '@/lib/notion'

export default function changeLog ({ changeData }) {
  return (
    <Container>
      <h1>Change Log</h1>
      {changeData.map((item, key) => 

    </Container>
  )
}

export async function getStaticProps () {
  const res = await getChangeLog()
  console.log(res.block)
  return {
    props: {
      changeData: res.block
    }
  }
}
