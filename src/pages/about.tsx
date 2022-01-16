import client from 'graphql/client'
import { GET_PAGES } from 'graphql/queries'
import { useRouter } from 'next/router'
import PageTemplate from 'templates/Pages'

export default function AboutPage() {
  const router = useRouter()

  /* Retorna qualquer coisa enquanto a página é criada */
  if (router.isFallback) return null

  return <PageTemplate />
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => {
    return {
      params: { slug }
    }
  })

  return { paths, fallback: true }
}

// export const getStaticProps = async () => {
//   return {
//     props: {
//       pages
//     }
//   }
// }

/**
 * getStaticPaths => serve para gerar as urls em build time /about, /trip/petropolis
 * getStaticProps => serve para buscar dados da página (props) - build time - estático
 * getServerSideProps => serve para buscar dados da página (props) - runtime - toda requisição (bundle fica no server)
 * getInitialProps => serve para buscar dados da página (props) - runtime - toda requisição (bundle também vem para o client) - hydrate
 */
