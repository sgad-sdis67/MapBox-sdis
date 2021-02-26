# Mapbox-GL Draw Snap SDIS 67 

![npm](https://img.shields.io/npm/v/mapbox-gl-snap-sdis67?color=green)

Custom mode for [Mapbox GL Draw](https://github.com/mapbox/mapbox-gl-draw) that adds snapping ability while drawing features.
It provides options to show guiding lines, control snapping sensibility, to snap to midpoints on each segment, to snap angle and 
and caculate distance and angle. 
It extend Mapbox-GL Draw Snap Mode writed by @mhsattarian (https://github.com/mhsattarian).


## Install

```shell
npm i mapbox-gl-snap-sdis67
```

## Usage

```js
import logo from './logo.svg';
import './App.css';
import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {MapBoxGlSnap} from 'mapbox-gl-snap-sdis67';
import mapboxgl from 'mapbox-gl'

const MapContainer = React.forwardRef((props, mapContainer) => {
  return <div className="map-container" ref={mapContainer} />
});

function App() {
  const mapContainer = useRef(null);
  const [refresh, setRefresh] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const mapToSet = new mapboxgl.Map({
      container: mapContainer.current,
       style: 'mapbox://styles/mapbox/streets-v11',
       center: [47.795,7.374],
       zoom: 10,
       pitch: 0,
       interactive: true,
       hash: true,
       attributionControl: true,
       accessToken: 'YOUR_PUBLIC_KEY',
    });
    setMap(mapToSet)
    setRefresh(true);
   }, []);
  return (
      <div className="App">
        <div className="map-wrapper">
          <MapContainer ref={mapContainer}/>
          <MapBoxGlSnap map={map} refresh={refresh}/> 
        </div>
      </div>
  );
}
```

MapContainer is necessary to contain map.
Refresh permit to reload with modified map. 
Map is simply an mapboxGl.Map instance.

## Acknowledgement

this project is heavily inspired from [work](https://github.com/mapbox/mapbox-gl-draw/issues/865) of @davidgilbertson and [`leaflet-geoman` project](https://github.com/geoman-io/leaflet-geoman).
