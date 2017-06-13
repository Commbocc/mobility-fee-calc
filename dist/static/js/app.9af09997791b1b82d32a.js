webpackJsonp([1],{124:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(91),r=s(346),a=s.n(r),n=s(131),i=s(132);o.a.config.productionTip=!1,new o.a({el:"#app",router:n.a,store:i.a,template:"<App/>",components:{App:a.a}})},126:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(347),r=s.n(o),a=s(349),n=s.n(a),i=s(350),l=s.n(i),c=s(348),u=s.n(c);e.default={name:"index",data:function(){return{address_form_desc:'Your address will be used to populate the "Mobility Assessment District" and "Park/Schools Impact Fee Zone" fields below.',const_label:"New Construction",const_desc:"This estimate is for a site with no existing home."}},components:{"address-form":r.a,"calc-form":n.a,results:l.a,alert:u.a},watch:{"$store.state.is_new_construction":function(){this.$store.commit("updateResults")}},computed:{offsetResultsClass:function(){return this.$store.state.is_new_construction?null:"col-md-offset-3"}}}},127:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(341);String.prototype.formatDistrict=function(){return this.charAt(0).toUpperCase()+this.toLowerCase().slice(1)},e.default={name:"address-form",data:function(){return{msg:"",address_input:"",label:"Your Address",placeholder:"601 E. Kennedy Blvd",address_geo:null,reset_enabled:!1,districts:{mobility:null,school:null}}},methods:{softReset:function(){console.log("soft reset"),this.$store.state.alerts=[],this.reset_enabled=!1,this.address_input=""},findAddressGeo:function(){var t=this;this.reset_enabled=!0,this.address_input=this.address_input,o.a(["esri/tasks/Locator","esri/tasks/QueryTask","esri/tasks/support/Query"],function(e,s,o){new e({url:"https://maps.hillsboroughcounty.org/arcgis/rest/services/Geocoding/DBO_composite_address_locator/GeocodeServer"}).addressToLocations({address:{SingleLine:t.address_input},maxLocations:1}).then(function(e){t.address_input=e[0].address,t.address_geo=e[0].location,t.getDistricts()}).otherwise(function(e){t.$store.commit("addAlert","address-not-found")})})},getDistricts:function(){var t=this;o.a(["esri/tasks/QueryTask","esri/tasks/support/Query"],function(e,s){var o=new s;o.geometry=t.address_geo,o.spatialRelationship="within",new e({url:"https://maps.hillsboroughcounty.org/arcgis/rest/services/DSD_Viewer_Services/Mobility_Fees/MapServer/0"}).execute(o).then(function(e){t.districts.mobility=e.features[0].attributes.DATA.formatDistrict(),t.$store.state.mobility_assessment_dist=t.districts.mobility}).otherwise(function(e){t.$store.commit("addAlert","no-mobility-dist")}),new e({url:"https://maps.hillsboroughcounty.org/arcgis/rest/services/InfoLayers/infoLayers/MapServer/3"}).execute(o).then(function(e){t.districts.school=e.features[0].attributes.ZONE.formatDistrict(),t.$store.state.park_schools_fee_zone=t.districts.school}).otherwise(function(e){t.$store.commit("addAlert","no-school-dist")})})}}}},128:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"alert",props:["item"],computed:{alert_class:function(){return this.item.class||"alert-info"},icon:function(){switch(this.alert_class){case"alert-warning":return"fa-warning";case"alert-danger":return"fa-times-rectangle";case"alert-success":return"fa-check-circle";default:return"fa-info-circle"}},item_index:function(){return this.$store.state.alerts.indexOf(this.item)}},methods:{remove:function(){this.$store.state.alerts.splice(this.item_index,1)}}}},129:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(345),r=s.n(o),a=s(359),n=s.n(a),i=s(360),l=s.n(i),c=s(361),u=s.n(c);e.default={name:"calc-form",props:["nId","title"],data:function(){return{housing_type:!1,bedrooms:!1,square_footage:!1,prices:{mobility_val:0,park_val:0,school_val:0,fire_val:0}}},computed:{computedProperty:function(){return[this.housing_type,this.$store.state.mobility_assessment_dist,this.$store.state.park_schools_fee_zone,this.bedrooms,this.square_footage,Date.now()]}},watch:{computedProperty:function(){if(this.housing_type&&this.$store.state.mobility_assessment_dist&&this.square_footage){var t=r.a.findWhere(n.a,{type:this.housing_type}),e=r.a.findWhere(t.districts,{type:this.$store.state.mobility_assessment_dist});this.prices.mobility_val=e.prices[this.square_footage]}else this.prices.mobility_val=0;if(this.housing_type&&this.$store.state.park_schools_fee_zone&&this.bedrooms){var t=r.a.findWhere(l.a,{type:this.housing_type}),s=r.a.findWhere(t.zones,{zone_name:this.$store.state.park_schools_fee_zone});this.prices.park_val=s.price_by_beds[this.bedrooms]}else this.prices.park_val=0;this.square_footage?this.prices.school_val=u.a[this.square_footage]:this.prices.school_val=0,this.housing_type||this.bedrooms||this.square_footage?this.prices.fire_val=48.66:this.prices.fire_val=0,this.$store.dispatch("updateCalcModule",{nId:this.nId,prices:this.prices})}}}},130:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"results",data:function(){return{disclaimer:"All fees provided on this calculator are only estimates to assist in planning, actual fees will be assessed on building permits based on application data provided."}},methods:{currency:function(t){return t<=0?"-":"$"+t.toFixed(2)}}}},131:function(t,e,s){"use strict";var o=s(91),r=s(356);o.a.use(r.a),e.a=new r.a({routes:[{path:"/",name:"Index"}]})},132:function(t,e,s){"use strict";s.d(e,"a",function(){return i});var o=s(133),r=s.n(o),a=s(91),n=s(358);a.a.use(n.a);var i=new n.a.Store({state:{results:{mobility_val:0,park_val:0,school_val:0,fire_val:0,total:0},module_prices:{1:{},2:{}},is_new_construction:!0,mobility_assessment_dist:!1,park_schools_fee_zone:!1,alerts:[],alertIndex:[{id:"address-not-found",title:"Address Not Found",msg:'Please confirm the address and search again. If you feel this is an error, please contact the <a href="http://hcflgov.net/government/departments/customer">Customer Service Center</a>.',class:"alert-warning"},{id:"no-mobility-dist",title:"Mobility Assessment District",msg:"A <em>Mobility Assessment District</em> could not be determined.",class:"alert-warning"},{id:"no-school-dist",title:"Park/Schools Impact Fee Zone",msg:"A <em>Park/Schools Impact Fee Zone</em> could not be determined.",class:"alert-warning"}],selectOptions:{housing_type:["Single Family Detached","Mobile Home"],mobility_assessment_dist:["Urban","Rural"],park_schools_fee_zone:["Northwest","Northeast","Central","South"],bedrooms:[1,2,3,4,"5+"],square_footage:["0-499","500-749","750-999","1000-1249","1250-1499","1500-1999","2000-2499","2500-2999","3000-3999","4000+"]}},actions:{updateCalcModule:function(t,e){t.commit("updateCalcModuleState",e),t.commit("updateResults")}},mutations:{addAlert:function(t,e){t.alerts.push(t.alertIndex.find(function(t){return t.id===e}))},updateCalcModuleState:function(t,e){a.a.set(t.module_prices,e.nId,e.prices)},updateResults:function(t){t.is_new_construction&&(t.module_prices[2]={}),r()(t.module_prices[1]).map(function(e){var s=t.module_prices[2][e]?t.module_prices[1][e]-t.module_prices[2][e]:t.module_prices[1][e];a.a.set(t.results,e,s)});var e=["mobility_val","park_val","school_val","fire_val"].map(function(e){return t.results[e]>=0?t.results[e]:0});t.results.total=e.reduce(function(t,e){return t+e},0)}}})},342:function(t,e){},343:function(t,e){},346:function(t,e,s){var o=s(48)(s(126),s(354),null,null);t.exports=o.exports},347:function(t,e,s){var o=s(48)(s(127),s(355),null,null);t.exports=o.exports},348:function(t,e,s){s(342);var o=s(48)(s(128),s(351),"data-v-01e586a6",null);t.exports=o.exports},349:function(t,e,s){s(343);var o=s(48)(s(129),s(352),"data-v-099ac178",null);t.exports=o.exports},350:function(t,e,s){var o=s(48)(s(130),s(353),null,null);t.exports=o.exports},351:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"alert",class:t.alert_class},[s("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){t.remove()}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),s("i",{staticClass:"fa fa-fw",class:t.icon}),t._v(" "),s("strong",[t._v(t._s(t.item.title))]),t._v(" "),s("div",{domProps:{innerHTML:t._s(t.item.msg)}}),t._v(" "),t.item.footer_txt?s("footer",{staticClass:"small"},[t._v("\n\t\t"+t._s(t.item.footer_txt)+"\n\t")]):t._e()])},staticRenderFns:[]}},352:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"panel panel-default",attrs:{id:"calc-form"}},[s("header",{staticClass:"panel-heading"},[s("h4",{staticClass:"panel-title"},[t._v(t._s(t.title))])]),t._v(" "),s("fieldset",{staticClass:"panel-body"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Housing Type")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.housing_type,expression:"housing_type"}],staticClass:"form-control",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.housing_type=e.target.multiple?s:s[0]}}},[s("option",{attrs:{selected:""},domProps:{value:!1}},[t._v("N/A")]),t._v(" "),t._l(t.$store.state.selectOptions.housing_type,function(e){return s("option",{domProps:{value:e}},[t._v(t._s(e))])})],2)]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Number of Bedrooms")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.bedrooms,expression:"bedrooms"}],staticClass:"form-control",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.bedrooms=e.target.multiple?s:s[0]}}},[s("option",{attrs:{selected:""},domProps:{value:!1}},[t._v("N/A")]),t._v(" "),t._l(t.$store.state.selectOptions.bedrooms,function(e){return s("option",{domProps:{value:e}},[t._v(t._s(e))])})],2)]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Living Area Square Footage Range")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.square_footage,expression:"square_footage"}],staticClass:"form-control",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.square_footage=e.target.multiple?s:s[0]}}},[s("option",{attrs:{selected:""},domProps:{value:!1}},[t._v("N/A")]),t._v(" "),t._l(t.$store.state.selectOptions.square_footage,function(e){return s("option",{domProps:{value:e}},[t._v(t._s(e))])})],2)]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Mobility Assessment District")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.mobility_assessment_dist,expression:"$store.state.mobility_assessment_dist"}],staticClass:"form-control",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$store.state.mobility_assessment_dist=e.target.multiple?s:s[0]}}},[s("option",{attrs:{selected:""},domProps:{value:!1}},[t._v("N/A")]),t._v(" "),t._l(t.$store.state.selectOptions.mobility_assessment_dist,function(e){return s("option",{domProps:{value:e}},[t._v(t._s(e))])})],2)]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Park/Schools Impact Fee Zone")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.park_schools_fee_zone,expression:"$store.state.park_schools_fee_zone"}],staticClass:"form-control",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$store.state.park_schools_fee_zone=e.target.multiple?s:s[0]}}},[s("option",{attrs:{selected:""},domProps:{value:!1}},[t._v("N/A")]),t._v(" "),t._l(t.$store.state.selectOptions.park_schools_fee_zone,function(e){return s("option",{domProps:{value:e}},[t._v(t._s(e))])})],2)])])])},staticRenderFns:[]}},353:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"panel panel-info"},[t._m(0),t._v(" "),s("section",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-striped table-bordered"},[s("tbody",[s("tr",[s("th",[t._v("\n\t\t\t\t\t\tMobility Amount\n\t\t\t\t\t")]),t._v(" "),s("td",{staticClass:"text-right",attrs:{width:"10"}},[t._v("\n\t\t\t\t\t\t"+t._s(t.currency(t.$store.state.results.mobility_val))+"\n\t\t\t\t\t")])]),t._v(" "),s("tr",[s("th",[t._v("\n\t\t\t\t\t\tPark Amount\n\t\t\t\t\t")]),t._v(" "),s("td",{staticClass:"text-right"},[t._v("\n\t\t\t\t\t\t"+t._s(t.currency(t.$store.state.results.park_val))+"\n\t\t\t\t\t")])]),t._v(" "),s("tr",[s("th",[t._v("\n\t\t\t\t\t\tSchool Amount\n\t\t\t\t\t")]),t._v(" "),s("td",{staticClass:"text-right"},[t._v("\n\t\t\t\t\t\t"+t._s(t.currency(t.$store.state.results.school_val))+"\n\t\t\t\t\t")])]),t._v(" "),s("tr",[s("th",[t._v("\n\t\t\t\t\t\tFire Amount\n\t\t\t\t\t")]),t._v(" "),s("td",{staticClass:"text-right"},[t._v("\n\t\t\t\t\t\t"+t._s(t.currency(t.$store.state.results.fire_val))+"\n\t\t\t\t\t")])]),t._v(" "),s("tr",[s("th",[t._v("\n\t\t\t\t\t\tTOTAL\n\t\t\t\t\t")]),t._v(" "),s("th",{staticClass:"text-right"},[t._v("\n\t\t\t\t\t\t"+t._s(t.currency(t.$store.state.results.total))+"\n\t\t\t\t\t")])])])])]),t._v(" "),s("footer",{staticClass:"panel-footer small"},[s("em",[t._v("\n\t\t\t"+t._s(t.disclaimer)+"\n\t\t")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"panel-heading"},[s("h4",{staticClass:"panel-title"},[t._v("\n\t\t\tBalance Due\n\t\t")])])}]}},354:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("address-form",[s("p",[t._v("\n\t\t\t"+t._s(t.address_form_desc)+"\n\t\t")])]),t._v(" "),t._l(t.$store.state.alerts,function(t){return s("alert",{key:t.id,attrs:{item:t}})}),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v(t._s(t.const_label))]),t._v(" "),s("div",{staticClass:"checkbox"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.is_new_construction,expression:"$store.state.is_new_construction"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.$store.state.is_new_construction)?t._i(t.$store.state.is_new_construction,null)>-1:t.$store.state.is_new_construction},on:{__c:function(e){var s=t.$store.state.is_new_construction,o=e.target,r=!!o.checked;if(Array.isArray(s)){var a=t._i(s,null);r?a<0&&(t.$store.state.is_new_construction=s.concat(null)):a>-1&&(t.$store.state.is_new_construction=s.slice(0,a).concat(s.slice(a+1)))}else t.$store.state.is_new_construction=r}}}),t._v(" "+t._s(t.const_desc)+"\n\t\t\t")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("calc-form",{attrs:{"n-id":1,title:"New Home"}})],1),t._v(" "),s("div",{staticClass:"col-md-6"},[t.$store.state.is_new_construction?t._e():s("calc-form",{attrs:{"n-id":2,title:"Existing Home"}})],1),t._v(" "),s("div",{staticClass:"col-md-6",class:t.offsetResultsClass},[s("results")],1)])],2)},staticRenderFns:[]}},355:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{attrs:{id:"addr-form"},on:{submit:function(e){e.preventDefault(),t.findAddressGeo()}}},[s("fieldset",[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"address"}},[t._v(t._s(t.label))]),t._v(" "),s("div",{staticClass:"small"},[s("em",[t._t("default",[t._v(t._s(t.msg))])],2)]),t._v(" "),s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.address_input,expression:"address_input"}],staticClass:"form-control",attrs:{placeholder:t.placeholder,readonly:t.reset_enabled,autocomplete:"off",required:""},domProps:{value:t.address_input},on:{input:function(e){e.target.composing||(t.address_input=e.target.value)}}}),t._v(" "),s("span",{staticClass:"input-group-btn"},[t.reset_enabled?s("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.softReset()}}},[s("span",{staticClass:"glyphicon glyphicon-remove",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\t\t\t\tReset\n\t\t\t\t\t")]):s("button",{staticClass:"btn btn-info",attrs:{type:"submit"}},[s("span",{staticClass:"glyphicon glyphicon-search",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\t\t\t\tSearch\n\t\t\t\t\t")])])])])])])},staticRenderFns:[]}},359:function(t,e){t.exports=[{type:"Single Family Detached",districts:[{type:"Urban",prices:{"0-499":1993,"500-749":1993,"750-999":1993,"1000-1249":1993,"1250-1499":1993,"1500-1999":2547,"2000-2499":2547,"2500-2999":2861,"3000-3999":2861,"4000+":2861}},{type:"Rural",prices:{"0-499":2887,"500-749":2887,"750-999":2887,"1000-1249":2887,"1250-1499":2887,"1500-1999":3688,"2000-2499":3688,"2500-2999":4141,"3000-3999":4141,"4000+":4141}}]},{type:"Mobile Home",districts:[{type:"Urban",prices:{"0-499":939,"500-749":939,"750-999":939,"1000-1249":939,"1250-1499":939,"1500-1999":939,"2000-2499":939,"2500-2999":939,"3000-3999":939,"4000+":939}},{type:"Rural",prices:{"0-499":1362,"500-749":1362,"750-999":1362,"1000-1249":1362,"1250-1499":1362,"1500-1999":1362,"2000-2499":1362,"2500-2999":1362,"3000-3999":1362,"4000+":1362}}]}]},360:function(t,e){t.exports=[{type:"Single Family Detached",zones:[{zone_name:"Northwest",price_by_beds:{1:317.2,2:317.2,3:421.6,4:517.34,"5+":593.31}},{zone_name:"Northeast",price_by_beds:{1:264.9,2:264.9,3:352.09,4:432.04,"5+":495.49}},{zone_name:"Central",price_by_beds:{1:313.53,2:313.53,3:416.72,4:511.36,"5+":586.45}},{zone_name:"South",price_by_beds:{1:168.36,2:168.36,3:223.78,4:274.59,"5+":314.92}}]},{type:"Mobile Home",zones:[{zone_name:"Northwest",price_by_beds:{1:279.74,2:328.7,3:461.78,4:461.78,"5+":461.78}},{zone_name:"Northeast",price_by_beds:{1:233.61,2:274.51,3:385.64,4:385.64,"5+":385.64}},{zone_name:"Central",price_by_beds:{1:276.49,2:324.89,3:456.44,4:456.44,"5+":456.44}},{zone_name:"South",price_by_beds:{1:148.48,2:174.46,3:245.1,4:245.1,"5+":245.1}}]}]},361:function(t,e){t.exports={"0-499":1207,"500-749":1774,"750-999":2357,"1000-1249":2793,"1250-1499":3146,"1500-1999":3565,"2000-2499":4e3,"2500-2999":4345,"3000-3999":4764,"4000+":5200}},362:function(t,e,s){s(125),t.exports=s(124)}},[362]);
//# sourceMappingURL=app.9af09997791b1b82d32a.js.map