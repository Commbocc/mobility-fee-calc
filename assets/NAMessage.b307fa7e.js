import{av as a,C as t,E as n,aw as y,ax as E,T as D,i as B,G as w,u as j,ay as N,$ as h,az as A,a7 as J,at as V,r as x}from"./index.9d2cc31f.js";import{a as H}from"./GPMessage.135cb55e.js";const I=r=>{if(!Array.isArray(r))return!1;const[i]=r;return typeof i=="number"||typeof i=="string"};class Z{constructor(i={}){this._options=i}toQueryParams(i){if(!i)return null;const s=i.toJSON(),o={};return Object.keys(s).forEach(e=>{const u=this._options[e];if(u){const p=typeof u!="boolean"&&u.name?u.name:e,d=typeof u!="boolean"&&u.getter?u.getter(s):s[e];d!=null&&(o[p]=I(d)?d.join(","):typeof d=="object"?JSON.stringify(d):d)}else o[e]=s[e]},this),o}}function te(r){return new Z(r)}const z=a()({esriCentimeters:"centimeters",esriDecimalDegrees:"decimal-degrees",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriPoints:"points",esriUnknownUnits:"unknown",esriYards:"yards"}),R=a()({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards"}),re=a()({esriNAUDays:"days",esriNAUHours:"hours",esriNAUMinutes:"minutes",esriNAUSeconds:"seconds"}),ie=a()({esriDOTComplete:"complete",esriDOTCompleteNoEvents:"complete-no-events",esriDOTFeatureSets:"featuresets",esriDOTInstructionsOnly:"instructions-only",esriDOTStandard:"standard",esriDOTSummaryOnly:"summary-only"}),se=a()({esriNAOutputLineNone:"none",esriNAOutputLineStraight:"straight",esriNAOutputLineTrueShape:"true-shape",esriNAOutputLineTrueShapeWithMeasure:"true-shape-with-measure"});a()({esriNAOutputPolygonNone:"none",esriNAOutputPolygonSimplified:"simplified",esriNAOutputPolygonDetailed:"detailed"});const W=a()({esriNFSBAllowBacktrack:"allow-backtrack",esriNFSBAtDeadEndsOnly:"at-dead-ends-only",esriNFSBNoBacktrack:"no-backtrack",esriNFSBAtDeadEndsAndIntersections:"at-dead-ends-and-intersections"});a()({esriNATravelDirectionFromFacility:"from-facility",esriNATravelDirectionToFacility:"to-facility"});a()({esriNATimeOfDayNotUsed:"not-used",esriNATimeOfDayUseAsStartTime:"start",esriNATimeOfDayUseAsEndTime:"end"});const G=a()({AUTOMOBILE:"automobile",TRUCK:"truck",WALK:"walk",OTHER:"other"}),oe=a()({0:"either-side-of-vehicle",1:"right-side-of-vehicle",2:"left-side-of-vehicle",3:"no-u-turn"},{useNumericKeys:!0}),ne=a()({0:"stop",1:"waypoint",2:"break"},{useNumericKeys:!0}),ae=a()({0:"ok",1:"not-located",2:"network-element-not-located",3:"element-not-traversable",4:"invalid-field-values",5:"not-reached",6:"time-window-violation",7:"not-located-on-closest"},{useNumericKeys:!0}),le=a()({1:"right",2:"left"},{useNumericKeys:!0}),ue=a()({0:"restriction",1:"added-cost"},{useNumericKeys:!0}),ce=a()({0:"permit",1:"restrict"},{useNumericKeys:!0}),de=a()({1:"header",50:"arrive",51:"depart",52:"straight",100:"on-ferry",101:"off-ferry",102:"central-fork",103:"roundabout",104:"u-turn",150:"door",151:"stairs",152:"elevator",153:"escalator",154:"pedestrian-ramp",200:"left-fork",201:"left-ramp",202:"clockwise-roundabout",203:"left-handed-u-turn",204:"bear-left",205:"left-turn",206:"sharp-left",207:"left-turn-and-immediate-left-turn",208:"left-turn-and-immediate-right-turn",300:"right-fork",301:"right-ramp",302:"counter-clockwise-roundabout",303:"right-handed-u-turn",304:"bear-right",305:"right-turn",306:"sharp-right",307:"right-turn-and-immediate-left-turn",308:"right-turn-and-immediate-right-turn",400:"up-elevator",401:"up-escalator",402:"up-stairs",500:"down-elevator",501:"down-escalator",502:"down-stairs",1e3:"general-event",1001:"landmark",1002:"time-zone-change",1003:"traffic-event",1004:"scaled-cost-barrier-event",1005:"boundary-crossing",1006:"restriction-violation"},{useNumericKeys:!0}),pe=a()({0:"unknown",1:"segment",2:"maneuver-segment",3:"restriction-violation",4:"scaled-cost-barrier",5:"heavy-traffic",6:"slow-traffic",7:"moderate-traffic"},{useNumericKeys:!0});var T;let l=T=class extends D{constructor(r){super(r),this.attributeParameterValues=null,this.description=null,this.distanceAttributeName=null,this.id=null,this.impedanceAttributeName=null,this.name=null,this.restrictionAttributeNames=null,this.simplificationTolerance=null,this.simplificationToleranceUnits=null,this.timeAttributeName=null,this.type=null,this.useHierarchy=null,this.uturnAtJunctions=null}clone(){return new T(B({attributeParameterValues:this.attributeParameterValues,description:this.description,distanceAttributeName:this.distanceAttributeName,id:this.id,impedanceAttributeName:this.impedanceAttributeName,name:this.name,restrictionAttributeNames:this.restrictionAttributeNames,simplificationTolerance:this.simplificationTolerance,simplificationToleranceUnits:this.simplificationToleranceUnits,timeAttributeName:this.timeAttributeName,type:this.type,useHierarchy:this.useHierarchy,uturnAtJunctions:this.uturnAtJunctions}))}};t([n({type:[Object],json:{write:!0}})],l.prototype,"attributeParameterValues",void 0),t([n({type:String,json:{write:!0}})],l.prototype,"description",void 0),t([n({type:String,json:{write:!0}})],l.prototype,"distanceAttributeName",void 0),t([n({type:String,json:{write:!0}})],l.prototype,"id",void 0),t([n({type:String,json:{write:!0}})],l.prototype,"impedanceAttributeName",void 0),t([n({type:String,json:{write:!0}})],l.prototype,"name",void 0),t([n({type:[String],json:{write:!0}})],l.prototype,"restrictionAttributeNames",void 0),t([n({type:Number,json:{write:{allowNull:!0}}})],l.prototype,"simplificationTolerance",void 0),t([y(z)],l.prototype,"simplificationToleranceUnits",void 0),t([n({type:String,json:{write:!0}})],l.prototype,"timeAttributeName",void 0),t([y(G)],l.prototype,"type",void 0),t([n({type:Boolean,json:{write:!0}})],l.prototype,"useHierarchy",void 0),t([y(W)],l.prototype,"uturnAtJunctions",void 0),l=T=t([w("esri.rest.support.TravelMode")],l);const Y=l;let c=class extends D{constructor(r){super(r),this.accumulateAttributeNames=null,this.currentVersion=null,this.defaultTravelMode=null,this.directionsLanguage=null,this.directionsLengthUnits=null,this.directionsSupportedLanguages=null,this.directionsTimeAttribute=null,this.hasZ=null,this.impedance=null,this.networkDataset=null,this.supportedTravelModes=null}};t([n()],c.prototype,"accumulateAttributeNames",void 0),t([n()],c.prototype,"currentVersion",void 0),t([n()],c.prototype,"defaultTravelMode",void 0),t([n()],c.prototype,"directionsLanguage",void 0),t([y(R)],c.prototype,"directionsLengthUnits",void 0),t([n()],c.prototype,"directionsSupportedLanguages",void 0),t([n()],c.prototype,"directionsTimeAttribute",void 0),t([n()],c.prototype,"hasZ",void 0),t([n()],c.prototype,"impedance",void 0),t([n()],c.prototype,"networkDataset",void 0),t([n({type:[Y]})],c.prototype,"supportedTravelModes",void 0),c=t([w("esri.rest.support.NetworkServiceDescription")],c);const _=c;function me(r,i,s,o){o[s]=[i.length,i.length+r.length],r.forEach(e=>{i.push(e.geometry)})}function fe(r,i){for(let s=0;s<i.length;s++){const o=r[i[s]];if(o&&o.length)for(const e of o)e.z=void 0}console.log(`The remote Network Analysis service is powered by a network dataset which is not Z-aware.
Z-coordinates of the input geometry are ignored.`)}function he(r,i){for(let s=0;s<i.length;s++){const o=r[i[s]];if(o&&o.length){for(const e of o)if(x(e)&&e.hasZ)return!0}}return!1}async function ye(r,i,s){if(!r)throw new j("network-service:missing-url","Url to Network service is missing");const o=N({f:"json",token:i},s),{data:e}=await h(r,o);e.supportedTravelModes||(e.supportedTravelModes=[]);for(let m=0;m<e.supportedTravelModes.length;m++)e.supportedTravelModes[m].id||(e.supportedTravelModes[m].id=e.supportedTravelModes[m].itemId);const u=e.currentVersion>=10.4?q(r,i,s):Q(r,s),{defaultTravelMode:p,supportedTravelModes:d}=await u;return e.defaultTravelMode=p,e.supportedTravelModes=d,_.fromJSON(e)}async function Q(r,i){var s,o;const e=N({f:"json"},i),{data:u}=await h(r.replace(/\/rest\/.*$/i,"/info"),e);if(!u||!u.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};const{owningSystemUrl:p}=u,d=A(p)+"/sharing/rest/portals/self",{data:m}=await h(d,e),b=J("helperServices.routingUtilities.url",m);if(!b)return{supportedTravelModes:[],defaultTravelMode:null};const M=V(p),K=/\/solve$/i.test(M.path)?"Route":/\/solveclosestfacility$/i.test(M.path)?"ClosestFacility":"ServiceAreas",L=N({f:"json",serviceName:K},i),F=A(b)+"/GetTravelModes/execute",g=await h(F,L),k=[];let S=null;if(g!=null&&(s=g.data)!=null&&(o=s.results)!=null&&o.length){const C=g.data.results;for(const f of C){var U;if(f.paramName==="supportedTravelModes"){if((U=f.value)!=null&&U.features){for(const{attributes:$}of f.value.features)if($){const P=JSON.parse($.TravelMode);k.push(P)}}}else f.paramName==="defaultTravelMode"&&(S=f.value)}}return{supportedTravelModes:k,defaultTravelMode:S}}async function q(r,i,s){try{const o=N({f:"json",token:i},s),e=A(r)+"/retrieveTravelModes",{data:{supportedTravelModes:u,defaultTravelMode:p}}=await h(e,o);return{supportedTravelModes:u,defaultTravelMode:p}}catch(o){throw new j("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:o})}}const O=new E({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let v=class extends H{constructor(r){super(r),this.type=null}};t([n({type:String,json:{read:O.read,write:O.write}})],v.prototype,"type",void 0),v=t([w("esri.rest.support.NAMessage")],v);const ve=v;export{ce as A,ae as N,ve as a,le as b,W as c,fe as d,ne as e,ye as f,re as g,ue as h,me as i,Y as l,oe as m,se as n,te as o,de as p,z as r,ie as s,R as t,he as u,pe as y};
