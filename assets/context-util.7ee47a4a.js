import"./index.9d2cc31f.js";var e;function f(t,n,l={}){const r=n===e.WEBGL1?["webgl","experimental-webgl","webkit-3d","moz-webgl"]:["webgl2"];let o=null;for(const c of r){try{o=t.getContext(c,l)}catch{}if(o)break}return o}(function(t){t[t.WEBGL1=1]="WEBGL1",t[t.WEBGL2=2]="WEBGL2"})(e||(e={}));export{f as l,e as o};
