import { useState } from 'react'
import { Input, Checkbox, Button } from 'antd'

function RegexTool () {
  const { TextArea } = Input
  const [text, setText] = useState('')
  const [regexText, setRegexText] = useState('')
  const [modelText, setModelText] = useState('')
  const [replaceText, setReplaceText] = useState('')
  const [matchResult, setMatchResult] = useState('暂无匹配结果')
  const [repResult, setRepResult] = useState('暂无替换结果')

  const textChange = e => {
    const value = e?.target?.value || e
    setText(value)

    const regex = new RegExp(regexText, modelText)
    setMatchResult(text.match(regex))
    setRepResult(text.replace(regex, replaceText))
  }
  const onChangeRegex = e => {
    setRegexText(e.target.value)
    textChange(text)
  }
  const onChangeG = e => {
    const newModelText = e.target.checked && modelText.indexOf('g') === -1 ? modelText + 'g' : modelText.replace('g', '')
    setModelText(newModelText)
    textChange(text)
  }
  const onChangeI = e => {
    const newModelText = e.target.checked && modelText.indexOf('i') === -1 ? modelText + 'i' : modelText.replace('i', '')
    setModelText(newModelText)
    textChange(text)
  }
  const onChangeReplace = e => {
    setReplaceText(e.target.value)
    textChange(text)
  }

  const refresh = () => {
    textChange(text)
  }

  return (
    <div className="grid p-2 grid-cols-1 gap-4">
      <div className="p-4 rounded-md bg-gray-800 bg-opacity-80">
        <TextArea
          className="bg-transparent text-white"
          value={text}
          onChange={textChange}
          placeholder="请输入待匹配的文本"
          autoSize={{ minRows: 5 }}
          bordered={false}
        />
      </div>
      <div className="p-4 rounded-md bg-white bg-opacity-80">
        <Input.Group>
          <Input
            className="w-1/2 mr-4"
            addonBefore="正则表达式"
            value={regexText}
            onChange={onChangeRegex}
            />
          <Checkbox onChange={onChangeG}>全局</Checkbox>
          <Checkbox onChange={onChangeI}>忽略大小写</Checkbox>
          <Button onClick={refresh} type="primary" className="rounded-md">匹配正则</Button>
        </Input.Group>
        <div>
          <div className="text-gray-500 m-2">匹配结果</div>
          <div className="p-4 h-32 rounded-md border">
            {matchResult}
          </div>
        </div>
      </div>

      <div className="p-4 rounded-md bg-white bg-opacity-80">
        <Input
          className="w-1/2"
          addonBefore="替换文本"
          value={replaceText}
          onChange={onChangeReplace}
          />
        <div>
          <div className="text-gray-500 m-2">替换结果</div>
          <div className="p-4 h-32 rounded-md border">
            {repResult}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegexTool
