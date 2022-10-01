import{q as b,eD as g,eF as _,aG as L,aH as $,aI as w,r as x,eQ as M,C as o,E as y,ai as A,G as p,ab as v,ac as c,aN as f,D as I}from"./index.9d2cc31f.js";import{n as O}from"./loadAll.db166ecf.js";import{y as E}from"./writeUtils.d0a57595.js";function R(e){return e&&e.type==="group"}function d(e,r,t){let i,s;if(e)for(let l=0,a=e.length;l<a;l++){if(i=e.getItemAt(l),i[r]===t)return i;if(R(i)&&(s=d(i.layers,r,t),s))return s}}const u=b.getLogger("esri.support.LayersMixin"),T=e=>{let r=class extends e{constructor(...t){super(...t),this.layers=new v;const i=a=>{a.parent&&"remove"in a.parent&&a.parent.remove(a)},s=a=>{a.parent=this,this.layerAdded(a),a.type!=="elevation"&&a.type!=="base-elevation"||u.error(`Layer 'title:${a.title}, id:${a.id}' of type '${a.type}' is not supported as an operational layer and will therefore be ignored.`)},l=a=>{a.parent=null,this.layerRemoved(a)};this.layers.on("before-add",a=>i(a.item)),this.layers.on("after-add",a=>s(a.item)),this.layers.on("after-remove",a=>l(a.item))}destroy(){const t=this.layers.removeAll();for(const i of t)this.layerRemoved(i),i.destroy();this.layers.destroy()}set layers(t){this._set("layers",c(t,this._get("layers")))}add(t,i){const s=this.layers;if(i=s.getNextIndex(i),t instanceof f){const l=t;l.parent===this?this.reorder(l,i):s.add(l,i)}else I(t)?t.then(l=>{this.destroyed||this.add(l,i)}):u.error("#add()","The item being added is not a Layer or a Promise that resolves to a Layer.")}addMany(t,i){const s=this.layers;i=s.getNextIndex(i),t.slice().forEach(l=>{l.parent!==this?(s.add(l,i),i+=1):this.reorder(l,i)})}findLayerById(t){return d(this.layers,"id",t)}findLayerByUid(t){return d(this.layers,"uid",t)}remove(t){return this.layers.remove(t)}removeMany(t){return this.layers.removeMany(t)}removeAll(){return this.layers.removeAll()}reorder(t,i){return this.layers.reorder(t,i)}layerAdded(t){}layerRemoved(t){}};return o([y()],r.prototype,"layers",null),r=o([p("esri.support.LayersMixin")],r),r},m="esri.support.TablesMixin",W=b.getLogger(m);function j(e){return e&&e.type==="group"}function h(e,r,t){if(e)for(let i=0,s=e.length;i<s;i++){const l=e.getItemAt(i);if(l[r]===t)return l;if(j(l)){const a=h(l.tables,r,t);if(a)return a}}}const V=e=>{let r=class extends e{constructor(...t){super(...t),this.tables=new v,this.tables.on("after-add",i=>{const s=i.item;s.parent&&s.parent!==this&&"tables"in s.parent&&s.parent.tables.remove(s),s.parent=this,s.type!=="feature"&&W.error(`Layer 'title:${s.title}, id:${s.id}' of type '${s.type}' is not supported as a table and will therefore be ignored.`)}),this.tables.on("after-remove",i=>{i.item.parent=null})}destroy(){const t=this.tables.removeAll();for(const i of t)i.destroy();this.tables.destroy()}set tables(t){this._set("tables",c(t,this._get("tables")))}findTableById(t){return h(this.tables,"id",t)}findTableByUid(t){return h(this.tables,"uid",t)}};return o([y()],r.prototype,"tables",null),r=o([p(m)],r),r};let n=class extends g(_(L($(V(T(w(f))))))){constructor(e){super(e),this._visibilityHandles={},this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._visibilityWatcher=this._visibilityWatcher.bind(this)}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0)}_writeLayers(e,r,t,i){const s=[];if(!e)return s;e.forEach(l=>{const a=E(l,i.webmap?i.webmap.getLayerJSONFromResourceInfo(l):null,i);x(a)&&a.layerType&&s.push(a)}),r.layers=s}set portalItem(e){this._set("portalItem",e)}set visibilityMode(e){const r=this._get("visibilityMode")!==e;this._set("visibilityMode",e),r&&this._enforceVisibility(e,this.visible)}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},e)),Promise.resolve(this)}loadAll(){return O(this,e=>{e(this.layers,this.tables)})}layerAdded(e){e.visible&&this.visibilityMode==="exclusive"?this._turnOffOtherLayers(e):this.visibilityMode==="inherited"&&(e.visible=this.visible),this._visibilityHandles[e.uid]=e.watch("visible",this._visibilityWatcher,!0)}layerRemoved(e){const r=this._visibilityHandles[e.uid];r&&(r.remove(),delete this._visibilityHandles[e.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(e){this.layers.forEach(r=>{r!==e&&(r.visible=!1)})}_enforceVisibility(e,r){if(!M(this).initialized)return;const t=this.layers;let i=t.find(s=>s.visible);switch(e){case"exclusive":t.length&&!i&&(i=t.getItemAt(0),i.visible=!0),this._turnOffOtherLayers(i);break;case"inherited":t.forEach(s=>{s.visible=r})}}_visibleWatcher(e){this.visibilityMode==="inherited"&&this.layers.forEach(r=>{r.visible=e})}_visibilityWatcher(e,r,t,i){const s=i;switch(this.visibilityMode){case"exclusive":e?this._turnOffOtherLayers(s):this._isAnyLayerVisible()||(s.visible=!0);break;case"inherited":s.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(e=>e.visible)}};o([y()],n.prototype,"fullExtent",void 0),o([y({json:{read:!1,write:{ignoreOrigin:!0}}})],n.prototype,"layers",void 0),o([A("layers")],n.prototype,"_writeLayers",null),o([y({type:["GroupLayer"]})],n.prototype,"operationalLayerType",void 0),o([y({json:{origins:{"web-document":{read:!1,write:!1}}}})],n.prototype,"portalItem",null),o([y()],n.prototype,"spatialReference",void 0),o([y({json:{read:!1},readOnly:!0,value:"group"})],n.prototype,"type",void 0),o([y({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],n.prototype,"visibilityMode",null),n=o([p("esri.layers.GroupLayer")],n);const B=n;export{B as default};
