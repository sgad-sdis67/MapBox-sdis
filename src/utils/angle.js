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

  addMarkerToMap(state, e, lng, lat) {
    this.angleDiv = document.createElement('div');
    this.angleDiv.textContent = "test";
    this.marker = new mapboxgl.Marker(this.angleDiv) 
    .setLngLat([this.addXPixelsToLng(lng, 50, lat), lat])
    .addTo(this.state.map);
  }

  calcAngle(state, e) {
    let angle;
    if (state.lastVertex) {
      console.log('1', this.lastAngle, state.line.coordinates, [e.lngLat.lng, e.lngLat.lat]);
      angle =Math.round(bearing(state.line.coordinates[state.line.coordinates.length - 2], [e.lngLat.lng, e.lngLat.lat]));
    } else {
      angle = Math.round(bearing(state.line.coordinates[0], state.line.coordinates[1]));
    }
    return angle;
  }

  moveOn(state, e) {
    if (this.angleDiv) {
      this.angleDiv.textContent = this.calcAngle(state, e);
    } 
  }

  createAngleDiv(state, event, lng, lat) {
    this.state = state;
    if (this.angleDiv) {
      this.lastAngle = this.calcAngle(state, event);
      this.marker.setLngLat([this.addXPixelsToLng(lng, 15, lat), lat]);
    } else {
     this.addMarkerToMap(state, event, lng, lat);
    }
  }
}

export default Angle;