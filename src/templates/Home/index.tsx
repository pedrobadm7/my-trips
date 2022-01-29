import { NextSeo } from 'next-seo'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'
import Modal from 'components/Modal'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal)
    console.log('Clicou')
  }

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
      <Map onClick={toggleModal} places={places} />
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        Lorem Ipsum is Lorem Ipsum and so on all given filters. */
      </Modal>
    </>
  )
}
