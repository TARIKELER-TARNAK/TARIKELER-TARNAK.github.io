(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,76396,e=>{"use strict";var r=e.i(43476),t=e.i(32181);e.s(["FadeUpSection",0,function({children:e,className:o,...a}){return(0,r.jsx)(t.motion.div,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2,margin:"-50px"},transition:{duration:.5,ease:"easeOut"},className:o,...a,children:e})}])},73477,e=>{"use strict";var r=e.i(43476),t=e.i(71645),o=e.i(92989),a=e.i(24877),l=e.i(41148),i=e.i(67062),n=e.i(88653),s=e.i(32181),c=e.i(14984);function d({open:e,onClose:o,title:a,children:l,side:i="right",width:u="max-w-sm"}){let g=(0,t.useRef)(null);(0,t.useEffect)(()=>{if(!e)return;let r=e=>{"Escape"===e.key&&(e.preventDefault(),o())},t=document.body.style.overflow;return document.body.style.overflow="hidden",document.addEventListener("keydown",r),g.current?.focus(),()=>{document.body.style.overflow=t,document.removeEventListener("keydown",r)}},[e,o]);let b="right"===i?"100%":"-100%";return(0,r.jsx)(n.AnimatePresence,{children:e&&(0,r.jsxs)("div",{className:"fixed inset-0 z-[100]",children:[(0,r.jsx)(s.motion.div,{className:"absolute inset-0 bg-black",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.18},onClick:o}),(0,r.jsxs)(s.motion.div,{ref:g,role:"dialog","aria-modal":"true","aria-labelledby":a?"drawer-title":void 0,tabIndex:-1,initial:{x:b},animate:{x:0},exit:{x:b},transition:{type:"spring",stiffness:360,damping:34},className:`absolute top-0 ${"right"===i?"right-0":"left-0"} flex h-full w-full ${u} flex-col border-${"right"===i?"l":"r"} border-foreground-200/15 bg-background shadow-2xl shadow-black/40 outline-none`,children:[a&&(0,r.jsxs)("div",{className:"flex shrink-0 items-center justify-between border-b border-foreground-200/10 px-5 py-3.5",children:[(0,r.jsx)("h2",{id:"drawer-title",className:"text-base font-semibold text-foreground",children:a}),(0,r.jsx)("button",{type:"button",onClick:o,"aria-label":"Close",className:"flex h-7 w-7 items-center justify-center rounded-md text-foreground/60 transition-colors hover:bg-foreground/5 hover:text-foreground",children:(0,r.jsx)(c.CloseIcon,{size:16})})]}),(0,r.jsx)("div",{className:"flex-1 overflow-y-auto",children:l})]})]})})}let u="site-music-enabled",g="site-reduce-motion",b="site-dark-intensity";function m(e,r,t){let o=localStorage.getItem(e);return r.includes(o??"")?o:t}function x({githubUsername:e,open:i,onOpenChange:n}){let{theme:s,setTheme:v}=(0,l.useTheme)(),{t:y}=(0,a.useT)(),{pref:j,setPref:w}=(0,a.useLocale)(),k=(0,o.useRouter)(),[N,$]=(0,t.useState)(!1),[S,C]=(0,t.useState)(!0),[z,E]=(0,t.useState)("standard");(0,t.useEffect)(()=>{i&&($("true"===m(g,["true","false"],"false")),C("true"===m(u,["true","false"],"true")),E(m(b,["light","standard","dark"],"standard")))},[i]);let I=(0,t.useCallback)(e=>{$(e);try{localStorage.setItem(g,String(e))}catch{}document.documentElement.dataset.reduceMotion=String(e)},[]),T=(0,t.useCallback)(e=>{C(e);try{localStorage.setItem(u,String(e))}catch{}window.dispatchEvent(new CustomEvent("site-music-toggle"))},[]),P=(0,t.useCallback)(e=>{E(e);try{localStorage.setItem(b,e)}catch{}document.documentElement.dataset.darkIntensity=e},[]),B=(0,t.useCallback)(()=>{let e=y("settings.resetConfirm");if(window.confirm(e)){for(let e of["site-theme",g,u,b,"music-player-closed"])try{localStorage.removeItem(e)}catch{}try{let e=[];for(let r=0;r<localStorage.length;r++){let t=localStorage.key(r);t&&(t.startsWith("star-state:")||t.startsWith("project-stats:")||t.startsWith("blog-stats:"))&&e.push(t)}e.forEach(e=>localStorage.removeItem(e))}catch{}n(!1),k.refresh()}},[y,n,k]),L=[{value:"auto",icon:(0,r.jsx)(c.ThemeSystemIcon,{size:16}),label:y("settings.auto")},{value:"light",icon:(0,r.jsx)(c.SunIcon,{size:16}),label:y("settings.light")},{value:"dark",icon:(0,r.jsx)(c.MoonIcon,{size:16}),label:y("settings.dark")}],O=[{value:"light",label:y("settings.darkIntensityLight")},{value:"standard",label:y("settings.darkIntensityStandard")},{value:"dark",label:y("settings.darkIntensityIntense")}],D=[{value:"auto",icon:(0,r.jsx)(c.AutoIcon,{size:16}),label:y("settings.auto")},{value:"tr",icon:(0,r.jsx)(c.FlagTrIcon,{size:16}),label:"Türkçe"},{value:"en",icon:(0,r.jsx)(c.FlagEnIcon,{size:16}),label:"English"}];return(0,r.jsx)(d,{open:i,onClose:()=>n(!1),title:y("settings.title"),side:"right",children:(0,r.jsxs)("div",{className:"flex flex-col gap-5 px-5 pb-8",children:[(0,r.jsx)(p,{title:y("settings.appearance"),icon:(0,r.jsx)(c.CogIcon,{size:16}),children:(0,r.jsx)(h,{options:L,value:s,onChange:e=>v(e)})}),(0,r.jsx)(p,{title:y("settings.language"),icon:(0,r.jsx)(c.GlobeIcon,{size:16}),children:(0,r.jsx)(h,{options:D,value:j,onChange:e=>w(e)})}),(0,r.jsx)(p,{title:y("settings.darkIntensity"),icon:(0,r.jsx)(c.MoonIcon,{size:16}),children:(0,r.jsx)(h,{options:O,value:z,onChange:e=>P(e)})}),(0,r.jsx)(p,{title:y("settings.motion"),icon:(0,r.jsx)(c.RefreshCwIcon,{size:16}),children:(0,r.jsx)(f,{checked:N,onChange:I,label:y("settings.reduceMotion")})}),(0,r.jsx)(p,{title:y("settings.music"),icon:(0,r.jsx)(c.VolumeIcon,{size:16}),children:(0,r.jsx)(f,{checked:S,onChange:T,label:y("settings.musicEnabled")})}),(0,r.jsxs)("button",{type:"button",onClick:B,className:"mt-2 flex items-center justify-center gap-2 rounded-lg border border-foreground/10 px-3 py-2 text-sm text-foreground/70 transition-colors hover:border-danger/40 hover:bg-danger/10 hover:text-danger",children:[(0,r.jsx)(c.RotateCcwIcon,{size:14}),y("settings.reset")]})]})})}function p({title:e,icon:t,children:o}){return(0,r.jsxs)("div",{className:"flex flex-col gap-2.5",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground/60",children:[t,e]}),(0,r.jsx)("div",{className:"flex flex-col gap-1.5",children:o})]})}function h({options:e,value:t,onChange:o}){return(0,r.jsx)("div",{className:"grid grid-cols-3 gap-1.5",children:e.map(e=>{let a=e.value===t;return(0,r.jsxs)("button",{type:"button",onClick:()=>o(e.value),className:(0,i.cn)("flex items-center justify-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors",a?"border-primary/50 bg-primary/15 text-foreground":"border-foreground/10 text-foreground/70 hover:bg-foreground/5"),children:[e.icon,e.label]},e.value)})})}function f({checked:e,onChange:t,label:o}){return(0,r.jsxs)("button",{type:"button",onClick:()=>t(!e),"aria-pressed":e,className:"flex items-center justify-between rounded-lg border border-foreground/10 px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-foreground/5",children:[(0,r.jsx)("span",{children:o}),(0,r.jsx)("span",{className:(0,i.cn)("relative h-5 w-9 shrink-0 rounded-full transition-colors",e?"bg-primary":"bg-foreground/20"),children:(0,r.jsx)("span",{className:(0,i.cn)("absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200",e&&"translate-x-4")})})]})}e.s(["Navigation",0,function({content:e}){let[o,a]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{let e=()=>a(!0);return window.addEventListener("settings:open",e),()=>window.removeEventListener("settings:open",e)},[]),(0,r.jsx)(x,{githubUsername:e.settings.githubUsername,open:o,onOpenChange:a})}],73477)},63394,e=>{"use strict";var r=e.i(71645);let t="last-list-path";e.s(["RememberListPath",0,function({path:e}){let{set:o}=function(){let[e,o]=(0,r.useState)(null);return(0,r.useEffect)(()=>{try{o(sessionStorage.getItem(t))}catch{o(null)}},[]),{previous:e,set:e=>{try{sessionStorage.setItem(t,e)}catch{}o(e)}}}();return(0,r.useEffect)(()=>{o(e)},[e,o]),null}],63394)},79463,e=>{"use strict";var r=e.i(43476),t=e.i(92989),o=e.i(71645),a=e.i(76396),l=e.i(24877),i=e.i(19455),n=e.i(14984),s=e.i(55764),c=e.i(40704),d=e.i(46383),u=e.i(9611);let g={newest:"blog.sortNewest",oldest:"blog.sortOldest",az:"blog.sortAz",za:"blog.sortZa",views:"blog.sortViews"};function b({slug:e}){let{views:t}=function(e){let[r,t]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let r=`blog-stats:${e}`;try{let e=JSON.parse(localStorage.getItem(r)??"{}");t(Number(e.views)||0)}catch{t(0)}},[e]),{views:r}}(e);return(0,r.jsxs)("span",{className:"inline-flex items-center gap-1 rounded-full border border-foreground-200/15 bg-background px-1.5 py-0.5 text-foreground/80",title:"Görüntülenme",children:[(0,r.jsx)(n.EyeIcon,{size:12})," ",t]})}e.s(["BlogSection",0,function({posts:e}){let{t:m,locale:x}=(0,l.useT)(),p=(0,t.usePathname)(),[h,f]=(0,o.useState)(""),[v,y]=(0,o.useState)([]),[j,w]=(0,o.useState)("newest"),[k,N]=(0,o.useState)(4),$=(0,o.useMemo)(()=>{let r=new Set;return e.forEach(e=>{e.tags?.forEach(e=>r.add(e))}),Array.from(r)},[e]),S=(0,o.useMemo)(()=>{let r=h.trim().toLowerCase(),t=e.filter(e=>{let t=!r||e.title.toLowerCase().includes(r)||e.excerpt.toLowerCase().includes(r)||(e.tags?.some(e=>e.toLowerCase().includes(r))??!1),o=0===v.length||(e.tags?.some(e=>v.includes(e))??!1);return t&&o});t=[...t];let o=e=>{try{let r=JSON.parse(localStorage.getItem(`blog-stats:${e}`)??"{}");return Number(r.views)||0}catch{return 0}};switch(j){case"az":t.sort((e,r)=>e.title.localeCompare(r.title,"tr"===x?"tr":"en"));break;case"za":t.sort((e,r)=>r.title.localeCompare(e.title,"tr"===x?"tr":"en"));break;case"oldest":t.sort((e,r)=>e.date.localeCompare(r.date));break;case"views":t.sort((e,r)=>o(r.slug)-o(e.slug));break;default:t.sort((e,r)=>r.date.localeCompare(e.date))}return t},[e,h,v,j,x]),C=S.slice(0,k),z=C.length<S.length,E=S.length-C.length;return(0,r.jsx)(d.Section,{className:"flex-col pt-16 sm:pt-24 lg:pt-32",id:"blog",framed:!0,children:(0,r.jsxs)(a.FadeUpSection,{className:"flex w-full flex-col",children:[(0,r.jsx)(d.SectionTitle,{title:"",subTitle:m("blog.sub"),description:m("blog.desc"),icon:(0,r.jsx)(n.NewspaperIcon,{size:36,className:"inline-block"}),big:!0}),"/blog"!==p&&"/blog/"!==p&&(0,r.jsx)("div",{className:"mb-4 flex w-full max-w-6xl flex-row flex-wrap items-center justify-center gap-2",children:(0,r.jsx)(i.Button,{href:"/blog",color:"primary",className:"h-11 items-center gap-2 rounded-lg bg-[#e5e7eb] px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-[#d1d5db]",endContent:(0,r.jsx)("span",{"aria-hidden":"true",children:"→"}),children:m("blog.all")})}),(0,r.jsxs)("div",{className:"mb-6 flex w-full max-w-6xl flex-col gap-3",children:[(0,r.jsx)(s.Input,{value:h,onChange:e=>f(e.target.value),placeholder:m("blog.search"),"aria-label":m("blog.search"),className:"h-11 w-full",startContent:(0,r.jsx)(n.SearchIcon,{size:16})}),(0,r.jsxs)("div",{className:"flex w-full flex-row flex-wrap items-center gap-2",children:[(0,r.jsx)(c.SearchableCombobox,{options:Object.keys(g).map(e=>({value:e,label:m(g[e])})),selected:[j],onSelect:e=>w(e),onClear:()=>w("newest"),placeholder:m("blog.sort"),searchPlaceholder:m("blog.searchSort"),ariaLabel:m("blog.sort")}),$.length>0&&(0,r.jsx)(c.SearchableCombobox,{multiple:!0,options:$.map(e=>({value:e,label:`#${e}`})),selected:v,onSelect:e=>y(r=>r.includes(e)?r.filter(r=>r!==e):[...r,e]),onClear:()=>y([]),placeholder:m("blog.allTags"),searchPlaceholder:m("blog.searchTag"),ariaLabel:m("blog.allTags"),showAllOption:!0,allLabel:m("combobox.all"),badge:v.length})]}),v.length>0&&(0,r.jsx)("div",{className:"flex flex-row flex-wrap items-center gap-1.5",children:v.map(e=>(0,r.jsxs)("span",{className:"inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary",children:["#",e,(0,r.jsx)("button",{type:"button",onClick:()=>y(r=>r.filter(r=>r!==e)),"aria-label":`${m("blog.removeTag")} ${e}`,className:"-mr-1 grid h-4 w-4 cursor-pointer place-items-center rounded-full transition-colors hover:bg-primary/20",children:(0,r.jsx)(n.CloseIcon,{size:11})})]},e))})]}),0===C.length?(0,r.jsx)("p",{className:"text-center text-foreground-500",children:m("blog.empty")}):(0,r.jsx)("div",{className:"grid w-full max-w-6xl grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6",children:C.map(e=>(0,r.jsx)("a",{href:`/blog/${e.slug}`,className:"group",children:(0,r.jsxs)("div",{className:"flex h-full flex-col gap-3 rounded-3xl border border-foreground-200/15 bg-background p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-xl group-hover:shadow-primary/5",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,r.jsxs)("div",{className:"flex flex-row items-center justify-between gap-2",children:[(0,r.jsx)("p",{className:"text-xs text-foreground-500",children:new Date(e.date).toLocaleDateString("tr"===x?"tr-TR":"en-GB",{day:"numeric",month:"long",year:"numeric"})}),e.tags&&e.tags.length>0&&(0,r.jsx)("div",{className:"flex flex-row gap-1",children:e.tags.slice(0,2).map(e=>(0,r.jsx)("span",{className:"rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-bold text-primary",children:e},e))})]}),(0,r.jsx)("h2",{className:"mt-1 text-lg sm:text-xl font-semibold line-clamp-2 group-hover:text-primary",children:e.title})]}),(0,r.jsxs)("div",{className:"flex flex-1 flex-col justify-between gap-3",children:[(0,r.jsx)("p",{className:"text-sm text-foreground-500 line-clamp-3",children:e.excerpt}),(0,r.jsxs)("div",{className:"mt-auto flex flex-row flex-wrap items-center justify-between gap-2 pt-1",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 text-[11px] text-foreground/75",children:[(0,r.jsx)(u.StarRating,{itemId:e.slug,itemType:"blog",size:14,showCount:!0}),(0,r.jsx)(b,{slug:e.slug})]}),(0,r.jsxs)("span",{className:"ml-auto inline-flex h-9 shrink-0 items-center gap-2 rounded-lg bg-[#e5e7eb] px-4 py-2 text-sm font-medium text-black transition-all duration-200 hover:bg-[#d1d5db]",children:[m("projects.open")," ",(0,r.jsx)(n.ArrowUpRightIcon,{size:16})]})]})]})]})},e.id))}),z&&(0,r.jsx)("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-3 pt-6",children:(0,r.jsxs)(i.Button,{variant:"solid",color:"primary",onPress:()=>{N(e=>Math.min(e+4,S.length))},endContent:(0,r.jsx)(n.ChevronDownIcon,{size:18}),children:[m("projects.showMore")," ","(",E,")"]})})]})})}])},19455,25913,60339,e=>{"use strict";var r=e.i(43476),t=e.i(55747),o=e.i(71645);let a=(0,o.createContext)({});(0,o.memo)(({children:e,config:t={}})=>(0,r.jsx)(a,{value:t,children:e}));var l=e.i(42919),i=e.i(37582),n=e.i(84283),s=e.i(7670);let c=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,d=s.clsx,u=(e,r)=>t=>{var o;if((null==r?void 0:r.variants)==null)return d(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:a,defaultVariants:l}=r,i=Object.keys(a).map(e=>{let r=null==t?void 0:t[e],o=null==l?void 0:l[e];if(null===r)return null;let i=c(r)||c(o);return a[e][i]}),n=t&&Object.entries(t).reduce((e,r)=>{let[t,o]=r;return void 0===o||(e[t]=o),e},{});return d(e,i,null==r||null==(o=r.compoundVariants)?void 0:o.reduce((e,r)=>{let{class:t,className:o,...a}=r;return Object.entries(a).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...l,...n}[r]):({...l,...n})[r]===t})?[...e,t,o]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)};e.s(["cva",0,u],25913);let g=n.keyframes`
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
`,b=u("anticon",{defaultVariants:{spin:!1},variants:{spin:{false:null,true:(0,n.createStaticStyles)(({css:e})=>({spin:e`
      animation: ${g} 1s linear infinite;
    `})).spin}}}),m=(0,o.memo)(({icon:e,size:t,color:s,fill:c="transparent",className:d,focusable:u,spin:g,fillRule:m,fillOpacity:x,ref:p,...h})=>{let{color:f,fill:v,fillOpacity:y,fillRule:j,focusable:w,className:k,size:N,...$}=(0,o.use)(a),{size:S,strokeWidth:C}=(0,o.useMemo)(()=>(e=>{let r,t;if("number"==typeof e||(0,i.isObjectLike)(e)&&"[object Number]"===(0,l.getTag)(e))return{size:e};switch(e){case"large":r=24,t=2;break;case"middle":r=20,t=2;break;case"small":r=14,t=2;break;default:e?(r=e?.size||24,t=e?.strokeWidth||2):(r="1em",t=2)}return{size:r,strokeWidth:t}})(t||N),[t,N]);return(0,r.jsx)("span",{className:(0,n.cx)(b({spin:g}),k,d),role:"img",...$,...h,children:e&&((0,o.isValidElement)(e)?e:(0,r.jsx)(e,{color:s||f,fill:c||v,fillOpacity:x||y,fillRule:m||j,focusable:u||w,height:S,ref:p,size:S,strokeWidth:C,width:S}))})});m.displayName="Icon";let x={large:40,middle:32,small:24};e.s(["controlHeight",0,x],60339);let p=(0,n.createStaticStyles)(({css:e,cssVar:r})=>({base:e`
    cursor: pointer;

    position: relative;

    display: inline-flex;
    gap: 6px;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
    border: 1px solid ${r.colorBorder};

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
      box-shadow: 0 0 0 2px ${r.colorPrimaryBorder};
    }

    &:disabled,
    &[aria-disabled='true'] {
      pointer-events: none;
      cursor: not-allowed;
      opacity: 0.5;
    }
  `,sizeSmall:e`
    height: ${x.small}px;
    padding-inline: 8px;
    border-radius: ${r.borderRadiusSM};
    font-size: 12px;
  `,sizeMiddle:e`
    height: ${x.middle}px;
    padding-inline: 14px;
    border-radius: ${r.borderRadiusSM};
    font-size: 13px;
  `,sizeLarge:e`
    height: ${x.large}px;
    padding-inline: 16px;
    border-radius: ${r.borderRadius};
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
    background: ${r.colorBgContainer};

    /* &:hover/&:active included so the anchor form outranks antd's global a:hover/a:active link color */
    &,
    &:hover,
    &:active {
      color: ${r.colorText};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      border-color: ${r.colorPrimaryBorder};
      color: ${r.colorPrimaryText};
    }
  `,variantPrimary:e`
    border-color: ${r.colorPrimary};
    background: ${r.colorPrimary};

    &,
    &:hover,
    &:active {
      color: ${r.colorBgLayout};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      border-color: ${r.colorPrimaryHover};
      background: ${r.colorPrimaryHover};
    }

    &:active:not(:disabled, [aria-disabled='true']) {
      border-color: ${r.colorPrimaryActive};
      background: ${r.colorPrimaryActive};
    }
  `,variantDashed:e`
    border-style: dashed;
    background: ${r.colorBgContainer};

    &,
    &:hover,
    &:active {
      color: ${r.colorText};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      border-color: ${r.colorPrimaryBorder};
      color: ${r.colorPrimaryText};
    }
  `,variantFill:e`
    border-color: transparent;
    background: ${r.colorFillTertiary};

    &,
    &:hover,
    &:active {
      color: ${r.colorText};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      background: ${r.colorFillSecondary};
    }

    &:active:not(:disabled, [aria-disabled='true']) {
      background: ${r.colorFill};
    }
  `,variantText:e`
    border-color: transparent;
    background: transparent;

    &,
    &:hover,
    &:active {
      color: ${r.colorText};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      background: ${r.colorFillSecondary};
    }
  `,variantLink:e`
    padding-inline: 0;
    border-color: transparent;
    background: transparent;

    &,
    &:hover,
    &:active {
      color: ${r.colorPrimary};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      color: ${r.colorPrimaryHover};
      background: transparent;
    }
  `,dangerOutlined:e`
    border-color: ${r.colorError};
    background: ${r.colorBgContainer};

    &,
    &:hover,
    &:active {
      color: ${r.colorError};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      border-color: ${r.colorErrorHover};
      color: ${r.colorErrorHover};
      background: ${r.colorBgContainer};
    }
  `,dangerSolid:e`
    border-color: ${r.colorError};
    background: ${r.colorError};

    &,
    &:hover,
    &:active {
      color: ${r.colorBgLayout};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      border-color: ${r.colorErrorHover};
      background: ${r.colorErrorHover};
    }

    &:active:not(:disabled, [aria-disabled='true']) {
      border-color: ${r.colorErrorActive};
      background: ${r.colorErrorActive};
    }
  `,dangerFill:e`
    border-color: transparent;
    color: ${r.colorError};
    background: ${r.colorErrorBg};

    &:hover:not(:disabled, [aria-disabled='true']) {
      color: ${r.colorErrorHover};
      background: ${r.colorErrorBgHover};
    }

    &:active:not(:disabled, [aria-disabled='true']) {
      color: ${r.colorErrorActive};
      background: ${r.colorErrorBgHover};
    }
  `,dangerInline:e`
    &,
    &:hover,
    &:active {
      color: ${r.colorError};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      color: ${r.colorErrorHover};
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
    border-color: ${r.colorPrimary};
    background: transparent;

    &,
    &:hover,
    &:active {
      color: ${r.colorPrimary};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      border-color: ${r.colorPrimaryHover};
      color: ${r.colorPrimaryHover};
      background: color-mix(in srgb, currentcolor 8%, transparent);
    }

    &:active:not(:disabled, [aria-disabled='true']) {
      background: color-mix(in srgb, currentcolor 14%, transparent);
    }
  `,ghostDanger:e`
    border-color: ${r.colorError};
    background: transparent;

    &,
    &:hover,
    &:active {
      color: ${r.colorError};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      border-color: ${r.colorErrorHover};
      color: ${r.colorErrorHover};
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
  `})),h={scale:.98},f={damping:26,mass:.6,stiffness:600,type:"spring"},v=({block:e,children:a,className:l,classNames:i,danger:s=!1,disabled:c,ghost:d=!1,href:u,htmlType:g="button",icon:b,iconPosition:x="start",loading:v,onClick:y,ref:j,shape:w="default",size:k="middle",styles:N,target:$,type:S="default",...C})=>{let z=(0,t.useMotionComponent)(),E=c||v,I="small"===k?p.sizeSmall:"large"===k?p.sizeLarge:p.sizeMiddle,T=(({danger:e,ghost:r,type:t})=>{if(r)return e?p.ghostDanger:"primary"===t?p.ghostPrimary:"dashed"===t?(0,n.cx)(p.ghostDefault,p.ghostDashed):p.ghostDefault;switch(t){case"primary":return e?p.dangerSolid:p.variantPrimary;case"dashed":return e?(0,n.cx)(p.variantDashed,p.dangerOutlined):p.variantDashed;case"fill":return e?p.dangerFill:p.variantFill;case"text":return e?(0,n.cx)(p.variantText,p.dangerInline):p.variantText;case"link":return e?(0,n.cx)(p.variantLink,p.dangerInline):p.variantLink;default:return e?(0,n.cx)(p.variantDefault,p.dangerOutlined):p.variantDefault}})({danger:s,ghost:d,type:S}),P="circle"===w?p.shapeCircle:"round"===w?p.shapeRound:void 0,B=(null==a||!1===a||""===a)&&(v||b)?"small"===k?p.iconOnlySmall:"large"===k?p.iconOnlyLarge:p.iconOnlyMiddle:void 0,L=(0,n.cx)(p.base,I,T,P,e&&p.block,"end"===x&&p.iconEnd,B,l),O=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{"aria-hidden":!v,style:N?.icon,className:(0,n.cx)(p.iconBox,p.spinnerSlot,v&&p.spinnerSlotShow,"end"===x&&p.spinnerSlotEnd,i?.icon),children:(0,r.jsx)("span",{className:p.spinner})}),b&&!v?(0,r.jsx)("span",{className:(0,n.cx)(p.iconBox,i?.icon),style:N?.icon,children:null==b?null:(0,o.isValidElement)(b)||"string"==typeof b||"number"==typeof b?b:(0,r.jsx)(m,{icon:b,size:"small"})}):null,a]}),D=E?{}:{transition:f,whileTap:h};return void 0!==u?(0,r.jsx)(z.a,{"aria-busy":v||void 0,"aria-disabled":E||void 0,href:c?void 0:u,target:$,...C,className:L,ref:j,onClick:e=>{E?e.preventDefault():y?.(e)},...D,children:O}):(0,r.jsx)(z.button,{type:g,...C,"aria-busy":v||void 0,"aria-disabled":E||void 0,className:L,disabled:c,ref:j,onClick:e=>{E?e.preventDefault():y?.(e)},...D,children:O})};v.displayName="BaseButton",e.s(["Button",0,function({children:e,color:t="default",variant:o="solid",size:a="md",isIconOnly:l,isLoading:i,isDisabled:n,startContent:s,endContent:c,onPress:d,onClick:u,type:g="button",href:b,target:m,rel:x,className:p,block:h,"aria-label":f,as:y,...j}){let w="default";return"light"===o?w="text":"faded"===o?w="fill":"primary"===t&&(w="primary"),(0,r.jsx)(v,{...j,type:w,danger:"danger"===t,ghost:"bordered"===o||"ghost"===o,size:"lg"===a?"large":"sm"===a?"small":"middle",shape:l?"circle":void 0,loading:i,disabled:n,htmlType:g,href:b,target:m,rel:x,className:["solid"===o&&"primary"===t?"!bg-[#e5e7eb] !text-[#000] !opacity-100 hover:!bg-[#d1d5db]":"","bordered"===o||"ghost"===o?"primary"===t?"!text-primary !border-primary/40 hover:!bg-primary/10":"!text-foreground !border-foreground/30 hover:!bg-foreground/5":"",p].filter(Boolean).join(" "),block:h,"aria-label":f,onClick:e=>{u?.(e),d?.()},iconPosition:c?"end":"start",icon:s||c||void 0,children:e})}],19455)},46383,e=>{"use strict";var r=e.i(43476),t=e.i(71645),o=e.i(67062);let a=t.default.forwardRef(({children:e,className:t,id:a,framed:l},i)=>(0,r.jsxs)("section",{ref:i,className:(0,o.cn)("relative flex w-full items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0",t),children:[(0,r.jsx)("div",{id:a,className:"absolute -top-20 sm:-top-24"}),l?(0,r.jsx)("div",{className:"w-full max-w-6xl rounded-3xl border border-foreground-200/10 bg-background p-4 sm:p-6 lg:p-10",children:e}):e]}));a.displayName="Section",e.s(["Section",0,a,"SectionTitle",0,function({title:e,subTitle:t,description:o,icon:a,big:l=!1}){return l?(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center pb-8 sm:pb-10 lg:pb-12 text-center",children:[(0,r.jsxs)("h2",{className:"inline-flex items-center gap-4 border-b-4 border-primary pb-3 text-3xl font-black uppercase tracking-tight text-primary sm:text-4xl lg:text-5xl",children:[a,t]}),o&&(0,r.jsx)("p",{className:"mt-4 text-foreground-500 text-sm sm:text-base max-w-md lg:max-w-lg",children:o})]}):(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center space-y-1.5 sm:space-y-2 pb-8 sm:pb-10 lg:pb-12 text-center",children:[(0,r.jsx)("p",{className:"animate-gradient bg-gradient-to-r from-[#FBBF24] to-[#00C950] bg-size-300 bg-clip-text font-bold text-transparent text-xs sm:text-sm",children:t}),(0,r.jsx)("h2",{className:"text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight",children:e}),(0,r.jsx)("p",{className:"text-foreground-500 text-sm sm:text-base max-w-md lg:max-w-lg",children:o})]})}])}]);