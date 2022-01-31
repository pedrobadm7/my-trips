import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'
import Modal from 'components/Modal'
import { useModal } from 'hooks/useModal'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
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
        <h1>Irei inserir países aqui</h1>
      </Modal>
      <Map toggle={toggle} places={places} />
    </>
  )
}
