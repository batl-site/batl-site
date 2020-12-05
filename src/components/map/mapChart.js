import React, { useEffect } from 'react'
import { ComposableMap, Geographies, Marker } from 'react-simple-maps'
import { Container, Country, Dot } from './styled'
import ReactTooltip from 'react-tooltip'

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({ markers }) => {

  useEffect(ReactTooltip.rebuild, []);

  return (
    <Container>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => <Country key={geo.rsmKey} geography={geo} />)
          }
        </Geographies>
        <ReactTooltip />
        {markers.map((marker, i) => {
          const { label, coordinates, type } = marker.fields;
          return (
            <Marker key={i} coordinates={[coordinates.lon, coordinates.lat]}>
              <Dot type={type} data-tip={label} />
            </Marker>
          )
        })}
      </ComposableMap>
    </Container>
)};

export default MapChart
