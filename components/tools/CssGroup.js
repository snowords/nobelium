import { useState } from 'react'
import { Input, Carousel } from 'antd'
import Image from 'next/image'

function CssGroup () {
  const { TextArea } = Input
  const [css, setCss] = useState(
    `.container {
      display: grid;
      place-items: center;
      min-height: 400px;
    }

    .floating-stack {
      background: #455A64;
      color: #fff;
      height: 70vh;
      width: 320px;
      border-radius: 1rem;
      overflow-y: auto;
    }

    .floating-stack > dl {
      margin: 0 0 1rem;
      display: grid;
      grid-template-columns: 2.5rem 1fr;
      align-items: center;
    }

    .floating-stack dt {
      position: sticky;
      top: 0.5rem;
      left: 0.5rem;
      font-weight: bold;
      background: #263238;
      color: #cfd8dc;
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
      padding: 0.25rem 1rem;
      grid-column: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }

    .floating-stack dd {
      grid-column: 2;
      margin: 0;
      padding: 0.75rem;
    }

    .floating-stack > dl:first-of-type > dd:first-of-type {
      margin-top: 0.25rem;
    }`
  )
  const cssChange = e => setCss(e.target.value)
  
  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  }
  return (
    <div>
      <Carousel 
        afterChange={onChange}>
        <div>
          {/* 第一个CSS案例 */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-2xl font-bold">滑动吸顶效果</div>
            <div className="text-2xl font-bold">Css</div>
          </div>
          <div className="grid p-2 grid-cols-2 md:grid-cols-2 gap-4">
            <div className="container">
              <div className="floating-stack">
                <dl>
                  <dt>A</dt>
                  <dd>Algeria</dd>
                  <dd>Angola</dd>

                  <dt>B</dt>
                  <dd>Benin</dd>
                  <dd>Botswana</dd>
                  <dd>Burkina Faso</dd>
                  <dd>Burundi</dd>

                  <dt>C</dt>
                  <dd>Cabo Verde</dd>
                  <dd>Cameroon</dd>
                  <dd>Central African Republic</dd>
                  <dd>Chad</dd>
                  <dd>Comoros</dd>
                  <dd>Congo, Democratic Republic of the</dd>
                  <dd>Congo, Republic of the</dd>
                  <dd>Cote d'Ivoire</dd>

                  <dt>D</dt>
                  <dd>Djibouti</dd>

                  <dt>E</dt>
                  <dd>Egypt</dd>
                  <dd>Equatorial Guinea</dd>
                  <dd>Eritrea</dd>
                  <dd>Eswatini (formerly Swaziland)</dd>
                  <dd>Ethiopia</dd>
                </dl>
              </div>
            </div>
            <TextArea
              onChange={cssChange}
              value={css} 
              bordered={false} />
            <style jsx>{css}</style>
          </div>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  )
}

export default CssGroup
