import React from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import "./Map.css";

function Map({cityData}) {
    return (
        <div className="leaflet-container">
            <MapContainer
                className="map"
                center={[cityData.coord.lat, cityData.coord.lon]} 
                zoom={13}
                scrollWheelZoom={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[cityData.coord.lat, cityData.coord.lon]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            </MapContainer>
        </div>
    )
}

export default Map
