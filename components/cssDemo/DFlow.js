import { useState } from 'react'
import { Input } from 'antd'

function DFlow () {
  const { TextArea } = Input
  const [css, setCss] = useState(
    `.card {
      perspective: 150rem;
      position: relative;
      height: 40rem;
      max-width: 400px;
      margin: 2rem;
      box-shadow: none;
      background: none;
    }
    
    .card-side {
      height: 35rem;
      border-radius: 15px;
      transition: all 0.8s ease;
      backface-visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
      width: 80%;
      padding:2rem;
      color: white
    }
    
    .card-side.back {
      transform: rotateY(-180deg);
      background-color: #4158D0;
      background-image: linear-gradient(43deg, #4158D0 0%,#C850C0 46%, #FFCC70 100%);
    }
    
    .card-side.front {
      background-color: #0093E9;
      background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
    }
    
    .card:hover .card-side.front {
      transform: rotateY(180deg);
    }
    
    .card:hover .card-side.back {
      transform: rotateY(0deg);
    }`
  )
  const cssChange = e => setCss(e.target.value)
  return (
    <div>
      <div className="grid grid-cols-2 place-items-center">
        <div className="text-2xl font-bold">翻转效果</div>
        <div className="text-2xl font-bold">Css样式</div>
      </div>
      <div className="grid p-2 grid-cols-2 md:grid-cols-2 gap-8">
        <div className="card">
          <div className="card-side front">
            <div>Front Side</div>
          </div>
          <div className="card-side back">
            <div>Back Side</div>
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

export default DFlow
