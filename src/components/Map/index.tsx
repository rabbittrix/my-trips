import { MapContainer, TileLayer, Marker } from 'react-leaflet'

type Place = {
  id: string
  name: string
  slug: string
  location: { lat: number; long: number }
}

export type MapProps = {
  places?: Place[]
}

const Map = ({ places }: MapProps) => (
  <MapContainer
    center={[0, 0]}
    zoom={3}
    style={{ height: '100%', width: '100%' }}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {places?.map(({ id, name, location }) => {
      const { lat, long } = location
      return <Marker key={`place-${id}`} position={[lat, long]} title={name} />
    })}
  </MapContainer>
)
