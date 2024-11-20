'use client'
import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Reset default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function ResetMap({ center }) {
    const map = useMap();
    
    useEffect(() => {
        map.setView(center, 13);
    }, [center, map]);

    return null;
}

export default function Map({ home }) {
    return (
        <MapContainer
            center={[home.lat, home.long]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: '70vh', width: '100%' }}
        >
            <ResetMap center={[home.lat, home.long]} />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[home.lat, home.long]}>
                <Popup>
                    {home.adress1}
                </Popup>
            </Marker>
        </MapContainer>
    )
}