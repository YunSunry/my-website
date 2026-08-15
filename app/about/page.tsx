import Link from 'next/link'

export default function About() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">关于我们</h1>
      <p className="mt-2">这是关于我们的介绍页面。</p>
      <Link href="/" className="mt-4 inline-block text-blue-500 underline">
        返回首页
      </Link>
    </main>
  )
}