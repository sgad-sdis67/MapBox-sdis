(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mapboxGlDrawSnapMode"] = factory();
	else
		root["mapboxGlDrawSnapMode"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 530:
/***/ (function(__unused_webpack_module, exports) {

!function(t,e){ true?e(exports):0}(this,function(t){"use strict";function e(t,e,n){if(n=n||{},!I(n))throw new Error("options is invalid");var r=n.bbox,i=n.id;if(void 0===t)throw new Error("geometry is required");if(e&&e.constructor!==Object)throw new Error("properties must be an Object");r&&N(r),i&&C(i);var o={type:"Feature"};return i&&(o.id=i),r&&(o.bbox=r),o.properties=e||{},o.geometry=t,o}function n(t,e,n){if(n=n||{},!I(n))throw new Error("options is invalid");var i=n.bbox;if(!t)throw new Error("type is required");if(!e)throw new Error("coordinates is required");if(!Array.isArray(e))throw new Error("coordinates must be an Array");i&&N(i);var s;switch(t){case"Point":s=r(e).geometry;break;case"LineString":s=a(e).geometry;break;case"Polygon":s=o(e).geometry;break;case"MultiPoint":s=l(e).geometry;break;case"MultiLineString":s=h(e).geometry;break;case"MultiPolygon":s=p(e).geometry;break;default:throw new Error(t+" is invalid")}return i&&(s.bbox=i),s}function r(t,n,r){if(!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!b(t[0])||!b(t[1]))throw new Error("coordinates must contain numbers");return e({type:"Point",coordinates:t},n,r)}function i(t,e,n){if(!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");return c(t.map(function(t){return r(t,e)}),n)}function o(t,n,r){if(!t)throw new Error("coordinates is required");for(var i=0;i<t.length;i++){var o=t[i];if(o.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var s=0;s<o[o.length-1].length;s++){if(0===i&&0===s&&!b(o[0][0])||!b(o[0][1]))throw new Error("coordinates must contain numbers");if(o[o.length-1][s]!==o[0][s])throw new Error("First and last Position are not equivalent.")}}return e({type:"Polygon",coordinates:t},n,r)}function s(t,e,n){if(!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");return c(t.map(function(t){return o(t,e)}),n)}function a(t,n,r){if(!t)throw new Error("coordinates is required");if(t.length<2)throw new Error("coordinates must be an array of two or more positions");if(!b(t[0][1])||!b(t[0][1]))throw new Error("coordinates must contain numbers");return e({type:"LineString",coordinates:t},n,r)}function u(t,e,n){if(!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");return c(t.map(function(t){return a(t,e)}),n)}function c(t,e){if(e=e||{},!I(e))throw new Error("options is invalid");var n=e.bbox,r=e.id;if(!t)throw new Error("No features passed");if(!Array.isArray(t))throw new Error("features must be an Array");n&&N(n),r&&C(r);var i={type:"FeatureCollection"};return r&&(i.id=r),n&&(i.bbox=n),i.features=t,i}function h(t,n,r){if(!t)throw new Error("coordinates is required");return e({type:"MultiLineString",coordinates:t},n,r)}function l(t,n,r){if(!t)throw new Error("coordinates is required");return e({type:"MultiPoint",coordinates:t},n,r)}function p(t,n,r){if(!t)throw new Error("coordinates is required");return e({type:"MultiPolygon",coordinates:t},n,r)}function f(t,n,r){if(!t)throw new Error("geometries is required");if(!Array.isArray(t))throw new Error("geometries must be an Array");return e({type:"GeometryCollection",geometries:t},n,r)}function g(t,e){if(void 0===t||null===t||isNaN(t))throw new Error("num is required");if(e&&!(e>=0))throw new Error("precision must be a positive number");var n=Math.pow(10,e||0);return Math.round(t*n)/n}function d(t,e){if(void 0===t||null===t)throw new Error("radians is required");if(e&&"string"!=typeof e)throw new Error("units must be a string");var n=qo[e||"kilometers"];if(!n)throw new Error(e+" units is invalid");return t*n}function y(t,e){if(void 0===t||null===t)throw new Error("distance is required");if(e&&"string"!=typeof e)throw new Error("units must be a string");var n=qo[e||"kilometers"];if(!n)throw new Error(e+" units is invalid");return t/n}function _(t,e){return v(y(t,e))}function m(t){if(null===t||void 0===t)throw new Error("bearing is required");var e=t%360;return e<0&&(e+=360),e}function v(t){if(null===t||void 0===t)throw new Error("radians is required");return 180*(t%(2*Math.PI))/Math.PI}function x(t){if(null===t||void 0===t)throw new Error("degrees is required");return t%360*Math.PI/180}function E(t,e,n){if(null===t||void 0===t)throw new Error("length is required");if(!(t>=0))throw new Error("length must be a positive number");return d(y(t,e),n||"kilometers")}function w(t,e,n){if(null===t||void 0===t)throw new Error("area is required");if(!(t>=0))throw new Error("area must be a positive number");var r=Bo[e||"meters"];if(!r)throw new Error("invalid original units");var i=Bo[n||"kilometers"];if(!i)throw new Error("invalid final units");return t/r*i}function b(t){return!isNaN(t)&&null!==t&&!Array.isArray(t)}function I(t){return!!t&&t.constructor===Object}function N(t){if(!t)throw new Error("bbox is required");if(!Array.isArray(t))throw new Error("bbox must be an Array");if(4!==t.length&&6!==t.length)throw new Error("bbox must be an Array of 4 or 6 numbers");t.forEach(function(t){if(!b(t))throw new Error("bbox must only contain numbers")})}function C(t){if(!t)throw new Error("id is required");if(-1===["string","number"].indexOf(typeof t))throw new Error("id must be a number or a string")}function S(t,e,n){if(null!==t)for(var r,i,o,s,a,u,c,h,l=0,p=0,f=t.type,g="FeatureCollection"===f,d="Feature"===f,y=g?t.features.length:1,_=0;_<y;_++){a=(h=!!(c=g?t.features[_].geometry:d?t.geometry:t)&&"GeometryCollection"===c.type)?c.geometries.length:1;for(var m=0;m<a;m++){var v=0,x=0;if(null!==(s=h?c.geometries[m]:c)){u=s.coordinates;var E=s.type;switch(l=!n||"Polygon"!==E&&"MultiPolygon"!==E?0:1,E){case null:break;case"Point":e(u,p,_,v,x),p++,v++;break;case"LineString":case"MultiPoint":for(r=0;r<u.length;r++)e(u[r],p,_,v,x),p++,"MultiPoint"===E&&v++;"LineString"===E&&v++;break;case"Polygon":case"MultiLineString":for(r=0;r<u.length;r++){for(i=0;i<u[r].length-l;i++)e(u[r][i],p,_,v,x),p++;"MultiLineString"===E&&v++,"Polygon"===E&&x++}"Polygon"===E&&v++;break;case"MultiPolygon":for(r=0;r<u.length;r++){for("MultiPolygon"===E&&(x=0),i=0;i<u[r].length;i++){for(o=0;o<u[r][i].length-l;o++)e(u[r][i][o],p,_,v,x),p++;x++}v++}break;case"GeometryCollection":for(r=0;r<s.geometries.length;r++)S(s.geometries[r],e,n);break;default:throw new Error("Unknown Geometry Type")}}}}}function M(t,e,n,r){var i=n;return S(t,function(t,r,o,s,a){i=0===r&&void 0===n?t:e(i,t,r,o,s,a)},r),i}function L(t,e){var n;switch(t.type){case"FeatureCollection":for(n=0;n<t.features.length;n++)e(t.features[n].properties,n);break;case"Feature":e(t.properties,0)}}function P(t,e,n){var r=n;return L(t,function(t,i){r=0===i&&void 0===n?t:e(r,t,i)}),r}function O(t,e){if("Feature"===t.type)e(t,0);else if("FeatureCollection"===t.type)for(var n=0;n<t.features.length;n++)e(t.features[n],n)}function R(t,e,n){var r=n;return O(t,function(t,i){r=0===i&&void 0===n?t:e(r,t,i)}),r}function T(t){var e=[];return S(t,function(t){e.push(t)}),e}function A(t,e){var n,r,i,o,s,a,u,c,h,l,p=0,f="FeatureCollection"===t.type,g="Feature"===t.type,d=f?t.features.length:1;for(n=0;n<d;n++){for(a=f?t.features[n].geometry:g?t.geometry:t,c=f?t.features[n].properties:g?t.properties:{},h=f?t.features[n].bbox:g?t.bbox:void 0,l=f?t.features[n].id:g?t.id:void 0,s=(u=!!a&&"GeometryCollection"===a.type)?a.geometries.length:1,i=0;i<s;i++)if(null!==(o=u?a.geometries[i]:a))switch(o.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":e(o,p,c,h,l);break;case"GeometryCollection":for(r=0;r<o.geometries.length;r++)e(o.geometries[r],p,c,h,l);break;default:throw new Error("Unknown Geometry Type")}else e(null,p,c,h,l);p++}}function D(t,e,n){var r=n;return A(t,function(t,i,o,s,a){r=0===i&&void 0===n?t:e(r,t,i,o,s,a)}),r}function F(t,n){A(t,function(t,r,i,o,s){var a=null===t?null:t.type;switch(a){case null:case"Point":case"LineString":case"Polygon":return void n(e(t,i,{bbox:o,id:s}),r,0)}var u;switch(a){case"MultiPoint":u="Point";break;case"MultiLineString":u="LineString";break;case"MultiPolygon":u="Polygon"}t.coordinates.forEach(function(t,o){n(e({type:u,coordinates:t},i),r,o)})})}function q(t,e,n){var r=n;return F(t,function(t,i,o){r=0===i&&0===o&&void 0===n?t:e(r,t,i,o)}),r}function G(t,e){F(t,function(t,n,r){var i=0;if(t.geometry){var o=t.geometry.type;"Point"!==o&&"MultiPoint"!==o&&M(t,function(o,s,u,c,h,l){var p=a([o,s],t.properties);return e(p,n,r,l,i),i++,s})}})}function B(t,e,n){var r=n,i=!1;return G(t,function(t,o,s,a,u){r=!1===i&&void 0===n?t:e(r,t,o,s,a,u),i=!0}),r}function k(t,e){if(!t)throw new Error("geojson is required");F(t,function(t,n,r){if(null!==t.geometry){var i=t.geometry.type,o=t.geometry.coordinates;switch(i){case"LineString":e(t,n,r,0,0);break;case"Polygon":for(var s=0;s<o.length;s++)e(a(o[s],t.properties),n,r,s)}}})}function z(t,e,n){var r=n;return k(t,function(t,i,o,s){r=0===i&&void 0===n?t:e(r,t,i,o,s)}),r}function j(t){var e=[1/0,1/0,-1/0,-1/0];return S(t,function(t){e[0]>t[0]&&(e[0]=t[0]),e[1]>t[1]&&(e[1]=t[1]),e[2]<t[0]&&(e[2]=t[0]),e[3]<t[1]&&(e[3]=t[1])}),e}function X(t){if(!t)throw new Error("obj is required");var e=U(t);if(e.length>1&&b(e[0])&&b(e[1]))return e;throw new Error("Coordinate is not a valid Point")}function U(t){if(!t)throw new Error("obj is required");var e;if(t.length?e=t:t.coordinates?e=t.coordinates:t.geometry&&t.geometry.coordinates&&(e=t.geometry.coordinates),e)return Y(e),e;throw new Error("No valid coordinates")}function Y(t){if(t.length>1&&b(t[0])&&b(t[1]))return!0;if(Array.isArray(t[0])&&t[0].length)return Y(t[0]);throw new Error("coordinates must only contain numbers")}function V(t,e,n){if(!e||!n)throw new Error("type and name required");if(!t||t.type!==e)throw new Error("Invalid input to "+n+": must be a "+e+", given "+t.type)}function H(t,e,n){if(!t)throw new Error("No feature passed");if(!n)throw new Error(".featureOf() requires a name");if(!t||"Feature"!==t.type||!t.geometry)throw new Error("Invalid input to "+n+", Feature with geometry required");if(!t.geometry||t.geometry.type!==e)throw new Error("Invalid input to "+n+": must be a "+e+", given "+t.geometry.type)}function W(t,e,n){if(!t)throw new Error("No featureCollection passed");if(!n)throw new Error(".collectionOf() requires a name");if(!t||"FeatureCollection"!==t.type)throw new Error("Invalid input to "+n+", FeatureCollection required");for(var r=0;r<t.features.length;r++){var i=t.features[r];if(!i||"Feature"!==i.type||!i.geometry)throw new Error("Invalid input to "+n+", Feature with geometry required");if(!i.geometry||i.geometry.type!==e)throw new Error("Invalid input to "+n+": must be a "+e+", given "+i.geometry.type)}}function J(t){if(!t)throw new Error("geojson is required");if(void 0!==t.geometry)return t.geometry;if(t.coordinates||t.geometries)return t;throw new Error("geojson must be a valid Feature or Geometry Object")}function Z(){throw new Error("invariant.getGeomType has been deprecated in v5.0 in favor of invariant.getType")}function K(t,e){if(!t)throw new Error((e||"geojson")+" is required");if(t.geometry&&t.geometry.type)return t.geometry.type;if(t.type)return t.type;throw new Error((e||"geojson")+" is invalid")}function Q(t,e,n){n=n||{};for(var r=Object.keys(Xo),i=0;i<r.length;i++){var o=r[i],s=n[o];s=void 0!==s&&null!==s?s:Xo[o],Uo[o]=s}Uo.verbose&&console.log("MarchingSquaresJS-isoContours: computing isocontour for "+e);var a=function(t){var e=[],n=0;t.rows,t.cols;return t.cells.forEach(function(r,i){r.forEach(function(r,o){if(void 0!==r&&!function(t){return 5===t.cval||10===t.cval}(r)&&!tt(r)){var s=function(t,e,n){var r,i,o,s=t.length,a=[],u=[0,0,1,1,0,0,0,0,-1,0,1,1,-1,0,-1,0],c=[0,-1,0,0,1,1,1,1,0,-1,0,0,0,-1,0,0],h=["none","bottom","right","right","top","top","top","top","left","bottom","right","right","left","bottom","left","none"],l=(t[e][n],t[e][n]),p=l.cval,f=nt(l,o=["none","left","bottom","left","right","none","bottom","left","top","top","none","top","right","right","bottom","none"][p]);a.push([n+f[0],e+f[1]]),f=nt(l,o=h[p]),a.push([n+f[0],e+f[1]]),et(l);for(var g=n+u[p],d=e+c[p],y=p;g>=0&&d>=0&&d<s&&(g!=n||d!=e)&&void 0!==(l=t[d][g]);){if(0===(p=l.cval)||15===p)return{path:a,info:"mergeable"};o=h[p],r=u[p],i=c[p],5!==p&&10!==p||(5===p?l.flipped?-1===c[y]?(o="left",r=-1,i=0):(o="right",r=1,i=0):-1===u[y]&&(o="bottom",r=0,i=-1):10===p&&(l.flipped?-1===u[y]?(o="top",r=0,i=1):(o="bottom",r=0,i=-1):1===c[y]&&(o="left",r=-1,i=0))),f=nt(l,o),a.push([g+f[0],d+f[1]]),et(l),g+=r,d+=i,y=p}return{path:a,info:"closed"}}(t.cells,i,o),a=!1;if("mergeable"===s.info)for(var u=s.path[s.path.length-1][0],c=s.path[s.path.length-1][1],h=n-1;h>=0;h--)if(Math.abs(e[h][0][0]-u)<=1e-7&&Math.abs(e[h][0][1]-c)<=1e-7){for(var l=s.path.length-2;l>=0;--l)e[h].unshift(s.path[l]);a=!0;break}a||(e[n++]=s.path)}})}),e}(function(t,e){for(var n=t.length-1,r=t[0].length-1,i={rows:n,cols:r,cells:[]},o=0;o<n;++o){i.cells[o]=[];for(var s=0;s<r;++s){var a=0,u=t[o+1][s],c=t[o+1][s+1],h=t[o][s+1],l=t[o][s];if(!(isNaN(u)||isNaN(c)||isNaN(h)||isNaN(l))){a|=u>=e?8:0,a|=c>=e?4:0,a|=h>=e?2:0;var p=!1;if(5===(a|=l>=e?1:0)||10===a){var f=(u+c+h+l)/4;5===a&&f<e?(a=10,p=!0):10===a&&f<e&&(a=5,p=!0)}if(0!==a&&15!==a){var g,d,y,_;g=d=y=_=.5,1===a?(y=1-$(e,u,l),d=1-$(e,h,l)):2===a?(d=$(e,l,h),_=1-$(e,c,h)):3===a?(y=1-$(e,u,l),_=1-$(e,c,h)):4===a?(g=$(e,u,c),_=$(e,h,c)):5===a?(g=$(e,u,c),_=$(e,h,c),d=1-$(e,h,l),y=1-$(e,u,l)):6===a?(d=$(e,l,h),g=$(e,u,c)):7===a?(y=1-$(e,u,l),g=$(e,u,c)):8===a?(y=$(e,l,u),g=1-$(e,c,u)):9===a?(d=1-$(e,h,l),g=1-$(e,c,u)):10===a?(g=1-$(e,c,u),_=1-$(e,c,h),d=$(e,l,h),y=$(e,l,u)):11===a?(g=1-$(e,c,u),_=1-$(e,c,h)):12===a?(y=$(e,l,u),_=$(e,h,c)):13===a?(d=1-$(e,h,l),_=$(e,h,c)):14===a?(y=$(e,l,u),d=$(e,l,h)):console.log("MarchingSquaresJS-isoContours: Illegal cval detected: "+a),i.cells[o][s]={cval:a,flipped:p,top:g,right:_,bottom:d,left:y}}}}}return i}(t,e));return"function"==typeof Uo.successCallback&&Uo.successCallback(a),a}function $(t,e,n){return(t-e)/(n-e)}function tt(t){return 0===t.cval||15===t.cval}function et(t){tt(t)||5===t.cval||10===t.cval||(t.cval=15)}function nt(t,e){return"top"===e?[t.top,1]:"bottom"===e?[t.bottom,0]:"right"===e?[1,t.right]:"left"===e?[0,t.left]:void 0}function rt(t,e){if(e=e||{},!I(e))throw new Error("options is invalid");var n=e.zProperty||"elevation",r=e.flip,i=e.flags;W(t,"Point","input must contain Points");for(var o=function(t,e){var n={};O(t,function(t){var e=U(t)[1];n[e]||(n[e]=[]),n[e].push(t)});return Object.keys(n).map(function(t){var e=n[t],r=e.sort(function(t,e){return U(t)[0]-U(e)[0]});return r}).sort(function(t,n){return e?U(t[0])[1]-U(n[0])[1]:U(n[0])[1]-U(t[0])[1]})}(t,r),s=[],a=0;a<o.length;a++){for(var u=o[a],c=[],h=0;h<u.length;h++){var l=u[h];l.properties[n]?c.push(l.properties[n]):c.push(0),!0===i&&(l.properties.matrixPosition=[a,h])}s.push(c)}return s}function it(t,e,n,r,i){for(n=n||0,r=r||t.length-1,i=i||function(t,e){return t<e?-1:t>e?1:0};r>n;){if(r-n>600){var o=r-n+1,s=e-n+1,a=Math.log(o),u=.5*Math.exp(2*a/3),c=.5*Math.sqrt(a*u*(o-u)/o)*(s-o/2<0?-1:1);it(t,e,Math.max(n,Math.floor(e-s*u/o+c)),Math.min(r,Math.floor(e+(o-s)*u/o+c)),i)}var h=t[e],l=n,p=r;for(ot(t,n,e),i(t[r],h)>0&&ot(t,n,r);l<p;){for(ot(t,l,p),l++,p--;i(t[l],h)<0;)l++;for(;i(t[p],h)>0;)p--}0===i(t[n],h)?ot(t,n,p):ot(t,++p,r),p<=e&&(n=p+1),e<=p&&(r=p-1)}}function ot(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function st(t,e){if(!(this instanceof st))return new st(t,e);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&this._initFormat(e),this.clear()}function at(t,e){ut(t,0,t.children.length,e,t)}function ut(t,e,n,r,i){i||(i=yt(null)),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(var o,s=e;s<n;s++)o=t.children[s],ct(i,t.leaf?r(o):o);return i}function ct(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function ht(t,e){return t.minX-e.minX}function lt(t,e){return t.minY-e.minY}function pt(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function ft(t){return t.maxX-t.minX+(t.maxY-t.minY)}function gt(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function dt(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function yt(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function _t(t,e,n,r,i){for(var o,s=[e,n];s.length;)(n=s.pop())-(e=s.pop())<=r||(o=e+Math.ceil((n-e)/r/2)*r,Yo(t,o,e,n,i),s.push(e,o,o,n))}function mt(t,e){return e={exports:{}},t(e,e.exports),e.exports}function vt(t,e){if(!(this instanceof vt))return new vt(t,e);if(this.data=t||[],this.length=this.data.length,this.compare=e||function(t,e){return t<e?-1:t>e?1:0},this.length>0)for(var n=(this.length>>1)-1;n>=0;n--)this._down(n)}function xt(t,e,n){e=Math.max(0,void 0===e?2:e),n=n||0;for(var r,i=function(t){for(var e=t[0],n=t[0],r=t[0],i=t[0],o=0;o<t.length;o++){var s=t[o];s[0]<e[0]&&(e=s),s[0]>r[0]&&(r=s),s[1]<n[1]&&(n=s),s[1]>i[1]&&(i=s)}var a=[e,n,r,i],u=a.slice();for(o=0;o<t.length;o++)is(t[o],a)||u.push(t[o]);var c=ts(u),h=[];for(o=0;o<c.length;o++)h.push(u[c[o]]);return h}(t),o=Vo(16,["[0]","[1]","[0]","[1]"]).load(t),s=[],a=0;a<i.length;a++){var u=i[a];o.remove(u),r=Nt(u,r),s.push(r)}var c=Vo(16);for(a=0;a<s.length;a++)c.insert(It(s[a]));for(var h=e*e,l=n*n;s.length;){var p=s.shift(),f=p.p,g=p.next.p,d=Ct(f,g);if(!(d<l)){var y=d/h;(u=function(t,e,n,r,i,o,s){var a=new ns(null,Et),u=t.data;for(;u;){for(var c=0;c<u.children.length;c++){var h=u.children[c],l=u.leaf?St(h,n,r):function(t,e,n){if(wt(t,n)||wt(e,n))return 0;var r=Mt(t[0],t[1],e[0],e[1],n.minX,n.minY,n.maxX,n.minY);if(0===r)return 0;var i=Mt(t[0],t[1],e[0],e[1],n.minX,n.minY,n.minX,n.maxY);if(0===i)return 0;var o=Mt(t[0],t[1],e[0],e[1],n.maxX,n.minY,n.maxX,n.maxY);if(0===o)return 0;var s=Mt(t[0],t[1],e[0],e[1],n.minX,n.maxY,n.maxX,n.maxY);return 0===s?0:Math.min(r,i,o,s)}(n,r,h);l>o||a.push({node:h,dist:l})}for(;a.length&&!a.peek().node.children;){var p=a.pop(),f=p.node,g=St(f,e,n),d=St(f,r,i);if(p.dist<g&&p.dist<d&&bt(n,f,s)&&bt(r,f,s))return f}(u=a.pop())&&(u=u.node)}return null}(o,p.prev.p,f,g,p.next.next.p,y,c))&&Math.min(Ct(u,f),Ct(u,g))<=y&&(s.push(p),s.push(Nt(u,p)),o.remove(u),c.remove(p),c.insert(It(p)),c.insert(It(p.next)))}}p=r;var _=[];do{_.push(p.p),p=p.next}while(p!==r);return _.push(p.p),_}function Et(t,e){return t.dist-e.dist}function wt(t,e){return t[0]>=e.minX&&t[0]<=e.maxX&&t[1]>=e.minY&&t[1]<=e.maxY}function bt(t,e,n){for(var r=Math.min(t[0],e[0]),i=Math.min(t[1],e[1]),o=Math.max(t[0],e[0]),s=Math.max(t[1],e[1]),a=n.search({minX:r,minY:i,maxX:o,maxY:s}),u=0;u<a.length;u++)if(function(t,e,n,r){return t!==r&&e!==n&&os(t,e,n)>0!=os(t,e,r)>0&&os(n,r,t)>0!=os(n,r,e)>0}(a[u].p,a[u].next.p,t,e))return!1;return!0}function It(t){var e=t.p,n=t.next.p;return t.minX=Math.min(e[0],n[0]),t.minY=Math.min(e[1],n[1]),t.maxX=Math.max(e[0],n[0]),t.maxY=Math.max(e[1],n[1]),t}function Nt(t,e){var n={p:t,prev:null,next:null,minX:0,minY:0,maxX:0,maxY:0};return e?(n.next=e.next,n.prev=e,e.next.prev=n,e.next=n):(n.prev=n,n.next=n),n}function Ct(t,e){var n=t[0]-e[0],r=t[1]-e[1];return n*n+r*r}function St(t,e,n){var r=e[0],i=e[1],o=n[0]-r,s=n[1]-i;if(0!==o||0!==s){var a=((t[0]-r)*o+(t[1]-i)*s)/(o*o+s*s);a>1?(r=n[0],i=n[1]):a>0&&(r+=o*a,i+=s*a)}return o=t[0]-r,s=t[1]-i,o*o+s*s}function Mt(t,e,n,r,i,o,s,a){var u,c,h,l,p=n-t,f=r-e,g=s-i,d=a-o,y=t-i,_=e-o,m=p*p+f*f,v=p*g+f*d,x=g*g+d*d,E=p*y+f*_,w=g*y+d*_,b=m*x-v*v,I=b,N=b;0===b?(c=0,I=1,l=w,N=x):(l=m*w-v*E,(c=v*w-x*E)<0?(c=0,l=w,N=x):c>I&&(c=I,l=w+v,N=x)),l<0?(l=0,-E<0?c=0:-E>m?c=I:(c=-E,I=m)):l>N&&(l=N,-E+v<0?c=0:-E+v>m?c=I:(c=-E+v,I=m)),u=0===c?0:c/I;var C=(1-(h=0===l?0:l/N))*i+h*s-((1-u)*t+u*n),S=(1-h)*o+h*a-((1-u)*e+u*r);return C*C+S*S}function Lt(t,e){if(e=e||{},!I(e))throw new Error("options is invalid");var n=e.concavity||1/0,r=[];if(S(t,function(t){r.push([t[0],t[1]])}),!r.length)return null;var i=ss(r,n);return i.length>3?o([i]):null}function Pt(t,e,n){if("object"!=typeof(n=n||{}))throw new Error("options is invalid");var r=n.ignoreBoundary;if(!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");var i=X(t),o=U(e),s=e.geometry?e.geometry.type:e.type,a=e.bbox;if(a&&!1===function(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}(i,a))return!1;"Polygon"===s&&(o=[o]);for(var u=0,c=!1;u<o.length&&!c;u++)if(Ot(i,o[u][0],r)){for(var h=!1,l=1;l<o[u].length&&!h;)Ot(i,o[u][l],!r)&&(h=!0),l++;h||(c=!0)}return c}function Ot(t,e,n){var r=!1;e[0][0]===e[e.length-1][0]&&e[0][1]===e[e.length-1][1]&&(e=e.slice(0,e.length-1));for(var i=0,o=e.length-1;i<e.length;o=i++){var s=e[i][0],a=e[i][1],u=e[o][0],c=e[o][1];if(t[1]*(s-u)+a*(u-t[0])+c*(t[0]-s)==0&&(s-t[0])*(u-t[0])<=0&&(a-t[1])*(c-t[1])<=0)return!n;a>t[1]!=c>t[1]&&t[0]<(u-s)*(t[1]-a)/(c-a)+s&&(r=!r)}return r}function Rt(t,e){var n=[];return A(e,function(e){O(t,function(t){Pt(t,e)&&n.push(t)})}),c(n)}function Tt(t,e){if("FeatureCollection"!==t.type)throw new Error("points must be a FeatureCollection");var n=!1;return c(function(t){if(t.length<3)return[];t.sort(Dt);var e,n,r,i,o,s,a=t.length-1,u=t[a].x,c=t[0].x,h=t[a].y,l=h;for(;a--;)t[a].y<h&&(h=t[a].y),t[a].y>l&&(l=t[a].y);var p,f=c-u,g=l-h,d=f>g?f:g,y=.5*(c+u),_=.5*(l+h),m=[new At({x:y-20*d,y:_-d,__sentinel:!0},{x:y,y:_+20*d,__sentinel:!0},{x:y+20*d,y:_-d,__sentinel:!0})],v=[],x=[];a=t.length;for(;a--;){for(x.length=0,p=m.length;p--;)(f=t[a].x-m[p].x)>0&&f*f>m[p].r?(v.push(m[p]),m.splice(p,1)):(g=t[a].y-m[p].y,f*f+g*g>m[p].r||(x.push(m[p].a,m[p].b,m[p].b,m[p].c,m[p].c,m[p].a),m.splice(p,1)));for(Ft(x),p=x.length;p;)n=x[--p],e=x[--p],r=t[a],i=n.x-e.x,o=n.y-e.y,s=2*(i*(r.y-n.y)-o*(r.x-n.x)),Math.abs(s)>1e-12&&m.push(new At(e,n,r))}Array.prototype.push.apply(v,m),a=v.length;for(;a--;)(v[a].a.__sentinel||v[a].b.__sentinel||v[a].c.__sentinel)&&v.splice(a,1);return v}(t.features.map(function(t){var r={x:t.geometry.coordinates[0],y:t.geometry.coordinates[1]};return e?r.z=t.properties[e]:3===t.geometry.coordinates.length&&(n=!0,r.z=t.geometry.coordinates[2]),r})).map(function(t){var e=[t.a.x,t.a.y],r=[t.b.x,t.b.y],i=[t.c.x,t.c.y],s={};return n?(e.push(t.a.z),r.push(t.b.z),i.push(t.c.z)):s={a:t.a.z,b:t.b.z,c:t.c.z},o([[e,r,i,e]],s)}))}function At(t,e,n){this.a=t,this.b=e,this.c=n;var r,i,o=e.x-t.x,s=e.y-t.y,a=n.x-t.x,u=n.y-t.y,c=o*(t.x+e.x)+s*(t.y+e.y),h=a*(t.x+n.x)+u*(t.y+n.y),l=2*(o*(n.y-e.y)-s*(n.x-e.x));this.x=(u*c-s*h)/l,this.y=(o*h-a*c)/l,r=this.x-t.x,i=this.y-t.y,this.r=r*r+i*i}function Dt(t,e){return e.x-t.x}function Ft(t){var e,n,r,i,o,s=t.length;t:for(;s;)for(n=t[--s],e=t[--s],r=s;r;)if(o=t[--r],i=t[--r],e===i&&n===o||e===o&&n===i){t.splice(s,2),t.splice(r,2),s-=2;continue t}}function qt(t,e,n){if(n=n||{},!I(n))throw new Error("options is invalid");var r=n.units,i=X(t),o=X(e),s=x(o[1]-i[1]),a=x(o[0]-i[0]),u=x(i[1]),c=x(o[1]),h=Math.pow(Math.sin(s/2),2)+Math.pow(Math.sin(a/2),2)*Math.cos(u)*Math.cos(c);return d(2*Math.atan2(Math.sqrt(h),Math.sqrt(1-h)),r)}function Gt(t){if(!t)throw new Error("geojson is required");switch(t.type){case"Feature":return Bt(t);case"FeatureCollection":return function(t){var e={type:"FeatureCollection"};return Object.keys(t).forEach(function(n){switch(n){case"type":case"features":return;default:e[n]=t[n]}}),e.features=t.features.map(function(t){return Bt(t)}),e}(t);case"Point":case"LineString":case"Polygon":case"MultiPoint":case"MultiLineString":case"MultiPolygon":case"GeometryCollection":return zt(t);default:throw new Error("unknown GeoJSON type")}}function Bt(t){var e={type:"Feature"};return Object.keys(t).forEach(function(n){switch(n){case"type":case"properties":case"geometry":return;default:e[n]=t[n]}}),e.properties=kt(t.properties),e.geometry=zt(t.geometry),e}function kt(t){var e={};return t?(Object.keys(t).forEach(function(n){var r=t[n];"object"==typeof r?null===r?e[n]=null:r.length?e[n]=r.map(function(t){return t}):e[n]=kt(r):e[n]=r}),e):e}function zt(t){var e={type:t.type};return t.bbox&&(e.bbox=t.bbox),"GeometryCollection"===t.type?(e.geometries=t.geometries.map(function(t){return zt(t)}),e):(e.coordinates=jt(t.coordinates),e)}function jt(t){return"object"!=typeof t[0]?t.slice():t.map(function(t){return jt(t)})}function Xt(t,e){function n(t,e){e.length&&e.pop();for(var n=c[t<0?~t:t],r=0,i=n.length;r<i;++r)e.push(u(n[r],r));t<0&&hs(e,i)}function r(t){return u(t)}function i(t){for(var e=[],r=0,i=t.length;r<i;++r)n(t[r],e);return e.length<2&&e.push(e[0]),e}function o(t){for(var e=i(t);e.length<4;)e.push(e[0]);return e}function s(t){return t.map(o)}function a(t){var e,n=t.type;switch(n){case"GeometryCollection":return{type:n,geometries:t.geometries.map(a)};case"Point":e=r(t.coordinates);break;case"MultiPoint":e=t.coordinates.map(r);break;case"LineString":e=i(t.arcs);break;case"MultiLineString":e=t.arcs.map(i);break;case"Polygon":e=s(t.arcs);break;case"MultiPolygon":e=t.arcs.map(s);break;default:return null}return{type:n,coordinates:e}}var u=cs(t.transform),c=t.arcs;return a(e)}function Ut(t,e){function n(t){switch(t.type){case"GeometryCollection":t.geometries.forEach(n);break;case"Polygon":r(t.arcs);break;case"MultiPolygon":t.arcs.forEach(r)}}function r(t){t.forEach(function(e){e.forEach(function(e){(o[e=e<0?~e:e]||(o[e]=[])).push(t)})}),s.push(t)}function i(e){return function(t){for(var e,n=-1,r=t.length,i=t[r-1],o=0;++n<r;)e=i,i=t[n],o+=e[0]*i[1]-e[1]*i[0];return Math.abs(o)}(Xt(t,{type:"Polygon",arcs:[e]}).coordinates[0])}var o={},s=[],a=[];return e.forEach(n),s.forEach(function(t){if(!t._){var e=[],n=[t];for(t._=1,a.push(e);t=n.pop();)e.push(t),t.forEach(function(t){t.forEach(function(t){o[t<0?~t:t].forEach(function(t){t._||(t._=1,n.push(t))})})})}}),s.forEach(function(t){delete t._}),{type:"MultiPolygon",arcs:a.map(function(e){var n,r=[];if(e.forEach(function(t){t.forEach(function(t){t.forEach(function(t){o[t<0?~t:t].length<2&&r.push(t)})})}),r=ls(t,r),(n=r.length)>1)for(var s,a,u=1,c=i(r[0]);u<n;++u)(s=i(r[u]))>c&&(a=r[0],r[0]=r[u],r[u]=a,c=s);return r})}}function Yt(t,e,n){for(var r,i=e+(n---e>>1);e<i;++e,--n)r=t[e],t[e]=t[n],t[n]=r}function Vt(t){return null==t?{type:null}:("FeatureCollection"===t.type?function(t){var e={type:"GeometryCollection",geometries:t.features.map(Ht)};null!=t.bbox&&(e.bbox=t.bbox);return e}:"Feature"===t.type?Ht:Wt)(t)}function Ht(t){var e,n=Wt(t.geometry);null!=t.id&&(n.id=t.id),null!=t.bbox&&(n.bbox=t.bbox);for(e in t.properties){n.properties=t.properties;break}return n}function Wt(t){if(null==t)return{type:null};var e="GeometryCollection"===t.type?{type:"GeometryCollection",geometries:t.geometries.map(Wt)}:"Point"===t.type||"MultiPoint"===t.type?{type:t.type,coordinates:t.coordinates}:{type:t.type,arcs:t.coordinates};return null!=t.bbox&&(e.bbox=t.bbox),e}function Jt(t){var e,n=t[0],r=t[1];return r<n&&(e=n,n=r,r=e),n+31*r}function Zt(t,e){var n,r=t[0],i=t[1],o=e[0],s=e[1];return i<r&&(n=r,r=i,i=n),s<o&&(n=o,o=s,s=n),r===o&&i===s}function Kt(t,e){if(e=e||{},!I(e))throw new Error("options is invalid");var n=e.mutate;if("FeatureCollection"!==K(t))throw new Error("geojson must be a FeatureCollection");if(!t.features.length)throw new Error("geojson is empty");!1!==n&&void 0!==n||(t=Gt(t));var r=[],i=z(t,function(t,e){var n=function(t,e){var n,r=t.geometry.coordinates,i=e.geometry.coordinates,o=Qt(r[0]),s=Qt(r[r.length-1]),u=Qt(i[0]),c=Qt(i[i.length-1]);if(o===c)n=i.concat(r.slice(1));else if(u===s)n=r.concat(i.slice(1));else if(o===u)n=r.slice(1).reverse().concat(i);else{if(s!==c)return null;n=r.concat(i.reverse().slice(1))}return a(n)}(t,e);return n||(r.push(t),e)});return i&&r.push(i),r.length?1===r.length?r[0]:h(r.map(function(t){return t.coordinates})):null}function Qt(t){return t[0].toString()+","+t[1].toString()}function $t(t,e){if(e=e||{},!I(e))throw new Error("options is invalid");var n=e.mutate;if("FeatureCollection"!==K(t))throw new Error("geojson must be a FeatureCollection");if(!t.features.length)throw new Error("geojson is empty");!1!==n&&void 0!==n||(t=Gt(t));var r=function(t){var e={};F(t,function(t){e[t.geometry.type]=!0});var n=Object.keys(e);return 1===n.length?n[0]:null}(t);if(!r)throw new Error("geojson must be homogenous");switch(r){case"LineString":return Kt(t,e);case"Polygon":return function(t,e){if(e=e||{},!I(e))throw new Error("options is invalid");var n=e.mutate;if("FeatureCollection"!==K(t))throw new Error("geojson must be a FeatureCollection");if(!t.features.length)throw new Error("geojson is empty");!1!==n&&void 0!==n||(t=Gt(t));var r=[];F(t,function(t){r.push(t.geometry)});var i=ws({geoms:f(r).geometry});return ps(i,i.objects.geoms.geometries)}(t,e);default:throw new Error(r+" is not supported")}}function te(t,n){var r="object"==typeof n?n.mutate:n;if(!t)throw new Error("geojson is required");var i=K(t),o=[];switch(i){case"LineString":o=ee(t);break;case"MultiLineString":case"Polygon":U(t).forEach(function(t){o.push(ee(t))});break;case"MultiPolygon":U(t).forEach(function(t){var e=[];t.forEach(function(t){e.push(ee(t))}),o.push(e)});break;case"Point":return t;case"MultiPoint":var s={};U(t).forEach(function(t){var e=t.join("-");s.hasOwnProperty(e)||(o.push(t),s[e]=!0)});break;default:throw new Error(i+" geometry not supported")}return t.coordinates?!0===r?(t.coordinates=o,t):{type:i,coordinates:o}:!0===r?(t.geometry.coordinates=o,t):e({type:i,coordinates:o},t.properties,t.bbox,t.id)}function ee(t){var e=U(t);if(2===e.length&&!function(t,e){return t[0]===e[0]&&t[1]===e[1]}(e[0],e[1]))return e;var n,r,i,o=[],s=e.length-1;o.push(e[0]);for(var a=1;a<s;a++)n=e[a-1],r=e[a],function(t,e,n){var r=n[0],i=n[1],o=t[0],s=t[1],a=e[0],u=e[1],c=a-o,h=u-s;return(r-o)*h-(i-s)*c==0&&(Math.abs(c)>=Math.abs(h)?c>0?o<=r&&r<=a:a<=r&&r<=o:h>0?s<=i&&i<=u:u<=i&&i<=s)}(n,i=e[a+1],r)||o.push(r);return o.push(i),o}function ne(t,e){var n=t.x-e.x,r=t.y-e.y;return n*n+r*r}function re(t,e,n){var r=e.x,i=e.y,o=n.x-r,s=n.y-i;if(0!==o||0!==s){var a=((t.x-r)*o+(t.y-i)*s)/(o*o+s*s);a>1?(r=n.x,i=n.y):a>0&&(r+=o*a,i+=s*a)}return o=t.x-r,s=t.y-i,o*o+s*s}function ie(t,e,n,r,i){for(var o,s=r,a=e+1;a<n;a++){var u=re(t[a],t[e],t[n]);u>s&&(o=a,s=u)}s>r&&(o-e>1&&ie(t,e,o,r,i),i.push(t[o]),n-o>1&&ie(t,o,n,r,i))}function oe(t,e,n){if(t.length<=2)return t;var r=void 0!==e?e*e:1;return t=n?t:function(t,e){for(var n,r=t[0],i=[r],o=1,s=t.length;o<s;o++)ne(n=t[o],r)>e&&(i.push(n),r=n);return r!==n&&i.push(n),i}(t,r),t=function(t,e){var n=t.length-1,r=[t[0]];return ie(t,0,n,e,r),r.push(t[n]),r}(t,r)}function se(t,e,n){return oe(t.map(function(t){return{x:t[0],y:t[1],z:t[2]}}),e,n).map(function(t){return t.z?[t.x,t.y,t.z]:[t.x,t.y]})}function ae(t,e,n){return t.map(function(t){var r=t.map(function(t){return{x:t[0],y:t[1]}});if(r.length<4)throw new Error("invalid polygon");for(var i=oe(r,e,n).map(function(t){return[t.x,t.y]});!function(t){return!(t.length<3||3===t.length&&t[2][0]===t[0][0]&&t[2][1]===t[0][1])}(i);)i=oe(r,e-=.01*e,n).map(function(t){return[t.x,t.y]});return i[i.length-1][0]===i[0][0]&&i[i.length-1][1]===i[0][1]||i.push(i[0]),i})}function ue(t,e){if(e=e||{},!I(e))throw new Error("options is invalid");var n=e.resolution||1e4,r=e.sharpness||.85;if(!t)throw new Error("line is required");if(!b(n))throw new Error("resolution must be an number");if(!b(r))throw new Error("sharpness must be an number");for(var i=[],o=new bs({points:J(t).coordinates.map(function(t){return{x:t[0],y:t[1]}}),duration:n,sharpness:r}),s=0;s<o.duration;s+=10){var u=o.pos(s);Math.floor(s/100)%2==0&&i.push([u.x,u.y])}return a(i,t.properties)}function ce(t){N(t);var e=Number(t[0]),n=Number(t[1]),r=Number(t[2]),i=Number(t[3]);if(6===t.length)throw new Error("@turf/bbox-polygon does not support BBox with 6 positions");var s=[e,n];return o([[s,[r,n],[r,i],[e,i],s]])}function he(t){return ce(j(t))}function le(t){var e=t[0],n=t[1],r=t[2],i=t[3];if(qt(t.slice(0,2),[r,n])>=qt(t.slice(0,2),[e,i])){var o=(n+i)/2;return[e,o-(r-e)/2,r,o+(r-e)/2]}var s=(e+r)/2;return[s-(i-n)/2,n,s+(i-n)/2,i]}function pe(t,e,n,i){if(i=i||{},!I(i))throw new Error("options is invalid");var o=i.units,s=i.properties,a=X(t),u=x(a[0]),c=x(a[1]),h=x(n),l=y(e,o),p=Math.asin(Math.sin(c)*Math.cos(l)+Math.cos(c)*Math.sin(l)*Math.cos(h));return r([v(u+Math.atan2(Math.sin(h)*Math.sin(l)*Math.cos(c),Math.cos(l)-Math.sin(c)*Math.sin(p))),v(p)],s)}function fe(t,e,n){var r=(n=n||{}).steps||64,i=n.properties;if(!t)throw new Error("center is required");if(!e)throw new Error("radius is required");if("object"!=typeof n)throw new Error("options must be an object");if("number"!=typeof r)throw new Error("steps must be a number");r=r||64,i=i||t.properties||{};for(var s=[],a=0;a<r;a++)s.push(pe(t,e,-360*a/r,n).geometry.coordinates);return s.push(s[0]),o([s],i)}function ge(t,e,n){if(n=n||{},!I(n))throw new Error("options is invalid");if(!0===n.final)return function(t,e){var n=ge(e,t);return n=(n+180)%360}(t,e);var r=X(t),i=X(e),o=x(r[0]),s=x(i[0]),a=x(r[1]),u=x(i[1]),c=Math.sin(s-o)*Math.cos(u),h=Math.cos(a)*Math.sin(u)-Math.sin(a)*Math.cos(u)*Math.cos(s-o);return v(Math.atan2(c,h))}function de(t,e){if(e=e||{},!I(e))throw new Error("options is invalid");var n=e.properties;if(!t)throw new Error("geojson is required");var i=j(t);return r([(i[0]+i[2])/2,(i[1]+i[3])/2],n)}function ye(t,e){var n=0,i=0,o=0;return S(t,function(t){n+=t[0],i+=t[1],o++},!0),r([n/o,i/o],e)}function _e(t,e){switch(K(t)){case"Point":return t;case"Polygon":var n=[];S(t,function(t){n.push(t)});var i,o,s,a,u,c,h,l,p=ye(t,e),f=p.geometry.coordinates,g=0,d=0,y=0,_=n.map(function(t){return[t[0]-f[0],t[1]-f[1]]});for(i=0;i<n.length-1;i++)a=(o=_[i])[0],c=o[1],u=(s=_[i+1])[0],y+=l=a*(h=s[1])-u*c,g+=(a+u)*l,d+=(c+h)*l;if(0===y)return p;var m=1/(6*(.5*y));return r([f[0]+m*g,f[1]+m*d],e);default:var v=Lt(t);return v?_e(v,e):ye(t,e)}}function me(t){var e=[];return"FeatureCollection"===t.type?O(t,function(t){S(t,function(n){e.push(r(n,t.properties))})}):S(t,function(n){e.push(r(n,t.properties))}),c(e)}function ve(t,e,n){n=n||2;var r=e&&e.length,i=r?e[0]*n:t.length,o=xe(t,0,i,n,!0),s=[];if(!o)return s;var a,u,c,h,l,p,f;if(r&&(o=function(t,e,n,r){var i,o,s,a,u,c=[];for(i=0,o=e.length;i<o;i++)s=e[i]*r,a=i<o-1?e[i+1]*r:t.length,(u=xe(t,s,a,r,!1))===u.next&&(u.steiner=!0),c.push(function(t){var e=t,n=t;do{e.x<n.x&&(n=e),e=e.next}while(e!==t);return n}(u));for(c.sort(be),i=0;i<c.length;i++)!function(t,e){if(e=function(t,e){var n,r=e,i=t.x,o=t.y,s=-1/0;do{if(o<=r.y&&o>=r.next.y&&r.next.y!==r.y){var a=r.x+(o-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(a<=i&&a>s){if(s=a,a===i){if(o===r.y)return r;if(o===r.next.y)return r.next}n=r.x<r.next.x?r:r.next}}r=r.next}while(r!==e);if(!n)return null;if(i===s)return n.prev;var u,c=n,h=n.x,l=n.y,p=1/0;for(r=n.next;r!==c;)i>=r.x&&r.x>=h&&i!==r.x&&Ne(o<l?i:s,o,h,l,o<l?s:i,o,r.x,r.y)&&((u=Math.abs(o-r.y)/(i-r.x))<p||u===p&&r.x>n.x)&&Le(r,t)&&(n=r,p=u),r=r.next;return n}(t,e)){var n=Pe(e,t);Ee(n,n.next)}}(c[i],n),n=Ee(n,n.next);return n}(t,e,o,n)),t.length>80*n){a=c=t[0],u=h=t[1];for(var g=n;g<i;g+=n)l=t[g],p=t[g+1],l<a&&(a=l),p<u&&(u=p),l>c&&(c=l),p>h&&(h=p);f=0!==(f=Math.max(c-a,h-u))?1/f:0}return we(o,s,n,a,u,f),s}function xe(t,e,n,r,i){var o,s;if(i===Ae(t,e,n,r)>0)for(o=e;o<n;o+=r)s=Oe(o,t[o],t[o+1],s);else for(o=n-r;o>=e;o-=r)s=Oe(o,t[o],t[o+1],s);return s&&Se(s,s.next)&&(Re(s),s=s.next),s}function Ee(t,e){if(!t)return t;e||(e=t);var n,r=t;do{if(n=!1,r.steiner||!Se(r,r.next)&&0!==Ce(r.prev,r,r.next))r=r.next;else{if(Re(r),(r=e=r.prev)===r.next)break;n=!0}}while(n||r!==e);return e}function we(t,e,n,r,i,o,s){if(t){!s&&o&&function(t,e,n,r){var i=t;do{null===i.z&&(i.z=Ie(i.x,i.y,e,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==t);i.prevZ.nextZ=null,i.prevZ=null,function(t){var e,n,r,i,o,s,a,u,c=1;do{for(n=t,t=null,o=null,s=0;n;){for(s++,r=n,a=0,e=0;e<c&&(a++,r=r.nextZ);e++);for(u=c;a>0||u>0&&r;)0!==a&&(0===u||!r||n.z<=r.z)?(i=n,n=n.nextZ,a--):(i=r,r=r.nextZ,u--),o?o.nextZ=i:t=i,i.prevZ=o,o=i;n=r}o.nextZ=null,c*=2}while(s>1)}(i)}(t,r,i,o);for(var a,u,c=t;t.prev!==t.next;)if(a=t.prev,u=t.next,o?function(t,e,n,r){var i=t.prev,o=t,s=t.next;if(Ce(i,o,s)>=0)return!1;var a=i.x<o.x?i.x<s.x?i.x:s.x:o.x<s.x?o.x:s.x,u=i.y<o.y?i.y<s.y?i.y:s.y:o.y<s.y?o.y:s.y,c=i.x>o.x?i.x>s.x?i.x:s.x:o.x>s.x?o.x:s.x,h=i.y>o.y?i.y>s.y?i.y:s.y:o.y>s.y?o.y:s.y,l=Ie(a,u,e,n,r),p=Ie(c,h,e,n,r),f=t.nextZ;for(;f&&f.z<=p;){if(f!==t.prev&&f!==t.next&&Ne(i.x,i.y,o.x,o.y,s.x,s.y,f.x,f.y)&&Ce(f.prev,f,f.next)>=0)return!1;f=f.nextZ}f=t.prevZ;for(;f&&f.z>=l;){if(f!==t.prev&&f!==t.next&&Ne(i.x,i.y,o.x,o.y,s.x,s.y,f.x,f.y)&&Ce(f.prev,f,f.next)>=0)return!1;f=f.prevZ}return!0}(t,r,i,o):function(t){var e=t.prev,n=t,r=t.next;if(Ce(e,n,r)>=0)return!1;var i=t.next.next;for(;i!==t.prev;){if(Ne(e.x,e.y,n.x,n.y,r.x,r.y,i.x,i.y)&&Ce(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}(t))e.push(a.i/n),e.push(t.i/n),e.push(u.i/n),Re(t),t=u.next,c=u.next;else if((t=u)===c){s?1===s?we(t=function(t,e,n){var r=t;do{var i=r.prev,o=r.next.next;!Se(i,o)&&Me(i,r,r.next,o)&&Le(i,o)&&Le(o,i)&&(e.push(i.i/n),e.push(r.i/n),e.push(o.i/n),Re(r),Re(r.next),r=t=o),r=r.next}while(r!==t);return r}(t,e,n),e,n,r,i,o,2):2===s&&function(t,e,n,r,i,o){var s=t;do{for(var a=s.next.next;a!==s.prev;){if(s.i!==a.i&&function(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){var n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Me(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}(t,e)&&Le(t,e)&&Le(e,t)&&function(t,e){var n=t,r=!1,i=(t.x+e.x)/2,o=(t.y+e.y)/2;do{n.y>o!=n.next.y>o&&n.next.y!==n.y&&i<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==t);return r}(t,e)}(s,a)){var u=Pe(s,a);return s=Ee(s,s.next),u=Ee(u,u.next),we(s,e,n,r,i,o),void we(u,e,n,r,i,o)}a=a.next}s=s.next}while(s!==t)}(t,e,n,r,i,o):we(Ee(t),e,n,r,i,o,1);break}}}function be(t,e){return t.x-e.x}function Ie(t,e,n,r,i){return t=32767*(t-n)*i,e=32767*(e-r)*i,t=16711935&(t|t<<8),t=252645135&(t|t<<4),t=858993459&(t|t<<2),t=1431655765&(t|t<<1),e=16711935&(e|e<<8),e=252645135&(e|e<<4),e=858993459&(e|e<<2),e=1431655765&(e|e<<1),t|e<<1}function Ne(t,e,n,r,i,o,s,a){return(i-s)*(e-a)-(t-s)*(o-a)>=0&&(t-s)*(r-a)-(n-s)*(e-a)>=0&&(n-s)*(o-a)-(i-s)*(r-a)>=0}function Ce(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Se(t,e){return t.x===e.x&&t.y===e.y}function Me(t,e,n,r){return!!(Se(t,e)&&Se(n,r)||Se(t,r)&&Se(n,e))||Ce(t,e,n)>0!=Ce(t,e,r)>0&&Ce(n,r,t)>0!=Ce(n,r,e)>0}function Le(t,e){return Ce(t.prev,t,t.next)<0?Ce(t,e,t.next)>=0&&Ce(t,t.prev,e)>=0:Ce(t,e,t.prev)<0||Ce(t,t.next,e)<0}function Pe(t,e){var n=new Te(t.i,t.x,t.y),r=new Te(e.i,e.x,e.y),i=t.next,o=e.prev;return t.next=e,e.prev=t,n.next=i,i.prev=n,r.next=n,n.prev=r,o.next=r,r.prev=o,r}function Oe(t,e,n,r){var i=new Te(t,e,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Re(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Te(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ae(t,e,n,r){for(var i=0,o=e,s=n-r;o<n;o+=r)i+=(t[s]-t[o])*(t[o+1]+t[s+1]),s=o;return i}function De(t){var e=function(t){for(var e=t[0][0].length,n={vertices:[],holes:[],dimensions:e},r=0,i=0;i<t.length;i++){for(var o=0;o<t[i].length;o++)for(var s=0;s<e;s++)n.vertices.push(t[i][o][s]);i>0&&(r+=t[i-1].length,n.holes.push(r))}return n}(t),n=Is(e.vertices,e.holes,2),r=[],i=[];n.forEach(function(t,r){var o=n[r];i.push([e.vertices[2*o],e.vertices[2*o+1]])});for(var s=0;s<i.length;s+=3){var a=i.slice(s,s+3);a.push(i[s]),r.push(o([a]))}return r}function Fe(t,e){if(!t)throw new Error("targetPoint is required");if(!e)throw new Error("points is required");var n,r=1/0;return O(e,function(e,i){var o=qt(t,e);o<r&&((n=Gt(e)).properties.featureIndex=i,n.properties.distanceToPoint=o,r=o)}),n}function qe(t,e,n,r,i){Ge(t,e,n||0,r||t.length-1,i||function(t,e){return t<e?-1:t>e?1:0})}function Ge(t,e,n,r,i){for(;r>n;){if(r-n>600){var o=r-n+1,s=e-n+1,a=Math.log(o),u=.5*Math.exp(2*a/3),c=.5*Math.sqrt(a*u*(o-u)/o)*(s-o/2<0?-1:1);Ge(t,e,Math.max(n,Math.floor(e-s*u/o+c)),Math.min(r,Math.floor(e+(o-s)*u/o+c)),i)}var h=t[e],l=n,p=r;for(Be(t,n,e),i(t[r],h)>0&&Be(t,n,r);l<p;){for(Be(t,l,p),l++,p--;i(t[l],h)<0;)l++;for(;i(t[p],h)>0;)p--}0===i(t[n],h)?Be(t,n,p):Be(t,++p,r),p<=e&&(n=p+1),e<=p&&(r=p-1)}}function Be(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function ke(t,e){if(!(this instanceof ke))return new ke(t,e);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&this._initFormat(e),this.clear()}function ze(t,e){je(t,0,t.children.length,e,t)}function je(t,e,n,r,i){i||(i=Ze(null)),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(var o,s=e;s<n;s++)o=t.children[s],Xe(i,t.leaf?r(o):o);return i}function Xe(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function Ue(t,e){return t.minX-e.minX}function Ye(t,e){return t.minY-e.minY}function Ve(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function He(t){return t.maxX-t.minX+(t.maxY-t.minY)}function We(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function Je(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function Ze(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function Ke(t,e,n,r,i){for(var o,s=[e,n];s.length;)(n=s.pop())-(e=s.pop())<=r||(qe(t,o=e+Math.ceil((n-e)/r/2)*r,e,n,i),s.push(e,o,o,n))}function Qe(t){var e=ke(t);return e.insert=function(t){if(Array.isArray(t)){var e=t;(t=$e(e)).bbox=e}else t.bbox=t.bbox?t.bbox:tn(t);return ke.prototype.insert.call(this,t)},e.load=function(t){var e=[];return Array.isArray(t)?t.forEach(function(t){var n=$e(t);n.bbox=t,e.push(n)}):O(t,function(t){t.bbox=t.bbox?t.bbox:tn(t),e.push(t)}),ke.prototype.load.call(this,e)},e.remove=function(t){if(Array.isArray(t)){var e=t;(t=$e(e)).bbox=e}return ke.prototype.remove.call(this,t)},e.clear=function(){return ke.prototype.clear.call(this)},e.search=function(t){return{type:"FeatureCollection",features:ke.prototype.search.call(this,this.toBBox(t))}},e.collides=function(t){return ke.prototype.collides.call(this,this.toBBox(t))},e.all=function(){return{type:"FeatureCollection",features:ke.prototype.all.call(this)}},e.toJSON=function(){return ke.prototype.toJSON.call(this)},e.fromJSON=function(t){return ke.prototype.fromJSON.call(this,t)},e.toBBox=function(t){var e;return e=t.bbox?t.bbox:Array.isArray(t)&&4===t.length?t:tn(t),{minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}},e}function $e(t){var e=[t[0],t[1]],n=[t[0],t[3]],r=[t[2],t[3]];return{type:"Feature",bbox:t,properties:{},geometry:{type:"Polygon",coordinates:[[e,[t[2],t[1]],r,n,e]]}}}function tn(t){var e=[1/0,1/0,-1/0,-1/0];return S(t,function(t){e[0]>t[0]&&(e[0]=t[0]),e[1]>t[1]&&(e[1]=t[1]),e[2]<t[0]&&(e[2]=t[0]),e[3]<t[1]&&(e[3]=t[1])}),e}function en(t){if(!t)throw new Error("geojson is required");var e=[];return F(t,function(t){!function(t,e){var n=[],r=t.geometry;switch(r.type){case"Polygon":n=U(r);break;case"LineString":n=[U(r)]}n.forEach(function(n){var r=function(t,e){var n=[];return t.reduce(function(t,r){var i=a([t,r],e);return i.bbox=function(t,e){var n=t[0],r=t[1],i=e[0],o=e[1];return[n<i?n:i,r<o?r:o,n>i?n:i,r>o?r:o]}(t,r),n.push(i),r}),n}(n,t.properties);r.forEach(function(t){t.id=e.length,e.push(t)})})}(t,e)}),c(e)}function nn(t,n){var r={},i=[];if("LineString"===t.type&&(t=e(t)),"LineString"===n.type&&(n=e(n)),"Feature"===t.type&&"Feature"===n.type&&"LineString"===t.geometry.type&&"LineString"===n.geometry.type&&2===t.geometry.coordinates.length&&2===n.geometry.coordinates.length){var o=rn(t,n);return o&&i.push(o),c(i)}var s=Qe();return s.load(en(n)),O(en(t),function(t){O(s.search(t),function(e){var n=rn(t,e);if(n){var o=U(n).join(",");r[o]||(r[o]=!0,i.push(n))}})}),c(i)}function rn(t,e){var n=U(t),i=U(e);if(2!==n.length)throw new Error("<intersects> line1 must only contain 2 coordinates");if(2!==i.length)throw new Error("<intersects> line2 must only contain 2 coordinates");var o=n[0][0],s=n[0][1],a=n[1][0],u=n[1][1],c=i[0][0],h=i[0][1],l=i[1][0],p=i[1][1],f=(p-h)*(a-o)-(l-c)*(u-s),g=(l-c)*(s-h)-(p-h)*(o-c),d=(a-o)*(s-h)-(u-s)*(o-c);if(0===f)return null;var y=g/f,_=d/f;if(y>=0&&y<=1&&_>=0&&_<=1){return r([o+y*(a-o),s+y*(u-s)])}return null}function on(t,e,n){if(n=n||{},!I(n))throw new Error("options is invalid");var i=t.geometry?t.geometry.type:t.type;if("LineString"!==i&&"MultiLineString"!==i)throw new Error("lines must be LineString or MultiLineString");var o=r([1/0,1/0],{dist:1/0}),s=0;return F(t,function(t){for(var i=U(t),u=0;u<i.length-1;u++){var c=r(i[u]);c.properties.dist=qt(e,c,n);var h=r(i[u+1]);h.properties.dist=qt(e,h,n);var l=qt(c,h,n),p=Math.max(c.properties.dist,h.properties.dist),f=ge(c,h),g=pe(e,p,f+90,n),d=pe(e,p,f-90,n),y=nn(a([g.geometry.coordinates,d.geometry.coordinates]),a([c.geometry.coordinates,h.geometry.coordinates])),_=null;y.features.length>0&&((_=y.features[0]).properties.dist=qt(e,_,n),_.properties.location=s+qt(c,_,n)),c.properties.dist<o.properties.dist&&((o=c).properties.index=u,o.properties.location=s),h.properties.dist<o.properties.dist&&((o=h).properties.index=u+1,o.properties.location=s+l),_&&_.properties.dist<o.properties.dist&&((o=_).properties.index=u),s+=l}}),o}function sn(t,e,n){if(n=n||{},!I(n))throw new Error("options is invalid");var r=n.final;if(!t)throw new Error("start point is required");if(!e)throw new Error("end point is required");var i;return(i=r?an(X(e),X(t)):an(X(t),X(e)))>180?-(360-i):i}function an(t,e){var n=x(t[1]),r=x(e[1]),i=x(e[0]-t[0]);i>Math.PI&&(i-=2*Math.PI),i<-Math.PI&&(i+=2*Math.PI);var o=Math.log(Math.tan(r/2+Math.PI/4)/Math.tan(n/2+Math.PI/4));return(v(Math.atan2(i,o))+360)%360}function un(t,e,n){if(n=n||{},!I(n))throw new Error("options is invalid");var r=n.units;if(!t)throw new Error("from point is required");if(!e)throw new Error("to point is required");var i=X(t),o=X(e);o[0]+=o[0]-i[0]>180?-360:i[0]-o[0]>180?360:0;return E(function(t,e,n){var r=n=void 0===n?Fo:Number(n),i=t[1]*Math.PI/180,o=e[1]*Math.PI/180,s=o-i,a=Math.abs(e[0]-t[0])*Math.PI/180;a>Math.PI&&(a-=2*Math.PI);var u=Math.log(Math.tan(o/2+Math.PI/4)/Math.tan(i/2+Math.PI/4)),c=Math.abs(u)>1e-11?s/u:Math.cos(i);return Math.sqrt(s*s+c*c*a*a)*r}(i,o),"meters",r)}function cn(t,e){return ln(t,"mercator",e)}function hn(t,e){return ln(t,"wgs84",e)}function ln(t,e,n){if(n=n||{},!I(n))throw new Error("options is invalid");var r=n.mutate;if(!t)throw new Error("geojson is required");return Array.isArray(t)&&b(t[0])?t="mercator"===e?pn(t):fn(t):(!0!==r&&(t=Gt(t)),S(t,function(t){var n="mercator"===e?pn(t):fn(t);t[0]=n[0],t[1]=n[1]})),t}function pn(t){var e=Math.PI/180,n=20037508.342789244,r=[6378137*(Math.abs(t[0])<=180?t[0]:t[0]-360*function(t){return t<0?-1:t>0?1:0}(t[0]))*e,6378137*Math.log(Math.tan(.25*Math.PI+.5*t[1]*e))];return r[0]>n&&(r[0]=n),r[0]<-n&&(r[0]=-n),r[1]>n&&(r[1]=n),r[1]<-n&&(r[1]=-n),r}function fn(t){var e=180/Math.PI;return[t[0]*e/6378137,(.5*Math.PI-2*Math.atan(Math.exp(-t[1]/6378137)))*e]}function gn(t,n,i){if(i=i||{},!I(i))throw new Error("options is invalid");if(!t)throw new Error("pt is required");if(Array.isArray(t)?t=r(t):"Point"===t.type?t=e(t):H(t,"Point","point"),!n)throw new Error("line is required");Array.isArray(n)?n=a(n):"LineString"===n.type?n=e(n):H(n,"LineString","line");var o=1/0,s=t.geometry.coordinates;return G(n,function(t){var e=t.geometry.coordinates[0],n=t.geometry.coordinates[1],a=function(t,e,n,i){var o=i.mercator,s=!0!==o?qt(e,t,i):dn(e,t,i),a=m(!0!==o?ge(e,t):sn(e,t)),u=m(!0!==o?ge(e,n):sn(e,n)),c=Math.abs(a-u);if(c>90)return s;var h=(u+180)%360,l=m(!0!==o?ge(n,t):sn(n,t)),p=Math.abs(l-h);p>180&&(p=Math.abs(p-360));return p>90?!0!==o?qt(t,n,i):dn(t,n,i):!0!==o?s*Math.sin(x(c)):function(t,e,n,i){var o=0;(Math.abs(t[0])>=180||Math.abs(e[0])>=180||Math.abs(n[0])>=180)&&(o=t[0]>0||e[0]>0||n[0]>0?-180:180);var s=r(n),a=cn([t[0]+o,t[1]]),u=cn([e[0]+o,e[1]]),c=cn([n[0]+o,n[1]]),h=hn(function(t,e,n){var r=t[0],i=t[1],o=e[0],s=e[1],a=n[0],u=n[1],c=o-r,h=s-i,l=((a-r)*c+(u-i)*h)/(c*c+h*h);return[r+l*c,i+l*h]}(a,u,c));return 0!==o&&(h[0]-=o),un(s,h,i)}(e,n,t,i)}(s,e,n,i);o>a&&(o=a)}),o}function dn(t,e,n){var r=n.units,i=0;Math.abs(t[0])>=180&&(i=t[0]>0?-180:180),Math.abs(e[0])>=180&&(i=e[0]>0?-180:180);var o=cn([t[0]+i,t[1]]),s=cn([e[0]+i,e[1]]),a=function(t){return t*t},u=a(o[0]-s[0])+a(o[1]-s[1]);return E(Math.sqrt(u),"meters",r)}function yn(t){for(var n=function(t){if("FeatureCollection"!==t.type)return"Feature"!==t.type?c([e(t)]):c([t]);return t}(t),i=de(n),o=!1,s=0;!o&&s<n.features.length;){var a,u=n.features[s].geometry,h=!1;if("Point"===u.type)i.geometry.coordinates[0]===u.coordinates[0]&&i.geometry.coordinates[1]===u.coordinates[1]&&(o=!0);else if("MultiPoint"===u.type){var l=!1;for(a=0;!l&&a<u.coordinates.length;)i.geometry.coordinates[0]===u.coordinates[a][0]&&i.geometry.coordinates[1]===u.coordinates[a][1]&&(o=!0,l=!0),a++}else if("LineString"===u.type)for(a=0;!h&&a<u.coordinates.length-1;)_n(i.geometry.coordinates[0],i.geometry.coordinates[1],u.coordinates[a][0],u.coordinates[a][1],u.coordinates[a+1][0],u.coordinates[a+1][1])&&(h=!0,o=!0),a++;else if("MultiLineString"===u.type)for(var p=0;p<u.coordinates.length;){h=!1,a=0;for(var f=u.coordinates[p];!h&&a<f.length-1;)_n(i.geometry.coordinates[0],i.geometry.coordinates[1],f[a][0],f[a][1],f[a+1][0],f[a+1][1])&&(h=!0,o=!0),a++;p++}else"Polygon"!==u.type&&"MultiPolygon"!==u.type||Pt(i,u)&&(o=!0);s++}if(o)return i;var g=c([]);for(s=0;s<n.features.length;s++)g.features=g.features.concat(me(n.features[s]).features);return r(Fe(i,g).geometry.coordinates)}function _n(t,e,n,r,i,o){return Math.sqrt((i-n)*(i-n)+(o-r)*(o-r))===Math.sqrt((t-n)*(t-n)+(e-r)*(e-r))+Math.sqrt((i-t)*(i-t)+(o-e)*(o-e))}function mn(t){return D(t,function(t,e){return t+vn(e)},0)}function vn(t){var e,n=0;switch(t.type){case"Polygon":return xn(t.coordinates);case"MultiPolygon":for(e=0;e<t.coordinates.length;e++)n+=xn(t.coordinates[e]);return n;case"Point":case"MultiPoint":case"LineString":case"MultiLineString":return 0;case"GeometryCollection":for(e=0;e<t.geometries.length;e++)n+=vn(t.geometries[e]);return n}}function xn(t){var e=0;if(t&&t.length>0){e+=Math.abs(En(t[0]));for(var n=1;n<t.length;n++)e-=Math.abs(En(t[n]))}return e}function En(t){var e,n,r,i,o,s,a=0,u=t.length;if(u>2){for(s=0;s<u;s++)s===u-2?(r=u-2,i=u-1,o=0):s===u-1?(r=u-1,i=0,o=1):(r=s,i=s+1,o=s+2),e=t[r],n=t[i],a+=(wn(t[o][0])-wn(e[0]))*Math.sin(wn(n[1]));a=a*Ss*Ss/2}return a}function wn(t){return t*Math.PI/180}function bn(t,e){if(e=e||{},!I(e))throw new Error("options is invalid");if(!t)throw new Error("geojson is required");return B(t,function(t,n){var r=n.geometry.coordinates;return t+qt(r[0],r[1],e)},0)}function In(t,e,n,r){if(r=r||{},!I(r))throw new Error("options is invalid");var i,o=[];if("Feature"===t.type)i=t.geometry.coordinates;else{if("LineString"!==t.type)throw new Error("input must be a LineString Feature or Geometry");i=t.coordinates}for(var s,u,c,h=0,l=0;l<i.length&&!(e>=h&&l===i.length-1);l++){if(h>e&&0===o.length){if(!(s=e-h))return o.push(i[l]),a(o);u=ge(i[l],i[l-1])-180,c=pe(i[l],s,u,r),o.push(c.geometry.coordinates)}if(h>=n)return(s=n-h)?(u=ge(i[l],i[l-1])-180,c=pe(i[l],s,u,r),o.push(c.geometry.coordinates),a(o)):(o.push(i[l]),a(o));if(h>=e&&o.push(i[l]),l===i.length-1)return a(o);h+=qt(i[l],i[l+1],r)}return a(i[i.length-1])}function Nn(t,e,n){var r=(n=n||{}).ignoreEndVertices;if(!I(n))throw new Error("invalid options");if(!t)throw new Error("pt is required");if(!e)throw new Error("line is required");for(var i=X(t),o=U(e),s=0;s<o.length-1;s++){var a=!1;if(r&&(0===s&&(a="start"),s===o.length-2&&(a="end"),0===s&&s+1===o.length-1&&(a="both")),function(t,e,n,r){var i=n[0],o=n[1],s=t[0],a=t[1],u=e[0],c=e[1],h=n[0]-s,l=n[1]-a,p=u-s,f=c-a;if(h*f-l*p!=0)return!1;{if(!r)return Math.abs(p)>=Math.abs(f)?p>0?s<=i&&i<=u:u<=i&&i<=s:f>0?a<=o&&o<=c:c<=o&&o<=a;if("start"===r)return Math.abs(p)>=Math.abs(f)?p>0?s<i&&i<=u:u<=i&&i<s:f>0?a<o&&o<=c:c<=o&&o<a;if("end"===r)return Math.abs(p)>=Math.abs(f)?p>0?s<=i&&i<u:u<i&&i<=s:f>0?a<=o&&o<c:c<o&&o<=a;if("both"===r)return Math.abs(p)>=Math.abs(f)?p>0?s<i&&i<u:u<i&&i<s:f>0?a<o&&o<c:c<o&&o<a}}(o[s],o[s+1],i,a))return!0}return!1}function Cn(t,e){var n=K(t),r=K(e),i=J(t),o=J(e);switch(n){case"Point":switch(r){case"MultiPoint":return function(t,e){var n,r=!1;for(n=0;n<e.coordinates.length;n++)if(Mn(e.coordinates[n],t.coordinates)){r=!0;break}return r}(i,o);case"LineString":return Nn(i,o,{ignoreEndVertices:!0});case"Polygon":return Pt(i,o,{ignoreBoundary:!0});default:throw new Error("feature2 "+r+" geometry not supported")}case"MultiPoint":switch(r){case"MultiPoint":return function(t,e){for(var n=0;n<t.coordinates.length;n++){for(var r=!1,i=0;i<e.coordinates.length;i++)Mn(t.coordinates[n],e.coordinates[i])&&(r=!0);if(!r)return!1}return!0}(i,o);case"LineString":return function(t,e){for(var n=!1,r=0;r<t.coordinates.length;r++){if(!Nn(t.coordinates[r],e))return!1;n||(n=Nn(t.coordinates[r],e,{ignoreEndVertices:!0}))}return n}(i,o);case"Polygon":return function(t,e){for(var n=!0,r=0;r<t.coordinates.length;r++){var i=Pt(t.coordinates[1],e);if(!i){n=!1;break}i=Pt(t.coordinates[1],e,{ignoreBoundary:!0})}return n&&i}(i,o);default:throw new Error("feature2 "+r+" geometry not supported")}case"LineString":switch(r){case"LineString":return function(t,e){for(var n=0;n<t.coordinates.length;n++)if(!Nn(t.coordinates[n],e))return!1;return!0}(i,o);case"Polygon":return function(t,e){var n=j(e),r=j(t);if(!Sn(n,r))return!1;for(var i=!1,o=0;o<t.coordinates.length-1;o++){if(!Pt(t.coordinates[o],e))return!1;if(i||(i=Pt(t.coordinates[o],e,{ignoreBoundary:!0})),!i){var s=function(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}(t.coordinates[o],t.coordinates[o+1]);i=Pt(s,e,{ignoreBoundary:!0})}}return i}(i,o);default:throw new Error("feature2 "+r+" geometry not supported")}case"Polygon":switch(r){case"Polygon":return function(t,e){var n=j(t);if(!Sn(j(e),n))return!1;for(var r=0;r<t.coordinates[0].length;r++)if(!Pt(t.coordinates[0][r],e))return!1;return!0}(i,o);default:throw new Error("feature2 "+r+" geometry not supported")}default:throw new Error("feature1 "+n+" geometry not supported")}}function Sn(t,e){return!(t[0]>e[0])&&(!(t[2]<e[2])&&(!(t[1]>e[1])&&!(t[3]<e[3])))}function Mn(t,e){return t[0]===e[0]&&t[1]===e[1]}function Ln(t,e,n){if(n=n||{},!I(n))throw new Error("options is invalid");var i=n.mask,o=n.properties,s=[];if(null===e||void 0===e)throw new Error("cellSide is required");if(!b(e))throw new Error("cellSide is invalid");if(!t)throw new Error("bbox is required");if(!Array.isArray(t))throw new Error("bbox must be array");if(4!==t.length)throw new Error("bbox must contain 4 numbers");if(i&&-1===["Polygon","MultiPolygon"].indexOf(K(i)))throw new Error("options.mask must be a (Multi)Polygon");for(var a=t[0],u=t[1],h=t[2],l=t[3],p=e/qt([a,u],[h,u],n)*(h-a),f=e/qt([a,u],[a,l],n)*(l-u),g=h-a,d=l-u,y=Math.floor(g/p),_=(d-Math.floor(d/f)*f)/2,m=a+(g-y*p)/2;m<=h;){for(var v=u+_;v<=l;){var x=r([m,v],o);i?Cn(x,i)&&s.push(x):s.push(x),v+=f}m+=p}return c(s)}function Pn(t,e){if(e=e||{},!I(e))throw new Error("options is invalid");var n=e.precision,r=e.coordinates,i=e.mutate;if(n=void 0===n||null===n||isNaN(n)?6:n,r=void 0===r||null===r||isNaN(r)?3:r,!t)throw new Error("<geojson> is required");if("number"!=typeof n)throw new Error("<precision> must be a number");if("number"!=typeof r)throw new Error("<coordinates> must be a number");!1!==i&&void 0!==i||(t=JSON.parse(JSON.stringify(t)));var o=Math.pow(10,n);return S(t,function(t){!function(t,e,n){t.length>n&&t.splice(n,t.length);for(var r=0;r<t.length;r++)t[r]=Math.round(t[r]*e)/e}(t,o,r)}),t}function On(t,e){if(!t||!e)return!1;if(t.length!==e.length)return!1;for(var n=0,r=t.length;n<r;n++)if(t[n]instanceof Array&&e[n]instanceof Array){if(!On(t[n],e[n]))return!1}else if(t[n]!==e[n])return!1;return!0}function Rn(t,e){if(void 0===e&&(e=!0),3!=t.length)throw new Error("This function requires an array of three points [x,y]");return(t[1][0]-t[0][0])*(t[2][1]-t[0][1])-(t[1][1]-t[0][1])*(t[2][0]-t[0][0])>=0==e}function Tn(t,e){if(!t||!e)return!1;if(t.length!=e.length)return!1;for(var n=0,r=t.length;n<r;n++)if(t[n]instanceof Array&&e[n]instanceof Array){if(!Tn(t[n],e[n]))return!1}else if(t[n]!=e[n])return!1;return!0}function An(t,e){var n=[],r=Qe();return F(e,function(e){if(n.forEach(function(t,e){t.id=e}),n.length){var i=r.search(e);if(i.features.length){var o=Fn(e,i);n=n.filter(function(t){return t.id!==o.id}),r.remove(o),O(Dn(o,e),function(t){n.push(t),r.insert(t)})}}else(n=Dn(t,e).features).forEach(function(t){t.bbox||(t.bbox=le(j(t)))}),r.load(c(n))}),c(n)}function Dn(t,e){var n=[],r=U(t)[0],i=U(t)[t.geometry.coordinates.length-1];if(qn(r,X(e))||qn(i,X(e)))return c([t]);var o=Qe(),s=en(t);o.load(s);var u=o.search(e);if(!u.features.length)return c([t]);var h=Fn(e,u),l=R(s,function(t,r,i){var o=U(r)[1],s=X(e);return i===h.id?(t.push(s),n.push(a(t)),qn(s,o)?[s]:[s,o]):(t.push(o),t)},[r]);return l.length>1&&n.push(a(l)),c(n)}function Fn(t,e){if(!e.features.length)throw new Error("lines must contain features");if(1===e.features.length)return e.features[0];var n,r=1/0;return O(e,function(e){var i=on(e,t).properties.dist;i<r&&(n=e,r=i)}),n}function qn(t,e){return t[0]===e[0]&&t[1]===e[1]}function Gn(t,e,n,r,i){if(i=i||{},!I(i))throw new Error("options is invalid");var o=i.steps,s=i.units;if(!t)throw new Error("center is required");if(!e)throw new Error("radius is required");if(void 0===n||null===n)throw new Error("bearing1 is required");if(void 0===r||null===r)throw new Error("bearing2 is required");if("object"!=typeof i)throw new Error("options must be an object");o=o||64;var u=Bn(n),c=Bn(r),h=t.properties;if(u===c)return a(fe(t,e,i).geometry.coordinates[0],h);for(var l=u,p=u<c?c:c+360,f=l,g=[],d=0;f<p;)g.push(pe(t,e,f,s).geometry.coordinates),f=l+360*++d/o;return f>p&&g.push(pe(t,e,p,s).geometry.coordinates),a(g,h)}function Bn(t){var e=t%360;return e<0&&(e+=360),e}function kn(t,e){if(e=e||{},!I(e))throw new Error("options is invalid");var n=e.properties,r=K(t),i=U(t);if(n=n||t.properties||{},!i.length)throw new Error("polygon must contain coordinates");switch(r){case"Polygon":return zn(i,n);case"MultiPolygon":var o=[];return i.forEach(function(t){o.push(zn(t,n))}),c(o);default:throw new Error("geom "+r+" not supported")}}function zn(t,e){return t.length>1?h(t,e):a(t[0],e)}function jn(t,e){if(e=e||{},!I(e))throw new Error("options is invalid");var n=e.properties,r=e.autoComplete,i=e.orderCoords;if(!t)throw new Error("lines is required");r=void 0===r||r,i=void 0===i||i;switch(K(t)){case"FeatureCollection":case"GeometryCollection":var o=[];return(t.features?t.features:t.geometries).forEach(function(t){o.push(U(Xn(t,{},r,i)))}),p(o,n)}return Xn(t,n,r,i)}function Xn(t,e,n,r){e=e||t.properties||{};var i=U(t),s=K(t);if(!i.length)throw new Error("line must contain coordinates");switch(s){case"LineString":return n&&(i=Un(i)),o([i],e);case"MultiLineString":var u=[],c=0;return i.forEach(function(t){if(n&&(t=Un(t)),r){var e=function(t){var e=t[0],n=t[1],r=t[2],i=t[3];return Math.abs(e-r)*Math.abs(n-i)}(j(a(t)));e>c?(u.unshift(t),c=e):u.push(t)}else u.push(t)}),o(u,e);default:throw new Error("geometry type "+s+" is not supported")}}function Un(t){var e=t[0],n=e[0],r=e[1],i=t[t.length-1],o=i[0],s=i[1];return n===o&&r===s||t.push(e),t}function Yn(t,e,n){var r,i,o,s,a,u=t.length,c=Hn(t[0],e),h=[];for(n||(n=[]),r=1;r<u;r++){for(i=t[r-1],s=a=Hn(o=t[r],e);;){if(!(c|s)){h.push(i),s!==a?(h.push(o),r<u-1&&(n.push(h),h=[])):r===u-1&&h.push(o);break}if(c&s)break;c?c=Hn(i=Vn(i,o,c,e),e):s=Hn(o=Vn(i,o,s,e),e)}c=a}return h.length&&n.push(h),n}function Vn(t,e,n,r){return 8&n?[t[0]+(e[0]-t[0])*(r[3]-t[1])/(e[1]-t[1]),r[3]]:4&n?[t[0]+(e[0]-t[0])*(r[1]-t[1])/(e[1]-t[1]),r[1]]:2&n?[r[2],t[1]+(e[1]-t[1])*(r[2]-t[0])/(e[0]-t[0])]:1&n?[r[0],t[1]+(e[1]-t[1])*(r[0]-t[0])/(e[0]-t[0])]:null}function Hn(t,e){var n=0;return t[0]<e[0]?n|=1:t[0]>e[2]&&(n|=2),t[1]<e[1]?n|=4:t[1]>e[3]&&(n|=8),n}function Wn(t,e){for(var n=[],r=0;r<t.length;r++){var i=Gs.polygon(t[r],e);i.length>0&&(i[0][0]===i[i.length-1][0]&&i[0][1]===i[i.length-1][1]||i.push(i[0]),i.length>=4&&n.push(i))}return n}function Jn(t){return"[object Arguments]"===Object.prototype.toString.call(t)}function Zn(t,e,n){return n||(n={}),t===e||(t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():!t||!e||"object"!=typeof t&&"object"!=typeof e?(n.strict,t===e):function(t,e,n){var r,i;if(Kn(t)||Kn(e))return!1;if(t.prototype!==e.prototype)return!1;if(Jn(t))return!!Jn(e)&&(t=Bs.call(t),e=Bs.call(e),Zn(t,e,n));if(Qn(t)){if(!Qn(e))return!1;if(t.length!==e.length)return!1;for(r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}try{var o=Object.keys(t),s=Object.keys(e)}catch(t){return!1}if(o.length!==s.length)return!1;for(o.sort(),s.sort(),r=o.length-1;r>=0;r--)if(o[r]!==s[r])return!1;for(r=o.length-1;r>=0;r--)if(i=o[r],!Zn(t[i],e[i],n))return!1;return typeof t==typeof e}(t,e,n))}function Kn(t){return null===t||void 0===t}function Qn(t){return!(!t||"object"!=typeof t||"number"!=typeof t.length)&&("function"==typeof t.copy&&"function"==typeof t.slice&&!(t.length>0&&"number"!=typeof t[0]))}function $n(t,e,n){if(n=n||{},!I(n))throw new Error("options is invalid");var r=n.tolerance||0,i=[],o=Qe();o.load(en(t));var s;return G(e,function(t){var e=!1;O(o.search(t),function(n){if(!1===e){var i=U(t).sort(),o=U(n).sort();Zn(i,o)?(e=!0,s=s?tr(s,t):t):(0===r?Nn(i[0],n)&&Nn(i[1],n):on(n,i[0]).properties.dist<=r&&on(n,i[1]).properties.dist<=r)?(e=!0,s=s?tr(s,t):t):(0===r?Nn(o[0],t)&&Nn(o[1],t):on(t,o[0]).properties.dist<=r&&on(t,o[1]).properties.dist<=r)&&(s=s?tr(s,n):n)}}),!1===e&&s&&(i.push(s),s=void 0)}),s&&i.push(s),c(i)}function tr(t,e){var n=U(e),r=U(t),i=r[0],o=r[r.length-1],s=t.geometry.coordinates;return Zn(n[0],i)?s.unshift(n[1]):Zn(n[0],o)?s.push(n[1]):Zn(n[1],i)?s.unshift(n[0]):Zn(n[1],o)&&s.push(n[0]),t}function er(t){var e=t%360;return e<0&&(e+=360),e}function nr(t,e,n,i){if(i=i||{},!I(i))throw new Error("options is invalid");var o=i.units,s=i.properties;if(!t)throw new Error("origin is required");if(void 0===e||null===e)throw new Error("distance is required");if(void 0===n||null===n)throw new Error("bearing is required");if(!(e>=0))throw new Error("distance must be greater than 0");var a=E(e,o,"meters"),u=X(t),c=function(t,e,n,r){r=void 0===r?Fo:Number(r);var i=e/r,o=t[0]*Math.PI/180,s=x(t[1]),a=x(n),u=i*Math.cos(a),c=s+u;Math.abs(c)>Math.PI/2&&(c=c>0?Math.PI-c:-Math.PI-c);var h=Math.log(Math.tan(c/2+Math.PI/4)/Math.tan(s/2+Math.PI/4)),l=Math.abs(h)>1e-11?u/h:Math.cos(s),p=i*Math.sin(a)/l;return[(180*(o+p)/Math.PI+540)%360-180,180*c/Math.PI]}(u,a,n);return c[0]+=c[0]-u[0]>180?-360:u[0]-c[0]>180?360:0,r(c,s)}function rr(t,e,n,r,i,o){for(var s=0;s<t.length;s++){var a=t[s],u=t[s+1];s===t.length-1&&(u=t[0]),r=ir(a,u,e),n<=0&&r>0?function(t,e,n){return ir(t,e,n)<0}(e,a,i)||(i=a):n>0&&r<=0&&(function(t,e,n){return ir(t,e,n)>0}(e,a,o)||(o=a)),n=r}return[i,o]}function ir(t,e,n){return(e[0]-t[0])*(n[1]-t[1])-(n[0]-t[0])*(e[1]-t[1])}function or(t){if(!t)throw new Error("line is required");var e=t.geometry?t.geometry.type:t.type;if(!Array.isArray(t)&&"LineString"!==e)throw new Error("geometry must be a LineString");for(var n,r,i=U(t),o=0,s=1;s<i.length;)n=r||i[0],o+=((r=i[s])[0]-n[0])*(r[1]+n[1]),s++;return o>0}function sr(t,e){switch("Feature"===t.type?t.geometry.type:t.type){case"GeometryCollection":return A(t,function(t){sr(t,e)}),t;case"LineString":return ar(U(t),e),t;case"Polygon":return ur(U(t),e),t;case"MultiLineString":return U(t).forEach(function(t){ar(t,e)}),t;case"MultiPolygon":return U(t).forEach(function(t){ur(t,e)}),t;case"Point":case"MultiPoint":return t}}function ar(t,e){or(t)===e&&t.reverse()}function ur(t,e){or(t[0])!==e&&t[0].reverse();for(var n=1;n<t.length;n++)or(t[n])===e&&t[n].reverse()}function cr(t,e){if(e=e||{},!I(e))throw new Error("options is invalid");var n=e.zProperty||"elevation",r=e.flip,i=e.flags;W(t,"Point","input must contain Points");for(var o=function(t,e){var n={};O(t,function(t){var e=U(t)[1];n[e]||(n[e]=[]),n[e].push(t)});return Object.keys(n).map(function(t){var e=n[t],r=e.sort(function(t,e){return U(t)[0]-U(e)[0]});return r}).sort(function(t,n){return e?U(t[0])[1]-U(n[0])[1]:U(n[0])[1]-U(t[0])[1]})}(t,r),s=[],a=0;a<o.length;a++){for(var u=o[a],c=[],h=0;h<u.length;h++){var l=u[h];l.properties[n]?c.push(l.properties[n]):c.push(0),!0===i&&(l.properties.matrixPosition=[a,h])}s.push(c)}return s}function hr(t,e,n,r){r=r||{};for(var i=Object.keys(ks),o=0;o<i.length;o++){var s=i[o],a=r[s];a=void 0!==a&&null!==a?a:ks[s],zs[s]=a}zs.verbose&&console.log("MarchingSquaresJS-isoBands: computing isobands for ["+e+":"+(e+n)+"]");var u,c=function(t,e,n){for(var r=t.length-1,i=t[0].length-1,o={rows:r,cols:i,cells:[]},s=e+Math.abs(n),a=0;a<r;++a){o.cells[a]=[];for(var u=0;u<i;++u){var c=0,h=t[a+1][u],l=t[a+1][u+1],p=t[a][u+1],f=t[a][u];if(!(isNaN(h)||isNaN(l)||isNaN(p)||isNaN(f))){c|=h<e?0:h>s?128:64,c|=l<e?0:l>s?32:16,c|=p<e?0:p>s?8:4;var g=+(c|=f<e?0:f>s?2:1),d=0;if(17===c||18===c||33===c||34===c||38===c||68===c||72===c||98===c||102===c||132===c||136===c||137===c||152===c||153===c){var y=(h+l+p+f)/4;d=y>s?2:y<e?0:1,34===c?1===d?c=35:0===d&&(c=136):136===c?1===d?(c=35,d=4):0===d&&(c=34):17===c?1===d?(c=155,d=4):0===d&&(c=153):68===c?1===d?(c=103,d=4):0===d&&(c=102):153===c?1===d&&(c=155):102===c?1===d&&(c=103):152===c?d<2&&(c=156,d=1):137===c?d<2&&(c=139,d=1):98===c?d<2&&(c=99,d=1):38===c?d<2&&(c=39,d=1):18===c?d>0?(c=156,d=4):c=152:33===c?d>0?(c=139,d=4):c=137:72===c?d>0?(c=99,d=4):c=98:132===c&&(d>0?(c=39,d=4):c=38)}if(0!=c&&170!=c){var _,m,v,x,E,w,b,I;_=m=v=x=E=w=b=I=.5;var N=[];1===c?(v=1-lr(e,p,f),I=1-lr(e,h,f),N.push(Sa[c])):169===c?(v=lr(s,f,p),I=lr(s,f,h),N.push(Sa[c])):4===c?(w=1-lr(e,l,p),x=lr(e,f,p),N.push(Na[c])):166===c?(w=lr(s,p,l),x=1-lr(s,p,f),N.push(Na[c])):16===c?(E=lr(e,p,l),m=lr(e,h,l),N.push(Ia[c])):154===c?(E=1-lr(s,l,p),m=1-lr(s,l,h),N.push(Ia[c])):64===c?(b=lr(e,f,h),_=1-lr(e,l,h),N.push(La[c])):106===c?(b=1-lr(s,h,f),_=lr(s,h,l),N.push(La[c])):168===c?(x=lr(s,f,p),v=lr(e,f,p),I=lr(e,f,h),b=lr(s,f,h),N.push(Ca[c]),N.push(Sa[c])):2===c?(x=1-lr(e,p,f),v=1-lr(s,p,f),I=1-lr(s,h,f),b=1-lr(e,h,f),N.push(Ca[c]),N.push(Sa[c])):162===c?(E=lr(s,p,l),w=lr(e,p,l),x=1-lr(e,p,f),v=1-lr(s,p,f),N.push(Ca[c]),N.push(Sa[c])):8===c?(E=1-lr(e,l,p),w=1-lr(s,l,p),x=lr(s,f,p),v=lr(e,f,p),N.push(Ia[c]),N.push(Na[c])):138===c?(E=1-lr(e,l,p),w=1-lr(s,l,p),_=1-lr(s,l,h),m=1-lr(e,l,h),N.push(Ia[c]),N.push(Na[c])):32===c?(E=lr(s,p,l),w=lr(e,p,l),_=lr(e,h,l),m=lr(s,h,l),N.push(Ia[c]),N.push(Na[c])):42===c?(I=1-lr(s,h,f),b=1-lr(e,h,f),_=lr(e,h,l),m=lr(s,h,l),N.push(Ma[c]),N.push(La[c])):128===c&&(I=lr(e,f,h),b=lr(s,f,h),_=1-lr(s,l,h),m=1-lr(e,l,h),N.push(Ma[c]),N.push(La[c])),5===c?(w=1-lr(e,l,p),I=1-lr(e,h,f),N.push(Na[c])):165===c?(w=lr(s,p,l),I=lr(s,f,h),N.push(Na[c])):20===c?(x=lr(e,f,p),m=lr(e,h,l),N.push(Ca[c])):150===c?(x=1-lr(s,p,f),m=1-lr(s,l,h),N.push(Ca[c])):80===c?(E=lr(e,p,l),b=lr(e,f,h),N.push(Ia[c])):90===c?(E=1-lr(s,l,p),b=1-lr(s,h,f),N.push(Ia[c])):65===c?(v=1-lr(e,p,f),_=1-lr(e,l,h),N.push(Sa[c])):105===c?(v=lr(s,f,p),_=lr(s,h,l),N.push(Sa[c])):160===c?(E=lr(s,p,l),w=lr(e,p,l),I=lr(e,f,h),b=lr(s,f,h),N.push(Ia[c]),N.push(Na[c])):10===c?(E=1-lr(e,l,p),w=1-lr(s,l,p),I=1-lr(s,h,f),b=1-lr(e,h,f),N.push(Ia[c]),N.push(Na[c])):130===c?(x=1-lr(e,p,f),v=1-lr(s,p,f),_=1-lr(s,l,h),m=1-lr(e,l,h),N.push(Ca[c]),N.push(Sa[c])):40===c?(x=lr(s,f,p),v=lr(e,f,p),_=lr(e,h,l),m=lr(s,h,l),N.push(Ca[c]),N.push(Sa[c])):101===c?(w=lr(s,p,l),_=lr(s,h,l),N.push(Na[c])):69===c?(w=1-lr(e,l,p),_=1-lr(e,l,h),N.push(Na[c])):149===c?(I=lr(s,f,h),m=1-lr(s,l,h),N.push(Ma[c])):21===c?(I=1-lr(e,h,f),m=lr(e,h,l),N.push(Ma[c])):86===c?(x=1-lr(s,p,f),b=1-lr(s,h,f),N.push(Ca[c])):84===c?(x=lr(e,f,p),b=lr(e,f,h),N.push(Ca[c])):89===c?(E=1-lr(s,l,p),v=lr(s,f,p),N.push(Sa[c])):81===c?(E=lr(e,p,l),v=1-lr(e,p,f),N.push(Sa[c])):96===c?(E=lr(s,p,l),w=lr(e,p,l),b=lr(e,f,h),_=lr(s,h,l),N.push(Ia[c]),N.push(Na[c])):74===c?(E=1-lr(e,l,p),w=1-lr(s,l,p),b=1-lr(s,h,f),_=1-lr(e,l,h),N.push(Ia[c]),N.push(Na[c])):24===c?(E=1-lr(s,l,p),x=lr(s,f,p),v=lr(e,f,p),m=lr(e,h,l),N.push(Ia[c]),N.push(Sa[c])):146===c?(E=lr(e,p,l),x=1-lr(e,p,f),v=1-lr(s,p,f),m=1-lr(s,l,h),N.push(Ia[c]),N.push(Sa[c])):6===c?(w=1-lr(e,l,p),x=1-lr(s,p,f),I=1-lr(s,h,f),b=1-lr(e,h,f),N.push(Na[c]),N.push(Ca[c])):164===c?(w=lr(s,p,l),x=lr(e,f,p),I=lr(e,f,h),b=lr(s,f,h),N.push(Na[c]),N.push(Ca[c])):129===c?(v=1-lr(e,p,f),I=lr(s,f,h),_=1-lr(s,l,h),m=1-lr(e,l,h),N.push(Sa[c]),N.push(Ma[c])):41===c?(v=lr(s,f,p),I=1-lr(e,h,f),_=lr(e,h,l),m=lr(s,h,l),N.push(Sa[c]),N.push(Ma[c])):66===c?(x=1-lr(e,p,f),v=1-lr(s,p,f),b=1-lr(s,h,f),_=1-lr(e,l,h),N.push(Ca[c]),N.push(Sa[c])):104===c?(x=lr(s,f,p),v=lr(e,f,p),b=lr(e,f,h),_=lr(s,h,l),N.push(Sa[c]),N.push(Pa[c])):144===c?(E=lr(e,p,l),I=lr(e,f,h),b=lr(s,f,h),m=1-lr(s,l,h),N.push(Ia[c]),N.push(La[c])):26===c?(E=1-lr(s,l,p),I=1-lr(s,h,f),b=1-lr(e,h,f),m=lr(e,h,l),N.push(Ia[c]),N.push(La[c])):36===c?(w=lr(s,p,l),x=lr(e,f,p),_=lr(e,h,l),m=lr(s,h,l),N.push(Na[c]),N.push(Ca[c])):134===c?(w=1-lr(e,l,p),x=1-lr(s,p,f),_=1-lr(s,l,h),m=1-lr(e,l,h),N.push(Na[c]),N.push(Ca[c])):9===c?(E=1-lr(e,l,p),w=1-lr(s,l,p),v=lr(s,f,p),I=1-lr(e,h,f),N.push(Ia[c]),N.push(Na[c])):161===c?(E=lr(s,p,l),w=lr(e,p,l),v=1-lr(e,p,f),I=lr(s,f,h),N.push(Ia[c]),N.push(Na[c])):37===c?(w=lr(s,p,l),I=1-lr(e,h,f),_=lr(e,h,l),m=lr(s,h,l),N.push(Na[c]),N.push(Ma[c])):133===c?(w=1-lr(e,l,p),I=lr(s,f,h),_=1-lr(s,l,h),m=1-lr(e,l,h),N.push(Na[c]),N.push(Ma[c])):148===c?(x=lr(e,f,p),I=lr(e,f,h),b=lr(s,f,h),m=1-lr(s,l,h),N.push(Ca[c]),N.push(La[c])):22===c?(x=1-lr(s,p,f),I=1-lr(s,h,f),b=1-lr(e,h,f),m=lr(e,h,l),N.push(Ca[c]),N.push(La[c])):82===c?(E=lr(e,p,l),x=1-lr(e,p,f),v=1-lr(s,p,f),b=1-lr(s,h,f),N.push(Ia[c]),N.push(Sa[c])):88===c?(E=1-lr(s,l,p),x=lr(s,f,p),v=lr(e,f,p),b=lr(e,f,h),N.push(Ia[c]),N.push(Sa[c])):73===c?(E=1-lr(e,l,p),w=1-lr(s,l,p),v=lr(s,f,p),_=1-lr(e,l,h),N.push(Ia[c]),N.push(Na[c])):97===c?(E=lr(s,p,l),w=lr(e,p,l),v=1-lr(e,p,f),_=lr(s,h,l),N.push(Ia[c]),N.push(Na[c])):145===c?(E=lr(e,p,l),v=1-lr(e,p,f),I=lr(s,f,h),m=1-lr(s,l,h),N.push(Ia[c]),N.push(Ma[c])):25===c?(E=1-lr(s,l,p),v=lr(s,f,p),I=1-lr(e,h,f),m=lr(e,h,l),N.push(Ia[c]),N.push(Ma[c])):70===c?(w=1-lr(e,l,p),x=1-lr(s,p,f),b=1-lr(s,h,f),_=1-lr(e,l,h),N.push(Na[c]),N.push(Ca[c])):100===c?(w=lr(s,p,l),x=lr(e,f,p),b=lr(e,f,h),_=lr(s,h,l),N.push(Na[c]),N.push(Ca[c])):34===c?(0===d?(E=1-lr(e,l,p),w=1-lr(s,l,p),x=lr(s,f,p),v=lr(e,f,p),I=lr(e,f,h),b=lr(s,f,h),_=1-lr(s,l,h),m=1-lr(e,l,h)):(E=lr(s,p,l),w=lr(e,p,l),x=1-lr(e,p,f),v=1-lr(s,p,f),I=1-lr(s,h,f),b=1-lr(e,h,f),_=lr(e,h,l),m=lr(s,h,l)),N.push(Ia[c]),N.push(Na[c]),N.push(Ma[c]),N.push(La[c])):35===c?(4===d?(E=1-lr(e,l,p),w=1-lr(s,l,p),x=lr(s,f,p),v=lr(e,f,p),I=lr(e,f,h),b=lr(s,f,h),_=1-lr(s,l,h),m=1-lr(e,l,h)):(E=lr(s,p,l),w=lr(e,p,l),x=1-lr(e,p,f),v=1-lr(s,p,f),I=1-lr(s,h,f),b=1-lr(e,h,f),_=lr(e,h,l),m=lr(s,h,l)),N.push(Ia[c]),N.push(Na[c]),N.push(Sa[c]),N.push(La[c])):136===c?(0===d?(E=lr(s,p,l),w=lr(e,p,l),x=1-lr(e,p,f),v=1-lr(s,p,f),I=1-lr(s,h,f),b=1-lr(e,h,f),_=lr(e,h,l),m=lr(s,h,l)):(E=1-lr(e,l,p),w=1-lr(s,l,p),x=lr(s,f,p),v=lr(e,f,p),I=lr(e,f,h),b=lr(s,f,h),_=1-lr(s,l,h),m=1-lr(e,l,h)),N.push(Ia[c]),N.push(Na[c]),N.push(Ma[c]),N.push(La[c])):153===c?(0===d?(E=lr(e,p,l),v=1-lr(e,p,f),I=1-lr(e,h,f),m=lr(e,h,l)):(E=1-lr(s,l,p),v=lr(s,f,p),I=lr(s,f,h),m=1-lr(s,l,h)),N.push(Ia[c]),N.push(Sa[c])):102===c?(0===d?(w=1-lr(e,l,p),x=lr(e,f,p),b=lr(e,f,h),_=1-lr(e,l,h)):(w=lr(s,p,l),x=1-lr(s,p,f),b=1-lr(s,h,f),_=lr(s,h,l)),N.push(Na[c]),N.push(La[c])):155===c?(4===d?(E=lr(e,p,l),v=1-lr(e,p,f),I=1-lr(e,h,f),m=lr(e,h,l)):(E=1-lr(s,l,p),v=lr(s,f,p),I=lr(s,f,h),m=1-lr(s,l,h)),N.push(Ia[c]),N.push(Ma[c])):103===c?(4===d?(w=1-lr(e,l,p),x=lr(e,f,p),b=lr(e,f,h),_=1-lr(e,l,h)):(w=lr(s,p,l),x=1-lr(s,p,f),b=1-lr(s,h,f),_=lr(s,h,l)),N.push(Na[c]),N.push(Ca[c])):152===c?(0===d?(E=lr(e,p,l),x=1-lr(e,p,f),v=1-lr(s,p,f),I=1-lr(s,h,f),b=1-lr(e,h,f),m=lr(e,h,l)):(E=1-lr(s,l,p),x=lr(s,f,p),v=lr(e,f,p),I=lr(e,f,h),b=lr(s,f,h),m=1-lr(s,l,h)),N.push(Ia[c]),N.push(Ca[c]),N.push(Sa[c])):156===c?(4===d?(E=lr(e,p,l),x=1-lr(e,p,f),v=1-lr(s,p,f),I=1-lr(s,h,f),b=1-lr(e,h,f),m=lr(e,h,l)):(E=1-lr(s,l,p),x=lr(s,f,p),v=lr(e,f,p),I=lr(e,f,h),b=lr(s,f,h),m=1-lr(s,l,h)),N.push(Ia[c]),N.push(Sa[c]),N.push(La[c])):137===c?(0===d?(E=lr(s,p,l),w=lr(e,p,l),v=1-lr(e,p,f),I=1-lr(e,h,f),_=lr(e,h,l),m=lr(s,h,l)):(E=1-lr(e,l,p),w=1-lr(s,l,p),v=lr(s,f,p),I=lr(s,f,h),_=1-lr(s,l,h),m=1-lr(e,l,h)),N.push(Ia[c]),N.push(Na[c]),N.push(Sa[c])):139===c?(4===d?(E=lr(s,p,l),w=lr(e,p,l),v=1-lr(e,p,f),I=1-lr(e,h,f),_=lr(e,h,l),m=lr(s,h,l)):(E=1-lr(e,l,p),w=1-lr(s,l,p),v=lr(s,f,p),I=lr(s,f,h),_=1-lr(s,l,h),m=1-lr(e,l,h)),N.push(Ia[c]),N.push(Na[c]),N.push(Ma[c])):98===c?(0===d?(E=1-lr(e,l,p),w=1-lr(s,l,p),x=lr(s,f,p),v=lr(e,f,p),b=lr(e,f,h),_=1-lr(e,l,h)):(E=lr(s,p,l),w=lr(e,p,l),x=1-lr(e,p,f),v=1-lr(s,p,f),b=1-lr(s,h,f),_=lr(s,h,l)),N.push(Ia[c]),N.push(Na[c]),N.push(La[c])):99===c?(4===d?(E=1-lr(e,l,p),w=1-lr(s,l,p),x=lr(s,f,p),v=lr(e,f,p),b=lr(e,f,h),_=1-lr(e,l,h)):(E=lr(s,p,l),w=lr(e,p,l),x=1-lr(e,p,f),v=1-lr(s,p,f),b=1-lr(s,h,f),_=lr(s,h,l)),N.push(Ia[c]),N.push(Na[c]),N.push(Sa[c])):38===c?(0===d?(w=1-lr(e,l,p),x=lr(e,f,p),I=lr(e,f,h),b=lr(s,f,h),_=1-lr(s,l,h),m=1-lr(e,l,h)):(w=lr(s,p,l),x=1-lr(s,p,f),I=1-lr(s,h,f),b=1-lr(e,h,f),_=lr(e,h,l),m=lr(s,h,l)),N.push(Na[c]),N.push(Ma[c]),N.push(La[c])):39===c?(4===d?(w=1-lr(e,l,p),x=lr(e,f,p),I=lr(e,f,h),b=lr(s,f,h),_=1-lr(s,l,h),m=1-lr(e,l,h)):(w=lr(s,p,l),x=1-lr(s,p,f),I=1-lr(s,h,f),b=1-lr(e,h,f),_=lr(e,h,l),m=lr(s,h,l)),N.push(Na[c]),N.push(Ca[c]),N.push(La[c])):85===c&&(E=1,w=0,x=1,v=0,I=0,b=1,_=0,m=1),(_<0||_>1||m<0||m>1||E<0||E>1||x<0||x>1||I<0||I>1||b<0||b>1)&&console.log("MarchingSquaresJS-isoBands: "+c+" "+g+" "+h+","+l+","+p+","+f+" "+d+" "+_+" "+m+" "+E+" "+w+" "+x+" "+v+" "+I+" "+b),o.cells[a][u]={cval:c,cval_real:g,flipped:d,topleft:_,topright:m,righttop:E,rightbottom:w,bottomright:x,bottomleft:v,leftbottom:I,lefttop:b,edges:N}}}}}return o}(t,e,n);return zs.polygons?(zs.verbose&&console.log("MarchingSquaresJS-isoBands: returning single polygons for each grid cell"),u=function(t){var e=[],n=0;return t.cells.forEach(function(t,r){t.forEach(function(t,i){if(void 0!==t){var o=Ra[t.cval](t);"object"==typeof o&&pr(o)?"object"==typeof o[0]&&pr(o[0])?"object"==typeof o[0][0]&&pr(o[0][0])?o.forEach(function(t){t.forEach(function(t){t[0]+=i,t[1]+=r}),e[n++]=t}):(o.forEach(function(t){t[0]+=i,t[1]+=r}),e[n++]=o):console.log("MarchingSquaresJS-isoBands: bandcell polygon with malformed coordinates"):console.log("MarchingSquaresJS-isoBands: bandcell polygon with null coordinates")}})}),e}(c)):(zs.verbose&&console.log("MarchingSquaresJS-isoBands: returning polygon paths for entire data grid"),u=function(t){for(var e=[],n=t.rows,r=t.cols,i=[],o=0;o<n;o++)for(var s=0;s<r;s++)if(void 0!==t.cells[o][s]&&t.cells[o][s].edges.length>0){var a=t.cells[o][s],u=function(t){if(t.edges.length>0){var e=t.edges[t.edges.length-1],n=t.cval_real;switch(e){case 0:return n&Xs?{p:[1,t.righttop],x:-1,y:0,o:1}:{p:[t.topleft,1],x:0,y:-1,o:0};case 1:return n&Us?{p:[t.topleft,1],x:0,y:-1,o:0}:{p:[1,t.rightbottom],x:-1,y:0,o:0};case 2:return n&Us?{p:[t.bottomright,0],x:0,y:1,o:1}:{p:[t.topleft,1],x:0,y:-1,o:0};case 3:return n&Ys?{p:[t.topleft,1],x:0,y:-1,o:0}:{p:[t.bottomleft,0],x:0,y:1,o:0};case 4:return n&Xs?{p:[1,t.righttop],x:-1,y:0,o:1}:{p:[t.topright,1],x:0,y:-1,o:1};case 5:return n&Us?{p:[t.topright,1],x:0,y:-1,o:1}:{p:[1,t.rightbottom],x:-1,y:0,o:0};case 6:return n&Us?{p:[t.bottomright,0],x:0,y:1,o:1}:{p:[t.topright,1],x:0,y:-1,o:1};case 7:return n&Ys?{p:[t.topright,1],x:0,y:-1,o:1}:{p:[t.bottomleft,0],x:0,y:1,o:0};case 8:return n&Us?{p:[t.bottomright,0],x:0,y:1,o:1}:{p:[1,t.righttop],x:-1,y:0,o:1};case 9:return n&Ys?{p:[1,t.righttop],x:-1,y:0,o:1}:{p:[t.bottomleft,0],x:0,y:1,o:0};case 10:return n&Ys?{p:[0,t.leftbottom],x:1,y:0,o:0}:{p:[1,t.righttop],x:-1,y:0,o:1};case 11:return n&js?{p:[1,t.righttop],x:-1,y:0,o:1}:{p:[0,t.lefttop],x:1,y:0,o:1};case 12:return n&Us?{p:[t.bottomright,0],x:0,y:1,o:1}:{p:[1,t.rightbottom],x:-1,y:0,o:0};case 13:return n&Ys?{p:[1,t.rightbottom],x:-1,y:0,o:0}:{p:[t.bottomleft,0],x:0,y:1,o:0};case 14:return n&Ys?{p:[0,t.leftbottom],x:1,y:0,o:0}:{p:[1,t.rightbottom],x:-1,y:0,o:0};case 15:return n&js?{p:[1,t.rightbottom],x:-1,y:0,o:0}:{p:[0,t.lefttop],x:1,y:0,o:1};case 16:return n&Us?{p:[t.bottomright,0],x:0,y:1,o:1}:{p:[0,t.leftbottom],x:1,y:0,o:0};case 17:return n&js?{p:[t.bottomright,0],x:0,y:1,o:1}:{p:[0,t.lefttop],x:1,y:0,o:1};case 18:return n&Ys?{p:[0,t.leftbottom],x:1,y:0,o:0}:{p:[t.bottomleft,0],x:0,y:1,o:0};case 19:return n&js?{p:[t.bottomleft,0],x:0,y:1,o:0}:{p:[0,t.lefttop],x:1,y:0,o:1};case 20:return n&js?{p:[t.topleft,1],x:0,y:-1,o:0}:{p:[0,t.leftbottom],x:1,y:0,o:0};case 21:return n&Xs?{p:[0,t.leftbottom],x:1,y:0,o:0}:{p:[t.topright,1],x:0,y:-1,o:1};case 22:return n&js?{p:[t.topleft,1],x:0,y:-1,o:0}:{p:[0,t.lefttop],x:1,y:0,o:1};case 23:return n&Xs?{p:[0,t.lefttop],x:1,y:0,o:1}:{p:[t.topright,1],x:0,y:-1,o:1};default:console.log("MarchingSquaresJS-isoBands: edge index out of range!"),console.log(t)}}return null}(a),c=null,h=s,l=o;null!==u&&i.push([u.p[0]+h,u.p[1]+l]);do{if(null===(c=function(t,e,n,r){var i,o,s,a,u,c=t.cval;switch(e){case-1:switch(r){case 0:i=Na[c],s=ea[c],a=na[c],u=ra[c];break;default:i=Ia[c],s=Qs[c],a=$s[c],u=ta[c]}break;case 1:switch(r){case 0:i=Ma[c],s=fa[c],a=ga[c],u=da[c];break;default:i=La[c],s=ha[c],a=la[c],u=pa[c]}break;default:switch(n){case-1:switch(r){case 0:i=Pa[c],s=Vs[c],a=Hs[c],u=Ws[c];break;default:i=Oa[c],s=Js[c],a=Zs[c],u=Ks[c]}break;case 1:switch(r){case 0:i=Sa[c],s=ia[c],a=oa[c],u=sa[c];break;default:i=Ca[c],s=aa[c],a=ua[c],u=ca[c]}}}{if(o=t.edges.indexOf(i),void 0===t.edges[o])return null;!function(t,e){delete t.edges[e];for(var n=e+1;n<t.edges.length;n++)t.edges[n-1]=t.edges[n];t.edges.pop()}(t,o)}switch(c=t.cval_real,i){case 0:c&Xs?(e=t.topleft,n=1):(e=1,n=t.righttop);break;case 1:c&Us?(e=1,n=t.rightbottom):(e=t.topleft,n=1);break;case 2:c&Us?(e=t.topleft,n=1):(e=t.bottomright,n=0);break;case 3:c&Ys?(e=t.bottomleft,n=0):(e=t.topleft,n=1);break;case 4:c&Xs?(e=t.topright,n=1):(e=1,n=t.righttop);break;case 5:c&Us?(e=1,n=t.rightbottom):(e=t.topright,n=1);break;case 6:c&Us?(e=t.topright,n=1):(e=t.bottomright,n=0);break;case 7:c&Ys?(e=t.bottomleft,n=0):(e=t.topright,n=1);break;case 8:c&Us?(e=1,n=t.righttop):(e=t.bottomright,n=0);break;case 9:c&Ys?(e=t.bottomleft,n=0):(e=1,n=t.righttop);break;case 10:c&Ys?(e=1,n=t.righttop):(e=0,n=t.leftbottom);break;case 11:c&js?(e=0,n=t.lefttop):(e=1,n=t.righttop);break;case 12:c&Us?(e=1,n=t.rightbottom):(e=t.bottomright,n=0);break;case 13:c&Ys?(e=t.bottomleft,n=0):(e=1,n=t.rightbottom);break;case 14:c&Ys?(e=1,n=t.rightbottom):(e=0,n=t.leftbottom);break;case 15:c&js?(e=0,n=t.lefttop):(e=1,n=t.rightbottom);break;case 16:c&Us?(e=0,n=t.leftbottom):(e=t.bottomright,n=0);break;case 17:c&js?(e=0,n=t.lefttop):(e=t.bottomright,n=0);break;case 18:c&Ys?(e=t.bottomleft,n=0):(e=0,n=t.leftbottom);break;case 19:c&js?(e=0,n=t.lefttop):(e=t.bottomleft,n=0);break;case 20:c&js?(e=0,n=t.leftbottom):(e=t.topleft,n=1);break;case 21:c&Xs?(e=t.topright,n=1):(e=0,n=t.leftbottom);break;case 22:c&js?(e=0,n=t.lefttop):(e=t.topleft,n=1);break;case 23:c&Xs?(e=t.topright,n=1):(e=0,n=t.lefttop);break;default:return console.log("MarchingSquaresJS-isoBands: edge index out of range!"),console.log(t),null}void 0!==e&&void 0!==n&&void 0!==s&&void 0!==a&&void 0!==u||(console.log("MarchingSquaresJS-isoBands: undefined value!"),console.log(t),console.log(e+" "+n+" "+s+" "+a+" "+u));return{p:[e,n],x:s,y:a,o:u}}(t.cells[l][h],u.x,u.y,u.o)))break;if(i.push([c.p[0]+h,c.p[1]+l]),h+=c.x,l+=c.y,u=c,l<0||l>=n||h<0||h>=r||void 0===t.cells[l][h]){h-=c.x,l-=c.y;var p=function(t,e,n,r,i,o){var s=t.cells[n][e],a=s.cval_real,u=e+r,c=n+i,h=[],l=!1;for(;!l;){if(void 0===t.cells[c]||void 0===t.cells[c][u])if(c-=i,u-=r,s=t.cells[c][u],a=s.cval_real,-1===i)if(0===o)if(a&Ys)h.push([u,c]),r=-1,i=0,o=0;else{if(!(a&Us)){h.push([u+s.bottomright,c]),r=0,i=1,o=1,l=!0;break}h.push([u+1,c]),r=1,i=0,o=0}else{if(!(a&Ys)){if(a&Us){h.push([u+s.bottomright,c]),r=0,i=1,o=1,l=!0;break}h.push([u+s.bottomleft,c]),r=0,i=1,o=0,l=!0;break}h.push([u,c]),r=-1,i=0,o=0}else if(1===i)if(0===o){if(!(a&Xs)){if(a&js){h.push([u+s.topleft,c+1]),r=0,i=-1,o=0,l=!0;break}h.push([u+s.topright,c+1]),r=0,i=-1,o=1,l=!0;break}h.push([u+1,c+1]),r=1,i=0,o=1}else h.push([u+1,c+1]),r=1,i=0,o=1;else if(-1===r)if(0===o){if(!(a&js)){if(a&Ys){h.push([u,c+s.leftbottom]),r=1,i=0,o=0,l=!0;break}h.push([u,c+s.lefttop]),r=1,i=0,o=1,l=!0;break}h.push([u,c+1]),r=0,i=1,o=0}else{if(!(a&js)){console.log("MarchingSquaresJS-isoBands: wtf");break}h.push([u,c+1]),r=0,i=1,o=0}else{if(1!==r){console.log("MarchingSquaresJS-isoBands: we came from nowhere!");break}if(0===o){if(!(a&Us)){h.push([u+1,c+s.rightbottom]),r=-1,i=0,o=0,l=!0;break}h.push([u+1,c]),r=0,i=-1,o=1}else{if(!(a&Us)){if(a&Xs){h.push([u+1,c+s.righttop]),r=-1,i=0,o=1;break}h.push([u+1,c+s.rightbottom]),r=-1,i=0,o=0,l=!0;break}h.push([u+1,c]),r=0,i=-1,o=1}}else if(s=t.cells[c][u],a=s.cval_real,-1===r)if(0===o)if(void 0!==t.cells[c-1]&&void 0!==t.cells[c-1][u])r=0,i=-1,o=1;else{if(!(a&Ys)){h.push([u+s.bottomright,c]),r=0,i=1,o=1,l=!0;break}h.push([u,c])}else{if(!(a&js)){console.log("MarchingSquaresJS-isoBands: found entry from top at "+u+","+c);break}console.log("MarchingSquaresJS-isoBands: proceeding in x-direction!")}else if(1===r){if(0===o){console.log("MarchingSquaresJS-isoBands: wtf");break}if(void 0!==t.cells[c+1]&&void 0!==t.cells[c+1][u])r=0,i=1,o=0;else{if(!(a&Xs)){h.push([u+s.topleft,c+1]),r=0,i=-1,o=0,l=!0;break}h.push([u+1,c+1]),r=1,i=0,o=1}}else if(-1===i){if(1!==o){console.log("MarchingSquaresJS-isoBands: wtf");break}if(void 0!==t.cells[c][u+1])r=1,i=0,o=1;else{if(!(a&Us)){h.push([u+1,c+s.righttop]),r=-1,i=0,o=1,l=!0;break}h.push([u+1,c]),r=0,i=-1,o=1}}else{if(1!==i){console.log("MarchingSquaresJS-isoBands: where did we came from???");break}if(0!==o){console.log("MarchingSquaresJS-isoBands: wtf");break}if(void 0!==t.cells[c][u-1])r=-1,i=0,o=0;else{if(!(a&js)){h.push([u,c+s.leftbottom]),r=1,i=0,o=0,l=!0;break}h.push([u,c+1]),r=0,i=1,o=0}}if(u+=r,c+=i,u===e&&c===n)break}return{path:h,i:u,j:c,x:r,y:i,o:o}}(t,h,l,c.x,c.y,c.o);if(null===p)break;p.path.forEach(function(t){i.push(t)}),h=p.i,l=p.j,u=p}}while(void 0!==t.cells[l][h]&&t.cells[l][h].edges.length>0);e.push(i),i=[],t.cells[o][s].edges.length>0&&s--}return e}(c)),"function"==typeof zs.successCallback&&zs.successCallback(u),u}function lr(t,e,n){return(t-e)/(n-e)}function pr(t){return t.constructor.toString().indexOf("Array")>-1}function fr(t,e,n){if(n=n||{},!I(n))throw new Error("options is invalid");var r=n.pivot,i=n.mutate;if(!t)throw new Error("geojson is required");if(void 0===e||null===e||isNaN(e))throw new Error("angle is required");return 0===e?t:(r||(r=ye(t)),!1!==i&&void 0!==i||(t=Gt(t)),S(t,function(t){var n=sn(r,t)+e,i=un(r,t),o=U(nr(r,i,n));t[0]=o[0],t[1]=o[1]}),t)}function gr(t,e,n){if(n=n||{},!I(n))throw new Error("options is invalid");var r=n.origin,i=n.mutate;if(!t)throw new Error("geojson required");if("number"!=typeof e||0===e)throw new Error("invalid factor");var o=Array.isArray(r)||"object"==typeof r;return!0!==i&&(t=Gt(t)),"FeatureCollection"!==t.type||o?dr(t,e,r):(O(t,function(n,i){t.features[i]=dr(n,e,r)}),t)}function dr(t,e,n){var i="Point"===K(t);return n=function(t,e){void 0!==e&&null!==e||(e="centroid");if(Array.isArray(e)||"object"==typeof e)return X(e);var n=t.bbox?t.bbox:j(t),i=n[0],o=n[1],s=n[2],a=n[3];switch(e){case"sw":case"southwest":case"westsouth":case"bottomleft":return r([i,o]);case"se":case"southeast":case"eastsouth":case"bottomright":return r([s,o]);case"nw":case"northwest":case"westnorth":case"topleft":return r([i,a]);case"ne":case"northeast":case"eastnorth":case"topright":return r([s,a]);case"center":return de(t);case void 0:case null:case"centroid":return ye(t);default:throw new Error("invalid origin")}}(t,n),1===e||i?t:(S(t,function(t){var r=un(n,t),i=sn(n,t),o=U(nr(n,r*e,i));t[0]=o[0],t[1]=o[1],3===t.length&&(t[2]*=e)}),t)}function yr(t){var e=t[0],n=t[1];return[n[0]-e[0],n[1]-e[1]]}function _r(t,e){return t[0]*e[1]-e[0]*t[1]}function mr(t,e){return!function(t,e){return 0===_r(yr(t),yr(e))}(t,e)&&function(t,e){var n=t[0],r=yr(t),i=e[0],o=yr(e),s=_r(r,o);return function(t,e){return[t[0]+e[0],t[1]+e[1]]}(n,function(t,e){return[t*e[0],t*e[1]]}(_r(function(t,e){return[t[0]-e[0],t[1]-e[1]]}(i,n),o)/s,r))}(t,e)}function vr(t,e,n){var r=[],i=_(e,n),o=U(t),s=[];return o.forEach(function(t,e){if(e!==o.length-1){var n=function(t,e,n){var r=Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])),i=t[0]+n*(e[1]-t[1])/r,o=e[0]+n*(e[1]-t[1])/r,s=t[1]+n*(t[0]-e[0])/r,a=e[1]+n*(t[0]-e[0])/r;return[[i,s],[o,a]]}(t,o[e+1],i);if(r.push(n),e>0){var a=r[e-1],u=mr(n,a);!1!==u&&(a[1]=u,n[0]=u),s.push(a[0]),e===o.length-2&&(s.push(n[0]),s.push(n[1]))}2===o.length&&(s.push(n[0]),s.push(n[1]))}}),a(s,t.properties)}function xr(t,e,n){var r=e[0]-t[0],i=e[1]-t[1],o=n[0]-e[0],s=n[1]-e[1];return Math.sign(r*s-o*i)}function Er(t,e){return e.geometry.coordinates[0].every(function(e){return Pt(r(e),t)})}function wr(t,e){for(var n=0;n<t.coordinates.length-1;n++)if(function(t,e,n){var r=n[0]-t[0],i=n[1]-t[1],o=e[0]-t[0],s=e[1]-t[1];if(r*s-i*o!=0)return!1;return Math.abs(o)>=Math.abs(s)?o>0?t[0]<=n[0]&&n[0]<=e[0]:e[0]<=n[0]&&n[0]<=t[0]:s>0?t[1]<=n[1]&&n[1]<=e[1]:e[1]<=n[1]&&n[1]<=t[1]}(t.coordinates[n],t.coordinates[n+1],e.coordinates))return!0;return!1}function br(t,e){return nn(e,kn(t)).features.length>0}function Ir(t,e){return!(t[0]>e[0])&&(!(t[2]<e[2])&&(!(t[1]>e[1])&&!(t[3]<e[3])))}function Nr(t,e){return t[0]===e[0]&&t[1]===e[1]}function Cr(t,e){for(var n=!1,r=!1,i=t.coordinates.length,o=0;o<i&&!n&&!r;){for(var s=0;s<e.coordinates.length-1;s++){var a=!0;0!==s&&s!==e.coordinates.length-2||(a=!1),Lr(e.coordinates[s],e.coordinates[s+1],t.coordinates[o],a)?n=!0:r=!0}o++}return n&&r}function Sr(t,e){return nn(t,kn(e)).features.length>0}function Mr(t,e){for(var n=!1,i=!1,o=t.coordinates[0].length,s=0;s<o&&n&&i;)Pt(r(t.coordinates[0][s]),e)?n=!0:i=!0,s++;return i&&i}function Lr(t,e,n,r){var i=n[0]-t[0],o=n[1]-t[1],s=e[0]-t[0],a=e[1]-t[1];return 0==i*a-o*s&&(r?Math.abs(s)>=Math.abs(a)?s>0?t[0]<=n[0]&&n[0]<=e[0]:e[0]<=n[0]&&n[0]<=t[0]:a>0?t[1]<=n[1]&&n[1]<=e[1]:e[1]<=n[1]&&n[1]<=t[1]:Math.abs(s)>=Math.abs(a)?s>0?t[0]<n[0]&&n[0]<e[0]:e[0]<n[0]&&n[0]<t[0]:a>0?t[1]<n[1]&&n[1]<e[1]:e[1]<n[1]&&n[1]<t[1])}function Pr(t){return t.coordinates.map(function(e){return{type:t.type.replace("Multi",""),coordinates:e}})}function Or(t,e){return t.hasOwnProperty("coordinates")?t.coordinates.length===e.coordinates.length:t.length===e.length}function Rr(t,e){return ka(t,e,{strict:!0})}function Tr(t,e){if(!t)throw new Error("feature1 is required");if(!e)throw new Error("feature2 is required");var n=K(t);if(n!==K(e))throw new Error("features must be of the same type");if("Point"===n)throw new Error("Point geometry not supported");if(new ja({precision:6}).compare(t,e))return!1;var r=0;switch(n){case"MultiPoint":var i=T(t),o=T(e);i.forEach(function(t){o.forEach(function(e){t[0]===e[0]&&t[1]===e[1]&&r++})});break;case"LineString":case"MultiLineString":G(t,function(t){G(e,function(e){$n(t,e).features.length&&r++})});break;case"Polygon":case"MultiPolygon":G(t,function(t){G(e,function(e){nn(t,e).features.length&&r++})})}return r>0}function Ar(t,e,n){n=n||[];for(var r=0;r<t;r++)n[r]=e;return n}function Dr(t,e){if(t.geometry&&t.geometry.type)return t.geometry.type;if(t.type)return t.type;throw new Error("Invalid GeoJSON object for "+e)}function Fr(t){for(var e=t,n=[];e.parent;)n.unshift(e),e=e.parent;return n}function qr(t,e){e=e||{},this.nodes=[],this.diagonal=!!e.diagonal,this.grid=[];for(var n=0;n<t.length;n++){this.grid[n]=[];for(var r=0,i=t[n];r<i.length;r++){var o=new Gr(n,r,i[r]);this.grid[n][r]=o,this.nodes.push(o)}}this.init()}function Gr(t,e,n){this.x=t,this.y=e,this.weight=n}function Br(t){this.content=[],this.scoreFunction=t}function kr(t){return t[0]}function zr(t){return t[1]}function jr(){this._=null}function Xr(t){t.U=t.C=t.L=t.R=t.P=t.N=null}function Ur(t,e){var n=e,r=e.R,i=n.U;i?i.L===n?i.L=r:i.R=r:t._=r,r.U=i,n.U=r,n.R=r.L,n.R&&(n.R.U=n),r.L=n}function Yr(t,e){var n=e,r=e.L,i=n.U;i?i.L===n?i.L=r:i.R=r:t._=r,r.U=i,n.U=r,n.L=r.R,n.L&&(n.L.U=n),r.R=n}function Vr(t){for(;t.L;)t=t.L;return t}function Hr(t,e,n,r){var i=[null,null],o=uu.push(i)-1;return i.left=t,i.right=e,n&&Jr(i,t,e,n),r&&Jr(i,e,t,r),su[t.index].halfedges.push(o),su[e.index].halfedges.push(o),i}function Wr(t,e,n){var r=[e,n];return r.left=t,r}function Jr(t,e,n,r){t[0]||t[1]?t.left===n?t[1]=r:t[0]=r:(t[0]=r,t.left=e,t.right=n)}function Zr(t,e,n,r,i){var o,s=t[0],a=t[1],u=s[0],c=s[1],h=0,l=1,p=a[0]-u,f=a[1]-c;if(o=e-u,p||!(o>0)){if(o/=p,p<0){if(o<h)return;o<l&&(l=o)}else if(p>0){if(o>l)return;o>h&&(h=o)}if(o=r-u,p||!(o<0)){if(o/=p,p<0){if(o>l)return;o>h&&(h=o)}else if(p>0){if(o<h)return;o<l&&(l=o)}if(o=n-c,f||!(o>0)){if(o/=f,f<0){if(o<h)return;o<l&&(l=o)}else if(f>0){if(o>l)return;o>h&&(h=o)}if(o=i-c,f||!(o<0)){if(o/=f,f<0){if(o>l)return;o>h&&(h=o)}else if(f>0){if(o<h)return;o<l&&(l=o)}return!(h>0||l<1)||(h>0&&(t[0]=[u+h*p,c+h*f]),l<1&&(t[1]=[u+l*p,c+l*f]),!0)}}}}}function Kr(t,e,n,r,i){var o=t[1];if(o)return!0;var s,a,u=t[0],c=t.left,h=t.right,l=c[0],p=c[1],f=h[0],g=h[1],d=(l+f)/2,y=(p+g)/2;if(g===p){if(d<e||d>=r)return;if(l>f){if(u){if(u[1]>=i)return}else u=[d,n];o=[d,i]}else{if(u){if(u[1]<n)return}else u=[d,i];o=[d,n]}}else if(s=(l-f)/(g-p),a=y-s*d,s<-1||s>1)if(l>f){if(u){if(u[1]>=i)return}else u=[(n-a)/s,n];o=[(i-a)/s,i]}else{if(u){if(u[1]<n)return}else u=[(i-a)/s,i];o=[(n-a)/s,n]}else if(p<g){if(u){if(u[0]>=r)return}else u=[e,s*e+a];o=[r,s*r+a]}else{if(u){if(u[0]<e)return}else u=[r,s*r+a];o=[e,s*e+a]}return t[0]=u,t[1]=o,!0}function Qr(t,e){var n=t.site,r=e.left,i=e.right;return n===i&&(i=r,r=n),i?Math.atan2(i[1]-r[1],i[0]-r[0]):(n===r?(r=e[1],i=e[0]):(r=e[0],i=e[1]),Math.atan2(r[0]-i[0],i[1]-r[1]))}function $r(t,e){return e[+(e.left!==t.site)]}function ti(t,e){return e[+(e.left===t.site)]}function ei(t){var e=t.P,n=t.N;if(e&&n){var r=e.site,i=t.site,o=n.site;if(r!==o){var s=i[0],a=i[1],u=r[0]-s,c=r[1]-a,h=o[0]-s,l=o[1]-a,p=2*(u*l-c*h);if(!(p>=-pu)){var f=u*u+c*c,g=h*h+l*l,d=(l*f-c*g)/p,y=(u*g-h*f)/p,_=cu.pop()||new function(){Xr(this),this.x=this.y=this.arc=this.site=this.cy=null};_.arc=t,_.site=i,_.x=d+s,_.y=(_.cy=y+a)+Math.sqrt(d*d+y*y),t.circle=_;for(var m=null,v=au._;v;)if(_.y<v.y||_.y===v.y&&_.x<=v.x){if(!v.L){m=v.P;break}v=v.L}else{if(!v.R){m=v;break}v=v.R}au.insert(m,_),m||(iu=_)}}}}function ni(t){var e=t.circle;e&&(e.P||(iu=e.N),au.remove(e),cu.push(e),Xr(e),t.circle=null)}function ri(t){var e=hu.pop()||new function(){Xr(this),this.edge=this.site=this.circle=null};return e.site=t,e}function ii(t){ni(t),ou.remove(t),hu.push(t),Xr(t)}function oi(t){var e=t.circle,n=e.x,r=e.cy,i=[n,r],o=t.P,s=t.N,a=[t];ii(t);for(var u=o;u.circle&&Math.abs(n-u.circle.x)<lu&&Math.abs(r-u.circle.cy)<lu;)o=u.P,a.unshift(u),ii(u),u=o;a.unshift(u),ni(u);for(var c=s;c.circle&&Math.abs(n-c.circle.x)<lu&&Math.abs(r-c.circle.cy)<lu;)s=c.N,a.push(c),ii(c),c=s;a.push(c),ni(c);var h,l=a.length;for(h=1;h<l;++h)c=a[h],u=a[h-1],Jr(c.edge,u.site,c.site,i);u=a[0],(c=a[l-1]).edge=Hr(u.site,c.site,null,i),ei(u),ei(c)}function si(t){for(var e,n,r,i,o=t[0],s=t[1],a=ou._;a;)if((r=ai(a,s)-o)>lu)a=a.L;else{if(!((i=o-function(t,e){var n=t.N;if(n)return ai(n,e);var r=t.site;return r[1]===e?r[0]:1/0}(a,s))>lu)){r>-lu?(e=a.P,n=a):i>-lu?(e=a,n=a.N):e=n=a;break}if(!a.R){e=a;break}a=a.R}!function(t){su[t.index]={site:t,halfedges:[]}}(t);var u=ri(t);if(ou.insert(e,u),e||n){if(e===n)return ni(e),n=ri(e.site),ou.insert(u,n),u.edge=n.edge=Hr(e.site,u.site),ei(e),void ei(n);if(n){ni(e),ni(n);var c=e.site,h=c[0],l=c[1],p=t[0]-h,f=t[1]-l,g=n.site,d=g[0]-h,y=g[1]-l,_=2*(p*y-f*d),m=p*p+f*f,v=d*d+y*y,x=[(y*m-f*v)/_+h,(p*v-d*m)/_+l];Jr(n.edge,c,g,x),u.edge=Hr(c,t,null,x),n.edge=Hr(t,g,null,x),ei(e),ei(n)}else u.edge=Hr(e.site,u.site)}}function ai(t,e){var n=t.site,r=n[0],i=n[1],o=i-e;if(!o)return r;var s=t.P;if(!s)return-1/0;var a=(n=s.site)[0],u=n[1],c=u-e;if(!c)return a;var h=a-r,l=1/o-1/c,p=h/c;return l?(-p+Math.sqrt(p*p-2*l*(h*h/(-2*c)-u+c/2+i-o/2)))/l+r:(r+a)/2}function ui(t,e,n){return(t[0]-n[0])*(e[1]-t[1])-(t[0]-e[0])*(n[1]-t[1])}function ci(t,e){return e[1]-t[1]||e[0]-t[0]}function hi(t,e){var n,r,i,o=t.sort(ci).pop();for(uu=[],su=new Array(t.length),ou=new jr,au=new jr;;)if(i=iu,o&&(!i||o[1]<i.y||o[1]===i.y&&o[0]<i.x))o[0]===n&&o[1]===r||(si(o),n=o[0],r=o[1]),o=t.pop();else{if(!i)break;oi(i.arc)}if(function(){for(var t,e,n,r,i=0,o=su.length;i<o;++i)if((t=su[i])&&(r=(e=t.halfedges).length)){var s=new Array(r),a=new Array(r);for(n=0;n<r;++n)s[n]=n,a[n]=Qr(t,uu[e[n]]);for(s.sort(function(t,e){return a[e]-a[t]}),n=0;n<r;++n)a[n]=e[s[n]];for(n=0;n<r;++n)e[n]=a[n]}}(),e){var s=+e[0][0],a=+e[0][1],u=+e[1][0],c=+e[1][1];!function(t,e,n,r){for(var i,o=uu.length;o--;)Kr(i=uu[o],t,e,n,r)&&Zr(i,t,e,n,r)&&(Math.abs(i[0][0]-i[1][0])>lu||Math.abs(i[0][1]-i[1][1])>lu)||delete uu[o]}(s,a,u,c),function(t,e,n,r){var i,o,s,a,u,c,h,l,p,f,g,d,y=su.length,_=!0;for(i=0;i<y;++i)if(o=su[i]){for(s=o.site,a=(u=o.halfedges).length;a--;)uu[u[a]]||u.splice(a,1);for(a=0,c=u.length;a<c;)g=(f=ti(o,uu[u[a]]))[0],d=f[1],l=(h=$r(o,uu[u[++a%c]]))[0],p=h[1],(Math.abs(g-l)>lu||Math.abs(d-p)>lu)&&(u.splice(a,0,uu.push(Wr(s,f,Math.abs(g-t)<lu&&r-d>lu?[t,Math.abs(l-t)<lu?p:r]:Math.abs(d-r)<lu&&n-g>lu?[Math.abs(p-r)<lu?l:n,r]:Math.abs(g-n)<lu&&d-e>lu?[n,Math.abs(l-n)<lu?p:e]:Math.abs(d-e)<lu&&g-t>lu?[Math.abs(p-e)<lu?l:t,e]:null))-1),++c);c&&(_=!1)}if(_){var m,v,x,E=1/0;for(i=0,_=null;i<y;++i)(o=su[i])&&(x=(m=(s=o.site)[0]-t)*m+(v=s[1]-e)*v)<E&&(E=x,_=o);if(_){var w=[t,e],b=[t,r],I=[n,r],N=[n,e];_.halfedges.push(uu.push(Wr(s=_.site,w,b))-1,uu.push(Wr(s,b,I))-1,uu.push(Wr(s,I,N))-1,uu.push(Wr(s,N,w))-1)}}for(i=0;i<y;++i)(o=su[i])&&(o.halfedges.length||delete su[i])}(s,a,u,c)}this.edges=uu,this.cells=su,ou=au=uu=su=null}function li(t){return(t=t.slice()).push(t[0]),o([t])}function pi(t,e,n,r){var i=(r=r||{}).steps||64,s=r.units||"kilometers",a=r.angle||0,u=r.pivot||t,c=r.properties||t.properties||{};if(!t)throw new Error("center is required");if(!e)throw new Error("xSemiAxis is required");if(!n)throw new Error("ySemiAxis is required");if(!I(r))throw new Error("options must be an object");if(!b(i))throw new Error("steps must be a number");if(!b(a))throw new Error("angle must be a number");var h=X(t);if("degrees"===s)var l=x(a);else e=nr(t,e,90,{units:s}),n=nr(t,n,0,{units:s}),e=X(e)[0]-h[0],n=X(n)[1]-h[1];for(var p=[],f=0;f<i;f+=1){var g=-360*f/i,d=e*n/Math.sqrt(Math.pow(n,2)+Math.pow(e,2)*Math.pow(fi(g),2)),y=e*n/Math.sqrt(Math.pow(e,2)+Math.pow(n,2)/Math.pow(fi(g),2));if(g<-90&&g>=-270&&(d=-d),g<-180&&g>=-360&&(y=-y),"degrees"===s){var _=d*Math.cos(l)+y*Math.sin(l),m=y*Math.cos(l)-d*Math.sin(l);d=_,y=m}p.push([d+h[0],y+h[1]])}return p.push(p[0]),"degrees"===s?o([p],c):fr(o([p],c),a,{pivot:u})}function fi(t){var e=t*Math.PI/180;return Math.tan(e)}function gi(t,e){if(e=e||{},!I(e))throw new Error("options is invalid");var n=e.properties,i=e.weight;if(!t)throw new Error("geojson is required");var o=0,s=0,a=0;return A(t,function(t,e,n){var r=n[i];if(r=void 0===r||null===r?1:r,!b(r))throw new Error("weight value must be a number for feature index "+e);(r=Number(r))>0&&S(t,function(t){o+=t[0]*r,s+=t[1]*r,a+=r})}),r([o/a,s/a],n)}function di(t,e,n,i){var o=n.properties.tolerance||.001,s=0,a=0,u=0,c=0;if(O(n,function(e){var n=e.properties.weight,r=void 0===n||null===n?1:n;if(r=Number(r),!b(r))throw new Error("weight value must be a number");if(r>0){c+=1;var i=r*qt(e,t);0===i&&(i=1);var o=r/i;s+=e.geometry.coordinates[0]*o,a+=e.geometry.coordinates[1]*o,u+=o}}),c<1)throw new Error("no features to measure");var h=s/u,l=a/u;return 1===c||0===i||Math.abs(h-e[0])<o&&Math.abs(l-e[1])<o?r([h,l],{medianCandidates:n.properties.medianCandidates}):(n.properties.medianCandidates.push([h,l]),di([h,l],t,n,i-1))}function yi(t,e){return{x:t[0]-e[0],y:t[1]-e[1]}}function _i(t){if(I(t)&&(t=t.bbox),t&&!Array.isArray(t))throw new Error("bbox is invalid");return t?function(t){return[Math.random()*(t[2]-t[0])+t[0],Math.random()*(t[3]-t[1])+t[1]]}(t):[360*Ei(),180*Ei()]}function mi(t,e){if(e=e||{},!I(e))throw new Error("options is invalid");var n=e.bbox;void 0!==t&&null!==t||(t=1);for(var i=[],o=0;o<t;o++)i.push(r(_i(n)));return c(i)}function vi(t,e){if(e=e||{},!I(e))throw new Error("options is invalid");var n=e.bbox,r=e.num_vertices,i=e.max_radial_length;void 0!==t&&null!==t||(t=1),b(r)||(r=10),b(i)||(i=10);for(var s=[],a=0;a<t;a++){var u=[],h=Array.apply(null,new Array(r+1)).map(Math.random);h.forEach(function(t,e,n){n[e]=e>0?t+n[e-1]:t}),h.forEach(function(t){t=2*t*Math.PI/h[h.length-1];var e=Math.random();u.push([e*i*Math.sin(t),e*i*Math.cos(t)])}),u[u.length-1]=u[0],u=u.map(function(t){return function(e){return[e[0]+t[0],e[1]+t[1]]}}(_i(n))),s.push(o([u]))}return c(s)}function xi(t,e){if(e=e||{},!I(e))throw new Error("options is invalid");var n=e.bbox,r=e.num_vertices,i=e.max_length,o=e.max_rotation;void 0!==t&&null!==t||(t=1),(!b(r)||r<2)&&(r=10),b(i)||(i=1e-4),b(o)||(o=Math.PI/8);for(var s=[],u=0;u<t;u++){for(var h=[_i(n)],l=0;l<r-1;l++){var p=(0===l?2*Math.random()*Math.PI:Math.tan((h[l][1]-h[l-1][1])/(h[l][0]-h[l-1][0])))+(Math.random()-.5)*o*2,f=Math.random()*i;h.push([h[l][0]+f*Math.cos(p),h[l][1]+f*Math.sin(p)])}s.push(a(h))}return c(s)}function Ei(){return Math.random()-.5}function wi(t,e){if(!t)throw new Error("geojson is required");if("FeatureCollection"!==t.type)throw new Error("geojson must be a FeatureCollection");if(void 0===e||null===e)throw new Error("filter is required");var n=[];return O(t,function(t){Ci(t.properties,e)&&n.push(t)}),c(n)}function bi(t,e,n){if(!t)throw new Error("geojson is required");if("FeatureCollection"!==t.type)throw new Error("geojson must be a FeatureCollection");if(void 0===e||null===e)throw new Error("property is required");for(var r=Ni(t,e),i=Object.keys(r),o=0;o<i.length;o++){for(var s=i[o],a=r[s],u=[],h=0;h<a.length;h++)u.push(t.features[a[h]]);n(c(u),s,o)}}function Ii(t,e,n,r){var i=r;return bi(t,e,function(t,e,o){i=0===o&&void 0===r?t:n(i,t,e,o)}),i}function Ni(t,e){var n={};return O(t,function(t,r){var i=t.properties||{};if(i.hasOwnProperty(e)){var o=i[e];n.hasOwnProperty(o)?n[o].push(r):n[o]=[r]}}),n}function Ci(t,e){if(void 0===t)return!1;var n=typeof e;if("number"===n||"string"===n)return t.hasOwnProperty(e);if(Array.isArray(e)){for(var r=0;r<e.length;r++)if(!Ci(t,e[r]))return!1;return!0}return Si(t,e)}function Si(t,e){for(var n=Object.keys(e),r=0;r<n.length;r++){var i=n[r];if(t[i]!==e[i])return!1}return!0}function Mi(t,e){if(!e)return{};if(!e.length)return{};for(var n={},r=0;r<e.length;r++){var i=e[r];t.hasOwnProperty(i)&&(n[i]=t[i])}return n}function Li(){}function Pi(t){this.message=t||""}function Oi(t){this.message=t||""}function Ri(){}function Ti(t){return null===t?Ac:t.color}function Ai(t){return null===t?null:t.parent}function Di(t,e){null!==t&&(t.color=e)}function Fi(t){return null===t?null:t.left}function qi(t){return null===t?null:t.right}function Gi(){this.root_=null,this.size_=0}function Bi(){}function ki(){this.array_=[],arguments[0]instanceof vc&&this.addAll(arguments[0])}function zi(){}function ji(t){this.message=t||""}function Xi(){this.array_=[]}function Ui(t){switch(t.type){case"Polygon":return mn(t)>1?t:null;case"MultiPolygon":var e=[];if(F(t,function(t){mn(t)>1&&e.push(t.geometry.coordinates)}),e.length)return{type:"MultiPolygon",coordinates:e}}}function Yi(){this.reset()}function Vi(t,e,n){var r=t.s=e+n,i=r-e,o=r-i;t.t=e-o+(n-i)}function Hi(t){return t>1?kf:t<-1?-kf:Math.asin(t)}function Wi(){}function Ji(t,e){t&&eg.hasOwnProperty(t.type)&&eg[t.type](t,e)}function Zi(t,e,n){var r,i=-1,o=t.length-n;for(e.lineStart();++i<o;)r=t[i],e.point(r[0],r[1],r[2]);e.lineEnd()}function Ki(t,e){var n=-1,r=t.length;for(e.polygonStart();++n<r;)Zi(t[n],e,1);e.polygonEnd()}function Qi(t){return[Hf(t[1],t[0]),Hi(t[2])]}function $i(t){var e=t[0],n=t[1],r=Wf(n);return[r*Wf(e),r*Kf(e),Kf(n)]}function to(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function eo(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function no(t,e){t[0]+=e[0],t[1]+=e[1],t[2]+=e[2]}function ro(t,e){return[t[0]*e,t[1]*e,t[2]*e]}function io(t){var e=Qf(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=e,t[1]/=e,t[2]/=e}function oo(t,e){return[t>Bf?t-jf:t<-Bf?t+jf:t,e]}function so(t,e,n){return(t%=jf)?e||n?rg(uo(t),co(e,n)):uo(t):e||n?co(e,n):oo}function ao(t){return function(e,n){return e+=t,[e>Bf?e-jf:e<-Bf?e+jf:e,n]}}function uo(t){var e=ao(t);return e.invert=ao(-t),e}function co(t,e){function n(t,e){var n=Wf(e),a=Wf(t)*n,u=Kf(t)*n,c=Kf(e),h=c*r+a*i;return[Hf(u*o-h*s,a*r-c*i),Hi(h*o+u*s)]}var r=Wf(t),i=Kf(t),o=Wf(e),s=Kf(e);return n.invert=function(t,e){var n=Wf(e),a=Wf(t)*n,u=Kf(t)*n,c=Kf(e),h=c*o-u*s;return[Hf(u*o+c*s,a*r+h*i),Hi(h*r-a*i)]},n}function ho(t,e){(e=$i(e))[0]-=t,io(e);var n=function(t){return t>1?0:t<-1?Bf:Math.acos(t)}(-e[1]);return((-e[2]<0?-n:n)+jf-Gf)%jf}function lo(t,e,n,r){this.x=t,this.z=e,this.o=n,this.e=r,this.v=!1,this.n=this.p=null}function po(t){if(e=t.length){for(var e,n,r=0,i=t[0];++r<e;)i.n=n=t[r],n.p=i,i=n;i.n=n=t[0],n.p=i}}function fo(t,e,n,r){function i(i,o){return t<=i&&i<=n&&e<=o&&o<=r}function o(i,o,a,c){var h=0,l=0;if(null==i||(h=s(i,a))!==(l=s(o,a))||u(i,o)<0^a>0)do{c.point(0===h||3===h?t:n,h>1?r:e)}while((h=(h+a+4)%4)!==l);else c.point(o[0],o[1])}function s(r,i){return Yf(r[0]-t)<Gf?i>0?0:3:Yf(r[0]-n)<Gf?i>0?2:1:Yf(r[1]-e)<Gf?i>0?1:0:i>0?3:2}function a(t,e){return u(t.x,e.x)}function u(t,e){var n=s(t,1),r=s(e,1);return n!==r?n-r:0===n?e[1]-t[1]:1===n?t[0]-e[0]:2===n?t[1]-e[1]:e[0]-t[0]}return function(s){function u(t,e){i(t,e)&&E.point(t,e)}function c(o,s){var a=i(o,s);if(l&&p.push([o,s]),v)f=o,g=s,d=a,v=!1,a&&(E.lineStart(),E.point(o,s));else if(a&&m)E.point(o,s);else{var u=[y=Math.max(pg,Math.min(lg,y)),_=Math.max(pg,Math.min(lg,_))],c=[o=Math.max(pg,Math.min(lg,o)),s=Math.max(pg,Math.min(lg,s))];sg(u,c,t,e,n,r)?(m||(E.lineStart(),E.point(u[0],u[1])),E.point(c[0],c[1]),a||E.lineEnd(),x=!1):a&&(E.lineStart(),E.point(o,s),x=!1)}y=o,_=s,m=a}var h,l,p,f,g,d,y,_,m,v,x,E=s,w=og(),b={point:u,lineStart:function(){b.point=c,l&&l.push(p=[]),v=!0,m=!1,y=_=NaN},lineEnd:function(){h&&(c(f,g),d&&m&&w.rejoin(),h.push(w.result())),b.point=u,m&&E.lineEnd()},polygonStart:function(){E=w,h=[],l=[],x=!0},polygonEnd:function(){var e=function(){for(var e=0,n=0,i=l.length;n<i;++n)for(var o,s,a=l[n],u=1,c=a.length,h=a[0],p=h[0],f=h[1];u<c;++u)o=p,s=f,p=(h=a[u])[0],f=h[1],s<=r?f>r&&(p-o)*(r-s)>(f-s)*(t-o)&&++e:f<=r&&(p-o)*(r-s)<(f-s)*(t-o)&&--e;return e}(),n=x&&e,i=(h=hg(h)).length;(n||i)&&(s.polygonStart(),n&&(s.lineStart(),o(null,null,1,s),s.lineEnd()),i&&ug(h,a,e,o,s),s.polygonEnd()),E=s,h=l=p=null}};return b}}function go(t){return t.length>1}function yo(t,e){return((t=t.x)[0]<0?t[1]-kf-Gf:kf-t[1])-((e=e.x)[0]<0?e[1]-kf-Gf:kf-e[1])}function _o(t){return function(e){var n=new mo;for(var r in t)n[r]=t[r];return n.stream=e,n}}function mo(){}function vo(t,e,n){var r=e[1][0]-e[0][0],i=e[1][1]-e[0][1],o=t.clipExtent&&t.clipExtent();t.scale(150).translate([0,0]),null!=o&&t.clipExtent(null),ng(n,t.stream(vg));var s=vg.result(),a=Math.min(r/(s[1][0]-s[0][0]),i/(s[1][1]-s[0][1])),u=+e[0][0]+(r-a*(s[1][0]+s[0][0]))/2,c=+e[0][1]+(i-a*(s[1][1]+s[0][1]))/2;return null!=o&&t.clipExtent(o),t.scale(150*a).translate([u,c])}function xo(t){return function(t){function e(t){return t=c(t[0]*Uf,t[1]*Uf),[t[0]*d+s,a-t[1]*d]}function n(t,e){return t=o(t,e),[t[0]*d+s,a-t[1]*d]}function r(){c=rg(u=so(x,E,w),o);var t=o(m,v);return s=y-t[0]*d,a=_+t[1]*d,i()}function i(){return f=g=null,e}var o,s,a,u,c,h,l,p,f,g,d=150,y=480,_=250,m=0,v=0,x=0,E=0,w=0,b=null,I=Eg,N=null,C=gg,S=.5,M=Ng(n,S);e.stream=function(t){return f&&g===t?f:f=Cg(I(u,M(C(g=t))))},e.clipAngle=function(t){return arguments.length?(I=+t?wg(b=t*Uf,6*Uf):(b=null,Eg),i()):b*Xf},e.clipExtent=function(t){return arguments.length?(C=null==t?(N=h=l=p=null,gg):fo(N=+t[0][0],h=+t[0][1],l=+t[1][0],p=+t[1][1]),i()):null==N?null:[[N,h],[l,p]]},e.scale=function(t){return arguments.length?(d=+t,r()):d},e.translate=function(t){return arguments.length?(y=+t[0],_=+t[1],r()):[y,_]},e.center=function(t){return arguments.length?(m=t[0]%360*Uf,v=t[1]%360*Uf,r()):[m*Xf,v*Xf]},e.rotate=function(t){return arguments.length?(x=t[0]%360*Uf,E=t[1]%360*Uf,w=t.length>2?t[2]%360*Uf:0,r()):[x*Xf,E*Xf,w*Xf]},e.precision=function(t){return arguments.length?(M=Ng(n,S=t*t),i()):Qf(S)},e.fitExtent=function(t,n){return vo(e,t,n)},e.fitSize=function(t,n){return function(t,e,n){return vo(t,[[0,0],e],n)}(e,t,n)};return function(){return o=t.apply(this,arguments),e.invert=o.invert&&function(t){return(t=c.invert((t[0]-s)/d,(a-t[1])/d))&&[t[0]*Xf,t[1]*Xf]},r()}}(function(){return t})()}function Eo(t,e){return[t,Zf($f((kf+e)/2))]}function wo(t,e){return[Zf($f((kf+e)/2)),-t]}function bo(t,n,r,i){var o=t.properties||{},s="Feature"===t.type?t.geometry:t;if("GeometryCollection"===s.type){var a=[];return A(t,function(t){var e=bo(t,n,r,i);e&&a.push(e)}),c(a)}var u,h=j(t),l=h[1]>50&&h[3]>50;u=l?{type:s.type,coordinates:No(s.coordinates,So(s))}:cn(s);var p=(new bh).read(u),f=d(y(n,r),"meters"),g=gp.bufferOp(p,f);if(g=(new Ih).write(g),!Io(g.coordinates)){var _;return(_=l?{type:g.type,coordinates:Co(g.coordinates,So(s))}:hn(g)).geometry?_:e(_,o)}}function Io(t){return Array.isArray(t[0])?Io(t[0]):isNaN(t[0])}function No(t,e){return"object"!=typeof t[0]?e(t):t.map(function(t){return No(t,e)})}function Co(t,e){return"object"!=typeof t[0]?e.invert(t):t.map(function(t){return Co(t,e)})}function So(t){var e=de(t).geometry.coordinates.reverse(),n=e.map(function(t){return-t});return Sg().center(e).rotate(n).scale(Fo)}function Mo(){for(var t=new bh,e=t.read(JSON.stringify(arguments[0].geometry)),n=1;n<arguments.length;n++)e=Df.union(e,t.read(JSON.stringify(arguments[n].geometry)));return e=(new Ih).write(e),{type:"Feature",geometry:e,properties:arguments[0].properties}}function Lo(t,n){var r=J(t),i=J(n);if(te(Pn(i,{precision:4})).coordinates[0].length<4)return null;if(te(Pn(r,{precision:4})).coordinates[0].length<4)return null;var o=new bh,s=o.read(Pn(r)),a=o.read(Pn(i)),u=Cf.intersection(s,a);if(u.isEmpty())return null;return e((new Ih).write(u))}function Po(t,e){return function(t,e,n){var r,i;if(!Array.isArray(e))throw new Error("Get closest expects an array as second argument");return e.forEach(function(e,o){var s=n(e,t);s>=0&&(void 0===i||s<i)&&(i=s,r=o)}),r}(t,e,function(t,e){return t-e})}function Oo(t,e,n){if(n=n||{},!I(n))throw new Error("options is invalid");var r=n.properties||{},i=n.triangles,s=n.mask;if(null===e||void 0===e)throw new Error("cellSide is required");if(!b(e))throw new Error("cellSide is invalid");if(!t)throw new Error("bbox is required");if(!Array.isArray(t))throw new Error("bbox must be array");if(4!==t.length)throw new Error("bbox must contain 4 numbers");if(s&&-1===["Polygon","MultiPolygon"].indexOf(K(s)))throw new Error("options.mask must be a (Multi)Polygon");var a=t[0],u=t[1],h=t[2],l=t[3],p=(u+l)/2,f=(a+h)/2,g=2*e/qt([a,p],[h,p],n)*(h-a),d=2*e/qt([f,u],[f,l],n)*(l-u),y=g/2,_=2*y,m=Math.sqrt(3)/2*d,v=h-a,x=l-u,E=.75*_,w=m,N=(v-_)/(_-y/2),C=Math.floor(N),S=(C*E-y/2-v)/2-y/2+E/2,M=Math.floor((x-m)/m),L=(x-M*m)/2,P=M*m-x>m/2;P&&(L-=m/4);for(var O=[],R=[],T=0;T<6;T++){var A=2*Math.PI/6*T;O.push(Math.cos(A)),R.push(Math.sin(A))}for(var D=[],F=0;F<=C;F++)for(var q=0;q<=M;q++){var G=F%2==1;if((0!==q||!G)&&(0!==q||!P)){var B=F*E+a-S,k=q*w+u+L;if(G&&(k-=m/2),!0===i)(function(t,e,n,r,i,s){for(var a=[],u=0;u<6;u++){var c=[];c.push(t),c.push([t[0]+e*i[u],t[1]+n*s[u]]),c.push([t[0]+e*i[(u+1)%6],t[1]+n*s[(u+1)%6]]),c.push(t),a.push(o([c],r))}return a})([B,k],g/2,d/2,r,O,R).forEach(function(t){s?Lo(s,t)&&D.push(t):D.push(t)});else{var z=function(t,e,n,r,i,s){for(var a=[],u=0;u<6;u++){var c=t[0]+e*i[u],h=t[1]+n*s[u];a.push([c,h])}return a.push(a[0].slice()),o([a],r)}([B,k],g/2,d/2,r,O,R);s?Lo(s,z)&&D.push(z):D.push(z)}}}return c(D)}function Ro(t){if(t.features.length<=1)return t;var e=function(t){var e=Vo(),n=[];return F(t,function(t,e){var r=j(t);n.push({minX:r[0],minY:r[1],maxX:r[2],maxY:r[3],geojson:t,index:e})}),e.load(n),e}(t),n=[],r={};return F(t,function(t,i){if(r[i])return!0;for(e.remove({index:i},To),r[i]=!0;;){var o=j(t),s=e.search({minX:o[0],minY:o[1],maxX:o[2],maxY:o[3]});if(s.length>0){var a=s.map(function(t){return r[t.index]=!0,e.remove({index:t.index},To),t.geojson});a.push(t),t=Mo.apply(this,a)}if(0===s.length)break}n.push(t)}),c(n)}function To(t,e){return t.index===e.index}function Ao(t,e,n){if(n=n||{},!I(n))throw new Error("options is invalid");var r=n.properties,i=n.mask,s=[];if(null===e||void 0===e)throw new Error("cellSide is required");if(!b(e))throw new Error("cellSide is invalid");if(!t)throw new Error("bbox is required");if(!Array.isArray(t))throw new Error("bbox must be array");if(4!==t.length)throw new Error("bbox must contain 4 numbers");if(i&&-1===["Polygon","MultiPolygon"].indexOf(K(i)))throw new Error("options.mask must be a (Multi)Polygon");for(var a=t[0],u=t[1],h=t[2],l=t[3],p=e/qt([a,u],[h,u],n)*(h-a),f=e/qt([a,u],[a,l],n)*(l-u),g=h-a,d=l-u,y=Math.floor(g/p),_=Math.floor(d/f),m=(d-_*f)/2,v=a+(g-y*p)/2,x=0;x<y;x++){for(var E=u+m,w=0;w<_;w++){var N=o([[[v,E],[v,E+f],[v+p,E+f],[v+p,E],[v,E]]],r);i?Lo(i,N)&&s.push(N):s.push(N),E+=f}v+=p}return c(s)}function Do(t,e,n){if(n=n||{},!I(n))throw new Error("options is invalid");var r=n.properties,i=n.mask,s=[];if(null===e||void 0===e)throw new Error("cellSide is required");if(!b(e))throw new Error("cellSide is invalid");if(!t)throw new Error("bbox is required");if(!Array.isArray(t))throw new Error("bbox must be array");if(4!==t.length)throw new Error("bbox must contain 4 numbers");if(i&&-1===["Polygon","MultiPolygon"].indexOf(K(i)))throw new Error("options.mask must be a (Multi)Polygon");for(var a=e/qt([t[0],t[1]],[t[2],t[1]],n)*(t[2]-t[0]),u=e/qt([t[0],t[1]],[t[0],t[3]],n)*(t[3]-t[1]),h=0,l=t[0];l<=t[2];){for(var p=0,f=t[1];f<=t[3];){var g=null,d=null;h%2==0&&p%2==0?(g=o([[[l,f],[l,f+u],[l+a,f],[l,f]]],r),d=o([[[l,f+u],[l+a,f+u],[l+a,f],[l,f+u]]],r)):h%2==0&&p%2==1?(g=o([[[l,f],[l+a,f+u],[l+a,f],[l,f]]],r),d=o([[[l,f],[l,f+u],[l+a,f+u],[l,f]]],r)):p%2==0&&h%2==1?(g=o([[[l,f],[l,f+u],[l+a,f+u],[l,f]]],r),d=o([[[l,f],[l+a,f+u],[l+a,f],[l,f]]],r)):p%2==1&&h%2==1&&(g=o([[[l,f],[l,f+u],[l+a,f],[l,f]]],r),d=o([[[l,f+u],[l+a,f+u],[l+a,f],[l,f+u]]],r)),i?(Lo(i,g)&&s.push(g),Lo(i,d)&&s.push(d)):(s.push(g),s.push(d)),f+=u,p++}h++,l+=a}return c(s)}var Fo=6371008.8,qo={meters:Fo,metres:Fo,millimeters:1e3*Fo,millimetres:1e3*Fo,centimeters:100*Fo,centimetres:100*Fo,kilometers:Fo/1e3,kilometres:Fo/1e3,miles:Fo/1609.344,nauticalmiles:Fo/1852,inches:39.37*Fo,yards:Fo/1.0936,feet:3.28084*Fo,radians:1,degrees:Fo/111325},Go={meters:1,metres:1,millimeters:1e3,millimetres:1e3,centimeters:100,centimetres:100,kilometers:.001,kilometres:.001,miles:1/1609.344,nauticalmiles:1/1852,inches:39.37,yards:1/1.0936,feet:3.28084,radians:1/Fo,degrees:1/111325},Bo={meters:1,metres:1,millimeters:1e6,millimetres:1e6,centimeters:1e4,centimetres:1e4,kilometers:1e-6,kilometres:1e-6,acres:247105e-9,miles:3.86e-7,yards:1.195990046,feet:10.763910417,inches:1550.003100006},ko=Object.freeze({earthRadius:Fo,factors:qo,unitsFactors:Go,areaFactors:Bo,feature:e,geometry:n,point:r,points:i,polygon:o,polygons:s,lineString:a,lineStrings:u,featureCollection:c,multiLineString:h,multiPoint:l,multiPolygon:p,geometryCollection:f,round:g,radiansToLength:d,lengthToRadians:y,lengthToDegrees:_,bearingToAzimuth:m,radiansToDegrees:v,degreesToRadians:x,convertLength:E,convertArea:w,isNumber:b,isObject:I,validateBBox:N,validateId:C,radians2degrees:function(){throw new Error("method has been renamed to `radiansToDegrees`")},degrees2radians:function(){throw new Error("method has been renamed to `degreesToRadians`")},distanceToDegrees:function(){throw new Error("method has been renamed to `lengthToDegrees`")},distanceToRadians:function(){throw new Error("method has been renamed to `lengthToRadians`")},radiansToDistance:function(){throw new Error("method has been renamed to `radiansToLength`")},bearingToAngle:function(){throw new Error("method has been renamed to `bearingToAzimuth`")},convertDistance:function(){throw new Error("method has been renamed to `convertLength`")}}),zo=Object.freeze({coordEach:S,coordReduce:M,propEach:L,propReduce:P,featureEach:O,featureReduce:R,coordAll:T,geomEach:A,geomReduce:D,flattenEach:F,flattenReduce:q,segmentEach:G,segmentReduce:B,lineEach:k,lineReduce:z}),jo=Object.freeze({getCoord:X,getCoords:U,containsNumber:Y,geojsonType:V,featureOf:H,collectionOf:W,getGeom:J,getGeomType:Z,getType:K}),Xo={successCallback:null,verbose:!1},Uo={},Yo=it,Vo=st;st.prototype={all:function(){return this._all(this.data,[])},search:function(t){var e=this.data,n=[],r=this.toBBox;if(!dt(t,e))return n;for(var i,o,s,a,u=[];e;){for(i=0,o=e.children.length;i<o;i++)s=e.children[i],dt(t,a=e.leaf?r(s):s)&&(e.leaf?n.push(s):gt(t,a)?this._all(s,n):u.push(s));e=u.pop()}return n},collides:function(t){var e=this.data,n=this.toBBox;if(!dt(t,e))return!1;for(var r,i,o,s,a=[];e;){for(r=0,i=e.children.length;r<i;r++)if(o=e.children[r],s=e.leaf?n(o):o,dt(t,s)){if(e.leaf||gt(t,s))return!0;a.push(o)}e=a.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}var r=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===r.height)this._splitRoot(this.data,r);else{if(this.data.height<r.height){var i=this.data;this.data=r,r=i}this._insert(r,this.data.height-r.height-1,!0)}else this.data=r;return this},insert:function(t){return t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=yt([]),this},remove:function(t,e){if(!t)return this;for(var n,r,i,o,s=this.data,a=this.toBBox(t),u=[],c=[];s||u.length;){if(s||(s=u.pop(),r=u[u.length-1],n=c.pop(),o=!0),s.leaf&&-1!==(i=function(t,e,n){if(!n)return e.indexOf(t);for(var r=0;r<e.length;r++)if(n(t,e[r]))return r;return-1}(t,s.children,e)))return s.children.splice(i,1),u.push(s),this._condense(u),this;o||s.leaf||!gt(s,a)?r?(n++,s=r.children[n],o=!1):s=null:(u.push(s),c.push(n),n=0,r=s,s=s.children[0])}return this},toBBox:function(t){return t},compareMinX:ht,compareMinY:lt,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,e){for(var n=[];t;)t.leaf?e.push.apply(e,t.children):n.push.apply(n,t.children),t=n.pop();return e},_build:function(t,e,n,r){var i,o=n-e+1,s=this._maxEntries;if(o<=s)return i=yt(t.slice(e,n+1)),at(i,this.toBBox),i;r||(r=Math.ceil(Math.log(o)/Math.log(s)),s=Math.ceil(o/Math.pow(s,r-1))),(i=yt([])).leaf=!1,i.height=r;var a,u,c,h,l=Math.ceil(o/s),p=l*Math.ceil(Math.sqrt(s));for(_t(t,e,n,p,this.compareMinX),a=e;a<=n;a+=p)for(_t(t,a,c=Math.min(a+p-1,n),l,this.compareMinY),u=a;u<=c;u+=l)h=Math.min(u+l-1,c),i.children.push(this._build(t,u,h,r-1));return at(i,this.toBBox),i},_chooseSubtree:function(t,e,n,r){for(var i,o,s,a,u,c,h,l;r.push(e),!e.leaf&&r.length-1!==n;){for(h=l=1/0,i=0,o=e.children.length;i<o;i++)u=pt(s=e.children[i]),(c=function(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}(t,s)-u)<l?(l=c,h=u<h?u:h,a=s):c===l&&u<h&&(h=u,a=s);e=a||e.children[0]}return e},_insert:function(t,e,n){var r=this.toBBox,i=n?t:r(t),o=[],s=this._chooseSubtree(i,this.data,e,o);for(s.children.push(t),ct(s,i);e>=0&&o[e].children.length>this._maxEntries;)this._split(o,e),e--;this._adjustParentBBoxes(i,o,e)},_split:function(t,e){var n=t[e],r=n.children.length,i=this._minEntries;this._chooseSplitAxis(n,i,r);var o=this._chooseSplitIndex(n,i,r),s=yt(n.children.splice(o,n.children.length-o));s.height=n.height,s.leaf=n.leaf,at(n,this.toBBox),at(s,this.toBBox),e?t[e-1].children.push(s):this._splitRoot(n,s)},_splitRoot:function(t,e){this.data=yt([t,e]),this.data.height=t.height+1,this.data.leaf=!1,at(this.data,this.toBBox)},_chooseSplitIndex:function(t,e,n){var r,i,o,s,a,u,c,h;for(u=c=1/0,r=e;r<=n-e;r++)s=function(t,e){var n=Math.max(t.minX,e.minX),r=Math.max(t.minY,e.minY),i=Math.min(t.maxX,e.maxX),o=Math.min(t.maxY,e.maxY);return Math.max(0,i-n)*Math.max(0,o-r)}(i=ut(t,0,r,this.toBBox),o=ut(t,r,n,this.toBBox)),a=pt(i)+pt(o),s<u?(u=s,h=r,c=a<c?a:c):s===u&&a<c&&(c=a,h=r);return h},_chooseSplitAxis:function(t,e,n){var r=t.leaf?this.compareMinX:ht,i=t.leaf?this.compareMinY:lt;this._allDistMargin(t,e,n,r)<this._allDistMargin(t,e,n,i)&&t.children.sort(r)},_allDistMargin:function(t,e,n,r){t.children.sort(r);var i,o,s=this.toBBox,a=ut(t,0,e,s),u=ut(t,n-e,n,s),c=ft(a)+ft(u);for(i=e;i<n-e;i++)o=t.children[i],ct(a,t.leaf?s(o):o),c+=ft(a);for(i=n-e-1;i>=e;i--)o=t.children[i],ct(u,t.leaf?s(o):o),c+=ft(u);return c},_adjustParentBBoxes:function(t,e,n){for(var r=n;r>=0;r--)ct(e[r],t)},_condense:function(t){for(var e,n=t.length-1;n>=0;n--)0===t[n].children.length?n>0?(e=t[n-1].children).splice(e.indexOf(t[n]),1):this.clear():at(t[n],this.toBBox)},_initFormat:function(t){var e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}};var Ho=function(t,e,n){var r=t*e,i=Wo*t,o=i-(i-t),s=t-o,a=Wo*e,u=a-(a-e),c=e-u,h=s*c-(r-o*u-s*u-o*c);return n?(n[0]=h,n[1]=r,n):[h,r]},Wo=+(Math.pow(2,27)+1),Jo=function(t,e){var n=0|t.length,r=0|e.length;if(1===n&&1===r)return function(t,e){var n=t+e,r=n-t,i=t-(n-r)+(e-r);return i?[i,n]:[n]}(t[0],e[0]);var i,o,s=n+r,a=new Array(s),u=0,c=0,h=0,l=Math.abs,p=t[c],f=l(p),g=e[h],d=l(g);f<d?(o=p,(c+=1)<n&&(f=l(p=t[c]))):(o=g,(h+=1)<r&&(d=l(g=e[h]))),c<n&&f<d||h>=r?(i=p,(c+=1)<n&&(f=l(p=t[c]))):(i=g,(h+=1)<r&&(d=l(g=e[h])));for(var y,_,m=i+o,v=m-i,x=o-v,E=x,w=m;c<n&&h<r;)f<d?(i=p,(c+=1)<n&&(f=l(p=t[c]))):(i=g,(h+=1)<r&&(d=l(g=e[h]))),(x=(o=E)-(v=(m=i+o)-i))&&(a[u++]=x),E=w-((y=w+m)-(_=y-w))+(m-_),w=y;for(;c<n;)(x=(o=E)-(v=(m=(i=p)+o)-i))&&(a[u++]=x),E=w-((y=w+m)-(_=y-w))+(m-_),w=y,(c+=1)<n&&(p=t[c]);for(;h<r;)(x=(o=E)-(v=(m=(i=g)+o)-i))&&(a[u++]=x),E=w-((y=w+m)-(_=y-w))+(m-_),w=y,(h+=1)<r&&(g=e[h]);return E&&(a[u++]=E),w&&(a[u++]=w),u||(a[u++]=0),a.length=u,a},Zo=function(t,e,n){var r=t+e,i=r-t,o=e-i,s=t-(r-i);return n?(n[0]=s+o,n[1]=r,n):[s+o,r]},Ko=function(t,e){var n=t.length;if(1===n){var r=Ho(t[0],e);return r[0]?r:[r[1]]}var i=new Array(2*n),o=[.1,.1],s=[.1,.1],a=0;Ho(t[0],e,o),o[0]&&(i[a++]=o[0]);for(var u=1;u<n;++u){Ho(t[u],e,s);var c=o[1];Zo(c,s[0],o),o[0]&&(i[a++]=o[0]);var h=s[1],l=o[1],p=h+l,f=l-(p-h);o[1]=p,f&&(i[a++]=f)}return o[1]&&(i[a++]=o[1]),0===a&&(i[a++]=0),i.length=a,i},Qo=function(t,e){var n=0|t.length,r=0|e.length;if(1===n&&1===r)return function(t,e){var n=t+e,r=n-t,i=t-(n-r)+(e-r);return i?[i,n]:[n]}(t[0],-e[0]);var i,o,s=n+r,a=new Array(s),u=0,c=0,h=0,l=Math.abs,p=t[c],f=l(p),g=-e[h],d=l(g);f<d?(o=p,(c+=1)<n&&(f=l(p=t[c]))):(o=g,(h+=1)<r&&(d=l(g=-e[h]))),c<n&&f<d||h>=r?(i=p,(c+=1)<n&&(f=l(p=t[c]))):(i=g,(h+=1)<r&&(d=l(g=-e[h])));for(var y,_,m=i+o,v=m-i,x=o-v,E=x,w=m;c<n&&h<r;)f<d?(i=p,(c+=1)<n&&(f=l(p=t[c]))):(i=g,(h+=1)<r&&(d=l(g=-e[h]))),(x=(o=E)-(v=(m=i+o)-i))&&(a[u++]=x),E=w-((y=w+m)-(_=y-w))+(m-_),w=y;for(;c<n;)(x=(o=E)-(v=(m=(i=p)+o)-i))&&(a[u++]=x),E=w-((y=w+m)-(_=y-w))+(m-_),w=y,(c+=1)<n&&(p=t[c]);for(;h<r;)(x=(o=E)-(v=(m=(i=g)+o)-i))&&(a[u++]=x),E=w-((y=w+m)-(_=y-w))+(m-_),w=y,(h+=1)<r&&(g=-e[h]);return E&&(a[u++]=E),w&&(a[u++]=w),u||(a[u++]=0),a.length=u,a},$o=mt(function(t){function e(t,e){for(var n=new Array(t.length-1),r=1;r<t.length;++r)for(var i=n[r-1]=new Array(t.length-1),o=0,s=0;o<t.length;++o)o!==e&&(i[s++]=t[r][o]);return n}function n(t){return 1&t?"-":""}function r(t){if(1===t.length)return t[0];if(2===t.length)return["sum(",t[0],",",t[1],")"].join("");var e=t.length>>1;return["sum(",r(t.slice(0,e)),",",r(t.slice(e)),")"].join("")}function i(t){if(2===t.length)return[["sum(prod(",t[0][0],",",t[1][1],"),prod(-",t[0][1],",",t[1][0],"))"].join("")];for(var o=[],s=0;s<t.length;++s)o.push(["scale(",r(i(e(t,s))),",",n(s),t[0][s],")"].join(""));return o}function o(t){for(var n=[],o=[],s=function(t){for(var e=new Array(t),n=0;n<t;++n){e[n]=new Array(t);for(var r=0;r<t;++r)e[n][r]=["m",r,"[",t-n-1,"]"].join("")}return e}(t),a=[],u=0;u<t;++u)0==(1&u)?n.push.apply(n,i(e(s,u))):o.push.apply(o,i(e(s,u))),a.push("m"+u);var c=r(n),h=r(o),l="orientation"+t+"Exact",p=["function ",l,"(",a.join(),"){var p=",c,",n=",h,",d=sub(p,n);return d[d.length-1];};return ",l].join("");return new Function("sum","prod","scale","sub",p)(Jo,Ho,Ko,Qo)}var s=5,a=o(3),u=o(4),c=[function(){return 0},function(){return 0},function(t,e){return e[0]-t[0]},function(t,e,n){var r,i=(t[1]-n[1])*(e[0]-n[0]),o=(t[0]-n[0])*(e[1]-n[1]),s=i-o;if(i>0){if(o<=0)return s;r=i+o}else{if(!(i<0))return s;if(o>=0)return s;r=-(i+o)}var u=3.3306690738754716e-16*r;return s>=u||s<=-u?s:a(t,e,n)},function(t,e,n,r){var i=t[0]-r[0],o=e[0]-r[0],s=n[0]-r[0],a=t[1]-r[1],c=e[1]-r[1],h=n[1]-r[1],l=t[2]-r[2],p=e[2]-r[2],f=n[2]-r[2],g=o*h,d=s*c,y=s*a,_=i*h,m=i*c,v=o*a,x=l*(g-d)+p*(y-_)+f*(m-v),E=7.771561172376103e-16*((Math.abs(g)+Math.abs(d))*Math.abs(l)+(Math.abs(y)+Math.abs(_))*Math.abs(p)+(Math.abs(m)+Math.abs(v))*Math.abs(f));return x>E||-x>E?x:u(t,e,n,r)}];!function(){for(;c.length<=s;)c.push(o(c.length));for(var e=[],n=["slow"],r=0;r<=s;++r)e.push("a"+r),n.push("o"+r);var i=["function getOrientation(",e.join(),"){switch(arguments.length){case 0:case 1:return 0;"];for(r=2;r<=s;++r)i.push("case ",r,":return o",r,"(",e.slice(0,r).join(),");");i.push("}var s=new Array(arguments.length);for(var i=0;i<arguments.length;++i){s[i]=arguments[i]};return slow(s);}return getOrientation"),n.push(i.join(""));var a=Function.apply(void 0,n);for(t.exports=a.apply(void 0,[function(t){var e=c[t.length];return e||(e=c[t.length]=o(t.length)),e.apply(void 0,t)}].concat(c)),r=0;r<=s;++r)t.exports[r]=c[r]}()}),ts=function(t){var e=t.length;if(e<3){for(var n=new Array(e),r=0;r<e;++r)n[r]=r;return 2===e&&t[0][0]===t[1][0]&&t[0][1]===t[1][1]?[0]:n}var i=new Array(e);for(r=0;r<e;++r)i[r]=r;i.sort(function(e,n){var r=t[e][0]-t[n][0];return r||t[e][1]-t[n][1]});var o=[i[0],i[1]],s=[i[0],i[1]];for(r=2;r<e;++r){for(var a=i[r],u=t[a],c=o.length;c>1&&es(t[o[c-2]],t[o[c-1]],u)<=0;)c-=1,o.pop();for(o.push(a),c=s.length;c>1&&es(t[s[c-2]],t[s[c-1]],u)>=0;)c-=1,s.pop();s.push(a)}n=new Array(s.length+o.length-2);for(var h=0,l=(r=0,o.length);r<l;++r)n[h++]=o[r];for(var p=s.length-2;p>0;--p)n[h++]=s[p];return n},es=$o[3],ns=vt,rs=vt;vt.prototype={push:function(t){this.data.push(t),this.length++,this._up(this.length-1)},pop:function(){if(0!==this.length){var t=this.data[0];return this.length--,this.length>0&&(this.data[0]=this.data[this.length],this._down(0)),this.data.pop(),t}},peek:function(){return this.data[0]},_up:function(t){for(var e=this.data,n=this.compare,r=e[t];t>0;){var i=t-1>>1,o=e[i];if(n(r,o)>=0)break;e[t]=o,t=i}e[t]=r},_down:function(t){for(var e=this.data,n=this.compare,r=this.length>>1,i=e[t];t<r;){var o=1+(t<<1),s=o+1,a=e[o];if(s<this.length&&n(e[s],a)<0&&(o=s,a=e[s]),n(a,i)>=0)break;e[t]=a,t=o}e[t]=i}},ns.default=rs;var is=function(t,e){for(var n=t[0],r=t[1],i=!1,o=0,s=e.length-1;o<e.length;s=o++){var a=e[o][0],u=e[o][1],c=e[s][0],h=e[s][1];u>r!=h>r&&n<(c-a)*(r-u)/(h-u)+a&&(i=!i)}return i},os=$o[3],ss=xt,as=xt;ss.default=as;var us=function(t){return t},cs=function(t){if(null==t)return us;var e,n,r=t.scale[0],i=t.scale[1],o=t.translate[0],s=t.translate[1];return function(t,a){a||(e=n=0);var u=2,c=t.length,h=new Array(c);for(h[0]=(e+=t[0])*r+o,h[1]=(n+=t[1])*i+s;u<c;)h[u]=t[u],++u;return h}},hs=function(t,e){for(var n,r=t.length,i=r-e;i<--r;)n=t[i],t[i++]=t[r],t[r]=n},ls=function(t,e){function n(t,e){for(var n in t){var i=t[n];delete e[i.start],delete i.start,delete i.end,i.forEach(function(t){r[t<0?~t:t]=1}),s.push(i)}}var r={},i={},o={},s=[],a=-1;return e.forEach(function(n,r){var i,o=t.arcs[n<0?~n:n];o.length<3&&!o[1][0]&&!o[1][1]&&(i=e[++a],e[a]=n,e[r]=i)}),e.forEach(function(e){var n,r,s=function(e){var n,r=t.arcs[e<0?~e:e],i=r[0];return t.transform?(n=[0,0],r.forEach(function(t){n[0]+=t[0],n[1]+=t[1]})):n=r[r.length-1],e<0?[n,i]:[i,n]}(e),a=s[0],u=s[1];if(n=o[a])if(delete o[n.end],n.push(e),n.end=u,r=i[u]){delete i[r.start];var c=r===n?n:n.concat(r);i[c.start=n.start]=o[c.end=r.end]=c}else i[n.start]=o[n.end]=n;else if(n=i[u])if(delete i[n.start],n.unshift(e),n.start=a,r=o[a]){delete o[r.end];var h=r===n?n:r.concat(n);i[h.start=r.start]=o[h.end=n.end]=h}else i[n.start]=o[n.end]=n;else i[(n=[e]).start=a]=o[n.end=u]=n}),n(o,i),n(i,o),e.forEach(function(t){r[t<0?~t:t]||s.push([t])}),s},ps=function(t){return Xt(t,Ut.apply(this,arguments))},fs=function(t,e,n,r,i,o){3===arguments.length&&(r=o=Array,i=null);for(var s=new r(t=1<<Math.max(4,Math.ceil(Math.log(t)/Math.LN2))),a=new o(t),u=t-1,c=0;c<t;++c)s[c]=i;return{set:function(r,o){for(var c=e(r)&u,h=s[c],l=0;h!=i;){if(n(h,r))return a[c]=o;if(++l>=t)throw new Error("full hashmap");h=s[c=c+1&u]}return s[c]=r,a[c]=o,o},maybeSet:function(r,o){for(var c=e(r)&u,h=s[c],l=0;h!=i;){if(n(h,r))return a[c];if(++l>=t)throw new Error("full hashmap");h=s[c=c+1&u]}return s[c]=r,a[c]=o,o},get:function(r,o){for(var c=e(r)&u,h=s[c],l=0;h!=i;){if(n(h,r))return a[c];if(++l>=t)break;h=s[c=c+1&u]}return o},keys:function(){for(var t=[],e=0,n=s.length;e<n;++e){var r=s[e];r!=i&&t.push(r)}return t}}},gs=function(t,e){return t[0]===e[0]&&t[1]===e[1]},ds=new ArrayBuffer(16),ys=new Float64Array(ds),_s=new Uint32Array(ds),ms=function(t){ys[0]=t[0],ys[1]=t[1];var e=_s[0]^_s[1];return 2147483647&(e=e<<5^e>>7^_s[2]^_s[3])},vs=function(t){function e(t,e,n,r){if(p[n]!==t){p[n]=t;var i=f[n];if(i>=0){var o=g[n];i===e&&o===r||i===r&&o===e||(++y,d[n]=1)}else f[n]=e,g[n]=r}}function n(t){return ms(u[t])}function r(t,e){return gs(u[t],u[e])}var i,o,s,a,u=t.coordinates,c=t.lines,h=t.rings,l=function(){for(var t=fs(1.4*u.length,n,r,Int32Array,-1,Int32Array),e=new Int32Array(u.length),i=0,o=u.length;i<o;++i)e[i]=t.maybeSet(i,i);return e}(),p=new Int32Array(u.length),f=new Int32Array(u.length),g=new Int32Array(u.length),d=new Int8Array(u.length),y=0;for(i=0,o=u.length;i<o;++i)p[i]=f[i]=g[i]=-1;for(i=0,o=c.length;i<o;++i){var _=c[i],m=_[0],v=_[1];for(s=l[m],a=l[++m],++y,d[s]=1;++m<=v;)e(i,s,s=a,a=l[m]);++y,d[a]=1}for(i=0,o=u.length;i<o;++i)p[i]=-1;for(i=0,o=h.length;i<o;++i){var x=h[i],E=x[0]+1,w=x[1];for(e(i,l[w-1],s=l[E-1],a=l[E]);++E<=w;)e(i,s,s=a,a=l[E])}p=f=g=null;var b,I=function(t,e,n,r,i){3===arguments.length&&(r=Array,i=null);for(var o=new r(t=1<<Math.max(4,Math.ceil(Math.log(t)/Math.LN2))),s=t-1,a=0;a<t;++a)o[a]=i;return{add:function(r){for(var a=e(r)&s,u=o[a],c=0;u!=i;){if(n(u,r))return!0;if(++c>=t)throw new Error("full hashset");u=o[a=a+1&s]}return o[a]=r,!0},has:function(r){for(var a=e(r)&s,u=o[a],c=0;u!=i;){if(n(u,r))return!0;if(++c>=t)break;u=o[a=a+1&s]}return!1},values:function(){for(var t=[],e=0,n=o.length;e<n;++e){var r=o[e];r!=i&&t.push(r)}return t}}}(1.4*y,ms,gs);for(i=0,o=u.length;i<o;++i)d[b=l[i]]&&I.add(u[b]);return I},xs=function(t){var e,n,r,i=vs(t),o=t.coordinates,s=t.lines,a=t.rings;for(n=0,r=s.length;n<r;++n)for(var u=s[n],c=u[0],h=u[1];++c<h;)i.has(o[c])&&(e={0:c,1:u[1]},u[1]=c,u=u.next=e);for(n=0,r=a.length;n<r;++n)for(var l=a[n],p=l[0],f=p,g=l[1],d=i.has(o[p]);++f<g;)i.has(o[f])&&(d?(e={0:f,1:l[1]},l[1]=f,l=l.next=e):(!function(t,e,n,r){Yt(t,e,n),Yt(t,e,e+r),Yt(t,e+r,n)}(o,p,g,g-f),o[g]=o[p],d=!0,f=p));return t},Es=function(t){function e(t){var e,n,r,i,o,s,a,u;if(r=f.get(e=c[t[0]]))for(a=0,u=r.length;a<u;++a)if(i=r[a],function(t,e){var n=t[0],r=e[0],i=t[1],o=e[1];if(n-i!=r-o)return!1;for(;n<=i;++n,++r)if(!gs(c[n],c[r]))return!1;return!0}(i,t))return t[0]=i[0],void(t[1]=i[1]);if(o=f.get(n=c[t[1]]))for(a=0,u=o.length;a<u;++a)if(s=o[a],function(t,e){var n=t[0],r=e[0],i=t[1],o=e[1];if(n-i!=r-o)return!1;for(;n<=i;++n,--o)if(!gs(c[n],c[o]))return!1;return!0}(s,t))return t[1]=s[0],void(t[0]=s[1]);r?r.push(t):f.set(e,[t]),o?o.push(t):f.set(n,[t]),g.push(t)}function n(t,e){var n=t[0],r=e[0],o=t[1]-n;if(o!==e[1]-r)return!1;for(var s=i(t),a=i(e),u=0;u<o;++u)if(!gs(c[n+(u+s)%o],c[r+(u+a)%o]))return!1;return!0}function r(t,e){var n=t[0],r=e[0],o=t[1],s=e[1],a=o-n;if(a!==s-r)return!1;for(var u=i(t),h=a-i(e),l=0;l<a;++l)if(!gs(c[n+(l+u)%a],c[s-(l+h)%a]))return!1;return!0}function i(t){for(var e=t[0],n=t[1],r=e,i=r,o=c[r];++r<n;){var s=c[r];(s[0]<o[0]||s[0]===o[0]&&s[1]<o[1])&&(i=r,o=s)}return i-e}var o,s,a,u,c=t.coordinates,h=t.lines,l=t.rings,p=h.length+l.length;for(delete t.lines,delete t.rings,a=0,u=h.length;a<u;++a)for(o=h[a];o=o.next;)++p;for(a=0,u=l.length;a<u;++a)for(s=l[a];s=s.next;)++p;var f=fs(2*p*1.4,ms,gs),g=t.arcs=[];for(a=0,u=h.length;a<u;++a){o=h[a];do{e(o)}while(o=o.next)}for(a=0,u=l.length;a<u;++a)if((s=l[a]).next)do{e(s)}while(s=s.next);else!function(t){var e,o,s,a,u;if(o=f.get(e=c[t[0]]))for(a=0,u=o.length;a<u;++a){if(s=o[a],n(s,t))return t[0]=s[0],void(t[1]=s[1]);if(r(s,t))return t[0]=s[1],void(t[1]=s[0])}if(o=f.get(e=c[t[0]+i(t)]))for(a=0,u=o.length;a<u;++a){if(s=o[a],n(s,t))return t[0]=s[0],void(t[1]=s[1]);if(r(s,t))return t[0]=s[1],void(t[1]=s[0])}o?o.push(t):f.set(e,[t]),g.push(t)}(s);return t},ws=function(t,e){function n(t){t&&h.hasOwnProperty(t.type)&&h[t.type](t)}function r(t){var e=[];do{var n=c.get(t);e.push(t[0]<t[1]?n:~n)}while(t=t.next);return e}function i(t){return t.map(r)}var o=function(t){function e(t){null!=t&&c.hasOwnProperty(t.type)&&c[t.type](t)}function n(t){var e=t[0],n=t[1];e<o&&(o=e),e>a&&(a=e),n<s&&(s=n),n>u&&(u=n)}function r(t){t.forEach(n)}function i(t){t.forEach(r)}var o=1/0,s=1/0,a=-1/0,u=-1/0,c={GeometryCollection:function(t){t.geometries.forEach(e)},Point:function(t){n(t.coordinates)},MultiPoint:function(t){t.coordinates.forEach(n)},LineString:function(t){r(t.arcs)},MultiLineString:function(t){t.arcs.forEach(r)},Polygon:function(t){t.arcs.forEach(r)},MultiPolygon:function(t){t.arcs.forEach(i)}};for(var h in t)e(t[h]);return a>=o&&u>=s?[o,s,a,u]:void 0}(t=function(t){var e,n={};for(e in t)n[e]=Vt(t[e]);return n}(t)),s=e>0&&o&&function(t,e,n){function r(t){return[Math.round((t[0]-c)*f),Math.round((t[1]-h)*g)]}function i(t,e){for(var n,r,i,o,s,a=-1,u=0,l=t.length,p=new Array(l);++a<l;)n=t[a],o=Math.round((n[0]-c)*f),s=Math.round((n[1]-h)*g),o===r&&s===i||(p[u++]=[r=o,i=s]);for(p.length=u;u<e;)u=p.push([p[0][0],p[0][1]]);return p}function o(t){return i(t,2)}function s(t){return i(t,4)}function a(t){return t.map(s)}function u(t){null!=t&&d.hasOwnProperty(t.type)&&d[t.type](t)}var c=e[0],h=e[1],l=e[2],p=e[3],f=l-c?(n-1)/(l-c):1,g=p-h?(n-1)/(p-h):1,d={GeometryCollection:function(t){t.geometries.forEach(u)},Point:function(t){t.coordinates=r(t.coordinates)},MultiPoint:function(t){t.coordinates=t.coordinates.map(r)},LineString:function(t){t.arcs=o(t.arcs)},MultiLineString:function(t){t.arcs=t.arcs.map(o)},Polygon:function(t){t.arcs=a(t.arcs)},MultiPolygon:function(t){t.arcs=t.arcs.map(a)}};for(var y in t)u(t[y]);return{scale:[1/f,1/g],translate:[c,h]}}(t,o,e),a=Es(xs(function(t){function e(t){t&&c.hasOwnProperty(t.type)&&c[t.type](t)}function n(t){for(var e=0,n=t.length;e<n;++e)u[++o]=t[e];var r={0:o-n+1,1:o};return s.push(r),r}function r(t){for(var e=0,n=t.length;e<n;++e)u[++o]=t[e];var r={0:o-n+1,1:o};return a.push(r),r}function i(t){return t.map(r)}var o=-1,s=[],a=[],u=[],c={GeometryCollection:function(t){t.geometries.forEach(e)},LineString:function(t){t.arcs=n(t.arcs)},MultiLineString:function(t){t.arcs=t.arcs.map(n)},Polygon:function(t){t.arcs=t.arcs.map(r)},MultiPolygon:function(t){t.arcs=t.arcs.map(i)}};for(var h in t)e(t[h]);return{type:"Topology",coordinates:u,lines:s,rings:a,objects:t}}(t))),u=a.coordinates,c=fs(1.4*a.arcs.length,Jt,Zt);t=a.objects,a.bbox=o,a.arcs=a.arcs.map(function(t,e){return c.set(t,e),u.slice(t[0],t[1]+1)}),delete a.coordinates,u=null;var h={GeometryCollection:function(t){t.geometries.forEach(n)},LineString:function(t){t.arcs=r(t.arcs)},MultiLineString:function(t){t.arcs=t.arcs.map(r)},Polygon:function(t){t.arcs=t.arcs.map(r)},MultiPolygon:function(t){t.arcs=t.arcs.map(i)}};for(var l in t)n(t[l]);return s&&(a.transform=s,a.arcs=function(t){for(var e=-1,n=t.length;++e<n;){for(var r,i,o=t[e],s=0,a=1,u=o.length,c=o[0],h=c[0],l=c[1];++s<u;)r=(c=o[s])[0],i=c[1],r===h&&i===l||(o[a++]=[r-h,i-l],h=r,l=i);1===a&&(o[a++]=[0,0]),o.length=a}return t}(a.arcs)),a},bs=function(t){this.points=t.points||[],this.duration=t.duration||1e4,this.sharpness=t.sharpness||.85,this.centers=[],this.controls=[],this.stepLength=t.stepLength||60,this.length=this.points.length,this.delay=0;for(var e=0;e<this.length;e++)this.points[e].z=this.points[e].z||0;for(e=0;e<this.length-1;e++){var n=this.points[e],r=this.points[e+1];this.centers.push({x:(n.x+r.x)/2,y:(n.y+r.y)/2,z:(n.z+r.z)/2})}this.controls.push([this.points[0],this.points[0]]);for(e=0;e<this.centers.length-1;e++){n=this.centers[e],r=this.centers[e+1];var i=this.points[e+1].x-(this.centers[e].x+this.centers[e+1].x)/2,o=this.points[e+1].y-(this.centers[e].y+this.centers[e+1].y)/2,s=this.points[e+1].z-(this.centers[e].y+this.centers[e+1].z)/2;this.controls.push([{x:(1-this.sharpness)*this.points[e+1].x+this.sharpness*(this.centers[e].x+i),y:(1-this.sharpness)*this.points[e+1].y+this.sharpness*(this.centers[e].y+o),z:(1-this.sharpness)*this.points[e+1].z+this.sharpness*(this.centers[e].z+s)},{x:(1-this.sharpness)*this.points[e+1].x+this.sharpness*(this.centers[e+1].x+i),y:(1-this.sharpness)*this.points[e+1].y+this.sharpness*(this.centers[e+1].y+o),z:(1-this.sharpness)*this.points[e+1].z+this.sharpness*(this.centers[e+1].z+s)}])}return this.controls.push([this.points[this.length-1],this.points[this.length-1]]),this.steps=this.cacheSteps(this.stepLength),this};bs.prototype.cacheSteps=function(t){var e=[],n=this.pos(0);e.push(0);for(var r=0;r<this.duration;r+=10){var i=this.pos(r);Math.sqrt((i.x-n.x)*(i.x-n.x)+(i.y-n.y)*(i.y-n.y)+(i.z-n.z)*(i.z-n.z))>t&&(e.push(r),n=i)}return e},bs.prototype.vector=function(t){var e=this.pos(t+10),n=this.pos(t-10);return{angle:180*Math.atan2(e.y-n.y,e.x-n.x)/3.14,speed:Math.sqrt((n.x-e.x)*(n.x-e.x)+(n.y-e.y)*(n.y-e.y)+(n.z-e.z)*(n.z-e.z))}},bs.prototype.pos=function(t){var e=t-this.delay;e<0&&(e=0),e>this.duration&&(e=this.duration-1);var n=e/this.duration;if(n>=1)return this.points[this.length-1];var r=Math.floor((this.points.length-1)*n);return function(t,e,n,r,i){var o=function(t){var e=t*t;return[e*t,3*e*(1-t),3*t*(1-t)*(1-t),(1-t)*(1-t)*(1-t)]}(t);return{x:i.x*o[0]+r.x*o[1]+n.x*o[2]+e.x*o[3],y:i.y*o[0]+r.y*o[1]+n.y*o[2]+e.y*o[3],z:i.z*o[0]+r.z*o[1]+n.z*o[2]+e.z*o[3]}}((this.length-1)*n-r,this.points[r],this.controls[r][1],this.controls[r+1][0],this.points[r+1])};var Is=ve,Ns=ve;ve.deviation=function(t,e,n,r){var i=e&&e.length,o=i?e[0]*n:t.length,s=Math.abs(Ae(t,0,o,n));if(i)for(var a=0,u=e.length;a<u;a++){var c=e[a]*n,h=a<u-1?e[a+1]*n:t.length;s-=Math.abs(Ae(t,c,h,n))}var l=0;for(a=0;a<r.length;a+=3){var p=r[a]*n,f=r[a+1]*n,g=r[a+2]*n;l+=Math.abs((t[p]-t[g])*(t[f+1]-t[p+1])-(t[p]-t[f])*(t[g+1]-t[p+1]))}return 0===s&&0===l?0:Math.abs((l-s)/s)},ve.flatten=function(t){for(var e=t[0][0].length,n={vertices:[],holes:[],dimensions:e},r=0,i=0;i<t.length;i++){for(var o=0;o<t[i].length;o++)for(var s=0;s<e;s++)n.vertices.push(t[i][o][s]);i>0&&(r+=t[i-1].length,n.holes.push(r))}return n},Is.default=Ns,ke.prototype={all:function(){return this._all(this.data,[])},search:function(t){var e=this.data,n=[],r=this.toBBox;if(!Je(t,e))return n;for(var i,o,s,a,u=[];e;){for(i=0,o=e.children.length;i<o;i++)s=e.children[i],Je(t,a=e.leaf?r(s):s)&&(e.leaf?n.push(s):We(t,a)?this._all(s,n):u.push(s));e=u.pop()}return n},collides:function(t){var e=this.data,n=this.toBBox;if(!Je(t,e))return!1;for(var r,i,o,s,a=[];e;){for(r=0,i=e.children.length;r<i;r++)if(o=e.children[r],s=e.leaf?n(o):o,Je(t,s)){if(e.leaf||We(t,s))return!0;a.push(o)}e=a.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}var r=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===r.height)this._splitRoot(this.data,r);else{if(this.data.height<r.height){var i=this.data;this.data=r,r=i}this._insert(r,this.data.height-r.height-1,!0)}else this.data=r;return this},insert:function(t){return t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=Ze([]),this},remove:function(t,e){if(!t)return this;for(var n,r,i,o,s=this.data,a=this.toBBox(t),u=[],c=[];s||u.length;){if(s||(s=u.pop(),r=u[u.length-1],n=c.pop(),o=!0),s.leaf&&-1!==(i=function(t,e,n){if(!n)return e.indexOf(t);for(var r=0;r<e.length;r++)if(n(t,e[r]))return r;return-1}(t,s.children,e)))return s.children.splice(i,1),u.push(s),this._condense(u),this;o||s.leaf||!We(s,a)?r?(n++,s=r.children[n],o=!1):s=null:(u.push(s),c.push(n),n=0,r=s,s=s.children[0])}return this},toBBox:function(t){return t},compareMinX:Ue,compareMinY:Ye,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,e){for(var n=[];t;)t.leaf?e.push.apply(e,t.children):n.push.apply(n,t.children),t=n.pop();return e},_build:function(t,e,n,r){var i,o=n-e+1,s=this._maxEntries;if(o<=s)return i=Ze(t.slice(e,n+1)),ze(i,this.toBBox),i;r||(r=Math.ceil(Math.log(o)/Math.log(s)),s=Math.ceil(o/Math.pow(s,r-1))),(i=Ze([])).leaf=!1,i.height=r;var a,u,c,h,l=Math.ceil(o/s),p=l*Math.ceil(Math.sqrt(s));for(Ke(t,e,n,p,this.compareMinX),a=e;a<=n;a+=p)for(Ke(t,a,c=Math.min(a+p-1,n),l,this.compareMinY),u=a;u<=c;u+=l)h=Math.min(u+l-1,c),i.children.push(this._build(t,u,h,r-1));return ze(i,this.toBBox),i},_chooseSubtree:function(t,e,n,r){for(var i,o,s,a,u,c,h,l;r.push(e),!e.leaf&&r.length-1!==n;){for(h=l=1/0,i=0,o=e.children.length;i<o;i++)u=Ve(s=e.children[i]),(c=function(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}(t,s)-u)<l?(l=c,h=u<h?u:h,a=s):c===l&&u<h&&(h=u,a=s);e=a||e.children[0]}return e},_insert:function(t,e,n){var r=this.toBBox,i=n?t:r(t),o=[],s=this._chooseSubtree(i,this.data,e,o);for(s.children.push(t),Xe(s,i);e>=0&&o[e].children.length>this._maxEntries;)this._split(o,e),e--;this._adjustParentBBoxes(i,o,e)},_split:function(t,e){var n=t[e],r=n.children.length,i=this._minEntries;this._chooseSplitAxis(n,i,r);var o=this._chooseSplitIndex(n,i,r),s=Ze(n.children.splice(o,n.children.length-o));s.height=n.height,s.leaf=n.leaf,ze(n,this.toBBox),ze(s,this.toBBox),e?t[e-1].children.push(s):this._splitRoot(n,s)},_splitRoot:function(t,e){this.data=Ze([t,e]),this.data.height=t.height+1,this.data.leaf=!1,ze(this.data,this.toBBox)},_chooseSplitIndex:function(t,e,n){var r,i,o,s,a,u,c,h;for(u=c=1/0,r=e;r<=n-e;r++)s=function(t,e){var n=Math.max(t.minX,e.minX),r=Math.max(t.minY,e.minY),i=Math.min(t.maxX,e.maxX),o=Math.min(t.maxY,e.maxY);return Math.max(0,i-n)*Math.max(0,o-r)}(i=je(t,0,r,this.toBBox),o=je(t,r,n,this.toBBox)),a=Ve(i)+Ve(o),s<u?(u=s,h=r,c=a<c?a:c):s===u&&a<c&&(c=a,h=r);return h},_chooseSplitAxis:function(t,e,n){var r=t.leaf?this.compareMinX:Ue,i=t.leaf?this.compareMinY:Ye;this._allDistMargin(t,e,n,r)<this._allDistMargin(t,e,n,i)&&t.children.sort(r)},_allDistMargin:function(t,e,n,r){t.children.sort(r);var i,o,s=this.toBBox,a=je(t,0,e,s),u=je(t,n-e,n,s),c=He(a)+He(u);for(i=e;i<n-e;i++)o=t.children[i],Xe(a,t.leaf?s(o):o),c+=He(a);for(i=n-e-1;i>=e;i--)o=t.children[i],Xe(u,t.leaf?s(o):o),c+=He(u);return c},_adjustParentBBoxes:function(t,e,n){for(var r=n;r>=0;r--)Xe(e[r],t)},_condense:function(t){for(var e,n=t.length-1;n>=0;n--)0===t[n].children.length?n>0?(e=t[n-1].children).splice(e.indexOf(t[n]),1):this.clear():ze(t[n],this.toBBox)},_initFormat:function(t){var e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}};var Cs=Object.freeze({toMercator:cn,toWgs84:hn}),Ss=6378137,Ms=function(t,e,n){function r(t,n,r,i){var u=o[t][n],c=o[t][n+1],h=o[r][i],l=o[r][i+1],p=function(t,e,n,r){if(On(t,n)||On(t,r)||On(e,n)||On(r,n))return null;var i=t[0],o=t[1],s=e[0],a=e[1],u=n[0],c=n[1],h=r[0],l=r[1],p=(i-s)*(c-l)-(o-a)*(u-h);return 0===p?null:[((i*a-o*s)*(u-h)-(i-s)*(u*l-c*h))/p,((i*a-o*s)*(c-l)-(o-a)*(u*l-c*h))/p]}(u,c,h,l);if(null!==p){var f,g;if(f=c[0]!==u[0]?(p[0]-u[0])/(c[0]-u[0]):(p[1]-u[1])/(c[1]-u[1]),g=l[0]!==h[0]?(p[0]-h[0])/(l[0]-h[0]):(p[1]-h[1])/(l[1]-h[1]),!(f>=1||f<=0||g>=1||g<=0)){var d=p,y=!a[d];y&&(a[d]=!0),e?s.push(e(p,t,n,u,c,f,r,i,h,l,g,y)):s.push(p)}}}function i(t,e){var n,r,i,s,a=o[t][e],u=o[t][e+1];return a[0]<u[0]?(n=a[0],r=u[0]):(n=u[0],r=a[0]),a[1]<u[1]?(i=a[1],s=u[1]):(i=u[1],s=a[1]),{minX:n,minY:i,maxX:r,maxY:s,ring:t,edge:e}}if("Polygon"!==t.geometry.type)throw new Error("The input feature must be a Polygon");void 0===n&&(n=1);var o=t.geometry.coordinates,s=[],a={};if(n){for(var u=[],c=0;c<o.length;c++)for(var h=0;h<o[c].length-1;h++)u.push(i(c,h));var l=Vo();l.load(u)}for(var p=0;p<o.length;p++)for(var f=0;f<o[p].length-1;f++)if(n){l.search(i(p,f)).forEach(function(t){var e=t.ring,n=t.edge;r(p,f,e,n)})}else for(var g=0;g<o.length;g++)for(var d=0;d<o[g].length-1;d++)r(p,f,g,d);return e||(s={type:"Feature",geometry:{type:"MultiPoint",coordinates:s}}),s},Ls=function(t){function e(){for(var t=[],e=0;e<g.features.length;e++)-1==g.features[e].properties.parent&&t.push(e);if(t.length>1)for(e=0;e<t.length;e++){for(var n=-1,r=0;r<g.features.length;r++)t[e]!=r&&Pt(g.features[t[e]].geometry.coordinates[0][0],g.features[r],{ignoreBoundary:!0})&&mn(g.features[r])<1/0&&(n=r);g.features[t[e]].properties.parent=n}}function n(){for(var t=0;t<g.features.length;t++)if(-1==g.features[t].properties.parent){var e=g.features[t].properties.winding;g.features[t].properties.netWinding=e,r(t,e)}}function r(t,e){for(var n=0;n<g.features.length;n++)if(g.features[n].properties.parent==t){var i=e+g.features[n].properties.winding;g.features[n].properties.netWinding=i,r(n,i)}}if("Feature"!=t.type)throw new Error("The input must a geojson object of type Feature");if(void 0===t.geometry||null==t.geometry)throw new Error("The input must a geojson object with a non-empty geometry");if("Polygon"!=t.geometry.type)throw new Error("The input must be a geojson Polygon");for(var i=t.geometry.coordinates.length,s=[],a=0;a<i;a++){var u=t.geometry.coordinates[a];Tn(u[0],u[u.length-1])||u.push(u[0]),s.push.apply(s,u.slice(0,u.length-1))}if(!function(t){for(var e={},n=1,r=0,i=t.length;r<i;++r){if(e.hasOwnProperty(t[r])){n=0;break}e[t[r]]=1}return n}(s))throw new Error("The input polygon may not have duplicate vertices (except for the first and last vertex of each ring)");var h=s.length,l=Ms(t,function(t,e,n,r,i,o,s,a,u,c,h,l){return[t,e,n,r,i,o,s,a,u,c,h,l]}),p=l.length;if(0==p){var f=[];for(a=0;a<i;a++)f.push(o([t.geometry.coordinates[a]],{parent:-1,winding:function(t){for(var e=0,n=0;n<t.length-1;n++)t[n][0]<t[e][0]&&(e=n);if(Rn([t[(e-1).modulo(t.length-1)],t[e],t[(e+1).modulo(t.length-1)]],!0))var r=1;else r=-1;return r}(t.geometry.coordinates[a])}));var g=c(f);return e(),n(),g}var d=[],y=[];for(a=0;a<i;a++){d.push([]);for(var _=0;_<t.geometry.coordinates[a].length-1;_++)d[a].push([new Ps(t.geometry.coordinates[a][(_+1).modulo(t.geometry.coordinates[a].length-1)],1,[a,_],[a,(_+1).modulo(t.geometry.coordinates[a].length-1)],void 0)]),y.push(new Os(t.geometry.coordinates[a][_],[a,(_-1).modulo(t.geometry.coordinates[a].length-1)],[a,_],void 0,void 0,!1,!0))}for(a=0;a<p;a++)d[l[a][1]][l[a][2]].push(new Ps(l[a][0],l[a][5],[l[a][1],l[a][2]],[l[a][6],l[a][7]],void 0)),l[a][11]&&y.push(new Os(l[a][0],[l[a][1],l[a][2]],[l[a][6],l[a][7]],void 0,void 0,!0,!0));var m=y.length;for(a=0;a<d.length;a++)for(_=0;_<d[a].length;_++)d[a][_].sort(function(t,e){return t.param<e.param?-1:1});var v=[];for(a=0;a<m;a++)v.push({minX:y[a].coord[0],minY:y[a].coord[1],maxX:y[a].coord[0],maxY:y[a].coord[1],index:a});var x=Vo();x.load(v);for(a=0;a<d.length;a++)for(_=0;_<d[a].length;_++)for(var E=0;E<d[a][_].length;E++){b=E==d[a][_].length-1?d[a][(_+1).modulo(t.geometry.coordinates[a].length-1)][0].coord:d[a][_][E+1].coord;var w=x.search({minX:b[0],minY:b[1],maxX:b[0],maxY:b[1]})[0];d[a][_][E].nxtIsectAlongEdgeIn=w.index}for(a=0;a<d.length;a++)for(_=0;_<d[a].length;_++)for(E=0;E<d[a][_].length;E++){var b=d[a][_][E].coord,I=(w=x.search({minX:b[0],minY:b[1],maxX:b[0],maxY:b[1]})[0]).index;I<h?y[I].nxtIsectAlongRingAndEdge2=d[a][_][E].nxtIsectAlongEdgeIn:Tn(y[I].ringAndEdge1,d[a][_][E].ringAndEdgeIn)?y[I].nxtIsectAlongRingAndEdge1=d[a][_][E].nxtIsectAlongEdgeIn:y[I].nxtIsectAlongRingAndEdge2=d[a][_][E].nxtIsectAlongEdgeIn}var N=[];for(a=0,_=0;_<i;_++){var C=a;for(E=0;E<t.geometry.coordinates[_].length-1;E++)y[a].coord[0]<y[C].coord[0]&&(C=a),a++;var S=y[C].nxtIsectAlongRingAndEdge2;for(E=0;E<y.length;E++)if(y[E].nxtIsectAlongRingAndEdge1==C||y[E].nxtIsectAlongRingAndEdge2==C){var M=E;break}var L=Rn([y[M].coord,y[C].coord,y[S].coord],!0)?1:-1;N.push({isect:C,parent:-1,winding:L})}N.sort(function(t,e){return y[t.isect].coord>y[e.isect].coord?-1:1});for(f=[];N.length>0;){var P=N.pop(),O=P.isect,R=P.parent,T=P.winding,A=f.length,D=[y[O].coord],F=O;if(y[O].ringAndEdge1Walkable)var q=y[O].ringAndEdge1,G=y[O].nxtIsectAlongRingAndEdge1;else q=y[O].ringAndEdge2,G=y[O].nxtIsectAlongRingAndEdge2;for(;!Tn(y[O].coord,y[G].coord);){D.push(y[G].coord);var B=void 0;for(a=0;a<N.length;a++)if(N[a].isect==G){B=a;break}if(void 0!=B&&N.splice(B,1),Tn(q,y[G].ringAndEdge1)){if(q=y[G].ringAndEdge2,y[G].ringAndEdge2Walkable=!1,y[G].ringAndEdge1Walkable){var k={isect:G};Rn([y[F].coord,y[G].coord,y[y[G].nxtIsectAlongRingAndEdge2].coord],1==T)?(k.parent=R,k.winding=-T):(k.parent=A,k.winding=T),N.push(k)}F=G,G=y[G].nxtIsectAlongRingAndEdge2}else{if(q=y[G].ringAndEdge1,y[G].ringAndEdge1Walkable=!1,y[G].ringAndEdge2Walkable){k={isect:G};Rn([y[F].coord,y[G].coord,y[y[G].nxtIsectAlongRingAndEdge1].coord],1==T)?(k.parent=R,k.winding=-T):(k.parent=A,k.winding=T),N.push(k)}F=G,G=y[G].nxtIsectAlongRingAndEdge1}}D.push(y[G].coord),f.push(o([D],{index:A,parent:R,winding:T,netWinding:void 0}))}g=c(f);return e(),n(),g},Ps=function(t,e,n,r,i){this.coord=t,this.param=e,this.ringAndEdgeIn=n,this.ringAndEdgeOut=r,this.nxtIsectAlongEdgeIn=i},Os=function(t,e,n,r,i,o,s){this.coord=t,this.ringAndEdge1=e,this.ringAndEdge2=n,this.nxtIsectAlongRingAndEdge1=r,this.nxtIsectAlongRingAndEdge2=i,this.ringAndEdge1Walkable=o,this.ringAndEdge2Walkable=s};Number.prototype.modulo=function(t){return(this%t+t)%t};var Rs=Math.PI/180,Ts=180/Math.PI,As=function(t,e){this.lon=t,this.lat=e,this.x=Rs*t,this.y=Rs*e};As.prototype.view=function(){return String(this.lon).slice(0,4)+","+String(this.lat).slice(0,4)},As.prototype.antipode=function(){var t=-1*this.lat,e=this.lon<0?180+this.lon:-1*(180-this.lon);return new As(e,t)};var Ds=function(){this.coords=[],this.length=0};Ds.prototype.move_to=function(t){this.length++,this.coords.push(t)};var Fs=function(t){this.properties=t||{},this.geometries=[]};Fs.prototype.json=function(){if(this.geometries.length<=0)return{geometry:{type:"LineString",coordinates:null},type:"Feature",properties:this.properties};if(1===this.geometries.length)return{geometry:{type:"LineString",coordinates:this.geometries[0].coords},type:"Feature",properties:this.properties};for(var t=[],e=0;e<this.geometries.length;e++)t.push(this.geometries[e].coords);return{geometry:{type:"MultiLineString",coordinates:t},type:"Feature",properties:this.properties}},Fs.prototype.wkt=function(){for(var t="",e="LINESTRING(",n=function(t){e+=t[0]+" "+t[1]+","},r=0;r<this.geometries.length;r++){if(0===this.geometries[r].coords.length)return"LINESTRING(empty)";this.geometries[r].coords.forEach(n),t+=e.substring(0,e.length-1)+")"}return t};var qs=function(t,e,n){if(!t||void 0===t.x||void 0===t.y)throw new Error("GreatCircle constructor expects two args: start and end objects with x and y properties");if(!e||void 0===e.x||void 0===e.y)throw new Error("GreatCircle constructor expects two args: start and end objects with x and y properties");this.start=new As(t.x,t.y),this.end=new As(e.x,e.y),this.properties=n||{};var r=this.start.x-this.end.x,i=this.start.y-this.end.y,o=Math.pow(Math.sin(i/2),2)+Math.cos(this.start.y)*Math.cos(this.end.y)*Math.pow(Math.sin(r/2),2);if(this.g=2*Math.asin(Math.sqrt(o)),this.g===Math.PI)throw new Error("it appears "+t.view()+" and "+e.view()+" are 'antipodal', e.g diametrically opposite, thus there is no single route but rather infinite");if(isNaN(this.g))throw new Error("could not calculate great circle between "+t+" and "+e)};qs.prototype.interpolate=function(t){var e=Math.sin((1-t)*this.g)/Math.sin(this.g),n=Math.sin(t*this.g)/Math.sin(this.g),r=e*Math.cos(this.start.y)*Math.cos(this.start.x)+n*Math.cos(this.end.y)*Math.cos(this.end.x),i=e*Math.cos(this.start.y)*Math.sin(this.start.x)+n*Math.cos(this.end.y)*Math.sin(this.end.x),o=e*Math.sin(this.start.y)+n*Math.sin(this.end.y),s=Ts*Math.atan2(o,Math.sqrt(Math.pow(r,2)+Math.pow(i,2)));return[Ts*Math.atan2(i,r),s]},qs.prototype.Arc=function(t,e){var n=[];if(!t||t<=2)n.push([this.start.lon,this.start.lat]),n.push([this.end.lon,this.end.lat]);else for(var r=1/(t-1),i=0;i<t;++i){var o=r*i,s=this.interpolate(o);n.push(s)}for(var a=!1,u=0,c=e&&e.offset?e.offset:10,h=180-c,l=-180+c,p=360-c,f=1;f<n.length;++f){var g=n[f-1][0],d=n[f][0],y=Math.abs(d-g);y>p&&(d>h&&g<l||g>h&&d<l)?a=!0:y>u&&(u=y)}var _=[];if(a&&u<c){var m=[];_.push(m);for(var v=0;v<n.length;++v){var x=parseFloat(n[v][0]);if(v>0&&Math.abs(x-n[v-1][0])>p){var E=parseFloat(n[v-1][0]),w=parseFloat(n[v-1][1]),b=parseFloat(n[v][0]),I=parseFloat(n[v][1]);if(E>-180&&E<l&&180===b&&v+1<n.length&&n[v-1][0]>-180&&n[v-1][0]<l){m.push([-180,n[v][1]]),v++,m.push([n[v][0],n[v][1]]);continue}if(E>h&&E<180&&-180===b&&v+1<n.length&&n[v-1][0]>h&&n[v-1][0]<180){m.push([180,n[v][1]]),v++,m.push([n[v][0],n[v][1]]);continue}if(E<l&&b>h){var N=E;E=b,b=N;var C=w;w=I,I=C}if(E>h&&b<l&&(b+=360),E<=180&&b>=180&&E<b){var S=(180-E)/(b-E),M=S*I+(1-S)*w;m.push([n[v-1][0]>h?180:-180,M]),(m=[]).push([n[v-1][0]>h?-180:180,M]),_.push(m)}else m=[],_.push(m);m.push([x,n[v][1]])}else m.push([n[v][0],n[v][1]])}}else{var L=[];_.push(L);for(var P=0;P<n.length;++P)L.push([n[P][0],n[P][1]])}for(var O=new Fs(this.properties),R=0;R<_.length;++R){var T=new Ds;O.geometries.push(T);for(var A=_[R],D=0;D<A.length;++D)T.move_to(A[D])}return O};var Gs=Yn;Yn.polyline=Yn,Yn.polygon=function(t,e){var n,r,i,o,s,a,u;for(r=1;r<=8;r*=2){for(n=[],o=!(Hn(i=t[t.length-1],e)&r),s=0;s<t.length;s++)(u=!(Hn(a=t[s],e)&r))!==o&&n.push(Vn(i,a,r,e)),u&&n.push(a),i=a,o=u;if(!(t=n).length)break}return n};var Bs=Array.prototype.slice,ks={successCallback:null,verbose:!1,polygons:!1},zs={},js=64,Xs=16,Us=4,Ys=1,Vs=[],Hs=[],Ws=[],Js=[],Zs=[],Ks=[],Qs=[],$s=[],ta=[],ea=[],na=[],ra=[],ia=[],oa=[],sa=[],aa=[],ua=[],ca=[],ha=[],la=[],pa=[],fa=[],ga=[],da=[];Qs[85]=ea[85]=-1,$s[85]=na[85]=0,ta[85]=ra[85]=1,ha[85]=fa[85]=1,la[85]=ga[85]=0,pa[85]=da[85]=1,Vs[85]=Js[85]=0,Hs[85]=Zs[85]=-1,Ws[85]=sa[85]=0,aa[85]=ia[85]=0,ua[85]=oa[85]=1,Ks[85]=ca[85]=1,fa[1]=fa[169]=0,ga[1]=ga[169]=-1,da[1]=da[169]=0,ia[1]=ia[169]=-1,oa[1]=oa[169]=0,sa[1]=sa[169]=0,ea[4]=ea[166]=0,na[4]=na[166]=-1,ra[4]=ra[166]=1,aa[4]=aa[166]=1,ua[4]=ua[166]=0,ca[4]=ca[166]=0,Qs[16]=Qs[154]=0,$s[16]=$s[154]=1,ta[16]=ta[154]=1,Js[16]=Js[154]=1,Zs[16]=Zs[154]=0,Ks[16]=Ks[154]=1,ha[64]=ha[106]=0,la[64]=la[106]=1,pa[64]=pa[106]=0,Vs[64]=Vs[106]=-1,Hs[64]=Hs[106]=0,Ws[64]=Ws[106]=1,ha[2]=ha[168]=0,la[2]=la[168]=-1,pa[2]=pa[168]=1,fa[2]=fa[168]=0,ga[2]=ga[168]=-1,da[2]=da[168]=0,ia[2]=ia[168]=-1,oa[2]=oa[168]=0,sa[2]=sa[168]=0,aa[2]=aa[168]=-1,ua[2]=ua[168]=0,ca[2]=ca[168]=1,Qs[8]=Qs[162]=0,$s[8]=$s[162]=-1,ta[8]=ta[162]=0,ea[8]=ea[162]=0,na[8]=na[162]=-1,ra[8]=ra[162]=1,ia[8]=ia[162]=1,oa[8]=oa[162]=0,sa[8]=sa[162]=1,aa[8]=aa[162]=1,ua[8]=ua[162]=0,ca[8]=ca[162]=0,Qs[32]=Qs[138]=0,$s[32]=$s[138]=1,ta[32]=ta[138]=1,ea[32]=ea[138]=0,na[32]=na[138]=1,ra[32]=ra[138]=0,Vs[32]=Vs[138]=1,Hs[32]=Hs[138]=0,Ws[32]=Ws[138]=0,Js[32]=Js[138]=1,Zs[32]=Zs[138]=0,Ks[32]=Ks[138]=1,fa[128]=fa[42]=0,ga[128]=ga[42]=1,da[128]=da[42]=1,ha[128]=ha[42]=0,la[128]=la[42]=1,pa[128]=pa[42]=0,Vs[128]=Vs[42]=-1,Hs[128]=Hs[42]=0,Ws[128]=Ws[42]=1,Js[128]=Js[42]=-1,Zs[128]=Zs[42]=0,Ks[128]=Ks[42]=0,ea[5]=ea[165]=-1,na[5]=na[165]=0,ra[5]=ra[165]=0,fa[5]=fa[165]=1,ga[5]=ga[165]=0,da[5]=da[165]=0,aa[20]=aa[150]=0,ua[20]=ua[150]=1,ca[20]=ca[150]=1,Js[20]=Js[150]=0,Zs[20]=Zs[150]=-1,Ks[20]=Ks[150]=1,Qs[80]=Qs[90]=-1,$s[80]=$s[90]=0,ta[80]=ta[90]=1,ha[80]=ha[90]=1,la[80]=la[90]=0,pa[80]=pa[90]=1,ia[65]=ia[105]=0,oa[65]=oa[105]=1,sa[65]=sa[105]=0,Vs[65]=Vs[105]=0,Hs[65]=Hs[105]=-1,Ws[65]=Ws[105]=0,Qs[160]=Qs[10]=-1,$s[160]=$s[10]=0,ta[160]=ta[10]=1,ea[160]=ea[10]=-1,na[160]=na[10]=0,ra[160]=ra[10]=0,fa[160]=fa[10]=1,ga[160]=ga[10]=0,da[160]=da[10]=0,ha[160]=ha[10]=1,la[160]=la[10]=0,pa[160]=pa[10]=1,aa[130]=aa[40]=0,ua[130]=ua[40]=1,ca[130]=ca[40]=1,ia[130]=ia[40]=0,oa[130]=oa[40]=1,sa[130]=sa[40]=0,Vs[130]=Vs[40]=0,Hs[130]=Hs[40]=-1,Ws[130]=Ws[40]=0,Js[130]=Js[40]=0,Zs[130]=Zs[40]=-1,Ks[130]=Ks[40]=1,ea[37]=ea[133]=0,na[37]=na[133]=1,ra[37]=ra[133]=1,fa[37]=fa[133]=0,ga[37]=ga[133]=1,da[37]=da[133]=0,Vs[37]=Vs[133]=-1,Hs[37]=Hs[133]=0,Ws[37]=Ws[133]=0,Js[37]=Js[133]=1,Zs[37]=Zs[133]=0,Ks[37]=Ks[133]=0,aa[148]=aa[22]=-1,ua[148]=ua[22]=0,ca[148]=ca[22]=0,fa[148]=fa[22]=0,ga[148]=ga[22]=-1,da[148]=da[22]=1,ha[148]=ha[22]=0,la[148]=la[22]=1,pa[148]=pa[22]=1,Js[148]=Js[22]=-1,Zs[148]=Zs[22]=0,Ks[148]=Ks[22]=1,Qs[82]=Qs[88]=0,$s[82]=$s[88]=-1,ta[82]=ta[88]=1,aa[82]=aa[88]=1,ua[82]=ua[88]=0,ca[82]=ca[88]=1,ia[82]=ia[88]=-1,oa[82]=oa[88]=0,sa[82]=sa[88]=1,ha[82]=ha[88]=0,la[82]=la[88]=-1,pa[82]=pa[88]=0,Qs[73]=Qs[97]=0,$s[73]=$s[97]=1,ta[73]=ta[97]=0,ea[73]=ea[97]=0,na[73]=na[97]=-1,ra[73]=ra[97]=0,ia[73]=ia[97]=1,oa[73]=oa[97]=0,sa[73]=sa[97]=0,Vs[73]=Vs[97]=1,Hs[73]=Hs[97]=0,Ws[73]=Ws[97]=1,Qs[145]=Qs[25]=0,$s[145]=$s[25]=-1,ta[145]=ta[25]=0,ia[145]=ia[25]=1,oa[145]=oa[25]=0,sa[145]=sa[25]=1,fa[145]=fa[25]=0,ga[145]=ga[25]=1,da[145]=da[25]=1,Js[145]=Js[25]=-1,Zs[145]=Zs[25]=0,Ks[145]=Ks[25]=0,ea[70]=ea[100]=0,na[70]=na[100]=1,ra[70]=ra[100]=0,aa[70]=aa[100]=-1,ua[70]=ua[100]=0,ca[70]=ca[100]=1,ha[70]=ha[100]=0,la[70]=la[100]=-1,pa[70]=pa[100]=1,Vs[70]=Vs[100]=1,Hs[70]=Hs[100]=0,Ws[70]=Ws[100]=0,ea[101]=ea[69]=0,na[101]=na[69]=1,ra[101]=ra[69]=0,Vs[101]=Vs[69]=1,Hs[101]=Hs[69]=0,Ws[101]=Ws[69]=0,fa[149]=fa[21]=0,ga[149]=ga[21]=1,da[149]=da[21]=1,Js[149]=Js[21]=-1,Zs[149]=Zs[21]=0,Ks[149]=Ks[21]=0,aa[86]=aa[84]=-1,ua[86]=ua[84]=0,ca[86]=ca[84]=1,ha[86]=ha[84]=0,la[86]=la[84]=-1,pa[86]=pa[84]=1,Qs[89]=Qs[81]=0,$s[89]=$s[81]=-1,ta[89]=ta[81]=0,ia[89]=ia[81]=1,oa[89]=oa[81]=0,sa[89]=sa[81]=1,Qs[96]=Qs[74]=0,$s[96]=$s[74]=1,ta[96]=ta[74]=0,ea[96]=ea[74]=-1,na[96]=na[74]=0,ra[96]=ra[74]=1,ha[96]=ha[74]=1,la[96]=la[74]=0,pa[96]=pa[74]=0,Vs[96]=Vs[74]=1,Hs[96]=Hs[74]=0,Ws[96]=Ws[74]=1,Qs[24]=Qs[146]=0,$s[24]=$s[146]=-1,ta[24]=ta[146]=1,aa[24]=aa[146]=1,ua[24]=ua[146]=0,ca[24]=ca[146]=1,ia[24]=ia[146]=0,oa[24]=oa[146]=1,sa[24]=sa[146]=1,Js[24]=Js[146]=0,Zs[24]=Zs[146]=-1,Ks[24]=Ks[146]=0,ea[6]=ea[164]=-1,na[6]=na[164]=0,ra[6]=ra[164]=1,aa[6]=aa[164]=-1,ua[6]=ua[164]=0,ca[6]=ca[164]=0,fa[6]=fa[164]=0,ga[6]=ga[164]=-1,da[6]=da[164]=1,ha[6]=ha[164]=1,la[6]=la[164]=0,pa[6]=pa[164]=0,ia[129]=ia[41]=0,oa[129]=oa[41]=1,sa[129]=sa[41]=1,fa[129]=fa[41]=0,ga[129]=ga[41]=1,da[129]=da[41]=0,Vs[129]=Vs[41]=-1,Hs[129]=Hs[41]=0,Ws[129]=Ws[41]=0,Js[129]=Js[41]=0,Zs[129]=Zs[41]=-1,Ks[129]=Ks[41]=0,aa[66]=aa[104]=0,ua[66]=ua[104]=1,ca[66]=ca[104]=0,ia[66]=ia[104]=-1,oa[66]=oa[104]=0,sa[66]=sa[104]=1,ha[66]=ha[104]=0,la[66]=la[104]=-1,pa[66]=pa[104]=0,Vs[66]=Vs[104]=0,Hs[66]=Hs[104]=-1,Ws[66]=Ws[104]=1,Qs[144]=Qs[26]=-1,$s[144]=$s[26]=0,ta[144]=ta[26]=0,fa[144]=fa[26]=1,ga[144]=ga[26]=0,da[144]=da[26]=1,ha[144]=ha[26]=0,la[144]=la[26]=1,pa[144]=pa[26]=1,Js[144]=Js[26]=-1,Zs[144]=Zs[26]=0,Ks[144]=Ks[26]=1,ea[36]=ea[134]=0,na[36]=na[134]=1,ra[36]=ra[134]=1,aa[36]=aa[134]=0,ua[36]=ua[134]=1,ca[36]=ca[134]=0,Vs[36]=Vs[134]=0,Hs[36]=Hs[134]=-1,Ws[36]=Ws[134]=1,Js[36]=Js[134]=1,Zs[36]=Zs[134]=0,Ks[36]=Ks[134]=0,Qs[9]=Qs[161]=-1,$s[9]=$s[161]=0,ta[9]=ta[161]=0,ea[9]=ea[161]=0,na[9]=na[161]=-1,ra[9]=ra[161]=0,ia[9]=ia[161]=1,oa[9]=oa[161]=0,sa[9]=sa[161]=0,fa[9]=fa[161]=1,ga[9]=ga[161]=0,da[9]=da[161]=1,Qs[136]=0,$s[136]=1,ta[136]=1,ea[136]=0,na[136]=1,ra[136]=0,aa[136]=-1,ua[136]=0,ca[136]=1,ia[136]=-1,oa[136]=0,sa[136]=0,fa[136]=0,ga[136]=-1,da[136]=0,ha[136]=0,la[136]=-1,pa[136]=1,Vs[136]=1,Hs[136]=0,Ws[136]=0,Js[136]=1,Zs[136]=0,Ks[136]=1,Qs[34]=0,$s[34]=-1,ta[34]=0,ea[34]=0,na[34]=-1,ra[34]=1,aa[34]=1,ua[34]=0,ca[34]=0,ia[34]=1,oa[34]=0,sa[34]=1,fa[34]=0,ga[34]=1,da[34]=1,ha[34]=0,la[34]=1,pa[34]=0,Vs[34]=-1,Hs[34]=0,Ws[34]=1,Js[34]=-1,Zs[34]=0,Ks[34]=0,Qs[35]=0,$s[35]=1,ta[35]=1,ea[35]=0,na[35]=-1,ra[35]=1,aa[35]=1,ua[35]=0,ca[35]=0,ia[35]=-1,oa[35]=0,sa[35]=0,fa[35]=0,ga[35]=-1,da[35]=0,ha[35]=0,la[35]=1,pa[35]=0,Vs[35]=-1,Hs[35]=0,Ws[35]=1,Js[35]=1,Zs[35]=0,Ks[35]=1,Qs[153]=0,$s[153]=1,ta[153]=1,ia[153]=-1,oa[153]=0,sa[153]=0,fa[153]=0,ga[153]=-1,da[153]=0,Js[153]=1,Zs[153]=0,Ks[153]=1,ea[102]=0,na[102]=-1,ra[102]=1,aa[102]=1,ua[102]=0,ca[102]=0,ha[102]=0,la[102]=1,pa[102]=0,Vs[102]=-1,Hs[102]=0,Ws[102]=1,Qs[155]=0,$s[155]=-1,ta[155]=0,ia[155]=1,oa[155]=0,sa[155]=1,fa[155]=0,ga[155]=1,da[155]=1,Js[155]=-1,Zs[155]=0,Ks[155]=0,ea[103]=0,na[103]=1,ra[103]=0,aa[103]=-1,ua[103]=0,ca[103]=1,ha[103]=0,la[103]=-1,pa[103]=1,Vs[103]=1,Hs[103]=0,Ws[103]=0,Qs[152]=0,$s[152]=1,ta[152]=1,aa[152]=-1,ua[152]=0,ca[152]=1,ia[152]=-1,oa[152]=0,sa[152]=0,fa[152]=0,ga[152]=-1,da[152]=0,ha[152]=0,la[152]=-1,pa[152]=1,Js[152]=1,Zs[152]=0,Ks[152]=1,Qs[156]=0,$s[156]=-1,ta[156]=1,aa[156]=1,ua[156]=0,ca[156]=1,ia[156]=-1,oa[156]=0,sa[156]=0,fa[156]=0,ga[156]=-1,da[156]=0,ha[156]=0,la[156]=1,pa[156]=1,Js[156]=-1,Zs[156]=0,Ks[156]=1,Qs[137]=0,$s[137]=1,ta[137]=1,ea[137]=0,na[137]=1,ra[137]=0,ia[137]=-1,oa[137]=0,sa[137]=0,fa[137]=0,ga[137]=-1,da[137]=0,Vs[137]=1,Hs[137]=0,Ws[137]=0,Js[137]=1,Zs[137]=0,Ks[137]=1,Qs[139]=0,$s[139]=1,ta[139]=1,ea[139]=0,na[139]=-1,ra[139]=0,ia[139]=1,oa[139]=0,sa[139]=0,fa[139]=0,ga[139]=1,da[139]=0,Vs[139]=-1,Hs[139]=0,Ws[139]=0,Js[139]=1,Zs[139]=0,Ks[139]=1,Qs[98]=0,$s[98]=-1,ta[98]=0,ea[98]=0,na[98]=-1,ra[98]=1,aa[98]=1,ua[98]=0,ca[98]=0,ia[98]=1,oa[98]=0,sa[98]=1,ha[98]=0,la[98]=1,pa[98]=0,Vs[98]=-1,Hs[98]=0,Ws[98]=1,Qs[99]=0,$s[99]=1,ta[99]=0,ea[99]=0,na[99]=-1,ra[99]=1,aa[99]=1,ua[99]=0,ca[99]=0,ia[99]=-1,oa[99]=0,sa[99]=1,ha[99]=0,la[99]=-1,pa[99]=0,Vs[99]=1,Hs[99]=0,Ws[99]=1,ea[38]=0,na[38]=-1,ra[38]=1,aa[38]=1,ua[38]=0,ca[38]=0,fa[38]=0,ga[38]=1,da[38]=1,ha[38]=0,la[38]=1,pa[38]=0,Vs[38]=-1,Hs[38]=0,Ws[38]=1,Js[38]=-1,Zs[38]=0,Ks[38]=0,ea[39]=0,na[39]=1,ra[39]=1,aa[39]=-1,ua[39]=0,ca[39]=0,fa[39]=0,ga[39]=-1,da[39]=1,ha[39]=0,la[39]=1,pa[39]=0,Vs[39]=-1,Hs[39]=0,Ws[39]=1,Js[39]=1,Zs[39]=0,Ks[39]=0;var ya=function(t){return[[t.bottomleft,0],[0,0],[0,t.leftbottom]]},_a=function(t){return[[1,t.rightbottom],[1,0],[t.bottomright,0]]},ma=function(t){return[[t.topright,1],[1,1],[1,t.righttop]]},va=function(t){return[[0,t.lefttop],[0,1],[t.topleft,1]]},xa=function(t){return[[t.bottomright,0],[t.bottomleft,0],[0,t.leftbottom],[0,t.lefttop]]},Ea=function(t){return[[t.bottomright,0],[t.bottomleft,0],[1,t.righttop],[1,t.rightbottom]]},wa=function(t){return[[1,t.righttop],[1,t.rightbottom],[t.topleft,1],[t.topright,1]]},ba=function(t){return[[0,t.leftbottom],[0,t.lefttop],[t.topleft,1],[t.topright,1]]},Ia=[],Na=[],Ca=[],Sa=[],Ma=[],La=[],Pa=[],Oa=[];Sa[1]=Ma[1]=18,Sa[169]=Ma[169]=18,Ca[4]=Na[4]=12,Ca[166]=Na[166]=12,Ia[16]=Oa[16]=4,Ia[154]=Oa[154]=4,La[64]=Pa[64]=22,La[106]=Pa[106]=22,Ca[2]=La[2]=17,Sa[2]=Ma[2]=18,Ca[168]=La[168]=17,Sa[168]=Ma[168]=18,Ia[8]=Sa[8]=9,Na[8]=Ca[8]=12,Ia[162]=Sa[162]=9,Na[162]=Ca[162]=12,Ia[32]=Oa[32]=4,Na[32]=Pa[32]=1,Ia[138]=Oa[138]=4,Na[138]=Pa[138]=1,Ma[128]=Oa[128]=21,La[128]=Pa[128]=22,Ma[42]=Oa[42]=21,La[42]=Pa[42]=22,Na[5]=Ma[5]=14,Na[165]=Ma[165]=14,Ca[20]=Oa[20]=6,Ca[150]=Oa[150]=6,Ia[80]=La[80]=11,Ia[90]=La[90]=11,Sa[65]=Pa[65]=3,Sa[105]=Pa[105]=3,Ia[160]=La[160]=11,Na[160]=Ma[160]=14,Ia[10]=La[10]=11,Na[10]=Ma[10]=14,Ca[130]=Oa[130]=6,Sa[130]=Pa[130]=3,Ca[40]=Oa[40]=6,Sa[40]=Pa[40]=3,Na[101]=Pa[101]=1,Na[69]=Pa[69]=1,Ma[149]=Oa[149]=21,Ma[21]=Oa[21]=21,Ca[86]=La[86]=17,Ca[84]=La[84]=17,Ia[89]=Sa[89]=9,Ia[81]=Sa[81]=9,Ia[96]=Pa[96]=0,Na[96]=La[96]=15,Ia[74]=Pa[74]=0,Na[74]=La[74]=15,Ia[24]=Ca[24]=8,Sa[24]=Oa[24]=7,Ia[146]=Ca[146]=8,Sa[146]=Oa[146]=7,Na[6]=La[6]=15,Ca[6]=Ma[6]=16,Na[164]=La[164]=15,Ca[164]=Ma[164]=16,Sa[129]=Oa[129]=7,Ma[129]=Pa[129]=20,Sa[41]=Oa[41]=7,Ma[41]=Pa[41]=20,Ca[66]=Pa[66]=2,Sa[66]=La[66]=19,Ca[104]=Pa[104]=2,Sa[104]=La[104]=19,Ia[144]=Ma[144]=10,La[144]=Oa[144]=23,Ia[26]=Ma[26]=10,La[26]=Oa[26]=23,Na[36]=Oa[36]=5,Ca[36]=Pa[36]=2,Na[134]=Oa[134]=5,Ca[134]=Pa[134]=2,Ia[9]=Ma[9]=10,Na[9]=Sa[9]=13,Ia[161]=Ma[161]=10,Na[161]=Sa[161]=13,Na[37]=Oa[37]=5,Ma[37]=Pa[37]=20,Na[133]=Oa[133]=5,Ma[133]=Pa[133]=20,Ca[148]=Ma[148]=16,La[148]=Oa[148]=23,Ca[22]=Ma[22]=16,La[22]=Oa[22]=23,Ia[82]=Ca[82]=8,Sa[82]=La[82]=19,Ia[88]=Ca[88]=8,Sa[88]=La[88]=19,Ia[73]=Pa[73]=0,Na[73]=Sa[73]=13,Ia[97]=Pa[97]=0,Na[97]=Sa[97]=13,Ia[145]=Sa[145]=9,Ma[145]=Oa[145]=21,Ia[25]=Sa[25]=9,Ma[25]=Oa[25]=21,Na[70]=Pa[70]=1,Ca[70]=La[70]=17,Na[100]=Pa[100]=1,Ca[100]=La[100]=17,Ia[34]=Sa[34]=9,Na[34]=Ca[34]=12,Ma[34]=Oa[34]=21,La[34]=Pa[34]=22,Ia[136]=Oa[136]=4,Na[136]=Pa[136]=1,Ca[136]=La[136]=17,Sa[136]=Ma[136]=18,Ia[35]=Oa[35]=4,Na[35]=Ca[35]=12,Sa[35]=Ma[35]=18,La[35]=Pa[35]=22,Ia[153]=Oa[153]=4,Sa[153]=Ma[153]=18,Na[102]=Ca[102]=12,La[102]=Pa[102]=22,Ia[155]=Sa[155]=9,Ma[155]=Oa[155]=23,Na[103]=Pa[103]=1,Ca[103]=La[103]=17,Ia[152]=Oa[152]=4,Ca[152]=La[152]=17,Sa[152]=Ma[152]=18,Ia[156]=Ca[156]=8,Sa[156]=Ma[156]=18,La[156]=Oa[156]=23,Ia[137]=Oa[137]=4,Na[137]=Pa[137]=1,Sa[137]=Ma[137]=18,Ia[139]=Oa[139]=4,Na[139]=Sa[139]=13,Ma[139]=Pa[139]=20,Ia[98]=Sa[98]=9,Na[98]=Ca[98]=12,La[98]=Pa[98]=22,Ia[99]=Pa[99]=0,Na[99]=Ca[99]=12,Sa[99]=La[99]=19,Na[38]=Ca[38]=12,Ma[38]=Oa[38]=21,La[38]=Pa[38]=22,Na[39]=Oa[39]=5,Ca[39]=Ma[39]=16,La[39]=Pa[39]=22;var Ra=[];Ra[1]=Ra[169]=ya,Ra[4]=Ra[166]=_a,Ra[16]=Ra[154]=ma,Ra[64]=Ra[106]=va,Ra[168]=Ra[2]=xa,Ra[162]=Ra[8]=Ea,Ra[138]=Ra[32]=wa,Ra[42]=Ra[128]=ba,Ra[5]=Ra[165]=function(t){return[[0,0],[0,t.leftbottom],[1,t.rightbottom],[1,0]]},Ra[20]=Ra[150]=function(t){return[[1,0],[t.bottomright,0],[t.topright,1],[1,1]]},Ra[80]=Ra[90]=function(t){return[[1,1],[1,t.righttop],[0,t.lefttop],[0,1]]},Ra[65]=Ra[105]=function(t){return[[t.bottomleft,0],[0,0],[0,1],[t.topleft,1]]},Ra[160]=Ra[10]=function(t){return[[1,t.righttop],[1,t.rightbottom],[0,t.leftbottom],[0,t.lefttop]]},Ra[130]=Ra[40]=function(t){return[[t.topleft,1],[t.topright,1],[t.bottomright,0],[t.bottomleft,0]]},Ra[85]=function(){return[[0,0],[0,1],[1,1],[1,0]]},Ra[101]=Ra[69]=function(t){return[[1,t.rightbottom],[1,0],[0,0],[0,1],[t.topleft,1]]},Ra[149]=Ra[21]=function(t){return[[t.topright,1],[1,1],[1,0],[0,0],[0,t.leftbottom]]},Ra[86]=Ra[84]=function(t){return[[1,0],[t.bottomright,0],[0,t.lefttop],[0,1],[1,1]]},Ra[89]=Ra[81]=function(t){return[[1,1],[1,t.righttop],[t.bottomleft,0],[0,0],[0,1]]},Ra[96]=Ra[74]=function(t){return[[1,t.righttop],[1,t.rightbottom],[0,t.lefttop],[0,1],[t.topleft,1]]},Ra[24]=Ra[146]=function(t){return[[1,1],[1,t.righttop],[t.bottomright,0],[t.bottomleft,0],[t.topright,1]]},Ra[6]=Ra[164]=function(t){return[[1,t.rightbottom],[1,0],[t.bottomright,0],[0,t.leftbottom],[0,t.lefttop]]},Ra[129]=Ra[41]=function(t){return[[t.topright,1],[t.bottomleft,0],[0,0],[0,t.leftbottom],[t.topleft,1]]},Ra[66]=Ra[104]=function(t){return[[t.bottomright,0],[t.bottomleft,0],[0,t.lefttop],[0,1],[t.topleft,1]]},Ra[144]=Ra[26]=function(t){return[[1,1],[1,t.righttop],[0,t.leftbottom],[0,t.lefttop],[t.topright,1]]},Ra[36]=Ra[134]=function(t){return[[1,t.rightbottom],[1,0],[t.bottomright,0],[t.topleft,1],[t.topright,1]]},Ra[9]=Ra[161]=function(t){return[[1,t.righttop],[1,t.rightbottom],[t.bottomleft,0],[0,0],[0,t.leftbottom]]},Ra[37]=Ra[133]=function(t){return[[1,t.rightbottom],[1,0],[0,0],[0,t.leftbottom],[t.topleft,1],[t.topright,1]]},Ra[148]=Ra[22]=function(t){return[[1,1],[1,0],[t.bottomright,0],[0,t.leftbottom],[0,t.lefttop],[t.topright,1]]},Ra[82]=Ra[88]=function(t){return[[1,1],[1,t.righttop],[t.bottomright,0],[t.bottomleft,0],[0,t.lefttop],[0,1]]},Ra[73]=Ra[97]=function(t){return[[1,t.righttop],[1,t.rightbottom],[t.bottomleft,0],[0,0],[0,1],[t.topleft,1]]},Ra[145]=Ra[25]=function(t){return[[1,1],[1,t.righttop],[t.bottomleft,0],[0,0],[0,t.leftbottom],[t.topright,1]]},Ra[70]=Ra[100]=function(t){return[[1,t.rightbottom],[1,0],[t.bottomright,0],[0,t.lefttop],[0,1],[t.topleft,1]]},Ra[34]=function(t){return[ba(t),Ea(t)]},Ra[35]=function(t){return[[1,t.righttop],[1,t.rightbottom],[t.bottomright,0],[t.bottomleft,0],[0,t.leftbottom],[0,t.lefttop],[t.topleft,1],[t.topright,1]]},Ra[136]=function(t){return[wa(t),xa(t)]},Ra[153]=function(t){return[ma(t),ya(t)]},Ra[102]=function(t){return[_a(t),va(t)]},Ra[155]=function(t){return[[1,1],[1,t.righttop],[t.bottomleft,0],[0,0],[0,t.leftbottom],[t.topright,1]]},Ra[103]=function(t){return[[1,t.rightbottom],[1,0],[t.bottomright,0],[0,t.lefttop],[0,1],[t.topleft,1]]},Ra[152]=function(t){return[ma(t),xa(t)]},Ra[156]=function(t){return[[1,1],[1,t.righttop],[t.bottomright,0],[t.bottomleft,0],[0,t.leftbottom],[0,t.lefttop],[t.topright,1]]},Ra[137]=function(t){return[wa(t),ya(t)]},Ra[139]=function(t){return[[1,t.righttop],[1,t.rightbottom],[t.bottomleft,0],[0,0],[0,t.leftbottom],[t.topleft,1],[t.topright,1]]},Ra[98]=function(t){return[Ea(t),va(t)]},Ra[99]=function(t){return[[1,t.righttop],[1,t.rightbottom],[t.bottomright,0],[t.bottomleft,0],[0,t.lefttop],[0,1],[t.topleft,1]]},Ra[38]=function(t){return[_a(t),ba(t)]},Ra[39]=function(t){return[[1,t.rightbottom],[1,0],[t.bottomright,0],[0,t.leftbottom],[0,t.lefttop],[t.topleft,1],[t.topright,1]]};var Ta=function t(e){this.id=t.buildId(e),this.coordinates=e,this.innerEdges=[],this.outerEdges=[],this.outerEdgesSorted=!1};Ta.buildId=function(t){return t.join(",")},Ta.prototype.removeInnerEdge=function(t){this.innerEdges=this.innerEdges.filter(function(e){return e.from.id!==t.from.id})},Ta.prototype.removeOuterEdge=function(t){this.outerEdges=this.outerEdges.filter(function(e){return e.to.id!==t.to.id})},Ta.prototype.addOuterEdge=function(t){this.outerEdges.push(t),this.outerEdgesSorted=!1},Ta.prototype.sortOuterEdges=function(){var t=this;this.outerEdgesSorted||(this.outerEdges.sort(function(e,n){var r=e.to,i=n.to;if(r.coordinates[0]-t.coordinates[0]>=0&&i.coordinates[0]-t.coordinates[0]<0)return 1;if(r.coordinates[0]-t.coordinates[0]<0&&i.coordinates[0]-t.coordinates[0]>=0)return-1;if(r.coordinates[0]-t.coordinates[0]==0&&i.coordinates[0]-t.coordinates[0]==0)return r.coordinates[1]-t.coordinates[1]>=0||i.coordinates[1]-t.coordinates[1]>=0?r.coordinates[1]-i.coordinates[1]:i.coordinates[1]-r.coordinates[1];var o=xr(t.coordinates,r.coordinates,i.coordinates);if(o<0)return 1;if(o>0)return-1;return Math.pow(r.coordinates[0]-t.coordinates[0],2)+Math.pow(r.coordinates[1]-t.coordinates[1],2)-(Math.pow(i.coordinates[0]-t.coordinates[0],2)+Math.pow(i.coordinates[1]-t.coordinates[1],2))}),this.outerEdgesSorted=!0)},Ta.prototype.getOuterEdges=function(){return this.sortOuterEdges(),this.outerEdges},Ta.prototype.getOuterEdge=function(t){return this.sortOuterEdges(),this.outerEdges[t]},Ta.prototype.addInnerEdge=function(t){this.innerEdges.push(t)};var Aa=function(t,e){this.from=t,this.to=e,this.next=void 0,this.label=void 0,this.symetric=void 0,this.ring=void 0,this.from.addOuterEdge(this),this.to.addInnerEdge(this)};Aa.prototype.getSymetric=function(){return this.symetric||(this.symetric=new Aa(this.to,this.from),this.symetric.symetric=this),this.symetric},Aa.prototype.deleteEdge=function(){this.from.removeOuterEdge(this),this.to.removeInnerEdge(this)},Aa.prototype.isEqual=function(t){return this.from.id===t.from.id&&this.to.id===t.to.id},Aa.prototype.toString=function(){return"Edge { "+this.from.id+" -> "+this.to.id+" }"},Aa.prototype.toLineString=function(){return a([this.from.coordinates,this.to.coordinates])},Aa.prototype.compareTo=function(t){return xr(t.from.coordinates,t.to.coordinates,this.to.coordinates)};var Da=function(){this.edges=[],this.polygon=void 0,this.envelope=void 0},Fa={length:{configurable:!0}};Da.prototype.push=function(t){this[this.edges.length]=t,this.edges.push(t),this.polygon=this.envelope=void 0},Da.prototype.get=function(t){return this.edges[t]},Fa.length.get=function(){return this.edges.length},Da.prototype.forEach=function(t){this.edges.forEach(t)},Da.prototype.map=function(t){return this.edges.map(t)},Da.prototype.some=function(t){return this.edges.some(t)},Da.prototype.isValid=function(){return!0},Da.prototype.isHole=function(){var t=this,e=this.edges.reduce(function(e,n,r){return n.from.coordinates[1]>t.edges[e].from.coordinates[1]&&(e=r),e},0),n=(0===e?this.length:e)-1,r=(e+1)%this.length,i=xr(this.edges[n].from.coordinates,this.edges[e].from.coordinates,this.edges[r].from.coordinates);return 0===i?this.edges[n].from.coordinates[0]>this.edges[r].from.coordinates[0]:i>0},Da.prototype.toMultiPoint=function(){return l(this.edges.map(function(t){return t.from.coordinates}))},Da.prototype.toPolygon=function(){if(this.polygon)return this.polygon;var t=this.edges.map(function(t){return t.from.coordinates});return t.push(this.edges[0].from.coordinates),this.polygon=o([t])},Da.prototype.getEnvelope=function(){return this.envelope?this.envelope:this.envelope=he(this.toPolygon())},Da.findEdgeRingContaining=function(t,e){var n,i,o=t.getEnvelope();return e.forEach(function(e){var s=e.getEnvelope();if(i&&(n=i.getEnvelope()),!function(t,e){var n=t.geometry.coordinates.map(function(t){return t[0]}),r=t.geometry.coordinates.map(function(t){return t[1]}),i=e.geometry.coordinates.map(function(t){return t[0]}),o=e.geometry.coordinates.map(function(t){return t[1]});return Math.max(null,n)===Math.max(null,i)&&Math.max(null,r)===Math.max(null,o)&&Math.min(null,n)===Math.min(null,i)&&Math.min(null,r)===Math.min(null,o)}(s,o)&&Er(s,o)){var a=t.map(function(t){return t.from.coordinates}).find(function(t){return!e.some(function(e){return function(t,e){return t[0]===e[0]&&t[1]===e[1]}(t,e.from.coordinates)})});a&&e.inside(r(a))&&(i&&!Er(n,s)||(i=e))}}),i},Da.prototype.inside=function(t){return Pt(t,this.toPolygon())},Object.defineProperties(Da.prototype,Fa);var qa=function(){this.edges=[],this.nodes={}};qa.fromGeoJson=function(t){!function(t){if(!t)throw new Error("No geojson passed");if("FeatureCollection"!==t.type&&"GeometryCollection"!==t.type&&"MultiLineString"!==t.type&&"LineString"!==t.type&&"Feature"!==t.type)throw new Error("Invalid input type '"+t.type+"'. Geojson must be FeatureCollection, GeometryCollection, LineString, MultiLineString or Feature")}(t);var e=new qa;return F(t,function(t){H(t,"LineString","Graph::fromGeoJson"),M(t,function(t,n){if(t){var r=e.getNode(t),i=e.getNode(n);e.addEdge(r,i)}return n})}),e},qa.prototype.getNode=function(t){var e=Ta.buildId(t),n=this.nodes[e];return n||(n=this.nodes[e]=new Ta(t)),n},qa.prototype.addEdge=function(t,e){var n=new Aa(t,e),r=n.getSymetric();this.edges.push(n),this.edges.push(r)},qa.prototype.deleteDangles=function(){var t=this;Object.keys(this.nodes).map(function(e){return t.nodes[e]}).forEach(function(e){return t._removeIfDangle(e)})},qa.prototype._removeIfDangle=function(t){var e=this;if(t.innerEdges.length<=1){var n=t.getOuterEdges().map(function(t){return t.to});this.removeNode(t),n.forEach(function(t){return e._removeIfDangle(t)})}},qa.prototype.deleteCutEdges=function(){var t=this;this._computeNextCWEdges(),this._findLabeledEdgeRings(),this.edges.forEach(function(e){e.label===e.symetric.label&&(t.removeEdge(e.symetric),t.removeEdge(e))})},qa.prototype._computeNextCWEdges=function(t){var e=this;void 0===t?Object.keys(this.nodes).forEach(function(t){return e._computeNextCWEdges(e.nodes[t])}):t.getOuterEdges().forEach(function(e,n){t.getOuterEdge((0===n?t.getOuterEdges().length:n)-1).symetric.next=e})},qa.prototype._computeNextCCWEdges=function(t,e){for(var n,r,i=t.getOuterEdges(),o=i.length-1;o>=0;--o){var s=i[o],a=s.symetric,u=void 0,c=void 0;s.label===e&&(u=s),a.label===e&&(c=a),u&&c&&(c&&(r=c),u&&(r&&(r.next=u,r=void 0),n||(n=u)))}r&&(r.next=n)},qa.prototype._findLabeledEdgeRings=function(){var t=[],e=0;return this.edges.forEach(function(n){if(!(n.label>=0)){t.push(n);var r=n;do{r.label=e,r=r.next}while(!n.isEqual(r));e++}}),t},qa.prototype.getEdgeRings=function(){var t=this;this._computeNextCWEdges(),this.edges.forEach(function(t){t.label=void 0}),this._findLabeledEdgeRings().forEach(function(e){t._findIntersectionNodes(e).forEach(function(n){t._computeNextCCWEdges(n,e.label)})});var e=[];return this.edges.forEach(function(n){n.ring||e.push(t._findEdgeRing(n))}),e},qa.prototype._findIntersectionNodes=function(t){var e=[],n=t,r=function(){var r=0;n.from.getOuterEdges().forEach(function(e){e.label===t.label&&++r}),r>1&&e.push(n.from),n=n.next};do{r()}while(!t.isEqual(n));return e},qa.prototype._findEdgeRing=function(t){var e=t,n=new Da;do{n.push(e),e.ring=n,e=e.next}while(!t.isEqual(e));return n},qa.prototype.removeNode=function(t){var e=this;t.getOuterEdges().forEach(function(t){return e.removeEdge(t)}),t.innerEdges.forEach(function(t){return e.removeEdge(t)}),delete this.nodes[t.id]},qa.prototype.removeEdge=function(t){this.edges=this.edges.filter(function(e){return!e.isEqual(t)}),t.deleteEdge()};var Ga=mt(function(t,e){function n(t){var e=[];for(var n in t)e.push(n);return e}(t.exports="function"==typeof Object.keys?Object.keys:n).shim=n}),Ba=(Ga.shim,mt(function(t,e){function n(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function r(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Object.prototype.hasOwnProperty.call(t,"callee")&&!Object.prototype.propertyIsEnumerable.call(t,"callee")||!1}var i="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();(e=t.exports=i?n:r).supported=n,e.unsupported=r})),ka=(Ba.supported,Ba.unsupported,mt(function(t){function e(t){return null===t||void 0===t}function n(t){return!(!t||"object"!=typeof t||"number"!=typeof t.length)&&("function"==typeof t.copy&&"function"==typeof t.slice&&!(t.length>0&&"number"!=typeof t[0]))}var r=Array.prototype.slice,i=t.exports=function(t,o,s){return s||(s={}),t===o||(t instanceof Date&&o instanceof Date?t.getTime()===o.getTime():!t||!o||"object"!=typeof t&&"object"!=typeof o?s.strict?t===o:t==o:function(t,o,s){var a,u;if(e(t)||e(o))return!1;if(t.prototype!==o.prototype)return!1;if(Ba(t))return!!Ba(o)&&(t=r.call(t),o=r.call(o),i(t,o,s));if(n(t)){if(!n(o))return!1;if(t.length!==o.length)return!1;for(a=0;a<t.length;a++)if(t[a]!==o[a])return!1;return!0}try{var c=Ga(t),h=Ga(o)}catch(t){return!1}if(c.length!=h.length)return!1;for(c.sort(),h.sort(),a=c.length-1;a>=0;a--)if(c[a]!=h[a])return!1;for(a=c.length-1;a>=0;a--)if(u=c[a],!i(t[u],o[u],s))return!1;return typeof t==typeof o}(t,o,s))}})),za=function(t){this.precision=t&&t.precision?t.precision:17,this.direction=!(!t||!t.direction)&&t.direction,this.pseudoNode=!(!t||!t.pseudoNode)&&t.pseudoNode,this.objectComparator=t&&t.objectComparator?t.objectComparator:Rr};za.prototype.compare=function(t,e){if(t.type!==e.type||!Or(t,e))return!1;switch(t.type){case"Point":return this.compareCoord(t.coordinates,e.coordinates);case"LineString":return this.compareLine(t.coordinates,e.coordinates,0,!1);case"Polygon":return this.comparePolygon(t,e);case"Feature":return this.compareFeature(t,e);default:if(0===t.type.indexOf("Multi")){var n=this,r=Pr(t),i=Pr(e);return r.every(function(t){return this.some(function(e){return n.compare(t,e)})},i)}}return!1},za.prototype.compareCoord=function(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[n].toFixed(this.precision)!==e[n].toFixed(this.precision))return!1;return!0},za.prototype.compareLine=function(t,e,n,r){if(!Or(t,e))return!1;var i=this.pseudoNode?t:this.removePseudo(t),o=this.pseudoNode?e:this.removePseudo(e);if(!r||this.compareCoord(i[0],o[0])||(o=this.fixStartIndex(o,i))){var s=this.compareCoord(i[n],o[n]);return this.direction||s?this.comparePath(i,o):!!this.compareCoord(i[n],o[o.length-(1+n)])&&this.comparePath(i.slice().reverse(),o)}},za.prototype.fixStartIndex=function(t,e){for(var n,r=-1,i=0;i<t.length;i++)if(this.compareCoord(t[i],e[0])){r=i;break}return r>=0&&(n=[].concat(t.slice(r,t.length),t.slice(1,r+1))),n},za.prototype.comparePath=function(t,e){var n=this;return t.every(function(t,e){return n.compareCoord(t,this[e])},e)},za.prototype.comparePolygon=function(t,e){if(this.compareLine(t.coordinates[0],e.coordinates[0],1,!0)){var n=t.coordinates.slice(1,t.coordinates.length),r=e.coordinates.slice(1,e.coordinates.length),i=this;return n.every(function(t){return this.some(function(e){return i.compareLine(t,e,1,!0)})},r)}return!1},za.prototype.compareFeature=function(t,e){return!(t.id!==e.id||!this.objectComparator(t.properties,e.properties)||!this.compareBBox(t,e))&&this.compare(t.geometry,e.geometry)},za.prototype.compareBBox=function(t,e){return!!(!t.bbox&&!e.bbox||t.bbox&&e.bbox&&this.compareCoord(t.bbox,e.bbox))},za.prototype.removePseudo=function(t){return t};var ja=za,Xa=mt(function(t){function e(t,e,n,r){this.dataset=[],this.epsilon=1,this.minPts=2,this.distance=this._euclideanDistance,this.clusters=[],this.noise=[],this._visited=[],this._assigned=[],this._datasetLength=0,this._init(t,e,n,r)}e.prototype.run=function(t,e,n,r){this._init(t,e,n,r);for(var i=0;i<this._datasetLength;i++)if(1!==this._visited[i]){this._visited[i]=1;var o=this._regionQuery(i);if(o.length<this.minPts)this.noise.push(i);else{var s=this.clusters.length;this.clusters.push([]),this._addToCluster(i,s),this._expandCluster(s,o)}}return this.clusters},e.prototype._init=function(t,e,n,r){if(t){if(!(t instanceof Array))throw Error("Dataset must be of type array, "+typeof t+" given");this.dataset=t,this.clusters=[],this.noise=[],this._datasetLength=t.length,this._visited=new Array(this._datasetLength),this._assigned=new Array(this._datasetLength)}e&&(this.epsilon=e),n&&(this.minPts=n),r&&(this.distance=r)},e.prototype._expandCluster=function(t,e){for(var n=0;n<e.length;n++){var r=e[n];if(1!==this._visited[r]){this._visited[r]=1;var i=this._regionQuery(r);i.length>=this.minPts&&(e=this._mergeArrays(e,i))}1!==this._assigned[r]&&this._addToCluster(r,t)}},e.prototype._addToCluster=function(t,e){this.clusters[e].push(t),this._assigned[t]=1},e.prototype._regionQuery=function(t){for(var e=[],n=0;n<this._datasetLength;n++){this.distance(this.dataset[t],this.dataset[n])<this.epsilon&&e.push(n)}return e},e.prototype._mergeArrays=function(t,e){for(var n=e.length,r=0;r<n;r++){var i=e[r];t.indexOf(i)<0&&t.push(i)}return t},e.prototype._euclideanDistance=function(t,e){for(var n=0,r=Math.min(t.length,e.length);r--;)n+=(t[r]-e[r])*(t[r]-e[r]);return Math.sqrt(n)},t.exports&&(t.exports=e)}),Ua=mt(function(t){function e(t,e,n){this.k=3,this.dataset=[],this.assignments=[],this.centroids=[],this.init(t,e,n)}e.prototype.init=function(t,e,n){this.assignments=[],this.centroids=[],void 0!==t&&(this.dataset=t),void 0!==e&&(this.k=e),void 0!==n&&(this.distance=n)},e.prototype.run=function(t,e){this.init(t,e);for(var n=this.dataset.length,r=0;r<this.k;r++)this.centroids[r]=this.randomCentroid();for(var i=!0;i;){i=this.assign();for(var o=0;o<this.k;o++){for(var s=new Array(h),a=0,u=0;u<h;u++)s[u]=0;for(var c=0;c<n;c++){var h=this.dataset[c].length;if(o===this.assignments[c]){for(u=0;u<h;u++)s[u]+=this.dataset[c][u];a++}}if(a>0){for(u=0;u<h;u++)s[u]/=a;this.centroids[o]=s}else this.centroids[o]=this.randomCentroid(),i=!0}}return this.getClusters()},e.prototype.randomCentroid=function(){var t,e,n=this.dataset.length-1;do{e=Math.round(Math.random()*n),t=this.dataset[e]}while(this.centroids.indexOf(t)>=0);return t},e.prototype.assign=function(){for(var t,e=!1,n=this.dataset.length,r=0;r<n;r++)(t=this.argmin(this.dataset[r],this.centroids,this.distance))!=this.assignments[r]&&(this.assignments[r]=t,e=!0);return e},e.prototype.getClusters=function(){for(var t,e=new Array(this.k),n=0;n<this.assignments.length;n++)void 0===e[t=this.assignments[n]]&&(e[t]=[]),e[t].push(n);return e},e.prototype.argmin=function(t,e,n){for(var r,i=Number.MAX_VALUE,o=0,s=e.length,a=0;a<s;a++)(r=n(t,e[a]))<i&&(i=r,o=a);return o},e.prototype.distance=function(t,e){for(var n=0,r=Math.min(t.length,e.length);r--;){var i=t[r]-e[r];n+=i*i}return Math.sqrt(n)},t.exports&&(t.exports=e)}),Ya=mt(function(t){function e(t,e,n){this._queue=[],this._priorities=[],this._sorting="desc",this._init(t,e,n)}e.prototype.insert=function(t,e){for(var n=this._queue.length,r=n;r--;){var i=this._priorities[r];"desc"===this._sorting?e>i&&(n=r):e<i&&(n=r)}this._insertAt(t,e,n)},e.prototype.remove=function(t){for(var e=this._queue.length;e--;){if(t===this._queue[e]){this._queue.splice(e,1),this._priorities.splice(e,1);break}}},e.prototype.forEach=function(t){this._queue.forEach(t)},e.prototype.getElements=function(){return this._queue},e.prototype.getElementPriority=function(t){return this._priorities[t]},e.prototype.getPriorities=function(){return this._priorities},e.prototype.getElementsWithPriorities=function(){for(var t=[],e=0,n=this._queue.length;e<n;e++)t.push([this._queue[e],this._priorities[e]]);return t},e.prototype._init=function(t,e,n){if(t&&e){if(this._queue=[],this._priorities=[],t.length!==e.length)throw new Error("Arrays must have the same length");for(var r=0;r<t.length;r++)this.insert(t[r],e[r])}n&&(this._sorting=n)},e.prototype._insertAt=function(t,e,n){this._queue.length===n?(this._queue.push(t),this._priorities.push(e)):(this._queue.splice(n,0,t),this._priorities.splice(n,0,e))},t.exports&&(t.exports=e)}),Va=mt(function(t){function e(t,e,n,r){this.epsilon=1,this.minPts=1,this.distance=this._euclideanDistance,this._reachability=[],this._processed=[],this._coreDistance=0,this._orderedList=[],this._init(t,e,n,r)}if(t.exports)var n=Ya;e.prototype.run=function(t,e,r,i){this._init(t,e,r,i);for(var o=0,s=this.dataset.length;o<s;o++)if(1!==this._processed[o]){this._processed[o]=1,this.clusters.push([o]);var a=this.clusters.length-1;this._orderedList.push(o);var u=new n(null,null,"asc"),c=this._regionQuery(o);void 0!==this._distanceToCore(o)&&(this._updateQueue(o,c,u),this._expandCluster(a,u))}return this.clusters},e.prototype.getReachabilityPlot=function(){for(var t=[],e=0,n=this._orderedList.length;e<n;e++){var r=this._orderedList[e],i=this._reachability[r];t.push([r,i])}return t},e.prototype._init=function(t,e,n,r){if(t){if(!(t instanceof Array))throw Error("Dataset must be of type array, "+typeof t+" given");this.dataset=t,this.clusters=[],this._reachability=new Array(this.dataset.length),this._processed=new Array(this.dataset.length),this._coreDistance=0,this._orderedList=[]}e&&(this.epsilon=e),n&&(this.minPts=n),r&&(this.distance=r)},e.prototype._updateQueue=function(t,e,n){var r=this;this._coreDistance=this._distanceToCore(t),e.forEach(function(e){if(void 0===r._processed[e]){var i=r.distance(r.dataset[t],r.dataset[e]),o=Math.max(r._coreDistance,i);void 0===r._reachability[e]?(r._reachability[e]=o,n.insert(e,o)):o<r._reachability[e]&&(r._reachability[e]=o,n.remove(e),n.insert(e,o))}})},e.prototype._expandCluster=function(t,e){for(var n=e.getElements(),r=0,i=n.length;r<i;r++){var o=n[r];if(void 0===this._processed[o]){var s=this._regionQuery(o);this._processed[o]=1,this.clusters[t].push(o),this._orderedList.push(o),void 0!==this._distanceToCore(o)&&(this._updateQueue(o,s,e),this._expandCluster(t,e))}}},e.prototype._distanceToCore=function(t){for(var e=this.epsilon,n=0;n<e;n++){if(this._regionQuery(t,n).length>=this.minPts)return n}},e.prototype._regionQuery=function(t,e){e=e||this.epsilon;for(var n=[],r=0,i=this.dataset.length;r<i;r++)this.distance(this.dataset[t],this.dataset[r])<e&&n.push(r);return n},e.prototype._euclideanDistance=function(t,e){for(var n=0,r=Math.min(t.length,e.length);r--;)n+=(t[r]-e[r])*(t[r]-e[r]);return Math.sqrt(n)},t.exports&&(t.exports=e)}),Ha=mt(function(t){t.exports&&(t.exports={DBSCAN:Xa,KMEANS:Ua,OPTICS:Va,PriorityQueue:Ya})}),Wa=(Ha.DBSCAN,Ha.KMEANS,Ha.OPTICS,Ha.PriorityQueue,function(t,e,n){for(var r=t.length,i=0,o=0;o<r;o++){var s=(t[o]||0)-(e[o]||0);i+=s*s}return n?Math.sqrt(i):i}),Ja=Wa,Za=function(t,e,n){var r=Math.abs(t-e);return n?r:r*r},Ka=Wa,Qa=function(t,e){for(var n={},r=[],i=e<<2,o=t.length,s=t[0].length>0;r.length<e&&i-- >0;){var a=t[Math.floor(Math.random()*o)],u=s?a.join("_"):""+a;n[u]||(n[u]=!0,r.push(a))}if(r.length<e)throw new Error("Error initializating clusters");return r},$a=function(t,e){var n=t[0].length?Ja:Za,r=[],i=t.length,o=t[0].length>0,s=t[Math.floor(Math.random()*i)];o&&s.join("_");for(r.push(s);r.length<e;){for(var a=[],u=r.length,c=0,h=[],l=0;l<i;l++){for(var p=1/0,f=0;f<u;f++){var g=n(t[l],r[f]);g<=p&&(p=g)}a[l]=p}for(var d=0;d<i;d++)c+=a[d];for(var y=0;y<i;y++)h[y]={i:y,v:t[y],pr:a[y]/c,cs:0};h.sort(function(t,e){return t.pr-e.pr}),h[0].cs=h[0].pr;for(var _=1;_<i;_++)h[_].cs=h[_-1].cs+h[_].pr;for(var m=Math.random(),v=0;v<i-1&&h[v++].cs<m;);r.push(h[v-1].v)}return r},tu=1e4,eu=function(t,e,n,r){var i=[],o=[],s=[],a=[],u=!1,c=r||tu,h=t.length,l=t[0].length,p=l>0,f=[];if(n)i="kmrand"==n?Qa(t,e):"kmpp"==n?$a(t,e):n;else for(var g={};i.length<e;){var d=Math.floor(Math.random()*h);g[d]||(g[d]=!0,i.push(t[d]))}do{Ar(e,0,f);for(var y=0;y<h;y++){for(var _=1/0,m=0,v=0;v<e;v++)(a=p?Ka(t[y],i[v]):Math.abs(t[y]-i[v]))<=_&&(_=a,m=v);s[y]=m,f[m]++}for(var x=[],E=(o=[],0);E<e;E++)x[E]=p?Ar(l,0,x[E]):0,o[E]=i[E];if(p){for(var w=0;w<e;w++)i[w]=[];for(var b=0;b<h;b++)for(var I=x[s[b]],N=t[b],C=0;C<l;C++)I[C]+=N[C];u=!0;for(var S=0;S<e;S++){for(var M=i[S],L=x[S],P=o[S],O=f[S],R=0;R<l;R++)M[R]=L[R]/O||0;if(u)for(var T=0;T<l;T++)if(P[T]!=M[T]){u=!1;break}}}else{for(var A=0;A<h;A++)x[s[A]]+=t[A];for(var D=0;D<e;D++)i[D]=x[D]/f[D]||0;u=!0;for(var F=0;F<e;F++)if(o[F]!=i[F]){u=!1;break}}u=u||--c<=0}while(!u);return{it:tu-c,k:e,idxs:s,centroids:i}},nu={search:function(t,e,n,r){t.cleanDirty();var i=(r=r||{}).heuristic||nu.heuristics.manhattan,o=r.closest||!1,s=new Br(function(t){return t.f}),a=e;for(e.h=i(e,n),s.push(e);s.size()>0;){var u=s.pop();if(u===n)return Fr(u);u.closed=!0;for(var c=t.neighbors(u),h=0,l=c.length;h<l;++h){var p=c[h];if(!p.closed&&!p.isWall()){var f=u.g+p.getCost(u),g=p.visited;(!g||f<p.g)&&(p.visited=!0,p.parent=u,p.h=p.h||i(p,n),p.g=f,p.f=p.g+p.h,t.markDirty(p),o&&(p.h<a.h||p.h===a.h&&p.g<a.g)&&(a=p),g?s.rescoreElement(p):s.push(p))}}}return o?Fr(a):[]},heuristics:{manhattan:function(t,e){return Math.abs(e.x-t.x)+Math.abs(e.y-t.y)},diagonal:function(t,e){var n=Math.sqrt(2),r=Math.abs(e.x-t.x),i=Math.abs(e.y-t.y);return 1*(r+i)+(n-2)*Math.min(r,i)}},cleanNode:function(t){t.f=0,t.g=0,t.h=0,t.visited=!1,t.closed=!1,t.parent=null}};qr.prototype.init=function(){this.dirtyNodes=[];for(var t=0;t<this.nodes.length;t++)nu.cleanNode(this.nodes[t])},qr.prototype.cleanDirty=function(){for(var t=0;t<this.dirtyNodes.length;t++)nu.cleanNode(this.dirtyNodes[t]);this.dirtyNodes=[]},qr.prototype.markDirty=function(t){this.dirtyNodes.push(t)},qr.prototype.neighbors=function(t){var e=[],n=t.x,r=t.y,i=this.grid;return i[n-1]&&i[n-1][r]&&e.push(i[n-1][r]),i[n+1]&&i[n+1][r]&&e.push(i[n+1][r]),i[n]&&i[n][r-1]&&e.push(i[n][r-1]),i[n]&&i[n][r+1]&&e.push(i[n][r+1]),this.diagonal&&(i[n-1]&&i[n-1][r-1]&&e.push(i[n-1][r-1]),i[n+1]&&i[n+1][r-1]&&e.push(i[n+1][r-1]),i[n-1]&&i[n-1][r+1]&&e.push(i[n-1][r+1]),i[n+1]&&i[n+1][r+1]&&e.push(i[n+1][r+1])),e},qr.prototype.toString=function(){for(var t,e,n,r,i=[],o=this.grid,s=0,a=o.length;s<a;s++){for(t=[],n=0,r=(e=o[s]).length;n<r;n++)t.push(e[n].weight);i.push(t.join(" "))}return i.join("\n")},Gr.prototype.toString=function(){return"["+this.x+" "+this.y+"]"},Gr.prototype.getCost=function(t){return t&&t.x!==this.x&&t.y!==this.y?1.41421*this.weight:this.weight},Gr.prototype.isWall=function(){return 0===this.weight},Br.prototype={push:function(t){this.content.push(t),this.sinkDown(this.content.length-1)},pop:function(){var t=this.content[0],e=this.content.pop();return this.content.length>0&&(this.content[0]=e,this.bubbleUp(0)),t},remove:function(t){var e=this.content.indexOf(t),n=this.content.pop();e!==this.content.length-1&&(this.content[e]=n,this.scoreFunction(n)<this.scoreFunction(t)?this.sinkDown(e):this.bubbleUp(e))},size:function(){return this.content.length},rescoreElement:function(t){this.sinkDown(this.content.indexOf(t))},sinkDown:function(t){for(var e=this.content[t];t>0;){var n=(t+1>>1)-1,r=this.content[n];if(!(this.scoreFunction(e)<this.scoreFunction(r)))break;this.content[n]=e,this.content[t]=r,t=n}},bubbleUp:function(t){for(var e=this.content.length,n=this.content[t],r=this.scoreFunction(n);;){var i,o=t+1<<1,s=o-1,a=null;if(s<e){var u=this.content[s];(i=this.scoreFunction(u))<r&&(a=s)}if(o<e){var c=this.content[o];this.scoreFunction(c)<(null===a?r:i)&&(a=o)}if(null===a)break;this.content[t]=this.content[a],this.content[a]=n,t=a}}};var ru=function(t){return function(){return t}};jr.prototype={constructor:jr,insert:function(t,e){var n,r,i;if(t){if(e.P=t,e.N=t.N,t.N&&(t.N.P=e),t.N=e,t.R){for(t=t.R;t.L;)t=t.L;t.L=e}else t.R=e;n=t}else this._?(t=Vr(this._),e.P=null,e.N=t,t.P=t.L=e,n=t):(e.P=e.N=null,this._=e,n=null);for(e.L=e.R=null,e.U=n,e.C=!0,t=e;n&&n.C;)n===(r=n.U).L?(i=r.R)&&i.C?(n.C=i.C=!1,r.C=!0,t=r):(t===n.R&&(Ur(this,n),n=(t=n).U),n.C=!1,r.C=!0,Yr(this,r)):(i=r.L)&&i.C?(n.C=i.C=!1,r.C=!0,t=r):(t===n.L&&(Yr(this,n),n=(t=n).U),n.C=!1,r.C=!0,Ur(this,r)),n=t.U;this._.C=!1},remove:function(t){t.N&&(t.N.P=t.P),t.P&&(t.P.N=t.N),t.N=t.P=null;var e,n,r,i=t.U,o=t.L,s=t.R;if(n=o?s?Vr(s):o:s,i?i.L===t?i.L=n:i.R=n:this._=n,o&&s?(r=n.C,n.C=t.C,n.L=o,o.U=n,n!==s?(i=n.U,n.U=t.U,t=n.R,i.L=t,n.R=s,s.U=n):(n.U=i,i=n,t=n.R)):(r=t.C,t=n),t&&(t.U=i),!r)if(t&&t.C)t.C=!1;else{do{if(t===this._)break;if(t===i.L){if((e=i.R).C&&(e.C=!1,i.C=!0,Ur(this,i),e=i.R),e.L&&e.L.C||e.R&&e.R.C){e.R&&e.R.C||(e.L.C=!1,e.C=!0,Yr(this,e),e=i.R),e.C=i.C,i.C=e.R.C=!1,Ur(this,i),t=this._;break}}else if((e=i.L).C&&(e.C=!1,i.C=!0,Yr(this,i),e=i.L),e.L&&e.L.C||e.R&&e.R.C){e.L&&e.L.C||(e.R.C=!1,e.C=!0,Ur(this,e),e=i.L),e.C=i.C,i.C=e.L.C=!1,Yr(this,i),t=this._;break}e.C=!0,t=i,i=i.U}while(!t.C);t&&(t.C=!1)}}};var iu,ou,su,au,uu,cu=[],hu=[],lu=1e-6,pu=1e-12;hi.prototype={constructor:hi,polygons:function(){var t=this.edges;return this.cells.map(function(e){var n=e.halfedges.map(function(n){return $r(e,t[n])});return n.data=e.site.data,n})},triangles:function(){var t=[],e=this.edges;return this.cells.forEach(function(n,r){if(o=(i=n.halfedges).length)for(var i,o,s,a=n.site,u=-1,c=e[i[o-1]],h=c.left===a?c.right:c.left;++u<o;)s=h,h=(c=e[i[u]]).left===a?c.right:c.left,s&&h&&r<s.index&&r<h.index&&ui(a,s,h)<0&&t.push([a.data,s.data,h.data])}),t},links:function(){return this.edges.filter(function(t){return t.right}).map(function(t){return{source:t.left.data,target:t.right.data}})},find:function(t,e,n){for(var r,i,o=this,s=o._found||0,a=o.cells.length;!(i=o.cells[s]);)if(++s>=a)return null;var u=t-i.site[0],c=e-i.site[1],h=u*u+c*c;do{i=o.cells[r=s],s=null,i.halfedges.forEach(function(n){var r=o.edges[n],a=r.left;if(a!==i.site&&a||(a=r.right)){var u=t-a[0],c=e-a[1],l=u*u+c*c;l<h&&(h=l,s=a.index)}})}while(null!==s);return o._found=r,null==n||h<=n*n?i.site:null}};var fu=function(){function t(t){return new hi(t.map(function(r,i){var o=[Math.round(e(r,i,t)/lu)*lu,Math.round(n(r,i,t)/lu)*lu];return o.index=i,o.data=r,o}),r)}var e=kr,n=zr,r=null;return t.polygons=function(e){return t(e).polygons()},t.links=function(e){return t(e).links()},t.triangles=function(e){return t(e).triangles()},t.x=function(n){return arguments.length?(e="function"==typeof n?n:ru(+n),t):e},t.y=function(e){return arguments.length?(n="function"==typeof e?e:ru(+e),t):n},t.extent=function(e){return arguments.length?(r=null==e?null:[[+e[0][0],+e[0][1]],[+e[1][0],+e[1][1]]],t):r&&[[r[0][0],r[0][1]],[r[1][0],r[1][1]]]},t.size=function(e){return arguments.length?(r=null==e?null:[[0,0],[+e[0],+e[1]]],t):r&&[r[1][0]-r[0][0],r[1][1]-r[0][1]]},t},gu=Object.freeze({randomPosition:_i,randomPoint:mi,randomPolygon:vi,randomLineString:xi}),du=Object.freeze({getCluster:wi,clusterEach:bi,clusterReduce:Ii,createBins:Ni,applyFilter:Ci,propertiesContainsFilter:Si,filterProperties:Mi});"fill"in Array.prototype||Object.defineProperty(Array.prototype,"fill",{configurable:!0,value:function(t){if(void 0===this||null===this)throw new TypeError(this+" is not an object");var e=Object(this),n=Math.max(Math.min(e.length,9007199254740991),0)||0,r=1 in arguments?parseInt(Number(arguments[1]),10)||0:0;r=r<0?Math.max(n+r,0):Math.min(r,n);var i=2 in arguments&&void 0!==arguments[2]?parseInt(Number(arguments[2]),10)||0:n;for(i=i<0?Math.max(n+arguments[2],0):Math.min(i,n);r<i;)e[r]=t,++r;return e},writable:!0}),Number.isFinite=Number.isFinite||function(t){return"number"==typeof t&&isFinite(t)},Number.isInteger=Number.isInteger||function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t},Number.parseFloat=Number.parseFloat||parseFloat,Number.isNaN=Number.isNaN||function(t){return t!=t},Math.trunc=Math.trunc||function(t){return t<0?Math.ceil(t):Math.floor(t)};var yu=function(){};yu.prototype.interfaces_=function(){return[]},yu.prototype.getClass=function(){return yu},yu.prototype.equalsWithTolerance=function(t,e,n){return Math.abs(t-e)<=n};var _u=function(){},mu=function(){},vu={MAX_VALUE:{configurable:!0}};mu.isNaN=function(t){return Number.isNaN(t)},mu.doubleToLongBits=function(t){return t},mu.longBitsToDouble=function(t){return t},mu.isInfinite=function(t){return!Number.isFinite(t)},vu.MAX_VALUE.get=function(){return Number.MAX_VALUE},Object.defineProperties(mu,vu);var xu=function(){},Eu=function(){},wu=function(){},bu=function t(){if(this.x=null,this.y=null,this.z=null,0===arguments.length)this.x=0,this.y=0,this.z=t.NULL_ORDINATE;else if(1===arguments.length){var e=arguments[0];this.x=e.x,this.y=e.y,this.z=e.z}else 2===arguments.length?(this.x=arguments[0],this.y=arguments[1],this.z=t.NULL_ORDINATE):3===arguments.length&&(this.x=arguments[0],this.y=arguments[1],this.z=arguments[2])},Iu={DimensionalComparator:{configurable:!0},serialVersionUID:{configurable:!0},NULL_ORDINATE:{configurable:!0},X:{configurable:!0},Y:{configurable:!0},Z:{configurable:!0}};bu.prototype.setOrdinate=function(t,e){switch(t){case bu.X:this.x=e;break;case bu.Y:this.y=e;break;case bu.Z:this.z=e;break;default:throw new _u("Invalid ordinate index: "+t)}},bu.prototype.equals2D=function(){if(1===arguments.length){var t=arguments[0];return this.x===t.x&&this.y===t.y}if(2===arguments.length){var e=arguments[0],n=arguments[1];return!!yu.equalsWithTolerance(this.x,e.x,n)&&!!yu.equalsWithTolerance(this.y,e.y,n)}},bu.prototype.getOrdinate=function(t){switch(t){case bu.X:return this.x;case bu.Y:return this.y;case bu.Z:return this.z}throw new _u("Invalid ordinate index: "+t)},bu.prototype.equals3D=function(t){return this.x===t.x&&this.y===t.y&&(this.z===t.z||mu.isNaN(this.z))&&mu.isNaN(t.z)},bu.prototype.equals=function(t){return t instanceof bu&&this.equals2D(t)},bu.prototype.equalInZ=function(t,e){return yu.equalsWithTolerance(this.z,t.z,e)},bu.prototype.compareTo=function(t){var e=t;return this.x<e.x?-1:this.x>e.x?1:this.y<e.y?-1:this.y>e.y?1:0},bu.prototype.clone=function(){},bu.prototype.copy=function(){return new bu(this)},bu.prototype.toString=function(){return"("+this.x+", "+this.y+", "+this.z+")"},bu.prototype.distance3D=function(t){var e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return Math.sqrt(e*e+n*n+r*r)},bu.prototype.distance=function(t){var e=this.x-t.x,n=this.y-t.y;return Math.sqrt(e*e+n*n)},bu.prototype.hashCode=function(){var t=17;return t=37*t+bu.hashCode(this.x),t=37*t+bu.hashCode(this.y)},bu.prototype.setCoordinate=function(t){this.x=t.x,this.y=t.y,this.z=t.z},bu.prototype.interfaces_=function(){return[xu,Eu,Li]},bu.prototype.getClass=function(){return bu},bu.hashCode=function(){if(1===arguments.length){var t=arguments[0],e=mu.doubleToLongBits(t);return Math.trunc((e^e)>>>32)}},Iu.DimensionalComparator.get=function(){return Nu},Iu.serialVersionUID.get=function(){return 0x5cbf2c235c7e5800},Iu.NULL_ORDINATE.get=function(){return mu.NaN},Iu.X.get=function(){return 0},Iu.Y.get=function(){return 1},Iu.Z.get=function(){return 2},Object.defineProperties(bu,Iu);var Nu=function(t){if(this._dimensionsToTest=2,0===arguments.length);else if(1===arguments.length){var e=arguments[0];if(2!==e&&3!==e)throw new _u("only 2 or 3 dimensions may be specified");this._dimensionsToTest=e}};Nu.prototype.compare=function(t,e){var n=t,r=e,i=Nu.compare(n.x,r.x);if(0!==i)return i;var o=Nu.compare(n.y,r.y);if(0!==o)return o;if(this._dimensionsToTest<=2)return 0;return Nu.compare(n.z,r.z)},Nu.prototype.interfaces_=function(){return[wu]},Nu.prototype.getClass=function(){return Nu},Nu.compare=function(t,e){return t<e?-1:t>e?1:mu.isNaN(t)?mu.isNaN(e)?0:-1:mu.isNaN(e)?1:0};var Cu=function(){};Cu.prototype.create=function(){},Cu.prototype.interfaces_=function(){return[]},Cu.prototype.getClass=function(){return Cu};var Su=function(){},Mu={INTERIOR:{configurable:!0},BOUNDARY:{configurable:!0},EXTERIOR:{configurable:!0},NONE:{configurable:!0}};Su.prototype.interfaces_=function(){return[]},Su.prototype.getClass=function(){return Su},Su.toLocationSymbol=function(t){switch(t){case Su.EXTERIOR:return"e";case Su.BOUNDARY:return"b";case Su.INTERIOR:return"i";case Su.NONE:return"-"}throw new _u("Unknown location value: "+t)},Mu.INTERIOR.get=function(){return 0},Mu.BOUNDARY.get=function(){return 1},Mu.EXTERIOR.get=function(){return 2},Mu.NONE.get=function(){return-1},Object.defineProperties(Su,Mu);var Lu=function(t,e){return t.interfaces_&&t.interfaces_().indexOf(e)>-1},Pu=function(){},Ou={LOG_10:{configurable:!0}};Pu.prototype.interfaces_=function(){return[]},Pu.prototype.getClass=function(){return Pu},Pu.log10=function(t){var e=Math.log(t);return mu.isInfinite(e)?e:mu.isNaN(e)?e:e/Pu.LOG_10},Pu.min=function(t,e,n,r){var i=t;return e<i&&(i=e),n<i&&(i=n),r<i&&(i=r),i},Pu.clamp=function(){if("number"==typeof arguments[2]&&"number"==typeof arguments[0]&&"number"==typeof arguments[1]){var t=arguments[0],e=arguments[1],n=arguments[2];return t<e?e:t>n?n:t}if(Number.isInteger(arguments[2])&&Number.isInteger(arguments[0])&&Number.isInteger(arguments[1])){var r=arguments[0],i=arguments[1],o=arguments[2];return r<i?i:r>o?o:r}},Pu.wrap=function(t,e){return t<0?e- -t%e:t%e},Pu.max=function(){if(3===arguments.length){var t=arguments[0],e=arguments[1],n=arguments[2],r=t;return e>r&&(r=e),n>r&&(r=n),r}if(4===arguments.length){var i=arguments[0],o=arguments[1],s=arguments[2],a=arguments[3],u=i;return o>u&&(u=o),s>u&&(u=s),a>u&&(u=a),u}},Pu.average=function(t,e){return(t+e)/2},Ou.LOG_10.get=function(){return Math.log(10)},Object.defineProperties(Pu,Ou);var Ru=function(t){this.str=t};Ru.prototype.append=function(t){this.str+=t},Ru.prototype.setCharAt=function(t,e){this.str=this.str.substr(0,t)+e+this.str.substr(t+1)},Ru.prototype.toString=function(t){return this.str};var Tu=function(t){this.value=t};Tu.prototype.intValue=function(){return this.value},Tu.prototype.compareTo=function(t){return this.value<t?-1:this.value>t?1:0},Tu.isNaN=function(t){return Number.isNaN(t)};var Au=function(){};Au.isWhitespace=function(t){return t<=32&&t>=0||127===t},Au.toUpperCase=function(t){return t.toUpperCase()};var Du=function t(){if(this._hi=0,this._lo=0,0===arguments.length)this.init(0);else if(1===arguments.length){if("number"==typeof arguments[0]){var e=arguments[0];this.init(e)}else if(arguments[0]instanceof t){var n=arguments[0];this.init(n)}else if("string"==typeof arguments[0]){var r=arguments[0];t.call(this,t.parse(r))}}else if(2===arguments.length){var i=arguments[0],o=arguments[1];this.init(i,o)}},Fu={PI:{configurable:!0},TWO_PI:{configurable:!0},PI_2:{configurable:!0},E:{configurable:!0},NaN:{configurable:!0},EPS:{configurable:!0},SPLIT:{configurable:!0},MAX_PRINT_DIGITS:{configurable:!0},TEN:{configurable:!0},ONE:{configurable:!0},SCI_NOT_EXPONENT_CHAR:{configurable:!0},SCI_NOT_ZERO:{configurable:!0}};Du.prototype.le=function(t){return(this._hi<t._hi||this._hi===t._hi)&&this._lo<=t._lo},Du.prototype.extractSignificantDigits=function(t,e){var n=this.abs(),r=Du.magnitude(n._hi),i=Du.TEN.pow(r);(n=n.divide(i)).gt(Du.TEN)?(n=n.divide(Du.TEN),r+=1):n.lt(Du.ONE)&&(n=n.multiply(Du.TEN),r-=1);for(var o=r+1,s=new Ru,a=Du.MAX_PRINT_DIGITS-1,u=0;u<=a;u++){t&&u===o&&s.append(".");var c=Math.trunc(n._hi);if(c<0)break;var h=!1,l=0;c>9?(h=!0,l="9"):l="0"+c,s.append(l),n=n.subtract(Du.valueOf(c)).multiply(Du.TEN),h&&n.selfAdd(Du.TEN);var p=!0,f=Du.magnitude(n._hi);if(f<0&&Math.abs(f)>=a-u&&(p=!1),!p)break}return e[0]=r,s.toString()},Du.prototype.sqr=function(){return this.multiply(this)},Du.prototype.doubleValue=function(){return this._hi+this._lo},Du.prototype.subtract=function(){if(arguments[0]instanceof Du){var t=arguments[0];return this.add(t.negate())}if("number"==typeof arguments[0]){var e=arguments[0];return this.add(-e)}},Du.prototype.equals=function(){if(1===arguments.length){var t=arguments[0];return this._hi===t._hi&&this._lo===t._lo}},Du.prototype.isZero=function(){return 0===this._hi&&0===this._lo},Du.prototype.selfSubtract=function(){if(arguments[0]instanceof Du){var t=arguments[0];return this.isNaN()?this:this.selfAdd(-t._hi,-t._lo)}if("number"==typeof arguments[0]){var e=arguments[0];return this.isNaN()?this:this.selfAdd(-e,0)}},Du.prototype.getSpecialNumberString=function(){return this.isZero()?"0.0":this.isNaN()?"NaN ":null},Du.prototype.min=function(t){return this.le(t)?this:t},Du.prototype.selfDivide=function(){if(1===arguments.length){if(arguments[0]instanceof Du){var t=arguments[0];return this.selfDivide(t._hi,t._lo)}if("number"==typeof arguments[0]){var e=arguments[0];return this.selfDivide(e,0)}}else if(2===arguments.length){var n=arguments[0],r=arguments[1],i=null,o=null,s=null,a=null,u=null,c=null,h=null,l=null;return u=this._hi/n,c=Du.SPLIT*u,i=c-u,l=Du.SPLIT*n,i=c-i,o=u-i,s=l-n,h=u*n,s=l-s,a=n-s,l=i*s-h+i*a+o*s+o*a,c=(this._hi-h-l+this._lo-u*r)/n,l=u+c,this._hi=l,this._lo=u-l+c,this}},Du.prototype.dump=function(){return"DD<"+this._hi+", "+this._lo+">"},Du.prototype.divide=function(){if(arguments[0]instanceof Du){var t=arguments[0],e=null,n=null,r=null,i=null,o=null,s=null,a=null,u=null;n=(o=this._hi/t._hi)-(e=(s=Du.SPLIT*o)-(e=s-o)),u=e*(r=(u=Du.SPLIT*t._hi)-(r=u-t._hi))-(a=o*t._hi)+e*(i=t._hi-r)+n*r+n*i,s=(this._hi-a-u+this._lo-o*t._lo)/t._hi;return new Du(u=o+s,o-u+s)}if("number"==typeof arguments[0]){var c=arguments[0];return mu.isNaN(c)?Du.createNaN():Du.copy(this).selfDivide(c,0)}},Du.prototype.ge=function(t){return(this._hi>t._hi||this._hi===t._hi)&&this._lo>=t._lo},Du.prototype.pow=function(t){if(0===t)return Du.valueOf(1);var e=new Du(this),n=Du.valueOf(1),r=Math.abs(t);if(r>1)for(;r>0;)r%2==1&&n.selfMultiply(e),(r/=2)>0&&(e=e.sqr());else n=e;return t<0?n.reciprocal():n},Du.prototype.ceil=function(){if(this.isNaN())return Du.NaN;var t=Math.ceil(this._hi),e=0;return t===this._hi&&(e=Math.ceil(this._lo)),new Du(t,e)},Du.prototype.compareTo=function(t){var e=t;return this._hi<e._hi?-1:this._hi>e._hi?1:this._lo<e._lo?-1:this._lo>e._lo?1:0},Du.prototype.rint=function(){if(this.isNaN())return this;return this.add(.5).floor()},Du.prototype.setValue=function(){if(arguments[0]instanceof Du){var t=arguments[0];return this.init(t),this}if("number"==typeof arguments[0]){var e=arguments[0];return this.init(e),this}},Du.prototype.max=function(t){return this.ge(t)?this:t},Du.prototype.sqrt=function(){if(this.isZero())return Du.valueOf(0);if(this.isNegative())return Du.NaN;var t=1/Math.sqrt(this._hi),e=this._hi*t,n=Du.valueOf(e),r=this.subtract(n.sqr())._hi*(.5*t);return n.add(r)},Du.prototype.selfAdd=function(){if(1===arguments.length){if(arguments[0]instanceof Du){var t=arguments[0];return this.selfAdd(t._hi,t._lo)}if("number"==typeof arguments[0]){var e=arguments[0],n=null,r=null,i=null,o=null,s=null,a=null;return i=this._hi+e,s=i-this._hi,o=i-s,o=e-s+(this._hi-o),a=o+this._lo,n=i+a,r=a+(i-n),this._hi=n+r,this._lo=r+(n-this._hi),this}}else if(2===arguments.length){var u=arguments[0],c=arguments[1],h=null,l=null,p=null,f=null,g=null,d=null,y=null;f=this._hi+u,l=this._lo+c,g=f-(d=f-this._hi),p=l-(y=l-this._lo);var _=(h=f+(d=(g=u-d+(this._hi-g))+l))+(d=(p=c-y+(this._lo-p))+(d+(f-h))),m=d+(h-_);return this._hi=_,this._lo=m,this}},Du.prototype.selfMultiply=function(){if(1===arguments.length){if(arguments[0]instanceof Du){var t=arguments[0];return this.selfMultiply(t._hi,t._lo)}if("number"==typeof arguments[0]){var e=arguments[0];return this.selfMultiply(e,0)}}else if(2===arguments.length){var n=arguments[0],r=arguments[1],i=null,o=null,s=null,a=null,u=null,c=null;i=(u=Du.SPLIT*this._hi)-this._hi,c=Du.SPLIT*n,i=u-i,o=this._hi-i,s=c-n;var h=(u=this._hi*n)+(c=i*(s=c-s)-u+i*(a=n-s)+o*s+o*a+(this._hi*r+this._lo*n)),l=c+(i=u-h);return this._hi=h,this._lo=l,this}},Du.prototype.selfSqr=function(){return this.selfMultiply(this)},Du.prototype.floor=function(){if(this.isNaN())return Du.NaN;var t=Math.floor(this._hi),e=0;return t===this._hi&&(e=Math.floor(this._lo)),new Du(t,e)},Du.prototype.negate=function(){return this.isNaN()?this:new Du(-this._hi,-this._lo)},Du.prototype.clone=function(){},Du.prototype.multiply=function(){if(arguments[0]instanceof Du){var t=arguments[0];return t.isNaN()?Du.createNaN():Du.copy(this).selfMultiply(t)}if("number"==typeof arguments[0]){var e=arguments[0];return mu.isNaN(e)?Du.createNaN():Du.copy(this).selfMultiply(e,0)}},Du.prototype.isNaN=function(){return mu.isNaN(this._hi)},Du.prototype.intValue=function(){return Math.trunc(this._hi)},Du.prototype.toString=function(){var t=Du.magnitude(this._hi);return t>=-3&&t<=20?this.toStandardNotation():this.toSciNotation()},Du.prototype.toStandardNotation=function(){var t=this.getSpecialNumberString();if(null!==t)return t;var e=new Array(1).fill(null),n=this.extractSignificantDigits(!0,e),r=e[0]+1,i=n;if("."===n.charAt(0))i="0"+n;else if(r<0)i="0."+Du.stringOfChar("0",-r)+n;else if(-1===n.indexOf(".")){var o=r-n.length;i=n+Du.stringOfChar("0",o)+".0"}return this.isNegative()?"-"+i:i},Du.prototype.reciprocal=function(){var t=null,e=null,n=null,r=null,i=null,o=null,s=null,a=null;e=(i=1/this._hi)-(t=(o=Du.SPLIT*i)-(t=o-i)),n=(a=Du.SPLIT*this._hi)-this._hi;var u=i+(o=(1-(s=i*this._hi)-(a=t*(n=a-n)-s+t*(r=this._hi-n)+e*n+e*r)-i*this._lo)/this._hi);return new Du(u,i-u+o)},Du.prototype.toSciNotation=function(){if(this.isZero())return Du.SCI_NOT_ZERO;var t=this.getSpecialNumberString();if(null!==t)return t;var e=new Array(1).fill(null),n=this.extractSignificantDigits(!1,e),r=Du.SCI_NOT_EXPONENT_CHAR+e[0];if("0"===n.charAt(0))throw new Error("Found leading zero: "+n);var i="";n.length>1&&(i=n.substring(1));var o=n.charAt(0)+"."+i;return this.isNegative()?"-"+o+r:o+r},Du.prototype.abs=function(){return this.isNaN()?Du.NaN:this.isNegative()?this.negate():new Du(this)},Du.prototype.isPositive=function(){return(this._hi>0||0===this._hi)&&this._lo>0},Du.prototype.lt=function(t){return(this._hi<t._hi||this._hi===t._hi)&&this._lo<t._lo},Du.prototype.add=function(){if(arguments[0]instanceof Du){var t=arguments[0];return Du.copy(this).selfAdd(t)}if("number"==typeof arguments[0]){var e=arguments[0];return Du.copy(this).selfAdd(e)}},Du.prototype.init=function(){if(1===arguments.length){if("number"==typeof arguments[0]){var t=arguments[0];this._hi=t,this._lo=0}else if(arguments[0]instanceof Du){var e=arguments[0];this._hi=e._hi,this._lo=e._lo}}else if(2===arguments.length){var n=arguments[0],r=arguments[1];this._hi=n,this._lo=r}},Du.prototype.gt=function(t){return(this._hi>t._hi||this._hi===t._hi)&&this._lo>t._lo},Du.prototype.isNegative=function(){return(this._hi<0||0===this._hi)&&this._lo<0},Du.prototype.trunc=function(){return this.isNaN()?Du.NaN:this.isPositive()?this.floor():this.ceil()},Du.prototype.signum=function(){return this._hi>0?1:this._hi<0?-1:this._lo>0?1:this._lo<0?-1:0},Du.prototype.interfaces_=function(){return[Li,xu,Eu]},Du.prototype.getClass=function(){return Du},Du.sqr=function(t){return Du.valueOf(t).selfMultiply(t)},Du.valueOf=function(){if("string"==typeof arguments[0]){var t=arguments[0];return Du.parse(t)}if("number"==typeof arguments[0]){var e=arguments[0];return new Du(e)}},Du.sqrt=function(t){return Du.valueOf(t).sqrt()},Du.parse=function(t){for(var e=0,n=t.length;Au.isWhitespace(t.charAt(e));)e++;var r=!1;if(e<n){var i=t.charAt(e);"-"!==i&&"+"!==i||(e++,"-"===i&&(r=!0))}for(var o=new Du,s=0,a=0,u=0;!(e>=n);){var c=t.charAt(e);if(e++,Au.isDigit(c)){var h=c-"0";o.selfMultiply(Du.TEN),o.selfAdd(h),s++}else{if("."!==c){if("e"===c||"E"===c){var l=t.substring(e);try{u=Tu.parseInt(l)}catch(e){throw e instanceof Error?new Error("Invalid exponent "+l+" in string "+t):e}break}throw new Error("Unexpected character '"+c+"' at position "+e+" in string "+t)}a=s}}var p=o,f=s-a-u;if(0===f)p=o;else if(f>0){var g=Du.TEN.pow(f);p=o.divide(g)}else if(f<0){var d=Du.TEN.pow(-f);p=o.multiply(d)}return r?p.negate():p},Du.createNaN=function(){return new Du(mu.NaN,mu.NaN)},Du.copy=function(t){return new Du(t)},Du.magnitude=function(t){var e=Math.abs(t),n=Math.log(e)/Math.log(10),r=Math.trunc(Math.floor(n));return 10*Math.pow(10,r)<=e&&(r+=1),r},Du.stringOfChar=function(t,e){for(var n=new Ru,r=0;r<e;r++)n.append(t);return n.toString()},Fu.PI.get=function(){return new Du(3.141592653589793,1.2246467991473532e-16)},Fu.TWO_PI.get=function(){return new Du(6.283185307179586,2.4492935982947064e-16)},Fu.PI_2.get=function(){return new Du(1.5707963267948966,6.123233995736766e-17)},Fu.E.get=function(){return new Du(2.718281828459045,1.4456468917292502e-16)},Fu.NaN.get=function(){return new Du(mu.NaN,mu.NaN)},Fu.EPS.get=function(){return 1.23259516440783e-32},Fu.SPLIT.get=function(){return 134217729},Fu.MAX_PRINT_DIGITS.get=function(){return 32},Fu.TEN.get=function(){return Du.valueOf(10)},Fu.ONE.get=function(){return Du.valueOf(1)},Fu.SCI_NOT_EXPONENT_CHAR.get=function(){return"E"},Fu.SCI_NOT_ZERO.get=function(){return"0.0E0"},Object.defineProperties(Du,Fu);var qu=function(){},Gu={DP_SAFE_EPSILON:{configurable:!0}};qu.prototype.interfaces_=function(){return[]},qu.prototype.getClass=function(){return qu},qu.orientationIndex=function(t,e,n){var r=qu.orientationIndexFilter(t,e,n);if(r<=1)return r;var i=Du.valueOf(e.x).selfAdd(-t.x),o=Du.valueOf(e.y).selfAdd(-t.y),s=Du.valueOf(n.x).selfAdd(-e.x),a=Du.valueOf(n.y).selfAdd(-e.y);return i.selfMultiply(a).selfSubtract(o.selfMultiply(s)).signum()},qu.signOfDet2x2=function(t,e,n,r){return t.multiply(r).selfSubtract(e.multiply(n)).signum()},qu.intersection=function(t,e,n,r){var i=Du.valueOf(r.y).selfSubtract(n.y).selfMultiply(Du.valueOf(e.x).selfSubtract(t.x)),o=Du.valueOf(r.x).selfSubtract(n.x).selfMultiply(Du.valueOf(e.y).selfSubtract(t.y)),s=i.subtract(o),a=Du.valueOf(r.x).selfSubtract(n.x).selfMultiply(Du.valueOf(t.y).selfSubtract(n.y)),u=Du.valueOf(r.y).selfSubtract(n.y).selfMultiply(Du.valueOf(t.x).selfSubtract(n.x)),c=a.subtract(u).selfDivide(s).doubleValue(),h=Du.valueOf(t.x).selfAdd(Du.valueOf(e.x).selfSubtract(t.x).selfMultiply(c)).doubleValue(),l=Du.valueOf(e.x).selfSubtract(t.x).selfMultiply(Du.valueOf(t.y).selfSubtract(n.y)),p=Du.valueOf(e.y).selfSubtract(t.y).selfMultiply(Du.valueOf(t.x).selfSubtract(n.x)),f=l.subtract(p).selfDivide(s).doubleValue(),g=Du.valueOf(n.y).selfAdd(Du.valueOf(r.y).selfSubtract(n.y).selfMultiply(f)).doubleValue();return new bu(h,g)},qu.orientationIndexFilter=function(t,e,n){var r=null,i=(t.x-n.x)*(e.y-n.y),o=(t.y-n.y)*(e.x-n.x),s=i-o;if(i>0){if(o<=0)return qu.signum(s);r=i+o}else{if(!(i<0))return qu.signum(s);if(o>=0)return qu.signum(s);r=-i-o}var a=qu.DP_SAFE_EPSILON*r;return s>=a||-s>=a?qu.signum(s):2},qu.signum=function(t){return t>0?1:t<0?-1:0},Gu.DP_SAFE_EPSILON.get=function(){return 1e-15},Object.defineProperties(qu,Gu);var Bu=function(){},ku={X:{configurable:!0},Y:{configurable:!0},Z:{configurable:!0},M:{configurable:!0}};ku.X.get=function(){return 0},ku.Y.get=function(){return 1},ku.Z.get=function(){return 2},ku.M.get=function(){return 3},Bu.prototype.setOrdinate=function(t,e,n){},Bu.prototype.size=function(){},Bu.prototype.getOrdinate=function(t,e){},Bu.prototype.getCoordinate=function(){},Bu.prototype.getCoordinateCopy=function(t){},Bu.prototype.getDimension=function(){},Bu.prototype.getX=function(t){},Bu.prototype.clone=function(){},Bu.prototype.expandEnvelope=function(t){},Bu.prototype.copy=function(){},Bu.prototype.getY=function(t){},Bu.prototype.toCoordinateArray=function(){},Bu.prototype.interfaces_=function(){return[Eu]},Bu.prototype.getClass=function(){return Bu},Object.defineProperties(Bu,ku);var zu=function(){},ju=function(t){function e(){t.call(this,"Projective point not representable on the Cartesian plane.")}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(zu),Xu=function(){};Xu.arraycopy=function(t,e,n,r,i){for(var o=0,s=e;s<e+i;s++)n[r+o]=t[s],o++},Xu.getProperty=function(t){return{"line.separator":"\n"}[t]};var Uu=function t(){if(this.x=null,this.y=null,this.w=null,0===arguments.length)this.x=0,this.y=0,this.w=1;else if(1===arguments.length){var e=arguments[0];this.x=e.x,this.y=e.y,this.w=1}else if(2===arguments.length){if("number"==typeof arguments[0]&&"number"==typeof arguments[1]){var n=arguments[0],r=arguments[1];this.x=n,this.y=r,this.w=1}else if(arguments[0]instanceof t&&arguments[1]instanceof t){var i=arguments[0],o=arguments[1];this.x=i.y*o.w-o.y*i.w,this.y=o.x*i.w-i.x*o.w,this.w=i.x*o.y-o.x*i.y}else if(arguments[0]instanceof bu&&arguments[1]instanceof bu){var s=arguments[0],a=arguments[1];this.x=s.y-a.y,this.y=a.x-s.x,this.w=s.x*a.y-a.x*s.y}}else if(3===arguments.length){var u=arguments[0],c=arguments[1],h=arguments[2];this.x=u,this.y=c,this.w=h}else if(4===arguments.length){var l=arguments[0],p=arguments[1],f=arguments[2],g=arguments[3],d=l.y-p.y,y=p.x-l.x,_=l.x*p.y-p.x*l.y,m=f.y-g.y,v=g.x-f.x,x=f.x*g.y-g.x*f.y;this.x=y*x-v*_,this.y=m*_-d*x,this.w=d*v-m*y}};Uu.prototype.getY=function(){var t=this.y/this.w;if(mu.isNaN(t)||mu.isInfinite(t))throw new ju;return t},Uu.prototype.getX=function(){var t=this.x/this.w;if(mu.isNaN(t)||mu.isInfinite(t))throw new ju;return t},Uu.prototype.getCoordinate=function(){var t=new bu;return t.x=this.getX(),t.y=this.getY(),t},Uu.prototype.interfaces_=function(){return[]},Uu.prototype.getClass=function(){return Uu},Uu.intersection=function(t,e,n,r){var i=t.y-e.y,o=e.x-t.x,s=t.x*e.y-e.x*t.y,a=n.y-r.y,u=r.x-n.x,c=n.x*r.y-r.x*n.y,h=i*u-a*o,l=(o*c-u*s)/h,p=(a*s-i*c)/h;if(mu.isNaN(l)||mu.isInfinite(l)||mu.isNaN(p)||mu.isInfinite(p))throw new ju;return new bu(l,p)};var Yu=function t(){if(this._minx=null,this._maxx=null,this._miny=null,this._maxy=null,0===arguments.length)this.init();else if(1===arguments.length){if(arguments[0]instanceof bu){var e=arguments[0];this.init(e.x,e.x,e.y,e.y)}else if(arguments[0]instanceof t){var n=arguments[0];this.init(n)}}else if(2===arguments.length){var r=arguments[0],i=arguments[1];this.init(r.x,i.x,r.y,i.y)}else if(4===arguments.length){var o=arguments[0],s=arguments[1],a=arguments[2],u=arguments[3];this.init(o,s,a,u)}},Vu={serialVersionUID:{configurable:!0}};Yu.prototype.getArea=function(){return this.getWidth()*this.getHeight()},Yu.prototype.equals=function(t){if(!(t instanceof Yu))return!1;var e=t;return this.isNull()?e.isNull():this._maxx===e.getMaxX()&&this._maxy===e.getMaxY()&&this._minx===e.getMinX()&&this._miny===e.getMinY()},Yu.prototype.intersection=function(t){if(this.isNull()||t.isNull()||!this.intersects(t))return new Yu;var e=this._minx>t._minx?this._minx:t._minx,n=this._miny>t._miny?this._miny:t._miny,r=this._maxx<t._maxx?this._maxx:t._maxx,i=this._maxy<t._maxy?this._maxy:t._maxy;return new Yu(e,r,n,i)},Yu.prototype.isNull=function(){return this._maxx<this._minx},Yu.prototype.getMaxX=function(){return this._maxx},Yu.prototype.covers=function(){if(1===arguments.length){if(arguments[0]instanceof bu){var t=arguments[0];return this.covers(t.x,t.y)}if(arguments[0]instanceof Yu){var e=arguments[0];return!this.isNull()&&!e.isNull()&&(e.getMinX()>=this._minx&&e.getMaxX()<=this._maxx&&e.getMinY()>=this._miny&&e.getMaxY()<=this._maxy)}}else if(2===arguments.length){var n=arguments[0],r=arguments[1];return!this.isNull()&&(n>=this._minx&&n<=this._maxx&&r>=this._miny&&r<=this._maxy)}},Yu.prototype.intersects=function(){if(1===arguments.length){if(arguments[0]instanceof Yu){var t=arguments[0];return!this.isNull()&&!t.isNull()&&!(t._minx>this._maxx||t._maxx<this._minx||t._miny>this._maxy||t._maxy<this._miny)}if(arguments[0]instanceof bu){var e=arguments[0];return this.intersects(e.x,e.y)}}else if(2===arguments.length){var n=arguments[0],r=arguments[1];return!this.isNull()&&!(n>this._maxx||n<this._minx||r>this._maxy||r<this._miny)}},Yu.prototype.getMinY=function(){return this._miny},Yu.prototype.getMinX=function(){return this._minx},Yu.prototype.expandToInclude=function(){if(1===arguments.length){if(arguments[0]instanceof bu){var t=arguments[0];this.expandToInclude(t.x,t.y)}else if(arguments[0]instanceof Yu){var e=arguments[0];if(e.isNull())return null;this.isNull()?(this._minx=e.getMinX(),this._maxx=e.getMaxX(),this._miny=e.getMinY(),this._maxy=e.getMaxY()):(e._minx<this._minx&&(this._minx=e._minx),e._maxx>this._maxx&&(this._maxx=e._maxx),e._miny<this._miny&&(this._miny=e._miny),e._maxy>this._maxy&&(this._maxy=e._maxy))}}else if(2===arguments.length){var n=arguments[0],r=arguments[1];this.isNull()?(this._minx=n,this._maxx=n,this._miny=r,this._maxy=r):(n<this._minx&&(this._minx=n),n>this._maxx&&(this._maxx=n),r<this._miny&&(this._miny=r),r>this._maxy&&(this._maxy=r))}},Yu.prototype.minExtent=function(){if(this.isNull())return 0;var t=this.getWidth(),e=this.getHeight();return t<e?t:e},Yu.prototype.getWidth=function(){return this.isNull()?0:this._maxx-this._minx},Yu.prototype.compareTo=function(t){var e=t;return this.isNull()?e.isNull()?0:-1:e.isNull()?1:this._minx<e._minx?-1:this._minx>e._minx?1:this._miny<e._miny?-1:this._miny>e._miny?1:this._maxx<e._maxx?-1:this._maxx>e._maxx?1:this._maxy<e._maxy?-1:this._maxy>e._maxy?1:0},Yu.prototype.translate=function(t,e){if(this.isNull())return null;this.init(this.getMinX()+t,this.getMaxX()+t,this.getMinY()+e,this.getMaxY()+e)},Yu.prototype.toString=function(){return"Env["+this._minx+" : "+this._maxx+", "+this._miny+" : "+this._maxy+"]"},Yu.prototype.setToNull=function(){this._minx=0,this._maxx=-1,this._miny=0,this._maxy=-1},Yu.prototype.getHeight=function(){return this.isNull()?0:this._maxy-this._miny},Yu.prototype.maxExtent=function(){if(this.isNull())return 0;var t=this.getWidth(),e=this.getHeight();return t>e?t:e},Yu.prototype.expandBy=function(){if(1===arguments.length){var t=arguments[0];this.expandBy(t,t)}else if(2===arguments.length){var e=arguments[0],n=arguments[1];if(this.isNull())return null;this._minx-=e,this._maxx+=e,this._miny-=n,this._maxy+=n,(this._minx>this._maxx||this._miny>this._maxy)&&this.setToNull()}},Yu.prototype.contains=function(){if(1===arguments.length){if(arguments[0]instanceof Yu){var t=arguments[0];return this.covers(t)}if(arguments[0]instanceof bu){var e=arguments[0];return this.covers(e)}}else if(2===arguments.length){var n=arguments[0],r=arguments[1];return this.covers(n,r)}},Yu.prototype.centre=function(){return this.isNull()?null:new bu((this.getMinX()+this.getMaxX())/2,(this.getMinY()+this.getMaxY())/2)},Yu.prototype.init=function(){if(0===arguments.length)this.setToNull();else if(1===arguments.length){if(arguments[0]instanceof bu){var t=arguments[0];this.init(t.x,t.x,t.y,t.y)}else if(arguments[0]instanceof Yu){var e=arguments[0];this._minx=e._minx,this._maxx=e._maxx,this._miny=e._miny,this._maxy=e._maxy}}else if(2===arguments.length){var n=arguments[0],r=arguments[1];this.init(n.x,r.x,n.y,r.y)}else if(4===arguments.length){var i=arguments[0],o=arguments[1],s=arguments[2],a=arguments[3];i<o?(this._minx=i,this._maxx=o):(this._minx=o,this._maxx=i),s<a?(this._miny=s,this._maxy=a):(this._miny=a,this._maxy=s)}},Yu.prototype.getMaxY=function(){return this._maxy},Yu.prototype.distance=function(t){if(this.intersects(t))return 0;var e=0;this._maxx<t._minx?e=t._minx-this._maxx:this._minx>t._maxx&&(e=this._minx-t._maxx);var n=0;return this._maxy<t._miny?n=t._miny-this._maxy:this._miny>t._maxy&&(n=this._miny-t._maxy),0===e?n:0===n?e:Math.sqrt(e*e+n*n)},Yu.prototype.hashCode=function(){var t=17;return t=37*t+bu.hashCode(this._minx),t=37*t+bu.hashCode(this._maxx),t=37*t+bu.hashCode(this._miny),t=37*t+bu.hashCode(this._maxy)},Yu.prototype.interfaces_=function(){return[xu,Li]},Yu.prototype.getClass=function(){return Yu},Yu.intersects=function(){if(3===arguments.length){var t=arguments[0],e=arguments[1],n=arguments[2];return n.x>=(t.x<e.x?t.x:e.x)&&n.x<=(t.x>e.x?t.x:e.x)&&n.y>=(t.y<e.y?t.y:e.y)&&n.y<=(t.y>e.y?t.y:e.y)}if(4===arguments.length){var r=arguments[0],i=arguments[1],o=arguments[2],s=arguments[3],a=Math.min(o.x,s.x),u=Math.max(o.x,s.x),c=Math.min(r.x,i.x),h=Math.max(r.x,i.x);return!(c>u)&&(!(h<a)&&(a=Math.min(o.y,s.y),u=Math.max(o.y,s.y),c=Math.min(r.y,i.y),h=Math.max(r.y,i.y),!(c>u)&&!(h<a)))}},Vu.serialVersionUID.get=function(){return 0x51845cd552189800},Object.defineProperties(Yu,Vu);var Hu={typeStr:/^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,emptyTypeStr:/^\s*(\w+)\s*EMPTY\s*$/,spaces:/\s+/,parenComma:/\)\s*,\s*\(/,doubleParenComma:/\)\s*\)\s*,\s*\(\s*\(/,trimParens:/^\s*\(?(.*?)\)?\s*$/},Wu=function(t){this.geometryFactory=t||new _h};Wu.prototype.read=function(t){var e,n,r;t=t.replace(/[\n\r]/g," ");var i=Hu.typeStr.exec(t);if(-1!==t.search("EMPTY")&&((i=Hu.emptyTypeStr.exec(t))[2]=void 0),i&&(n=i[1].toLowerCase(),r=i[2],Zu[n]&&(e=Zu[n].apply(this,[r]))),void 0===e)throw new Error("Could not parse WKT "+t);return e},Wu.prototype.write=function(t){return this.extractGeometry(t)},Wu.prototype.extractGeometry=function(t){var e=t.getGeometryType().toLowerCase();if(!Ju[e])return null;var n=e.toUpperCase();return t.isEmpty()?n+" EMPTY":n+"("+Ju[e].apply(this,[t])+")"};var Ju={coordinate:function(t){return t.x+" "+t.y},point:function(t){return Ju.coordinate.call(this,t._coordinates._coordinates[0])},multipoint:function(t){for(var e=[],n=0,r=t._geometries.length;n<r;++n)e.push("("+Ju.point.apply(this,[t._geometries[n]])+")");return e.join(",")},linestring:function(t){for(var e=[],n=0,r=t._points._coordinates.length;n<r;++n)e.push(Ju.coordinate.apply(this,[t._points._coordinates[n]]));return e.join(",")},linearring:function(t){for(var e=[],n=0,r=t._points._coordinates.length;n<r;++n)e.push(Ju.coordinate.apply(this,[t._points._coordinates[n]]));return e.join(",")},multilinestring:function(t){for(var e=[],n=0,r=t._geometries.length;n<r;++n)e.push("("+Ju.linestring.apply(this,[t._geometries[n]])+")");return e.join(",")},polygon:function(t){var e=[];e.push("("+Ju.linestring.apply(this,[t._shell])+")");for(var n=0,r=t._holes.length;n<r;++n)e.push("("+Ju.linestring.apply(this,[t._holes[n]])+")");return e.join(",")},multipolygon:function(t){for(var e=[],n=0,r=t._geometries.length;n<r;++n)e.push("("+Ju.polygon.apply(this,[t._geometries[n]])+")");return e.join(",")},geometrycollection:function(t){for(var e=[],n=0,r=t._geometries.length;n<r;++n)e.push(this.extractGeometry(t._geometries[n]));return e.join(",")}},Zu={point:function(t){if(void 0===t)return this.geometryFactory.createPoint();var e=t.trim().split(Hu.spaces);return this.geometryFactory.createPoint(new bu(Number.parseFloat(e[0]),Number.parseFloat(e[1])))},multipoint:function(t){if(void 0===t)return this.geometryFactory.createMultiPoint();for(var e,n=t.trim().split(","),r=[],i=0,o=n.length;i<o;++i)e=n[i].replace(Hu.trimParens,"$1"),r.push(Zu.point.apply(this,[e]));return this.geometryFactory.createMultiPoint(r)},linestring:function(t){if(void 0===t)return this.geometryFactory.createLineString();for(var e,n=t.trim().split(","),r=[],i=0,o=n.length;i<o;++i)e=n[i].trim().split(Hu.spaces),r.push(new bu(Number.parseFloat(e[0]),Number.parseFloat(e[1])));return this.geometryFactory.createLineString(r)},linearring:function(t){if(void 0===t)return this.geometryFactory.createLinearRing();for(var e,n=t.trim().split(","),r=[],i=0,o=n.length;i<o;++i)e=n[i].trim().split(Hu.spaces),r.push(new bu(Number.parseFloat(e[0]),Number.parseFloat(e[1])));return this.geometryFactory.createLinearRing(r)},multilinestring:function(t){if(void 0===t)return this.geometryFactory.createMultiLineString();for(var e,n=t.trim().split(Hu.parenComma),r=[],i=0,o=n.length;i<o;++i)e=n[i].replace(Hu.trimParens,"$1"),r.push(Zu.linestring.apply(this,[e]));return this.geometryFactory.createMultiLineString(r)},polygon:function(t){if(void 0===t)return this.geometryFactory.createPolygon();for(var e,n,r,i,o=t.trim().split(Hu.parenComma),s=[],a=0,u=o.length;a<u;++a)e=o[a].replace(Hu.trimParens,"$1"),n=Zu.linestring.apply(this,[e]),r=this.geometryFactory.createLinearRing(n._points),0===a?i=r:s.push(r);return this.geometryFactory.createPolygon(i,s)},multipolygon:function(t){if(void 0===t)return this.geometryFactory.createMultiPolygon();for(var e,n=t.trim().split(Hu.doubleParenComma),r=[],i=0,o=n.length;i<o;++i)e=n[i].replace(Hu.trimParens,"$1"),r.push(Zu.polygon.apply(this,[e]));return this.geometryFactory.createMultiPolygon(r)},geometrycollection:function(t){if(void 0===t)return this.geometryFactory.createGeometryCollection();for(var e=(t=t.replace(/,\s*([A-Za-z])/g,"|$1")).trim().split("|"),n=[],r=0,i=e.length;r<i;++r)n.push(this.read(e[r]));return this.geometryFactory.createGeometryCollection(n)}},Ku=function(t){this.parser=new Wu(t)};Ku.prototype.write=function(t){return this.parser.write(t)},Ku.toLineString=function(t,e){if(2!==arguments.length)throw new Error("Not implemented");return"LINESTRING ( "+t.x+" "+t.y+", "+e.x+" "+e.y+" )"};var Qu=function(t){function e(e){t.call(this,e),this.name="RuntimeException",this.message=e,this.stack=(new t).stack}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Error),$u=function(t){function e(){if(t.call(this),0===arguments.length)t.call(this);else if(1===arguments.length){var e=arguments[0];t.call(this,e)}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(Qu),tc=function(){};tc.prototype.interfaces_=function(){return[]},tc.prototype.getClass=function(){return tc},tc.shouldNeverReachHere=function(){if(0===arguments.length)tc.shouldNeverReachHere(null);else if(1===arguments.length){var t=arguments[0];throw new $u("Should never reach here"+(null!==t?": "+t:""))}},tc.isTrue=function(){var t,e;if(1===arguments.length)t=arguments[0],tc.isTrue(t,null);else if(2===arguments.length&&(t=arguments[0],e=arguments[1],!t))throw null===e?new $u:new $u(e)},tc.equals=function(){var t,e,n;if(2===arguments.length)t=arguments[0],e=arguments[1],tc.equals(t,e,null);else if(3===arguments.length&&(t=arguments[0],e=arguments[1],n=arguments[2],!e.equals(t)))throw new $u("Expected "+t+" but encountered "+e+(null!==n?": "+n:""))};var ec=function(){this._result=null,this._inputLines=Array(2).fill().map(function(){return Array(2)}),this._intPt=new Array(2).fill(null),this._intLineIndex=null,this._isProper=null,this._pa=null,this._pb=null,this._precisionModel=null,this._intPt[0]=new bu,this._intPt[1]=new bu,this._pa=this._intPt[0],this._pb=this._intPt[1],this._result=0},nc={DONT_INTERSECT:{configurable:!0},DO_INTERSECT:{configurable:!0},COLLINEAR:{configurable:!0},NO_INTERSECTION:{configurable:!0},POINT_INTERSECTION:{configurable:!0},COLLINEAR_INTERSECTION:{configurable:!0}};ec.prototype.getIndexAlongSegment=function(t,e){return this.computeIntLineIndex(),this._intLineIndex[t][e]},ec.prototype.getTopologySummary=function(){var t=new Ru;return this.isEndPoint()&&t.append(" endpoint"),this._isProper&&t.append(" proper"),this.isCollinear()&&t.append(" collinear"),t.toString()},ec.prototype.computeIntersection=function(t,e,n,r){this._inputLines[0][0]=t,this._inputLines[0][1]=e,this._inputLines[1][0]=n,this._inputLines[1][1]=r,this._result=this.computeIntersect(t,e,n,r)},ec.prototype.getIntersectionNum=function(){return this._result},ec.prototype.computeIntLineIndex=function(){if(0===arguments.length)null===this._intLineIndex&&(this._intLineIndex=Array(2).fill().map(function(){return Array(2)}),this.computeIntLineIndex(0),this.computeIntLineIndex(1));else if(1===arguments.length){var t=arguments[0];this.getEdgeDistance(t,0)>this.getEdgeDistance(t,1)?(this._intLineIndex[t][0]=0,this._intLineIndex[t][1]=1):(this._intLineIndex[t][0]=1,this._intLineIndex[t][1]=0)}},ec.prototype.isProper=function(){return this.hasIntersection()&&this._isProper},ec.prototype.setPrecisionModel=function(t){this._precisionModel=t},ec.prototype.isInteriorIntersection=function(){if(0===arguments.length)return!!this.isInteriorIntersection(0)||!!this.isInteriorIntersection(1);if(1===arguments.length){for(var t=arguments[0],e=0;e<this._result;e++)if(!this._intPt[e].equals2D(this._inputLines[t][0])&&!this._intPt[e].equals2D(this._inputLines[t][1]))return!0;return!1}},ec.prototype.getIntersection=function(t){return this._intPt[t]},ec.prototype.isEndPoint=function(){return this.hasIntersection()&&!this._isProper},ec.prototype.hasIntersection=function(){return this._result!==ec.NO_INTERSECTION},ec.prototype.getEdgeDistance=function(t,e){return ec.computeEdgeDistance(this._intPt[e],this._inputLines[t][0],this._inputLines[t][1])},ec.prototype.isCollinear=function(){return this._result===ec.COLLINEAR_INTERSECTION},ec.prototype.toString=function(){return Ku.toLineString(this._inputLines[0][0],this._inputLines[0][1])+" - "+Ku.toLineString(this._inputLines[1][0],this._inputLines[1][1])+this.getTopologySummary()},ec.prototype.getEndpoint=function(t,e){return this._inputLines[t][e]},ec.prototype.isIntersection=function(t){for(var e=0;e<this._result;e++)if(this._intPt[e].equals2D(t))return!0;return!1},ec.prototype.getIntersectionAlongSegment=function(t,e){return this.computeIntLineIndex(),this._intPt[this._intLineIndex[t][e]]},ec.prototype.interfaces_=function(){return[]},ec.prototype.getClass=function(){return ec},ec.computeEdgeDistance=function(t,e,n){var r=Math.abs(n.x-e.x),i=Math.abs(n.y-e.y),o=-1;if(t.equals(e))o=0;else if(t.equals(n))o=r>i?r:i;else{var s=Math.abs(t.x-e.x),a=Math.abs(t.y-e.y);0!==(o=r>i?s:a)||t.equals(e)||(o=Math.max(s,a))}return tc.isTrue(!(0===o&&!t.equals(e)),"Bad distance calculation"),o},ec.nonRobustComputeEdgeDistance=function(t,e,n){var r=t.x-e.x,i=t.y-e.y,o=Math.sqrt(r*r+i*i);return tc.isTrue(!(0===o&&!t.equals(e)),"Invalid distance calculation"),o},nc.DONT_INTERSECT.get=function(){return 0},nc.DO_INTERSECT.get=function(){return 1},nc.COLLINEAR.get=function(){return 2},nc.NO_INTERSECTION.get=function(){return 0},nc.POINT_INTERSECTION.get=function(){return 1},nc.COLLINEAR_INTERSECTION.get=function(){return 2},Object.defineProperties(ec,nc);var rc=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.isInSegmentEnvelopes=function(t){var e=new Yu(this._inputLines[0][0],this._inputLines[0][1]),n=new Yu(this._inputLines[1][0],this._inputLines[1][1]);return e.contains(t)&&n.contains(t)},e.prototype.computeIntersection=function(){if(3!==arguments.length)return t.prototype.computeIntersection.apply(this,arguments);var e=arguments[0],n=arguments[1],r=arguments[2];if(this._isProper=!1,Yu.intersects(n,r,e)&&0===sc.orientationIndex(n,r,e)&&0===sc.orientationIndex(r,n,e))return this._isProper=!0,(e.equals(n)||e.equals(r))&&(this._isProper=!1),this._result=t.POINT_INTERSECTION,null;this._result=t.NO_INTERSECTION},e.prototype.normalizeToMinimum=function(t,e,n,r,i){i.x=this.smallestInAbsValue(t.x,e.x,n.x,r.x),i.y=this.smallestInAbsValue(t.y,e.y,n.y,r.y),t.x-=i.x,t.y-=i.y,e.x-=i.x,e.y-=i.y,n.x-=i.x,n.y-=i.y,r.x-=i.x,r.y-=i.y},e.prototype.safeHCoordinateIntersection=function(t,n,r,i){var o=null;try{o=Uu.intersection(t,n,r,i)}catch(s){if(!(s instanceof ju))throw s;o=e.nearestEndpoint(t,n,r,i)}return o},e.prototype.intersection=function(t,n,r,i){var o=this.intersectionWithNormalization(t,n,r,i);return this.isInSegmentEnvelopes(o)||(o=new bu(e.nearestEndpoint(t,n,r,i))),null!==this._precisionModel&&this._precisionModel.makePrecise(o),o},e.prototype.smallestInAbsValue=function(t,e,n,r){var i=t,o=Math.abs(i);return Math.abs(e)<o&&(i=e,o=Math.abs(e)),Math.abs(n)<o&&(i=n,o=Math.abs(n)),Math.abs(r)<o&&(i=r),i},e.prototype.checkDD=function(t,e,n,r,i){var o=qu.intersection(t,e,n,r),s=this.isInSegmentEnvelopes(o);Xu.out.println("DD in env = "+s+"  --------------------- "+o),i.distance(o)>1e-4&&Xu.out.println("Distance = "+i.distance(o))},e.prototype.intersectionWithNormalization=function(t,e,n,r){var i=new bu(t),o=new bu(e),s=new bu(n),a=new bu(r),u=new bu;this.normalizeToEnvCentre(i,o,s,a,u);var c=this.safeHCoordinateIntersection(i,o,s,a);return c.x+=u.x,c.y+=u.y,c},e.prototype.computeCollinearIntersection=function(e,n,r,i){var o=Yu.intersects(e,n,r),s=Yu.intersects(e,n,i),a=Yu.intersects(r,i,e),u=Yu.intersects(r,i,n);return o&&s?(this._intPt[0]=r,this._intPt[1]=i,t.COLLINEAR_INTERSECTION):a&&u?(this._intPt[0]=e,this._intPt[1]=n,t.COLLINEAR_INTERSECTION):o&&a?(this._intPt[0]=r,this._intPt[1]=e,!r.equals(e)||s||u?t.COLLINEAR_INTERSECTION:t.POINT_INTERSECTION):o&&u?(this._intPt[0]=r,this._intPt[1]=n,!r.equals(n)||s||a?t.COLLINEAR_INTERSECTION:t.POINT_INTERSECTION):s&&a?(this._intPt[0]=i,this._intPt[1]=e,!i.equals(e)||o||u?t.COLLINEAR_INTERSECTION:t.POINT_INTERSECTION):s&&u?(this._intPt[0]=i,this._intPt[1]=n,!i.equals(n)||o||a?t.COLLINEAR_INTERSECTION:t.POINT_INTERSECTION):t.NO_INTERSECTION},e.prototype.normalizeToEnvCentre=function(t,e,n,r,i){var o=t.x<e.x?t.x:e.x,s=t.y<e.y?t.y:e.y,a=t.x>e.x?t.x:e.x,u=t.y>e.y?t.y:e.y,c=n.x<r.x?n.x:r.x,h=n.y<r.y?n.y:r.y,l=n.x>r.x?n.x:r.x,p=n.y>r.y?n.y:r.y,f=((o>c?o:c)+(a<l?a:l))/2,g=((s>h?s:h)+(u<p?u:p))/2;i.x=f,i.y=g,t.x-=i.x,t.y-=i.y,e.x-=i.x,e.y-=i.y,n.x-=i.x,n.y-=i.y,r.x-=i.x,r.y-=i.y},e.prototype.computeIntersect=function(e,n,r,i){if(this._isProper=!1,!Yu.intersects(e,n,r,i))return t.NO_INTERSECTION;var o=sc.orientationIndex(e,n,r),s=sc.orientationIndex(e,n,i);if(o>0&&s>0||o<0&&s<0)return t.NO_INTERSECTION;var a=sc.orientationIndex(r,i,e),u=sc.orientationIndex(r,i,n);if(a>0&&u>0||a<0&&u<0)return t.NO_INTERSECTION;return 0===o&&0===s&&0===a&&0===u?this.computeCollinearIntersection(e,n,r,i):(0===o||0===s||0===a||0===u?(this._isProper=!1,e.equals2D(r)||e.equals2D(i)?this._intPt[0]=e:n.equals2D(r)||n.equals2D(i)?this._intPt[0]=n:0===o?this._intPt[0]=new bu(r):0===s?this._intPt[0]=new bu(i):0===a?this._intPt[0]=new bu(e):0===u&&(this._intPt[0]=new bu(n))):(this._isProper=!0,this._intPt[0]=this.intersection(e,n,r,i)),t.POINT_INTERSECTION)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e.nearestEndpoint=function(t,e,n,r){var i=t,o=sc.distancePointLine(t,n,r),s=sc.distancePointLine(e,n,r);return s<o&&(o=s,i=e),(s=sc.distancePointLine(n,t,e))<o&&(o=s,i=n),(s=sc.distancePointLine(r,t,e))<o&&(o=s,i=r),i},e}(ec),ic=function(){};ic.prototype.interfaces_=function(){return[]},ic.prototype.getClass=function(){return ic},ic.orientationIndex=function(t,e,n){var r=e.x-t.x,i=e.y-t.y,o=n.x-e.x,s=n.y-e.y;return ic.signOfDet2x2(r,i,o,s)},ic.signOfDet2x2=function(t,e,n,r){var i=null,o=null,s=null;if(i=1,0===t||0===r)return 0===e||0===n?0:e>0?n>0?-i:i:n>0?i:-i;if(0===e||0===n)return r>0?t>0?i:-i:t>0?-i:i;if(e>0?r>0?e<=r||(i=-i,o=t,t=n,n=o,o=e,e=r,r=o):e<=-r?(i=-i,n=-n,r=-r):(o=t,t=-n,n=o,o=e,e=-r,r=o):r>0?-e<=r?(i=-i,t=-t,e=-e):(o=-t,t=n,n=o,o=-e,e=r,r=o):e>=r?(t=-t,e=-e,n=-n,r=-r):(i=-i,o=-t,t=-n,n=o,o=-e,e=-r,r=o),t>0){if(!(n>0))return i;if(!(t<=n))return i}else{if(n>0)return-i;if(!(t>=n))return-i;i=-i,t=-t,n=-n}for(;;){if(s=Math.floor(n/t),n-=s*t,(r-=s*e)<0)return-i;if(r>e)return i;if(t>n+n){if(e<r+r)return i}else{if(e>r+r)return-i;n=t-n,r=e-r,i=-i}if(0===r)return 0===n?0:-i;if(0===n)return i;if(s=Math.floor(t/n),t-=s*n,(e-=s*r)<0)return i;if(e>r)return-i;if(n>t+t){if(r<e+e)return-i}else{if(r>e+e)return i;t=n-t,e=r-e,i=-i}if(0===e)return 0===t?0:i;if(0===t)return-i}};var oc=function(){this._p=null,this._crossingCount=0,this._isPointOnSegment=!1;var t=arguments[0];this._p=t};oc.prototype.countSegment=function(t,e){if(t.x<this._p.x&&e.x<this._p.x)return null;if(this._p.x===e.x&&this._p.y===e.y)return this._isPointOnSegment=!0,null;if(t.y===this._p.y&&e.y===this._p.y){var n=t.x,r=e.x;return n>r&&(n=e.x,r=t.x),this._p.x>=n&&this._p.x<=r&&(this._isPointOnSegment=!0),null}if(t.y>this._p.y&&e.y<=this._p.y||e.y>this._p.y&&t.y<=this._p.y){var i=t.x-this._p.x,o=t.y-this._p.y,s=e.x-this._p.x,a=e.y-this._p.y,u=ic.signOfDet2x2(i,o,s,a);if(0===u)return this._isPointOnSegment=!0,null;a<o&&(u=-u),u>0&&this._crossingCount++}},oc.prototype.isPointInPolygon=function(){return this.getLocation()!==Su.EXTERIOR},oc.prototype.getLocation=function(){return this._isPointOnSegment?Su.BOUNDARY:this._crossingCount%2==1?Su.INTERIOR:Su.EXTERIOR},oc.prototype.isOnSegment=function(){return this._isPointOnSegment},oc.prototype.interfaces_=function(){return[]},oc.prototype.getClass=function(){return oc},oc.locatePointInRing=function(){if(arguments[0]instanceof bu&&Lu(arguments[1],Bu)){for(var t=arguments[0],e=arguments[1],n=new oc(t),r=new bu,i=new bu,o=1;o<e.size();o++)if(e.getCoordinate(o,r),e.getCoordinate(o-1,i),n.countSegment(r,i),n.isOnSegment())return n.getLocation();return n.getLocation()}if(arguments[0]instanceof bu&&arguments[1]instanceof Array){for(var s=arguments[0],a=arguments[1],u=new oc(s),c=1;c<a.length;c++){var h=a[c],l=a[c-1];if(u.countSegment(h,l),u.isOnSegment())return u.getLocation()}return u.getLocation()}};var sc=function(){},ac={CLOCKWISE:{configurable:!0},RIGHT:{configurable:!0},COUNTERCLOCKWISE:{configurable:!0},LEFT:{configurable:!0},COLLINEAR:{configurable:!0},STRAIGHT:{configurable:!0}};sc.prototype.interfaces_=function(){return[]},sc.prototype.getClass=function(){return sc},sc.orientationIndex=function(t,e,n){return qu.orientationIndex(t,e,n)},sc.signedArea=function(){if(arguments[0]instanceof Array){var t=arguments[0];if(t.length<3)return 0;for(var e=0,n=t[0].x,r=1;r<t.length-1;r++){var i=t[r].x-n,o=t[r+1].y;e+=i*(t[r-1].y-o)}return e/2}if(Lu(arguments[0],Bu)){var s=arguments[0],a=s.size();if(a<3)return 0;var u=new bu,c=new bu,h=new bu;s.getCoordinate(0,c),s.getCoordinate(1,h);var l=c.x;h.x-=l;for(var p=0,f=1;f<a-1;f++)u.y=c.y,c.x=h.x,c.y=h.y,s.getCoordinate(f+1,h),h.x-=l,p+=c.x*(u.y-h.y);return p/2}},sc.distanceLineLine=function(t,e,n,r){if(t.equals(e))return sc.distancePointLine(t,n,r);if(n.equals(r))return sc.distancePointLine(r,t,e);var i=!1;if(Yu.intersects(t,e,n,r)){var o=(e.x-t.x)*(r.y-n.y)-(e.y-t.y)*(r.x-n.x);if(0===o)i=!0;else{var s=(t.y-n.y)*(r.x-n.x)-(t.x-n.x)*(r.y-n.y),a=((t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y))/o,u=s/o;(u<0||u>1||a<0||a>1)&&(i=!0)}}else i=!0;return i?Pu.min(sc.distancePointLine(t,n,r),sc.distancePointLine(e,n,r),sc.distancePointLine(n,t,e),sc.distancePointLine(r,t,e)):0},sc.isPointInRing=function(t,e){return sc.locatePointInRing(t,e)!==Su.EXTERIOR},sc.computeLength=function(t){var e=t.size();if(e<=1)return 0;var n=0,r=new bu;t.getCoordinate(0,r);for(var i=r.x,o=r.y,s=1;s<e;s++){t.getCoordinate(s,r);var a=r.x,u=r.y,c=a-i,h=u-o;n+=Math.sqrt(c*c+h*h),i=a,o=u}return n},sc.isCCW=function(t){var e=t.length-1;if(e<3)throw new _u("Ring has fewer than 4 points, so orientation cannot be determined");for(var n=t[0],r=0,i=1;i<=e;i++){var o=t[i];o.y>n.y&&(n=o,r=i)}var s=r;do{(s-=1)<0&&(s=e)}while(t[s].equals2D(n)&&s!==r);var a=r;do{a=(a+1)%e}while(t[a].equals2D(n)&&a!==r);var u=t[s],c=t[a];if(u.equals2D(n)||c.equals2D(n)||u.equals2D(c))return!1;var h=sc.computeOrientation(u,n,c),l=!1;return l=0===h?u.x>c.x:h>0,l},sc.locatePointInRing=function(t,e){return oc.locatePointInRing(t,e)},sc.distancePointLinePerpendicular=function(t,e,n){var r=(n.x-e.x)*(n.x-e.x)+(n.y-e.y)*(n.y-e.y),i=((e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y))/r;return Math.abs(i)*Math.sqrt(r)},sc.computeOrientation=function(t,e,n){return sc.orientationIndex(t,e,n)},sc.distancePointLine=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1];if(0===e.length)throw new _u("Line array must contain at least one vertex");for(var n=t.distance(e[0]),r=0;r<e.length-1;r++){var i=sc.distancePointLine(t,e[r],e[r+1]);i<n&&(n=i)}return n}if(3===arguments.length){var o=arguments[0],s=arguments[1],a=arguments[2];if(s.x===a.x&&s.y===a.y)return o.distance(s);var u=(a.x-s.x)*(a.x-s.x)+(a.y-s.y)*(a.y-s.y),c=((o.x-s.x)*(a.x-s.x)+(o.y-s.y)*(a.y-s.y))/u;if(c<=0)return o.distance(s);if(c>=1)return o.distance(a);var h=((s.y-o.y)*(a.x-s.x)-(s.x-o.x)*(a.y-s.y))/u;return Math.abs(h)*Math.sqrt(u)}},sc.isOnLine=function(t,e){for(var n=new rc,r=1;r<e.length;r++){var i=e[r-1],o=e[r];if(n.computeIntersection(t,i,o),n.hasIntersection())return!0}return!1},ac.CLOCKWISE.get=function(){return-1},ac.RIGHT.get=function(){return sc.CLOCKWISE},ac.COUNTERCLOCKWISE.get=function(){return 1},ac.LEFT.get=function(){return sc.COUNTERCLOCKWISE},ac.COLLINEAR.get=function(){return 0},ac.STRAIGHT.get=function(){return sc.COLLINEAR},Object.defineProperties(sc,ac);var uc=function(){};uc.prototype.filter=function(t){},uc.prototype.interfaces_=function(){return[]},uc.prototype.getClass=function(){return uc};var cc=function(){var t=arguments[0];this._envelope=null,this._factory=null,this._SRID=null,this._userData=null,this._factory=t,this._SRID=t.getSRID()},hc={serialVersionUID:{configurable:!0},SORTINDEX_POINT:{configurable:!0},SORTINDEX_MULTIPOINT:{configurable:!0},SORTINDEX_LINESTRING:{configurable:!0},SORTINDEX_LINEARRING:{configurable:!0},SORTINDEX_MULTILINESTRING:{configurable:!0},SORTINDEX_POLYGON:{configurable:!0},SORTINDEX_MULTIPOLYGON:{configurable:!0},SORTINDEX_GEOMETRYCOLLECTION:{configurable:!0},geometryChangedFilter:{configurable:!0}};cc.prototype.isGeometryCollection=function(){return this.getSortIndex()===cc.SORTINDEX_GEOMETRYCOLLECTION},cc.prototype.getFactory=function(){return this._factory},cc.prototype.getGeometryN=function(t){return this},cc.prototype.getArea=function(){return 0},cc.prototype.isRectangle=function(){return!1},cc.prototype.equals=function(){if(arguments[0]instanceof cc){var t=arguments[0];return null!==t&&this.equalsTopo(t)}if(arguments[0]instanceof Object){var e=arguments[0];if(!(e instanceof cc))return!1;var n=e;return this.equalsExact(n)}},cc.prototype.equalsExact=function(t){return this===t||this.equalsExact(t,0)},cc.prototype.geometryChanged=function(){this.apply(cc.geometryChangedFilter)},cc.prototype.geometryChangedAction=function(){this._envelope=null},cc.prototype.equalsNorm=function(t){return null!==t&&this.norm().equalsExact(t.norm())},cc.prototype.getLength=function(){return 0},cc.prototype.getNumGeometries=function(){return 1},cc.prototype.compareTo=function(){if(1===arguments.length){var t=arguments[0],e=t;return this.getSortIndex()!==e.getSortIndex()?this.getSortIndex()-e.getSortIndex():this.isEmpty()&&e.isEmpty()?0:this.isEmpty()?-1:e.isEmpty()?1:this.compareToSameClass(t)}if(2===arguments.length){var n=arguments[0],r=arguments[1];return this.getSortIndex()!==n.getSortIndex()?this.getSortIndex()-n.getSortIndex():this.isEmpty()&&n.isEmpty()?0:this.isEmpty()?-1:n.isEmpty()?1:this.compareToSameClass(n,r)}},cc.prototype.getUserData=function(){return this._userData},cc.prototype.getSRID=function(){return this._SRID},cc.prototype.getEnvelope=function(){return this.getFactory().toGeometry(this.getEnvelopeInternal())},cc.prototype.checkNotGeometryCollection=function(t){if(t.getSortIndex()===cc.SORTINDEX_GEOMETRYCOLLECTION)throw new _u("This method does not support GeometryCollection arguments")},cc.prototype.equal=function(t,e,n){return 0===n?t.equals(e):t.distance(e)<=n},cc.prototype.norm=function(){var t=this.copy();return t.normalize(),t},cc.prototype.getPrecisionModel=function(){return this._factory.getPrecisionModel()},cc.prototype.getEnvelopeInternal=function(){return null===this._envelope&&(this._envelope=this.computeEnvelopeInternal()),new Yu(this._envelope)},cc.prototype.setSRID=function(t){this._SRID=t},cc.prototype.setUserData=function(t){this._userData=t},cc.prototype.compare=function(t,e){for(var n=t.iterator(),r=e.iterator();n.hasNext()&&r.hasNext();){var i=n.next(),o=r.next(),s=i.compareTo(o);if(0!==s)return s}return n.hasNext()?1:r.hasNext()?-1:0},cc.prototype.hashCode=function(){return this.getEnvelopeInternal().hashCode()},cc.prototype.isGeometryCollectionOrDerived=function(){return this.getSortIndex()===cc.SORTINDEX_GEOMETRYCOLLECTION||this.getSortIndex()===cc.SORTINDEX_MULTIPOINT||this.getSortIndex()===cc.SORTINDEX_MULTILINESTRING||this.getSortIndex()===cc.SORTINDEX_MULTIPOLYGON},cc.prototype.interfaces_=function(){return[Eu,xu,Li]},cc.prototype.getClass=function(){return cc},cc.hasNonEmptyElements=function(t){for(var e=0;e<t.length;e++)if(!t[e].isEmpty())return!0;return!1},cc.hasNullElements=function(t){for(var e=0;e<t.length;e++)if(null===t[e])return!0;return!1},hc.serialVersionUID.get=function(){return 0x799ea46522854c00},hc.SORTINDEX_POINT.get=function(){return 0},hc.SORTINDEX_MULTIPOINT.get=function(){return 1},hc.SORTINDEX_LINESTRING.get=function(){return 2},hc.SORTINDEX_LINEARRING.get=function(){return 3},hc.SORTINDEX_MULTILINESTRING.get=function(){return 4},hc.SORTINDEX_POLYGON.get=function(){return 5},hc.SORTINDEX_MULTIPOLYGON.get=function(){return 6},hc.SORTINDEX_GEOMETRYCOLLECTION.get=function(){return 7},hc.geometryChangedFilter.get=function(){return lc},Object.defineProperties(cc,hc);var lc=function(){};lc.interfaces_=function(){return[uc]},lc.filter=function(t){t.geometryChangedAction()};var pc=function(){};pc.prototype.filter=function(t){},pc.prototype.interfaces_=function(){return[]},pc.prototype.getClass=function(){return pc};var fc=function(){},gc={Mod2BoundaryNodeRule:{configurable:!0},EndPointBoundaryNodeRule:{configurable:!0},MultiValentEndPointBoundaryNodeRule:{configurable:!0},MonoValentEndPointBoundaryNodeRule:{configurable:!0},MOD2_BOUNDARY_RULE:{configurable:!0},ENDPOINT_BOUNDARY_RULE:{configurable:!0},MULTIVALENT_ENDPOINT_BOUNDARY_RULE:{configurable:!0},MONOVALENT_ENDPOINT_BOUNDARY_RULE:{configurable:!0},OGC_SFS_BOUNDARY_RULE:{configurable:!0}};fc.prototype.isInBoundary=function(t){},fc.prototype.interfaces_=function(){return[]},fc.prototype.getClass=function(){return fc},gc.Mod2BoundaryNodeRule.get=function(){return dc},gc.EndPointBoundaryNodeRule.get=function(){return yc},gc.MultiValentEndPointBoundaryNodeRule.get=function(){return _c},gc.MonoValentEndPointBoundaryNodeRule.get=function(){return mc},gc.MOD2_BOUNDARY_RULE.get=function(){return new dc},gc.ENDPOINT_BOUNDARY_RULE.get=function(){return new yc},gc.MULTIVALENT_ENDPOINT_BOUNDARY_RULE.get=function(){return new _c},gc.MONOVALENT_ENDPOINT_BOUNDARY_RULE.get=function(){return new mc},gc.OGC_SFS_BOUNDARY_RULE.get=function(){return fc.MOD2_BOUNDARY_RULE},Object.defineProperties(fc,gc);var dc=function(){};dc.prototype.isInBoundary=function(t){return t%2==1},dc.prototype.interfaces_=function(){return[fc]},dc.prototype.getClass=function(){return dc};var yc=function(){};yc.prototype.isInBoundary=function(t){return t>0},yc.prototype.interfaces_=function(){return[fc]},yc.prototype.getClass=function(){return yc};var _c=function(){};_c.prototype.isInBoundary=function(t){return t>1},_c.prototype.interfaces_=function(){return[fc]},_c.prototype.getClass=function(){return _c};var mc=function(){};mc.prototype.isInBoundary=function(t){return 1===t},mc.prototype.interfaces_=function(){return[fc]},mc.prototype.getClass=function(){return mc};var vc=function(){};vc.prototype.add=function(){},vc.prototype.addAll=function(){},vc.prototype.isEmpty=function(){},vc.prototype.iterator=function(){},vc.prototype.size=function(){},vc.prototype.toArray=function(){},vc.prototype.remove=function(){};var xc=function(t){function e(e){t.call(this),this.message=e||""}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={name:{configurable:!0}};return n.name.get=function(){return"IndexOutOfBoundsException"},Object.defineProperties(e,n),e}(Error),Ec=function(){};Ec.prototype.hasNext=function(){},Ec.prototype.next=function(){},Ec.prototype.remove=function(){};var wc=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.get=function(){},e.prototype.set=function(){},e.prototype.isEmpty=function(){},e}(vc);(Pi.prototype=new Error).name="NoSuchElementException";var bc=function(t){function e(){t.call(this),this.array_=[],arguments[0]instanceof vc&&this.addAll(arguments[0])}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.ensureCapacity=function(){},e.prototype.interfaces_=function(){return[t,vc]},e.prototype.add=function(t){return 1===arguments.length?this.array_.push(t):this.array_.splice(arguments[0],arguments[1]),!0},e.prototype.clear=function(){this.array_=[]},e.prototype.addAll=function(t){for(var e=t.iterator();e.hasNext();)this.add(e.next());return!0},e.prototype.set=function(t,e){var n=this.array_[t];return this.array_[t]=e,n},e.prototype.iterator=function(){return new Ic(this)},e.prototype.get=function(t){if(t<0||t>=this.size())throw new xc;return this.array_[t]},e.prototype.isEmpty=function(){return 0===this.array_.length},e.prototype.size=function(){return this.array_.length},e.prototype.toArray=function(){for(var t=[],e=0,n=this.array_.length;e<n;e++)t.push(this.array_[e]);return t},e.prototype.remove=function(t){for(var e=!1,n=0,r=this.array_.length;n<r;n++)if(this.array_[n]===t){this.array_.splice(n,1),e=!0;break}return e},e}(wc),Ic=function(t){function e(e){t.call(this),this.arrayList_=e,this.position_=0}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.next=function(){if(this.position_===this.arrayList_.size())throw new Pi;return this.arrayList_.get(this.position_++)},e.prototype.hasNext=function(){return this.position_<this.arrayList_.size()},e.prototype.set=function(t){return this.arrayList_.set(this.position_-1,t)},e.prototype.remove=function(){this.arrayList_.remove(this.arrayList_.get(this.position_))},e}(Ec),Nc=function(t){function e(){if(t.call(this),0===arguments.length);else if(1===arguments.length){var e=arguments[0];this.ensureCapacity(e.length),this.add(e,!0)}else if(2===arguments.length){var n=arguments[0],r=arguments[1];this.ensureCapacity(n.length),this.add(n,r)}}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={coordArrayType:{configurable:!0}};return n.coordArrayType.get=function(){return new Array(0).fill(null)},e.prototype.getCoordinate=function(t){return this.get(t)},e.prototype.addAll=function(){if(2===arguments.length){for(var e=arguments[0],n=arguments[1],r=!1,i=e.iterator();i.hasNext();)this.add(i.next(),n),r=!0;return r}return t.prototype.addAll.apply(this,arguments)},e.prototype.clone=function(){for(var e=t.prototype.clone.call(this),n=0;n<this.size();n++)e.add(n,this.get(n).copy());return e},e.prototype.toCoordinateArray=function(){return this.toArray(e.coordArrayType)},e.prototype.add=function(){if(1===arguments.length){var e=arguments[0];t.prototype.add.call(this,e)}else if(2===arguments.length){if(arguments[0]instanceof Array&&"boolean"==typeof arguments[1]){var n=arguments[0],r=arguments[1];return this.add(n,r,!0),!0}if(arguments[0]instanceof bu&&"boolean"==typeof arguments[1]){var i=arguments[0];if(!arguments[1]&&this.size()>=1){if(this.get(this.size()-1).equals2D(i))return null}t.prototype.add.call(this,i)}else if(arguments[0]instanceof Object&&"boolean"==typeof arguments[1]){var o=arguments[0],s=arguments[1];return this.add(o,s),!0}}else if(3===arguments.length){if("boolean"==typeof arguments[2]&&arguments[0]instanceof Array&&"boolean"==typeof arguments[1]){var a=arguments[0],u=arguments[1];if(arguments[2])for(var c=0;c<a.length;c++)this.add(a[c],u);else for(var h=a.length-1;h>=0;h--)this.add(a[h],u);return!0}if("boolean"==typeof arguments[2]&&Number.isInteger(arguments[0])&&arguments[1]instanceof bu){var l=arguments[0],p=arguments[1];if(!arguments[2]){var f=this.size();if(f>0){if(l>0){if(this.get(l-1).equals2D(p))return null}if(l<f){if(this.get(l).equals2D(p))return null}}}t.prototype.add.call(this,l,p)}}else if(4===arguments.length){var g=arguments[0],d=arguments[1],y=arguments[2],_=arguments[3],m=1;y>_&&(m=-1);for(var v=y;v!==_;v+=m)this.add(g[v],d);return!0}},e.prototype.closeRing=function(){this.size()>0&&this.add(new bu(this.get(0)),!1)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},Object.defineProperties(e,n),e}(bc),Cc=function(){},Sc={ForwardComparator:{configurable:!0},BidirectionalComparator:{configurable:!0},coordArrayType:{configurable:!0}};Sc.ForwardComparator.get=function(){return Mc},Sc.BidirectionalComparator.get=function(){return Lc},Sc.coordArrayType.get=function(){return new Array(0).fill(null)},Cc.prototype.interfaces_=function(){return[]},Cc.prototype.getClass=function(){return Cc},Cc.isRing=function(t){return!(t.length<4)&&!!t[0].equals2D(t[t.length-1])},Cc.ptNotInList=function(t,e){for(var n=0;n<t.length;n++){var r=t[n];if(Cc.indexOf(r,e)<0)return r}return null},Cc.scroll=function(t,e){var n=Cc.indexOf(e,t);if(n<0)return null;var r=new Array(t.length).fill(null);Xu.arraycopy(t,n,r,0,t.length-n),Xu.arraycopy(t,0,r,t.length-n,n),Xu.arraycopy(r,0,t,0,t.length)},Cc.equals=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1];if(t===e)return!0;if(null===t||null===e)return!1;if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!t[n].equals(e[n]))return!1;return!0}if(3===arguments.length){var r=arguments[0],i=arguments[1],o=arguments[2];if(r===i)return!0;if(null===r||null===i)return!1;if(r.length!==i.length)return!1;for(var s=0;s<r.length;s++)if(0!==o.compare(r[s],i[s]))return!1;return!0}},Cc.intersection=function(t,e){for(var n=new Nc,r=0;r<t.length;r++)e.intersects(t[r])&&n.add(t[r],!0);return n.toCoordinateArray()},Cc.hasRepeatedPoints=function(t){for(var e=1;e<t.length;e++)if(t[e-1].equals(t[e]))return!0;return!1},Cc.removeRepeatedPoints=function(t){if(!Cc.hasRepeatedPoints(t))return t;return new Nc(t,!1).toCoordinateArray()},Cc.reverse=function(t){for(var e=t.length-1,n=Math.trunc(e/2),r=0;r<=n;r++){var i=t[r];t[r]=t[e-r],t[e-r]=i}},Cc.removeNull=function(t){for(var e=0,n=0;n<t.length;n++)null!==t[n]&&e++;var r=new Array(e).fill(null);if(0===e)return r;for(var i=0,o=0;o<t.length;o++)null!==t[o]&&(r[i++]=t[o]);return r},Cc.copyDeep=function(){if(1===arguments.length){for(var t=arguments[0],e=new Array(t.length).fill(null),n=0;n<t.length;n++)e[n]=new bu(t[n]);return e}if(5===arguments.length)for(var r=arguments[0],i=arguments[1],o=arguments[2],s=arguments[3],a=arguments[4],u=0;u<a;u++)o[s+u]=new bu(r[i+u])},Cc.isEqualReversed=function(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=e[t.length-n-1];if(0!==r.compareTo(i))return!1}return!0},Cc.envelope=function(t){for(var e=new Yu,n=0;n<t.length;n++)e.expandToInclude(t[n]);return e},Cc.toCoordinateArray=function(t){return t.toArray(Cc.coordArrayType)},Cc.atLeastNCoordinatesOrNothing=function(t,e){return e.length>=t?e:[]},Cc.indexOf=function(t,e){for(var n=0;n<e.length;n++)if(t.equals(e[n]))return n;return-1},Cc.increasingDirection=function(t){for(var e=0;e<Math.trunc(t.length/2);e++){var n=t.length-1-e,r=t[e].compareTo(t[n]);if(0!==r)return r}return 1},Cc.compare=function(t,e){for(var n=0;n<t.length&&n<e.length;){var r=t[n].compareTo(e[n]);if(0!==r)return r;n++}return n<e.length?-1:n<t.length?1:0},Cc.minCoordinate=function(t){for(var e=null,n=0;n<t.length;n++)(null===e||e.compareTo(t[n])>0)&&(e=t[n]);return e},Cc.extract=function(t,e,n){e=Pu.clamp(e,0,t.length);var r=(n=Pu.clamp(n,-1,t.length))-e+1;n<0&&(r=0),e>=t.length&&(r=0),n<e&&(r=0);var i=new Array(r).fill(null);if(0===r)return i;for(var o=0,s=e;s<=n;s++)i[o++]=t[s];return i},Object.defineProperties(Cc,Sc);var Mc=function(){};Mc.prototype.compare=function(t,e){return Cc.compare(t,e)},Mc.prototype.interfaces_=function(){return[wu]},Mc.prototype.getClass=function(){return Mc};var Lc=function(){};Lc.prototype.compare=function(t,e){var n=t,r=e;if(n.length<r.length)return-1;if(n.length>r.length)return 1;if(0===n.length)return 0;var i=Cc.compare(n,r);return Cc.isEqualReversed(n,r)?0:i},Lc.prototype.OLDcompare=function(t,e){var n=t,r=e;if(n.length<r.length)return-1;if(n.length>r.length)return 1;if(0===n.length)return 0;for(var i=Cc.increasingDirection(n),o=Cc.increasingDirection(r),s=i>0?0:n.length-1,a=o>0?0:n.length-1,u=0;u<n.length;u++){var c=n[s].compareTo(r[a]);if(0!==c)return c;s+=i,a+=o}return 0},Lc.prototype.interfaces_=function(){return[wu]},Lc.prototype.getClass=function(){return Lc};var Pc=function(){};Pc.prototype.get=function(){},Pc.prototype.put=function(){},Pc.prototype.size=function(){},Pc.prototype.values=function(){},Pc.prototype.entrySet=function(){};var Oc=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Pc);(Oi.prototype=new Error).name="OperationNotSupported",(Ri.prototype=new vc).contains=function(){};var Rc=function(t){function e(){t.call(this),this.array_=[],arguments[0]instanceof vc&&this.addAll(arguments[0])}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.contains=function(t){for(var e=0,n=this.array_.length;e<n;e++){if(this.array_[e]===t)return!0}return!1},e.prototype.add=function(t){return!this.contains(t)&&(this.array_.push(t),!0)},e.prototype.addAll=function(t){for(var e=t.iterator();e.hasNext();)this.add(e.next());return!0},e.prototype.remove=function(t){throw new Error},e.prototype.size=function(){return this.array_.length},e.prototype.isEmpty=function(){return 0===this.array_.length},e.prototype.toArray=function(){for(var t=[],e=0,n=this.array_.length;e<n;e++)t.push(this.array_[e]);return t},e.prototype.iterator=function(){return new Tc(this)},e}(Ri),Tc=function(t){function e(e){t.call(this),this.hashSet_=e,this.position_=0}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.next=function(){if(this.position_===this.hashSet_.size())throw new Pi;return this.hashSet_.array_[this.position_++]},e.prototype.hasNext=function(){return this.position_<this.hashSet_.size()},e.prototype.remove=function(){throw new Oi},e}(Ec),Ac=0;(Gi.prototype=new Oc).get=function(t){for(var e=this.root_;null!==e;){var n=t.compareTo(e.key);if(n<0)e=e.left;else{if(!(n>0))return e.value;e=e.right}}return null},Gi.prototype.put=function(t,e){if(null===this.root_)return this.root_={key:t,value:e,left:null,right:null,parent:null,color:Ac,getValue:function(){return this.value},getKey:function(){return this.key}},this.size_=1,null;var n,r,i=this.root_;do{if(n=i,(r=t.compareTo(i.key))<0)i=i.left;else{if(!(r>0)){var o=i.value;return i.value=e,o}i=i.right}}while(null!==i);var s={key:t,left:null,right:null,value:e,parent:n,color:Ac,getValue:function(){return this.value},getKey:function(){return this.key}};return r<0?n.left=s:n.right=s,this.fixAfterInsertion(s),this.size_++,null},Gi.prototype.fixAfterInsertion=function(t){for(t.color=1;null!=t&&t!==this.root_&&1===t.parent.color;)if(Ai(t)===Fi(Ai(Ai(t)))){var e=qi(Ai(Ai(t)));1===Ti(e)?(Di(Ai(t),Ac),Di(e,Ac),Di(Ai(Ai(t)),1),t=Ai(Ai(t))):(t===qi(Ai(t))&&(t=Ai(t),this.rotateLeft(t)),Di(Ai(t),Ac),Di(Ai(Ai(t)),1),this.rotateRight(Ai(Ai(t))))}else{var n=Fi(Ai(Ai(t)));1===Ti(n)?(Di(Ai(t),Ac),Di(n,Ac),Di(Ai(Ai(t)),1),t=Ai(Ai(t))):(t===Fi(Ai(t))&&(t=Ai(t),this.rotateRight(t)),Di(Ai(t),Ac),Di(Ai(Ai(t)),1),this.rotateLeft(Ai(Ai(t))))}this.root_.color=Ac},Gi.prototype.values=function(){var t=new bc,e=this.getFirstEntry();if(null!==e)for(t.add(e.value);null!==(e=Gi.successor(e));)t.add(e.value);return t},Gi.prototype.entrySet=function(){var t=new Rc,e=this.getFirstEntry();if(null!==e)for(t.add(e);null!==(e=Gi.successor(e));)t.add(e);return t},Gi.prototype.rotateLeft=function(t){if(null!=t){var e=t.right;t.right=e.left,null!=e.left&&(e.left.parent=t),e.parent=t.parent,null===t.parent?this.root_=e:t.parent.left===t?t.parent.left=e:t.parent.right=e,e.left=t,t.parent=e}},Gi.prototype.rotateRight=function(t){if(null!=t){var e=t.left;t.left=e.right,null!=e.right&&(e.right.parent=t),e.parent=t.parent,null===t.parent?this.root_=e:t.parent.right===t?t.parent.right=e:t.parent.left=e,e.right=t,t.parent=e}},Gi.prototype.getFirstEntry=function(){var t=this.root_;if(null!=t)for(;null!=t.left;)t=t.left;return t},Gi.successor=function(t){if(null===t)return null;if(null!==t.right){for(var e=t.right;null!==e.left;)e=e.left;return e}for(var n=t.parent,r=t;null!==n&&r===n.right;)r=n,n=n.parent;return n},Gi.prototype.size=function(){return this.size_};var Dc=function(){};Dc.prototype.interfaces_=function(){return[]},Dc.prototype.getClass=function(){return Dc},Bi.prototype=new Ri,(ki.prototype=new Bi).contains=function(t){for(var e=0,n=this.array_.length;e<n;e++){if(0===this.array_[e].compareTo(t))return!0}return!1},ki.prototype.add=function(t){if(this.contains(t))return!1;for(var e=0,n=this.array_.length;e<n;e++){if(1===this.array_[e].compareTo(t))return this.array_.splice(e,0,t),!0}return this.array_.push(t),!0},ki.prototype.addAll=function(t){for(var e=t.iterator();e.hasNext();)this.add(e.next());return!0},ki.prototype.remove=function(t){throw new Oi},ki.prototype.size=function(){return this.array_.length},ki.prototype.isEmpty=function(){return 0===this.array_.length},ki.prototype.toArray=function(){for(var t=[],e=0,n=this.array_.length;e<n;e++)t.push(this.array_[e]);return t},ki.prototype.iterator=function(){return new Fc(this)};var Fc=function(t){this.treeSet_=t,this.position_=0};Fc.prototype.next=function(){if(this.position_===this.treeSet_.size())throw new Pi;return this.treeSet_.array_[this.position_++]},Fc.prototype.hasNext=function(){return this.position_<this.treeSet_.size()},Fc.prototype.remove=function(){throw new Oi};var qc=function(){};qc.sort=function(){var t,e,n,r,i=arguments[0];if(1===arguments.length)r=function(t,e){return t.compareTo(e)},i.sort(r);else if(2===arguments.length)n=arguments[1],r=function(t,e){return n.compare(t,e)},i.sort(r);else if(3===arguments.length){(e=i.slice(arguments[1],arguments[2])).sort();var o=i.slice(0,arguments[1]).concat(e,i.slice(arguments[2],i.length));for(i.splice(0,i.length),t=0;t<o.length;t++)i.push(o[t])}else if(4===arguments.length)for(e=i.slice(arguments[1],arguments[2]),n=arguments[3],r=function(t,e){return n.compare(t,e)},e.sort(r),o=i.slice(0,arguments[1]).concat(e,i.slice(arguments[2],i.length)),i.splice(0,i.length),t=0;t<o.length;t++)i.push(o[t])},qc.asList=function(t){for(var e=new bc,n=0,r=t.length;n<r;n++)e.add(t[n]);return e};var Gc=function(){},Bc={P:{configurable:!0},L:{configurable:!0},A:{configurable:!0},FALSE:{configurable:!0},TRUE:{configurable:!0},DONTCARE:{configurable:!0},SYM_FALSE:{configurable:!0},SYM_TRUE:{configurable:!0},SYM_DONTCARE:{configurable:!0},SYM_P:{configurable:!0},SYM_L:{configurable:!0},SYM_A:{configurable:!0}};Bc.P.get=function(){return 0},Bc.L.get=function(){return 1},Bc.A.get=function(){return 2},Bc.FALSE.get=function(){return-1},Bc.TRUE.get=function(){return-2},Bc.DONTCARE.get=function(){return-3},Bc.SYM_FALSE.get=function(){return"F"},Bc.SYM_TRUE.get=function(){return"T"},Bc.SYM_DONTCARE.get=function(){return"*"},Bc.SYM_P.get=function(){return"0"},Bc.SYM_L.get=function(){return"1"},Bc.SYM_A.get=function(){return"2"},Gc.prototype.interfaces_=function(){return[]},Gc.prototype.getClass=function(){return Gc},Gc.toDimensionSymbol=function(t){switch(t){case Gc.FALSE:return Gc.SYM_FALSE;case Gc.TRUE:return Gc.SYM_TRUE;case Gc.DONTCARE:return Gc.SYM_DONTCARE;case Gc.P:return Gc.SYM_P;case Gc.L:return Gc.SYM_L;case Gc.A:return Gc.SYM_A}throw new _u("Unknown dimension value: "+t)},Gc.toDimensionValue=function(t){switch(Au.toUpperCase(t)){case Gc.SYM_FALSE:return Gc.FALSE;case Gc.SYM_TRUE:return Gc.TRUE;case Gc.SYM_DONTCARE:return Gc.DONTCARE;case Gc.SYM_P:return Gc.P;case Gc.SYM_L:return Gc.L;case Gc.SYM_A:return Gc.A}throw new _u("Unknown dimension symbol: "+t)},Object.defineProperties(Gc,Bc);var kc=function(){};kc.prototype.filter=function(t){},kc.prototype.interfaces_=function(){return[]},kc.prototype.getClass=function(){return kc};var zc=function(){};zc.prototype.filter=function(t,e){},zc.prototype.isDone=function(){},zc.prototype.isGeometryChanged=function(){},zc.prototype.interfaces_=function(){return[]},zc.prototype.getClass=function(){return zc};var jc=function(t){function e(e,n){if(t.call(this,n),this._geometries=e||[],t.hasNullElements(this._geometries))throw new _u("geometries must not contain null elements")}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={serialVersionUID:{configurable:!0}};return e.prototype.computeEnvelopeInternal=function(){for(var t=new Yu,e=0;e<this._geometries.length;e++)t.expandToInclude(this._geometries[e].getEnvelopeInternal());return t},e.prototype.getGeometryN=function(t){return this._geometries[t]},e.prototype.getSortIndex=function(){return t.SORTINDEX_GEOMETRYCOLLECTION},e.prototype.getCoordinates=function(){for(var t=new Array(this.getNumPoints()).fill(null),e=-1,n=0;n<this._geometries.length;n++)for(var r=this._geometries[n].getCoordinates(),i=0;i<r.length;i++)t[++e]=r[i];return t},e.prototype.getArea=function(){for(var t=0,e=0;e<this._geometries.length;e++)t+=this._geometries[e].getArea();return t},e.prototype.equalsExact=function(){if(2===arguments.length){var e=arguments[0],n=arguments[1];if(!this.isEquivalentClass(e))return!1;var r=e;if(this._geometries.length!==r._geometries.length)return!1;for(var i=0;i<this._geometries.length;i++)if(!this._geometries[i].equalsExact(r._geometries[i],n))return!1;return!0}return t.prototype.equalsExact.apply(this,arguments)},e.prototype.normalize=function(){for(var t=0;t<this._geometries.length;t++)this._geometries[t].normalize();qc.sort(this._geometries)},e.prototype.getCoordinate=function(){return this.isEmpty()?null:this._geometries[0].getCoordinate()},e.prototype.getBoundaryDimension=function(){for(var t=Gc.FALSE,e=0;e<this._geometries.length;e++)t=Math.max(t,this._geometries[e].getBoundaryDimension());return t},e.prototype.getDimension=function(){for(var t=Gc.FALSE,e=0;e<this._geometries.length;e++)t=Math.max(t,this._geometries[e].getDimension());return t},e.prototype.getLength=function(){for(var t=0,e=0;e<this._geometries.length;e++)t+=this._geometries[e].getLength();return t},e.prototype.getNumPoints=function(){for(var t=0,e=0;e<this._geometries.length;e++)t+=this._geometries[e].getNumPoints();return t},e.prototype.getNumGeometries=function(){return this._geometries.length},e.prototype.reverse=function(){for(var t=this._geometries.length,e=new Array(t).fill(null),n=0;n<this._geometries.length;n++)e[n]=this._geometries[n].reverse();return this.getFactory().createGeometryCollection(e)},e.prototype.compareToSameClass=function(){if(1===arguments.length){var t=arguments[0],e=new ki(qc.asList(this._geometries)),n=new ki(qc.asList(t._geometries));return this.compare(e,n)}if(2===arguments.length){for(var r=arguments[0],i=arguments[1],o=r,s=this.getNumGeometries(),a=o.getNumGeometries(),u=0;u<s&&u<a;){var c=this.getGeometryN(u),h=o.getGeometryN(u),l=c.compareToSameClass(h,i);if(0!==l)return l;u++}return u<s?1:u<a?-1:0}},e.prototype.apply=function(){if(Lu(arguments[0],pc))for(var t=arguments[0],e=0;e<this._geometries.length;e++)this._geometries[e].apply(t);else if(Lu(arguments[0],zc)){var n=arguments[0];if(0===this._geometries.length)return null;for(var r=0;r<this._geometries.length&&(this._geometries[r].apply(n),!n.isDone());r++);n.isGeometryChanged()&&this.geometryChanged()}else if(Lu(arguments[0],kc)){var i=arguments[0];i.filter(this);for(var o=0;o<this._geometries.length;o++)this._geometries[o].apply(i)}else if(Lu(arguments[0],uc)){var s=arguments[0];s.filter(this);for(var a=0;a<this._geometries.length;a++)this._geometries[a].apply(s)}},e.prototype.getBoundary=function(){return this.checkNotGeometryCollection(this),tc.shouldNeverReachHere(),null},e.prototype.clone=function(){var e=t.prototype.clone.call(this);e._geometries=new Array(this._geometries.length).fill(null);for(var n=0;n<this._geometries.length;n++)e._geometries[n]=this._geometries[n].clone();return e},e.prototype.getGeometryType=function(){return"GeometryCollection"},e.prototype.copy=function(){for(var t=new Array(this._geometries.length).fill(null),n=0;n<t.length;n++)t[n]=this._geometries[n].copy();return new e(t,this._factory)},e.prototype.isEmpty=function(){for(var t=0;t<this._geometries.length;t++)if(!this._geometries[t].isEmpty())return!1;return!0},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},n.serialVersionUID.get=function(){return-0x4f07bcb1f857d800},Object.defineProperties(e,n),e}(cc),Xc=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={serialVersionUID:{configurable:!0}};return e.prototype.getSortIndex=function(){return cc.SORTINDEX_MULTILINESTRING},e.prototype.equalsExact=function(){if(2===arguments.length){var e=arguments[0],n=arguments[1];return!!this.isEquivalentClass(e)&&t.prototype.equalsExact.call(this,e,n)}return t.prototype.equalsExact.apply(this,arguments)},e.prototype.getBoundaryDimension=function(){return this.isClosed()?Gc.FALSE:0},e.prototype.isClosed=function(){if(this.isEmpty())return!1;for(var t=0;t<this._geometries.length;t++)if(!this._geometries[t].isClosed())return!1;return!0},e.prototype.getDimension=function(){return 1},e.prototype.reverse=function(){for(var t=this._geometries.length,e=new Array(t).fill(null),n=0;n<this._geometries.length;n++)e[t-1-n]=this._geometries[n].reverse();return this.getFactory().createMultiLineString(e)},e.prototype.getBoundary=function(){return new Uc(this).getBoundary()},e.prototype.getGeometryType=function(){return"MultiLineString"},e.prototype.copy=function(){for(var t=new Array(this._geometries.length).fill(null),n=0;n<t.length;n++)t[n]=this._geometries[n].copy();return new e(t,this._factory)},e.prototype.interfaces_=function(){return[Dc]},e.prototype.getClass=function(){return e},n.serialVersionUID.get=function(){return 0x7155d2ab4afa8000},Object.defineProperties(e,n),e}(jc),Uc=function(){if(this._geom=null,this._geomFact=null,this._bnRule=null,this._endpointMap=null,1===arguments.length){var t=arguments[0],e=fc.MOD2_BOUNDARY_RULE;this._geom=t,this._geomFact=t.getFactory(),this._bnRule=e}else if(2===arguments.length){var n=arguments[0],r=arguments[1];this._geom=n,this._geomFact=n.getFactory(),this._bnRule=r}};Uc.prototype.boundaryMultiLineString=function(t){if(this._geom.isEmpty())return this.getEmptyMultiPoint();var e=this.computeBoundaryCoordinates(t);return 1===e.length?this._geomFact.createPoint(e[0]):this._geomFact.createMultiPointFromCoords(e)},Uc.prototype.getBoundary=function(){return this._geom instanceof Jc?this.boundaryLineString(this._geom):this._geom instanceof Xc?this.boundaryMultiLineString(this._geom):this._geom.getBoundary()},Uc.prototype.boundaryLineString=function(t){if(this._geom.isEmpty())return this.getEmptyMultiPoint();if(t.isClosed()){return this._bnRule.isInBoundary(2)?t.getStartPoint():this._geomFact.createMultiPoint()}return this._geomFact.createMultiPoint([t.getStartPoint(),t.getEndPoint()])},Uc.prototype.getEmptyMultiPoint=function(){return this._geomFact.createMultiPoint()},Uc.prototype.computeBoundaryCoordinates=function(t){var e=new bc;this._endpointMap=new Gi;for(var n=0;n<t.getNumGeometries();n++){var r=t.getGeometryN(n);0!==r.getNumPoints()&&(this.addEndpoint(r.getCoordinateN(0)),this.addEndpoint(r.getCoordinateN(r.getNumPoints()-1)))}for(var i=this._endpointMap.entrySet().iterator();i.hasNext();){var o=i.next(),s=o.getValue().count;this._bnRule.isInBoundary(s)&&e.add(o.getKey())}return Cc.toCoordinateArray(e)},Uc.prototype.addEndpoint=function(t){var e=this._endpointMap.get(t);null===e&&(e=new Yc,this._endpointMap.put(t,e)),e.count++},Uc.prototype.interfaces_=function(){return[]},Uc.prototype.getClass=function(){return Uc},Uc.getBoundary=function(){if(1===arguments.length){var t=arguments[0];return new Uc(t).getBoundary()}if(2===arguments.length){var e=arguments[0],n=arguments[1];return new Uc(e,n).getBoundary()}};var Yc=function(){this.count=null};Yc.prototype.interfaces_=function(){return[]},Yc.prototype.getClass=function(){return Yc};var Vc=function(){},Hc={NEWLINE:{configurable:!0},SIMPLE_ORDINATE_FORMAT:{configurable:!0}};Vc.prototype.interfaces_=function(){return[]},Vc.prototype.getClass=function(){return Vc},Vc.chars=function(t,e){for(var n=new Array(e).fill(null),r=0;r<e;r++)n[r]=t;return String(n)},Vc.getStackTrace=function(){if(1===arguments.length){var t=arguments[0],e=new function(){},n=new function(){}(e);return t.printStackTrace(n),e.toString()}if(2===arguments.length){for(var r=arguments[0],i=arguments[1],o="",s=new function(){}(new function(){}(Vc.getStackTrace(r))),a=0;a<i;a++)try{o+=s.readLine()+Vc.NEWLINE}catch(t){if(!(t instanceof zi))throw t;tc.shouldNeverReachHere()}return o}},Vc.split=function(t,e){for(var n=e.length,r=new bc,i=""+t,o=i.indexOf(e);o>=0;){var s=i.substring(0,o);r.add(s),o=(i=i.substring(o+n)).indexOf(e)}i.length>0&&r.add(i);for(var a=new Array(r.size()).fill(null),u=0;u<a.length;u++)a[u]=r.get(u);return a},Vc.toString=function(){if(1===arguments.length){var t=arguments[0];return Vc.SIMPLE_ORDINATE_FORMAT.format(t)}},Vc.spaces=function(t){return Vc.chars(" ",t)},Hc.NEWLINE.get=function(){return Xu.getProperty("line.separator")},Hc.SIMPLE_ORDINATE_FORMAT.get=function(){return new function(){}("0.#")},Object.defineProperties(Vc,Hc);var Wc=function(){};Wc.prototype.interfaces_=function(){return[]},Wc.prototype.getClass=function(){return Wc},Wc.copyCoord=function(t,e,n,r){for(var i=Math.min(t.getDimension(),n.getDimension()),o=0;o<i;o++)n.setOrdinate(r,o,t.getOrdinate(e,o))},Wc.isRing=function(t){var e=t.size();return 0===e||!(e<=3)&&(t.getOrdinate(0,Bu.X)===t.getOrdinate(e-1,Bu.X)&&t.getOrdinate(0,Bu.Y)===t.getOrdinate(e-1,Bu.Y))},Wc.isEqual=function(t,e){var n=t.size();if(n!==e.size())return!1;for(var r=Math.min(t.getDimension(),e.getDimension()),i=0;i<n;i++)for(var o=0;o<r;o++){var s=t.getOrdinate(i,o),a=e.getOrdinate(i,o);if(t.getOrdinate(i,o)!==e.getOrdinate(i,o)&&(!mu.isNaN(s)||!mu.isNaN(a)))return!1}return!0},Wc.extend=function(t,e,n){var r=t.create(n,e.getDimension()),i=e.size();if(Wc.copy(e,0,r,0,i),i>0)for(var o=i;o<n;o++)Wc.copy(e,i-1,r,o,1);return r},Wc.reverse=function(t){for(var e=t.size()-1,n=Math.trunc(e/2),r=0;r<=n;r++)Wc.swap(t,r,e-r)},Wc.swap=function(t,e,n){if(e===n)return null;for(var r=0;r<t.getDimension();r++){var i=t.getOrdinate(e,r);t.setOrdinate(e,r,t.getOrdinate(n,r)),t.setOrdinate(n,r,i)}},Wc.copy=function(t,e,n,r,i){for(var o=0;o<i;o++)Wc.copyCoord(t,e+o,n,r+o)},Wc.toString=function(){if(1===arguments.length){var t=arguments[0],e=t.size();if(0===e)return"()";var n=t.getDimension(),r=new Ru;r.append("(");for(var i=0;i<e;i++){i>0&&r.append(" ");for(var o=0;o<n;o++)o>0&&r.append(","),r.append(Vc.toString(t.getOrdinate(i,o)))}return r.append(")"),r.toString()}},Wc.ensureValidRing=function(t,e){var n=e.size();if(0===n)return e;if(n<=3)return Wc.createClosedRing(t,e,4);return e.getOrdinate(0,Bu.X)===e.getOrdinate(n-1,Bu.X)&&e.getOrdinate(0,Bu.Y)===e.getOrdinate(n-1,Bu.Y)?e:Wc.createClosedRing(t,e,n+1)},Wc.createClosedRing=function(t,e,n){var r=t.create(n,e.getDimension()),i=e.size();Wc.copy(e,0,r,0,i);for(var o=i;o<n;o++)Wc.copy(e,0,r,o,1);return r};var Jc=function(t){function e(e,n){t.call(this,n),this._points=null,this.init(e)}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={serialVersionUID:{configurable:!0}};return e.prototype.computeEnvelopeInternal=function(){return this.isEmpty()?new Yu:this._points.expandEnvelope(new Yu)},e.prototype.isRing=function(){return this.isClosed()&&this.isSimple()},e.prototype.getSortIndex=function(){return t.SORTINDEX_LINESTRING},e.prototype.getCoordinates=function(){return this._points.toCoordinateArray()},e.prototype.equalsExact=function(){if(2===arguments.length){var e=arguments[0],n=arguments[1];if(!this.isEquivalentClass(e))return!1;var r=e;if(this._points.size()!==r._points.size())return!1;for(var i=0;i<this._points.size();i++)if(!this.equal(this._points.getCoordinate(i),r._points.getCoordinate(i),n))return!1;return!0}return t.prototype.equalsExact.apply(this,arguments)},e.prototype.normalize=function(){for(var t=0;t<Math.trunc(this._points.size()/2);t++){var e=this._points.size()-1-t;if(!this._points.getCoordinate(t).equals(this._points.getCoordinate(e)))return this._points.getCoordinate(t).compareTo(this._points.getCoordinate(e))>0&&Wc.reverse(this._points),null}},e.prototype.getCoordinate=function(){return this.isEmpty()?null:this._points.getCoordinate(0)},e.prototype.getBoundaryDimension=function(){return this.isClosed()?Gc.FALSE:0},e.prototype.isClosed=function(){return!this.isEmpty()&&this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints()-1))},e.prototype.getEndPoint=function(){return this.isEmpty()?null:this.getPointN(this.getNumPoints()-1)},e.prototype.getDimension=function(){return 1},e.prototype.getLength=function(){return sc.computeLength(this._points)},e.prototype.getNumPoints=function(){return this._points.size()},e.prototype.reverse=function(){var t=this._points.copy();Wc.reverse(t);return this.getFactory().createLineString(t)},e.prototype.compareToSameClass=function(){if(1===arguments.length){for(var t=arguments[0],e=0,n=0;e<this._points.size()&&n<t._points.size();){var r=this._points.getCoordinate(e).compareTo(t._points.getCoordinate(n));if(0!==r)return r;e++,n++}return e<this._points.size()?1:n<t._points.size()?-1:0}if(2===arguments.length){var i=arguments[0];return arguments[1].compare(this._points,i._points)}},e.prototype.apply=function(){if(Lu(arguments[0],pc))for(var t=arguments[0],e=0;e<this._points.size();e++)t.filter(this._points.getCoordinate(e));else if(Lu(arguments[0],zc)){var n=arguments[0];if(0===this._points.size())return null;for(var r=0;r<this._points.size()&&(n.filter(this._points,r),!n.isDone());r++);n.isGeometryChanged()&&this.geometryChanged()}else if(Lu(arguments[0],kc)){arguments[0].filter(this)}else if(Lu(arguments[0],uc)){arguments[0].filter(this)}},e.prototype.getBoundary=function(){return new Uc(this).getBoundary()},e.prototype.isEquivalentClass=function(t){return t instanceof e},e.prototype.clone=function(){var e=t.prototype.clone.call(this);return e._points=this._points.clone(),e},e.prototype.getCoordinateN=function(t){return this._points.getCoordinate(t)},e.prototype.getGeometryType=function(){return"LineString"},e.prototype.copy=function(){return new e(this._points.copy(),this._factory)},e.prototype.getCoordinateSequence=function(){return this._points},e.prototype.isEmpty=function(){return 0===this._points.size()},e.prototype.init=function(t){if(null===t&&(t=this.getFactory().getCoordinateSequenceFactory().create([])),1===t.size())throw new _u("Invalid number of points in LineString (found "+t.size()+" - must be 0 or >= 2)");this._points=t},e.prototype.isCoordinate=function(t){for(var e=0;e<this._points.size();e++)if(this._points.getCoordinate(e).equals(t))return!0;return!1},e.prototype.getStartPoint=function(){return this.isEmpty()?null:this.getPointN(0)},e.prototype.getPointN=function(t){return this.getFactory().createPoint(this._points.getCoordinate(t))},e.prototype.interfaces_=function(){return[Dc]},e.prototype.getClass=function(){return e},n.serialVersionUID.get=function(){return 0x2b2b51ba435c8e00},Object.defineProperties(e,n),e}(cc),Zc=function(){};Zc.prototype.interfaces_=function(){return[]},Zc.prototype.getClass=function(){return Zc};var Kc=function(t){function e(e,n){t.call(this,n),this._coordinates=e||null,this.init(this._coordinates)}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={serialVersionUID:{configurable:!0}};return e.prototype.computeEnvelopeInternal=function(){if(this.isEmpty())return new Yu;var t=new Yu;return t.expandToInclude(this._coordinates.getX(0),this._coordinates.getY(0)),t},e.prototype.getSortIndex=function(){return t.SORTINDEX_POINT},e.prototype.getCoordinates=function(){return this.isEmpty()?[]:[this.getCoordinate()]},e.prototype.equalsExact=function(){if(2===arguments.length){var e=arguments[0],n=arguments[1];return!!this.isEquivalentClass(e)&&(!(!this.isEmpty()||!e.isEmpty())||this.isEmpty()===e.isEmpty()&&this.equal(e.getCoordinate(),this.getCoordinate(),n))}return t.prototype.equalsExact.apply(this,arguments)},e.prototype.normalize=function(){},e.prototype.getCoordinate=function(){return 0!==this._coordinates.size()?this._coordinates.getCoordinate(0):null},e.prototype.getBoundaryDimension=function(){return Gc.FALSE},e.prototype.getDimension=function(){return 0},e.prototype.getNumPoints=function(){return this.isEmpty()?0:1},e.prototype.reverse=function(){return this.copy()},e.prototype.getX=function(){if(null===this.getCoordinate())throw new Error("getX called on empty Point");return this.getCoordinate().x},e.prototype.compareToSameClass=function(){if(1===arguments.length){var t=arguments[0];return this.getCoordinate().compareTo(t.getCoordinate())}if(2===arguments.length){var e=arguments[0];return arguments[1].compare(this._coordinates,e._coordinates)}},e.prototype.apply=function(){if(Lu(arguments[0],pc)){var t=arguments[0];if(this.isEmpty())return null;t.filter(this.getCoordinate())}else if(Lu(arguments[0],zc)){var e=arguments[0];if(this.isEmpty())return null;e.filter(this._coordinates,0),e.isGeometryChanged()&&this.geometryChanged()}else if(Lu(arguments[0],kc)){arguments[0].filter(this)}else if(Lu(arguments[0],uc)){arguments[0].filter(this)}},e.prototype.getBoundary=function(){return this.getFactory().createGeometryCollection(null)},e.prototype.clone=function(){var e=t.prototype.clone.call(this);return e._coordinates=this._coordinates.clone(),e},e.prototype.getGeometryType=function(){return"Point"},e.prototype.copy=function(){return new e(this._coordinates.copy(),this._factory)},e.prototype.getCoordinateSequence=function(){return this._coordinates},e.prototype.getY=function(){if(null===this.getCoordinate())throw new Error("getY called on empty Point");return this.getCoordinate().y},e.prototype.isEmpty=function(){return 0===this._coordinates.size()},e.prototype.init=function(t){null===t&&(t=this.getFactory().getCoordinateSequenceFactory().create([])),tc.isTrue(t.size()<=1),this._coordinates=t},e.prototype.isSimple=function(){return!0},e.prototype.interfaces_=function(){return[Zc]},e.prototype.getClass=function(){return e},n.serialVersionUID.get=function(){return 0x44077bad161cbc00},Object.defineProperties(e,n),e}(cc),Qc=function(){};Qc.prototype.interfaces_=function(){return[]},Qc.prototype.getClass=function(){return Qc};var $c=function(t){function e(e,n,r){if(t.call(this,r),this._shell=null,this._holes=null,null===e&&(e=this.getFactory().createLinearRing()),null===n&&(n=[]),t.hasNullElements(n))throw new _u("holes must not contain null elements");if(e.isEmpty()&&t.hasNonEmptyElements(n))throw new _u("shell is empty but holes are not");this._shell=e,this._holes=n}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={serialVersionUID:{configurable:!0}};return e.prototype.computeEnvelopeInternal=function(){return this._shell.getEnvelopeInternal()},e.prototype.getSortIndex=function(){return t.SORTINDEX_POLYGON},e.prototype.getCoordinates=function(){if(this.isEmpty())return[];for(var t=new Array(this.getNumPoints()).fill(null),e=-1,n=this._shell.getCoordinates(),r=0;r<n.length;r++)t[++e]=n[r];for(var i=0;i<this._holes.length;i++)for(var o=this._holes[i].getCoordinates(),s=0;s<o.length;s++)t[++e]=o[s];return t},e.prototype.getArea=function(){var t=0;t+=Math.abs(sc.signedArea(this._shell.getCoordinateSequence()));for(var e=0;e<this._holes.length;e++)t-=Math.abs(sc.signedArea(this._holes[e].getCoordinateSequence()));return t},e.prototype.isRectangle=function(){if(0!==this.getNumInteriorRing())return!1;if(null===this._shell)return!1;if(5!==this._shell.getNumPoints())return!1;for(var t=this._shell.getCoordinateSequence(),e=this.getEnvelopeInternal(),n=0;n<5;n++){var r=t.getX(n);if(r!==e.getMinX()&&r!==e.getMaxX())return!1;var i=t.getY(n);if(i!==e.getMinY()&&i!==e.getMaxY())return!1}for(var o=t.getX(0),s=t.getY(0),a=1;a<=4;a++){var u=t.getX(a),c=t.getY(a);if(u!==o===(c!==s))return!1;o=u,s=c}return!0},e.prototype.equalsExact=function(){if(2===arguments.length){var e=arguments[0],n=arguments[1];if(!this.isEquivalentClass(e))return!1;var r=e,i=this._shell,o=r._shell;if(!i.equalsExact(o,n))return!1;if(this._holes.length!==r._holes.length)return!1;for(var s=0;s<this._holes.length;s++)if(!this._holes[s].equalsExact(r._holes[s],n))return!1;return!0}return t.prototype.equalsExact.apply(this,arguments)},e.prototype.normalize=function(){if(0===arguments.length){this.normalize(this._shell,!0);for(var t=0;t<this._holes.length;t++)this.normalize(this._holes[t],!1);qc.sort(this._holes)}else if(2===arguments.length){var e=arguments[0],n=arguments[1];if(e.isEmpty())return null;var r=new Array(e.getCoordinates().length-1).fill(null);Xu.arraycopy(e.getCoordinates(),0,r,0,r.length);var i=Cc.minCoordinate(e.getCoordinates());Cc.scroll(r,i),Xu.arraycopy(r,0,e.getCoordinates(),0,r.length),e.getCoordinates()[r.length]=r[0],sc.isCCW(e.getCoordinates())===n&&Cc.reverse(e.getCoordinates())}},e.prototype.getCoordinate=function(){return this._shell.getCoordinate()},e.prototype.getNumInteriorRing=function(){return this._holes.length},e.prototype.getBoundaryDimension=function(){return 1},e.prototype.getDimension=function(){return 2},e.prototype.getLength=function(){var t=0;t+=this._shell.getLength();for(var e=0;e<this._holes.length;e++)t+=this._holes[e].getLength();return t},e.prototype.getNumPoints=function(){for(var t=this._shell.getNumPoints(),e=0;e<this._holes.length;e++)t+=this._holes[e].getNumPoints();return t},e.prototype.reverse=function(){var t=this.copy();t._shell=this._shell.copy().reverse(),t._holes=new Array(this._holes.length).fill(null);for(var e=0;e<this._holes.length;e++)t._holes[e]=this._holes[e].copy().reverse();return t},e.prototype.convexHull=function(){return this.getExteriorRing().convexHull()},e.prototype.compareToSameClass=function(){if(1===arguments.length){var t=arguments[0],e=this._shell,n=t._shell;return e.compareToSameClass(n)}if(2===arguments.length){var r=arguments[0],i=arguments[1],o=r,s=this._shell,a=o._shell,u=s.compareToSameClass(a,i);if(0!==u)return u;for(var c=this.getNumInteriorRing(),h=o.getNumInteriorRing(),l=0;l<c&&l<h;){var p=this.getInteriorRingN(l),f=o.getInteriorRingN(l),g=p.compareToSameClass(f,i);if(0!==g)return g;l++}return l<c?1:l<h?-1:0}},e.prototype.apply=function(t){if(Lu(t,pc)){this._shell.apply(t);for(var e=0;e<this._holes.length;e++)this._holes[e].apply(t)}else if(Lu(t,zc)){if(this._shell.apply(t),!t.isDone())for(var n=0;n<this._holes.length&&(this._holes[n].apply(t),!t.isDone());n++);t.isGeometryChanged()&&this.geometryChanged()}else if(Lu(t,kc))t.filter(this);else if(Lu(t,uc)){t.filter(this),this._shell.apply(t);for(var r=0;r<this._holes.length;r++)this._holes[r].apply(t)}},e.prototype.getBoundary=function(){if(this.isEmpty())return this.getFactory().createMultiLineString();var t=new Array(this._holes.length+1).fill(null);t[0]=this._shell;for(var e=0;e<this._holes.length;e++)t[e+1]=this._holes[e];return t.length<=1?this.getFactory().createLinearRing(t[0].getCoordinateSequence()):this.getFactory().createMultiLineString(t)},e.prototype.clone=function(){var e=t.prototype.clone.call(this);e._shell=this._shell.clone(),e._holes=new Array(this._holes.length).fill(null);for(var n=0;n<this._holes.length;n++)e._holes[n]=this._holes[n].clone();return e},e.prototype.getGeometryType=function(){return"Polygon"},e.prototype.copy=function(){for(var t=this._shell.copy(),n=new Array(this._holes.length).fill(null),r=0;r<n.length;r++)n[r]=this._holes[r].copy();return new e(t,n,this._factory)},e.prototype.getExteriorRing=function(){return this._shell},e.prototype.isEmpty=function(){return this._shell.isEmpty()},e.prototype.getInteriorRingN=function(t){return this._holes[t]},e.prototype.interfaces_=function(){return[Qc]},e.prototype.getClass=function(){return e},n.serialVersionUID.get=function(){return-0x307ffefd8dc97200},Object.defineProperties(e,n),e}(cc),th=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={serialVersionUID:{configurable:!0}};return e.prototype.getSortIndex=function(){return cc.SORTINDEX_MULTIPOINT},e.prototype.isValid=function(){return!0},e.prototype.equalsExact=function(){if(2===arguments.length){var e=arguments[0],n=arguments[1];return!!this.isEquivalentClass(e)&&t.prototype.equalsExact.call(this,e,n)}return t.prototype.equalsExact.apply(this,arguments)},e.prototype.getCoordinate=function(){if(1===arguments.length){var e=arguments[0];return this._geometries[e].getCoordinate()}return t.prototype.getCoordinate.apply(this,arguments)},e.prototype.getBoundaryDimension=function(){return Gc.FALSE},e.prototype.getDimension=function(){return 0},e.prototype.getBoundary=function(){return this.getFactory().createGeometryCollection(null)},e.prototype.getGeometryType=function(){return"MultiPoint"},e.prototype.copy=function(){for(var t=new Array(this._geometries.length).fill(null),n=0;n<t.length;n++)t[n]=this._geometries[n].copy();return new e(t,this._factory)},e.prototype.interfaces_=function(){return[Zc]},e.prototype.getClass=function(){return e},n.serialVersionUID.get=function(){return-0x6fb1ed4162e0fc00},Object.defineProperties(e,n),e}(jc),eh=function(t){function e(e,n){e instanceof bu&&n instanceof _h&&(e=n.getCoordinateSequenceFactory().create(e)),t.call(this,e,n),this.validateConstruction()}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={MINIMUM_VALID_SIZE:{configurable:!0},serialVersionUID:{configurable:!0}};return e.prototype.getSortIndex=function(){return cc.SORTINDEX_LINEARRING},e.prototype.getBoundaryDimension=function(){return Gc.FALSE},e.prototype.isClosed=function(){return!!this.isEmpty()||t.prototype.isClosed.call(this)},e.prototype.reverse=function(){var t=this._points.copy();Wc.reverse(t);return this.getFactory().createLinearRing(t)},e.prototype.validateConstruction=function(){if(!this.isEmpty()&&!t.prototype.isClosed.call(this))throw new _u("Points of LinearRing do not form a closed linestring");if(this.getCoordinateSequence().size()>=1&&this.getCoordinateSequence().size()<e.MINIMUM_VALID_SIZE)throw new _u("Invalid number of points in LinearRing (found "+this.getCoordinateSequence().size()+" - must be 0 or >= 4)")},e.prototype.getGeometryType=function(){return"LinearRing"},e.prototype.copy=function(){return new e(this._points.copy(),this._factory)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},n.MINIMUM_VALID_SIZE.get=function(){return 4},n.serialVersionUID.get=function(){return-0x3b229e262367a600},Object.defineProperties(e,n),e}(Jc),nh=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={serialVersionUID:{configurable:!0}};return e.prototype.getSortIndex=function(){return cc.SORTINDEX_MULTIPOLYGON},e.prototype.equalsExact=function(){if(2===arguments.length){var e=arguments[0],n=arguments[1];return!!this.isEquivalentClass(e)&&t.prototype.equalsExact.call(this,e,n)}return t.prototype.equalsExact.apply(this,arguments)},e.prototype.getBoundaryDimension=function(){return 1},e.prototype.getDimension=function(){return 2},e.prototype.reverse=function(){for(var t=this._geometries.length,e=new Array(t).fill(null),n=0;n<this._geometries.length;n++)e[n]=this._geometries[n].reverse();return this.getFactory().createMultiPolygon(e)},e.prototype.getBoundary=function(){if(this.isEmpty())return this.getFactory().createMultiLineString();for(var t=new bc,e=0;e<this._geometries.length;e++)for(var n=this._geometries[e].getBoundary(),r=0;r<n.getNumGeometries();r++)t.add(n.getGeometryN(r));var i=new Array(t.size()).fill(null);return this.getFactory().createMultiLineString(t.toArray(i))},e.prototype.getGeometryType=function(){return"MultiPolygon"},e.prototype.copy=function(){for(var t=new Array(this._geometries.length).fill(null),n=0;n<t.length;n++)t[n]=this._geometries[n].copy();return new e(t,this._factory)},e.prototype.interfaces_=function(){return[Qc]},e.prototype.getClass=function(){return e},n.serialVersionUID.get=function(){return-0x7a5aa1369171980},Object.defineProperties(e,n),e}(jc),rh=function(t){this._factory=t||null,this._isUserDataCopied=!1},ih={NoOpGeometryOperation:{configurable:!0},CoordinateOperation:{configurable:!0},CoordinateSequenceOperation:{configurable:!0}};rh.prototype.setCopyUserData=function(t){this._isUserDataCopied=t},rh.prototype.edit=function(t,e){if(null===t)return null;var n=this.editInternal(t,e);return this._isUserDataCopied&&n.setUserData(t.getUserData()),n},rh.prototype.editInternal=function(t,e){return null===this._factory&&(this._factory=t.getFactory()),t instanceof jc?this.editGeometryCollection(t,e):t instanceof $c?this.editPolygon(t,e):t instanceof Kc?e.edit(t,this._factory):t instanceof Jc?e.edit(t,this._factory):(tc.shouldNeverReachHere("Unsupported Geometry class: "+t.getClass().getName()),null)},rh.prototype.editGeometryCollection=function(t,e){for(var n=e.edit(t,this._factory),r=new bc,i=0;i<n.getNumGeometries();i++){var o=this.edit(n.getGeometryN(i),e);null===o||o.isEmpty()||r.add(o)}return n.getClass()===th?this._factory.createMultiPoint(r.toArray([])):n.getClass()===Xc?this._factory.createMultiLineString(r.toArray([])):n.getClass()===nh?this._factory.createMultiPolygon(r.toArray([])):this._factory.createGeometryCollection(r.toArray([]))},rh.prototype.editPolygon=function(t,e){var n=e.edit(t,this._factory);if(null===n&&(n=this._factory.createPolygon(null)),n.isEmpty())return n;var r=this.edit(n.getExteriorRing(),e);if(null===r||r.isEmpty())return this._factory.createPolygon();for(var i=new bc,o=0;o<n.getNumInteriorRing();o++){var s=this.edit(n.getInteriorRingN(o),e);null===s||s.isEmpty()||i.add(s)}return this._factory.createPolygon(r,i.toArray([]))},rh.prototype.interfaces_=function(){return[]},rh.prototype.getClass=function(){return rh},rh.GeometryEditorOperation=function(){},ih.NoOpGeometryOperation.get=function(){return oh},ih.CoordinateOperation.get=function(){return sh},ih.CoordinateSequenceOperation.get=function(){return ah},Object.defineProperties(rh,ih);var oh=function(){};oh.prototype.edit=function(t,e){return t},oh.prototype.interfaces_=function(){return[rh.GeometryEditorOperation]},oh.prototype.getClass=function(){return oh};var sh=function(){};sh.prototype.edit=function(t,e){var n=this.editCoordinates(t.getCoordinates(),t);return null===n?t:t instanceof eh?e.createLinearRing(n):t instanceof Jc?e.createLineString(n):t instanceof Kc?n.length>0?e.createPoint(n[0]):e.createPoint():t},sh.prototype.interfaces_=function(){return[rh.GeometryEditorOperation]},sh.prototype.getClass=function(){return sh};var ah=function(){};ah.prototype.edit=function(t,e){return t instanceof eh?e.createLinearRing(this.edit(t.getCoordinateSequence(),t)):t instanceof Jc?e.createLineString(this.edit(t.getCoordinateSequence(),t)):t instanceof Kc?e.createPoint(this.edit(t.getCoordinateSequence(),t)):t},ah.prototype.interfaces_=function(){return[rh.GeometryEditorOperation]},ah.prototype.getClass=function(){return ah};var uh=function(){if(this._dimension=3,this._coordinates=null,1===arguments.length){if(arguments[0]instanceof Array)this._coordinates=arguments[0],this._dimension=3;else if(Number.isInteger(arguments[0])){var t=arguments[0];this._coordinates=new Array(t).fill(null);for(var e=0;e<t;e++)this._coordinates[e]=new bu}else if(Lu(arguments[0],Bu)){var n=arguments[0];if(null===n)return this._coordinates=new Array(0).fill(null),null;this._dimension=n.getDimension(),this._coordinates=new Array(n.size()).fill(null);for(var r=0;r<this._coordinates.length;r++)this._coordinates[r]=n.getCoordinateCopy(r)}}else if(2===arguments.length)if(arguments[0]instanceof Array&&Number.isInteger(arguments[1])){var i=arguments[0],o=arguments[1];this._coordinates=i,this._dimension=o,null===i&&(this._coordinates=new Array(0).fill(null))}else if(Number.isInteger(arguments[0])&&Number.isInteger(arguments[1])){var s=arguments[0],a=arguments[1];this._coordinates=new Array(s).fill(null),this._dimension=a;for(var u=0;u<s;u++)this._coordinates[u]=new bu}},ch={serialVersionUID:{configurable:!0}};uh.prototype.setOrdinate=function(t,e,n){switch(e){case Bu.X:this._coordinates[t].x=n;break;case Bu.Y:this._coordinates[t].y=n;break;case Bu.Z:this._coordinates[t].z=n;break;default:throw new _u("invalid ordinateIndex")}},uh.prototype.size=function(){return this._coordinates.length},uh.prototype.getOrdinate=function(t,e){switch(e){case Bu.X:return this._coordinates[t].x;case Bu.Y:return this._coordinates[t].y;case Bu.Z:return this._coordinates[t].z}return mu.NaN},uh.prototype.getCoordinate=function(){if(1===arguments.length){var t=arguments[0];return this._coordinates[t]}if(2===arguments.length){var e=arguments[0],n=arguments[1];n.x=this._coordinates[e].x,n.y=this._coordinates[e].y,n.z=this._coordinates[e].z}},uh.prototype.getCoordinateCopy=function(t){return new bu(this._coordinates[t])},uh.prototype.getDimension=function(){return this._dimension},uh.prototype.getX=function(t){return this._coordinates[t].x},uh.prototype.clone=function(){for(var t=new Array(this.size()).fill(null),e=0;e<this._coordinates.length;e++)t[e]=this._coordinates[e].clone();return new uh(t,this._dimension)},uh.prototype.expandEnvelope=function(t){for(var e=0;e<this._coordinates.length;e++)t.expandToInclude(this._coordinates[e]);return t},uh.prototype.copy=function(){for(var t=new Array(this.size()).fill(null),e=0;e<this._coordinates.length;e++)t[e]=this._coordinates[e].copy();return new uh(t,this._dimension)},uh.prototype.toString=function(){if(this._coordinates.length>0){var t=new Ru(17*this._coordinates.length);t.append("("),t.append(this._coordinates[0]);for(var e=1;e<this._coordinates.length;e++)t.append(", "),t.append(this._coordinates[e]);return t.append(")"),t.toString()}return"()"},uh.prototype.getY=function(t){return this._coordinates[t].y},uh.prototype.toCoordinateArray=function(){return this._coordinates},uh.prototype.interfaces_=function(){return[Bu,Li]},uh.prototype.getClass=function(){return uh},ch.serialVersionUID.get=function(){return-0xcb44a778db18e00},Object.defineProperties(uh,ch);var hh=function(){},lh={serialVersionUID:{configurable:!0},instanceObject:{configurable:!0}};hh.prototype.readResolve=function(){return hh.instance()},hh.prototype.create=function(){if(1===arguments.length){if(arguments[0]instanceof Array){var t=arguments[0];return new uh(t)}if(Lu(arguments[0],Bu)){var e=arguments[0];return new uh(e)}}else if(2===arguments.length){var n=arguments[0],r=arguments[1];return r>3&&(r=3),r<2?new uh(n):new uh(n,r)}},hh.prototype.interfaces_=function(){return[Cu,Li]},hh.prototype.getClass=function(){return hh},hh.instance=function(){return hh.instanceObject},lh.serialVersionUID.get=function(){return-0x38e49fa6cf6f2e00},lh.instanceObject.get=function(){return new hh},Object.defineProperties(hh,lh);var ph=function(t){function e(){t.call(this),this.map_=new Map}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.get=function(t){return this.map_.get(t)||null},e.prototype.put=function(t,e){return this.map_.set(t,e),e},e.prototype.values=function(){for(var t=new bc,e=this.map_.values(),n=e.next();!n.done;)t.add(n.value),n=e.next();return t},e.prototype.entrySet=function(){var t=new Rc;return this.map_.entries().forEach(function(e){return t.add(e)}),t},e.prototype.size=function(){return this.map_.size()},e}(Pc),fh=function t(){if(this._modelType=null,this._scale=null,0===arguments.length)this._modelType=t.FLOATING;else if(1===arguments.length)if(arguments[0]instanceof dh){var e=arguments[0];this._modelType=e,e===t.FIXED&&this.setScale(1)}else if("number"==typeof arguments[0]){var n=arguments[0];this._modelType=t.FIXED,this.setScale(n)}else if(arguments[0]instanceof t){var r=arguments[0];this._modelType=r._modelType,this._scale=r._scale}},gh={serialVersionUID:{configurable:!0},maximumPreciseValue:{configurable:!0}};fh.prototype.equals=function(t){if(!(t instanceof fh))return!1;var e=t;return this._modelType===e._modelType&&this._scale===e._scale},fh.prototype.compareTo=function(t){var e=t,n=this.getMaximumSignificantDigits(),r=e.getMaximumSignificantDigits();return new Tu(n).compareTo(new Tu(r))},fh.prototype.getScale=function(){return this._scale},fh.prototype.isFloating=function(){return this._modelType===fh.FLOATING||this._modelType===fh.FLOATING_SINGLE},fh.prototype.getType=function(){return this._modelType},fh.prototype.toString=function(){var t="UNKNOWN";return this._modelType===fh.FLOATING?t="Floating":this._modelType===fh.FLOATING_SINGLE?t="Floating-Single":this._modelType===fh.FIXED&&(t="Fixed (Scale="+this.getScale()+")"),t},fh.prototype.makePrecise=function(){if("number"==typeof arguments[0]){var t=arguments[0];if(mu.isNaN(t))return t;if(this._modelType===fh.FLOATING_SINGLE){return t}return this._modelType===fh.FIXED?Math.round(t*this._scale)/this._scale:t}if(arguments[0]instanceof bu){var e=arguments[0];if(this._modelType===fh.FLOATING)return null;e.x=this.makePrecise(e.x),e.y=this.makePrecise(e.y)}},fh.prototype.getMaximumSignificantDigits=function(){var t=16;return this._modelType===fh.FLOATING?t=16:this._modelType===fh.FLOATING_SINGLE?t=6:this._modelType===fh.FIXED&&(t=1+Math.trunc(Math.ceil(Math.log(this.getScale())/Math.log(10)))),t},fh.prototype.setScale=function(t){this._scale=Math.abs(t)},fh.prototype.interfaces_=function(){return[Li,xu]},fh.prototype.getClass=function(){return fh},fh.mostPrecise=function(t,e){return t.compareTo(e)>=0?t:e},gh.serialVersionUID.get=function(){return 0x6bee6404e9a25c00},gh.maximumPreciseValue.get=function(){return 9007199254740992},Object.defineProperties(fh,gh);var dh=function t(e){this._name=e||null,t.nameToTypeMap.put(e,this)},yh={serialVersionUID:{configurable:!0},nameToTypeMap:{configurable:!0}};dh.prototype.readResolve=function(){return dh.nameToTypeMap.get(this._name)},dh.prototype.toString=function(){return this._name},dh.prototype.interfaces_=function(){return[Li]},dh.prototype.getClass=function(){return dh},yh.serialVersionUID.get=function(){return-552860263173159e4},yh.nameToTypeMap.get=function(){return new ph},Object.defineProperties(dh,yh),fh.Type=dh,fh.FIXED=new dh("FIXED"),fh.FLOATING=new dh("FLOATING"),fh.FLOATING_SINGLE=new dh("FLOATING SINGLE");var _h=function t(){this._precisionModel=new fh,this._SRID=0,this._coordinateSequenceFactory=t.getDefaultCoordinateSequenceFactory(),0===arguments.length||(1===arguments.length?Lu(arguments[0],Cu)?this._coordinateSequenceFactory=arguments[0]:arguments[0]instanceof fh&&(this._precisionModel=arguments[0]):2===arguments.length?(this._precisionModel=arguments[0],this._SRID=arguments[1]):3===arguments.length&&(this._precisionModel=arguments[0],this._SRID=arguments[1],this._coordinateSequenceFactory=arguments[2]))},mh={serialVersionUID:{configurable:!0}};_h.prototype.toGeometry=function(t){return t.isNull()?this.createPoint(null):t.getMinX()===t.getMaxX()&&t.getMinY()===t.getMaxY()?this.createPoint(new bu(t.getMinX(),t.getMinY())):t.getMinX()===t.getMaxX()||t.getMinY()===t.getMaxY()?this.createLineString([new bu(t.getMinX(),t.getMinY()),new bu(t.getMaxX(),t.getMaxY())]):this.createPolygon(this.createLinearRing([new bu(t.getMinX(),t.getMinY()),new bu(t.getMinX(),t.getMaxY()),new bu(t.getMaxX(),t.getMaxY()),new bu(t.getMaxX(),t.getMinY()),new bu(t.getMinX(),t.getMinY())]),null)},_h.prototype.createLineString=function(t){return t?t instanceof Array?new Jc(this.getCoordinateSequenceFactory().create(t),this):Lu(t,Bu)?new Jc(t,this):void 0:new Jc(this.getCoordinateSequenceFactory().create([]),this)},_h.prototype.createMultiLineString=function(){if(0===arguments.length)return new Xc(null,this);if(1===arguments.length){var t=arguments[0];return new Xc(t,this)}},_h.prototype.buildGeometry=function(t){for(var e=null,n=!1,r=!1,i=t.iterator();i.hasNext();){var o=i.next(),s=o.getClass();null===e&&(e=s),s!==e&&(n=!0),o.isGeometryCollectionOrDerived()&&(r=!0)}if(null===e)return this.createGeometryCollection();if(n||r)return this.createGeometryCollection(_h.toGeometryArray(t));var a=t.iterator().next();if(t.size()>1){if(a instanceof $c)return this.createMultiPolygon(_h.toPolygonArray(t));if(a instanceof Jc)return this.createMultiLineString(_h.toLineStringArray(t));if(a instanceof Kc)return this.createMultiPoint(_h.toPointArray(t));tc.shouldNeverReachHere("Unhandled class: "+a.getClass().getName())}return a},_h.prototype.createMultiPointFromCoords=function(t){return this.createMultiPoint(null!==t?this.getCoordinateSequenceFactory().create(t):null)},_h.prototype.createPoint=function(){if(0===arguments.length)return this.createPoint(this.getCoordinateSequenceFactory().create([]));if(1===arguments.length){if(arguments[0]instanceof bu){var t=arguments[0];return this.createPoint(null!==t?this.getCoordinateSequenceFactory().create([t]):null)}if(Lu(arguments[0],Bu)){var e=arguments[0];return new Kc(e,this)}}},_h.prototype.getCoordinateSequenceFactory=function(){return this._coordinateSequenceFactory},_h.prototype.createPolygon=function(){if(0===arguments.length)return new $c(null,null,this);if(1===arguments.length){if(Lu(arguments[0],Bu)){var t=arguments[0];return this.createPolygon(this.createLinearRing(t))}if(arguments[0]instanceof Array){var e=arguments[0];return this.createPolygon(this.createLinearRing(e))}if(arguments[0]instanceof eh){var n=arguments[0];return this.createPolygon(n,null)}}else if(2===arguments.length){var r=arguments[0],i=arguments[1];return new $c(r,i,this)}},_h.prototype.getSRID=function(){return this._SRID},_h.prototype.createGeometryCollection=function(){if(0===arguments.length)return new jc(null,this);if(1===arguments.length){var t=arguments[0];return new jc(t,this)}},_h.prototype.createGeometry=function(t){return new rh(this).edit(t,{edit:function(){if(2===arguments.length){var t=arguments[0];return this._coordinateSequenceFactory.create(t)}}})},_h.prototype.getPrecisionModel=function(){return this._precisionModel},_h.prototype.createLinearRing=function(){if(0===arguments.length)return this.createLinearRing(this.getCoordinateSequenceFactory().create([]));if(1===arguments.length){if(arguments[0]instanceof Array){var t=arguments[0];return this.createLinearRing(null!==t?this.getCoordinateSequenceFactory().create(t):null)}if(Lu(arguments[0],Bu)){var e=arguments[0];return new eh(e,this)}}},_h.prototype.createMultiPolygon=function(){if(0===arguments.length)return new nh(null,this);if(1===arguments.length){var t=arguments[0];return new nh(t,this)}},_h.prototype.createMultiPoint=function(){if(0===arguments.length)return new th(null,this);if(1===arguments.length){if(arguments[0]instanceof Array){var t=arguments[0];return new th(t,this)}if(arguments[0]instanceof Array){var e=arguments[0];return this.createMultiPoint(null!==e?this.getCoordinateSequenceFactory().create(e):null)}if(Lu(arguments[0],Bu)){var n=arguments[0];if(null===n)return this.createMultiPoint(new Array(0).fill(null));for(var r=new Array(n.size()).fill(null),i=0;i<n.size();i++){var o=this.getCoordinateSequenceFactory().create(1,n.getDimension());Wc.copy(n,i,o,0,1),r[i]=this.createPoint(o)}return this.createMultiPoint(r)}}},_h.prototype.interfaces_=function(){return[Li]},_h.prototype.getClass=function(){return _h},_h.toMultiPolygonArray=function(t){var e=new Array(t.size()).fill(null);return t.toArray(e)},_h.toGeometryArray=function(t){if(null===t)return null;var e=new Array(t.size()).fill(null);return t.toArray(e)},_h.getDefaultCoordinateSequenceFactory=function(){return hh.instance()},_h.toMultiLineStringArray=function(t){var e=new Array(t.size()).fill(null);return t.toArray(e)},_h.toLineStringArray=function(t){var e=new Array(t.size()).fill(null);return t.toArray(e)},_h.toMultiPointArray=function(t){var e=new Array(t.size()).fill(null);return t.toArray(e)},_h.toLinearRingArray=function(t){var e=new Array(t.size()).fill(null);return t.toArray(e)},_h.toPointArray=function(t){var e=new Array(t.size()).fill(null);return t.toArray(e)},_h.toPolygonArray=function(t){var e=new Array(t.size()).fill(null);return t.toArray(e)},_h.createPointFromInternalCoord=function(t,e){return e.getPrecisionModel().makePrecise(t),e.getFactory().createPoint(t)},mh.serialVersionUID.get=function(){return-0x5ea75f2051eeb400},Object.defineProperties(_h,mh);var vh=["Point","MultiPoint","LineString","MultiLineString","Polygon","MultiPolygon"],xh=function(t){this.geometryFactory=t||new _h};xh.prototype.read=function(t){var e,n=(e="string"==typeof t?JSON.parse(t):t).type;if(!Eh[n])throw new Error("Unknown GeoJSON type: "+e.type);return-1!==vh.indexOf(n)?Eh[n].apply(this,[e.coordinates]):"GeometryCollection"===n?Eh[n].apply(this,[e.geometries]):Eh[n].apply(this,[e])},xh.prototype.write=function(t){var e=t.getGeometryType();if(!wh[e])throw new Error("Geometry is not supported");return wh[e].apply(this,[t])};var Eh={Feature:function(t){var e={};for(var n in t)e[n]=t[n];if(t.geometry){var r=t.geometry.type;if(!Eh[r])throw new Error("Unknown GeoJSON type: "+t.type);e.geometry=this.read(t.geometry)}return t.bbox&&(e.bbox=Eh.bbox.apply(this,[t.bbox])),e},FeatureCollection:function(t){var e={};if(t.features){e.features=[];for(var n=0;n<t.features.length;++n)e.features.push(this.read(t.features[n]))}return t.bbox&&(e.bbox=this.parse.bbox.apply(this,[t.bbox])),e},coordinates:function(t){for(var e=[],n=0;n<t.length;++n){var r=t[n];e.push(new bu(r[0],r[1]))}return e},bbox:function(t){return this.geometryFactory.createLinearRing([new bu(t[0],t[1]),new bu(t[2],t[1]),new bu(t[2],t[3]),new bu(t[0],t[3]),new bu(t[0],t[1])])},Point:function(t){var e=new bu(t[0],t[1]);return this.geometryFactory.createPoint(e)},MultiPoint:function(t){for(var e=[],n=0;n<t.length;++n)e.push(Eh.Point.apply(this,[t[n]]));return this.geometryFactory.createMultiPoint(e)},LineString:function(t){var e=Eh.coordinates.apply(this,[t]);return this.geometryFactory.createLineString(e)},MultiLineString:function(t){for(var e=[],n=0;n<t.length;++n)e.push(Eh.LineString.apply(this,[t[n]]));return this.geometryFactory.createMultiLineString(e)},Polygon:function(t){for(var e=Eh.coordinates.apply(this,[t[0]]),n=this.geometryFactory.createLinearRing(e),r=[],i=1;i<t.length;++i){var o=t[i],s=Eh.coordinates.apply(this,[o]),a=this.geometryFactory.createLinearRing(s);r.push(a)}return this.geometryFactory.createPolygon(n,r)},MultiPolygon:function(t){for(var e=[],n=0;n<t.length;++n){var r=t[n];e.push(Eh.Polygon.apply(this,[r]))}return this.geometryFactory.createMultiPolygon(e)},GeometryCollection:function(t){for(var e=[],n=0;n<t.length;++n){var r=t[n];e.push(this.read(r))}return this.geometryFactory.createGeometryCollection(e)}},wh={coordinate:function(t){return[t.x,t.y]},Point:function(t){return{type:"Point",coordinates:wh.coordinate.apply(this,[t.getCoordinate()])}},MultiPoint:function(t){for(var e=[],n=0;n<t._geometries.length;++n){var r=t._geometries[n],i=wh.Point.apply(this,[r]);e.push(i.coordinates)}return{type:"MultiPoint",coordinates:e}},LineString:function(t){for(var e=[],n=t.getCoordinates(),r=0;r<n.length;++r){var i=n[r];e.push(wh.coordinate.apply(this,[i]))}return{type:"LineString",coordinates:e}},MultiLineString:function(t){for(var e=[],n=0;n<t._geometries.length;++n){var r=t._geometries[n],i=wh.LineString.apply(this,[r]);e.push(i.coordinates)}return{type:"MultiLineString",coordinates:e}},Polygon:function(t){var e=[],n=wh.LineString.apply(this,[t._shell]);e.push(n.coordinates);for(var r=0;r<t._holes.length;++r){var i=t._holes[r],o=wh.LineString.apply(this,[i]);e.push(o.coordinates)}return{type:"Polygon",coordinates:e}},MultiPolygon:function(t){for(var e=[],n=0;n<t._geometries.length;++n){var r=t._geometries[n],i=wh.Polygon.apply(this,[r]);e.push(i.coordinates)}return{type:"MultiPolygon",coordinates:e}},GeometryCollection:function(t){for(var e=[],n=0;n<t._geometries.length;++n){var r=t._geometries[n],i=r.getGeometryType();e.push(wh[i].apply(this,[r]))}return{type:"GeometryCollection",geometries:e}}},bh=function(t){this.geometryFactory=t||new _h,this.precisionModel=this.geometryFactory.getPrecisionModel(),this.parser=new xh(this.geometryFactory)};bh.prototype.read=function(t){var e=this.parser.read(t);return this.precisionModel.getType()===fh.FIXED&&this.reducePrecision(e),e},bh.prototype.reducePrecision=function(t){var e,n;if(t.coordinate)this.precisionModel.makePrecise(t.coordinate);else if(t.points)for(e=0,n=t.points.length;e<n;e++)this.precisionModel.makePrecise(t.points[e]);else if(t.geometries)for(e=0,n=t.geometries.length;e<n;e++)this.reducePrecision(t.geometries[e])};var Ih=function(){this.parser=new xh(this.geometryFactory)};Ih.prototype.write=function(t){return this.parser.write(t)};var Nh=function(){},Ch={ON:{configurable:!0},LEFT:{configurable:!0},RIGHT:{configurable:!0}};Nh.prototype.interfaces_=function(){return[]},Nh.prototype.getClass=function(){return Nh},Nh.opposite=function(t){return t===Nh.LEFT?Nh.RIGHT:t===Nh.RIGHT?Nh.LEFT:t},Ch.ON.get=function(){return 0},Ch.LEFT.get=function(){return 1},Ch.RIGHT.get=function(){return 2},Object.defineProperties(Nh,Ch),(ji.prototype=new Error).name="EmptyStackException",(Xi.prototype=new wc).add=function(t){return this.array_.push(t),!0},Xi.prototype.get=function(t){if(t<0||t>=this.size())throw new Error;return this.array_[t]},Xi.prototype.push=function(t){return this.array_.push(t),t},Xi.prototype.pop=function(t){if(0===this.array_.length)throw new ji;return this.array_.pop()},Xi.prototype.peek=function(){if(0===this.array_.length)throw new ji;return this.array_[this.array_.length-1]},Xi.prototype.empty=function(){return 0===this.array_.length},Xi.prototype.isEmpty=function(){return this.empty()},Xi.prototype.search=function(t){return this.array_.indexOf(t)},Xi.prototype.size=function(){return this.array_.length},Xi.prototype.toArray=function(){for(var t=[],e=0,n=this.array_.length;e<n;e++)t.push(this.array_[e]);return t};var Sh=function(){this._minIndex=-1,this._minCoord=null,this._minDe=null,this._orientedDe=null};Sh.prototype.getCoordinate=function(){return this._minCoord},Sh.prototype.getRightmostSide=function(t,e){var n=this.getRightmostSideOfSegment(t,e);return n<0&&(n=this.getRightmostSideOfSegment(t,e-1)),n<0&&(this._minCoord=null,this.checkForRightmostCoordinate(t)),n},Sh.prototype.findRightmostEdgeAtVertex=function(){var t=this._minDe.getEdge().getCoordinates();tc.isTrue(this._minIndex>0&&this._minIndex<t.length,"rightmost point expected to be interior vertex of edge");var e=t[this._minIndex-1],n=t[this._minIndex+1],r=sc.computeOrientation(this._minCoord,n,e),i=!1;e.y<this._minCoord.y&&n.y<this._minCoord.y&&r===sc.COUNTERCLOCKWISE?i=!0:e.y>this._minCoord.y&&n.y>this._minCoord.y&&r===sc.CLOCKWISE&&(i=!0),i&&(this._minIndex=this._minIndex-1)},Sh.prototype.getRightmostSideOfSegment=function(t,e){var n=t.getEdge().getCoordinates();if(e<0||e+1>=n.length)return-1;if(n[e].y===n[e+1].y)return-1;var r=Nh.LEFT;return n[e].y<n[e+1].y&&(r=Nh.RIGHT),r},Sh.prototype.getEdge=function(){return this._orientedDe},Sh.prototype.checkForRightmostCoordinate=function(t){for(var e=t.getEdge().getCoordinates(),n=0;n<e.length-1;n++)(null===this._minCoord||e[n].x>this._minCoord.x)&&(this._minDe=t,this._minIndex=n,this._minCoord=e[n])},Sh.prototype.findRightmostEdgeAtNode=function(){var t=this._minDe.getNode().getEdges();this._minDe=t.getRightmostEdge(),this._minDe.isForward()||(this._minDe=this._minDe.getSym(),this._minIndex=this._minDe.getEdge().getCoordinates().length-1)},Sh.prototype.findEdge=function(t){for(var e=t.iterator();e.hasNext();){var n=e.next();n.isForward()&&this.checkForRightmostCoordinate(n)}tc.isTrue(0!==this._minIndex||this._minCoord.equals(this._minDe.getCoordinate()),"inconsistency in rightmost processing"),0===this._minIndex?this.findRightmostEdgeAtNode():this.findRightmostEdgeAtVertex(),this._orientedDe=this._minDe;this.getRightmostSide(this._minDe,this._minIndex)===Nh.LEFT&&(this._orientedDe=this._minDe.getSym())},Sh.prototype.interfaces_=function(){return[]},Sh.prototype.getClass=function(){return Sh};var Mh=function(t){function e(n,r){t.call(this,e.msgWithCoord(n,r)),this.pt=r?new bu(r):null,this.name="TopologyException"}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getCoordinate=function(){return this.pt},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e.msgWithCoord=function(t,e){return e?t:t+" [ "+e+" ]"},e}(Qu),Lh=function(){this.array_=[]};Lh.prototype.addLast=function(t){this.array_.push(t)},Lh.prototype.removeFirst=function(){return this.array_.shift()},Lh.prototype.isEmpty=function(){return 0===this.array_.length};var Ph=function(){this._finder=null,this._dirEdgeList=new bc,this._nodes=new bc,this._rightMostCoord=null,this._env=null,this._finder=new Sh};Ph.prototype.clearVisitedEdges=function(){for(var t=this._dirEdgeList.iterator();t.hasNext();){t.next().setVisited(!1)}},Ph.prototype.getRightmostCoordinate=function(){return this._rightMostCoord},Ph.prototype.computeNodeDepth=function(t){for(var e=null,n=t.getEdges().iterator();n.hasNext();){var r=n.next();if(r.isVisited()||r.getSym().isVisited()){e=r;break}}if(null===e)throw new Mh("unable to find edge to compute depths at "+t.getCoordinate());t.getEdges().computeDepths(e);for(var i=t.getEdges().iterator();i.hasNext();){var o=i.next();o.setVisited(!0),this.copySymDepths(o)}},Ph.prototype.computeDepth=function(t){this.clearVisitedEdges();var e=this._finder.getEdge();e.setEdgeDepths(Nh.RIGHT,t),this.copySymDepths(e),this.computeDepths(e)},Ph.prototype.create=function(t){this.addReachable(t),this._finder.findEdge(this._dirEdgeList),this._rightMostCoord=this._finder.getCoordinate()},Ph.prototype.findResultEdges=function(){for(var t=this._dirEdgeList.iterator();t.hasNext();){var e=t.next();e.getDepth(Nh.RIGHT)>=1&&e.getDepth(Nh.LEFT)<=0&&!e.isInteriorAreaEdge()&&e.setInResult(!0)}},Ph.prototype.computeDepths=function(t){var e=new Rc,n=new Lh,r=t.getNode();for(n.addLast(r),e.add(r),t.setVisited(!0);!n.isEmpty();){var i=n.removeFirst();e.add(i),this.computeNodeDepth(i);for(var o=i.getEdges().iterator();o.hasNext();){var s=o.next().getSym();if(!s.isVisited()){var a=s.getNode();e.contains(a)||(n.addLast(a),e.add(a))}}}},Ph.prototype.compareTo=function(t){var e=t;return this._rightMostCoord.x<e._rightMostCoord.x?-1:this._rightMostCoord.x>e._rightMostCoord.x?1:0},Ph.prototype.getEnvelope=function(){if(null===this._env){for(var t=new Yu,e=this._dirEdgeList.iterator();e.hasNext();)for(var n=e.next().getEdge().getCoordinates(),r=0;r<n.length-1;r++)t.expandToInclude(n[r]);this._env=t}return this._env},Ph.prototype.addReachable=function(t){var e=new Xi;for(e.add(t);!e.empty();){var n=e.pop();this.add(n,e)}},Ph.prototype.copySymDepths=function(t){var e=t.getSym();e.setDepth(Nh.LEFT,t.getDepth(Nh.RIGHT)),e.setDepth(Nh.RIGHT,t.getDepth(Nh.LEFT))},Ph.prototype.add=function(t,e){t.setVisited(!0),this._nodes.add(t);for(var n=t.getEdges().iterator();n.hasNext();){var r=n.next();this._dirEdgeList.add(r);var i=r.getSym().getNode();i.isVisited()||e.push(i)}},Ph.prototype.getNodes=function(){return this._nodes},Ph.prototype.getDirectedEdges=function(){return this._dirEdgeList},Ph.prototype.interfaces_=function(){return[xu]},Ph.prototype.getClass=function(){return Ph};var Oh=function t(){if(this.location=null,1===arguments.length){if(arguments[0]instanceof Array){var e=arguments[0];this.init(e.length)}else if(Number.isInteger(arguments[0])){var n=arguments[0];this.init(1),this.location[Nh.ON]=n}else if(arguments[0]instanceof t){var r=arguments[0];if(this.init(r.location.length),null!==r)for(var i=0;i<this.location.length;i++)this.location[i]=r.location[i]}}else if(3===arguments.length){var o=arguments[0],s=arguments[1],a=arguments[2];this.init(3),this.location[Nh.ON]=o,this.location[Nh.LEFT]=s,this.location[Nh.RIGHT]=a}};Oh.prototype.setAllLocations=function(t){for(var e=0;e<this.location.length;e++)this.location[e]=t},Oh.prototype.isNull=function(){for(var t=0;t<this.location.length;t++)if(this.location[t]!==Su.NONE)return!1;return!0},Oh.prototype.setAllLocationsIfNull=function(t){for(var e=0;e<this.location.length;e++)this.location[e]===Su.NONE&&(this.location[e]=t)},Oh.prototype.isLine=function(){return 1===this.location.length},Oh.prototype.merge=function(t){if(t.location.length>this.location.length){var e=new Array(3).fill(null);e[Nh.ON]=this.location[Nh.ON],e[Nh.LEFT]=Su.NONE,e[Nh.RIGHT]=Su.NONE,this.location=e}for(var n=0;n<this.location.length;n++)this.location[n]===Su.NONE&&n<t.location.length&&(this.location[n]=t.location[n])},Oh.prototype.getLocations=function(){return this.location},Oh.prototype.flip=function(){if(this.location.length<=1)return null;var t=this.location[Nh.LEFT];this.location[Nh.LEFT]=this.location[Nh.RIGHT],this.location[Nh.RIGHT]=t},Oh.prototype.toString=function(){var t=new Ru;return this.location.length>1&&t.append(Su.toLocationSymbol(this.location[Nh.LEFT])),t.append(Su.toLocationSymbol(this.location[Nh.ON])),this.location.length>1&&t.append(Su.toLocationSymbol(this.location[Nh.RIGHT])),t.toString()},Oh.prototype.setLocations=function(t,e,n){this.location[Nh.ON]=t,this.location[Nh.LEFT]=e,this.location[Nh.RIGHT]=n},Oh.prototype.get=function(t){return t<this.location.length?this.location[t]:Su.NONE},Oh.prototype.isArea=function(){return this.location.length>1},Oh.prototype.isAnyNull=function(){for(var t=0;t<this.location.length;t++)if(this.location[t]===Su.NONE)return!0;return!1},Oh.prototype.setLocation=function(){if(1===arguments.length){var t=arguments[0];this.setLocation(Nh.ON,t)}else if(2===arguments.length){var e=arguments[0],n=arguments[1];this.location[e]=n}},Oh.prototype.init=function(t){this.location=new Array(t).fill(null),this.setAllLocations(Su.NONE)},Oh.prototype.isEqualOnSide=function(t,e){return this.location[e]===t.location[e]},Oh.prototype.allPositionsEqual=function(t){for(var e=0;e<this.location.length;e++)if(this.location[e]!==t)return!1;return!0},Oh.prototype.interfaces_=function(){return[]},Oh.prototype.getClass=function(){return Oh};var Rh=function t(){if(this.elt=new Array(2).fill(null),1===arguments.length){if(Number.isInteger(arguments[0])){var e=arguments[0];this.elt[0]=new Oh(e),this.elt[1]=new Oh(e)}else if(arguments[0]instanceof t){var n=arguments[0];this.elt[0]=new Oh(n.elt[0]),this.elt[1]=new Oh(n.elt[1])}}else if(2===arguments.length){var r=arguments[0],i=arguments[1];this.elt[0]=new Oh(Su.NONE),this.elt[1]=new Oh(Su.NONE),this.elt[r].setLocation(i)}else if(3===arguments.length){var o=arguments[0],s=arguments[1],a=arguments[2];this.elt[0]=new Oh(o,s,a),this.elt[1]=new Oh(o,s,a)}else if(4===arguments.length){var u=arguments[0],c=arguments[1],h=arguments[2],l=arguments[3];this.elt[0]=new Oh(Su.NONE,Su.NONE,Su.NONE),this.elt[1]=new Oh(Su.NONE,Su.NONE,Su.NONE),this.elt[u].setLocations(c,h,l)}};Rh.prototype.getGeometryCount=function(){var t=0;return this.elt[0].isNull()||t++,this.elt[1].isNull()||t++,t},Rh.prototype.setAllLocations=function(t,e){this.elt[t].setAllLocations(e)},Rh.prototype.isNull=function(t){return this.elt[t].isNull()},Rh.prototype.setAllLocationsIfNull=function(){if(1===arguments.length){var t=arguments[0];this.setAllLocationsIfNull(0,t),this.setAllLocationsIfNull(1,t)}else if(2===arguments.length){var e=arguments[0],n=arguments[1];this.elt[e].setAllLocationsIfNull(n)}},Rh.prototype.isLine=function(t){return this.elt[t].isLine()},Rh.prototype.merge=function(t){for(var e=0;e<2;e++)null===this.elt[e]&&null!==t.elt[e]?this.elt[e]=new Oh(t.elt[e]):this.elt[e].merge(t.elt[e])},Rh.prototype.flip=function(){this.elt[0].flip(),this.elt[1].flip()},Rh.prototype.getLocation=function(){if(1===arguments.length){var t=arguments[0];return this.elt[t].get(Nh.ON)}if(2===arguments.length){var e=arguments[0],n=arguments[1];return this.elt[e].get(n)}},Rh.prototype.toString=function(){var t=new Ru;return null!==this.elt[0]&&(t.append("A:"),t.append(this.elt[0].toString())),null!==this.elt[1]&&(t.append(" B:"),t.append(this.elt[1].toString())),t.toString()},Rh.prototype.isArea=function(){if(0===arguments.length)return this.elt[0].isArea()||this.elt[1].isArea();if(1===arguments.length){var t=arguments[0];return this.elt[t].isArea()}},Rh.prototype.isAnyNull=function(t){return this.elt[t].isAnyNull()},Rh.prototype.setLocation=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1];this.elt[t].setLocation(Nh.ON,e)}else if(3===arguments.length){var n=arguments[0],r=arguments[1],i=arguments[2];this.elt[n].setLocation(r,i)}},Rh.prototype.isEqualOnSide=function(t,e){return this.elt[0].isEqualOnSide(t.elt[0],e)&&this.elt[1].isEqualOnSide(t.elt[1],e)},Rh.prototype.allPositionsEqual=function(t,e){return this.elt[t].allPositionsEqual(e)},Rh.prototype.toLine=function(t){this.elt[t].isArea()&&(this.elt[t]=new Oh(this.elt[t].location[0]))},Rh.prototype.interfaces_=function(){return[]},Rh.prototype.getClass=function(){return Rh},Rh.toLineLabel=function(t){for(var e=new Rh(Su.NONE),n=0;n<2;n++)e.setLocation(n,t.getLocation(n));return e};var Th=function(){this._startDe=null,this._maxNodeDegree=-1,this._edges=new bc,this._pts=new bc,this._label=new Rh(Su.NONE),this._ring=null,this._isHole=null,this._shell=null,this._holes=new bc,this._geometryFactory=null;var t=arguments[0],e=arguments[1];this._geometryFactory=e,this.computePoints(t),this.computeRing()};Th.prototype.computeRing=function(){if(null!==this._ring)return null;for(var t=new Array(this._pts.size()).fill(null),e=0;e<this._pts.size();e++)t[e]=this._pts.get(e);this._ring=this._geometryFactory.createLinearRing(t),this._isHole=sc.isCCW(this._ring.getCoordinates())},Th.prototype.isIsolated=function(){return 1===this._label.getGeometryCount()},Th.prototype.computePoints=function(t){this._startDe=t;var e=t,n=!0;do{if(null===e)throw new Mh("Found null DirectedEdge");if(e.getEdgeRing()===this)throw new Mh("Directed Edge visited twice during ring-building at "+e.getCoordinate());this._edges.add(e);var r=e.getLabel();tc.isTrue(r.isArea()),this.mergeLabel(r),this.addPoints(e.getEdge(),e.isForward(),n),n=!1,this.setEdgeRing(e,this),e=this.getNext(e)}while(e!==this._startDe)},Th.prototype.getLinearRing=function(){return this._ring},Th.prototype.getCoordinate=function(t){return this._pts.get(t)},Th.prototype.computeMaxNodeDegree=function(){this._maxNodeDegree=0;var t=this._startDe;do{var e=t.getNode().getEdges().getOutgoingDegree(this);e>this._maxNodeDegree&&(this._maxNodeDegree=e),t=this.getNext(t)}while(t!==this._startDe);this._maxNodeDegree*=2},Th.prototype.addPoints=function(t,e,n){var r=t.getCoordinates();if(e){var i=1;n&&(i=0);for(var o=i;o<r.length;o++)this._pts.add(r[o])}else{var s=r.length-2;n&&(s=r.length-1);for(var a=s;a>=0;a--)this._pts.add(r[a])}},Th.prototype.isHole=function(){return this._isHole},Th.prototype.setInResult=function(){var t=this._startDe;do{t.getEdge().setInResult(!0),t=t.getNext()}while(t!==this._startDe)},Th.prototype.containsPoint=function(t){var e=this.getLinearRing();if(!e.getEnvelopeInternal().contains(t))return!1;if(!sc.isPointInRing(t,e.getCoordinates()))return!1;for(var n=this._holes.iterator();n.hasNext();){if(n.next().containsPoint(t))return!1}return!0},Th.prototype.addHole=function(t){this._holes.add(t)},Th.prototype.isShell=function(){return null===this._shell},Th.prototype.getLabel=function(){return this._label},Th.prototype.getEdges=function(){return this._edges},Th.prototype.getMaxNodeDegree=function(){return this._maxNodeDegree<0&&this.computeMaxNodeDegree(),this._maxNodeDegree},Th.prototype.getShell=function(){return this._shell},Th.prototype.mergeLabel=function(){if(1===arguments.length){var t=arguments[0];this.mergeLabel(t,0),this.mergeLabel(t,1)}else if(2===arguments.length){var e=arguments[0],n=arguments[1],r=e.getLocation(n,Nh.RIGHT);if(r===Su.NONE)return null;if(this._label.getLocation(n)===Su.NONE)return this._label.setLocation(n,r),null}},Th.prototype.setShell=function(t){this._shell=t,null!==t&&t.addHole(this)},Th.prototype.toPolygon=function(t){for(var e=new Array(this._holes.size()).fill(null),n=0;n<this._holes.size();n++)e[n]=this._holes.get(n).getLinearRing();return t.createPolygon(this.getLinearRing(),e)},Th.prototype.interfaces_=function(){return[]},Th.prototype.getClass=function(){return Th};var Ah=function(t){function e(){var e=arguments[0],n=arguments[1];t.call(this,e,n)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setEdgeRing=function(t,e){t.setMinEdgeRing(e)},e.prototype.getNext=function(t){return t.getNextMin()},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(Th),Dh=function(t){function e(){var e=arguments[0],n=arguments[1];t.call(this,e,n)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.buildMinimalRings=function(){var t=new bc,e=this._startDe;do{if(null===e.getMinEdgeRing()){var n=new Ah(e,this._geometryFactory);t.add(n)}e=e.getNext()}while(e!==this._startDe);return t},e.prototype.setEdgeRing=function(t,e){t.setEdgeRing(e)},e.prototype.linkDirectedEdgesForMinimalEdgeRings=function(){var t=this._startDe;do{t.getNode().getEdges().linkMinimalDirectedEdges(this),t=t.getNext()}while(t!==this._startDe)},e.prototype.getNext=function(t){return t.getNext()},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(Th),Fh=function(){if(this._label=null,this._isInResult=!1,this._isCovered=!1,this._isCoveredSet=!1,this._isVisited=!1,0===arguments.length);else if(1===arguments.length){var t=arguments[0];this._label=t}};Fh.prototype.setVisited=function(t){this._isVisited=t},Fh.prototype.setInResult=function(t){this._isInResult=t},Fh.prototype.isCovered=function(){return this._isCovered},Fh.prototype.isCoveredSet=function(){return this._isCoveredSet},Fh.prototype.setLabel=function(t){this._label=t},Fh.prototype.getLabel=function(){return this._label},Fh.prototype.setCovered=function(t){this._isCovered=t,this._isCoveredSet=!0},Fh.prototype.updateIM=function(t){tc.isTrue(this._label.getGeometryCount()>=2,"found partial label"),this.computeIM(t)},Fh.prototype.isInResult=function(){return this._isInResult},Fh.prototype.isVisited=function(){return this._isVisited},Fh.prototype.interfaces_=function(){return[]},Fh.prototype.getClass=function(){return Fh};var qh=function(t){function e(){t.call(this),this._coord=null,this._edges=null;var e=arguments[0],n=arguments[1];this._coord=e,this._edges=n,this._label=new Rh(0,Su.NONE)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.isIncidentEdgeInResult=function(){for(var t=this.getEdges().getEdges().iterator();t.hasNext();){if(t.next().getEdge().isInResult())return!0}return!1},e.prototype.isIsolated=function(){return 1===this._label.getGeometryCount()},e.prototype.getCoordinate=function(){return this._coord},e.prototype.print=function(t){t.println("node "+this._coord+" lbl: "+this._label)},e.prototype.computeIM=function(t){},e.prototype.computeMergedLocation=function(t,e){var n=Su.NONE;if(n=this._label.getLocation(e),!t.isNull(e)){var r=t.getLocation(e);n!==Su.BOUNDARY&&(n=r)}return n},e.prototype.setLabel=function(){if(2!==arguments.length)return t.prototype.setLabel.apply(this,arguments);var e=arguments[0],n=arguments[1];null===this._label?this._label=new Rh(e,n):this._label.setLocation(e,n)},e.prototype.getEdges=function(){return this._edges},e.prototype.mergeLabel=function(){if(arguments[0]instanceof e){var t=arguments[0];this.mergeLabel(t._label)}else if(arguments[0]instanceof Rh)for(var n=arguments[0],r=0;r<2;r++){var i=this.computeMergedLocation(n,r);this._label.getLocation(r)===Su.NONE&&this._label.setLocation(r,i)}},e.prototype.add=function(t){this._edges.insert(t),t.setNode(this)},e.prototype.setLabelBoundary=function(t){if(null===this._label)return null;var e=Su.NONE;null!==this._label&&(e=this._label.getLocation(t));var n=null;switch(e){case Su.BOUNDARY:n=Su.INTERIOR;break;case Su.INTERIOR:default:n=Su.BOUNDARY}this._label.setLocation(t,n)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(Fh),Gh=function(){this.nodeMap=new Gi,this.nodeFact=null;var t=arguments[0];this.nodeFact=t};Gh.prototype.find=function(t){return this.nodeMap.get(t)},Gh.prototype.addNode=function(){if(arguments[0]instanceof bu){var t=arguments[0],e=this.nodeMap.get(t);return null===e&&(e=this.nodeFact.createNode(t),this.nodeMap.put(t,e)),e}if(arguments[0]instanceof qh){var n=arguments[0],r=this.nodeMap.get(n.getCoordinate());return null===r?(this.nodeMap.put(n.getCoordinate(),n),n):(r.mergeLabel(n),r)}},Gh.prototype.print=function(t){for(var e=this.iterator();e.hasNext();){e.next().print(t)}},Gh.prototype.iterator=function(){return this.nodeMap.values().iterator()},Gh.prototype.values=function(){return this.nodeMap.values()},Gh.prototype.getBoundaryNodes=function(t){for(var e=new bc,n=this.iterator();n.hasNext();){var r=n.next();r.getLabel().getLocation(t)===Su.BOUNDARY&&e.add(r)}return e},Gh.prototype.add=function(t){var e=t.getCoordinate();this.addNode(e).add(t)},Gh.prototype.interfaces_=function(){return[]},Gh.prototype.getClass=function(){return Gh};var Bh=function(){},kh={NE:{configurable:!0},NW:{configurable:!0},SW:{configurable:!0},SE:{configurable:!0}};Bh.prototype.interfaces_=function(){return[]},Bh.prototype.getClass=function(){return Bh},Bh.isNorthern=function(t){return t===Bh.NE||t===Bh.NW},Bh.isOpposite=function(t,e){if(t===e)return!1;return 2===(t-e+4)%4},Bh.commonHalfPlane=function(t,e){if(t===e)return t;if(2===(t-e+4)%4)return-1;var n=t<e?t:e;return 0===n&&3===(t>e?t:e)?3:n},Bh.isInHalfPlane=function(t,e){return e===Bh.SE?t===Bh.SE||t===Bh.SW:t===e||t===e+1},Bh.quadrant=function(){if("number"==typeof arguments[0]&&"number"==typeof arguments[1]){var t=arguments[0],e=arguments[1];if(0===t&&0===e)throw new _u("Cannot compute the quadrant for point ( "+t+", "+e+" )");return t>=0?e>=0?Bh.NE:Bh.SE:e>=0?Bh.NW:Bh.SW}if(arguments[0]instanceof bu&&arguments[1]instanceof bu){var n=arguments[0],r=arguments[1];if(r.x===n.x&&r.y===n.y)throw new _u("Cannot compute the quadrant for two identical points "+n);return r.x>=n.x?r.y>=n.y?Bh.NE:Bh.SE:r.y>=n.y?Bh.NW:Bh.SW}},kh.NE.get=function(){return 0},kh.NW.get=function(){return 1},kh.SW.get=function(){return 2},kh.SE.get=function(){return 3},Object.defineProperties(Bh,kh);var zh=function(){if(this._edge=null,this._label=null,this._node=null,this._p0=null,this._p1=null,this._dx=null,this._dy=null,this._quadrant=null,1===arguments.length){var t=arguments[0];this._edge=t}else if(3===arguments.length){var e=arguments[0],n=arguments[1],r=arguments[2];this._edge=e,this.init(n,r),this._label=null}else if(4===arguments.length){var i=arguments[0],o=arguments[1],s=arguments[2],a=arguments[3];this._edge=i,this.init(o,s),this._label=a}};zh.prototype.compareDirection=function(t){return this._dx===t._dx&&this._dy===t._dy?0:this._quadrant>t._quadrant?1:this._quadrant<t._quadrant?-1:sc.computeOrientation(t._p0,t._p1,this._p1)},zh.prototype.getDy=function(){return this._dy},zh.prototype.getCoordinate=function(){return this._p0},zh.prototype.setNode=function(t){this._node=t},zh.prototype.print=function(t){var e=Math.atan2(this._dy,this._dx),n=this.getClass().getName(),r=n.lastIndexOf("."),i=n.substring(r+1);t.print("  "+i+": "+this._p0+" - "+this._p1+" "+this._quadrant+":"+e+"   "+this._label)},zh.prototype.compareTo=function(t){var e=t;return this.compareDirection(e)},zh.prototype.getDirectedCoordinate=function(){return this._p1},zh.prototype.getDx=function(){return this._dx},zh.prototype.getLabel=function(){return this._label},zh.prototype.getEdge=function(){return this._edge},zh.prototype.getQuadrant=function(){return this._quadrant},zh.prototype.getNode=function(){return this._node},zh.prototype.toString=function(){var t=Math.atan2(this._dy,this._dx),e=this.getClass().getName(),n=e.lastIndexOf(".");return"  "+e.substring(n+1)+": "+this._p0+" - "+this._p1+" "+this._quadrant+":"+t+"   "+this._label},zh.prototype.computeLabel=function(t){},zh.prototype.init=function(t,e){this._p0=t,this._p1=e,this._dx=e.x-t.x,this._dy=e.y-t.y,this._quadrant=Bh.quadrant(this._dx,this._dy),tc.isTrue(!(0===this._dx&&0===this._dy),"EdgeEnd with identical endpoints found")},zh.prototype.interfaces_=function(){return[xu]},zh.prototype.getClass=function(){return zh};var jh=function(t){function e(){var e=arguments[0],n=arguments[1];if(t.call(this,e),this._isForward=null,this._isInResult=!1,this._isVisited=!1,this._sym=null,this._next=null,this._nextMin=null,this._edgeRing=null,this._minEdgeRing=null,this._depth=[0,-999,-999],this._isForward=n,n)this.init(e.getCoordinate(0),e.getCoordinate(1));else{var r=e.getNumPoints()-1;this.init(e.getCoordinate(r),e.getCoordinate(r-1))}this.computeDirectedLabel()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getNextMin=function(){return this._nextMin},e.prototype.getDepth=function(t){return this._depth[t]},e.prototype.setVisited=function(t){this._isVisited=t},e.prototype.computeDirectedLabel=function(){this._label=new Rh(this._edge.getLabel()),this._isForward||this._label.flip()},e.prototype.getNext=function(){return this._next},e.prototype.setDepth=function(t,e){if(-999!==this._depth[t]&&this._depth[t]!==e)throw new Mh("assigned depths do not match",this.getCoordinate());this._depth[t]=e},e.prototype.isInteriorAreaEdge=function(){for(var t=!0,e=0;e<2;e++)this._label.isArea(e)&&this._label.getLocation(e,Nh.LEFT)===Su.INTERIOR&&this._label.getLocation(e,Nh.RIGHT)===Su.INTERIOR||(t=!1);return t},e.prototype.setNextMin=function(t){this._nextMin=t},e.prototype.print=function(e){t.prototype.print.call(this,e),e.print(" "+this._depth[Nh.LEFT]+"/"+this._depth[Nh.RIGHT]),e.print(" ("+this.getDepthDelta()+")"),this._isInResult&&e.print(" inResult")},e.prototype.setMinEdgeRing=function(t){this._minEdgeRing=t},e.prototype.isLineEdge=function(){var t=this._label.isLine(0)||this._label.isLine(1),e=!this._label.isArea(0)||this._label.allPositionsEqual(0,Su.EXTERIOR),n=!this._label.isArea(1)||this._label.allPositionsEqual(1,Su.EXTERIOR);return t&&e&&n},e.prototype.setEdgeRing=function(t){this._edgeRing=t},e.prototype.getMinEdgeRing=function(){return this._minEdgeRing},e.prototype.getDepthDelta=function(){var t=this._edge.getDepthDelta();return this._isForward||(t=-t),t},e.prototype.setInResult=function(t){this._isInResult=t},e.prototype.getSym=function(){return this._sym},e.prototype.isForward=function(){return this._isForward},e.prototype.getEdge=function(){return this._edge},e.prototype.printEdge=function(t){this.print(t),t.print(" "),this._isForward?this._edge.print(t):this._edge.printReverse(t)},e.prototype.setSym=function(t){this._sym=t},e.prototype.setVisitedEdge=function(t){this.setVisited(t),this._sym.setVisited(t)},e.prototype.setEdgeDepths=function(t,e){var n=this.getEdge().getDepthDelta();this._isForward||(n=-n);var r=1;t===Nh.LEFT&&(r=-1);var i=Nh.opposite(t),o=e+n*r;this.setDepth(t,e),this.setDepth(i,o)},e.prototype.getEdgeRing=function(){return this._edgeRing},e.prototype.isInResult=function(){return this._isInResult},e.prototype.setNext=function(t){this._next=t},e.prototype.isVisited=function(){return this._isVisited},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e.depthFactor=function(t,e){return t===Su.EXTERIOR&&e===Su.INTERIOR?1:t===Su.INTERIOR&&e===Su.EXTERIOR?-1:0},e}(zh),Xh=function(){};Xh.prototype.createNode=function(t){return new qh(t,null)},Xh.prototype.interfaces_=function(){return[]},Xh.prototype.getClass=function(){return Xh};var Uh=function(){if(this._edges=new bc,this._nodes=null,this._edgeEndList=new bc,0===arguments.length)this._nodes=new Gh(new Xh);else if(1===arguments.length){var t=arguments[0];this._nodes=new Gh(t)}};Uh.prototype.printEdges=function(t){t.println("Edges:");for(var e=0;e<this._edges.size();e++){t.println("edge "+e+":");var n=this._edges.get(e);n.print(t),n.eiList.print(t)}},Uh.prototype.find=function(t){return this._nodes.find(t)},Uh.prototype.addNode=function(){if(arguments[0]instanceof qh){var t=arguments[0];return this._nodes.addNode(t)}if(arguments[0]instanceof bu){var e=arguments[0];return this._nodes.addNode(e)}},Uh.prototype.getNodeIterator=function(){return this._nodes.iterator()},Uh.prototype.linkResultDirectedEdges=function(){for(var t=this._nodes.iterator();t.hasNext();){t.next().getEdges().linkResultDirectedEdges()}},Uh.prototype.debugPrintln=function(t){Xu.out.println(t)},Uh.prototype.isBoundaryNode=function(t,e){var n=this._nodes.find(e);if(null===n)return!1;var r=n.getLabel();return null!==r&&r.getLocation(t)===Su.BOUNDARY},Uh.prototype.linkAllDirectedEdges=function(){for(var t=this._nodes.iterator();t.hasNext();){t.next().getEdges().linkAllDirectedEdges()}},Uh.prototype.matchInSameDirection=function(t,e,n,r){return!!t.equals(n)&&(sc.computeOrientation(t,e,r)===sc.COLLINEAR&&Bh.quadrant(t,e)===Bh.quadrant(n,r))},Uh.prototype.getEdgeEnds=function(){return this._edgeEndList},Uh.prototype.debugPrint=function(t){Xu.out.print(t)},Uh.prototype.getEdgeIterator=function(){return this._edges.iterator()},Uh.prototype.findEdgeInSameDirection=function(t,e){for(var n=0;n<this._edges.size();n++){var r=this._edges.get(n),i=r.getCoordinates();if(this.matchInSameDirection(t,e,i[0],i[1]))return r;if(this.matchInSameDirection(t,e,i[i.length-1],i[i.length-2]))return r}return null},Uh.prototype.insertEdge=function(t){this._edges.add(t)},Uh.prototype.findEdgeEnd=function(t){for(var e=this.getEdgeEnds().iterator();e.hasNext();){var n=e.next();if(n.getEdge()===t)return n}return null},Uh.prototype.addEdges=function(t){for(var e=t.iterator();e.hasNext();){var n=e.next();this._edges.add(n);var r=new jh(n,!0),i=new jh(n,!1);r.setSym(i),i.setSym(r),this.add(r),this.add(i)}},Uh.prototype.add=function(t){this._nodes.add(t),this._edgeEndList.add(t)},Uh.prototype.getNodes=function(){return this._nodes.values()},Uh.prototype.findEdge=function(t,e){for(var n=0;n<this._edges.size();n++){var r=this._edges.get(n),i=r.getCoordinates();if(t.equals(i[0])&&e.equals(i[1]))return r}return null},Uh.prototype.interfaces_=function(){return[]},Uh.prototype.getClass=function(){return Uh},Uh.linkResultDirectedEdges=function(t){for(var e=t.iterator();e.hasNext();){e.next().getEdges().linkResultDirectedEdges()}};var Yh=function(){this._geometryFactory=null,this._shellList=new bc;var t=arguments[0];this._geometryFactory=t};Yh.prototype.sortShellsAndHoles=function(t,e,n){for(var r=t.iterator();r.hasNext();){var i=r.next();i.isHole()?n.add(i):e.add(i)}},Yh.prototype.computePolygons=function(t){for(var e=new bc,n=t.iterator();n.hasNext();){var r=n.next().toPolygon(this._geometryFactory);e.add(r)}return e},Yh.prototype.placeFreeHoles=function(t,e){for(var n=e.iterator();n.hasNext();){var r=n.next();if(null===r.getShell()){var i=this.findEdgeRingContaining(r,t);if(null===i)throw new Mh("unable to assign hole to a shell",r.getCoordinate(0));r.setShell(i)}}},Yh.prototype.buildMinimalEdgeRings=function(t,e,n){for(var r=new bc,i=t.iterator();i.hasNext();){var o=i.next();if(o.getMaxNodeDegree()>2){o.linkDirectedEdgesForMinimalEdgeRings();var s=o.buildMinimalRings(),a=this.findShell(s);null!==a?(this.placePolygonHoles(a,s),e.add(a)):n.addAll(s)}else r.add(o)}return r},Yh.prototype.containsPoint=function(t){for(var e=this._shellList.iterator();e.hasNext();){if(e.next().containsPoint(t))return!0}return!1},Yh.prototype.buildMaximalEdgeRings=function(t){for(var e=new bc,n=t.iterator();n.hasNext();){var r=n.next();if(r.isInResult()&&r.getLabel().isArea()&&null===r.getEdgeRing()){var i=new Dh(r,this._geometryFactory);e.add(i),i.setInResult()}}return e},Yh.prototype.placePolygonHoles=function(t,e){for(var n=e.iterator();n.hasNext();){var r=n.next();r.isHole()&&r.setShell(t)}},Yh.prototype.getPolygons=function(){return this.computePolygons(this._shellList)},Yh.prototype.findEdgeRingContaining=function(t,e){for(var n=t.getLinearRing(),r=n.getEnvelopeInternal(),i=n.getCoordinateN(0),o=null,s=null,a=e.iterator();a.hasNext();){var u=a.next(),c=u.getLinearRing(),h=c.getEnvelopeInternal();null!==o&&(s=o.getLinearRing().getEnvelopeInternal());var l=!1;h.contains(r)&&sc.isPointInRing(i,c.getCoordinates())&&(l=!0),l&&(null===o||s.contains(h))&&(o=u)}return o},Yh.prototype.findShell=function(t){for(var e=0,n=null,r=t.iterator();r.hasNext();){var i=r.next();i.isHole()||(n=i,e++)}return tc.isTrue(e<=1,"found two shells in MinimalEdgeRing list"),n},Yh.prototype.add=function(){if(1===arguments.length){var t=arguments[0];this.add(t.getEdgeEnds(),t.getNodes())}else if(2===arguments.length){var e=arguments[0],n=arguments[1];Uh.linkResultDirectedEdges(n);var r=this.buildMaximalEdgeRings(e),i=new bc,o=this.buildMinimalEdgeRings(r,this._shellList,i);this.sortShellsAndHoles(o,this._shellList,i),this.placeFreeHoles(this._shellList,i)}},Yh.prototype.interfaces_=function(){return[]},Yh.prototype.getClass=function(){return Yh};var Vh=function(){};Vh.prototype.getBounds=function(){},Vh.prototype.interfaces_=function(){return[]},Vh.prototype.getClass=function(){return Vh};var Hh=function(){this._bounds=null,this._item=null;var t=arguments[0],e=arguments[1];this._bounds=t,this._item=e};Hh.prototype.getItem=function(){return this._item},Hh.prototype.getBounds=function(){return this._bounds},Hh.prototype.interfaces_=function(){return[Vh,Li]},Hh.prototype.getClass=function(){return Hh};var Wh=function(){this._size=null,this._items=null,this._size=0,this._items=new bc,this._items.add(null)};Wh.prototype.poll=function(){if(this.isEmpty())return null;var t=this._items.get(1);return this._items.set(1,this._items.get(this._size)),this._size-=1,this.reorder(1),t},Wh.prototype.size=function(){return this._size},Wh.prototype.reorder=function(t){for(var e=null,n=this._items.get(t);2*t<=this._size&&((e=2*t)!==this._size&&this._items.get(e+1).compareTo(this._items.get(e))<0&&e++,this._items.get(e).compareTo(n)<0);t=e)this._items.set(t,this._items.get(e));this._items.set(t,n)},Wh.prototype.clear=function(){this._size=0,this._items.clear()},Wh.prototype.isEmpty=function(){return 0===this._size},Wh.prototype.add=function(t){this._items.add(null),this._size+=1;var e=this._size;for(this._items.set(0,t);t.compareTo(this._items.get(Math.trunc(e/2)))<0;e/=2)this._items.set(e,this._items.get(Math.trunc(e/2)));this._items.set(e,t)},Wh.prototype.interfaces_=function(){return[]},Wh.prototype.getClass=function(){return Wh};var Jh=function(){};Jh.prototype.visitItem=function(t){},Jh.prototype.interfaces_=function(){return[]},Jh.prototype.getClass=function(){return Jh};var Zh=function(){};Zh.prototype.insert=function(t,e){},Zh.prototype.remove=function(t,e){},Zh.prototype.query=function(){},Zh.prototype.interfaces_=function(){return[]},Zh.prototype.getClass=function(){return Zh};var Kh=function(){if(this._childBoundables=new bc,this._bounds=null,this._level=null,0===arguments.length);else if(1===arguments.length){var t=arguments[0];this._level=t}},Qh={serialVersionUID:{configurable:!0}};Kh.prototype.getLevel=function(){return this._level},Kh.prototype.size=function(){return this._childBoundables.size()},Kh.prototype.getChildBoundables=function(){return this._childBoundables},Kh.prototype.addChildBoundable=function(t){tc.isTrue(null===this._bounds),this._childBoundables.add(t)},Kh.prototype.isEmpty=function(){return this._childBoundables.isEmpty()},Kh.prototype.getBounds=function(){return null===this._bounds&&(this._bounds=this.computeBounds()),this._bounds},Kh.prototype.interfaces_=function(){return[Vh,Li]},Kh.prototype.getClass=function(){return Kh},Qh.serialVersionUID.get=function(){return 0x5a1e55ec41369800},Object.defineProperties(Kh,Qh);var $h=function(){};$h.reverseOrder=function(){return{compare:function(t,e){return e.compareTo(t)}}},$h.min=function(t){return $h.sort(t),t.get(0)},$h.sort=function(t,e){var n=t.toArray();e?qc.sort(n,e):qc.sort(n);for(var r=t.iterator(),i=0,o=n.length;i<o;i++)r.next(),r.set(n[i])},$h.singletonList=function(t){var e=new bc;return e.add(t),e};var tl=function(){this._boundable1=null,this._boundable2=null,this._distance=null,this._itemDistance=null;var t=arguments[0],e=arguments[1],n=arguments[2];this._boundable1=t,this._boundable2=e,this._itemDistance=n,this._distance=this.distance()};tl.prototype.expandToQueue=function(t,e){var n=tl.isComposite(this._boundable1),r=tl.isComposite(this._boundable2);if(n&&r)return tl.area(this._boundable1)>tl.area(this._boundable2)?(this.expand(this._boundable1,this._boundable2,t,e),null):(this.expand(this._boundable2,this._boundable1,t,e),null);if(n)return this.expand(this._boundable1,this._boundable2,t,e),null;if(r)return this.expand(this._boundable2,this._boundable1,t,e),null;throw new _u("neither boundable is composite")},tl.prototype.isLeaves=function(){return!(tl.isComposite(this._boundable1)||tl.isComposite(this._boundable2))},tl.prototype.compareTo=function(t){var e=t;return this._distance<e._distance?-1:this._distance>e._distance?1:0},tl.prototype.expand=function(t,e,n,r){for(var i=t.getChildBoundables().iterator();i.hasNext();){var o=i.next(),s=new tl(o,e,this._itemDistance);s.getDistance()<r&&n.add(s)}},tl.prototype.getBoundable=function(t){return 0===t?this._boundable1:this._boundable2},tl.prototype.getDistance=function(){return this._distance},tl.prototype.distance=function(){return this.isLeaves()?this._itemDistance.distance(this._boundable1,this._boundable2):this._boundable1.getBounds().distance(this._boundable2.getBounds())},tl.prototype.interfaces_=function(){return[xu]},tl.prototype.getClass=function(){return tl},tl.area=function(t){return t.getBounds().getArea()},tl.isComposite=function(t){return t instanceof Kh};var el=function t(){if(this._root=null,this._built=!1,this._itemBoundables=new bc,this._nodeCapacity=null,0===arguments.length){var e=t.DEFAULT_NODE_CAPACITY;this._nodeCapacity=e}else if(1===arguments.length){var n=arguments[0];tc.isTrue(n>1,"Node capacity must be greater than 1"),this._nodeCapacity=n}},nl={IntersectsOp:{configurable:!0},serialVersionUID:{configurable:!0},DEFAULT_NODE_CAPACITY:{configurable:!0}};el.prototype.getNodeCapacity=function(){return this._nodeCapacity},el.prototype.lastNode=function(t){return t.get(t.size()-1)},el.prototype.size=function(){if(0===arguments.length)return this.isEmpty()?0:(this.build(),this.size(this._root));if(1===arguments.length){for(var t=0,e=arguments[0].getChildBoundables().iterator();e.hasNext();){var n=e.next();n instanceof Kh?t+=this.size(n):n instanceof Hh&&(t+=1)}return t}},el.prototype.removeItem=function(t,e){for(var n=null,r=t.getChildBoundables().iterator();r.hasNext();){var i=r.next();i instanceof Hh&&i.getItem()===e&&(n=i)}return null!==n&&(t.getChildBoundables().remove(n),!0)},el.prototype.itemsTree=function(){if(0===arguments.length){this.build();var t=this.itemsTree(this._root);return null===t?new bc:t}if(1===arguments.length){for(var e=arguments[0],n=new bc,r=e.getChildBoundables().iterator();r.hasNext();){var i=r.next();if(i instanceof Kh){var o=this.itemsTree(i);null!==o&&n.add(o)}else i instanceof Hh?n.add(i.getItem()):tc.shouldNeverReachHere()}return n.size()<=0?null:n}},el.prototype.insert=function(t,e){tc.isTrue(!this._built,"Cannot insert items into an STR packed R-tree after it has been built."),this._itemBoundables.add(new Hh(t,e))},el.prototype.boundablesAtLevel=function(){if(1===arguments.length){var t=arguments[0],e=new bc;return this.boundablesAtLevel(t,this._root,e),e}if(3===arguments.length){var n=arguments[0],r=arguments[1],i=arguments[2];if(tc.isTrue(n>-2),r.getLevel()===n)return i.add(r),null;for(var o=r.getChildBoundables().iterator();o.hasNext();){var s=o.next();s instanceof Kh?this.boundablesAtLevel(n,s,i):(tc.isTrue(s instanceof Hh),-1===n&&i.add(s))}return null}},el.prototype.query=function(){if(1===arguments.length){var t=arguments[0];this.build();var e=new bc;return this.isEmpty()?e:(this.getIntersectsOp().intersects(this._root.getBounds(),t)&&this.query(t,this._root,e),e)}if(2===arguments.length){var n=arguments[0],r=arguments[1];if(this.build(),this.isEmpty())return null;this.getIntersectsOp().intersects(this._root.getBounds(),n)&&this.query(n,this._root,r)}else if(3===arguments.length)if(Lu(arguments[2],Jh)&&arguments[0]instanceof Object&&arguments[1]instanceof Kh)for(var i=arguments[0],o=arguments[1],s=arguments[2],a=o.getChildBoundables(),u=0;u<a.size();u++){var c=a.get(u);this.getIntersectsOp().intersects(c.getBounds(),i)&&(c instanceof Kh?this.query(i,c,s):c instanceof Hh?s.visitItem(c.getItem()):tc.shouldNeverReachHere())}else if(Lu(arguments[2],wc)&&arguments[0]instanceof Object&&arguments[1]instanceof Kh)for(var h=arguments[0],l=arguments[1],p=arguments[2],f=l.getChildBoundables(),g=0;g<f.size();g++){var d=f.get(g);this.getIntersectsOp().intersects(d.getBounds(),h)&&(d instanceof Kh?this.query(h,d,p):d instanceof Hh?p.add(d.getItem()):tc.shouldNeverReachHere())}},el.prototype.build=function(){if(this._built)return null;this._root=this._itemBoundables.isEmpty()?this.createNode(0):this.createHigherLevels(this._itemBoundables,-1),this._itemBoundables=null,this._built=!0},el.prototype.getRoot=function(){return this.build(),this._root},el.prototype.remove=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1];return this.build(),!!this.getIntersectsOp().intersects(this._root.getBounds(),t)&&this.remove(t,this._root,e)}if(3===arguments.length){var n=arguments[0],r=arguments[1],i=arguments[2],o=this.removeItem(r,i);if(o)return!0;for(var s=null,a=r.getChildBoundables().iterator();a.hasNext();){var u=a.next();if(this.getIntersectsOp().intersects(u.getBounds(),n)&&(u instanceof Kh&&(o=this.remove(n,u,i)))){s=u;break}}return null!==s&&s.getChildBoundables().isEmpty()&&r.getChildBoundables().remove(s),o}},el.prototype.createHigherLevels=function(t,e){tc.isTrue(!t.isEmpty());var n=this.createParentBoundables(t,e+1);return 1===n.size()?n.get(0):this.createHigherLevels(n,e+1)},el.prototype.depth=function(){if(0===arguments.length)return this.isEmpty()?0:(this.build(),this.depth(this._root));if(1===arguments.length){for(var t=0,e=arguments[0].getChildBoundables().iterator();e.hasNext();){var n=e.next();if(n instanceof Kh){var r=this.depth(n);r>t&&(t=r)}}return t+1}},el.prototype.createParentBoundables=function(t,e){tc.isTrue(!t.isEmpty());var n=new bc;n.add(this.createNode(e));var r=new bc(t);$h.sort(r,this.getComparator());for(var i=r.iterator();i.hasNext();){var o=i.next();this.lastNode(n).getChildBoundables().size()===this.getNodeCapacity()&&n.add(this.createNode(e)),this.lastNode(n).addChildBoundable(o)}return n},el.prototype.isEmpty=function(){return this._built?this._root.isEmpty():this._itemBoundables.isEmpty()},el.prototype.interfaces_=function(){return[Li]},el.prototype.getClass=function(){return el},el.compareDoubles=function(t,e){return t>e?1:t<e?-1:0},nl.IntersectsOp.get=function(){return rl},nl.serialVersionUID.get=function(){return-0x35ef64c82d4c5400},nl.DEFAULT_NODE_CAPACITY.get=function(){return 10},Object.defineProperties(el,nl);var rl=function(){},il=function(){};il.prototype.distance=function(t,e){},il.prototype.interfaces_=function(){return[]},il.prototype.getClass=function(){return il};var ol=function(t){function e(n){n=n||e.DEFAULT_NODE_CAPACITY,t.call(this,n)}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={STRtreeNode:{configurable:!0},serialVersionUID:{configurable:!0},xComparator:{configurable:!0},yComparator:{configurable:!0},intersectsOp:{configurable:!0},DEFAULT_NODE_CAPACITY:{configurable:!0}};return e.prototype.createParentBoundablesFromVerticalSlices=function(t,e){tc.isTrue(t.length>0);for(var n=new bc,r=0;r<t.length;r++)n.addAll(this.createParentBoundablesFromVerticalSlice(t[r],e));return n},e.prototype.createNode=function(t){return new sl(t)},e.prototype.size=function(){return 0===arguments.length?t.prototype.size.call(this):t.prototype.size.apply(this,arguments)},e.prototype.insert=function(){if(2!==arguments.length)return t.prototype.insert.apply(this,arguments);var e=arguments[0],n=arguments[1];if(e.isNull())return null;t.prototype.insert.call(this,e,n)},e.prototype.getIntersectsOp=function(){return e.intersectsOp},e.prototype.verticalSlices=function(t,e){for(var n=Math.trunc(Math.ceil(t.size()/e)),r=new Array(e).fill(null),i=t.iterator(),o=0;o<e;o++){r[o]=new bc;for(var s=0;i.hasNext()&&s<n;){var a=i.next();r[o].add(a),s++}}return r},e.prototype.query=function(){if(1===arguments.length){var e=arguments[0];return t.prototype.query.call(this,e)}if(2===arguments.length){var n=arguments[0],r=arguments[1];t.prototype.query.call(this,n,r)}else if(3===arguments.length)if(Lu(arguments[2],Jh)&&arguments[0]instanceof Object&&arguments[1]instanceof Kh){var i=arguments[0],o=arguments[1],s=arguments[2];t.prototype.query.call(this,i,o,s)}else if(Lu(arguments[2],wc)&&arguments[0]instanceof Object&&arguments[1]instanceof Kh){var a=arguments[0],u=arguments[1],c=arguments[2];t.prototype.query.call(this,a,u,c)}},e.prototype.getComparator=function(){return e.yComparator},e.prototype.createParentBoundablesFromVerticalSlice=function(e,n){return t.prototype.createParentBoundables.call(this,e,n)},e.prototype.remove=function(){if(2===arguments.length){var e=arguments[0],n=arguments[1];return t.prototype.remove.call(this,e,n)}return t.prototype.remove.apply(this,arguments)},e.prototype.depth=function(){return 0===arguments.length?t.prototype.depth.call(this):t.prototype.depth.apply(this,arguments)},e.prototype.createParentBoundables=function(t,n){tc.isTrue(!t.isEmpty());var r=Math.trunc(Math.ceil(t.size()/this.getNodeCapacity())),i=new bc(t);$h.sort(i,e.xComparator);var o=this.verticalSlices(i,Math.trunc(Math.ceil(Math.sqrt(r))));return this.createParentBoundablesFromVerticalSlices(o,n)},e.prototype.nearestNeighbour=function(){if(1===arguments.length){if(Lu(arguments[0],il)){var t=arguments[0],n=new tl(this.getRoot(),this.getRoot(),t);return this.nearestNeighbour(n)}if(arguments[0]instanceof tl){var r=arguments[0];return this.nearestNeighbour(r,mu.POSITIVE_INFINITY)}}else if(2===arguments.length){if(arguments[0]instanceof e&&Lu(arguments[1],il)){var i=arguments[0],o=arguments[1],s=new tl(this.getRoot(),i.getRoot(),o);return this.nearestNeighbour(s)}if(arguments[0]instanceof tl&&"number"==typeof arguments[1]){var a=arguments[0],u=arguments[1],c=null,h=new Wh;for(h.add(a);!h.isEmpty()&&u>0;){var l=h.poll(),p=l.getDistance();if(p>=u)break;l.isLeaves()?(u=p,c=l):l.expandToQueue(h,u)}return[c.getBoundable(0).getItem(),c.getBoundable(1).getItem()]}}else if(3===arguments.length){var f=arguments[0],g=arguments[1],d=arguments[2],y=new Hh(f,g),_=new tl(this.getRoot(),y,d);return this.nearestNeighbour(_)[0]}},e.prototype.interfaces_=function(){return[Zh,Li]},e.prototype.getClass=function(){return e},e.centreX=function(t){return e.avg(t.getMinX(),t.getMaxX())},e.avg=function(t,e){return(t+e)/2},e.centreY=function(t){return e.avg(t.getMinY(),t.getMaxY())},n.STRtreeNode.get=function(){return sl},n.serialVersionUID.get=function(){return 0x39920f7d5f261e0},n.xComparator.get=function(){return{interfaces_:function(){return[wu]},compare:function(n,r){return t.compareDoubles(e.centreX(n.getBounds()),e.centreX(r.getBounds()))}}},n.yComparator.get=function(){return{interfaces_:function(){return[wu]},compare:function(n,r){return t.compareDoubles(e.centreY(n.getBounds()),e.centreY(r.getBounds()))}}},n.intersectsOp.get=function(){return{interfaces_:function(){return[t.IntersectsOp]},intersects:function(t,e){return t.intersects(e)}}},n.DEFAULT_NODE_CAPACITY.get=function(){return 10},Object.defineProperties(e,n),e}(el),sl=function(t){function e(){var e=arguments[0];t.call(this,e)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.computeBounds=function(){for(var t=null,e=this.getChildBoundables().iterator();e.hasNext();){var n=e.next();null===t?t=new Yu(n.getBounds()):t.expandToInclude(n.getBounds())}return t},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(Kh),al=function(){};al.prototype.interfaces_=function(){return[]},al.prototype.getClass=function(){return al},al.relativeSign=function(t,e){return t<e?-1:t>e?1:0},al.compare=function(t,e,n){if(e.equals2D(n))return 0;var r=al.relativeSign(e.x,n.x),i=al.relativeSign(e.y,n.y);switch(t){case 0:return al.compareValue(r,i);case 1:return al.compareValue(i,r);case 2:return al.compareValue(i,-r);case 3:return al.compareValue(-r,i);case 4:return al.compareValue(-r,-i);case 5:return al.compareValue(-i,-r);case 6:return al.compareValue(-i,r);case 7:return al.compareValue(r,-i)}return tc.shouldNeverReachHere("invalid octant value"),0},al.compareValue=function(t,e){return t<0?-1:t>0?1:e<0?-1:e>0?1:0};var ul=function(){this._segString=null,this.coord=null,this.segmentIndex=null,this._segmentOctant=null,this._isInterior=null;var t=arguments[0],e=arguments[1],n=arguments[2],r=arguments[3];this._segString=t,this.coord=new bu(e),this.segmentIndex=n,this._segmentOctant=r,this._isInterior=!e.equals2D(t.getCoordinate(n))};ul.prototype.getCoordinate=function(){return this.coord},ul.prototype.print=function(t){t.print(this.coord),t.print(" seg # = "+this.segmentIndex)},ul.prototype.compareTo=function(t){var e=t;return this.segmentIndex<e.segmentIndex?-1:this.segmentIndex>e.segmentIndex?1:this.coord.equals2D(e.coord)?0:al.compare(this._segmentOctant,this.coord,e.coord)},ul.prototype.isEndPoint=function(t){return 0===this.segmentIndex&&!this._isInterior||this.segmentIndex===t},ul.prototype.isInterior=function(){return this._isInterior},ul.prototype.interfaces_=function(){return[xu]},ul.prototype.getClass=function(){return ul};var cl=function(){this._nodeMap=new Gi,this._edge=null;var t=arguments[0];this._edge=t};cl.prototype.getSplitCoordinates=function(){var t=new Nc;this.addEndpoints();for(var e=this.iterator(),n=e.next();e.hasNext();){var r=e.next();this.addEdgeCoordinates(n,r,t),n=r}return t.toCoordinateArray()},cl.prototype.addCollapsedNodes=function(){var t=new bc;this.findCollapsesFromInsertedNodes(t),this.findCollapsesFromExistingVertices(t);for(var e=t.iterator();e.hasNext();){var n=e.next().intValue();this.add(this._edge.getCoordinate(n),n)}},cl.prototype.print=function(t){t.println("Intersections:");for(var e=this.iterator();e.hasNext();){e.next().print(t)}},cl.prototype.findCollapsesFromExistingVertices=function(t){for(var e=0;e<this._edge.size()-2;e++){var n=this._edge.getCoordinate(e),r=this._edge.getCoordinate(e+2);n.equals2D(r)&&t.add(new Tu(e+1))}},cl.prototype.addEdgeCoordinates=function(t,e,n){var r=this._edge.getCoordinate(e.segmentIndex),i=e.isInterior()||!e.coord.equals2D(r);n.add(new bu(t.coord),!1);for(var o=t.segmentIndex+1;o<=e.segmentIndex;o++)n.add(this._edge.getCoordinate(o));i&&n.add(new bu(e.coord))},cl.prototype.iterator=function(){return this._nodeMap.values().iterator()},cl.prototype.addSplitEdges=function(t){this.addEndpoints(),this.addCollapsedNodes();for(var e=this.iterator(),n=e.next();e.hasNext();){var r=e.next(),i=this.createSplitEdge(n,r);t.add(i),n=r}},cl.prototype.findCollapseIndex=function(t,e,n){if(!t.coord.equals2D(e.coord))return!1;var r=e.segmentIndex-t.segmentIndex;return e.isInterior()||r--,1===r&&(n[0]=t.segmentIndex+1,!0)},cl.prototype.findCollapsesFromInsertedNodes=function(t){for(var e=new Array(1).fill(null),n=this.iterator(),r=n.next();n.hasNext();){var i=n.next();this.findCollapseIndex(r,i,e)&&t.add(new Tu(e[0])),r=i}},cl.prototype.getEdge=function(){return this._edge},cl.prototype.addEndpoints=function(){var t=this._edge.size()-1;this.add(this._edge.getCoordinate(0),0),this.add(this._edge.getCoordinate(t),t)},cl.prototype.createSplitEdge=function(t,e){var n=e.segmentIndex-t.segmentIndex+2,r=this._edge.getCoordinate(e.segmentIndex),i=e.isInterior()||!e.coord.equals2D(r);i||n--;var o=new Array(n).fill(null),s=0;o[s++]=new bu(t.coord);for(var a=t.segmentIndex+1;a<=e.segmentIndex;a++)o[s++]=this._edge.getCoordinate(a);return i&&(o[s]=new bu(e.coord)),new fl(o,this._edge.getData())},cl.prototype.add=function(t,e){var n=new ul(this._edge,t,e,this._edge.getSegmentOctant(e)),r=this._nodeMap.get(n);return null!==r?(tc.isTrue(r.coord.equals2D(t),"Found equal nodes with different coordinates"),r):(this._nodeMap.put(n,n),n)},cl.prototype.checkSplitEdgesCorrectness=function(t){var e=this._edge.getCoordinates(),n=t.get(0).getCoordinate(0);if(!n.equals2D(e[0]))throw new Qu("bad split edge start point at "+n);var r=t.get(t.size()-1).getCoordinates(),i=r[r.length-1];if(!i.equals2D(e[e.length-1]))throw new Qu("bad split edge end point at "+i)},cl.prototype.interfaces_=function(){return[]},cl.prototype.getClass=function(){return cl};var hl=function(){};hl.prototype.interfaces_=function(){return[]},hl.prototype.getClass=function(){return hl},hl.octant=function(){if("number"==typeof arguments[0]&&"number"==typeof arguments[1]){var t=arguments[0],e=arguments[1];if(0===t&&0===e)throw new _u("Cannot compute the octant for point ( "+t+", "+e+" )");var n=Math.abs(t),r=Math.abs(e);return t>=0?e>=0?n>=r?0:1:n>=r?7:6:e>=0?n>=r?3:2:n>=r?4:5}if(arguments[0]instanceof bu&&arguments[1]instanceof bu){var i=arguments[0],o=arguments[1],s=o.x-i.x,a=o.y-i.y;if(0===s&&0===a)throw new _u("Cannot compute the octant for two identical points "+i);return hl.octant(s,a)}};var ll=function(){};ll.prototype.getCoordinates=function(){},ll.prototype.size=function(){},ll.prototype.getCoordinate=function(t){},ll.prototype.isClosed=function(){},ll.prototype.setData=function(t){},ll.prototype.getData=function(){},ll.prototype.interfaces_=function(){return[]},ll.prototype.getClass=function(){return ll};var pl=function(){};pl.prototype.addIntersection=function(t,e){},pl.prototype.interfaces_=function(){return[ll]},pl.prototype.getClass=function(){return pl};var fl=function(){this._nodeList=new cl(this),this._pts=null,this._data=null;var t=arguments[0],e=arguments[1];this._pts=t,this._data=e};fl.prototype.getCoordinates=function(){return this._pts},fl.prototype.size=function(){return this._pts.length},fl.prototype.getCoordinate=function(t){return this._pts[t]},fl.prototype.isClosed=function(){return this._pts[0].equals(this._pts[this._pts.length-1])},fl.prototype.getSegmentOctant=function(t){return t===this._pts.length-1?-1:this.safeOctant(this.getCoordinate(t),this.getCoordinate(t+1))},fl.prototype.setData=function(t){this._data=t},fl.prototype.safeOctant=function(t,e){return t.equals2D(e)?0:hl.octant(t,e)},fl.prototype.getData=function(){return this._data},fl.prototype.addIntersection=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1];this.addIntersectionNode(t,e)}else if(4===arguments.length){var n=arguments[0],r=arguments[1],i=arguments[3],o=new bu(n.getIntersection(i));this.addIntersection(o,r)}},fl.prototype.toString=function(){return Ku.toLineString(new uh(this._pts))},fl.prototype.getNodeList=function(){return this._nodeList},fl.prototype.addIntersectionNode=function(t,e){var n=e,r=n+1;if(r<this._pts.length){var i=this._pts[r];t.equals2D(i)&&(n=r)}return this._nodeList.add(t,n)},fl.prototype.addIntersections=function(t,e,n){for(var r=0;r<t.getIntersectionNum();r++)this.addIntersection(t,e,n,r)},fl.prototype.interfaces_=function(){return[pl]},fl.prototype.getClass=function(){return fl},fl.getNodedSubstrings=function(){if(1===arguments.length){var t=arguments[0],e=new bc;return fl.getNodedSubstrings(t,e),e}if(2===arguments.length)for(var n=arguments[0],r=arguments[1],i=n.iterator();i.hasNext();){i.next().getNodeList().addSplitEdges(r)}};var gl=function(){if(this.p0=null,this.p1=null,0===arguments.length)this.p0=new bu,this.p1=new bu;else if(1===arguments.length){var t=arguments[0];this.p0=new bu(t.p0),this.p1=new bu(t.p1)}else if(2===arguments.length)this.p0=arguments[0],this.p1=arguments[1];else if(4===arguments.length){var e=arguments[0],n=arguments[1],r=arguments[2],i=arguments[3];this.p0=new bu(e,n),this.p1=new bu(r,i)}},dl={serialVersionUID:{configurable:!0}};gl.prototype.minX=function(){return Math.min(this.p0.x,this.p1.x)},gl.prototype.orientationIndex=function(){if(arguments[0]instanceof gl){var t=arguments[0],e=sc.orientationIndex(this.p0,this.p1,t.p0),n=sc.orientationIndex(this.p0,this.p1,t.p1);return e>=0&&n>=0?Math.max(e,n):e<=0&&n<=0?Math.max(e,n):0}if(arguments[0]instanceof bu){var r=arguments[0];return sc.orientationIndex(this.p0,this.p1,r)}},gl.prototype.toGeometry=function(t){return t.createLineString([this.p0,this.p1])},gl.prototype.isVertical=function(){return this.p0.x===this.p1.x},gl.prototype.equals=function(t){if(!(t instanceof gl))return!1;var e=t;return this.p0.equals(e.p0)&&this.p1.equals(e.p1)},gl.prototype.intersection=function(t){var e=new rc;return e.computeIntersection(this.p0,this.p1,t.p0,t.p1),e.hasIntersection()?e.getIntersection(0):null},gl.prototype.project=function(){if(arguments[0]instanceof bu){var t=arguments[0];if(t.equals(this.p0)||t.equals(this.p1))return new bu(t);var e=this.projectionFactor(t),n=new bu;return n.x=this.p0.x+e*(this.p1.x-this.p0.x),n.y=this.p0.y+e*(this.p1.y-this.p0.y),n}if(arguments[0]instanceof gl){var r=arguments[0],i=this.projectionFactor(r.p0),o=this.projectionFactor(r.p1);if(i>=1&&o>=1)return null;if(i<=0&&o<=0)return null;var s=this.project(r.p0);i<0&&(s=this.p0),i>1&&(s=this.p1);var a=this.project(r.p1);return o<0&&(a=this.p0),o>1&&(a=this.p1),new gl(s,a)}},gl.prototype.normalize=function(){this.p1.compareTo(this.p0)<0&&this.reverse()},gl.prototype.angle=function(){return Math.atan2(this.p1.y-this.p0.y,this.p1.x-this.p0.x)},gl.prototype.getCoordinate=function(t){return 0===t?this.p0:this.p1},gl.prototype.distancePerpendicular=function(t){return sc.distancePointLinePerpendicular(t,this.p0,this.p1)},gl.prototype.minY=function(){return Math.min(this.p0.y,this.p1.y)},gl.prototype.midPoint=function(){return gl.midPoint(this.p0,this.p1)},gl.prototype.projectionFactor=function(t){if(t.equals(this.p0))return 0;if(t.equals(this.p1))return 1;var e=this.p1.x-this.p0.x,n=this.p1.y-this.p0.y,r=e*e+n*n;if(r<=0)return mu.NaN;return((t.x-this.p0.x)*e+(t.y-this.p0.y)*n)/r},gl.prototype.closestPoints=function(t){var e=this.intersection(t);if(null!==e)return[e,e];var n=new Array(2).fill(null),r=mu.MAX_VALUE,i=null,o=this.closestPoint(t.p0);r=o.distance(t.p0),n[0]=o,n[1]=t.p0;var s=this.closestPoint(t.p1);(i=s.distance(t.p1))<r&&(r=i,n[0]=s,n[1]=t.p1);var a=t.closestPoint(this.p0);(i=a.distance(this.p0))<r&&(r=i,n[0]=this.p0,n[1]=a);var u=t.closestPoint(this.p1);return(i=u.distance(this.p1))<r&&(r=i,n[0]=this.p1,n[1]=u),n},gl.prototype.closestPoint=function(t){var e=this.projectionFactor(t);if(e>0&&e<1)return this.project(t);return this.p0.distance(t)<this.p1.distance(t)?this.p0:this.p1},gl.prototype.maxX=function(){return Math.max(this.p0.x,this.p1.x)},gl.prototype.getLength=function(){return this.p0.distance(this.p1)},gl.prototype.compareTo=function(t){var e=t,n=this.p0.compareTo(e.p0);return 0!==n?n:this.p1.compareTo(e.p1)},gl.prototype.reverse=function(){var t=this.p0;this.p0=this.p1,this.p1=t},gl.prototype.equalsTopo=function(t){return this.p0.equals(t.p0)&&(this.p1.equals(t.p1)||this.p0.equals(t.p1))&&this.p1.equals(t.p0)},gl.prototype.lineIntersection=function(t){try{return Uu.intersection(this.p0,this.p1,t.p0,t.p1)}catch(t){if(!(t instanceof ju))throw t}return null},gl.prototype.maxY=function(){return Math.max(this.p0.y,this.p1.y)},gl.prototype.pointAlongOffset=function(t,e){var n=this.p0.x+t*(this.p1.x-this.p0.x),r=this.p0.y+t*(this.p1.y-this.p0.y),i=this.p1.x-this.p0.x,o=this.p1.y-this.p0.y,s=Math.sqrt(i*i+o*o),a=0,u=0;if(0!==e){if(s<=0)throw new Error("Cannot compute offset from zero-length line segment");a=e*i/s,u=e*o/s}return new bu(n-u,r+a)},gl.prototype.setCoordinates=function(){if(1===arguments.length){var t=arguments[0];this.setCoordinates(t.p0,t.p1)}else if(2===arguments.length){var e=arguments[0],n=arguments[1];this.p0.x=e.x,this.p0.y=e.y,this.p1.x=n.x,this.p1.y=n.y}},gl.prototype.segmentFraction=function(t){var e=this.projectionFactor(t);return e<0?e=0:(e>1||mu.isNaN(e))&&(e=1),e},gl.prototype.toString=function(){return"LINESTRING( "+this.p0.x+" "+this.p0.y+", "+this.p1.x+" "+this.p1.y+")"},gl.prototype.isHorizontal=function(){return this.p0.y===this.p1.y},gl.prototype.distance=function(){if(arguments[0]instanceof gl){var t=arguments[0];return sc.distanceLineLine(this.p0,this.p1,t.p0,t.p1)}if(arguments[0]instanceof bu){var e=arguments[0];return sc.distancePointLine(e,this.p0,this.p1)}},gl.prototype.pointAlong=function(t){var e=new bu;return e.x=this.p0.x+t*(this.p1.x-this.p0.x),e.y=this.p0.y+t*(this.p1.y-this.p0.y),e},gl.prototype.hashCode=function(){var t=mu.doubleToLongBits(this.p0.x);t^=31*mu.doubleToLongBits(this.p0.y);var e=Math.trunc(t)^Math.trunc(t>>32),n=mu.doubleToLongBits(this.p1.x);n^=31*mu.doubleToLongBits(this.p1.y);return e^(Math.trunc(n)^Math.trunc(n>>32))},gl.prototype.interfaces_=function(){return[xu,Li]},gl.prototype.getClass=function(){return gl},gl.midPoint=function(t,e){return new bu((t.x+e.x)/2,(t.y+e.y)/2)},dl.serialVersionUID.get=function(){return 0x2d2172135f411c00},Object.defineProperties(gl,dl);var yl=function(){this.tempEnv1=new Yu,this.tempEnv2=new Yu,this._overlapSeg1=new gl,this._overlapSeg2=new gl};yl.prototype.overlap=function(){if(2===arguments.length);else if(4===arguments.length){var t=arguments[0],e=arguments[1],n=arguments[2],r=arguments[3];t.getLineSegment(e,this._overlapSeg1),n.getLineSegment(r,this._overlapSeg2),this.overlap(this._overlapSeg1,this._overlapSeg2)}},yl.prototype.interfaces_=function(){return[]},yl.prototype.getClass=function(){return yl};var _l=function(){this._pts=null,this._start=null,this._end=null,this._env=null,this._context=null,this._id=null;var t=arguments[0],e=arguments[1],n=arguments[2],r=arguments[3];this._pts=t,this._start=e,this._end=n,this._context=r};_l.prototype.getLineSegment=function(t,e){e.p0=this._pts[t],e.p1=this._pts[t+1]},_l.prototype.computeSelect=function(t,e,n,r){var i=this._pts[e],o=this._pts[n];if(r.tempEnv1.init(i,o),n-e==1)return r.select(this,e),null;if(!t.intersects(r.tempEnv1))return null;var s=Math.trunc((e+n)/2);e<s&&this.computeSelect(t,e,s,r),s<n&&this.computeSelect(t,s,n,r)},_l.prototype.getCoordinates=function(){for(var t=new Array(this._end-this._start+1).fill(null),e=0,n=this._start;n<=this._end;n++)t[e++]=this._pts[n];return t},_l.prototype.computeOverlaps=function(t,e){this.computeOverlapsInternal(this._start,this._end,t,t._start,t._end,e)},_l.prototype.setId=function(t){this._id=t},_l.prototype.select=function(t,e){this.computeSelect(t,this._start,this._end,e)},_l.prototype.getEnvelope=function(){if(null===this._env){var t=this._pts[this._start],e=this._pts[this._end];this._env=new Yu(t,e)}return this._env},_l.prototype.getEndIndex=function(){return this._end},_l.prototype.getStartIndex=function(){return this._start},_l.prototype.getContext=function(){return this._context},_l.prototype.getId=function(){return this._id},_l.prototype.computeOverlapsInternal=function(t,e,n,r,i,o){var s=this._pts[t],a=this._pts[e],u=n._pts[r],c=n._pts[i];if(e-t==1&&i-r==1)return o.overlap(this,t,n,r),null;if(o.tempEnv1.init(s,a),o.tempEnv2.init(u,c),!o.tempEnv1.intersects(o.tempEnv2))return null;var h=Math.trunc((t+e)/2),l=Math.trunc((r+i)/2);t<h&&(r<l&&this.computeOverlapsInternal(t,h,n,r,l,o),l<i&&this.computeOverlapsInternal(t,h,n,l,i,o)),h<e&&(r<l&&this.computeOverlapsInternal(h,e,n,r,l,o),l<i&&this.computeOverlapsInternal(h,e,n,l,i,o))},_l.prototype.interfaces_=function(){return[]},_l.prototype.getClass=function(){return _l};var ml=function(){};ml.prototype.interfaces_=function(){return[]},ml.prototype.getClass=function(){return ml},ml.getChainStartIndices=function(t){var e=0,n=new bc;n.add(new Tu(e));do{var r=ml.findChainEnd(t,e);n.add(new Tu(r)),e=r}while(e<t.length-1);return ml.toIntArray(n)},ml.findChainEnd=function(t,e){for(var n=e;n<t.length-1&&t[n].equals2D(t[n+1]);)n++;if(n>=t.length-1)return t.length-1;for(var r=Bh.quadrant(t[n],t[n+1]),i=e+1;i<t.length;){if(!t[i-1].equals2D(t[i])){if(Bh.quadrant(t[i-1],t[i])!==r)break}i++}return i-1},ml.getChains=function(){if(1===arguments.length){var t=arguments[0];return ml.getChains(t,null)}if(2===arguments.length){for(var e=arguments[0],n=arguments[1],r=new bc,i=ml.getChainStartIndices(e),o=0;o<i.length-1;o++){var s=new _l(e,i[o],i[o+1],n);r.add(s)}return r}},ml.toIntArray=function(t){for(var e=new Array(t.size()).fill(null),n=0;n<e.length;n++)e[n]=t.get(n).intValue();return e};var vl=function(){};vl.prototype.computeNodes=function(t){},vl.prototype.getNodedSubstrings=function(){},vl.prototype.interfaces_=function(){return[]},vl.prototype.getClass=function(){return vl};var xl=function(){if(this._segInt=null,0===arguments.length);else if(1===arguments.length){var t=arguments[0];this.setSegmentIntersector(t)}};xl.prototype.setSegmentIntersector=function(t){this._segInt=t},xl.prototype.interfaces_=function(){return[vl]},xl.prototype.getClass=function(){return xl};var El=function(t){function e(e){e?t.call(this,e):t.call(this),this._monoChains=new bc,this._index=new ol,this._idCounter=0,this._nodedSegStrings=null,this._nOverlaps=0}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={SegmentOverlapAction:{configurable:!0}};return e.prototype.getMonotoneChains=function(){return this._monoChains},e.prototype.getNodedSubstrings=function(){return fl.getNodedSubstrings(this._nodedSegStrings)},e.prototype.getIndex=function(){return this._index},e.prototype.add=function(t){for(var e=ml.getChains(t.getCoordinates(),t).iterator();e.hasNext();){var n=e.next();n.setId(this._idCounter++),this._index.insert(n.getEnvelope(),n),this._monoChains.add(n)}},e.prototype.computeNodes=function(t){this._nodedSegStrings=t;for(var e=t.iterator();e.hasNext();)this.add(e.next());this.intersectChains()},e.prototype.intersectChains=function(){for(var t=new wl(this._segInt),e=this._monoChains.iterator();e.hasNext();)for(var n=e.next(),r=this._index.query(n.getEnvelope()).iterator();r.hasNext();){var i=r.next();if(i.getId()>n.getId()&&(n.computeOverlaps(i,t),this._nOverlaps++),this._segInt.isDone())return null}},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},n.SegmentOverlapAction.get=function(){return wl},Object.defineProperties(e,n),e}(xl),wl=function(t){function e(){t.call(this),this._si=null;var e=arguments[0];this._si=e}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.overlap=function(){if(4!==arguments.length)return t.prototype.overlap.apply(this,arguments);var e=arguments[0],n=arguments[1],r=arguments[2],i=arguments[3],o=e.getContext(),s=r.getContext();this._si.processIntersections(o,n,s,i)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(yl),bl=function t(){if(this._quadrantSegments=t.DEFAULT_QUADRANT_SEGMENTS,this._endCapStyle=t.CAP_ROUND,this._joinStyle=t.JOIN_ROUND,this._mitreLimit=t.DEFAULT_MITRE_LIMIT,this._isSingleSided=!1,this._simplifyFactor=t.DEFAULT_SIMPLIFY_FACTOR,0===arguments.length);else if(1===arguments.length){var e=arguments[0];this.setQuadrantSegments(e)}else if(2===arguments.length){var n=arguments[0],r=arguments[1];this.setQuadrantSegments(n),this.setEndCapStyle(r)}else if(4===arguments.length){var i=arguments[0],o=arguments[1],s=arguments[2],a=arguments[3];this.setQuadrantSegments(i),this.setEndCapStyle(o),this.setJoinStyle(s),this.setMitreLimit(a)}},Il={CAP_ROUND:{configurable:!0},CAP_FLAT:{configurable:!0},CAP_SQUARE:{configurable:!0},JOIN_ROUND:{configurable:!0},JOIN_MITRE:{configurable:!0},JOIN_BEVEL:{configurable:!0},DEFAULT_QUADRANT_SEGMENTS:{configurable:!0},DEFAULT_MITRE_LIMIT:{configurable:!0},DEFAULT_SIMPLIFY_FACTOR:{configurable:!0}};bl.prototype.getEndCapStyle=function(){return this._endCapStyle},bl.prototype.isSingleSided=function(){return this._isSingleSided},bl.prototype.setQuadrantSegments=function(t){this._quadrantSegments=t,0===this._quadrantSegments&&(this._joinStyle=bl.JOIN_BEVEL),this._quadrantSegments<0&&(this._joinStyle=bl.JOIN_MITRE,this._mitreLimit=Math.abs(this._quadrantSegments)),t<=0&&(this._quadrantSegments=1),this._joinStyle!==bl.JOIN_ROUND&&(this._quadrantSegments=bl.DEFAULT_QUADRANT_SEGMENTS)},bl.prototype.getJoinStyle=function(){return this._joinStyle},bl.prototype.setJoinStyle=function(t){this._joinStyle=t},bl.prototype.setSimplifyFactor=function(t){this._simplifyFactor=t<0?0:t},bl.prototype.getSimplifyFactor=function(){return this._simplifyFactor},bl.prototype.getQuadrantSegments=function(){return this._quadrantSegments},bl.prototype.setEndCapStyle=function(t){this._endCapStyle=t},bl.prototype.getMitreLimit=function(){return this._mitreLimit},bl.prototype.setMitreLimit=function(t){this._mitreLimit=t},bl.prototype.setSingleSided=function(t){this._isSingleSided=t},bl.prototype.interfaces_=function(){return[]},bl.prototype.getClass=function(){return bl},bl.bufferDistanceError=function(t){var e=Math.PI/2/t;return 1-Math.cos(e/2)},Il.CAP_ROUND.get=function(){return 1},Il.CAP_FLAT.get=function(){return 2},Il.CAP_SQUARE.get=function(){return 3},Il.JOIN_ROUND.get=function(){return 1},Il.JOIN_MITRE.get=function(){return 2},Il.JOIN_BEVEL.get=function(){return 3},Il.DEFAULT_QUADRANT_SEGMENTS.get=function(){return 8},Il.DEFAULT_MITRE_LIMIT.get=function(){return 5},Il.DEFAULT_SIMPLIFY_FACTOR.get=function(){return.01},Object.defineProperties(bl,Il);var Nl=function(t){this._distanceTol=null,this._isDeleted=null,this._angleOrientation=sc.COUNTERCLOCKWISE,this._inputLine=t||null},Cl={INIT:{configurable:!0},DELETE:{configurable:!0},KEEP:{configurable:!0},NUM_PTS_TO_CHECK:{configurable:!0}};Nl.prototype.isDeletable=function(t,e,n,r){var i=this._inputLine[t],o=this._inputLine[e],s=this._inputLine[n];return!!this.isConcave(i,o,s)&&(!!this.isShallow(i,o,s,r)&&this.isShallowSampled(i,o,t,n,r))},Nl.prototype.deleteShallowConcavities=function(){for(var t=1,e=this.findNextNonDeletedIndex(t),n=this.findNextNonDeletedIndex(e),r=!1;n<this._inputLine.length;){var i=!1;this.isDeletable(t,e,n,this._distanceTol)&&(this._isDeleted[e]=Nl.DELETE,i=!0,r=!0),t=i?n:e,e=this.findNextNonDeletedIndex(t),n=this.findNextNonDeletedIndex(e)}return r},Nl.prototype.isShallowConcavity=function(t,e,n,r){if(!(sc.computeOrientation(t,e,n)===this._angleOrientation))return!1;return sc.distancePointLine(e,t,n)<r},Nl.prototype.isShallowSampled=function(t,e,n,r,i){var o=Math.trunc((r-n)/Nl.NUM_PTS_TO_CHECK);o<=0&&(o=1);for(var s=n;s<r;s+=o)if(!this.isShallow(t,e,this._inputLine[s],i))return!1;return!0},Nl.prototype.isConcave=function(t,e,n){var r=sc.computeOrientation(t,e,n)===this._angleOrientation;return r},Nl.prototype.simplify=function(t){this._distanceTol=Math.abs(t),t<0&&(this._angleOrientation=sc.CLOCKWISE),this._isDeleted=new Array(this._inputLine.length).fill(null);var e=!1;do{e=this.deleteShallowConcavities()}while(e);return this.collapseLine()},Nl.prototype.findNextNonDeletedIndex=function(t){for(var e=t+1;e<this._inputLine.length&&this._isDeleted[e]===Nl.DELETE;)e++;return e},Nl.prototype.isShallow=function(t,e,n,r){return sc.distancePointLine(e,t,n)<r},Nl.prototype.collapseLine=function(){for(var t=new Nc,e=0;e<this._inputLine.length;e++)this._isDeleted[e]!==Nl.DELETE&&t.add(this._inputLine[e]);return t.toCoordinateArray()},Nl.prototype.interfaces_=function(){return[]},Nl.prototype.getClass=function(){return Nl},Nl.simplify=function(t,e){return new Nl(t).simplify(e)},Cl.INIT.get=function(){return 0},Cl.DELETE.get=function(){return 1},Cl.KEEP.get=function(){return 1},Cl.NUM_PTS_TO_CHECK.get=function(){return 10},Object.defineProperties(Nl,Cl);var Sl=function(){this._ptList=null,this._precisionModel=null,this._minimimVertexDistance=0,this._ptList=new bc},Ml={COORDINATE_ARRAY_TYPE:{configurable:!0}};Sl.prototype.getCoordinates=function(){return this._ptList.toArray(Sl.COORDINATE_ARRAY_TYPE)},Sl.prototype.setPrecisionModel=function(t){this._precisionModel=t},Sl.prototype.addPt=function(t){var e=new bu(t);if(this._precisionModel.makePrecise(e),this.isRedundant(e))return null;this._ptList.add(e)},Sl.prototype.revere=function(){},Sl.prototype.addPts=function(t,e){if(e)for(var n=0;n<t.length;n++)this.addPt(t[n]);else for(var r=t.length-1;r>=0;r--)this.addPt(t[r])},Sl.prototype.isRedundant=function(t){if(this._ptList.size()<1)return!1;var e=this._ptList.get(this._ptList.size()-1);return t.distance(e)<this._minimimVertexDistance},Sl.prototype.toString=function(){return(new _h).createLineString(this.getCoordinates()).toString()},Sl.prototype.closeRing=function(){if(this._ptList.size()<1)return null;var t=new bu(this._ptList.get(0)),e=this._ptList.get(this._ptList.size()-1);if(t.equals(e))return null;this._ptList.add(t)},Sl.prototype.setMinimumVertexDistance=function(t){this._minimimVertexDistance=t},Sl.prototype.interfaces_=function(){return[]},Sl.prototype.getClass=function(){return Sl},Ml.COORDINATE_ARRAY_TYPE.get=function(){return new Array(0).fill(null)},Object.defineProperties(Sl,Ml);var Ll=function(){},Pl={PI_TIMES_2:{configurable:!0},PI_OVER_2:{configurable:!0},PI_OVER_4:{configurable:!0},COUNTERCLOCKWISE:{configurable:!0},CLOCKWISE:{configurable:!0},NONE:{configurable:!0}};Ll.prototype.interfaces_=function(){return[]},Ll.prototype.getClass=function(){return Ll},Ll.toDegrees=function(t){return 180*t/Math.PI},Ll.normalize=function(t){for(;t>Math.PI;)t-=Ll.PI_TIMES_2;for(;t<=-Math.PI;)t+=Ll.PI_TIMES_2;return t},Ll.angle=function(){if(1===arguments.length){var t=arguments[0];return Math.atan2(t.y,t.x)}if(2===arguments.length){var e=arguments[0],n=arguments[1],r=n.x-e.x,i=n.y-e.y;return Math.atan2(i,r)}},Ll.isAcute=function(t,e,n){var r=t.x-e.x,i=t.y-e.y;return r*(n.x-e.x)+i*(n.y-e.y)>0},Ll.isObtuse=function(t,e,n){var r=t.x-e.x,i=t.y-e.y;return r*(n.x-e.x)+i*(n.y-e.y)<0},Ll.interiorAngle=function(t,e,n){var r=Ll.angle(e,t),i=Ll.angle(e,n);return Math.abs(i-r)},Ll.normalizePositive=function(t){if(t<0){for(;t<0;)t+=Ll.PI_TIMES_2;t>=Ll.PI_TIMES_2&&(t=0)}else{for(;t>=Ll.PI_TIMES_2;)t-=Ll.PI_TIMES_2;t<0&&(t=0)}return t},Ll.angleBetween=function(t,e,n){var r=Ll.angle(e,t),i=Ll.angle(e,n);return Ll.diff(r,i)},Ll.diff=function(t,e){var n=null;return(n=t<e?e-t:t-e)>Math.PI&&(n=2*Math.PI-n),n},Ll.toRadians=function(t){return t*Math.PI/180},Ll.getTurn=function(t,e){var n=Math.sin(e-t);return n>0?Ll.COUNTERCLOCKWISE:n<0?Ll.CLOCKWISE:Ll.NONE},Ll.angleBetweenOriented=function(t,e,n){var r=Ll.angle(e,t),i=Ll.angle(e,n)-r;return i<=-Math.PI?i+Ll.PI_TIMES_2:i>Math.PI?i-Ll.PI_TIMES_2:i},Pl.PI_TIMES_2.get=function(){return 2*Math.PI},Pl.PI_OVER_2.get=function(){return Math.PI/2},Pl.PI_OVER_4.get=function(){return Math.PI/4},Pl.COUNTERCLOCKWISE.get=function(){return sc.COUNTERCLOCKWISE},Pl.CLOCKWISE.get=function(){return sc.CLOCKWISE},Pl.NONE.get=function(){return sc.COLLINEAR},Object.defineProperties(Ll,Pl);var Ol=function t(){this._maxCurveSegmentError=0,this._filletAngleQuantum=null,this._closingSegLengthFactor=1,this._segList=null,this._distance=0,this._precisionModel=null,this._bufParams=null,this._li=null,this._s0=null,this._s1=null,this._s2=null,this._seg0=new gl,this._seg1=new gl,this._offset0=new gl,this._offset1=new gl,this._side=0,this._hasNarrowConcaveAngle=!1;var e=arguments[0],n=arguments[1],r=arguments[2];this._precisionModel=e,this._bufParams=n,this._li=new rc,this._filletAngleQuantum=Math.PI/2/n.getQuadrantSegments(),n.getQuadrantSegments()>=8&&n.getJoinStyle()===bl.JOIN_ROUND&&(this._closingSegLengthFactor=t.MAX_CLOSING_SEG_LEN_FACTOR),this.init(r)},Rl={OFFSET_SEGMENT_SEPARATION_FACTOR:{configurable:!0},INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR:{configurable:!0},CURVE_VERTEX_SNAP_DISTANCE_FACTOR:{configurable:!0},MAX_CLOSING_SEG_LEN_FACTOR:{configurable:!0}};Ol.prototype.addNextSegment=function(t,e){if(this._s0=this._s1,this._s1=this._s2,this._s2=t,this._seg0.setCoordinates(this._s0,this._s1),this.computeOffsetSegment(this._seg0,this._side,this._distance,this._offset0),this._seg1.setCoordinates(this._s1,this._s2),this.computeOffsetSegment(this._seg1,this._side,this._distance,this._offset1),this._s1.equals(this._s2))return null;var n=sc.computeOrientation(this._s0,this._s1,this._s2),r=n===sc.CLOCKWISE&&this._side===Nh.LEFT||n===sc.COUNTERCLOCKWISE&&this._side===Nh.RIGHT;0===n?this.addCollinear(e):r?this.addOutsideTurn(n,e):this.addInsideTurn(n,e)},Ol.prototype.addLineEndCap=function(t,e){var n=new gl(t,e),r=new gl;this.computeOffsetSegment(n,Nh.LEFT,this._distance,r);var i=new gl;this.computeOffsetSegment(n,Nh.RIGHT,this._distance,i);var o=e.x-t.x,s=e.y-t.y,a=Math.atan2(s,o);switch(this._bufParams.getEndCapStyle()){case bl.CAP_ROUND:this._segList.addPt(r.p1),this.addFilletArc(e,a+Math.PI/2,a-Math.PI/2,sc.CLOCKWISE,this._distance),this._segList.addPt(i.p1);break;case bl.CAP_FLAT:this._segList.addPt(r.p1),this._segList.addPt(i.p1);break;case bl.CAP_SQUARE:var u=new bu;u.x=Math.abs(this._distance)*Math.cos(a),u.y=Math.abs(this._distance)*Math.sin(a);var c=new bu(r.p1.x+u.x,r.p1.y+u.y),h=new bu(i.p1.x+u.x,i.p1.y+u.y);this._segList.addPt(c),this._segList.addPt(h)}},Ol.prototype.getCoordinates=function(){return this._segList.getCoordinates()},Ol.prototype.addMitreJoin=function(t,e,n,r){var i=!0,o=null;try{o=Uu.intersection(e.p0,e.p1,n.p0,n.p1);(r<=0?1:o.distance(t)/Math.abs(r))>this._bufParams.getMitreLimit()&&(i=!1)}catch(t){if(!(t instanceof ju))throw t;o=new bu(0,0),i=!1}i?this._segList.addPt(o):this.addLimitedMitreJoin(e,n,r,this._bufParams.getMitreLimit())},Ol.prototype.addFilletCorner=function(t,e,n,r,i){var o=e.x-t.x,s=e.y-t.y,a=Math.atan2(s,o),u=n.x-t.x,c=n.y-t.y,h=Math.atan2(c,u);r===sc.CLOCKWISE?a<=h&&(a+=2*Math.PI):a>=h&&(a-=2*Math.PI),this._segList.addPt(e),this.addFilletArc(t,a,h,r,i),this._segList.addPt(n)},Ol.prototype.addOutsideTurn=function(t,e){if(this._offset0.p1.distance(this._offset1.p0)<this._distance*Ol.OFFSET_SEGMENT_SEPARATION_FACTOR)return this._segList.addPt(this._offset0.p1),null;this._bufParams.getJoinStyle()===bl.JOIN_MITRE?this.addMitreJoin(this._s1,this._offset0,this._offset1,this._distance):this._bufParams.getJoinStyle()===bl.JOIN_BEVEL?this.addBevelJoin(this._offset0,this._offset1):(e&&this._segList.addPt(this._offset0.p1),this.addFilletCorner(this._s1,this._offset0.p1,this._offset1.p0,t,this._distance),this._segList.addPt(this._offset1.p0))},Ol.prototype.createSquare=function(t){this._segList.addPt(new bu(t.x+this._distance,t.y+this._distance)),this._segList.addPt(new bu(t.x+this._distance,t.y-this._distance)),this._segList.addPt(new bu(t.x-this._distance,t.y-this._distance)),this._segList.addPt(new bu(t.x-this._distance,t.y+this._distance)),this._segList.closeRing()},Ol.prototype.addSegments=function(t,e){this._segList.addPts(t,e)},Ol.prototype.addFirstSegment=function(){this._segList.addPt(this._offset1.p0)},Ol.prototype.addLastSegment=function(){this._segList.addPt(this._offset1.p1)},Ol.prototype.initSideSegments=function(t,e,n){this._s1=t,this._s2=e,this._side=n,this._seg1.setCoordinates(t,e),this.computeOffsetSegment(this._seg1,n,this._distance,this._offset1)},Ol.prototype.addLimitedMitreJoin=function(t,e,n,r){var i=this._seg0.p1,o=Ll.angle(i,this._seg0.p0),s=Ll.angleBetweenOriented(this._seg0.p0,i,this._seg1.p1)/2,a=Ll.normalize(o+s),u=Ll.normalize(a+Math.PI),c=r*n,h=n-c*Math.abs(Math.sin(s)),l=i.x+c*Math.cos(u),p=i.y+c*Math.sin(u),f=new bu(l,p),g=new gl(i,f),d=g.pointAlongOffset(1,h),y=g.pointAlongOffset(1,-h);this._side===Nh.LEFT?(this._segList.addPt(d),this._segList.addPt(y)):(this._segList.addPt(y),this._segList.addPt(d))},Ol.prototype.computeOffsetSegment=function(t,e,n,r){var i=e===Nh.LEFT?1:-1,o=t.p1.x-t.p0.x,s=t.p1.y-t.p0.y,a=Math.sqrt(o*o+s*s),u=i*n*o/a,c=i*n*s/a;r.p0.x=t.p0.x-c,r.p0.y=t.p0.y+u,r.p1.x=t.p1.x-c,r.p1.y=t.p1.y+u},Ol.prototype.addFilletArc=function(t,e,n,r,i){var o=r===sc.CLOCKWISE?-1:1,s=Math.abs(e-n),a=Math.trunc(s/this._filletAngleQuantum+.5);if(a<1)return null;for(var u=s/a,c=0,h=new bu;c<s;){var l=e+o*c;h.x=t.x+i*Math.cos(l),h.y=t.y+i*Math.sin(l),this._segList.addPt(h),c+=u}},Ol.prototype.addInsideTurn=function(t,e){if(this._li.computeIntersection(this._offset0.p0,this._offset0.p1,this._offset1.p0,this._offset1.p1),this._li.hasIntersection())this._segList.addPt(this._li.getIntersection(0));else if(this._hasNarrowConcaveAngle=!0,this._offset0.p1.distance(this._offset1.p0)<this._distance*Ol.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR)this._segList.addPt(this._offset0.p1);else{if(this._segList.addPt(this._offset0.p1),this._closingSegLengthFactor>0){var n=new bu((this._closingSegLengthFactor*this._offset0.p1.x+this._s1.x)/(this._closingSegLengthFactor+1),(this._closingSegLengthFactor*this._offset0.p1.y+this._s1.y)/(this._closingSegLengthFactor+1));this._segList.addPt(n);var r=new bu((this._closingSegLengthFactor*this._offset1.p0.x+this._s1.x)/(this._closingSegLengthFactor+1),(this._closingSegLengthFactor*this._offset1.p0.y+this._s1.y)/(this._closingSegLengthFactor+1));this._segList.addPt(r)}else this._segList.addPt(this._s1);this._segList.addPt(this._offset1.p0)}},Ol.prototype.createCircle=function(t){var e=new bu(t.x+this._distance,t.y);this._segList.addPt(e),this.addFilletArc(t,0,2*Math.PI,-1,this._distance),this._segList.closeRing()},Ol.prototype.addBevelJoin=function(t,e){this._segList.addPt(t.p1),this._segList.addPt(e.p0)},Ol.prototype.init=function(t){this._distance=t,this._maxCurveSegmentError=t*(1-Math.cos(this._filletAngleQuantum/2)),this._segList=new Sl,this._segList.setPrecisionModel(this._precisionModel),this._segList.setMinimumVertexDistance(t*Ol.CURVE_VERTEX_SNAP_DISTANCE_FACTOR)},Ol.prototype.addCollinear=function(t){this._li.computeIntersection(this._s0,this._s1,this._s1,this._s2);this._li.getIntersectionNum()>=2&&(this._bufParams.getJoinStyle()===bl.JOIN_BEVEL||this._bufParams.getJoinStyle()===bl.JOIN_MITRE?(t&&this._segList.addPt(this._offset0.p1),this._segList.addPt(this._offset1.p0)):this.addFilletCorner(this._s1,this._offset0.p1,this._offset1.p0,sc.CLOCKWISE,this._distance))},Ol.prototype.closeRing=function(){this._segList.closeRing()},Ol.prototype.hasNarrowConcaveAngle=function(){return this._hasNarrowConcaveAngle},Ol.prototype.interfaces_=function(){return[]},Ol.prototype.getClass=function(){return Ol},Rl.OFFSET_SEGMENT_SEPARATION_FACTOR.get=function(){return.001},Rl.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR.get=function(){return.001},Rl.CURVE_VERTEX_SNAP_DISTANCE_FACTOR.get=function(){return 1e-6},Rl.MAX_CLOSING_SEG_LEN_FACTOR.get=function(){return 80},Object.defineProperties(Ol,Rl);var Tl=function(){this._distance=0,this._precisionModel=null,this._bufParams=null;var t=arguments[0],e=arguments[1];this._precisionModel=t,this._bufParams=e};Tl.prototype.getOffsetCurve=function(t,e){if(this._distance=e,0===e)return null;var n=e<0,r=Math.abs(e),i=this.getSegGen(r);t.length<=1?this.computePointCurve(t[0],i):this.computeOffsetCurve(t,n,i);var o=i.getCoordinates();return n&&Cc.reverse(o),o},Tl.prototype.computeSingleSidedBufferCurve=function(t,e,n){var r=this.simplifyTolerance(this._distance);if(e){n.addSegments(t,!0);var i=Nl.simplify(t,-r),o=i.length-1;n.initSideSegments(i[o],i[o-1],Nh.LEFT),n.addFirstSegment();for(var s=o-2;s>=0;s--)n.addNextSegment(i[s],!0)}else{n.addSegments(t,!1);var a=Nl.simplify(t,r),u=a.length-1;n.initSideSegments(a[0],a[1],Nh.LEFT),n.addFirstSegment();for(var c=2;c<=u;c++)n.addNextSegment(a[c],!0)}n.addLastSegment(),n.closeRing()},Tl.prototype.computeRingBufferCurve=function(t,e,n){var r=this.simplifyTolerance(this._distance);e===Nh.RIGHT&&(r=-r);var i=Nl.simplify(t,r),o=i.length-1;n.initSideSegments(i[o-1],i[0],e);for(var s=1;s<=o;s++){var a=1!==s;n.addNextSegment(i[s],a)}n.closeRing()},Tl.prototype.computeLineBufferCurve=function(t,e){var n=this.simplifyTolerance(this._distance),r=Nl.simplify(t,n),i=r.length-1;e.initSideSegments(r[0],r[1],Nh.LEFT);for(var o=2;o<=i;o++)e.addNextSegment(r[o],!0);e.addLastSegment(),e.addLineEndCap(r[i-1],r[i]);var s=Nl.simplify(t,-n),a=s.length-1;e.initSideSegments(s[a],s[a-1],Nh.LEFT);for(var u=a-2;u>=0;u--)e.addNextSegment(s[u],!0);e.addLastSegment(),e.addLineEndCap(s[1],s[0]),e.closeRing()},Tl.prototype.computePointCurve=function(t,e){switch(this._bufParams.getEndCapStyle()){case bl.CAP_ROUND:e.createCircle(t);break;case bl.CAP_SQUARE:e.createSquare(t)}},Tl.prototype.getLineCurve=function(t,e){if(this._distance=e,e<0&&!this._bufParams.isSingleSided())return null;if(0===e)return null;var n=Math.abs(e),r=this.getSegGen(n);if(t.length<=1)this.computePointCurve(t[0],r);else if(this._bufParams.isSingleSided()){var i=e<0;this.computeSingleSidedBufferCurve(t,i,r)}else this.computeLineBufferCurve(t,r);return r.getCoordinates()},Tl.prototype.getBufferParameters=function(){return this._bufParams},Tl.prototype.simplifyTolerance=function(t){return t*this._bufParams.getSimplifyFactor()},Tl.prototype.getRingCurve=function(t,e,n){if(this._distance=n,t.length<=2)return this.getLineCurve(t,n);if(0===n)return Tl.copyCoordinates(t);var r=this.getSegGen(n);return this.computeRingBufferCurve(t,e,r),r.getCoordinates()},Tl.prototype.computeOffsetCurve=function(t,e,n){var r=this.simplifyTolerance(this._distance);if(e){var i=Nl.simplify(t,-r),o=i.length-1;n.initSideSegments(i[o],i[o-1],Nh.LEFT),n.addFirstSegment();for(var s=o-2;s>=0;s--)n.addNextSegment(i[s],!0)}else{var a=Nl.simplify(t,r),u=a.length-1;n.initSideSegments(a[0],a[1],Nh.LEFT),n.addFirstSegment();for(var c=2;c<=u;c++)n.addNextSegment(a[c],!0)}n.addLastSegment()},Tl.prototype.getSegGen=function(t){return new Ol(this._precisionModel,this._bufParams,t)},Tl.prototype.interfaces_=function(){return[]},Tl.prototype.getClass=function(){return Tl},Tl.copyCoordinates=function(t){for(var e=new Array(t.length).fill(null),n=0;n<e.length;n++)e[n]=new bu(t[n]);return e};var Al=function(){this._subgraphs=null,this._seg=new gl,this._cga=new sc;var t=arguments[0];this._subgraphs=t},Dl={DepthSegment:{configurable:!0}};Al.prototype.findStabbedSegments=function(){if(1===arguments.length){for(var t=arguments[0],e=new bc,n=this._subgraphs.iterator();n.hasNext();){var r=n.next(),i=r.getEnvelope();t.y<i.getMinY()||t.y>i.getMaxY()||this.findStabbedSegments(t,r.getDirectedEdges(),e)}return e}if(3===arguments.length)if(Lu(arguments[2],wc)&&arguments[0]instanceof bu&&arguments[1]instanceof jh)for(var o=arguments[0],s=arguments[1],a=arguments[2],u=s.getEdge().getCoordinates(),c=0;c<u.length-1;c++){this._seg.p0=u[c],this._seg.p1=u[c+1],this._seg.p0.y>this._seg.p1.y&&this._seg.reverse();if(!(Math.max(this._seg.p0.x,this._seg.p1.x)<o.x)&&!(this._seg.isHorizontal()||o.y<this._seg.p0.y||o.y>this._seg.p1.y||sc.computeOrientation(this._seg.p0,this._seg.p1,o)===sc.RIGHT)){var h=s.getDepth(Nh.LEFT);this._seg.p0.equals(u[c])||(h=s.getDepth(Nh.RIGHT));var l=new Fl(this._seg,h);a.add(l)}}else if(Lu(arguments[2],wc)&&arguments[0]instanceof bu&&Lu(arguments[1],wc))for(var p=arguments[0],f=arguments[1],g=arguments[2],d=f.iterator();d.hasNext();){var y=d.next();y.isForward()&&this.findStabbedSegments(p,y,g)}},Al.prototype.getDepth=function(t){var e=this.findStabbedSegments(t);if(0===e.size())return 0;return $h.min(e)._leftDepth},Al.prototype.interfaces_=function(){return[]},Al.prototype.getClass=function(){return Al},Dl.DepthSegment.get=function(){return Fl},Object.defineProperties(Al,Dl);var Fl=function(){this._upwardSeg=null,this._leftDepth=null;var t=arguments[0],e=arguments[1];this._upwardSeg=new gl(t),this._leftDepth=e};Fl.prototype.compareTo=function(t){var e=t;if(this._upwardSeg.minX()>=e._upwardSeg.maxX())return 1;if(this._upwardSeg.maxX()<=e._upwardSeg.minX())return-1;var n=this._upwardSeg.orientationIndex(e._upwardSeg);return 0!==n?n:0!=(n=-1*e._upwardSeg.orientationIndex(this._upwardSeg))?n:this._upwardSeg.compareTo(e._upwardSeg)},Fl.prototype.compareX=function(t,e){var n=t.p0.compareTo(e.p0);return 0!==n?n:t.p1.compareTo(e.p1)},Fl.prototype.toString=function(){return this._upwardSeg.toString()},Fl.prototype.interfaces_=function(){return[xu]},Fl.prototype.getClass=function(){return Fl};var ql=function(t,e,n){this.p0=t||null,this.p1=e||null,this.p2=n||null};ql.prototype.area=function(){return ql.area(this.p0,this.p1,this.p2)},ql.prototype.signedArea=function(){return ql.signedArea(this.p0,this.p1,this.p2)},ql.prototype.interpolateZ=function(t){if(null===t)throw new _u("Supplied point is null.");return ql.interpolateZ(t,this.p0,this.p1,this.p2)},ql.prototype.longestSideLength=function(){return ql.longestSideLength(this.p0,this.p1,this.p2)},ql.prototype.isAcute=function(){return ql.isAcute(this.p0,this.p1,this.p2)},ql.prototype.circumcentre=function(){return ql.circumcentre(this.p0,this.p1,this.p2)},ql.prototype.area3D=function(){return ql.area3D(this.p0,this.p1,this.p2)},ql.prototype.centroid=function(){return ql.centroid(this.p0,this.p1,this.p2)},ql.prototype.inCentre=function(){return ql.inCentre(this.p0,this.p1,this.p2)},ql.prototype.interfaces_=function(){return[]},ql.prototype.getClass=function(){return ql},ql.area=function(t,e,n){return Math.abs(((n.x-t.x)*(e.y-t.y)-(e.x-t.x)*(n.y-t.y))/2)},ql.signedArea=function(t,e,n){return((n.x-t.x)*(e.y-t.y)-(e.x-t.x)*(n.y-t.y))/2},ql.det=function(t,e,n,r){return t*r-e*n},ql.interpolateZ=function(t,e,n,r){var i=e.x,o=e.y,s=n.x-i,a=r.x-i,u=n.y-o,c=r.y-o,h=s*c-a*u,l=t.x-i,p=t.y-o,f=(c*l-a*p)/h,g=(-u*l+s*p)/h;return e.z+f*(n.z-e.z)+g*(r.z-e.z)},ql.longestSideLength=function(t,e,n){var r=t.distance(e),i=e.distance(n),o=n.distance(t),s=r;return i>s&&(s=i),o>s&&(s=o),s},ql.isAcute=function(t,e,n){return!!Ll.isAcute(t,e,n)&&(!!Ll.isAcute(e,n,t)&&!!Ll.isAcute(n,t,e))},ql.circumcentre=function(t,e,n){var r=n.x,i=n.y,o=t.x-r,s=t.y-i,a=e.x-r,u=e.y-i,c=2*ql.det(o,s,a,u),h=ql.det(s,o*o+s*s,u,a*a+u*u),l=ql.det(o,o*o+s*s,a,a*a+u*u);return new bu(r-h/c,i+l/c)},ql.perpendicularBisector=function(t,e){var n=e.x-t.x,r=e.y-t.y,i=new Uu(t.x+n/2,t.y+r/2,1),o=new Uu(t.x-r+n/2,t.y+n+r/2,1);return new Uu(i,o)},ql.angleBisector=function(t,e,n){var r=e.distance(t),i=r/(r+e.distance(n)),o=n.x-t.x,s=n.y-t.y;return new bu(t.x+i*o,t.y+i*s)},ql.area3D=function(t,e,n){var r=e.x-t.x,i=e.y-t.y,o=e.z-t.z,s=n.x-t.x,a=n.y-t.y,u=n.z-t.z,c=i*u-o*a,h=o*s-r*u,l=r*a-i*s,p=c*c+h*h+l*l,f=Math.sqrt(p)/2;return f},ql.centroid=function(t,e,n){var r=(t.x+e.x+n.x)/3,i=(t.y+e.y+n.y)/3;return new bu(r,i)},ql.inCentre=function(t,e,n){var r=e.distance(n),i=t.distance(n),o=t.distance(e),s=r+i+o,a=(r*t.x+i*e.x+o*n.x)/s,u=(r*t.y+i*e.y+o*n.y)/s;return new bu(a,u)};var Gl=function(){this._inputGeom=null,this._distance=null,this._curveBuilder=null,this._curveList=new bc;var t=arguments[0],e=arguments[1],n=arguments[2];this._inputGeom=t,this._distance=e,this._curveBuilder=n};Gl.prototype.addPoint=function(t){if(this._distance<=0)return null;var e=t.getCoordinates(),n=this._curveBuilder.getLineCurve(e,this._distance);this.addCurve(n,Su.EXTERIOR,Su.INTERIOR)},Gl.prototype.addPolygon=function(t){var e=this._distance,n=Nh.LEFT;this._distance<0&&(e=-this._distance,n=Nh.RIGHT);var r=t.getExteriorRing(),i=Cc.removeRepeatedPoints(r.getCoordinates());if(this._distance<0&&this.isErodedCompletely(r,this._distance))return null;if(this._distance<=0&&i.length<3)return null;this.addPolygonRing(i,e,n,Su.EXTERIOR,Su.INTERIOR);for(var o=0;o<t.getNumInteriorRing();o++){var s=t.getInteriorRingN(o),a=Cc.removeRepeatedPoints(s.getCoordinates());this._distance>0&&this.isErodedCompletely(s,-this._distance)||this.addPolygonRing(a,e,Nh.opposite(n),Su.INTERIOR,Su.EXTERIOR)}},Gl.prototype.isTriangleErodedCompletely=function(t,e){var n=new ql(t[0],t[1],t[2]),r=n.inCentre();return sc.distancePointLine(r,n.p0,n.p1)<Math.abs(e)},Gl.prototype.addLineString=function(t){if(this._distance<=0&&!this._curveBuilder.getBufferParameters().isSingleSided())return null;var e=Cc.removeRepeatedPoints(t.getCoordinates()),n=this._curveBuilder.getLineCurve(e,this._distance);this.addCurve(n,Su.EXTERIOR,Su.INTERIOR)},Gl.prototype.addCurve=function(t,e,n){if(null===t||t.length<2)return null;var r=new fl(t,new Rh(0,Su.BOUNDARY,e,n));this._curveList.add(r)},Gl.prototype.getCurves=function(){return this.add(this._inputGeom),this._curveList},Gl.prototype.addPolygonRing=function(t,e,n,r,i){if(0===e&&t.length<eh.MINIMUM_VALID_SIZE)return null;var o=r,s=i;t.length>=eh.MINIMUM_VALID_SIZE&&sc.isCCW(t)&&(o=i,s=r,n=Nh.opposite(n));var a=this._curveBuilder.getRingCurve(t,n,e);this.addCurve(a,o,s)},Gl.prototype.add=function(t){if(t.isEmpty())return null;t instanceof $c?this.addPolygon(t):t instanceof Jc?this.addLineString(t):t instanceof Kc?this.addPoint(t):t instanceof th?this.addCollection(t):t instanceof Xc?this.addCollection(t):t instanceof nh?this.addCollection(t):t instanceof jc&&this.addCollection(t)},Gl.prototype.isErodedCompletely=function(t,e){var n=t.getCoordinates();if(n.length<4)return e<0;if(4===n.length)return this.isTriangleErodedCompletely(n,e);var r=t.getEnvelopeInternal(),i=Math.min(r.getHeight(),r.getWidth());return e<0&&2*Math.abs(e)>i},Gl.prototype.addCollection=function(t){for(var e=0;e<t.getNumGeometries();e++){var n=t.getGeometryN(e);this.add(n)}},Gl.prototype.interfaces_=function(){return[]},Gl.prototype.getClass=function(){return Gl};var Bl=function(){};Bl.prototype.locate=function(t){},Bl.prototype.interfaces_=function(){return[]},Bl.prototype.getClass=function(){return Bl};var kl=function(){this._parent=null,this._atStart=null,this._max=null,this._index=null,this._subcollectionIterator=null;var t=arguments[0];this._parent=t,this._atStart=!0,this._index=0,this._max=t.getNumGeometries()};kl.prototype.next=function(){if(this._atStart)return this._atStart=!1,kl.isAtomic(this._parent)&&this._index++,this._parent;if(null!==this._subcollectionIterator){if(this._subcollectionIterator.hasNext())return this._subcollectionIterator.next();this._subcollectionIterator=null}if(this._index>=this._max)throw new Pi;var t=this._parent.getGeometryN(this._index++);return t instanceof jc?(this._subcollectionIterator=new kl(t),this._subcollectionIterator.next()):t},kl.prototype.remove=function(){throw new Error(this.getClass().getName())},kl.prototype.hasNext=function(){if(this._atStart)return!0;if(null!==this._subcollectionIterator){if(this._subcollectionIterator.hasNext())return!0;this._subcollectionIterator=null}return!(this._index>=this._max)},kl.prototype.interfaces_=function(){return[Ec]},kl.prototype.getClass=function(){return kl},kl.isAtomic=function(t){return!(t instanceof jc)};var zl=function(){this._geom=null;var t=arguments[0];this._geom=t};zl.prototype.locate=function(t){return zl.locate(t,this._geom)},zl.prototype.interfaces_=function(){return[Bl]},zl.prototype.getClass=function(){return zl},zl.isPointInRing=function(t,e){return!!e.getEnvelopeInternal().intersects(t)&&sc.isPointInRing(t,e.getCoordinates())},zl.containsPointInPolygon=function(t,e){if(e.isEmpty())return!1;var n=e.getExteriorRing();if(!zl.isPointInRing(t,n))return!1;for(var r=0;r<e.getNumInteriorRing();r++){var i=e.getInteriorRingN(r);if(zl.isPointInRing(t,i))return!1}return!0},zl.containsPoint=function(t,e){if(e instanceof $c)return zl.containsPointInPolygon(t,e);if(e instanceof jc)for(var n=new kl(e);n.hasNext();){var r=n.next();if(r!==e&&zl.containsPoint(t,r))return!0}return!1},zl.locate=function(t,e){return e.isEmpty()?Su.EXTERIOR:zl.containsPoint(t,e)?Su.INTERIOR:Su.EXTERIOR};var jl=function(){this._edgeMap=new Gi,this._edgeList=null,this._ptInAreaLocation=[Su.NONE,Su.NONE]};jl.prototype.getNextCW=function(t){this.getEdges();var e=this._edgeList.indexOf(t),n=e-1;return 0===e&&(n=this._edgeList.size()-1),this._edgeList.get(n)},jl.prototype.propagateSideLabels=function(t){for(var e=Su.NONE,n=this.iterator();n.hasNext();){var r=n.next().getLabel();r.isArea(t)&&r.getLocation(t,Nh.LEFT)!==Su.NONE&&(e=r.getLocation(t,Nh.LEFT))}if(e===Su.NONE)return null;for(var i=e,o=this.iterator();o.hasNext();){var s=o.next(),a=s.getLabel();if(a.getLocation(t,Nh.ON)===Su.NONE&&a.setLocation(t,Nh.ON,i),a.isArea(t)){var u=a.getLocation(t,Nh.LEFT),c=a.getLocation(t,Nh.RIGHT);if(c!==Su.NONE){if(c!==i)throw new Mh("side location conflict",s.getCoordinate());u===Su.NONE&&tc.shouldNeverReachHere("found single null side (at "+s.getCoordinate()+")"),i=u}else tc.isTrue(a.getLocation(t,Nh.LEFT)===Su.NONE,"found single null side"),a.setLocation(t,Nh.RIGHT,i),a.setLocation(t,Nh.LEFT,i)}}},jl.prototype.getCoordinate=function(){var t=this.iterator();if(!t.hasNext())return null;return t.next().getCoordinate()},jl.prototype.print=function(t){Xu.out.println("EdgeEndStar:   "+this.getCoordinate());for(var e=this.iterator();e.hasNext();){e.next().print(t)}},jl.prototype.isAreaLabelsConsistent=function(t){return this.computeEdgeEndLabels(t.getBoundaryNodeRule()),this.checkAreaLabelsConsistent(0)},jl.prototype.checkAreaLabelsConsistent=function(t){var e=this.getEdges();if(e.size()<=0)return!0;var n=e.size()-1,r=e.get(n).getLabel().getLocation(t,Nh.LEFT);tc.isTrue(r!==Su.NONE,"Found unlabelled area edge");for(var i=r,o=this.iterator();o.hasNext();){var s=o.next().getLabel();tc.isTrue(s.isArea(t),"Found non-area edge");var a=s.getLocation(t,Nh.LEFT),u=s.getLocation(t,Nh.RIGHT);if(a===u)return!1;if(u!==i)return!1;i=a}return!0},jl.prototype.findIndex=function(t){this.iterator();for(var e=0;e<this._edgeList.size();e++){if(this._edgeList.get(e)===t)return e}return-1},jl.prototype.iterator=function(){return this.getEdges().iterator()},jl.prototype.getEdges=function(){return null===this._edgeList&&(this._edgeList=new bc(this._edgeMap.values())),this._edgeList},jl.prototype.getLocation=function(t,e,n){return this._ptInAreaLocation[t]===Su.NONE&&(this._ptInAreaLocation[t]=zl.locate(e,n[t].getGeometry())),this._ptInAreaLocation[t]},jl.prototype.toString=function(){var t=new Ru;t.append("EdgeEndStar:   "+this.getCoordinate()),t.append("\n");for(var e=this.iterator();e.hasNext();){var n=e.next();t.append(n),t.append("\n")}return t.toString()},jl.prototype.computeEdgeEndLabels=function(t){for(var e=this.iterator();e.hasNext();){e.next().computeLabel(t)}},jl.prototype.computeLabelling=function(t){this.computeEdgeEndLabels(t[0].getBoundaryNodeRule()),this.propagateSideLabels(0),this.propagateSideLabels(1);for(var e=[!1,!1],n=this.iterator();n.hasNext();)for(var r=n.next().getLabel(),i=0;i<2;i++)r.isLine(i)&&r.getLocation(i)===Su.BOUNDARY&&(e[i]=!0);for(var o=this.iterator();o.hasNext();)for(var s=o.next(),a=s.getLabel(),u=0;u<2;u++)if(a.isAnyNull(u)){var c=Su.NONE;if(e[u])c=Su.EXTERIOR;else{var h=s.getCoordinate();c=this.getLocation(u,h,t)}a.setAllLocationsIfNull(u,c)}},jl.prototype.getDegree=function(){return this._edgeMap.size()},jl.prototype.insertEdgeEnd=function(t,e){this._edgeMap.put(t,e),this._edgeList=null},jl.prototype.interfaces_=function(){return[]},jl.prototype.getClass=function(){return jl};var Xl=function(t){function e(){t.call(this),this._resultAreaEdgeList=null,this._label=null,this._SCANNING_FOR_INCOMING=1,this._LINKING_TO_OUTGOING=2}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.linkResultDirectedEdges=function(){this.getResultAreaEdges();for(var t=null,e=null,n=this._SCANNING_FOR_INCOMING,r=0;r<this._resultAreaEdgeList.size();r++){var i=this._resultAreaEdgeList.get(r),o=i.getSym();if(i.getLabel().isArea())switch(null===t&&i.isInResult()&&(t=i),n){case this._SCANNING_FOR_INCOMING:if(!o.isInResult())continue;e=o,n=this._LINKING_TO_OUTGOING;break;case this._LINKING_TO_OUTGOING:if(!i.isInResult())continue;e.setNext(i),n=this._SCANNING_FOR_INCOMING}}if(n===this._LINKING_TO_OUTGOING){if(null===t)throw new Mh("no outgoing dirEdge found",this.getCoordinate());tc.isTrue(t.isInResult(),"unable to link last incoming dirEdge"),e.setNext(t)}},e.prototype.insert=function(t){var e=t;this.insertEdgeEnd(e,e)},e.prototype.getRightmostEdge=function(){var t=this.getEdges(),e=t.size();if(e<1)return null;var n=t.get(0);if(1===e)return n;var r=t.get(e-1),i=n.getQuadrant(),o=r.getQuadrant();return Bh.isNorthern(i)&&Bh.isNorthern(o)?n:Bh.isNorthern(i)||Bh.isNorthern(o)?0!==n.getDy()?n:0!==r.getDy()?r:(tc.shouldNeverReachHere("found two horizontal edges incident on node"),null):r},e.prototype.print=function(t){Xu.out.println("DirectedEdgeStar: "+this.getCoordinate());for(var e=this.iterator();e.hasNext();){var n=e.next();t.print("out "),n.print(t),t.println(),t.print("in "),n.getSym().print(t),t.println()}},e.prototype.getResultAreaEdges=function(){if(null!==this._resultAreaEdgeList)return this._resultAreaEdgeList;this._resultAreaEdgeList=new bc;for(var t=this.iterator();t.hasNext();){var e=t.next();(e.isInResult()||e.getSym().isInResult())&&this._resultAreaEdgeList.add(e)}return this._resultAreaEdgeList},e.prototype.updateLabelling=function(t){for(var e=this.iterator();e.hasNext();){var n=e.next().getLabel();n.setAllLocationsIfNull(0,t.getLocation(0)),n.setAllLocationsIfNull(1,t.getLocation(1))}},e.prototype.linkAllDirectedEdges=function(){this.getEdges();for(var t=null,e=null,n=this._edgeList.size()-1;n>=0;n--){var r=this._edgeList.get(n),i=r.getSym();null===e&&(e=i),null!==t&&i.setNext(t),t=r}e.setNext(t)},e.prototype.computeDepths=function(){if(1===arguments.length){var t=arguments[0],e=this.findIndex(t),n=t.getDepth(Nh.LEFT),r=t.getDepth(Nh.RIGHT),i=this.computeDepths(e+1,this._edgeList.size(),n);if(this.computeDepths(0,e,i)!==r)throw new Mh("depth mismatch at "+t.getCoordinate())}else if(3===arguments.length){for(var o=arguments[0],s=arguments[1],a=arguments[2],u=o;u<s;u++){var c=this._edgeList.get(u);c.setEdgeDepths(Nh.RIGHT,a),a=c.getDepth(Nh.LEFT)}return a}},e.prototype.mergeSymLabels=function(){for(var t=this.iterator();t.hasNext();){var e=t.next();e.getLabel().merge(e.getSym().getLabel())}},e.prototype.linkMinimalDirectedEdges=function(t){for(var e=null,n=null,r=this._SCANNING_FOR_INCOMING,i=this._resultAreaEdgeList.size()-1;i>=0;i--){var o=this._resultAreaEdgeList.get(i),s=o.getSym();switch(null===e&&o.getEdgeRing()===t&&(e=o),r){case this._SCANNING_FOR_INCOMING:if(s.getEdgeRing()!==t)continue;n=s,r=this._LINKING_TO_OUTGOING;break;case this._LINKING_TO_OUTGOING:if(o.getEdgeRing()!==t)continue;n.setNextMin(o),r=this._SCANNING_FOR_INCOMING}}r===this._LINKING_TO_OUTGOING&&(tc.isTrue(null!==e,"found null for first outgoing dirEdge"),tc.isTrue(e.getEdgeRing()===t,"unable to link last incoming dirEdge"),n.setNextMin(e))},e.prototype.getOutgoingDegree=function(){if(0===arguments.length){for(var t=0,e=this.iterator();e.hasNext();){e.next().isInResult()&&t++}return t}if(1===arguments.length){for(var n=arguments[0],r=0,i=this.iterator();i.hasNext();){i.next().getEdgeRing()===n&&r++}return r}},e.prototype.getLabel=function(){return this._label},e.prototype.findCoveredLineEdges=function(){for(var t=Su.NONE,e=this.iterator();e.hasNext();){var n=e.next(),r=n.getSym();if(!n.isLineEdge()){if(n.isInResult()){t=Su.INTERIOR;break}if(r.isInResult()){t=Su.EXTERIOR;break}}}if(t===Su.NONE)return null;for(var i=t,o=this.iterator();o.hasNext();){var s=o.next(),a=s.getSym();s.isLineEdge()?s.getEdge().setCovered(i===Su.INTERIOR):(s.isInResult()&&(i=Su.EXTERIOR),a.isInResult()&&(i=Su.INTERIOR))}},e.prototype.computeLabelling=function(e){t.prototype.computeLabelling.call(this,e),this._label=new Rh(Su.NONE);for(var n=this.iterator();n.hasNext();)for(var r=n.next().getEdge().getLabel(),i=0;i<2;i++){var o=r.getLocation(i);o!==Su.INTERIOR&&o!==Su.BOUNDARY||this._label.setLocation(i,Su.INTERIOR)}},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(jl),Ul=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.createNode=function(t){return new qh(t,new Xl)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(Xh),Yl=function t(){this._pts=null,this._orientation=null;var e=arguments[0];this._pts=e,this._orientation=t.orientation(e)};Yl.prototype.compareTo=function(t){var e=t;return Yl.compareOriented(this._pts,this._orientation,e._pts,e._orientation)},Yl.prototype.interfaces_=function(){return[xu]},Yl.prototype.getClass=function(){return Yl},Yl.orientation=function(t){return 1===Cc.increasingDirection(t)},Yl.compareOriented=function(t,e,n,r){for(var i=e?1:-1,o=r?1:-1,s=e?t.length:-1,a=r?n.length:-1,u=e?0:t.length-1,c=r?0:n.length-1;;){var h=t[u].compareTo(n[c]);if(0!==h)return h;var l=(u+=i)===s,p=(c+=o)===a;if(l&&!p)return-1;if(!l&&p)return 1;if(l&&p)return 0}};var Vl=function(){this._edges=new bc,this._ocaMap=new Gi};Vl.prototype.print=function(t){t.print("MULTILINESTRING ( ");for(var e=0;e<this._edges.size();e++){var n=this._edges.get(e);e>0&&t.print(","),t.print("(");for(var r=n.getCoordinates(),i=0;i<r.length;i++)i>0&&t.print(","),t.print(r[i].x+" "+r[i].y);t.println(")")}t.print(")  ")},Vl.prototype.addAll=function(t){for(var e=t.iterator();e.hasNext();)this.add(e.next())},Vl.prototype.findEdgeIndex=function(t){for(var e=0;e<this._edges.size();e++)if(this._edges.get(e).equals(t))return e;return-1},Vl.prototype.iterator=function(){return this._edges.iterator()},Vl.prototype.getEdges=function(){return this._edges},Vl.prototype.get=function(t){return this._edges.get(t)},Vl.prototype.findEqualEdge=function(t){var e=new Yl(t.getCoordinates());return this._ocaMap.get(e)},Vl.prototype.add=function(t){this._edges.add(t);var e=new Yl(t.getCoordinates());this._ocaMap.put(e,t)},Vl.prototype.interfaces_=function(){return[]},Vl.prototype.getClass=function(){return Vl};var Hl=function(){};Hl.prototype.processIntersections=function(t,e,n,r){},Hl.prototype.isDone=function(){},Hl.prototype.interfaces_=function(){return[]},Hl.prototype.getClass=function(){return Hl};var Wl=function(){this._hasIntersection=!1,this._hasProper=!1,this._hasProperInterior=!1,this._hasInterior=!1,this._properIntersectionPoint=null,this._li=null,this._isSelfIntersection=null,this.numIntersections=0,this.numInteriorIntersections=0,this.numProperIntersections=0,this.numTests=0;var t=arguments[0];this._li=t};Wl.prototype.isTrivialIntersection=function(t,e,n,r){if(t===n&&1===this._li.getIntersectionNum()){if(Wl.isAdjacentSegments(e,r))return!0;if(t.isClosed()){var i=t.size()-1;if(0===e&&r===i||0===r&&e===i)return!0}}return!1},Wl.prototype.getProperIntersectionPoint=function(){return this._properIntersectionPoint},Wl.prototype.hasProperInteriorIntersection=function(){return this._hasProperInterior},Wl.prototype.getLineIntersector=function(){return this._li},Wl.prototype.hasProperIntersection=function(){return this._hasProper},Wl.prototype.processIntersections=function(t,e,n,r){if(t===n&&e===r)return null;this.numTests++;var i=t.getCoordinates()[e],o=t.getCoordinates()[e+1],s=n.getCoordinates()[r],a=n.getCoordinates()[r+1];this._li.computeIntersection(i,o,s,a),this._li.hasIntersection()&&(this.numIntersections++,this._li.isInteriorIntersection()&&(this.numInteriorIntersections++,this._hasInterior=!0),this.isTrivialIntersection(t,e,n,r)||(this._hasIntersection=!0,t.addIntersections(this._li,e,0),n.addIntersections(this._li,r,1),this._li.isProper()&&(this.numProperIntersections++,this._hasProper=!0,this._hasProperInterior=!0)))},Wl.prototype.hasIntersection=function(){return this._hasIntersection},Wl.prototype.isDone=function(){return!1},Wl.prototype.hasInteriorIntersection=function(){return this._hasInterior},Wl.prototype.interfaces_=function(){return[Hl]},Wl.prototype.getClass=function(){return Wl},Wl.isAdjacentSegments=function(t,e){return 1===Math.abs(t-e)};var Jl=function(){this.coord=null,this.segmentIndex=null,this.dist=null;var t=arguments[0],e=arguments[1],n=arguments[2];this.coord=new bu(t),this.segmentIndex=e,this.dist=n};Jl.prototype.getSegmentIndex=function(){return this.segmentIndex},Jl.prototype.getCoordinate=function(){return this.coord},Jl.prototype.print=function(t){t.print(this.coord),t.print(" seg # = "+this.segmentIndex),t.println(" dist = "+this.dist)},Jl.prototype.compareTo=function(t){var e=t;return this.compare(e.segmentIndex,e.dist)},Jl.prototype.isEndPoint=function(t){return 0===this.segmentIndex&&0===this.dist||this.segmentIndex===t},Jl.prototype.toString=function(){return this.coord+" seg # = "+this.segmentIndex+" dist = "+this.dist},Jl.prototype.getDistance=function(){return this.dist},Jl.prototype.compare=function(t,e){return this.segmentIndex<t?-1:this.segmentIndex>t?1:this.dist<e?-1:this.dist>e?1:0},Jl.prototype.interfaces_=function(){return[xu]},Jl.prototype.getClass=function(){return Jl};var Zl=function(){this._nodeMap=new Gi,this.edge=null;var t=arguments[0];this.edge=t};Zl.prototype.print=function(t){t.println("Intersections:");for(var e=this.iterator();e.hasNext();){e.next().print(t)}},Zl.prototype.iterator=function(){return this._nodeMap.values().iterator()},Zl.prototype.addSplitEdges=function(t){this.addEndpoints();for(var e=this.iterator(),n=e.next();e.hasNext();){var r=e.next(),i=this.createSplitEdge(n,r);t.add(i),n=r}},Zl.prototype.addEndpoints=function(){var t=this.edge.pts.length-1;this.add(this.edge.pts[0],0,0),this.add(this.edge.pts[t],t,0)},Zl.prototype.createSplitEdge=function(t,e){var n=e.segmentIndex-t.segmentIndex+2,r=this.edge.pts[e.segmentIndex],i=e.dist>0||!e.coord.equals2D(r);i||n--;var o=new Array(n).fill(null),s=0;o[s++]=new bu(t.coord);for(var a=t.segmentIndex+1;a<=e.segmentIndex;a++)o[s++]=this.edge.pts[a];return i&&(o[s]=e.coord),new ep(o,new Rh(this.edge._label))},Zl.prototype.add=function(t,e,n){var r=new Jl(t,e,n),i=this._nodeMap.get(r);return null!==i?i:(this._nodeMap.put(r,r),r)},Zl.prototype.isIntersection=function(t){for(var e=this.iterator();e.hasNext();){if(e.next().coord.equals(t))return!0}return!1},Zl.prototype.interfaces_=function(){return[]},Zl.prototype.getClass=function(){return Zl};var Kl=function(){};Kl.prototype.getChainStartIndices=function(t){var e=0,n=new bc;n.add(new Tu(e));do{var r=this.findChainEnd(t,e);n.add(new Tu(r)),e=r}while(e<t.length-1);return Kl.toIntArray(n)},Kl.prototype.findChainEnd=function(t,e){for(var n=Bh.quadrant(t[e],t[e+1]),r=e+1;r<t.length;){if(Bh.quadrant(t[r-1],t[r])!==n)break;r++}return r-1},Kl.prototype.interfaces_=function(){return[]},Kl.prototype.getClass=function(){return Kl},Kl.toIntArray=function(t){for(var e=new Array(t.size()).fill(null),n=0;n<e.length;n++)e[n]=t.get(n).intValue();return e};var Ql=function(){this.e=null,this.pts=null,this.startIndex=null,this.env1=new Yu,this.env2=new Yu;var t=arguments[0];this.e=t,this.pts=t.getCoordinates();var e=new Kl;this.startIndex=e.getChainStartIndices(this.pts)};Ql.prototype.getCoordinates=function(){return this.pts},Ql.prototype.getMaxX=function(t){var e=this.pts[this.startIndex[t]].x,n=this.pts[this.startIndex[t+1]].x;return e>n?e:n},Ql.prototype.getMinX=function(t){var e=this.pts[this.startIndex[t]].x,n=this.pts[this.startIndex[t+1]].x;return e<n?e:n},Ql.prototype.computeIntersectsForChain=function(){if(4===arguments.length){var t=arguments[0],e=arguments[1],n=arguments[2],r=arguments[3];this.computeIntersectsForChain(this.startIndex[t],this.startIndex[t+1],e,e.startIndex[n],e.startIndex[n+1],r)}else if(6===arguments.length){var i=arguments[0],o=arguments[1],s=arguments[2],a=arguments[3],u=arguments[4],c=arguments[5],h=this.pts[i],l=this.pts[o],p=s.pts[a],f=s.pts[u];if(o-i==1&&u-a==1)return c.addIntersections(this.e,i,s.e,a),null;if(this.env1.init(h,l),this.env2.init(p,f),!this.env1.intersects(this.env2))return null;var g=Math.trunc((i+o)/2),d=Math.trunc((a+u)/2);i<g&&(a<d&&this.computeIntersectsForChain(i,g,s,a,d,c),d<u&&this.computeIntersectsForChain(i,g,s,d,u,c)),g<o&&(a<d&&this.computeIntersectsForChain(g,o,s,a,d,c),d<u&&this.computeIntersectsForChain(g,o,s,d,u,c))}},Ql.prototype.getStartIndexes=function(){return this.startIndex},Ql.prototype.computeIntersects=function(t,e){for(var n=0;n<this.startIndex.length-1;n++)for(var r=0;r<t.startIndex.length-1;r++)this.computeIntersectsForChain(n,t,r,e)},Ql.prototype.interfaces_=function(){return[]},Ql.prototype.getClass=function(){return Ql};var $l=function t(){this._depth=Array(2).fill().map(function(){return Array(3)});for(var e=0;e<2;e++)for(var n=0;n<3;n++)this._depth[e][n]=t.NULL_VALUE},tp={NULL_VALUE:{configurable:!0}};$l.prototype.getDepth=function(t,e){return this._depth[t][e]},$l.prototype.setDepth=function(t,e,n){this._depth[t][e]=n},$l.prototype.isNull=function(){if(0===arguments.length){for(var t=0;t<2;t++)for(var e=0;e<3;e++)if(this._depth[t][e]!==$l.NULL_VALUE)return!1;return!0}if(1===arguments.length){var n=arguments[0];return this._depth[n][1]===$l.NULL_VALUE}if(2===arguments.length){var r=arguments[0],i=arguments[1];return this._depth[r][i]===$l.NULL_VALUE}},$l.prototype.normalize=function(){for(var t=0;t<2;t++)if(!this.isNull(t)){var e=this._depth[t][1];this._depth[t][2]<e&&(e=this._depth[t][2]),e<0&&(e=0);for(var n=1;n<3;n++){var r=0;this._depth[t][n]>e&&(r=1),this._depth[t][n]=r}}},$l.prototype.getDelta=function(t){return this._depth[t][Nh.RIGHT]-this._depth[t][Nh.LEFT]},$l.prototype.getLocation=function(t,e){return this._depth[t][e]<=0?Su.EXTERIOR:Su.INTERIOR},$l.prototype.toString=function(){return"A: "+this._depth[0][1]+","+this._depth[0][2]+" B: "+this._depth[1][1]+","+this._depth[1][2]},$l.prototype.add=function(){if(1===arguments.length)for(var t=arguments[0],e=0;e<2;e++)for(var n=1;n<3;n++){var r=t.getLocation(e,n);r!==Su.EXTERIOR&&r!==Su.INTERIOR||(this.isNull(e,n)?this._depth[e][n]=$l.depthAtLocation(r):this._depth[e][n]+=$l.depthAtLocation(r))}else if(3===arguments.length){var i=arguments[0],o=arguments[1];arguments[2]===Su.INTERIOR&&this._depth[i][o]++}},$l.prototype.interfaces_=function(){return[]},$l.prototype.getClass=function(){return $l},$l.depthAtLocation=function(t){return t===Su.EXTERIOR?0:t===Su.INTERIOR?1:$l.NULL_VALUE},tp.NULL_VALUE.get=function(){return-1},Object.defineProperties($l,tp);var ep=function(t){function e(){if(t.call(this),this.pts=null,this._env=null,this.eiList=new Zl(this),this._name=null,this._mce=null,this._isIsolated=!0,this._depth=new $l,this._depthDelta=0,1===arguments.length){var n=arguments[0];e.call(this,n,null)}else if(2===arguments.length){var r=arguments[0],i=arguments[1];this.pts=r,this._label=i}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDepth=function(){return this._depth},e.prototype.getCollapsedEdge=function(){var t=new Array(2).fill(null);t[0]=this.pts[0],t[1]=this.pts[1];return new e(t,Rh.toLineLabel(this._label))},e.prototype.isIsolated=function(){return this._isIsolated},e.prototype.getCoordinates=function(){return this.pts},e.prototype.setIsolated=function(t){this._isIsolated=t},e.prototype.setName=function(t){this._name=t},e.prototype.equals=function(t){if(!(t instanceof e))return!1;var n=t;if(this.pts.length!==n.pts.length)return!1;for(var r=!0,i=!0,o=this.pts.length,s=0;s<this.pts.length;s++)if(this.pts[s].equals2D(n.pts[s])||(r=!1),this.pts[s].equals2D(n.pts[--o])||(i=!1),!r&&!i)return!1;return!0},e.prototype.getCoordinate=function(){if(0===arguments.length)return this.pts.length>0?this.pts[0]:null;if(1===arguments.length){var t=arguments[0];return this.pts[t]}},e.prototype.print=function(t){t.print("edge "+this._name+": "),t.print("LINESTRING (");for(var e=0;e<this.pts.length;e++)e>0&&t.print(","),t.print(this.pts[e].x+" "+this.pts[e].y);t.print(")  "+this._label+" "+this._depthDelta)},e.prototype.computeIM=function(t){e.updateIM(this._label,t)},e.prototype.isCollapsed=function(){return!!this._label.isArea()&&(3===this.pts.length&&!!this.pts[0].equals(this.pts[2]))},e.prototype.isClosed=function(){return this.pts[0].equals(this.pts[this.pts.length-1])},e.prototype.getMaximumSegmentIndex=function(){return this.pts.length-1},e.prototype.getDepthDelta=function(){return this._depthDelta},e.prototype.getNumPoints=function(){return this.pts.length},e.prototype.printReverse=function(t){t.print("edge "+this._name+": ");for(var e=this.pts.length-1;e>=0;e--)t.print(this.pts[e]+" ");t.println("")},e.prototype.getMonotoneChainEdge=function(){return null===this._mce&&(this._mce=new Ql(this)),this._mce},e.prototype.getEnvelope=function(){if(null===this._env){this._env=new Yu;for(var t=0;t<this.pts.length;t++)this._env.expandToInclude(this.pts[t])}return this._env},e.prototype.addIntersection=function(t,e,n,r){var i=new bu(t.getIntersection(r)),o=e,s=t.getEdgeDistance(n,r),a=o+1;if(a<this.pts.length){var u=this.pts[a];i.equals2D(u)&&(o=a,s=0)}this.eiList.add(i,o,s)},e.prototype.toString=function(){var t=new Ru;t.append("edge "+this._name+": "),t.append("LINESTRING (");for(var e=0;e<this.pts.length;e++)e>0&&t.append(","),t.append(this.pts[e].x+" "+this.pts[e].y);return t.append(")  "+this._label+" "+this._depthDelta),t.toString()},e.prototype.isPointwiseEqual=function(t){if(this.pts.length!==t.pts.length)return!1;for(var e=0;e<this.pts.length;e++)if(!this.pts[e].equals2D(t.pts[e]))return!1;return!0},e.prototype.setDepthDelta=function(t){this._depthDelta=t},e.prototype.getEdgeIntersectionList=function(){return this.eiList},e.prototype.addIntersections=function(t,e,n){for(var r=0;r<t.getIntersectionNum();r++)this.addIntersection(t,e,n,r)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e.updateIM=function(){if(2!==arguments.length)return t.prototype.updateIM.apply(this,arguments);var e=arguments[0],n=arguments[1];n.setAtLeastIfValid(e.getLocation(0,Nh.ON),e.getLocation(1,Nh.ON),1),e.isArea()&&(n.setAtLeastIfValid(e.getLocation(0,Nh.LEFT),e.getLocation(1,Nh.LEFT),2),n.setAtLeastIfValid(e.getLocation(0,Nh.RIGHT),e.getLocation(1,Nh.RIGHT),2))},e}(Fh),np=function(t){this._workingPrecisionModel=null,this._workingNoder=null,this._geomFact=null,this._graph=null,this._edgeList=new Vl,this._bufParams=t||null};np.prototype.setWorkingPrecisionModel=function(t){this._workingPrecisionModel=t},np.prototype.insertUniqueEdge=function(t){var e=this._edgeList.findEqualEdge(t);if(null!==e){var n=e.getLabel(),r=t.getLabel();e.isPointwiseEqual(t)||(r=new Rh(t.getLabel())).flip(),n.merge(r);var i=np.depthDelta(r),o=e.getDepthDelta()+i;e.setDepthDelta(o)}else this._edgeList.add(t),t.setDepthDelta(np.depthDelta(t.getLabel()))},np.prototype.buildSubgraphs=function(t,e){for(var n=new bc,r=t.iterator();r.hasNext();){var i=r.next(),o=i.getRightmostCoordinate(),s=new Al(n).getDepth(o);i.computeDepth(s),i.findResultEdges(),n.add(i),e.add(i.getDirectedEdges(),i.getNodes())}},np.prototype.createSubgraphs=function(t){for(var e=new bc,n=t.getNodes().iterator();n.hasNext();){var r=n.next();if(!r.isVisited()){var i=new Ph;i.create(r),e.add(i)}}return $h.sort(e,$h.reverseOrder()),e},np.prototype.createEmptyResultGeometry=function(){return this._geomFact.createPolygon()},np.prototype.getNoder=function(t){if(null!==this._workingNoder)return this._workingNoder;var e=new El,n=new rc;return n.setPrecisionModel(t),e.setSegmentIntersector(new Wl(n)),e},np.prototype.buffer=function(t,e){var n=this._workingPrecisionModel;null===n&&(n=t.getPrecisionModel()),this._geomFact=t.getFactory();var r=new Tl(n,this._bufParams),i=new Gl(t,e,r).getCurves();if(i.size()<=0)return this.createEmptyResultGeometry();this.computeNodedEdges(i,n),this._graph=new Uh(new Ul),this._graph.addEdges(this._edgeList.getEdges());var o=this.createSubgraphs(this._graph),s=new Yh(this._geomFact);this.buildSubgraphs(o,s);var a=s.getPolygons();if(a.size()<=0)return this.createEmptyResultGeometry();return this._geomFact.buildGeometry(a)},np.prototype.computeNodedEdges=function(t,e){var n=this.getNoder(e);n.computeNodes(t);for(var r=n.getNodedSubstrings().iterator();r.hasNext();){var i=r.next(),o=i.getCoordinates();if(2!==o.length||!o[0].equals2D(o[1])){var s=i.getData(),a=new ep(i.getCoordinates(),new Rh(s));this.insertUniqueEdge(a)}}},np.prototype.setNoder=function(t){this._workingNoder=t},np.prototype.interfaces_=function(){return[]},np.prototype.getClass=function(){return np},np.depthDelta=function(t){var e=t.getLocation(0,Nh.LEFT),n=t.getLocation(0,Nh.RIGHT);return e===Su.INTERIOR&&n===Su.EXTERIOR?1:e===Su.EXTERIOR&&n===Su.INTERIOR?-1:0},np.convertSegStrings=function(t){for(var e=new _h,n=new bc;t.hasNext();){var r=t.next(),i=e.createLineString(r.getCoordinates());n.add(i)}return e.buildGeometry(n)};var rp=function(){if(this._noder=null,this._scaleFactor=null,this._offsetX=null,this._offsetY=null,this._isScaled=!1,2===arguments.length){var t=arguments[0],e=arguments[1];this._noder=t,this._scaleFactor=e,this._offsetX=0,this._offsetY=0,this._isScaled=!this.isIntegerPrecision()}else if(4===arguments.length){var n=arguments[0],r=arguments[1],i=arguments[2],o=arguments[3];this._noder=n,this._scaleFactor=r,this._offsetX=i,this._offsetY=o,this._isScaled=!this.isIntegerPrecision()}};rp.prototype.rescale=function(){if(Lu(arguments[0],vc))for(var t=arguments[0].iterator();t.hasNext();){var e=t.next();this.rescale(e.getCoordinates())}else if(arguments[0]instanceof Array){for(var n=arguments[0],r=0;r<n.length;r++)n[r].x=n[r].x/this._scaleFactor+this._offsetX,n[r].y=n[r].y/this._scaleFactor+this._offsetY;2===n.length&&n[0].equals2D(n[1])&&Xu.out.println(n)}},rp.prototype.scale=function(){if(Lu(arguments[0],vc)){for(var t=arguments[0],e=new bc,n=t.iterator();n.hasNext();){var r=n.next();e.add(new fl(this.scale(r.getCoordinates()),r.getData()))}return e}if(arguments[0]instanceof Array){for(var i=arguments[0],o=new Array(i.length).fill(null),s=0;s<i.length;s++)o[s]=new bu(Math.round((i[s].x-this._offsetX)*this._scaleFactor),Math.round((i[s].y-this._offsetY)*this._scaleFactor),i[s].z);return Cc.removeRepeatedPoints(o)}},rp.prototype.isIntegerPrecision=function(){return 1===this._scaleFactor},rp.prototype.getNodedSubstrings=function(){var t=this._noder.getNodedSubstrings();return this._isScaled&&this.rescale(t),t},rp.prototype.computeNodes=function(t){var e=t;this._isScaled&&(e=this.scale(t)),this._noder.computeNodes(e)},rp.prototype.interfaces_=function(){return[vl]},rp.prototype.getClass=function(){return rp};var ip=function(){this._li=new rc,this._segStrings=null;var t=arguments[0];this._segStrings=t},op={fact:{configurable:!0}};ip.prototype.checkEndPtVertexIntersections=function(){if(0===arguments.length)for(var t=this._segStrings.iterator();t.hasNext();){var e=t.next().getCoordinates();this.checkEndPtVertexIntersections(e[0],this._segStrings),this.checkEndPtVertexIntersections(e[e.length-1],this._segStrings)}else if(2===arguments.length)for(var n=arguments[0],r=arguments[1].iterator();r.hasNext();)for(var i=r.next().getCoordinates(),o=1;o<i.length-1;o++)if(i[o].equals(n))throw new Qu("found endpt/interior pt intersection at index "+o+" :pt "+n)},ip.prototype.checkInteriorIntersections=function(){if(0===arguments.length)for(var t=this._segStrings.iterator();t.hasNext();)for(var e=t.next(),n=this._segStrings.iterator();n.hasNext();){var r=n.next();this.checkInteriorIntersections(e,r)}else if(2===arguments.length)for(var i=arguments[0],o=arguments[1],s=i.getCoordinates(),a=o.getCoordinates(),u=0;u<s.length-1;u++)for(var c=0;c<a.length-1;c++)this.checkInteriorIntersections(i,u,o,c);else if(4===arguments.length){var h=arguments[0],l=arguments[1],p=arguments[2],f=arguments[3];if(h===p&&l===f)return null;var g=h.getCoordinates()[l],d=h.getCoordinates()[l+1],y=p.getCoordinates()[f],_=p.getCoordinates()[f+1];if(this._li.computeIntersection(g,d,y,_),this._li.hasIntersection()&&(this._li.isProper()||this.hasInteriorIntersection(this._li,g,d)||this.hasInteriorIntersection(this._li,y,_)))throw new Qu("found non-noded intersection at "+g+"-"+d+" and "+y+"-"+_)}},ip.prototype.checkValid=function(){this.checkEndPtVertexIntersections(),this.checkInteriorIntersections(),this.checkCollapses()},ip.prototype.checkCollapses=function(){if(0===arguments.length)for(var t=this._segStrings.iterator();t.hasNext();){var e=t.next();this.checkCollapses(e)}else if(1===arguments.length)for(var n=arguments[0].getCoordinates(),r=0;r<n.length-2;r++)this.checkCollapse(n[r],n[r+1],n[r+2])},ip.prototype.hasInteriorIntersection=function(t,e,n){for(var r=0;r<t.getIntersectionNum();r++){var i=t.getIntersection(r);if(!i.equals(e)&&!i.equals(n))return!0}return!1},ip.prototype.checkCollapse=function(t,e,n){if(t.equals(n))throw new Qu("found non-noded collapse at "+ip.fact.createLineString([t,e,n]))},ip.prototype.interfaces_=function(){return[]},ip.prototype.getClass=function(){return ip},op.fact.get=function(){return new _h},Object.defineProperties(ip,op);var sp=function(){this._li=null,this._pt=null,this._originalPt=null,this._ptScaled=null,this._p0Scaled=null,this._p1Scaled=null,this._scaleFactor=null,this._minx=null,this._maxx=null,this._miny=null,this._maxy=null,this._corner=new Array(4).fill(null),this._safeEnv=null;var t=arguments[0],e=arguments[1],n=arguments[2];if(this._originalPt=t,this._pt=t,this._scaleFactor=e,this._li=n,e<=0)throw new _u("Scale factor must be non-zero");1!==e&&(this._pt=new bu(this.scale(t.x),this.scale(t.y)),this._p0Scaled=new bu,this._p1Scaled=new bu),this.initCorners(this._pt)},ap={SAFE_ENV_EXPANSION_FACTOR:{configurable:!0}};sp.prototype.intersectsScaled=function(t,e){var n=Math.min(t.x,e.x),r=Math.max(t.x,e.x),i=Math.min(t.y,e.y),o=Math.max(t.y,e.y),s=this._maxx<n||this._minx>r||this._maxy<i||this._miny>o;if(s)return!1;var a=this.intersectsToleranceSquare(t,e);return tc.isTrue(!(s&&a),"Found bad envelope test"),a},sp.prototype.initCorners=function(t){this._minx=t.x-.5,this._maxx=t.x+.5,this._miny=t.y-.5,this._maxy=t.y+.5,this._corner[0]=new bu(this._maxx,this._maxy),this._corner[1]=new bu(this._minx,this._maxy),this._corner[2]=new bu(this._minx,this._miny),this._corner[3]=new bu(this._maxx,this._miny)},sp.prototype.intersects=function(t,e){return 1===this._scaleFactor?this.intersectsScaled(t,e):(this.copyScaled(t,this._p0Scaled),this.copyScaled(e,this._p1Scaled),this.intersectsScaled(this._p0Scaled,this._p1Scaled))},sp.prototype.scale=function(t){return Math.round(t*this._scaleFactor)},sp.prototype.getCoordinate=function(){return this._originalPt},sp.prototype.copyScaled=function(t,e){e.x=this.scale(t.x),e.y=this.scale(t.y)},sp.prototype.getSafeEnvelope=function(){if(null===this._safeEnv){var t=sp.SAFE_ENV_EXPANSION_FACTOR/this._scaleFactor;this._safeEnv=new Yu(this._originalPt.x-t,this._originalPt.x+t,this._originalPt.y-t,this._originalPt.y+t)}return this._safeEnv},sp.prototype.intersectsPixelClosure=function(t,e){return this._li.computeIntersection(t,e,this._corner[0],this._corner[1]),!!this._li.hasIntersection()||(this._li.computeIntersection(t,e,this._corner[1],this._corner[2]),!!this._li.hasIntersection()||(this._li.computeIntersection(t,e,this._corner[2],this._corner[3]),!!this._li.hasIntersection()||(this._li.computeIntersection(t,e,this._corner[3],this._corner[0]),!!this._li.hasIntersection())))},sp.prototype.intersectsToleranceSquare=function(t,e){var n=!1,r=!1;return this._li.computeIntersection(t,e,this._corner[0],this._corner[1]),!!this._li.isProper()||(this._li.computeIntersection(t,e,this._corner[1],this._corner[2]),!!this._li.isProper()||(this._li.hasIntersection()&&(n=!0),this._li.computeIntersection(t,e,this._corner[2],this._corner[3]),!!this._li.isProper()||(this._li.hasIntersection()&&(r=!0),this._li.computeIntersection(t,e,this._corner[3],this._corner[0]),!!this._li.isProper()||(!(!n||!r)||(!!t.equals(this._pt)||!!e.equals(this._pt))))))},sp.prototype.addSnappedNode=function(t,e){var n=t.getCoordinate(e),r=t.getCoordinate(e+1);return!!this.intersects(n,r)&&(t.addIntersection(this.getCoordinate(),e),!0)},sp.prototype.interfaces_=function(){return[]},sp.prototype.getClass=function(){return sp},ap.SAFE_ENV_EXPANSION_FACTOR.get=function(){return.75},Object.defineProperties(sp,ap);var up=function(){this.tempEnv1=new Yu,this.selectedSegment=new gl};up.prototype.select=function(){if(1===arguments.length);else if(2===arguments.length){var t=arguments[0],e=arguments[1];t.getLineSegment(e,this.selectedSegment),this.select(this.selectedSegment)}},up.prototype.interfaces_=function(){return[]},up.prototype.getClass=function(){return up};var cp=function(){this._index=null;var t=arguments[0];this._index=t},hp={HotPixelSnapAction:{configurable:!0}};cp.prototype.snap=function(){if(1===arguments.length){var t=arguments[0];return this.snap(t,null,-1)}if(3===arguments.length){var e=arguments[0],n=arguments[1],r=arguments[2],i=e.getSafeEnvelope(),o=new lp(e,n,r);return this._index.query(i,{interfaces_:function(){return[Jh]},visitItem:function(t){t.select(i,o)}}),o.isNodeAdded()}},cp.prototype.interfaces_=function(){return[]},cp.prototype.getClass=function(){return cp},hp.HotPixelSnapAction.get=function(){return lp},Object.defineProperties(cp,hp);var lp=function(t){function e(){t.call(this),this._hotPixel=null,this._parentEdge=null,this._hotPixelVertexIndex=null,this._isNodeAdded=!1;var e=arguments[0],n=arguments[1],r=arguments[2];this._hotPixel=e,this._parentEdge=n,this._hotPixelVertexIndex=r}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.isNodeAdded=function(){return this._isNodeAdded},e.prototype.select=function(){if(2!==arguments.length)return t.prototype.select.apply(this,arguments);var e=arguments[0],n=arguments[1],r=e.getContext();if(null!==this._parentEdge&&r===this._parentEdge&&n===this._hotPixelVertexIndex)return null;this._isNodeAdded=this._hotPixel.addSnappedNode(r,n)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(up),pp=function(){this._li=null,this._interiorIntersections=null;var t=arguments[0];this._li=t,this._interiorIntersections=new bc};pp.prototype.processIntersections=function(t,e,n,r){if(t===n&&e===r)return null;var i=t.getCoordinates()[e],o=t.getCoordinates()[e+1],s=n.getCoordinates()[r],a=n.getCoordinates()[r+1];if(this._li.computeIntersection(i,o,s,a),this._li.hasIntersection()&&this._li.isInteriorIntersection()){for(var u=0;u<this._li.getIntersectionNum();u++)this._interiorIntersections.add(this._li.getIntersection(u));t.addIntersections(this._li,e,0),n.addIntersections(this._li,r,1)}},pp.prototype.isDone=function(){return!1},pp.prototype.getInteriorIntersections=function(){return this._interiorIntersections},pp.prototype.interfaces_=function(){return[Hl]},pp.prototype.getClass=function(){return pp};var fp=function(){this._pm=null,this._li=null,this._scaleFactor=null,this._noder=null,this._pointSnapper=null,this._nodedSegStrings=null;var t=arguments[0];this._pm=t,this._li=new rc,this._li.setPrecisionModel(t),this._scaleFactor=t.getScale()};fp.prototype.checkCorrectness=function(t){var e=fl.getNodedSubstrings(t),n=new ip(e);try{n.checkValid()}catch(t){if(!(t instanceof zu))throw t;t.printStackTrace()}},fp.prototype.getNodedSubstrings=function(){return fl.getNodedSubstrings(this._nodedSegStrings)},fp.prototype.snapRound=function(t,e){var n=this.findInteriorIntersections(t,e);this.computeIntersectionSnaps(n),this.computeVertexSnaps(t)},fp.prototype.findInteriorIntersections=function(t,e){var n=new pp(e);return this._noder.setSegmentIntersector(n),this._noder.computeNodes(t),n.getInteriorIntersections()},fp.prototype.computeVertexSnaps=function(){if(Lu(arguments[0],vc))for(var t=arguments[0].iterator();t.hasNext();){var e=t.next();this.computeVertexSnaps(e)}else if(arguments[0]instanceof fl)for(var n=arguments[0],r=n.getCoordinates(),i=0;i<r.length;i++){var o=new sp(r[i],this._scaleFactor,this._li);this._pointSnapper.snap(o,n,i)&&n.addIntersection(r[i],i)}},fp.prototype.computeNodes=function(t){this._nodedSegStrings=t,this._noder=new El,this._pointSnapper=new cp(this._noder.getIndex()),this.snapRound(t,this._li)},fp.prototype.computeIntersectionSnaps=function(t){for(var e=t.iterator();e.hasNext();){var n=e.next(),r=new sp(n,this._scaleFactor,this._li);this._pointSnapper.snap(r)}},fp.prototype.interfaces_=function(){return[vl]},fp.prototype.getClass=function(){return fp};var gp=function(){if(this._argGeom=null,this._distance=null,this._bufParams=new bl,this._resultGeometry=null,this._saveException=null,1===arguments.length){var t=arguments[0];this._argGeom=t}else if(2===arguments.length){var e=arguments[0],n=arguments[1];this._argGeom=e,this._bufParams=n}},dp={CAP_ROUND:{configurable:!0},CAP_BUTT:{configurable:!0},CAP_FLAT:{configurable:!0},CAP_SQUARE:{configurable:!0},MAX_PRECISION_DIGITS:{configurable:!0}};gp.prototype.bufferFixedPrecision=function(t){var e=new rp(new fp(new fh(1)),t.getScale()),n=new np(this._bufParams);n.setWorkingPrecisionModel(t),n.setNoder(e),this._resultGeometry=n.buffer(this._argGeom,this._distance)},gp.prototype.bufferReducedPrecision=function(){var t=this;if(0===arguments.length){for(var e=gp.MAX_PRECISION_DIGITS;e>=0;e--){try{t.bufferReducedPrecision(e)}catch(e){if(!(e instanceof Mh))throw e;t._saveException=e}if(null!==t._resultGeometry)return null}throw this._saveException}if(1===arguments.length){var n=arguments[0],r=gp.precisionScaleFactor(this._argGeom,this._distance,n),i=new fh(r);this.bufferFixedPrecision(i)}},gp.prototype.computeGeometry=function(){if(this.bufferOriginalPrecision(),null!==this._resultGeometry)return null;var t=this._argGeom.getFactory().getPrecisionModel();t.getType()===fh.FIXED?this.bufferFixedPrecision(t):this.bufferReducedPrecision()},gp.prototype.setQuadrantSegments=function(t){this._bufParams.setQuadrantSegments(t)},gp.prototype.bufferOriginalPrecision=function(){try{var t=new np(this._bufParams);this._resultGeometry=t.buffer(this._argGeom,this._distance)}catch(t){if(!(t instanceof Qu))throw t;this._saveException=t}},gp.prototype.getResultGeometry=function(t){return this._distance=t,this.computeGeometry(),this._resultGeometry},gp.prototype.setEndCapStyle=function(t){this._bufParams.setEndCapStyle(t)},gp.prototype.interfaces_=function(){return[]},gp.prototype.getClass=function(){return gp},gp.bufferOp=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1];return new gp(t).getResultGeometry(e)}if(3===arguments.length){if(Number.isInteger(arguments[2])&&arguments[0]instanceof cc&&"number"==typeof arguments[1]){var n=arguments[0],r=arguments[1],i=arguments[2],o=new gp(n);o.setQuadrantSegments(i);return o.getResultGeometry(r)}if(arguments[2]instanceof bl&&arguments[0]instanceof cc&&"number"==typeof arguments[1]){var s=arguments[0],a=arguments[1],u=arguments[2];return new gp(s,u).getResultGeometry(a)}}else if(4===arguments.length){var c=arguments[0],h=arguments[1],l=arguments[2],p=arguments[3],f=new gp(c);f.setQuadrantSegments(l),f.setEndCapStyle(p);return f.getResultGeometry(h)}},gp.precisionScaleFactor=function(t,e,n){var r=t.getEnvelopeInternal(),i=Pu.max(Math.abs(r.getMaxX()),Math.abs(r.getMaxY()),Math.abs(r.getMinX()),Math.abs(r.getMinY()))+2*(e>0?e:0),o=n-Math.trunc(Math.log(i)/Math.log(10)+1);return Math.pow(10,o)},dp.CAP_ROUND.get=function(){return bl.CAP_ROUND},dp.CAP_BUTT.get=function(){return bl.CAP_FLAT},dp.CAP_FLAT.get=function(){return bl.CAP_FLAT},dp.CAP_SQUARE.get=function(){return bl.CAP_SQUARE},dp.MAX_PRECISION_DIGITS.get=function(){return 12},Object.defineProperties(gp,dp);var yp=function(){this._pt=[new bu,new bu],this._distance=mu.NaN,this._isNull=!0};yp.prototype.getCoordinates=function(){return this._pt},yp.prototype.getCoordinate=function(t){return this._pt[t]},yp.prototype.setMinimum=function(){if(1===arguments.length){var t=arguments[0];this.setMinimum(t._pt[0],t._pt[1])}else if(2===arguments.length){var e=arguments[0],n=arguments[1];if(this._isNull)return this.initialize(e,n),null;var r=e.distance(n);r<this._distance&&this.initialize(e,n,r)}},yp.prototype.initialize=function(){if(0===arguments.length)this._isNull=!0;else if(2===arguments.length){var t=arguments[0],e=arguments[1];this._pt[0].setCoordinate(t),this._pt[1].setCoordinate(e),this._distance=t.distance(e),this._isNull=!1}else if(3===arguments.length){var n=arguments[0],r=arguments[1],i=arguments[2];this._pt[0].setCoordinate(n),this._pt[1].setCoordinate(r),this._distance=i,this._isNull=!1}},yp.prototype.getDistance=function(){return this._distance},yp.prototype.setMaximum=function(){if(1===arguments.length){var t=arguments[0];this.setMaximum(t._pt[0],t._pt[1])}else if(2===arguments.length){var e=arguments[0],n=arguments[1];if(this._isNull)return this.initialize(e,n),null;var r=e.distance(n);r>this._distance&&this.initialize(e,n,r)}},yp.prototype.interfaces_=function(){return[]},yp.prototype.getClass=function(){return yp};var _p=function(){};_p.prototype.interfaces_=function(){return[]},_p.prototype.getClass=function(){return _p},_p.computeDistance=function(){if(arguments[2]instanceof yp&&arguments[0]instanceof Jc&&arguments[1]instanceof bu)for(var t=arguments[0],e=arguments[1],n=arguments[2],r=t.getCoordinates(),i=new gl,o=0;o<r.length-1;o++){i.setCoordinates(r[o],r[o+1]);var s=i.closestPoint(e);n.setMinimum(s,e)}else if(arguments[2]instanceof yp&&arguments[0]instanceof $c&&arguments[1]instanceof bu){var a=arguments[0],u=arguments[1],c=arguments[2];_p.computeDistance(a.getExteriorRing(),u,c);for(var h=0;h<a.getNumInteriorRing();h++)_p.computeDistance(a.getInteriorRingN(h),u,c)}else if(arguments[2]instanceof yp&&arguments[0]instanceof cc&&arguments[1]instanceof bu){var l=arguments[0],p=arguments[1],f=arguments[2];if(l instanceof Jc)_p.computeDistance(l,p,f);else if(l instanceof $c)_p.computeDistance(l,p,f);else if(l instanceof jc)for(var g=l,d=0;d<g.getNumGeometries();d++){var y=g.getGeometryN(d);_p.computeDistance(y,p,f)}else f.setMinimum(l.getCoordinate(),p)}else if(arguments[2]instanceof yp&&arguments[0]instanceof gl&&arguments[1]instanceof bu){var _=arguments[0],m=arguments[1],v=arguments[2],x=_.closestPoint(m);v.setMinimum(x,m)}};var mp=function(t){this._maxPtDist=new yp,this._inputGeom=t||null},vp={MaxPointDistanceFilter:{configurable:!0},MaxMidpointDistanceFilter:{configurable:!0}};mp.prototype.computeMaxMidpointDistance=function(t){var e=new Ep(this._inputGeom);t.apply(e),this._maxPtDist.setMaximum(e.getMaxPointDistance())},mp.prototype.computeMaxVertexDistance=function(t){var e=new xp(this._inputGeom);t.apply(e),this._maxPtDist.setMaximum(e.getMaxPointDistance())},mp.prototype.findDistance=function(t){return this.computeMaxVertexDistance(t),this.computeMaxMidpointDistance(t),this._maxPtDist.getDistance()},mp.prototype.getDistancePoints=function(){return this._maxPtDist},mp.prototype.interfaces_=function(){return[]},mp.prototype.getClass=function(){return mp},vp.MaxPointDistanceFilter.get=function(){return xp},vp.MaxMidpointDistanceFilter.get=function(){return Ep},Object.defineProperties(mp,vp);var xp=function(t){this._maxPtDist=new yp,this._minPtDist=new yp,this._geom=t||null};xp.prototype.filter=function(t){this._minPtDist.initialize(),_p.computeDistance(this._geom,t,this._minPtDist),this._maxPtDist.setMaximum(this._minPtDist)},xp.prototype.getMaxPointDistance=function(){return this._maxPtDist},xp.prototype.interfaces_=function(){return[pc]},xp.prototype.getClass=function(){return xp};var Ep=function(t){this._maxPtDist=new yp,this._minPtDist=new yp,this._geom=t||null};Ep.prototype.filter=function(t,e){if(0===e)return null;var n=t.getCoordinate(e-1),r=t.getCoordinate(e),i=new bu((n.x+r.x)/2,(n.y+r.y)/2);this._minPtDist.initialize(),_p.computeDistance(this._geom,i,this._minPtDist),this._maxPtDist.setMaximum(this._minPtDist)},Ep.prototype.isDone=function(){return!1},Ep.prototype.isGeometryChanged=function(){return!1},Ep.prototype.getMaxPointDistance=function(){return this._maxPtDist},Ep.prototype.interfaces_=function(){return[zc]},Ep.prototype.getClass=function(){return Ep};var wp=function(t){this._comps=t||null};wp.prototype.filter=function(t){t instanceof $c&&this._comps.add(t)},wp.prototype.interfaces_=function(){return[kc]},wp.prototype.getClass=function(){return wp},wp.getPolygons=function(){if(1===arguments.length){var t=arguments[0];return wp.getPolygons(t,new bc)}if(2===arguments.length){var e=arguments[0],n=arguments[1];return e instanceof $c?n.add(e):e instanceof jc&&e.apply(new wp(n)),n}};var bp=function(){if(this._lines=null,this._isForcedToLineString=!1,1===arguments.length){var t=arguments[0];this._lines=t}else if(2===arguments.length){var e=arguments[0],n=arguments[1];this._lines=e,this._isForcedToLineString=n}};bp.prototype.filter=function(t){if(this._isForcedToLineString&&t instanceof eh){var e=t.getFactory().createLineString(t.getCoordinateSequence());return this._lines.add(e),null}t instanceof Jc&&this._lines.add(t)},bp.prototype.setForceToLineString=function(t){this._isForcedToLineString=t},bp.prototype.interfaces_=function(){return[uc]},bp.prototype.getClass=function(){return bp},bp.getGeometry=function(){if(1===arguments.length){var t=arguments[0];return t.getFactory().buildGeometry(bp.getLines(t))}if(2===arguments.length){var e=arguments[0],n=arguments[1];return e.getFactory().buildGeometry(bp.getLines(e,n))}},bp.getLines=function(){if(1===arguments.length){var t=arguments[0];return bp.getLines(t,!1)}if(2===arguments.length){if(Lu(arguments[0],vc)&&Lu(arguments[1],vc)){for(var e=arguments[0],n=arguments[1],r=e.iterator();r.hasNext();){var i=r.next();bp.getLines(i,n)}return n}if(arguments[0]instanceof cc&&"boolean"==typeof arguments[1]){var o=arguments[0],s=arguments[1],a=new bc;return o.apply(new bp(a,s)),a}if(arguments[0]instanceof cc&&Lu(arguments[1],vc)){var u=arguments[0],c=arguments[1];return u instanceof Jc?c.add(u):u.apply(new bp(c)),c}}else if(3===arguments.length){if("boolean"==typeof arguments[2]&&Lu(arguments[0],vc)&&Lu(arguments[1],vc)){for(var h=arguments[0],l=arguments[1],p=arguments[2],f=h.iterator();f.hasNext();){var g=f.next();bp.getLines(g,l,p)}return l}if("boolean"==typeof arguments[2]&&arguments[0]instanceof cc&&Lu(arguments[1],vc)){var d=arguments[0],y=arguments[1],_=arguments[2];return d.apply(new bp(y,_)),y}}};var Ip=function(){if(this._boundaryRule=fc.OGC_SFS_BOUNDARY_RULE,this._isIn=null,this._numBoundaries=null,0===arguments.length);else if(1===arguments.length){var t=arguments[0];if(null===t)throw new _u("Rule must be non-null");this._boundaryRule=t}};Ip.prototype.locateInternal=function(){if(arguments[0]instanceof bu&&arguments[1]instanceof $c){var t=arguments[0],e=arguments[1];if(e.isEmpty())return Su.EXTERIOR;var n=e.getExteriorRing(),r=this.locateInPolygonRing(t,n);if(r===Su.EXTERIOR)return Su.EXTERIOR;if(r===Su.BOUNDARY)return Su.BOUNDARY;for(var i=0;i<e.getNumInteriorRing();i++){var o=e.getInteriorRingN(i),s=this.locateInPolygonRing(t,o);if(s===Su.INTERIOR)return Su.EXTERIOR;if(s===Su.BOUNDARY)return Su.BOUNDARY}return Su.INTERIOR}if(arguments[0]instanceof bu&&arguments[1]instanceof Jc){var a=arguments[0],u=arguments[1];if(!u.getEnvelopeInternal().intersects(a))return Su.EXTERIOR;var c=u.getCoordinates();return u.isClosed()||!a.equals(c[0])&&!a.equals(c[c.length-1])?sc.isOnLine(a,c)?Su.INTERIOR:Su.EXTERIOR:Su.BOUNDARY}if(arguments[0]instanceof bu&&arguments[1]instanceof Kc){var h=arguments[0];return arguments[1].getCoordinate().equals2D(h)?Su.INTERIOR:Su.EXTERIOR}},Ip.prototype.locateInPolygonRing=function(t,e){return e.getEnvelopeInternal().intersects(t)?sc.locatePointInRing(t,e.getCoordinates()):Su.EXTERIOR},Ip.prototype.intersects=function(t,e){return this.locate(t,e)!==Su.EXTERIOR},Ip.prototype.updateLocationInfo=function(t){t===Su.INTERIOR&&(this._isIn=!0),t===Su.BOUNDARY&&this._numBoundaries++},Ip.prototype.computeLocation=function(t,e){if(e instanceof Kc&&this.updateLocationInfo(this.locateInternal(t,e)),e instanceof Jc)this.updateLocationInfo(this.locateInternal(t,e));else if(e instanceof $c)this.updateLocationInfo(this.locateInternal(t,e));else if(e instanceof Xc)for(var n=e,r=0;r<n.getNumGeometries();r++){var i=n.getGeometryN(r);this.updateLocationInfo(this.locateInternal(t,i))}else if(e instanceof nh)for(var o=e,s=0;s<o.getNumGeometries();s++){var a=o.getGeometryN(s);this.updateLocationInfo(this.locateInternal(t,a))}else if(e instanceof jc)for(var u=new kl(e);u.hasNext();){var c=u.next();c!==e&&this.computeLocation(t,c)}},Ip.prototype.locate=function(t,e){return e.isEmpty()?Su.EXTERIOR:e instanceof Jc?this.locateInternal(t,e):e instanceof $c?this.locateInternal(t,e):(this._isIn=!1,this._numBoundaries=0,this.computeLocation(t,e),this._boundaryRule.isInBoundary(this._numBoundaries)?Su.BOUNDARY:this._numBoundaries>0||this._isIn?Su.INTERIOR:Su.EXTERIOR)},Ip.prototype.interfaces_=function(){return[]},Ip.prototype.getClass=function(){return Ip};var Np=function t(){if(this._component=null,this._segIndex=null,this._pt=null,2===arguments.length){var e=arguments[0],n=arguments[1];t.call(this,e,t.INSIDE_AREA,n)}else if(3===arguments.length){var r=arguments[0],i=arguments[1],o=arguments[2];this._component=r,this._segIndex=i,this._pt=o}},Cp={INSIDE_AREA:{configurable:!0}};Np.prototype.isInsideArea=function(){return this._segIndex===Np.INSIDE_AREA},Np.prototype.getCoordinate=function(){return this._pt},Np.prototype.getGeometryComponent=function(){return this._component},Np.prototype.getSegmentIndex=function(){return this._segIndex},Np.prototype.interfaces_=function(){return[]},Np.prototype.getClass=function(){return Np},Cp.INSIDE_AREA.get=function(){return-1},Object.defineProperties(Np,Cp);var Sp=function(t){this._pts=t||null};Sp.prototype.filter=function(t){t instanceof Kc&&this._pts.add(t)},Sp.prototype.interfaces_=function(){return[kc]},Sp.prototype.getClass=function(){return Sp},Sp.getPoints=function(){if(1===arguments.length){var t=arguments[0];return t instanceof Kc?$h.singletonList(t):Sp.getPoints(t,new bc)}if(2===arguments.length){var e=arguments[0],n=arguments[1];return e instanceof Kc?n.add(e):e instanceof jc&&e.apply(new Sp(n)),n}};var Mp=function(){this._locations=null;var t=arguments[0];this._locations=t};Mp.prototype.filter=function(t){(t instanceof Kc||t instanceof Jc||t instanceof $c)&&this._locations.add(new Np(t,0,t.getCoordinate()))},Mp.prototype.interfaces_=function(){return[kc]},Mp.prototype.getClass=function(){return Mp},Mp.getLocations=function(t){var e=new bc;return t.apply(new Mp(e)),e};var Lp=function(){if(this._geom=null,this._terminateDistance=0,this._ptLocator=new Ip,this._minDistanceLocation=null,this._minDistance=mu.MAX_VALUE,2===arguments.length){var t=arguments[0],e=arguments[1];this._geom=[t,e],this._terminateDistance=0}else if(3===arguments.length){var n=arguments[0],r=arguments[1],i=arguments[2];this._geom=new Array(2).fill(null),this._geom[0]=n,this._geom[1]=r,this._terminateDistance=i}};Lp.prototype.computeContainmentDistance=function(){if(0===arguments.length){var t=new Array(2).fill(null);if(this.computeContainmentDistance(0,t),this._minDistance<=this._terminateDistance)return null;this.computeContainmentDistance(1,t)}else if(2===arguments.length){var e=arguments[0],n=arguments[1],r=1-e,i=wp.getPolygons(this._geom[e]);if(i.size()>0){var o=Mp.getLocations(this._geom[r]);if(this.computeContainmentDistance(o,i,n),this._minDistance<=this._terminateDistance)return this._minDistanceLocation[r]=n[0],this._minDistanceLocation[e]=n[1],null}}else if(3===arguments.length)if(arguments[2]instanceof Array&&Lu(arguments[0],wc)&&Lu(arguments[1],wc)){for(var s=arguments[0],a=arguments[1],u=arguments[2],c=0;c<s.size();c++)for(var h=s.get(c),l=0;l<a.size();l++)if(this.computeContainmentDistance(h,a.get(l),u),this._minDistance<=this._terminateDistance)return null}else if(arguments[2]instanceof Array&&arguments[0]instanceof Np&&arguments[1]instanceof $c){var p=arguments[0],f=arguments[1],g=arguments[2],d=p.getCoordinate();if(Su.EXTERIOR!==this._ptLocator.locate(d,f))return this._minDistance=0,g[0]=p,g[1]=new Np(f,d),null}},Lp.prototype.computeMinDistanceLinesPoints=function(t,e,n){for(var r=0;r<t.size();r++)for(var i=t.get(r),o=0;o<e.size();o++){var s=e.get(o);if(this.computeMinDistance(i,s,n),this._minDistance<=this._terminateDistance)return null}},Lp.prototype.computeFacetDistance=function(){var t=new Array(2).fill(null),e=bp.getLines(this._geom[0]),n=bp.getLines(this._geom[1]),r=Sp.getPoints(this._geom[0]),i=Sp.getPoints(this._geom[1]);return this.computeMinDistanceLines(e,n,t),this.updateMinDistance(t,!1),this._minDistance<=this._terminateDistance?null:(t[0]=null,t[1]=null,this.computeMinDistanceLinesPoints(e,i,t),this.updateMinDistance(t,!1),this._minDistance<=this._terminateDistance?null:(t[0]=null,t[1]=null,this.computeMinDistanceLinesPoints(n,r,t),this.updateMinDistance(t,!0),this._minDistance<=this._terminateDistance?null:(t[0]=null,t[1]=null,this.computeMinDistancePoints(r,i,t),void this.updateMinDistance(t,!1))))},Lp.prototype.nearestLocations=function(){return this.computeMinDistance(),this._minDistanceLocation},Lp.prototype.updateMinDistance=function(t,e){if(null===t[0])return null;e?(this._minDistanceLocation[0]=t[1],this._minDistanceLocation[1]=t[0]):(this._minDistanceLocation[0]=t[0],this._minDistanceLocation[1]=t[1])},Lp.prototype.nearestPoints=function(){this.computeMinDistance();return[this._minDistanceLocation[0].getCoordinate(),this._minDistanceLocation[1].getCoordinate()]},Lp.prototype.computeMinDistance=function(){if(0===arguments.length){if(null!==this._minDistanceLocation)return null;if(this._minDistanceLocation=new Array(2).fill(null),this.computeContainmentDistance(),this._minDistance<=this._terminateDistance)return null;this.computeFacetDistance()}else if(3===arguments.length)if(arguments[2]instanceof Array&&arguments[0]instanceof Jc&&arguments[1]instanceof Kc){var t=arguments[0],e=arguments[1],n=arguments[2];if(t.getEnvelopeInternal().distance(e.getEnvelopeInternal())>this._minDistance)return null;for(var r=t.getCoordinates(),i=e.getCoordinate(),o=0;o<r.length-1;o++){var s=sc.distancePointLine(i,r[o],r[o+1]);if(s<this._minDistance){this._minDistance=s;var a=new gl(r[o],r[o+1]).closestPoint(i);n[0]=new Np(t,o,a),n[1]=new Np(e,0,i)}if(this._minDistance<=this._terminateDistance)return null}}else if(arguments[2]instanceof Array&&arguments[0]instanceof Jc&&arguments[1]instanceof Jc){var u=arguments[0],c=arguments[1],h=arguments[2];if(u.getEnvelopeInternal().distance(c.getEnvelopeInternal())>this._minDistance)return null;for(var l=u.getCoordinates(),p=c.getCoordinates(),f=0;f<l.length-1;f++)for(var g=0;g<p.length-1;g++){var d=sc.distanceLineLine(l[f],l[f+1],p[g],p[g+1]);if(d<this._minDistance){this._minDistance=d;var y=new gl(l[f],l[f+1]),_=new gl(p[g],p[g+1]),m=y.closestPoints(_);h[0]=new Np(u,f,m[0]),h[1]=new Np(c,g,m[1])}if(this._minDistance<=this._terminateDistance)return null}}},Lp.prototype.computeMinDistancePoints=function(t,e,n){for(var r=0;r<t.size();r++)for(var i=t.get(r),o=0;o<e.size();o++){var s=e.get(o),a=i.getCoordinate().distance(s.getCoordinate());if(a<this._minDistance&&(this._minDistance=a,n[0]=new Np(i,0,i.getCoordinate()),n[1]=new Np(s,0,s.getCoordinate())),this._minDistance<=this._terminateDistance)return null}},Lp.prototype.distance=function(){if(null===this._geom[0]||null===this._geom[1])throw new _u("null geometries are not supported");return this._geom[0].isEmpty()||this._geom[1].isEmpty()?0:(this.computeMinDistance(),this._minDistance)},Lp.prototype.computeMinDistanceLines=function(t,e,n){for(var r=0;r<t.size();r++)for(var i=t.get(r),o=0;o<e.size();o++){var s=e.get(o);if(this.computeMinDistance(i,s,n),this._minDistance<=this._terminateDistance)return null}},Lp.prototype.interfaces_=function(){return[]},Lp.prototype.getClass=function(){return Lp},Lp.distance=function(t,e){return new Lp(t,e).distance()},Lp.isWithinDistance=function(t,e,n){return new Lp(t,e,n).distance()<=n},Lp.nearestPoints=function(t,e){return new Lp(t,e).nearestPoints()};var Pp=function(){this._pt=[new bu,new bu],this._distance=mu.NaN,this._isNull=!0};Pp.prototype.getCoordinates=function(){return this._pt},Pp.prototype.getCoordinate=function(t){return this._pt[t]},Pp.prototype.setMinimum=function(){if(1===arguments.length){var t=arguments[0];this.setMinimum(t._pt[0],t._pt[1])}else if(2===arguments.length){var e=arguments[0],n=arguments[1];if(this._isNull)return this.initialize(e,n),null;var r=e.distance(n);r<this._distance&&this.initialize(e,n,r)}},Pp.prototype.initialize=function(){if(0===arguments.length)this._isNull=!0;else if(2===arguments.length){var t=arguments[0],e=arguments[1];this._pt[0].setCoordinate(t),this._pt[1].setCoordinate(e),this._distance=t.distance(e),this._isNull=!1}else if(3===arguments.length){var n=arguments[0],r=arguments[1],i=arguments[2];this._pt[0].setCoordinate(n),this._pt[1].setCoordinate(r),this._distance=i,this._isNull=!1}},Pp.prototype.toString=function(){return Ku.toLineString(this._pt[0],this._pt[1])},Pp.prototype.getDistance=function(){return this._distance},Pp.prototype.setMaximum=function(){if(1===arguments.length){var t=arguments[0];this.setMaximum(t._pt[0],t._pt[1])}else if(2===arguments.length){var e=arguments[0],n=arguments[1];if(this._isNull)return this.initialize(e,n),null;var r=e.distance(n);r>this._distance&&this.initialize(e,n,r)}},Pp.prototype.interfaces_=function(){return[]},Pp.prototype.getClass=function(){return Pp};var Op=function(){};Op.prototype.interfaces_=function(){return[]},Op.prototype.getClass=function(){return Op},Op.computeDistance=function(){if(arguments[2]instanceof Pp&&arguments[0]instanceof Jc&&arguments[1]instanceof bu)for(var t=arguments[0],e=arguments[1],n=arguments[2],r=new gl,i=t.getCoordinates(),o=0;o<i.length-1;o++){r.setCoordinates(i[o],i[o+1]);var s=r.closestPoint(e);n.setMinimum(s,e)}else if(arguments[2]instanceof Pp&&arguments[0]instanceof $c&&arguments[1]instanceof bu){var a=arguments[0],u=arguments[1],c=arguments[2];Op.computeDistance(a.getExteriorRing(),u,c);for(var h=0;h<a.getNumInteriorRing();h++)Op.computeDistance(a.getInteriorRingN(h),u,c)}else if(arguments[2]instanceof Pp&&arguments[0]instanceof cc&&arguments[1]instanceof bu){var l=arguments[0],p=arguments[1],f=arguments[2];if(l instanceof Jc)Op.computeDistance(l,p,f);else if(l instanceof $c)Op.computeDistance(l,p,f);else if(l instanceof jc)for(var g=l,d=0;d<g.getNumGeometries();d++){var y=g.getGeometryN(d);Op.computeDistance(y,p,f)}else f.setMinimum(l.getCoordinate(),p)}else if(arguments[2]instanceof Pp&&arguments[0]instanceof gl&&arguments[1]instanceof bu){var _=arguments[0],m=arguments[1],v=arguments[2],x=_.closestPoint(m);v.setMinimum(x,m)}};var Rp=function(){this._g0=null,this._g1=null,this._ptDist=new Pp,this._densifyFrac=0;var t=arguments[0],e=arguments[1];this._g0=t,this._g1=e},Tp={MaxPointDistanceFilter:{configurable:!0},MaxDensifiedByFractionDistanceFilter:{configurable:!0}};Rp.prototype.getCoordinates=function(){return this._ptDist.getCoordinates()},Rp.prototype.setDensifyFraction=function(t){if(t>1||t<=0)throw new _u("Fraction is not in range (0.0 - 1.0]");this._densifyFrac=t},Rp.prototype.compute=function(t,e){this.computeOrientedDistance(t,e,this._ptDist),this.computeOrientedDistance(e,t,this._ptDist)},Rp.prototype.distance=function(){return this.compute(this._g0,this._g1),this._ptDist.getDistance()},Rp.prototype.computeOrientedDistance=function(t,e,n){var r=new Ap(e);if(t.apply(r),n.setMaximum(r.getMaxPointDistance()),this._densifyFrac>0){var i=new Dp(e,this._densifyFrac);t.apply(i),n.setMaximum(i.getMaxPointDistance())}},Rp.prototype.orientedDistance=function(){return this.computeOrientedDistance(this._g0,this._g1,this._ptDist),this._ptDist.getDistance()},Rp.prototype.interfaces_=function(){return[]},Rp.prototype.getClass=function(){return Rp},Rp.distance=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1];return new Rp(t,e).distance()}if(3===arguments.length){var n=arguments[0],r=arguments[1],i=arguments[2],o=new Rp(n,r);return o.setDensifyFraction(i),o.distance()}},Tp.MaxPointDistanceFilter.get=function(){return Ap},Tp.MaxDensifiedByFractionDistanceFilter.get=function(){return Dp},Object.defineProperties(Rp,Tp);var Ap=function(){this._maxPtDist=new Pp,this._minPtDist=new Pp,this._euclideanDist=new Op,this._geom=null;var t=arguments[0];this._geom=t};Ap.prototype.filter=function(t){this._minPtDist.initialize(),Op.computeDistance(this._geom,t,this._minPtDist),this._maxPtDist.setMaximum(this._minPtDist)},Ap.prototype.getMaxPointDistance=function(){return this._maxPtDist},Ap.prototype.interfaces_=function(){return[pc]},Ap.prototype.getClass=function(){return Ap};var Dp=function(){this._maxPtDist=new Pp,this._minPtDist=new Pp,this._geom=null,this._numSubSegs=0;var t=arguments[0],e=arguments[1];this._geom=t,this._numSubSegs=Math.trunc(Math.round(1/e))};Dp.prototype.filter=function(t,e){if(0===e)return null;for(var n=t.getCoordinate(e-1),r=t.getCoordinate(e),i=(r.x-n.x)/this._numSubSegs,o=(r.y-n.y)/this._numSubSegs,s=0;s<this._numSubSegs;s++){var a=n.x+s*i,u=n.y+s*o,c=new bu(a,u);this._minPtDist.initialize(),Op.computeDistance(this._geom,c,this._minPtDist),this._maxPtDist.setMaximum(this._minPtDist)}},Dp.prototype.isDone=function(){return!1},Dp.prototype.isGeometryChanged=function(){return!1},Dp.prototype.getMaxPointDistance=function(){return this._maxPtDist},Dp.prototype.interfaces_=function(){return[zc]},Dp.prototype.getClass=function(){return Dp};var Fp=function(t,e,n){this._minValidDistance=null,this._maxValidDistance=null,this._minDistanceFound=null,this._maxDistanceFound=null,this._isValid=!0,this._errMsg=null,this._errorLocation=null,this._errorIndicator=null,this._input=t||null,this._bufDistance=e||null,this._result=n||null},qp={VERBOSE:{configurable:!0},MAX_DISTANCE_DIFF_FRAC:{configurable:!0}};Fp.prototype.checkMaximumDistance=function(t,e,n){var r=new Rp(e,t);if(r.setDensifyFraction(.25),this._maxDistanceFound=r.orientedDistance(),this._maxDistanceFound>n){this._isValid=!1;var i=r.getCoordinates();this._errorLocation=i[1],this._errorIndicator=t.getFactory().createLineString(i),this._errMsg="Distance between buffer curve and input is too large ("+this._maxDistanceFound+" at "+Ku.toLineString(i[0],i[1])+")"}},Fp.prototype.isValid=function(){var t=Math.abs(this._bufDistance),e=Fp.MAX_DISTANCE_DIFF_FRAC*t;return this._minValidDistance=t-e,this._maxValidDistance=t+e,!(!this._input.isEmpty()&&!this._result.isEmpty())||(this._bufDistance>0?this.checkPositiveValid():this.checkNegativeValid(),Fp.VERBOSE&&Xu.out.println("Min Dist= "+this._minDistanceFound+"  err= "+(1-this._minDistanceFound/this._bufDistance)+"  Max Dist= "+this._maxDistanceFound+"  err= "+(this._maxDistanceFound/this._bufDistance-1)),this._isValid)},Fp.prototype.checkNegativeValid=function(){if(!(this._input instanceof $c||this._input instanceof nh||this._input instanceof jc))return null;var t=this.getPolygonLines(this._input);if(this.checkMinimumDistance(t,this._result,this._minValidDistance),!this._isValid)return null;this.checkMaximumDistance(t,this._result,this._maxValidDistance)},Fp.prototype.getErrorIndicator=function(){return this._errorIndicator},Fp.prototype.checkMinimumDistance=function(t,e,n){var r=new Lp(t,e,n);if(this._minDistanceFound=r.distance(),this._minDistanceFound<n){this._isValid=!1;var i=r.nearestPoints();this._errorLocation=r.nearestPoints()[1],this._errorIndicator=t.getFactory().createLineString(i),this._errMsg="Distance between buffer curve and input is too small ("+this._minDistanceFound+" at "+Ku.toLineString(i[0],i[1])+" )"}},Fp.prototype.checkPositiveValid=function(){var t=this._result.getBoundary();if(this.checkMinimumDistance(this._input,t,this._minValidDistance),!this._isValid)return null;this.checkMaximumDistance(this._input,t,this._maxValidDistance)},Fp.prototype.getErrorLocation=function(){return this._errorLocation},Fp.prototype.getPolygonLines=function(t){for(var e=new bc,n=new bp(e),r=wp.getPolygons(t).iterator();r.hasNext();){r.next().apply(n)}return t.getFactory().buildGeometry(e)},Fp.prototype.getErrorMessage=function(){return this._errMsg},Fp.prototype.interfaces_=function(){return[]},Fp.prototype.getClass=function(){return Fp},qp.VERBOSE.get=function(){return!1},qp.MAX_DISTANCE_DIFF_FRAC.get=function(){return.012},Object.defineProperties(Fp,qp);var Gp=function(t,e,n){this._isValid=!0,this._errorMsg=null,this._errorLocation=null,this._errorIndicator=null,this._input=t||null,this._distance=e||null,this._result=n||null},Bp={VERBOSE:{configurable:!0},MAX_ENV_DIFF_FRAC:{configurable:!0}};Gp.prototype.isValid=function(){return this.checkPolygonal(),this._isValid?(this.checkExpectedEmpty(),this._isValid?(this.checkEnvelope(),this._isValid?(this.checkArea(),this._isValid?(this.checkDistance(),this._isValid):this._isValid):this._isValid):this._isValid):this._isValid},Gp.prototype.checkEnvelope=function(){if(this._distance<0)return null;var t=this._distance*Gp.MAX_ENV_DIFF_FRAC;0===t&&(t=.001);var e=new Yu(this._input.getEnvelopeInternal());e.expandBy(this._distance);var n=new Yu(this._result.getEnvelopeInternal());n.expandBy(t),n.contains(e)||(this._isValid=!1,this._errorMsg="Buffer envelope is incorrect",this._errorIndicator=this._input.getFactory().toGeometry(n)),this.report("Envelope")},Gp.prototype.checkDistance=function(){var t=new Fp(this._input,this._distance,this._result);t.isValid()||(this._isValid=!1,this._errorMsg=t.getErrorMessage(),this._errorLocation=t.getErrorLocation(),this._errorIndicator=t.getErrorIndicator()),this.report("Distance")},Gp.prototype.checkArea=function(){var t=this._input.getArea(),e=this._result.getArea();this._distance>0&&t>e&&(this._isValid=!1,this._errorMsg="Area of positive buffer is smaller than input",this._errorIndicator=this._result),this._distance<0&&t<e&&(this._isValid=!1,this._errorMsg="Area of negative buffer is larger than input",this._errorIndicator=this._result),this.report("Area")},Gp.prototype.checkPolygonal=function(){this._result instanceof $c||this._result instanceof nh||(this._isValid=!1),this._errorMsg="Result is not polygonal",this._errorIndicator=this._result,this.report("Polygonal")},Gp.prototype.getErrorIndicator=function(){return this._errorIndicator},Gp.prototype.getErrorLocation=function(){return this._errorLocation},Gp.prototype.checkExpectedEmpty=function(){return this._input.getDimension()>=2?null:this._distance>0?null:(this._result.isEmpty()||(this._isValid=!1,this._errorMsg="Result is non-empty",this._errorIndicator=this._result),void this.report("ExpectedEmpty"))},Gp.prototype.report=function(t){if(!Gp.VERBOSE)return null;Xu.out.println("Check "+t+": "+(this._isValid?"passed":"FAILED"))},Gp.prototype.getErrorMessage=function(){return this._errorMsg},Gp.prototype.interfaces_=function(){return[]},Gp.prototype.getClass=function(){return Gp},Gp.isValidMsg=function(t,e,n){var r=new Gp(t,e,n);return r.isValid()?null:r.getErrorMessage()},Gp.isValid=function(t,e,n){return!!new Gp(t,e,n).isValid()},Bp.VERBOSE.get=function(){return!1},Bp.MAX_ENV_DIFF_FRAC.get=function(){return.012},Object.defineProperties(Gp,Bp);var kp=function(){this._pts=null,this._data=null;var t=arguments[0],e=arguments[1];this._pts=t,this._data=e};kp.prototype.getCoordinates=function(){return this._pts},kp.prototype.size=function(){return this._pts.length},kp.prototype.getCoordinate=function(t){return this._pts[t]},kp.prototype.isClosed=function(){return this._pts[0].equals(this._pts[this._pts.length-1])},kp.prototype.getSegmentOctant=function(t){return t===this._pts.length-1?-1:hl.octant(this.getCoordinate(t),this.getCoordinate(t+1))},kp.prototype.setData=function(t){this._data=t},kp.prototype.getData=function(){return this._data},kp.prototype.toString=function(){return Ku.toLineString(new uh(this._pts))},kp.prototype.interfaces_=function(){return[ll]},kp.prototype.getClass=function(){return kp};var zp=function(){this._findAllIntersections=!1,this._isCheckEndSegmentsOnly=!1,this._li=null,this._interiorIntersection=null,this._intSegments=null,this._intersections=new bc,this._intersectionCount=0,this._keepIntersections=!0;var t=arguments[0];this._li=t,this._interiorIntersection=null};zp.prototype.getInteriorIntersection=function(){return this._interiorIntersection},zp.prototype.setCheckEndSegmentsOnly=function(t){this._isCheckEndSegmentsOnly=t},zp.prototype.getIntersectionSegments=function(){return this._intSegments},zp.prototype.count=function(){return this._intersectionCount},zp.prototype.getIntersections=function(){return this._intersections},zp.prototype.setFindAllIntersections=function(t){this._findAllIntersections=t},zp.prototype.setKeepIntersections=function(t){this._keepIntersections=t},zp.prototype.processIntersections=function(t,e,n,r){if(!this._findAllIntersections&&this.hasIntersection())return null;if(t===n&&e===r)return null;if(this._isCheckEndSegmentsOnly){if(!(this.isEndSegment(t,e)||this.isEndSegment(n,r)))return null}var i=t.getCoordinates()[e],o=t.getCoordinates()[e+1],s=n.getCoordinates()[r],a=n.getCoordinates()[r+1];this._li.computeIntersection(i,o,s,a),this._li.hasIntersection()&&this._li.isInteriorIntersection()&&(this._intSegments=new Array(4).fill(null),this._intSegments[0]=i,this._intSegments[1]=o,this._intSegments[2]=s,this._intSegments[3]=a,this._interiorIntersection=this._li.getIntersection(0),this._keepIntersections&&this._intersections.add(this._interiorIntersection),this._intersectionCount++)},zp.prototype.isEndSegment=function(t,e){return 0===e||e>=t.size()-2},zp.prototype.hasIntersection=function(){return null!==this._interiorIntersection},zp.prototype.isDone=function(){return!this._findAllIntersections&&null!==this._interiorIntersection},zp.prototype.interfaces_=function(){return[Hl]},zp.prototype.getClass=function(){return zp},zp.createAllIntersectionsFinder=function(t){var e=new zp(t);return e.setFindAllIntersections(!0),e},zp.createAnyIntersectionFinder=function(t){return new zp(t)},zp.createIntersectionCounter=function(t){var e=new zp(t);return e.setFindAllIntersections(!0),e.setKeepIntersections(!1),e};var jp=function(){this._li=new rc,this._segStrings=null,this._findAllIntersections=!1,this._segInt=null,this._isValid=!0;var t=arguments[0];this._segStrings=t};jp.prototype.execute=function(){if(null!==this._segInt)return null;this.checkInteriorIntersections()},jp.prototype.getIntersections=function(){return this._segInt.getIntersections()},jp.prototype.isValid=function(){return this.execute(),this._isValid},jp.prototype.setFindAllIntersections=function(t){this._findAllIntersections=t},jp.prototype.checkInteriorIntersections=function(){this._isValid=!0,this._segInt=new zp(this._li),this._segInt.setFindAllIntersections(this._findAllIntersections);var t=new El;if(t.setSegmentIntersector(this._segInt),t.computeNodes(this._segStrings),this._segInt.hasIntersection())return this._isValid=!1,null},jp.prototype.checkValid=function(){if(this.execute(),!this._isValid)throw new Mh(this.getErrorMessage(),this._segInt.getInteriorIntersection())},jp.prototype.getErrorMessage=function(){if(this._isValid)return"no intersections found";var t=this._segInt.getIntersectionSegments();return"found non-noded intersection between "+Ku.toLineString(t[0],t[1])+" and "+Ku.toLineString(t[2],t[3])},jp.prototype.interfaces_=function(){return[]},jp.prototype.getClass=function(){return jp},jp.computeIntersections=function(t){var e=new jp(t);return e.setFindAllIntersections(!0),e.isValid(),e.getIntersections()};var Xp=function t(){this._nv=null;var e=arguments[0];this._nv=new jp(t.toSegmentStrings(e))};Xp.prototype.checkValid=function(){this._nv.checkValid()},Xp.prototype.interfaces_=function(){return[]},Xp.prototype.getClass=function(){return Xp},Xp.toSegmentStrings=function(t){for(var e=new bc,n=t.iterator();n.hasNext();){var r=n.next();e.add(new kp(r.getCoordinates(),r))}return e},Xp.checkValid=function(t){new Xp(t).checkValid()};var Up=function(t){this._mapOp=t};Up.prototype.map=function(t){for(var e=new bc,n=0;n<t.getNumGeometries();n++){var r=this._mapOp.map(t.getGeometryN(n));r.isEmpty()||e.add(r)}return t.getFactory().createGeometryCollection(_h.toGeometryArray(e))},Up.prototype.interfaces_=function(){return[]},Up.prototype.getClass=function(){return Up},Up.map=function(t,e){return new Up(e).map(t)};var Yp=function(){this._op=null,this._geometryFactory=null,this._ptLocator=null,this._lineEdgesList=new bc,this._resultLineList=new bc;var t=arguments[0],e=arguments[1],n=arguments[2];this._op=t,this._geometryFactory=e,this._ptLocator=n};Yp.prototype.collectLines=function(t){for(var e=this._op.getGraph().getEdgeEnds().iterator();e.hasNext();){var n=e.next();this.collectLineEdge(n,t,this._lineEdgesList),this.collectBoundaryTouchEdge(n,t,this._lineEdgesList)}},Yp.prototype.labelIsolatedLine=function(t,e){var n=this._ptLocator.locate(t.getCoordinate(),this._op.getArgGeometry(e));t.getLabel().setLocation(e,n)},Yp.prototype.build=function(t){return this.findCoveredLineEdges(),this.collectLines(t),this.buildLines(t),this._resultLineList},Yp.prototype.collectLineEdge=function(t,e,n){var r=t.getLabel(),i=t.getEdge();t.isLineEdge()&&(t.isVisited()||!Cf.isResultOfOp(r,e)||i.isCovered()||(n.add(i),t.setVisitedEdge(!0)))},Yp.prototype.findCoveredLineEdges=function(){for(var t=this._op.getGraph().getNodes().iterator();t.hasNext();){t.next().getEdges().findCoveredLineEdges()}for(var e=this._op.getGraph().getEdgeEnds().iterator();e.hasNext();){var n=e.next(),r=n.getEdge();if(n.isLineEdge()&&!r.isCoveredSet()){var i=this._op.isCoveredByA(n.getCoordinate());r.setCovered(i)}}},Yp.prototype.labelIsolatedLines=function(t){for(var e=t.iterator();e.hasNext();){var n=e.next(),r=n.getLabel();n.isIsolated()&&(r.isNull(0)?this.labelIsolatedLine(n,0):this.labelIsolatedLine(n,1))}},Yp.prototype.buildLines=function(t){for(var e=this._lineEdgesList.iterator();e.hasNext();){var n=e.next(),r=this._geometryFactory.createLineString(n.getCoordinates());this._resultLineList.add(r),n.setInResult(!0)}},Yp.prototype.collectBoundaryTouchEdge=function(t,e,n){var r=t.getLabel();return t.isLineEdge()?null:t.isVisited()?null:t.isInteriorAreaEdge()?null:t.getEdge().isInResult()?null:(tc.isTrue(!(t.isInResult()||t.getSym().isInResult())||!t.getEdge().isInResult()),void(Cf.isResultOfOp(r,e)&&e===Cf.INTERSECTION&&(n.add(t.getEdge()),t.setVisitedEdge(!0))))},Yp.prototype.interfaces_=function(){return[]},Yp.prototype.getClass=function(){return Yp};var Vp=function(){this._op=null,this._geometryFactory=null,this._resultPointList=new bc;var t=arguments[0],e=arguments[1];this._op=t,this._geometryFactory=e};Vp.prototype.filterCoveredNodeToPoint=function(t){var e=t.getCoordinate();if(!this._op.isCoveredByLA(e)){var n=this._geometryFactory.createPoint(e);this._resultPointList.add(n)}},Vp.prototype.extractNonCoveredResultNodes=function(t){for(var e=this._op.getGraph().getNodes().iterator();e.hasNext();){var n=e.next();if(!n.isInResult()&&(!n.isIncidentEdgeInResult()&&(0===n.getEdges().getDegree()||t===Cf.INTERSECTION))){var r=n.getLabel();Cf.isResultOfOp(r,t)&&this.filterCoveredNodeToPoint(n)}}},Vp.prototype.build=function(t){return this.extractNonCoveredResultNodes(t),this._resultPointList},Vp.prototype.interfaces_=function(){return[]},Vp.prototype.getClass=function(){return Vp};var Hp=function(){this._inputGeom=null,this._factory=null,this._pruneEmptyGeometry=!0,this._preserveGeometryCollectionType=!0,this._preserveCollections=!1,this._preserveType=!1};Hp.prototype.transformPoint=function(t,e){return this._factory.createPoint(this.transformCoordinates(t.getCoordinateSequence(),t))},Hp.prototype.transformPolygon=function(t,e){var n=!0,r=this.transformLinearRing(t.getExteriorRing(),t);null!==r&&r instanceof eh&&!r.isEmpty()||(n=!1);for(var i=new bc,o=0;o<t.getNumInteriorRing();o++){var s=this.transformLinearRing(t.getInteriorRingN(o),t);null===s||s.isEmpty()||(s instanceof eh||(n=!1),i.add(s))}if(n)return this._factory.createPolygon(r,i.toArray([]));var a=new bc;return null!==r&&a.add(r),a.addAll(i),this._factory.buildGeometry(a)},Hp.prototype.createCoordinateSequence=function(t){return this._factory.getCoordinateSequenceFactory().create(t)},Hp.prototype.getInputGeometry=function(){return this._inputGeom},Hp.prototype.transformMultiLineString=function(t,e){for(var n=new bc,r=0;r<t.getNumGeometries();r++){var i=this.transformLineString(t.getGeometryN(r),t);null!==i&&(i.isEmpty()||n.add(i))}return this._factory.buildGeometry(n)},Hp.prototype.transformCoordinates=function(t,e){return this.copy(t)},Hp.prototype.transformLineString=function(t,e){return this._factory.createLineString(this.transformCoordinates(t.getCoordinateSequence(),t))},Hp.prototype.transformMultiPoint=function(t,e){for(var n=new bc,r=0;r<t.getNumGeometries();r++){var i=this.transformPoint(t.getGeometryN(r),t);null!==i&&(i.isEmpty()||n.add(i))}return this._factory.buildGeometry(n)},Hp.prototype.transformMultiPolygon=function(t,e){for(var n=new bc,r=0;r<t.getNumGeometries();r++){var i=this.transformPolygon(t.getGeometryN(r),t);null!==i&&(i.isEmpty()||n.add(i))}return this._factory.buildGeometry(n)},Hp.prototype.copy=function(t){return t.copy()},Hp.prototype.transformGeometryCollection=function(t,e){for(var n=new bc,r=0;r<t.getNumGeometries();r++){var i=this.transform(t.getGeometryN(r));null!==i&&(this._pruneEmptyGeometry&&i.isEmpty()||n.add(i))}return this._preserveGeometryCollectionType?this._factory.createGeometryCollection(_h.toGeometryArray(n)):this._factory.buildGeometry(n)},Hp.prototype.transform=function(t){if(this._inputGeom=t,this._factory=t.getFactory(),t instanceof Kc)return this.transformPoint(t,null);if(t instanceof th)return this.transformMultiPoint(t,null);if(t instanceof eh)return this.transformLinearRing(t,null);if(t instanceof Jc)return this.transformLineString(t,null);if(t instanceof Xc)return this.transformMultiLineString(t,null);if(t instanceof $c)return this.transformPolygon(t,null);if(t instanceof nh)return this.transformMultiPolygon(t,null);if(t instanceof jc)return this.transformGeometryCollection(t,null);throw new _u("Unknown Geometry subtype: "+t.getClass().getName())},Hp.prototype.transformLinearRing=function(t,e){var n=this.transformCoordinates(t.getCoordinateSequence(),t);if(null===n)return this._factory.createLinearRing(null);var r=n.size();return r>0&&r<4&&!this._preserveType?this._factory.createLineString(n):this._factory.createLinearRing(n)},Hp.prototype.interfaces_=function(){return[]},Hp.prototype.getClass=function(){return Hp};var Wp=function t(){if(this._snapTolerance=0,this._srcPts=null,this._seg=new gl,this._allowSnappingToSourceVertices=!1,this._isClosed=!1,arguments[0]instanceof Jc&&"number"==typeof arguments[1]){var e=arguments[0],n=arguments[1];t.call(this,e.getCoordinates(),n)}else if(arguments[0]instanceof Array&&"number"==typeof arguments[1]){var r=arguments[0],i=arguments[1];this._srcPts=r,this._isClosed=t.isClosed(r),this._snapTolerance=i}};Wp.prototype.snapVertices=function(t,e){for(var n=this._isClosed?t.size()-1:t.size(),r=0;r<n;r++){var i=t.get(r),o=this.findSnapForVertex(i,e);null!==o&&(t.set(r,new bu(o)),0===r&&this._isClosed&&t.set(t.size()-1,new bu(o)))}},Wp.prototype.findSnapForVertex=function(t,e){for(var n=0;n<e.length;n++){if(t.equals2D(e[n]))return null;if(t.distance(e[n])<this._snapTolerance)return e[n]}return null},Wp.prototype.snapTo=function(t){var e=new Nc(this._srcPts);this.snapVertices(e,t),this.snapSegments(e,t);return e.toCoordinateArray()},Wp.prototype.snapSegments=function(t,e){if(0===e.length)return null;var n=e.length;e[0].equals2D(e[e.length-1])&&(n=e.length-1);for(var r=0;r<n;r++){var i=e[r],o=this.findSegmentIndexToSnap(i,t);o>=0&&t.add(o+1,new bu(i),!1)}},Wp.prototype.findSegmentIndexToSnap=function(t,e){for(var n=mu.MAX_VALUE,r=-1,i=0;i<e.size()-1;i++){if(this._seg.p0=e.get(i),this._seg.p1=e.get(i+1),this._seg.p0.equals2D(t)||this._seg.p1.equals2D(t)){if(this._allowSnappingToSourceVertices)continue;return-1}var o=this._seg.distance(t);o<this._snapTolerance&&o<n&&(n=o,r=i)}return r},Wp.prototype.setAllowSnappingToSourceVertices=function(t){this._allowSnappingToSourceVertices=t},Wp.prototype.interfaces_=function(){return[]},Wp.prototype.getClass=function(){return Wp},Wp.isClosed=function(t){return!(t.length<=1)&&t[0].equals2D(t[t.length-1])};var Jp=function(t){this._srcGeom=t||null},Zp={SNAP_PRECISION_FACTOR:{configurable:!0}};Jp.prototype.snapTo=function(t,e){var n=this.extractTargetCoordinates(t);return new Kp(e,n).transform(this._srcGeom)},Jp.prototype.snapToSelf=function(t,e){var n=this.extractTargetCoordinates(this._srcGeom),r=new Kp(t,n,!0).transform(this._srcGeom),i=r;return e&&Lu(i,Qc)&&(i=r.buffer(0)),i},Jp.prototype.computeSnapTolerance=function(t){return this.computeMinimumSegmentLength(t)/10},Jp.prototype.extractTargetCoordinates=function(t){for(var e=new ki,n=t.getCoordinates(),r=0;r<n.length;r++)e.add(n[r]);return e.toArray(new Array(0).fill(null))},Jp.prototype.computeMinimumSegmentLength=function(t){for(var e=mu.MAX_VALUE,n=0;n<t.length-1;n++){var r=t[n].distance(t[n+1]);r<e&&(e=r)}return e},Jp.prototype.interfaces_=function(){return[]},Jp.prototype.getClass=function(){return Jp},Jp.snap=function(t,e,n){var r=new Array(2).fill(null),i=new Jp(t);r[0]=i.snapTo(e,n);var o=new Jp(e);return r[1]=o.snapTo(r[0],n),r},Jp.computeOverlaySnapTolerance=function(){if(1===arguments.length){var t=arguments[0],e=Jp.computeSizeBasedSnapTolerance(t),n=t.getPrecisionModel();if(n.getType()===fh.FIXED){var r=1/n.getScale()*2/1.415;r>e&&(e=r)}return e}if(2===arguments.length){var i=arguments[0],o=arguments[1];return Math.min(Jp.computeOverlaySnapTolerance(i),Jp.computeOverlaySnapTolerance(o))}},Jp.computeSizeBasedSnapTolerance=function(t){var e=t.getEnvelopeInternal();return Math.min(e.getHeight(),e.getWidth())*Jp.SNAP_PRECISION_FACTOR},Jp.snapToSelf=function(t,e,n){return new Jp(t).snapToSelf(e,n)},Zp.SNAP_PRECISION_FACTOR.get=function(){return 1e-9},Object.defineProperties(Jp,Zp);var Kp=function(t){function e(e,n,r){t.call(this),this._snapTolerance=e||null,this._snapPts=n||null,this._isSelfSnap=void 0!==r&&r}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.snapLine=function(t,e){var n=new Wp(t,this._snapTolerance);return n.setAllowSnappingToSourceVertices(this._isSelfSnap),n.snapTo(e)},e.prototype.transformCoordinates=function(t,e){var n=t.toCoordinateArray(),r=this.snapLine(n,this._snapPts);return this._factory.getCoordinateSequenceFactory().create(r)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(Hp),Qp=function(){this._isFirst=!0,this._commonMantissaBitsCount=53,this._commonBits=0,this._commonSignExp=null};Qp.prototype.getCommon=function(){return mu.longBitsToDouble(this._commonBits)},Qp.prototype.add=function(t){var e=mu.doubleToLongBits(t);if(this._isFirst)return this._commonBits=e,this._commonSignExp=Qp.signExpBits(this._commonBits),this._isFirst=!1,null;if(Qp.signExpBits(e)!==this._commonSignExp)return this._commonBits=0,null;this._commonMantissaBitsCount=Qp.numCommonMostSigMantissaBits(this._commonBits,e),this._commonBits=Qp.zeroLowerBits(this._commonBits,64-(12+this._commonMantissaBitsCount))},Qp.prototype.toString=function(){if(1===arguments.length){var t=arguments[0],e=mu.longBitsToDouble(t),n="0000000000000000000000000000000000000000000000000000000000000000"+mu.toBinaryString(t),r=n.substring(n.length-64);return r.substring(0,1)+"  "+r.substring(1,12)+"(exp) "+r.substring(12)+" [ "+e+" ]"}},Qp.prototype.interfaces_=function(){return[]},Qp.prototype.getClass=function(){return Qp},Qp.getBit=function(t,e){return 0!=(t&1<<e)?1:0},Qp.signExpBits=function(t){return t>>52},Qp.zeroLowerBits=function(t,e){return t&~((1<<e)-1)},Qp.numCommonMostSigMantissaBits=function(t,e){for(var n=0,r=52;r>=0;r--){if(Qp.getBit(t,r)!==Qp.getBit(e,r))return n;n++}return 52};var $p=function(){this._commonCoord=null,this._ccFilter=new ef},tf={CommonCoordinateFilter:{configurable:!0},Translater:{configurable:!0}};$p.prototype.addCommonBits=function(t){var e=new nf(this._commonCoord);t.apply(e),t.geometryChanged()},$p.prototype.removeCommonBits=function(t){if(0===this._commonCoord.x&&0===this._commonCoord.y)return t;var e=new bu(this._commonCoord);e.x=-e.x,e.y=-e.y;var n=new nf(e);return t.apply(n),t.geometryChanged(),t},$p.prototype.getCommonCoordinate=function(){return this._commonCoord},$p.prototype.add=function(t){t.apply(this._ccFilter),this._commonCoord=this._ccFilter.getCommonCoordinate()},$p.prototype.interfaces_=function(){return[]},$p.prototype.getClass=function(){return $p},tf.CommonCoordinateFilter.get=function(){return ef},tf.Translater.get=function(){return nf},Object.defineProperties($p,tf);var ef=function(){this._commonBitsX=new Qp,this._commonBitsY=new Qp};ef.prototype.filter=function(t){this._commonBitsX.add(t.x),this._commonBitsY.add(t.y)},ef.prototype.getCommonCoordinate=function(){return new bu(this._commonBitsX.getCommon(),this._commonBitsY.getCommon())},ef.prototype.interfaces_=function(){return[pc]},ef.prototype.getClass=function(){return ef};var nf=function(){this.trans=null;var t=arguments[0];this.trans=t};nf.prototype.filter=function(t,e){var n=t.getOrdinate(e,0)+this.trans.x,r=t.getOrdinate(e,1)+this.trans.y;t.setOrdinate(e,0,n),t.setOrdinate(e,1,r)},nf.prototype.isDone=function(){return!1},nf.prototype.isGeometryChanged=function(){return!0},nf.prototype.interfaces_=function(){return[zc]},nf.prototype.getClass=function(){return nf};var rf=function(t,e){this._geom=new Array(2).fill(null),this._snapTolerance=null,this._cbr=null,this._geom[0]=t,this._geom[1]=e,this.computeSnapTolerance()};rf.prototype.selfSnap=function(t){return new Jp(t).snapTo(t,this._snapTolerance)},rf.prototype.removeCommonBits=function(t){this._cbr=new $p,this._cbr.add(t[0]),this._cbr.add(t[1]);var e=new Array(2).fill(null);return e[0]=this._cbr.removeCommonBits(t[0].copy()),e[1]=this._cbr.removeCommonBits(t[1].copy()),e},rf.prototype.prepareResult=function(t){return this._cbr.addCommonBits(t),t},rf.prototype.getResultGeometry=function(t){var e=this.snap(this._geom),n=Cf.overlayOp(e[0],e[1],t);return this.prepareResult(n)},rf.prototype.checkValid=function(t){t.isValid()||Xu.out.println("Snapped geometry is invalid")},rf.prototype.computeSnapTolerance=function(){this._snapTolerance=Jp.computeOverlaySnapTolerance(this._geom[0],this._geom[1])},rf.prototype.snap=function(t){var e=this.removeCommonBits(t);return Jp.snap(e[0],e[1],this._snapTolerance)},rf.prototype.interfaces_=function(){return[]},rf.prototype.getClass=function(){return rf},rf.overlayOp=function(t,e,n){return new rf(t,e).getResultGeometry(n)},rf.union=function(t,e){return rf.overlayOp(t,e,Cf.UNION)},rf.intersection=function(t,e){return rf.overlayOp(t,e,Cf.INTERSECTION)},rf.symDifference=function(t,e){return rf.overlayOp(t,e,Cf.SYMDIFFERENCE)},rf.difference=function(t,e){return rf.overlayOp(t,e,Cf.DIFFERENCE)};var of=function(t,e){this._geom=new Array(2).fill(null),this._geom[0]=t,this._geom[1]=e};of.prototype.getResultGeometry=function(t){var e=null,n=!1,r=null;try{e=Cf.overlayOp(this._geom[0],this._geom[1],t);n=!0}catch(t){if(!(t instanceof Qu))throw t;r=t}if(!n)try{e=rf.overlayOp(this._geom[0],this._geom[1],t)}catch(t){throw t instanceof Qu?r:t}return e},of.prototype.interfaces_=function(){return[]},of.prototype.getClass=function(){return of},of.overlayOp=function(t,e,n){return new of(t,e).getResultGeometry(n)},of.union=function(t,e){return of.overlayOp(t,e,Cf.UNION)},of.intersection=function(t,e){return of.overlayOp(t,e,Cf.INTERSECTION)},of.symDifference=function(t,e){return of.overlayOp(t,e,Cf.SYMDIFFERENCE)},of.difference=function(t,e){return of.overlayOp(t,e,Cf.DIFFERENCE)};var sf=function(){this.mce=null,this.chainIndex=null;var t=arguments[0],e=arguments[1];this.mce=t,this.chainIndex=e};sf.prototype.computeIntersections=function(t,e){this.mce.computeIntersectsForChain(this.chainIndex,t.mce,t.chainIndex,e)},sf.prototype.interfaces_=function(){return[]},sf.prototype.getClass=function(){return sf};var af=function t(){if(this._label=null,this._xValue=null,this._eventType=null,this._insertEvent=null,this._deleteEventIndex=null,this._obj=null,2===arguments.length){var e=arguments[0],n=arguments[1];this._eventType=t.DELETE,this._xValue=e,this._insertEvent=n}else if(3===arguments.length){var r=arguments[0],i=arguments[1],o=arguments[2];this._eventType=t.INSERT,this._label=r,this._xValue=i,this._obj=o}},uf={INSERT:{configurable:!0},DELETE:{configurable:!0}};af.prototype.isDelete=function(){return this._eventType===af.DELETE},af.prototype.setDeleteEventIndex=function(t){this._deleteEventIndex=t},af.prototype.getObject=function(){return this._obj},af.prototype.compareTo=function(t){var e=t;return this._xValue<e._xValue?-1:this._xValue>e._xValue?1:this._eventType<e._eventType?-1:this._eventType>e._eventType?1:0},af.prototype.getInsertEvent=function(){return this._insertEvent},af.prototype.isInsert=function(){return this._eventType===af.INSERT},af.prototype.isSameLabel=function(t){return null!==this._label&&this._label===t._label},af.prototype.getDeleteEventIndex=function(){return this._deleteEventIndex},af.prototype.interfaces_=function(){return[xu]},af.prototype.getClass=function(){return af},uf.INSERT.get=function(){return 1},uf.DELETE.get=function(){return 2},Object.defineProperties(af,uf);var cf=function(){};cf.prototype.interfaces_=function(){return[]},cf.prototype.getClass=function(){return cf};var hf=function(){this._hasIntersection=!1,this._hasProper=!1,this._hasProperInterior=!1,this._properIntersectionPoint=null,this._li=null,this._includeProper=null,this._recordIsolated=null,this._isSelfIntersection=null,this._numIntersections=0,this.numTests=0,this._bdyNodes=null,this._isDone=!1,this._isDoneWhenProperInt=!1;var t=arguments[0],e=arguments[1],n=arguments[2];this._li=t,this._includeProper=e,this._recordIsolated=n};hf.prototype.isTrivialIntersection=function(t,e,n,r){if(t===n&&1===this._li.getIntersectionNum()){if(hf.isAdjacentSegments(e,r))return!0;if(t.isClosed()){var i=t.getNumPoints()-1;if(0===e&&r===i||0===r&&e===i)return!0}}return!1},hf.prototype.getProperIntersectionPoint=function(){return this._properIntersectionPoint},hf.prototype.setIsDoneIfProperInt=function(t){this._isDoneWhenProperInt=t},hf.prototype.hasProperInteriorIntersection=function(){return this._hasProperInterior},hf.prototype.isBoundaryPointInternal=function(t,e){for(var n=e.iterator();n.hasNext();){var r=n.next().getCoordinate();if(t.isIntersection(r))return!0}return!1},hf.prototype.hasProperIntersection=function(){return this._hasProper},hf.prototype.hasIntersection=function(){return this._hasIntersection},hf.prototype.isDone=function(){return this._isDone},hf.prototype.isBoundaryPoint=function(t,e){return null!==e&&(!!this.isBoundaryPointInternal(t,e[0])||!!this.isBoundaryPointInternal(t,e[1]))},hf.prototype.setBoundaryNodes=function(t,e){this._bdyNodes=new Array(2).fill(null),this._bdyNodes[0]=t,this._bdyNodes[1]=e},hf.prototype.addIntersections=function(t,e,n,r){if(t===n&&e===r)return null;this.numTests++;var i=t.getCoordinates()[e],o=t.getCoordinates()[e+1],s=n.getCoordinates()[r],a=n.getCoordinates()[r+1];this._li.computeIntersection(i,o,s,a),this._li.hasIntersection()&&(this._recordIsolated&&(t.setIsolated(!1),n.setIsolated(!1)),this._numIntersections++,this.isTrivialIntersection(t,e,n,r)||(this._hasIntersection=!0,!this._includeProper&&this._li.isProper()||(t.addIntersections(this._li,e,0),n.addIntersections(this._li,r,1)),this._li.isProper()&&(this._properIntersectionPoint=this._li.getIntersection(0).copy(),this._hasProper=!0,this._isDoneWhenProperInt&&(this._isDone=!0),this.isBoundaryPoint(this._li,this._bdyNodes)||(this._hasProperInterior=!0))))},hf.prototype.interfaces_=function(){return[]},hf.prototype.getClass=function(){return hf},hf.isAdjacentSegments=function(t,e){return 1===Math.abs(t-e)};var lf=function(t){function e(){t.call(this),this.events=new bc,this.nOverlaps=null}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.prepareEvents=function(){$h.sort(this.events);for(var t=0;t<this.events.size();t++){var e=this.events.get(t);e.isDelete()&&e.getInsertEvent().setDeleteEventIndex(t)}},e.prototype.computeIntersections=function(){if(1===arguments.length){var t=arguments[0];this.nOverlaps=0,this.prepareEvents();for(var e=0;e<this.events.size();e++){var n=this.events.get(e);if(n.isInsert()&&this.processOverlaps(e,n.getDeleteEventIndex(),n,t),t.isDone())break}}else if(3===arguments.length)if(arguments[2]instanceof hf&&Lu(arguments[0],wc)&&Lu(arguments[1],wc)){var r=arguments[0],i=arguments[1],o=arguments[2];this.addEdges(r,r),this.addEdges(i,i),this.computeIntersections(o)}else if("boolean"==typeof arguments[2]&&Lu(arguments[0],wc)&&arguments[1]instanceof hf){var s=arguments[0],a=arguments[1];arguments[2]?this.addEdges(s,null):this.addEdges(s),this.computeIntersections(a)}},e.prototype.addEdge=function(t,e){for(var n=t.getMonotoneChainEdge(),r=n.getStartIndexes(),i=0;i<r.length-1;i++){var o=new sf(n,i),s=new af(e,n.getMinX(i),o);this.events.add(s),this.events.add(new af(n.getMaxX(i),s))}},e.prototype.processOverlaps=function(t,e,n,r){for(var i=n.getObject(),o=t;o<e;o++){var s=this.events.get(o);if(s.isInsert()){var a=s.getObject();n.isSameLabel(s)||(i.computeIntersections(a,r),this.nOverlaps++)}}},e.prototype.addEdges=function(){if(1===arguments.length)for(var t=arguments[0].iterator();t.hasNext();){var e=t.next();this.addEdge(e,e)}else if(2===arguments.length)for(var n=arguments[0],r=arguments[1],i=n.iterator();i.hasNext();){var o=i.next();this.addEdge(o,r)}},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(cf),pf=function(){this._min=mu.POSITIVE_INFINITY,this._max=mu.NEGATIVE_INFINITY},ff={NodeComparator:{configurable:!0}};pf.prototype.getMin=function(){return this._min},pf.prototype.intersects=function(t,e){return!(this._min>e||this._max<t)},pf.prototype.getMax=function(){return this._max},pf.prototype.toString=function(){return Ku.toLineString(new bu(this._min,0),new bu(this._max,0))},pf.prototype.interfaces_=function(){return[]},pf.prototype.getClass=function(){return pf},ff.NodeComparator.get=function(){return gf},Object.defineProperties(pf,ff);var gf=function(){};gf.prototype.compare=function(t,e){var n=t,r=e,i=(n._min+n._max)/2,o=(r._min+r._max)/2;return i<o?-1:i>o?1:0},gf.prototype.interfaces_=function(){return[wu]},gf.prototype.getClass=function(){return gf};var df=function(t){function e(){t.call(this),this._item=null;var e=arguments[0],n=arguments[1],r=arguments[2];this._min=e,this._max=n,this._item=r}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.query=function(t,e,n){if(!this.intersects(t,e))return null;n.visitItem(this._item)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(pf),yf=function(t){function e(){t.call(this),this._node1=null,this._node2=null;var e=arguments[0],n=arguments[1];this._node1=e,this._node2=n,this.buildExtent(this._node1,this._node2)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.buildExtent=function(t,e){this._min=Math.min(t._min,e._min),this._max=Math.max(t._max,e._max)},e.prototype.query=function(t,e,n){if(!this.intersects(t,e))return null;null!==this._node1&&this._node1.query(t,e,n),null!==this._node2&&this._node2.query(t,e,n)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(pf),_f=function(){this._leaves=new bc,this._root=null,this._level=0};_f.prototype.buildTree=function(){$h.sort(this._leaves,new pf.NodeComparator);for(var t=this._leaves,e=null,n=new bc;;){if(this.buildLevel(t,n),1===n.size())return n.get(0);e=t,t=n,n=e}},_f.prototype.insert=function(t,e,n){if(null!==this._root)throw new Error("Index cannot be added to once it has been queried");this._leaves.add(new df(t,e,n))},_f.prototype.query=function(t,e,n){this.init(),this._root.query(t,e,n)},_f.prototype.buildRoot=function(){if(null!==this._root)return null;this._root=this.buildTree()},_f.prototype.printNode=function(t){Xu.out.println(Ku.toLineString(new bu(t._min,this._level),new bu(t._max,this._level)))},_f.prototype.init=function(){if(null!==this._root)return null;this.buildRoot()},_f.prototype.buildLevel=function(t,e){this._level++,e.clear();for(var n=0;n<t.size();n+=2){var r=t.get(n);if(null===(n+1<t.size()?t.get(n):null))e.add(r);else{var i=new yf(t.get(n),t.get(n+1));e.add(i)}}},_f.prototype.interfaces_=function(){return[]},_f.prototype.getClass=function(){return _f};var mf=function(){this._items=new bc};mf.prototype.visitItem=function(t){this._items.add(t)},mf.prototype.getItems=function(){return this._items},mf.prototype.interfaces_=function(){return[Jh]},mf.prototype.getClass=function(){return mf};var vf=function(){this._index=null;var t=arguments[0];if(!Lu(t,Qc))throw new _u("Argument must be Polygonal");this._index=new wf(t)},xf={SegmentVisitor:{configurable:!0},IntervalIndexedGeometry:{configurable:!0}};vf.prototype.locate=function(t){var e=new oc(t),n=new Ef(e);return this._index.query(t.y,t.y,n),e.getLocation()},vf.prototype.interfaces_=function(){return[Bl]},vf.prototype.getClass=function(){return vf},xf.SegmentVisitor.get=function(){return Ef},xf.IntervalIndexedGeometry.get=function(){return wf},Object.defineProperties(vf,xf);var Ef=function(){this._counter=null;var t=arguments[0];this._counter=t};Ef.prototype.visitItem=function(t){var e=t;this._counter.countSegment(e.getCoordinate(0),e.getCoordinate(1))},Ef.prototype.interfaces_=function(){return[Jh]},Ef.prototype.getClass=function(){return Ef};var wf=function(){this._index=new _f;var t=arguments[0];this.init(t)};wf.prototype.init=function(t){for(var e=bp.getLines(t).iterator();e.hasNext();){var n=e.next().getCoordinates();this.addLine(n)}},wf.prototype.addLine=function(t){for(var e=1;e<t.length;e++){var n=new gl(t[e-1],t[e]),r=Math.min(n.p0.y,n.p1.y),i=Math.max(n.p0.y,n.p1.y);this._index.insert(r,i,n)}},wf.prototype.query=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1],n=new mf;return this._index.query(t,e,n),n.getItems()}if(3===arguments.length){var r=arguments[0],i=arguments[1],o=arguments[2];this._index.query(r,i,o)}},wf.prototype.interfaces_=function(){return[]},wf.prototype.getClass=function(){return wf};var bf=function(t){function e(){if(t.call(this),this._parentGeom=null,this._lineEdgeMap=new ph,this._boundaryNodeRule=null,this._useBoundaryDeterminationRule=!0,this._argIndex=null,this._boundaryNodes=null,this._hasTooFewPoints=!1,this._invalidPoint=null,this._areaPtLocator=null,this._ptLocator=new Ip,2===arguments.length){var e=arguments[0],n=arguments[1],r=fc.OGC_SFS_BOUNDARY_RULE;this._argIndex=e,this._parentGeom=n,this._boundaryNodeRule=r,null!==n&&this.add(n)}else if(3===arguments.length){var i=arguments[0],o=arguments[1],s=arguments[2];this._argIndex=i,this._parentGeom=o,this._boundaryNodeRule=s,null!==o&&this.add(o)}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.insertBoundaryPoint=function(t,n){var r=this._nodes.addNode(n).getLabel(),i=1;Su.NONE;r.getLocation(t,Nh.ON)===Su.BOUNDARY&&i++;var o=e.determineBoundary(this._boundaryNodeRule,i);r.setLocation(t,o)},e.prototype.computeSelfNodes=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1];return this.computeSelfNodes(t,e,!1)}if(3===arguments.length){var n=arguments[0],r=arguments[1],i=arguments[2],o=new hf(n,!0,!1);o.setIsDoneIfProperInt(i);var s=this.createEdgeSetIntersector(),a=this._parentGeom instanceof eh||this._parentGeom instanceof $c||this._parentGeom instanceof nh,u=r||!a;return s.computeIntersections(this._edges,o,u),this.addSelfIntersectionNodes(this._argIndex),o}},e.prototype.computeSplitEdges=function(t){for(var e=this._edges.iterator();e.hasNext();){e.next().eiList.addSplitEdges(t)}},e.prototype.computeEdgeIntersections=function(t,e,n){var r=new hf(e,n,!0);r.setBoundaryNodes(this.getBoundaryNodes(),t.getBoundaryNodes());return this.createEdgeSetIntersector().computeIntersections(this._edges,t._edges,r),r},e.prototype.getGeometry=function(){return this._parentGeom},e.prototype.getBoundaryNodeRule=function(){return this._boundaryNodeRule},e.prototype.hasTooFewPoints=function(){return this._hasTooFewPoints},e.prototype.addPoint=function(){if(arguments[0]instanceof Kc){var t=arguments[0].getCoordinate();this.insertPoint(this._argIndex,t,Su.INTERIOR)}else if(arguments[0]instanceof bu){var e=arguments[0];this.insertPoint(this._argIndex,e,Su.INTERIOR)}},e.prototype.addPolygon=function(t){this.addPolygonRing(t.getExteriorRing(),Su.EXTERIOR,Su.INTERIOR);for(var e=0;e<t.getNumInteriorRing();e++){var n=t.getInteriorRingN(e);this.addPolygonRing(n,Su.INTERIOR,Su.EXTERIOR)}},e.prototype.addEdge=function(t){this.insertEdge(t);var e=t.getCoordinates();this.insertPoint(this._argIndex,e[0],Su.BOUNDARY),this.insertPoint(this._argIndex,e[e.length-1],Su.BOUNDARY)},e.prototype.addLineString=function(t){var e=Cc.removeRepeatedPoints(t.getCoordinates());if(e.length<2)return this._hasTooFewPoints=!0,this._invalidPoint=e[0],null;var n=new ep(e,new Rh(this._argIndex,Su.INTERIOR));this._lineEdgeMap.put(t,n),this.insertEdge(n),tc.isTrue(e.length>=2,"found LineString with single point"),this.insertBoundaryPoint(this._argIndex,e[0]),this.insertBoundaryPoint(this._argIndex,e[e.length-1])},e.prototype.getInvalidPoint=function(){return this._invalidPoint},e.prototype.getBoundaryPoints=function(){for(var t=this.getBoundaryNodes(),e=new Array(t.size()).fill(null),n=0,r=t.iterator();r.hasNext();){var i=r.next();e[n++]=i.getCoordinate().copy()}return e},e.prototype.getBoundaryNodes=function(){return null===this._boundaryNodes&&(this._boundaryNodes=this._nodes.getBoundaryNodes(this._argIndex)),this._boundaryNodes},e.prototype.addSelfIntersectionNode=function(t,e,n){if(this.isBoundaryNode(t,e))return null;n===Su.BOUNDARY&&this._useBoundaryDeterminationRule?this.insertBoundaryPoint(t,e):this.insertPoint(t,e,n)},e.prototype.addPolygonRing=function(t,e,n){if(t.isEmpty())return null;var r=Cc.removeRepeatedPoints(t.getCoordinates());if(r.length<4)return this._hasTooFewPoints=!0,this._invalidPoint=r[0],null;var i=e,o=n;sc.isCCW(r)&&(i=n,o=e);var s=new ep(r,new Rh(this._argIndex,Su.BOUNDARY,i,o));this._lineEdgeMap.put(t,s),this.insertEdge(s),this.insertPoint(this._argIndex,r[0],Su.BOUNDARY)},e.prototype.insertPoint=function(t,e,n){var r=this._nodes.addNode(e),i=r.getLabel();null===i?r._label=new Rh(t,n):i.setLocation(t,n)},e.prototype.createEdgeSetIntersector=function(){return new lf},e.prototype.addSelfIntersectionNodes=function(t){for(var e=this._edges.iterator();e.hasNext();)for(var n=e.next(),r=n.getLabel().getLocation(t),i=n.eiList.iterator();i.hasNext();){var o=i.next();this.addSelfIntersectionNode(t,o.coord,r)}},e.prototype.add=function(){if(1!==arguments.length)return t.prototype.add.apply(this,arguments);var e=arguments[0];if(e.isEmpty())return null;if(e instanceof nh&&(this._useBoundaryDeterminationRule=!1),e instanceof $c)this.addPolygon(e);else if(e instanceof Jc)this.addLineString(e);else if(e instanceof Kc)this.addPoint(e);else if(e instanceof th)this.addCollection(e);else if(e instanceof Xc)this.addCollection(e);else if(e instanceof nh)this.addCollection(e);else{if(!(e instanceof jc))throw new Error(e.getClass().getName());this.addCollection(e)}},e.prototype.addCollection=function(t){for(var e=0;e<t.getNumGeometries();e++){var n=t.getGeometryN(e);this.add(n)}},e.prototype.locate=function(t){return Lu(this._parentGeom,Qc)&&this._parentGeom.getNumGeometries()>50?(null===this._areaPtLocator&&(this._areaPtLocator=new vf(this._parentGeom)),this._areaPtLocator.locate(t)):this._ptLocator.locate(t,this._parentGeom)},e.prototype.findEdge=function(){if(1===arguments.length){var e=arguments[0];return this._lineEdgeMap.get(e)}return t.prototype.findEdge.apply(this,arguments)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e.determineBoundary=function(t,e){return t.isInBoundary(e)?Su.BOUNDARY:Su.INTERIOR},e}(Uh),If=function(){if(this._li=new rc,this._resultPrecisionModel=null,this._arg=null,1===arguments.length){var t=arguments[0];this.setComputationPrecision(t.getPrecisionModel()),this._arg=new Array(1).fill(null),this._arg[0]=new bf(0,t)}else if(2===arguments.length){var e=arguments[0],n=arguments[1],r=fc.OGC_SFS_BOUNDARY_RULE;e.getPrecisionModel().compareTo(n.getPrecisionModel())>=0?this.setComputationPrecision(e.getPrecisionModel()):this.setComputationPrecision(n.getPrecisionModel()),this._arg=new Array(2).fill(null),this._arg[0]=new bf(0,e,r),this._arg[1]=new bf(1,n,r)}else if(3===arguments.length){var i=arguments[0],o=arguments[1],s=arguments[2];i.getPrecisionModel().compareTo(o.getPrecisionModel())>=0?this.setComputationPrecision(i.getPrecisionModel()):this.setComputationPrecision(o.getPrecisionModel()),this._arg=new Array(2).fill(null),this._arg[0]=new bf(0,i,s),this._arg[1]=new bf(1,o,s)}};If.prototype.getArgGeometry=function(t){return this._arg[t].getGeometry()},If.prototype.setComputationPrecision=function(t){this._resultPrecisionModel=t,this._li.setPrecisionModel(this._resultPrecisionModel)},If.prototype.interfaces_=function(){return[]},If.prototype.getClass=function(){return If};var Nf=function(){};Nf.prototype.interfaces_=function(){return[]},Nf.prototype.getClass=function(){return Nf},Nf.map=function(){if(arguments[0]instanceof cc&&Lu(arguments[1],Nf.MapOp)){for(var t=arguments[0],e=arguments[1],n=new bc,r=0;r<t.getNumGeometries();r++){var i=e.map(t.getGeometryN(r));null!==i&&n.add(i)}return t.getFactory().buildGeometry(n)}if(Lu(arguments[0],vc)&&Lu(arguments[1],Nf.MapOp)){for(var o=arguments[0],s=arguments[1],a=new bc,u=o.iterator();u.hasNext();){var c=u.next(),h=s.map(c);null!==h&&a.add(h)}return a}},Nf.MapOp=function(){};var Cf=function(t){function e(){var e=arguments[0],n=arguments[1];t.call(this,e,n),this._ptLocator=new Ip,this._geomFact=null,this._resultGeom=null,this._graph=null,this._edgeList=new Vl,this._resultPolyList=new bc,this._resultLineList=new bc,this._resultPointList=new bc,this._graph=new Uh(new Ul),this._geomFact=e.getFactory()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.insertUniqueEdge=function(t){var e=this._edgeList.findEqualEdge(t);if(null!==e){var n=e.getLabel(),r=t.getLabel();e.isPointwiseEqual(t)||(r=new Rh(t.getLabel())).flip();var i=e.getDepth();i.isNull()&&i.add(n),i.add(r),n.merge(r)}else this._edgeList.add(t)},e.prototype.getGraph=function(){return this._graph},e.prototype.cancelDuplicateResultEdges=function(){for(var t=this._graph.getEdgeEnds().iterator();t.hasNext();){var e=t.next(),n=e.getSym();e.isInResult()&&n.isInResult()&&(e.setInResult(!1),n.setInResult(!1))}},e.prototype.isCoveredByLA=function(t){return!!this.isCovered(t,this._resultLineList)||!!this.isCovered(t,this._resultPolyList)},e.prototype.computeGeometry=function(t,n,r,i){var o=new bc;return o.addAll(t),o.addAll(n),o.addAll(r),o.isEmpty()?e.createEmptyResult(i,this._arg[0].getGeometry(),this._arg[1].getGeometry(),this._geomFact):this._geomFact.buildGeometry(o)},e.prototype.mergeSymLabels=function(){for(var t=this._graph.getNodes().iterator();t.hasNext();){t.next().getEdges().mergeSymLabels()}},e.prototype.isCovered=function(t,e){for(var n=e.iterator();n.hasNext();){var r=n.next();if(this._ptLocator.locate(t,r)!==Su.EXTERIOR)return!0}return!1},e.prototype.replaceCollapsedEdges=function(){for(var t=new bc,e=this._edgeList.iterator();e.hasNext();){var n=e.next();n.isCollapsed()&&(e.remove(),t.add(n.getCollapsedEdge()))}this._edgeList.addAll(t)},e.prototype.updateNodeLabelling=function(){for(var t=this._graph.getNodes().iterator();t.hasNext();){var e=t.next(),n=e.getEdges().getLabel();e.getLabel().merge(n)}},e.prototype.getResultGeometry=function(t){return this.computeOverlay(t),this._resultGeom},e.prototype.insertUniqueEdges=function(t){for(var e=t.iterator();e.hasNext();){var n=e.next();this.insertUniqueEdge(n)}},e.prototype.computeOverlay=function(t){this.copyPoints(0),this.copyPoints(1),this._arg[0].computeSelfNodes(this._li,!1),this._arg[1].computeSelfNodes(this._li,!1),this._arg[0].computeEdgeIntersections(this._arg[1],this._li,!0);var e=new bc;this._arg[0].computeSplitEdges(e),this._arg[1].computeSplitEdges(e),this.insertUniqueEdges(e),this.computeLabelsFromDepths(),this.replaceCollapsedEdges(),Xp.checkValid(this._edgeList.getEdges()),this._graph.addEdges(this._edgeList.getEdges()),this.computeLabelling(),this.labelIncompleteNodes(),this.findResultAreaEdges(t),this.cancelDuplicateResultEdges();var n=new Yh(this._geomFact);n.add(this._graph),this._resultPolyList=n.getPolygons();var r=new Yp(this,this._geomFact,this._ptLocator);this._resultLineList=r.build(t);var i=new Vp(this,this._geomFact,this._ptLocator);this._resultPointList=i.build(t),this._resultGeom=this.computeGeometry(this._resultPointList,this._resultLineList,this._resultPolyList,t)},e.prototype.labelIncompleteNode=function(t,e){var n=this._ptLocator.locate(t.getCoordinate(),this._arg[e].getGeometry());t.getLabel().setLocation(e,n)},e.prototype.copyPoints=function(t){for(var e=this._arg[t].getNodeIterator();e.hasNext();){var n=e.next();this._graph.addNode(n.getCoordinate()).setLabel(t,n.getLabel().getLocation(t))}},e.prototype.findResultAreaEdges=function(t){for(var n=this._graph.getEdgeEnds().iterator();n.hasNext();){var r=n.next(),i=r.getLabel();i.isArea()&&!r.isInteriorAreaEdge()&&e.isResultOfOp(i.getLocation(0,Nh.RIGHT),i.getLocation(1,Nh.RIGHT),t)&&r.setInResult(!0)}},e.prototype.computeLabelsFromDepths=function(){for(var t=this._edgeList.iterator();t.hasNext();){var e=t.next(),n=e.getLabel(),r=e.getDepth();if(!r.isNull()){r.normalize();for(var i=0;i<2;i++)n.isNull(i)||!n.isArea()||r.isNull(i)||(0===r.getDelta(i)?n.toLine(i):(tc.isTrue(!r.isNull(i,Nh.LEFT),"depth of LEFT side has not been initialized"),n.setLocation(i,Nh.LEFT,r.getLocation(i,Nh.LEFT)),tc.isTrue(!r.isNull(i,Nh.RIGHT),"depth of RIGHT side has not been initialized"),n.setLocation(i,Nh.RIGHT,r.getLocation(i,Nh.RIGHT))))}}},e.prototype.computeLabelling=function(){for(var t=this._graph.getNodes().iterator();t.hasNext();){t.next().getEdges().computeLabelling(this._arg)}this.mergeSymLabels(),this.updateNodeLabelling()},e.prototype.labelIncompleteNodes=function(){for(var t=this._graph.getNodes().iterator();t.hasNext();){var e=t.next(),n=e.getLabel();e.isIsolated()&&(n.isNull(0)?this.labelIncompleteNode(e,0):this.labelIncompleteNode(e,1)),e.getEdges().updateLabelling(n)}},e.prototype.isCoveredByA=function(t){return!!this.isCovered(t,this._resultPolyList)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(If);Cf.overlayOp=function(t,e,n){return new Cf(t,e).getResultGeometry(n)},Cf.intersection=function(t,e){if(t.isEmpty()||e.isEmpty())return Cf.createEmptyResult(Cf.INTERSECTION,t,e,t.getFactory());if(t.isGeometryCollection()){var n=e;return Up.map(t,{interfaces_:function(){return[Nf.MapOp]},map:function(t){return t.intersection(n)}})}return t.checkNotGeometryCollection(t),t.checkNotGeometryCollection(e),of.overlayOp(t,e,Cf.INTERSECTION)},Cf.symDifference=function(t,e){if(t.isEmpty()||e.isEmpty()){if(t.isEmpty()&&e.isEmpty())return Cf.createEmptyResult(Cf.SYMDIFFERENCE,t,e,t.getFactory());if(t.isEmpty())return e.copy();if(e.isEmpty())return t.copy()}return t.checkNotGeometryCollection(t),t.checkNotGeometryCollection(e),of.overlayOp(t,e,Cf.SYMDIFFERENCE)},Cf.resultDimension=function(t,e,n){var r=e.getDimension(),i=n.getDimension(),o=-1;switch(t){case Cf.INTERSECTION:o=Math.min(r,i);break;case Cf.UNION:o=Math.max(r,i);break;case Cf.DIFFERENCE:o=r;break;case Cf.SYMDIFFERENCE:o=Math.max(r,i)}return o},Cf.createEmptyResult=function(t,e,n,r){var i=null;switch(Cf.resultDimension(t,e,n)){case-1:i=r.createGeometryCollection(new Array(0).fill(null));break;case 0:i=r.createPoint();break;case 1:i=r.createLineString();break;case 2:i=r.createPolygon()}return i},Cf.difference=function(t,e){return t.isEmpty()?Cf.createEmptyResult(Cf.DIFFERENCE,t,e,t.getFactory()):e.isEmpty()?t.copy():(t.checkNotGeometryCollection(t),t.checkNotGeometryCollection(e),of.overlayOp(t,e,Cf.DIFFERENCE))},Cf.isResultOfOp=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1],n=t.getLocation(0),r=t.getLocation(1);return Cf.isResultOfOp(n,r,e)}if(3===arguments.length){var i=arguments[0],o=arguments[1],s=arguments[2];switch(i===Su.BOUNDARY&&(i=Su.INTERIOR),o===Su.BOUNDARY&&(o=Su.INTERIOR),s){case Cf.INTERSECTION:return i===Su.INTERIOR&&o===Su.INTERIOR;case Cf.UNION:return i===Su.INTERIOR||o===Su.INTERIOR;case Cf.DIFFERENCE:return i===Su.INTERIOR&&o!==Su.INTERIOR;case Cf.SYMDIFFERENCE:return i===Su.INTERIOR&&o!==Su.INTERIOR||i!==Su.INTERIOR&&o===Su.INTERIOR}return!1}},Cf.INTERSECTION=1,Cf.UNION=2,Cf.DIFFERENCE=3,Cf.SYMDIFFERENCE=4;var Sf=function(){this._g=null,this._boundaryDistanceTolerance=null,this._linework=null,this._ptLocator=new Ip,this._seg=new gl;var t=arguments[0],e=arguments[1];this._g=t,this._boundaryDistanceTolerance=e,this._linework=this.extractLinework(t)};Sf.prototype.isWithinToleranceOfBoundary=function(t){for(var e=0;e<this._linework.getNumGeometries();e++)for(var n=this._linework.getGeometryN(e).getCoordinateSequence(),r=0;r<n.size()-1;r++){n.getCoordinate(r,this._seg.p0),n.getCoordinate(r+1,this._seg.p1);if(this._seg.distance(t)<=this._boundaryDistanceTolerance)return!0}return!1},Sf.prototype.getLocation=function(t){return this.isWithinToleranceOfBoundary(t)?Su.BOUNDARY:this._ptLocator.locate(t,this._g)},Sf.prototype.extractLinework=function(t){var e=new Mf;t.apply(e);var n=e.getLinework(),r=_h.toLineStringArray(n);return t.getFactory().createMultiLineString(r)},Sf.prototype.interfaces_=function(){return[]},Sf.prototype.getClass=function(){return Sf};var Mf=function(){this._linework=null,this._linework=new bc};Mf.prototype.getLinework=function(){return this._linework},Mf.prototype.filter=function(t){if(t instanceof $c){var e=t;this._linework.add(e.getExteriorRing());for(var n=0;n<e.getNumInteriorRing();n++)this._linework.add(e.getInteriorRingN(n))}},Mf.prototype.interfaces_=function(){return[kc]},Mf.prototype.getClass=function(){return Mf};var Lf=function(){this._g=null,this._doLeft=!0,this._doRight=!0;var t=arguments[0];this._g=t};Lf.prototype.extractPoints=function(t,e,n){for(var r=t.getCoordinates(),i=0;i<r.length-1;i++)this.computeOffsetPoints(r[i],r[i+1],e,n)},Lf.prototype.setSidesToGenerate=function(t,e){this._doLeft=t,this._doRight=e},Lf.prototype.getPoints=function(t){for(var e=new bc,n=bp.getLines(this._g).iterator();n.hasNext();){var r=n.next();this.extractPoints(r,t,e)}return e},Lf.prototype.computeOffsetPoints=function(t,e,n,r){var i=e.x-t.x,o=e.y-t.y,s=Math.sqrt(i*i+o*o),a=n*i/s,u=n*o/s,c=(e.x+t.x)/2,h=(e.y+t.y)/2;if(this._doLeft){var l=new bu(c-u,h+a);r.add(l)}if(this._doRight){var p=new bu(c+u,h-a);r.add(p)}},Lf.prototype.interfaces_=function(){return[]},Lf.prototype.getClass=function(){return Lf};var Pf=function t(){this._geom=null,this._locFinder=null,this._location=new Array(3).fill(null),this._invalidLocation=null,this._boundaryDistanceTolerance=t.TOLERANCE,this._testCoords=new bc;var e=arguments[0],n=arguments[1],r=arguments[2];this._boundaryDistanceTolerance=t.computeBoundaryDistanceTolerance(e,n),this._geom=[e,n,r],this._locFinder=[new Sf(this._geom[0],this._boundaryDistanceTolerance),new Sf(this._geom[1],this._boundaryDistanceTolerance),new Sf(this._geom[2],this._boundaryDistanceTolerance)]},Of={TOLERANCE:{configurable:!0}};Pf.prototype.reportResult=function(t,e,n){Xu.out.println("Overlay result invalid - A:"+Su.toLocationSymbol(e[0])+" B:"+Su.toLocationSymbol(e[1])+" expected:"+(n?"i":"e")+" actual:"+Su.toLocationSymbol(e[2]))},Pf.prototype.isValid=function(t){this.addTestPts(this._geom[0]),this.addTestPts(this._geom[1]);var e=this.checkValid(t);return e},Pf.prototype.checkValid=function(){if(1===arguments.length){for(var t=arguments[0],e=0;e<this._testCoords.size();e++){var n=this._testCoords.get(e);if(!this.checkValid(t,n))return this._invalidLocation=n,!1}return!0}if(2===arguments.length){var r=arguments[0],i=arguments[1];return this._location[0]=this._locFinder[0].getLocation(i),this._location[1]=this._locFinder[1].getLocation(i),this._location[2]=this._locFinder[2].getLocation(i),!!Pf.hasLocation(this._location,Su.BOUNDARY)||this.isValidResult(r,this._location)}},Pf.prototype.addTestPts=function(t){var e=new Lf(t);this._testCoords.addAll(e.getPoints(5*this._boundaryDistanceTolerance))},Pf.prototype.isValidResult=function(t,e){var n=Cf.isResultOfOp(e[0],e[1],t),r=!(n^e[2]===Su.INTERIOR);return r||this.reportResult(t,e,n),r},Pf.prototype.getInvalidLocation=function(){return this._invalidLocation},Pf.prototype.interfaces_=function(){return[]},Pf.prototype.getClass=function(){return Pf},Pf.hasLocation=function(t,e){for(var n=0;n<3;n++)if(t[n]===e)return!0;return!1},Pf.computeBoundaryDistanceTolerance=function(t,e){return Math.min(Jp.computeSizeBasedSnapTolerance(t),Jp.computeSizeBasedSnapTolerance(e))},Pf.isValid=function(t,e,n,r){return new Pf(t,e,r).isValid(n)},Of.TOLERANCE.get=function(){return 1e-6},Object.defineProperties(Pf,Of);var Rf=function t(e){this._geomFactory=null,this._skipEmpty=!1,this._inputGeoms=null,this._geomFactory=t.extractFactory(e),this._inputGeoms=e};Rf.prototype.extractElements=function(t,e){if(null===t)return null;for(var n=0;n<t.getNumGeometries();n++){var r=t.getGeometryN(n);this._skipEmpty&&r.isEmpty()||e.add(r)}},Rf.prototype.combine=function(){for(var t=new bc,e=this._inputGeoms.iterator();e.hasNext();){var n=e.next();this.extractElements(n,t)}return 0===t.size()?null!==this._geomFactory?this._geomFactory.createGeometryCollection(null):null:this._geomFactory.buildGeometry(t)},Rf.prototype.interfaces_=function(){return[]},Rf.prototype.getClass=function(){return Rf},Rf.combine=function(){if(1===arguments.length){var t=arguments[0];return new Rf(t).combine()}if(2===arguments.length){var e=arguments[0],n=arguments[1];return new Rf(Rf.createList(e,n)).combine()}if(3===arguments.length){var r=arguments[0],i=arguments[1],o=arguments[2];return new Rf(Rf.createList(r,i,o)).combine()}},Rf.extractFactory=function(t){return t.isEmpty()?null:t.iterator().next().getFactory()},Rf.createList=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1],n=new bc;return n.add(t),n.add(e),n}if(3===arguments.length){var r=arguments[0],i=arguments[1],o=arguments[2],s=new bc;return s.add(r),s.add(i),s.add(o),s}};var Tf=function(){this._inputPolys=null,this._geomFactory=null;var t=arguments[0];this._inputPolys=t,null===this._inputPolys&&(this._inputPolys=new bc)},Af={STRTREE_NODE_CAPACITY:{configurable:!0}};Tf.prototype.reduceToGeometries=function(t){for(var e=new bc,n=t.iterator();n.hasNext();){var r=n.next(),i=null;Lu(r,wc)?i=this.unionTree(r):r instanceof cc&&(i=r),e.add(i)}return e},Tf.prototype.extractByEnvelope=function(t,e,n){for(var r=new bc,i=0;i<e.getNumGeometries();i++){var o=e.getGeometryN(i);o.getEnvelopeInternal().intersects(t)?r.add(o):n.add(o)}return this._geomFactory.buildGeometry(r)},Tf.prototype.unionOptimized=function(t,e){var n=t.getEnvelopeInternal(),r=e.getEnvelopeInternal();if(!n.intersects(r)){return Rf.combine(t,e)}if(t.getNumGeometries()<=1&&e.getNumGeometries()<=1)return this.unionActual(t,e);var i=n.intersection(r);return this.unionUsingEnvelopeIntersection(t,e,i)},Tf.prototype.union=function(){if(null===this._inputPolys)throw new Error("union() method cannot be called twice");if(this._inputPolys.isEmpty())return null;this._geomFactory=this._inputPolys.iterator().next().getFactory();for(var t=new ol(Tf.STRTREE_NODE_CAPACITY),e=this._inputPolys.iterator();e.hasNext();){var n=e.next();t.insert(n.getEnvelopeInternal(),n)}this._inputPolys=null;var r=t.itemsTree();return this.unionTree(r)},Tf.prototype.binaryUnion=function(){if(1===arguments.length){var t=arguments[0];return this.binaryUnion(t,0,t.size())}if(3===arguments.length){var e=arguments[0],n=arguments[1],r=arguments[2];if(r-n<=1){var i=Tf.getGeometry(e,n);return this.unionSafe(i,null)}if(r-n==2)return this.unionSafe(Tf.getGeometry(e,n),Tf.getGeometry(e,n+1));var o=Math.trunc((r+n)/2),s=this.binaryUnion(e,n,o),a=this.binaryUnion(e,o,r);return this.unionSafe(s,a)}},Tf.prototype.repeatedUnion=function(t){for(var e=null,n=t.iterator();n.hasNext();){var r=n.next();e=null===e?r.copy():e.union(r)}return e},Tf.prototype.unionSafe=function(t,e){return null===t&&null===e?null:null===t?e.copy():null===e?t.copy():this.unionOptimized(t,e)},Tf.prototype.unionActual=function(t,e){return Tf.restrictToPolygons(t.union(e))},Tf.prototype.unionTree=function(t){var e=this.reduceToGeometries(t);return this.binaryUnion(e)},Tf.prototype.unionUsingEnvelopeIntersection=function(t,e,n){var r=new bc,i=this.extractByEnvelope(n,t,r),o=this.extractByEnvelope(n,e,r),s=this.unionActual(i,o);r.add(s);return Rf.combine(r)},Tf.prototype.bufferUnion=function(){if(1===arguments.length){var t=arguments[0];return t.get(0).getFactory().buildGeometry(t).buffer(0)}if(2===arguments.length){var e=arguments[0],n=arguments[1];return e.getFactory().createGeometryCollection([e,n]).buffer(0)}},Tf.prototype.interfaces_=function(){return[]},Tf.prototype.getClass=function(){return Tf},Tf.restrictToPolygons=function(t){if(Lu(t,Qc))return t;var e=wp.getPolygons(t);return 1===e.size()?e.get(0):t.getFactory().createMultiPolygon(_h.toPolygonArray(e))},Tf.getGeometry=function(t,e){return e>=t.size()?null:t.get(e)},Tf.union=function(t){return new Tf(t).union()},Af.STRTREE_NODE_CAPACITY.get=function(){return 4},Object.defineProperties(Tf,Af);var Df=function(){};Df.prototype.interfaces_=function(){return[]},Df.prototype.getClass=function(){return Df},Df.union=function(t,e){if(t.isEmpty()||e.isEmpty()){if(t.isEmpty()&&e.isEmpty())return Cf.createEmptyResult(Cf.UNION,t,e,t.getFactory());if(t.isEmpty())return e.copy();if(e.isEmpty())return t.copy()}return t.checkNotGeometryCollection(t),t.checkNotGeometryCollection(e),of.overlayOp(t,e,Cf.UNION)};var Ff=function(){return new Yi};Yi.prototype={constructor:Yi,reset:function(){this.s=this.t=0},add:function(t){Vi(qf,t,this.t),Vi(this,qf.s,this.s),this.s?this.t+=qf.t:this.s=qf.t},valueOf:function(){return this.s}};var qf=new Yi,Gf=1e-6,Bf=Math.PI,kf=Bf/2,zf=Bf/4,jf=2*Bf,Xf=180/Bf,Uf=Bf/180,Yf=Math.abs,Vf=Math.atan,Hf=Math.atan2,Wf=Math.cos,Jf=Math.exp,Zf=Math.log,Kf=Math.sin,Qf=Math.sqrt,$f=Math.tan,tg={Feature:function(t,e){Ji(t.geometry,e)},FeatureCollection:function(t,e){for(var n=t.features,r=-1,i=n.length;++r<i;)Ji(n[r].geometry,e)}},eg={Sphere:function(t,e){e.sphere()},Point:function(t,e){t=t.coordinates,e.point(t[0],t[1],t[2])},MultiPoint:function(t,e){for(var n=t.coordinates,r=-1,i=n.length;++r<i;)t=n[r],e.point(t[0],t[1],t[2])},LineString:function(t,e){Zi(t.coordinates,e,0)},MultiLineString:function(t,e){for(var n=t.coordinates,r=-1,i=n.length;++r<i;)Zi(n[r],e,0)},Polygon:function(t,e){Ki(t.coordinates,e)},MultiPolygon:function(t,e){for(var n=t.coordinates,r=-1,i=n.length;++r<i;)Ki(n[r],e)},GeometryCollection:function(t,e){for(var n=t.geometries,r=-1,i=n.length;++r<i;)Ji(n[r],e)}},ng=function(t,e){t&&tg.hasOwnProperty(t.type)?tg[t.type](t,e):Ji(t,e)},rg=(Ff(),Ff(),Ff(),function(t,e){function n(n,r){return n=t(n,r),e(n[0],n[1])}return t.invert&&e.invert&&(n.invert=function(n,r){return(n=e.invert(n,r))&&t.invert(n[0],n[1])}),n});oo.invert=oo;var ig=function(t){function e(e){return e=t(e[0]*Uf,e[1]*Uf),e[0]*=Xf,e[1]*=Xf,e}return t=so(t[0]*Uf,t[1]*Uf,t.length>2?t[2]*Uf:0),e.invert=function(e){return e=t.invert(e[0]*Uf,e[1]*Uf),e[0]*=Xf,e[1]*=Xf,e},e},og=function(){var t,e=[];return{point:function(e,n){t.push([e,n])},lineStart:function(){e.push(t=[])},lineEnd:Wi,rejoin:function(){e.length>1&&e.push(e.pop().concat(e.shift()))},result:function(){var n=e;return e=[],t=null,n}}},sg=function(t,e,n,r,i,o){var s,a=t[0],u=t[1],c=0,h=1,l=e[0]-a,p=e[1]-u;if(s=n-a,l||!(s>0)){if(s/=l,l<0){if(s<c)return;s<h&&(h=s)}else if(l>0){if(s>h)return;s>c&&(c=s)}if(s=i-a,l||!(s<0)){if(s/=l,l<0){if(s>h)return;s>c&&(c=s)}else if(l>0){if(s<c)return;s<h&&(h=s)}if(s=r-u,p||!(s>0)){if(s/=p,p<0){if(s<c)return;s<h&&(h=s)}else if(p>0){if(s>h)return;s>c&&(c=s)}if(s=o-u,p||!(s<0)){if(s/=p,p<0){if(s>h)return;s>c&&(c=s)}else if(p>0){if(s<c)return;s<h&&(h=s)}return c>0&&(t[0]=a+c*l,t[1]=u+c*p),h<1&&(e[0]=a+h*l,e[1]=u+h*p),!0}}}}},ag=function(t,e){return Yf(t[0]-e[0])<Gf&&Yf(t[1]-e[1])<Gf},ug=function(t,e,n,r,i){var o,s,a=[],u=[];if(t.forEach(function(t){if(!((e=t.length-1)<=0)){var e,n,r=t[0],s=t[e];if(ag(r,s)){for(i.lineStart(),o=0;o<e;++o)i.point((r=t[o])[0],r[1]);i.lineEnd()}else a.push(n=new lo(r,t,null,!0)),u.push(n.o=new lo(r,null,n,!1)),a.push(n=new lo(s,t,null,!1)),u.push(n.o=new lo(s,null,n,!0))}}),a.length){for(u.sort(e),po(a),po(u),o=0,s=u.length;o<s;++o)u[o].e=n=!n;for(var c,h,l=a[0];;){for(var p=l,f=!0;p.v;)if((p=p.n)===l)return;c=p.z,i.lineStart();do{if(p.v=p.o.v=!0,p.e){if(f)for(o=0,s=c.length;o<s;++o)i.point((h=c[o])[0],h[1]);else r(p.x,p.n.x,1,i);p=p.n}else{if(f)for(c=p.p.z,o=c.length-1;o>=0;--o)i.point((h=c[o])[0],h[1]);else r(p.x,p.p.x,-1,i);p=p.p}c=(p=p.o).z,f=!f}while(!p.v);i.lineEnd()}}},cg=function(t,e){return t<e?-1:t>e?1:t>=e?0:NaN},hg=(function(t){1===t.length&&(t=function(t){return function(e,n){return cg(t(e),n)}}(t))}(cg),function(t){for(var e,n,r,i=t.length,o=-1,s=0;++o<i;)s+=t[o].length;for(n=new Array(s);--i>=0;)for(e=(r=t[i]).length;--e>=0;)n[--s]=r[e];return n}),lg=1e9,pg=-lg,fg=Ff(),gg=(Ff(),function(t){return t}),dg=(Ff(),Ff(),1/0),yg=dg,_g=-dg,mg=_g,vg={point:function(t,e){t<dg&&(dg=t),t>_g&&(_g=t),e<yg&&(yg=e),e>mg&&(mg=e)},lineStart:Wi,lineEnd:Wi,polygonStart:Wi,polygonEnd:Wi,result:function(){var t=[[dg,yg],[_g,mg]];return _g=mg=-(yg=dg=1/0),t}},xg=(Ff(),function(t,e,n,r){return function(i,o){function s(e,n){var r=i(e,n);t(e=r[0],n=r[1])&&o.point(e,n)}function a(t,e){var n=i(t,e);y.point(n[0],n[1])}function u(){E.point=a,y.lineStart()}function c(){E.point=s,y.lineEnd()}function h(t,e){d.push([t,e]);var n=i(t,e);v.point(n[0],n[1])}function l(){v.lineStart(),d=[]}function p(){h(d[0][0],d[0][1]),v.lineEnd();var t,e,n,r,i=v.clean(),s=m.result(),a=s.length;if(d.pop(),f.push(d),d=null,a)if(1&i){if(n=s[0],(e=n.length-1)>0){for(x||(o.polygonStart(),x=!0),o.lineStart(),t=0;t<e;++t)o.point((r=n[t])[0],r[1]);o.lineEnd()}}else a>1&&2&i&&s.push(s.pop().concat(s.shift())),g.push(s.filter(go))}var f,g,d,y=e(o),_=i.invert(r[0],r[1]),m=og(),v=e(m),x=!1,E={point:s,lineStart:u,lineEnd:c,polygonStart:function(){E.point=h,E.lineStart=l,E.lineEnd=p,g=[],f=[]},polygonEnd:function(){E.point=s,E.lineStart=u,E.lineEnd=c,g=hg(g);var t=function(t,e){var n=e[0],r=e[1],i=[Kf(n),-Wf(n),0],o=0,s=0;fg.reset();for(var a=0,u=t.length;a<u;++a)if(h=(c=t[a]).length)for(var c,h,l=c[h-1],p=l[0],f=l[1]/2+zf,g=Kf(f),d=Wf(f),y=0;y<h;++y,p=m,g=x,d=E,l=_){var _=c[y],m=_[0],v=_[1]/2+zf,x=Kf(v),E=Wf(v),w=m-p,b=w>=0?1:-1,I=b*w,N=I>Bf,C=g*x;if(fg.add(Hf(C*b*Kf(I),d*E+C*Wf(I))),o+=N?w+b*jf:w,N^p>=n^m>=n){var S=eo($i(l),$i(_));io(S);var M=eo(i,S);io(M);var L=(N^w>=0?-1:1)*Hi(M[2]);(r>L||r===L&&(S[0]||S[1]))&&(s+=N^w>=0?1:-1)}}return(o<-Gf||o<Gf&&fg<-Gf)^1&s}(f,_);g.length?(x||(o.polygonStart(),x=!0),ug(g,yo,t,n,o)):t&&(x||(o.polygonStart(),x=!0),o.lineStart(),n(null,null,1,o),o.lineEnd()),x&&(o.polygonEnd(),x=!1),g=f=null},sphere:function(){o.polygonStart(),o.lineStart(),n(null,null,1,o),o.lineEnd(),o.polygonEnd()}};return E}}),Eg=xg(function(){return!0},function(t){var e,n=NaN,r=NaN,i=NaN;return{lineStart:function(){t.lineStart(),e=1},point:function(o,s){var a=o>0?Bf:-Bf,u=Yf(o-n);Yf(u-Bf)<Gf?(t.point(n,r=(r+s)/2>0?kf:-kf),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(a,r),t.point(o,r),e=0):i!==a&&u>=Bf&&(Yf(n-i)<Gf&&(n-=i*Gf),Yf(o-a)<Gf&&(o-=a*Gf),r=function(t,e,n,r){var i,o,s=Kf(t-n);return Yf(s)>Gf?Vf((Kf(e)*(o=Wf(r))*Kf(n)-Kf(r)*(i=Wf(e))*Kf(t))/(i*o*s)):(e+r)/2}(n,r,o,s),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(a,r),e=0),t.point(n=o,r=s),i=a},lineEnd:function(){t.lineEnd(),n=r=NaN},clean:function(){return 2-e}}},function(t,e,n,r){var i;if(null==t)i=n*kf,r.point(-Bf,i),r.point(0,i),r.point(Bf,i),r.point(Bf,0),r.point(Bf,-i),r.point(0,-i),r.point(-Bf,-i),r.point(-Bf,0),r.point(-Bf,i);else if(Yf(t[0]-e[0])>Gf){var o=t[0]<e[0]?Bf:-Bf;i=n*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)}else r.point(e[0],e[1])},[-Bf,-kf]),wg=function(t,e){function n(t,e){return Wf(t)*Wf(e)>o}function r(t,e,n){var r=[1,0,0],i=eo($i(t),$i(e)),s=to(i,i),a=i[0],u=s-a*a;if(!u)return!n&&t;var c=o*s/u,h=-o*a/u,l=eo(r,i),p=ro(r,c);no(p,ro(i,h));var f=l,g=to(p,f),d=to(f,f),y=g*g-d*(to(p,p)-1);if(!(y<0)){var _=Qf(y),m=ro(f,(-g-_)/d);if(no(m,p),m=Qi(m),!n)return m;var v,x=t[0],E=e[0],w=t[1],b=e[1];E<x&&(v=x,x=E,E=v);var I=E-x,N=Yf(I-Bf)<Gf;if(!N&&b<w&&(v=w,w=b,b=v),N||I<Gf?N?w+b>0^m[1]<(Yf(m[0]-x)<Gf?w:b):w<=m[1]&&m[1]<=b:I>Bf^(x<=m[0]&&m[0]<=E)){var C=ro(f,(-g+_)/d);return no(C,p),[m,Qi(C)]}}}function i(e,n){var r=s?t:Bf-t,i=0;return e<-r?i|=1:e>r&&(i|=2),n<-r?i|=4:n>r&&(i|=8),i}var o=Wf(t),s=o>0,a=Yf(o)>Gf;return xg(n,function(t){var e,o,u,c,h;return{lineStart:function(){c=u=!1,h=1},point:function(l,p){var f,g=[l,p],d=n(l,p),y=s?d?0:i(l,p):d?i(l+(l<0?Bf:-Bf),p):0;if(!e&&(c=u=d)&&t.lineStart(),d!==u&&(!(f=r(e,g))||ag(e,f)||ag(g,f))&&(g[0]+=Gf,g[1]+=Gf,d=n(g[0],g[1])),d!==u)h=0,d?(t.lineStart(),f=r(g,e),t.point(f[0],f[1])):(f=r(e,g),t.point(f[0],f[1]),t.lineEnd()),e=f;else if(a&&e&&s^d){var _;y&o||!(_=r(g,e,!0))||(h=0,s?(t.lineStart(),t.point(_[0][0],_[0][1]),t.point(_[1][0],_[1][1]),t.lineEnd()):(t.point(_[1][0],_[1][1]),t.lineEnd(),t.lineStart(),t.point(_[0][0],_[0][1])))}!d||e&&ag(e,g)||t.point(g[0],g[1]),e=g,u=d,o=y},lineEnd:function(){u&&t.lineEnd(),e=null},clean:function(){return h|(c&&u)<<1}}},function(n,r,i,o){!function(t,e,n,r,i,o){if(n){var s=Wf(e),a=Kf(e),u=r*n;null==i?(i=e+r*jf,o=e-u/2):(i=ho(s,i),o=ho(s,o),(r>0?i<o:i>o)&&(i+=r*jf));for(var c,h=i;r>0?h>o:h<o;h-=u)c=Qi([s,-a*Wf(h),-a*Kf(h)]),t.point(c[0],c[1])}}(o,t,e,i,n,r)},s?[0,-t]:[-Bf,t-Bf])};mo.prototype={constructor:mo,point:function(t,e){this.stream.point(t,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var bg=16,Ig=Wf(30*Uf),Ng=function(t,e){return+e?function(t,e){function n(r,i,o,s,a,u,c,h,l,p,f,g,d,y){var _=c-r,m=h-i,v=_*_+m*m;if(v>4*e&&d--){var x=s+p,E=a+f,w=u+g,b=Qf(x*x+E*E+w*w),I=Hi(w/=b),N=Yf(Yf(w)-1)<Gf||Yf(o-l)<Gf?(o+l)/2:Hf(E,x),C=t(N,I),S=C[0],M=C[1],L=S-r,P=M-i,O=m*L-_*P;(O*O/v>e||Yf((_*L+m*P)/v-.5)>.3||s*p+a*f+u*g<Ig)&&(n(r,i,o,s,a,u,S,M,N,x/=b,E/=b,w,d,y),y.point(S,M),n(S,M,N,x,E,w,c,h,l,p,f,g,d,y))}}return function(e){function r(n,r){n=t(n,r),e.point(n[0],n[1])}function i(){_=NaN,w.point=o,e.lineStart()}function o(r,i){var o=$i([r,i]),s=t(r,i);n(_,m,y,v,x,E,_=s[0],m=s[1],y=r,v=o[0],x=o[1],E=o[2],bg,e),e.point(_,m)}function s(){w.point=r,e.lineEnd()}function a(){i(),w.point=u,w.lineEnd=c}function u(t,e){o(h=t,e),l=_,p=m,f=v,g=x,d=E,w.point=o}function c(){n(_,m,y,v,x,E,l,p,h,f,g,d,bg,e),w.lineEnd=s,s()}var h,l,p,f,g,d,y,_,m,v,x,E,w={point:r,lineStart:i,lineEnd:s,polygonStart:function(){e.polygonStart(),w.lineStart=a},polygonEnd:function(){e.polygonEnd(),w.lineStart=i}};return w}}(t,e):function(t){return _o({point:function(e,n){e=t(e,n),this.stream.point(e[0],e[1])}})}(t)},Cg=_o({point:function(t,e){this.stream.point(t*Uf,e*Uf)}});Eo.invert=function(t,e){return[t,2*Vf(Jf(e))-kf]},wo.invert=function(t,e){return[-e,2*Vf(Jf(t))-kf]};var Sg=function(){var t=function(t){function e(){var e=Bf*a(),s=o(ig(o.rotate()).invert([0,0]));return c(null==h?[[s[0]-e,s[1]-e],[s[0]+e,s[1]+e]]:t===Eo?[[Math.max(s[0]-e,h),n],[Math.min(s[0]+e,r),i]]:[[h,Math.max(s[1]-e,n)],[r,Math.min(s[1]+e,i)]])}var n,r,i,o=xo(t),s=o.center,a=o.scale,u=o.translate,c=o.clipExtent,h=null;return o.scale=function(t){return arguments.length?(a(t),e()):a()},o.translate=function(t){return arguments.length?(u(t),e()):u()},o.center=function(t){return arguments.length?(s(t),e()):s()},o.clipExtent=function(t){return arguments.length?(null==t?h=n=r=i=null:(h=+t[0][0],n=+t[0][1],r=+t[1][0],i=+t[1][1]),e()):null==h?null:[[h,n],[r,i]]},e()}(wo),e=t.center,n=t.rotate;return t.center=function(t){return arguments.length?e([-t[1],t[0]]):(t=e(),[t[1],-t[0]])},t.rotate=function(t){return arguments.length?n([t[0],t[1],t.length>2?t[2]+90:90]):(t=n(),[t[0],t[1],t[2]-90])},n([0,0,90]).scale(159.155)};t.projection=Cs,t.random=gu,t.clusters=du,t.helpers=ko,t.invariant=jo,t.meta=zo,t.isolines=function(t,e,n){if(n=n||{},!I(n))throw new Error("options is invalid");var r=n.zProperty||"elevation",i=n.commonProperties||{},o=n.breaksProperties||[];if(W(t,"Point","Input must contain Points"),!e)throw new Error("breaks is required");if(!Array.isArray(e))throw new Error("breaks must be an Array");if(!I(i))throw new Error("commonProperties must be an Object");if(!Array.isArray(o))throw new Error("breaksProperties must be an Array");var s=rt(t,{zProperty:r,flip:!0});return c(function(t,e,n){var r=j(n),i=r[2]-r[0],o=r[3]-r[1],s=r[0],a=r[1],u=e[0].length-1,c=e.length-1,h=i/u,l=o/c,p=function(t){t[0]=t[0]*h+s,t[1]=t[1]*l+a};return t.forEach(function(t){S(t,p)}),t}(function(t,e,n,r,i){for(var o=[],s=1;s<e.length;s++){var a=+e[s],u=Object.assign({},r,i[s]);u[n]=a;var c=h(Q(t,a),u);o.push(c)}return o}(s,e,r,i,o),s,t))},t.convex=Lt,t.pointsWithinPolygon=Rt,t.concave=function(t,n){if(n=n||{},!I(n))throw new Error("options is invalid");if(!t)throw new Error("points is required");var r=n.maxEdge||1/0;if(!b(r))throw new Error("maxEdge is invalid");var i=Tt(function(t){var e=[],n={};return O(t,function(t){if(t.geometry){var r=t.geometry.coordinates.join("-");n.hasOwnProperty(r)||(e.push(t),n[r]=!0)}}),c(e)}(t));if(i.features=i.features.filter(function(t){var e=t.geometry.coordinates[0][0],i=t.geometry.coordinates[0][1],o=t.geometry.coordinates[0][2],s=qt(e,i,n),a=qt(i,o,n),u=qt(e,o,n);return s<=r&&a<=r&&u<=r}),i.features.length<1)return null;var o=$t(i,n);return 1===o.coordinates.length&&(o.coordinates=o.coordinates[0],o.type="Polygon"),e(o)},t.collect=function(t,e,n,r){var i=Vo(6),o=e.features.map(function(t){return{minX:t.geometry.coordinates[0],minY:t.geometry.coordinates[1],maxX:t.geometry.coordinates[0],maxY:t.geometry.coordinates[1],property:t.properties[n]}});return i.load(o),t.features.forEach(function(t){t.properties||(t.properties={});var e=j(t),n=[];i.search({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}).forEach(function(e){Pt([e.minX,e.minY],t)&&n.push(e.property)}),t.properties[r]=n}),t},t.flip=function(t,e){if(e=e||{},!I(e))throw new Error("options is invalid");var n=e.mutate;if(!t)throw new Error("geojson is required");return!1!==n&&void 0!==n||(t=Gt(t)),S(t,function(t){var e=t[0],n=t[1];t[0]=n,t[1]=e}),t},t.simplify=function(t,e){if(e=e||{},!I(e))throw new Error("options is invalid");var n=void 0!==e.tolerance?e.tolerance:1,r=e.highQuality||!1,i=e.mutate||!1;if(!t)throw new Error("geojson is required");if(n&&n<0)throw new Error("invalid tolerance");return!0!==i&&(t=Gt(t)),A(t,function(t){!function(t,e,n){var r=t.type;if("Point"===r||"MultiPoint"===r)return t;te(t,!0);var i=t.coordinates;switch(r){case"LineString":t.coordinates=se(i,e,n);break;case"MultiLineString":t.coordinates=i.map(function(t){return se(t,e,n)});break;case"Polygon":t.coordinates=ae(i,e,n);break;case"MultiPolygon":t.coordinates=i.map(function(t){return ae(t,e,n)})}}(t,n,r)}),t},t.bezierSpline=ue,t.tag=function(t,e,n,r){return t=Gt(t),e=Gt(e),O(t,function(t){t.properties||(t.properties={}),O(e,function(e){void 0===t.properties[r]&&Pt(t,e)&&(t.properties[r]=e.properties[n])})}),t},t.sample=function(t,e){if(!t)throw new Error("featurecollection is required");if(null===e||void 0===e)throw new Error("num is required");if("number"!=typeof e)throw new Error("num must be a number");return c(function(t,e){for(var n,r,i=t.slice(0),o=t.length,s=o-e;o-- >s;)r=Math.floor((o+1)*Math.random()),n=i[r],i[r]=i[o],i[o]=n;return i.slice(s)}(t.features,e))},t.envelope=he,t.square=le,t.circle=fe,t.midpoint=function(t,e){return pe(t,qt(t,e)/2,ge(t,e))},t.center=de,t.centerOfMass=_e,t.centroid=ye,t.combine=function(t){function n(t,e,n){n?r[e].coordinates=r[e].coordinates.concat(t.geometry.coordinates):r[e].coordinates.push(t.geometry.coordinates),r[e].properties.push(t.properties)}var r={MultiPoint:{coordinates:[],properties:[]},MultiLineString:{coordinates:[],properties:[]},MultiPolygon:{coordinates:[],properties:[]}},i=Object.keys(r).reduce(function(t,e){return t[e.replace("Multi","")]=e,t},{});return O(t,function(t){t.geometry&&(r[t.geometry.type]?n(t,t.geometry.type,!0):i[t.geometry.type]&&n(t,i[t.geometry.type],!1))}),c(Object.keys(r).filter(function(t){return r[t].coordinates.length}).sort().map(function(t){return e({type:t,coordinates:r[t].coordinates},{collectedProperties:r[t].properties})}))},t.distance=qt,t.explode=me,t.bbox=j,t.tesselate=function(t){if(!t.geometry||"Polygon"!==t.geometry.type&&"MultiPolygon"!==t.geometry.type)throw new Error("input must be a Polygon or MultiPolygon");var e={type:"FeatureCollection",features:[]};return"Polygon"===t.geometry.type?e.features=De(t.geometry.coordinates):t.geometry.coordinates.forEach(function(t){e.features=e.features.concat(De(t))}),e},t.bboxPolygon=ce,t.booleanPointInPolygon=Pt,t.nearestPoint=Fe,t.nearestPointOnLine=on,t.nearestPointToLine=function(t,e,n){if(n=n||{},!I(n))throw new Error("options is invalid");var r=n.units,i=n.properties||{};if(!t)throw new Error("points is required");if(!(t=function(t){var e=[];switch(t.geometry?t.geometry.type:t.type){case"GeometryCollection":return A(t,function(t){"Point"===t.type&&e.push({type:"Feature",properties:{},geometry:t})}),{type:"FeatureCollection",features:e};case"FeatureCollection":return t.features=t.features.filter(function(t){return"Point"===t.geometry.type}),t;default:throw new Error("points must be a Point Collection")}}(t)).features.length)throw new Error("points must contain features");if(!e)throw new Error("line is required");if("LineString"!==K(e))throw new Error("line must be a LineString");var o=1/0,s=null;return O(t,function(t){var n=gn(t,e,{units:r});n<o&&(o=n,s=t)}),s&&(s.properties=Object.assign({dist:o},s.properties,i)),s},t.planepoint=function(t,e){var n=X(t),r=J(e).coordinates[0];if(r.length<4)throw new Error("OuterRing of a Polygon must have 4 or more Positions.");var i=e.properties||{},o=i.a,s=i.b,a=i.c,u=n[0],c=n[1],h=r[0][0],l=r[0][1],p=void 0!==o?o:r[0][2],f=r[1][0],g=r[1][1],d=void 0!==s?s:r[1][2],y=r[2][0],_=r[2][1],m=void 0!==a?a:r[2][2];return(m*(u-h)*(c-g)+p*(u-f)*(c-_)+d*(u-y)*(c-l)-d*(u-h)*(c-_)-m*(u-f)*(c-l)-p*(u-y)*(c-g))/((u-h)*(c-g)+(u-f)*(c-_)+(u-y)*(c-l)-(u-h)*(c-_)-(u-f)*(c-l)-(u-y)*(c-g))},t.tin=Tt,t.bearing=ge,t.destination=pe,t.kinks=function(t){var e,n,i={type:"FeatureCollection",features:[]};if("LineString"===(n="Feature"===t.type?t.geometry:t).type)e=[n.coordinates];else if("MultiLineString"===n.type)e=n.coordinates;else if("MultiPolygon"===n.type)e=[].concat.apply([],n.coordinates);else{if("Polygon"!==n.type)throw new Error("Input must be a LineString, MultiLineString, Polygon, or MultiPolygon Feature or Geometry");e=n.coordinates}return e.forEach(function(t){e.forEach(function(e){for(var n=0;n<t.length-1;n++)for(var o=n;o<e.length-1;o++){if(t===e){if(1===Math.abs(n-o))continue;if(0===n&&o===t.length-2&&t[n][0]===t[t.length-1][0]&&t[n][1]===t[t.length-1][1])continue}var s=function(t,e,n,r,i,o,s,a){var u,c,h,l,p,f={x:null,y:null,onLine1:!1,onLine2:!1};return 0==(u=(a-o)*(n-t)-(s-i)*(r-e))?null!==f.x&&null!==f.y&&f:(c=e-o,h=t-i,l=(s-i)*c-(a-o)*h,p=(n-t)*c-(r-e)*h,c=l/u,h=p/u,f.x=t+c*(n-t),f.y=e+c*(r-e),c>=0&&c<=1&&(f.onLine1=!0),h>=0&&h<=1&&(f.onLine2=!0),!(!f.onLine1||!f.onLine2)&&[f.x,f.y])}(t[n][0],t[n][1],t[n+1][0],t[n+1][1],e[o][0],e[o][1],e[o+1][0],e[o+1][1]);s&&i.features.push(r([s[0],s[1]]))}})}),i},t.pointOnFeature=yn,t.area=mn,t.along=function(t,e,n){if(n=n||{},!I(n))throw new Error("options is invalid");var i;if("Feature"===t.type)i=t.geometry.coordinates;else{if("LineString"!==t.type)throw new Error("input must be a LineString Feature or Geometry");i=t.coordinates}if(!b(e))throw new Error("distance must be a number");for(var o=0,s=0;s<i.length&&!(e>=o&&s===i.length-1);s++){if(o>=e){var a=e-o;if(a){var u=ge(i[s],i[s-1])-180;return pe(i[s],a,u,n)}return r(i[s])}o+=qt(i[s],i[s+1],n)}return r(i[i.length-1])},t.length=bn,t.lineSlice=function(t,e,n){var r=U(n);if("LineString"!==K(n))throw new Error("line must be a LineString");for(var i,o=on(n,t),s=on(n,e),u=[(i=o.properties.index<=s.properties.index?[o,s]:[s,o])[0].geometry.coordinates],c=i[0].properties.index+1;c<i[1].properties.index+1;c++)u.push(r[c]);return u.push(i[1].geometry.coordinates),a(u,n.properties)},t.lineSliceAlong=In,t.pointGrid=Ln,t.truncate=Pn,t.flatten=function(t){if(!t)throw new Error("geojson is required");var e=[];return F(t,function(t){e.push(t)}),c(e)},t.lineIntersect=nn,t.lineChunk=function(t,e,n){if(n=n||{},!I(n))throw new Error("options is invalid");var r=n.units,i=n.reverse;if(!t)throw new Error("geojson is required");if(e<=0)throw new Error("segmentLength must be greater than 0");var o=[];return F(t,function(t){i&&(t.geometry.coordinates=t.geometry.coordinates.reverse()),function(t,e,n,r){var i=bn(t,{units:n});if(i<=e)return r(t);var o=i/e;Number.isInteger(o)||(o=Math.floor(o)+1);for(var s=0;s<o;s++){var a=In(t,e*s,e*(s+1),{units:n});r(a,s)}}(t,e,r,function(t){o.push(t)})}),c(o)},t.unkinkPolygon=function(t){var e=[];return F(t,function(t){"Polygon"===t.geometry.type&&O(Ls(t),function(n){e.push(o(n.geometry.coordinates,t.properties))})}),c(e)},t.greatCircle=function(t,e,n){if("object"!=typeof(n=n||{}))throw new Error("options is invalid");var r=n.properties,i=n.npoints,o=n.offset;return t=X(t),e=X(e),r=r||{},i=i||100,o=o||10,new qs({x:t[0],y:t[1]},{x:e[0],y:e[1]},r).Arc(i,{offset:o}).json()},t.lineSegment=en,t.lineSplit=function(t,e){if(!t)throw new Error("line is required");if(!e)throw new Error("splitter is required");var n=K(t),r=K(e);if("LineString"!==n)throw new Error("line must be LineString");if("FeatureCollection"===r)throw new Error("splitter cannot be a FeatureCollection");if("GeometryCollection"===r)throw new Error("splitter cannot be a GeometryCollection");var i=Pn(e,{precision:7});switch(r){case"Point":return Dn(t,i);case"MultiPoint":return An(t,i);case"LineString":case"MultiLineString":case"Polygon":case"MultiPolygon":return An(t,nn(t,i))}},t.lineArc=Gn,t.polygonToLine=kn,t.lineToPolygon=jn,t.bboxClip=function(t,e){var n=function(t){return t.geometry?t.geometry.type:t.type}(t),r=U(t),i=t.properties;switch(n){case"LineString":case"MultiLineString":var s=[];return"LineString"===n&&(r=[r]),r.forEach(function(t){Gs(t,e,s)}),1===s.length?a(s[0],i):h(s,i);case"Polygon":return o(Wn(r,e),i);case"MultiPolygon":return p(r.map(function(t){return Wn(t,e)}),i);default:throw new Error("geometry "+n+" not supported")}},t.lineOverlap=$n,t.sector=function(t,e,n,r,i){if(i=i||{},!I(i))throw new Error("options is invalid");if(!t)throw new Error("center is required");if(void 0===n||null===n)throw new Error("bearing1 is required");if(void 0===r||null===r)throw new Error("bearing2 is required");if(!e)throw new Error("radius is required");if("object"!=typeof i)throw new Error("options must be an object");if(er(n)===er(r))return fe(t,e,i);var s=U(t),a=[[s]];return S(Gn(t,e,n,r,i),function(t){a[0].push(t)}),a[0].push(s),o(a)},t.rhumbBearing=sn,t.rhumbDistance=un,t.rhumbDestination=nr,t.polygonTangents=function(t,e){var n,i,o,s=U(t),a=U(e);switch(K(e)){case"Polygon":n=a[0][0],i=a[0][0],o=ir(a[0][0],a[0][a[0].length-1],s);var u=rr(a[0],s,o,void 0,n,i);n=u[0],i=u[1];break;case"MultiPolygon":n=a[0][0][0],i=a[0][0][0],o=ir(a[0][0][0],a[0][0][a[0][0].length-1],s),a.forEach(function(t){var e=rr(t[0],s,o,void 0,n,i);n=e[0],i=e[1]})}return c([r(n),r(i)])},t.rewind=function(t,e){if(e=e||{},!I(e))throw new Error("options is invalid");var n=e.reverse||!1,r=e.mutate||!1;if(!t)throw new Error("<geojson> is required");if("boolean"!=typeof n)throw new Error("<reverse> must be a boolean");if("boolean"!=typeof r)throw new Error("<mutate> must be a boolean");!1===r&&(t=Gt(t));var i=[];switch(t.type){case"GeometryCollection":return A(t,function(t){sr(t,n)}),t;case"FeatureCollection":return O(t,function(t){O(sr(t,n),function(t){i.push(t)})}),c(i)}return sr(t,n)},t.isobands=function(t,e,n){if(n=n||{},!I(n))throw new Error("options is invalid");var r=n.zProperty||"elevation",i=n.commonProperties||{},s=n.breaksProperties||[];if(W(t,"Point","Input must contain Points"),!e)throw new Error("breaks is required");if(!Array.isArray(e))throw new Error("breaks is not an Array");if(!I(i))throw new Error("commonProperties is not an Object");if(!Array.isArray(s))throw new Error("breaksProperties is not an Array");var a=cr(t,{zProperty:r,flip:!0}),u=function(t,e,n){for(var r=[],i=1;i<e.length;i++){var s=+e[i-1],a=+e[i],u=hr(t,s,a-s),c=function(t){var e=[],n=[];t.forEach(function(t){var r=mn(o([t]));n.push(r),e.push({ring:t,area:r})}),n.sort(function(t,e){return e-t});var r=[];return n.forEach(function(t){for(var n=0;n<e.length;n++)if(e[n].area===t){r.push(e[n].ring),e.splice(n,1);break}}),r}(u),h=function(t){for(var e=t.map(function(t){return{lrCoordinates:t,grouped:!1}}),n=[];!function(t){for(var e=0;e<t.length;e++)if(!1===t[e].grouped)return!1;return!0}(e);)for(var r=0;r<e.length;r++)if(!e[r].grouped){var i=[];i.push(e[r].lrCoordinates),e[r].grouped=!0;for(var s=o([e[r].lrCoordinates]),a=r+1;a<e.length;a++)if(!e[a].grouped){var u=o([e[a].lrCoordinates]);(function(t,e){for(var n=me(t),r=0;r<n.features.length;r++)if(!Pt(n.features[r],e))return!1;return!0})(u,s)&&(i.push(e[a].lrCoordinates),e[a].grouped=!0)}n.push(i)}return n}(c),l={};l.groupedRings=h,l[n]=s+"-"+a,r.push(l)}return r}(a,e,r);return c((u=function(t,e,n){var r=j(n),i=r[2]-r[0],o=r[3]-r[1],s=r[0],a=r[1],u=e[0].length-1,c=e.length-1,h=i/u,l=o/c,p=function(t){t[0]=t[0]*h+s,t[1]=t[1]*l+a};return t.forEach(function(t){t.groupedRings.forEach(function(t){t.forEach(function(t){t.forEach(p)})})}),t}(u,a,t)).map(function(t,e){if(s[e]&&!I(s[e]))throw new Error("Each mappedProperty is required to be an Object");var n=Object.assign({},i,s[e]);return n[r]=t[r],p(t.groupedRings,n)}))},t.transformRotate=fr,t.transformScale=gr,t.transformTranslate=function(t,e,n,r){if(r=r||{},!I(r))throw new Error("options is invalid");var i=r.units,o=r.zTranslation,s=r.mutate;if(!t)throw new Error("geojson is required");if(void 0===e||null===e||isNaN(e))throw new Error("distance is required");if(o&&"number"!=typeof o&&isNaN(o))throw new Error("zTranslation is not a number");if(o=void 0!==o?o:0,0===e&&0===o)return t;if(void 0===n||null===n||isNaN(n))throw new Error("direction is required");return e<0&&(e=-e,n=-n),!1!==s&&void 0!==s||(t=Gt(t)),S(t,function(t){var r=U(nr(t,e,n,{units:i}));t[0]=r[0],t[1]=r[1],o&&3===t.length&&(t[2]+=o)}),t},t.lineOffset=function(t,e,n){if(n=n||{},!I(n))throw new Error("options is invalid");var r=n.units;if(!t)throw new Error("geojson is required");if(void 0===e||null===e||isNaN(e))throw new Error("distance is required");var i=K(t),o=t.properties;switch(i){case"LineString":return vr(t,e,r);case"MultiLineString":var s=[];return F(t,function(t){s.push(vr(t,e,r).geometry.coordinates)}),h(s,o);default:throw new Error("geometry "+i+" is not supported")}},t.polygonize=function(t){var e=qa.fromGeoJson(t);e.deleteDangles(),e.deleteCutEdges();var n=[],r=[];return e.getEdgeRings().filter(function(t){return t.isValid()}).forEach(function(t){t.isHole()?n.push(t):r.push(t)}),n.forEach(function(t){Da.findEdgeRingContaining(t,r)&&r.push(t)}),c(r.map(function(t){return t.toPolygon()}))},t.booleanDisjoint=function(t,e){var n;return F(t,function(t){F(e,function(e){if(!1===n)return!1;n=function(t,e){switch(t.type){case"Point":switch(e.type){case"Point":return!function(t,e){return t[0]===e[0]&&t[1]===e[1]}(t.coordinates,e.coordinates);case"LineString":return!wr(e,t);case"Polygon":return!Pt(t,e)}break;case"LineString":switch(e.type){case"Point":return!wr(t,e);case"LineString":return!function(t,e){return nn(t,e).features.length>0}(t,e);case"Polygon":return!br(e,t)}break;case"Polygon":switch(e.type){case"Point":return!Pt(e,t);case"LineString":return!br(t,e);case"Polygon":return!function(t,e){for(var n=0;n<t.coordinates[0].length;n++)if(Pt(t.coordinates[0][n],e))return!0;for(var r=0;r<e.coordinates[0].length;r++)if(Pt(e.coordinates[0][r],t))return!0;return!1}(e,t)}}}(t.geometry,e.geometry)})}),n},t.booleanContains=function(t,e){var n=K(t),r=K(e),i=J(t),o=J(e),s=U(t),a=U(e);switch(n){case"Point":switch(r){case"Point":return Nr(s,a);default:throw new Error("feature2 "+r+" geometry not supported")}case"MultiPoint":switch(r){case"Point":return function(t,e){var n,r=!1;for(n=0;n<t.coordinates.length;n++)if(Nr(t.coordinates[n],e.coordinates)){r=!0;break}return r}(i,o);case"MultiPoint":return function(t,e){for(var n=0;n<e.coordinates.length;n++){for(var r=!1,i=0;i<t.coordinates.length;i++)if(Nr(e.coordinates[n],t.coordinates[i])){r=!0;break}if(!r)return!1}return!0}(i,o);default:throw new Error("feature2 "+r+" geometry not supported")}case"LineString":switch(r){case"Point":return Nn(o,i,{ignoreEndVertices:!0});case"LineString":return function(t,e){for(var n=!1,r=0;r<e.coordinates.length;r++)if(Nn({type:"Point",coordinates:e.coordinates[r]},t,{ignoreEndVertices:!0})&&(n=!0),!Nn({type:"Point",coordinates:e.coordinates[r]},t,{ignoreEndVertices:!1}))return!1;return n}(i,o);case"MultiPoint":return function(t,e){for(var n=!1,r=0;r<e.coordinates.length;r++)if(Nn(e.coordinates[r],t,{ignoreEndVertices:!0})&&(n=!0),!Nn(e.coordinates[r],t))return!1;return!!n}(i,o);default:throw new Error("feature2 "+r+" geometry not supported")}case"Polygon":switch(r){case"Point":return Pt(o,i,{ignoreBoundary:!0});case"LineString":return function(t,e){var n=!1,r=0,i=j(t),o=j(e);if(!Ir(i,o))return!1;for(;r<e.coordinates.length-1;r++){var s=function(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}(e.coordinates[r],e.coordinates[r+1]);if(Pt({type:"Point",coordinates:s},t,{ignoreBoundary:!0})){n=!0;break}}return n}(i,o);case"Polygon":return function(t,e){var n=j(t),r=j(e);if(!Ir(n,r))return!1;for(var i=0;i<e.coordinates[0].length;i++)if(!Pt(e.coordinates[0][i],t))return!1;return!0}(i,o);case"MultiPoint":return function(t,e){for(var n=0;n<e.coordinates.length;n++)if(!Pt(e.coordinates[n],t,{ignoreBoundary:!0}))return!1;return!0}(i,o);default:throw new Error("feature2 "+r+" geometry not supported")}default:throw new Error("feature1 "+n+" geometry not supported")}},t.booleanCrosses=function(t,e){var n=K(t),r=K(e),i=J(t),o=J(e);switch(n){case"MultiPoint":switch(r){case"LineString":return Cr(i,o);case"Polygon":return Mr(i,o);default:throw new Error("feature2 "+r+" geometry not supported")}case"LineString":switch(r){case"MultiPoint":return Cr(o,i);case"LineString":return function(t,e){if(nn(t,e).features.length>0)for(var n=0;n<t.coordinates.length-1;n++)for(var r=0;r<e.coordinates.length-1;r++){var i=!0;if(0!==r&&r!==e.coordinates.length-2||(i=!1),Lr(t.coordinates[n],t.coordinates[n+1],e.coordinates[r],i))return!0}return!1}(i,o);case"Polygon":return Sr(i,o);default:throw new Error("feature2 "+r+" geometry not supported")}case"Polygon":switch(r){case"MultiPoint":return Mr(o,i);case"LineString":return Sr(o,i);default:throw new Error("feature2 "+r+" geometry not supported")}default:throw new Error("feature1 "+n+" geometry not supported")}},t.booleanClockwise=or,t.booleanOverlap=Tr,t.booleanPointOnLine=Nn,t.booleanEqual=function(t,e){if(!t)throw new Error("feature1 is required");if(!e)throw new Error("feature2 is required");return K(t)===K(e)&&new ja({precision:6}).compare(te(t),te(e))},t.booleanWithin=Cn,t.clone=Gt,t.cleanCoords=te,t.clustersDbscan=function(t,e,n){if("object"!=typeof(n=n||{}))throw new Error("options is invalid");var r=n.minPoints,i=n.units;if(W(t,"Point","Input must contain Points"),null===e||void 0===e)throw new Error("maxDistance is required");if(!(Math.sign(e)>0))throw new Error("Invalid maxDistance");if(!(void 0===r||null===r||Math.sign(r)>0))throw new Error("Invalid minPoints");t=Gt(t),r=r||3;var o=new Ha.DBSCAN,s=-1;return o.run(T(t),E(e,i),r,qt).forEach(function(e){s++,e.forEach(function(e){var n=t.features[e];n.properties||(n.properties={}),n.properties.cluster=s,n.properties.dbscan="core"})}),o.noise.forEach(function(e){var n=t.features[e];n.properties||(n.properties={}),n.properties.cluster?n.properties.dbscan="edge":n.properties.dbscan="noise"}),t},t.clustersKmeans=function(t,e){if("object"!=typeof(e=e||{}))throw new Error("options is invalid");var n=e.numberOfClusters,r=e.mutate;W(t,"Point","Input must contain Points");var i=t.features.length;(n=n||Math.round(Math.sqrt(i/2)))>i&&(n=i),!1!==r&&void 0!==r||(t=Gt(t));var o=T(t),s=o.slice(0,n),a=eu(o,n,s),u={};return a.centroids.forEach(function(t,e){u[e]=t}),O(t,function(t,e){var n=a.idxs[e];t.properties.cluster=n,t.properties.centroid=u[n]}),t},t.pointToLineDistance=gn,t.booleanParallel=function(t,e){if(!t)throw new Error("line1 is required");if(!e)throw new Error("line2 is required");if("LineString"!==Dr(t,"line1"))throw new Error("line1 must be a LineString");if("LineString"!==Dr(e,"line2"))throw new Error("line2 must be a LineString");for(var n=en(te(t)).features,r=en(te(e)).features,i=0;i<n.length;i++){var o=n[i].geometry.coordinates;if(!r[i])break;if(!function(t,e){var n=m(sn(t[0],t[1])),r=m(sn(e[0],e[1]));return n===r}(o,r[i].geometry.coordinates))return!1}return!0},t.shortestPath=function(t,n,i){if(i=i||{},!I(i))throw new Error("options is invalid");var o=i.resolution,s=i.minDistance,u=i.obstacles||c([]);if(!t)throw new Error("start is required");if(!n)throw new Error("end is required");if(o&&!b(o)||o<=0)throw new Error("options.resolution must be a number, greater than 0");if(s)throw new Error("options.minDistance is not yet implemented");var h=X(t),l=X(n);switch(t=r(h),n=r(l),K(u)){case"FeatureCollection":if(0===u.features.length)return a([h,l]);break;case"Polygon":u=c([e(J(u))]);break;default:throw new Error("invalid obstacles")}var p=u;p.features.push(t),p.features.push(n);var f=j(gr(ce(j(p)),1.15));o||(o=qt([f[0],f[1]],[f[2],f[1]],i)/100);p.features.pop(),p.features.pop();for(var g=f[0],d=f[1],y=f[2],_=f[3],m=o/qt([g,d],[y,d],i)*(y-g),v=o/qt([g,d],[g,_],i)*(_-d),x=y-g,E=_-d,w=(x-Math.floor(x/m)*m)/2,N=[],C=[],S=[],M=[],L=1/0,P=1/0,O=_-(E-Math.floor(E/v)*v)/2,R=0;O>=d;){for(var T=[],A=[],D=g+w,F=0;D<=y;){var q=r([D,O]),G=function(t,e){for(var n=0;n<e.features.length;n++)if(Pt(t,e.features[n]))return!0;return!1}(q,u);T.push(G?0:1),A.push(D+"|"+O);var B=qt(q,t);!G&&B<L&&(L=B,S={x:F,y:R});var k=qt(q,n);!G&&k<P&&(P=k,M={x:F,y:R}),D+=m,F++}C.push(T),N.push(A),O-=v,R++}var z=new qr(C,{diagonal:!0}),U=z.grid[S.y][S.x],Y=z.grid[M.y][M.x],V=[h];return nu.search(z,U,Y).forEach(function(t){var e=N[t.x][t.y].split("|");V.push([+e[0],+e[1]])}),V.push(l),te(a(V))},t.voronoi=function(t,e){if(e=e||{},!I(e))throw new Error("options is invalid");var n=e.bbox||[-180,-85,180,85];if(!t)throw new Error("points is required");if(!Array.isArray(n))throw new Error("bbox is invalid");return W(t,"Point","points"),c(fu().x(function(t){return t.geometry.coordinates[0]}).y(function(t){return t.geometry.coordinates[1]}).extent([[n[0],n[1]],[n[2],n[3]]]).polygons(t.features).map(li))},t.ellipse=pi,t.centerMean=gi,t.centerMedian=function(t,e){if(e=e||{},!I(e))throw new Error("options is invalid");var n=e.counter||10;if(!b(n))throw new Error("counter must be a number");var r=e.weight,i=gi(t,{weight:e.weight}),o=c([]);return O(t,function(t){o.features.push(ye(t,{weight:t.properties[r]}))}),o.properties={tolerance:e.tolerance,medianCandidates:[]},di(i.geometry.coordinates,[0,0],o,n)},t.standardDeviationalEllipse=function(t,e){if(e=e||{},!I(e))throw new Error("options is invalid");var n=e.steps||64,r=e.weight,i=e.properties||{};if(!b(n))throw new Error("steps must be a number");if(!I(i))throw new Error("properties must be a number");var o=T(t).length,s=gi(t,{weight:r}),a=0,u=0,h=0;O(t,function(t){var e=t.properties[r]||1,n=yi(U(t),U(s));a+=Math.pow(n.x,2)*e,u+=Math.pow(n.y,2)*e,h+=n.x*n.y*e});var l=a-u,p=Math.sqrt(Math.pow(l,2)+4*Math.pow(h,2)),f=2*h,g=Math.atan((l+p)/f),d=180*g/Math.PI,y=0,_=0,m=0;O(t,function(t){var e=t.properties[r]||1,n=yi(U(t),U(s));y+=Math.pow(n.x*Math.cos(g)-n.y*Math.sin(g),2)*e,_+=Math.pow(n.x*Math.sin(g)+n.y*Math.cos(g),2)*e,m+=e});var v=Math.sqrt(2*y/m),x=Math.sqrt(2*_/m),E=pi(s,v,x,{units:"degrees",angle:d,steps:n,properties:i}),w=Rt(t,c([E])),N={meanCenterCoordinates:U(s),semiMajorAxis:v,semiMinorAxis:x,numberOfFeatures:o,angle:d,percentageWithinEllipse:100*T(w).length/o};return E.properties.standardDeviationalEllipse=N,E},t.difference=function(t,n){var r=J(t),i=J(n),o=t.properties||{};if(r=Ui(r),i=Ui(i),!r)return null;if(!i)return e(r,o);var s=new bh,a=s.read(r),u=s.read(i),c=Cf.difference(a,u);return c.isEmpty()?null:e((new Ih).write(c),o)},t.buffer=function(t,e,n){var r=(n=n||{}).units,i=n.steps||64;if(!t)throw new Error("geojson is required");if("object"!=typeof n)throw new Error("options must be an object");if("number"!=typeof i)throw new Error("steps must be an number");if(void 0===e)throw new Error("radius is required");if(i<=0)throw new Error("steps must be greater than 0");i=i||64,r=r||"kilometers";var o=[];switch(t.type){case"GeometryCollection":return A(t,function(t){var n=bo(t,e,r,i);n&&o.push(n)}),c(o);case"FeatureCollection":return O(t,function(t){var n=bo(t,e,r,i);n&&O(n,function(t){t&&o.push(t)})}),c(o)}return bo(t,e,r,i)},t.union=Mo,t.intersect=Lo,t.dissolve=function(t,e){if(e=e||{},!I(e))throw new Error("options is invalid");var n=e.propertyName;W(t,"Polygon","dissolve");var r=Gt(t),i=r.features,o=[];i.forEach(function(t,e){t.properties.origIndexPosition=e});var s=Qe();s.load(r);for(var u in i){var c=i[u],h=!1;if(s.search(c).features.forEach(function(t){c=i[u];var e=t.properties.origIndexPosition;if(o.length>0&&0!==e)if(e>o[o.length-1])e-=o.length;else{var r=Po(e,o);0!==r&&(e-=r)}if(e!==+u){var l=i[e];l&&c&&(void 0!==n&&l.properties[n]!==c.properties[n]||Tr(c,l)&&function(t,e){var n=a(T(t)),r=a(T(e));return nn(n,r).features.length>0}(c,l)&&(i[u]=Mo(c,l),o.push(t.properties.origIndexPosition),o.sort(function(t,e){return t-e}),s.remove(t),i.splice(e,1),c.properties.origIndexPosition=u,s.remove(c,function(t,e){return t.properties.origIndexPosition===e.properties.origIndexPosition}),h=!0))}}),h){if(!c)continue;c.properties.origIndexPosition=u,s.insert(c),u--}}return i.forEach(function(t){delete t.properties.origIndexPosition,delete t.bbox}),r},t.hexGrid=Oo,t.mask=function(t,e){var n=function(t){return o(t&&t.geometry.coordinates||[[[180,90],[-180,90],[-180,-90],[180,-90],[180,90]]])}(e),r=function(t){var e=[],n=[];return F(t,function(t){var r=t.geometry.coordinates,i=r[0],s=r.slice(1);e.push(o([i])),s.forEach(function(t){n.push(o([t]))})}),[c(e),c(n)]}(t),i=r[0],s=r[1];return function(t,e,n){var r=[];return r.push(t.geometry.coordinates[0]),F(e,function(t){r.push(t.geometry.coordinates[0])}),F(n,function(t){r.push(t.geometry.coordinates[0])}),o(r)}(n,i=Ro(i),s=Ro(s))},t.squareGrid=Ao,t.triangleGrid=Do,t.interpolate=function(t,e,n){if("object"!=typeof(n=n||{}))throw new Error("options is invalid");var r=n.gridType,i=n.property,o=n.weight;if(!t)throw new Error("points is required");if(W(t,"Point","input must contain Points"),!e)throw new Error("cellSize is required");if(void 0!==o&&"number"!=typeof o)throw new Error("weight must be a number");i=i||"elevation",r=r||"square",o=o||1;var s,a=j(t);switch(r){case"point":case"points":s=Ln(a,e,n);break;case"square":case"squares":s=Ao(a,e,n);break;case"hex":case"hexes":s=Oo(a,e,n);break;case"triangle":case"triangles":s=Do(a,e,n);break;default:throw new Error("invalid gridType")}var u=[];return O(s,function(e){var s=0,a=0;O(t,function(t){var u,c=qt("point"===r?e:ye(e),t,n);if(void 0!==i&&(u=t.properties[i]),void 0===u&&(u=t.geometry.coordinates[2]),void 0===u)throw new Error("zValue is missing");0===c&&(s=u);var h=1/Math.pow(c,o);a+=h,s+=h*u});var c=Gt(e);c.properties[i]=s/a,u.push(c)}),c(u)},t.pointOnSurface=yn,t.polygonToLineString=kn,t.lineStringToPolygon=jn,t.inside=Pt,t.within=Rt,t.bezier=ue,t.nearest=Fe,t.pointOnLine=on,t.lineDistance=bn,t.radians2degrees=v,t.degrees2radians=x,t.distanceToDegrees=_,t.distanceToRadians=y,t.radiansToDistance=d,t.bearingToAngle=m,t.convertDistance=E,t.toMercator=cn,t.toWgs84=hn,t.randomPosition=_i,t.randomPoint=mi,t.randomPolygon=vi,t.randomLineString=xi,t.getCluster=wi,t.clusterEach=bi,t.clusterReduce=Ii,t.createBins=Ni,t.applyFilter=Ci,t.propertiesContainsFilter=Si,t.filterProperties=Mi,t.earthRadius=Fo,t.factors=qo,t.unitsFactors=Go,t.areaFactors=Bo,t.feature=e,t.geometry=n,t.point=r,t.points=i,t.polygon=o,t.polygons=s,t.lineString=a,t.lineStrings=u,t.featureCollection=c,t.multiLineString=h,t.multiPoint=l,t.multiPolygon=p,t.geometryCollection=f,t.round=g,t.radiansToLength=d,t.lengthToRadians=y,t.lengthToDegrees=_,t.bearingToAzimuth=m,t.radiansToDegrees=v,t.degreesToRadians=x,t.convertLength=E,t.convertArea=w,t.isNumber=b,t.isObject=I,t.validateBBox=N,t.validateId=C,t.getCoord=X,t.getCoords=U,t.containsNumber=Y,t.geojsonType=V,t.featureOf=H,t.collectionOf=W,t.getGeom=J,t.getGeomType=Z,t.getType=K,t.coordEach=S,t.coordReduce=M,t.propEach=L,t.propReduce=P,t.featureEach=O,t.featureReduce=R,t.coordAll=T,t.geomEach=A,t.geomReduce=D,t.flattenEach=F,t.flattenReduce=q,t.segmentEach=G,t.segmentReduce=B,t.lineEach=k,t.lineReduce=z,Object.defineProperty(t,"__esModule",{value:!0})});


/***/ }),

/***/ 910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "MapBoxGlSnap": () => /* reexport */ MapBoxGlSnap
});

// CONCATENATED MODULE: ./node_modules/@mapbox/mapbox-gl-draw/src/constants.js
const classes = {
  CONTROL_BASE: 'mapboxgl-ctrl',
  CONTROL_PREFIX: 'mapboxgl-ctrl-',
  CONTROL_BUTTON: 'mapbox-gl-draw_ctrl-draw-btn',
  CONTROL_BUTTON_LINE: 'mapbox-gl-draw_line',
  CONTROL_BUTTON_POLYGON: 'mapbox-gl-draw_polygon',
  CONTROL_BUTTON_POINT: 'mapbox-gl-draw_point',
  CONTROL_BUTTON_TRASH: 'mapbox-gl-draw_trash',
  CONTROL_BUTTON_COMBINE_FEATURES: 'mapbox-gl-draw_combine',
  CONTROL_BUTTON_UNCOMBINE_FEATURES: 'mapbox-gl-draw_uncombine',
  CONTROL_GROUP: 'mapboxgl-ctrl-group',
  ATTRIBUTION: 'mapboxgl-ctrl-attrib',
  ACTIVE_BUTTON: 'active',
  BOX_SELECT: 'mapbox-gl-draw_boxselect'
};

const sources = {
  HOT: 'mapbox-gl-draw-hot',
  COLD: 'mapbox-gl-draw-cold'
};

const cursors = {
  ADD: 'add',
  MOVE: 'move',
  DRAG: 'drag',
  POINTER: 'pointer',
  NONE: 'none'
};

const types = {
  POLYGON: 'polygon',
  LINE: 'line_string',
  POINT: 'point'
};

const geojsonTypes = {
  FEATURE: 'Feature',
  POLYGON: 'Polygon',
  LINE_STRING: 'LineString',
  POINT: 'Point',
  FEATURE_COLLECTION: 'FeatureCollection',
  MULTI_PREFIX: 'Multi',
  MULTI_POINT: 'MultiPoint',
  MULTI_LINE_STRING: 'MultiLineString',
  MULTI_POLYGON: 'MultiPolygon'
};

const modes = {
  DRAW_LINE_STRING: 'draw_line_string',
  DRAW_POLYGON: 'draw_polygon',
  DRAW_POINT: 'draw_point',
  SIMPLE_SELECT: 'simple_select',
  DIRECT_SELECT: 'direct_select',
  STATIC: 'static'
};

const events = {
  CREATE: 'draw.create',
  DELETE: 'draw.delete',
  UPDATE: 'draw.update',
  SELECTION_CHANGE: 'draw.selectionchange',
  MODE_CHANGE: 'draw.modechange',
  ACTIONABLE: 'draw.actionable',
  RENDER: 'draw.render',
  COMBINE_FEATURES: 'draw.combine',
  UNCOMBINE_FEATURES: 'draw.uncombine'
};

const updateActions = {
  MOVE: 'move',
  CHANGE_COORDINATES: 'change_coordinates'
};

const meta = {
  FEATURE: 'feature',
  MIDPOINT: 'midpoint',
  VERTEX: 'vertex'
};

const activeStates = {
  ACTIVE: 'true',
  INACTIVE: 'false'
};

const interactions = (/* unused pure expression or super */ null && ([
  'scrollZoom',
  'boxZoom',
  'dragRotate',
  'dragPan',
  'keyboard',
  'doubleClickZoom',
  'touchZoomRotate'
]));

const LAT_MIN = (/* unused pure expression or super */ null && (-90));
const LAT_RENDERED_MIN = (/* unused pure expression or super */ null && (-85));
const LAT_MAX = 90;
const LAT_RENDERED_MAX = 85;
const LNG_MIN = (/* unused pure expression or super */ null && (-270));
const LNG_MAX = 270;

// CONCATENATED MODULE: ./node_modules/@mapbox/mapbox-gl-draw/src/lib/double_click_zoom.js
/* harmony default export */ const double_click_zoom = ({
  enable(ctx) {
    setTimeout(() => {
      // First check we've got a map and some context.
      if (!ctx.map || !ctx.map.doubleClickZoom || !ctx._ctx || !ctx._ctx.store || !ctx._ctx.store.getInitialConfigValue) return;
      // Now check initial state wasn't false (we leave it disabled if so)
      if (!ctx._ctx.store.getInitialConfigValue('doubleClickZoom')) return;
      ctx.map.doubleClickZoom.enable();
    }, 0);
  },
  disable(ctx) {
    setTimeout(() => {
      if (!ctx.map || !ctx.map.doubleClickZoom) return;
      // Always disable here, as it's necessary in some cases.
      ctx.map.doubleClickZoom.disable();
    }, 0);
  }
});

// CONCATENATED MODULE: ./node_modules/@mapbox/mapbox-gl-draw/src/lib/common_selectors.js
;

function isOfMetaType(type) {
  return function(e) {
    const featureTarget = e.featureTarget;
    if (!featureTarget) return false;
    if (!featureTarget.properties) return false;
    return featureTarget.properties.meta === type;
  };
}

function isShiftMousedown(e) {
  if (!e.originalEvent) return false;
  if (!e.originalEvent.shiftKey) return false;
  return e.originalEvent.button === 0;
}

function isActiveFeature(e) {
  if (!e.featureTarget) return false;
  if (!e.featureTarget.properties) return false;
  return e.featureTarget.properties.active === Constants.activeStates.ACTIVE &&
    e.featureTarget.properties.meta === Constants.meta.FEATURE;
}

function isInactiveFeature(e) {
  if (!e.featureTarget) return false;
  if (!e.featureTarget.properties) return false;
  return e.featureTarget.properties.active === Constants.activeStates.INACTIVE &&
    e.featureTarget.properties.meta === Constants.meta.FEATURE;
}

function noTarget(e) {
  return e.featureTarget === undefined;
}

function isFeature(e) {
  if (!e.featureTarget) return false;
  if (!e.featureTarget.properties) return false;
  return e.featureTarget.properties.meta === Constants.meta.FEATURE;
}

function isVertex(e) {
  const featureTarget = e.featureTarget;
  if (!featureTarget) return false;
  if (!featureTarget.properties) return false;
  return featureTarget.properties.meta === meta.VERTEX;
}

function isShiftDown(e) {
  if (!e.originalEvent) return false;
  return e.originalEvent.shiftKey === true;
}

function isEscapeKey(e) {
  return e.keyCode === 27;
}

function isEnterKey(e) {
  return e.keyCode === 13;
}

function isTrue() {
  return true;
}

// CONCATENATED MODULE: ./node_modules/@mapbox/mapbox-gl-draw/src/lib/is_event_at_coordinates.js
function isEventAtCoordinates(event, coordinates) {
  if (!event.lngLat) return false;
  return event.lngLat.lng === coordinates[0] && event.lngLat.lat === coordinates[1];
}

/* harmony default export */ const is_event_at_coordinates = (isEventAtCoordinates);

// CONCATENATED MODULE: ./node_modules/@mapbox/mapbox-gl-draw/src/lib/create_vertex.js
;

/**
 * Returns GeoJSON for a Point representing the
 * vertex of another feature.
 *
 * @param {string} parentId
 * @param {Array<number>} coordinates
 * @param {string} path - Dot-separated numbers indicating exactly
 *   where the point exists within its parent feature's coordinates.
 * @param {boolean} selected
 * @return {GeoJSON} Point
 */
/* harmony default export */ function create_vertex(parentId, coordinates, path, selected) {
  return {
    type: geojsonTypes.FEATURE,
    properties: {
      meta: meta.VERTEX,
      parent: parentId,
      coord_path: path,
      active: (selected) ? activeStates.ACTIVE : activeStates.INACTIVE
    },
    geometry: {
      type: geojsonTypes.POINT,
      coordinates
    }
  };
}

// CONCATENATED MODULE: ./node_modules/@mapbox/mapbox-gl-draw/src/modes/draw_polygon.js
;





const DrawPolygon = {};

DrawPolygon.onSetup = function() {
  const polygon = this.newFeature({
    type: geojsonTypes.FEATURE,
    properties: {},
    geometry: {
      type: geojsonTypes.POLYGON,
      coordinates: [[]]
    }
  });

  this.addFeature(polygon);

  this.clearSelectedFeatures();
  double_click_zoom.disable(this);
  this.updateUIClasses({ mouse: cursors.ADD });
  this.activateUIButton(types.POLYGON);
  this.setActionableState({
    trash: true
  });

  return {
    polygon,
    currentVertexPosition: 0
  };
};

DrawPolygon.clickAnywhere = function(state, e) {
  if (state.currentVertexPosition > 0 && is_event_at_coordinates(e, state.polygon.coordinates[0][state.currentVertexPosition - 1])) {
    return this.changeMode(modes.SIMPLE_SELECT, { featureIds: [state.polygon.id] });
  }
  this.updateUIClasses({ mouse: cursors.ADD });
  state.polygon.updateCoordinate(`0.${state.currentVertexPosition}`, e.lngLat.lng, e.lngLat.lat);
  state.currentVertexPosition++;
  state.polygon.updateCoordinate(`0.${state.currentVertexPosition}`, e.lngLat.lng, e.lngLat.lat);
};

DrawPolygon.clickOnVertex = function(state) {
  return this.changeMode(modes.SIMPLE_SELECT, { featureIds: [state.polygon.id] });
};

DrawPolygon.onMouseMove = function(state, e) {
  state.polygon.updateCoordinate(`0.${state.currentVertexPosition}`, e.lngLat.lng, e.lngLat.lat);
  if (isVertex(e)) {
    this.updateUIClasses({ mouse: cursors.POINTER });
  }
};

DrawPolygon.onTap = DrawPolygon.onClick = function(state, e) {
  if (isVertex(e)) return this.clickOnVertex(state, e);
  return this.clickAnywhere(state, e);
};

DrawPolygon.onKeyUp = function(state, e) {
  if (isEscapeKey(e)) {
    this.deleteFeature([state.polygon.id], { silent: true });
    this.changeMode(modes.SIMPLE_SELECT);
  } else if (isEnterKey(e)) {
    this.changeMode(modes.SIMPLE_SELECT, { featureIds: [state.polygon.id] });
  }
};

DrawPolygon.onStop = function(state) {
  this.updateUIClasses({ mouse: cursors.NONE });
  double_click_zoom.enable(this);
  this.activateUIButton();

  // check to see if we've deleted this feature
  if (this.getFeature(state.polygon.id) === undefined) return;

  //remove last added coordinate
  state.polygon.removeCoordinate(`0.${state.currentVertexPosition}`);
  if (state.polygon.isValid()) {
    this.map.fire(events.CREATE, {
      features: [state.polygon.toGeoJSON()]
    });
  } else {
    this.deleteFeature([state.polygon.id], { silent: true });
    this.changeMode(modes.SIMPLE_SELECT, {}, { silent: true });
  }
};

DrawPolygon.toDisplayFeatures = function(state, geojson, display) {
  const isActivePolygon = geojson.properties.id === state.polygon.id;
  geojson.properties.active = (isActivePolygon) ? activeStates.ACTIVE : activeStates.INACTIVE;
  if (!isActivePolygon) return display(geojson);

  // Don't render a polygon until it has two positions
  // (and a 3rd which is just the first repeated)
  if (geojson.geometry.coordinates.length === 0) return;

  const coordinateCount = geojson.geometry.coordinates[0].length;
  // 2 coordinates after selecting a draw type
  // 3 after creating the first point
  if (coordinateCount < 3) {
    return;
  }
  geojson.properties.meta = meta.FEATURE;
  display(create_vertex(state.polygon.id, geojson.geometry.coordinates[0][0], '0.0', false));
  if (coordinateCount > 3) {
    // Add a start position marker to the map, clicking on this will finish the feature
    // This should only be shown when we're in a valid spot
    const endPos = geojson.geometry.coordinates[0].length - 3;
    display(create_vertex(state.polygon.id, geojson.geometry.coordinates[0][endPos], `0.${endPos}`, false));
  }
  if (coordinateCount <= 4) {
    // If we've only drawn two positions (plus the closer),
    // make a LineString instead of a Polygon
    const lineCoordinates = [
      [geojson.geometry.coordinates[0][0][0], geojson.geometry.coordinates[0][0][1]], [geojson.geometry.coordinates[0][1][0], geojson.geometry.coordinates[0][1][1]]
    ];
    // create an initial vertex so that we can track the first point on mobile devices
    display({
      type: geojsonTypes.FEATURE,
      properties: geojson.properties,
      geometry: {
        coordinates: lineCoordinates,
        type: geojsonTypes.LINE_STRING
      }
    });
    if (coordinateCount === 3) {
      return;
    }
  }
  // render the Polygon
  return display(geojson);
};

DrawPolygon.onTrash = function(state) {
  this.deleteFeature([state.polygon.id], { silent: true });
  this.changeMode(modes.SIMPLE_SELECT);
};

/* harmony default export */ const draw_polygon = (DrawPolygon);

// CONCATENATED MODULE: ./node_modules/@turf/helpers/main.es.js
/**
 * Earth Radius used with the Harvesine formula and approximates using a spherical (non-ellipsoid) Earth.
 */
var earthRadius = 6371008.8;

/**
 * Unit of measurement factors using a spherical (non-ellipsoid) earth radius.
 */
var factors = {
    meters: earthRadius,
    metres: earthRadius,
    millimeters: earthRadius * 1000,
    millimetres: earthRadius * 1000,
    centimeters: earthRadius * 100,
    centimetres: earthRadius * 100,
    kilometers: earthRadius / 1000,
    kilometres: earthRadius / 1000,
    miles: earthRadius / 1609.344,
    nauticalmiles: earthRadius / 1852,
    inches: earthRadius * 39.370,
    yards: earthRadius / 1.0936,
    feet: earthRadius * 3.28084,
    radians: 1,
    degrees: earthRadius / 111325,
};

/**
 * Units of measurement factors based on 1 meter.
 */
var unitsFactors = {
    meters: 1,
    metres: 1,
    millimeters: 1000,
    millimetres: 1000,
    centimeters: 100,
    centimetres: 100,
    kilometers: 1 / 1000,
    kilometres: 1 / 1000,
    miles: 1 / 1609.344,
    nauticalmiles: 1 / 1852,
    inches: 39.370,
    yards: 1 / 1.0936,
    feet: 3.28084,
    radians: 1 / earthRadius,
    degrees: 1 / 111325,
};

/**
 * Area of measurement factors based on 1 square meter.
 */
var areaFactors = {
    meters: 1,
    metres: 1,
    millimeters: 1000000,
    millimetres: 1000000,
    centimeters: 10000,
    centimetres: 10000,
    kilometers: 0.000001,
    kilometres: 0.000001,
    acres: 0.000247105,
    miles: 3.86e-7,
    yards: 1.195990046,
    feet: 10.763910417,
    inches: 1550.003100006
};

/**
 * Wraps a GeoJSON {@link Geometry} in a GeoJSON {@link Feature}.
 *
 * @name feature
 * @param {Geometry} geometry input geometry
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature} a GeoJSON Feature
 * @example
 * var geometry = {
 *   "type": "Point",
 *   "coordinates": [110, 50]
 * };
 *
 * var feature = turf.feature(geometry);
 *
 * //=feature
 */
function feature(geometry, properties, options) {
    // Optional Parameters
    options = options || {};
    if (!main_es_isObject(options)) throw new Error('options is invalid');
    var bbox = options.bbox;
    var id = options.id;

    // Validation
    if (geometry === undefined) throw new Error('geometry is required');
    if (properties && properties.constructor !== Object) throw new Error('properties must be an Object');
    if (bbox) validateBBox(bbox);
    if (id) validateId(id);

    // Main
    var feat = {type: 'Feature'};
    if (id) feat.id = id;
    if (bbox) feat.bbox = bbox;
    feat.properties = properties || {};
    feat.geometry = geometry;
    return feat;
}

/**
 * Creates a GeoJSON {@link Geometry} from a Geometry string type & coordinates.
 * For GeometryCollection type use `helpers.geometryCollection`
 *
 * @name geometry
 * @param {string} type Geometry Type
 * @param {Array<number>} coordinates Coordinates
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Geometry
 * @returns {Geometry} a GeoJSON Geometry
 * @example
 * var type = 'Point';
 * var coordinates = [110, 50];
 *
 * var geometry = turf.geometry(type, coordinates);
 *
 * //=geometry
 */
function geometry(type, coordinates, options) {
    // Optional Parameters
    options = options || {};
    if (!main_es_isObject(options)) throw new Error('options is invalid');
    var bbox = options.bbox;

    // Validation
    if (!type) throw new Error('type is required');
    if (!coordinates) throw new Error('coordinates is required');
    if (!Array.isArray(coordinates)) throw new Error('coordinates must be an Array');
    if (bbox) validateBBox(bbox);

    // Main
    var geom;
    switch (type) {
    case 'Point': geom = main_es_point(coordinates).geometry; break;
    case 'LineString': geom = main_es_lineString(coordinates).geometry; break;
    case 'Polygon': geom = polygon(coordinates).geometry; break;
    case 'MultiPoint': geom = multiPoint(coordinates).geometry; break;
    case 'MultiLineString': geom = multiLineString(coordinates).geometry; break;
    case 'MultiPolygon': geom = multiPolygon(coordinates).geometry; break;
    default: throw new Error(type + ' is invalid');
    }
    if (bbox) geom.bbox = bbox;
    return geom;
}

/**
 * Creates a {@link Point} {@link Feature} from a Position.
 *
 * @name point
 * @param {Array<number>} coordinates longitude, latitude position (each in decimal degrees)
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<Point>} a Point feature
 * @example
 * var point = turf.point([-75.343, 39.984]);
 *
 * //=point
 */
function main_es_point(coordinates, properties, options) {
    if (!coordinates) throw new Error('coordinates is required');
    if (!Array.isArray(coordinates)) throw new Error('coordinates must be an Array');
    if (coordinates.length < 2) throw new Error('coordinates must be at least 2 numbers long');
    if (!main_es_isNumber(coordinates[0]) || !main_es_isNumber(coordinates[1])) throw new Error('coordinates must contain numbers');

    return feature({
        type: 'Point',
        coordinates: coordinates
    }, properties, options);
}

/**
 * Creates a {@link Point} {@link FeatureCollection} from an Array of Point coordinates.
 *
 * @name points
 * @param {Array<Array<number>>} coordinates an array of Points
 * @param {Object} [properties={}] Translate these properties to each Feature
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the FeatureCollection
 * @param {string|number} [options.id] Identifier associated with the FeatureCollection
 * @returns {FeatureCollection<Point>} Point Feature
 * @example
 * var points = turf.points([
 *   [-75, 39],
 *   [-80, 45],
 *   [-78, 50]
 * ]);
 *
 * //=points
 */
function points(coordinates, properties, options) {
    if (!coordinates) throw new Error('coordinates is required');
    if (!Array.isArray(coordinates)) throw new Error('coordinates must be an Array');

    return featureCollection(coordinates.map(function (coords) {
        return main_es_point(coords, properties);
    }), options);
}

/**
 * Creates a {@link Polygon} {@link Feature} from an Array of LinearRings.
 *
 * @name polygon
 * @param {Array<Array<Array<number>>>} coordinates an array of LinearRings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<Polygon>} Polygon Feature
 * @example
 * var polygon = turf.polygon([[[-5, 52], [-4, 56], [-2, 51], [-7, 54], [-5, 52]]], { name: 'poly1' });
 *
 * //=polygon
 */
function polygon(coordinates, properties, options) {
    if (!coordinates) throw new Error('coordinates is required');

    for (var i = 0; i < coordinates.length; i++) {
        var ring = coordinates[i];
        if (ring.length < 4) {
            throw new Error('Each LinearRing of a Polygon must have 4 or more Positions.');
        }
        for (var j = 0; j < ring[ring.length - 1].length; j++) {
            // Check if first point of Polygon contains two numbers
            if (i === 0 && j === 0 && !main_es_isNumber(ring[0][0]) || !main_es_isNumber(ring[0][1])) throw new Error('coordinates must contain numbers');
            if (ring[ring.length - 1][j] !== ring[0][j]) {
                throw new Error('First and last Position are not equivalent.');
            }
        }
    }

    return feature({
        type: 'Polygon',
        coordinates: coordinates
    }, properties, options);
}

/**
 * Creates a {@link Polygon} {@link FeatureCollection} from an Array of Polygon coordinates.
 *
 * @name polygons
 * @param {Array<Array<Array<Array<number>>>>} coordinates an array of Polygon coordinates
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the FeatureCollection
 * @returns {FeatureCollection<Polygon>} Polygon FeatureCollection
 * @example
 * var polygons = turf.polygons([
 *   [[[-5, 52], [-4, 56], [-2, 51], [-7, 54], [-5, 52]]],
 *   [[[-15, 42], [-14, 46], [-12, 41], [-17, 44], [-15, 42]]],
 * ]);
 *
 * //=polygons
 */
function polygons(coordinates, properties, options) {
    if (!coordinates) throw new Error('coordinates is required');
    if (!Array.isArray(coordinates)) throw new Error('coordinates must be an Array');

    return featureCollection(coordinates.map(function (coords) {
        return polygon(coords, properties);
    }), options);
}

/**
 * Creates a {@link LineString} {@link Feature} from an Array of Positions.
 *
 * @name lineString
 * @param {Array<Array<number>>} coordinates an array of Positions
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<LineString>} LineString Feature
 * @example
 * var linestring1 = turf.lineString([[-24, 63], [-23, 60], [-25, 65], [-20, 69]], {name: 'line 1'});
 * var linestring2 = turf.lineString([[-14, 43], [-13, 40], [-15, 45], [-10, 49]], {name: 'line 2'});
 *
 * //=linestring1
 * //=linestring2
 */
function main_es_lineString(coordinates, properties, options) {
    if (!coordinates) throw new Error('coordinates is required');
    if (coordinates.length < 2) throw new Error('coordinates must be an array of two or more positions');
    // Check if first point of LineString contains two numbers
    if (!main_es_isNumber(coordinates[0][1]) || !main_es_isNumber(coordinates[0][1])) throw new Error('coordinates must contain numbers');

    return feature({
        type: 'LineString',
        coordinates: coordinates
    }, properties, options);
}

/**
 * Creates a {@link LineString} {@link FeatureCollection} from an Array of LineString coordinates.
 *
 * @name lineStrings
 * @param {Array<Array<number>>} coordinates an array of LinearRings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the FeatureCollection
 * @param {string|number} [options.id] Identifier associated with the FeatureCollection
 * @returns {FeatureCollection<LineString>} LineString FeatureCollection
 * @example
 * var linestrings = turf.lineStrings([
 *   [[-24, 63], [-23, 60], [-25, 65], [-20, 69]],
 *   [[-14, 43], [-13, 40], [-15, 45], [-10, 49]]
 * ]);
 *
 * //=linestrings
 */
function lineStrings(coordinates, properties, options) {
    if (!coordinates) throw new Error('coordinates is required');
    if (!Array.isArray(coordinates)) throw new Error('coordinates must be an Array');

    return featureCollection(coordinates.map(function (coords) {
        return main_es_lineString(coords, properties);
    }), options);
}

/**
 * Takes one or more {@link Feature|Features} and creates a {@link FeatureCollection}.
 *
 * @name featureCollection
 * @param {Feature[]} features input features
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {FeatureCollection} FeatureCollection of Features
 * @example
 * var locationA = turf.point([-75.343, 39.984], {name: 'Location A'});
 * var locationB = turf.point([-75.833, 39.284], {name: 'Location B'});
 * var locationC = turf.point([-75.534, 39.123], {name: 'Location C'});
 *
 * var collection = turf.featureCollection([
 *   locationA,
 *   locationB,
 *   locationC
 * ]);
 *
 * //=collection
 */
function featureCollection(features, options) {
    // Optional Parameters
    options = options || {};
    if (!main_es_isObject(options)) throw new Error('options is invalid');
    var bbox = options.bbox;
    var id = options.id;

    // Validation
    if (!features) throw new Error('No features passed');
    if (!Array.isArray(features)) throw new Error('features must be an Array');
    if (bbox) validateBBox(bbox);
    if (id) validateId(id);

    // Main
    var fc = {type: 'FeatureCollection'};
    if (id) fc.id = id;
    if (bbox) fc.bbox = bbox;
    fc.features = features;
    return fc;
}

/**
 * Creates a {@link Feature<MultiLineString>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiLineString
 * @param {Array<Array<Array<number>>>} coordinates an array of LineStrings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<MultiLineString>} a MultiLineString feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiLine = turf.multiLineString([[[0,0],[10,10]]]);
 *
 * //=multiLine
 */
function multiLineString(coordinates, properties, options) {
    if (!coordinates) throw new Error('coordinates is required');

    return feature({
        type: 'MultiLineString',
        coordinates: coordinates
    }, properties, options);
}

/**
 * Creates a {@link Feature<MultiPoint>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiPoint
 * @param {Array<Array<number>>} coordinates an array of Positions
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<MultiPoint>} a MultiPoint feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiPt = turf.multiPoint([[0,0],[10,10]]);
 *
 * //=multiPt
 */
function multiPoint(coordinates, properties, options) {
    if (!coordinates) throw new Error('coordinates is required');

    return feature({
        type: 'MultiPoint',
        coordinates: coordinates
    }, properties, options);
}

/**
 * Creates a {@link Feature<MultiPolygon>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiPolygon
 * @param {Array<Array<Array<Array<number>>>>} coordinates an array of Polygons
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<MultiPolygon>} a multipolygon feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiPoly = turf.multiPolygon([[[[0,0],[0,10],[10,10],[10,0],[0,0]]]]);
 *
 * //=multiPoly
 *
 */
function multiPolygon(coordinates, properties, options) {
    if (!coordinates) throw new Error('coordinates is required');

    return feature({
        type: 'MultiPolygon',
        coordinates: coordinates
    }, properties, options);
}

/**
 * Creates a {@link Feature<GeometryCollection>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name geometryCollection
 * @param {Array<Geometry>} geometries an array of GeoJSON Geometries
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<GeometryCollection>} a GeoJSON GeometryCollection Feature
 * @example
 * var pt = {
 *     "type": "Point",
 *       "coordinates": [100, 0]
 *     };
 * var line = {
 *     "type": "LineString",
 *     "coordinates": [ [101, 0], [102, 1] ]
 *   };
 * var collection = turf.geometryCollection([pt, line]);
 *
 * //=collection
 */
function geometryCollection(geometries, properties, options) {
    if (!geometries) throw new Error('geometries is required');
    if (!Array.isArray(geometries)) throw new Error('geometries must be an Array');

    return feature({
        type: 'GeometryCollection',
        geometries: geometries
    }, properties, options);
}

/**
 * Round number to precision
 *
 * @param {number} num Number
 * @param {number} [precision=0] Precision
 * @returns {number} rounded number
 * @example
 * turf.round(120.4321)
 * //=120
 *
 * turf.round(120.4321, 2)
 * //=120.43
 */
function round(num, precision) {
    if (num === undefined || num === null || isNaN(num)) throw new Error('num is required');
    if (precision && !(precision >= 0)) throw new Error('precision must be a positive number');
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(num * multiplier) / multiplier;
}

/**
 * Convert a distance measurement (assuming a spherical Earth) from radians to a more friendly unit.
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @name radiansToLength
 * @param {number} radians in radians across the sphere
 * @param {string} [units='kilometers'] can be degrees, radians, miles, or kilometers inches, yards, metres, meters, kilometres, kilometers.
 * @returns {number} distance
 */
function radiansToLength(radians, units) {
    if (radians === undefined || radians === null) throw new Error('radians is required');

    if (units && typeof units !== 'string') throw new Error('units must be a string');
    var factor = factors[units || 'kilometers'];
    if (!factor) throw new Error(units + ' units is invalid');
    return radians * factor;
}

/**
 * Convert a distance measurement (assuming a spherical Earth) from a real-world unit into radians
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @name lengthToRadians
 * @param {number} distance in real units
 * @param {string} [units='kilometers'] can be degrees, radians, miles, or kilometers inches, yards, metres, meters, kilometres, kilometers.
 * @returns {number} radians
 */
function lengthToRadians(distance, units) {
    if (distance === undefined || distance === null) throw new Error('distance is required');

    if (units && typeof units !== 'string') throw new Error('units must be a string');
    var factor = factors[units || 'kilometers'];
    if (!factor) throw new Error(units + ' units is invalid');
    return distance / factor;
}

/**
 * Convert a distance measurement (assuming a spherical Earth) from a real-world unit into degrees
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, centimeters, kilometres, feet
 *
 * @name lengthToDegrees
 * @param {number} distance in real units
 * @param {string} [units='kilometers'] can be degrees, radians, miles, or kilometers inches, yards, metres, meters, kilometres, kilometers.
 * @returns {number} degrees
 */
function lengthToDegrees(distance, units) {
    return radiansToDegrees(lengthToRadians(distance, units));
}

/**
 * Converts any bearing angle from the north line direction (positive clockwise)
 * and returns an angle between 0-360 degrees (positive clockwise), 0 being the north line
 *
 * @name bearingToAzimuth
 * @param {number} bearing angle, between -180 and +180 degrees
 * @returns {number} angle between 0 and 360 degrees
 */
function bearingToAzimuth(bearing) {
    if (bearing === null || bearing === undefined) throw new Error('bearing is required');

    var angle = bearing % 360;
    if (angle < 0) angle += 360;
    return angle;
}

/**
 * Converts an angle in radians to degrees
 *
 * @name radiansToDegrees
 * @param {number} radians angle in radians
 * @returns {number} degrees between 0 and 360 degrees
 */
function radiansToDegrees(radians) {
    if (radians === null || radians === undefined) throw new Error('radians is required');

    var degrees = radians % (2 * Math.PI);
    return degrees * 180 / Math.PI;
}

/**
 * Converts an angle in degrees to radians
 *
 * @name degreesToRadians
 * @param {number} degrees angle between 0 and 360 degrees
 * @returns {number} angle in radians
 */
function degreesToRadians(degrees) {
    if (degrees === null || degrees === undefined) throw new Error('degrees is required');

    var radians = degrees % 360;
    return radians * Math.PI / 180;
}

/**
 * Converts a length to the requested unit.
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @param {number} length to be converted
 * @param {string} originalUnit of the length
 * @param {string} [finalUnit='kilometers'] returned unit
 * @returns {number} the converted length
 */
function convertLength(length, originalUnit, finalUnit) {
    if (length === null || length === undefined) throw new Error('length is required');
    if (!(length >= 0)) throw new Error('length must be a positive number');

    return radiansToLength(lengthToRadians(length, originalUnit), finalUnit || 'kilometers');
}

/**
 * Converts a area to the requested unit.
 * Valid units: kilometers, kilometres, meters, metres, centimetres, millimeters, acres, miles, yards, feet, inches
 * @param {number} area to be converted
 * @param {string} [originalUnit='meters'] of the distance
 * @param {string} [finalUnit='kilometers'] returned unit
 * @returns {number} the converted distance
 */
function convertArea(area, originalUnit, finalUnit) {
    if (area === null || area === undefined) throw new Error('area is required');
    if (!(area >= 0)) throw new Error('area must be a positive number');

    var startFactor = areaFactors[originalUnit || 'meters'];
    if (!startFactor) throw new Error('invalid original units');

    var finalFactor = areaFactors[finalUnit || 'kilometers'];
    if (!finalFactor) throw new Error('invalid final units');

    return (area / startFactor) * finalFactor;
}

/**
 * isNumber
 *
 * @param {*} num Number to validate
 * @returns {boolean} true/false
 * @example
 * turf.isNumber(123)
 * //=true
 * turf.isNumber('foo')
 * //=false
 */
function main_es_isNumber(num) {
    return !isNaN(num) && num !== null && !Array.isArray(num);
}

/**
 * isObject
 *
 * @param {*} input variable to validate
 * @returns {boolean} true/false
 * @example
 * turf.isObject({elevation: 10})
 * //=true
 * turf.isObject('foo')
 * //=false
 */
function main_es_isObject(input) {
    return (!!input) && (input.constructor === Object);
}

/**
 * Validate BBox
 *
 * @private
 * @param {Array<number>} bbox BBox to validate
 * @returns {void}
 * @throws Error if BBox is not valid
 * @example
 * validateBBox([-180, -40, 110, 50])
 * //=OK
 * validateBBox([-180, -40])
 * //=Error
 * validateBBox('Foo')
 * //=Error
 * validateBBox(5)
 * //=Error
 * validateBBox(null)
 * //=Error
 * validateBBox(undefined)
 * //=Error
 */
function validateBBox(bbox) {
    if (!bbox) throw new Error('bbox is required');
    if (!Array.isArray(bbox)) throw new Error('bbox must be an Array');
    if (bbox.length !== 4 && bbox.length !== 6) throw new Error('bbox must be an Array of 4 or 6 numbers');
    bbox.forEach(function (num) {
        if (!main_es_isNumber(num)) throw new Error('bbox must only contain numbers');
    });
}

/**
 * Validate Id
 *
 * @private
 * @param {string|number} id Id to validate
 * @returns {void}
 * @throws Error if Id is not valid
 * @example
 * validateId([-180, -40, 110, 50])
 * //=Error
 * validateId([-180, -40])
 * //=Error
 * validateId('Foo')
 * //=OK
 * validateId(5)
 * //=OK
 * validateId(null)
 * //=Error
 * validateId(undefined)
 * //=Error
 */
function validateId(id) {
    if (!id) throw new Error('id is required');
    if (['string', 'number'].indexOf(typeof id) === -1) throw new Error('id must be a number or a string');
}

// Deprecated methods
function radians2degrees() {
    throw new Error('method has been renamed to `radiansToDegrees`');
}

function degrees2radians() {
    throw new Error('method has been renamed to `degreesToRadians`');
}

function distanceToDegrees() {
    throw new Error('method has been renamed to `lengthToDegrees`');
}

function distanceToRadians() {
    throw new Error('method has been renamed to `lengthToRadians`');
}

function radiansToDistance() {
    throw new Error('method has been renamed to `radiansToLength`');
}

function bearingToAngle() {
    throw new Error('method has been renamed to `bearingToAzimuth`');
}

function convertDistance() {
    throw new Error('method has been renamed to `convertLength`');
}



// CONCATENATED MODULE: ./node_modules/@turf/bbox-polygon/main.es.js
;

/**
 * Takes a bbox and returns an equivalent {@link Polygon|polygon}.
 *
 * @name bboxPolygon
 * @param {BBox} bbox extent in [minX, minY, maxX, maxY] order
 * @returns {Feature<Polygon>} a Polygon representation of the bounding box
 * @example
 * var bbox = [0, 0, 10, 10];
 *
 * var poly = turf.bboxPolygon(bbox);
 *
 * //addToMap
 * var addToMap = [poly]
 */
function bboxPolygon(bbox) {
    validateBBox(bbox);
    // Convert BBox positions to Numbers
    // No performance loss for including Number()
    // https://github.com/Turfjs/turf/issues/1119
    var west = Number(bbox[0]);
    var south = Number(bbox[1]);
    var east = Number(bbox[2]);
    var north = Number(bbox[3]);

    if (bbox.length === 6) throw new Error('@turf/bbox-polygon does not support BBox with 6 positions');

    var lowLeft = [west, south];
    var topLeft = [west, north];
    var topRight = [east, north];
    var lowRight = [east, south];

    return polygon([[
        lowLeft,
        lowRight,
        topRight,
        topLeft,
        lowLeft
    ]]);
}

/* harmony default export */ const main_es = (bboxPolygon);

// CONCATENATED MODULE: ./node_modules/@turf/invariant/main.es.js
;

/**
 * Unwrap a coordinate from a Point Feature, Geometry or a single coordinate.
 *
 * @name getCoord
 * @param {Array<number>|Geometry<Point>|Feature<Point>} obj Object
 * @returns {Array<number>} coordinates
 * @example
 * var pt = turf.point([10, 10]);
 *
 * var coord = turf.getCoord(pt);
 * //= [10, 10]
 */
function getCoord(obj) {
    if (!obj) throw new Error('obj is required');

    var coordinates = getCoords(obj);

    // getCoord() must contain at least two numbers (Point)
    if (coordinates.length > 1 && main_es_isNumber(coordinates[0]) && main_es_isNumber(coordinates[1])) {
        return coordinates;
    } else {
        throw new Error('Coordinate is not a valid Point');
    }
}

/**
 * Unwrap coordinates from a Feature, Geometry Object or an Array of numbers
 *
 * @name getCoords
 * @param {Array<number>|Geometry|Feature} obj Object
 * @returns {Array<number>} coordinates
 * @example
 * var poly = turf.polygon([[[119.32, -8.7], [119.55, -8.69], [119.51, -8.54], [119.32, -8.7]]]);
 *
 * var coord = turf.getCoords(poly);
 * //= [[[119.32, -8.7], [119.55, -8.69], [119.51, -8.54], [119.32, -8.7]]]
 */
function getCoords(obj) {
    if (!obj) throw new Error('obj is required');
    var coordinates;

    // Array of numbers
    if (obj.length) {
        coordinates = obj;

    // Geometry Object
    } else if (obj.coordinates) {
        coordinates = obj.coordinates;

    // Feature
    } else if (obj.geometry && obj.geometry.coordinates) {
        coordinates = obj.geometry.coordinates;
    }
    // Checks if coordinates contains a number
    if (coordinates) {
        containsNumber(coordinates);
        return coordinates;
    }
    throw new Error('No valid coordinates');
}

/**
 * Checks if coordinates contains a number
 *
 * @name containsNumber
 * @param {Array<any>} coordinates GeoJSON Coordinates
 * @returns {boolean} true if Array contains a number
 */
function containsNumber(coordinates) {
    if (coordinates.length > 1 && main_es_isNumber(coordinates[0]) && main_es_isNumber(coordinates[1])) {
        return true;
    }

    if (Array.isArray(coordinates[0]) && coordinates[0].length) {
        return containsNumber(coordinates[0]);
    }
    throw new Error('coordinates must only contain numbers');
}

/**
 * Enforce expectations about types of GeoJSON objects for Turf.
 *
 * @name geojsonType
 * @param {GeoJSON} value any GeoJSON object
 * @param {string} type expected GeoJSON type
 * @param {string} name name of calling function
 * @throws {Error} if value is not the expected type.
 */
function geojsonType(value, type, name) {
    if (!type || !name) throw new Error('type and name required');

    if (!value || value.type !== type) {
        throw new Error('Invalid input to ' + name + ': must be a ' + type + ', given ' + value.type);
    }
}

/**
 * Enforce expectations about types of {@link Feature} inputs for Turf.
 * Internally this uses {@link geojsonType} to judge geometry types.
 *
 * @name featureOf
 * @param {Feature} feature a feature with an expected geometry type
 * @param {string} type expected GeoJSON type
 * @param {string} name name of calling function
 * @throws {Error} error if value is not the expected type.
 */
function featureOf(feature, type, name) {
    if (!feature) throw new Error('No feature passed');
    if (!name) throw new Error('.featureOf() requires a name');
    if (!feature || feature.type !== 'Feature' || !feature.geometry) {
        throw new Error('Invalid input to ' + name + ', Feature with geometry required');
    }
    if (!feature.geometry || feature.geometry.type !== type) {
        throw new Error('Invalid input to ' + name + ': must be a ' + type + ', given ' + feature.geometry.type);
    }
}

/**
 * Enforce expectations about types of {@link FeatureCollection} inputs for Turf.
 * Internally this uses {@link geojsonType} to judge geometry types.
 *
 * @name collectionOf
 * @param {FeatureCollection} featureCollection a FeatureCollection for which features will be judged
 * @param {string} type expected GeoJSON type
 * @param {string} name name of calling function
 * @throws {Error} if value is not the expected type.
 */
function collectionOf(featureCollection, type, name) {
    if (!featureCollection) throw new Error('No featureCollection passed');
    if (!name) throw new Error('.collectionOf() requires a name');
    if (!featureCollection || featureCollection.type !== 'FeatureCollection') {
        throw new Error('Invalid input to ' + name + ', FeatureCollection required');
    }
    for (var i = 0; i < featureCollection.features.length; i++) {
        var feature = featureCollection.features[i];
        if (!feature || feature.type !== 'Feature' || !feature.geometry) {
            throw new Error('Invalid input to ' + name + ', Feature with geometry required');
        }
        if (!feature.geometry || feature.geometry.type !== type) {
            throw new Error('Invalid input to ' + name + ': must be a ' + type + ', given ' + feature.geometry.type);
        }
    }
}

/**
 * Get Geometry from Feature or Geometry Object
 *
 * @param {Feature|Geometry} geojson GeoJSON Feature or Geometry Object
 * @returns {Geometry|null} GeoJSON Geometry Object
 * @throws {Error} if geojson is not a Feature or Geometry Object
 * @example
 * var point = {
 *   "type": "Feature",
 *   "properties": {},
 *   "geometry": {
 *     "type": "Point",
 *     "coordinates": [110, 40]
 *   }
 * }
 * var geom = turf.getGeom(point)
 * //={"type": "Point", "coordinates": [110, 40]}
 */
function getGeom(geojson) {
    if (!geojson) throw new Error('geojson is required');
    if (geojson.geometry !== undefined) return geojson.geometry;
    if (geojson.coordinates || geojson.geometries) return geojson;
    throw new Error('geojson must be a valid Feature or Geometry Object');
}

/**
 * Get Geometry Type from Feature or Geometry Object
 *
 * @throws {Error} **DEPRECATED** in v5.0.0 in favor of getType
 */
function getGeomType() {
    throw new Error('invariant.getGeomType has been deprecated in v5.0 in favor of invariant.getType');
}

/**
 * Get GeoJSON object's type, Geometry type is prioritize.
 *
 * @param {GeoJSON} geojson GeoJSON object
 * @param {string} [name] name of the variable to display in error message
 * @returns {string} GeoJSON type
 * @example
 * var point = {
 *   "type": "Feature",
 *   "properties": {},
 *   "geometry": {
 *     "type": "Point",
 *     "coordinates": [110, 40]
 *   }
 * }
 * var geom = turf.getType(point)
 * //="Point"
 */
function getType(geojson, name) {
    if (!geojson) throw new Error((name || 'geojson') + ' is required');
    // GeoJSON Feature & GeometryCollection
    if (geojson.geometry && geojson.geometry.type) return geojson.geometry.type;
    // GeoJSON Geometry & FeatureCollection
    if (geojson.type) return geojson.type;
    throw new Error((name || 'geojson') + ' is invalid');
}



// CONCATENATED MODULE: ./node_modules/@turf/boolean-point-in-polygon/main.es.js
;

// http://en.wikipedia.org/wiki/Even%E2%80%93odd_rule
// modified from: https://github.com/substack/point-in-polygon/blob/master/index.js
// which was modified from http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html

/**
 * Takes a {@link Point} and a {@link Polygon} or {@link MultiPolygon} and determines if the point resides inside the polygon. The polygon can
 * be convex or concave. The function accounts for holes.
 *
 * @name booleanPointInPolygon
 * @param {Coord} point input point
 * @param {Feature<Polygon|MultiPolygon>} polygon input polygon or multipolygon
 * @param {Object} [options={}] Optional parameters
 * @param {boolean} [options.ignoreBoundary=false] True if polygon boundary should be ignored when determining if the point is inside the polygon otherwise false.
 * @returns {boolean} `true` if the Point is inside the Polygon; `false` if the Point is not inside the Polygon
 * @example
 * var pt = turf.point([-77, 44]);
 * var poly = turf.polygon([[
 *   [-81, 41],
 *   [-81, 47],
 *   [-72, 47],
 *   [-72, 41],
 *   [-81, 41]
 * ]]);
 *
 * turf.booleanPointInPolygon(pt, poly);
 * //= true
 */
function booleanPointInPolygon(point, polygon, options) {
    // Optional parameters
    options = options || {};
    if (typeof options !== 'object') throw new Error('options is invalid');
    var ignoreBoundary = options.ignoreBoundary;

    // validation
    if (!point) throw new Error('point is required');
    if (!polygon) throw new Error('polygon is required');

    var pt = getCoord(point);
    var polys = getCoords(polygon);
    var type = (polygon.geometry) ? polygon.geometry.type : polygon.type;
    var bbox = polygon.bbox;

    // Quick elimination if point is not inside bbox
    if (bbox && inBBox(pt, bbox) === false) return false;

    // normalize to multipolygon
    if (type === 'Polygon') polys = [polys];

    for (var i = 0, insidePoly = false; i < polys.length && !insidePoly; i++) {
        // check if it is in the outer ring first
        if (inRing(pt, polys[i][0], ignoreBoundary)) {
            var inHole = false;
            var k = 1;
            // check for the point in any of the holes
            while (k < polys[i].length && !inHole) {
                if (inRing(pt, polys[i][k], !ignoreBoundary)) {
                    inHole = true;
                }
                k++;
            }
            if (!inHole) insidePoly = true;
        }
    }
    return insidePoly;
}

/**
 * inRing
 *
 * @private
 * @param {Array<number>} pt [x,y]
 * @param {Array<Array<number>>} ring [[x,y], [x,y],..]
 * @param {boolean} ignoreBoundary ignoreBoundary
 * @returns {boolean} inRing
 */
function inRing(pt, ring, ignoreBoundary) {
    var isInside = false;
    if (ring[0][0] === ring[ring.length - 1][0] && ring[0][1] === ring[ring.length - 1][1]) ring = ring.slice(0, ring.length - 1);

    for (var i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        var xi = ring[i][0], yi = ring[i][1];
        var xj = ring[j][0], yj = ring[j][1];
        var onBoundary = (pt[1] * (xi - xj) + yi * (xj - pt[0]) + yj * (pt[0] - xi) === 0) &&
            ((xi - pt[0]) * (xj - pt[0]) <= 0) && ((yi - pt[1]) * (yj - pt[1]) <= 0);
        if (onBoundary) return !ignoreBoundary;
        var intersect = ((yi > pt[1]) !== (yj > pt[1])) &&
        (pt[0] < (xj - xi) * (pt[1] - yi) / (yj - yi) + xi);
        if (intersect) isInside = !isInside;
    }
    return isInside;
}

/**
 * inBBox
 *
 * @private
 * @param {Position} pt point [x,y]
 * @param {BBox} bbox BBox [west, south, east, north]
 * @returns {boolean} true/false if point is inside BBox
 */
function inBBox(pt, bbox) {
    return bbox[0] <= pt[0] &&
           bbox[1] <= pt[1] &&
           bbox[2] >= pt[0] &&
           bbox[3] >= pt[1];
}

/* harmony default export */ const boolean_point_in_polygon_main_es = (booleanPointInPolygon);

// CONCATENATED MODULE: ./node_modules/@turf/meta/main.es.js
;

/**
 * Callback for coordEach
 *
 * @callback coordEachCallback
 * @param {Array<number>} currentCoord The current coordinate being processed.
 * @param {number} coordIndex The current index of the coordinate being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 */

/**
 * Iterate over coordinates in any GeoJSON object, similar to Array.forEach()
 *
 * @name coordEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentCoord, coordIndex, featureIndex, multiFeatureIndex)
 * @param {boolean} [excludeWrapCoord=false] whether or not to include the final coordinate of LinearRings that wraps the ring in its iteration.
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {"foo": "bar"}),
 *   turf.point([36, 53], {"hello": "world"})
 * ]);
 *
 * turf.coordEach(features, function (currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=currentCoord
 *   //=coordIndex
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 * });
 */
function coordEach(geojson, callback, excludeWrapCoord) {
    // Handles null Geometry -- Skips this GeoJSON
    if (geojson === null) return;
    var j, k, l, geometry, stopG, coords,
        geometryMaybeCollection,
        wrapShrink = 0,
        coordIndex = 0,
        isGeometryCollection,
        type = geojson.type,
        isFeatureCollection = type === 'FeatureCollection',
        isFeature = type === 'Feature',
        stop = isFeatureCollection ? geojson.features.length : 1;

    // This logic may look a little weird. The reason why it is that way
    // is because it's trying to be fast. GeoJSON supports multiple kinds
    // of objects at its root: FeatureCollection, Features, Geometries.
    // This function has the responsibility of handling all of them, and that
    // means that some of the `for` loops you see below actually just don't apply
    // to certain inputs. For instance, if you give this just a
    // Point geometry, then both loops are short-circuited and all we do
    // is gradually rename the input until it's called 'geometry'.
    //
    // This also aims to allocate as few resources as possible: just a
    // few numbers and booleans, rather than any temporary arrays as would
    // be required with the normalization approach.
    for (var featureIndex = 0; featureIndex < stop; featureIndex++) {
        geometryMaybeCollection = (isFeatureCollection ? geojson.features[featureIndex].geometry :
            (isFeature ? geojson.geometry : geojson));
        isGeometryCollection = (geometryMaybeCollection) ? geometryMaybeCollection.type === 'GeometryCollection' : false;
        stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;

        for (var geomIndex = 0; geomIndex < stopG; geomIndex++) {
            var multiFeatureIndex = 0;
            var geometryIndex = 0;
            geometry = isGeometryCollection ?
                geometryMaybeCollection.geometries[geomIndex] : geometryMaybeCollection;

            // Handles null Geometry -- Skips this geometry
            if (geometry === null) continue;
            coords = geometry.coordinates;
            var geomType = geometry.type;

            wrapShrink = (excludeWrapCoord && (geomType === 'Polygon' || geomType === 'MultiPolygon')) ? 1 : 0;

            switch (geomType) {
            case null:
                break;
            case 'Point':
                callback(coords, coordIndex, featureIndex, multiFeatureIndex, geometryIndex);
                coordIndex++;
                multiFeatureIndex++;
                break;
            case 'LineString':
            case 'MultiPoint':
                for (j = 0; j < coords.length; j++) {
                    callback(coords[j], coordIndex, featureIndex, multiFeatureIndex, geometryIndex);
                    coordIndex++;
                    if (geomType === 'MultiPoint') multiFeatureIndex++;
                }
                if (geomType === 'LineString') multiFeatureIndex++;
                break;
            case 'Polygon':
            case 'MultiLineString':
                for (j = 0; j < coords.length; j++) {
                    for (k = 0; k < coords[j].length - wrapShrink; k++) {
                        callback(coords[j][k], coordIndex, featureIndex, multiFeatureIndex, geometryIndex);
                        coordIndex++;
                    }
                    if (geomType === 'MultiLineString') multiFeatureIndex++;
                    if (geomType === 'Polygon') geometryIndex++;
                }
                if (geomType === 'Polygon') multiFeatureIndex++;
                break;
            case 'MultiPolygon':
                for (j = 0; j < coords.length; j++) {
                    if (geomType === 'MultiPolygon') geometryIndex = 0;
                    for (k = 0; k < coords[j].length; k++) {
                        for (l = 0; l < coords[j][k].length - wrapShrink; l++) {
                            callback(coords[j][k][l], coordIndex, featureIndex, multiFeatureIndex, geometryIndex);
                            coordIndex++;
                        }
                        geometryIndex++;
                    }
                    multiFeatureIndex++;
                }
                break;
            case 'GeometryCollection':
                for (j = 0; j < geometry.geometries.length; j++)
                    coordEach(geometry.geometries[j], callback, excludeWrapCoord);
                break;
            default:
                throw new Error('Unknown Geometry Type');
            }
        }
    }
}

/**
 * Callback for coordReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback coordReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Array<number>} currentCoord The current coordinate being processed.
 * @param {number} coordIndex The current index of the coordinate being processed.
 * Starts at index 0, if an initialValue is provided, and at index 1 otherwise.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 */

/**
 * Reduce coordinates in any GeoJSON object, similar to Array.reduce()
 *
 * @name coordReduce
 * @param {FeatureCollection|Geometry|Feature} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentCoord, coordIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @param {boolean} [excludeWrapCoord=false] whether or not to include the final coordinate of LinearRings that wraps the ring in its iteration.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {"foo": "bar"}),
 *   turf.point([36, 53], {"hello": "world"})
 * ]);
 *
 * turf.coordReduce(features, function (previousValue, currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=previousValue
 *   //=currentCoord
 *   //=coordIndex
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 *   return currentCoord;
 * });
 */
function coordReduce(geojson, callback, initialValue, excludeWrapCoord) {
    var previousValue = initialValue;
    coordEach(geojson, function (currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
        if (coordIndex === 0 && initialValue === undefined) previousValue = currentCoord;
        else previousValue = callback(previousValue, currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex);
    }, excludeWrapCoord);
    return previousValue;
}

/**
 * Callback for propEach
 *
 * @callback propEachCallback
 * @param {Object} currentProperties The current Properties being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */

/**
 * Iterate over properties in any GeoJSON object, similar to Array.forEach()
 *
 * @name propEach
 * @param {FeatureCollection|Feature} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentProperties, featureIndex)
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.propEach(features, function (currentProperties, featureIndex) {
 *   //=currentProperties
 *   //=featureIndex
 * });
 */
function propEach(geojson, callback) {
    var i;
    switch (geojson.type) {
    case 'FeatureCollection':
        for (i = 0; i < geojson.features.length; i++) {
            callback(geojson.features[i].properties, i);
        }
        break;
    case 'Feature':
        callback(geojson.properties, 0);
        break;
    }
}


/**
 * Callback for propReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback propReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {*} currentProperties The current Properties being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */

/**
 * Reduce properties in any GeoJSON object into a single value,
 * similar to how Array.reduce works. However, in this case we lazily run
 * the reduction, so an array of all properties is unnecessary.
 *
 * @name propReduce
 * @param {FeatureCollection|Feature} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentProperties, featureIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.propReduce(features, function (previousValue, currentProperties, featureIndex) {
 *   //=previousValue
 *   //=currentProperties
 *   //=featureIndex
 *   return currentProperties
 * });
 */
function propReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    propEach(geojson, function (currentProperties, featureIndex) {
        if (featureIndex === 0 && initialValue === undefined) previousValue = currentProperties;
        else previousValue = callback(previousValue, currentProperties, featureIndex);
    });
    return previousValue;
}

/**
 * Callback for featureEach
 *
 * @callback featureEachCallback
 * @param {Feature<any>} currentFeature The current Feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */

/**
 * Iterate over features in any GeoJSON object, similar to
 * Array.forEach.
 *
 * @name featureEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentFeature, featureIndex)
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {foo: 'bar'}),
 *   turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.featureEach(features, function (currentFeature, featureIndex) {
 *   //=currentFeature
 *   //=featureIndex
 * });
 */
function featureEach(geojson, callback) {
    if (geojson.type === 'Feature') {
        callback(geojson, 0);
    } else if (geojson.type === 'FeatureCollection') {
        for (var i = 0; i < geojson.features.length; i++) {
            callback(geojson.features[i], i);
        }
    }
}

/**
 * Callback for featureReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback featureReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature} currentFeature The current Feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */

/**
 * Reduce features in any GeoJSON object, similar to Array.reduce().
 *
 * @name featureReduce
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentFeature, featureIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {"foo": "bar"}),
 *   turf.point([36, 53], {"hello": "world"})
 * ]);
 *
 * turf.featureReduce(features, function (previousValue, currentFeature, featureIndex) {
 *   //=previousValue
 *   //=currentFeature
 *   //=featureIndex
 *   return currentFeature
 * });
 */
function featureReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    featureEach(geojson, function (currentFeature, featureIndex) {
        if (featureIndex === 0 && initialValue === undefined) previousValue = currentFeature;
        else previousValue = callback(previousValue, currentFeature, featureIndex);
    });
    return previousValue;
}

/**
 * Get all coordinates from any GeoJSON object.
 *
 * @name coordAll
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @returns {Array<Array<number>>} coordinate position array
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {foo: 'bar'}),
 *   turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * var coords = turf.coordAll(features);
 * //= [[26, 37], [36, 53]]
 */
function coordAll(geojson) {
    var coords = [];
    coordEach(geojson, function (coord) {
        coords.push(coord);
    });
    return coords;
}

/**
 * Callback for geomEach
 *
 * @callback geomEachCallback
 * @param {Geometry} currentGeometry The current Geometry being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {Object} featureProperties The current Feature Properties being processed.
 * @param {Array<number>} featureBBox The current Feature BBox being processed.
 * @param {number|string} featureId The current Feature Id being processed.
 */

/**
 * Iterate over each geometry in any GeoJSON object, similar to Array.forEach()
 *
 * @name geomEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentGeometry, featureIndex, featureProperties, featureBBox, featureId)
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.geomEach(features, function (currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
 *   //=currentGeometry
 *   //=featureIndex
 *   //=featureProperties
 *   //=featureBBox
 *   //=featureId
 * });
 */
function geomEach(geojson, callback) {
    var i, j, g, geometry, stopG,
        geometryMaybeCollection,
        isGeometryCollection,
        featureProperties,
        featureBBox,
        featureId,
        featureIndex = 0,
        isFeatureCollection = geojson.type === 'FeatureCollection',
        isFeature = geojson.type === 'Feature',
        stop = isFeatureCollection ? geojson.features.length : 1;

    // This logic may look a little weird. The reason why it is that way
    // is because it's trying to be fast. GeoJSON supports multiple kinds
    // of objects at its root: FeatureCollection, Features, Geometries.
    // This function has the responsibility of handling all of them, and that
    // means that some of the `for` loops you see below actually just don't apply
    // to certain inputs. For instance, if you give this just a
    // Point geometry, then both loops are short-circuited and all we do
    // is gradually rename the input until it's called 'geometry'.
    //
    // This also aims to allocate as few resources as possible: just a
    // few numbers and booleans, rather than any temporary arrays as would
    // be required with the normalization approach.
    for (i = 0; i < stop; i++) {

        geometryMaybeCollection = (isFeatureCollection ? geojson.features[i].geometry :
            (isFeature ? geojson.geometry : geojson));
        featureProperties = (isFeatureCollection ? geojson.features[i].properties :
            (isFeature ? geojson.properties : {}));
        featureBBox = (isFeatureCollection ? geojson.features[i].bbox :
            (isFeature ? geojson.bbox : undefined));
        featureId = (isFeatureCollection ? geojson.features[i].id :
            (isFeature ? geojson.id : undefined));
        isGeometryCollection = (geometryMaybeCollection) ? geometryMaybeCollection.type === 'GeometryCollection' : false;
        stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;

        for (g = 0; g < stopG; g++) {
            geometry = isGeometryCollection ?
                geometryMaybeCollection.geometries[g] : geometryMaybeCollection;

            // Handle null Geometry
            if (geometry === null) {
                callback(null, featureIndex, featureProperties, featureBBox, featureId);
                continue;
            }
            switch (geometry.type) {
            case 'Point':
            case 'LineString':
            case 'MultiPoint':
            case 'Polygon':
            case 'MultiLineString':
            case 'MultiPolygon': {
                callback(geometry, featureIndex, featureProperties, featureBBox, featureId);
                break;
            }
            case 'GeometryCollection': {
                for (j = 0; j < geometry.geometries.length; j++) {
                    callback(geometry.geometries[j], featureIndex, featureProperties, featureBBox, featureId);
                }
                break;
            }
            default:
                throw new Error('Unknown Geometry Type');
            }
        }
        // Only increase `featureIndex` per each feature
        featureIndex++;
    }
}

/**
 * Callback for geomReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback geomReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Geometry} currentGeometry The current Geometry being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {Object} featureProperties The current Feature Properties being processed.
 * @param {Array<number>} featureBBox The current Feature BBox being processed.
 * @param {number|string} featureId The current Feature Id being processed.
 */

/**
 * Reduce geometry in any GeoJSON object, similar to Array.reduce().
 *
 * @name geomReduce
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.geomReduce(features, function (previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
 *   //=previousValue
 *   //=currentGeometry
 *   //=featureIndex
 *   //=featureProperties
 *   //=featureBBox
 *   //=featureId
 *   return currentGeometry
 * });
 */
function geomReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    geomEach(geojson, function (currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
        if (featureIndex === 0 && initialValue === undefined) previousValue = currentGeometry;
        else previousValue = callback(previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId);
    });
    return previousValue;
}

/**
 * Callback for flattenEach
 *
 * @callback flattenEachCallback
 * @param {Feature} currentFeature The current flattened feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 */

/**
 * Iterate over flattened features in any GeoJSON object, similar to
 * Array.forEach.
 *
 * @name flattenEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentFeature, featureIndex, multiFeatureIndex)
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.multiPoint([[40, 30], [36, 53]], {hello: 'world'})
 * ]);
 *
 * turf.flattenEach(features, function (currentFeature, featureIndex, multiFeatureIndex) {
 *   //=currentFeature
 *   //=featureIndex
 *   //=multiFeatureIndex
 * });
 */
function flattenEach(geojson, callback) {
    geomEach(geojson, function (geometry, featureIndex, properties, bbox, id) {
        // Callback for single geometry
        var type = (geometry === null) ? null : geometry.type;
        switch (type) {
        case null:
        case 'Point':
        case 'LineString':
        case 'Polygon':
            callback(feature(geometry, properties, {bbox: bbox, id: id}), featureIndex, 0);
            return;
        }

        var geomType;

        // Callback for multi-geometry
        switch (type) {
        case 'MultiPoint':
            geomType = 'Point';
            break;
        case 'MultiLineString':
            geomType = 'LineString';
            break;
        case 'MultiPolygon':
            geomType = 'Polygon';
            break;
        }

        geometry.coordinates.forEach(function (coordinate, multiFeatureIndex) {
            var geom = {
                type: geomType,
                coordinates: coordinate
            };
            callback(feature(geom, properties), featureIndex, multiFeatureIndex);
        });

    });
}

/**
 * Callback for flattenReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback flattenReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature} currentFeature The current Feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 */

/**
 * Reduce flattened features in any GeoJSON object, similar to Array.reduce().
 *
 * @name flattenReduce
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentFeature, featureIndex, multiFeatureIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.multiPoint([[40, 30], [36, 53]], {hello: 'world'})
 * ]);
 *
 * turf.flattenReduce(features, function (previousValue, currentFeature, featureIndex, multiFeatureIndex) {
 *   //=previousValue
 *   //=currentFeature
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   return currentFeature
 * });
 */
function flattenReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    flattenEach(geojson, function (currentFeature, featureIndex, multiFeatureIndex) {
        if (featureIndex === 0 && multiFeatureIndex === 0 && initialValue === undefined) previousValue = currentFeature;
        else previousValue = callback(previousValue, currentFeature, featureIndex, multiFeatureIndex);
    });
    return previousValue;
}

/**
 * Callback for segmentEach
 *
 * @callback segmentEachCallback
 * @param {Feature<LineString>} currentSegment The current Segment being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 * @param {number} segmentIndex The current index of the Segment being processed.
 * @returns {void}
 */

/**
 * Iterate over 2-vertex line segment in any GeoJSON object, similar to Array.forEach()
 * (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON
 * @param {Function} callback a method that takes (currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex)
 * @returns {void}
 * @example
 * var polygon = turf.polygon([[[-50, 5], [-40, -10], [-50, -10], [-40, 5], [-50, 5]]]);
 *
 * // Iterate over GeoJSON by 2-vertex segments
 * turf.segmentEach(polygon, function (currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
 *   //=currentSegment
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 *   //=segmentIndex
 * });
 *
 * // Calculate the total number of segments
 * var total = 0;
 * turf.segmentEach(polygon, function () {
 *     total++;
 * });
 */
function segmentEach(geojson, callback) {
    flattenEach(geojson, function (feature$$1, featureIndex, multiFeatureIndex) {
        var segmentIndex = 0;

        // Exclude null Geometries
        if (!feature$$1.geometry) return;
        // (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
        var type = feature$$1.geometry.type;
        if (type === 'Point' || type === 'MultiPoint') return;

        // Generate 2-vertex line segments
        coordReduce(feature$$1, function (previousCoords, currentCoord, coordIndex, featureIndexCoord, mutliPartIndexCoord, geometryIndex) {
            var currentSegment = lineString([previousCoords, currentCoord], feature$$1.properties);
            callback(currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex);
            segmentIndex++;
            return currentCoord;
        });
    });
}

/**
 * Callback for segmentReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback segmentReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature<LineString>} currentSegment The current Segment being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 * @param {number} segmentIndex The current index of the Segment being processed.
 */

/**
 * Reduce 2-vertex line segment in any GeoJSON object, similar to Array.reduce()
 * (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON
 * @param {Function} callback a method that takes (previousValue, currentSegment, currentIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {void}
 * @example
 * var polygon = turf.polygon([[[-50, 5], [-40, -10], [-50, -10], [-40, 5], [-50, 5]]]);
 *
 * // Iterate over GeoJSON by 2-vertex segments
 * turf.segmentReduce(polygon, function (previousSegment, currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
 *   //= previousSegment
 *   //= currentSegment
 *   //= featureIndex
 *   //= multiFeatureIndex
 *   //= geometryIndex
 *   //= segmentInex
 *   return currentSegment
 * });
 *
 * // Calculate the total number of segments
 * var initialValue = 0
 * var total = turf.segmentReduce(polygon, function (previousValue) {
 *     previousValue++;
 *     return previousValue;
 * }, initialValue);
 */
function main_es_segmentReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    var started = false;
    segmentEach(geojson, function (currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
        if (started === false && initialValue === undefined) previousValue = currentSegment;
        else previousValue = callback(previousValue, currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex);
        started = true;
    });
    return previousValue;
}

/**
 * Callback for lineEach
 *
 * @callback lineEachCallback
 * @param {Feature<LineString>} currentLine The current LineString|LinearRing being processed
 * @param {number} featureIndex The current index of the Feature being processed
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed
 * @param {number} geometryIndex The current index of the Geometry being processed
 */

/**
 * Iterate over line or ring coordinates in LineString, Polygon, MultiLineString, MultiPolygon Features or Geometries,
 * similar to Array.forEach.
 *
 * @name lineEach
 * @param {Geometry|Feature<LineString|Polygon|MultiLineString|MultiPolygon>} geojson object
 * @param {Function} callback a method that takes (currentLine, featureIndex, multiFeatureIndex, geometryIndex)
 * @example
 * var multiLine = turf.multiLineString([
 *   [[26, 37], [35, 45]],
 *   [[36, 53], [38, 50], [41, 55]]
 * ]);
 *
 * turf.lineEach(multiLine, function (currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=currentLine
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 * });
 */
function lineEach(geojson, callback) {
    // validation
    if (!geojson) throw new Error('geojson is required');

    flattenEach(geojson, function (feature$$1, featureIndex, multiFeatureIndex) {
        if (feature$$1.geometry === null) return;
        var type = feature$$1.geometry.type;
        var coords = feature$$1.geometry.coordinates;
        switch (type) {
        case 'LineString':
            callback(feature$$1, featureIndex, multiFeatureIndex, 0, 0);
            break;
        case 'Polygon':
            for (var geometryIndex = 0; geometryIndex < coords.length; geometryIndex++) {
                callback(lineString(coords[geometryIndex], feature$$1.properties), featureIndex, multiFeatureIndex, geometryIndex);
            }
            break;
        }
    });
}

/**
 * Callback for lineReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback lineReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature<LineString>} currentLine The current LineString|LinearRing being processed.
 * @param {number} featureIndex The current index of the Feature being processed
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed
 * @param {number} geometryIndex The current index of the Geometry being processed
 */

/**
 * Reduce features in any GeoJSON object, similar to Array.reduce().
 *
 * @name lineReduce
 * @param {Geometry|Feature<LineString|Polygon|MultiLineString|MultiPolygon>} geojson object
 * @param {Function} callback a method that takes (previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var multiPoly = turf.multiPolygon([
 *   turf.polygon([[[12,48],[2,41],[24,38],[12,48]], [[9,44],[13,41],[13,45],[9,44]]]),
 *   turf.polygon([[[5, 5], [0, 0], [2, 2], [4, 4], [5, 5]]])
 * ]);
 *
 * turf.lineReduce(multiPoly, function (previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=previousValue
 *   //=currentLine
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 *   return currentLine
 * });
 */
function lineReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    lineEach(geojson, function (currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
        if (featureIndex === 0 && initialValue === undefined) previousValue = currentLine;
        else previousValue = callback(previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex);
    });
    return previousValue;
}



// CONCATENATED MODULE: ./node_modules/geojson-rbush/quickselect.js
function quickselect(arr, k, left, right, compare) {
    quickselectStep(arr, k, left || 0, right || (arr.length - 1), compare || defaultCompare);
}

function quickselectStep(arr, k, left, right, compare) {

    while (right > left) {
        if (right - left > 600) {
            var n = right - left + 1;
            var m = k - left + 1;
            var z = Math.log(n);
            var s = 0.5 * Math.exp(2 * z / 3);
            var sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
            var newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
            var newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
            quickselectStep(arr, k, newLeft, newRight, compare);
        }

        var t = arr[k];
        var i = left;
        var j = right;

        swap(arr, left, k);
        if (compare(arr[right], t) > 0) swap(arr, left, right);

        while (i < j) {
            swap(arr, i, j);
            i++;
            j--;
            while (compare(arr[i], t) < 0) i++;
            while (compare(arr[j], t) > 0) j--;
        }

        if (compare(arr[left], t) === 0) swap(arr, left, j);
        else {
            j++;
            swap(arr, j, right);
        }

        if (j <= k) left = j + 1;
        if (k <= j) right = j - 1;
    }
}

function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}

/* harmony default export */ const geojson_rbush_quickselect = (quickselect);

// CONCATENATED MODULE: ./node_modules/geojson-rbush/rbush.js
;

function rbush(maxEntries, format) {
    if (!(this instanceof rbush)) return new rbush(maxEntries, format);

    // max entries in a node is 9 by default; min node fill is 40% for best performance
    this._maxEntries = Math.max(4, maxEntries || 9);
    this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4));

    if (format) {
        this._initFormat(format);
    }

    this.clear();
}

rbush.prototype = {

    all: function () {
        return this._all(this.data, []);
    },

    search: function (bbox) {

        var node = this.data,
            result = [],
            toBBox = this.toBBox;

        if (!intersects(bbox, node)) return result;

        var nodesToSearch = [],
            i, len, child, childBBox;

        while (node) {
            for (i = 0, len = node.children.length; i < len; i++) {

                child = node.children[i];
                childBBox = node.leaf ? toBBox(child) : child;

                if (intersects(bbox, childBBox)) {
                    if (node.leaf) result.push(child);
                    else if (contains(bbox, childBBox)) this._all(child, result);
                    else nodesToSearch.push(child);
                }
            }
            node = nodesToSearch.pop();
        }

        return result;
    },

    collides: function (bbox) {

        var node = this.data,
            toBBox = this.toBBox;

        if (!intersects(bbox, node)) return false;

        var nodesToSearch = [],
            i, len, child, childBBox;

        while (node) {
            for (i = 0, len = node.children.length; i < len; i++) {

                child = node.children[i];
                childBBox = node.leaf ? toBBox(child) : child;

                if (intersects(bbox, childBBox)) {
                    if (node.leaf || contains(bbox, childBBox)) return true;
                    nodesToSearch.push(child);
                }
            }
            node = nodesToSearch.pop();
        }

        return false;
    },

    load: function (data) {
        if (!(data && data.length)) return this;

        if (data.length < this._minEntries) {
            for (var i = 0, len = data.length; i < len; i++) {
                this.insert(data[i]);
            }
            return this;
        }

        // recursively build the tree with the given data from scratch using OMT algorithm
        var node = this._build(data.slice(), 0, data.length - 1, 0);

        if (!this.data.children.length) {
            // save as is if tree is empty
            this.data = node;

        } else if (this.data.height === node.height) {
            // split root if trees have the same height
            this._splitRoot(this.data, node);

        } else {
            if (this.data.height < node.height) {
                // swap trees if inserted one is bigger
                var tmpNode = this.data;
                this.data = node;
                node = tmpNode;
            }

            // insert the small tree into the large tree at appropriate level
            this._insert(node, this.data.height - node.height - 1, true);
        }

        return this;
    },

    insert: function (item) {
        if (item) this._insert(item, this.data.height - 1);
        return this;
    },

    clear: function () {
        this.data = createNode([]);
        return this;
    },

    remove: function (item, equalsFn) {
        if (!item) return this;

        var node = this.data,
            bbox = this.toBBox(item),
            path = [],
            indexes = [],
            i, parent, index, goingUp;

        // depth-first iterative tree traversal
        while (node || path.length) {

            if (!node) { // go up
                node = path.pop();
                parent = path[path.length - 1];
                i = indexes.pop();
                goingUp = true;
            }

            if (node.leaf) { // check current node
                index = findItem(item, node.children, equalsFn);

                if (index !== -1) {
                    // item found, remove the item and condense tree upwards
                    node.children.splice(index, 1);
                    path.push(node);
                    this._condense(path);
                    return this;
                }
            }

            if (!goingUp && !node.leaf && contains(node, bbox)) { // go down
                path.push(node);
                indexes.push(i);
                i = 0;
                parent = node;
                node = node.children[0];

            } else if (parent) { // go right
                i++;
                node = parent.children[i];
                goingUp = false;

            } else node = null; // nothing found
        }

        return this;
    },

    toBBox: function (item) { return item; },

    compareMinX: compareNodeMinX,
    compareMinY: compareNodeMinY,

    toJSON: function () { return this.data; },

    fromJSON: function (data) {
        this.data = data;
        return this;
    },

    _all: function (node, result) {
        var nodesToSearch = [];
        while (node) {
            if (node.leaf) result.push.apply(result, node.children);
            else nodesToSearch.push.apply(nodesToSearch, node.children);

            node = nodesToSearch.pop();
        }
        return result;
    },

    _build: function (items, left, right, height) {

        var N = right - left + 1,
            M = this._maxEntries,
            node;

        if (N <= M) {
            // reached leaf level; return leaf
            node = createNode(items.slice(left, right + 1));
            calcBBox(node, this.toBBox);
            return node;
        }

        if (!height) {
            // target height of the bulk-loaded tree
            height = Math.ceil(Math.log(N) / Math.log(M));

            // target number of root entries to maximize storage utilization
            M = Math.ceil(N / Math.pow(M, height - 1));
        }

        node = createNode([]);
        node.leaf = false;
        node.height = height;

        // split the items into M mostly square tiles

        var N2 = Math.ceil(N / M),
            N1 = N2 * Math.ceil(Math.sqrt(M)),
            i, j, right2, right3;

        multiSelect(items, left, right, N1, this.compareMinX);

        for (i = left; i <= right; i += N1) {

            right2 = Math.min(i + N1 - 1, right);

            multiSelect(items, i, right2, N2, this.compareMinY);

            for (j = i; j <= right2; j += N2) {

                right3 = Math.min(j + N2 - 1, right2);

                // pack each entry recursively
                node.children.push(this._build(items, j, right3, height - 1));
            }
        }

        calcBBox(node, this.toBBox);

        return node;
    },

    _chooseSubtree: function (bbox, node, level, path) {

        var i, len, child, targetNode, area, enlargement, minArea, minEnlargement;

        while (true) {
            path.push(node);

            if (node.leaf || path.length - 1 === level) break;

            minArea = minEnlargement = Infinity;

            for (i = 0, len = node.children.length; i < len; i++) {
                child = node.children[i];
                area = bboxArea(child);
                enlargement = enlargedArea(bbox, child) - area;

                // choose entry with the least area enlargement
                if (enlargement < minEnlargement) {
                    minEnlargement = enlargement;
                    minArea = area < minArea ? area : minArea;
                    targetNode = child;

                } else if (enlargement === minEnlargement) {
                    // otherwise choose one with the smallest area
                    if (area < minArea) {
                        minArea = area;
                        targetNode = child;
                    }
                }
            }

            node = targetNode || node.children[0];
        }

        return node;
    },

    _insert: function (item, level, isNode) {

        var toBBox = this.toBBox,
            bbox = isNode ? item : toBBox(item),
            insertPath = [];

        // find the best node for accommodating the item, saving all nodes along the path too
        var node = this._chooseSubtree(bbox, this.data, level, insertPath);

        // put the item into the node
        node.children.push(item);
        extend(node, bbox);

        // split on node overflow; propagate upwards if necessary
        while (level >= 0) {
            if (insertPath[level].children.length > this._maxEntries) {
                this._split(insertPath, level);
                level--;
            } else break;
        }

        // adjust bboxes along the insertion path
        this._adjustParentBBoxes(bbox, insertPath, level);
    },

    // split overflowed node into two
    _split: function (insertPath, level) {

        var node = insertPath[level],
            M = node.children.length,
            m = this._minEntries;

        this._chooseSplitAxis(node, m, M);

        var splitIndex = this._chooseSplitIndex(node, m, M);

        var newNode = createNode(node.children.splice(splitIndex, node.children.length - splitIndex));
        newNode.height = node.height;
        newNode.leaf = node.leaf;

        calcBBox(node, this.toBBox);
        calcBBox(newNode, this.toBBox);

        if (level) insertPath[level - 1].children.push(newNode);
        else this._splitRoot(node, newNode);
    },

    _splitRoot: function (node, newNode) {
        // split root node
        this.data = createNode([node, newNode]);
        this.data.height = node.height + 1;
        this.data.leaf = false;
        calcBBox(this.data, this.toBBox);
    },

    _chooseSplitIndex: function (node, m, M) {

        var i, bbox1, bbox2, overlap, area, minOverlap, minArea, index;

        minOverlap = minArea = Infinity;

        for (i = m; i <= M - m; i++) {
            bbox1 = distBBox(node, 0, i, this.toBBox);
            bbox2 = distBBox(node, i, M, this.toBBox);

            overlap = intersectionArea(bbox1, bbox2);
            area = bboxArea(bbox1) + bboxArea(bbox2);

            // choose distribution with minimum overlap
            if (overlap < minOverlap) {
                minOverlap = overlap;
                index = i;

                minArea = area < minArea ? area : minArea;

            } else if (overlap === minOverlap) {
                // otherwise choose distribution with minimum area
                if (area < minArea) {
                    minArea = area;
                    index = i;
                }
            }
        }

        return index;
    },

    // sorts node children by the best axis for split
    _chooseSplitAxis: function (node, m, M) {

        var compareMinX = node.leaf ? this.compareMinX : compareNodeMinX,
            compareMinY = node.leaf ? this.compareMinY : compareNodeMinY,
            xMargin = this._allDistMargin(node, m, M, compareMinX),
            yMargin = this._allDistMargin(node, m, M, compareMinY);

        // if total distributions margin value is minimal for x, sort by minX,
        // otherwise it's already sorted by minY
        if (xMargin < yMargin) node.children.sort(compareMinX);
    },

    // total margin of all possible split distributions where each node is at least m full
    _allDistMargin: function (node, m, M, compare) {

        node.children.sort(compare);

        var toBBox = this.toBBox,
            leftBBox = distBBox(node, 0, m, toBBox),
            rightBBox = distBBox(node, M - m, M, toBBox),
            margin = bboxMargin(leftBBox) + bboxMargin(rightBBox),
            i, child;

        for (i = m; i < M - m; i++) {
            child = node.children[i];
            extend(leftBBox, node.leaf ? toBBox(child) : child);
            margin += bboxMargin(leftBBox);
        }

        for (i = M - m - 1; i >= m; i--) {
            child = node.children[i];
            extend(rightBBox, node.leaf ? toBBox(child) : child);
            margin += bboxMargin(rightBBox);
        }

        return margin;
    },

    _adjustParentBBoxes: function (bbox, path, level) {
        // adjust bboxes along the given tree path
        for (var i = level; i >= 0; i--) {
            extend(path[i], bbox);
        }
    },

    _condense: function (path) {
        // go through the path, removing empty nodes and updating bboxes
        for (var i = path.length - 1, siblings; i >= 0; i--) {
            if (path[i].children.length === 0) {
                if (i > 0) {
                    siblings = path[i - 1].children;
                    siblings.splice(siblings.indexOf(path[i]), 1);

                } else this.clear();

            } else calcBBox(path[i], this.toBBox);
        }
    },

    _initFormat: function (format) {
        // data format (minX, minY, maxX, maxY accessors)

        // uses eval-type function compilation instead of just accepting a toBBox function
        // because the algorithms are very sensitive to sorting functions performance,
        // so they should be dead simple and without inner calls

        var compareArr = ['return a', ' - b', ';'];

        this.compareMinX = new Function('a', 'b', compareArr.join(format[0]));
        this.compareMinY = new Function('a', 'b', compareArr.join(format[1]));

        this.toBBox = new Function('a',
            'return {minX: a' + format[0] +
            ', minY: a' + format[1] +
            ', maxX: a' + format[2] +
            ', maxY: a' + format[3] + '};');
    }
};

function findItem(item, items, equalsFn) {
    if (!equalsFn) return items.indexOf(item);

    for (var i = 0; i < items.length; i++) {
        if (equalsFn(item, items[i])) return i;
    }
    return -1;
}

// calculate node's bbox from bboxes of its children
function calcBBox(node, toBBox) {
    distBBox(node, 0, node.children.length, toBBox, node);
}

// min bounding rectangle of node children from k to p-1
function distBBox(node, k, p, toBBox, destNode) {
    if (!destNode) destNode = createNode(null);
    destNode.minX = Infinity;
    destNode.minY = Infinity;
    destNode.maxX = -Infinity;
    destNode.maxY = -Infinity;

    for (var i = k, child; i < p; i++) {
        child = node.children[i];
        extend(destNode, node.leaf ? toBBox(child) : child);
    }

    return destNode;
}

function extend(a, b) {
    a.minX = Math.min(a.minX, b.minX);
    a.minY = Math.min(a.minY, b.minY);
    a.maxX = Math.max(a.maxX, b.maxX);
    a.maxY = Math.max(a.maxY, b.maxY);
    return a;
}

function compareNodeMinX(a, b) { return a.minX - b.minX; }
function compareNodeMinY(a, b) { return a.minY - b.minY; }

function bboxArea(a)   { return (a.maxX - a.minX) * (a.maxY - a.minY); }
function bboxMargin(a) { return (a.maxX - a.minX) + (a.maxY - a.minY); }

function enlargedArea(a, b) {
    return (Math.max(b.maxX, a.maxX) - Math.min(b.minX, a.minX)) *
           (Math.max(b.maxY, a.maxY) - Math.min(b.minY, a.minY));
}

function intersectionArea(a, b) {
    var minX = Math.max(a.minX, b.minX),
        minY = Math.max(a.minY, b.minY),
        maxX = Math.min(a.maxX, b.maxX),
        maxY = Math.min(a.maxY, b.maxY);

    return Math.max(0, maxX - minX) *
           Math.max(0, maxY - minY);
}

function contains(a, b) {
    return a.minX <= b.minX &&
           a.minY <= b.minY &&
           b.maxX <= a.maxX &&
           b.maxY <= a.maxY;
}

function intersects(a, b) {
    return b.minX <= a.maxX &&
           b.minY <= a.maxY &&
           b.maxX >= a.minX &&
           b.maxY >= a.minY;
}

function createNode(children) {
    return {
        children: children,
        height: 1,
        leaf: true,
        minX: Infinity,
        minY: Infinity,
        maxX: -Infinity,
        maxY: -Infinity
    };
}

// sort an array so that items come in groups of n unsorted items, with groups sorted between each other;
// combines selection algorithm with binary divide & conquer approach

function multiSelect(arr, left, right, n, compare) {
    var stack = [left, right],
        mid;

    while (stack.length) {
        right = stack.pop();
        left = stack.pop();

        if (right - left <= n) continue;

        mid = left + Math.ceil((right - left) / n / 2) * n;
        geojson_rbush_quickselect(arr, mid, left, right, compare);

        stack.push(left, mid, mid, right);
    }
}

/* harmony default export */ const geojson_rbush_rbush = (rbush);

// CONCATENATED MODULE: ./node_modules/geojson-rbush/index.js
;


/**
 * GeoJSON implementation of [RBush](https://github.com/mourner/rbush#rbush) spatial index.
 *
 * @name rbush
 * @param {number} [maxEntries=9] defines the maximum number of entries in a tree node. 9 (used by default) is a
 * reasonable choice for most applications. Higher value means faster insertion and slower search, and vice versa.
 * @returns {RBush} GeoJSON RBush
 * @example
 * import geojsonRbush from 'geojson-rbush';
 * var tree = geojsonRbush();
 */
function geojsonRbush(maxEntries) {
    var tree = geojson_rbush_rbush(maxEntries);
    /**
     * [insert](https://github.com/mourner/rbush#data-format)
     *
     * @param {Feature<any>} feature insert single GeoJSON Feature
     * @returns {RBush} GeoJSON RBush
     * @example
     * var polygon = {
     *   "type": "Feature",
     *   "properties": {},
     *   "geometry": {
     *     "type": "Polygon",
     *     "coordinates": [[[-78, 41], [-67, 41], [-67, 48], [-78, 48], [-78, 41]]]
     *   }
     * }
     * tree.insert(polygon)
     */
    tree.insert = function (feature) {
        if (Array.isArray(feature)) {
            var bbox = feature;
            feature = geojson_rbush_bboxPolygon(bbox);
            feature.bbox = bbox;
        } else {
            feature.bbox = feature.bbox ? feature.bbox : turfBBox(feature);
        }
        return geojson_rbush_rbush.prototype.insert.call(this, feature);
    };

    /**
     * [load](https://github.com/mourner/rbush#bulk-inserting-data)
     *
     * @param {BBox[]|FeatureCollection<any>} features load entire GeoJSON FeatureCollection
     * @returns {RBush} GeoJSON RBush
     * @example
     * var polygons = {
     *   "type": "FeatureCollection",
     *   "features": [
     *     {
     *       "type": "Feature",
     *       "properties": {},
     *       "geometry": {
     *         "type": "Polygon",
     *         "coordinates": [[[-78, 41], [-67, 41], [-67, 48], [-78, 48], [-78, 41]]]
     *       }
     *     },
     *     {
     *       "type": "Feature",
     *       "properties": {},
     *       "geometry": {
     *         "type": "Polygon",
     *         "coordinates": [[[-93, 32], [-83, 32], [-83, 39], [-93, 39], [-93, 32]]]
     *       }
     *     }
     *   ]
     * }
     * tree.load(polygons)
     */
    tree.load = function (features) {
        var load = [];
        // Load an Array of BBox
        if (Array.isArray(features)) {
            features.forEach(function (bbox) {
                var feature = geojson_rbush_bboxPolygon(bbox);
                feature.bbox = bbox;
                load.push(feature);
            });
        } else {
            // Load FeatureCollection
            featureEach(features, function (feature) {
                feature.bbox = feature.bbox ? feature.bbox : turfBBox(feature);
                load.push(feature);
            });
        }
        return geojson_rbush_rbush.prototype.load.call(this, load);
    };

    /**
     * [remove](https://github.com/mourner/rbush#removing-data)
     *
     * @param {BBox|Feature<any>} feature remove single GeoJSON Feature
     * @returns {RBush} GeoJSON RBush
     * @example
     * var polygon = {
     *   "type": "Feature",
     *   "properties": {},
     *   "geometry": {
     *     "type": "Polygon",
     *     "coordinates": [[[-78, 41], [-67, 41], [-67, 48], [-78, 48], [-78, 41]]]
     *   }
     * }
     * tree.remove(polygon)
     */
    tree.remove = function (feature) {
        if (Array.isArray(feature)) {
            var bbox = feature;
            feature = geojson_rbush_bboxPolygon(bbox);
            feature.bbox = bbox;
        }
        return geojson_rbush_rbush.prototype.remove.call(this, feature);
    };

    /**
     * [clear](https://github.com/mourner/rbush#removing-data)
     *
     * @returns {RBush} GeoJSON Rbush
     * @example
     * tree.clear()
     */
    tree.clear = function () {
        return geojson_rbush_rbush.prototype.clear.call(this);
    };

    /**
     * [search](https://github.com/mourner/rbush#search)
     *
     * @param {BBox|FeatureCollection|Feature<any>} geojson search with GeoJSON
     * @returns {FeatureCollection<any>} all features that intersects with the given GeoJSON.
     * @example
     * var polygon = {
     *   "type": "Feature",
     *   "properties": {},
     *   "geometry": {
     *     "type": "Polygon",
     *     "coordinates": [[[-78, 41], [-67, 41], [-67, 48], [-78, 48], [-78, 41]]]
     *   }
     * }
     * tree.search(polygon)
     */
    tree.search = function (geojson) {
        var features = geojson_rbush_rbush.prototype.search.call(this, this.toBBox(geojson));
        return {
            type: 'FeatureCollection',
            features: features
        };
    };

    /**
     * [collides](https://github.com/mourner/rbush#collisions)
     *
     * @param {BBox|FeatureCollection|Feature<any>} geojson collides with GeoJSON
     * @returns {boolean} true if there are any items intersecting the given GeoJSON, otherwise false.
     * @example
     * var polygon = {
     *   "type": "Feature",
     *   "properties": {},
     *   "geometry": {
     *     "type": "Polygon",
     *     "coordinates": [[[-78, 41], [-67, 41], [-67, 48], [-78, 48], [-78, 41]]]
     *   }
     * }
     * tree.collides(polygon)
     */
    tree.collides = function (geojson) {
        return geojson_rbush_rbush.prototype.collides.call(this, this.toBBox(geojson));
    };

    /**
     * [all](https://github.com/mourner/rbush#search)
     *
     * @returns {FeatureCollection<any>} all the features in RBush
     * @example
     * tree.all()
     * //=FeatureCollection
     */
    tree.all = function () {
        var features = geojson_rbush_rbush.prototype.all.call(this);
        return {
            type: 'FeatureCollection',
            features: features
        };
    };

    /**
     * [toJSON](https://github.com/mourner/rbush#export-and-import)
     *
     * @returns {any} export data as JSON object
     * @example
     * var exported = tree.toJSON()
     * //=JSON object
     */
    tree.toJSON = function () {
        return geojson_rbush_rbush.prototype.toJSON.call(this);
    };

    /**
     * [fromJSON](https://github.com/mourner/rbush#export-and-import)
     *
     * @param {any} json import previously exported data
     * @returns {RBush} GeoJSON RBush
     * @example
     * var exported = {
     *   "children": [
     *     {
     *       "type": "Feature",
     *       "geometry": {
     *         "type": "Point",
     *         "coordinates": [110, 50]
     *       },
     *       "properties": {},
     *       "bbox": [110, 50, 110, 50]
     *     }
     *   ],
     *   "height": 1,
     *   "leaf": true,
     *   "minX": 110,
     *   "minY": 50,
     *   "maxX": 110,
     *   "maxY": 50
     * }
     * tree.fromJSON(exported)
     */
    tree.fromJSON = function (json) {
        return geojson_rbush_rbush.prototype.fromJSON.call(this, json);
    };

    /**
     * Converts GeoJSON to {minX, minY, maxX, maxY} schema
     *
     * @private
     * @param {BBox|FeatureCollectio|Feature<any>} geojson feature(s) to retrieve BBox from
     * @returns {Object} converted to {minX, minY, maxX, maxY}
     */
    tree.toBBox = function (geojson) {
        var bbox;
        if (geojson.bbox) bbox = geojson.bbox;
        else if (Array.isArray(geojson) && geojson.length === 4) bbox = geojson;
        else bbox = turfBBox(geojson);

        return {
            minX: bbox[0],
            minY: bbox[1],
            maxX: bbox[2],
            maxY: bbox[3]
        };
    };
    return tree;
}

/**
 * Takes a bbox and returns an equivalent {@link Polygon|polygon}.
 *
 * @private
 * @name bboxPolygon
 * @param {Array<number>} bbox extent in [minX, minY, maxX, maxY] order
 * @returns {Feature<Polygon>} a Polygon representation of the bounding box
 * @example
 * var bbox = [0, 0, 10, 10];
 *
 * var poly = turf.bboxPolygon(bbox);
 *
 * //addToMap
 * var addToMap = [poly]
 */
function geojson_rbush_bboxPolygon(bbox) {
    var lowLeft = [bbox[0], bbox[1]];
    var topLeft = [bbox[0], bbox[3]];
    var topRight = [bbox[2], bbox[3]];
    var lowRight = [bbox[2], bbox[1]];
    var coordinates = [[lowLeft, lowRight, topRight, topLeft, lowLeft]];

    return {
        type: 'Feature',
        bbox: bbox,
        properties: {},
        geometry: {
            type: 'Polygon',
            coordinates: coordinates
        }
    };
}

/**
 * Takes a set of features, calculates the bbox of all input features, and returns a bounding box.
 *
 * @private
 * @name bbox
 * @param {FeatureCollection|Feature<any>} geojson input features
 * @returns {Array<number>} bbox extent in [minX, minY, maxX, maxY] order
 * @example
 * var line = turf.lineString([[-74, 40], [-78, 42], [-82, 35]]);
 * var bbox = turf.bbox(line);
 * var bboxPolygon = turf.bboxPolygon(bbox);
 *
 * //addToMap
 * var addToMap = [line, bboxPolygon]
 */
function turfBBox(geojson) {
    var bbox = [Infinity, Infinity, -Infinity, -Infinity];
    coordEach(geojson, function (coord) {
        if (bbox[0] > coord[0]) bbox[0] = coord[0];
        if (bbox[1] > coord[1]) bbox[1] = coord[1];
        if (bbox[2] < coord[0]) bbox[2] = coord[0];
        if (bbox[3] < coord[1]) bbox[3] = coord[1];
    });
    return bbox;
}

/* harmony default export */ const geojson_rbush = (geojsonRbush);

// CONCATENATED MODULE: ./node_modules/@turf/line-segment/main.es.js
;



/**
 * Creates a {@link FeatureCollection} of 2-vertex {@link LineString} segments from a {@link LineString|(Multi)LineString} or {@link Polygon|(Multi)Polygon}.
 *
 * @name lineSegment
 * @param {Geometry|FeatureCollection|Feature<LineString|MultiLineString|MultiPolygon|Polygon>} geojson GeoJSON Polygon or LineString
 * @returns {FeatureCollection<LineString>} 2-vertex line segments
 * @example
 * var polygon = turf.polygon([[[-50, 5], [-40, -10], [-50, -10], [-40, 5], [-50, 5]]]);
 * var segments = turf.lineSegment(polygon);
 *
 * //addToMap
 * var addToMap = [polygon, segments]
 */
function lineSegment(geojson) {
    if (!geojson) throw new Error('geojson is required');

    var results = [];
    flattenEach(geojson, function (feature) {
        lineSegmentFeature(feature, results);
    });
    return featureCollection(results);
}

/**
 * Line Segment
 *
 * @private
 * @param {Feature<LineString|Polygon>} geojson Line or polygon feature
 * @param {Array} results push to results
 * @returns {void}
 */
function lineSegmentFeature(geojson, results) {
    var coords = [];
    var geometry = geojson.geometry;
    switch (geometry.type) {
    case 'Polygon':
        coords = getCoords(geometry);
        break;
    case 'LineString':
        coords = [getCoords(geometry)];
    }
    coords.forEach(function (coord) {
        var segments = createSegments(coord, geojson.properties);
        segments.forEach(function (segment) {
            segment.id = results.length;
            results.push(segment);
        });
    });
}

/**
 * Create Segments from LineString coordinates
 *
 * @private
 * @param {LineString} coords LineString coordinates
 * @param {*} properties GeoJSON properties
 * @returns {Array<Feature<LineString>>} line segments
 */
function createSegments(coords, properties) {
    var segments = [];
    coords.reduce(function (previousCoords, currentCoords) {
        var segment = main_es_lineString([previousCoords, currentCoords], properties);
        segment.bbox = bbox(previousCoords, currentCoords);
        segments.push(segment);
        return currentCoords;
    });
    return segments;
}

/**
 * Create BBox between two coordinates (faster than @turf/bbox)
 *
 * @private
 * @param {Array<number>} coords1 Point coordinate
 * @param {Array<number>} coords2 Point coordinate
 * @returns {BBox} [west, south, east, north]
 */
function bbox(coords1, coords2) {
    var x1 = coords1[0];
    var y1 = coords1[1];
    var x2 = coords2[0];
    var y2 = coords2[1];
    var west = (x1 < x2) ? x1 : x2;
    var south = (y1 < y2) ? y1 : y2;
    var east = (x1 > x2) ? x1 : x2;
    var north = (y1 > y2) ? y1 : y2;
    return [west, south, east, north];
}

/* harmony default export */ const line_segment_main_es = (lineSegment);

// CONCATENATED MODULE: ./node_modules/@turf/line-intersect/main.es.js
;





/**
 * Takes any LineString or Polygon GeoJSON and returns the intersecting point(s).
 *
 * @name lineIntersect
 * @param {Geometry|FeatureCollection|Feature<LineString|MultiLineString|Polygon|MultiPolygon>} line1 any LineString or Polygon
 * @param {Geometry|FeatureCollection|Feature<LineString|MultiLineString|Polygon|MultiPolygon>} line2 any LineString or Polygon
 * @returns {FeatureCollection<Point>} point(s) that intersect both
 * @example
 * var line1 = turf.lineString([[126, -11], [129, -21]]);
 * var line2 = turf.lineString([[123, -18], [131, -14]]);
 * var intersects = turf.lineIntersect(line1, line2);
 *
 * //addToMap
 * var addToMap = [line1, line2, intersects]
 */
function lineIntersect(line1, line2) {
    var unique = {};
    var results = [];

    // First, normalize geometries to features
    // Then, handle simple 2-vertex segments
    if (line1.type === 'LineString') line1 = feature(line1);
    if (line2.type === 'LineString') line2 = feature(line2);
    if (line1.type === 'Feature' &&
        line2.type === 'Feature' &&
        line1.geometry.type === 'LineString' &&
        line2.geometry.type === 'LineString' &&
        line1.geometry.coordinates.length === 2 &&
        line2.geometry.coordinates.length === 2) {
        var intersect = main_es_intersects(line1, line2);
        if (intersect) results.push(intersect);
        return featureCollection(results);
    }

    // Handles complex GeoJSON Geometries
    var tree = geojson_rbush();
    tree.load(line_segment_main_es(line2));
    featureEach(line_segment_main_es(line1), function (segment) {
        featureEach(tree.search(segment), function (match) {
            var intersect = main_es_intersects(segment, match);
            if (intersect) {
                // prevent duplicate points https://github.com/Turfjs/turf/issues/688
                var key = getCoords(intersect).join(',');
                if (!unique[key]) {
                    unique[key] = true;
                    results.push(intersect);
                }
            }
        });
    });
    return featureCollection(results);
}

/**
 * Find a point that intersects LineStrings with two coordinates each
 *
 * @private
 * @param {Feature<LineString>} line1 GeoJSON LineString (Must only contain 2 coordinates)
 * @param {Feature<LineString>} line2 GeoJSON LineString (Must only contain 2 coordinates)
 * @returns {Feature<Point>} intersecting GeoJSON Point
 */
function main_es_intersects(line1, line2) {
    var coords1 = getCoords(line1);
    var coords2 = getCoords(line2);
    if (coords1.length !== 2) {
        throw new Error('<intersects> line1 must only contain 2 coordinates');
    }
    if (coords2.length !== 2) {
        throw new Error('<intersects> line2 must only contain 2 coordinates');
    }
    var x1 = coords1[0][0];
    var y1 = coords1[0][1];
    var x2 = coords1[1][0];
    var y2 = coords1[1][1];
    var x3 = coords2[0][0];
    var y3 = coords2[0][1];
    var x4 = coords2[1][0];
    var y4 = coords2[1][1];
    var denom = ((y4 - y3) * (x2 - x1)) - ((x4 - x3) * (y2 - y1));
    var numeA = ((x4 - x3) * (y1 - y3)) - ((y4 - y3) * (x1 - x3));
    var numeB = ((x2 - x1) * (y1 - y3)) - ((y2 - y1) * (x1 - x3));

    if (denom === 0) {
        if (numeA === 0 && numeB === 0) {
            return null;
        }
        return null;
    }

    var uA = numeA / denom;
    var uB = numeB / denom;

    if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
        var x = x1 + (uA * (x2 - x1));
        var y = y1 + (uA * (y2 - y1));
        return main_es_point([x, y]);
    }
    return null;
}

/* harmony default export */ const line_intersect_main_es = (lineIntersect);

// CONCATENATED MODULE: ./node_modules/@turf/polygon-to-line/main.es.js
;


/**
 * Converts a {@link Polygon} to {@link LineString|(Multi)LineString} or {@link MultiPolygon} to a {@link FeatureCollection} of {@link LineString|(Multi)LineString}.
 *
 * @name polygonToLine
 * @param {Feature<Polygon|MultiPolygon>} polygon Feature to convert
 * @param {Object} [options={}] Optional parameters
 * @param {Object} [options.properties={}] translates GeoJSON properties to Feature
 * @returns {FeatureCollection|Feature<LineString|MultiLinestring>} converted (Multi)Polygon to (Multi)LineString
 * @example
 * var poly = turf.polygon([[[125, -30], [145, -30], [145, -20], [125, -20], [125, -30]]]);
 *
 * var line = turf.polygonToLine(poly);
 *
 * //addToMap
 * var addToMap = [line];
 */
function polygonToLine(polygon, options) {
    // Optional parameters
    options = options || {};
    if (!main_es_isObject(options)) throw new Error('options is invalid');
    var properties = options.properties;

    // Variables
    var geom = getType(polygon);
    var coords = getCoords(polygon);
    properties = properties || polygon.properties || {};

    if (!coords.length) throw new Error('polygon must contain coordinates');

    switch (geom) {
    case 'Polygon':
        return coordsToLine(coords, properties);
    case 'MultiPolygon':
        var lines = [];
        coords.forEach(function (coord) {
            lines.push(coordsToLine(coord, properties));
        });
        return featureCollection(lines);
    default:
        throw new Error('geom ' + geom + ' not supported');
    }
}

function coordsToLine(coords, properties) {
    if (coords.length > 1) return multiLineString(coords, properties);
    return main_es_lineString(coords[0], properties);
}

/* harmony default export */ const polygon_to_line_main_es = (polygonToLine);

// CONCATENATED MODULE: ./node_modules/@turf/boolean-disjoint/main.es.js
;




/**
 * Boolean-disjoint returns (TRUE) if the intersection of the two geometries is an empty set.
 *
 * @name booleanDisjoint
 * @param {Geometry|Feature<any>} feature1 GeoJSON Feature or Geometry
 * @param {Geometry|Feature<any>} feature2 GeoJSON Feature or Geometry
 * @returns {boolean} true/false
 * @example
 * var point = turf.point([2, 2]);
 * var line = turf.lineString([[1, 1], [1, 2], [1, 3], [1, 4]]);
 *
 * turf.booleanDisjoint(line, point);
 * //=true
 */
function booleanDisjoint(feature1, feature2) {
    var boolean;
    flattenEach(feature1, function (flatten1) {
        flattenEach(feature2, function (flatten2) {
            if (boolean === false) return false;
            boolean = disjoint(flatten1.geometry, flatten2.geometry);
        });
    });
    return boolean;
}

/**
 * Disjoint operation for simple Geometries (Point/LineString/Polygon)
 *
 * @private
 * @param {Geometry<any>} geom1 GeoJSON Geometry
 * @param {Geometry<any>} geom2 GeoJSON Geometry
 * @returns {boolean} true/false
 */
function disjoint(geom1, geom2) {
    switch (geom1.type) {
    case 'Point':
        switch (geom2.type) {
        case 'Point':
            return !compareCoords(geom1.coordinates, geom2.coordinates);
        case 'LineString':
            return !isPointOnLine(geom2, geom1);
        case 'Polygon':
            return !boolean_point_in_polygon_main_es(geom1, geom2);
        }
        /* istanbul ignore next */
        break;
    case 'LineString':
        switch (geom2.type) {
        case 'Point':
            return !isPointOnLine(geom1, geom2);
        case 'LineString':
            return !isLineOnLine(geom1, geom2);
        case 'Polygon':
            return !isLineInPoly(geom2, geom1);
        }
        /* istanbul ignore next */
        break;
    case 'Polygon':
        switch (geom2.type) {
        case 'Point':
            return !boolean_point_in_polygon_main_es(geom2, geom1);
        case 'LineString':
            return !isLineInPoly(geom1, geom2);
        case 'Polygon':
            return !isPolyInPoly(geom2, geom1);
        }
    }
}

// http://stackoverflow.com/a/11908158/1979085
function isPointOnLine(lineString, point) {
    for (var i = 0; i < lineString.coordinates.length - 1; i++) {
        if (isPointOnLineSegment(lineString.coordinates[i], lineString.coordinates[i + 1], point.coordinates)) {
            return true;
        }
    }
    return false;
}

function isLineOnLine(lineString1, lineString2) {
    var doLinesIntersect = line_intersect_main_es(lineString1, lineString2);
    if (doLinesIntersect.features.length > 0) {
        return true;
    }
    return false;
}

function isLineInPoly(polygon, lineString) {
    for (var i = 0; i < lineString.coordinates.length; i++) {
        if (boolean_point_in_polygon_main_es(lineString.coordinates[i], polygon)) {
            return true;
        }
    }
    var doLinesIntersect = line_intersect_main_es(lineString, polygon_to_line_main_es(polygon));
    if (doLinesIntersect.features.length > 0) {
        return true;
    }
    return false;
}

/**
 * Is Polygon (geom1) in Polygon (geom2)
 * Only takes into account outer rings
 * See http://stackoverflow.com/a/4833823/1979085
 *
 * @private
 * @param {Geometry|Feature<Polygon>} feature1 Polygon1
 * @param {Geometry|Feature<Polygon>} feature2 Polygon2
 * @returns {boolean} true/false
 */
function isPolyInPoly(feature1, feature2) {
    for (var i = 0; i < feature1.coordinates[0].length; i++) {
        if (boolean_point_in_polygon_main_es(feature1.coordinates[0][i], feature2)) {
            return true;
        }
    }
    for (var i2 = 0; i2 < feature2.coordinates[0].length; i2++) {
        if (boolean_point_in_polygon_main_es(feature2.coordinates[0][i2], feature1)) {
            return true;
        }
    }
    var doLinesIntersect = line_intersect_main_es(polygon_to_line_main_es(feature1), polygon_to_line_main_es(feature2));
    if (doLinesIntersect.features.length > 0) {
        return true;
    }
    return false;
}

function isPointOnLineSegment(LineSegmentStart, LineSegmentEnd, Point) {
    var dxc = Point[0] - LineSegmentStart[0];
    var dyc = Point[1] - LineSegmentStart[1];
    var dxl = LineSegmentEnd[0] - LineSegmentStart[0];
    var dyl = LineSegmentEnd[1] - LineSegmentStart[1];
    var cross = dxc * dyl - dyc * dxl;
    if (cross !== 0) {
        return false;
    }
    if (Math.abs(dxl) >= Math.abs(dyl)) {
        if (dxl > 0) {
            return LineSegmentStart[0] <= Point[0] && Point[0] <= LineSegmentEnd[0];
        } else {
            return LineSegmentEnd[0] <= Point[0] && Point[0] <= LineSegmentStart[0];
        }
    } else if (dyl > 0) {
        return LineSegmentStart[1] <= Point[1] && Point[1] <= LineSegmentEnd[1];
    } else {
        return LineSegmentEnd[1] <= Point[1] && Point[1] <= LineSegmentStart[1];
    }
}

/**
 * compareCoords
 *
 * @private
 * @param {Position} pair1 point [x,y]
 * @param {Position} pair2 point [x,y]
 * @returns {boolean} true/false if coord pairs match
 */
function compareCoords(pair1, pair2) {
    return pair1[0] === pair2[0] && pair1[1] === pair2[1];
}

/* harmony default export */ const boolean_disjoint_main_es = (booleanDisjoint);

// CONCATENATED MODULE: ./node_modules/@turf/distance/main.es.js
;


//http://en.wikipedia.org/wiki/Haversine_formula
//http://www.movable-type.co.uk/scripts/latlong.html

/**
 * Calculates the distance between two {@link Point|points} in degrees, radians,
 * miles, or kilometers. This uses the
 * [Haversine formula](http://en.wikipedia.org/wiki/Haversine_formula)
 * to account for global curvature.
 *
 * @name distance
 * @param {Coord} from origin point
 * @param {Coord} to destination point
 * @param {Object} [options={}] Optional parameters
 * @param {string} [options.units='kilometers'] can be degrees, radians, miles, or kilometers
 * @returns {number} distance between the two points
 * @example
 * var from = turf.point([-75.343, 39.984]);
 * var to = turf.point([-75.534, 39.123]);
 * var options = {units: 'miles'};
 *
 * var distance = turf.distance(from, to, options);
 *
 * //addToMap
 * var addToMap = [from, to];
 * from.properties.distance = distance;
 * to.properties.distance = distance;
 */
function main_es_distance(from, to, options) {
    // Optional parameters
    options = options || {};
    if (!main_es_isObject(options)) throw new Error('options is invalid');
    var units = options.units;

    var coordinates1 = getCoord(from);
    var coordinates2 = getCoord(to);
    var dLat = degreesToRadians((coordinates2[1] - coordinates1[1]));
    var dLon = degreesToRadians((coordinates2[0] - coordinates1[0]));
    var lat1 = degreesToRadians(coordinates1[1]);
    var lat2 = degreesToRadians(coordinates2[1]);

    var a = Math.pow(Math.sin(dLat / 2), 2) +
          Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);

    return radiansToLength(2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)), units);
}

/* harmony default export */ const distance_main_es = (main_es_distance);

// CONCATENATED MODULE: ./node_modules/@turf/bearing/main.es.js
;


//http://en.wikipedia.org/wiki/Haversine_formula
//http://www.movable-type.co.uk/scripts/latlong.html

/**
 * Takes two {@link Point|points} and finds the geographic bearing between them,
 * i.e. the angle measured in degrees from the north line (0 degrees)
 *
 * @name bearing
 * @param {Coord} start starting Point
 * @param {Coord} end ending Point
 * @param {Object} [options={}] Optional parameters
 * @param {boolean} [options.final=false] calculates the final bearing if true
 * @returns {number} bearing in decimal degrees, between -180 and 180 degrees (positive clockwise)
 * @example
 * var point1 = turf.point([-75.343, 39.984]);
 * var point2 = turf.point([-75.534, 39.123]);
 *
 * var bearing = turf.bearing(point1, point2);
 *
 * //addToMap
 * var addToMap = [point1, point2]
 * point1.properties['marker-color'] = '#f00'
 * point2.properties['marker-color'] = '#0f0'
 * point1.properties.bearing = bearing
 */
function main_es_bearing(start, end, options) {
    // Optional parameters
    options = options || {};
    if (!main_es_isObject(options)) throw new Error('options is invalid');
    var final = options.final;

    // Reverse calculation
    if (final === true) return calculateFinalBearing(start, end);

    var coordinates1 = getCoord(start);
    var coordinates2 = getCoord(end);

    var lon1 = degreesToRadians(coordinates1[0]);
    var lon2 = degreesToRadians(coordinates2[0]);
    var lat1 = degreesToRadians(coordinates1[1]);
    var lat2 = degreesToRadians(coordinates2[1]);
    var a = Math.sin(lon2 - lon1) * Math.cos(lat2);
    var b = Math.cos(lat1) * Math.sin(lat2) -
        Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);

    return radiansToDegrees(Math.atan2(a, b));
}

/**
 * Calculates Final Bearing
 *
 * @private
 * @param {Coord} start starting Point
 * @param {Coord} end ending Point
 * @returns {number} bearing
 */
function calculateFinalBearing(start, end) {
    // Swap start & end
    var bear = main_es_bearing(end, start);
    bear = (bear + 180) % 360;
    return bear;
}

/* harmony default export */ const bearing_main_es = (main_es_bearing);

// CONCATENATED MODULE: ./node_modules/@turf/destination/main.es.js
;


//http://en.wikipedia.org/wiki/Haversine_formula
//http://www.movable-type.co.uk/scripts/latlong.html
/**
 * Takes a {@link Point} and calculates the location of a destination point given a distance in degrees, radians, miles, or kilometers; and bearing in degrees. This uses the [Haversine formula](http://en.wikipedia.org/wiki/Haversine_formula) to account for global curvature.
 *
 * @name destination
 * @param {Coord} origin starting point
 * @param {number} distance distance from the origin point
 * @param {number} bearing ranging from -180 to 180
 * @param {Object} [options={}] Optional parameters
 * @param {string} [options.units='kilometers'] miles, kilometers, degrees, or radians
 * @param {Object} [options.properties={}] Translate properties to Point
 * @returns {Feature<Point>} destination point
 * @example
 * var point = turf.point([-75.343, 39.984]);
 * var distance = 50;
 * var bearing = 90;
 * var options = {units: 'miles'};
 *
 * var destination = turf.destination(point, distance, bearing, options);
 *
 * //addToMap
 * var addToMap = [point, destination]
 * destination.properties['marker-color'] = '#f00';
 * point.properties['marker-color'] = '#0f0';
 */
function main_es_destination(origin, distance, bearing, options) {
    // Optional parameters
    options = options || {};
    if (!main_es_isObject(options)) throw new Error('options is invalid');
    var units = options.units;
    var properties = options.properties;

    // Handle input
    var coordinates1 = getCoord(origin);
    var longitude1 = degreesToRadians(coordinates1[0]);
    var latitude1 = degreesToRadians(coordinates1[1]);
    var bearing_rad = degreesToRadians(bearing);
    var radians = lengthToRadians(distance, units);

    // Main
    var latitude2 = Math.asin(Math.sin(latitude1) * Math.cos(radians) +
        Math.cos(latitude1) * Math.sin(radians) * Math.cos(bearing_rad));
    var longitude2 = longitude1 + Math.atan2(Math.sin(bearing_rad) * Math.sin(radians) * Math.cos(latitude1),
        Math.cos(radians) - Math.sin(latitude1) * Math.sin(latitude2));
    var lng = radiansToDegrees(longitude2);
    var lat = radiansToDegrees(latitude2);

    return main_es_point([lng, lat], properties);
}

/* harmony default export */ const destination_main_es = (main_es_destination);

// CONCATENATED MODULE: ./node_modules/@turf/nearest-point-on-line/main.es.js
;







/**
 * Takes a {@link Point} and a {@link LineString} and calculates the closest Point on the (Multi)LineString.
 *
 * @name nearestPointOnLine
 * @param {Geometry|Feature<LineString|MultiLineString>} lines lines to snap to
 * @param {Geometry|Feature<Point>|number[]} pt point to snap from
 * @param {Object} [options={}] Optional parameters
 * @param {string} [options.units='kilometers'] can be degrees, radians, miles, or kilometers
 * @returns {Feature<Point>} closest point on the `line` to `point`. The properties object will contain three values: `index`: closest point was found on nth line part, `dist`: distance between pt and the closest point, `location`: distance along the line between start and the closest point.
 * @example
 * var line = turf.lineString([
 *     [-77.031669, 38.878605],
 *     [-77.029609, 38.881946],
 *     [-77.020339, 38.884084],
 *     [-77.025661, 38.885821],
 *     [-77.021884, 38.889563],
 *     [-77.019824, 38.892368]
 * ]);
 * var pt = turf.point([-77.037076, 38.884017]);
 *
 * var snapped = turf.nearestPointOnLine(line, pt, {units: 'miles'});
 *
 * //addToMap
 * var addToMap = [line, pt, snapped];
 * snapped.properties['marker-color'] = '#00f';
 */
function nearestPointOnLine(lines, pt, options) {
    // Optional parameters
    options = options || {};
    if (!main_es_isObject(options)) throw new Error('options is invalid');

    // validation
    var type = (lines.geometry) ? lines.geometry.type : lines.type;
    if (type !== 'LineString' && type !== 'MultiLineString') {
        throw new Error('lines must be LineString or MultiLineString');
    }

    var closestPt = main_es_point([Infinity, Infinity], {
        dist: Infinity
    });

    var length = 0.0;
    flattenEach(lines, function (line) {
        var coords = getCoords(line);

        for (var i = 0; i < coords.length - 1; i++) {
            //start
            var start = main_es_point(coords[i]);
            start.properties.dist = distance_main_es(pt, start, options);
            //stop
            var stop = main_es_point(coords[i + 1]);
            stop.properties.dist = distance_main_es(pt, stop, options);
            // sectionLength
            var sectionLength = distance_main_es(start, stop, options);
            //perpendicular
            var heightDistance = Math.max(start.properties.dist, stop.properties.dist);
            var direction = bearing_main_es(start, stop);
            var perpendicularPt1 = destination_main_es(pt, heightDistance, direction + 90, options);
            var perpendicularPt2 = destination_main_es(pt, heightDistance, direction - 90, options);
            var intersect = line_intersect_main_es(
                main_es_lineString([perpendicularPt1.geometry.coordinates, perpendicularPt2.geometry.coordinates]),
                main_es_lineString([start.geometry.coordinates, stop.geometry.coordinates])
            );
            var intersectPt = null;
            if (intersect.features.length > 0) {
                intersectPt = intersect.features[0];
                intersectPt.properties.dist = distance_main_es(pt, intersectPt, options);
                intersectPt.properties.location = length + distance_main_es(start, intersectPt, options);
            }

            if (start.properties.dist < closestPt.properties.dist) {
                closestPt = start;
                closestPt.properties.index = i;
                closestPt.properties.location = length;
            }
            if (stop.properties.dist < closestPt.properties.dist) {
                closestPt = stop;
                closestPt.properties.index = i + 1;
                closestPt.properties.location = length + sectionLength;
            }
            if (intersectPt && intersectPt.properties.dist < closestPt.properties.dist) {
                closestPt = intersectPt;
                closestPt.properties.index = i;
            }
            // update length
            length += sectionLength;
        }

    });

    return closestPt;
}

/* harmony default export */ const nearest_point_on_line_main_es = (nearestPointOnLine);

// CONCATENATED MODULE: ./node_modules/@turf/midpoint/main.es.js
;



/**
 * Takes two {@link Point|points} and returns a point midway between them.
 * The midpoint is calculated geodesically, meaning the curvature of the earth is taken into account.
 *
 * @name midpoint
 * @param {Coord} point1 first point
 * @param {Coord} point2 second point
 * @returns {Feature<Point>} a point midway between `pt1` and `pt2`
 * @example
 * var point1 = turf.point([144.834823, -37.771257]);
 * var point2 = turf.point([145.14244, -37.830937]);
 *
 * var midpoint = turf.midpoint(point1, point2);
 *
 * //addToMap
 * var addToMap = [point1, point2, midpoint];
 * midpoint.properties['marker-color'] = '#f00';
 */
function midpoint(point1, point2) {
    var dist = distance_main_es(point1, point2);
    var heading = bearing_main_es(point1, point2);
    var midpoint = destination_main_es(point1, dist / 2, heading);

    return midpoint;
}

/* harmony default export */ const midpoint_main_es = (midpoint);

// CONCATENATED MODULE: ./src/utils/index.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Heavily inspired from work of @davidgilbertson on Github and `leaflet-geoman` project.
 // import {
//   bboxPolygon,
//   booleanDisjoint,
//   getCoords,
//   distance,
//   polygonToLine,
//   nearestPointOnLine,
//   midpoint,
// } from "@turf/turf";









var IDS = {
  VERTICAL_GUIDE: "VERTICAL_GUIDE",
  HORIZONTAL_GUIDE: "HORIZONTAL_GUIDE"
};
var addPointTovertices = function addPointTovertices(map, vertices, coordinates, forceInclusion) {
  var _map$getCanvas = map.getCanvas(),
      w = _map$getCanvas.width,
      h = _map$getCanvas.height; // Just add verteices of features currently visible in viewport


  var _map$project = map.project(coordinates),
      x = _map$project.x,
      y = _map$project.y;

  var pointIsOnTheScreen = x > 0 && x < w && y > 0 && y < h; // But do add off-screen points if forced (e.g. for the current feature)
  // So features will always snap to their own points

  if (pointIsOnTheScreen || forceInclusion) {
    vertices.push(coordinates);
  }
};
var addLineToSnapList = function addLineToSnapList(coords, state) {
  var alreadyExist = state.snapList.find(function (snapValue) {
    return snapValue.id === state.id;
  });

  if (!alreadyExist) {
    var objToAddToSnapList = {
      id: state.id,
      type: "Feature",
      properties: {},
      geometry: {
        type: "Polygon",
        coordinates: [coords]
      }
    };
    addToSnapList(objToAddToSnapList, state);
  } else {
    if (state.line) {
      alreadyExist.geometry.coordinates = [state.line.coordinates.slice(0, state.line.coordinates.length - 1)];
    } else {
      alreadyExist.geometry.coordinates = [state.polygon.coordinates[0].slice(0, state.polygon.coordinates[0].length - 1)];
    }
  }
};
var addPointToSnapList = function addPointToSnapList(coords, state) {
  var objToAddToSnapList = {
    id: uuidv4(),
    type: "Feature",
    properties: {},
    geometry: {
      type: "Point",
      coordinates: coords
    }
  };
  addToSnapList(objToAddToSnapList, state);
};
var addToSnapList = function addToSnapList(feature, state) {
  state.snapList.push(feature);
};
var createSnapList = function createSnapList(map, draw, currentFeature) {
  // Get all drawn features
  var features = draw.getAll().features;
  var snapList = []; // Get current bbox as polygon

  var bboxAsPolygon = function () {
    var canvas = map.getCanvas(),
        w = canvas.width,
        h = canvas.height,
        cUL = map.unproject([0, 0]).toArray(),
        cUR = map.unproject([w, 0]).toArray(),
        cLR = map.unproject([w, h]).toArray(),
        cLL = map.unproject([0, h]).toArray();
    return main_es([cLL, cUR].flat());
  }();

  var vertices = []; // Keeps vertices for drwing guides

  var addVerticesTovertices = function addVerticesTovertices(coordinates) {
    var isCurrentFeature = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (!Array.isArray(coordinates)) throw Error("Your array is not an array");

    if (Array.isArray(coordinates[0])) {
      // coordinates is an array of arrays, we must go deeper
      coordinates.forEach(function (coord) {
        addVerticesTovertices(coord);
      });
    } else {
      // If not an array of arrays, only consider arrays with two items
      if (coordinates.length === 2) {
        addPointTovertices(map, vertices, coordinates, isCurrentFeature);
      }
    }
  };

  features.forEach(function (feature) {
    // For currentfeature
    if (feature.id === currentFeature.id) {
      if (currentFeature.type === geojsonTypes.POLYGON) {
        // For the current polygon, the last two points are the mouse position and back home
        // so we chop those off (else we get vertices showing where the user clicked, even
        // if they were just panning the map)
        addVerticesTovertices(feature.geometry.coordinates[0].slice(0, -2), true);
      }

      return;
    } // If this is re-running because a user is moving the map, the features might include
    // vertices or the last leg of a polygon


    if (feature.id === IDS.HORIZONTAL_GUIDE || feature.id === IDS.VERTICAL_GUIDE) return;
    addVerticesTovertices(feature.geometry.coordinates); // If feature is currently on viewport add to snap list

    if (!boolean_disjoint_main_es(bboxAsPolygon, feature)) {
      snapList.push(feature);
    }
  });
  return [snapList, vertices];
};

var getNearbyvertices = function getNearbyvertices(vertices, coords) {
  var verticals = [];
  var horizontals = [];
  vertices.forEach(function (vertex) {
    verticals.push(vertex[0]);
    horizontals.push(vertex[1]);
  });
  var nearbyVerticalGuide = verticals.find(function (px) {
    return Math.abs(px - coords.lng) < 0.009;
  });
  var nearbyHorizontalGuide = horizontals.find(function (py) {
    return Math.abs(py - coords.lat) < 0.009;
  });
  return {
    verticalPx: nearbyVerticalGuide,
    horizontalPx: nearbyHorizontalGuide
  };
};

var calcLayerDistances = function calcLayerDistances(lngLat, layer) {
  // the point P which we want to snap (probpably the marker that is dragged)
  var P = [lngLat.lng, lngLat.lat]; // is this a marker?

  var isMarker = layer.geometry.type === "Point"; // is it a polygon?

  var isPolygon = layer.geometry.type === "Polygon";
  var lines = undefined; // the coords of the layer

  var latlngs = getCoords(layer);

  if (isMarker) {
    var _latlngs = _slicedToArray(latlngs, 2),
        _lng = _latlngs[0],
        _lat = _latlngs[1]; // return the info for the marker, no more calculations needed


    return {
      latlng: {
        lng: _lng,
        lat: _lat
      },
      distance: distance_main_es(latlngs, P)
    };
  }

  if (isPolygon) lines = polygon_to_line_main_es(layer);else lines = layer;
  var nearestPoint = nearest_point_on_line_main_es(lines, P);

  var _nearestPoint$geometr = _slicedToArray(nearestPoint.geometry.coordinates, 2),
      lng = _nearestPoint$geometr[0],
      lat = _nearestPoint$geometr[1];

  var segmentIndex = nearestPoint.properties.index;
  if (segmentIndex + 1 === lines.geometry.coordinates.length) segmentIndex--;
  return {
    latlng: {
      lng: lng,
      lat: lat
    },
    segment: lines.geometry.coordinates.slice(segmentIndex, segmentIndex + 2),
    distance: nearestPoint.properties.dist,
    isMarker: isMarker
  };
};

var calcClosestLayer = function calcClosestLayer(lngLat, layers) {
  var closestLayer = {}; // loop through the layers

  layers.forEach(function (layer, index) {
    // find the closest latlng, segment and the distance of this layer to the dragged marker latlng
    var results = calcLayerDistances(lngLat, layer); // save the info if it doesn't exist or if the distance is smaller than the previous one

    if (closestLayer.distance === undefined || results.distance < closestLayer.distance) {
      closestLayer = results;
      closestLayer.layer = layer;
    }
  }); // return the closest layer and it's data
  // if there is no closest layer, return undefined

  return closestLayer;
}; // minimal distance before marker snaps (in pixels)


var metersPerPixel = function metersPerPixel(latitude, zoomLevel) {
  var earthCircumference = 40075017;
  var latitudeRadians = latitude * (Math.PI / 180);
  return earthCircumference * Math.cos(latitudeRadians) / Math.pow(2, zoomLevel + 8);
};
var angleToMeters = function angleToMeters(lng) {
  // generally used geo measurement function
  return lng * 1.132 / 0.00001;
}; // we got the point we want to snap to (C), but we need to check if a coord of the polygon
// receives priority over C as the snapping point. Let's check this here

var checkPrioritiySnapping = function checkPrioritiySnapping(closestLayer, snapOptions) {
  // A and B are the points of the closest segment to P (the marker position we want to snap)
  var A = closestLayer.segment[0];
  var B = closestLayer.segment[1]; // C is the point we would snap to on the segment.
  // The closest point on the closest segment of the closest polygon to P. That's right.

  var C = [closestLayer.latlng.lng, closestLayer.latlng.lat]; // distances from A to C and B to C to check which one is closer to C

  var distanceAC = distance_main_es(A, C);
  var distanceBC = distance_main_es(B, C); // closest latlng of A and B to C

  var closestVertexLatLng = distanceAC < distanceBC ? A : B; // distance between closestVertexLatLng and C

  var shortestDistance = distanceAC < distanceBC ? distanceAC : distanceBC; // snap to middle (M) of segment if option is enabled

  if (snapOptions && snapOptions.snapToMidPoints) {
    var M = midpoint_main_es(A, B).geometry.coordinates;
    var distanceMC = distance_main_es(M, C);

    if (distanceMC < distanceAC && distanceMC < distanceBC) {
      // M is the nearest vertex
      closestVertexLatLng = M;
      shortestDistance = distanceMC;
    }
  } // the distance that needs to be undercut to trigger priority


  var priorityDistance = 1.25; // the latlng we ultemately want to snap to

  var snapLatlng; // if C is closer to the closestVertexLatLng (A, B or M) than the snapDistance,
  // the closestVertexLatLng has priority over C as the snapping point.

  if (shortestDistance < priorityDistance) {
    snapLatlng = closestVertexLatLng;
  } else {
    snapLatlng = C;
  } // return the copy of snapping point


  var _snapLatlng = snapLatlng,
      _snapLatlng2 = _slicedToArray(_snapLatlng, 2),
      lng = _snapLatlng2[0],
      lat = _snapLatlng2[1];

  return {
    lng: lng,
    lat: lat
  };
};
/**
 * Returns snap points if there are any, otherwise the original lng/lat of the event
 * Also, defines if vertices should show on the state object
 *
 * Mutates the state object
 *
 * @param state
 * @param e
 * @returns {{lng: number, lat: number}}
 */


var snap = function snap(state, e) {
  var lng = e.lngLat.lng;
  var lat = e.lngLat.lat; // Holding alt bypasses all snapping

  if (e.originalEvent.altKey) {
    state.showVerticalSnapLine = false;
    state.showHorizontalSnapLine = false;
    return {
      lng: lng,
      lat: lat
    };
  }

  if (state.snapList.length <= 0) {
    return {
      lng: lng,
      lat: lat
    };
  } // snapping is on


  var closestLayer, minDistance, snapLatLng;

  if (state.options.snap) {
    closestLayer = calcClosestLayer({
      lng: lng,
      lat: lat
    }, state.snapList); // if no layers found. Can happen when circle is the only visible layer on the map and the hidden snapping-border circle layer is also on the map

    if (Object.keys(closestLayer).length === 0) {
      return false;
    }

    var isMarker = closestLayer.isMarker;

    if (!isMarker) {
      snapLatLng = checkPrioritiySnapping(closestLayer, state.options.snapOptions); // snapLatLng = closestLayer.latlng;
    } else {
      snapLatLng = closestLayer.latlng;
    }

    minDistance = (state.options.snapOptions && state.options.snapOptions.snapPx || 15) * metersPerPixel(snapLatLng.lat, state.map.getZoom());
  }

  var verticalPx, horizontalPx;

  if (state.options.guides) {
    var nearestGuidline = getNearbyvertices(state.vertices, e.lngLat);
    verticalPx = nearestGuidline.verticalPx;
    horizontalPx = nearestGuidline.horizontalPx;

    if (verticalPx) {
      // Draw a line from top to bottom
      var lngLatTop = {
        lng: verticalPx,
        lat: e.lngLat.lat + 10
      };
      var lngLatBottom = {
        lng: verticalPx,
        lat: e.lngLat.lat - 10
      };
      state.verticalGuide.updateCoordinate(0, lngLatTop.lng, lngLatTop.lat);
      state.verticalGuide.updateCoordinate(1, lngLatBottom.lng, lngLatBottom.lat);
    }

    if (horizontalPx) {
      // Draw a line from left to right
      var _lngLatTop = {
        lng: e.lngLat.lng + 10,
        lat: horizontalPx
      };
      var _lngLatBottom = {
        lng: e.lngLat.lng - 10,
        lat: horizontalPx
      };
      state.horizontalGuide.updateCoordinate(0, _lngLatTop.lng, _lngLatTop.lat);
      state.horizontalGuide.updateCoordinate(1, _lngLatBottom.lng, _lngLatBottom.lat);
    }

    state.showVerticalSnapLine = !!verticalPx;
    state.showHorizontalSnapLine = !!horizontalPx;
  }

  if (closestLayer && closestLayer.distance * 1000 < minDistance) {
    return snapLatLng;
  } else if (verticalPx || horizontalPx) {
    if (verticalPx) {
      lng = verticalPx;
    }

    if (horizontalPx) {
      lat = horizontalPx;
    }

    return {
      lng: lng,
      lat: lat
    };
  } else {
    return {
      lng: lng,
      lat: lat
    };
  }
};
var getGuideFeature = function getGuideFeature(id) {
  return {
    id: id,
    type: geojsonTypes.FEATURE,
    properties: {
      isSnapGuide: "true" // for styling

    },
    geometry: {
      type: geojsonTypes.LINE_STRING,
      coordinates: []
    }
  };
};
var visualizeSnapPoint = function visualizeSnapPoint(state, lng, lat) {
  if (!state.markerPoint) {
    var el = document.createElement('div');
    el.className = 'marker';
    el.style.height = "14px";
    el.style.width = "14px";
    el.style.backgroundColor = 'yellow';
    el.style.borderRadius = "7px";
    state.markerPoint = new mapboxgl.Marker(el).setLngLat([lng, lat]).addTo(state.map);
  } else {
    state.markerPoint.setLngLat([lng, lat]);
  }
};
var shouldHideGuide = function shouldHideGuide(state, geojson) {
  if (geojson.properties.id === IDS.VERTICAL_GUIDE && (!state.options.guides || !state.showVerticalSnapLine)) {
    return true;
  }

  if (geojson.properties.id === IDS.HORIZONTAL_GUIDE && (!state.options.guides || !state.showHorizontalSnapLine)) {
    return true;
  }

  return false;
};
// CONCATENATED MODULE: ./node_modules/@turf/length/main.es.js
;



/**
 * Takes a {@link GeoJSON} and measures its length in the specified units, {@link (Multi)Point}'s distance are ignored.
 *
 * @name length
 * @param {GeoJSON} geojson GeoJSON to measure
 * @param {Object} [options={}] Optional parameters
 * @param {string} [options.units=kilometers] can be degrees, radians, miles, or kilometers
 * @returns {number} length of GeoJSON
 * @example
 * var line = turf.lineString([[115, -32], [131, -22], [143, -25], [150, -34]]);
 * var length = turf.length(line, {units: 'miles'});
 *
 * //addToMap
 * var addToMap = [line];
 * line.properties.distance = length;
 */
function main_es_length(geojson, options) {
    // Optional parameters
    options = options || {};
    if (!isObject(options)) throw new Error('options is invalid');

    // Input Validation
    if (!geojson) throw new Error('geojson is required');

    // Calculate distance from 2-vertex line segements
    return segmentReduce(geojson, function (previousValue, segment) {
        var coords = segment.geometry.coordinates;
        return previousValue + distance(coords[0], coords[1], options);
    }, 0);
}

/* harmony default export */ const length_main_es = ((/* unused pure expression or super */ null && (main_es_length)));

// CONCATENATED MODULE: ./node_modules/@turf/along/main.es.js
;




/**
 * Takes a {@link LineString} and returns a {@link Point} at a specified distance along the line.
 *
 * @name along
 * @param {Feature<LineString>} line input line
 * @param {number} distance distance along the line
 * @param {Object} [options] Optional parameters
 * @param {string} [options.units="kilometers"] can be degrees, radians, miles, or kilometers
 * @returns {Feature<Point>} Point `distance` `units` along the line
 * @example
 * var line = turf.lineString([[-83, 30], [-84, 36], [-78, 41]]);
 * var options = {units: 'miles'};
 *
 * var along = turf.along(line, 200, options);
 *
 * //addToMap
 * var addToMap = [along, line]
 */
function along(line, distance, options) {
    // Optional parameters
    options = options || {};
    if (!isObject(options)) throw new Error('options is invalid');

    // Validation
    var coords;
    if (line.type === 'Feature') coords = line.geometry.coordinates;
    else if (line.type === 'LineString') coords = line.coordinates;
    else throw new Error('input must be a LineString Feature or Geometry');
    if (!isNumber(distance)) throw new Error('distance must be a number');

    var travelled = 0;
    for (var i = 0; i < coords.length; i++) {
        if (distance >= travelled && i === coords.length - 1) break;
        else if (travelled >= distance) {
            var overshot = distance - travelled;
            if (!overshot) return point(coords[i]);
            else {
                var direction = bearing(coords[i], coords[i - 1]) - 180;
                var interpolated = destination(coords[i], overshot, direction, options);
                return interpolated;
            }
        } else {
            travelled += measureDistance(coords[i], coords[i + 1], options);
        }
    }
    return point(coords[coords.length - 1]);
}

/* harmony default export */ const along_main_es = ((/* unused pure expression or super */ null && (along)));

// EXTERNAL MODULE: ./node_modules/@turf/turf/turf.min.js
var turf_min = __webpack_require__(530);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/rng.js
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/regex.js
/* harmony default export */ const regex = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/validate.js
;

function validate(uuid) {
  return typeof uuid === 'string' && regex.test(uuid);
}

/* harmony default export */ const esm_browser_validate = (validate);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/stringify.js
;
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!esm_browser_validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const esm_browser_stringify = (stringify);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v4.js
;


function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return esm_browser_stringify(rnds);
}

/* harmony default export */ const esm_browser_v4 = (v4);
// CONCATENATED MODULE: ./src/utils/angle.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }











var Angle = /*#__PURE__*/function () {
  function Angle() {
    var withSnapping = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;

    _classCallCheck(this, Angle);

    this.lastCalcul = 0;
    this.snapping = withSnapping;
    this.angleIsSnap = false;
  }

  _createClass(Angle, [{
    key: "addXPixelsToLng",
    value: function addXPixelsToLng(lng, x, lat) {
      var lngInMeters = angleToMeters(lng);
      var pixels = lngInMeters / metersPerPixel(lat, this.state.map.getZoom()) + x;
      var lngInMetersToPut = pixels * metersPerPixel(lat, this.state.map.getZoom());
      var lgnToPut = lngInMetersToPut * 0.00001 / 1.132;
      return lgnToPut;
    }
  }, {
    key: "addMarkerToMap",
    value: function addMarkerToMap(state, e, lng, lat) {
      this.angleDiv = document.createElement('div');
      this.angleDiv.textContent = "NaN";
      this.marker = new mapboxgl.Marker(this.angleDiv).setLngLat([this.addXPixelsToLng(lng, 50, lat), lat]).addTo(this.state.map);
    }
  }, {
    key: "canCalculateAngle",
    value: function canCalculateAngle(state) {
      return state.line && state.line.coordinates.length >= 2 || state.polygon && state.polygon.coordinates[0].length >= 2;
    }
  }, {
    key: "definePointsAndCalculeAngle",
    value: function definePointsAndCalculeAngle(state, e) {
      if (this.canCalculateAngle(state)) {
        var point1;
        var point2;
        var oldPoint;

        if (state.line) {
          point1 = state.line.coordinates[state.line.coordinates.length - 2];
          point2 = [e.lngLat.lng, e.lngLat.lat];
          oldPoint = state.line.coordinates[state.line.coordinates.length - 3];
        } else {
          point1 = state.polygon.coordinates[0][state.polygon.coordinates[0].length - 2];
          point2 = [e.lngLat.lng, e.lngLat.lat];
          oldPoint = state.polygon.coordinates[0][state.polygon.coordinates[0].length - 3];
        }

        var angle = this.calcAngle(point1, point2, oldPoint);

        if (this.snapping != 0 && state.options.angle) {
          var angleToSnap;
          var modulo = angle % this.snapping;

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
  }, {
    key: "drawAngleSnapped",
    value: function drawAngleSnapped(angle, point, point2, state) {
      var obj = {
        type: 'LineString',
        coordinates: [point, point2]
      };
      obj = (0,turf_min.transformRotate)(obj, angle, {
        pivot: point
      });
      this.snapPoint = obj.coordinates[1];

      if (!state.map.getSource('snapLine')) {
        state.map.addSource('snapLine', {
          type: 'geojson',
          data: obj
        });
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
        state.map.getSource('snapLine').setData(obj);
      }
    }
  }, {
    key: "calcAngle",
    value: function calcAngle(point1, point2, oldPoint) {
      var angle;
      var absoluteAngle = Math.round(bearing_main_es(point1, point2));
      var oldBearing = 0;

      if (oldPoint !== undefined) {
        oldBearing = Math.round(bearing_main_es(point1, oldPoint));
      }

      angle = Math.abs(oldBearing - absoluteAngle) % 180;
      return angle;
    }
  }, {
    key: "findAngleControl",
    value: function findAngleControl(state) {
      return state.map._controls.find(function (control) {
        return control.constructor.name === 'AngleControl';
      });
    }
  }, {
    key: "moveOn",
    value: function moveOn(state, e, lng, lat) {
      var control = this.findAngleControl(state);

      if (control) {
        control._container.lastChild.textContent = this.definePointsAndCalculeAngle(state, e) + ' °';
      }

      if (this.canCalculateAngle(state)) {
        var distanceSnapPoint = distance_main_es([e.lngLat.lng, e.lngLat.lat], [lng, lat]);
        var distanceAngleSnapPoint = distance_main_es([e.lngLat.lng, e.lngLat.lat], this.snapPoint);

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
  }, {
    key: "createAngleDiv",
    value: function createAngleDiv(state, event, lng, lat) {
      this.state = state;

      if (this.angleDiv) {
        this.lastAngle = (this.lastAngle + this.lastCalcul) % 360;
        this.marker.setLngLat([this.addXPixelsToLng(lng, 15, lat), lat]);
      } else {
        this.addMarkerToMap(state, event, lng, lat);
      }
    }
  }, {
    key: "remove",
    value: function remove(state) {
      this.removeSnapLine(state);
    }
  }, {
    key: "removeSnapLine",
    value: function removeSnapLine(state) {
      if (state.map.getSource('snapLine')) {
        state.map.setLayoutProperty('snapLineLayer', 'visibility', 'none');
      }
    }
  }, {
    key: "onSetup",
    value: function onSetup(state) {
      state.angle = new Angle();
      state.angle.activate = state.options.angle;
      state.id = esm_browser_v4();
    }
  }, {
    key: "transformSnapping",
    value: function transformSnapping(state, e, lng, lat) {
      if (state.options.angle) {
        if (this.angleIsSnap) {
          lng = this.snapPoint[0];
          lat = this.snapPoint[1];
        }
      }

      return [lng, lat];
    }
  }, {
    key: "onClickFinalModifications",
    value: function onClickFinalModifications(state, e, lng, lat) {
      if (state.line && state.line.coordinates.length >= 3) {
        addLineToSnapList(state.line.coordinates.slice(0, state.line.coordinates.length - 1), state);
      } else if (state.polygon && state.polygon.coordinates[0].length >= 3) {
        addLineToSnapList(state.polygon.coordinates[0].slice(0, state.polygon.coordinates[0].length - 1), state);
      }
    }
  }, {
    key: "removeStateMarker",
    value: function removeStateMarker(state) {
      if (state.markerPoint) {
        state.markerPoint.remove();
        state.markerPoint = undefined;
      }
    }
  }, {
    key: "onStop",
    value: function onStop(state) {
      var angleControl = this.findAngleControl(state);

      if (angleControl) {
        angleControl._container.lastChild.textContent = '0 °';
      }

      this.remove(state);
      this.removeStateMarker(state);
    }
  }]);

  return Angle;
}();

/* harmony default export */ const angle = (Angle);
// CONCATENATED MODULE: ./src/utils/distance.js
function distance_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function distance_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function distance_createClass(Constructor, protoProps, staticProps) { if (protoProps) distance_defineProperties(Constructor.prototype, protoProps); if (staticProps) distance_defineProperties(Constructor, staticProps); return Constructor; }



var Distance = /*#__PURE__*/function () {
  function Distance() {
    distance_classCallCheck(this, Distance);

    this.distance = 0;
  }

  distance_createClass(Distance, [{
    key: "onSetup",
    value: function onSetup(state) {
      state.distance = new Distance();
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(state, lng, lat) {
      if (state.line && state.line.coordinates.length >= 2) {
        state.distance.distance = Math.round((0,turf_min.distance)(state.line.coordinates[state.line.coordinates.length - 2], [lng, lat]) * 1000);
      } else if (state.polygon && state.polygon.coordinates[0].length >= 2) {
        state.distance.distance = Math.round((0,turf_min.distance)(state.polygon.coordinates[0][state.polygon.coordinates[0].length - 2], [lng, lat]) * 1000);
      }

      this.visualizeDistance(state);
    }
  }, {
    key: "visualizeDistance",
    value: function visualizeDistance(state) {
      var distanceControl = state.map._controls.find(function (control) {
        return control.constructor.name === 'DistanceControl';
      });

      if (distanceControl) {
        distanceControl._container.lastChild.textContent = state.distance.distance + ' m';
      }
    }
  }, {
    key: "onStop",
    value: function onStop(state) {
      var distanceControl = state.map._controls.find(function (control) {
        return control.constructor.name === 'DistanceControl';
      });

      if (distanceControl) {
        distanceControl._container.lastChild.textContent = '0 m';
      }
    }
  }]);

  return Distance;
}();

/* harmony default export */ const utils_distance = (Distance);
// CONCATENATED MODULE: ./src/modes/snap_polygon.js
function snap_polygon_slicedToArray(arr, i) { return snap_polygon_arrayWithHoles(arr) || snap_polygon_iterableToArrayLimit(arr, i) || snap_polygon_unsupportedIterableToArray(arr, i) || snap_polygon_nonIterableRest(); }

function snap_polygon_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function snap_polygon_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return snap_polygon_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return snap_polygon_arrayLikeToArray(o, minLen); }

function snap_polygon_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function snap_polygon_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function snap_polygon_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var SnapPolygonMode = _objectSpread({}, draw_polygon);

SnapPolygonMode.onSetup = function (options) {
  var _this = this;

  var polygon = this.newFeature({
    type: geojsonTypes.FEATURE,
    properties: {},
    geometry: {
      type: geojsonTypes.POLYGON,
      coordinates: [[]]
    }
  });
  var verticalGuide = this.newFeature(getGuideFeature(IDS.VERTICAL_GUIDE));
  var horizontalGuide = this.newFeature(getGuideFeature(IDS.HORIZONTAL_GUIDE));
  this.addFeature(polygon);
  this.addFeature(verticalGuide);
  this.addFeature(horizontalGuide);
  var selectedFeatures = this.getSelected();
  this.clearSelectedFeatures();
  double_click_zoom.disable(this);

  var _createSnapList = createSnapList(this.map, this._ctx.api, polygon),
      _createSnapList2 = snap_polygon_slicedToArray(_createSnapList, 2),
      snapList = _createSnapList2[0],
      vertices = _createSnapList2[1];

  var state = {
    map: this.map,
    polygon: polygon,
    currentVertexPosition: 0,
    vertices: vertices,
    snapList: snapList,
    selectedFeatures: selectedFeatures,
    verticalGuide: verticalGuide,
    horizontalGuide: horizontalGuide
  };
  state.options = this._ctx.options;

  var moveendCallback = function moveendCallback() {
    var _createSnapList3 = createSnapList(_this.map, _this._ctx.api, polygon),
        _createSnapList4 = snap_polygon_slicedToArray(_createSnapList3, 2),
        snapList = _createSnapList4[0],
        vertices = _createSnapList4[1];

    state.vertices = vertices;
    state.snapList = snapList;
  }; // for removing listener later on close


  state["moveendCallback"] = moveendCallback;

  var optionsChangedCallBAck = function optionsChangedCallBAck(options) {
    state.options = options;
  }; // for removing listener later on close


  state["optionsChangedCallBAck"] = optionsChangedCallBAck;
  this.map.on("moveend", moveendCallback);
  this.map.on("draw.snap.options_changed", optionsChangedCallBAck);
  new angle().onSetup(state);
  new utils_distance().onSetup(state);
  return state;
};

SnapPolygonMode.onClick = function (state, e) {
  // We save some processing by rounding on click, not mousemove
  var lng = state.snappedLng;
  var lat = state.snappedLat;
  var array = state.angle.transformSnapping(state, e, lng, lat);
  lng = array[0];
  lat = array[1]; // End the drawing if this click is on the previous position

  if (state.currentVertexPosition > 0) {
    var lastVertex = state.polygon.coordinates[0][state.currentVertexPosition - 1];
    state.lastVertex = lastVertex;

    if (lastVertex[0] === lng && lastVertex[1] === lat) {
      return this.changeMode(modes.SIMPLE_SELECT, {
        featureIds: [state.polygon.id]
      });
    }
  } // const point = state.map.project();


  addPointTovertices(state.map, state.vertices, {
    lng: lng,
    lat: lat
  });
  state.polygon.updateCoordinate("0.".concat(state.currentVertexPosition), lng, lat);
  state.currentVertexPosition++;
  state.polygon.updateCoordinate("0.".concat(state.currentVertexPosition), lng, lat);
  state.angle.onClickFinalModifications(state, e, lng, lat);
};

SnapPolygonMode.onMouseMove = function (state, e) {
  var _snap = snap(state, e),
      lng = _snap.lng,
      lat = _snap.lat;

  state.polygon.updateCoordinate("0.".concat(state.currentVertexPosition), lng, lat);
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

  if (state.lastVertex && state.lastVertex[0] === lng && state.lastVertex[1] === lat) {
    this.updateUIClasses({
      mouse: cursors.POINTER
    }); // cursor options:
    // ADD: "add"
    // DRAG: "drag"
    // MOVE: "move"
    // NONE: "none"
    // POINTER: "pointer"
  } else {
    this.updateUIClasses({
      mouse: cursors.ADD
    });
  }

  state.angle.moveOn(state, e);
  state.distance.onMouseMove(state, lng, lat);
}; // This is 'extending' DrawPolygon.toDisplayFeatures


SnapPolygonMode.toDisplayFeatures = function (state, geojson, display) {
  if (shouldHideGuide(state, geojson)) return; // This relies on the the state of SnapPolygonMode being similar to DrawPolygon

  draw_polygon.toDisplayFeatures(state, geojson, display);
}; // This is 'extending' DrawPolygon.onStop


SnapPolygonMode.onStop = function (state) {
  this.deleteFeature(IDS.VERTICAL_GUIDE, {
    silent: true
  });
  this.deleteFeature(IDS.HORIZONTAL_GUIDE, {
    silent: true
  }); // remove moveemd callback

  this.map.off("moveend", state.moveendCallback);
  this.map.off("draw.snap.options_changed", state.optionsChangedCallBAck); // This relies on the the state of SnapPolygonMode being similar to DrawPolygon

  draw_polygon.onStop.call(this, state);
  state.angle.onStop(state);
  state.distance.onStop(state);
};

/* harmony default export */ const snap_polygon = (SnapPolygonMode);
// CONCATENATED MODULE: ./node_modules/@mapbox/mapbox-gl-draw/src/modes/draw_point.js
;


const DrawPoint = {};

DrawPoint.onSetup = function() {
  const point = this.newFeature({
    type: geojsonTypes.FEATURE,
    properties: {},
    geometry: {
      type: geojsonTypes.POINT,
      coordinates: []
    }
  });

  this.addFeature(point);

  this.clearSelectedFeatures();
  this.updateUIClasses({ mouse: cursors.ADD });
  this.activateUIButton(types.POINT);

  this.setActionableState({
    trash: true
  });

  return { point };
};

DrawPoint.stopDrawingAndRemove = function(state) {
  this.deleteFeature([state.point.id], { silent: true });
  this.changeMode(modes.SIMPLE_SELECT);
};

DrawPoint.onTap = DrawPoint.onClick = function(state, e) {
  this.updateUIClasses({ mouse: cursors.MOVE });
  state.point.updateCoordinate('', e.lngLat.lng, e.lngLat.lat);
  this.map.fire(events.CREATE, {
    features: [state.point.toGeoJSON()]
  });
  this.changeMode(modes.SIMPLE_SELECT, { featureIds: [state.point.id] });
};

DrawPoint.onStop = function(state) {
  this.activateUIButton();
  if (!state.point.getCoordinate().length) {
    this.deleteFeature([state.point.id], { silent: true });
  }
};

DrawPoint.toDisplayFeatures = function(state, geojson, display) {
  // Never render the point we're drawing
  const isActivePoint = geojson.properties.id === state.point.id;
  geojson.properties.active = (isActivePoint) ? activeStates.ACTIVE : activeStates.INACTIVE;
  if (!isActivePoint) return display(geojson);
};

DrawPoint.onTrash = DrawPoint.stopDrawingAndRemove;

DrawPoint.onKeyUp = function(state, e) {
  if (isEscapeKey(e) || isEnterKey(e)) {
    return this.stopDrawingAndRemove(state, e);
  }
};

/* harmony default export */ const draw_point = (DrawPoint);

// CONCATENATED MODULE: ./src/modes/snap_point.js
function snap_point_slicedToArray(arr, i) { return snap_point_arrayWithHoles(arr) || snap_point_iterableToArrayLimit(arr, i) || snap_point_unsupportedIterableToArray(arr, i) || snap_point_nonIterableRest(); }

function snap_point_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function snap_point_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return snap_point_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return snap_point_arrayLikeToArray(o, minLen); }

function snap_point_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function snap_point_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function snap_point_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function snap_point_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function snap_point_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { snap_point_ownKeys(Object(source), true).forEach(function (key) { snap_point_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { snap_point_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function snap_point_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var SnapPointMode = snap_point_objectSpread({}, draw_point);

SnapPointMode.onSetup = function (options) {
  var _this = this;

  var point = this.newFeature({
    type: geojsonTypes.FEATURE,
    properties: {},
    geometry: {
      type: geojsonTypes.POINT,
      coordinates: [[]]
    }
  });
  var verticalGuide = this.newFeature(getGuideFeature(IDS.VERTICAL_GUIDE));
  var horizontalGuide = this.newFeature(getGuideFeature(IDS.HORIZONTAL_GUIDE));
  this.addFeature(point);
  this.addFeature(verticalGuide);
  this.addFeature(horizontalGuide);
  var selectedFeatures = this.getSelected();
  this.clearSelectedFeatures();
  double_click_zoom.disable(this);

  var _createSnapList = createSnapList(this.map, this._ctx.api, point),
      _createSnapList2 = snap_point_slicedToArray(_createSnapList, 2),
      snapList = _createSnapList2[0],
      vertices = _createSnapList2[1];

  var state = {
    map: this.map,
    point: point,
    vertices: vertices,
    snapList: snapList,
    selectedFeatures: selectedFeatures,
    verticalGuide: verticalGuide,
    horizontalGuide: horizontalGuide
  };
  state.options = this._ctx.options;

  var moveendCallback = function moveendCallback() {
    var _createSnapList3 = createSnapList(_this.map, _this._ctx.api, point),
        _createSnapList4 = snap_point_slicedToArray(_createSnapList3, 2),
        snapList = _createSnapList4[0],
        vertices = _createSnapList4[1];

    state.vertices = vertices;
    state.snapList = snapList;
  }; // for removing listener later on close


  state["moveendCallback"] = moveendCallback;

  var optionsChangedCallBAck = function optionsChangedCallBAck(options) {
    state.options = options;
  }; // for removing listener later on close


  state["optionsChangedCallBAck"] = optionsChangedCallBAck;
  this.map.on("moveend", moveendCallback);
  this.map.on("draw.snap.options_changed", optionsChangedCallBAck);
  return state;
};

SnapPointMode.onClick = function (state) {
  // We mock out e with the rounded lng/lat then call DrawPoint with it
  draw_point.onClick.call(this, state, {
    lngLat: {
      lng: state.snappedLng,
      lat: state.snappedLat
    }
  });
};

SnapPointMode.onMouseMove = function (state, e) {
  var _snap = snap(state, e),
      lng = _snap.lng,
      lat = _snap.lat;

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

  if (state.lastVertex && state.lastVertex[0] === lng && state.lastVertex[1] === lat) {
    this.updateUIClasses({
      mouse: cursors.POINTER
    }); // cursor options:
    // ADD: "add"
    // DRAG: "drag"
    // MOVE: "move"
    // NONE: "none"
    // POINTER: "pointer"
  } else {
    this.updateUIClasses({
      mouse: cursors.ADD
    });
  }
}; // This is 'extending' DrawPoint.toDisplayFeatures


SnapPointMode.toDisplayFeatures = function (state, geojson, display) {
  if (shouldHideGuide(state, geojson)) return; // This relies on the the state of SnapPointMode having a 'point' prop

  draw_point.toDisplayFeatures(state, geojson, display);
}; // This is 'extending' DrawPoint.onStop


SnapPointMode.onStop = function (state) {
  this.deleteFeature(IDS.VERTICAL_GUIDE, {
    silent: true
  });
  this.deleteFeature(IDS.HORIZONTAL_GUIDE, {
    silent: true
  }); // remove moveemd callback

  this.map.off("moveend", state.moveendCallback); // This relies on the the state of SnapPointMode having a 'point' prop

  draw_point.onStop.call(this, state);

  if (state.markerPoint) {
    state.markerPoint.remove();
    state.markerPoint = undefined;
  }
};

/* harmony default export */ const snap_point = (SnapPointMode);
// CONCATENATED MODULE: ./node_modules/@mapbox/mapbox-gl-draw/src/modes/draw_line_string.js
;





const DrawLineString = {};

DrawLineString.onSetup = function(opts) {
  opts = opts || {};
  const featureId = opts.featureId;

  let line, currentVertexPosition;
  let direction = 'forward';
  if (featureId) {
    line = this.getFeature(featureId);
    if (!line) {
      throw new Error('Could not find a feature with the provided featureId');
    }
    let from = opts.from;
    if (from && from.type === 'Feature' && from.geometry && from.geometry.type === 'Point') {
      from = from.geometry;
    }
    if (from && from.type === 'Point' && from.coordinates && from.coordinates.length === 2) {
      from = from.coordinates;
    }
    if (!from || !Array.isArray(from)) {
      throw new Error('Please use the `from` property to indicate which point to continue the line from');
    }
    const lastCoord = line.coordinates.length - 1;
    if (line.coordinates[lastCoord][0] === from[0] && line.coordinates[lastCoord][1] === from[1]) {
      currentVertexPosition = lastCoord + 1;
      // add one new coordinate to continue from
      line.addCoordinate(currentVertexPosition, ...line.coordinates[lastCoord]);
    } else if (line.coordinates[0][0] === from[0] && line.coordinates[0][1] === from[1]) {
      direction = 'backwards';
      currentVertexPosition = 0;
      // add one new coordinate to continue from
      line.addCoordinate(currentVertexPosition, ...line.coordinates[0]);
    } else {
      throw new Error('`from` should match the point at either the start or the end of the provided LineString');
    }
  } else {
    line = this.newFeature({
      type: geojsonTypes.FEATURE,
      properties: {},
      geometry: {
        type: geojsonTypes.LINE_STRING,
        coordinates: []
      }
    });
    currentVertexPosition = 0;
    this.addFeature(line);
  }

  this.clearSelectedFeatures();
  double_click_zoom.disable(this);
  this.updateUIClasses({ mouse: cursors.ADD });
  this.activateUIButton(types.LINE);
  this.setActionableState({
    trash: true
  });

  return {
    line,
    currentVertexPosition,
    direction
  };
};

DrawLineString.clickAnywhere = function(state, e) {
  if (state.currentVertexPosition > 0 && is_event_at_coordinates(e, state.line.coordinates[state.currentVertexPosition - 1]) ||
      state.direction === 'backwards' && is_event_at_coordinates(e, state.line.coordinates[state.currentVertexPosition + 1])) {
    return this.changeMode(modes.SIMPLE_SELECT, { featureIds: [state.line.id] });
  }
  this.updateUIClasses({ mouse: cursors.ADD });
  state.line.updateCoordinate(state.currentVertexPosition, e.lngLat.lng, e.lngLat.lat);
  if (state.direction === 'forward') {
    state.currentVertexPosition++;
    state.line.updateCoordinate(state.currentVertexPosition, e.lngLat.lng, e.lngLat.lat);
  } else {
    state.line.addCoordinate(0, e.lngLat.lng, e.lngLat.lat);
  }
};

DrawLineString.clickOnVertex = function(state) {
  return this.changeMode(modes.SIMPLE_SELECT, { featureIds: [state.line.id] });
};

DrawLineString.onMouseMove = function(state, e) {
  state.line.updateCoordinate(state.currentVertexPosition, e.lngLat.lng, e.lngLat.lat);
  if (isVertex(e)) {
    this.updateUIClasses({ mouse: cursors.POINTER });
  }
};

DrawLineString.onTap = DrawLineString.onClick = function(state, e) {
  if (isVertex(e)) return this.clickOnVertex(state, e);
  this.clickAnywhere(state, e);
};

DrawLineString.onKeyUp = function(state, e) {
  if (isEnterKey(e)) {
    this.changeMode(modes.SIMPLE_SELECT, { featureIds: [state.line.id] });
  } else if (isEscapeKey(e)) {
    this.deleteFeature([state.line.id], { silent: true });
    this.changeMode(modes.SIMPLE_SELECT);
  }
};

DrawLineString.onStop = function(state) {
  double_click_zoom.enable(this);
  this.activateUIButton();

  // check to see if we've deleted this feature
  if (this.getFeature(state.line.id) === undefined) return;

  //remove last added coordinate
  state.line.removeCoordinate(`${state.currentVertexPosition}`);
  if (state.line.isValid()) {
    this.map.fire(events.CREATE, {
      features: [state.line.toGeoJSON()]
    });
  } else {
    this.deleteFeature([state.line.id], { silent: true });
    this.changeMode(modes.SIMPLE_SELECT, {}, { silent: true });
  }
};

DrawLineString.onTrash = function(state) {
  this.deleteFeature([state.line.id], { silent: true });
  this.changeMode(modes.SIMPLE_SELECT);
};

DrawLineString.toDisplayFeatures = function(state, geojson, display) {
  const isActiveLine = geojson.properties.id === state.line.id;
  geojson.properties.active = (isActiveLine) ? activeStates.ACTIVE : activeStates.INACTIVE;
  if (!isActiveLine) return display(geojson);
  // Only render the line if it has at least one real coordinate
  if (geojson.geometry.coordinates.length < 2) return;
  geojson.properties.meta = meta.FEATURE;
  display(create_vertex(
    state.line.id,
    geojson.geometry.coordinates[state.direction === 'forward' ? geojson.geometry.coordinates.length - 2 : 1],
    `${state.direction === 'forward' ? geojson.geometry.coordinates.length - 2 : 1}`,
    false
  ));

  display(geojson);
};

/* harmony default export */ const draw_line_string = (DrawLineString);

// CONCATENATED MODULE: ./src/modes/snap_line.js
function snap_line_slicedToArray(arr, i) { return snap_line_arrayWithHoles(arr) || snap_line_iterableToArrayLimit(arr, i) || snap_line_unsupportedIterableToArray(arr, i) || snap_line_nonIterableRest(); }

function snap_line_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function snap_line_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return snap_line_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return snap_line_arrayLikeToArray(o, minLen); }

function snap_line_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function snap_line_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function snap_line_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function snap_line_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function snap_line_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { snap_line_ownKeys(Object(source), true).forEach(function (key) { snap_line_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { snap_line_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function snap_line_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var SnapLineMode = snap_line_objectSpread({}, draw_line_string);

SnapLineMode.onSetup = function (options) {
  var _this = this;

  var line = this.newFeature({
    type: geojsonTypes.FEATURE,
    properties: {},
    geometry: {
      type: geojsonTypes.LINE_STRING,
      coordinates: [[]]
    }
  });
  var verticalGuide = this.newFeature(getGuideFeature(IDS.VERTICAL_GUIDE));
  var horizontalGuide = this.newFeature(getGuideFeature(IDS.HORIZONTAL_GUIDE));
  this.addFeature(line);
  this.addFeature(verticalGuide);
  this.addFeature(horizontalGuide);
  var selectedFeatures = this.getSelected();
  this.clearSelectedFeatures();
  double_click_zoom.disable(this);

  var _createSnapList = createSnapList(this.map, this._ctx.api, line),
      _createSnapList2 = snap_line_slicedToArray(_createSnapList, 2),
      snapList = _createSnapList2[0],
      vertices = _createSnapList2[1];

  var state = {
    map: this.map,
    line: line,
    currentVertexPosition: 0,
    vertices: vertices,
    snapList: snapList,
    selectedFeatures: selectedFeatures,
    verticalGuide: verticalGuide,
    horizontalGuide: horizontalGuide,
    direction: "forward" // expected by DrawLineString

  };
  state.options = this._ctx.options;

  var moveendCallback = function moveendCallback() {
    var _createSnapList3 = createSnapList(_this.map, _this._ctx.api, line),
        _createSnapList4 = snap_line_slicedToArray(_createSnapList3, 2),
        snapList = _createSnapList4[0],
        vertices = _createSnapList4[1];

    state.vertices = vertices;
    state.snapList = snapList;
  }; // for removing listener later on close


  state["moveendCallback"] = moveendCallback;

  var optionsChangedCallBAck = function optionsChangedCallBAck(options) {
    state.options = options;
  }; // for removing listener later on close


  state["optionsChangedCallBAck"] = optionsChangedCallBAck;
  this.map.on("moveend", moveendCallback);
  this.map.on("draw.snap.options_changed", optionsChangedCallBAck);
  new angle().onSetup(state);
  new utils_distance().onSetup(state);
  return state;
};

SnapLineMode.onClick = function (state, e) {
  // We save some processing by rounding on click, not mousemove
  var lng = state.snappedLng;
  var lat = state.snappedLat;
  var array = state.angle.transformSnapping(state, e, lng, lat);
  lng = array[0];
  lat = array[1];
  /* if (state.angle.snapPoint) {
    lng = state.angle.snapPoint[0];
    lat = state.angle.snapPoint[1];
  } */
  // End the drawing if this click is on the previous position
  // Note: not bothering with 'direction'

  if (state.currentVertexPosition > 0) {
    var lastVertex = state.line.coordinates[state.currentVertexPosition - 1];
    state.lastVertex = lastVertex;

    if (lastVertex[0] === lng && lastVertex[1] === lat) {
      return this.changeMode(modes.SIMPLE_SELECT, {
        featureIds: [state.line.id]
      });
    }
  } // const point = state.map.project({ lng: lng, lat: lat });


  addPointTovertices(state.map, state.vertices, {
    lng: lng,
    lat: lat
  });
  state.line.updateCoordinate(state.currentVertexPosition, lng, lat);
  state.currentVertexPosition++;
  state.line.updateCoordinate(state.currentVertexPosition, lng, lat);
  state.angle.onClickFinalModifications(state, e, lng, lat);
};

SnapLineMode.onMouseMove = function (state, e) {
  var _snap = snap(state, e),
      lng = _snap.lng,
      lat = _snap.lat;

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

  if (state.lastVertex && state.lastVertex[0] === lng && state.lastVertex[1] === lat) {
    this.updateUIClasses({
      mouse: cursors.POINTER
    }); // cursor options:
    // ADD: "add"
    // DRAG: "drag"
    // MOVE: "move"
    // NONE: "none"
    // POINTER: "pointer"
  } else {
    this.updateUIClasses({
      mouse: cursors.ADD
    });
  }

  state.angle.moveOn(state, e, lng, lat);
  state.distance.onMouseMove(state, lng, lat);
}; // This is 'extending' DrawLine.toDisplayFeatures


SnapLineMode.toDisplayFeatures = function (state, geojson, display) {
  if (shouldHideGuide(state, geojson)) return; // This relies on the the state of SnapLineMode being similar to DrawLine

  draw_line_string.toDisplayFeatures(state, geojson, display);
}; // This is 'extending' DrawLine.onStop


SnapLineMode.onStop = function (state) {
  this.deleteFeature(IDS.VERTICAL_GUIDE, {
    silent: true
  });
  this.deleteFeature(IDS.HORIZONTAL_GUIDE, {
    silent: true
  }); // remove moveemd callback

  this.map.off("moveend", state.moveendCallback); // This relies on the the state of SnapLineMode being similar to DrawLine

  draw_line_string.onStop.call(this, state);
  state.angle.onStop(state);
  state.distance.onStop(state);
};

/* harmony default export */ const snap_line = (SnapLineMode);
// CONCATENATED MODULE: ./node_modules/@mapbox/mapbox-gl-draw/src/lib/theme.js
/* harmony default export */ const theme = ([
  {
    'id': 'gl-draw-polygon-fill-inactive',
    'type': 'fill',
    'filter': ['all',
      ['==', 'active', 'false'],
      ['==', '$type', 'Polygon'],
      ['!=', 'mode', 'static']
    ],
    'paint': {
      'fill-color': '#3bb2d0',
      'fill-outline-color': '#3bb2d0',
      'fill-opacity': 0.1
    }
  },
  {
    'id': 'gl-draw-polygon-fill-active',
    'type': 'fill',
    'filter': ['all', ['==', 'active', 'true'], ['==', '$type', 'Polygon']],
    'paint': {
      'fill-color': '#fbb03b',
      'fill-outline-color': '#fbb03b',
      'fill-opacity': 0.1
    }
  },
  {
    'id': 'gl-draw-polygon-midpoint',
    'type': 'circle',
    'filter': ['all',
      ['==', '$type', 'Point'],
      ['==', 'meta', 'midpoint']],
    'paint': {
      'circle-radius': 3,
      'circle-color': '#fbb03b'
    }
  },
  {
    'id': 'gl-draw-polygon-stroke-inactive',
    'type': 'line',
    'filter': ['all',
      ['==', 'active', 'false'],
      ['==', '$type', 'Polygon'],
      ['!=', 'mode', 'static']
    ],
    'layout': {
      'line-cap': 'round',
      'line-join': 'round'
    },
    'paint': {
      'line-color': '#3bb2d0',
      'line-width': 2
    }
  },
  {
    'id': 'gl-draw-polygon-stroke-active',
    'type': 'line',
    'filter': ['all', ['==', 'active', 'true'], ['==', '$type', 'Polygon']],
    'layout': {
      'line-cap': 'round',
      'line-join': 'round'
    },
    'paint': {
      'line-color': '#fbb03b',
      'line-dasharray': [0.2, 2],
      'line-width': 2
    }
  },
  {
    'id': 'gl-draw-line-inactive',
    'type': 'line',
    'filter': ['all',
      ['==', 'active', 'false'],
      ['==', '$type', 'LineString'],
      ['!=', 'mode', 'static']
    ],
    'layout': {
      'line-cap': 'round',
      'line-join': 'round'
    },
    'paint': {
      'line-color': '#3bb2d0',
      'line-width': 2
    }
  },
  {
    'id': 'gl-draw-line-active',
    'type': 'line',
    'filter': ['all',
      ['==', '$type', 'LineString'],
      ['==', 'active', 'true']
    ],
    'layout': {
      'line-cap': 'round',
      'line-join': 'round'
    },
    'paint': {
      'line-color': '#fbb03b',
      'line-dasharray': [0.2, 2],
      'line-width': 2
    }
  },
  {
    'id': 'gl-draw-polygon-and-line-vertex-stroke-inactive',
    'type': 'circle',
    'filter': ['all',
      ['==', 'meta', 'vertex'],
      ['==', '$type', 'Point'],
      ['!=', 'mode', 'static']
    ],
    'paint': {
      'circle-radius': 5,
      'circle-color': '#fff'
    }
  },
  {
    'id': 'gl-draw-polygon-and-line-vertex-inactive',
    'type': 'circle',
    'filter': ['all',
      ['==', 'meta', 'vertex'],
      ['==', '$type', 'Point'],
      ['!=', 'mode', 'static']
    ],
    'paint': {
      'circle-radius': 3,
      'circle-color': '#fbb03b'
    }
  },
  {
    'id': 'gl-draw-point-point-stroke-inactive',
    'type': 'circle',
    'filter': ['all',
      ['==', 'active', 'false'],
      ['==', '$type', 'Point'],
      ['==', 'meta', 'feature'],
      ['!=', 'mode', 'static']
    ],
    'paint': {
      'circle-radius': 5,
      'circle-opacity': 1,
      'circle-color': '#fff'
    }
  },
  {
    'id': 'gl-draw-point-inactive',
    'type': 'circle',
    'filter': ['all',
      ['==', 'active', 'false'],
      ['==', '$type', 'Point'],
      ['==', 'meta', 'feature'],
      ['!=', 'mode', 'static']
    ],
    'paint': {
      'circle-radius': 3,
      'circle-color': '#3bb2d0'
    }
  },
  {
    'id': 'gl-draw-point-stroke-active',
    'type': 'circle',
    'filter': ['all',
      ['==', '$type', 'Point'],
      ['==', 'active', 'true'],
      ['!=', 'meta', 'midpoint']
    ],
    'paint': {
      'circle-radius': 7,
      'circle-color': '#fff'
    }
  },
  {
    'id': 'gl-draw-point-active',
    'type': 'circle',
    'filter': ['all',
      ['==', '$type', 'Point'],
      ['!=', 'meta', 'midpoint'],
      ['==', 'active', 'true']],
    'paint': {
      'circle-radius': 5,
      'circle-color': '#fbb03b'
    }
  },
  {
    'id': 'gl-draw-polygon-fill-static',
    'type': 'fill',
    'filter': ['all', ['==', 'mode', 'static'], ['==', '$type', 'Polygon']],
    'paint': {
      'fill-color': '#404040',
      'fill-outline-color': '#404040',
      'fill-opacity': 0.1
    }
  },
  {
    'id': 'gl-draw-polygon-stroke-static',
    'type': 'line',
    'filter': ['all', ['==', 'mode', 'static'], ['==', '$type', 'Polygon']],
    'layout': {
      'line-cap': 'round',
      'line-join': 'round'
    },
    'paint': {
      'line-color': '#404040',
      'line-width': 2
    }
  },
  {
    'id': 'gl-draw-line-static',
    'type': 'line',
    'filter': ['all', ['==', 'mode', 'static'], ['==', '$type', 'LineString']],
    'layout': {
      'line-cap': 'round',
      'line-join': 'round'
    },
    'paint': {
      'line-color': '#404040',
      'line-width': 2
    }
  },
  {
    'id': 'gl-draw-point-static',
    'type': 'circle',
    'filter': ['all', ['==', 'mode', 'static'], ['==', '$type', 'Point']],
    'paint': {
      'circle-radius': 5,
      'circle-color': '#404040'
    }
  }
]);

// CONCATENATED MODULE: ./src/utils/customDrawStyles.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || customDrawStyles_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function customDrawStyles_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return customDrawStyles_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return customDrawStyles_arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return customDrawStyles_arrayLikeToArray(arr); }

function customDrawStyles_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function customDrawStyles_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function customDrawStyles_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { customDrawStyles_ownKeys(Object(source), true).forEach(function (key) { customDrawStyles_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { customDrawStyles_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function customDrawStyles_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var modifiedDefaultStyles = theme.map(function (defaultStyle) {
  if (defaultStyle.id === 'gl-draw-line-inactive') {
    return customDrawStyles_objectSpread(customDrawStyles_objectSpread({}, defaultStyle), {}, {
      filter: [].concat(_toConsumableArray(defaultStyle.filter), [['!=', 'user_isSnapGuide', 'true']])
    });
  }

  return defaultStyle;
});
var customDrawStyles = [].concat(_toConsumableArray(modifiedDefaultStyles), [{
  id: "guide",
  type: "line",
  filter: ["all", ["==", "$type", "LineString"], ["==", "user_isSnapGuide", "true"]],
  layout: {
    "line-cap": "round",
    "line-join": "round"
  },
  paint: {
    "line-color": "#c00c00",
    "line-width": 1,
    "line-dasharray": [5, 5]
  }
}]);
/* harmony default export */ const utils_customDrawStyles = (customDrawStyles);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// CONCATENATED MODULE: ./src/mapBoxGlSnap.js
function mapBoxGlSnap_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function mapBoxGlSnap_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { mapBoxGlSnap_ownKeys(Object(source), true).forEach(function (key) { mapBoxGlSnap_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { mapBoxGlSnap_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function mapBoxGlSnap_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function mapBoxGlSnap_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function mapBoxGlSnap_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function mapBoxGlSnap_createClass(Constructor, protoProps, staticProps) { if (protoProps) mapBoxGlSnap_defineProperties(Constructor.prototype, protoProps); if (staticProps) mapBoxGlSnap_defineProperties(Constructor, staticProps); return Constructor; }







var DistanceControl = /*#__PURE__*/function () {
  function DistanceControl() {
    mapBoxGlSnap_classCallCheck(this, DistanceControl);
  }

  mapBoxGlSnap_createClass(DistanceControl, [{
    key: "onAdd",
    value: function onAdd(map) {
      this._map = map;
      this._container = document.createElement('div');
      this._container.className = 'mapboxgl-ctrl';
      this._container.style.backgroundColor = 'white';
      this._container.style.fontSize = '30px';
      this._container.style.padding = '5px';
      this._container.textContent = '0 m';
      return this._container;
    }
  }, {
    key: "onRemove",
    value: function onRemove() {
      this._container.parentNode.removeChild(this._container);

      this._map = undefined;
    }
  }]);

  return DistanceControl;
}();

var AngleControl = /*#__PURE__*/function () {
  function AngleControl() {
    mapBoxGlSnap_classCallCheck(this, AngleControl);
  }

  mapBoxGlSnap_createClass(AngleControl, [{
    key: "onAdd",
    value: function onAdd(map) {
      this._map = map;
      this._container = document.createElement('div');
      this._container.className = 'mapboxgl-ctrl';
      this._container.style.backgroundColor = 'white';
      this._container.style.fontSize = '30px';
      this._container.style.padding = '5px';
      this._container.textContent = '0 °';
      return this._container;
    }
  }, {
    key: "onRemove",
    value: function onRemove() {
      this._container.parentNode.removeChild(this._container);

      this._map = undefined;
    }
  }]);

  return AngleControl;
}();

var extendDrawBarCheckboxes = /*#__PURE__*/function () {
  function extendDrawBarCheckboxes(opt) {
    mapBoxGlSnap_classCallCheck(this, extendDrawBarCheckboxes);

    var ctrl = this;
    ctrl.checkboxes = opt.checkboxes || [];
    ctrl.onRemoveOrig = opt.draw.onRemove;
  }

  mapBoxGlSnap_createClass(extendDrawBarCheckboxes, [{
    key: "onAdd",
    value: function onAdd(map) {
      var ctrl = this;
      ctrl.map = map;
      ctrl._container = document.createElement("div");
      ctrl._container.className = "mapboxgl-ctrl-group mapboxgl-ctrl";
      ctrl.elContainer = ctrl._container;
      ctrl.checkboxes.forEach(function (b) {
        ctrl.addCheckbox(b);
      });
      return ctrl._container;
    }
  }, {
    key: "onRemove",
    value: function onRemove(map) {
      ctrl.checkboxes.forEach(function (b) {
        ctrl.removeButton(b);
      });
      ctrl.onRemoveOrig(map);
    }
  }, {
    key: "addCheckbox",
    value: function addCheckbox(opt) {
      var ctrl = this;
      var elCheckbox = document.createElement("input");
      elCheckbox.setAttribute("type", "checkbox");
      elCheckbox.setAttribute("title", opt.title);
      elCheckbox.checked = opt.initialState === "checked";
      elCheckbox.className = "mapbox-gl-draw_ctrl-draw-btn";

      if (opt.classes instanceof Array) {
        opt.classes.forEach(function (c) {
          elCheckbox.classList.add(c);
        });
      }

      elCheckbox.addEventListener(opt.on, opt.action);
      ctrl.elContainer.appendChild(elCheckbox);
      opt.elCheckbox = elCheckbox;
    }
  }, {
    key: "removeButton",
    value: function removeButton(opt) {
      opt.elCheckbox.removeEventListener(opt.on, opt.action);
      opt.elCheckbox.remove();
    }
  }]);

  return extendDrawBarCheckboxes;
}();

function MapBoxGlSnap(props) {
  (0,react.useEffect)(function () {
    var map = props.map;
    var draw = new MapboxDraw({
      modes: mapBoxGlSnap_objectSpread(mapBoxGlSnap_objectSpread({}, MapboxDraw.modes), {}, {
        draw_point: snap_point,
        draw_polygon: snap_polygon,
        draw_line_string: snap_line
      }),
      styles: utils_customDrawStyles,
      userProperties: true,
      snap: true,
      snapOptions: {
        snapPx: 15,
        snapToMidPoints: true
      },
      guides: false
    });
    map.once("load", function () {
      nprogress.done();
      map.resize();
      var SnapOptionsBar = new extendDrawBarCheckboxes({
        draw: draw,
        checkboxes: [{
          on: "change",
          action: function action(e) {
            draw.options.snap = e.target.checked;
          },
          classes: ["snap_mode", "snap"],
          title: "Snap when Draw",
          initialState: "checked"
        }, {
          on: "change",
          action: function action(e) {
            draw.options.guides = e.target.checked;
          },
          classes: ["snap_mode", "grid"],
          title: "Show Guides"
        }]
      });
      map.addControl(draw, "top-right");
      map.addControl(SnapOptionsBar, "top-right");
      var SnapAngleOptionsBar = new extendDrawBarCheckboxes({
        draw: draw,
        checkboxes: [{
          on: "change",
          action: function action(e) {
            draw.options.angle = e.target.checked;
            console.log(e, draw, '1');
          },
          classes: ["snap_mode_angle", "snap_angle"],
          title: "Snap angle",
          initialState: "checked"
        }]
      });
      draw.options.angle = true;
      map.addControl(SnapAngleOptionsBar, "top-right");
      var angle = map.addControl(new AngleControl(), "bottom-right");
      var distance = map.addControl(new DistanceControl(), "bottom-right");
    });
  }, []);
  ReactDOM.render( /*#__PURE__*/react.createElement("div", {
    "class": "map-wrapper"
  }, /*#__PURE__*/react.createElement("div", {
    id: "map"
  })), document.getElementById('root'));
}
// CONCATENATED MODULE: ./src/index.js


/***/ }),

/***/ 418:
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 408:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
/** @license React v17.0.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=__webpack_require__(418),n=60103,p=60106;__webpack_unused_export__=60107;__webpack_unused_export__=60108;__webpack_unused_export__=60114;var q=60109,r=60110,t=60112;__webpack_unused_export__=60113;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");__webpack_unused_export__=w("react.fragment");__webpack_unused_export__=w("react.strict_mode");__webpack_unused_export__=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");__webpack_unused_export__=w("react.suspense");u=w("react.memo");v=w("react.lazy")}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return"function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState")};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return{$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
function K(a,b){return{$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return"object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d)}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};
__webpack_unused_export__={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;P(a,function(){b++});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};__webpack_unused_export__=C;__webpack_unused_export__=E;__webpack_unused_export__=T;
__webpack_unused_export__=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g}return{$$typeof:n,type:a.type,
key:d,ref:k,props:e,_owner:h}};__webpack_unused_export__=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=J;__webpack_unused_export__=function(a){var b=J.bind(null,a);b.type=a;return b};__webpack_unused_export__=function(){return{current:null}};__webpack_unused_export__=function(a){return{$$typeof:t,render:a}};__webpack_unused_export__=L;
__webpack_unused_export__=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};__webpack_unused_export__=function(a,b){return{$$typeof:u,type:a,compare:void 0===b?null:b}};__webpack_unused_export__=function(a,b){return S().useCallback(a,b)};__webpack_unused_export__=function(a,b){return S().useContext(a,b)};__webpack_unused_export__=function(){};exports.useEffect=function(a,b){return S().useEffect(a,b)};__webpack_unused_export__=function(a,b,c){return S().useImperativeHandle(a,b,c)};
__webpack_unused_export__=function(a,b){return S().useLayoutEffect(a,b)};__webpack_unused_export__=function(a,b){return S().useMemo(a,b)};__webpack_unused_export__=function(a,b,c){return S().useReducer(a,b,c)};__webpack_unused_export__=function(a){return S().useRef(a)};__webpack_unused_export__=function(a){return S().useState(a)};__webpack_unused_export__="17.0.1";


/***/ }),

/***/ 294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(408);
} else {}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(910);
/******/ })()
;
});
//# sourceMappingURL=mapbox-gl-draw-snap-mode.js.map