import { geojsonTypes, cursors } from "@mapbox/mapbox-gl-draw/src/constants";
import doubleClickZoom from "@mapbox/mapbox-gl-draw/src/lib/double_click_zoom";
import DrawPoint from "@mapbox/mapbox-gl-draw/src/modes/draw_point";
import {
  addPointTovertices,
  createSnapList,
  getGuideFeature,
  IDS,
  shouldHideGuide,
  snap,
  visualizeSnapPoint
} from "./../utils";

const SnapPointMode = { ...DrawPoint };

SnapPointMode.onSetup = function (options) {
  const point = this.newFeature({
    type: geojsonTypes.FEATURE,
    properties: {},
    geometry: {
      type: geojsonTypes.POINT,
      coordinates: [[]],
    },
  });

  const verticalGuide = this.newFeature(getGuideFeature(IDS.VERTICAL_GUIDE));
  const horizontalGuide = this.newFeature(
    getGuideFeature(IDS.HORIZONTAL_GUIDE)
  );

  this.addFeature(point);
  this.addFeature(verticalGuide);
  this.addFeature(horizontalGuide);

  const selectedFeatures = this.getSelected();
  this.clearSelectedFeatures();
  doubleClickZoom.disable(this);

  const [snapList, vertices] = createSnapList(this.map, this._ctx.api, point);

  const state = {
    map: this.map,
    point,
    vertices,
    snapList,
    selectedFeatures,
    verticalGuide,
    horizontalGuide,
  };

  state.options = this._ctx.options;

  const moveendCallback = () => {
    const [snapList, vertices] = createSnapList(this.map, this._ctx.api, point);
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

  return state;
};

SnapPointMode.onClick = function (state) {
  // We mock out e with the rounded lng/lat then call DrawPoint with it
  DrawPoint.onClick.call(this, state, {
    lngLat: {
      lng: state.snappedLng,
      lat: state.snappedLat,
    },
  });
};

SnapPointMode.onMouseMove = function (state, e) {
  const { lng, lat } = snap(state, e);

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
};

// This is 'extending' DrawPoint.toDisplayFeatures
SnapPointMode.toDisplayFeatures = function (state, geojson, display) {
  if (shouldHideGuide(state, geojson)) return;

  // This relies on the the state of SnapPointMode having a 'point' prop
  DrawPoint.toDisplayFeatures(state, geojson, display);
};

// This is 'extending' DrawPoint.onStop
SnapPointMode.onStop = function (state) {
  this.deleteFeature(IDS.VERTICAL_GUIDE, { silent: true });
  this.deleteFeature(IDS.HORIZONTAL_GUIDE, { silent: true });

  // remove moveemd callback
  this.map.off("moveend", state.moveendCallback);

  // This relies on the the state of SnapPointMode having a 'point' prop
  DrawPoint.onStop.call(this, state);
  if (state.markerPoint) {
      state.markerPoint.remove();
      state.markerPoint = undefined;
  }
};

export default SnapPointMode;
