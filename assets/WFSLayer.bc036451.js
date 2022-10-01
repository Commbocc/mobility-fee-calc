import{aQ as E,er as U,r as j,au as N,M as x,u as C,e as J,en as c,af as D,aO as W,h as k,C as r,E as i,G as _,fl as X,eI as Y,fm as Q,eD as L,eE as G,eG as V,eF as M,aG as z,aH as B,aI as K,g as R,fn as F,fo as Z,y as q,et as H,U as A,eR as ee,dD as y,f5 as te,fp as re,ai as ie,fq as se,eT as oe,fr as ae,fg as ne,a$ as $,gk as le,eZ as pe,eU as ue,eV as de,eW as ye,ft as ce,aM as fe,am as me,f7 as he,aN as ge}from"./index.9d2cc31f.js";import{c as we,n as ve}from"./clientSideDefaults.1414ec22.js";import{D as Oe,X as Fe,z as $e,W as be,v as Se}from"./wfsUtils.6b220ebb.js";import"./projection.ecfb051a.js";import"./QueryEngineCapabilities.9e441dc1.js";import"./geojson.7a08dcf3.js";import"./OptimizedGeometry.0970ac1f.js";import"./xmlUtils.5c7e57e0.js";var Ie=Object.defineProperty,Pe=Object.defineProperties,je=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,xe=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable,S=(e,t,o)=>t in e?Ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,v=(e,t)=>{for(var o in t||(t={}))xe.call(t,o)&&S(e,o,t[o]);if(b)for(var o of b(t))_e.call(t,o)&&S(e,o,t[o]);return e},I=(e,t)=>Pe(e,je(t));let u=class extends E(me){constructor(){super(...arguments),this.capabilities=we(!1,!1),this.type="wfs",this.refresh=U(async e=>{await this.load();const{extent:t}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}})}load(e){var t;const o=(t=j(e)&&e.signal)!=null?t:null;return this.addResolvingPromise(this._startWorker({signal:o})),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const o=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return N.fromJSON(o)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const o=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:o.count,extent:x.fromJSON(o.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _createLoadOptions(e){const{url:t,customParameters:o,name:n,namespaceUri:l,spatialReference:a,fields:d,geometryType:f,swapXY:m}=this.layer;if(!t)throw new C("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await Oe(t,v({customParameters:o},e)));const h=["fields","geometryType","name","namespaceUri","spatialReference","swapXY"].some(w=>this.layer[w]==null),p=h?await Fe(this.wfsCapabilities,n,l,{spatialReference:a,customParameters:o,signal:e==null?void 0:e.signal}):I(v({},$e(d)),{geometryType:f,name:n,namespaceUri:l,spatialReference:a,swapXY:m}),g=J(be(this.wfsCapabilities.readFeatureTypes(),p.name,p.namespaceUri)),T=c.toJSON(p.geometryType);return{customParameters:o,featureType:g,fields:p.fields.map(w=>w.toJSON()),geometryField:p.geometryField,geometryType:T,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:p.objectIdField,spatialReference:p.spatialReference.toJSON(),swapXY:p.swapXY}}async _startWorker(e){const[t,o]=await D([this._createLoadOptions(e),W("WFSSourceWorker",I(v({},e),{strategy:k("feature-layers-workers")?"dedicated":"local"}))]),n=t.error||o.error||null,l=o.value||null;if(n)throw l&&l.close(),n;const a=t.value;this._connection=o.value;const{extent:d}=await this._connection.invoke("load",a,e);this.sourceJSON={extent:d,fields:a.fields,geometryType:a.geometryType,objectIdField:a.objectIdField,geometryField:a.geometryField,drawingInfo:ve(a.geometryType),name:a.featureType.title,wfsInfo:{name:a.featureType.name,featureUrl:a.getFeatureUrl,maxFeatures:3e3,swapXY:a.swapXY,supportedSpatialReferences:a.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:a.featureType.namespaceUri}}}};r([i()],u.prototype,"capabilities",void 0),r([i({constructOnly:!0})],u.prototype,"layer",void 0),r([i()],u.prototype,"sourceJSON",void 0),r([i()],u.prototype,"type",void 0),r([i()],u.prototype,"wfsCapabilities",void 0),u=r([_("esri.layers.graphics.sources.WFSSource")],u);const Re=u;var O;const P=he();let s=O=class extends X(Y(Q(L(G(V(M(z(B(K(ge)))))))))){constructor(e){super(e),this.capabilities=null,this.copyright=null,this.customParameters=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxFeatures=3e3,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new Re({layer:this}),this.spatialReference=R.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}static fromWFSLayerInfo(e){const{customParameters:t,fields:o,geometryField:n,geometryType:l,name:a,namespaceUri:d,objectIdField:f,spatialReference:m,swapXY:h,url:p,wfsCapabilities:g}=e;return new O({customParameters:t,fields:o,geometryField:n,geometryType:l,name:a,namespaceUri:d,objectIdField:f,spatialReference:m,swapXY:h,url:p,wfsCapabilities:g})}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),F(this.renderer,this.fieldsIndex),Z(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,t,o){const n=e.filter(l=>l.name!==Se);this.geometryField&&n.unshift(new q({name:this.geometryField,alias:this.geometryField,type:"geometry"})),H(o,n.map(l=>l.toJSON()),t)}get parsedUrl(){return this.url?A(this.url):null}set renderer(e){F(e,this.fieldsIndex),this._set("renderer",e)}createPopupTemplate(e){return ee(this,e)}createQuery(){const e=new y;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:t,timeExtent:o}=this;return e.timeExtent=t!=null&&o!=null?o.offset(-t.value,t.unit):o||null,e}getFieldDomain(e,t){var o;return(o=this.getField(e))==null?void 0:o.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(y.from(e)||this.createQuery(),t)).then(o=>{if(o!=null&&o.features)for(const n of o.features)n.layer=n.sourceLayer=this;return o})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(y.from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(y.from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(y.from(e)||this.createQuery(),t))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return j(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};r([i({readOnly:!0,aliasOf:"source.capabilities"})],s.prototype,"capabilities",void 0),r([i({type:String})],s.prototype,"copyright",void 0),r([i({readOnly:!0})],s.prototype,"createQueryVersion",null),r([i({json:{name:"wfsInfo.customParameters",write:{ignoreOrigin:!0}}})],s.prototype,"customParameters",void 0),r([i({readOnly:!0})],s.prototype,"defaultPopupTemplate",null),r([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],s.prototype,"definitionExpression",void 0),r([i({type:String})],s.prototype,"displayField",void 0),r([i(te)],s.prototype,"elevationInfo",void 0),r([i(re)],s.prototype,"featureReduction",void 0),r([i({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"featureUrl",void 0),r([i({type:[q],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],s.prototype,"fields",void 0),r([ie("fields")],s.prototype,"writeFields",null),r([i(P.fieldsIndex)],s.prototype,"fieldsIndex",void 0),r([i({type:x,json:{name:"extent"}})],s.prototype,"fullExtent",void 0),r([i()],s.prototype,"geometryField",void 0),r([i({type:String,json:{read:{source:"layerDefinition.geometryType",reader:c.read},write:{target:"layerDefinition.geometryType",writer:c.write,ignoreOrigin:!0},origins:{service:{read:c.read}}}})],s.prototype,"geometryType",void 0),r([i({type:String})],s.prototype,"id",void 0),r([i(se)],s.prototype,"labelsVisible",void 0),r([i({type:[oe],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ae},write:!0}})],s.prototype,"labelingInfo",void 0),r([i(ne)],s.prototype,"legendEnabled",void 0),r([i({type:["show","hide"]})],s.prototype,"listMode",void 0),r([i({type:String})],s.prototype,"objectIdField",void 0),r([i({type:["WFS"]})],s.prototype,"operationalLayerType",void 0),r([i({type:$,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"maxFeatures",void 0),r([i({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],s.prototype,"mode",void 0),r([i({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"name",void 0),r([i({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"namespaceUri",void 0),r([i(le)],s.prototype,"opacity",void 0),r([i(P.outFields)],s.prototype,"outFields",void 0),r([i({readOnly:!0})],s.prototype,"parsedUrl",null),r([i(pe)],s.prototype,"popupEnabled",void 0),r([i({type:ue,json:{name:"popupInfo",write:!0}})],s.prototype,"popupTemplate",void 0),r([i({types:de,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:ye,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],s.prototype,"renderer",null),r([i(ce)],s.prototype,"screenSizePerspectiveEnabled",void 0),r([i({readOnly:!0})],s.prototype,"source",void 0),r([i({type:R,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],s.prototype,"spatialReference",void 0),r([i({readOnly:!0,type:[$],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"spatialReferences",void 0),r([i({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"swapXY",void 0),r([i({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],s.prototype,"title",void 0),r([i({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),r([i(fe)],s.prototype,"url",void 0),r([i({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"version",void 0),r([i({aliasOf:"source.wfsCapabilities"})],s.prototype,"wfsCapabilities",void 0),s=O=r([_("esri.layers.WFSLayer")],s);const We=s;export{We as default};
