import { distance } from '@turf/turf';

class Distance {
    constructor() {
        this.distance = 0;
    }

    onSetup (state) {
        state.distance = new Distance();
    }

    onMouseMove(state, lng, lat) {
        console.log(state.line.coordinates, 'coordinates')
        if (state.line && state.line.coordinates.length >= 2) {
            state.distance.distance = Math.round(distance(state.line.coordinates[state.line.coordinates.length -2], [lng, lat]) * 1000);
        } else if (state.polygon && state.polygon.coordinates[0].length >= 2) {
            state.distance.distance = Math.round(distance(state.polygon.coordinates[0][state.polygon.coordinates.length -2], [lng, lat]) * 1000);
        }
        this.visualizeDistance(state, lng, lat);
    }

    visualizeDistance(state, lng, lat) {
        const distanceControl = state.map._controls.find((control) => {
            return control.constructor.name === 'DistanceControl';
        });
        if (distanceControl) {
            distanceControl._container.lastChild.textContent = state.distance.distance + ' m';
        }
    }
}


export default Distance;