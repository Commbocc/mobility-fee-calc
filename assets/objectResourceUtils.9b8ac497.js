import{aV as fi,q as Ue,cg as ya,gS as Ma,C as P,dS as mi,dm as Oa,cV as At,t as X,cP as ct,gE as et,cT as wa,gQ as Me,cZ as sr,gC as Pa,d8 as at,c_ as ne,gT as Na,cX as pi,cQ as qt,gU as Pr,cU as dt,bZ as H,dX as Da,r as g,gV as vi,gW as zt,d7 as Fa,gX as Nr,gY as lr,I as La,fW as Dr,gK as Ia,ef as vt,gP as gt,ae as Fr,gZ as Ba,W as $a,aZ as za,ee as Ut,c$ as Lr,cW as vr,df as Ua,d3 as gr,ao as gi,$ as xi,e as Ga,aK as _i,u as bi,g_ as Ir,de as Ha,g$ as Va,dT as ka,aJ as qe,D as Wa,h0 as qa,h1 as Xa,c7 as ja,_ as xr,gO as Br,h2 as $r,h3 as cr,cl as Ya,h4 as Ti,d6 as Ai,gD as Jt,h as Ka,h5 as Za,h6 as Qa,al as Ja}from"./index.069aef39.js";import{a as eo}from"./devEnvironmentUtils.31af846a.js";import{a as to,j as zr,f as ro,r as Ur,c as io,e as Ei}from"./vec33.fc83b944.js";import{a as Ci}from"./quat.42a55724.js";import{i as ot,c as dr,u as Si,x as Mt,L as ao,O as Gr,E as oo}from"./BufferView.b4652e0a.js";import{s as no,l as tt,m as so,c as lo,n as co,k as it,r as Ke,a as uo,b as ho,f as Hr,e as fo,t as mo,i as po,g as vo,h as go,p as Vr,u as xo,q as _o}from"./DefaultMaterial_COLOR_GAMMA.03ff973b.js";import{r as Ri}from"./Version.27f20926.js";import"./vec2.231cd990.js";import{n as bo,r as Xt}from"./vec4f64.b06c8783.js";import{O as p}from"./VertexAttribute.a3d318c6.js";import{C as J,N as yi,S as Mi,R as Ie,I as be,O as le,T as ur,E as Et,D as Be,M as ae,P as W,G as Ot,L as ye,Y as Tt,V as Y,t as k,F as Gt,f as $e,u as _e,o as kr,B as ie,n as Xe,A as Q,U as b}from"./enums.0a9daf41.js";import{c as Oi,u as ee,n as To,a as hr,s as Dt}from"./Texture.2d1d8a6a.js";import{t as pe}from"./VertexElementDescriptor.764350b6.js";import{o as De}from"./context-util.ba03b6da.js";import{T as wi}from"./InterleavedLayout.064736ca.js";import{A as er,E as Ft}from"./RenderSlot.298f8ea6.js";import{t as Ao}from"./vec3f32.900df0d5.js";import"./types.c8f7e133.js";import"./byteSizeEstimations.651aa0cf.js";var Eo=Object.defineProperty,Co=Object.defineProperties,So=Object.getOwnPropertyDescriptors,Wr=Object.getOwnPropertySymbols,Ro=Object.prototype.hasOwnProperty,yo=Object.prototype.propertyIsEnumerable,qr=(t,e,r)=>e in t?Eo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,j=(t,e)=>{for(var r in e||(e={}))Ro.call(e,r)&&qr(t,r,e[r]);if(Wr)for(var r of Wr(e))yo.call(e,r)&&qr(t,r,e[r]);return t},Ht=(t,e)=>Co(t,So(e));async function Pi(t,e){const{data:r}=await xi(t,j({responseType:"image"},e));return r}var ue,rt,Xr,ce,jr,wt,Te,Yr,Kr,nt,Ct,Zr,q,Qr;(function(t){t[t.None=0]="None",t[t.Front=1]="Front",t[t.Back=2]="Back",t[t.COUNT=3]="COUNT"})(ue||(ue={})),function(t){t[t.Less=0]="Less",t[t.Lequal=1]="Lequal",t[t.COUNT=2]="COUNT"}(rt||(rt={})),function(t){t[t.NONE=0]="NONE",t[t.SMAA=1]="SMAA"}(Xr||(Xr={})),function(t){t[t.Color=0]="Color",t[t.Alpha=1]="Alpha",t[t.FrontFace=2]="FrontFace",t[t.NONE=3]="NONE",t[t.COUNT=4]="COUNT"}(ce||(ce={})),function(t){t[t.BACKGROUND=0]="BACKGROUND",t[t.UPDATE=1]="UPDATE"}(jr||(jr={})),function(t){t[t.NOT_LOADED=0]="NOT_LOADED",t[t.LOADING=1]="LOADING",t[t.LOADED=2]="LOADED"}(wt||(wt={})),function(t){t[t.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",t[t.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(Te||(Te={})),function(t){t[t.ASYNC=0]="ASYNC",t[t.SYNC=1]="SYNC"}(Yr||(Yr={})),function(t){t[t.Highlight=0]="Highlight",t[t.MaskOccludee=1]="MaskOccludee",t[t.COUNT=2]="COUNT"}(Kr||(Kr={})),function(t){t[t.Triangle=0]="Triangle",t[t.Point=1]="Point",t[t.Line=2]="Line"}(nt||(nt={})),function(t){t[t.STRETCH=1]="STRETCH",t[t.PAD=2]="PAD"}(Ct||(Ct={})),function(t){t[t.CHANGED=0]="CHANGED",t[t.UNCHANGED=1]="UNCHANGED"}(Zr||(Zr={})),function(t){t[t.Blend=0]="Blend",t[t.Opaque=1]="Opaque",t[t.Mask=2]="Mask",t[t.MaskBlend=3]="MaskBlend",t[t.COUNT=4]="COUNT"}(q||(q={})),function(t){t[t.OFF=0]="OFF",t[t.ON=1]="ON"}(Qr||(Qr={}));class Mo{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function oe(t,e){if(!t)throw e=e||"assert",console.log(new Error(e).stack),new Mo(e)}class _r{constructor(e,r,i,a){this.primitiveIndices=e,this._numIndexPerPrimitive=r,this.indices=i,this.position=a,this.center=H(),oe(e.length>=1),oe(i.length%this._numIndexPerPrimitive==0),oe(i.length>=e.length*this._numIndexPerPrimitive),oe(a.size===3||a.size===4);const{data:o,size:n}=a,s=e.length;let c=n*i[this._numIndexPerPrimitive*e[0]];je.clear(),je.push(c),this.bbMin=gr(o[c],o[c+1],o[c+2]),this.bbMax=Ha(this.bbMin);for(let u=0;u<s;++u){const m=this._numIndexPerPrimitive*e[u];for(let f=0;f<this._numIndexPerPrimitive;++f){c=n*i[m+f],je.push(c);let x=o[c];this.bbMin[0]=Math.min(x,this.bbMin[0]),this.bbMax[0]=Math.max(x,this.bbMax[0]),x=o[c+1],this.bbMin[1]=Math.min(x,this.bbMin[1]),this.bbMax[1]=Math.max(x,this.bbMax[1]),x=o[c+2],this.bbMin[2]=Math.min(x,this.bbMin[2]),this.bbMax[2]=Math.max(x,this.bbMax[2])}}lr(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let l=this.radius*this.radius;for(let u=0;u<je.length;++u){c=je.getItemAt(u);const m=o[c]-this.center[0],f=o[c+1]-this.center[1],x=o[c+2]-this.center[2],h=m*m+f*f+x*x;if(h<=l)continue;const T=Math.sqrt(h),E=.5*(T-this.radius);this.radius=this.radius+E,l=this.radius*this.radius;const A=E/T;this.center[0]+=m*A,this.center[1]+=f*A,this.center[2]+=x*A}je.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(Va(this.bbMin,this.bbMax)>1){const e=lr(H(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,i=new Uint8Array(r),a=new Array(8);for(let l=0;l<8;++l)a[l]=0;const{data:o,size:n}=this.position;for(let l=0;l<r;++l){let u=0;const m=this._numIndexPerPrimitive*this.primitiveIndices[l];let f=n*this.indices[m],x=o[f],h=o[f+1],T=o[f+2];for(let E=1;E<this._numIndexPerPrimitive;++E){f=n*this.indices[m+E];const A=o[f],G=o[f+1],M=o[f+2];A<x&&(x=A),G<h&&(h=G),M<T&&(T=M)}x<e[0]&&(u|=1),h<e[1]&&(u|=2),T<e[2]&&(u|=4),i[l]=u,++a[u]}let s=0;for(let l=0;l<8;++l)a[l]>0&&++s;if(s<2)return;const c=new Array(8);for(let l=0;l<8;++l)c[l]=a[l]>0?new Uint32Array(a[l]):void 0;for(let l=0;l<8;++l)a[l]=0;for(let l=0;l<r;++l){const u=i[l];c[u][a[u]++]=this.primitiveIndices[l]}this._children=new Array(8);for(let l=0;l<8;++l)c[l]!==void 0&&(this._children[l]=new _r(c[l],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){je.prune()}}const je=new fi({deallocator:null});class br{constructor(){this.id=ka()}unload(){}}var Pt;(function(t){t[t.Layer=0]="Layer",t[t.Object=1]="Object",t[t.Geometry=2]="Geometry",t[t.Material=3]="Material",t[t.Texture=4]="Texture",t[t.COUNT=5]="COUNT"})(Pt||(Pt={}));class jt extends br{constructor(e,r=[],i=nt.Triangle,a=-1){super(),this._primitiveType=i,this.edgeIndicesLength=a,this.type=Pt.Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[o,n]of e)n&&this._vertexAttributes.set(o,j({},n));if(r==null||r.length===0){const o=Oo(this._vertexAttributes),n=Vr(o);this.edgeIndicesLength=this.edgeIndicesLength<0?o:this.edgeIndicesLength;for(const s of this._vertexAttributes.keys())this._indices.set(s,n)}else for(const[o,n]of r)n&&(this._indices.set(o,wo(n)),o===p.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(o).length:this.edgeIndicesLength))}cloneShallow(){const e=new jt([],void 0,this._primitiveType,void 0),{_vertexAttributes:r,_indices:i}=e;return this._vertexAttributes.forEach((a,o)=>{r.set(o,a)}),this._indices.forEach((a,o)=>{i.set(o,a)}),e.screenToWorldRatio=this.screenToWorldRatio,e._boundingInfo=this._boundingInfo,e}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const r=this._vertexAttributes.get(e);return r&&!r.exclusive&&(r.data=Array.from(r.data),r.exclusive=!0),r}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return X(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return this.primitiveType===nt.Triangle?this._computeAttachmentOriginTriangles(e):this._computeAttachmentOriginPoints(e)}_computeAttachmentOriginTriangles(e){const r=this.indices.get(p.POSITION),i=this.vertexAttributes.get(p.POSITION);return xo(i,r,e)}_computeAttachmentOriginPoints(e){const r=this.indices.get(p.POSITION),i=this.vertexAttributes.get(p.POSITION);return _o(i,r,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(p.POSITION);if(e.length===0)return null;const r=this.primitiveType===nt.Triangle?3:1;oe(e.length%r==0,"Indexing error: "+e.length+" not divisible by "+r);const i=Vr(e.length/r),a=this.vertexAttributes.get(p.POSITION);return new _r(i,r,e,a)}}function Oo(t){const e=t.values().next().value;return e==null?0:e.data.length/e.size}function wo(t){if(t.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return t;for(const e of t)if(e>=65536)return t;return new Uint16Array(t)}function Po(){if(X(tr)){const t=e=>Ja(`esri/libs/basisu/${e}`);tr=xr(()=>import("./basis_transcoder.a22d9afb.js"),["basis_transcoder.a22d9afb.js","_commonjsHelpers.47085f90.js"],import.meta.url).then(e=>e.b).then(({default:e})=>e({locateFile:t}).then(r=>(r.initializeBasis(),delete r.then,r)))}return tr}let tr;var Ze;(function(t){t[t.ETC1_RGB=0]="ETC1_RGB",t[t.ETC2_RGBA=1]="ETC2_RGBA",t[t.BC1_RGB=2]="BC1_RGB",t[t.BC3_RGBA=3]="BC3_RGBA",t[t.BC4_R=4]="BC4_R",t[t.BC5_RG=5]="BC5_RG",t[t.BC7_M6_RGB=6]="BC7_M6_RGB",t[t.BC7_M5_RGBA=7]="BC7_M5_RGBA",t[t.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",t[t.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",t[t.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",t[t.ATC_RGB=11]="ATC_RGB",t[t.ATC_RGBA=12]="ATC_RGBA",t[t.FXT1_RGB=17]="FXT1_RGB",t[t.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",t[t.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",t[t.ETC2_EAC_R11=20]="ETC2_EAC_R11",t[t.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",t[t.RGBA32=13]="RGBA32",t[t.RGB565=14]="RGB565",t[t.BGR565=15]="BGR565",t[t.RGBA4444=16]="RGBA4444"})(Ze||(Ze={}));function No(t,e){return t.vertexBuffers[e].size/Do(t.layout[e])}function Do(t){return t[0].stride}function Fo(t,e,r,i,a=0){const o=t.gl,n=t.capabilities.instancing;t.bindBuffer(r);for(const s of i){const c=e.get(s.name);c===void 0&&console.error(`There is no location for vertex attribute '${s.name}' defined.`);const l=a*s.stride;if(s.count<=4)o.vertexAttribPointer(c,s.count,s.type,s.normalized,s.stride,s.offset+l),o.enableVertexAttribArray(c),s.divisor>0&&n&&n.vertexAttribDivisor(c,s.divisor);else if(s.count===9)for(let u=0;u<3;u++)o.vertexAttribPointer(c+u,3,s.type,s.normalized,s.stride,s.offset+12*u+l),o.enableVertexAttribArray(c+u),s.divisor>0&&n&&n.vertexAttribDivisor(c+u,s.divisor);else if(s.count===16)for(let u=0;u<4;u++)o.vertexAttribPointer(c+u,4,s.type,s.normalized,s.stride,s.offset+16*u+l),o.enableVertexAttribArray(c+u),s.divisor>0&&n&&n.vertexAttribDivisor(c+u,s.divisor);else console.error("Unsupported vertex attribute element count: "+s.count)}}function Lo(t,e,r,i){const a=t.gl,o=t.capabilities.instancing;t.bindBuffer(r);for(const n of i){const s=e.get(n.name);if(n.count<=4)a.disableVertexAttribArray(s),n.divisor&&n.divisor>0&&o&&o.vertexAttribDivisor(s,0);else if(n.count===9)for(let c=0;c<3;c++)a.disableVertexAttribArray(s+c),n.divisor&&n.divisor>0&&o&&o.vertexAttribDivisor(s+c,0);else if(n.count===16)for(let c=0;c<4;c++)a.disableVertexAttribArray(s+c),n.divisor&&n.divisor>0&&o&&o.vertexAttribDivisor(s+c,0);else console.error("Unsupported vertex attribute element count: "+n.count)}t.unbindBuffer(Q.ARRAY_BUFFER)}function Ni(t){switch(t){case W.ALPHA:case W.LUMINANCE:case W.RED:case W.RED_INTEGER:case b.R8:case b.R8I:case b.R8UI:case b.R8_SNORM:case ie.STENCIL_INDEX8:return 1;case W.LUMINANCE_ALPHA:case W.RG:case W.RG_INTEGER:case b.RGBA4:case b.R16F:case b.R16I:case b.R16UI:case b.RG8:case b.RG8I:case b.RG8UI:case b.RG8_SNORM:case b.RGB565:case b.RGB5_A1:case ie.DEPTH_COMPONENT16:return 2;case W.DEPTH_COMPONENT:case W.RGB:case W.RGB_INTEGER:case b.RGB8:case b.RGB8I:case b.RGB8UI:case b.RGB8_SNORM:case b.SRGB8:case ie.DEPTH_COMPONENT24:return 3;case W.DEPTH_STENCIL:case W.RGBA:case W.RGBA_INTEGER:case b.RGBA8:case b.R32F:case b.R11F_G11F_B10F:case b.RG16F:case b.R32I:case b.R32UI:case b.RG16I:case b.RG16UI:case b.RGBA8I:case b.RGBA8UI:case b.RGBA8_SNORM:case b.SRGB8_ALPHA8:case b.RGB9_E5:case b.RGB10_A2UI:case b.RGB10_A2:case ie.DEPTH_STENCIL:case ie.DEPTH_COMPONENT32F:case ie.DEPTH24_STENCIL8:return 4;case ie.DEPTH32F_STENCIL8:return 5;case b.RGB16F:case b.RGB16I:case b.RGB16UI:return 6;case b.RG32F:case b.RG32I:case b.RG32UI:case b.RGBA16F:case b.RGBA16I:case b.RGBA16UI:return 8;case b.RGB32F:case b.RGB32I:case b.RGB32UI:return 12;case b.RGBA32F:case b.RGBA32I:case b.RGBA32UI:return 16;case k.COMPRESSED_RGB_S3TC_DXT1_EXT:case k.COMPRESSED_RGBA_S3TC_DXT1_EXT:return .5;case k.COMPRESSED_RGBA_S3TC_DXT3_EXT:case k.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case k.COMPRESSED_R11_EAC:case k.COMPRESSED_SIGNED_R11_EAC:case k.COMPRESSED_RGB8_ETC2:case k.COMPRESSED_SRGB8_ETC2:case k.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case k.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return .5;case k.COMPRESSED_RG11_EAC:case k.COMPRESSED_SIGNED_RG11_EAC:case k.COMPRESSED_RGBA8_ETC2_EAC:case k.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}function fr(t){if(X(t))return 0;if("descriptor"in t)return t.glName?fr(t.descriptor):0;const e=t.internalFormat||"pixelFormat"in t&&t.pixelFormat;if(!e)return 0;const r="hasMipmap"in t&&t.hasMipmap?1.3:1,i=t.width*t.height;return Ni(e)*i*r}let ve=null,Lt=null;async function Di(){return X(Lt)&&(Lt=Po(),ve=await Lt),Lt}function Io(t,e){if(X(ve))return t.byteLength;const r=new ve.BasisFile(new Uint8Array(t)),i=Li(r)?Fi(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),e):0;return r.close(),r.delete(),i}function Bo(t,e){if(X(ve))return t.byteLength;const r=new ve.KTX2File(new Uint8Array(t)),i=Ii(r)?Fi(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),e):0;return r.close(),r.delete(),i}function Fi(t,e,r,i,a){const o=Ni(e?k.COMPRESSED_RGBA8_ETC2_EAC:k.COMPRESSED_RGB8_ETC2),n=a&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(r*i*o*n)}function Li(t){return t.getNumImages()>=1&&!t.isUASTC()}function Ii(t){return t.getFaces()>=1&&t.isETC1S()}async function $o(t,e,r){X(ve)&&(ve=await Di());const i=new ve.BasisFile(new Uint8Array(r));if(!Li(i))return null;i.startTranscoding();const a=Bi(t,e,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),(o,n)=>i.getImageTranscodedSizeInBytes(0,o,n),(o,n,s)=>i.transcodeImage(s,0,o,n,0,0));return i.close(),i.delete(),a}async function zo(t,e,r){X(ve)&&(ve=await Di());const i=new ve.KTX2File(new Uint8Array(r));if(!Ii(i))return null;i.startTranscoding();const a=Bi(t,e,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),(o,n)=>i.getImageTranscodedSizeInBytes(o,0,0,n),(o,n,s)=>i.transcodeImage(s,o,0,0,n,0,-1,-1));return i.close(),i.delete(),a}function Bi(t,e,r,i,a,o,n,s){const{compressedTextureETC:c,compressedTextureS3TC:l}=t.capabilities,[u,m]=c?i?[Ze.ETC2_RGBA,k.COMPRESSED_RGBA8_ETC2_EAC]:[Ze.ETC1_RGB,k.COMPRESSED_RGB8_ETC2]:l?i?[Ze.BC3_RGBA,k.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Ze.BC1_RGB,k.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Ze.RGBA32,W.RGBA],f=e.hasMipmap?r:Math.min(1,r),x=[];for(let A=0;A<f;A++)x.push(new Uint8Array(n(A,u))),s(A,u,x[A]);const h=x.length>1,T=h?ye.LINEAR_MIPMAP_LINEAR:ye.LINEAR,E=Ht(j({},e),{samplingMode:T,hasMipmap:h,internalFormat:m,width:a,height:o});return new ee(t,E,{type:"compressed",levels:x})}const xt=Ue.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),Uo=542327876,Go=131072,Ho=4;function Tr(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function Vo(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const ko=Tr("DXT1"),Wo=Tr("DXT3"),qo=Tr("DXT5"),Xo=31,jo=0,Yo=1,Ko=2,Zo=3,Qo=4,Jo=7,en=20,tn=21;function rn(t,e,r){const{textureData:i,internalFormat:a,width:o,height:n}=an(r,e.hasMipmap);return e.samplingMode=i.levels.length>1?ye.LINEAR_MIPMAP_LINEAR:ye.LINEAR,e.hasMipmap=i.levels.length>1,e.internalFormat=a,e.width=o,e.height=n,new ee(t,e,i)}function an(t,e){const r=new Int32Array(t,0,Xo);if(r[jo]!==Uo)return xt.error("Invalid magic number in DDS header"),null;if(!(r[en]&Ho))return xt.error("Unsupported format, must contain a FourCC code"),null;const i=r[tn];let a,o;switch(i){case ko:a=8,o=k.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Wo:a=16,o=k.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case qo:a=16,o=k.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return xt.error("Unsupported FourCC code:",Vo(i)),null}let n=1,s=r[Qo],c=r[Zo];(3&s)==0&&(3&c)==0||(xt.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,c=c+3&-4);const l=s,u=c;let m,f;r[Ko]&Go&&e!==!1&&(n=Math.max(1,r[Jo])),n===1||Ut(s)&&Ut(c)||(xt.warn("Ignoring mipmaps of non power of two sized compressed texture."),n=1);let x=r[Yo]+4;const h=[];for(let T=0;T<n;++T)f=(s+3>>2)*(c+3>>2)*a,m=new Uint8Array(t,x,f),h.push(m),x+=f,s=Math.max(1,s>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:h},internalFormat:o,width:l,height:u}}const Yt=new Map([[p.POSITION,0],[p.NORMAL,1],[p.UV0,2],[p.COLOR,3],[p.SIZE,4],[p.TANGENT,4],[p.AUXPOS1,5],[p.SYMBOLCOLOR,5],[p.AUXPOS2,6],[p.FEATUREATTRIBUTE,6],[p.INSTANCEFEATUREATTRIBUTE,6],[p.INSTANCECOLOR,7],[p.MODEL,8],[p.MODELNORMAL,12],[p.MODELORIGINHI,11],[p.MODELORIGINLO,15]]);new pe(p.POSITION,3,J.FLOAT,0,12);new pe(p.POSITION,3,J.FLOAT,0,20),new pe(p.UV0,2,J.FLOAT,12,20);new pe(p.POSITION,3,J.FLOAT,0,32),new pe(p.NORMAL,3,J.FLOAT,12,32),new pe(p.UV0,2,J.FLOAT,24,32);new pe(p.POSITION,3,J.FLOAT,0,16),new pe(p.COLOR,4,J.UNSIGNED_BYTE,12,16);const on=[new pe(p.POSITION,2,J.FLOAT,0,8)],nn=[new pe(p.POSITION,2,J.FLOAT,0,16),new pe(p.UV0,2,J.FLOAT,8,16)],re=Ue.getLogger("esri.views.webgl.BufferObject");function sn(t){return Za(t)}class Fe{constructor(e,r,i,a){this._context=e,this.bufferType=r,this.usage=i,this._glName=null,this._size=-1,this._indexType=void 0,e.instanceCounter.increment($e.Buffer,this),this._glName=this._context.gl.createBuffer(),Dt(this._context.gl),a&&this.setData(a)}static createIndex(e,r,i){return new Fe(e,Q.ELEMENT_ARRAY_BUFFER,r,i)}static createVertex(e,r,i){return new Fe(e,Q.ARRAY_BUFFER,r,i)}static createUniform(e,r,i){if(e.type!==De.WEBGL2)throw new Error("Uniform buffers are supported in WebGL2 only!");return new Fe(e,Q.UNIFORM_BUFFER,r,i)}static createPixelPack(e,r=Gt.STREAM_READ,i){if(e.type!==De.WEBGL2)throw new Error("Pixel pack buffers are supported in WebGL2 only!");const a=new Fe(e,Q.PIXEL_PACK_BUFFER,r);return i&&a.setSize(i),a}static createPixelUnpack(e,r=Gt.STREAM_DRAW,i){if(e.type!==De.WEBGL2)throw new Error("Pixel unpack buffers are supported in WebGL2 only!");return new Fe(e,Q.PIXEL_UNPACK_BUFFER,r,i)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteSize(){return this.bufferType===Q.ELEMENT_ARRAY_BUFFER?this._indexType===J.UNSIGNED_INT?4*this._size:2*this._size:this._size}get _isVAOAware(){return this.bufferType===Q.ELEMENT_ARRAY_BUFFER||this.bufferType===Q.ARRAY_BUFFER}dispose(){var e;(e=this._context)!=null&&e.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement($e.Buffer,this),this._context=null):this._glName&&re.warn("Leaked WebGL buffer object")}setSize(e,r=null){if(e<=0&&re.error("Buffer size needs to be positive!"),this.bufferType===Q.ELEMENT_ARRAY_BUFFER&&g(r))switch(this._indexType=r,r){case J.UNSIGNED_SHORT:e*=2;break;case J.UNSIGNED_INT:e*=4}this._setBufferData(e)}setData(e){if(!e)return;let r=e.byteLength;this.bufferType===Q.ELEMENT_ARRAY_BUFFER&&(Br(e)&&(r/=2,this._indexType=J.UNSIGNED_SHORT),$r(e)&&(r/=4,this._indexType=J.UNSIGNED_INT)),this._setBufferData(r,e)}_setBufferData(e,r=null){this._size=e;const i=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const a=this._context.gl;g(r)?a.bufferData(this.bufferType,r,this.usage):a.bufferData(this.bufferType,e,this.usage),Dt(a),this._isVAOAware&&this._context.bindVAO(i)}setSubData(e,r=0,i=0,a=e.byteLength){if(!e)return;(r<0||r>=this._size)&&re.error("offset is out of range!");let o=r,n=i,s=a,c=e.byteLength;this.bufferType===Q.ELEMENT_ARRAY_BUFFER&&(Br(e)?(c/=2,o*=2,n*=2,s*=2):$r(e)&&(c/=4,o*=4,n*=4,s*=4)),a===void 0&&(a=c-1),i>=a&&re.error("end must be bigger than start!"),r+i-a>this._size&&re.error("An attempt to write beyond the end of the buffer!");const l=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const u=this._context.gl,m=ArrayBuffer.isView(e)?e.buffer:e,f=n===0&&s===e.byteLength?m:m.slice(n,s);u.bufferSubData(this.bufferType,o,f),Dt(u),this._isVAOAware&&this._context.bindVAO(l)}setSubDataFromView(e,r,i,a){if(!e)return;(r<0||r>=this._size)&&re.error("offset is out of range!"),i>=a&&re.error("end must be bigger than start!"),r+i-a>this._size&&re.error("An attempt to write beyond the end of the buffer!");const o=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const n=this._context.gl;if(this._context.type===De.WEBGL2)n.bufferSubData(this.bufferType,r*e.BYTES_PER_ELEMENT,e,i,a-i);else{const s=i===0&&a===e.length?e:e.subarray(i,a);n.bufferSubData(this.bufferType,r*e.BYTES_PER_ELEMENT,s)}Dt(n),this._isVAOAware&&this._context.bindVAO(o)}getSubData(e,r=0,i,a){if(this._context.type!==De.WEBGL2)return void re.error("Get buffer subdata is supported in WebGL2 only!");if(i<0||a<0)return void re.error("Problem getting subdata: offset and length were less than zero!");const o=sn(e)?e.BYTES_PER_ELEMENT:1;if(o*((i!=null?i:0)+(a!=null?a:0))>e.byteLength)return void re.error("Problem getting subdata: offset and length exceeded destination size!");r+o*(a!=null?a:0)>this.byteSize&&re.warn("Potential problem getting subdata: requested data exceeds buffer size!");const n=this._context.gl;this._context.bindBuffer(this,Q.COPY_READ_BUFFER),n.getBufferSubData(Q.COPY_READ_BUFFER,r,e,i,a),this._context.unbindBuffer(Q.COPY_READ_BUFFER)}async getSubDataAsync(e,r=0,i,a){this._context.type===De.WEBGL2?(await this._context.clientWaitAsync(),this.getSubData(e,r,i,a)):re.error("Get buffer subdata is supported in WebGL2 only!")}}const Ye=Ue.getLogger("esri.views.webgl.VertexArrayObject");class ln{constructor(e,r,i,a,o=null){this._context=e,this._locations=r,this._layout=i,this._buffers=a,this._indexBuffer=o,this._glName=null,this._initialized=!1,e.instanceCounter.increment($e.VAO,this)}get glName(){return this._glName}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get size(){return Object.keys(this._buffers).reduce((e,r)=>e+this._buffers[r].size,g(this._indexBuffer)?this._indexBuffer.size:0)}get layout(){return this._layout}get locations(){return this._locations}dispose(e=!0){if(!this._context)return void((this._glName||e&&Object.getOwnPropertyNames(this._buffers).length>0)&&Ye.warn("Leaked WebGL VAO"));if(this._glName){var r,i;const a=(r=this._context)==null||(i=r.capabilities)==null?void 0:i.vao;a?(a.deleteVertexArray(this._glName),this._glName=null):Ye.warn("Leaked WebGL VAO")}if(this._context.getBoundVAO()===this&&this._context.bindVAO(null),e){for(const a in this._buffers)this._buffers[a].dispose(),delete this._buffers[a];this._indexBuffer=cr(this._indexBuffer)}this._context.instanceCounter.decrement($e.VAO,this),this._context=null}initialize(){if(this._initialized)return;const e=this._context.capabilities.vao;if(e){const r=e.createVertexArray();e.bindVertexArray(r),this._bindLayout(),e.bindVertexArray(null),this._glName=r}this._initialized=!0}bind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}_bindLayout(){const{_buffers:e,_layout:r,_indexBuffer:i}=this;e||Ye.error("Vertex buffer dictionary is empty!");const a=this._context.gl;for(const o in e){const n=e[o];n||Ye.error("Vertex buffer is uninitialized!");const s=r[o];s||Ye.error("Vertex element descriptor is empty!"),Fo(this._context,this._locations,n,s)}g(i)&&(this._context.capabilities.vao?a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,i.glName):this._context.bindBuffer(i))}unbind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(null):this._unbindLayout()}_unbindLayout(){const{_buffers:e,_layout:r}=this;e||Ye.error("Vertex buffer dictionary is empty!");for(const i in e){const a=e[i];a||Ye.error("Vertex buffer is uninitialized!");const o=r[i];Lo(this._context,this._locations,a,o)}g(this._indexBuffer)&&this._context.unbindBuffer(this._indexBuffer.bufferType)}}function cn(t,e=on,r=Yt,i=-1,a=1){let o=null;return e===nn?o=new Float32Array([i,i,0,0,a,i,1,0,i,a,0,1,a,a,1,1]):o=new Float32Array([i,i,a,i,i,a,a,a]),new ln(t,r,{geometry:e},{geometry:Fe.createVertex(t,Gt.STATIC_DRAW,o)})}class _t{constructor(e,r){this._context=e,this._desc=r,this.type="renderbuffer",this._context.instanceCounter.increment($e.Renderbuffer,this);const i=this._context.gl;this.glName=i.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:a,height:o,internalFormat:n,multisampled:s}=r;if(s){if(this._context.type!==De.WEBGL2)throw new Error("Multisampled renderbuffers are not supported in WebGL1!");i.renderbufferStorageMultisample(i.RENDERBUFFER,this.samples,n,a,o)}else i.renderbufferStorage(i.RENDERBUFFER,n,a,o)}get descriptor(){return this._desc}get samples(){const e=this._desc.samples,r=this._context.parameters.maxSamples;return e?Math.min(e,r):r}resize(e,r){const i=this._desc;if(i.width===e&&i.height===r)return;i.width=e,i.height=r;const a=this._context.gl;this._context.bindRenderbuffer(this),i.multisampled?a.renderbufferStorageMultisample(a.RENDERBUFFER,this.samples,i.internalFormat,i.width,i.height):a.renderbufferStorage(a.RENDERBUFFER,i.internalFormat,i.width,i.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement($e.Renderbuffer,this),this._context=null)}}const dn=Ue.getLogger("esri.views.webgl.FrameBufferObject");class Le{constructor(e,r,i=null,a=null){if(this._context=e,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachments=new Map,this._initialized=!1,this._desc=j({},r),e.instanceCounter.increment($e.Framebuffer,this),g(i)){Array.isArray(i)||(i=[i]);for(let n=0;n<i.length;++n){const s=i[n],c=_e.COLOR_ATTACHMENT0+n;let l;ei(s)?(Se(s)?(l=s.descriptor,this._colorAttachments.set(c,s)):(l=s,this._colorAttachments.set(c,new ee(this._context,l))),It(l,this._desc)):(Jr(s)?(l=s.descriptor,this._colorAttachments.set(c,s)):(l=s,this._colorAttachments.set(c,new _t(this._context,l))),rr(l,this._desc)),this._validateColorAttachmentPoint(c)}}if(g(a)){let n,s;if(ei(a))this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),Se(a)?(s=a.descriptor,this._depthStencilTexture=a):(s=a,this._depthStencilTexture=new ee(this._context,s)),It(s,this._desc);else{var o;Jr(a)?(s=a.descriptor,n=a):(s=a,n=new _t(this._context,s));const c=(o=this._desc.depthStencilTarget)!=null?o:Y.DEPTH_STENCIL_RENDER_BUFFER;c===Y.STENCIL_RENDER_BUFFER?this._stencilAttachment=n:c===Y.DEPTH_RENDER_BUFFER||c===Y.DEPTH_STENCIL_RENDER_BUFFER?this._depthAttachment=n:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),rr(s,this._desc)}}}dispose(){if(!this._desc)return;const e=this._context.getBoundFramebufferObject();this._disposeColorAttachments(),this._disposeDepthStencilAttachments(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(e),this._context.instanceCounter.decrement($e.Framebuffer,this),this._desc=null}get glName(){return this._glName}get descriptor(){return this._desc}get colorTexture(){const e=this._colorAttachments.get(_e.COLOR_ATTACHMENT0);return e&&Se(e)?e:null}get colorAttachment(){return this._colorAttachments.get(_e.COLOR_ATTACHMENT0)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}get depthStencilTexture(){return this._depthStencilTexture}get width(){return this._desc.width}get height(){return this._desc.height}get gpuMemoryUsage(){return[...this._colorAttachments].reduce((e,[r,i])=>e+fr(i),0)+fr(this.depthStencilAttachment)}getColorTexture(e){const r=this._colorAttachments.get(e);return r&&Se(r)?r:null}attachColorTexture(e,r=_e.COLOR_ATTACHMENT0){!e||(this._validateColorAttachmentPoint(r),It(e.descriptor,this._desc),this._disposeColorAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,r)),this._colorAttachments.set(r,e))}detachColorTexture(e=_e.COLOR_ATTACHMENT0){const r=this._colorAttachments.get(e);if(Se(r)){const i=r;return this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e)),this._colorAttachments.delete(e),i}}setColorTextureTarget(e,r=_e.COLOR_ATTACHMENT0){const i=this._colorAttachments.get(r);Se(i)&&this._framebufferTexture2D(i.glName,r,e)}attachDepthStencilTexture(e){if(X(e))return;const r=e.descriptor;r.pixelFormat!==W.DEPTH_STENCIL&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),r.dataType!==Ot.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),It(r,this._desc),this._desc.depthStencilTarget&&this._desc.depthStencilTarget!==Y.DEPTH_STENCIL_TEXTURE&&(this._desc.depthStencilTarget=Y.DEPTH_STENCIL_TEXTURE),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,kr)),this._depthStencilTexture=e}detachDepthStencilTexture(){const e=this._depthStencilTexture;return e&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,kr)),this._depthStencilTexture=null,e}attachDepthStencilBuffer(e){if(X(e))return;const r=e.descriptor;if(r.internalFormat!==ie.DEPTH_STENCIL&&r.internalFormat!==ie.DEPTH_COMPONENT16&&console.error("Depth/Stencil buffer must have correct internalFormat"),rr(r,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=r.internalFormat===ie.DEPTH_STENCIL?Y.DEPTH_STENCIL_RENDER_BUFFER:Y.DEPTH_RENDER_BUFFER,this._initialized){this._context.bindFramebuffer(this);const i=this._context.gl,a=this._desc.depthStencilTarget===Y.DEPTH_RENDER_BUFFER?i.DEPTH_ATTACHMENT:i.DEPTH_STENCIL_ATTACHMENT;i.framebufferRenderbuffer(Xe.FRAMEBUFFER,a,i.RENDERBUFFER,e.glName)}this._depthAttachment=e}detachDepthStencilBuffer(){const e=this._context.gl,r=this._depthAttachment;if(r&&this._initialized){this._context.bindFramebuffer(this);const i=this._desc.depthStencilTarget===Y.DEPTH_RENDER_BUFFER?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(Xe.FRAMEBUFFER,i,e.RENDERBUFFER,null)}return this._depthAttachment=null,r}detachAll(){this._colorAttachments.forEach((e,r)=>this._detachColorAttachment(r)),this.detachDepthStencilBuffer(),this.detachDepthStencilTexture()}copyToTexture(e,r,i,a,o,n,s){(e<0||r<0||o<0||n<0)&&console.error("Offsets cannot be negative!"),(i<=0||a<=0)&&console.error("Copy width and height must be greater than zero!");const c=this._desc,l=s.descriptor;s.descriptor.target!==ae.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(e+i>c.width||r+a>c.height||o+i>l.width||n+a>l.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const u=this._context,m=u.bindTexture(s,ee.TEXTURE_UNIT_FOR_UPDATES);u.setActiveTexture(ee.TEXTURE_UNIT_FOR_UPDATES),u.bindFramebuffer(this),u.gl.copyTexSubImage2D(ae.TEXTURE_2D,0,o,n,e,r,i,a),u.bindTexture(m,ee.TEXTURE_UNIT_FOR_UPDATES)}readPixels(e,r,i,a,o,n,s){(i<=0||a<=0)&&console.error("Copy width and height must be greater than zero!"),s||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(e,r,i,a,o,n,s)}async readPixelsAsync(e,r,i,a,o,n,s){if(this._context.type!==De.WEBGL2)return hr()&&console.warn("Attempting to read pixels using pixel buffer object without WebGL2"),void this.readPixels(e,r,i,a,o,n,s);const c=this._context.gl,l=Fe.createPixelPack(this._context,Gt.STREAM_READ,s.byteLength);this._context.bindBuffer(l),this._context.bindFramebuffer(this),c.readPixels(e,r,i,a,o,n,0),this._context.unbindBuffer(Q.PIXEL_PACK_BUFFER),await l.getSubDataAsync(s),l.dispose()}resize(e,r){const i=this._desc;if(i.width!==e||i.height!==r){if(!this._initialized)return i.width=e,i.height=r,this._colorAttachments.forEach(a=>{a&&a.resize(e,r)}),void(this._depthStencilTexture&&this._depthStencilTexture.resize(e,r));i.width=e,i.height=r,this._colorAttachments.forEach(a=>{a&&a.resize(e,r)}),this._depthStencilTexture!=null?this._depthStencilTexture.resize(e,r):(this._depthAttachment||this._stencilAttachment)&&(this._depthAttachment&&this._depthAttachment.resize(e,r),this._stencilAttachment&&this._stencilAttachment.resize(e,r)),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1}}initializeAndBind(e=Xe.FRAMEBUFFER){var r,i,a,o;const n=this._context.gl;if(this._initialized)return void n.bindFramebuffer(e,this.glName);this._glName&&n.deleteFramebuffer(this._glName);const s=this._context,c=n.createFramebuffer(),l=this._desc,u=(r=l.colorTarget)!=null?r:Tt.RENDER_BUFFER,m=(i=l.width)!=null?i:1,f=(a=l.height)!=null?a:1;if(n.bindFramebuffer(e,c),this._colorAttachments.size===0)if(u===Tt.TEXTURE||u===Tt.CUBEMAP)this._colorAttachments.set(_e.COLOR_ATTACHMENT0,un(s,l,this.descriptor.colorTarget===Tt.CUBEMAP?ae.TEXTURE_CUBE_MAP:ae.TEXTURE_2D));else{const h=new _t(s,{internalFormat:b.RGBA4,width:m,height:f});this._colorAttachments.set(_e.COLOR_ATTACHMENT0,h)}this._colorAttachments.forEach((h,T)=>{h&&(Se(h)?this._framebufferTexture2D(h.glName,T,ti(h),e):n.framebufferRenderbuffer(e,T,n.RENDERBUFFER,h.glName))});const x=(o=l.depthStencilTarget)!=null?o:Y.NONE;switch(x){case Y.DEPTH_RENDER_BUFFER:case Y.DEPTH_STENCIL_RENDER_BUFFER:{this._depthAttachment||(this._depthAttachment=new _t(s,{internalFormat:l.depthStencilTarget===Y.DEPTH_RENDER_BUFFER?ie.DEPTH_COMPONENT16:ie.DEPTH_STENCIL,width:m,height:f}));const h=x===Y.DEPTH_RENDER_BUFFER?n.DEPTH_ATTACHMENT:n.DEPTH_STENCIL_ATTACHMENT;n.framebufferRenderbuffer(e,h,n.RENDERBUFFER,this._depthAttachment.glName);break}case Y.STENCIL_RENDER_BUFFER:this._stencilAttachment||(this._stencilAttachment=new _t(s,{internalFormat:ie.STENCIL_INDEX8,width:m,height:f})),n.framebufferRenderbuffer(e,n.STENCIL_ATTACHMENT,n.RENDERBUFFER,this._stencilAttachment.glName);break;case Y.DEPTH_STENCIL_TEXTURE:if(!this._depthStencilTexture){s.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");const h={target:ae.TEXTURE_2D,pixelFormat:W.DEPTH_STENCIL,dataType:Ot.UNSIGNED_INT_24_8,samplingMode:ye.NEAREST,wrapMode:Be.CLAMP_TO_EDGE,width:m,height:f};this._depthStencilTexture=new ee(s,h)}this._framebufferTexture2D(this._depthStencilTexture.glName,n.DEPTH_STENCIL_ATTACHMENT,ti(this._depthStencilTexture),e)}Oi()&&n.checkFramebufferStatus(e)!==n.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=c,this._initialized=!0}_framebufferTexture2D(e,r=_e.COLOR_ATTACHMENT0,i=ae.TEXTURE_2D,a=Xe.FRAMEBUFFER,o=0){this._context.gl.framebufferTexture2D(a,r,i,e,o)}_detachColorAttachment(e){hr()&&console.warn("Detaching an FBO attachment can be a slow due to invalidating framebuffer completeness!");const r=this._context.gl,i=this._colorAttachments.get(e);return Se(i)?this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e)):this._initialized&&(this._context.bindFramebuffer(this),r.framebufferRenderbuffer(Xe.FRAMEBUFFER,e,r.RENDERBUFFER,null)),this._colorAttachments.delete(e),i}_disposeColorAttachments(){this._colorAttachments.forEach((e,r)=>{this._detachColorAttachment(r),e.dispose()}),this._colorAttachments.clear()}_disposeDepthStencilAttachments(){const e=this._context.gl;if(this._depthAttachment){if(this._initialized){this._context.bindFramebuffer(this);const r=this._desc.depthStencilTarget===Y.DEPTH_RENDER_BUFFER?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(Xe.FRAMEBUFFER,r,e.RENDERBUFFER,null)}this._depthAttachment.dispose(),this._depthAttachment=null}this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),e.framebufferRenderbuffer(Xe.FRAMEBUFFER,e.STENCIL_ATTACHMENT,e.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null)}_validateColorAttachmentPoint(e){if(Le._MAX_COLOR_ATTACHMENTS===-1){const i=this._context.capabilities.drawBuffers;if(i){const a=this._context.gl;Le._MAX_COLOR_ATTACHMENTS=a.getParameter(i.MAX_COLOR_ATTACHMENTS)}else Le._MAX_COLOR_ATTACHMENTS=1}const r=e-_e.COLOR_ATTACHMENT0;r+1>Le._MAX_COLOR_ATTACHMENTS&&dn.error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${r+1}. Implementation supports up to ${Le._MAX_COLOR_ATTACHMENTS} color attachments`)}}function Se(t){return"type"in t&&t.type==="texture"}function Jr(t){return"type"in t&&t.type==="renderbuffer"}function ei(t){return Se(t)||"pixelFormat"in t}function un(t,e,r){return new ee(t,{target:r,pixelFormat:W.RGBA,dataType:Ot.UNSIGNED_BYTE,samplingMode:ye.NEAREST,wrapMode:Be.CLAMP_TO_EDGE,width:e.width,height:e.height})}function It(t,e){t.target!==ae.TEXTURE_2D&&t.target!==ae.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),e.width!==void 0&&e.width>=0&&e.height!==void 0&&e.height>=0?e.width===t.width&&e.height===t.height||console.error("Color attachment texture must match the framebuffer's!"):(e.width=t.width,e.height=t.height)}function rr(t,e){e.width!==void 0&&e.width>=0&&e.height!==void 0&&e.height>=0?e.width===t.width&&e.height===t.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(e.width=t.width,e.height=t.height)}function ti(t){return t.descriptor.target===ae.TEXTURE_CUBE_MAP?ae.TEXTURE_CUBE_MAP_POSITIVE_X:ae.TEXTURE_2D}Le._MAX_COLOR_ATTACHMENTS=-1;class K extends br{constructor(e,r){super(),this.data=e,this.type=Pt.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new La,this.params=r||{},this.params.mipmap=this.params.mipmap!==!1,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:Be.REPEAT,t:Be.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||Ct.STRETCH,this.estimatedTexMemRequired=K._estimateTexMemRequired(this.data,this.params),this._startPreload()}_startPreload(){const e=this.data;X(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){Dr(e.src)||e.preload==="auto"&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}_startPreloadImageElement(e){Ia(e.src)||Dr(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,r){if(X(e))return 0;if(vt(e)||gt(e))return r.encoding===K.KTX2_ENCODING?Bo(e,r.mipmap):r.encoding===K.BASIS_ENCODING?Io(e,r.mipmap):e.byteLength;const{width:i,height:a}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?K._getDataDimensions(e):r;return(r.mipmap?4/3:1)*i*a*(r.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){var r;return{target:ae.TEXTURE_2D,pixelFormat:W.RGBA,dataType:Ot.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?ye.LINEAR_MIPMAP_LINEAR:ye.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:(r=this.params.maxAnisotropy)!=null?r:this.params.mipmap?e.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(e,r){if(g(this._glTexture))return this._glTexture;if(g(this._loadingPromise))return this._loadingPromise;const i=this.data;return X(i)?(this._glTexture=new ee(e,this._createDescriptor(e),null),this._glTexture):typeof i=="string"?this._loadFromURL(e,r,i):i instanceof Image?this._loadFromImageElement(e,r,i):i instanceof HTMLVideoElement?this._loadFromVideoElement(e,r,i):i instanceof ImageData||i instanceof HTMLCanvasElement?this._loadFromImage(e,i,r):(vt(i)||gt(i))&&this.params.encoding===K.DDS_ENCODING?(this.data=void 0,this._loadFromDDSData(e,i)):(vt(i)||gt(i))&&this.params.encoding===K.KTX2_ENCODING?(this.data=void 0,this._loadFromKTX2(e,i)):(vt(i)||gt(i))&&this.params.encoding===K.BASIS_ENCODING?(this.data=void 0,this._loadFromBasis(e,i)):gt(i)?this._loadFromPixelData(e,i):vt(i)?this._loadFromPixelData(e,new Uint8Array(i)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,r,i){if(!(this.data instanceof HTMLVideoElement)||X(this._glTexture)||this.data.readyState<St.HAVE_CURRENT_DATA||i===this.data.currentTime)return i;if(g(this._powerOfTwoStretchInfo)){const{framebuffer:a,vao:o,sourceTexture:n}=this._powerOfTwoStretchInfo;n.setData(this.data),this._drawStretchedTexture(e,r,a,o,n,this._glTexture)}else{const{width:a,height:o}=this.data,{width:n,height:s}=this._glTexture.descriptor;a!==n||o!==s?this._glTexture.updateData(0,0,0,Math.min(a,n),Math.min(o,s),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.data.currentTime}_loadFromDDSData(e,r){return this._glTexture=rn(e,this._createDescriptor(e),r),this._glTexture}_loadFromKTX2(e,r){return this._loadAsync(()=>zo(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromBasis(e,r){return this._loadAsync(()=>$o(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromPixelData(e,r){oe(this.params.width>0&&this.params.height>0);const i=this._createDescriptor(e);return i.pixelFormat=this.params.components===1?W.LUMINANCE:this.params.components===3?W.RGB:W.RGBA,i.width=this.params.width,i.height=this.params.height,this._glTexture=new ee(e,i,r),this._glTexture}_loadFromURL(e,r,i){return this._loadAsync(async a=>{const o=await Pi(i,{signal:a});return Fr(a),this._loadFromImage(e,o,r)})}_loadFromImageElement(e,r,i){return i.complete?this._loadFromImage(e,i,r):this._loadAsync(async a=>{const o=await Ba(i,i.src,!1,a);return Fr(a),this._loadFromImage(e,o,r)})}_loadFromVideoElement(e,r,i){return i.readyState>=St.HAVE_CURRENT_DATA?this._loadFromImage(e,i,r):this._loadFromVideoElementAsync(e,r,i)}_loadFromVideoElementAsync(e,r,i){return this._loadAsync(a=>new Promise((o,n)=>{const s=()=>{i.removeEventListener("loadeddata",c),i.removeEventListener("error",l),Ya(u)},c=()=>{i.readyState>=St.HAVE_CURRENT_DATA&&(s(),o(this._loadFromImage(e,i,r)))},l=m=>{s(),n(m||new bi("Failed to load video"))};i.addEventListener("loadeddata",c),i.addEventListener("error",l);const u=$a(a,()=>l(za()))}))}_loadFromImage(e,r,i){const a=K._getDataDimensions(r);this.params.width=a.width,this.params.height=a.height;const o=this._createDescriptor(e);return o.pixelFormat=this.params.components===3?W.RGB:W.RGBA,!this._requiresPowerOfTwo(e,o)||Ut(a.width)&&Ut(a.height)?(o.width=a.width,o.height=a.height,this._glTexture=new ee(e,o,r),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,r,a,o,i),this._glTexture)}_loadAsync(e){const r=new AbortController;this._loadingController=r;const i=e(r.signal);this._loadingPromise=i;const a=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===i&&(this._loadingPromise=null)};return i.then(a,a),i}_requiresPowerOfTwo(e,r){const i=Be.CLAMP_TO_EDGE,a=typeof r.wrapMode=="number"?r.wrapMode===i:r.wrapMode.s===i&&r.wrapMode.t===i;return!To(e.gl)&&(r.hasMipmap||!a)}_makePowerOfTwoTexture(e,r,i,a,o){const{width:n,height:s}=i,c=Lr(n),l=Lr(s);let u;switch(a.width=c,a.height=l,this.params.powerOfTwoResizeMode){case Ct.PAD:a.textureCoordinateScaleFactor=[n/c,s/l],u=new ee(e,a),u.updateData(0,0,0,n,s,r);break;case Ct.STRETCH:case null:case void 0:u=this._stretchToPowerOfTwo(e,r,a,o());break;default:mi(this.params.powerOfTwoResizeMode)}return a.hasMipmap&&u.generateMipmap(),u}_stretchToPowerOfTwo(e,r,i,a){const o=new ee(e,i),n=new Le(e,{colorTarget:Tt.TEXTURE,depthStencilTarget:Y.NONE},o),s=new ee(e,{target:ae.TEXTURE_2D,pixelFormat:i.pixelFormat,dataType:Ot.UNSIGNED_BYTE,wrapMode:Be.CLAMP_TO_EDGE,samplingMode:ye.LINEAR,flipped:!!i.flipped,maxAnisotropy:8,preMultiplyAlpha:i.preMultiplyAlpha},r),c=cn(e),l=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,a,n,c,s,o),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:c,sourceTexture:s,framebuffer:n}:(c.dispose(!0),s.dispose(),n.detachColorTexture(),n.dispose()),e.bindFramebuffer(l),o}_drawStretchedTexture(e,r,i,a,o,n){e.bindFramebuffer(i);const s=e.getViewport();e.setViewport(0,0,n.descriptor.width,n.descriptor.height);const c=e.useTechnique(r);c.setUniform4f("uColor",1,1,1,1),c.bindTexture(o,"tex"),e.bindVAO(a),e.drawArrays(Et.TRIANGLE_STRIP,0,No(a,"geometry")),e.bindFramebuffer(null),e.setViewport(s.x,s.y,s.width,s.height)}unload(){if(g(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:r,sourceTexture:i}=this._powerOfTwoStretchInfo;r.dispose(!0),i.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if(g(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),g(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}var St;K.DDS_ENCODING="image/vnd-ms.dds",K.KTX2_ENCODING="image/ktx2",K.BASIS_ENCODING="image/x.basis",function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(St||(St={}));var ge;(function(t){t[t.Global=1]="Global",t[t.Local=2]="Local"})(ge||(ge={}));var _;(function(t){t[t.Color=0]="Color",t[t.Depth=1]="Depth",t[t.Normal=2]="Normal",t[t.Shadow=3]="Shadow",t[t.Highlight=4]="Highlight",t[t.Draped=5]="Draped",t[t.Occlusion=6]="Occlusion",t[t.Alpha=7]="Alpha",t[t.COUNT=8]="COUNT"})(_||(_={}));function d(t,...e){let r="";for(let i=0;i<e.length;i++)r+=t[i]+e[i];return r+=t[t.length-1],r}(function(t){function e(i){return Math.round(i).toString()}function r(i){return i.toPrecision(8)}t.int=e,t.float=r})(d||(d={}));function hn(t,e){const r=t.fragment;switch(r.code.add(d`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case te.None:r.code.add(d`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case te.View:r.code.add(d`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case te.WindingOrder:r.code.add(d`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:mi(e.doubleSidedMode);case te.COUNT:}}var te;(function(t){t[t.None=0]="None",t[t.View=1]="View",t[t.WindingOrder=2]="WindingOrder",t[t.COUNT=3]="COUNT"})(te||(te={}));const fn=.1,Ar=.001;function Qe(t,e){const r=t.fragment;switch(e.alphaDiscardMode){case q.Blend:r.code.add(d`
        #define discardOrAdjustAlpha(color) { if (color.a < ${d.float(Ar)}) { discard; } }
      `);break;case q.Opaque:r.code.add(d`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case q.Mask:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(d`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case q.MaskBlend:t.fragment.uniforms.add("textureAlphaCutoff","float"),t.fragment.code.add(d`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}class mn{constructor(e){this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRep.release(this._technique)}get technique(){return this._technique}ensureTechnique(e,r,i=this._output){return this._technique=this._techniqueRep.releaseAndAcquire(e,this._material.getTechniqueConfig(i,r),this._technique),this._technique}ensureResources(e){return wt.LOADED}}class pn extends mn{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,r=>this._texture=r),this._acquire(e.normalTextureId,r=>this._textureNormal=r),this._acquire(e.emissiveTextureId,r=>this._textureEmissive=r),this._acquire(e.occlusionTextureId,r=>this._textureOcclusion=r),this._acquire(e.metallicRoughnessTextureId,r=>this._textureMetallicRoughness=r)}dispose(){this._texture=qe(this._texture),this._textureNormal=qe(this._textureNormal),this._textureEmissive=qe(this._textureEmissive),this._textureOcclusion=qe(this._textureOcclusion),this._textureMetallicRoughness=qe(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?wt.LOADED:wt.LOADING}updateTexture(e){(X(this._texture)||e!==this._texture.id)&&(this._texture=qe(this._texture),this._textureId=e,this._acquire(this._textureId,r=>this._texture=r))}bindTextures(e){g(this._texture)&&e.bindTexture(this._texture.glTexture,"tex"),g(this._textureNormal)&&e.bindTexture(this._textureNormal.glTexture,"normalTexture"),g(this._textureEmissive)&&e.bindTexture(this._textureEmissive.glTexture,"texEmission"),g(this._textureOcclusion)&&e.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),g(this._textureMetallicRoughness)&&e.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(e){const r=g(this._texture)?this._texture.glTexture:null;g(r)&&r.descriptor.textureCoordinateScaleFactor?e.setUniform2fv("textureCoordinateScaleFactor",r.descriptor.textureCoordinateScaleFactor):e.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(e,r){if(X(e))return void r(null);const i=this._textureRepository.acquire(e);if(Wa(i))return++this._numLoading,void i.then(a=>{if(this._disposed)return qe(a),void r(null);r(a)}).finally(()=>--this._numLoading);r(i)}}function vn(t){return Math.abs(t*t*t)}function gn(t,e,r){const i=r.parameters,a=r.paddingPixelsOverride;return bt.scale=Math.min(i.divisor/(e-i.offset),1),bt.factor=vn(t),bt.minPixelSize=i.minPixelSize,bt.paddingPixels=a,bt}function xn(t,e){return t===0?e.minPixelSize:e.minPixelSize*(1+2*e.paddingPixels/t)}function _n(t,e){return Math.max(Qa(t*e.scale,t,e.factor),xn(t,e))}function bn(t,e,r,i){return _n(t,gn(e,r,i))}const bt={scale:0,factor:0,minPixelSize:0,paddingPixels:0};function Tn(t,e,r){for(let i=0;i<r;++i)e[2*i]=t[i],e[2*i+1]=t[i]-e[2*i]}function An(t,e,r,i){for(let a=0;a<i;++a)ri[0]=t[a],Tn(ri,ir,1),e[a]=ir[0],r[a]=ir[1]}const ri=new Float64Array(1),ir=new Float32Array(2);function En(t){return!!g(t)&&!t.visible}const Bt=ya();function Cn(t,e,r,i,a,o,n){if(!En(e))if(t.boundingInfo){oe(t.primitiveType===nt.Triangle);const s=r.tolerance;$i(t.boundingInfo,i,a,s,o,n)}else{const s=t.indices.get(p.POSITION),c=t.vertexAttributes.get(p.POSITION);Ui(i,a,0,s.length/3,s,c,void 0,o,n)}}const Sn=H();function $i(t,e,r,i,a,o){if(X(t))return;const n=yn(e,r,Sn);if(qa(Bt,t.getBBMin()),Xa(Bt,t.getBBMax()),g(a)&&a.applyToAabb(Bt),Mn(Bt,e,n,i)){const{primitiveIndices:s,indices:c,position:l}=t,u=s?s.length:c.length/3;if(u>Fn){const m=t.getChildren();if(m!==void 0){for(let f=0;f<8;++f)m[f]!==void 0&&$i(m[f],e,r,i,a,o);return}}Ui(e,r,0,u,c,l,s,a,o)}}const zi=H();function Ui(t,e,r,i,a,o,n,s,c){if(n)return Rn(t,e,r,i,a,o,n,s,c);const l=o.data,u=o.stride||o.size,m=t[0],f=t[1],x=t[2],h=e[0]-m,T=e[1]-f,E=e[2]-x;for(let A=r,G=3*r;A<i;++A){let M=u*a[G++],y=l[M++],F=l[M++],C=l[M];M=u*a[G++];let S=l[M++],w=l[M++],v=l[M];M=u*a[G++];let R=l[M++],I=l[M++],B=l[M];g(s)&&([y,F,C]=s.applyToVertex(y,F,C,A),[S,w,v]=s.applyToVertex(S,w,v,A),[R,I,B]=s.applyToVertex(R,I,B,A));const D=S-y,z=w-F,$=v-C,U=R-y,he=I-F,Ae=B-C,Ge=T*Ae-he*E,ht=E*U-Ae*h,ft=h*he-U*T,fe=D*Ge+z*ht+$*ft;if(Math.abs(fe)<=Number.EPSILON)continue;const se=m-y,He=f-F,Ve=x-C,xe=se*Ge+He*ht+Ve*ft;if(fe>0){if(xe<0||xe>fe)continue}else if(xe>0||xe<fe)continue;const Ee=He*$-z*Ve,mt=Ve*D-$*se,pt=se*z-D*He,ke=h*Ee+T*mt+E*pt;if(fe>0){if(ke<0||xe+ke>fe)continue}else if(ke>0||xe+ke<fe)continue;const We=(U*Ee+he*mt+Ae*pt)/fe;We>=0&&c(We,Gi(D,z,$,U,he,Ae,zi),A,!1)}}function Rn(t,e,r,i,a,o,n,s,c){const l=o.data,u=o.stride||o.size,m=t[0],f=t[1],x=t[2],h=e[0]-m,T=e[1]-f,E=e[2]-x;for(let A=r;A<i;++A){const G=n[A];let M=3*G,y=u*a[M++],F=l[y++],C=l[y++],S=l[y];y=u*a[M++];let w=l[y++],v=l[y++],R=l[y];y=u*a[M];let I=l[y++],B=l[y++],D=l[y];g(s)&&([F,C,S]=s.applyToVertex(F,C,S,A),[w,v,R]=s.applyToVertex(w,v,R,A),[I,B,D]=s.applyToVertex(I,B,D,A));const z=w-F,$=v-C,U=R-S,he=I-F,Ae=B-C,Ge=D-S,ht=T*Ge-Ae*E,ft=E*he-Ge*h,fe=h*Ae-he*T,se=z*ht+$*ft+U*fe;if(Math.abs(se)<=Number.EPSILON)continue;const He=m-F,Ve=f-C,xe=x-S,Ee=He*ht+Ve*ft+xe*fe;if(se>0){if(Ee<0||Ee>se)continue}else if(Ee>0||Ee<se)continue;const mt=Ve*U-$*xe,pt=xe*z-U*He,ke=He*$-z*Ve,We=h*mt+T*pt+E*ke;if(se>0){if(We<0||Ee+We>se)continue}else if(We>0||Ee+We<se)continue;const wr=(he*mt+Ae*pt+Ge*ke)/se;wr>=0&&c(wr,Gi(z,$,U,he,Ae,Ge,zi),G,!1)}}const ii=H(),ai=H();function Gi(t,e,r,i,a,o,n){return dt(ii,t,e,r),dt(ai,i,a,o),sr(n,ii,ai),qt(n,n),n}function yn(t,e,r){return dt(r,1/(e[0]-t[0]),1/(e[1]-t[1]),1/(e[2]-t[2]))}function Mn(t,e,r,i){return On(t,e,r,i,1/0)}function On(t,e,r,i,a){const o=(t[0]-i-e[0])*r[0],n=(t[3]+i-e[0])*r[0];let s=Math.min(o,n),c=Math.max(o,n);const l=(t[1]-i-e[1])*r[1],u=(t[4]+i-e[1])*r[1];if(c=Math.min(c,Math.max(l,u)),c<0||(s=Math.max(s,Math.min(l,u)),s>c))return!1;const m=(t[2]-i-e[2])*r[2],f=(t[5]+i-e[2])*r[2];return c=Math.min(c,Math.max(m,f)),!(c<0)&&(s=Math.max(s,Math.min(m,f)),!(s>c)&&s<a)}function wn(t,e,r,i,a){let o=(r.screenLength||0)*t.pixelRatio;a&&(o=bn(o,i,e,a));const n=o*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return ja(n*e,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function Pn(t,e,r){if(!t)return;const i=t.parameters,a=t.paddingPixelsOverride;e.setUniform4f(r,i.divisor,i.offset,i.minPixelSize,a)}function Hi(t,e){const r=e?Hi(e):{};for(const i in t){let a=t[i];a&&a.forEach&&(a=Dn(a)),a==null&&i in r||(r[i]=a)}return r}function Nn(t,e){let r=!1;for(const i in e){const a=e[i];a!==void 0&&(r=!0,Array.isArray(a)?t[i]=a.slice():t[i]=a)}return r}function Dn(t){const e=[];return t.forEach(r=>e.push(r)),e}const oi={multiply:1,ignore:2,replace:3,tint:4},Fn=1e3;class Ln extends br{constructor(e,r){super(),this.type=Pt.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=Yt,this._parameters=Hi(e,r),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e){Nn(this._parameters,e)&&(this.validateParameters(this._parameters),this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleInPass(e.pass)&&(this.renderOccluded&e.renderOccludedMask)!=0}isVisibleInPass(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){g(this.repository)&&this.repository.materialChanged(this)}}var mr;(function(t){t[t.Occlude=1]="Occlude",t[t.Transparent=2]="Transparent",t[t.OccludeAndTransparent=4]="OccludeAndTransparent",t[t.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",t[t.Opaque=16]="Opaque"})(mr||(mr={}));const In={renderOccluded:mr.Occlude};function Vi(t,e,r=ur.ADD,i=[0,0,0,0]){return{srcRgb:t,srcAlpha:t,dstRgb:e,dstAlpha:e,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function Bn(t,e,r,i,a=ur.ADD,o=ur.ADD,n=[0,0,0,0]){return{srcRgb:t,srcAlpha:e,dstRgb:r,dstAlpha:i,opRgb:a,opAlpha:o,color:{r:n[0],g:n[1],b:n[2],a:n[3]}}}const $n={face:yi.BACK,mode:Mi.CCW},zn={face:yi.FRONT,mode:Mi.CCW},Un=t=>t===ue.Back?$n:t===ue.Front?zn:null,Gn={zNear:0,zFar:1},Hn={r:!0,g:!0,b:!0,a:!0};function Vn(t){return Qn.intern(t)}function kn(t){return Jn.intern(t)}function Wn(t){return es.intern(t)}function qn(t){return ts.intern(t)}function Xn(t){return rs.intern(t)}function jn(t){return is.intern(t)}function Yn(t){return as.intern(t)}function Kn(t){return os.intern(t)}function Zn(t){return ns.intern(t)}class Oe{constructor(e,r){this.makeKey=e,this.makeRef=r,this.interns=new Map}intern(e){if(!e)return null;const r=this.makeKey(e),i=this.interns;return i.has(r)||i.set(r,this.makeRef(e)),i.get(r)}}function we(t){return"["+t.join(",")+"]"}const Qn=new Oe(ki,t=>j({__tag:"Blending"},t));function ki(t){return t?we([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}const Jn=new Oe(Wi,t=>j({__tag:"Culling"},t));function Wi(t){return t?we([t.face,t.mode]):null}const es=new Oe(qi,t=>j({__tag:"PolygonOffset"},t));function qi(t){return t?we([t.factor,t.units]):null}const ts=new Oe(Xi,t=>j({__tag:"DepthTest"},t));function Xi(t){return t?we([t.func]):null}const rs=new Oe(ji,t=>j({__tag:"StencilTest"},t));function ji(t){return t?we([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}const is=new Oe(Yi,t=>j({__tag:"DepthWrite"},t));function Yi(t){return t?we([t.zNear,t.zFar]):null}const as=new Oe(Ki,t=>j({__tag:"ColorWrite"},t));function Ki(t){return t?we([t.r,t.g,t.b,t.a]):null}const os=new Oe(Zi,t=>j({__tag:"StencilWrite"},t));function Zi(t){return t?we([t.mask]):null}const ns=new Oe(ss,t=>({blending:Vn(t.blending),culling:kn(t.culling),polygonOffset:Wn(t.polygonOffset),depthTest:qn(t.depthTest),stencilTest:Xn(t.stencilTest),depthWrite:jn(t.depthWrite),colorWrite:Yn(t.colorWrite),stencilWrite:Kn(t.stencilWrite)}));function ss(t){return t?we([ki(t.blending),Wi(t.culling),qi(t.polygonOffset),Xi(t.depthTest),ji(t.stencilTest),Yi(t.depthWrite),Ki(t.colorWrite),Zi(t.stencilWrite)]):null}const ls=Bn(Ie.SRC_ALPHA,Ie.ONE,Ie.ONE_MINUS_SRC_ALPHA,Ie.ONE_MINUS_SRC_ALPHA),cs=Vi(Ie.ONE,Ie.ONE),ds=Vi(Ie.ZERO,Ie.ONE_MINUS_SRC_ALPHA);function us(t){return t===ce.FrontFace?null:t===ce.Alpha?ds:cs}const hs=5e5,fs={factor:-1,units:-2};function ms(t){return t?fs:null}function ps(t,e=be.LESS){return t===ce.NONE||t===ce.FrontFace?e:be.LEQUAL}var st;(function(t){t[t.X=0]="X",t[t.Y=1]="Y",t[t.Z=2]="Z"})(st||(st={}));function vs(t,e,r){const i=vr(t.direction,ne(r,e,t.origin));return ct(r,t.origin,et(r,t.direction,i)),r}function gs(){return{origin:null,direction:null}}new no(gs);function xs(t,e){const r=vr(t,e)/(Me(t)*Me(e));return-pi(r)}const _s=Ue.getLogger("esri.geometry.support.sphere");function Er(){return bo()}function Qi(t,e=Er()){return Oa(e,t)}function bs(t,e){return Xt(t[0],t[1],t[2],e)}function Ts(t){return t}function As(t){t[0]=t[1]=t[2]=t[3]=0}function Es(t){return t}function Cr(t){return Array.isArray(t)?t[3]:t}function ze(t){return Array.isArray(t)?t:Ds}function Cs(t,e,r,i){return Xt(t,e,r,i)}function Ss(t,e,r){return t!==r&&At(r,t),r[3]=t[3]+e,r}function Rs(t,e,r){return _s.error("sphere.setExtent is not yet supported"),t===r?r:Qi(t,r)}function Kt(t,e,r){if(X(e))return!1;const{origin:i,direction:a}=e,o=ys;o[0]=i[0]-t[0],o[1]=i[1]-t[1],o[2]=i[2]-t[2];const n=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],s=2*(a[0]*o[0]+a[1]*o[1]+a[2]*o[2]),c=s*s-4*n*(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-t[3]*t[3]);if(c<0)return!1;const l=Math.sqrt(c);let u=(-s-l)/(2*n);const m=(-s+l)/(2*n);return(u<0||m<u&&m>0)&&(u=m),!(u<0)&&(r&&(r[0]=i[0]+a[0]*u,r[1]=i[1]+a[1]*u,r[2]=i[2]+a[2]*u),!0)}const ys=H();function Ms(t,e){return Kt(t,e,null)}function Os(t,e,r){if(Kt(t,e,r))return r;const i=Ji(t,e,tt.get());return ct(r,e.origin,et(tt.get(),e.direction,wa(e.origin,i)/Me(e.direction))),r}function Ji(t,e,r){const i=tt.get(),a=so.get();sr(i,e.origin,e.direction);const o=Cr(t);sr(r,i,e.origin),et(r,r,1/Me(r)*o);const n=ta(t,e.origin),s=xs(e.origin,r);return Pa(a,s+n,i),at(r,r,a),r}function ws(t,e,r){return Kt(t,e,r)?r:(vs(e,ze(t),r),ea(t,r,r))}function ea(t,e,r){const i=ne(tt.get(),e,ze(t)),a=et(tt.get(),i,t[3]/Me(i));return ct(r,a,ze(t))}function Ps(t,e){const r=ne(tt.get(),e,ze(t)),i=Na(r),a=t[3]*t[3];return Math.sqrt(Math.abs(i-a))}function ta(t,e){const r=ne(tt.get(),e,ze(t)),i=Me(r),a=Cr(t),o=a+Math.abs(a-i);return pi(a/o)}const ar=H();function ra(t,e,r,i){const a=ne(ar,e,ze(t));switch(r){case st.X:{const o=Pr(a,ar)[2];return dt(i,-Math.sin(o),Math.cos(o),0)}case st.Y:{const o=Pr(a,ar),n=o[1],s=o[2],c=Math.sin(n);return dt(i,-c*Math.cos(s),-c*Math.sin(s),Math.cos(n))}case st.Z:return qt(i,a);default:return}}function ia(t,e){const r=ne(pr,e,ze(t));return Me(r)-t[3]}function Ns(t,e,r,i){const a=ia(t,e),o=ra(t,e,st.Z,pr),n=et(pr,o,r-a);return ct(i,e,n)}const Ds=H(),pr=H();Object.freeze({__proto__:null,create:Er,copy:Qi,fromCenterAndRadius:bs,wrap:Ts,clear:As,fromRadius:Es,getRadius:Cr,getCenter:ze,fromValues:Cs,elevate:Ss,setExtent:Rs,intersectRay:Kt,intersectsRay:Ms,intersectRayClosestSilhouette:Os,closestPointOnSilhouette:Ji,closestPoint:ws,projectPoint:ea,distanceToSilhouette:Ps,angleToSilhouette:ta,axisAt:ra,altitudeAt:ia,setAltitudeAt:Ns});class Fs{constructor(e=0){this.offset=e,this.sphere=Er(),this.tmpVertex=H()}applyToVertex(e,r,i){const a=this.objectTransform.transform;let o=a[0]*e+a[4]*r+a[8]*i+a[12],n=a[1]*e+a[5]*r+a[9]*i+a[13],s=a[2]*e+a[6]*r+a[10]*i+a[14];const c=this.offset/Math.sqrt(o*o+n*n+s*s);o+=o*c,n+=n*c,s+=s*c;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*o+l[4]*n+l[8]*s+l[12],this.tmpVertex[1]=l[1]*o+l[5]*n+l[9]*s+l[13],this.tmpVertex[2]=l[2]*o+l[6]*n+l[10]*s+l[14],this.tmpVertex}applyToMinMax(e,r){const i=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*i,e[1]+=e[1]*i,e[2]+=e[2]*i;const a=this.offset/Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);r[0]+=r[0]*a,r[1]+=r[1]*a,r[2]+=r[2]*a}applyToAabb(e){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*i,e[4]+=e[4]*i,e[5]+=e[5]*i,e}applyToBoundingSphere(e){const r=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=this.offset/r;return this.sphere[0]=e[0]+e[0]*i,this.sphere[1]=e[1]+e[1]*i,this.sphere[2]=e[2]+e[2]*i,this.sphere[3]=e[3]+e[3]*this.offset/r,this.sphere}}const ni=new Fs;function Ls(t){return g(t)?(ni.offset=t,ni):null}function Is(t,e,r,i){const a=r.typedBuffer,o=r.typedBufferStride,n=t.length;i*=o;for(let s=0;s<n;++s){const c=2*t[s];a[i]=e[c],a[i+1]=e[c+1],i+=o}}function aa(t,e,r,i,a){const o=r.typedBuffer,n=r.typedBufferStride,s=t.length;if(i*=n,a==null||a===1)for(let c=0;c<s;++c){const l=3*t[c];o[i]=e[l],o[i+1]=e[l+1],o[i+2]=e[l+2],i+=n}else for(let c=0;c<s;++c){const l=3*t[c];for(let u=0;u<a;++u)o[i]=e[l],o[i+1]=e[l+1],o[i+2]=e[l+2],i+=n}}function Bs(t,e,r,i,a=1){const o=r.typedBuffer,n=r.typedBufferStride,s=t.length;if(i*=n,a===1)for(let c=0;c<s;++c){const l=4*t[c];o[i]=e[l],o[i+1]=e[l+1],o[i+2]=e[l+2],o[i+3]=e[l+3],i+=n}else for(let c=0;c<s;++c){const l=4*t[c];for(let u=0;u<a;++u)o[i]=e[l],o[i+1]=e[l+1],o[i+2]=e[l+2],o[i+3]=e[l+3],i+=n}}function $s(t,e,r,i,a,o=1){if(!r)return void aa(t,e,i,a,o);const n=i.typedBuffer,s=i.typedBufferStride,c=t.length,l=r[0],u=r[1],m=r[2],f=r[4],x=r[5],h=r[6],T=r[8],E=r[9],A=r[10],G=r[12],M=r[13],y=r[14];if(a*=s,o===1)for(let F=0;F<c;++F){const C=3*t[F],S=e[C],w=e[C+1],v=e[C+2];n[a]=l*S+f*w+T*v+G,n[a+1]=u*S+x*w+E*v+M,n[a+2]=m*S+h*w+A*v+y,a+=s}else for(let F=0;F<c;++F){const C=3*t[F],S=e[C],w=e[C+1],v=e[C+2],R=l*S+f*w+T*v+G,I=u*S+x*w+E*v+M,B=m*S+h*w+A*v+y;for(let D=0;D<o;++D)n[a]=R,n[a+1]=I,n[a+2]=B,a+=s}}function zs(t,e,r,i,a,o=1){if(!r)return void aa(t,e,i,a,o);const n=r,s=i.typedBuffer,c=i.typedBufferStride,l=t.length,u=n[0],m=n[1],f=n[2],x=n[4],h=n[5],T=n[6],E=n[8],A=n[9],G=n[10],M=!Ti(n),y=1e-6,F=1-y;if(a*=c,o===1)for(let C=0;C<l;++C){const S=3*t[C],w=e[S],v=e[S+1],R=e[S+2];let I=u*w+x*v+E*R,B=m*w+h*v+A*R,D=f*w+T*v+G*R;if(M){const z=I*I+B*B+D*D;if(z<F&&z>y){const $=1/Math.sqrt(z);I*=$,B*=$,D*=$}}s[a+0]=I,s[a+1]=B,s[a+2]=D,a+=c}else for(let C=0;C<l;++C){const S=3*t[C],w=e[S],v=e[S+1],R=e[S+2];let I=u*w+x*v+E*R,B=m*w+h*v+A*R,D=f*w+T*v+G*R;if(M){const z=I*I+B*B+D*D;if(z<F&&z>y){const $=1/Math.sqrt(z);I*=$,B*=$,D*=$}}for(let z=0;z<o;++z)s[a+0]=I,s[a+1]=B,s[a+2]=D,a+=c}}function Us(t,e,r,i,a,o=1){if(!r)return void Bs(t,e,i,a,o);const n=r,s=i.typedBuffer,c=i.typedBufferStride,l=t.length,u=n[0],m=n[1],f=n[2],x=n[4],h=n[5],T=n[6],E=n[8],A=n[9],G=n[10],M=!Ti(n),y=1e-6,F=1-y;if(a*=c,o===1)for(let C=0;C<l;++C){const S=4*t[C],w=e[S],v=e[S+1],R=e[S+2],I=e[S+3];let B=u*w+x*v+E*R,D=m*w+h*v+A*R,z=f*w+T*v+G*R;if(M){const $=B*B+D*D+z*z;if($<F&&$>y){const U=1/Math.sqrt($);B*=U,D*=U,z*=U}}s[a+0]=B,s[a+1]=D,s[a+2]=z,s[a+3]=I,a+=c}else for(let C=0;C<l;++C){const S=4*t[C],w=e[S],v=e[S+1],R=e[S+2],I=e[S+3];let B=u*w+x*v+E*R,D=m*w+h*v+A*R,z=f*w+T*v+G*R;if(M){const $=B*B+D*D+z*z;if($<F&&$>y){const U=1/Math.sqrt($);B*=U,D*=U,z*=U}}for(let $=0;$<o;++$)s[a+0]=B,s[a+1]=D,s[a+2]=z,s[a+3]=I,a+=c}}function si(t,e,r,i,a,o=1){const n=i.typedBuffer,s=i.typedBufferStride,c=t.length;if(a*=s,o===1){if(r===4)for(let l=0;l<c;++l){const u=4*t[l];n[a]=e[u],n[a+1]=e[u+1],n[a+2]=e[u+2],n[a+3]=e[u+3],a+=s}else if(r===3)for(let l=0;l<c;++l){const u=3*t[l];n[a]=e[u],n[a+1]=e[u+1],n[a+2]=e[u+2],n[a+3]=255,a+=s}}else if(r===4)for(let l=0;l<c;++l){const u=4*t[l];for(let m=0;m<o;++m)n[a]=e[u],n[a+1]=e[u+1],n[a+2]=e[u+2],n[a+3]=e[u+3],a+=s}else if(r===3)for(let l=0;l<c;++l){const u=3*t[l];for(let m=0;m<o;++m)n[a]=e[u],n[a+1]=e[u+1],n[a+2]=e[u+2],n[a+3]=255,a+=s}}function Gs(t,e,r,i,a,o){for(const n of e.fieldNames){const s=t.vertexAttributes.get(n),c=t.indices.get(n);if(s&&c)switch(n){case p.POSITION:{oe(s.size===3);const l=a.getField(n,ot);l&&$s(c,s.data,r,l,o);break}case p.NORMAL:{oe(s.size===3);const l=a.getField(n,ot);l&&zs(c,s.data,i,l,o);break}case p.UV0:{oe(s.size===2);const l=a.getField(n,Si);l&&Is(c,s.data,l,o);break}case p.COLOR:{oe(s.size===3||s.size===4);const l=a.getField(n,Mt);l&&si(c,s.data,s.size,l,o);break}case p.SYMBOLCOLOR:{oe(s.size===3||s.size===4);const l=a.getField(n,Mt);l&&si(c,s.data,s.size,l,o);break}case p.TANGENT:{oe(s.size===4);const l=a.getField(n,dr);l&&Us(c,s.data,i,l,o);break}}}}function Je(t,e){if(e.slicePlaneEnabled){t.extensions.add("GL_OES_standard_derivatives"),e.sliceEnabledForVertexPrograms&&(t.vertex.uniforms.add("slicePlaneOrigin","vec3"),t.vertex.uniforms.add("slicePlaneBasis1","vec3"),t.vertex.uniforms.add("slicePlaneBasis2","vec3")),t.fragment.uniforms.add("slicePlaneOrigin","vec3"),t.fragment.uniforms.add("slicePlaneBasis1","vec3"),t.fragment.uniforms.add("slicePlaneBasis2","vec3");const r=d`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=d`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,a=e.sliceHighlightDisabled?d`#define highlightSlice(_color_, _pos_) (_color_)`:d`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;e.sliceEnabledForVertexPrograms&&t.vertex.code.add(r),t.fragment.code.add(r),t.fragment.code.add(a)}else{const r=d`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;e.sliceEnabledForVertexPrograms&&t.vertex.code.add(r),t.fragment.code.add(r)}}function Hs(t,e,r,i){if(e.slicePlaneEnabled)if(g(r)){if(At(Ce,r.origin),At(Pe,r.basis1),At(Ne,r.basis2),g(i)&&g(i.origin)&&ne(Ce,r.origin,i.origin),g(i)&&g(i.view)){const a=g(i.origin)?Ai(Vs,i.view,i.origin):i.view;ct(Pe,Pe,Ce),ct(Ne,Ne,Ce),at(Ce,Ce,a),at(Pe,Pe,a),at(Ne,Ne,a),ne(Pe,Pe,Ce),ne(Ne,Ne,Ce)}t.setUniform3fv("slicePlaneOrigin",Ce),t.setUniform3fv("slicePlaneBasis1",Pe),t.setUniform3fv("slicePlaneBasis2",Ne)}else t.setUniform3fv("slicePlaneBasis1",Jt),t.setUniform3fv("slicePlaneBasis2",Jt),t.setUniform3fv("slicePlaneOrigin",Jt)}const Ce=H(),Pe=H(),Ne=H(),Vs=Ei();function oa({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(d`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):t.add(d`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function na(t){return!!Ka("force-double-precision-obfuscation")||t.driverTest.doublePrecisionRequiresObfuscation}function sa(t,e){e.instanced&&e.instancedDoublePrecision&&(t.attributes.add(p.MODELORIGINHI,"vec3"),t.attributes.add(p.MODELORIGINLO,"vec3"),t.attributes.add(p.MODEL,"mat3"),t.attributes.add(p.MODELNORMAL,"mat3")),e.instancedDoublePrecision&&(t.vertex.include(oa,e),t.vertex.uniforms.add("viewOriginHi","vec3"),t.vertex.uniforms.add("viewOriginLo","vec3"));const r=[d`
    vec3 calculateVPos() {
      ${e.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,d`
    vec3 subtractOrigin(vec3 _pos) {
      ${e.instancedDoublePrecision?d`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,d`
    vec3 dpNormal(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,d`
    vec3 dpNormalView(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,e.vertexTangents?d`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${e.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:d``];t.vertex.code.add(r[0]),t.vertex.code.add(r[1]),t.vertex.code.add(r[2]),e.output===_.Normal&&t.vertex.code.add(r[3]),t.vertex.code.add(r[4])}function ks(t,e){An(e,li,ci,3),t.setUniform3fv("viewOriginHi",li),t.setUniform3fv("viewOriginLo",ci)}const li=H(),ci=H();function Ws(t){const e=d`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;t.fragment.code.add(e),t.vertex.code.add(e)}function Zt(t,e){e.normalType===Z.Attribute&&(t.attributes.add(p.NORMAL,"vec3"),t.vertex.code.add(d`vec3 normalModel() {
return normal;
}`)),e.normalType===Z.CompressedAttribute&&(t.include(Ws),t.attributes.add(p.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(d`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),e.normalType===Z.ScreenDerivative&&(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(d`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}var Z;(function(t){t[t.Attribute=0]="Attribute",t[t.CompressedAttribute=1]="CompressedAttribute",t[t.Ground=2]="Ground",t[t.ScreenDerivative=3]="ScreenDerivative",t[t.COUNT=4]="COUNT"})(Z||(Z={}));function lt(t,e){e.attributeTextureCoordinates===de.Default&&(t.attributes.add(p.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.vertex.code.add(d`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),e.attributeTextureCoordinates===de.Atlas&&(t.attributes.add(p.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add(p.UVREGION,"vec4"),t.varyings.add("vuvRegion","vec4"),t.vertex.code.add(d`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),e.attributeTextureCoordinates===de.None&&t.vertex.code.add(d`void forwardTextureCoordinates() {}`)}var de;(function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Atlas=2]="Atlas",t[t.COUNT=3]="COUNT"})(de||(de={}));function qs(t){t.vertex.code.add(d`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),t.vertex.code.add(d`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(d`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),t.vertex.code.add(d`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),t.vertex.code.add(d`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(d`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),t.vertex.code.add(d`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function la(t,e){const r=t.vertex.code;e.verticalOffsetEnabled?(t.vertex.uniforms.add("verticalOffset","vec4"),e.screenSizePerspectiveEnabled&&(t.include(qs),t.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),r.add(d`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${e.viewingMode===ge.Global?d`vec3 worldNormal = normalize(worldPos + localOrigin);`:d`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${e.screenSizePerspectiveEnabled?d`
          float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:d`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):r.add(d`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function Xs(t,e,r){if(!e.verticalOffset)return;const i=js(e.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),a=r.camera.pixelRatio||1;t.setUniform4f("verticalOffset",i.screenLength*a,i.perDistance,i.minWorldLength,i.maxWorldLength)}function js(t,e,r,i=Ys){return i.screenLength=t.screenLength,i.perDistance=Math.tan(.5*e)/(.5*r),i.minWorldLength=t.minWorldLength,i.maxWorldLength=t.maxWorldLength,i}const Ys={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0},Ks=Xt(1,1,0,1),Zs=Xt(1,0,1,1);function Qs(t){t.fragment.uniforms.add("depthTex","sampler2D"),t.fragment.uniforms.add("highlightViewportPixelSz","vec4"),t.fragment.constants.add("occludedHighlightFlag","vec4",Ks).add("unoccludedHighlightFlag","vec4",Zs),t.fragment.code.add(d`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function Js(t,e){t.bindTexture(e.highlightDepthTexture,"depthTex"),t.setUniform4f("highlightViewportPixelSz",0,0,e.inverseViewport[0],e.inverseViewport[1])}function Vt(t,e){t.fragment.uniforms.add("terrainDepthTexture","sampler2D"),t.fragment.uniforms.add("nearFar","vec2"),t.fragment.uniforms.add("inverseViewport","vec2"),t.fragment.code.add(d`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${e.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function el(t,e){e.multipassTerrainEnabled&&e.terrainLinearDepthTexture&&t.bindTexture(e.terrainLinearDepthTexture,"terrainDepthTexture")}function tl(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(d`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function ca(t,e){t.include(lt,e),t.fragment.code.add(d`
  struct TextureLookupParameter {
    vec2 uv;
    ${e.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),e.attributeTextureCoordinates===de.Default&&t.fragment.code.add(d`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),e.attributeTextureCoordinates===de.Atlas&&(t.include(tl),t.fragment.code.add(d`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}Ao(0,.6,.2);var L;function da(t,e){const r=t.fragment,i=e.hasMetalnessAndRoughnessTexture||e.hasEmissionTexture||e.hasOcclusionTexture;e.pbrMode===L.Normal&&i&&t.include(ca,e),e.pbrMode!==L.Schematic?(e.pbrMode===L.Disabled&&r.code.add(d`float getBakedOcclusion() { return 1.0; }`),e.pbrMode===L.Normal&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(d`vec3 mrr;
vec3 emission;
float occlusion;`),e.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),e.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(d`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),e.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),e.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(d`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),e.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),e.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(d`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(d`float getBakedOcclusion() { return 1.0; }`),r.code.add(d`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?"vtc.uv = vuv0;":""}
      ${e.hasMetalnessAndRoughnessTexture?e.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${e.hasEmissionTexture?e.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${e.hasOcclusionTexture?e.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(d`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function rl(t,e,r=!1){r||(t.setUniform3fv("mrrFactors",e.mrrFactors),t.setUniform3fv("emissionFactor",e.emissiveFactor))}(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.COUNT=5]="COUNT"})(L||(L={}));function Sr(t){t.code.add(d`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function Rr(t){t.fragment.include(Sr),t.fragment.uniforms.add("shadowMapTex","sampler2D"),t.fragment.uniforms.add("numCascades","int"),t.fragment.uniforms.add("cascadeDistances","vec4"),t.fragment.uniforms.add("shadowMapMatrix","mat4",4),t.fragment.uniforms.add("depthHalfPixelSz","float"),t.fragment.code.add(d`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = cascadeDistances;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, depthHalfPixelSz, shadowMapTex);
}`)}function il(t,e,r){e.shadowMappingEnabled&&e.shadowMap.bindView(t,r)}function Rt(t,e){e.vvInstancingEnabled&&(e.vvSize||e.vvColor)&&t.attributes.add(p.INSTANCEFEATUREATTRIBUTE,"vec4"),e.vvSize?(t.vertex.uniforms.add("vvSizeMinSize","vec3"),t.vertex.uniforms.add("vvSizeMaxSize","vec3"),t.vertex.uniforms.add("vvSizeOffset","vec3"),t.vertex.uniforms.add("vvSizeFactor","vec3"),t.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),t.vertex.uniforms.add("vvSymbolAnchor","vec3"),t.vertex.code.add(d`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),t.vertex.code.add(d`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.vvInstancingEnabled?d`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):t.vertex.code.add(d`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(t.vertex.constants.add("vvColorNumber","int",8),t.vertex.code.add(d`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${e.vvInstancingEnabled?d`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):t.vertex.code.add(d`vec4 vvColor() { return vec4(1.0); }`)}function al(t,e){e.vvSizeEnabled&&(t.setUniform3fv("vvSizeMinSize",e.vvSizeMinSize),t.setUniform3fv("vvSizeMaxSize",e.vvSizeMaxSize),t.setUniform3fv("vvSizeOffset",e.vvSizeOffset),t.setUniform3fv("vvSizeFactor",e.vvSizeFactor)),e.vvColorEnabled&&(t.setUniform1fv("vvColorValues",e.vvColorValues),t.setUniform4fv("vvColorColors",e.vvColorColors))}function ol(t,e){al(t,e),e.vvSizeEnabled&&(t.setUniform3fv("vvSymbolAnchor",e.vvSymbolAnchor),t.setUniformMatrix3fv("vvSymbolRotationMatrix",e.vvSymbolRotationMatrix))}function nl(t,e,r){t.setUniform3f("cameraPosition",r[3]-e[0],r[7]-e[1],r[11]-e[2])}function sl(t,e){t.setUniformMatrix4fv("proj",e)}function ll(t,e,r){Ai(di,r,e),t.setUniform3fv("localOrigin",e),t.setUniformMatrix4fv("view",di)}const di=Ma();class ua{constructor(e,r){this._module=e,this._loadModule=r}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}class cl{constructor(e,r,i){this.release=i,r&&(this._config=r.snapshot()),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}destroy(){this._program=cr(this._program),this._pipeline=this._config=null}reload(e){cr(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}get program(){return this._program}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,r){}bindMaterial(e,r){}bindDraw(e){}bindPipelineState(e,r=null,i){e.setPipelineState(this.getPipelineState(r,i))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return Et.TRIANGLES}getPipelineState(e,r){return this._pipeline}}class dl{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,r={key:this.key};for(const i of e)r[i]=this[i];return r}}function N(t={}){return(e,r)=>{var i,a;e._parameterNames=(i=e._parameterNames)!=null?i:[],e._parameterNames.push(r);const o=e._parameterNames.length-1,n=t.count||2,s=Math.ceil(Math.log2(n)),c=(a=e._parameterBits)!=null?a:[0];let l=0;for(;c[l]+s>16;)l++,l>=c.length&&c.push(0);e._parameterBits=c;const u=c[l],m=(1<<s)-1<<u;c[l]+=s,Object.defineProperty(e,r,{get(){return this[o]},set(f){if(this[o]!==f&&(this[o]=f,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~m|+f<<u&m,typeof f!="number"&&typeof f!="boolean"))throw"Configuration value for "+r+" must be boolean or number, got "+typeof f}})}}class ha{constructor(e,r,i){this._context=e,this._locations=i,this._textures=new Map,this._freeTextureUnits=new fi({deallocator:null}),this._glProgram=e.programCache.acquire(r.generateSource("vertex"),r.generateSource("fragment"),i),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this._fragmentUniforms=hr()?r.fragmentUniforms.entries:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(e,r){this._glProgram.setUniform1i(e,r?1:0)}setUniform1i(e,r){this._glProgram.setUniform1i(e,r)}setUniform1f(e,r){this._glProgram.setUniform1f(e,r)}setUniform1fv(e,r){this._glProgram.setUniform1fv(e,r)}setUniform1iv(e,r){this._glProgram.setUniform1iv(e,r)}setUniform2f(e,r,i){this._glProgram.setUniform2f(e,r,i)}setUniform2fv(e,r){this._glProgram.setUniform2fv(e,r)}setUniform2iv(e,r){this._glProgram.setUniform2iv(e,r)}setUniform3f(e,r,i,a){this._glProgram.setUniform3f(e,r,i,a)}setUniform3fv(e,r){this._glProgram.setUniform3fv(e,r)}setUniform3iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform4f(e,r,i,a,o){this._glProgram.setUniform4f(e,r,i,a,o)}setUniform4fv(e,r){this._glProgram.setUniform4fv(e,r)}setUniform4iv(e,r){this._glProgram.setUniform4iv(e,r)}setUniformMatrix3fv(e,r){this._glProgram.setUniformMatrix3fv(e,r)}setUniformMatrix4fv(e,r){this._glProgram.setUniformMatrix4fv(e,r)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,r){if(X(e)||e.glName==null){const a=this._textures.get(r);return a&&(this._context.bindTexture(null,a.unit),this._freeTextureUnit(a),this._textures.delete(r)),null}let i=this._textures.get(r);return i==null?(i=this._allocTextureUnit(e),this._textures.set(r,i)):i.texture=e,this._context.useProgram(this),this.setUniform1i(r,i.unit),this._context.bindTexture(e,i.unit),i.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,r)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(r,e.unit)}),g(this._fragmentUniforms)&&this._fragmentUniforms.forEach(e=>{if((e.type==="sampler2D"||e.type==="samplerCube")&&!this._textures.has(e.name))throw new Error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}be.LESS;be.ALWAYS;const ul={mask:255},hl={function:{func:be.ALWAYS,ref:Te.OutlineVisualElementMask,mask:Te.OutlineVisualElementMask},operation:{fail:le.KEEP,zFail:le.KEEP,zPass:le.ZERO}},fl={function:{func:be.ALWAYS,ref:Te.OutlineVisualElementMask,mask:Te.OutlineVisualElementMask},operation:{fail:le.KEEP,zFail:le.KEEP,zPass:le.REPLACE}};be.EQUAL,Te.OutlineVisualElementMask,Te.OutlineVisualElementMask,le.KEEP,le.KEEP,le.KEEP;be.NOTEQUAL,Te.OutlineVisualElementMask,Te.OutlineVisualElementMask,le.KEEP,le.KEEP,le.KEEP;function fa(t,e){e.output===_.Color&&e.receiveShadows?(t.varyings.add("linearDepth","float"),t.vertex.code.add(d`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):e.output===_.Depth||e.output===_.Shadow?(t.varyings.add("linearDepth","float"),t.vertex.uniforms.add("nearFar","vec2"),t.vertex.code.add(d`void forwardLinearDepth() {
linearDepth = (-position_view().z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)):t.vertex.code.add(d`void forwardLinearDepth() {}`)}function ma(t){t.vertex.code.add(d`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function yt(t,e){const r=j({hasModelTransformation:!1},e);if(r.hasModelTransformation)return r.linearDepth?void t.vertex.code.add(d`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):void t.vertex.code.add(d`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);r.linearDepth?t.vertex.code.add(d`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):t.vertex.code.add(d`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}function yr(t){t.attributes.add(p.POSITION,"vec3"),t.vertex.code.add(d`vec3 positionModel() { return position; }`)}var me;(function(t){t[t.Multiply=1]="Multiply",t[t.Ignore=2]="Ignore",t[t.Replace=3]="Replace",t[t.Tint=4]="Tint"})(me||(me={}));function ml(t){t.vertex.code.add(d`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${d.int(me.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${d.int(me.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${d.int(me.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${d.int(me.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function pa(t,e){e.symbolColor?(t.include(ml),t.attributes.add(p.SYMBOLCOLOR,"vec4"),t.varyings.add("colorMixMode","mediump float")):t.fragment.uniforms.add("colorMixMode","int"),e.symbolColor?t.vertex.code.add(d`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):t.vertex.code.add(d`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}function va(t,e){e.attributeColor?(t.attributes.add(p.COLOR,"vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(d`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(d`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(d`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function pl(t,e){t.include(yr),t.vertex.include(oa,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),t.vertex.uniforms.add("transformWorldFromModelRS","mat3"),t.vertex.uniforms.add("transformWorldFromModelTH","vec3"),t.vertex.uniforms.add("transformWorldFromModelTL","vec3"),t.vertex.uniforms.add("transformWorldFromViewTH","vec3"),t.vertex.uniforms.add("transformWorldFromViewTL","vec3"),t.vertex.uniforms.add("transformViewFromCameraRelativeRS","mat3"),t.vertex.uniforms.add("transformProjFromView","mat4"),t.vertex.code.add(d`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return transformViewFromCameraRelativeRS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),t.fragment.uniforms.add("transformWorldFromViewTL","vec3"),t.fragment.code.add(d`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}function ga(t,e){e.normalType===Z.Attribute||e.normalType===Z.CompressedAttribute?(t.include(Zt,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add("transformNormalGlobalFromModel","mat3"),t.vertex.uniforms.add("transformNormalViewFromGlobal","mat3"),t.vertex.code.add(d`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):e.normalType===Z.Ground?(t.include(pl,e),t.varyings.add("vNormalWorld","vec3"),t.vertex.code.add(d`
    void forwardNormal() {
      vNormalWorld = ${e.viewingMode===ge.Global?d`normalize(vPositionWorldCameraRelative);`:d`vec3(0.0, 0.0, 1.0);`}
    }
    `)):t.vertex.code.add(d`void forwardNormal() {}`)}function vl(t,e){t.fragment.include(Sr),e.output===_.Shadow?(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(d`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):e.output===_.Depth&&t.fragment.code.add(d`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}function xa(t,e){const r=t.vertex.code,i=t.fragment.code,a=e.hasModelTransformation;e.output!==_.Depth&&e.output!==_.Shadow||(t.include(yt,{linearDepth:!0,hasModelTransformation:a}),t.include(lt,e),t.include(Rt,e),t.include(vl,e),t.include(Je,e),t.vertex.uniforms.add("nearFar","vec2"),t.varyings.add("depth","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),r.add(d`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${a?"model,":""} vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),t.include(Qe,e),i.add(d`
      void main(void) {
        discardBySlice(vpos);
        ${e.hasColorTexture?d`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),e.output===_.Normal&&(t.include(yt,{linearDepth:!1,hasModelTransformation:a}),t.include(Zt,e),t.include(ga,e),t.include(lt,e),t.include(Rt,e),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.vertex.uniforms.add("viewNormal","mat4"),t.varyings.add("vPositionView","vec3"),r.add(d`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${e.normalType===Z.Attribute?d`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${a?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),t.include(Je,e),t.include(Qe,e),i.add(d`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?d`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${e.normalType===Z.ScreenDerivative?d`
            vec3 normal = screenDerivativeNormal(vPositionView);`:d`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),e.output===_.Highlight&&(t.include(yt,{linearDepth:!1,hasModelTransformation:a}),t.include(lt,e),t.include(Rt,e),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),r.add(d`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${a?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),t.include(Je,e),t.include(Qe,e),t.include(Qs),i.add(d`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?d`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}function kt(t){t.include(Sr),t.code.add(d`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}function gl(t,e){const r=t.fragment;e.vertexTangents?(t.attributes.add(p.TANGENT,"vec4"),t.varyings.add("vTangent","vec4"),e.doubleSidedMode===te.WindingOrder?r.code.add(d`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(d`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(t.extensions.add("GL_OES_standard_derivatives"),r.code.add(d`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),e.attributeTextureCoordinates!==de.None&&(t.include(ca,e),r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),r.code.add(d`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${e.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}function Mr(t,e){const r=t.fragment;e.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(d`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):r.code.add(d`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}function xl(t,e){const r=t.fragment,i=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;i===0?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(d`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===1?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(d`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===2&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(d`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==L.Normal&&e.pbrMode!==L.Schematic||r.code.add(d`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}function _l(t){const e=t.fragment;e.uniforms.add("lightingMainDirection","vec3"),e.uniforms.add("lightingMainIntensity","vec3"),e.uniforms.add("lightingFixedFactor","float"),e.uniforms.add("lightingSpecularStrength","float"),e.uniforms.add("lightingEnvironmentStrength","float"),e.code.add(d`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}function bl(t){const e=t.fragment.code;e.add(d`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(d`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(d`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function _a(t){t.vertex.code.add(d`const float PI = 3.141592653589793;`),t.fragment.code.add(d`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function Or(t,e){const r=t.fragment.code;t.include(_a),e.pbrMode===L.Water||e.pbrMode===L.WaterOnIntegratedMesh?(r.add(d`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${e.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(d`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(d`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(d`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(d`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):e.pbrMode!==L.Normal&&e.pbrMode!==L.Schematic||(t.include(bl),r.add(d`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(d`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(d`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(d`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(d`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(d`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function ba(t,e){const r=t.fragment;t.include(_l),t.include(Mr,e),e.pbrMode!==L.Disabled&&t.include(Or,e),t.include(xl,e),e.receiveShadows&&t.include(Rr,e),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),r.uniforms.add("hasFillLights","bool"),t.include(_a),r.code.add(d`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===L.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),r.code.add(d`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.viewingMode===ge.Global?d`normalize(vPosWorld)`:d`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),r.code.add(d`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),e.pbrMode===L.Disabled||e.pbrMode===L.WaterOnIntegratedMesh?r.code.add(d`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):e.pbrMode!==L.Normal&&e.pbrMode!==L.Schematic||(r.code.add(d`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(d`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),r.code.add(d`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.code.add(d`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(d`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode===L.Schematic?d`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:d`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}function Tl(t,e){const r=d`
  /*
  *  ${e.name}
  *  ${e.output===_.Color?"RenderOutput: Color":e.output===_.Depth?"RenderOutput: Depth":e.output===_.Shadow?"RenderOutput: Shadow":e.output===_.Normal?"RenderOutput: Normal":e.output===_.Highlight?"RenderOutput: Highlight":""}
  */
  `;Oi()&&(t.fragment.code.add(r),t.vertex.code.add(r))}function Al(t){t.code.add(d`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function Wt(t){t.include(Al),t.code.add(d`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${d.int(me.Multiply)}) {
        return allMixed;
      }
      else if (mode == ${d.int(me.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${d.int(me.Replace)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${d.int(me.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${d.int(me.Replace)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}const El=Ue.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class Ta{constructor(){this.includedModules=new Map}include(e,r){this.includedModules.has(e)?this.includedModules.get(e)!==r&&El.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,r),e(this.builder,r))}}class Aa extends Ta{constructor(){super(...arguments),this.vertex=new ui,this.fragment=new ui,this.attributes=new Rl,this.varyings=new yl,this.extensions=new ut,this.constants=new V}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(e){const r=this.extensions.generateSource(e),i=this.attributes.generateSource(e),a=this.varyings.generateSource(),o=e==="vertex"?this.vertex:this.fragment,n=o.uniforms.generateSource(),s=o.code.generateSource(),c=e==="vertex"?Ol:Ml,l=this.constants.generateSource().concat(o.constants.generateSource());return`
${r.join(`
`)}

${c}

${l.join(`
`)}

${n.join(`
`)}

${i.join(`
`)}

${a.join(`
`)}

${s.join(`
`)}`}}class Cl{constructor(){this._entries=new Map}add(e,r,i){const a=`${e}_${r}_${i}`;return this._entries.set(a,{name:e,type:r,arraySize:i}),this}generateSource(){const e=r=>r?`[${r}]`:"";return Array.from(this._entries.values()).map(r=>`uniform ${r.type} ${r.name}${e(r.arraySize)};`)}get entries(){return Array.from(this._entries.values())}}class Sl{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class ui extends Ta{constructor(){super(...arguments),this.uniforms=new Cl,this.code=new Sl,this.constants=new V}get builder(){return this}}class Rl{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`attribute ${r[1]} ${r[0]};`)}}class yl{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(){return this._entries.map(e=>`varying ${e[1]} ${e[0]};`)}}class ut{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const r=e==="vertex"?ut.ALLOWLIST_VERTEX:ut.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(i=>r.includes(i)).map(i=>`#extension ${i} : enable`)}}ut.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],ut.ALLOWLIST_VERTEX=[];class V{constructor(){this._entries=[]}add(e,r,i){let a="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":a=V._numberToFloatStr(i);break;case"int":a=V._numberToIntStr(i);break;case"bool":a=i.toString();break;case"vec2":a=`vec2(${V._numberToFloatStr(i[0])},                            ${V._numberToFloatStr(i[1])})`;break;case"vec3":a=`vec3(${V._numberToFloatStr(i[0])},                            ${V._numberToFloatStr(i[1])},                            ${V._numberToFloatStr(i[2])})`;break;case"vec4":a=`vec4(${V._numberToFloatStr(i[0])},                            ${V._numberToFloatStr(i[1])},                            ${V._numberToFloatStr(i[2])},                            ${V._numberToFloatStr(i[3])})`;break;case"ivec2":a=`ivec2(${V._numberToIntStr(i[0])},                             ${V._numberToIntStr(i[1])})`;break;case"ivec3":a=`ivec3(${V._numberToIntStr(i[0])},                             ${V._numberToIntStr(i[1])},                             ${V._numberToIntStr(i[2])})`;break;case"ivec4":a=`ivec4(${V._numberToIntStr(i[0])},                             ${V._numberToIntStr(i[1])},                             ${V._numberToIntStr(i[2])},                             ${V._numberToIntStr(i[3])})`;break;case"mat2":case"mat3":case"mat4":a=`${r}(${Array.prototype.map.call(i,o=>V._numberToFloatStr(o)).join(", ")})`}return this._entries.push(`const ${r} ${e} = ${a};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const Ml=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,Ol=`precision highp float;
precision highp sampler2D;`;function wl(t){const e=new Aa,r=e.vertex.code,i=e.fragment.code;e.include(Tl,{name:"Default Material Shader",output:t.output}),e.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3");const a=t.hasModelTransformation;return a&&e.vertex.uniforms.add("model","mat4"),e.include(yr),e.varyings.add("vpos","vec3"),e.include(Rt,t),e.include(sa,t),e.include(la,t),t.output!==_.Color&&t.output!==_.Alpha||(e.include(Zt,t),e.include(yt,{linearDepth:!1,hasModelTransformation:a}),t.normalType===Z.Attribute&&t.offsetBackfaces&&e.include(ma),e.include(gl,t),e.include(ga,t),t.instancedColor&&e.attributes.add(p.INSTANCECOLOR,"vec4"),e.varyings.add("localvpos","vec3"),e.include(lt,t),e.include(fa,t),e.include(pa,t),e.include(va,t),e.vertex.uniforms.add("externalColor","vec4"),e.varyings.add("vcolorExt","vec4"),t.multipassTerrainEnabled&&e.varyings.add("depth","float"),r.add(d`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${t.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${d.float(Ar)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${t.normalType===Z.Attribute?d`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${t.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${a?"model,":""} vpos);
          ${t.normalType===Z.Attribute&&t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${t.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),t.output===_.Alpha&&(e.include(Je,t),e.include(Qe,t),t.multipassTerrainEnabled&&(e.fragment.include(kt),e.include(Vt,t)),e.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.fragment.include(Wt),i.add(d`
      void main() {
        discardBySlice(vpos);
        ${t.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?d`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:d`vec4 texColor = vec4(1.0);`}
        ${t.attributeColor?d`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:d`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),t.output===_.Color&&(e.include(Je,t),e.include(ba,t),e.include(Mr,t),e.include(Qe,t),t.receiveShadows&&e.include(Rr,t),t.multipassTerrainEnabled&&(e.fragment.include(kt),e.include(Vt,t)),e.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.include(da,t),e.include(Or,t),e.fragment.include(Wt),e.include(hn,t),i.add(d`
      void main() {
        discardBySlice(vpos);
        ${t.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?d`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:d`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${t.normalType===Z.ScreenDerivative?d`
        vec3 normal = screenDerivativeNormal(localvpos);`:d`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${t.pbrMode===L.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.viewingMode===ge.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.attributeColor?d`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:d`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${t.hasNormalTexture?d`
              mat3 tangentSpace = ${t.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${t.pbrMode===L.Normal||t.pbrMode===L.Schematic?t.viewingMode===ge.Global?d`vec3 normalGround = normalize(vpos + localOrigin);`:d`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:d``}
        ${t.pbrMode===L.Normal||t.pbrMode===L.Schematic?d`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),e.include(xa,t),e}const Pl=Object.freeze({__proto__:null,build:wl}),Nl=Ue.getLogger("esri.views.3d.webgl-engine.shaders.DefaultTechnique");class Nt extends cl{initializeProgram(e){const r=Nt.shader.get(),i=this.configuration,a=r.build({oitEnabled:i.transparencyPassType===ce.Color,output:i.output,viewingMode:e.viewingMode,receiveShadows:i.receiveShadows,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:i.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:i.symbolColors,vvSize:i.vvSize,vvColor:i.vvColor,vvInstancingEnabled:!0,instanced:i.instanced,instancedColor:i.instancedColor,instancedDoublePrecision:i.instancedDoublePrecision,pbrMode:i.usePBR?i.isSchematic?L.Schematic:L.Normal:L.Disabled,hasMetalnessAndRoughnessTexture:i.hasMetalnessAndRoughnessTexture,hasEmissionTexture:i.hasEmissionTexture,hasOcclusionTexture:i.hasOcclusionTexture,hasNormalTexture:i.hasNormalTexture,hasColorTexture:i.hasColorTexture,hasModelTransformation:i.hasModelTransformation,receiveAmbientOcclusion:i.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:i.normalsTypeDerivate?Z.ScreenDerivative:Z.Attribute,doubleSidedMode:i.doubleSidedMode,vertexTangents:i.vertexTangents,attributeTextureCoordinates:i.hasMetalnessAndRoughnessTexture||i.hasEmissionTexture||i.hasOcclusionTexture||i.hasNormalTexture||i.hasColorTexture?de.Default:de.None,textureAlphaPremultiplied:i.textureAlphaPremultiplied,attributeColor:i.vertexColors,screenSizePerspectiveEnabled:i.screenSizePerspective,verticalOffsetEnabled:i.verticalOffset,offsetBackfaces:i.offsetBackfaces,doublePrecisionRequiresObfuscation:na(e.rctx),alphaDiscardMode:i.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:i.multipassTerrainEnabled,cullAboveGround:i.cullAboveGround});return new ha(e.rctx,a,Yt)}bindPass(e,r){var i,a;sl(this.program,r.camera.projectionMatrix);const o=this.configuration.output;this.configuration.hasModelTransformation&&(g(e.modelTransformation)?this.program.setUniformMatrix4fv("model",e.modelTransformation):Nl.warnOnce("hasModelTransformation true, but no modelTransformation found.")),(this.configuration.output===_.Depth||r.multipassTerrainEnabled||o===_.Shadow)&&this.program.setUniform2fv("nearFar",r.camera.nearFar),r.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",r.inverseViewport),el(this.program,r)),o===_.Alpha&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",oi[e.colorMixMode])),o===_.Color?(r.lighting.setUniforms(this.program,!1,r.hasFillLights),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",oi[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&rl(this.program,e,this.configuration.isSchematic)):o===_.Highlight&&Js(this.program,r),ol(this.program,e),Xs(this.program,e,r),Pn(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),e.textureAlphaMode!==q.Mask&&e.textureAlphaMode!==q.MaskBlend||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),(i=r.shadowMap)==null||i.bind(this.program),(a=r.ssaoHelper)==null||a.bind(this.program,r.camera)}bindDraw(e){const r=this.configuration.instancedDoublePrecision?gr(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;ll(this.program,r,e.camera.viewMatrix),this.program.rebindTextures(),(this.configuration.output===_.Color||this.configuration.output===_.Alpha||this.configuration.output===_.Depth&&this.configuration.screenSizePerspective||this.configuration.output===_.Normal&&this.configuration.screenSizePerspective||this.configuration.output===_.Highlight&&this.configuration.screenSizePerspective)&&nl(this.program,r,e.camera.viewInverseTransposeMatrix),this.configuration.output===_.Normal&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&ks(this.program,r),Hs(this.program,this.configuration,e.slicePlane,{origin:r}),this.configuration.output===_.Color&&il(this.program,e,r)}_convertDepthTestFunction(e){return e===rt.Lequal?be.LEQUAL:be.LESS}_setPipeline(e,r){const i=this.configuration,a=e===ce.NONE,o=e===ce.FrontFace;return Zn({blending:i.output!==_.Color&&i.output!==_.Alpha||!i.transparent?null:a?ls:us(e),culling:Dl(i)&&Un(i.cullFace),depthTest:{func:ps(e,this._convertDepthTestFunction(i.customDepthTest))},depthWrite:a||o?i.writeDepth&&Gn:null,colorWrite:Hn,stencilWrite:i.sceneHasOcludees?ul:null,stencilTest:i.sceneHasOcludees?r?fl:hl:null,polygonOffset:a||o?null:ms(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipeline(this.configuration.transparencyPassType,!0),this._setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,r){return r?this._occludeePipelineState:super.getPipelineState(e,r)}}function Dl(t){return t.cullFace?t.cullFace!==ue.None:!t.slicePlaneEnabled&&!t.transparent&&!t.doubleSidedMode}Nt.shader=new ua(Pl,()=>xr(()=>import("./DefaultMaterial.glsl.dffd6a92.js"),["DefaultMaterial.glsl.dffd6a92.js","index.069aef39.js","index.779d4b2c.css","vec33.fc83b944.js","VertexAttribute.a3d318c6.js","quat.42a55724.js","vec4f64.b06c8783.js","Texture.2d1d8a6a.js","context-util.ba03b6da.js","enums.0a9daf41.js","BufferView.b4652e0a.js","vec2.231cd990.js","DefaultMaterial_COLOR_GAMMA.03ff973b.js","types.c8f7e133.js","Version.27f20926.js","byteSizeEstimations.651aa0cf.js","RenderSlot.298f8ea6.js","vec3f32.900df0d5.js","devEnvironmentUtils.31af846a.js","VertexElementDescriptor.764350b6.js","InterleavedLayout.064736ca.js"],import.meta.url));class O extends dl{constructor(){super(...arguments),this.output=_.Color,this.alphaDiscardMode=q.Opaque,this.doubleSidedMode=te.None,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=ue.None,this.transparencyPassType=ce.NONE,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1,this.hasModelTransformation=!1,this.customDepthTest=rt.Less}}P([N({count:_.COUNT})],O.prototype,"output",void 0),P([N({count:q.COUNT})],O.prototype,"alphaDiscardMode",void 0),P([N({count:te.COUNT})],O.prototype,"doubleSidedMode",void 0),P([N()],O.prototype,"isSchematic",void 0),P([N()],O.prototype,"vertexColors",void 0),P([N()],O.prototype,"offsetBackfaces",void 0),P([N()],O.prototype,"symbolColors",void 0),P([N()],O.prototype,"vvSize",void 0),P([N()],O.prototype,"vvColor",void 0),P([N()],O.prototype,"verticalOffset",void 0),P([N()],O.prototype,"receiveShadows",void 0),P([N()],O.prototype,"slicePlaneEnabled",void 0),P([N()],O.prototype,"sliceHighlightDisabled",void 0),P([N()],O.prototype,"receiveAmbientOcclusion",void 0),P([N()],O.prototype,"screenSizePerspective",void 0),P([N()],O.prototype,"textureAlphaPremultiplied",void 0),P([N()],O.prototype,"hasColorTexture",void 0),P([N()],O.prototype,"usePBR",void 0),P([N()],O.prototype,"hasMetalnessAndRoughnessTexture",void 0),P([N()],O.prototype,"hasEmissionTexture",void 0),P([N()],O.prototype,"hasOcclusionTexture",void 0),P([N()],O.prototype,"hasNormalTexture",void 0),P([N()],O.prototype,"instanced",void 0),P([N()],O.prototype,"instancedColor",void 0),P([N()],O.prototype,"instancedDoublePrecision",void 0),P([N()],O.prototype,"vertexTangents",void 0),P([N()],O.prototype,"normalsTypeDerivate",void 0),P([N()],O.prototype,"writeDepth",void 0),P([N()],O.prototype,"sceneHasOcludees",void 0),P([N()],O.prototype,"transparent",void 0),P([N()],O.prototype,"enableOffset",void 0),P([N({count:ue.COUNT})],O.prototype,"cullFace",void 0),P([N({count:ce.COUNT})],O.prototype,"transparencyPassType",void 0),P([N()],O.prototype,"multipassTerrainEnabled",void 0),P([N()],O.prototype,"cullAboveGround",void 0),P([N()],O.prototype,"hasModelTransformation",void 0),P([N({count:rt.COUNT})],O.prototype,"customDepthTest",void 0);function Fl(t){const e=new Aa,r=e.vertex.code,i=e.fragment.code;return e.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3"),e.include(yr),e.varyings.add("vpos","vec3"),e.include(Rt,t),e.include(sa,t),e.include(la,t),t.output!==_.Color&&t.output!==_.Alpha||(e.include(Zt,t),e.include(yt,{linearDepth:!1}),t.offsetBackfaces&&e.include(ma),t.instancedColor&&e.attributes.add(p.INSTANCECOLOR,"vec4"),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("localvpos","vec3"),t.multipassTerrainEnabled&&e.varyings.add("depth","float"),e.include(lt,t),e.include(fa,t),e.include(pa,t),e.include(va,t),e.vertex.uniforms.add("externalColor","vec4"),e.varyings.add("vcolorExt","vec4"),r.add(d`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${t.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${d.float(Ar)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${t.multipassTerrainEnabled?d`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),t.output===_.Alpha&&(e.include(Je,t),e.include(Qe,t),t.multipassTerrainEnabled&&(e.fragment.include(kt),e.include(Vt,t)),e.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.fragment.uniforms.add("view","mat4"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.fragment.include(Wt),i.add(d`
      void main() {
        discardBySlice(vpos);
        ${t.multipassTerrainEnabled?d`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?d`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:d`vec4 texColor = vec4(1.0);`}
        ${t.attributeColor?d`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:d`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),t.output===_.Color&&(e.include(Je,t),e.include(ba,t),e.include(Mr,t),e.include(Qe,t),t.receiveShadows&&e.include(Rr,t),t.multipassTerrainEnabled&&(e.fragment.include(kt),e.include(Vt,t)),e.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.fragment.uniforms.add("view","mat4"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.include(da,t),e.include(Or,t),e.fragment.include(Wt),i.add(d`
      void main() {
        discardBySlice(vpos);
        ${t.multipassTerrainEnabled?d`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?d`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:d`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${t.pbrMode===L.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.viewingMode===ge.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.attributeColor?d`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:d`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${d`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${t.pbrMode===L.Normal||t.pbrMode===L.Schematic?t.viewingMode===ge.Global?d`vec3 normalGround = normalize(vpos + localOrigin);`:d`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:d``}
        ${t.pbrMode===L.Normal||t.pbrMode===L.Schematic?d`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),e.include(xa,t),e}const Ll=Object.freeze({__proto__:null,build:Fl});class Qt extends Nt{initializeProgram(e){const r=Qt.shader.get(),i=this.configuration,a=r.build({oitEnabled:i.transparencyPassType===ce.Color,output:i.output,viewingMode:e.viewingMode,receiveShadows:i.receiveShadows,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:i.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:i.symbolColors,vvSize:i.vvSize,vvColor:i.vvColor,vvInstancingEnabled:!0,instanced:i.instanced,instancedColor:i.instancedColor,instancedDoublePrecision:i.instancedDoublePrecision,pbrMode:i.usePBR?L.Normal:L.Disabled,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:i.hasColorTexture,hasModelTransformation:!1,receiveAmbientOcclusion:i.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:Z.Attribute,doubleSidedMode:te.WindingOrder,vertexTangents:!1,attributeTextureCoordinates:i.hasColorTexture?de.Default:de.None,textureAlphaPremultiplied:i.textureAlphaPremultiplied,attributeColor:i.vertexColors,screenSizePerspectiveEnabled:i.screenSizePerspective,verticalOffsetEnabled:i.verticalOffset,offsetBackfaces:i.offsetBackfaces,doublePrecisionRequiresObfuscation:na(e.rctx),alphaDiscardMode:i.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:i.multipassTerrainEnabled,cullAboveGround:i.cullAboveGround});return new ha(e.rctx,a,Yt)}}Qt.shader=new ua(Ll,()=>xr(()=>import("./RealisticTree.glsl.8163c465.js"),["RealisticTree.glsl.8163c465.js","index.069aef39.js","index.779d4b2c.css","vec33.fc83b944.js","VertexAttribute.a3d318c6.js","quat.42a55724.js","vec4f64.b06c8783.js","BufferView.b4652e0a.js","vec2.231cd990.js","DefaultMaterial_COLOR_GAMMA.03ff973b.js","types.c8f7e133.js","enums.0a9daf41.js","Version.27f20926.js","byteSizeEstimations.651aa0cf.js","Texture.2d1d8a6a.js","context-util.ba03b6da.js","RenderSlot.298f8ea6.js","vec3f32.900df0d5.js","devEnvironmentUtils.31af846a.js","VertexElementDescriptor.764350b6.js","InterleavedLayout.064736ca.js"],import.meta.url));class Ea extends Ln{constructor(e){super(e,Bl),this.supportsEdges=!0,this.techniqueConfig=new O,this.vertexBufferLayout=zl(this.parameters),this.instanceBufferLayout=e.instanced?Ul(this.parameters):null}isVisibleInPass(e){return e!==er.MATERIAL_DEPTH_SHADOWMAP_ALL&&e!==er.MATERIAL_DEPTH_SHADOWMAP_DEFAULT&&e!==er.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||e.layerOpacity===0)return!1;const r=e.instanced,i=e.vertexColors,a=e.symbolColors,o=!!r&&r.indexOf("color")>-1,n=e.vvColorEnabled,s=e.colorMixMode==="replace",c=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return i&&(o||n||a)?!!s||c:i?s?l:c:o||n||a?!!s||c:s?l:c}getTechniqueConfig(e,r){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=this.parameters.verticalOffset!==null,this.techniqueConfig.screenSizePerspective=this.parameters.screenSizePerspective!==null,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate=this.parameters.normals==="screenDerivative",this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,g(this.parameters.customDepthTest)&&(this.techniqueConfig.customDepthTest=this.parameters.customDepthTest),this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?ue.None:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=r.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=r.cullAboveGround,this.techniqueConfig.hasModelTransformation=g(this.parameters.modelTransformation),e!==_.Color&&e!==_.Alpha||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=te.WindingOrder:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?te.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?te.WindingOrder:te.None,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!r.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=r.transparencyPassType,this.techniqueConfig.enableOffset=r.camera.relativeElevation<hs),this.techniqueConfig}intersect(e,r,i,a,o,n,s){if(this.parameters.verticalOffset!==null){const c=a.camera;dt(nr,i[12],i[13],i[14]);let l=null;switch(a.viewingMode){case ge.Global:l=qt(hi,nr);break;case ge.Local:l=At(hi,Vl)}let u=0;if(this.parameters.verticalOffset!==null){const m=ne(kl,nr,c.eye),f=Me(m),x=et(m,m,1/f);let h=null;this.parameters.screenSizePerspective&&(h=vr(l,x)),u+=wn(c,f,this.parameters.verticalOffset,h,this.parameters.screenSizePerspective)}et(l,l,u),Ua(or,l,a.transform.inverseRotation),o=ne(Gl,o,or),n=ne(Hl,n,or)}Cn(e,r,a,o,n,Ls(a.verticalOffset),s)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?Ft.TRANSPARENT_MATERIAL:Ft.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:Ft.OPAQUE_MATERIAL)||e===Ft.DRAPED_MATERIAL}createGLMaterial(e){return e.output===_.Color||e.output===_.Alpha||e.output===_.Depth||e.output===_.Normal||e.output===_.Shadow||e.output===_.Highlight?new Il(e):null}createBufferWriter(){return new $l(this.vertexBufferLayout,this.instanceBufferLayout)}}class Il extends pn{constructor(e){super(j(j({},e),e.material.parameters))}updateParameters(e){const r=this._material.parameters;return this.updateTexture(r.textureId),this.ensureTechnique(r.treeRendering?Qt:Nt,e)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return this._output!==_.Color&&this._output!==_.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,r){r.bindPass(this._material.parameters,e),this.bindTextures(r.program)}}const Bl=j({textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:ue.Back,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,fillLightsEnabled:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Ci(),modelTransformation:null,transparent:!1,writeDepth:!0,customDepthTest:rt.Less,textureAlphaMode:q.Blend,textureAlphaCutoff:fn,textureAlphaPremultiplied:!1,sceneHasOcludees:!1},In);class $l{constructor(e,r){this.vertexBufferLayout=e,this.instanceBufferLayout=r}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(p.POSITION).length}write(e,r,i,a){Gs(r,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,i,a)}}function zl(t){const e=t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId,r=wi().vec3f(p.POSITION).vec3f(p.NORMAL);return t.vertexTangents&&r.vec4f(p.TANGENT),e&&r.vec2f(p.UV0),t.vertexColors&&r.vec4u8(p.COLOR),t.symbolColors&&r.vec4u8(p.SYMBOLCOLOR),r}function Ul(t){let e=wi();return e=t.instancedDoublePrecision?e.vec3f(p.MODELORIGINHI).vec3f(p.MODELORIGINLO).mat3f(p.MODEL).mat3f(p.MODELNORMAL):e.mat4f(p.MODEL).mat4f(p.MODELNORMAL),t.instanced&&t.instanced.indexOf("color")>-1&&(e=e.vec4f(p.INSTANCECOLOR)),t.instanced&&t.instanced.indexOf("featureAttribute")>-1&&(e=e.vec4f(p.INSTANCEFEATUREATTRIBUTE)),e}const Gl=H(),Hl=H(),Vl=gr(0,0,1),hi=H(),or=H(),nr=H(),kl=H(),Re=Ue.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Wl(t,e){const r=await ql(t,e);return{resource:r,textures:await Zl(r.textureDefinitions,e)}}async function ql(t,e){const r=g(e)&&e.streamDataRequester;if(r)return Xl(t,r,e);const i=await gi(xi(t,Ga(e)));if(i.ok===!0)return i.value.data;_i(i.error),Ca(i.error)}async function Xl(t,e,r){const i=await gi(e.request(t,"json",r));if(i.ok===!0)return i.value;_i(i.error),Ca(i.error.details.url)}function Ca(t){throw new bi("",`Request for object resource failed: ${t}`)}function jl(t){const e=t.params,r=e.topology;let i=!0;switch(e.vertexAttributes||(Re.warn("Geometry must specify vertex attributes"),i=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const o=e.faces;if(o){if(e.vertexAttributes)for(const n in e.vertexAttributes){const s=o[n];s&&s.values?(s.valueType!=null&&s.valueType!=="UInt32"&&(Re.warn(`Unsupported indexed geometry indices type '${s.valueType}', only UInt32 is currently supported`),i=!1),s.valuesPerElement!=null&&s.valuesPerElement!==1&&(Re.warn(`Unsupported indexed geometry values per element '${s.valuesPerElement}', only 1 is currently supported`),i=!1)):(Re.warn(`Indexed geometry does not specify face indices for '${n}' attribute`),i=!1)}}else Re.warn("Indexed geometries must specify faces"),i=!1;break}default:Re.warn(`Unsupported topology '${r}'`),i=!1}t.params.material||(Re.warn("Geometry requires material"),i=!1);const a=t.params.vertexAttributes;for(const o in a)a[o].values||(Re.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function Yl(t,e){const r=[],i=[],a=[],o=[],n=t.resource,s=Ri.parse(n.version||"1.0","wosr");Jl.validate(s);const c=n.model.name,l=n.model.geometries,u=n.materialDefinitions,m=t.textures;let f=0;const x=new Map;for(let h=0;h<l.length;h++){const T=l[h];if(!jl(T))continue;const E=Ql(T),A=T.params.vertexAttributes,G=[];for(const v in A){const R=A[v],I=R.values;G.push([v,{data:I,size:R.valuesPerElement,exclusive:!0}])}const M=[];if(T.params.topology!=="PerAttributeArray"){const v=T.params.faces;for(const R in v)M.push([R,new Uint32Array(v[R].values)])}const y=m&&m[E.texture];if(y&&!x.has(E.texture)){const{image:v,params:R}=y,I=new K(v,R);o.push(I),x.set(E.texture,I)}const F=x.get(E.texture),C=F?F.id:void 0;let S=a[E.material]?a[E.material][E.texture]:null;if(!S){const v=u[E.material.substring(E.material.lastIndexOf("/")+1)].params;v.transparency===1&&(v.transparency=0);const R=y&&y.alphaChannelUsage,I=v.transparency>0||R==="transparency"||R==="maskAndTransparency",B=y?Sa(y.alphaChannelUsage):void 0,D={ambient:Ir(v.diffuse),diffuse:Ir(v.diffuse),opacity:1-(v.transparency||0),transparent:I,textureAlphaMode:B,textureAlphaCutoff:.33,textureId:C,initTextureTransparent:!0,doubleSided:!0,cullFace:ue.None,colorMixMode:v.externalColorMixMode||"tint",textureAlphaPremultiplied:!!y&&!!y.params.preMultiplyAlpha};g(e)&&e.materialParamsMixin&&Object.assign(D,e.materialParamsMixin),S=new Ea(D),a[E.material]||(a[E.material]={}),a[E.material][E.texture]=S}i.push(S);const w=new jt(G,M);f+=M.position?M.position.length:0,r.push(w)}return{name:c,stageResources:{textures:o,materials:i,geometries:r},pivotOffset:n.model.pivotOffset,boundingBox:Kl(r),numberOfVertices:f,lodThreshold:null}}function Kl(t){const e=vi();return t.forEach(r=>{const i=r.boundingInfo;g(i)&&(zt(e,i.getBBMin()),zt(e,i.getBBMax()))}),e}async function Zl(t,e){const r=[];for(const o in t){const n=t[o],s=n.images[0].data;if(!s){Re.warn("Externally referenced texture data is not yet supported");continue}const c=n.encoding+";base64,"+s,l="/textureDefinitions/"+o,u=n.channels==="rgba"?n.alphaChannelUsage||"transparency":"none",m={noUnpackFlip:!0,wrap:{s:Be.REPEAT,t:Be.REPEAT},preMultiplyAlpha:Sa(u)!==q.Opaque},f=g(e)&&e.disableTextures?Promise.resolve(null):Pi(c,e);r.push(f.then(x=>({refId:l,image:x,params:m,alphaChannelUsage:u})))}const i=await Promise.all(r),a={};for(const o of i)a[o.refId]=o;return a}function Sa(t){switch(t){case"mask":return q.Mask;case"maskAndTransparency":return q.MaskBlend;case"none":return q.Opaque;default:return q.Blend}}function Ql(t){const e=t.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const Jl=new Ri(1,2,"wosr");async function ec(t,e){const r=Ra(eo(t));if(r.fileType==="wosr"){const c=await(e.cache?e.cache.loadWOSR(r.url,e):Wl(r.url,e)),l=Yl(c,e);return{lods:[l],referenceBoundingBox:l.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:c.remove}}const i=await(e.cache?e.cache.loadGLTF(r.url,e,e.usePBR):lo(new co(e.streamDataRequester),r.url,e,e.usePBR)),a=Da(i.model.meta,"ESRI_proxyEllipsoid");i.meta.isEsriSymbolResource&&g(a)&&i.meta.uri.indexOf("/RealisticTrees/")!==-1&&ic(i,a);const o=i.meta.isEsriSymbolResource?{usePBR:e.usePBR,isSchematic:!1,treeRendering:i.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:e.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},n=Ht(j({},e.materialParamsMixin),{treeRendering:i.customMeta.esriTreeRendering});if(r.specifiedLodIndex!=null){const c=$t(i,o,n,r.specifiedLodIndex);let l=c[0].boundingBox;return r.specifiedLodIndex!==0&&(l=$t(i,o,n,0)[0].boundingBox),{lods:c,referenceBoundingBox:l,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}}const s=$t(i,o,n);return{lods:s,referenceBoundingBox:s[0].boundingBox,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}}function Ra(t){const e=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function $t(t,e,r,i){const a=t.model,o=Ci(),n=new Array,s=new Map,c=new Map;return a.lods.forEach((l,u)=>{if(i!==void 0&&u!==i)return;const m={name:l.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:g(l.lodThreshold)?l.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:vi()};n.push(m),l.parts.forEach(f=>{const x=f.material+(f.attributes.normal?"_normal":"")+(f.attributes.color?"_color":"")+(f.attributes.texCoord0?"_texCoord0":"")+(f.attributes.tangent?"_tangent":""),h=a.materials.get(f.material),T=g(f.attributes.texCoord0),E=g(f.attributes.normal),A=tc(h.alphaMode);if(!s.has(x)){if(T){if(g(h.textureColor)&&!c.has(h.textureColor)){const U=a.textures.get(h.textureColor),he=Ht(j({},U.parameters),{preMultiplyAlpha:A!==q.Opaque});c.set(h.textureColor,new K(U.data,he))}if(g(h.textureNormal)&&!c.has(h.textureNormal)){const U=a.textures.get(h.textureNormal);c.set(h.textureNormal,new K(U.data,U.parameters))}if(g(h.textureOcclusion)&&!c.has(h.textureOcclusion)){const U=a.textures.get(h.textureOcclusion);c.set(h.textureOcclusion,new K(U.data,U.parameters))}if(g(h.textureEmissive)&&!c.has(h.textureEmissive)){const U=a.textures.get(h.textureEmissive);c.set(h.textureEmissive,new K(U.data,U.parameters))}if(g(h.textureMetallicRoughness)&&!c.has(h.textureMetallicRoughness)){const U=a.textures.get(h.textureMetallicRoughness);c.set(h.textureMetallicRoughness,new K(U.data,U.parameters))}}const v=h.color[0]**(1/it),R=h.color[1]**(1/it),I=h.color[2]**(1/it),B=h.emissiveFactor[0]**(1/it),D=h.emissiveFactor[1]**(1/it),z=h.emissiveFactor[2]**(1/it),$=g(h.textureColor)&&T?c.get(h.textureColor):null;s.set(x,new Ea(j(Ht(j({},e),{transparent:A===q.Blend,customDepthTest:rt.Lequal,textureAlphaMode:A,textureAlphaCutoff:h.alphaCutoff,diffuse:[v,R,I],ambient:[v,R,I],opacity:h.opacity,doubleSided:h.doubleSided,doubleSidedType:"winding-order",cullFace:h.doubleSided?ue.None:ue.Back,vertexColors:!!f.attributes.color,vertexTangents:!!f.attributes.tangent,normals:E?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,fillLightsEnabled:!0,textureId:g($)?$.id:void 0,colorMixMode:h.colorMixMode,normalTextureId:g(h.textureNormal)&&T?c.get(h.textureNormal).id:void 0,textureAlphaPremultiplied:g($)&&!!$.params.preMultiplyAlpha,occlusionTextureId:g(h.textureOcclusion)&&T?c.get(h.textureOcclusion).id:void 0,emissiveTextureId:g(h.textureEmissive)&&T?c.get(h.textureEmissive).id:void 0,metallicRoughnessTextureId:g(h.textureMetallicRoughness)&&T?c.get(h.textureMetallicRoughness).id:void 0,emissiveFactor:[B,D,z],mrrFactors:[h.metallicFactor,h.roughnessFactor,e.mrrFactors[2]],isSchematic:!1}),r)))}const G=rc(f.indices||f.attributes.position.count,f.primitiveType),M=f.attributes.position.count,y=Ke(ot,M);to(y,f.attributes.position,f.transform);const F=[[p.POSITION,{data:y.typedBuffer,size:y.elementCount,exclusive:!0}]],C=[[p.POSITION,G]];if(g(f.attributes.normal)){const v=Ke(ot,M);zr(o,f.transform),ro(v,f.attributes.normal,o),F.push([p.NORMAL,{data:v.typedBuffer,size:v.elementCount,exclusive:!0}]),C.push([p.NORMAL,G])}if(g(f.attributes.tangent)){const v=Ke(dr,M);zr(o,f.transform),uo(v,f.attributes.tangent,o),F.push([p.TANGENT,{data:v.typedBuffer,size:v.elementCount,exclusive:!0}]),C.push([p.TANGENT,G])}if(g(f.attributes.texCoord0)){const v=Ke(Si,M);ho(v,f.attributes.texCoord0),F.push([p.UV0,{data:v.typedBuffer,size:v.elementCount,exclusive:!0}]),C.push([p.UV0,G])}if(g(f.attributes.color)){const v=Ke(Mt,M);if(f.attributes.color.elementCount===4)f.attributes.color instanceof dr?Hr(v,f.attributes.color,255):f.attributes.color instanceof Mt?fo(v,f.attributes.color):f.attributes.color instanceof ao&&Hr(v,f.attributes.color,1/256);else{mo(v,255,255,255,255);const R=new Gr(v.buffer,0,4);f.attributes.color instanceof ot?Ur(R,f.attributes.color,255):f.attributes.color instanceof Gr?io(R,f.attributes.color):f.attributes.color instanceof oo&&Ur(R,f.attributes.color,1/256)}F.push([p.COLOR,{data:v.typedBuffer,size:v.elementCount,exclusive:!0}]),C.push([p.COLOR,G])}const S=new jt(F,C);m.stageResources.geometries.push(S),m.stageResources.materials.push(s.get(x)),T&&(g(h.textureColor)&&m.stageResources.textures.push(c.get(h.textureColor)),g(h.textureNormal)&&m.stageResources.textures.push(c.get(h.textureNormal)),g(h.textureOcclusion)&&m.stageResources.textures.push(c.get(h.textureOcclusion)),g(h.textureEmissive)&&m.stageResources.textures.push(c.get(h.textureEmissive)),g(h.textureMetallicRoughness)&&m.stageResources.textures.push(c.get(h.textureMetallicRoughness))),m.numberOfVertices+=M;const w=S.boundingInfo;g(w)&&(zt(m.boundingBox,w.getBBMin()),zt(m.boundingBox,w.getBBMax()))})}),n}function tc(t){switch(t){case"BLEND":return q.Blend;case"MASK":return q.Mask;case"OPAQUE":case null:case void 0:return q.Opaque}}function rc(t,e){switch(e){case Et.TRIANGLES:return go(t);case Et.TRIANGLE_STRIP:return vo(t);case Et.TRIANGLE_FAN:return po(t)}}function ic(t,e){for(let r=0;r<t.model.lods.length;++r){const i=t.model.lods[r];t.customMeta.esriTreeRendering=!0;for(const a of i.parts){const o=a.attributes.normal;if(X(o))return;const n=a.attributes.position,s=n.count,c=H(),l=H(),u=H(),m=Ke(Mt,s),f=Ke(ot,s),x=Fa(Ei(),a.transform);for(let h=0;h<s;h++){n.getVec(h,l),o.getVec(h,c),at(l,l,a.transform),ne(u,l,e.center),Nr(u,u,e.radius);const T=u[2],E=Me(u),A=Math.min(.45+.55*E*E,1);Nr(u,u,e.radius),at(u,u,x),qt(u,u),r+1!==t.model.lods.length&&t.model.lods.length>1&&lr(u,u,c,T>-1?.2:Math.min(-4*T-3.8,1)),f.setVec(h,u),m.set(h,0,255*A),m.set(h,1,255*A),m.set(h,2,255*A),m.set(h,3,255)}a.attributes.normal=f,a.attributes.color=m}}}var Ec=Object.freeze(Object.defineProperty({__proto__:null,fetch:ec,gltfToEngineResources:$t,parseUrl:Ra},Symbol.toStringTag,{value:"Module"}));export{wl as $,Fl as _,Ec as o};
