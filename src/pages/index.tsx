import HomeTemplate from 'templates/Home'
import { MapProps } from 'components/Map'
import client from 'graphql/client'
import { GET_PLACES } from 'graphql/queries'
import { GetPlacesQuery } from 'graphql/generated/graphql'
import { useModal } from 'hooks/useModal'

export default function Home({ places }: MapProps) {
  const { toggle } = useModal()
  return <HomeTemplate toggle={toggle} places={places} />
}

export const getStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)
  return {
    revalidate: 5,
    props: {
      places
    }
  }
}
