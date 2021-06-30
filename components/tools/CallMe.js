import { Button } from 'antd'
import Image from 'next/image'

function CallMe () {

  const callPhone = () => {
    window.location.href = 'tel:13061417969'
  }
  return (
    <div className="grid p-2 gap-4">
      <div className="justify-self-center my-4">
        <Image
          alt="LogoPic"
          width={160}
          height={200}
          src="/img/girl.gif"
        />
      </div>
      <div className="justify-self-center text-lg">我的手机号码：13061417969</div>
      <div className="justify-self-center">
        <Button type="primary" onClick={callPhone}>
          拨打挪车电话
        </Button>
      </div>
    </div>
  )
}

export default CallMe
