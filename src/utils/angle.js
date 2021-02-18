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

  definePointsAndCalculeAngle(state, e) {
    let point1;
    let point2;
    if (state.line) {
      point1 = state.line.coordinates[state.line.coordinates.length - 2];
      point2 = [e.lngLat.lng, e.lngLat.lat];
    } else {
      point1 = state.polygon.coordinates[0][state.polygon.coordinates[0].length - 2];
      point2 = [e.lngLat.lng, e.lngLat.lat];
    }
    return this.calcAngle(point1, point2);
  }

  calcAngle(point1, point2) {
    let angle;
    const absoluteAngle = Math.round(bearing(point1, point2));
    if (absoluteAngle < 0) {
      angle = 360 + absoluteAngle;
    } else {
      angle = absoluteAngle;
    }
    this.lastCalcul = (this.lastAngle + angle)%360;
    return this.lastCalcul;
  }

  moveOn(state, e) {
    if (this.angleDiv) {
      this.angleDiv.textContent = this.definePointsAndCalculeAngle(state, e);
    } 
  }

  createAngleDiv(state, event, lng, lat) {
    this.state = state;
    if (this.angleDiv) {
      this.lastAngle = (this.lastAngle + this.lastCalcul)%360;
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