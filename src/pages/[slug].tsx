import client from 'graphql/client'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import PagesTemplate, { PagesTemplateProps } from 'templates/Pages'

export default function Page({ heading, body }: PagesTemplateProps) {
  const router = useRouter()

  if (router.isFallback) {
    return null
  }
  return <PagesTemplate heading={heading} body={body} />
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))
  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { pages } = await client.request(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!pages) return { notFound: true }

  return {
    props: {
      heading: pages.heading,
      body: pages.body
    }
  }
}
