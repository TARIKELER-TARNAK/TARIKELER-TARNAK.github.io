(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,76396,e=>{"use strict";var r=e.i(43476),o=e.i(32181);e.s(["FadeUpSection",0,function({children:e,className:a,...l}){return(0,r.jsx)(o.motion.div,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2,margin:"-50px"},transition:{duration:.5,ease:"easeOut"},className:a,...l,children:e})}])},79463,e=>{"use strict";var r=e.i(43476),o=e.i(92989),a=e.i(71645),l=e.i(76396),t=e.i(24877),i=e.i(19455),n=e.i(14984),s=e.i(55764),c=e.i(40704),d=e.i(46383),u=e.i(9611);let b={newest:"blog.sortNewest",oldest:"blog.sortOldest",az:"blog.sortAz",za:"blog.sortZa",views:"blog.sortViews"};function g({slug:e}){let{views:o}=function(e){let[r,o]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let r=`blog-stats:${e}`;try{let e=JSON.parse(localStorage.getItem(r)??"{}");o(Number(e.views)||0)}catch{o(0)}},[e]),{views:r}}(e);return(0,r.jsxs)("span",{className:"inline-flex items-center gap-1 rounded-full border border-foreground-200/15 bg-background px-1.5 py-0.5 text-foreground/80",title:"Görüntülenme",children:[(0,r.jsx)(n.EyeIcon,{size:12})," ",o]})}e.s(["BlogSection",0,function({posts:e}){let{t:m,locale:p}=(0,t.useT)(),x=(0,o.usePathname)(),[h,f]=(0,a.useState)(""),[v,y]=(0,a.useState)([]),[j,w]=(0,a.useState)("newest"),[k,$]=(0,a.useState)(4),N=(0,a.useMemo)(()=>{let r=new Set;return e.forEach(e=>{e.tags?.forEach(e=>r.add(e))}),Array.from(r)},[e]),S=(0,a.useMemo)(()=>{let r=h.trim().toLowerCase(),o=e.filter(e=>{let o=!r||e.title.toLowerCase().includes(r)||e.excerpt.toLowerCase().includes(r)||(e.tags?.some(e=>e.toLowerCase().includes(r))??!1),a=0===v.length||(e.tags?.some(e=>v.includes(e))??!1);return o&&a});o=[...o];let a=e=>{try{let r=JSON.parse(localStorage.getItem(`blog-stats:${e}`)??"{}");return Number(r.views)||0}catch{return 0}};switch(j){case"az":o.sort((e,r)=>e.title.localeCompare(r.title,"tr"===p?"tr":"en"));break;case"za":o.sort((e,r)=>r.title.localeCompare(e.title,"tr"===p?"tr":"en"));break;case"oldest":o.sort((e,r)=>e.date.localeCompare(r.date));break;case"views":o.sort((e,r)=>a(r.slug)-a(e.slug));break;default:o.sort((e,r)=>r.date.localeCompare(e.date))}return o},[e,h,v,j,p]),z=S.slice(0,k),C=z.length<S.length,E=S.length-z.length;return(0,r.jsx)(d.Section,{className:"flex-col pt-16 sm:pt-24 lg:pt-32",id:"blog",framed:!0,children:(0,r.jsxs)(l.FadeUpSection,{className:"flex w-full flex-col",children:[(0,r.jsx)(d.SectionTitle,{title:"",subTitle:m("blog.sub"),description:m("blog.desc"),icon:(0,r.jsx)(n.NewspaperIcon,{size:36,className:"inline-block"}),big:!0}),"/blog"!==x&&"/blog/"!==x&&(0,r.jsx)("div",{className:"mb-4 flex w-full max-w-6xl flex-row flex-wrap items-center justify-center gap-2",children:(0,r.jsx)(i.Button,{href:"/blog",color:"primary",className:"h-11 items-center gap-2 rounded-lg bg-[#e5e7eb] px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-[#d1d5db]",endContent:(0,r.jsx)("span",{"aria-hidden":"true",children:"→"}),children:m("blog.all")})}),(0,r.jsxs)("div",{className:"mb-6 flex w-full max-w-6xl flex-col gap-3",children:[(0,r.jsx)(s.Input,{value:h,onChange:e=>f(e.target.value),placeholder:m("blog.search"),"aria-label":m("blog.search"),className:"h-11 w-full",startContent:(0,r.jsx)(n.SearchIcon,{size:16})}),(0,r.jsxs)("div",{className:"flex w-full flex-row flex-wrap items-center gap-2",children:[(0,r.jsx)(c.SearchableCombobox,{options:Object.keys(b).map(e=>({value:e,label:m(b[e])})),selected:[j],onSelect:e=>w(e),onClear:()=>w("newest"),placeholder:m("blog.sort"),searchPlaceholder:m("blog.searchSort"),ariaLabel:m("blog.sort")}),N.length>0&&(0,r.jsx)(c.SearchableCombobox,{multiple:!0,options:N.map(e=>({value:e,label:`#${e}`})),selected:v,onSelect:e=>y(r=>r.includes(e)?r.filter(r=>r!==e):[...r,e]),onClear:()=>y([]),placeholder:m("blog.allTags"),searchPlaceholder:m("blog.searchTag"),ariaLabel:m("blog.allTags"),showAllOption:!0,allLabel:m("combobox.all"),badge:v.length})]}),v.length>0&&(0,r.jsx)("div",{className:"flex flex-row flex-wrap items-center gap-1.5",children:v.map(e=>(0,r.jsxs)("span",{className:"inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary",children:["#",e,(0,r.jsx)("button",{type:"button",onClick:()=>y(r=>r.filter(r=>r!==e)),"aria-label":`${m("blog.removeTag")} ${e}`,className:"-mr-1 grid h-4 w-4 cursor-pointer place-items-center rounded-full transition-colors hover:bg-primary/20",children:(0,r.jsx)(n.CloseIcon,{size:11})})]},e))})]}),0===z.length?(0,r.jsx)("p",{className:"text-center text-foreground-500",children:m("blog.empty")}):(0,r.jsx)("div",{className:"grid w-full max-w-6xl grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6",children:z.map(e=>(0,r.jsx)("a",{href:`/blog/${e.slug}`,className:"group",children:(0,r.jsxs)("div",{className:"flex h-full flex-col gap-3 rounded-3xl border border-foreground-200/15 bg-background p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-xl group-hover:shadow-primary/5",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,r.jsxs)("div",{className:"flex flex-row items-center justify-between gap-2",children:[(0,r.jsx)("p",{className:"text-xs text-foreground-500",children:new Date(e.date).toLocaleDateString("tr"===p?"tr-TR":"en-GB",{day:"numeric",month:"long",year:"numeric"})}),e.tags&&e.tags.length>0&&(0,r.jsx)("div",{className:"flex flex-row gap-1",children:e.tags.slice(0,2).map(e=>(0,r.jsx)("span",{className:"rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-bold text-primary",children:e},e))})]}),(0,r.jsx)("h2",{className:"mt-1 text-lg sm:text-xl font-semibold line-clamp-2 group-hover:text-primary",children:e.title})]}),(0,r.jsxs)("div",{className:"flex flex-1 flex-col justify-between gap-3",children:[(0,r.jsx)("p",{className:"text-sm text-foreground-500 line-clamp-3",children:e.excerpt}),(0,r.jsxs)("div",{className:"mt-auto flex flex-row flex-wrap items-center justify-between gap-2 pt-1",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 text-[11px] text-foreground/75",children:[(0,r.jsx)(u.StarRating,{itemId:e.slug,itemType:"blog",size:14,showCount:!0}),(0,r.jsx)(g,{slug:e.slug})]}),(0,r.jsxs)("span",{className:"ml-auto inline-flex h-9 shrink-0 items-center gap-2 rounded-lg bg-[#e5e7eb] px-4 py-2 text-sm font-medium text-black transition-all duration-200 hover:bg-[#d1d5db]",children:[m("projects.open")," ",(0,r.jsx)(n.ArrowUpRightIcon,{size:16})]})]})]})]})},e.id))}),C&&(0,r.jsx)("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-3 pt-6",children:(0,r.jsxs)(i.Button,{variant:"solid",color:"primary",onPress:()=>{$(e=>Math.min(e+4,S.length))},endContent:(0,r.jsx)(n.ChevronDownIcon,{size:18}),children:[m("projects.showMore")," ","(",E,")"]})})]})})}])},19455,25913,60339,e=>{"use strict";var r=e.i(43476),o=e.i(55747),a=e.i(71645);let l=(0,a.createContext)({});(0,a.memo)(({children:e,config:o={}})=>(0,r.jsx)(l,{value:o,children:e}));var t=e.i(42919),i=e.i(37582),n=e.i(84283),s=e.i(7670);let c=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,d=s.clsx,u=(e,r)=>o=>{var a;if((null==r?void 0:r.variants)==null)return d(e,null==o?void 0:o.class,null==o?void 0:o.className);let{variants:l,defaultVariants:t}=r,i=Object.keys(l).map(e=>{let r=null==o?void 0:o[e],a=null==t?void 0:t[e];if(null===r)return null;let i=c(r)||c(a);return l[e][i]}),n=o&&Object.entries(o).reduce((e,r)=>{let[o,a]=r;return void 0===a||(e[o]=a),e},{});return d(e,i,null==r||null==(a=r.compoundVariants)?void 0:a.reduce((e,r)=>{let{class:o,className:a,...l}=r;return Object.entries(l).every(e=>{let[r,o]=e;return Array.isArray(o)?o.includes({...t,...n}[r]):({...t,...n})[r]===o})?[...e,o,a]:e},[]),null==o?void 0:o.class,null==o?void 0:o.className)};e.s(["cva",0,u],25913);let b=n.keyframes`
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
`,g=u("anticon",{defaultVariants:{spin:!1},variants:{spin:{false:null,true:(0,n.createStaticStyles)(({css:e})=>({spin:e`
      animation: ${b} 1s linear infinite;
    `})).spin}}}),m=(0,a.memo)(({icon:e,size:o,color:s,fill:c="transparent",className:d,focusable:u,spin:b,fillRule:m,fillOpacity:p,ref:x,...h})=>{let{color:f,fill:v,fillOpacity:y,fillRule:j,focusable:w,className:k,size:$,...N}=(0,a.use)(l),{size:S,strokeWidth:z}=(0,a.useMemo)(()=>(e=>{let r,o;if("number"==typeof e||(0,i.isObjectLike)(e)&&"[object Number]"===(0,t.getTag)(e))return{size:e};switch(e){case"large":r=24,o=2;break;case"middle":r=20,o=2;break;case"small":r=14,o=2;break;default:e?(r=e?.size||24,o=e?.strokeWidth||2):(r="1em",o=2)}return{size:r,strokeWidth:o}})(o||$),[o,$]);return(0,r.jsx)("span",{className:(0,n.cx)(g({spin:b}),k,d),role:"img",...N,...h,children:e&&((0,a.isValidElement)(e)?e:(0,r.jsx)(e,{color:s||f,fill:c||v,fillOpacity:p||y,fillRule:m||j,focusable:u||w,height:S,ref:x,size:S,strokeWidth:z,width:S}))})});m.displayName="Icon";let p={large:40,middle:32,small:24};e.s(["controlHeight",0,p],60339);let x=(0,n.createStaticStyles)(({css:e,cssVar:r})=>({base:e`
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
    height: ${p.small}px;
    padding-inline: 8px;
    border-radius: ${r.borderRadiusSM};
    font-size: 12px;
  `,sizeMiddle:e`
    height: ${p.middle}px;
    padding-inline: 14px;
    border-radius: ${r.borderRadiusSM};
    font-size: 13px;
  `,sizeLarge:e`
    height: ${p.large}px;
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
  `})),h={scale:.98},f={damping:26,mass:.6,stiffness:600,type:"spring"},v=({block:e,children:l,className:t,classNames:i,danger:s=!1,disabled:c,ghost:d=!1,href:u,htmlType:b="button",icon:g,iconPosition:p="start",loading:v,onClick:y,ref:j,shape:w="default",size:k="middle",styles:$,target:N,type:S="default",...z})=>{let C=(0,o.useMotionComponent)(),E=c||v,B="small"===k?x.sizeSmall:"large"===k?x.sizeLarge:x.sizeMiddle,P=(({danger:e,ghost:r,type:o})=>{if(r)return e?x.ghostDanger:"primary"===o?x.ghostPrimary:"dashed"===o?(0,n.cx)(x.ghostDefault,x.ghostDashed):x.ghostDefault;switch(o){case"primary":return e?x.dangerSolid:x.variantPrimary;case"dashed":return e?(0,n.cx)(x.variantDashed,x.dangerOutlined):x.variantDashed;case"fill":return e?x.dangerFill:x.variantFill;case"text":return e?(0,n.cx)(x.variantText,x.dangerInline):x.variantText;case"link":return e?(0,n.cx)(x.variantLink,x.dangerInline):x.variantLink;default:return e?(0,n.cx)(x.variantDefault,x.dangerOutlined):x.variantDefault}})({danger:s,ghost:d,type:S}),T="circle"===w?x.shapeCircle:"round"===w?x.shapeRound:void 0,O=(null==l||!1===l||""===l)&&(v||g)?"small"===k?x.iconOnlySmall:"large"===k?x.iconOnlyLarge:x.iconOnlyMiddle:void 0,D=(0,n.cx)(x.base,B,P,T,e&&x.block,"end"===p&&x.iconEnd,O,t),L=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{"aria-hidden":!v,style:$?.icon,className:(0,n.cx)(x.iconBox,x.spinnerSlot,v&&x.spinnerSlotShow,"end"===p&&x.spinnerSlotEnd,i?.icon),children:(0,r.jsx)("span",{className:x.spinner})}),g&&!v?(0,r.jsx)("span",{className:(0,n.cx)(x.iconBox,i?.icon),style:$?.icon,children:null==g?null:(0,a.isValidElement)(g)||"string"==typeof g||"number"==typeof g?g:(0,r.jsx)(m,{icon:g,size:"small"})}):null,l]}),H=E?{}:{transition:f,whileTap:h};return void 0!==u?(0,r.jsx)(C.a,{"aria-busy":v||void 0,"aria-disabled":E||void 0,href:c?void 0:u,target:N,...z,className:D,ref:j,onClick:e=>{E?e.preventDefault():y?.(e)},...H,children:L}):(0,r.jsx)(C.button,{type:b,...z,"aria-busy":v||void 0,"aria-disabled":E||void 0,className:D,disabled:c,ref:j,onClick:e=>{E?e.preventDefault():y?.(e)},...H,children:L})};v.displayName="BaseButton",e.s(["Button",0,function({children:e,color:o="default",variant:a="solid",size:l="md",isIconOnly:t,isLoading:i,isDisabled:n,startContent:s,endContent:c,onPress:d,onClick:u,type:b="button",href:g,target:m,rel:p,className:x,block:h,"aria-label":f,as:y,...j}){let w="default";return"light"===a?w="text":"faded"===a?w="fill":"primary"===o&&(w="primary"),(0,r.jsx)(v,{...j,type:w,danger:"danger"===o,ghost:"bordered"===a||"ghost"===a,size:"lg"===l?"large":"sm"===l?"small":"middle",shape:t?"circle":void 0,loading:i,disabled:n,htmlType:b,href:g,target:m,rel:p,className:["solid"===a&&"primary"===o?"!bg-[#e5e7eb] !text-[#000] !opacity-100 hover:!bg-[#d1d5db]":"","bordered"===a||"ghost"===a?"primary"===o?"!text-primary !border-primary/40 hover:!bg-primary/10":"!text-foreground !border-foreground/30 hover:!bg-foreground/5":"",x].filter(Boolean).join(" "),block:h,"aria-label":f,onClick:e=>{u?.(e),d?.()},iconPosition:c?"end":"start",icon:s||c||void 0,children:e})}],19455)},46383,e=>{"use strict";var r=e.i(43476),o=e.i(71645),a=e.i(67062);let l=o.default.forwardRef(({children:e,className:o,id:l,framed:t},i)=>(0,r.jsxs)("section",{ref:i,className:(0,a.cn)("relative flex w-full items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0",o),children:[(0,r.jsx)("div",{id:l,className:"absolute -top-20 sm:-top-24"}),t?(0,r.jsx)("div",{className:"w-full max-w-6xl rounded-3xl border border-foreground-200/10 bg-background p-4 sm:p-6 lg:p-10",children:e}):e]}));l.displayName="Section",e.s(["Section",0,l,"SectionTitle",0,function({title:e,subTitle:o,description:a,icon:l,big:t=!1}){return t?(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center pb-8 sm:pb-10 lg:pb-12 text-center",children:[(0,r.jsxs)("h2",{className:"inline-flex items-center gap-4 border-b-4 border-primary pb-3 text-3xl font-black uppercase tracking-tight text-primary sm:text-4xl lg:text-5xl",children:[l,o]}),a&&(0,r.jsx)("p",{className:"mt-4 text-foreground-500 text-sm sm:text-base max-w-md lg:max-w-lg",children:a})]}):(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center space-y-1.5 sm:space-y-2 pb-8 sm:pb-10 lg:pb-12 text-center",children:[(0,r.jsx)("p",{className:"animate-gradient bg-gradient-to-r from-[#FBBF24] to-[#00C950] bg-size-300 bg-clip-text font-bold text-transparent text-xs sm:text-sm",children:o}),(0,r.jsx)("h2",{className:"text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight",children:e}),(0,r.jsx)("p",{className:"text-foreground-500 text-sm sm:text-base max-w-md lg:max-w-lg",children:a})]})}])}]);