import { useState } from 'react'
import { Input } from 'antd'

function AList () {
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
  return (
    <div>
      <div className="grid grid-cols-2 place-items-center">
        <div className="text-2xl font-bold">滑动吸顶效果</div>
        <div className="text-2xl font-bold">Css样式</div>
      </div>
      <div className="grid p-2 grid-cols-2 md:grid-cols-2 gap-8">
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
              <dd>Cote dIvoire</dd>

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
          <style jsx>{css}</style>
        </div>
        <TextArea
          onChange={cssChange}
          value={css}/>
      </div>
    </div>
  )
}

export default AList
