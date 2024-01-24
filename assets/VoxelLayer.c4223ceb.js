import{q as he,C as r,E as o,G as p,aq as pe,a$ as S,eh as ae,ab as d,aF as xe,aG as we,aH as Se,eF as Ve,aI as Te,eH as Re,cn as je,fO as Le,cq as Ee,r as x,aK as Ce,aS as E,d3 as Ie,cQ as $e,u as re,eZ as qe,fg as Me,aM as Pe,T as y,bx as Ae,ac as $,aN as We,$ as Fe,aT as Ne,h as se,cl as X,_ as ke,al as De}from"./index.3750c7ce.js";import{A as ze,E as Be}from"./RenderSlot.298f8ea6.js";import{o as Ue}from"./context-util.a9a483f1.js";import{I as Oe,N as Z,O as N}from"./enums.0a9daf41.js";import{A as He}from"./SceneService.a67569fa.js";import"./originUtils.7c5d9b9d.js";import"./resourceUtils.2428bc7b.js";var le,ee,J,ue,F;(function(t){t[t.Binary=0]="Binary",t[t.JSON=1]="JSON"})(le||(le={})),function(t){t[t.TreeIndex=0]="TreeIndex",t[t.TreeStats=1]="TreeStats",t[t.TreeData=2]="TreeData",t[t.BrickBundles=3]="BrickBundles",t[t.Section=4]="Section",t[t.VariableStats=5]="VariableStats"}(ee||(ee={})),function(t){t[t.None=1]="None",t[t.Front=2]="Front",t[t.Back=3]="Back"}(J||(J={})),function(t){t[t.Low=0]="Low",t[t.Medium=1]="Medium",t[t.High=2]="High"}(ue||(ue={})),function(t){t[t.None=0]="None",t[t.StaticSections=1]="StaticSections",t[t.Slices=2]="Slices",t[t.DynamicSections=4]="DynamicSections",t[t.GhostShell=8]="GhostShell",t[t.Isosurface=16]="Isosurface",t[t.Quality=32]="Quality",t[t.SunLocation=64]="SunLocation",t[t.StaticSectionSelection=128]="StaticSectionSelection",t[t.ExaggerationAndOffset=256]="ExaggerationAndOffset",t[t.CurrentTime=512]="CurrentTime",t[t.CurrentVariable=1024]="CurrentVariable",t[t.DeleteIsosurface=2048]="DeleteIsosurface",t[t.ContainerVisibility=4096]="ContainerVisibility",t[t.RenderMode=8192]="RenderMode",t[t.Optimization=16384]="Optimization"}(F||(F={}));function Ge(t){return new Promise(e=>ke(()=>import("./vxlLayer.c0f478c9.js"),[],import.meta.url).then(i=>i.v).then(({default:i})=>{const s=i({locateFile:Je,preinitializedWebGLContext:t,onRuntimeInitialized:()=>e(s)})})).catch(e=>Promise.reject(e))}function Je(t){return De(`esri/libs/vxl/${t}`)}const D=he.getLogger("esri.layers.VoxelWasmPerScene");var u;(function(t){t[t.Lifetime=1]="Lifetime",t[t.RequestResponse=2]="RequestResponse",t[t.Rendering=3]="Rendering",t[t.Error=4]="Error"})(u||(u={}));class Ke{constructor(e){this._halfIntTexturesAvailable=!1,this._havePreparedWithAllLayers=!1,this._renderPluginContext=null,this._vxl=null,this._pluginIsActive=!1,this._moreToLoad=!1,this._viewportWidth=-1,this._viewportHeight=-1,this._newLayers=[],this._layers=new Map,this._renderPass=ze.MATERIAL,this._renderSlot=Be.VOXEL,this._rctx=null,this._renderTargetToRestore=null,this._lastFrameWasStationary=!1,this._wasmMemBlockSizes=[512,1024,2048,4096,8192,16384,32768,65536],this._wasmMemBlocks=new Map,this._dbgFlags=new Set,this._view=e,this._initialize()}get canRender(){return!!this._vxl&&this._view.viewingMode==="local"}_dbg(e,i){this._dbgFlags.has(e)&&(e===u.Error?D.error(i):D.warn(i))}_removeRenderPlugin(){this._pluginIsActive&&this._view._stage&&(this._dbg(u.Lifetime,"--removeRenderPlugin--"),this._view._stage.removeRenderPlugin(this)),this._pluginIsActive=!1}_initialize(){this._dbg(u.Lifetime,"--initialize--");for(const e of this._wasmMemBlockSizes)this._wasmMemBlocks.set(e,0);this._readyWatchHandle=E(()=>this._view.ready,e=>{e&&this._view.viewingMode==="local"?(this._dbg(u.Lifetime,"view ready status changed to ready on a local view, calling addRenderPlugin"),this._view._stage.addRenderPlugin([this._renderSlot],this),this._pluginIsActive=!0):(this._dbg(u.Lifetime,"view ready status changed, not ready or not a local view!"),this._removeRenderPlugin())},{initial:!0}),this._qualityWatchHandle=E(()=>{var e;return(e=this._view)==null?void 0:e.qualityProfile},e=>{this._dbg(u.Rendering,"qualityProfile changed to "+e),this._vxl&&this._vxl.set_quality(this._toWasmQuality(e))},{initial:!0}),this._timeExtentWatchHandle=E(()=>{var e;return(e=this._view)==null?void 0:e.timeExtent},()=>{if(this._vxl){var e;const i=this._getTimeArgs((e=this._view)==null?void 0:e.timeExtent);this._dbg(u.Rendering,"sceneView timeExtent changed to useTime="+i.useTime+" st="+i.startTime+" et="+i.endTime),this._vxl.set_scene_time_extent(i.startTime,i.endTime,i.useTime),this._renderPluginContext.requestRender()}},{initial:!0}),this._stationaryWatchHandle=E(()=>{var e;return(e=this._view)==null?void 0:e.stationary},e=>{this._vxl&&e&&!this._lastFrameWasStationary&&this._renderPluginContext.requestRender()})}initializeRenderContext(e){this._dbg(u.Lifetime,"--initializeRenderContext--");const i=e.renderContext.rctx;i.type===Ue.WEBGL2?(this._renderPluginContext=e,this._rctx=e.renderContext.rctx,this._halfIntTexturesAvailable=!!this._rctx.capabilities.textureNorm16,this._initializeWasm(i.gl)):this._dbg(u.Error,"WebGL 1 context only!")}uninitializeRenderContext(){this._renderPluginContext=null,this._rctx=null,this._dbg(u.Lifetime,"--uninitializeRenderContext--")}_restoreFramebuffer(){if(!this._renderTargetToRestore)return;const e=this._renderTargetToRestore.fbo;if(!this._rctx)return void this._dbg(u.Error,"no context in restoreFramebuffer!");this._rctx.bindFramebuffer(e,!0);const i=this._renderTargetToRestore.viewport;this._rctx.setViewport(i.x,i.y,i.width,i.height)}_bindPreviousDepthToSlot(e,i){const s=!!this._rctx,n=!!this._renderTargetToRestore;if(!s||!n)return 0;const l=this._renderTargetToRestore.fbo.depthStencilTexture;return l?(i===0?this._rctx.bindTexture(null,e,!0):this._rctx.bindTexture(l,e,!0),1):(this._dbg(u.Error,"no depth/stencil texture exists!"),0)}_modifyResourceCount(e,i,s){if(!this._rctx)return void this._dbg(u.Error,"modifyAllocation callback has no rendering context!");const n=e;s===1?this._rctx.instanceCounter.increment(n,i):this._rctx.instanceCounter.decrement(n,i)}_setBlendState(e,i,s,n){this._rctx?(this._rctx.setBlendingEnabled(e===1),this._rctx.setBlendFunction(i,s),this._rctx.setBlendEquation(n)):this._dbg(u.Error,"setBlendState callback has no rendering context!")}_setFrontFace(e){this._rctx?this._rctx.setFrontFace(e):this._dbg(u.Error,"setFrontFace callback has no rendering context!")}_setDepthStencilStateFunction(e,i,s){this._rctx?(this._rctx.setDepthFunction(s),this._rctx.setDepthTestEnabled(e===1),this._rctx.setDepthWriteEnabled(i===1),this._rctx.setStencilTestEnabled(!1),this._rctx.setStencilFunction(Oe.ALWAYS,0,255),this._rctx.setStencilOpSeparate(Z.FRONT,N.KEEP,N.INCR,N.KEEP),this._rctx.setStencilOpSeparate(Z.BACK,N.KEEP,N.DECR,N.KEEP)):this._dbg(u.Error,"setDepthStencilStateFunction callback has no rendering context!")}_setRasterizerState(e){if(this._rctx)switch(e){case J.None:this._rctx.setFaceCullingEnabled(!1);break;case J.Back:this._rctx.setCullFace(Z.BACK),this._rctx.setFaceCullingEnabled(!0);break;case J.Front:this._rctx.setCullFace(Z.FRONT),this._rctx.setFaceCullingEnabled(!0)}else this._dbg(u.Error,"setRasterizerState callback has no rendering context!")}_setViewport(e,i,s,n){this._rctx?this._rctx.setViewport(e,i,s,n):this._dbg(u.Error,"setViewport callback has no rendering context!")}_updateMemoryUsage(){this._layers.forEach((e,i)=>{if(e.needMemoryUsageUpdate){const s=this._vxl.estimate_memory_usage(i);s>=0&&(e.needMemoryUsageUpdate=!1,e.layerView.setUsedMemory(s))}})}_syncRequestsResponses(){this._layers.forEach((e,i)=>{const s=[];e.responses.forEach((h,_)=>{s.push(_),this._dbg(u.RequestResponse,"responding for requestID:"+_+" size:"+h.size),this._vxl.respond(i,_,h),h.requestType!==ee.TreeIndex&&h.requestType!==ee.Section||(e.needMemoryUsageUpdate=!0)});const n=e.responses;for(const h of s)n.delete(h);const l=this._vxl.get_new_requests(i),a=e.abortController.signal;for(const h in l){e.outstandingRequestCount+=1,e.outstandingRequestCount===1&&e.layerView.updatingFlagChanged();const _=l[h],k={responseType:"array-buffer",signal:a};this._dbg(u.RequestResponse,"making requestID:"+h+" url:"+_.url),Fe(_.url,k).then(v=>{e.outstandingRequestCount-=1,e.outstandingRequestCount===0&&e.layerView.updatingFlagChanged(),this._dbg(u.RequestResponse,"have response for requestID:"+h);let T=0;if(v.data.byteLength>0){T=this._vxl._malloc(v.data.byteLength);const R=new Uint8Array(this._vxl.HEAPU8.buffer,T,v.data.byteLength),ie=new Uint8Array(v.data);for(let Q=0;Q<v.data.byteLength;++Q)R[Q]=ie[Q]}n.set(+h,{responseType:_.responseType,ptr:T,size:v.data.byteLength,success:!0,requestType:_.requestType})}).catch(v=>{e.outstandingRequestCount-=1,e.outstandingRequestCount===0&&e.layerView.updatingFlagChanged(),Ne(v)||(this._dbg(u.Error,`requestID:${h} failed, error=${v.toString()}`),n.set(+h,{responseType:_.responseType,ptr:0,size:0,success:!1,requestType:_.requestType}))})}})}updateWasmCamera(e){this._vxl.set_projection_matrix.apply(this._vxl,e.projectionMatrix),this._vxl.set_view_matrix.apply(this._vxl,e.viewMatrix),this._vxl.set_near_far(e.near,e.far)}isUpdating(e){return!(this._vxl||!this._vxlPromise)||!!this._layers.has(e)&&this._layers.get(e).outstandingRequestCount>0}setEnabled(e,i){this._layers.forEach((s,n)=>{s.layerView===e&&(this._vxl.set_enabled(n,i),this._renderPluginContext.requestRender())})}setSlices(e,i){const s={mask:F.Slices,slices:{planes:i,currentEditPlane:-1}};return this._doMaskedUIUpdate(e,s,!0)}setDynamicSections(e,i){const s={mask:F.DynamicSections,dynamicSections:{planes:i,currentEditPlane:-1}};return this._doMaskedUIUpdate(e,s,!0)}setStaticSections(e,i){const s={mask:F.StaticSections,staticSections:i};return this._doMaskedUIUpdate(e,s,!0)}setCurrentVariable(e,i){const s={mask:F.CurrentVariable,currentVariable:i};return this._doMaskedUIUpdate(e,s,!0)}setRenderMode(e,i){const s={mask:F.RenderMode,renderMode:i};return this._doMaskedUIUpdate(e,s,!0)}_doMaskedUIUpdate(e,i,s){if(!this._vxl)return!1;let n=!1;return this._layers.forEach((l,a)=>{if(l.layerView===e){const h={str:JSON.stringify(i),byteCount:0,ptr:0,isReusable:!1};this._allocateBlock(h)&&(n=this._vxl.handle_masked_ui_update(a,h.ptr,h.byteCount)===1,h.isReusable||this._vxl._free(h.ptr))}}),n&&s&&this._renderPluginContext.requestRender(),n}addVoxelLayer(e){if(!this._vxl){const s={layerView:e,resolveCallback:null,rejectCallback:null},n=new Promise((l,a)=>{s.resolveCallback=l,s.rejectCallback=a});return this._newLayers.push(s),n}const i=this._addVoxelLayer(e);return i<0?Promise.reject(-1):Promise.resolve(i)}removeVoxelLayer(e){if(!this._vxl){const n=this._newLayers.findIndex(a=>e===a.layerView);n>=0&&(this._newLayers[n].resolveCallback(-1),this._newLayers.splice(n,1));const l=this._newLayers.length;return l===0&&(this._dbg(u.Lifetime," no voxel layers left after removing a layer, removing RenderPlugin and destroying"),this.destroy()),l}let i=-1;this._layers.forEach((n,l)=>{n.layerView===e&&(i=l,n.abortController.abort(),this._vxl.remove_layer(i))}),i>=0&&this._layers.delete(i);const s=this._layers.size;return s===0&&(this._dbg(u.Lifetime," no voxel layers left after removing a layer, removing RenderPlugin and destroying"),this.destroy()),s}_getBlockSize(e){for(const i of this._wasmMemBlockSizes)if(e<i)return i;return-1}_allocateBlock(e){e.byteCount=this._vxl.lengthBytesUTF8(e.str)+1;const i=this._getBlockSize(e.byteCount);return i<0?(e.isReusable=!1,e.ptr=this._vxl._malloc(e.byteCount)):(e.isReusable=!0,e.ptr=this._wasmMemBlocks.get(i),e.ptr===0&&(e.ptr=this._vxl._malloc(i),this._wasmMemBlocks.set(i,e.ptr))),e.ptr!==0&&(this._vxl.stringToUTF8(e.str,e.ptr,e.byteCount),!0)}_getTimeArgs(e){let i=-Number.MAX_VALUE,s=Number.MAX_VALUE,n=!1;return x(e)&&(e.isAllTime?n=!0:(x(e.start)&&(n=!0,i=e.start.getTime()/1e3),x(e.end)&&(n=!0,s=e.end.getTime()/1e3))),{startTime:i,endTime:s,useTime:n}}_addVoxelLayer(e){var i;const s=e.layer;let n=-1;const l=s.getConfiguration();if(l.length<1)return-1;const a={str:l,byteCount:0,ptr:0,isReusable:!1};if(!this._allocateBlock(a))return-1;const h=this._getTimeArgs((i=this._view)==null?void 0:i.timeExtent),_=this._view.spatialReference.isWGS84&&s.spatialReference.isWGS84?111319.49079327357:1;if(n=this._vxl.add_layer(s.serviceRoot,a.ptr,a.byteCount,_,_,h.startTime,h.endTime,h.useTime,this._toWasmQuality(this._view.qualityProfile)),a.isReusable||this._vxl._free(a.ptr),n>=0){const k=new AbortController;if(this._layers.set(n,{layerView:e,responses:new Map,outstandingRequestCount:0,abortController:k,needMemoryUsageUpdate:!1}),!this._halfIntTexturesAvailable||se("mac")){const v=[];let T="";for(const R of e.layer.variables)R.renderingFormat.type!=="Int16"&&R.renderingFormat.type!=="UInt16"||(v.push(R.name),R.id===e.layer.style.currentVariableId&&(T=R.name));T!==""&&D.error("#addVoxelLayer_error()",e.layer,`The voxel layer '${e.layer.title}' cannot render the current variable '${T}' in this browser`),v.length>0&&D.warn("#addVoxelLayer_warning()",e.layer,`The voxel layer '${e.layer.title}' cannot render the variables '${v.toString()}' in this browser`)}return se("esri-mobile")&&D.warnOnce("Mobile support differs across devices. Voxel layer might not display as expected."),n}return-1}prepareRender(e){if(!this._vxl)return;const i=e.viewForward,s=e.eye;this._vxl.update_camera_pos_and_direction(s[0],s[1],s[2],i[0],i[1],i[2]);const n=this._vxl.cull();this._dbg(u.RequestResponse,"missingResourceCount="+n),this._moreToLoad=n>0,this._havePreparedWithAllLayers=this._newLayers.length===0,this._updateMemoryUsage()}render(e){if(!this._vxl||e.pass!==this._renderPass||e.slot!==this._renderSlot)return;for(const s of this._newLayers){const n=this._addVoxelLayer(s.layerView);n===-1?s.rejectCallback(-1):s.resolveCallback(n)}if(this._newLayers=[],this._layers.size===0)return void this._dbg(u.Error,"No voxel layers but RenderPlugin instance is being asked to render!");this._renderTargetToRestore={fbo:this._rctx.getBoundFramebufferObject(),viewport:this._rctx.getViewport()},this._syncRequestsResponses(),this._lastFrameWasStationary=this._view.stationary,this._rctx.setPolygonOffsetFillEnabled(!1),this._rctx.setScissorTestEnabled(!1),this._rctx.setColorMask(!0,!0,!0,!0),this._vxl.begin_color_frame(!this._view.stationary||this._moreToLoad,e.scenelightingData.lightingMainDirection[0],e.scenelightingData.lightingMainDirection[1],e.scenelightingData.lightingMainDirection[2]);const i=this._renderTargetToRestore.viewport;i.width===this._viewportWidth&&i.height===this._viewportHeight||(this._viewportWidth=i.width,this._viewportHeight=i.height,this._vxl.set_viewport(i.width,i.height),this._layers.forEach(s=>{s.needMemoryUsageUpdate=!0})),i.x===0&&i.y===0||this._dbg(u.Error,"Unsupported viewport parameters detected!"),this.updateWasmCamera(e.camera),this._vxl.draw(),this._renderTargetToRestore.fbo=null,e.rctx.externalTextureUnitUpdate(this._vxl.get_texture_units_bound_in_frame(),this._vxl.get_active_texture_unit()),e.rctx.externalVertexArrayObjectUpdate(),e.rctx.externalVertexBufferUpdate(),this._rctx.externalProgramUpdate(),(this._moreToLoad||!this._havePreparedWithAllLayers&&this._layers.size>0)&&this._renderPluginContext.requestRender()}destroy(){this._dbg(u.Lifetime,"--destroy--"),this._removeRenderPlugin(),this._readyWatchHandle=X(this._readyWatchHandle),this._qualityWatchHandle=X(this._qualityWatchHandle),this._timeExtentWatchHandle=X(this._timeExtentWatchHandle),this._stationaryWatchHandle=X(this._stationaryWatchHandle),this._vxl&&(this._layers.forEach(e=>{e.abortController.abort()}),this._wasmMemBlocks.forEach(e=>{e!==0&&this._vxl._free(e)}),this._vxl.uninitialize_voxel_wasm(),this._vxl=null)}_initializeWasm(e){return this._vxl?Promise.resolve():(this._vxlPromise||(this._vxlPromise=Ge(e).then(i=>{var s;if(this._vxl=i,this._vxlPromise=null,this._newLayers.length<=0)return this._dbg(u.Lifetime," no voxel layers left after WASM downloaded, removing RenderPlugin and destroying"),void this.destroy();const n=this._getTimeArgs((s=this._view)==null?void 0:s.timeExtent),l=this._vxl.addFunction(this._restoreFramebuffer.bind(this),"v"),a=this._vxl.addFunction(this._setBlendState.bind(this),"viiii"),h=this._vxl.addFunction(this._setFrontFace.bind(this),"vi"),_=this._vxl.addFunction(this._setRasterizerState.bind(this),"vi"),k=this._vxl.addFunction(this._setDepthStencilStateFunction.bind(this),"viii"),v=this._vxl.addFunction(this._setViewport.bind(this),"viiii"),T=this._vxl.addFunction(this._bindPreviousDepthToSlot.bind(this),"iii"),R=this._vxl.addFunction(this._modifyResourceCount.bind(this),"viii"),ie=this._halfIntTexturesAvailable&&!se("mac");this._vxl.initialize_voxel_wasm(l,a,h,_,k,v,T,R,n.startTime,n.endTime,n.useTime,ie),this._renderPluginContext&&this._renderPluginContext.requestRender()}).catch(()=>{for(const i of this._newLayers)i.rejectCallback(-2);this._dbg(u.Error," WASM failed to download, removing RenderPlugin and destroying"),this.destroy()})),this._vxlPromise)}pickDepth(e,i,s){if(!this._vxl||!this._rctx||this._layers.size===0)return null;const n=s.viewport[3]-i;if(e<0||e>s.viewport[2]||i<0||i>s.viewport[3])return this._dbg(u.Error,`pickDepth: outOfRange, screenXY=[${e}, ${n}], vp=[${s.viewport.toString()}]`),null;this._renderTargetToRestore={fbo:this._rctx.getBoundFramebufferObject(),viewport:this._rctx.getViewport()};const l=s.viewForward,a=s.eye;this._vxl.update_camera_pos_and_direction(a[0],a[1],a[2],l[0],l[1],l[2]),this.updateWasmCamera(s),this._vxl.begin_frame();const h=this._vxl.pick_depth(e,n);return this._renderTargetToRestore.fbo=null,this._rctx.externalTextureUnitUpdate(this._vxl.get_texture_units_bound_in_frame(),this._vxl.get_active_texture_unit()),this._rctx.externalVertexArrayObjectUpdate(),this._rctx.externalVertexBufferUpdate(),this._rctx.externalProgramUpdate(),h.success?h.distanceToCamera:null}_toWasmQuality(e){switch(e){case"low":return 0;case"medium":return 1;case"high":return 2}}}class V{constructor(){this.view2WASM=new Map}static getInstance(){return V.instance||(V.instance=new V),V.instance}getVoxelWasmPerSceneView(e){return this.view2WASM.has(e)?this.view2WASM.get(e):null}isUpdating(e,i){return!!this.view2WASM.has(e)&&this.view2WASM.get(e).isUpdating(i)}addLayer(e,i){return this.view2WASM.has(e)||this.view2WASM.set(e,new Ke(e)),this.view2WASM.get(e).addVoxelLayer(i)}removeLayer(e,i){this.view2WASM.has(e)&&this.view2WASM.get(e).removeVoxelLayer(i)<1&&this.view2WASM.delete(e)}setLayerEnabled(e,i,s){this.view2WASM.has(e)&&this.view2WASM.get(e).setEnabled(i,s)}setLayerSlices(e,i){let s=!1;return this.view2WASM.forEach((n,l)=>{l.allLayerViews.filter(a=>a.type==="voxel-3d").forEach(a=>{a.layer===e&&(s=n.setSlices(a,i))})}),s}setLayerDynamicSections(e,i){let s=!1;return this.view2WASM.forEach((n,l)=>{l.allLayerViews.filter(a=>a.type==="voxel-3d").forEach(a=>{a.layer===e&&(s=n.setDynamicSections(a,i))})}),s}setLayerCurrentVariable(e,i){let s=!1;return this.view2WASM.forEach((n,l)=>{l.allLayerViews.filter(a=>a.type==="voxel-3d").forEach(a=>{a.layer===e&&(s=n.setCurrentVariable(a,i))})}),s}setLayerRenderMode(e,i){let s=!1;return this.view2WASM.forEach((n,l)=>{l.allLayerViews.filter(a=>a.type==="voxel-3d").forEach(a=>{a.layer===e&&(s=n.setRenderMode(a,i))})}),s}setLayerStaticSections(e,i){let s=!1;return this.view2WASM.forEach((n,l)=>{l.allLayerViews.filter(a=>a.type==="voxel-3d").forEach(a=>{a.layer===e&&(s=n.setStaticSections(a,i))})}),s}}let q=class extends y{constructor(){super(...arguments),this.enabled=!0,this.label="",this.normal=null,this.point=null}};r([o({type:Boolean,json:{default:!0,write:!0}})],q.prototype,"enabled",void 0),r([o({type:String,json:{write:!0}})],q.prototype,"label",void 0),r([o({type:[Number],json:{write:!0}})],q.prototype,"normal",void 0),r([o({type:[Number],json:{write:!0}})],q.prototype,"point",void 0),q=r([p("esri.layers.support.VoxelDynamicSection")],q);const te=q;let M=class extends y{constructor(){super(...arguments),this.enabled=!0,this.label="",this.normal=null,this.point=null}};r([o({type:Boolean,json:{write:!0}})],M.prototype,"enabled",void 0),r([o({type:String,json:{write:!0}})],M.prototype,"label",void 0),r([o({type:[Number],json:{write:!0}})],M.prototype,"normal",void 0),r([o({type:[Number],json:{write:!0}})],M.prototype,"point",void 0),M=r([p("esri.layers.support.VoxelSlice")],M);const K=M;let m=class extends y{constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null}readHref(t,e,i){return Ae(t,i)}};r([o({type:Boolean,json:{default:!0,write:!0}})],m.prototype,"enabled",void 0),r([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"href",void 0),r([pe(["service","web-scene"],"href")],m.prototype,"readHref",null),r([o({type:S,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"id",void 0),r([o({type:String,json:{write:!0}})],m.prototype,"label",void 0),r([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"normal",void 0),r([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"point",void 0),r([o({type:[S],json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"sizeInPixel",void 0),r([o({type:[K],json:{write:!0}})],m.prototype,"slices",void 0),r([o({type:S,json:{default:0,write:!0}})],m.prototype,"timeId",void 0),r([o({type:S,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"variableId",void 0),m=r([p("esri.layers.support.VoxelSection")],m);const ce=m;let z=class extends y{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5}};r([o({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],z.prototype,"diffuseFactor",void 0),r([o({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],z.prototype,"specularFactor",void 0),z=r([p("esri.layers.support.VoxelSimpleShading")],z);const ye=z;let P=class extends y{constructor(){super(...arguments),this.color=null,this.value=null,this.enabled=!0,this.label=null}};r([o({type:ae,json:{type:[S],write:{enabled:!0,isRequired:!0}}})],P.prototype,"color",void 0),r([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],P.prototype,"value",void 0),r([o({type:Boolean,json:{default:!0,write:!0}})],P.prototype,"enabled",void 0),r([o({type:String,json:{write:!0}})],P.prototype,"label",void 0),P=r([p("esri.layers.support.VoxelIsosurface")],P);const _e=P;let B=class extends y{constructor(){super(...arguments),this.alpha=0,this.position=0}};r([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],B.prototype,"alpha",void 0),r([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],B.prototype,"position",void 0),B=r([p("esri.layers.support.VoxelAlphaStop")],B);const ve=B;let U=class extends y{constructor(){super(...arguments),this.color=null,this.position=0}};r([o({type:ae,json:{type:[S],write:{enabled:!0,isRequired:!0}}})],U.prototype,"color",void 0),r([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],U.prototype,"position",void 0),U=r([p("esri.layers.support.VoxelColorStop")],U);const me=U;let O=class extends y{constructor(){super(...arguments),this.enabled=!1,this.range=null}};r([o({type:Boolean,json:{default:!1,write:!0}})],O.prototype,"enabled",void 0),r([o({type:[Number],json:{write:!0}})],O.prototype,"range",void 0),O=r([p("esri.layers.support.VoxelRangeFilter")],O);const Qe=O;let C=class extends y{constructor(t){super(t),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this.colorStops=new d,this.alphaStops=new d}set colorStops(t){this._set("colorStops",$(t,this._get("colorStops"),d.ofType(me)))}set alphaStops(t){this._set("alphaStops",$(t,this._get("alphaStops"),d.ofType(ve)))}};r([o({type:["linear","nearest"],json:{write:!0}})],C.prototype,"interpolation",void 0),r([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],C.prototype,"stretchRange",void 0),r([o({type:d.ofType(me),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],C.prototype,"colorStops",null),r([o({type:d.ofType(ve),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.alphaStops&&this.alphaStops.length>0}}}}})],C.prototype,"alphaStops",null),r([o({type:Qe,json:{write:!0}})],C.prototype,"rangeFilter",void 0),C=r([p("esri.layers.support.VoxelTransferFunctionStyle")],C);const Xe=C;let A=class extends y{constructor(){super(...arguments),this.color=null,this.value=0,this.enabled=!0,this.label=null}};r([o({type:ae,json:{type:[S],write:{enabled:!0,isRequired:!0}}})],A.prototype,"color",void 0),r([o({type:S,json:{write:{enabled:!0,isRequired:!0}}})],A.prototype,"value",void 0),r([o({type:Boolean,json:{default:!0,write:!0}})],A.prototype,"enabled",void 0),r([o({type:String,json:{write:!0}})],A.prototype,"label",void 0),A=r([p("esri.layers.support.VoxelUniqueValue")],A);const ge=A;let I=class extends y{constructor(t){super(t),this.variableId=0,this.label=null,this.transferFunction=null,this.uniqueValues=new d,this.isosurfaces=new d}set uniqueValues(t){this._set("uniqueValues",$(t,this._get("uniqueValues"),d.ofType(ge)))}set isosurfaces(t){this._set("isosurfaces",$(t,this._get("isosurfaces"),d.ofType(_e)))}};r([o({type:S,json:{write:{enabled:!0,isRequired:!0}}})],I.prototype,"variableId",void 0),r([o({type:String,json:{write:!0}})],I.prototype,"label",void 0),r([o({type:Xe,json:{write:{enabled:!0,overridePolicy(){return{enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],I.prototype,"transferFunction",void 0),r([o({type:d.ofType(ge),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],I.prototype,"uniqueValues",null),r([o({type:d.ofType(_e),json:{write:{enabled:!0,overridePolicy(){const t=!this.uniqueValues||this.uniqueValues.length<1,e=!!this.isosurfaces&&this.isosurfaces.length>0;return{enabled:t&&e}}}}})],I.prototype,"isosurfaces",null),I=r([p("esri.layers.support.VoxelVariableStyle")],I);const be=I;let j=class extends y{constructor(t){super(t),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new d,this.dynamicSections=new d}set slices(t){this._set("slices",$(t,this._get("slices"),d.ofType(K)))}set dynamicSections(t){this._set("dynamicSections",$(t,this._get("dynamicSections"),d.ofType(te)))}};r([o({type:S,json:{write:{enabled:!0,isRequired:!0}}})],j.prototype,"volumeId",void 0),r([o({type:Number,json:{default:1,write:!0}})],j.prototype,"verticalExaggeration",void 0),r([o({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],j.prototype,"exaggerationMode",void 0),r([o({type:Number,json:{default:0,write:!0}})],j.prototype,"verticalOffset",void 0),r([o({type:d.ofType(K),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.slices&&this.slices.length>0}}}}})],j.prototype,"slices",null),r([o({type:d.ofType(te),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],j.prototype,"dynamicSections",null),j=r([p("esri.layers.support.VoxelVolumeStyle")],j);const fe=j;let b=class extends y{constructor(t){super(t),this.currentVariableId=0,this.renderMode="volume",this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new ye,this.volumeStyles=new d,this.variableStyles=new d}set volumeStyles(t){this._set("volumeStyles",$(t,this._get("volumeStyles"),d.ofType(fe)))}set variableStyles(t){this._set("variableStyles",$(t,this._get("variableStyles"),d.ofType(be)))}};r([o({type:d.ofType(fe),json:{write:!0}})],b.prototype,"volumeStyles",null),r([o({type:S,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"currentVariableId",void 0),r([o({type:["volume","surfaces"],json:{write:!0}})],b.prototype,"renderMode",void 0),r([o({type:d.ofType(be),json:{write:!0}})],b.prototype,"variableStyles",null),r([o({type:Boolean,json:{write:!0}})],b.prototype,"enableSlices",void 0),r([o({type:Boolean,json:{write:!0}})],b.prototype,"enableSections",void 0),r([o({type:Boolean,json:{write:!0}})],b.prototype,"enableDynamicSections",void 0),r([o({type:Boolean,json:{write:!0}})],b.prototype,"enableIsosurfaces",void 0),r([o({type:ye,json:{write:!0}})],b.prototype,"shading",void 0),b=r([p("esri.layers.support.VoxelStyle")],b);const Ze=b;let L=class extends y{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null}};r([o({type:["discrete","continuous"],json:{write:!0}})],L.prototype,"continuity",void 0),r([o({type:Boolean,json:{write:!0}})],L.prototype,"hasNoData",void 0),r([o({type:Number,json:{write:!0}})],L.prototype,"noData",void 0),r([o({type:Number,json:{write:!0}})],L.prototype,"offset",void 0),r([o({type:Number,json:{write:!0}})],L.prototype,"scale",void 0),r([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],L.prototype,"type",void 0),L=r([p("esri.layers.support.VoxelFormat")],L);const de=L;let w=class extends y{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null}};r([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],w.prototype,"id",void 0),r([o({type:String,json:{write:!0}})],w.prototype,"description",void 0),r([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],w.prototype,"name",void 0),r([o({type:de,json:{write:!0}})],w.prototype,"originalFormat",void 0),r([o({type:de,json:{write:{enabled:!0,isRequired:!0}}})],w.prototype,"renderingFormat",void 0),r([o({type:String,json:{write:!0}})],w.prototype,"unit",void 0),r([o({type:Number,json:{write:!0}})],w.prototype,"volumeId",void 0),r([o({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],w.prototype,"type",void 0),w=r([p("esri.layers.support.VoxelVariable")],w);const Ye=w;let Y=class extends y{constructor(){super(...arguments),this.values=null}};r([o({type:[Number],json:{write:!0}})],Y.prototype,"values",void 0),Y=r([p("esri.layers.support.VoxelIrregularSpacing")],Y);const et=Y;let H=class extends y{constructor(){super(...arguments),this.scale=1,this.offset=0}};r([o({type:Number,json:{write:!0}})],H.prototype,"scale",void 0),r([o({type:Number,json:{write:!0}})],H.prototype,"offset",void 0),H=r([p("esri.layers.support.VoxelRegularSpacing")],H);const tt=H;let f=class extends y{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=null,this.isWrappedDateLine=null,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null}};r([o({type:et,json:{write:!0}})],f.prototype,"irregularSpacing",void 0),r([o({type:Boolean,json:{write:!0}})],f.prototype,"isPositiveUp",void 0),r([o({type:Boolean,json:{write:!0}})],f.prototype,"isWrappedDateLine",void 0),r([o({type:String,json:{write:!0}})],f.prototype,"label",void 0),r([o({type:String,json:{write:!0}})],f.prototype,"name",void 0),r([o({type:String,json:{write:!0}})],f.prototype,"quantity",void 0),r([o({type:tt,json:{write:!0}})],f.prototype,"regularSpacing",void 0),r([o({type:Number,json:{write:!0}})],f.prototype,"size",void 0),r([o({type:String,json:{write:!0}})],f.prototype,"unit",void 0),f=r([p("esri.layers.support.VoxelDimension")],f);const it=f;let G=class extends y{constructor(){super(...arguments),this.id=0,this.dimensions=null}getZDimension(){if(!this.dimensions||!Array.isArray(this.dimensions)||this.dimensions.length!==4)return-1;for(let t=2;t<4;++t)if(this.dimensions[t].size>0)return t;return-1}isVolumeValid(){return!!this.dimensions&&!!Array.isArray(this.dimensions)&&this.dimensions.length===4&&!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&this.getZDimension()!==-1}};r([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],G.prototype,"id",void 0),r([o({type:[it],json:{write:{enabled:!0,isRequired:!0}}})],G.prototype,"dimensions",void 0),G=r([p("esri.layers.support.VoxelVolume")],G);const rt=G;var ne;let W=ne=class extends y{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4]}isValid(){const t=new ne;return t.apronWidth===this.apronWidth&&t.maxLodLevel===this.maxLodLevel&&!!this.brickSize&&!!this.nodeSize&&!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&this.brickSize.length===3&&this.nodeSize.length===3&&this.brickSize[0]===32&&this.brickSize[1]===32&&this.brickSize[2]===32&&this.nodeSize[0]===4&&this.nodeSize[1]===4&&this.nodeSize[2]===4}};r([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],W.prototype,"apronWidth",void 0),r([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],W.prototype,"brickSize",void 0),r([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],W.prototype,"maxLodLevel",void 0),r([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],W.prototype,"nodeSize",void 0),W=ne=r([p("esri.layers.support.VoxelVolumeIndex")],W);const st=W,oe=he.getLogger(" esri.layers.VoxelLayer");var g;(function(t){t[t.API=1]="API",t[t.VerboseAPI=2]="VerboseAPI",t[t.Error=3]="Error"})(g||(g={}));let c=class extends He(xe(we(Se(Ve(Te(Re(We))))))){constructor(t){super(t),this.serviceRoot="",this.popupEnabled=!0,this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.sections=new d,this.style=null,this.opacity=1,this.variables=new d,this.volumes=new d,this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this._dbgFlags=new Set,this._handles=new je,this.version={major:Number.NaN,minor:Number.NaN,versionString:""}}set url(t){this._set("url",Le(t,oe))}destroy(){this._handles=Ee(this._handles)}_dbg(t,e){this._dbgFlags.has(t)&&(t===g.Error?oe.error(e):oe.warn(e))}load(t){const e=x(t)?t.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},t).catch(Ce).then(()=>this._fetchService(e)).then(()=>this.serviceRoot=this.url);return this.addResolvingPromise(i),Promise.resolve(this)}getConfiguration(){this._handles.add([E(()=>this._getRenderMode(),e=>this._pushRenderModeToWasm(e)),E(()=>this._getCurrentVariableId(),e=>this._pushCurrentVariableIdToWasm(e)),E(()=>this._getDynamicSections(),e=>this._pushDynamicSectionsToWasm(e)),E(()=>this._getSlices(),e=>this._pushSlicesToWasm(e)),E(()=>this._getSections(),e=>this._pushSectionsToWasm(e))]);const t={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:this.index.toJSON(),sections:this.sections.toJSON(),style:this.style};return t.index&&this.index.isValid()?JSON.stringify(t):""}readVersion(t,e){return super.parseVersionString(t)}_getSections(){const t=[];for(const e of this.sections)t.push(new ce({enabled:e.enabled,href:e.href,id:e.id,label:e.label,normal:e.normal,point:e.point,sizeInPixel:e.sizeInPixel,slices:e.slices,timeId:e.timeId,variableId:e.variableId}));return t}_pushSectionsToWasm(t){this._dbg(g.VerboseAPI,"VoxelLayer._pushSectionsToWasm() called"),V.getInstance().setLayerStaticSections(this,t)||this._dbg(g.Error,"VoxelLayer._pushSectionsToWasm() failed!")}_isPlaneValid(t,e,i){if(!t.point||!Array.isArray(t.point)||t.point.length!==3||!t.normal||!Array.isArray(t.normal)||t.normal.length!==3)return!1;for(let l=0;l<3;++l){const a=t.point[l];if(a<0||a>=i[e[l]].size)return!1}const s=Ie(t.normal[0],t.normal[1],t.normal[2]);$e(s,s);const n=1e-6;return!(Math.abs(s[0])+Math.abs(s[1])+Math.abs(s[2])<n)&&(t.normal[0]=s[0],t.normal[1]=s[1],t.normal[2]=s[2],!0)}getVariableStyle(t){let e=-1;if(e=x(t)?t:this._getCurrentVariableId(),!(this!=null&&this.style.variableStyles)||e===-1)return null;const i=this.style.variableStyles.findIndex(s=>s.variableId===e);return i<0?null:this.style.variableStyles.getItemAt(i)}getVariable(t){let e=-1;if(e=x(t)?t:this._getCurrentVariableId(),!this.variables||e===-1)return null;const i=this.variables.findIndex(s=>s.id===e);return i<0?null:this.variables.getItemAt(i)}getVolume(t){const e=this.getVariable(t);return x(e)?this.volumes.find(({id:i})=>i===e.volumeId):null}validateLayer(t){if(t.layerType&&t.layerType!==this.operationalLayerType)throw new re("voxel-layer:layer-type-not-supported","VoxelLayer does not support this layer type",{layerType:t.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor)||this.version.major<3)throw new re("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"});if(this.version.major>3)throw new re("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"})}_getVolumeStyle(t){const e=this.getVariable(t);return x(e)?this.style.volumeStyles.find(({volumeId:i})=>i===e.volumeId):null}_getSlices(){const t=[],e=this.getVolume(null);if(!x(e)||!e.isVolumeValid())return t;const i=this._getVolumeStyle(null);if(!x(i))return t;for(const s of i.slices)this._isPlaneValid(s,[0,1,e.getZDimension()],e.dimensions)?t.push(new K({enabled:s.enabled,label:s.label,point:s.point,normal:s.normal})):t.push(new K({enabled:!1,label:"invalid",point:s.point,normal:s.normal}));return t}_pushSlicesToWasm(t){this._dbg(g.VerboseAPI,"VoxelLayer._pushSlicesToWasm() called!"),V.getInstance().setLayerSlices(this,t)||this._dbg(g.Error,"VoxelLayer._pushSlicesToWasm() failed!")}_getDynamicSections(){const t=[],e=this.getVolume(null);if(!x(e)||!e.isVolumeValid())return t;const i=this._getVolumeStyle(null);if(!x(i))return t;for(const s of i.dynamicSections)this._isPlaneValid(s,[0,1,e.getZDimension()],e.dimensions)?t.push(new te({enabled:s.enabled,label:s.label,point:s.point,normal:s.normal})):t.push(new te({enabled:!1,label:"invalid",point:s.point,normal:s.normal}));return t}_pushDynamicSectionsToWasm(t){this._dbg(g.VerboseAPI,"VoxelLayer._pushDynamicSectionsToWasm() called!"),V.getInstance().setLayerDynamicSections(this,t)||this._dbg(g.Error,"VoxelLayer._updateDynamicSections() failed!")}_getCurrentVariableId(){return this.style?this.style.currentVariableId:-1}_pushCurrentVariableIdToWasm(t){this._dbg(g.VerboseAPI,"VoxelLayer._pushCurrentVariableIdToWasm() called!"),V.getInstance().setLayerCurrentVariable(this,t)||this._dbg(g.Error,"VoxelLayer._pushCurrentVariableIdToWasm() failed!")}_getRenderMode(){return this.style?this.style.renderMode:"volume"}_pushRenderModeToWasm(t){this._dbg(g.VerboseAPI,"VoxelLayer._pushRenderModeToWasm() called!"),V.getInstance().setLayerRenderMode(this,t)||this._dbg(g.Error,"VoxelLayer.setLayerRenderMode() failed!")}};r([o(qe)],c.prototype,"popupEnabled",void 0),r([o({type:["Voxel"]})],c.prototype,"operationalLayerType",void 0),r([o(Me)],c.prototype,"legendEnabled",void 0),r([o({json:{write:!0}})],c.prototype,"title",void 0),r([o(Pe)],c.prototype,"url",null),r([o({type:d.ofType(ce),json:{write:!0,origins:{"web-scene":{name:"layerDefinition.sections",write:!0},service:{write:!1}}}})],c.prototype,"sections",void 0),r([o({type:Ze,json:{write:!0,origins:{"web-scene":{name:"layerDefinition.style",write:!0},service:{write:!1}}}})],c.prototype,"style",void 0),r([o({type:["show","hide"]})],c.prototype,"listMode",void 0),r([o({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],c.prototype,"opacity",void 0),r([o({type:d.ofType(Ye)})],c.prototype,"variables",void 0),r([o({type:d.ofType(rt)})],c.prototype,"volumes",void 0),r([o({type:st})],c.prototype,"index",void 0),r([o({type:Number,json:{name:"layerDefinition.minScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],c.prototype,"minScale",void 0),r([o({type:Number,json:{name:"layerDefinition.maxScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],c.prototype,"maxScale",void 0),r([o({json:{read:!1},readOnly:!0})],c.prototype,"type",void 0),r([o({readOnly:!0,json:{name:"serviceVersion"}})],c.prototype,"version",void 0),r([pe("service","version")],c.prototype,"readVersion",null),c=r([p("esri.layers.VoxelLayer")],c);const pt=c;export{pt as default};