import{C as s,E as a,G as O,q,aF as N,aG as Q,aH as V,eF as C,aI as G,eH as K,ab as j,r as d,bU as k,fn as v,aK as M,bK as W,dD as Z,eR as J,t as h,u as p,dJ as z,$ as H,_ as B,eQ as X,eK as b,aT as Y,dZ as ee,g9 as te,ga as re,eS as se,aq as f,f5 as ie,fq as ae,eT as oe,fr as I,fg as ne,gb as le,eW as pe,eZ as de,eU as ue,ft as ye,T as ce,f7 as fe,aN as he}from"./index.9d2cc31f.js";import{A as ge,K as w}from"./SceneService.b4250b6f.js";import{t as me,l as ve}from"./FetchAssociatedFeatureLayer.63fdaf0f.js";import{s as $,l as be,u as Ie,m as we}from"./I3SLayerDefinitions.5fdf748b.js";import"./originUtils.7c5d9b9d.js";import"./resourceUtils.cb05ffc5.js";var Le=Object.defineProperty,_e=Object.defineProperties,Fe=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,Se=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable,_=(e,t,r)=>t in e?Le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))Se.call(t,r)&&_(e,r,t[r]);if(L)for(var r of L(t))Oe.call(t,r)&&_(e,r,t[r]);return e},E=(e,t)=>_e(e,Fe(t));let y=class extends ce{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};s([a({type:String,json:{read:!0,write:!0}})],y.prototype,"name",void 0),s([a({type:String,json:{read:!0,write:!0}})],y.prototype,"field",void 0),s([a({type:[Number],json:{read:!0,write:!0}})],y.prototype,"currentRangeExtent",void 0),s([a({type:[Number],json:{read:!0,write:!0}})],y.prototype,"fullRangeExtent",void 0),s([a({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],y.prototype,"type",void 0),y=s([O("esri.layers.support.RangeInfo")],y);const je=y,$e=["3DObject","Point"],c=q.getLogger("esri.layers.SceneLayer"),F=fe();let i=class extends ge(N(Q(V(C(G(K(he))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new j,this.definitionExpression=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0}normalizeCtorArgs(e,t){return typeof e=="string"?g({url:e},t):e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var r,o,n,l;const u=(r=this.getFeatureType(t==null?void 0:t.feature))==null||(o=r.domains)==null?void 0:o[e];return u&&u.type!=="inherited"?u:(n=(l=this.getField(e))==null?void 0:l.domain)!=null?n:null}getFeatureType(e){return e&&d(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return d(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return d(this.associatedLayer)?this.associatedLayer.typeIdField:null}get formTemplate(){return d(this.associatedLayer)?this.associatedLayer.formTemplate:null}get fieldsIndex(){return new k(this.fields)}readNodePages(e,t,r){return t.layerType==="Point"&&(e=t.pointNodePages),e==null||typeof e!="object"?null:$.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get geometryType(){return Ee[this.profile]||"mesh"}set renderer(e){v(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return e!=null&&typeof e=="object"||(e={}),e.color==null&&(e.color=!1),e}get capabilities(){const e=d(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:me,{query:t,editing:{supportsGlobalId:r,supportsRollbackOnFailure:o,supportsUploadWithItemId:n,supportsReturnServiceEditsInSourceSpatialReference:l},data:{supportsZ:u,supportsM:P,isVersioned:T,supportsAttachment:x},operations:{supportsEditing:A,supportsUpdate:D,supportsQuery:R,supportsQueryAttachments:U}}=e,m=e.operations.supportsChangeTracking;return{query:t,editing:{supportsGlobalId:r,supportsReturnServiceEditsInSourceSpatialReference:l,supportsRollbackOnFailure:o,supportsGeometryUpdate:!1,supportsUploadWithItemId:n},data:{supportsAttachment:x,supportsZ:u,supportsM:P,isVersioned:T},operations:{supportsQuery:R,supportsQueryAttachments:U,supportsEditing:A&&m,supportsAdd:!1,supportsDelete:!1,supportsUpdate:D&&m}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges}set editingEnabled(e){e!=null?this._override("editingEnabled",e):this._clearOverride("editingEnabled")}get defaultPopupTemplate(){return d(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeOID"&&(e=r.name),!!e)),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeGlobalID"&&(e=r.name),!!e)),e||void 0}get displayField(){return d(this.associatedLayer)?this.associatedLayer.displayField:null}readProfile(e,t){const r=t.store.profile;return r!=null&&S[r]?S[r]:(c.error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){const t=d(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(M).then(()=>this._fetchService(t)).then(()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t)])).then(()=>this._validateElevationInfo()).then(()=>this._applyAssociatedLayerOverrides()).then(()=>this._populateFieldUsageInfo()).then(()=>W(this,{origin:"service"},t)).then(()=>v(this.renderer,this.fieldsIndex)).then(()=>this.finishLoadEditablePortalLayer(e));return this.addResolvingPromise(r),Promise.resolve(this)}createQuery(){const e=new Z;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryExtent(e||this.createQuery(),t))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatureCount(e||this.createQuery(),t))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatures(e||this.createQuery(),t)).then(r=>{if(r!=null&&r.features)for(const o of r.features)o.layer=this,o.sourceLayer=this;return r})}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryObjectIds(e||this.createQuery(),t))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryAttachments(e,t))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(c.error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return J(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return d(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),h(this.associatedLayer))throw new p("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new p("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return this.statisticsInfo!=null&&this.statisticsInfo.some(t=>t.name===e)}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new p("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new p("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const o of this.statisticsInfo)if(o.name===r.name){const n=z(this.parsedUrl.path,o.href);return H(n,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then(l=>l.data)}throw new p("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(w.SAVE_AS,E(g({},t),{getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"}),e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(w.SAVE,e)}async applyEdits(e,t){const r=await B(()=>import("./editingSupport.96fc1fb7.js"),["editingSupport.96fc1fb7.js","index.9d2cc31f.js","index.779d4b2c.css","normalizeUtils.7f4ddfcc.js"],import.meta.url);if(await this.load(),h(this.associatedLayer))throw new p(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),r.applyEdits(this,this.associatedLayer.source,e,t)}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&$e.indexOf(e.layerType)===-1)throw new p("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new p("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new p("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});function t(r,o){let n=!1,l=!1;if(r==null)n=!0,l=!0;else{const u=o&&o.isGeographic;switch(r){case"east-north-up":case"earth-centered":n=!0,l=u;break;case"vertex-reference-frame":n=!0,l=!u;break;default:n=!1}}if(!n)throw new p("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!l)throw new p("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}t(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if(this.profile==="points")e.push("Point");else{if(this.profile!=="mesh-pyramids")throw new p("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some(n=>n.name===e.name)),r=!!(d(this.associatedLayer)&&this.associatedLayer.fields&&this.associatedLayer.fields.some(n=>n&&e.name===n.name)),o={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||r,supportsLayerQuery:r};this._fieldUsageInfo[e.name]=o}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides()}_applyAssociatedLayerFieldsOverrides(){if(h(this.associatedLayer)||!this.associatedLayer.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(h(this.associatedLayer))return;const e=["popupTemplate","popupEnabled"],t=X(this);for(let r=0;r<e.length;r++){const o=e[r],n=this.originIdOf(o),l=this.associatedLayer.originIdOf(o);n<l&&(l===b.SERVICE||l===b.PORTAL_ITEM)&&t.setAtOrigin(o,this.associatedLayer[o],l)}}async _setAssociatedFeatureLayer(e){if(["mesh-pyramids","points"].indexOf(this.profile)===-1)return;const t=new ve(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedLayer=await t.fetch()}catch(r){Y(r)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await ee(()=>this.popupEnabled&&this.popupTemplate!=null);const e=`this SceneLayer: ${this.title}`;this.attributeStorageInfo==null?c.warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):c.info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;e&&(this.profile==="mesh-pyramids"&&e.mode!=="absolute-height"&&c.warn(".elevationInfo=","Mesh scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&c.warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}};s([a({types:{key:"type",base:te,typeMap:{selection:re}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],i.prototype,"featureReduction",void 0),s([a({type:[je],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],i.prototype,"rangeInfos",void 0),s([a({json:{read:!1}})],i.prototype,"associatedLayer",void 0),s([a({type:["show","hide"]})],i.prototype,"listMode",void 0),s([a({type:["ArcGISSceneServiceLayer"]})],i.prototype,"operationalLayerType",void 0),s([a({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),s([a(E(g({},F.fields),{readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}}))],i.prototype,"fields",void 0),s([a()],i.prototype,"types",null),s([a()],i.prototype,"typeIdField",null),s([a()],i.prototype,"formTemplate",null),s([a({readOnly:!0})],i.prototype,"fieldsIndex",null),s([a({type:se,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],i.prototype,"floorInfo",void 0),s([a(F.outFields)],i.prototype,"outFields",void 0),s([a({type:$,readOnly:!0,json:{read:!1}})],i.prototype,"nodePages",void 0),s([f("service","nodePages",["nodePages","pointNodePages"])],i.prototype,"readNodePages",null),s([a({type:[be],readOnly:!0})],i.prototype,"materialDefinitions",void 0),s([a({type:[Ie],readOnly:!0})],i.prototype,"textureSetDefinitions",void 0),s([a({type:[we],readOnly:!0})],i.prototype,"geometryDefinitions",void 0),s([a({readOnly:!0})],i.prototype,"serviceUpdateTimeStamp",void 0),s([a({readOnly:!0})],i.prototype,"attributeStorageInfo",void 0),s([a({readOnly:!0})],i.prototype,"statisticsInfo",void 0),s([a({type:j.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],i.prototype,"excludeObjectIds",void 0),s([a({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),s([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),s([a(ie)],i.prototype,"elevationInfo",null),s([a({type:String})],i.prototype,"geometryType",null),s([a(ae)],i.prototype,"labelsVisible",void 0),s([a({type:[oe],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:I},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:I},write:!0}})],i.prototype,"labelingInfo",void 0),s([a(ne)],i.prototype,"legendEnabled",void 0),s([a({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){var r,o;if(typeof e=="number"&&e>=0&&e<=1)return e;const n=(r=t.layerDefinition)==null||(o=r.drawingInfo)==null?void 0:o.transparency;return n!==void 0?le(n):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],i.prototype,"opacity",void 0),s([a({types:pe,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],i.prototype,"renderer",null),s([a({json:{read:!1}})],i.prototype,"cachedDrawingInfo",void 0),s([f("service","cachedDrawingInfo")],i.prototype,"readCachedDrawingInfo",null),s([a({readOnly:!0,json:{read:!1}})],i.prototype,"capabilities",null),s([a({type:Boolean,json:{read:!1}})],i.prototype,"editingEnabled",null),s([a(de)],i.prototype,"popupEnabled",void 0),s([a({type:ue,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),s([a({readOnly:!0,json:{read:!1}})],i.prototype,"defaultPopupTemplate",null),s([a({type:String,json:{read:!1}})],i.prototype,"objectIdField",void 0),s([f("service","objectIdField",["objectIdField","fields"])],i.prototype,"readObjectIdField",null),s([a({type:String,json:{read:!1}})],i.prototype,"globalIdField",void 0),s([f("service","globalIdField",["globalIdField","fields"])],i.prototype,"readGlobalIdField",null),s([a({readOnly:!0,type:String,json:{read:!1}})],i.prototype,"displayField",null),s([a({type:String,json:{read:!1}})],i.prototype,"profile",void 0),s([f("service","profile",["store.profile"])],i.prototype,"readProfile",null),s([a({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],i.prototype,"normalReferenceFrame",void 0),s([a(ye)],i.prototype,"screenSizePerspectiveEnabled",void 0),i=s([O("esri.layers.SceneLayer")],i);const S={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},Ee={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},Ue=i;export{Ue as default};
