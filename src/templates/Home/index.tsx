import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'
import Modal from 'components/Modal'
import { useModal } from 'hooks/useModal'
import { connect } from 'react-redux'
import { ApplicationState } from 'store'
import { Coordinate } from 'store/ducks/cordinates/types'

type StateProps = {
  coordinates: Coordinate[]
}

type Props = StateProps & MapProps

const Map = dynamic(() => import('components/Map'), { ssr: false })

function HomeTemplate({ places, coordinates }: Props) {
  const { isShown, toggle } = useModal()

  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show in a map the places that I went and show more informations and photos when clicked"
        canonical="https://my-trips.pedrobarros.com.br"
        openGraph={{
          url: 'https://my-trips.pedrobarros.com.br',
          title: 'My Trips',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: 'https://my-trips.pedrobarros.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size="32" aria-label="About" />
      </LinkWrapper>
      <Modal isShown={isShown} hide={toggle} headerText="Teste">
        {coordinates.map((coordinate) => (
          <>
            <p>Latitude: {coordinate.latitude}</p>
            <p>Longitude: {coordinate.longitude}</p>
          </>
        ))}
      </Modal>
      <Map toggle={toggle} places={places} />
    </>
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  coordinates: state.coordinates.data
})

export default connect(mapStateToProps)(HomeTemplate)
