import Container from '@/components/Container'
import Link from 'next/link'

export default function PageNotFount () {
  return (
    <Container>
      <main className="flex flex-col justify-center h-96 items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl">啊哦！页面走丢了</h1>
        <Link href="/">
          <a className="mt-4 underline">← 返回主页</a>
        </Link>
      </main>
    </Container>
  )
}
