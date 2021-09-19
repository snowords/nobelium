import { Carousel } from 'antd'

import AList from '@/components/cssDemo/AList'
import BHover from '@/components/cssDemo/BHover'
import CImage from '@/components/cssDemo/CImage'
import DFlow from '@/components/cssDemo/DFlow'

function CssGroup () {
  function onChange (a, b, c) {}

  return (
    <div>
      <Carousel
        className="px-4 py-8 bg-indigo-200 rounded-xl shadow-md"
        afterChange={onChange}>
        <div>
          <AList />
        </div>
        <div>
          <BHover />
        </div>
        <div>
          <CImage />
        </div>
        <div>
          <DFlow />
        </div>
      </Carousel>
    </div>
  )
}

export default CssGroup
