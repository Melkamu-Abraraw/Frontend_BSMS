import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";

const ICON = icon({
  iconUrl: "/mark.png",
  iconSize: [90, 90],
});

const coordinates = {
  lat: 9.0238,
  lng: 38.746,
};
const locations = [
  { lat: 9.0238, lng: 38.746 },
  { lat: 9.0273, lng: 38.736 },
  { lat: 9.0156, lng: 38.768 },
  { lat: 9.0294, lng: 38.746 },
];
const Map = ({ width, height }) => {
  return (
    <div className="flex justify-center items-center mt-8 mb-5">
      <MapContainer
        center={[coordinates.lat, coordinates.lng]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: height, width: width }}
        className="rounded-md shadow-md"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location, index) => (
          <Marker
            key={index}
            icon={ICON}
            position={[location.lat, location.lng]}
          >
            <Popup>Marker {index + 1}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
