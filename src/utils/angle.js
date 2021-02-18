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
    .setLngLat([this.addXPixelsToLng(lng, 50, lat), lat])
    .addTo(this.state.map);
    this.lastAngle = this.calcAngle(this.state, e);
    console.log('last angle', this.lastAngle)
  }

  calcAngle(state, e) {
    console.log(e, 'event in calc');
    let angle;
    if (state.lastVertex) {
      console.log('1', this.lastAngle);
      angle = Math.round(bearing(state.lastVertex, [e.lngLat.lng, e.lngLat.lat]));
    } else {
      console.log('2', state, e);
      angle = Math.round(bearing(state.line.coordinates[0], state.line.coordinates[1]));
    }
    return angle;
  }

  moveOn(state, e) {
    console.log('11', state)
    if (this.angleDiv) {
      this.angleDiv.textContent = this.calcAngle(state, e);
    } 
  }

  createAngleDiv(state, event, lng, lat) {
    this.state = state;
    if (this.angleDiv) {
      this.marker.setLngLat([this.addXPixelsToLng(lng, 15, lat), lat]);
    } else {
     this.addMarkerToMap(event, lng, lat);
    }
  }
}

export default Angle;