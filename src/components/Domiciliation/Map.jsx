import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PropTypes from 'prop-types';

import styles from "./Map.module.css";
import cityIcon from "../../assets/images/insurance_address_map_marker.png";

const DefaultIcon = new L.icon({
  iconUrl: cityIcon,
  iconSize: [40, 40],
});

function Map({ address }) {

  return (
    <div>
      <MapContainer
        className={styles.map_contener}
        center={[45.77966, 3.08628]}
        zoom={5.5}
        scrollWheelZoom
        minZoom={2}
        draggable={false}
        zoomSnap={0.5}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=33a48696f2324df5807babc5240f8605"
        />
        {
          address && address.map((el) => (
            <Marker key={el.id} position={[el.position.lat, el.position.lng]} icon={DefaultIcon}>
              <Popup>{el.address.label}</Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
}

export default Map;

Map.propTypes = {
  address: PropTypes.arrayOf(PropTypes.object).isRequired,
}
