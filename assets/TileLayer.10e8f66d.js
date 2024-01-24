import{eD as $,eF as O,aG as w,aH as b,aF as T,aI as P,aQ as W,eG as j,eH as I,eI as R,r as f,aK as D,g,U,$ as y,a3 as C,u,bH as L,d$ as N,gh as A,a8 as M,C as s,E as o,aq as B,ai as G,aW as k,aM as J,G as E,aN as V}from"./index.3750c7ce.js";import{s as q}from"./ArcGISCachedService.127f5ee0.js";import{S as H,y as K,W as x}from"./SublayersOwner.a71ab6e7.js";import"./TilemapCache.4c2d7aff.js";import"./TileInfo.99c42331.js";import"./byteSizeEstimations.651aa0cf.js";import"./CollectionFlattener.6ff66a97.js";import"./Version.73fb6229.js";import"./floorFilterUtils.f4814e00.js";import"./aaBoundingRect.8ea971a8.js";var F=Object.defineProperty,Q=Object.defineProperties,z=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,_=(e,r,t)=>r in e?F(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))X.call(r,t)&&_(e,t,r[t]);if(v)for(var t of v(r))Y.call(r,t)&&_(e,t,r[t]);return e},h=(e,r)=>Q(e,z(r));const m=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let a=class extends $(H(O(w(b(q(K(T(P(W(j(I(R(V))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?p({url:e},r):e}load(e){const r=f(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(D).then(()=>this._fetchService(r))),Promise.resolve(this)}get attributionDataUrl(){var e;const r=(e=this.parsedUrl)==null?void 0:e.path.toLowerCase();return r&&this._getDefaultAttribution(this._getMapName(r))}readSpatialReference(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&g.fromJSON(e)}writeSublayers(e,r,t,i){if(!this.loaded||!e)return;const c=e.slice().reverse().flatten(({sublayers:n})=>n&&n.toArray().reverse()).toArray(),l=[],d=p({writeSublayerStructure:!1},i);c.forEach(n=>{const S=n.write({},d);l.push(S)}),l.some(n=>Object.keys(n).length>1)&&(r.layers=l)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(e){return Array.isArray(e)?e.map(r=>U(r).path):null}fetchTile(e,r,t,i={}){const{signal:c}=i,l=this.getTileUrl(e,r,t),d={responseType:"image",signal:c,query:p({},this.refreshParameters)};return y(l,d).then(n=>n.data)}getTileUrl(e,r,t){const i=!this.tilemapCache&&this.supportsBlankTile,c=C(h(p(h(p({},this.parsedUrl.query),{blankTile:!i&&null}),this.customParameters),{token:this.apiKey})),l=this.tileServers;return`${l&&l.length?l[r%l.length]:this.parsedUrl.path}/tile/${e}/${r}/${t}${c?"?"+c:""}`}_fetchService(e){return new Promise((r,t)=>{if(this.sourceJSON){if(this.sourceJSON.bandCount!=null&&this.sourceJSON.pixelSizeX!=null)throw new u("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void r({data:this.sourceJSON})}if(!this.parsedUrl)throw new u("tile-layer:undefined-url","layer's url is not defined");const i=L(this.parsedUrl.path);if(f(i)&&i.serverType==="ImageServer")throw new u("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");y(this.parsedUrl.path,{query:h(p(p({f:"json"},this.parsedUrl.query),this.customParameters),{token:this.apiKey}),responseType:"json",signal:e}).then(r,t)}).then(r=>{if(r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),this.version===10.1&&!N(this.url))return this._fetchServerVersion(this.url,e).then(t=>{this.read({currentVersion:t})}).catch(()=>{})})}_fetchServerVersion(e,r){if(!A(e))return Promise.reject();const t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return y(t,{query:h(p({f:"json"},this.customParameters),{token:this.apiKey}),responseType:"json",signal:r}).then(i=>{if(i.data&&i.data.currentVersion)return i.data.currentVersion;throw new u("tile-layer:version-not-available")})}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]}_getDefaultAttribution(e){if(!e)return;let r;e=e.toLowerCase();for(let t=0,i=m.length;t<i;t++)if(r=m[t],r.toLowerCase().indexOf(e)>-1)return M("//static.arcgis.com/attribution/"+r)}_getDefaultTileServers(e){const r=e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i)!==-1,t=e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i)!==-1;return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};s([o({readOnly:!0})],a.prototype,"attributionDataUrl",null),s([o({type:["show","hide","hide-children"]})],a.prototype,"listMode",void 0),s([o({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],a.prototype,"isReference",void 0),s([o({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],a.prototype,"operationalLayerType",void 0),s([o({type:Boolean})],a.prototype,"resampling",void 0),s([o()],a.prototype,"sourceJSON",void 0),s([o({type:g})],a.prototype,"spatialReference",void 0),s([B("spatialReference",["spatialReference","tileInfo"])],a.prototype,"readSpatialReference",null),s([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),s([o({readOnly:!0})],a.prototype,"sublayers",void 0),s([G("sublayers",{layers:{type:[x]}})],a.prototype,"writeSublayers",null),s([o({json:{read:!1,write:!1}})],a.prototype,"popupEnabled",void 0),s([o()],a.prototype,"tileServers",null),s([k("tileServers")],a.prototype,"castTileServers",null),s([o({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),s([o(J)],a.prototype,"url",void 0),a=s([E("esri.layers.TileLayer")],a),a.prototype.fetchTile.__isDefault__=!0;const pe=a;export{pe as default};