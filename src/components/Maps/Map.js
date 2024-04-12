import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import Head from "next/head";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";

const ICON = icon({
  iconUrl: "/icon.png",
  iconSize: [32, 32],
});

function LocationMarker({ onClick }) {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      onClick(e.latlng); // Pass the coordinates to the parent component
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker icon={ICON} position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default function Map({ width, height ,onClick}) {
  const [center, setCenter] = useState({ lat: 9.005401, lng: 38.763611 });

  const handleMapClick = (latlng) => {
    setCenter(latlng);
    onClick(latlng)
  };

  return (
    <div className="flex justify-center items-center mt-8 mb-5">
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: height, width: width }}
        className="rounded-md shadow-md"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={ICON} position={center}>
        </Marker>
        <LocationMarker onClick={handleMapClick} />
      </MapContainer>
    </div>
  );
}
