import{b2 as F,dk as y,u as I,r as w}from"./index.9d2cc31f.js";import{a as S}from"./pbf.b53226eb.js";import{e as G,s as D,t as g}from"./OptimizedGeometry.0970ac1f.js";import{e as R}from"./OptimizedFeatureSet.2574e09f.js";const T=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class ee{constructor(t){this.options=t,this.geometryTypes=T,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new R}prepareFeatures(t){this._vertexDimension=2,t.hasZ&&this._vertexDimension++,t.hasM&&this._vertexDimension++}finishFeatureResult(t){if(!t||!t.features||!t.hasZ||!this.options.sourceSpatialReference||!t.spatialReference||F(t.spatialReference,this.options.sourceSpatialReference)||t.spatialReference.vcsWkid)return;const r=y(this.options.sourceSpatialReference)/y(t.spatialReference);if(r!==1)for(const s of t.features){if(!G(s))continue;const a=s.geometry.coords;for(let n=2;n<a.length;n+=3)a[n]*=r}}addFeature(t,r){t.features.push(r)}createFeature(){return new D}createSpatialReference(){return{wkid:0}}createGeometry(){return new g}addField(t,r){t.fields.push(r)}allocateCoordinates(t){t.coords.length=t.lengths.reduce((r,s)=>r+s,0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(t,r){t.coords[this._coordinatePtr++]=r}addCoordinatePoint(t,r){t.coords.push(r)}addLength(t,r){t.lengths.push(r)}addQueryGeometry(t,r){t.queryGeometry=r.queryGeometry,t.queryGeometryType=r.queryGeometryType}createPointGeometry(){return new g}}const f=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML"],d=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],b=["upperLeft","lowerLeft"];function h(e){return e>=f.length?null:f[e]}function x(e){return e>=d.length?null:d[e]}function k(e){return e>=b.length?null:b[e]}function m(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function M(e,t,r){const a=t.createPointGeometry(r);for(;e.next();)switch(e.tag()){case 3:{const n=e.getUInt32(),c=e.pos()+n;let o=0;for(;e.pos()<c;)t.addCoordinatePoint(a,e.getSInt64(),o++);break}default:e.skip()}return a}function U(e,t,r){const n=t.createGeometry(r),c=2+(r.hasZ?1:0)+(r.hasM?1:0);for(;e.next();)switch(e.tag()){case 2:{const o=e.getUInt32(),u=e.pos()+o;let l=0;for(;e.pos()<u;)t.addLength(n,e.getUInt32(),l++);break}case 3:{const o=e.getUInt32(),u=e.pos()+o;let l=0;for(t.allocateCoordinates(n);e.pos()<u;)t.addCoordinate(n,e.getSInt64(),l),l++,l===c&&(l=0);break}default:e.skip()}return n}function P(e){const a=new g;let n="esriGeometryPoint";for(;e.next();)switch(e.tag()){case 2:{const c=e.getUInt32(),o=e.pos()+c;for(;e.pos()<o;)a.lengths.push(e.getUInt32());break}case 3:{const c=e.getUInt32(),o=e.pos()+c;for(;e.pos()<o;)a.coords.push(e.getSInt64());break}case 1:n=T[e.getEnum()];break;default:e.skip()}return{queryGeometry:a,queryGeometryType:n}}function W(e){for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getSInt32();case 5:return e.getUInt32();case 6:return e.getInt64();case 7:return e.getUInt64();case 8:return e.getSInt64();case 9:return e.getBool();default:return e.skip(),null}return null}function B(e){const o={type:h(0)};for(;e.next();)switch(e.tag()){case 1:o.name=e.getString();break;case 2:o.type=h(e.getEnum());break;case 3:o.alias=e.getString();break;case 4:o.sqlType=x(e.getEnum());break;case 5:e.skip();break;case 6:o.defaultValue=e.getString();break;default:e.skip()}return o}function L(e){const s={};for(;e.next();)switch(e.tag()){case 1:s.name=e.getString();break;case 2:s.isSystemMaintained=e.getBool();break;default:e.skip()}return s}function N(e,t,r,s){const o=t.createFeature(r);let u=0;for(;e.next();)switch(e.tag()){case 1:{const l=s[u++].name;o.attributes[l]=e.processMessage(W);break}case 2:o.geometry=e.processMessageWithArgs(U,t,r);break;case 4:o.centroid=e.processMessageWithArgs(M,t,r);break;default:e.skip()}return o}function A(e){const n=[1,1,1,1];for(;e.next();)switch(e.tag()){case 1:n[0]=e.getDouble();break;case 2:n[1]=e.getDouble();break;case 4:n[2]=e.getDouble();break;case 3:n[3]=e.getDouble();break;default:e.skip()}return n}function V(e){const n=[0,0,0,0];for(;e.next();)switch(e.tag()){case 1:n[0]=e.getDouble();break;case 2:n[1]=e.getDouble();break;case 4:n[2]=e.getDouble();break;case 3:n[3]=e.getDouble();break;default:e.skip()}return n}function C(e){const a={originPosition:k(0)};for(;e.next();)switch(e.tag()){case 1:a.originPosition=k(e.getEnum());break;case 2:a.scale=e.processMessage(A);break;case 3:a.translate=e.processMessage(V);break;default:e.skip()}return a}function _(e){const a={};for(;e.next();)switch(e.tag()){case 1:a.shapeAreaFieldName=e.getString();break;case 2:a.shapeLengthFieldName=e.getString();break;case 3:a.units=e.getString();break;default:e.skip()}return a}function v(e,t){const o=t.createSpatialReference();for(;e.next();)switch(e.tag()){case 1:o.wkid=e.getUInt32();break;case 5:o.wkt=e.getString();break;case 2:o.latestWkid=e.getUInt32();break;case 3:o.vcsWkid=e.getUInt32();break;case 4:o.latestVcsWkid=e.getUInt32();break;default:e.skip()}return o}function E(e,t){const i=t.createFeatureResult();i.geometryType=m(t,0);let p=!1;for(;e.next();)switch(e.tag()){case 1:i.objectIdFieldName=e.getString();break;case 3:i.globalIdFieldName=e.getString();break;case 4:i.geohashFieldName=e.getString();break;case 5:i.geometryProperties=e.processMessage(_);break;case 7:i.geometryType=m(t,e.getEnum());break;case 8:i.spatialReference=e.processMessageWithArgs(v,t);break;case 10:i.hasZ=e.getBool();break;case 11:i.hasM=e.getBool();break;case 12:i.transform=e.processMessage(C);break;case 9:{const q=e.getBool();i.exceededTransferLimit=q;break}case 13:t.addField(i,e.processMessage(B));break;case 15:p||(t.prepareFeatures(i),p=!0),t.addFeature(i,e.processMessageWithArgs(N,t,i,i.fields));break;case 2:i.uniqueIdField=e.processMessage(L);break;default:e.skip()}return t.finishFeatureResult(i),i}function $(e,t){const a={};let n=null;for(;e.next();)switch(e.tag()){case 4:n=e.processMessageWithArgs(P);break;case 1:a.featureResult=e.processMessageWithArgs(E,t);break;default:e.skip()}return w(n)&&a.featureResult&&t.addQueryGeometry(a,n),a}function j(e,t){try{const s=new S(new Uint8Array(e),new DataView(e)),a={};for(;s.next();)s.tag()===2?a.queryResult=s.processMessageWithArgs($,t):s.skip();return a}catch(r){throw new I("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:r})}}function te(e,t){const r=j(e,t),s=r.queryResult.featureResult,a=r.queryResult.queryGeometry,n=r.queryResult.queryGeometryType;if(s&&s.features&&s.features.length&&s.objectIdFieldName){const c=s.objectIdFieldName;for(const o of s.features)o.attributes&&(o.objectId=o.attributes[c])}return s&&(s.queryGeometry=a,s.queryGeometryType=n),s}export{ee as a,h as c,C as q,te as t};
