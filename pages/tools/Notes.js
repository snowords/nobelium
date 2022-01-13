import { useState } from 'react'
import useSWR from 'swr'
import Container from '@/components/Container'
import { Form, Input, Button, message } from 'antd'
import { PlusOutlined, DeleteOutlined, LoadingOutlined } from '@ant-design/icons'

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
    return <div className="h-screen w-screen flex flex-col justify-center items-center">
      // 王莽，土地私有制，
      <LoadingOutlined className="text-2xl" />
      Loading...
    </div>
  }

  const onNewNote = () => {
    setShowForm(!showForm)
  }

  const onFinish = async (values) => {
    if (!values.content) {
      message.error('内容不能为空！')
      return
    }
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

  const onDelete = async (id) => {
    mutate(data.filter(item => item.id !== id))
    await fetch('/api/deleteNote', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    }).then(() => {
      message.success('删除成功！')
    })
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  // todo：分解为组件
  return (
    <Container>
      <div>
        <Button className="my-4" type="primary" shape="circle" icon={<PlusOutlined />} onClick={onNewNote} />
        <div className={`${showForm ? 'block' : 'hidden'} `}>
          <Form
            className="bg-white rounded-lg my-4 p-8 border"
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item name="title">
              <Input bordered={false} placeholder="标题" />
            </Form.Item>

            <Form.Item name="content">
              <TextArea bordered={false} placeholder="添加内容..."/>
            </Form.Item>

            <Button className="" type="primary" htmlType="submit" loading={loading}>提交</Button>
          </Form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center items-start">
          {data.map((note, index) => {
            return (
              <div className="text-ellipsis overflow-hidden rounded-lg border p-4 dark:text-white bg-white" key={index}>
                <div className="text-lg mb-2">{note.title}</div>
                <div>{note.content}</div>
                <Button className="my-4" type="danger" shape="circle" icon={<DeleteOutlined />} onClick={() => onDelete(note.id)} />
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  )
}
