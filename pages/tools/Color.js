import { RgbaColorPicker } from 'react-colorful'
import { useState } from 'react';
import { Form, Input, Button } from 'antd';
import Container from '@/components/Container'

function Color() {
  const [color, setColor] = useState({ r: 200, g: 150, b: 35, a: 0.5 })
  const [hexColor, setHexColor] = useState('#927a437f')

  // RgbaToHex 函数 padStart(2, '0') 不够2位补上0
  const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')

  const rgbaToHex = (r, g, b, a) => rgbToHex(r, g, b) + Math.floor(a * 255).toString(16).padStart(2, '0')
  // hexToRgba 函数
  const hexToRgb = hex => 
    hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))

  const hexToRgba = aHex => {
    // 匹配正确格式的Hex
    const regex = /^#{1}([a-f\d]{3}|[a-f\d]{6}|[a-f\d]{8})$/i
    if(regex.test(aHex)){
      const hex = aHex.substring(0, 7)
      const aCode = aHex.substring(7, 9)
      const aNum = parseInt(aCode, 16)
      return [ ...hexToRgb(hex), parseFloat((aNum / 255).toFixed(2))]
    }else{
      return false
    }
  }

  const changeColor = (colorObj) => {
    const hexStr = rgbaToHex(colorObj.r, colorObj.g, colorObj.b, colorObj.a)
    setColor(colorObj)
    setHexColor(hexStr)
  } 
  // 更新多个键对象的状态
  // const changeRgbaColor = (e) => {
  //   setsetColor({
  //     ...color,
  //     [e.target.name]: e.target.value
  //   })
  // } 

  const changeHexColor = (e) => {
    const value = e.target.value
    setHexColor(value)
    const rgbaArr = hexToRgba(value)
    const rgbaObj = {
      r: rgbaArr[0],
      g: rgbaArr[1],
      b: rgbaArr[2],
      a: rgbaArr[3],
    }
    setColor(rgbaObj)
  } 

  const colorStyle = {
    backgroundColor: hexColor
  }
  
  const randomColor = () => {
    const randomHexStr = "#ab1245"
    setHexColor(randomHexStr)
  }

  return (
    <Container title='颜色小工具' description='在线小工具，尽情享用哦~' containerStyle={colorStyle}>
      <div className="py-4 grid grid-cols-1 gap-2">
        <RgbaColorPicker 
          className="place-self-center shadow-lg"
          color={color} 
          onChange={changeColor} 
        />
        <div className="p-4 md:w-2/5 rounded-md bg-white bg-opacity-80 text-md place-self-center shadow-lg">
          <Form.Item label="HEX">
            <Input 
              value={hexColor}
              placeholder="请输入HEX值"
              onChange={changeHexColor}
              />
          </Form.Item>
        </div>
        <div className="p-4 md:w-2/5 rounded-md bg-white bg-opacity-80 text-md place-self-center shadow-lg">
          <div>RGBA值</div>
          <Form.Item label="R">
            <Input 
              value={color.r}
              />
          </Form.Item>
          <Form.Item label="G">
            <Input 
              value={color.g}
              />
          </Form.Item>
          <Form.Item label="B">
            <Input 
              value={color.b}
              />
          </Form.Item>
          <Form.Item label="A">
            <Input 
              value={color.a}
              />
          </Form.Item>
        </div>
      </div>
      <Button type="primary" onClick={randomColor}>
        开启随机颜色
      </Button>
      <Button type="primary" onClick={randomColor}>
        关闭随机颜色
      </Button>
    </Container>
  )
}

export default Color
