import Container from '@/components/Container'
import { getChangeLog } from '@/lib/notion'
import Link from 'next/link'
import Image from 'next/image'

export async function getStaticProps () {
  const res = await getChangeLog()
  const resData = []
  for (const b in res.block) {
    const blockValue = res.block[b].value
    if (blockValue.properties && blockValue.type === 'text') {
      const itemStr = blockValue.properties.title[0]
      const itemList = itemStr[0].split(/日期：|提交ID：|链接：|作者：|邮箱：|头像：/)
      resData.push({
        title: itemList[0].slice(2),
        date: itemList[1],
        commitId: itemList[2],
        commitUrl: itemList[3],
        author: itemList[4],
        email: itemList[5],
        avator: itemList[6]
      })
    }
  }
  return {
    props: {
      changeData: resData
    }
  }
}

export default function changeLog ({ changeData, count }) {
  return (
    <Container>
      <div>
        {changeData.map((item, key) => {
          return (
            <div className="transition-all duration-300 bg-white p-4 my-6 rounded-md hover:shadow-lg hover:bg-blue-200" key={key}>
              <div className="grid autoGrid gap-3 my-2">
                <div className="text-xl font-semibold">{item.title}</div>
                <div className="bg-blue-200 border-2 border-blue-200 rounded-md p-2 place-self-start hover:bg-white">
                  <Link className="" href={item.commitUrl}>
                    <a target="_blank">{item.commitId}</a>
                  </Link>
                </div>
              </div>
              <div className="flex">
                <Image
                  alt={item.author}
                  width={20}
                  height={20}
                  src={item.avator}
                  className="rounded-full"
                />
                <div className="mx-2">
                  <Link href={`mailto://${item.email}`}>
                    <a>{item.author}</a>
                  </Link>
                </div>
                <div className="mr-2">
                  提交于
                </div>
                {item.date}
              </div>
            </div>
          )
        })}
      </div>
    </Container>
  )
}
