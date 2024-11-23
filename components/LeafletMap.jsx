import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function LeafletMap() {
  // Specify the latitude and longitude
  const position = [55.65629545326724, 12.132868254032722]; // Coordinates of the pin
  const zoom = 13; // Adjust the zoom level as needed

  return (
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Location coordinates: {position[0]}, {position[1]}
        </Popup>
      </Marker>
    </MapContainer>
  );
}