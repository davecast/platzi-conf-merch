import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import '../styles/components/Map.css';

const Map = ({ address }) => {
  const { latitude, longitude } = address;

  return (
    <MapContainer
      className="Map-height"
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          A pretty CSS3 popup. 
          {' '}
          <br />
          {' '}
          Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
