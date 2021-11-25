import Container from '@/components/Container'
import useSWR from 'swr'
import { Form, Input, Button, Checkbox, InputNumber } from 'antd'

export async function getStaticProps () {
  console.log('getStaticProps')
  const cmsData = await fetch('http://localhost:3000/api/getLogs').then(res => res.json())
  console.log('cmsData2', cmsData.blogChangelogs)
  return {
    props: {
      cmsData: cmsData.blogChangelogs
    }
  }
}

export default function Article ({ cmsData }) {
  const onFinish = async (values) => {
    await fetch('/api/newLog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...values })
    })
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Container>
      <div className="bg-white p-4">
        <Form
          name="basic"
          labelCol={{
            span: 8
          }}
          wrapperCol={{
            span: 16
          }}
          initialValues={{
            remember: true
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
                message: '输入序号!'
              }
            ]}
          >
            <InputNumber min={1} max={10000} value={8888} />
          </Form.Item>
          <Form.Item
            label="标题"
            name="title"
            rules={[
              {
                required: true,
                message: '输入标题!'
              }
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
              span: 16
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
    </Container>
  )
}
