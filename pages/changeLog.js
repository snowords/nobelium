import Container from '@/components/Container'
import { getChangeLog } from '@/lib/notion'
import Link from 'next/link'
import Image from 'next/image'
import { Form, Input, Button, Checkbox, InputNumber  } from 'antd'

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

  let cmsData = {}
  await fetch("http://localhost:3000/api/getLogs").then(res => res.json()).then(res => {
    cmsData = res.blogChangelogs
  })

  return {
    props: {
      cmsData: cmsData,
      changeData: resData,
    },
    revalidate: 60 * 60
  }
}

export default function changeLog ({ cmsData, changeData }) {

  const onFinish = async (values) => {
    await fetch("/api/newLog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({...values})
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

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

        <div className="bg-white p-4">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="序号"
              name="number"
              rules={[
                {
                  required: true,
                  message: '输入序号!',
                },
              ]}
            >
              <InputNumber min={1} max={10000} defaultValue={8888} />
            </Form.Item>
            <Form.Item
              label="标题"
              name="title"
              rules={[
                {
                  required: true,
                  message: '输入标题!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            {/* <Form.Item
              name="lastest"
              valuePropName="lastest"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>是否最新</Checkbox>
            </Form.Item> */}

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>

          {cmsData.map((log, index) => {
            return (
              <div key={index}>
                <div>{log.number}</div>
                <div>{log.title}</div>
                <div>{log.updateTime}</div>
                <div>{log.lastest}</div>
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  )
}
