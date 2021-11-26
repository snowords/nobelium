import { useState } from 'react'
import useSWR from 'swr'
import Container from '@/components/Container'
import { Form, Input, Button, Checkbox, message, InputNumber } from 'antd'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Article () {
  // 表单控制
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  // useSWR Hook 请求数据
  // post 提交数据后 mutate用本地的数据替换
  const { data, mutate, error } = useSWR('/api/getLogs', fetcher, {
    focusThrottleInterval: 5000
  })
  if (error) return <h1>Something went wrong!</h1>
  if (!data) {
    return <h1>Loading...</h1>
  }

  const onFinish = async (values) => {
    setLoading(true)
    await fetch('/api/newLog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...values })
    }).then(() => {
      setLoading(false)
      message.success('保存成功！')
      form.resetFields()
    })
    mutate([...data, values])
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
            <Button type="primary" htmlType="submit" loading={loading}>
              提交
            </Button>
          </Form.Item>
        </Form>

        {data.map((log, index) => {
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
