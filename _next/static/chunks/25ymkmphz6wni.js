(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,73477,e=>{"use strict";var r=e.i(43476),t=e.i(71645),o=e.i(92989),n=e.i(24877),a=e.i(41148),i=e.i(67062),l=e.i(88653),s=e.i(32181),c=e.i(14984);function d({open:e,onClose:o,title:n,children:a,side:i="right",width:u="max-w-sm"}){let h=(0,t.useRef)(null);(0,t.useEffect)(()=>{if(!e)return;let r=e=>{"Escape"===e.key&&(e.preventDefault(),o())},t=document.body.style.overflow;return document.body.style.overflow="hidden",document.addEventListener("keydown",r),h.current?.focus(),()=>{document.body.style.overflow=t,document.removeEventListener("keydown",r)}},[e,o]);let m="right"===i?"100%":"-100%";return(0,r.jsx)(l.AnimatePresence,{children:e&&(0,r.jsxs)("div",{className:"fixed inset-0 z-[100]",children:[(0,r.jsx)(s.motion.div,{className:"absolute inset-0 bg-black",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.18},onClick:o}),(0,r.jsxs)(s.motion.div,{ref:h,role:"dialog","aria-modal":"true","aria-labelledby":n?"drawer-title":void 0,tabIndex:-1,initial:{x:m},animate:{x:0},exit:{x:m},transition:{type:"spring",stiffness:360,damping:34},className:`absolute top-0 ${"right"===i?"right-0":"left-0"} flex h-full w-full ${u} flex-col border-${"right"===i?"l":"r"} border-foreground-200/15 bg-background shadow-2xl shadow-black/40 outline-none`,children:[n&&(0,r.jsxs)("div",{className:"flex shrink-0 items-center justify-between border-b border-foreground-200/10 px-5 py-3.5",children:[(0,r.jsx)("h2",{id:"drawer-title",className:"text-base font-semibold text-foreground",children:n}),(0,r.jsx)("button",{type:"button",onClick:o,"aria-label":"Close",className:"flex h-7 w-7 items-center justify-center rounded-md text-foreground/60 transition-colors hover:bg-foreground/5 hover:text-foreground",children:(0,r.jsx)(c.CloseIcon,{size:16})})]}),(0,r.jsx)("div",{className:"flex-1 overflow-y-auto",children:a})]})]})})}let u="site-music-enabled",h="site-reduce-motion",m="site-dark-intensity";function g(e,r,t){let o=localStorage.getItem(e);return r.includes(o??"")?o:t}function p({githubUsername:e,open:i,onOpenChange:l}){let{theme:s,setTheme:v}=(0,a.useTheme)(),{t:w}=(0,n.useT)(),{pref:j,setPref:y}=(0,n.useLocale)(),k=(0,o.useRouter)(),[N,S]=(0,t.useState)(!1),[C,z]=(0,t.useState)(!0),[E,$]=(0,t.useState)("standard");(0,t.useEffect)(()=>{i&&(S("true"===g(h,["true","false"],"false")),z("true"===g(u,["true","false"],"true")),$(g(m,["light","standard","dark"],"standard")))},[i]);let I=(0,t.useCallback)(e=>{S(e);try{localStorage.setItem(h,String(e))}catch{}document.documentElement.dataset.reduceMotion=String(e)},[]),L=(0,t.useCallback)(e=>{z(e);try{localStorage.setItem(u,String(e))}catch{}window.dispatchEvent(new CustomEvent("site-music-toggle"))},[]),T=(0,t.useCallback)(e=>{$(e);try{localStorage.setItem(m,e)}catch{}document.documentElement.dataset.darkIntensity=e},[]),P=(0,t.useCallback)(()=>{let e=w("settings.resetConfirm");if(window.confirm(e)){for(let e of["site-theme",h,u,m,"music-player-closed"])try{localStorage.removeItem(e)}catch{}try{let e=[];for(let r=0;r<localStorage.length;r++){let t=localStorage.key(r);t&&(t.startsWith("star-state:")||t.startsWith("project-stats:")||t.startsWith("blog-stats:"))&&e.push(t)}e.forEach(e=>localStorage.removeItem(e))}catch{}l(!1),k.refresh()}},[w,l,k]),A=[{value:"auto",icon:(0,r.jsx)(c.ThemeSystemIcon,{size:16}),label:w("settings.auto")},{value:"light",icon:(0,r.jsx)(c.SunIcon,{size:16}),label:w("settings.light")},{value:"dark",icon:(0,r.jsx)(c.MoonIcon,{size:16}),label:w("settings.dark")}],R=[{value:"light",label:w("settings.darkIntensityLight")},{value:"standard",label:w("settings.darkIntensityStandard")},{value:"dark",label:w("settings.darkIntensityIntense")}],O=[{value:"auto",icon:(0,r.jsx)(c.AutoIcon,{size:16}),label:w("settings.auto")},{value:"tr",icon:(0,r.jsx)(c.FlagTrIcon,{size:16}),label:"Türkçe"},{value:"en",icon:(0,r.jsx)(c.FlagEnIcon,{size:16}),label:"English"}];return(0,r.jsx)(d,{open:i,onClose:()=>l(!1),title:w("settings.title"),side:"right",children:(0,r.jsxs)("div",{className:"flex flex-col gap-5 px-5 pb-8",children:[(0,r.jsx)(b,{title:w("settings.appearance"),icon:(0,r.jsx)(c.CogIcon,{size:16}),children:(0,r.jsx)(x,{options:A,value:s,onChange:e=>v(e)})}),(0,r.jsx)(b,{title:w("settings.language"),icon:(0,r.jsx)(c.GlobeIcon,{size:16}),children:(0,r.jsx)(x,{options:O,value:j,onChange:e=>y(e)})}),(0,r.jsx)(b,{title:w("settings.darkIntensity"),icon:(0,r.jsx)(c.MoonIcon,{size:16}),children:(0,r.jsx)(x,{options:R,value:E,onChange:e=>T(e)})}),(0,r.jsx)(b,{title:w("settings.motion"),icon:(0,r.jsx)(c.RefreshCwIcon,{size:16}),children:(0,r.jsx)(f,{checked:N,onChange:I,label:w("settings.reduceMotion")})}),(0,r.jsx)(b,{title:w("settings.music"),icon:(0,r.jsx)(c.VolumeIcon,{size:16}),children:(0,r.jsx)(f,{checked:C,onChange:L,label:w("settings.musicEnabled")})}),(0,r.jsxs)("button",{type:"button",onClick:P,className:"mt-2 flex items-center justify-center gap-2 rounded-lg border border-foreground/10 px-3 py-2 text-sm text-foreground/70 transition-colors hover:border-danger/40 hover:bg-danger/10 hover:text-danger",children:[(0,r.jsx)(c.RotateCcwIcon,{size:14}),w("settings.reset")]})]})})}function b({title:e,icon:t,children:o}){return(0,r.jsxs)("div",{className:"flex flex-col gap-2.5",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground/60",children:[t,e]}),(0,r.jsx)("div",{className:"flex flex-col gap-1.5",children:o})]})}function x({options:e,value:t,onChange:o}){return(0,r.jsx)("div",{className:"grid grid-cols-3 gap-1.5",children:e.map(e=>{let n=e.value===t;return(0,r.jsxs)("button",{type:"button",onClick:()=>o(e.value),className:(0,i.cn)("flex items-center justify-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors",n?"border-primary/50 bg-primary/15 text-foreground":"border-foreground/10 text-foreground/70 hover:bg-foreground/5"),children:[e.icon,e.label]},e.value)})})}function f({checked:e,onChange:t,label:o}){return(0,r.jsxs)("button",{type:"button",onClick:()=>t(!e),"aria-pressed":e,className:"flex items-center justify-between rounded-lg border border-foreground/10 px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-foreground/5",children:[(0,r.jsx)("span",{children:o}),(0,r.jsx)("span",{className:(0,i.cn)("relative h-5 w-9 shrink-0 rounded-full transition-colors",e?"bg-primary":"bg-foreground/20"),children:(0,r.jsx)("span",{className:(0,i.cn)("absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200",e&&"translate-x-4")})})]})}e.s(["Navigation",0,function({content:e}){let[o,n]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{let e=()=>n(!0);return window.addEventListener("settings:open",e),()=>window.removeEventListener("settings:open",e)},[]),(0,r.jsx)(p,{githubUsername:e.settings.githubUsername,open:o,onOpenChange:n})}],73477)},89299,e=>{"use strict";var r=e.i(43476),t=e.i(71645),o=e.i(24877),n=e.i(32181),a=e.i(74080),i=e.i(15288),l=e.i(67062),s=e.i(14984),c=e.i(9611),d=e.i(68887);function u(){if("u"<typeof navigator)return"windows";let e=navigator.userAgent;return/Windows/i.test(e)?"windows":/Android/i.test(e)?"android":/iPhone|iPad|iPod/i.test(e)?"ios":/Mac/i.test(e)?"macos":/Linux/i.test(e)?"linux":"windows"}let h={windows:"Windows",macos:"macOS",linux:"Linux",android:"Android",ios:"iOS"},m=["windows","linux","macos","ios","android"];function g({options:e,currentUrl:i,onSelect:c,anchorRef:d}){let{t:p}=(0,o.useT)(),[b,x]=(0,t.useState)(""),f=(0,t.useRef)(null),[v,w]=(0,t.useState)(null);(0,t.useEffect)(()=>{f.current?.focus()},[]),(0,t.useLayoutEffect)(()=>{let e=()=>{let e=d.current;if(!e)return;let r=e.getBoundingClientRect(),t=window.innerWidth,o=window.innerHeight,n=t-r.right,a=r.left,i=Math.min(r.bottom+8,Math.max(8,o-320));n>=296?w({top:i,left:r.right+8}):a>=296?w({top:i,right:t-r.left+8}):w({top:i,left:Math.max(8,Math.min(r.right+8,t-288-8))})};return e(),window.addEventListener("resize",e),window.addEventListener("scroll",e,!0),()=>{window.removeEventListener("resize",e),window.removeEventListener("scroll",e,!0)}},[d]);let j=(0,t.useMemo)(()=>{let e=u();return[e,...m.filter(r=>r!==e)]},[]),y=(0,t.useMemo)(()=>{let r=new Map,t=[],o=!1;for(let n of e){if(!n.os){t.push(n);continue}o=!0;let e=r.get(n.os)??[];e.push(n),r.set(n.os,e)}let n=[];for(let e of j){let t=r.get(e)?.[0];t&&n.push(t)}return{byOS:r,latest:n,hasOS:o,other:t}},[e,j]),k=e=>!b.trim()||e.label.toLowerCase().includes(b.trim().toLowerCase()),N=e=>{let t=e.url===i;return(0,r.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",onClick:()=>c(e.url),className:(0,l.cn)("mx-1.5 my-0.5 flex items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-sm transition-colors",t?"bg-primary/15 font-medium text-primary":"text-white/75 hover:bg-white/[0.06] hover:text-white"),children:[(0,r.jsx)("span",{className:"truncate",children:e.label}),t&&(0,r.jsx)(s.CheckIcon,{size:14,className:"shrink-0 text-primary"})]},e.url)},S=({children:e})=>(0,r.jsx)("div",{className:"sticky top-0 z-[1] border-b border-white/5 bg-[#0d0d12]/95 px-3 pb-1.5 pt-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/40 backdrop-blur",children:e}),C=e.filter(k),z=y.hasOS,E=y.latest.filter(k),$=z?E.length+j.reduce((e,r)=>e+(y.byOS.get(r)?.filter(k).length??0),0)+y.other.filter(k).length:C.length;return(0,a.createPortal)((0,r.jsxs)(n.motion.div,{initial:{opacity:0,y:-6,scale:.98},animate:{opacity:1,y:0,scale:1},transition:{duration:.12,ease:"easeOut"},style:v??void 0,className:"fixed z-[1000] w-72 max-w-[calc(100vw-1rem)] overflow-hidden rounded-xl border border-white/10 bg-[#0d0d12]/95 shadow-2xl shadow-black/40 backdrop-blur-xl",children:[(0,r.jsx)("div",{className:"border-b border-white/5 p-2",children:(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(s.SearchIcon,{size:14,className:"pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-white/40"}),(0,r.jsx)("input",{ref:f,type:"text",value:b,onChange:e=>x(e.target.value),placeholder:p("projects.searchVersion"),className:"h-8 w-full rounded-lg border border-white/10 bg-white/5 pl-7 pr-2 text-xs text-white outline-none placeholder:text-white/35 focus:border-white/25 focus:ring-0 focus-visible:ring-0"})]})}),(0,r.jsx)("div",{className:"max-h-64 overscroll-contain overflow-y-auto py-1.5 [scrollbar-color:rgba(255,255,255,0.18)_transparent] [scrollbar-width:thin]",children:0===$?(0,r.jsx)("p",{className:"px-3 py-3 text-center text-xs text-foreground-500",children:p("projects.noResultsShort")}):z?(0,r.jsxs)(r.Fragment,{children:[E.length>0&&(0,r.jsxs)("div",{children:[(0,r.jsx)(S,{children:p("projects.latest")}),E.map(N)]}),j.map(e=>{let t=y.byOS.get(e)?.filter(k)??[];return 0===t.length?null:(0,r.jsxs)("div",{children:[(0,r.jsx)(S,{children:h[e]}),t.map(N)]},e)}),y.other.length>0&&(0,r.jsxs)("div",{children:[(0,r.jsx)(S,{children:p("projects.other")}),y.other.filter(k).map(N)]})]}):C.map(N)})]}),"u">typeof document?document.body:null)}let p=/\.(mp4|webm|ogg|ogv)(\?|#|$)/i;function b({project:e,isGithub:n}){let{t:i}=(0,o.useT)(),l=(0,t.useMemo)(()=>{let r=(e.media??[]).filter(e=>e.trim());return r.length>0?r:e.image?[e.image]:[]},[e]),c=l.length,[d,u]=(0,t.useState)(0),[h,m]=(0,t.useState)(!1);if((0,t.useEffect)(()=>{d>=c&&u(Math.max(0,c-1))},[d,c]),(0,t.useEffect)(()=>{if(!h)return;let e=e=>{"Escape"===e.key&&m(!1)};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[h]),0===c)return(0,r.jsxs)("div",{className:"flex aspect-video w-full items-center justify-center rounded-lg bg-white/5 ring-1 ring-foreground-200/10",children:[n?(0,r.jsx)(s.GithubIcon,{size:44,className:"text-primary"}):(0,r.jsx)("img",{src:"/tarnak-white.svg",alt:"TARNAK",className:"hidden h-16 w-16 object-contain p-1 dark:block"}),!n&&(0,r.jsx)("img",{src:"/tarnak.svg",alt:"TARNAK",className:"block h-16 w-16 object-contain p-1 dark:hidden"})]});let g=l[Math.min(d,Math.max(0,c-1))],x=p.test(g),f=c>1,v=()=>u(e=>(e-1+c)%c),w=()=>u(e=>(e+1)%c);return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"relative aspect-video w-full overflow-hidden rounded-lg bg-white/5 ring-1 ring-foreground-200/10 transition-colors group-hover:ring-primary/30",onClick:()=>{x||m(!0)},children:x?(0,r.jsx)("video",{src:g,controls:!0,playsInline:!0,preload:"auto",onClick:e=>{let r=e.currentTarget;r.paused?r.play()?.catch(()=>{}):r.pause()},className:"h-full w-full object-contain"},g):(0,r.jsx)("img",{src:g,alt:e.title,title:i("projects.zoom"),onClick:()=>m(!0),className:"h-full w-full cursor-zoom-in object-contain"},g)}),(0,r.jsxs)("div",{className:"mt-2 flex items-center gap-1",children:[f&&(0,r.jsxs)("button",{type:"button",onClick:v,"aria-label":i("projects.prev"),className:"flex h-7 items-center gap-1 rounded-full px-2 text-[11px] font-medium text-foreground/70 transition-colors hover:bg-foreground/10 hover:text-foreground",children:[(0,r.jsx)(s.ChevronRightIcon,{size:13,className:"rotate-180"}),i("projects.prev")]}),(0,r.jsxs)("span",{className:"px-1.5 text-xs text-foreground/60",children:[d+1,"/",c]}),f&&(0,r.jsxs)("button",{type:"button",onClick:w,"aria-label":i("projects.next"),className:"flex h-7 items-center gap-1 rounded-full px-2 text-[11px] font-medium text-foreground/70 transition-colors hover:bg-foreground/10 hover:text-foreground",children:[i("projects.next"),(0,r.jsx)(s.ChevronRightIcon,{size:13})]}),(0,r.jsx)("div",{className:"flex-1"}),(0,r.jsxs)("button",{type:"button",onClick:()=>m(!0),"aria-label":i("projects.zoom"),className:"flex h-7 items-center gap-1 rounded-full px-2 text-[11px] font-medium text-foreground/70 transition-colors hover:bg-foreground/10 hover:text-foreground",children:[(0,r.jsx)(s.MaximizeIcon,{size:13}),i("projects.zoom")]})]}),h&&(0,a.createPortal)((0,r.jsxs)("div",{className:"fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm",onClick:()=>m(!1),children:[(0,r.jsx)("button",{type:"button",onClick:()=>m(!1),"aria-label":i("projects.zoomClose"),className:"absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20",children:(0,r.jsx)(s.CloseIcon,{size:20})}),f&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{type:"button",onClick:e=>{e.stopPropagation(),v()},"aria-label":i("projects.prev"),className:"absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25",children:(0,r.jsx)(s.ChevronRightIcon,{size:22,className:"rotate-180"})}),(0,r.jsx)("button",{type:"button",onClick:e=>{e.stopPropagation(),w()},"aria-label":i("projects.next"),className:"absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25",children:(0,r.jsx)(s.ChevronRightIcon,{size:22})})]}),(0,r.jsx)("div",{className:"max-h-[90vh] max-w-[90vw]",onClick:e=>e.stopPropagation(),children:x?(0,r.jsx)("video",{src:g,controls:!0,autoPlay:!0,playsInline:!0,className:"max-h-[90vh] max-w-[90vw] object-contain"}):(0,r.jsx)("img",{src:g,alt:e.title,className:"max-h-[90vh] max-w-[90vw] object-contain"})})]}),document.body)]})}function x({project:e}){let n=e.projectLink.startsWith("/github/")||!!e.srcLink,a=!e.projectLink.startsWith("/"),{views:l,downloads:m,recordView:p,trackDownload:f}=function(e){let[r,o]=(0,t.useState)(0),[n,a]=(0,t.useState)(0);return(0,t.useEffect)(()=>{let r=(0,d.readProjectStats)(e);o(r.views),a(r.downloads)},[e]),{views:r,downloads:n,recordView:()=>{o((0,d.recordProjectView)(e))},trackDownload:()=>{a((0,d.recordDownload)(e))}}}(e.title),{t:v}=(0,o.useT)(),w=e.tags??[],[j,y]=(0,t.useState)(null),[k,N]=(0,t.useState)(!1),S=(0,t.useRef)(null),C=(0,t.useRef)(null);(0,t.useEffect)(()=>{if(!k)return;let e=e=>{S.current&&!S.current.contains(e.target)&&N(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[k]);let z=(0,t.useMemo)(()=>{let r=[];if("per-os"===e.downloadMode&&e.downloads)for(let[t,o]of Object.entries(e.downloads))o&&t in h&&r.push({label:h[t],url:o,os:t});else e.downloadUrl&&r.push({label:v("projects.download"),url:e.downloadUrl});return e.srcLink&&r.push({label:"ZIP",url:`${e.srcLink}/archive/refs/heads/main.zip`}),r},[e,v]);(0,t.useEffect)(()=>{y(z.find(e=>e.os===u())??null)},[z]);let E=j?.url??z[0]?.url??null,$=j?.label??z[0]?.label??v("projects.download");return(0,r.jsx)(i.Card,{className:"group h-full overflow-visible rounded-2xl border-foreground-200/10 bg-background transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5",children:(0,r.jsxs)(i.CardBody,{className:"flex flex-col gap-3 rounded-2xl p-3 sm:p-4",children:[(0,r.jsx)(b,{project:e,isGithub:n}),(0,r.jsxs)("div",{className:"flex min-w-0 flex-1 flex-col gap-2",children:[(0,r.jsxs)("div",{className:"flex flex-row items-start justify-between gap-2",children:[(0,r.jsx)("a",{href:e.projectLink,target:a?"_blank":void 0,rel:a?"noopener noreferrer":void 0,onClick:()=>p(),title:a?v("projects.view"):v("projects.open"),className:"min-w-0 break-words text-base font-semibold text-foreground no-underline transition-colors duration-300 group-hover:text-primary hover:text-primary sm:text-lg",children:e.title}),e.notice&&(0,r.jsx)("span",{className:"shrink-0 rounded-full bg-primary/15 px-2.5 py-0.5 text-[10px] font-bold text-primary",children:e.notice.replace(/[[\]]/g,"")})]}),(0,r.jsx)("a",{href:e.srcLink||e.projectLink,target:a?"_blank":void 0,rel:a?"noopener noreferrer":void 0,onClick:()=>p(),title:v("projects.showcase"),className:"line-clamp-3 min-h-[3.5em] text-sm text-foreground-500 no-underline transition-colors duration-300 hover:text-foreground/80",children:e.description}),w.length>0&&(0,r.jsx)("div",{className:"flex flex-wrap gap-1",children:w.slice(0,4).map(e=>(0,r.jsxs)("span",{className:"rounded-full bg-foreground-200/10 px-2 py-0.5 text-[10px] font-medium text-foreground-600",children:["#",e]},e))}),(0,r.jsxs)("div",{className:"mt-auto flex flex-row flex-wrap items-center gap-1.5 text-[11px] text-foreground/75",children:[n?(0,r.jsxs)("a",{href:`${e.srcLink??""}/stargazers`,target:"_blank",rel:"noopener noreferrer",title:"GitHub stars",className:"inline-flex items-center gap-1 rounded-full border border-foreground-200/15 bg-background px-1.5 py-0.5 text-foreground/80 transition-colors hover:border-yellow-400/50 hover:text-yellow-400",children:[(0,r.jsx)(s.StarOutlineIcon,{size:12}),e.stars??0]}):(0,r.jsx)(c.StarRating,{itemId:e.title,itemType:"project",size:14}),n&&(0,r.jsxs)("a",{href:`${e.srcLink??""}/forks`,target:"_blank",rel:"noopener noreferrer",title:v("projects.forkCount"),className:"inline-flex items-center gap-1 rounded-full border border-foreground-200/15 bg-background px-1.5 py-0.5 text-foreground/80 transition-colors hover:border-primary/50 hover:text-primary",children:[(0,r.jsx)(s.ForkIcon,{size:12}),e.forks??0]}),(0,r.jsxs)("span",{className:"inline-flex items-center gap-1 rounded-full border border-foreground-200/15 bg-background px-1.5 py-0.5 text-foreground/80",title:v("projects.downloadsTitle"),children:[(0,r.jsx)(s.DownloadIcon,{size:12}),m]}),(0,r.jsxs)("span",{className:"inline-flex items-center gap-1 rounded-full border border-foreground-200/15 bg-background px-1.5 py-0.5 text-foreground/80",title:v("projects.viewsTitle"),children:[(0,r.jsx)(s.EyeIcon,{size:12}),l]})]}),(0,r.jsxs)("div",{className:"flex w-full flex-wrap items-stretch gap-1.5",children:[(0,r.jsxs)("a",{href:e.projectLink,target:a?"_blank":void 0,rel:a?"noopener noreferrer":void 0,onClick:()=>{p()},className:"inline-flex h-9 min-w-[7.5rem] flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-[#e5e7eb] px-2 text-sm font-medium text-black no-underline transition-colors hover:bg-[#d1d5db] hover:text-black",children:[a?v("projects.view"):v("projects.open"),(0,r.jsx)(s.ArrowUpRightIcon,{size:14,className:"shrink-0 text-black"})]}),z.length>0&&(0,r.jsxs)("div",{className:"relative shrink-0 self-center",ref:S,children:[(0,r.jsxs)("div",{className:"flex h-9 items-stretch overflow-hidden rounded-lg bg-[#e5e7eb] transition-colors hover:bg-[#d1d5db]",children:[(0,r.jsx)("a",{href:E??"#",onClick:()=>f(),title:$,className:"inline-flex h-9 w-9 items-center justify-center text-black no-underline transition-colors hover:text-black",children:(0,r.jsx)(s.DownloadIcon,{size:15})}),(0,r.jsx)("button",{type:"button",ref:C,onClick:()=>N(e=>!e),"aria-label":v("projects.selectVersion"),title:v("projects.selectVersion"),className:"inline-flex h-9 w-7 items-center justify-center border-l border-black/10 text-black transition-colors hover:bg-black/5",children:(0,r.jsx)(s.ChevronDownIcon,{size:13})})]}),k&&(0,r.jsx)(g,{options:z,currentUrl:E,anchorRef:C,onSelect:e=>{N(!1);let r=z.find(r=>r.url===e)??null;r&&y(r),f()}})]}),n&&(0,r.jsx)("a",{href:e.srcLink,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",title:v("projects.openGithub"),onClick:()=>p(),className:"inline-flex h-9 w-9 shrink-0 items-center justify-center self-center rounded-lg bg-[#e5e7eb] text-black no-underline transition-colors hover:bg-[#d1d5db] hover:text-black",children:(0,r.jsx)(s.GithubIcon,{size:15})})]})]})]})})}var f=e.i(19455),v=e.i(55764),w=e.i(40704),j=e.i(37572);let y={newest:"projects.sortNewest",oldest:"projects.sortOldest",views:"projects.sortViews",downloads:"projects.sortDownloads",stars:"projects.sortStars",forks:"projects.sortForks",rating:"projects.sortRating",az:"projects.sortAz",za:"projects.sortZa"},k={OfficeSetupWizard:{downloadMode:"per-os",downloads:{windows:"https://github.com/TARIKELER-TARNAK/OfficeSetupWizard/releases/download/v1.0.0/OfficeSetupWizard.exe"}}},N={Accentra:"Accentra - Ferdium kod tabanı üzerine inşa edilmiş çalışma alanı işletim sistemi.","codehub-vsc":"VS Code için Terminal & AI kodlama ajan yöneticisi - tüm ajanlarınız, oturumlarınız ve projeleriniz için tek panel.","TarnakLua-Roblox":"Roblox için Lua araçları ve scriptleri.","Scribd-Download":"Scribd belge indirici tarayıcı eklentisi - yüksek kaliteli PDF dışa aktarımı.","TARIKELER-TARNAK":"GitHub profil README'si.","TARIKELER-TARNAK.github.io":"Kişisel portfolyo web sitesi.","AI-Jailbreak":"AI model güvenlik sınır testleri için prompt koleksiyonu.",OfficeSetupWizard:"Tek tıkla Microsoft Office LTSC Professional Plus 2024 kurulum ve aktivasyonu (Office Deployment Tool sarmalayıcısı).",Player:"Müzik, video, ses, eklenti ve AI entegrasyonlu modern, çok platformlu medya oynatıcısı."};e.s(["ProjectsGrid",0,function({projects:e,showSearch:n=!0,githubUsername:a,actions:i}){let[l,c]=(0,t.useState)(""),[d,u]=(0,t.useState)([]),[h,m]=(0,t.useState)("newest"),[g,p]=(0,t.useState)(9),b=function(){let[e,r]=(0,t.useState)(3);return(0,t.useEffect)(()=>{if(!window.matchMedia)return;let e=window.matchMedia("(min-width: 1024px)"),t=window.matchMedia("(min-width: 640px)"),o=()=>r(e.matches?3:t.matches?2:1);return o(),e.addEventListener("change",o),t.addEventListener("change",o),()=>{e.removeEventListener("change",o),t.removeEventListener("change",o)}},[]),e}(),[S,C]=(0,t.useState)({}),[z,E]=(0,t.useState)(null),[$,I]=(0,t.useState)(""),{t:L}=(0,o.useT)(),{locale:T}=(0,o.useLocale)(),P="en"===T,A=(0,t.useCallback)(async()=>{if(!a)return void E(e);I(""),E(null);try{let r=await (0,j.clientFetchUserRepos)(a),t=new Set(e.map(e=>e.title.toLowerCase())),o=[...r.map(e=>{var r;return r=!P,{title:e.name,description:r?N[e.name]??e.description??"":e.description??"",projectLink:`/github/${e.fullName}`,image:"",srcLink:e.url,stars:e.stars,forks:e.forks,watchers:e.watchers,updatedAt:e.updatedAt,tags:e.topics??[],...k[e.name]??{}}})].filter(e=>!t.has(e.title.toLowerCase()));o.unshift(...e),E(o)}catch{I(L("github.loadErrorSection")),E(e)}},[a,e]);(0,t.useEffect)(()=>{A()},[A]),(0,t.useEffect)(()=>{fetch("/api/stars?itemType=project&list=1").then(e=>e.ok?e.json():null).then(e=>{if(!e?.items)return;let r={};e.items.forEach(e=>{r[e.itemId]={average:e.average,count:e.count}}),C(r)}).catch(()=>{})},[]);let R=(0,t.useMemo)(()=>{let r=new Set;return e.forEach(e=>e.tags?.forEach(e=>r.add(e))),z&&z.forEach(e=>e.tags?.forEach(e=>r.add(e))),Array.from(r).sort()},[e,z]),O=z??e,M=(0,t.useMemo)(()=>{let e=l.trim().toLowerCase(),r=O.filter(r=>{let t=!e||r.title.toLowerCase().includes(e)||r.description.toLowerCase().includes(e)||(r.tags??[]).some(r=>r.toLowerCase().includes(e)),o=0===d.length||(r.tags??[]).some(e=>d.includes(e));return t&&o}),t=function(){let e={};try{for(let r=0;r<window.localStorage.length;r++){let t=window.localStorage.key(r);if(t?.startsWith("project-stats:")){let r=t.slice(14),o=JSON.parse(window.localStorage.getItem(t)??"{}");e[r]={views:Number(o.views)||0,downloads:Number(o.downloads)||0}}}}catch{}return e}(),o=[...r],n=e=>{switch(h){case"views":return t[e.title]?.views??0;case"downloads":return t[e.title]?.downloads??0;case"rating":return S[e.title]?.average??0;case"newest":case"oldest":return e.updatedAt?new Date(e.updatedAt).getTime():0;default:return 0;case"stars":return e.stars??0;case"forks":return e.forks??0}};switch(h){case"az":o.sort((e,r)=>e.title.localeCompare(r.title,"tr"));break;case"za":o.sort((e,r)=>r.title.localeCompare(e.title,"tr"));break;case"oldest":o.sort((e,r)=>n(e)-n(r));break;default:o.sort((e,r)=>n(r)-n(e))}return o},[O,l,d,h,S]),D=M.slice(0,g),B=D.length<M.length,H=M.length-D.length;return(0,r.jsxs)("div",{className:"flex w-full max-w-6xl flex-col gap-4",children:[n&&(0,r.jsxs)("div",{className:"flex w-full flex-col gap-3",children:[(0,r.jsx)(v.Input,{value:l,onChange:e=>c(e.target.value),placeholder:L("projects.search"),"aria-label":L("projects.search"),className:"h-11 w-full",startContent:(0,r.jsx)(s.SearchIcon,{size:16})}),(0,r.jsxs)("div",{className:"flex w-full flex-row flex-wrap items-center gap-2",children:[(0,r.jsx)(w.SearchableCombobox,{options:Object.keys(y).map(e=>({value:e,label:L(y[e])})),selected:[h],onSelect:e=>m(e),onClear:()=>m("newest"),placeholder:L("projects.sort"),searchPlaceholder:L("projects.searchSort"),ariaLabel:L("projects.sort")}),R.length>0&&(0,r.jsx)(w.SearchableCombobox,{multiple:!0,options:R.map(e=>({value:e,label:`#${e}`})),selected:d,onSelect:e=>u(r=>r.includes(e)?r.filter(r=>r!==e):[...r,e]),onClear:()=>u([]),placeholder:L("projects.allTags"),searchPlaceholder:L("projects.searchTag"),ariaLabel:L("projects.allTags"),showAllOption:!0,allLabel:L("combobox.all"),badge:d.length}),(0,r.jsxs)("span",{className:"ml-auto text-sm font-medium text-foreground/70",children:[M.length," ",L("projects.found")]})]}),d.length>0&&(0,r.jsx)("div",{className:"flex flex-row flex-wrap items-center gap-1.5",children:d.map(e=>(0,r.jsxs)("span",{className:"inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary",children:["#",e,(0,r.jsx)("button",{type:"button",onClick:()=>u(r=>r.filter(r=>r!==e)),"aria-label":`${L("projects.removeTag")} ${e}`,className:"-mr-1 grid h-4 w-4 cursor-pointer place-items-center rounded-full transition-colors hover:bg-primary/20",children:(0,r.jsx)(s.CloseIcon,{size:11})})]},e))})]}),$&&(0,r.jsx)("p",{className:"text-center text-danger text-sm",children:$}),0===M.length?(0,r.jsx)("p",{className:"text-foreground-500 py-10 text-center",children:L("projects.empty")}):(0,r.jsx)("div",{className:"grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6",children:D.map(e=>(0,r.jsx)(x,{project:e},e.title))}),B&&(0,r.jsx)("div",{className:"flex flex-col items-center justify-center gap-3 pt-6 sm:flex-row",children:(0,r.jsxs)(f.Button,{variant:"solid",color:"primary",onPress:()=>p(e=>Math.min(e+b,M.length)),endContent:(0,r.jsx)(s.ChevronDownIcon,{size:18}),children:[L("projects.showMore")," ","(",H,")"]})}),i]})}],89299)},63394,e=>{"use strict";var r=e.i(71645);let t="last-list-path";e.s(["RememberListPath",0,function({path:e}){let{set:o}=function(){let[e,o]=(0,r.useState)(null);return(0,r.useEffect)(()=>{try{o(sessionStorage.getItem(t))}catch{o(null)}},[]),{previous:e,set:e=>{try{sessionStorage.setItem(t,e)}catch{}o(e)}}}();return(0,r.useEffect)(()=>{o(e)},[e,o]),null}],63394)},19455,25913,60339,e=>{"use strict";var r=e.i(43476),t=e.i(55747),o=e.i(71645);let n=(0,o.createContext)({});(0,o.memo)(({children:e,config:t={}})=>(0,r.jsx)(n,{value:t,children:e}));var a=e.i(42919),i=e.i(37582),l=e.i(84283),s=e.i(7670);let c=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,d=s.clsx,u=(e,r)=>t=>{var o;if((null==r?void 0:r.variants)==null)return d(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:n,defaultVariants:a}=r,i=Object.keys(n).map(e=>{let r=null==t?void 0:t[e],o=null==a?void 0:a[e];if(null===r)return null;let i=c(r)||c(o);return n[e][i]}),l=t&&Object.entries(t).reduce((e,r)=>{let[t,o]=r;return void 0===o||(e[t]=o),e},{});return d(e,i,null==r||null==(o=r.compoundVariants)?void 0:o.reduce((e,r)=>{let{class:t,className:o,...n}=r;return Object.entries(n).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...a,...l}[r]):({...a,...l})[r]===t})?[...e,t,o]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)};e.s(["cva",0,u],25913);let h=l.keyframes`
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
`,m=u("anticon",{defaultVariants:{spin:!1},variants:{spin:{false:null,true:(0,l.createStaticStyles)(({css:e})=>({spin:e`
      animation: ${h} 1s linear infinite;
    `})).spin}}}),g=(0,o.memo)(({icon:e,size:t,color:s,fill:c="transparent",className:d,focusable:u,spin:h,fillRule:g,fillOpacity:p,ref:b,...x})=>{let{color:f,fill:v,fillOpacity:w,fillRule:j,focusable:y,className:k,size:N,...S}=(0,o.use)(n),{size:C,strokeWidth:z}=(0,o.useMemo)(()=>(e=>{let r,t;if("number"==typeof e||(0,i.isObjectLike)(e)&&"[object Number]"===(0,a.getTag)(e))return{size:e};switch(e){case"large":r=24,t=2;break;case"middle":r=20,t=2;break;case"small":r=14,t=2;break;default:e?(r=e?.size||24,t=e?.strokeWidth||2):(r="1em",t=2)}return{size:r,strokeWidth:t}})(t||N),[t,N]);return(0,r.jsx)("span",{className:(0,l.cx)(m({spin:h}),k,d),role:"img",...S,...x,children:e&&((0,o.isValidElement)(e)?e:(0,r.jsx)(e,{color:s||f,fill:c||v,fillOpacity:p||w,fillRule:g||j,focusable:u||y,height:C,ref:b,size:C,strokeWidth:z,width:C}))})});g.displayName="Icon";let p={large:40,middle:32,small:24};e.s(["controlHeight",0,p],60339);let b=(0,l.createStaticStyles)(({css:e,cssVar:r})=>({base:e`
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
  `})),x={scale:.98},f={damping:26,mass:.6,stiffness:600,type:"spring"},v=({block:e,children:n,className:a,classNames:i,danger:s=!1,disabled:c,ghost:d=!1,href:u,htmlType:h="button",icon:m,iconPosition:p="start",loading:v,onClick:w,ref:j,shape:y="default",size:k="middle",styles:N,target:S,type:C="default",...z})=>{let E=(0,t.useMotionComponent)(),$=c||v,I="small"===k?b.sizeSmall:"large"===k?b.sizeLarge:b.sizeMiddle,L=(({danger:e,ghost:r,type:t})=>{if(r)return e?b.ghostDanger:"primary"===t?b.ghostPrimary:"dashed"===t?(0,l.cx)(b.ghostDefault,b.ghostDashed):b.ghostDefault;switch(t){case"primary":return e?b.dangerSolid:b.variantPrimary;case"dashed":return e?(0,l.cx)(b.variantDashed,b.dangerOutlined):b.variantDashed;case"fill":return e?b.dangerFill:b.variantFill;case"text":return e?(0,l.cx)(b.variantText,b.dangerInline):b.variantText;case"link":return e?(0,l.cx)(b.variantLink,b.dangerInline):b.variantLink;default:return e?(0,l.cx)(b.variantDefault,b.dangerOutlined):b.variantDefault}})({danger:s,ghost:d,type:C}),T="circle"===y?b.shapeCircle:"round"===y?b.shapeRound:void 0,P=(null==n||!1===n||""===n)&&(v||m)?"small"===k?b.iconOnlySmall:"large"===k?b.iconOnlyLarge:b.iconOnlyMiddle:void 0,A=(0,l.cx)(b.base,I,L,T,e&&b.block,"end"===p&&b.iconEnd,P,a),R=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{"aria-hidden":!v,style:N?.icon,className:(0,l.cx)(b.iconBox,b.spinnerSlot,v&&b.spinnerSlotShow,"end"===p&&b.spinnerSlotEnd,i?.icon),children:(0,r.jsx)("span",{className:b.spinner})}),m&&!v?(0,r.jsx)("span",{className:(0,l.cx)(b.iconBox,i?.icon),style:N?.icon,children:null==m?null:(0,o.isValidElement)(m)||"string"==typeof m||"number"==typeof m?m:(0,r.jsx)(g,{icon:m,size:"small"})}):null,n]}),O=$?{}:{transition:f,whileTap:x};return void 0!==u?(0,r.jsx)(E.a,{"aria-busy":v||void 0,"aria-disabled":$||void 0,href:c?void 0:u,target:S,...z,className:A,ref:j,onClick:e=>{$?e.preventDefault():w?.(e)},...O,children:R}):(0,r.jsx)(E.button,{type:h,...z,"aria-busy":v||void 0,"aria-disabled":$||void 0,className:A,disabled:c,ref:j,onClick:e=>{$?e.preventDefault():w?.(e)},...O,children:R})};v.displayName="BaseButton",e.s(["Button",0,function({children:e,color:t="default",variant:o="solid",size:n="md",isIconOnly:a,isLoading:i,isDisabled:l,startContent:s,endContent:c,onPress:d,onClick:u,type:h="button",href:m,target:g,rel:p,className:b,block:x,"aria-label":f,as:w,...j}){let y="default";return"light"===o?y="text":"faded"===o?y="fill":"primary"===t&&(y="primary"),(0,r.jsx)(v,{...j,type:y,danger:"danger"===t,ghost:"bordered"===o||"ghost"===o,size:"lg"===n?"large":"sm"===n?"small":"middle",shape:a?"circle":void 0,loading:i,disabled:l,htmlType:h,href:m,target:g,rel:p,className:["solid"===o&&"primary"===t?"!bg-[#e5e7eb] !text-[#000] !opacity-100 hover:!bg-[#d1d5db]":"","bordered"===o||"ghost"===o?"primary"===t?"!text-primary !border-primary/40 hover:!bg-primary/10":"!text-foreground !border-foreground/30 hover:!bg-foreground/5":"",b].filter(Boolean).join(" "),block:x,"aria-label":f,onClick:e=>{u?.(e),d?.()},iconPosition:c?"end":"start",icon:s||c||void 0,children:e})}],19455)},15288,e=>{"use strict";var r=e.i(43476),t=e.i(67062);e.s(["Card",0,function({children:e,className:o}){return(0,r.jsx)("div",{className:(0,t.cn)("flex flex-col relative overflow-hidden rounded-2xl bg-background",o),children:e})},"CardBody",0,function({children:e,className:o}){return(0,r.jsx)("div",{className:(0,t.cn)("relative flex flex-1 w-full p-3 flex-col h-auto break-words text-left",o),children:e})},"CardFooter",0,function({children:e,className:o}){return(0,r.jsx)("div",{className:(0,t.cn)("p-3 h-auto flex w-full items-center",o),children:e})}])},68887,e=>{"use strict";let r=e=>`project-stats:${e}`,t=e=>`project-viewed:${e}`;function o(e){if("u"<typeof localStorage)return{views:0,downloads:0};try{let t=localStorage.getItem(r(e)),o=t?JSON.parse(t):{};return{views:"number"==typeof o.views?o.views:0,downloads:"number"==typeof o.downloads?o.downloads:0}}catch{return{views:0,downloads:0}}}e.s(["readProjectStats",0,o,"recordDownload",0,function(e){try{let t=o(e),n={...t,downloads:t.downloads+1};return localStorage.setItem(r(e),JSON.stringify(n)),n.downloads}catch{return 0}},"recordProjectView",0,function(e){try{if(localStorage.getItem(t(e)))return o(e).views;let n=o(e),a={...n,views:n.views+1};return localStorage.setItem(r(e),JSON.stringify(a)),localStorage.setItem(t(e),"1"),a.views}catch{return o(e).views}}])}]);