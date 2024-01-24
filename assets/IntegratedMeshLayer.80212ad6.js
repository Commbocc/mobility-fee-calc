import{C as p,E as y,v as M,ai as C,G as x,aa as q,ab as B,U as H,$ as X,dX as T,aF as k,aG as Q,aH as Y,eF as Z,aI as ee,eH as te,cn as re,fP as ie,bx as oe,aK as se,r as m,t as R,u as _,aq as ne,f5 as ae,fQ as pe,fR as le,fe as ce,fS as N,fT as ye,eJ as de,fU as ue,fV as me,fW as J,f9 as fe,dJ as he,ep as V,_ as ge,T as ve,f8 as we,i as Se,aN as _e,dG as $e,fX as Oe}from"./index.3750c7ce.js";import{i as be}from"./originUtils.7c5d9b9d.js";import{A as Ie,K as U}from"./SceneService.a67569fa.js";import{s as Pe,l as xe,u as Te,m as Re}from"./I3SLayerDefinitions.1b10a063.js";import{o as je,d as Ne}from"./projection.b42b5b2c.js";import"./resourceUtils.2428bc7b.js";var Ue=Object.defineProperty,Ae=Object.defineProperties,Le=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,Me=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable,L=(e,t,r)=>t in e?Ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))Me.call(t,r)&&L(e,r,t[r]);if(A)for(var r of A(t))Je.call(t,r)&&L(e,r,t[r]);return e},S=(e,t)=>Ae(e,Le(t));function O(e){return j[Ve(e)]||De}function Ve(e){return e instanceof Blob?e.type:Ke(e.url)}function Ke(e){const t=V(e);return b[t]||K}const j={},K="text/plain",De=j[K],b={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const e in b)j[b[e]]=e;function I(e){const t=m(e)&&e.origins?e.origins:[void 0];return(r,i)=>{const s=Ee(e,r,i);for(const a of t){const n=pe(r,a,i);for(const o in s)n[o]=s[o]}}}function Ee(e,t,r){if(m(e)&&e.type==="resource")return Ge(e,t,r);switch(m(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:i,write:s}=Oe;return{read:i,write:s}}}}function Ge(e,t,r){const i=le(t,r);return{type:String,read:(s,a,n)=>{const o=ce(s,a,n);return i.type===String?o:typeof i.type=="function"?new i.type({url:o}):void 0},write:{writer(s,a,n,o){if(!o||!o.resources)return typeof s=="string"?void(a[n]=N(s,o)):void(a[n]=s.write({},o));const d=Ce(s),c=d?N(d,S(g({},o),{verifyItemRelativeUrls:o&&o.verifyItemRelativeUrls?{writtenUrls:o.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null}),ye.NO):null,f=i.type!==String&&(!be(this)||o&&o.origin&&this.originIdOf(r)>de(o.origin));o&&o.portalItem&&m(c)&&!ue(c)?f?ze(this,r,s,c,a,n,o,e):Fe(c,a,n,o):o&&o.portalItem&&(R(c)||m(me(c))||J(c)||f)?D(this,r,s,c,a,n,o,e):a[n]=c}}}}function D(e,t,r,i,s,a,n,o){const d=fe(),c=G(r,i,n),f=he(T(o,"prefix"),d),F=`${f}.${O(c)}`,v=n.portalItem.resourceFromPath(F);J(i)&&n.resources.pendingOperations.push(We(i).then(W=>{v.path=`${f}.${O(W)}`,s[a]=v.itemRelativeUrl}).catch(()=>{})),E(e,t,v,c,n.resources.toAdd),s[a]=v.itemRelativeUrl}function ze(e,t,r,i,s,a,n,o){const d=n.portalItem.resourceFromPath(i),c=G(r,i,n);O(c)===V(d.path)?(E(e,t,d,c,n.resources.toUpdate),s[a]=i):D(e,t,r,i,s,a,n,o)}function Fe(e,t,r,i){i.resources.toKeep.push({resource:i.portalItem.resourceFromPath(e)}),t[r]=e}function E(e,t,r,i,s){s.push({resource:r,content:i,finish:a=>{qe(e,t,a)}})}function G(e,t,r){return typeof e=="string"?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}async function We(e){const t=(await ge(()=>import("./index.3750c7ce.js").then(i=>i.h7),["index.3750c7ce.js","index.779d4b2c.css"],import.meta.url).then(function(i){return i.hk})).default,{data:r}=await t(e,{responseType:"blob"});return r}function Ce(e){return R(e)?null:typeof e=="string"?e:e.url}function qe(e,t,r){typeof e[t]=="string"?e[t]=r.url:e[t].url=r.url}var P;let u=P=class extends ve{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,r,i){if(i.layer&&i.layer.spatialReference&&!i.layer.spatialReference.equals(this.geometry.spatialReference)){if(!je(e.spatialReference,i.layer.spatialReference))return void(i&&i.messages&&i.messages.push(new we("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:i.layer.spatialReference,context:i})));const s=new M;Ne(e,s,i.layer.spatialReference),t[r]=s.toJSON(i)}else t[r]=e.toJSON(i);delete t[r].spatialReference}clone(){return new P({geometry:Se(this.geometry),type:this.type})}};p([y({type:M}),I()],u.prototype,"geometry",void 0),p([C(["web-scene","portal-item"],"geometry")],u.prototype,"writeGeometry",null),p([y({type:["clip","mask","replace"],nonNullable:!0}),I()],u.prototype,"type",void 0),u=P=p([x("esri.layers.support.SceneModification")],u);const $=u;var h;let w=h=class extends q(B.ofType($)){constructor(e){super(e),this.url=null}toJSON(e){return this.toArray().map(t=>t.toJSON(e)).filter(t=>!!t.geometry)}clone(){return new h({url:this.url,items:this.items.map(e=>e.clone())})}_readModifications(e,t){for(const r of e)this.add($.fromJSON(r,t))}static fromJSON(e,t){const r=new h;return r._readModifications(e,t),r}static async fromUrl(e,t,r){const i={url:H(e),origin:"service"},s=await X(e,{responseType:"json",signal:T(r,"signal")}),a=t.toJSON(),n=[];for(const o of s.data)n.push($.fromJSON(S(g({},o),{geometry:S(g({},o.geometry),{spatialReference:a})}),i));return new h({url:e,items:n})}};p([y({type:String})],w.prototype,"url",void 0),w=h=p([x("esri.layers.support.SceneModifications")],w);const z=w;let l=class extends Ie(k(Q(Y(Z(ee(te(_e))))))){constructor(...e){super(...e),this.handles=new re,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this.handles.destroy()}initialize(){this.handles.add(ie(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,$e))}normalizeCtorArgs(e,t){return typeof e=="string"?g({url:e},t):e}readModifications(e,t,r){this._modificationsSource={url:oe(e,r),context:r}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=T(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(r){se(r)}if(await this._fetchService(t),m(this._modificationsSource)){const r=await z.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",r,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(!R(this._modificationsSource))return this.load().then(()=>{},()=>{})}async saveAs(e,t){return this._debouncedSaveOperations(U.SAVE_AS,S(g({},t),{getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"}),e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(U.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new _("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new _("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new _("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};p([y({type:String,readOnly:!0})],l.prototype,"geometryType",void 0),p([y({type:["show","hide"]})],l.prototype,"listMode",void 0),p([y({type:["IntegratedMeshLayer"]})],l.prototype,"operationalLayerType",void 0),p([y({json:{read:!1},readOnly:!0})],l.prototype,"type",void 0),p([y({type:Pe,readOnly:!0})],l.prototype,"nodePages",void 0),p([y({type:[xe],readOnly:!0})],l.prototype,"materialDefinitions",void 0),p([y({type:[Te],readOnly:!0})],l.prototype,"textureSetDefinitions",void 0),p([y({type:[Re],readOnly:!0})],l.prototype,"geometryDefinitions",void 0),p([y({readOnly:!0})],l.prototype,"serviceUpdateTimeStamp",void 0),p([y({type:z}),I({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],l.prototype,"modifications",void 0),p([ne(["web-scene","portal-item"],"modifications")],l.prototype,"readModifications",null),p([y(ae)],l.prototype,"elevationInfo",void 0),p([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],l.prototype,"path",void 0),l=p([x("esri.layers.IntegratedMeshLayer")],l);const Ze=l;export{Ze as default};