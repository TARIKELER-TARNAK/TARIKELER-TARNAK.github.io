(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,63662,e=>{"use strict";let t;var r,n=e.i(71645);let o=Object.freeze({left:0,top:0,width:16,height:16}),i=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),l=Object.freeze({...o,...i}),a=Object.freeze({...l,body:"",hidden:!1});function s(e,t){let r,n,o=(r={},!e.hFlip!=!t.hFlip&&(r.hFlip=!0),!e.vFlip!=!t.vFlip&&(r.vFlip=!0),(n=((e.rotate||0)+(t.rotate||0))%4)&&(r.rotate=n),r);for(let r in a)r in i?r in e&&!(r in o)&&(o[r]=i[r]):r in t?o[r]=t[r]:r in e&&(o[r]=e[r]);return o}function c(e,t){let r,n,o,i=[];if("object"!=typeof e||"object"!=typeof e.icons)return i;e.not_found instanceof Array&&e.not_found.forEach(e=>{t(e,null),i.push(e)});let l=(r=e.icons,n=e.aliases||Object.create(null),o=Object.create(null),Object.keys(r).concat(Object.keys(n)).forEach(function e(t){if(r[t])return o[t]=[];if(!(t in o)){o[t]=null;let r=n[t]&&n[t].parent,i=r&&e(r);i&&(o[t]=[r].concat(i))}return o[t]}),o);for(let r in l){let n=l[r];n&&(t(r,function(e,t,r){let n=e.icons,o=e.aliases||Object.create(null),i={};function l(e){i=s(n[e]||o[e],i)}return l(t),r.forEach(l),s(e,i)}(e,r,n)),i.push(r))}return i}let u={provider:"",aliases:{},not_found:{},...o};function d(e,t){for(let r in t)if(r in e&&typeof e[r]!=typeof t[r])return!1;return!0}function f(e){if("object"!=typeof e||null===e||"string"!=typeof e.prefix||!e.icons||"object"!=typeof e.icons||!d(e,u))return null;let t=e.icons;for(let e in t){let r=t[e];if(!e||"string"!=typeof r.body||!d(r,a))return null}let r=e.aliases||Object.create(null);for(let e in r){let n=r[e],o=n.parent;if(!e||"string"!=typeof o||!t[o]&&!r[o]||!d(n,a))return null}return e}let p=Object.create(null);function h(e,t){let r=p[e]||(p[e]=Object.create(null));return r[t]||(r[t]={provider:e,prefix:t,icons:Object.create(null),missing:new Set})}function g(e,t){return f(t)?c(t,(t,r)=>{r?e.icons[t]=r:e.missing.add(t)}):[]}let b=/^[a-z0-9]+(-[a-z0-9]+)*$/,m=(e,t,r,n="")=>{let o=e.split(":");if("@"===e.slice(0,1)){if(o.length<2||o.length>3)return null;n=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){let e=o.pop(),r=o.pop(),i={provider:o.length>0?o[0]:n,prefix:r,name:e};return t&&!v(i)?null:i}let i=o[0],l=i.split("-");if(l.length>1){let e={provider:n,prefix:l.shift(),name:l.join("-")};return t&&!v(e)?null:e}if(r&&""===n){let e={provider:n,prefix:"",name:i};return t&&!v(e,r)?null:e}return null},v=(e,t)=>!!e&&!!((t&&""===e.prefix||e.prefix)&&e.name),y=!1;function x(e){return"boolean"==typeof e&&(y=e),y}function k(e){let t="string"==typeof e?m(e,!0,y):e;if(t){let e=h(t.provider,t.prefix),r=t.name;return e.icons[r]||(e.missing.has(r)?null:void 0)}}let w=Object.freeze({width:null,height:null}),E=Object.freeze({...w,...i}),S=/(-?[0-9.]*[0-9]+[0-9.]*)/g,O=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function $(e,t,r){if(1===t)return e;if(r=r||100,"number"==typeof e)return Math.ceil(e*t*r)/r;if("string"!=typeof e)return e;let n=e.split(S);if(null===n||!n.length)return e;let o=[],i=n.shift(),l=O.test(i);for(;;){if(l){let e=parseFloat(i);isNaN(e)?o.push(i):o.push(Math.ceil(e*t*r)/r)}else o.push(i);if(void 0===(i=n.shift()))return o.join("");l=!l}}let C=/\sid="(\S+)"/g,T="IconifyId"+Date.now().toString(16)+(0x1000000*Math.random()|0).toString(16),P=0,I=Object.create(null);function j(e){return I[e]||I[""]}function N(e){let t;if("string"==typeof e.resources)t=[e.resources];else if(!((t=e.resources)instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:!0===e.random,index:e.index||0,dataAfterTimeout:!1!==e.dataAfterTimeout}}let R=Object.create(null),A=["https://api.simplesvg.com","https://api.unisvg.com"],F=[];for(;A.length>0;)1===A.length||Math.random()>.5?F.push(A.shift()):F.push(A.pop());R[""]=N({resources:["https://api.iconify.design"].concat(F)});let L=(()=>{let e;try{if(e=fetch,"function"==typeof e)return e}catch(e){}})();function B(e,t){e.forEach(e=>{let r=e.loaderCallbacks;r&&(e.loaderCallbacks=r.filter(e=>e.id!==t))})}let M=0,D={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function z(e){let t={...D,...e},r=[];function n(){r=r.filter(e=>"pending"===e().status)}return{query:function(e,o,i){let l=function(e,t,r,n){let o,i,l=e.resources.length,a=e.random?Math.floor(Math.random()*l):e.index;if(e.random){let t=e.resources.slice(0);for(o=[];t.length>1;){let e=Math.floor(Math.random()*t.length);o.push(t[e]),t=t.slice(0,e).concat(t.slice(e+1))}o=o.concat(t)}else o=e.resources.slice(a).concat(e.resources.slice(0,a));let s=Date.now(),c="pending",u=0,d=null,f=[],p=[];function h(){d&&(clearTimeout(d),d=null)}function g(){"pending"===c&&(c="aborted"),h(),f.forEach(e=>{"pending"===e.status&&(e.status="aborted")}),f=[]}function b(e,t){t&&(p=[]),"function"==typeof e&&p.push(e)}function m(){c="failed",p.forEach(e=>{e(void 0,i)})}function v(){f.forEach(e=>{"pending"===e.status&&(e.status="aborted")}),f=[]}return"function"==typeof n&&p.push(n),setTimeout(function n(){if("pending"!==c)return;h();let l=o.shift();if(void 0===l){if(f.length){d=setTimeout(()=>{h(),"pending"===c&&(v(),m())},e.timeout);return}m();return}let a={status:"pending",resource:l,callback:(t,r)=>{!function(t,r,l){let a="success"!==r;switch(f=f.filter(e=>e!==t),c){case"pending":break;case"failed":if(a||!e.dataAfterTimeout)return;break;default:return}if("abort"===r){i=l,m();return}if(a){i=l,f.length||(o.length?n():m());return}if(h(),v(),!e.random){let r=e.resources.indexOf(t.resource);-1!==r&&r!==e.index&&(e.index=r)}c="completed",p.forEach(e=>{e(l)})}(a,t,r)}};f.push(a),u++,d=setTimeout(n,e.rotate),r(l,t,a.callback)}),function(){return{startTime:s,payload:t,status:c,queriesSent:u,queriesPending:f.length,subscribe:b,abort:g}}}(t,e,o,(e,t)=>{n(),i&&i(e,t)});return r.push(l),l},find:function(e){return r.find(t=>e(t))||null},setIndex:e=>{t.index=e},getIndex:()=>t.index,cleanup:n}}let H=Object.create(null);function _(){}function U(e,t,r){function n(){let r=e.pendingIcons;t.forEach(t=>{r&&r.delete(t),e.icons[t]||e.missing.add(t)})}if(r&&"object"==typeof r)try{if(!g(e,r).length)return void n()}catch(e){console.error(e)}n(),e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;let t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let r=!1,n=e.provider,o=e.prefix;t.forEach(t=>{let i=t.icons,l=i.pending.length;i.pending=i.pending.filter(t=>{if(t.prefix!==o)return!0;let l=t.name;if(e.icons[l])i.loaded.push({provider:n,prefix:o,name:l});else{if(!e.missing.has(l))return r=!0,!0;i.missing.push({provider:n,prefix:o,name:l})}return!1}),i.pending.length!==l&&(r||B([e],t.id),t.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),t.abort))})}))}))}function W(e,t){e instanceof Promise?e.then(e=>{t(e)}).catch(()=>{t(null)}):t(e)}let V=/[\s,]+/,q={...E,inline:!1},Y={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},J={display:"inline-block"},K={backgroundColor:"currentColor"},Q={backgroundColor:"transparent"},X={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Z={WebkitMask:K,mask:K,background:Q};for(let e in Z){let t=Z[e];for(let r in X)t[e+r]=X[r]}let G={...q,inline:!0};function ee(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}if(x(!0),r={prepare:(e,t,r)=>{let n=[],o=function(e,t){let r,n=R[e];if(!n)return 0;if(n.maxURL){let e=0;n.resources.forEach(t=>{e=Math.max(e,t.length)}),r=n.maxURL-e-n.path.length-(t+".json?icons=").length}else r=0;return r}(e,t),i="icons",l={type:i,provider:e,prefix:t,icons:[]},a=0;return r.forEach((r,s)=>{(a+=r.length+1)>=o&&s>0&&(n.push(l),l={type:i,provider:e,prefix:t,icons:[]},a=r.length),l.icons.push(r)}),n.push(l),n},send:(e,t,r)=>{if(!L)return void r("abort",424);let n=function(e){if("string"==typeof e){let t=R[e];if(t)return t.path}return"/"}(t.provider);switch(t.type){case"icons":n+=t.prefix+".json?"+new URLSearchParams({icons:t.icons.join(",")}).toString();break;case"custom":{let e=t.uri;n+="/"===e.slice(0,1)?e.slice(1):e;break}default:r("abort",400);return}let o=503;L(e+n).then(e=>{let t=e.status;return 200!==t?void setTimeout(()=>{r(404===t?"abort":"next",t)}):(o=501,e.json())}).then(e=>{"object"!=typeof e||null===e?setTimeout(()=>{404===e?r("abort",e):r("next",o)}):setTimeout(()=>{r("success",e)})}).catch(()=>{r("next",o)})}},I[""]=r,"undefined"!=typeof document&&"undefined"!=typeof window){let e=window;if(void 0!==e.IconifyPreload){let t=e.IconifyPreload,r="Invalid IconifyPreload syntax.";"object"==typeof t&&null!==t&&(t instanceof Array?t:[t]).forEach(e=>{try{("object"!=typeof e||null===e||e instanceof Array||"object"!=typeof e.icons||"string"!=typeof e.prefix||!function(e,t){if("object"!=typeof e)return!1;if("string"!=typeof t&&(t=e.provider||""),y&&!t&&!e.prefix){let t=!1;return f(e)&&(e.prefix="",c(e,(e,r)=>{(function(e,t){let r=m(e,!0,y);if(!r)return!1;let n=h(r.provider,r.prefix);if(!t)return n.missing.add(r.name),!0;var o=r.name;try{if("string"==typeof t.body)return n.icons[o]={...t},!0}catch(e){}return!1})(e,r)&&(t=!0)})),t}let r=e.prefix;return!!v({prefix:r,name:"a"})&&!!g(h(t,r),e)}(e))&&console.error(r)}catch(e){console.error(r)}})}if(void 0!==e.IconifyProviders){let t=e.IconifyProviders;if("object"==typeof t&&null!==t)for(let e in t){let r="IconifyProviders["+e+"] is invalid.";try{let n=t[e];if("object"!=typeof n||!n||void 0===n.resources)continue;!function(e,t){let r=N(t);return null!==r&&(R[e]=r,!0)}(e,n)&&console.error(r)}catch(e){console.error(r)}}}}function et(e){let[r,o]=(0,n.useState)(!!e.ssr),[i,a]=(0,n.useState)({}),[s,c]=(0,n.useState)(function(t){if(t){let t=e.icon;if("object"==typeof t)return{name:"",data:t};let r=k(t);if(r)return{name:t,data:r}}return{name:""}}(!!e.ssr));function u(){let e=i.callback;e&&(e(),a({}))}function d(e){if(JSON.stringify(s)!==JSON.stringify(e))return u(),c(e),!0}(0,n.useEffect)(()=>(o(!0),u),[]),(0,n.useEffect)(()=>{r&&function t(){var r;let n=e.icon;if("object"==typeof n)return void d({name:"",data:n});let o=k(n);d({name:n,data:o})&&(void 0===o?a({callback:((e,t)=>{var r;let n,o,i,l,a,s=(r=function(e,t=!0,r=!1){let n=[];return e.forEach(e=>{let o="string"==typeof e?m(e,t,r):e;o&&n.push(o)}),n}(e,!0,x()),i={loaded:[],missing:[],pending:[]},l=Object.create(null),r.sort((e,t)=>e.provider!==t.provider?e.provider.localeCompare(t.provider):e.prefix!==t.prefix?e.prefix.localeCompare(t.prefix):e.name.localeCompare(t.name)),a={provider:"",prefix:"",name:""},r.forEach(e=>{if(a.name===e.name&&a.prefix===e.prefix&&a.provider===e.provider)return;a=e;let t=e.provider,r=e.prefix,n=e.name,o=l[t]||(l[t]=Object.create(null)),s=o[r]||(o[r]=h(t,r));(n in s.icons?i.loaded:""===r||s.missing.has(n)?i.missing:i.pending).push({provider:t,prefix:r,name:n})}),i);if(!s.pending.length){let e=!0;return t&&setTimeout(()=>{e&&t(s.loaded,s.missing,s.pending,_)}),()=>{e=!1}}let c=Object.create(null),u=[];return s.pending.forEach(e=>{let{provider:t,prefix:r}=e;if(r===o&&t===n)return;n=t,o=r,u.push(h(t,r));let i=c[t]||(c[t]=Object.create(null));i[r]||(i[r]=[])}),s.pending.forEach(e=>{let{provider:t,prefix:r,name:n}=e,o=h(t,r),i=o.pendingIcons||(o.pendingIcons=new Set);i.has(n)||(i.add(n),c[t][r].push(n))}),u.forEach(e=>{let t=c[e.provider][e.prefix];t.length&&(e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{let t,r;e.iconsQueueFlag=!1;let{provider:n,prefix:o}=e,i=e.iconsToLoad;if(delete e.iconsToLoad,!i||!i.length)return;let l=e.loadIcon;if(e.loadIcons&&(i.length>1||!l))return void W(e.loadIcons(i,o,n),t=>{U(e,i,t)});if(l)return void i.forEach(t=>{W(l(t,o,n),r=>{let n=r?{prefix:o,icons:{[t]:r}}:null;U(e,[t],n)})});let{valid:a,invalid:s}=(t=[],r=[],i.forEach(e=>{(e.match(b)?t:r).push(e)}),{valid:t,invalid:r});if(s.length&&U(e,s,null),!a.length)return;let c=o.match(b)?j(n):null;c?c.prepare(n,o,a).forEach(t=>{!function(e,t,r){let n,o;if("string"==typeof e){let t=j(e);if(!t)return r(void 0,424);o=t.send;let i=function(e){if(!H[e]){let t=R[e];if(!t)return;let r=z(t);H[e]={config:t,redundancy:r}}return H[e]}(e);i&&(n=i.redundancy)}else{let t=N(e);if(t){n=z(t);let r=j(e.resources?e.resources[0]:"");r&&(o=r.send)}}n&&o?n.query(t,o,r)().abort:r(void 0,424)}(n,t,r=>{U(e,t.icons,r)})}):U(e,a,null)})))}),t?function(e,t,r){let n=M++,o=B.bind(null,r,n);if(!t.pending.length)return o;let i={id:n,icons:t,callback:e,abort:o};return r.forEach(e=>{(e.loaderCallbacks||(e.loaderCallbacks=[])).push(i)}),o}(t,s,u):_})([n],t)}):o&&(null==(r=e.onLoad)||r.call(e,n)))}()},[e.icon,r]);let{name:f,data:p}=s;return p?((e,r,o)=>{var i;let a,s,c,u,d,f,p,h,g,b,v,y,x,k=r.inline?G:q,S=function(e,t){let r={...e};for(let e in t){let n=t[e],o=typeof n;e in w?(null===n||n&&("string"===o||"number"===o))&&(r[e]=n):o===typeof r[e]&&(r[e]="rotate"===e?n%4:n)}return r}(k,r),O=r.mode||"svg",I={},j=r.style||{},N={..."svg"===O?Y:{}};if(o){let e=m(o,!1,!0);if(e){let t=["iconify"];for(let r of["provider","prefix"])e[r]&&t.push("iconify--"+e[r]);N.className=t.join(" ")}}for(let e in r){let t=r[e];if(void 0!==t)switch(e){case"icon":case"style":case"children":case"onLoad":case"mode":case"ssr":case"fallback":break;case"_ref":N.ref=t;break;case"className":N[e]=(N[e]?N[e]+" ":"")+t;break;case"inline":case"hFlip":case"vFlip":S[e]=!0===t||"true"===t||1===t;break;case"flip":"string"==typeof t&&function(e,t){t.split(V).forEach(t=>{switch(t.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0}})}(S,t);break;case"color":I.color=t;break;case"rotate":"string"==typeof t?S[e]=function(e,t=0){let r=e.replace(/^-?[0-9.]*/,"");function n(e){for(;e<0;)e+=4;return e%4}if(""===r){let t=parseInt(e);return isNaN(t)?0:n(t)}if(r!==e){let t=0;switch(r){case"%":t=25;break;case"deg":t=90}if(t){let o=parseFloat(e.slice(0,e.length-r.length));return isNaN(o)?0:(o/=t)%1==0?n(o):0}}return t}(t):"number"==typeof t&&(S[e]=t);break;case"ariaHidden":case"aria-hidden":!0!==t&&"true"!==t&&delete N["aria-hidden"];break;default:void 0===k[e]&&(N[e]=t)}}let R=(c={...l,...e},u={...E,...S},d={left:c.left,top:c.top,width:c.width,height:c.height},f=c.body,[c,u].forEach(e=>{var t,r,n,o;let i,l,a=[],s=e.hFlip,c=e.vFlip,u=e.rotate;switch(s?c?u+=2:(a.push("translate("+(d.width+d.left).toString()+" "+(0-d.top).toString()+")"),a.push("scale(-1 1)"),d.top=d.left=0):c&&(a.push("translate("+(0-d.left).toString()+" "+(d.height+d.top).toString()+")"),a.push("scale(1 -1)"),d.top=d.left=0),u<0&&(u-=4*Math.floor(u/4)),u%=4){case 1:a.unshift("rotate(90 "+(i=d.height/2+d.top).toString()+" "+i.toString()+")");break;case 2:a.unshift("rotate(180 "+(d.width/2+d.left).toString()+" "+(d.height/2+d.top).toString()+")");break;case 3:a.unshift("rotate(-90 "+(i=d.width/2+d.left).toString()+" "+i.toString()+")")}u%2==1&&(d.left!==d.top&&(i=d.left,d.left=d.top,d.top=i),d.width!==d.height&&(i=d.width,d.width=d.height,d.height=i)),a.length&&(t=f,r='<g transform="'+a.join(" ")+'">',n=(l=function(e,t="defs"){let r="",n=e.indexOf("<"+t);for(;n>=0;){let o=e.indexOf(">",n),i=e.indexOf("</"+t);if(-1===o||-1===i)break;let l=e.indexOf(">",i);if(-1===l)break;r+=e.slice(o+1,i).trim(),e=e.slice(0,n).trim()+e.slice(l+1)}return{defs:r,content:e}}(t)).defs,o=r+l.content+"</g>",f=n?"<defs>"+n+"</defs>"+o:o)}),p=u.width,h=u.height,g=d.width,b=d.height,null===p?a=$(s=null===h?"1em":"auto"===h?b:h,g/b):(a="auto"===p?g:p,s=null===h?$(a,b/g):"auto"===h?b:h),v={},(y=(e,t)=>{"unset"!==t&&"undefined"!==t&&"none"!==t&&(v[e]=t.toString())})("width",a),y("height",s),v.viewBox=(x=[d.left,d.top,g,b]).join(" "),{attributes:v,viewBox:x,body:f}),A=R.attributes;if(S.inline&&(I.verticalAlign="-0.125em"),"svg"===O){N.style={...I,...j},Object.assign(N,A);let e=0,o=r.id;return"string"==typeof o&&(o=o.replace(/-/g,"_")),N.dangerouslySetInnerHTML={__html:(i=function(e,t=T){let r,n=[];for(;r=C.exec(e);)n.push(r[1]);if(!n.length)return e;let o="suffix"+(0x1000000*Math.random()|Date.now()).toString(16);return n.forEach(r=>{let n="function"==typeof t?t(r):t+(P++).toString(),i=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(RegExp('([#;"])('+i+')([")]|\\.[a-z])',"g"),"$1"+n+o+"$3")}),e=e.replace(RegExp(o,"g"),"")}(R.body,o?()=>o+"ID"+e++:"iconifyReact"),void 0===t&&function(){try{t=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch(e){t=null}}(),t?t.createHTML(i):i)},(0,n.createElement)("svg",N)}let{body:F,width:L,height:B}=e,M="mask"===O||"bg"!==O&&-1!==F.indexOf("currentColor"),D=function(e,t){let r=-1===e.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(let e in t)r+=" "+e+'="'+t[e]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+r+">"+e+"</svg>"}(F,{...A,width:L+"",height:B+""});return N.style={...I,"--svg":'url("data:image/svg+xml,'+D.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")+'")',width:ee(A.width),height:ee(A.height),...J,...M?K:Q,...j},(0,n.createElement)("span",N)})({...l,...p},e,f):e.children?e.children:e.fallback?e.fallback:(0,n.createElement)("span",{})}let er=(0,n.forwardRef)((e,t)=>et({...e,_ref:t}));(0,n.forwardRef)((e,t)=>et({inline:!0,...e,_ref:t})),e.s(["Icon",()=>er])},92989,(e,t,r)=>{t.exports=e.r(76562)},19455,28850,25913,92435,60339,e=>{"use strict";var t=e.i(43476),r=e.i(55747),n=e.i(71645);let o=(0,n.createContext)({});(0,n.memo)(({children:e,config:r={}})=>(0,t.jsx)(o,{value:r,children:e}));var i=e.i(42919),l=e.i(37582);function a(e){return"number"==typeof e||(0,l.isObjectLike)(e)&&"[object Number]"===(0,i.getTag)(e)}e.s(["isNumber",()=>a],28850);var s=e.i(84283),c=e.i(7670);let u=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,d=c.clsx,f=(e,t)=>r=>{var n;if((null==t?void 0:t.variants)==null)return d(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:o,defaultVariants:i}=t,l=Object.keys(o).map(e=>{let t=null==r?void 0:r[e],n=null==i?void 0:i[e];if(null===t)return null;let l=u(t)||u(n);return o[e][l]}),a=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{});return d(e,l,null==t||null==(n=t.compoundVariants)?void 0:n.reduce((e,t)=>{let{class:r,className:n,...o}=t;return Object.entries(o).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...i,...a}[t]):({...i,...a})[t]===r})?[...e,r,n]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)};e.s(["cva",0,f],25913);let p=s.keyframes`
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
`,h=f("anticon",{defaultVariants:{spin:!1},variants:{spin:{false:null,true:(0,s.createStaticStyles)(({css:e})=>({spin:e`
      animation: ${p} 1s linear infinite;
    `})).spin}}}),g=(0,n.memo)(({icon:e,size:r,color:i,fill:l="transparent",className:c,focusable:u,spin:d,fillRule:f,fillOpacity:p,ref:g,...b})=>{let{color:m,fill:v,fillOpacity:y,fillRule:x,focusable:k,className:w,size:E,...S}=(0,n.use)(o),{size:O,strokeWidth:$}=(0,n.useMemo)(()=>(e=>{let t,r;if(a(e))return{size:e};switch(e){case"large":t=24,r=2;break;case"middle":t=20,r=2;break;case"small":t=14,r=2;break;default:e?(t=e?.size||24,r=e?.strokeWidth||2):(t="1em",r=2)}return{size:t,strokeWidth:r}})(r||E),[r,E]);return(0,t.jsx)("span",{className:(0,s.cx)(h({spin:d}),w,c),role:"img",...S,...b,children:e&&((0,n.isValidElement)(e)?e:(0,t.jsx)(e,{color:i||m,fill:l||v,fillOpacity:p||y,fillRule:f||x,focusable:u||k,height:O,ref:g,size:O,strokeWidth:$,width:O}))})});g.displayName="Icon",e.s(["default",()=>g],92435);let b={large:40,middle:32,small:24};e.s(["controlHeight",()=>b],60339);let m=(0,s.createStaticStyles)(({css:e,cssVar:t})=>({base:e`
    cursor: pointer;

    position: relative;

    display: inline-flex;
    gap: 6px;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
    border: 1px solid ${t.colorBorder};

    font-weight: 500;
    line-height: 1;
    text-decoration: none;
    white-space: nowrap;

    transition:
      color 160ms cubic-bezier(0.32, 0.72, 0, 1),
      background 160ms cubic-bezier(0.32, 0.72, 0, 1),
      border-color 160ms cubic-bezier(0.32, 0.72, 0, 1),
      box-shadow 160ms cubic-bezier(0.32, 0.72, 0, 1);

    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 2px ${t.colorPrimaryBorder};
    }

    &:disabled,
    &[aria-disabled='true'] {
      pointer-events: none;
      cursor: not-allowed;
      opacity: 0.5;
    }
  `,sizeSmall:e`
    height: ${b.small}px;
    padding-inline: 8px;
    border-radius: ${t.borderRadiusSM};
    font-size: 12px;
  `,sizeMiddle:e`
    height: ${b.middle}px;
    padding-inline: 14px;
    border-radius: ${t.borderRadiusSM};
    font-size: 13px;
  `,sizeLarge:e`
    height: ${b.large}px;
    padding-inline: 16px;
    border-radius: ${t.borderRadius};
    font-size: 14px;
  `,shapeCircle:e`
    padding-inline: 0;
    border-radius: 50%;
  `,shapeRound:e`
    border-radius: 999px;
  `,block:e`
    width: 100%;
  `,iconEnd:e`
    flex-direction: row-reverse;
  `,iconOnlySmall:e`
    width: 24px;
    padding-inline: 0;
  `,iconOnlyMiddle:e`
    width: 32px;
    padding-inline: 0;
  `,iconOnlyLarge:e`
    width: 40px;
    padding-inline: 0;
  `,iconBox:e`
    display: inline-flex;
    align-items: center;
    justify-content: center;
  `,spinnerSlot:e`
    overflow: hidden;

    width: 0;
    margin-inline-end: -6px;

    opacity: 0;

    transition:
      width 380ms cubic-bezier(0.22, 1, 0.36, 1),
      margin 380ms cubic-bezier(0.22, 1, 0.36, 1),
      opacity 260ms cubic-bezier(0.22, 1, 0.36, 1);
  `,spinnerSlotEnd:e`
    margin-inline: -6px 0;
  `,spinnerSlotShow:e`
    width: 12px;
    margin-inline: 0;
    opacity: 1;
  `,variantDefault:e`
    background: ${t.colorBgContainer};

    /* &:hover/&:active included so the anchor form outranks antd's global a:hover/a:active link color */
    &,
    &:hover,
    &:active {
      color: ${t.colorText};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      border-color: ${t.colorPrimaryBorder};
      color: ${t.colorPrimaryText};
    }
  `,variantPrimary:e`
    border-color: ${t.colorPrimary};
    background: ${t.colorPrimary};

    &,
    &:hover,
    &:active {
      color: ${t.colorBgLayout};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      border-color: ${t.colorPrimaryHover};
      background: ${t.colorPrimaryHover};
    }

    &:active:not(:disabled, [aria-disabled='true']) {
      border-color: ${t.colorPrimaryActive};
      background: ${t.colorPrimaryActive};
    }
  `,variantDashed:e`
    border-style: dashed;
    background: ${t.colorBgContainer};

    &,
    &:hover,
    &:active {
      color: ${t.colorText};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      border-color: ${t.colorPrimaryBorder};
      color: ${t.colorPrimaryText};
    }
  `,variantFill:e`
    border-color: transparent;
    background: ${t.colorFillTertiary};

    &,
    &:hover,
    &:active {
      color: ${t.colorText};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      background: ${t.colorFillSecondary};
    }

    &:active:not(:disabled, [aria-disabled='true']) {
      background: ${t.colorFill};
    }
  `,variantText:e`
    border-color: transparent;
    background: transparent;

    &,
    &:hover,
    &:active {
      color: ${t.colorText};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      background: ${t.colorFillSecondary};
    }
  `,variantLink:e`
    padding-inline: 0;
    border-color: transparent;
    background: transparent;

    &,
    &:hover,
    &:active {
      color: ${t.colorPrimary};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      color: ${t.colorPrimaryHover};
      background: transparent;
    }
  `,dangerOutlined:e`
    border-color: ${t.colorError};
    background: ${t.colorBgContainer};

    &,
    &:hover,
    &:active {
      color: ${t.colorError};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      border-color: ${t.colorErrorHover};
      color: ${t.colorErrorHover};
      background: ${t.colorBgContainer};
    }
  `,dangerSolid:e`
    border-color: ${t.colorError};
    background: ${t.colorError};

    &,
    &:hover,
    &:active {
      color: ${t.colorBgLayout};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      border-color: ${t.colorErrorHover};
      background: ${t.colorErrorHover};
    }

    &:active:not(:disabled, [aria-disabled='true']) {
      border-color: ${t.colorErrorActive};
      background: ${t.colorErrorActive};
    }
  `,dangerFill:e`
    border-color: transparent;
    color: ${t.colorError};
    background: ${t.colorErrorBg};

    &:hover:not(:disabled, [aria-disabled='true']) {
      color: ${t.colorErrorHover};
      background: ${t.colorErrorBgHover};
    }

    &:active:not(:disabled, [aria-disabled='true']) {
      color: ${t.colorErrorActive};
      background: ${t.colorErrorBgHover};
    }
  `,dangerInline:e`
    &,
    &:hover,
    &:active {
      color: ${t.colorError};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      color: ${t.colorErrorHover};
    }
  `,ghostDefault:e`
    border-color: rgb(255 255 255 / 65%);
    background: transparent;

    &,
    &:hover,
    &:active {
      color: #fff;
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      border-color: #fff;
      background: color-mix(in srgb, currentcolor 8%, transparent);
    }

    &:active:not(:disabled, [aria-disabled='true']) {
      background: color-mix(in srgb, currentcolor 14%, transparent);
    }
  `,ghostDashed:e`
    border-style: dashed;
  `,ghostPrimary:e`
    border-color: ${t.colorPrimary};
    background: transparent;

    &,
    &:hover,
    &:active {
      color: ${t.colorPrimary};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      border-color: ${t.colorPrimaryHover};
      color: ${t.colorPrimaryHover};
      background: color-mix(in srgb, currentcolor 8%, transparent);
    }

    &:active:not(:disabled, [aria-disabled='true']) {
      background: color-mix(in srgb, currentcolor 14%, transparent);
    }
  `,ghostDanger:e`
    border-color: ${t.colorError};
    background: transparent;

    &,
    &:hover,
    &:active {
      color: ${t.colorError};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      border-color: ${t.colorErrorHover};
      color: ${t.colorErrorHover};
      background: color-mix(in srgb, currentcolor 8%, transparent);
    }

    &:active:not(:disabled, [aria-disabled='true']) {
      background: color-mix(in srgb, currentcolor 14%, transparent);
    }
  `,spinner:e`
    @keyframes base-button-spin {
      to {
        transform: rotate(360deg);
      }
    }

    display: inline-block;

    width: 12px;
    height: 12px;
    border: 1.5px solid currentcolor;
    border-block-start-color: transparent;
    border-radius: 50%;

    animation: base-button-spin 0.6s linear infinite;
  `})),v={scale:.98},y={damping:26,mass:.6,stiffness:600,type:"spring"},x=({block:e,children:o,className:i,classNames:l,danger:a=!1,disabled:c,ghost:u=!1,href:d,htmlType:f="button",icon:p,iconPosition:h="start",loading:b,onClick:x,ref:k,shape:w="default",size:E="middle",styles:S,target:O,type:$="default",...C})=>{let T=(0,r.useMotionComponent)(),P=c||b,I="small"===E?m.sizeSmall:"large"===E?m.sizeLarge:m.sizeMiddle,j=(({danger:e,ghost:t,type:r})=>{if(t)return e?m.ghostDanger:"primary"===r?m.ghostPrimary:"dashed"===r?(0,s.cx)(m.ghostDefault,m.ghostDashed):m.ghostDefault;switch(r){case"primary":return e?m.dangerSolid:m.variantPrimary;case"dashed":return e?(0,s.cx)(m.variantDashed,m.dangerOutlined):m.variantDashed;case"fill":return e?m.dangerFill:m.variantFill;case"text":return e?(0,s.cx)(m.variantText,m.dangerInline):m.variantText;case"link":return e?(0,s.cx)(m.variantLink,m.dangerInline):m.variantLink;default:return e?(0,s.cx)(m.variantDefault,m.dangerOutlined):m.variantDefault}})({danger:a,ghost:u,type:$}),N="circle"===w?m.shapeCircle:"round"===w?m.shapeRound:void 0,R=(null==o||!1===o||""===o)&&(b||p)?"small"===E?m.iconOnlySmall:"large"===E?m.iconOnlyLarge:m.iconOnlyMiddle:void 0,A=(0,s.cx)(m.base,I,j,N,e&&m.block,"end"===h&&m.iconEnd,R,i),F=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{"aria-hidden":!b,style:S?.icon,className:(0,s.cx)(m.iconBox,m.spinnerSlot,b&&m.spinnerSlotShow,"end"===h&&m.spinnerSlotEnd,l?.icon),children:(0,t.jsx)("span",{className:m.spinner})}),p&&!b?(0,t.jsx)("span",{className:(0,s.cx)(m.iconBox,l?.icon),style:S?.icon,children:null==p?null:(0,n.isValidElement)(p)||"string"==typeof p||"number"==typeof p?p:(0,t.jsx)(g,{icon:p,size:"small"})}):null,o]}),L=P?{}:{transition:y,whileTap:v};return void 0!==d?(0,t.jsx)(T.a,{"aria-busy":b||void 0,"aria-disabled":P||void 0,href:c?void 0:d,target:O,...C,className:A,ref:k,onClick:e=>{P?e.preventDefault():x?.(e)},...L,children:F}):(0,t.jsx)(T.button,{type:f,...C,"aria-busy":b||void 0,"aria-disabled":P||void 0,className:A,disabled:c,ref:k,onClick:e=>{P?e.preventDefault():x?.(e)},...L,children:F})};function k({children:e,color:r="default",variant:n="solid",size:o="md",isIconOnly:i,isLoading:l,isDisabled:a,startContent:s,endContent:c,onPress:u,onClick:d,type:f="button",href:p,target:h,rel:g,className:b,block:m,"aria-label":v,as:y,...k}){let w="default";return"light"===n?w="text":"faded"===n?w="fill":"primary"===r&&(w="primary"),(0,t.jsx)(x,{...k,type:w,danger:"danger"===r,ghost:"bordered"===n||"ghost"===n,size:"lg"===o?"large":"sm"===o?"small":"middle",shape:i?"circle":void 0,loading:l,disabled:a,htmlType:f,href:p,target:h,rel:g,className:b,block:m,"aria-label":v,onClick:e=>{d?.(e),u?.()},iconPosition:c?"end":"start",icon:s||c||void 0,children:e})}x.displayName="BaseButton",e.s(["Button",()=>k],19455)},67062,e=>{"use strict";function t(...e){return e.filter(Boolean).join(" ")}e.s(["cn",()=>t])},15288,e=>{"use strict";var t=e.i(43476),r=e.i(67062);function n({children:e,className:n}){return(0,t.jsx)("div",{className:(0,r.cn)("flex flex-col relative overflow-hidden rounded-2xl bg-white/5",n),children:e})}function o({children:e,className:n}){return(0,t.jsx)("div",{className:(0,r.cn)("flex p-3 z-10 w-full justify-start items-center shrink-0",n),children:e})}function i({children:e,className:n}){return(0,t.jsx)("div",{className:(0,r.cn)("relative flex flex-1 w-full p-3 flex-col h-auto break-words text-left",n),children:e})}function l({children:e,className:n}){return(0,t.jsx)("div",{className:(0,r.cn)("p-3 h-auto flex w-full items-center",n),children:e})}e.s(["Card",()=>n,"CardBody",()=>i,"CardFooter",()=>l,"CardHeader",()=>o])},58125,e=>{"use strict";var t=e.i(84283);let r=t.keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,n=(0,t.createStaticStyles)(({css:e,cssVar:t})=>({active:e`
    color: ${t.colorText};
    background: ${t.colorFillSecondary};

    &:hover {
      color: ${t.colorText};
      background: ${t.colorFill};
    }
  `,blur:e`
    backdrop-filter: saturate(150%) blur(10px);
  `,blurStrong:e`
    backdrop-filter: saturate(150%) blur(36px);
  `,bottomScrollbar:e`
    ::-webkit-scrollbar {
      width: 0;
      height: 4px;
      background-color: transparent;

      &-thumb {
        border-radius: 4px;
        background-color: ${t.colorFill};
        transition: background-color 500ms ${t.motionEaseOut};
      }

      &-corner {
        display: none;
        width: 0;
        height: 0;
      }
    }
  `,disabled:e`
    cursor: not-allowed;
    opacity: 0.5;
  `,gradientAnimation:e`
    border-radius: inherit;
    background-image: linear-gradient(
      -45deg,
      ${t.gold},
      ${t.magenta},
      ${t.geekblue},
      ${t.cyan}
    );
    background-size: 400% 400%;
    animation: 5s ${r} 5s ease infinite;
  `,noScrollbar:e`
    ::-webkit-scrollbar {
      display: none;
      width: 0;
      height: 0;
      background-color: transparent;
    }
  `,resetLinkColor:e`
    cursor: pointer;
    color: ${t.colorTextSecondary};

    &:hover {
      color: ${t.colorText};
    }
  `,shadow:e`
    box-shadow:
      0 1px 0 -1px ${t.colorBorder},
      0 1px 2px -0.5px ${t.colorBorder},
      0 2px 2px -1px ${t.colorBorderSecondary},
      0 3px 6px -4px ${t.colorBorderSecondary};
  `,variantBorderless:e`
    border: none;
    background: none;
    box-shadow: none;

    &:hover {
      background: ${t.colorFillTertiary};
    }
  `,variantBorderlessDanger:e`
    border: none;
    background: none;
    box-shadow: none;

    &:hover {
      background: ${t.colorErrorBg};
      box-shadow: inset 0 0 0 1px ${t.colorErrorBg};
    }
  `,variantBorderlessWithoutHover:e`
    border: none;
    background: none;
    box-shadow: none;
  `,variantFilled:e`
    background: ${t.colorFillTertiary};

    &:hover {
      background: ${t.colorFillSecondary};
    }
  `,variantFilledDanger:e`
    background: ${t.colorErrorBg};

    &:hover {
      background: ${t.colorErrorBgHover};
    }
  `,variantFilledWithoutHover:e`
    background: ${t.colorFillTertiary};
  `,variantOutlined:e`
    border: 1px solid ${t.colorBorderSecondary};
    background: ${t.colorBgContainer};

    &:hover {
      border: 1px solid ${t.colorBorder};
      background: ${t.colorBgContainer};
    }
  `,variantOutlinedDanger:e`
    border: 1px solid ${t.colorErrorBorder};

    &:hover {
      border: 1px solid ${t.colorErrorBorder};
    }
  `,variantOutlinedWithoutHover:e`
    border: 1px solid ${t.colorBorderSecondary};
    background: ${t.colorBgContainer};
  `}));e.s(["staticStylish",()=>n])},46376,e=>{"use strict";var t=e.i(71645);let r="undefined"!=typeof document?t.useLayoutEffect:()=>{};e.s(["useIsoLayoutEffect",0,r])},14553,e=>{"use strict";let t={...e.i(71645)};e.s(["SafeReact",0,t])},88940,e=>{"use strict";var t=e.i(71645);let r={};function n(e,n){let o=t.useRef(r);return o.current===r&&(o.current=e(n)),o}e.s(["useRefWithInit",()=>n])},67865,e=>{"use strict";var t=e.i(14553),r=e.i(88940);let n=t.SafeReact.useInsertionEffect,o=n&&n!==t.SafeReact.useLayoutEffect?n:e=>e();function i(e){let t=(0,r.useRefWithInit)(l).current;return t.next=e,o(t.effect),t.trampoline}function l(){let e={next:void 0,callback:a,trampoline:(...t)=>e.callback?.(...t),effect:()=>{e.callback=e.next}};return e}function a(){}e.s(["useStableCallback",()=>i])},33332,e=>{"use strict";let t=function(e,...t){let r=new URL("https://base-ui.com/production-error");return r.searchParams.set("code",e.toString()),t.forEach(e=>r.searchParams.append("args[]",e)),`Base UI error #${e}; visit ${r} for the full message.`};e.s(["default",0,t])},56789,e=>{"use strict";function t(){}let r=Object.freeze([]),n=Object.freeze({});e.s(["EMPTY_ARRAY",0,r,"EMPTY_OBJECT",0,n,"NOOP",()=>t])},69690,75812,e=>{"use strict";e.i(47167);var t,r=e.i(33332),n=e.i(71645),o=e.i(56789);let i=((t={}).disabled="data-disabled",t.valid="data-valid",t.invalid="data-invalid",t.touched="data-touched",t.dirty="data-dirty",t.filled="data-filled",t.focused="data-focused",t),l={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:null,valueMissing:!1},a={valid:null,touched:!1,dirty:!1,filled:!1,focused:!1},s={disabled:!1,...a};e.s(["DEFAULT_FIELD_ROOT_STATE",0,s,"DEFAULT_FIELD_STATE_ATTRIBUTES",0,a,"DEFAULT_VALIDITY_STATE",0,l,"fieldValidityMapping",0,{valid:e=>null===e?null:e?{[i.valid]:""}:{[i.invalid]:""}}],75812);let c={invalid:void 0,name:void 0,validityData:{state:l,errors:[],error:"",value:"",initialValue:null},setValidityData:o.NOOP,disabled:void 0,touched:a.touched,setTouched:o.NOOP,dirty:a.dirty,setDirty:o.NOOP,filled:a.filled,setFilled:o.NOOP,focused:a.focused,setFocused:o.NOOP,validate:()=>null,validationMode:"onSubmit",validationDebounceTime:0,shouldValidateOnChange:()=>!1,state:s,markedDirtyRef:{current:!1},registerFieldControl:o.NOOP,validation:{getValidationProps:(e,t=o.EMPTY_OBJECT)=>t,inputRef:{current:null},registerInput:o.NOOP,commit:async()=>{},change:o.NOOP}},u=n.createContext(c);function d(e=!0){let t=n.useContext(u);if(t.setValidityData===o.NOOP&&!e)throw Error((0,r.default)(28));return t}e.s(["FieldRootContext",0,u,"useFieldRootContext",()=>d],69690)},83977,e=>{"use strict";var t=e.i(71645),r=e.i(14553);let n=0,o=r.SafeReact.useId;function i(e,r){if(void 0!==o){let t=o();return e??(r?`${r}-${t}`:t)}return function(e,r="mui"){let[o,i]=t.useState(e),l=e||o;return t.useEffect(()=>{null==o&&(n+=1,i(`${r}-${n}`))},[o,r]),l}(e,r)}e.s(["useId",()=>i])},88015,e=>{"use strict";var t=e.i(83977);function r(e){return(0,t.useId)(e,"base-ui")}e.s(["useBaseUiId",()=>r])},84708,47778,e=>{"use strict";e.i(47167);var t=e.i(71645),r=e.i(56789);let n=t.createContext({formRef:{current:{fields:new Map}},errors:{},clearErrors:r.NOOP,validationMode:"onSubmit",submitAttemptedRef:{current:!1}});function o(){return t.useContext(n)}e.s(["useFormContext",()=>o],84708);let i=t.createContext({controlId:void 0,registerControlId:r.NOOP,labelId:void 0,setLabelId:r.NOOP,messageIds:[],setMessageIds:r.NOOP,getDescriptionProps:e=>e});function l(){return t.useContext(i)}e.s(["LabelableContext",0,i,"useLabelableContext",()=>l],47778)},28918,e=>{"use strict";var t=e.i(88940);function r(e,r,n,l){var a,s,c,u,d;let f=(0,t.useRefWithInit)(o).current;return a=f,s=e,c=r,u=n,d=l,(a.refs[0]!==s||a.refs[1]!==c||a.refs[2]!==u||a.refs[3]!==d)&&i(f,[e,r,n,l]),f.callback}function n(e){var r,n;let l=(0,t.useRefWithInit)(o).current;return r=l,n=e,(r.refs.length!==n.length||r.refs.some((e,t)=>e!==n[t]))&&i(l,e),l.callback}function o(){return{callback:null,cleanup:null,refs:[]}}function i(e,t){if(e.refs=t,t.every(e=>null==e)){e.callback=null;return}e.callback=r=>{if(e.cleanup&&(e.cleanup(),e.cleanup=null),null!=r){let n=Array(t.length).fill(null);for(let e=0;e<t.length;e+=1){let o=t[e];if(null!=o)switch(typeof o){case"function":{let t=o(r);"function"==typeof t&&(n[e]=t);break}case"object":o.current=r}}e.cleanup=()=>{for(let e=0;e<t.length;e+=1){let r=t[e];if(null!=r)switch(typeof r){case"function":{let t=n[e];"function"==typeof t?t():r(null);break}case"object":r.current=null}}}}}}e.s(["useMergedRefs",()=>r,"useMergedRefsN",()=>n])},58321,e=>{"use strict";let t=parseInt(e.i(71645).version,10);function r(e){return t>=e}e.s(["isReactVersionAtLeast",()=>r])},78554,e=>{"use strict";var t=e.i(71645),r=e.i(58321);function n(e){if(!t.isValidElement(e))return null;let n=e.props;return((0,r.isReactVersionAtLeast)(19)?n?.ref:e.ref)??null}e.s(["getReactElementRef",()=>n])},35241,e=>{"use strict";function t(e,t){return e&&!t?e:!e&&t?t:e||t?{...e,...t}:void 0}e.s(["mergeObjects",()=>t])},99627,16919,9835,77570,e=>{"use strict";function t(){}function r(e,t){let r={};for(let n in e){let o=e[n];if(t?.hasOwnProperty(n)){let e=t[n](o);null!=e&&Object.assign(r,e);continue}!0===o?r[`data-${n.toLowerCase()}`]="":o&&(r[`data-${n.toLowerCase()}`]=o.toString())}return r}function n(e,t){return"function"==typeof e?e(t):e}function o(e,t){return"function"==typeof e?e(t):e}e.i(47167),e.s(["warn",()=>t],99627),e.s(["getStateAttributesProps",()=>r],16919),e.s(["resolveClassName",()=>n],9835),e.s(["resolveStyle",()=>o],77570)},76782,e=>{"use strict";var t=e.i(35241);let r={};function n(e,t,r,n,o){if(!r&&!n&&!o&&!e)return i(t);let a=i(e);return t&&(a=l(a,t)),r&&(a=l(a,r)),n&&(a=l(a,n)),o&&(a=l(a,o)),a}function o(e){if(0===e.length)return r;if(1===e.length)return i(e[0]);let t=i(e[0]);for(let r=1;r<e.length;r+=1)t=l(t,e[r]);return t}function i(e){return s(e)?{...c(e,r)}:function(e){let t={...e};for(let e in t){let r=t[e];a(e,r)&&(t[e]=u(r))}return t}(e)}function l(e,r){return s(r)?c(r,e):function(e,r){if(!r)return e;for(let n in r){let o=r[n];switch(n){case"style":e[n]=(0,t.mergeObjects)(e.style,o);break;case"className":e[n]=f(e.className,o);break;default:a(n,o)?e[n]=function(e,t){return t?e?(...r)=>{let n=r[0];if(p(n)){d(n);let o=t(...r);return n.baseUIHandlerPrevented||e?.(...r),o}let o=t(...r);return e?.(...r),o}:u(t):e}(e[n],o):e[n]=o}}return e}(e,r)}function a(e,t){let r=e.charCodeAt(0),n=e.charCodeAt(1),o=e.charCodeAt(2);return 111===r&&110===n&&o>=65&&o<=90&&("function"==typeof t||void 0===t)}function s(e){return"function"==typeof e}function c(e,t){return s(e)?e(t):e??r}function u(e){return e?(...t)=>{let r=t[0];return p(r)&&d(r),e(...t)}:e}function d(e){return e.preventBaseUIHandler=()=>{e.baseUIHandlerPrevented=!0},e}function f(e,t){return t?e?t+" "+e:t:e}function p(e){return null!=e&&"object"==typeof e&&"nativeEvent"in e}e.s(["makeEventPreventable",()=>d,"mergeClassNames",()=>f,"mergeProps",()=>n,"mergePropsN",()=>o])},52245,e=>{"use strict";var t=e.i(33332),r=e.i(71645),n=e.i(28918),o=e.i(78554),i=e.i(35241);e.i(99627);var l=e.i(56789),a=e.i(16919),s=e.i(9835),c=e.i(77570),u=e.i(76782);function d(e,p,h={}){let g=p.render,b=function(e,t={}){var r;let{className:d,style:f,render:p}=e,{state:h=l.EMPTY_OBJECT,ref:g,props:b,stateAttributesMapping:m,enabled:v=!0}=t,y=v?(0,s.resolveClassName)(d,h):void 0,x=v?(0,c.resolveStyle)(f,h):void 0,k=v?(0,a.getStateAttributesProps)(h,m):l.EMPTY_OBJECT,w=v&&b?Array.isArray(r=b)?(0,u.mergePropsN)(r):(0,u.mergeProps)(void 0,r):void 0,E=v?(0,i.mergeObjects)(k,w)??{}:l.EMPTY_OBJECT;return("undefined"!=typeof document&&(v?Array.isArray(g)?E.ref=(0,n.useMergedRefsN)([E.ref,(0,o.getReactElementRef)(p),...g]):E.ref=(0,n.useMergedRefs)(E.ref,(0,o.getReactElementRef)(p),g):(0,n.useMergedRefs)(null,null)),v)?(void 0!==y&&(E.className=(0,u.mergeClassNames)(E.className,y)),void 0!==x&&(E.style=(0,i.mergeObjects)(E.style,x)),E):l.EMPTY_OBJECT}(p,h);return!1===h.enabled?null:function(e,n,o,i){if(n){if("function"==typeof n)return n(o,i);let e=(0,u.mergeProps)(o,n.props);e.ref=o.ref;let t=n;return t?.$$typeof===f&&(t=r.Children.toArray(n)[0]),r.cloneElement(t,e)}if(e&&"string"==typeof e){var l,a;return l=e,a=o,"button"===l?(0,r.createElement)("button",{type:"button",...a,key:a.key}):"img"===l?(0,r.createElement)("img",{alt:"",...a,key:a.key}):r.createElement(l,a)}throw Error((0,t.default)(8))}(e,g,b,h.state??l.EMPTY_OBJECT)}let f=Symbol.for("react.lazy");e.s(["useRenderElement",()=>d])},39957,26300,e=>{"use strict";var t=e.i(88940),r=e.i(71645);let n=[];function o(e){r.useEffect(e,n)}e.s(["useOnMount",()=>o],26300);class i{static create(){return new i}currentId=0;start(e,t){this.clear(),this.currentId=setTimeout(()=>{this.currentId=0,t()},e)}isStarted(){return 0!==this.currentId}clear=()=>{0!==this.currentId&&(clearTimeout(this.currentId),this.currentId=0)};disposeEffect=()=>this.clear}function l(){let e=(0,t.useRefWithInit)(i.create).current;return o(e.disposeEffect),e}e.s(["Timeout",()=>i,"useTimeout",()=>l],39957)},29315,e=>{"use strict";let t;function r(){return"undefined"!=typeof window}function n(e){return l(e)?(e.nodeName||"").toLowerCase():"#document"}function o(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function i(e){var t;return null==(t=(l(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function l(e){return!!r()&&(e instanceof Node||e instanceof o(e).Node)}function a(e){return!!r()&&(e instanceof Element||e instanceof o(e).Element)}function s(e){return!!r()&&(e instanceof HTMLElement||e instanceof o(e).HTMLElement)}function c(e){return!!r()&&"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof o(e).ShadowRoot)}function u(e){let{overflow:t,overflowX:r,overflowY:n,display:o}=x(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+r)&&"inline"!==o&&"contents"!==o}function d(e){return/^(table|td|th)$/.test(n(e))}function f(e){try{if(e.matches(":popover-open"))return!0}catch(e){}try{return e.matches(":modal")}catch(e){return!1}}let p=/transform|translate|scale|rotate|perspective|filter/,h=/paint|layout|strict|content/,g=e=>!!e&&"none"!==e;function b(e){let t=a(e)?x(e):e;return g(t.transform)||g(t.translate)||g(t.scale)||g(t.rotate)||g(t.perspective)||!v()&&(g(t.backdropFilter)||g(t.filter))||p.test(t.willChange||"")||h.test(t.contain||"")}function m(e){let t=w(e);for(;s(t)&&!y(t);){if(b(t))return t;if(f(t))break;t=w(t)}return null}function v(){return null==t&&(t="undefined"!=typeof CSS&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),t}function y(e){return/^(html|body|#document)$/.test(n(e))}function x(e){return o(e).getComputedStyle(e)}function k(e){return a(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function w(e){if("html"===n(e))return e;let t=e.assignedSlot||e.parentNode||c(e)&&e.host||i(e);return c(t)?t.host:t}function E(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}e.s(["getComputedStyle",()=>x,"getContainingBlock",()=>m,"getDocumentElement",()=>i,"getFrameElement",()=>E,"getNodeName",()=>n,"getNodeScroll",()=>k,"getOverflowAncestors",()=>function e(t,r,n){var i;void 0===r&&(r=[]),void 0===n&&(n=!0);let l=function e(t){let r=w(t);return y(r)?(t.ownerDocument||t).body:s(r)&&u(r)?r:e(r)}(t),a=l===(null==(i=t.ownerDocument)?void 0:i.body),c=o(l);if(!a)return r.concat(l,e(l,[],n));{let t=E(c);return r.concat(c,c.visualViewport||[],u(l)?l:[],t&&n?e(t):[])}},"getParentNode",()=>w,"getWindow",()=>o,"isContainingBlock",()=>b,"isElement",()=>a,"isHTMLElement",()=>s,"isLastTraversableNode",()=>y,"isNode",()=>l,"isOverflowElement",()=>u,"isShadowRoot",()=>c,"isTableElement",()=>d,"isTopLayer",()=>f,"isWebKit",()=>v])},8868,e=>{"use strict";function t(e){return e?.ownerDocument||document}e.s(["ownerDocument",()=>t])},47554,e=>{"use strict";var t=e.i(29315);function r(e){let t=e.activeElement;for(;t?.shadowRoot?.activeElement!=null;)t=t.shadowRoot.activeElement;return t}function n(e,r){if(!e||!r)return!1;let n=r.getRootNode?.();if(e.contains(r))return!0;if(n&&(0,t.isShadowRoot)(n)){let t=r;for(;t;){if(e===t)return!0;t=t.parentNode||t.host}}return!1}function o(e){return"composedPath"in e?e.composedPath()[0]:e.target}e.s(["activeElement",()=>r,"contains",()=>n,"getTarget",()=>o])},8445,e=>{"use strict";var t=e.i(88940),r=e.i(26300);let n=new class{callbacks=[];callbacksCount=0;nextId=1;startId=1;isScheduled=!1;tick=e=>{this.isScheduled=!1;let t=this.callbacks,r=this.callbacksCount;if(this.callbacks=[],this.callbacksCount=0,this.startId=this.nextId,r>0)for(let r=0;r<t.length;r+=1)t[r]?.(e)};request(e){let t=this.nextId;return this.nextId+=1,this.callbacks.push(e),this.callbacksCount+=1,this.isScheduled||(requestAnimationFrame(this.tick),this.isScheduled=!0),t}cancel(e){let t=e-this.startId;t<0||t>=this.callbacks.length||(this.callbacks[t]=null,this.callbacksCount-=1)}};class o{static create(){return new o}static request(e){return n.request(e)}static cancel(e){return n.cancel(e)}currentId=null;request(e){this.cancel(),this.currentId=n.request(()=>{this.currentId=null,e()})}cancel=()=>{null!==this.currentId&&(n.cancel(this.currentId),this.currentId=null)};disposeEffect=()=>this.cancel}function i(){let e=(0,t.useRefWithInit)(o.create).current;return(0,r.useOnMount)(e.disposeEffect),e}e.s(["AnimationFrame",()=>o,"useAnimationFrame",()=>i])},37584,94603,9407,22640,e=>{"use strict";var t,r=e.i(71645),n=e.i(67865),o=e.i(74080),i=e.i(8445);function l(e){return null==e?e:"current"in e?e.current:e}e.s(["resolveRef",()=>l],94603);let a=((t={}).startingStyle="data-starting-style",t.endingStyle="data-ending-style",t),s={[a.startingStyle]:""},c={[a.endingStyle]:""};function u(e,t=!1,r=!0){let s=(0,i.useAnimationFrame)();return(0,n.useStableCallback)((n,i=null)=>{s.cancel();let c=l(e);if(null==c)return;let u=()=>{o.flushSync(n)};if("function"!=typeof c.getAnimations||globalThis.BASE_UI_ANIMATIONS_DISABLED)return void n();function d(){Promise.all(c.getAnimations().map(e=>e.finished)).then(()=>{i?.aborted||u()}).catch(()=>{if(r){i?.aborted||u();return}let e=c.getAnimations();!i?.aborted&&e.length>0&&e.some(e=>e.pending||"finished"!==e.playState)&&d()})}if(t){let e=a.startingStyle;if(!c.hasAttribute(e))return void s.request(d);let t=new MutationObserver(()=>{c.hasAttribute(e)||(t.disconnect(),d())});return t.observe(c,{attributes:!0,attributeFilter:[e]}),void i?.addEventListener("abort",()=>t.disconnect(),{once:!0})}s.request(d)})}function d(e){let{enabled:t=!0,open:o,ref:i,onComplete:l}=e,a=(0,n.useStableCallback)(l),s=u(i,o,!1);r.useEffect(()=>{if(!t)return;let e=new AbortController;return s(a,e.signal),()=>{e.abort()}},[t,o,a,s])}e.s(["TransitionStatusDataAttributes",()=>a,"transitionStatusMapping",0,{transitionStatus:e=>"starting"===e?s:"ending"===e?c:null}],9407),e.s(["useAnimationsFinished",()=>u],22640),e.s(["useOpenChangeComplete",()=>d],37584)},23910,e=>{"use strict";var t=e.i(71645),r=e.i(46376),n=e.i(8445);function o(e,i=!1,l=!1){let[a,s]=t.useState(e&&i?"idle":void 0),[c,u]=t.useState(e);return e&&!c&&(u(!0),s("starting")),e||!c||"ending"===a||l||s("ending"),e||c||"ending"!==a||s(void 0),(0,r.useIsoLayoutEffect)(()=>{if(!e&&c&&"ending"!==a&&l){let e=n.AnimationFrame.request(()=>{s("ending")});return()=>{n.AnimationFrame.cancel(e)}}},[e,c,a,l]),(0,r.useIsoLayoutEffect)(()=>{if(!e||i)return;let t=n.AnimationFrame.request(()=>{s(void 0)});return()=>{n.AnimationFrame.cancel(t)}},[i,e]),(0,r.useIsoLayoutEffect)(()=>{if(!e||!i)return;e&&c&&"idle"!==a&&s("starting");let t=n.AnimationFrame.request(()=>{s("idle")});return()=>{n.AnimationFrame.cancel(t)}},[i,e,c,a]),{mounted:c,setMounted:u,transitionStatus:a}}e.s(["useTransitionStatus",()=>o])},51437,e=>{"use strict";var t=e.i(71645);function r({controlled:e,default:r,name:n,state:o="value"}){let{current:i}=t.useRef(void 0!==e),[l,a]=t.useState(r),s=t.useCallback(e=>{i||a(e)},[]);return[i?e:l,s]}e.s(["useControlled",()=>r])},81104,e=>{"use strict";var t=e.i(71645),r=e.i(46376),n=e.i(69690);function o(e,i,l,a,s=!0,c){let{registerFieldControl:u}=(0,n.useFieldRootContext)(),d=t.useRef(null);d.current||(d.current=Symbol()),(0,r.useIsoLayoutEffect)(()=>{let t=d.current;if(t&&s)return u(t,{controlRef:e,getValue:a,id:i,name:c,value:l}),()=>{u(t,void 0)}},[e,s,a,i,c,u,l])}e.s(["useRegisterFieldControl",()=>o])},38489,e=>{"use strict";var t=e.i(71645),r=e.i(46376),n=e.i(67865),o=e.i(88940),i=e.i(29315),l=e.i(56789),a=e.i(88015),s=e.i(47778);function c(e={}){let{id:u,implicit:d=!1,controlRef:f}=e,{controlId:p,registerControlId:h}=(0,s.useLabelableContext)(),g=(0,a.useBaseUiId)(u),b=d?p:void 0,m=(0,o.useRefWithInit)(()=>Symbol("labelable-control")),v=t.useRef(!1),y=t.useRef(null!=u),x=(0,n.useStableCallback)(()=>{v.current&&h!==l.NOOP&&(v.current=!1,h(m.current,void 0))});return(0,r.useIsoLayoutEffect)(()=>{let e;if(h!==l.NOOP){if(d){let t=f?.current;e=(0,i.isElement)(t)&&null!=t.closest("label")?u??null:b??g}else if(null!=u)y.current=!0,e=u;else{if(!y.current)return void x();e=g}if(void 0===e)return void x();v.current=!0,h(m.current,e)}},[u,f,b,h,d,g,m,x]),t.useEffect(()=>x,[x]),p??g}e.s(["useLabelableId",()=>c])},75606,56434,e=>{"use strict";var t=e.i(56789);function r(e,r,n,o){let i=!1,l=!1,a=o??t.EMPTY_OBJECT;return{reason:e,event:r??new Event("base-ui"),cancel(){i=!0},allowPropagation(){l=!0},get isCanceled(){return i},get isPropagationAllowed(){return l},trigger:n,...a}}e.s(["createChangeEventDetails",()=>r],75606),e.s(["cancelOpen",0,"cancel-open","chipRemovePress",0,"chip-remove-press","clearPress",0,"clear-press","closePress",0,"close-press","closeWatcher",0,"close-watcher","decrementPress",0,"decrement-press","disabled",0,"disabled","drag",0,"drag","escapeKey",0,"escape-key","focusOut",0,"focus-out","imperativeAction",0,"imperative-action","incrementPress",0,"increment-press","initial",0,"initial","inputBlur",0,"input-blur","inputChange",0,"input-change","inputClear",0,"input-clear","inputPaste",0,"input-paste","inputPress",0,"input-press","itemPress",0,"item-press","keyboard",0,"keyboard","linkPress",0,"link-press","listNavigation",0,"list-navigation","missing",0,"missing","none",0,"none","outsidePress",0,"outside-press","pointer",0,"pointer","scrub",0,"scrub","siblingOpen",0,"sibling-open","swipe",0,"swipe","trackPress",0,"track-press","triggerFocus",0,"trigger-focus","triggerHover",0,"trigger-hover","triggerPress",0,"trigger-press","wheel",0,"wheel","windowResize",0,"window-resize"],16856);var n=e.i(16856);e.s(["REASONS",0,n],56434)},65430,e=>{"use strict";var t=e.i(71645);let r=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim(),n=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,t.createContext)({}),l=(0,t.forwardRef)(({color:e,size:n,strokeWidth:l,absoluteStrokeWidth:a,className:s="",children:c,iconNode:u,...d},f)=>{let{size:p=24,strokeWidth:h=2,absoluteStrokeWidth:g=!1,color:b="currentColor",className:m=""}=(0,t.useContext)(i)??{},v=a??g?24*Number(l??h)/Number(n??p):l??h;return(0,t.createElement)("svg",{ref:f,...o,width:n??p??o.width,height:n??p??o.height,stroke:e??b,strokeWidth:v,className:r("lucide",m,s),...!c&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(d)&&{"aria-hidden":"true"},...d},[...u.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(c)?c:[c]])}),a=(e,o)=>{let i=(0,t.forwardRef)(({className:i,...a},s)=>(0,t.createElement)(l,{ref:s,iconNode:o,className:r(`lucide-${n(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,i),...a}));return i.displayName=n(e),i};e.s(["default",()=>a],65430)}]);