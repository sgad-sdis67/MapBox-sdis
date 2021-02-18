import {
  angleToMeters,
  metersPerPixel 
} from './index.js'

import length from '@turf/length';
import bearing from '@turf/bearing';
import destination from '@turf/destination';
import along from '@turf/along';
import distance from '@turf/distance';

class Angle {

  constructor() {}

  addXPixelsToLng (lng, x, lat) {
    const lngInMeters = angleToMeters(lng);
    let pixels = (lngInMeters/metersPerPixel(lat, this.state.map.getZoom())) + x;
    const lngInMetersToPut = pixels * metersPerPixel(lat, this.state.map.getZoom());
    const lgnToPut = ((lngInMetersToPut) * 0.00001)/1.132;
    return lgnToPut;
  }

  addMarkerToMap(e, lng, lat) {
    this.angleDiv = document.createElement('div');
    this.angleDiv.textContent = "test";
    this.marker = new mapboxgl.Marker(this.angleDiv) 
    .setLngLat([this.addXPixelsToLng(lng, 15, lat), lat])
    .addTo(this.state.map);
  }

  moveOn(state, e) {
    if (this.angleDiv) {
      if (state.lastVertex) {
        this.angleDiv.textContent = bearing(state.line.coordinates[state.line.coordinates.length - 1], state.lastVertex)
      } else {
        this.angleDiv.textContent = bearing(state.line.coordinates[state.line.coordinates.length - 1], [0,0])
      }
    } 
  }

  createAngleDiv(state, event, lng, lat) {
    console.log(state)
    this.state = state;
    if (document.getElementById('angle')) {
      console.log('exist');
    } else {
      
     console.log('avant 1')
     this.addMarkerToMap(event, lng, lat);
     console.log('apres 1')
    }
  }
}

export default Angle;