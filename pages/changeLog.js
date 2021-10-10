import Container from '@/components/Container'
import { getChangeLog } from '@/lib/notion'

export async function getStaticProps () {
  const res = await getChangeLog()
  console.log(res.block)
  const resData = []
  for (const b in res.block) {
    resData.push({
      id: res.block[b].value.id,
      created_time: res.block[b].value.created_time
    })
  }
  return {
    props: {
      changeData: resData,
      conunt: conunt
    }
  }
}

export default function changeLog ({ changeData, conunt }) {
  return (
    <Container>
      <p>{conunt}</p>
      {changeData.map((item, key) => {
        return (
          <div key={key}>
            <p>{item.id}</p>
            <p>{item.created_time}</p>
            <p>{item.properties}</p>
          </div>
        )
      })}
    </Container>
  )
}
