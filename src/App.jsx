import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import './App.css'
import LocationMarker from './components/LocationMarker/LocationMarker';

function App() {

  const position = [23.8041, 90.4152];
  return (
    <div>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          ></TileLayer>
          <LocationMarker></LocationMarker>
        </MapContainer>
    </div>
  )
}

export default App
