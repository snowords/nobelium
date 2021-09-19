import { useState } from 'react'
import { Input } from 'antd'

function CImage () {
  const { TextArea } = Input
  const [css, setCss] = useState(
    `.card {
      width: 300px;
      height: 280px;
      padding: 0;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
      border-radius: 8px;
      box-sizing: border-box;
      overflow: hidden;
    }
    
    .card * {
      transition: 0.3s ease all;
    }
    
    .card img {
      margin: 0;
      width: 300px;
      height: 224px;
      object-fit: cover;
      display: block;
    }
    
    .card h3 {
      margin: 0;
      padding: 12px 12px 48px;
      line-height: 32px;
      font-weight: 500;
      font-size: 20px;
    }
    
    .card .focus-content {
      display: block;
      padding: 8px 12px;
    }
    
    .card p {
      margin: 0;
      line-height: 1.5;
    }
    
    .card:hover img, .card:focus-within img {
      margin-top: -80px;
    }
    
    .card:hover h3, .card:focus-within h3 {
      padding: 8px 12px 0;
    }`
  )
  const cssChange = e => setCss(e.target.value)
  return (
    <div>
      <div className="grid grid-cols-2 place-items-center">
        <div className="text-2xl font-bold">图片墙展示</div>
        <div className="text-2xl font-bold">Css样式</div>
      </div>
      <div className="grid p-2 grid-cols-2 md:grid-cols-2 gap-8">
        <div className="card">
          <img src="https://picsum.photos/id/404/367/267"/>
          <h3>Lorem ipsum</h3>
          <div className="focus-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> <a href="#">Link to source</a>
            </p>
          </div>
        </div>
        <TextArea
          onChange={cssChange}
          value={css}/>
        <div>
          <style jsx>{css}</style>
        </div>
      </div>
    </div>
  )
}

export default CImage
