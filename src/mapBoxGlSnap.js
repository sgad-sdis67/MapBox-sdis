import SnapPolygonMode from './modes/snap_polygon.js';
import SnapPointMode from './modes/snap_point.js';
import SnapLineMode from './modes/snap_line.js';
import SnapModeDrawStyles from "./utils/customDrawStyles.js";
import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import mapboxgl from 'mapbox-gl';
import './mapBoxGlSnap.css'

class DistanceControl {
  constructor() {}
  onAdd(map) {
      this._map = map;
      this._container = document.createElement('div');
      this._container.className = 'mapboxgl-ctrl';
      this._container.style.backgroundColor = 'white';
      this._container.style.fontSize = '30px';
      this._container.style.padding = '5px';
      this._container.textContent = '0 m';
      return this._container;
  }
  
  onRemove() {
      this._container.parentNode.removeChild(this._container);
      this._map = undefined;
  }
}

class AngleControl {
  constructor() {}
  onAdd(map) {
      this._map = map;
      this._container = document.createElement('div');
      this._container.className = 'mapboxgl-ctrl';
      this._container.style.backgroundColor = 'white';
      this._container.style.fontSize = '30px';
      this._container.style.padding = '5px';
      this._container.textContent = '0 °';
      return this._container;
  }
  
  onRemove() {
      this._container.parentNode.removeChild(this._container);
      this._map = undefined;
  }
}

class extendDrawBarCheckboxes {
  constructor(opt) {
    let ctrl = this;
    ctrl.checkboxes = opt.checkboxes || [];
    ctrl.onRemoveOrig = opt.draw.onRemove;
  }
  onAdd(map) {
    let ctrl = this;
    ctrl.map = map;
    ctrl._container = document.createElement("div");
    ctrl._container.className = "mapboxgl-ctrl-group mapboxgl-ctrl";
    ctrl.elContainer = ctrl._container;
    ctrl.checkboxes.forEach((b) => {
      ctrl.addCheckbox(b);
    });
    return ctrl._container;
  }
  onRemove(map) {
    this.checkboxes.forEach((b) => {
      this.removeButton(b);
    });
    this.onRemoveOrig(map);
  }
  addCheckbox(opt) {
    let ctrl = this;
    const elCheckbox = document.createElement("input");
    elCheckbox.setAttribute("type", "checkbox");
    elCheckbox.setAttribute("title", opt.title);
    elCheckbox.checked = opt.initialState === "checked";
    elCheckbox.className = "mapbox-gl-draw_ctrl-draw-btn";
    if (opt.classes instanceof Array) {
      opt.classes.forEach((c) => {
        elCheckbox.classList.add(c);
      });
    }
    elCheckbox.addEventListener(opt.on, opt.action);
    ctrl.elContainer.appendChild(elCheckbox);
    opt.elCheckbox = elCheckbox;
  }
  removeButton(opt) {
    opt.elCheckbox.removeEventListener(opt.on, opt.action);
    opt.elCheckbox.remove();
  }
}

export default function MapBoxGlSnap (props) {
  useEffect(() => {
    const map = props.map;
    if (map) {

      const draw = new MapboxDraw({
        modes: {
          ...MapboxDraw.modes,
          draw_point: SnapPointMode,
          draw_polygon: SnapPolygonMode,
          draw_line_string: SnapLineMode,
        },
        styles: SnapModeDrawStyles,
        userProperties: true,
        snap: true,
        snapOptions: {
          snapPx: 15,
          snapToMidPoints: true,
        },
        guides: false,
      });
  
      map.once("load", () => {
        map.resize();
  
        const SnapOptionsBar = new extendDrawBarCheckboxes({
          draw: draw,
          checkboxes: [
            {
              on: "change",
              action: (e) => {
                draw.options.snap = e.target.checked;
              },
              classes: ["snap_mode", "snap"],
              title: "Snap when Draw",
              initialState: "checked",
            },
            {
              on: "change",
              action: (e) => {
                draw.options.guides = e.target.checked;
              },
              classes: ["snap_mode", "grid"],
              title: "Show Guides",
            },
          ],
        });
  
        map.addControl(draw, "top-right");
        map.addControl(SnapOptionsBar, "top-right");
        const SnapAngleOptionsBar = new extendDrawBarCheckboxes({
          draw: draw,
          checkboxes: [
            {
              on: "change",
              action: (e) => {
                draw.options.angle = e.target.checked;
              },
              classes: ["snap_mode_angle", "snap_angle"],
              title: "Snap angle",
              initialState: "checked",
            }
          ],
        });
        draw.options.angle = true;
        map.addControl(SnapAngleOptionsBar, "top-right");
        const angle = map.addControl(new AngleControl(), "bottom-right");
        const distance = map.addControl(new DistanceControl(), "bottom-right");
      });
    }
    
  },[props.refresh]);


  return(<div></div>);
}