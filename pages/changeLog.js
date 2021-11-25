import Container from '@/components/Container'
import { getChangeLog } from '@/lib/notion'
import Link from 'next/link'
import Image from 'next/image'

export async function getStaticProps () {
  const res = await getChangeLog()
  let resData = []
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
    },
    revalidate: 60 * 60
  }
}

export default function changeLog ({ changeData }) {
  return (
    <Container>
      <div>
        {changeData.map((item, key) => {
          return (
            <div className="transition-all duration-300 bg-white dark:bg-gray-800 dark:text-white p-4 my-6 rounded-md hover:shadow-lg" key={key}>
              <div className="grid autoGrid gap-3 my-2">
                <div className="text-xl font-semibold">{item.title}</div>
                <div className="flex bg-gradient-to-r from-yellow-200 via-pink-300 to-purple-300 rounded-md p-2 place-self-start">
                  <Image
                    alt="Github Commit"
                    src="/img/github.png"
                    width={20}
                    height={20}
                    className="hover:animate-spin"
                  />
                  <div className="ml-2">
                    <Link className="" href={item.commitUrl}>
                      <a target="_blank">{item.commitId}</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex">
                <Image
                  alt={item.author}
                  width={22}
                  height={22}
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
