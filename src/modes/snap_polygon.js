import {
    geojsonTypes,
    modes,
    cursors,
} from "@mapbox/mapbox-gl-draw/src/constants";
import doubleClickZoom from "@mapbox/mapbox-gl-draw/src/lib/double_click_zoom";
import DrawPolygon from "@mapbox/mapbox-gl-draw/src/modes/draw_polygon";
import {
    addPointTovertices,
    createSnapList,
    getGuideFeature,
    IDS,
    shouldHideGuide,
    snap,
    addLineToSnapList,
    visualizeSnapPoint
} from "./../utils";
import Angle from './../utils/angle.js';
import Distance from './../utils/distance.js';

const SnapPolygonMode = {...DrawPolygon };

SnapPolygonMode.onSetup = function(options) {
    const polygon = this.newFeature({
        type: geojsonTypes.FEATURE,
        properties: {},
        geometry: {
            type: geojsonTypes.POLYGON,
            coordinates: [
                []
            ],
        },
    });

    const verticalGuide = this.newFeature(getGuideFeature(IDS.VERTICAL_GUIDE));
    const horizontalGuide = this.newFeature(
        getGuideFeature(IDS.HORIZONTAL_GUIDE)
    );

    this.addFeature(polygon);
    this.addFeature(verticalGuide);
    this.addFeature(horizontalGuide);

    const selectedFeatures = this.getSelected();
    this.clearSelectedFeatures();
    doubleClickZoom.disable(this);

    const [snapList, vertices] = createSnapList(this.map, this._ctx.api, polygon);

    const state = {
        map: this.map,
        polygon,
        currentVertexPosition: 0,
        vertices,
        snapList,
        selectedFeatures,
        verticalGuide,
        horizontalGuide,
    };
    state.options = this._ctx.options;

    const moveendCallback = () => {
        const [snapList, vertices] = createSnapList(
            this.map,
            this._ctx.api,
            polygon
        );
        state.vertices = vertices;
        state.snapList = snapList;
    };
    // for removing listener later on close
    state["moveendCallback"] = moveendCallback;

    const optionsChangedCallBAck = (options) => {
        state.options = options;
    };

    // for removing listener later on close
    state["optionsChangedCallBAck"] = optionsChangedCallBAck;

    this.map.on("moveend", moveendCallback);
    this.map.on("draw.snap.options_changed", optionsChangedCallBAck);

    new Angle().onSetup(state);
    new Distance().onSetup(state);
    return state;
};

SnapPolygonMode.onClick = function(state, e) {
    // We save some processing by rounding on click, not mousemove
    var lng = state.snappedLng;
    var lat = state.snappedLat;
    const array = state.angle.transformSnapping(state, e, lng, lat);
    lng = array[0];
    lat = array[1];

    // End the drawing if this click is on the previous position
    if (state.currentVertexPosition > 0) {
        const lastVertex =
            state.polygon.coordinates[0][state.currentVertexPosition - 1];

        state.lastVertex = lastVertex;

        if (lastVertex[0] === lng && lastVertex[1] === lat) {
            return this.changeMode(modes.SIMPLE_SELECT, {
                featureIds: [state.polygon.id],
            });
        }
    }

    // const point = state.map.project();

    addPointTovertices(state.map, state.vertices, { lng, lat });

    state.polygon.updateCoordinate(`0.${state.currentVertexPosition}`, lng, lat);

    state.currentVertexPosition++;

    state.polygon.updateCoordinate(`0.${state.currentVertexPosition}`, lng, lat);
    state.angle.onClickFinalModifications(state, e, lng, lat);
};

SnapPolygonMode.onMouseMove = function(state, e) {
    const { lng, lat } = snap(state, e);

    state.polygon.updateCoordinate(`0.${state.currentVertexPosition}`, lng, lat);
    state.snappedLng = lng;
    state.snappedLat = lat;

    if (e.lngLat.lng !== lng && e.lngLat.lat !== lat) {
        visualizeSnapPoint(state, lng, lat);
    } else {
        if (state.markerPoint) {
            state.markerPoint.remove();
            state.markerPoint = undefined;
        }
    }

    if (
        state.lastVertex &&
        state.lastVertex[0] === lng &&
        state.lastVertex[1] === lat
    ) {
        this.updateUIClasses({ mouse: cursors.POINTER });

        // cursor options:
        // ADD: "add"
        // DRAG: "drag"
        // MOVE: "move"
        // NONE: "none"
        // POINTER: "pointer"
    } else {
        this.updateUIClasses({ mouse: cursors.ADD });
    }
    state.angle.moveOn(state, e);
    state.distance.onMouseMove(state, lng, lat);
};

// This is 'extending' DrawPolygon.toDisplayFeatures
SnapPolygonMode.toDisplayFeatures = function(state, geojson, display) {
    if (shouldHideGuide(state, geojson)) return;

    // This relies on the the state of SnapPolygonMode being similar to DrawPolygon
    DrawPolygon.toDisplayFeatures(state, geojson, display);
};

// This is 'extending' DrawPolygon.onStop
SnapPolygonMode.onStop = function(state) {
    this.deleteFeature(IDS.VERTICAL_GUIDE, { silent: true });
    this.deleteFeature(IDS.HORIZONTAL_GUIDE, { silent: true });

    // remove moveemd callback
    this.map.off("moveend", state.moveendCallback);
    this.map.off("draw.snap.options_changed", state.optionsChangedCallBAck);

    // This relies on the the state of SnapPolygonMode being similar to DrawPolygon
    DrawPolygon.onStop.call(this, state);
    state.angle.onStop(state);
    state.distance.onStop(state);
};

export default SnapPolygonMode;