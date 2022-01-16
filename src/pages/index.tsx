import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <Map
      places={[
        {
          id: '2',
          name: 'Contagem',
          slug: 'contagem',
          location: {
            latitude: -19.9386,
            longitude: -44.0529
          }
        }
      ]}
    />
  )
}
