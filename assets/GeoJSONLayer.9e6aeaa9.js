import{q as N,C as s,E as i,G as I,fl as J,eI as R,fm as P,eD as q,eE as T,eF as D,eG as k,aG as G,aI as L,g as $,fn as f,fo as V,U as m,_ as Z,eR as z,dD as c,r as E,f5 as C,fp as Q,y as U,M as S,en as F,eY as W,fq as B,eT as M,fr as A,fg as Y,fs as K,eZ as X,eU as H,eV as ee,eW as te,ft as re,fu as se,ez as ie,aM as oe,am as ne,er as ae,au as le,u as g,t as ue,v as de,aO as pe,h as he,f7 as ce,aN as ye}from"./index.9d2cc31f.js";import{c as fe}from"./clientSideDefaults.1414ec22.js";import"./QueryEngineCapabilities.9e441dc1.js";var me=Object.defineProperty,v=Object.getOwnPropertySymbols,ge=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,O=(e,t,r)=>t in e?me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))ge.call(t,r)&&O(e,r,t[r]);if(v)for(var r of v(t))ve.call(t,r)&&O(e,r,t[r]);return e};const _=N.getLogger("esri.layers.graphics.sources.GeoJSONSource");let p=class extends ne{constructor(){super(...arguments),this.type="geojson",this.refresh=ae(async e=>{await this.load();const{extent:t,timeExtent:r}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(e){const t=E(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)).then(r=>le.fromJSON(r))}queryFeaturesJSON(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(r=>({count:r.count,extent:S.fromJSON(r.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}_applyEdits(e){if(!this._connection)throw new g("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,r=[],n=[],d=[];if(e.addFeatures)for(const a of e.addFeatures)r.push(this._serializeFeature(a));if(e.deleteFeatures)for(const a of e.deleteFeatures)"objectId"in a&&a.objectId!=null?n.push(a.objectId):"attributes"in a&&a.attributes[t]!=null&&n.push(a.attributes[t]);if(e.updateFeatures)for(const a of e.updateFeatures)d.push(this._serializeFeature(a));return this._connection.invoke("applyEdits",{adds:r,updates:d,deletes:n}).then(({extent:a,timeExtent:l,featureEditResults:u})=>(this.sourceJSON.extent=a,l&&(this.sourceJSON.timeInfo.timeExtent=[l.start,l.end]),this._createEditsResult(u)))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new g("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e);return r?{geometry:r.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return ue(t)?null:t.type==="mesh"||t.type==="extent"?de.fromExtent(t.extent):t}async _startWorker(e){this._connection=await pe("GeoJSONSourceWorker",{strategy:he("feature-layers-workers")?"dedicated":"local",signal:e});const{fields:t,spatialReference:r,hasZ:n,geometryType:d,objectIdField:a,url:l,timeInfo:u,customParameters:x}=this.layer,w=this.layer.originOf("spatialReference")==="defaults",j={url:l,customParameters:x,fields:t&&t.map(y=>y.toJSON()),geometryType:F.toJSON(d),hasZ:n,objectIdField:a,timeInfo:u?u.toJSON():null,spatialReference:w?null:r&&r.toJSON()},h=await this._connection.invoke("load",j,{signal:e});for(const y of h.warnings)_.warn(y.message,{layer:this.layer,warning:y});h.featureErrors.length&&_.warn(`Encountered ${h.featureErrors.length} validation errors while loading features`,h.featureErrors),this.sourceJSON=h.layerDefinition,this.capabilities=fe(this.sourceJSON.hasZ,!0)}};s([i()],p.prototype,"capabilities",void 0),s([i()],p.prototype,"type",void 0),s([i({constructOnly:!0})],p.prototype,"layer",void 0),s([i()],p.prototype,"sourceJSON",void 0),p=s([I("esri.layers.graphics.sources.GeoJSONSource")],p);const Oe=p,be=ce();let o=class extends J(R(P(q(T(D(k(G(L(ye))))))))){constructor(e){super(e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new Oe({layer:this}),this.spatialReference=$.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.source.load(e).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),f(this.renderer,this.fieldsIndex),V(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}get parsedUrl(){return this.url?m(this.url):null}set renderer(e){f(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=m(e);this._set("url",t.path),t.query&&(this.customParameters=b(b({},this.customParameters),t.query))}async applyEdits(e,t){const r=await Z(()=>import("./editingSupport.96fc1fb7.js"),["editingSupport.96fc1fb7.js","index.9d2cc31f.js","index.779d4b2c.css","normalizeUtils.7f4ddfcc.js"],import.meta.url);await this.load();const n=await r.applyEdits(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),n}on(e,t){return super.on(e,t)}createPopupTemplate(e){return z(this,e)}createQuery(){const e=new c,t=this.get("capabilities.data");e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:n}=this;return e.timeExtent=r!=null&&n!=null?n.offset(-r.value,r.unit):n||null,e}getFieldDomain(e,t){let r,n=!1;const d=t&&t.feature,a=d&&d.attributes,l=this.typeIdField&&a&&a[this.typeIdField];return l!=null&&this.types&&(n=this.types.some(u=>u.id==l&&(r=u.domains&&u.domains[e],r&&r.type==="inherited"&&(r=this._getLayerDomain(e)),!0))),n||r||(r=this._getLayerDomain(e)),r}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(c.from(e)||this.createQuery(),t)).then(r=>{if(r!=null&&r.features)for(const n of r.features)n.layer=n.sourceLayer=this;return r})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(c.from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(c.from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(c.from(e)||this.createQuery(),t))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return E(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_getLayerDomain(e){if(!this.fields)return null;let t=null;return this.fields.some(r=>(r.name===e&&(t=r.domain),!!t)),t}};s([i({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"capabilities",null),s([i({type:String})],o.prototype,"copyright",void 0),s([i({readOnly:!0})],o.prototype,"createQueryVersion",null),s([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),s([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),s([i({type:String})],o.prototype,"displayField",void 0),s([i({type:Boolean})],o.prototype,"editingEnabled",void 0),s([i(C)],o.prototype,"elevationInfo",void 0),s([i(Q)],o.prototype,"featureReduction",void 0),s([i({type:[U],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],o.prototype,"fields",void 0),s([i(be.fieldsIndex)],o.prototype,"fieldsIndex",void 0),s([i({type:S,json:{name:"extent"}})],o.prototype,"fullExtent",void 0),s([i({type:["point","polygon","polyline","multipoint"],json:{read:{reader:F.read}}})],o.prototype,"geometryType",void 0),s([i({type:Boolean})],o.prototype,"hasZ",void 0),s([i(W)],o.prototype,"id",void 0),s([i({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),s([i(B)],o.prototype,"labelsVisible",void 0),s([i({type:[M],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:A},write:!0}})],o.prototype,"labelingInfo",void 0),s([i(Y)],o.prototype,"legendEnabled",void 0),s([i({type:["show","hide"]})],o.prototype,"listMode",void 0),s([i({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],o.prototype,"objectIdField",void 0),s([i(K)],o.prototype,"opacity",void 0),s([i({type:["GeoJSON"]})],o.prototype,"operationalLayerType",void 0),s([i({readOnly:!0})],o.prototype,"parsedUrl",null),s([i(X)],o.prototype,"popupEnabled",void 0),s([i({type:H,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),s([i({types:ee,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:te}}}})],o.prototype,"renderer",null),s([i(re)],o.prototype,"screenSizePerspectiveEnabled",void 0),s([i({readOnly:!0})],o.prototype,"source",void 0),s([i({type:$})],o.prototype,"spatialReference",void 0),s([i({type:[se]})],o.prototype,"templates",void 0),s([i()],o.prototype,"title",void 0),s([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),s([i({type:String,readOnly:!0})],o.prototype,"typeIdField",void 0),s([i({type:[ie]})],o.prototype,"types",void 0),s([i(oe)],o.prototype,"url",null),o=s([I("esri.layers.GeoJSONLayer")],o);const Ee=o;export{Ee as default};
