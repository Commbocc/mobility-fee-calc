import{cI as n,cJ as l,cK as i,h as c,i as f}from"./index.3750c7ce.js";import{t as d}from"./QueryEngineCapabilities.9e441dc1.js";var y=Object.defineProperty,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,o=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,a=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&o(e,r,t[r]);if(p)for(var r of p(t))$.call(t,r)&&o(e,r,t[r]);return e};function g(e){return{renderer:{type:"simple",symbol:e==="esriGeometryPoint"||e==="esriGeometryMultipoint"?n:e==="esriGeometryPolyline"?l:i}}}const h=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let _=1;function A(e,t){if(c("esri-csp-restrictions"))return()=>a({[t]:null},e);try{let r=`this.${t} = null;`;for(const s in e)r+=`this${h.test(s)?`.${s}`:`["${s}"]`} = ${JSON.stringify(e[s])};`;const u=new Function(`
      return class AttributesClass$${_++} {
        constructor() {
          ${r};
        }
      }
    `)();return()=>new u}catch{return()=>a({[t]:null},e)}}function S(e={}){return[{name:"New Feature",description:"",prototype:{attributes:f(e)}}]}function v(e,t){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:d,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}export{A as a,v as c,S as l,g as n};