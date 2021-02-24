import {
    geojsonTypes,
    modes,
    cursors,
} from "@mapbox/mapbox-gl-draw/src/constants";
import doubleClickZoom from "@mapbox/mapbox-gl-draw/src/lib/double_click_zoom";
import DrawLine from "@mapbox/mapbox-gl-draw/src/modes/draw_line_string";
import {
    addPointTovertices,
    createSnapList,
    getGuideFeature,
    IDS,
    shouldHideGuide,
    addLineToSnapList,
    snap,
    visualizeSnapPoint
} from "./../utils";
import Angle from './../utils/angle.js';
import { v4 as uuidv4 } from 'uuid';

const SnapLineMode = {...DrawLine };

SnapLineMode.onSetup = function(options) {
    const line = this.newFeature({
        type: geojsonTypes.FEATURE,
        properties: {},
        geometry: {
            type: geojsonTypes.LINE_STRING,
            coordinates: [
                []
            ],
        },
    });

    const verticalGuide = this.newFeature(getGuideFeature(IDS.VERTICAL_GUIDE));
    const horizontalGuide = this.newFeature(
        getGuideFeature(IDS.HORIZONTAL_GUIDE)
    );

    this.addFeature(line);
    this.addFeature(verticalGuide);
    this.addFeature(horizontalGuide);

    const selectedFeatures = this.getSelected();
    this.clearSelectedFeatures();
    doubleClickZoom.disable(this);

    const [snapList, vertices] = createSnapList(this.map, this._ctx.api, line);

    const state = {
        map: this.map,
        line,
        currentVertexPosition: 0,
        vertices,
        snapList,
        selectedFeatures,
        verticalGuide,
        horizontalGuide,
        direction: "forward", // expected by DrawLineString
    };

    state.options = this._ctx.options;

    const moveendCallback = () => {
        const [snapList, vertices] = createSnapList(this.map, this._ctx.api, line);
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

    return state;
};

SnapLineMode.onClick = function(state, e) {
    // We save some processing by rounding on click, not mousemove
    var lng = state.snappedLng;
    var lat = state.snappedLat;

    console.log(lng, lat, 'avant')
    const array = state.angle.transformSnapping(state, e, lng, lat);
    lng = array[0];
    lat = array[1];


    console.log(lng, lat, 'après')
    /* if (state.angle.snapPoint) {
      lng = state.angle.snapPoint[0];
      lat = state.angle.snapPoint[1];
    } */
    // End the drawing if this click is on the previous position
    // Note: not bothering with 'direction'
    if (state.currentVertexPosition > 0) {
        const lastVertex = state.line.coordinates[state.currentVertexPosition - 1];

        state.lastVertex = lastVertex;

        if (lastVertex[0] === lng && lastVertex[1] === lat) {
            return this.changeMode(modes.SIMPLE_SELECT, {
                featureIds: [state.line.id],
            });
        }
    }

    // const point = state.map.project({ lng: lng, lat: lat });

    addPointTovertices(state.map, state.vertices, { lng, lat });

    state.line.updateCoordinate(state.currentVertexPosition, lng, lat);

    state.currentVertexPosition++;

    state.line.updateCoordinate(state.currentVertexPosition, lng, lat);
    state.angle.onClickFinalModifications(state, e, lng, lat);
};

SnapLineMode.onMouseMove = function(state, e) {

    const { lng, lat } = snap(state, e);
    state.line.updateCoordinate(state.currentVertexPosition, lng, lat);
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
};

// This is 'extending' DrawLine.toDisplayFeatures
SnapLineMode.toDisplayFeatures = function(state, geojson, display) {
    if (shouldHideGuide(state, geojson)) return;

    // This relies on the the state of SnapLineMode being similar to DrawLine
    DrawLine.toDisplayFeatures(state, geojson, display);
};

// This is 'extending' DrawLine.onStop
SnapLineMode.onStop = function(state) {
    this.deleteFeature(IDS.VERTICAL_GUIDE, { silent: true });
    this.deleteFeature(IDS.HORIZONTAL_GUIDE, { silent: true });

    // remove moveemd callback
    this.map.off("moveend", state.moveendCallback);

    // This relies on the the state of SnapLineMode being similar to DrawLine
    DrawLine.onStop.call(this, state);
    state.angle.onStop(state);
};

export default SnapLineMode;