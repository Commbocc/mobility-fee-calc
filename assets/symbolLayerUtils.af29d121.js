import{u as n,r as c,$ as p,gF as h,gG as d,_ as b,cg as w,gH as v}from"./index.3750c7ce.js";import{e as g}from"./ItemCache.42b41130.js";let i=a();function a(){return new g(50)}function P(){i=a()}function S(e,r){if(e.type==="icon")return y(e,r);if(e.type==="object")return l(e,r);throw new n("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function x(e,r){if(e.type==="icon")return z(e,r);if(e.type==="object")return $(e,r);throw new n("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function y(e,r){if(e.resource.href)return _(e.resource.href).then(t=>[t.width,t.height]);if(e.resource.primitive)return c(r)?[r,r]:[256,256];throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function z(e,r){return y(e,r).then(t=>{if(e.size==null)return t;const o=t[0]/t[1];return o>1?[e.size,e.size/o]:[e.size*o,e.size]})}function _(e){return p(e,{responseType:"image"}).then(r=>r.data)}function l(e,r){return B(e,r).then(t=>h(t))}async function $(e,r){const t=await l(e,r);return d(t,e)}async function B(e,r){if(!e.isPrimitive){const o=e.resource.href,s=i.get(o);if(s!==void 0)return Promise.resolve(s);const f=await b(()=>import("./objectResourceUtils.d356d16e.js"),["objectResourceUtils.d356d16e.js","index.3750c7ce.js","index.779d4b2c.css","devEnvironmentUtils.31af846a.js","vec33.7b4ca55b.js","quat.a2e183a4.js","BufferView.f0cba98e.js","vec2.10c52e02.js","DefaultMaterial_COLOR_GAMMA.706baed2.js","types.b3fc872b.js","enums.0a9daf41.js","Version.73fb6229.js","byteSizeEstimations.651aa0cf.js","vec4f64.b06c8783.js","VertexAttribute.a3d318c6.js","Texture.287b35dd.js","context-util.a9a483f1.js","VertexElementDescriptor.764350b6.js","InterleavedLayout.37369f24.js","RenderSlot.298f8ea6.js","vec3f32.900df0d5.js"],import.meta.url).then(function(m){return m.o}),u=await f.fetch(o,{disableTextures:!0});return i.put(o,u.referenceBoundingBox),u.referenceBoundingBox}let t=null;if(e.resource&&e.resource.primitive&&(t=w(v(e.resource.primitive)),c(r)))for(let o=0;o<t.length;o++)t[o]*=r;return t?Promise.resolve(t):Promise.reject(new n("symbol:invalid-resource","The symbol does not have a valid resource"))}export{P as clearBoundingBoxCache,y as computeIconLayerResourceSize,S as computeLayerResourceSize,x as computeLayerSize,l as computeObjectLayerResourceSize};