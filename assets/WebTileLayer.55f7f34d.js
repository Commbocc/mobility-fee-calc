import{C as r,E as a,G as b,eD as j,eG as P,eF as O,aG as R,aH as x,aI as _,M as T,g as u,j as I,Z as f,u as E,ad as M,a5 as W,$ as U,g3 as D,aq as h,ai as L,T as V,i as d,aN as z}from"./index.9d2cc31f.js";import{S as $,p as s}from"./TileInfo.ef33a879.js";import"./aaBoundingRect.49e76766.js";var q=Object.defineProperty,v=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,w=(e,t,l)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,g=(e,t)=>{for(var l in t||(t={}))N.call(t,l)&&w(e,l,t[l]);if(v)for(var l of v(t))C.call(t,l)&&w(e,l,t[l]);return e},m;let p=m=class extends V{constructor(e){super(e)}clone(){return new m({customLayerParameters:d(this.customLayerParameters),customParameters:d(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};r([a({json:{type:Object,write:!0}})],p.prototype,"customLayerParameters",void 0),r([a({json:{type:Object,write:!0}})],p.prototype,"customParameters",void 0),r([a({type:String,json:{write:!0}})],p.prototype,"layerIdentifier",void 0),r([a({type:String,json:{write:!0}})],p.prototype,"tileMatrixSet",void 0),r([a({type:String,json:{write:!0}})],p.prototype,"url",void 0),p=m=r([b("esri.layer.support.WMTSLayerInfo")],p);const F=p;let o=class extends j(P(O(R(x(_(z)))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new T(-20037508342787e-6,-2003750834278e-5,2003750834278e-5,20037508342787e-6,u.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=u.WebMercator,this.subDomains=null,this.tileInfo=new $({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new I({x:-20037508342787e-6,y:20037508342787e-6,spatialReference:u.WebMercator}),spatialReference:u.WebMercator,lods:[new s({level:0,scale:591657527591555e-6,resolution:156543.033928}),new s({level:1,scale:295828763795777e-6,resolution:78271.5169639999}),new s({level:2,scale:147914381897889e-6,resolution:39135.7584820001}),new s({level:3,scale:73957190948944e-6,resolution:19567.8792409999}),new s({level:4,scale:36978595474472e-6,resolution:9783.93962049996}),new s({level:5,scale:18489297737236e-6,resolution:4891.96981024998}),new s({level:6,scale:9244648868618e-6,resolution:2445.98490512499}),new s({level:7,scale:4622324434309e-6,resolution:1222.99245256249}),new s({level:8,scale:2311162217155e-6,resolution:611.49622628138}),new s({level:9,scale:1155581108577e-6,resolution:305.748113140558}),new s({level:10,scale:577790.554289,resolution:152.874056570411}),new s({level:11,scale:288895.277144,resolution:76.4370282850732}),new s({level:12,scale:144447.638572,resolution:38.2185141425366}),new s({level:13,scale:72223.819286,resolution:19.1092570712683}),new s({level:14,scale:36111.909643,resolution:9.55462853563415}),new s({level:15,scale:18055.954822,resolution:4.77731426794937}),new s({level:16,scale:9027.977411,resolution:2.38865713397468}),new s({level:17,scale:4513.988705,resolution:1.19432856685505}),new s({level:18,scale:2256.994353,resolution:.597164283559817}),new s({level:19,scale:1128.497176,resolution:.298582141647617}),new s({level:20,scale:564.248588,resolution:.14929107082380833}),new s({level:21,scale:282.124294,resolution:.07464553541190416}),new s({level:22,scale:141.062147,resolution:.03732276770595208}),new s({level:23,scale:70.5310735,resolution:.01866138385297604})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return typeof e=="string"?g({urlTemplate:e},t):e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then(()=>{let l="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const i=new f(this.urlTemplate);!!this.subDomains&&this.subDomains.length>0||i.authority.indexOf("{subDomain}")===-1||(l="is missing 'subDomains' property")}else l="spatialReference must match tileInfo.spatialReference";else l="is missing the required 'urlTemplate' property value";if(l)throw new E("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${l}`)});return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&u.fromJSON(t.fullExtent.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:l}=this,i=new f(t),c=i.scheme?i.scheme+"://":"//",y=c+i.authority+"/";if(i.authority.indexOf("{subDomain}")===-1)e.push(y);else if(l&&l.length>0&&i.authority.split(".").length>1)for(const n of l)e.push(c+i.authority.replace(/\{subDomain\}/gi,n)+"/");return e.map(n=>(n.charAt(n.length-1)!=="/"&&(n+="/"),n))}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new f(e),l=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(l.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){e&&M(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=W(e)),t.templateUrl=e}fetchTile(e,t,l,i={}){const{signal:c}=i,y=this.getTileUrl(e,t,l),n={responseType:"image",signal:c,query:g({},this.refreshParameters)};return U(y,n).then(S=>S.data)}getTileUrl(e,t,l){const i=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+D(this.urlPath,{level:i,z:i,col:l,x:l,row:t,y:t})}};r([a({type:String,value:"",json:{write:!0}})],o.prototype,"copyright",void 0),r([a({type:T,json:{write:!0},nonNullable:!0})],o.prototype,"fullExtent",void 0),r([a({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"legendEnabled",void 0),r([a({type:["show","hide"]})],o.prototype,"listMode",void 0),r([a()],o.prototype,"levelValues",null),r([a({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],o.prototype,"isReference",void 0),r([a({type:["WebTiledLayer"],value:"WebTiledLayer"})],o.prototype,"operationalLayerType",void 0),r([a({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"popupEnabled",void 0),r([a({type:u})],o.prototype,"spatialReference",void 0),r([h("spatialReference",["spatialReference","fullExtent.spatialReference"])],o.prototype,"readSpatialReference",null),r([a({type:[String],json:{write:!0}})],o.prototype,"subDomains",void 0),r([a({type:$,json:{write:!0}})],o.prototype,"tileInfo",void 0),r([a({readOnly:!0})],o.prototype,"tileServers",null),r([a({json:{read:!1}})],o.prototype,"type",void 0),r([a()],o.prototype,"urlPath",null),r([a({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],o.prototype,"urlTemplate",void 0),r([h("urlTemplate",["urlTemplate","templateUrl"])],o.prototype,"readUrlTemplate",null),r([L("urlTemplate",{templateUrl:{type:String}})],o.prototype,"writeUrlTemplate",null),r([a({type:F,json:{write:!0}})],o.prototype,"wmtsInfo",void 0),o=r([b("esri.layers.WebTileLayer")],o);const G=o;var J=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));export{J as W,F as a,G as x};
