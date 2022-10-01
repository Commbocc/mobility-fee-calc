import{q as $,h as z,r as M,ee as y,u as Y,e as H}from"./index.9d2cc31f.js";import{o as w}from"./context-util.7ee47a4a.js";import{f as S,M as g,L as E,D as R,G as L,P as b,U as A,t as k}from"./enums.0a9daf41.js";var q=Object.defineProperty,v=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,O=(i,e,t)=>e in i?q(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Z=(i,e)=>{for(var t in e||(e={}))K.call(e,t)&&O(i,t,e[t]);if(v)for(var t of v(e))j.call(e,t)&&O(i,t,e[t]);return i};const J=$.getLogger("esri/views/webgl");function Q(i,e){switch(e){case i.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case i.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case i.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case i.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case i.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case i.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const X=!!z("enable-feature:webgl-debug");function ee(){return X}function ne(){return X}function D(i){if(ee()){const e=i.getError();if(e){const t=Q(i,e),a=new Error().stack;J.error(new Y("webgl-error","WebGL error occured",{message:t,stack:a}))}}}function P(i){return window.WebGL2RenderingContext&&i instanceof window.WebGL2RenderingContext}const F=4;class _{constructor(e,t,a=null){if(this._context=e,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,e.instanceCounter.increment(S.Texture,this),this._descriptor=Z({target:g.TEXTURE_2D,samplingMode:E.LINEAR,wrapMode:R.REPEAT,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,isImmutable:!1},t),e.type!==w.WEBGL2&&(this._descriptor.isImmutable&&(this._descriptor.isImmutable=!1),x(this._descriptor.target)))throw new Error("3D and array textures are not supported in WebGL1");this._descriptor.target===g.TEXTURE_CUBE_MAP?this._setDataCubeMap(a):this.setData(a)}get glName(){return this._glName}get descriptor(){return this._descriptor}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(S.Texture,this))}release(){this.dispose()}resize(e,t){const a=this._descriptor;if(a.width!==e||a.height!==t){if(this._wasImmutablyAllocated)throw new Error("Immutable textures can't be resized!");a.width=e,a.height=t,this._descriptor.target===g.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(e=null){for(let t=g.TEXTURE_CUBE_MAP_POSITIVE_X;t<=g.TEXTURE_CUBE_MAP_NEGATIVE_Z;t++)this._setData(e,t)}setData(e){this._setData(e)}_setData(e,t){if(!this._context||!this._context.gl)return;const a=this._context.gl;this._glName||(this._glName=a.createTexture()),e===void 0&&(e=null);const r=this._descriptor;t!=null||(t=r.target);const o=x(t);var h;e===null&&(r.width=r.width||F,r.height=r.height||F,o&&(r.depth=(h=r.depth)!=null?h:1));const n=this._context.bindTexture(this,_.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(_.TEXTURE_UNIT_FOR_UPDATES),_._validateTexture(this._context,r),this._configurePixelStorage();const s=r.pixelFormat;let l=r.internalFormat?r.internalFormat:this._deriveInternalFormat(s,r.dataType);if(N(e)){let p=e.width,m=e.height;const u=1;e instanceof HTMLVideoElement&&(p=e.videoWidth,m=e.videoHeight),r.width&&r.height,o&&r.depth,r.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(t,l,r.hasMipmap,p,m,u),this._texImage(t,0,l,p,m,u,e),D(a),r.hasMipmap&&this.generateMipmap(),r.width===void 0&&(r.width=p),r.height===void 0&&(r.height=m),o&&r.depth===void 0&&(r.depth=u)}else{const{width:p,height:m,depth:u}=r;if(p!=null&&m!=null||console.error("Width and height must be specified!"),o&&u==null&&console.error("Depth must be specified!"),r.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(t,l,r.hasMipmap,p,m,u),a.DEPTH24_STENCIL8&&l===a.DEPTH_STENCIL&&(l=a.DEPTH24_STENCIL8),U(e)){const c=e.levels,d=G(t,p,m,u),T=Math.min(d-1,c.length-1);P(a)?a.texParameteri(r.target,a.TEXTURE_MAX_LEVEL,T):r.hasMipmap=r.hasMipmap&&d===c.length;const f=l;if(!re(f))throw new Error("Attempting to use compressed data with an umcompressed format!");this._forEachMipmapLevel((I,C,W,B)=>{const V=c[Math.min(I,c.length-1)];this._compressedTexImage(t,I,f,C,W,B,V)},T)}else M(e)?(this._texImage(t,0,l,p,m,u,e),D(a),r.hasMipmap&&this.generateMipmap()):this._forEachMipmapLevel((c,d,T,f)=>{this._texImage(t,c,l,d,T,f,null),D(a)})}_._applySamplingMode(a,this._descriptor),_._applyWrapMode(a,this._descriptor),_._applyAnisotropicFilteringParameters(this._context,this._descriptor),D(a),this._context.bindTexture(n,_.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,t,a,r,o,h){h||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const n=this._context.gl,s=this._descriptor,{pixelFormat:l,internalFormat:p,dataType:m,isImmutable:u,target:c}=s;if(u&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");const d=this._context.bindTexture(this,_.TEXTURE_UNIT_FOR_UPDATES);(t<0||a<0||r>s.width||o>s.height||t+r>s.width||a+o>s.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),N(h)?n.texSubImage2D(c,e,t,a,l,m,h):U(h)?n.compressedTexSubImage2D(c,e,t,a,r,o,p,h.levels[e]):n.texSubImage2D(c,e,t,a,r,o,l,m,h),this._context.bindTexture(d,_.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(e,t,a,r,o,h,n,s){s||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const l=this._context.gl;if(!P(l))throw new Error("3D textures are not supported in WebGL1");const p=this._descriptor,{pixelFormat:m,dataType:u,isImmutable:c,target:d,internalFormat:T}=p;if(c&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");x(d)||console.warn("Attempting to set 3D texture data on a non-3D texture");const f=this._context.bindTexture(this,_.TEXTURE_UNIT_FOR_UPDATES);if(this._context.setActiveTexture(_.TEXTURE_UNIT_FOR_UPDATES),(t<0||a<0||r<0||o>p.width||h>p.height||n>p.depth||t+o>p.width||a+h>p.height||r+n>p.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),U(s))s=s.levels[e],l.compressedTexSubImage3D(d,e,t,a,r,o,h,n,T,s);else{const I=s;l.texSubImage3D(d,e,t,a,r,o,h,n,m,u,I)}this._context.bindTexture(f,_.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;if(!e.hasMipmap){if(this._wasImmutablyAllocated)throw new Error("Cannot add mipmaps to immutable texture after allocation");e.hasMipmap=!0,this._samplingModeDirty=!0,_._validateTexture(this._context,e)}e.samplingMode===E.LINEAR?(this._samplingModeDirty=!0,e.samplingMode=E.LINEAR_MIPMAP_NEAREST):e.samplingMode===E.NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=E.NEAREST_MIPMAP_NEAREST);const t=this._context.bindTexture(this,_.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(_.TEXTURE_UNIT_FOR_UPDATES),this._context.gl.generateMipmap(e.target),this._context.bindTexture(t,_.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,_._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._context.gl,t=this._descriptor;this._samplingModeDirty&&(_._applySamplingMode(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(_._applyWrapMode(e,t),this._wrapModeDirty=!1)}_deriveInternalFormat(e,t){if(this._context.type===w.WEBGL1)return e;switch(t){case L.FLOAT:switch(e){case b.RGBA:return A.RGBA32F;case b.RGB:return A.RGB32F;default:throw new Error("Unable to derive format")}case L.UNSIGNED_BYTE:switch(e){case b.RGBA:return A.RGBA8;case b.RGB:return A.RGB8}default:return e}}_configurePixelStorage(){const e=this._context.gl,{unpackAlignment:t,flipped:a,preMultiplyAlpha:r}=this._descriptor;e.pixelStorei(e.UNPACK_ALIGNMENT,t),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r?1:0)}_texStorage(e,t,a,r,o,h){const n=this._context.gl;if(!P(n))throw new Error("Immutable textures are not supported in WebGL1");if(!te(t))throw new Error("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const s=a?G(e,r,o,h):1;x(e)?n.texStorage3D(e,s,t,r,o,h):n.texStorage2D(e,s,t,r,o),this._wasImmutablyAllocated=!0}_texImage(e,t,a,r,o,h,n){const s=this._context.gl;let l=null;const p=this._context.type===w.WEBGL2,m=x(e),{isImmutable:u,pixelFormat:c,dataType:d}=this._descriptor;if(p&&(l=s),p||!N(n))if(u){if(M(n)){const T=n;m?l.texSubImage3D(e,t,0,0,0,r,o,h,c,d,T):s.texSubImage2D(e,t,0,0,r,o,c,d,T)}}else{const T=H(n);m?l.texImage3D(e,t,a,r,o,h,0,c,d,T):s.texImage2D(e,t,a,r,o,0,c,d,T)}else s.texImage2D(e,0,a,c,d,n)}_compressedTexImage(e,t,a,r,o,h,n){const s=this._context.gl;let l=null;const p=x(e),m=this._descriptor.isImmutable;if(p){if(this._context.type!==w.WEBGL2)throw new Error("3D textures are not supported in WebGL1");l=s}m?M(n)&&(p?l.compressedTexSubImage3D(e,t,0,0,0,r,o,h,a,n):s.compressedTexSubImage2D(e,t,0,0,r,o,a,n)):p?l.compressedTexImage3D(e,t,a,r,o,h,0,n):s.compressedTexImage2D(e,t,a,r,o,0,n)}_forEachMipmapLevel(e,t=1/0){let{width:a,height:r,depth:o,hasMipmap:h,target:n}=this._descriptor;const s=n===g.TEXTURE_3D;for(let l=0;e(l,a,r,o),h&&(a!==1||r!==1||s&&o!==1)&&!(l>=t);++l)a=Math.max(1,a>>1),r=Math.max(1,r>>1),s&&(o=Math.max(1,o>>1))}static _validateTexture(e,t){(t.width<0||t.height<0||t.depth<0)&&console.error("Negative dimension parameters are not allowed!");const a=P(e.gl),r=y(t.width)&&y(t.height);a||!t.isImmutable&&!x(t.target)||console.error("Immutable and 3D-like textures are not supported in WebGL1!"),a||r||(typeof t.wrapMode=="number"?t.wrapMode!==R.CLAMP_TO_EDGE&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):t.wrapMode.s===R.CLAMP_TO_EDGE&&t.wrapMode.t===R.CLAMP_TO_EDGE||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(e,t){let a=t.samplingMode,r=t.samplingMode;a===E.LINEAR_MIPMAP_NEAREST||a===E.LINEAR_MIPMAP_LINEAR?(a=E.LINEAR,t.hasMipmap||(r=E.LINEAR)):a!==E.NEAREST_MIPMAP_NEAREST&&a!==E.NEAREST_MIPMAP_LINEAR||(a=E.NEAREST,t.hasMipmap||(r=E.NEAREST)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,a),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,r)}static _applyWrapMode(e,t){typeof t.wrapMode=="number"?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}static _applyAnisotropicFilteringParameters(e,t){var a;const r=e.capabilities.textureFilterAnisotropic;!r||e.gl.texParameterf(t.target,r.TEXTURE_MAX_ANISOTROPY,(a=t.maxAnisotropy)!=null?a:1)}}function te(i){return i in A}function re(i){return i in k}function U(i){return M(i)&&"type"in i&&i.type==="compressed"}function ae(i){return M(i)&&"byteLength"in i}function N(i){return M(i)&&!U(i)&&!ae(i)}function x(i){return i===g.TEXTURE_3D||i===g.TEXTURE_2D_ARRAY}function G(i,e,t,a=1){let r=Math.max(e,t);return i===g.TEXTURE_3D&&(r=Math.max(r,a)),Math.round(Math.log(r)/Math.LN2)+1}_.TEXTURE_UNIT_FOR_UPDATES=0;export{ee as a,ne as c,P as n,D as s,_ as u};
