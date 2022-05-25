import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>index page</title>
      </Head>
      <div>
        index page
        <Link href="/list">
          <a>jump to list page</a>
        </Link>
        <img src="/images/Cat03.jpeg" alt="" />
      </div>
    </>
  )
}
