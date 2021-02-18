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
 
  constructor() {
    this.lastAngle = 0;
    this.lastCalcul = 0;
  }

  addXPixelsToLng (lng, x, lat) {
    const lngInMeters = angleToMeters(lng);
    let pixels = (lngInMeters/metersPerPixel(lat, this.state.map.getZoom())) + x;
    const lngInMetersToPut = pixels * metersPerPixel(lat, this.state.map.getZoom());
    const lgnToPut = ((lngInMetersToPut) * 0.00001)/1.132;
    return lgnToPut;
  }

  addMarkerToMap(state, e, lng, lat) {
    this.angleDiv = document.createElement('div');
    this.angleDiv.textContent = "erreur";
    this.marker = new mapboxgl.Marker(this.angleDiv) 
    .setLngLat([this.addXPixelsToLng(lng, 50, lat), lat])
    .addTo(this.state.map);
  }

  calcAngle(state, e) {
    let angle;
    if (state.line) {
      if (Math.round(bearing(state.line.coordinates[state.line.coordinates.length - 2], [e.lngLat.lng, e.lngLat.lat])) < 0) {
        angle = 360 + Math.round(bearing(state.line.coordinates[state.line.coordinates.length - 2], [e.lngLat.lng, e.lngLat.lat]))
      } else {
        angle = Math.round(bearing(state.line.coordinates[state.line.coordinates.length - 2], [e.lngLat.lng, e.lngLat.lat]))
      }
    } else {
      if (Math.round(bearing(state.polygon.coordinates[0][state.polygon.coordinates[0].length - 2], [e.lngLat.lng, e.lngLat.lat])) < 0) {
        angle = 360 + Math.round(bearing(state.polygon.coordinates[0][state.polygon.coordinates[0].length - 2], [e.lngLat.lng, e.lngLat.lat]))
      } else {
        angle = Math.round(bearing(state.polygon.coordinates[0][state.polygon.coordinates[0].length - 2], [e.lngLat.lng, e.lngLat.lat]))
      }
    }
   
    this.lastCalcul = (this.lastAngle + angle)%360;
    return this.lastCalcul;
  }

  moveOn(state, e) {
    console.log(state, 'state', e);
    if (this.angleDiv) {
      this.angleDiv.textContent = this.calcAngle(state, e);
    } 
  }

  createAngleDiv(state, event, lng, lat) {
    this.state = state;
    if (this.angleDiv) {
      this.lastAngle = this.lastCalcul;
      this.marker.setLngLat([this.addXPixelsToLng(lng, 15, lat), lat]);
    } else {
     this.addMarkerToMap(state, event, lng, lat);
    }
  }

  remove() {
    if (this.marker) {
      this.marker.remove();
    }
  }
}

export default Angle;