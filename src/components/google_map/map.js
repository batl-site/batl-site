import React from "react";
import GoogleMapReact from "google-map-react";
import { MapContainer } from "./styled";

const GoogleMap = ({ location, zoomLevel }) => {
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map
    });
    return marker
  };

  return (
    <div>
      <MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAP_KEY }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
          onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
          yesIWantToUseGoogleMapApiInternals
        />
      </MapContainer>
    </div>
  );
};

export default GoogleMap;
