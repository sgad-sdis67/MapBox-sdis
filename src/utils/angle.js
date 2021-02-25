import {
    angleToMeters,
    metersPerPixel
} from './index.js'

import length from '@turf/length';
import bearing from '@turf/bearing';
import destination from '@turf/destination';
import along from '@turf/along';
import distance from '@turf/distance';
import { bearingToAzimuth, bearingToAngle, transformRotate } from '@turf/turf';
import {
    addPointToSnapList,
	addLineToSnapList
} from "./../utils";
import { v4 as uuidv4 } from 'uuid';


class Angle {

    constructor(withSnapping = 30) {
        this.lastCalcul = 0;
        this.snapping = withSnapping;
        this.angleIsSnap = false;
    }


    addXPixelsToLng(lng, x, lat) {
        const lngInMeters = angleToMeters(lng);
        let pixels = (lngInMeters / metersPerPixel(lat, this.state.map.getZoom())) + x;
        const lngInMetersToPut = pixels * metersPerPixel(lat, this.state.map.getZoom());
        const lgnToPut = ((lngInMetersToPut) * 0.00001) / 1.132;
        return lgnToPut;
    }

    addMarkerToMap(state, e, lng, lat) {
        this.angleDiv = document.createElement('div');
        this.angleDiv.textContent = "NaN";
        this.marker = new mapboxgl.Marker(this.angleDiv)
            .setLngLat([this.addXPixelsToLng(lng, 50, lat), lat])
            .addTo(this.state.map);
    }

    canCalculateAngle(state) {
        return state.line && state.line.coordinates.length >=2 || state.polygon && state.polygon.coordinates[0].length >=2;
    }

    definePointsAndCalculeAngle(state, e) {
        if (this.canCalculateAngle(state)) {
            let point1;
            let point2;
            let oldPoint;
            if (state.line) {
                point1 = state.line.coordinates[state.line.coordinates.length - 2];
                point2 = [e.lngLat.lng, e.lngLat.lat];
                oldPoint = state.line.coordinates[state.line.coordinates.length - 3];
            } else {
                point1 = state.polygon.coordinates[0][state.polygon.coordinates[0].length - 2];
                point2 = [e.lngLat.lng, e.lngLat.lat];
                oldPoint = state.polygon.coordinates[0][state.polygon.coordinates[0].length - 3];
            }
            let angle = this.calcAngle(point1, point2, oldPoint);
            if (this.snapping != 0 && state.options.angle) {
                let angleToSnap;
                const modulo = angle % this.snapping;
                if (modulo > this.snapping / 2) {
                    angleToSnap = Math.trunc(angle / this.snapping) * this.snapping + this.snapping;
                } else {
                    angleToSnap = Math.trunc(angle / this.snapping) * this.snapping;
                }
                this.drawAngleSnapped(angleToSnap - angle, point1, point2, state);
            } else if (this.snapping != 0 && !state.options.angle) {
                this.removeSnapLine(state);
            }
            return angle;
        }
        return 0;
    }

    drawAngleSnapped(angle, point, point2, state) {
        var obj = {
            type: 'LineString',
            coordinates: [point, point2]
        }
        obj = transformRotate(obj, angle, { pivot: point })
        this.snapPoint = obj.coordinates[1];
        if (!state.map.getSource('snapLine')) {
            state.map.addSource('snapLine', { type: 'geojson', data: obj });
            state.map.addLayer({
                'id': 'snapLineLayer',
                'type': 'line',
                'source': 'snapLine',
                'paint': {
                    'line-color': 'red',
                    'line-opacity': 0.75,
                    'line-width': 1
                }
            });
        } else {
            state.map.setLayoutProperty('snapLineLayer', 'visibility', 'visible');
            state.map.getSource('snapLine').setData(obj)
        }
    }

    calcAngle(point1, point2, oldPoint) {
        let angle;
        const absoluteAngle = Math.round(bearing(point1, point2));
        let oldBearing = 0;
        if (oldPoint !== undefined) {
            oldBearing = Math.round(bearing(point1, oldPoint));
        }
        angle = Math.abs(oldBearing - absoluteAngle) % 180;
        return angle;
    }

    findAngleControl(state) {
        return state.map._controls.find((control) => {
            return control.constructor.name === 'AngleControl';
        });
    }

    moveOn(state, e, lng, lat) {
        const control = this.findAngleControl(state);
        if (control) {
            control._container.lastChild.textContent = this.definePointsAndCalculeAngle(state, e) + ' °';
        }
        if (this.canCalculateAngle(state)) {
            const distanceSnapPoint = distance([e.lngLat.lng, e.lngLat.lat], [lng, lat]);
            const distanceAngleSnapPoint = distance([e.lngLat.lng, e.lngLat.lat], this.snapPoint);
            if (distanceSnapPoint !== 0 && distanceAngleSnapPoint > distanceSnapPoint) {
                this.remove(state);
                state.line.updateCoordinate(state.currentVertexPosition, lng, lat);
                this.angleIsSnap = false;
            } else {
                if (state.markerPoint) {
                    state.markerPoint.remove();
                    state.markerPoint = undefined;
                }
                this.angleIsSnap = true;
                state.line.updateCoordinate(state.currentVertexPosition, this.snapPoint[0], this.snapPoint[1]);
            }
        } else {
            this.angleIsSnap = false;
            this.remove(state);
            state.line.updateCoordinate(state.currentVertexPosition, lng, lat);
        }
    }

    createAngleDiv(state, event, lng, lat) {
        this.state = state;
        if (this.angleDiv) {
            this.lastAngle = (this.lastAngle + this.lastCalcul) % 360;
            this.marker.setLngLat([this.addXPixelsToLng(lng, 15, lat), lat]);
        } else {
            this.addMarkerToMap(state, event, lng, lat);
        }
    }

    remove(state) {        
        this.removeSnapLine(state);
    }

    removeSnapLine(state) {
        if (state.map.getSource('snapLine')) {
            state.map.setLayoutProperty('snapLineLayer', 'visibility', 'none');
        }
    }

    onSetup(state) {
        state.angle = new Angle();
		state.angle.activate = state.options.angle;
        state.id = uuidv4();
    }

    transformSnapping(state, e, lng, lat) {
		if (state.options.angle) {
            if (this.angleIsSnap) {
                lng = this.snapPoint[0];
				lat = this.snapPoint[1];
            }
		}
        return [lng, lat];
    }

    onClickFinalModifications(state, e, lng, lat) {
        if ( state.line && state.line.coordinates.length >= 3) {
            addLineToSnapList(state.line.coordinates.slice(0, state.line.coordinates.length - 1), state); 
        } else if( state.polygon && state.polygon.coordinates[0].length >= 3) {
			addLineToSnapList(state.polygon.coordinates[0].slice(0, state.polygon.coordinates[0].length - 1), state); 
		}
    }

    removeStateMarker(state) {
        if (state.markerPoint) {
            state.markerPoint.remove();
            state.markerPoint = undefined;
        }
    }

    onStop(state) {
        const angleControl = this.findAngleControl(state);
        if (angleControl) {
            angleControl._container.lastChild.textContent = '0 °';
        } 
        this.remove(state);
        this.removeStateMarker(state)
    }
}

export default Angle;