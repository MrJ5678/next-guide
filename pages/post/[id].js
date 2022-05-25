import { useRouter } from 'next/router'

export default function Post({ data }) {
  const router = useRouter()
  if (router.isFallback) return <div>loading</div>
  return (
    <div>
      <span>{data.title}</span>
      <span>{data.id}</span>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: 1 } }, { params: { id: 1 } }],
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const id = params.id
  let data
  switch (id) {
    case '1':
      data = { id: 1, title: 'hello' }
      break
    case '2':
      data = { id: 2, title: 'world' }
      break

    default:
      data = {}
  }
  return {
    props: {
      data
    }
  }
}
