import { useState } from 'react'
import useSWR from 'swr'
import Container from '@/components/Container'
import { Form, Input, Button, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const { TextArea } = Input

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Article () {
  const [showForm, setShowForm] = useState(false)
  // 表单控制
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  // useSWR Hook 请求数据
  // post 提交数据后 mutate用本地的数据替换
  const { data, mutate, error } = useSWR('/api/getNotes', fetcher, {
    focusThrottleInterval: 5000
  })
  if (error) return <h1>Something went wrong!</h1>
  if (!data) {
    return <h1>Loading...</h1>
  }

  const onNewNote = () => {
    setShowForm(!showForm)
  }

  const onFinish = async (values) => {
    setLoading(true)
    await fetch('/api/newNote', {
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

  // todo：分解为组件
  return (
    <Container>
      <div className="bg-white p-4">
        <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={onNewNote} />
        <Form
          className={showForm ? 'block' : 'hidden'}
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="标题" name="title" rules={[{ required: true, message: '输入标题!' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="内容" name="content" rules={[{ required: true, message: '输入内容!' }]}>
            <TextArea />
          </Form.Item>

          <Button type="primary" htmlType="submit" loading={loading}>提交</Button>
        </Form>

        {data.map((note, index) => {
          return (
            <div className="w-48 h-48 overflow-hidden rounded-lg border-2 p-4" key={index}>
              <div className="text-lg">{note.title}</div>
              <div>{note.content}</div>
            </div>
          )
        })}
      </div>
    </Container>
  )
}
