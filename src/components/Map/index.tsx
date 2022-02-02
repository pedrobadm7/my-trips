import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, MapConsumer } from 'react-leaflet'
import L from 'leaflet'

import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { ApplicationState } from 'store'
// import { Coordinate } from 'store/ducks/cordinates/types'
import * as CoordinatesActions from '../../store/ducks/cordinates/actions'
import * as S from './styles'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
  isVisited: boolean
}

type StateProps = {
  // coordinates: Coordinate[]
  // loading: boolean
}

type DispatchProps = {
  loadCoordinate(): void
  // getCoordinate(data: Coordinate[]): void
}

export type MapProps = {
  places?: Place[]
  toggle: () => void
}

type Props = StateProps & DispatchProps & MapProps

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBO_API_KEY
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBO_USERID
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBO_STYLEID

const CustomTileLayer = () => {
  return MAPBOX_API_KEY ? (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  )
}

const markerIcon = new L.Icon({
  iconUrl: 'img/red.png',
  iconSize: [40, 40],
  iconAnchor: [23, 40],
  popupAnchor: [0, -40]
})

const defaultIcon = new L.Icon({
  iconUrl: 'img/blue.png',
  iconSize: [40, 40],
  iconAnchor: [23, 40],
  popupAnchor: [0, -40]
})

const Map = ({
  places,
  toggle,
  // getCoordinate,
  loadCoordinate
}: // loading
Props) => {
  const router = useRouter()
  const [coordinate, setCoordinate] = useState({
    latitude: 0,
    longitude: 0
  })

  const getCoordinates = (e: any) => {
    const latitude: number = e.latlng.lat
    const longitude: number = e.latlng.lng
    setCoordinate({
      latitude,
      longitude
    })
    return coordinate
  }

  useEffect(() => {
    loadCoordinate()
    // getCoordinate(coordinate)
  })

  return (
    <S.MapWrapper>
      <MapContainer
        center={[0, 0]}
        zoom={2.5}
        style={{ height: '100%', width: '100%' }}
        minZoom={2.5}
        maxBounds={[
          [-180, 180],
          [180, -180]
        ]}
      >
        <MapConsumer>
          {(map) => {
            const width =
              window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth

            if (width < 768) {
              map.setMinZoom(1.8)
            }

            map.on('click', toggle)

            // How to get coordinates on click?
            map.on('click', getCoordinates)

            return null
          }}
        </MapConsumer>
        <CustomTileLayer />

        {places?.map(({ id, name, location, slug, isVisited }) => {
          const { latitude, longitude } = location
          return (
            <Marker
              key={`place-${id}`}
              position={[latitude, longitude]}
              title={name}
              icon={isVisited ? defaultIcon : markerIcon}
              eventHandlers={{
                click: () => {
                  router.push(`/place/${slug}`)
                }
              }}
            />
          )
        })}
      </MapContainer>
    </S.MapWrapper>
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  coordinates: state.coordinates.data,
  loading: state.coordinates.loading
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(CoordinatesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Map)
