(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},93479,66875,71446,e=>{"use strict";var t=e.i(43476),a=e.i(58125),r=e.i(60339),l=e.i(84283),i=e.i(25913);let n=(0,l.createStaticStyles)(({css:e,cssVar:t})=>({borderless:e`
    border: 1px solid transparent;
    background: none;
  `,filled:e`
    border: 1px solid transparent;
    background: ${t.colorFillTertiary};

    &:hover:not(:focus-within, [data-disabled]) {
      background: ${t.colorFillSecondary};
    }
  `,input:e`
    flex: 1;

    min-width: 0;
    padding: 0;
    border: none;

    font: inherit;
    color: inherit;

    appearance: none;
    background: transparent;
    outline: none;

    &::placeholder {
      color: ${t.colorTextPlaceholder};
    }
  `,invalid:e`
    &:has([data-invalid]) {
      border-color: ${t.colorError};

      &:focus-within {
        border-color: ${t.colorError};
        box-shadow: 0 0 0 2px ${t.colorErrorBg};
      }
    }
  `,outlined:e`
    border: 1px solid ${t.colorBorderSecondary};
    background: ${t.colorBgContainer};

    &:hover:not(:focus-within, [data-disabled]) {
      border-color: ${t.colorBorder};
    }

    &:focus-within {
      border-color: ${t.colorPrimary};
      box-shadow: 0 0 0 2px ${t.colorPrimaryBg};
    }
  `,root:e`
    cursor: text;

    display: inline-flex;
    gap: 8px;
    align-items: center;

    box-sizing: border-box;
    width: 100%;
    padding-inline: 12px;
    border-radius: ${t.borderRadius};

    font-size: 14px;
    color: ${t.colorText};

    transition:
      background 150ms ${t.motionEaseOut},
      border-color 150ms ${t.motionEaseOut},
      box-shadow 150ms ${t.motionEaseOut};

    &[data-disabled],
    &:has(:disabled) {
      cursor: not-allowed;
      color: ${t.colorTextQuaternary};
      opacity: 0.66;
    }
  `,shadow:a.staticStylish.shadow,sizeLarge:e`
    height: ${r.controlHeight.large}px;
    border-radius: ${t.borderRadiusLG};
    font-size: 16px;
  `,sizeMiddle:e`
    height: ${r.controlHeight.middle}px;
  `,sizeSmall:e`
    height: ${r.controlHeight.small}px;
    padding-inline: 8px;
    border-radius: ${t.borderRadiusSM};
    font-size: 12px;
  `,numberControl:e`
    cursor: pointer;

    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    margin: 0;
    padding: 0;
    border: none;

    color: ${t.colorTextTertiary};

    background: none;
    outline: none;

    transition: color 150ms ${t.motionEaseOut};

    &:hover:not(:disabled) {
      color: ${t.colorText};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }
  `,numberControls:e`
    display: flex;
    flex: none;
    flex-direction: column;
    align-self: stretch;

    width: 22px;
    margin-inline-end: -8px;
    border-inline-start: 1px solid ${t.colorBorderSecondary};
  `,numberInput:e`
    font-variant-numeric: tabular-nums;
  `,otpCell:e`
    flex: none;
    width: ${r.controlHeight.middle}px;
    padding-inline: 0;
    text-align: center;
  `,otpRoot:e`
    display: inline-flex;
    gap: 8px;
    align-items: center;
  `,passwordToggle:e`
    cursor: pointer;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    margin: 0;
    padding: 0;
    border: none;

    color: ${t.colorTextTertiary};

    background: none;
    outline: none;

    transition: color 150ms ${t.motionEaseOut};

    &:hover {
      color: ${t.colorText};
    }
  `,slot:e`
    display: inline-flex;
    flex: none;
    align-items: center;
    color: ${t.colorTextTertiary};
  `,textarea:e`
    height: auto;
    padding-block: 8px;

    textarea {
      resize: none;
      min-height: calc(1.5em * var(--textarea-min-rows, 2));
      max-height: var(--textarea-max-height, none);
      line-height: 1.5;
    }
  `,textareaAutoSize:e`
    textarea {
      field-sizing: content;
    }
  `,textareaResize:e`
    textarea {
      resize: vertical;
    }
  `})),s=(0,i.cva)([n.root,n.invalid],{defaultVariants:{shadow:!1,size:"middle",variant:"outlined"},variants:{shadow:{false:null,true:n.shadow},size:{large:n.sizeLarge,middle:n.sizeMiddle,small:n.sizeSmall},variant:{borderless:n.borderless,filled:n.filled,outlined:n.outlined}}});e.s(["rootVariants",()=>s,"styles",()=>n],66875);var o=e.i(71645),d=e.i(39007);e.i(47167),e.s([],66432),e.i(66432);var u=e.i(46376),c=e.i(67865),f=e.i(69690),m=e.i(75812),x=e.i(33332);let p=o.createContext(void 0);var h=e.i(84708),b=e.i(88940),g=e.i(88015),v=e.i(47778);let y=function(e){let a=(0,g.useBaseUiId)(),r=void 0===e.controlId?a:e.controlId,[l,i]=o.useState(r),[n,s]=o.useState(e.labelId),[d,u]=o.useState([]),f=(0,b.useRefWithInit)(()=>new Map),{messageIds:m}=(0,v.useLabelableContext)(),x=(0,c.useStableCallback)((e,t)=>{let a=f.current;void 0===t?a.delete(e):(a.set(e,t),i(e=>{let t;if(0!==a.size){for(let r of a.values()){if(void 0!==e&&r===e)return e;void 0===t&&(t=r)}return t}}))}),p=o.useCallback(e=>{let t=e["aria-describedby"]?e["aria-describedby"].split(" "):[];return t.push(...m,...d),{...e,"aria-describedby":Array.from(new Set(t)).join(" ")||void 0}},[m,d]),h=o.useMemo(()=>({controlId:l,registerControlId:x,labelId:n,setLabelId:s,messageIds:d,setMessageIds:u,getDescriptionProps:p}),[l,x,n,s,d,u,p]);return(0,t.jsx)(v.LabelableContext.Provider,{value:h,children:e.children})};var j=e.i(52245),w=e.i(56789),C=e.i(39957),k=e.i(76782);function N(e,t){return{...e,state:{...e.state,valid:!t&&e.state.valid}}}let S=Object.keys(m.DEFAULT_VALIDITY_STATE);function I(e,t){let a=!1;for(let r of t)r.setCustomValidity(""),a||=r===e;a||e.setCustomValidity("")}let R=o.forwardRef(function(e,a){let{errors:r,validationMode:l,submitAttemptedRef:i}=(0,h.useFormContext)(),{render:n,className:s,validate:d,validationDebounceTime:g=0,validationMode:y=l,name:R,disabled:T=!1,invalid:E,dirty:M,touched:$,actionsRef:A,style:L,...V}=e,z=function(e=!1){let t=o.useContext(p);if(!t&&!e)throw Error((0,x.default)(86));return t}(!0)?.disabled,D=(0,c.useStableCallback)(d||(()=>null)),F=z||T,[O,B]=o.useState(!1),[P,U]=o.useState(!1),[_,K]=o.useState(!1),[H,W]=o.useState(!1),G=M??P,Y=$??O,J=o.useRef(G),q=o.useRef(void 0),[Q,X]=o.useState(),Z=R??Q;(0,u.useIsoLayoutEffect)(()=>{void 0!==M&&(J.current=M)},[M]);let ee=o.useCallback(()=>q.current,[]),et=o.useCallback(e=>{q.current=e},[]),ea=(0,c.useStableCallback)(e=>{void 0===M&&(e&&(J.current=!0),U(e))}),er=(0,c.useStableCallback)(e=>{void 0===$&&B(e)}),el=(0,c.useStableCallback)(()=>"onChange"===y||"onSubmit"===y&&i.current),ei=Z&&Object.hasOwn(r,Z)?r[Z]:null,en=!!(Array.isArray(ei)?ei.length:ei),es=!0===E||en,[eo,ed]=o.useState({state:m.DEFAULT_VALIDITY_STATE,error:"",errors:[],value:null,initialValue:null}),eu=F?null:!es&&eo.state.valid,ec=o.useMemo(()=>({disabled:F,touched:Y,dirty:G,valid:eu,filled:_,focused:H}),[F,Y,G,eu,_,H]),ef=function(e){let{formRef:t}=(0,h.useFormContext)(),{setValidityData:a,validate:r,validityData:l,validationDebounceTime:i,invalid:n,markedDirtyRef:s,state:d,shouldValidateOnChange:u,getRegisteredFieldId:f}=e,{controlId:x,getDescriptionProps:p}=(0,v.useLabelableContext)(),g=(0,C.useTimeout)(),y=o.useRef(null),j=(0,b.useRefWithInit)(()=>new Set).current,R=o.useRef(0),T=o.useCallback(e=>{if(e)return j.add(e),()=>{j.delete(e)}},[j]),E=(0,c.useStableCallback)(async(e,i=!1)=>{let o,c=function(e){let t=null;for(let a of e)if(!a.disabled){if(!a.validity.valid)return a;t??=a}return t}(j)??y.current;if(!c)return;R.current+=1;let p=R.current;function h(e,a=n){let r=f()??x;if(null==r)return;let l=t.current.fields.get(r);if(!l)return;let i=N(e,a);t.current.fields.set(r,{...l,validityData:i})}if(i){if(!1!==d.valid)return;let t=c.validity;if(!t.valueMissing){let t={value:e,state:{...m.DEFAULT_VALIDITY_STATE,valid:!0},error:"",errors:[],initialValue:l.initialValue};I(c,j),h(t,!1),a(t);return}let r=S.reduce((e,a)=>(e[a]=t[a],e),{});if(!r.valid&&!function(e){if(!e||e.valid||!e.valueMissing)return!1;let t=!1;for(let a of S)"valid"!==a&&("valueMissing"===a?t=e[a]:e[a]&&(t=!1));return t}(r))return}g.clear();let b=null,v=[],w=function(e){let t=S.reduce((t,a)=>(t[a]=e.validity[a],t),{}),a=!1;for(let e of S)if("valid"!==e){if("valueMissing"===e&&t[e])a=!0;else if(t[e])return t}return a&&!s.current&&(t.valid=!0,t.valueMissing=!1),t}(c),C=u();if(c.validationMessage&&!C)o=c.validationMessage,v=[c.validationMessage];else{let a=r(e,Array.from(t.current.fields.values()).reduce((e,t)=>(t.name&&(e[t.name]=t.getValue()),e),{}));if("object"==typeof a&&null!==a&&"then"in a){if(b=await a,p!==R.current)return}else b=a;null!==b?(w.valid=!1,w.customError=!0,Array.isArray(b)?(v=b,c.setCustomValidity(b.join("\n"))):b&&(v=[b],c.setCustomValidity(b))):C&&(I(c,j),w.customError=!1,c.validationMessage?(o=c.validationMessage,v=[c.validationMessage]):c.validity.valid&&!w.valid&&(w.valid=!0))}let k={value:e,state:w,error:o??(Array.isArray(b)?b[0]:b??""),errors:v,initialValue:l.initialValue};h(k),a(k)}),M=(0,c.useStableCallback)(e=>{g.clear();let t=u();t&&""!==e&&i?(R.current+=1,g.start(i,()=>{E(e)})):E(e,!t)}),$=o.useCallback((e,t={})=>(0,k.mergeProps)(p(t),!1!==d.valid||d.disabled||e?w.EMPTY_OBJECT:{"aria-invalid":!0}),[p,d.disabled,d.valid]);return o.useMemo(()=>({getValidationProps:$,inputRef:y,registerInput:T,commit:E,change:M}),[$,T,E,M])}({setValidityData:ed,validate:D,validityData:eo,validationDebounceTime:g,invalid:es,markedDirtyRef:J,state:ec,shouldValidateOnChange:el,getRegisteredFieldId:ee}),[em,ex]=function(e){let{commit:t,invalid:a,markedDirtyRef:r,name:l,setRegisteredFieldName:i,setRegisteredFieldId:n,setValidityData:s,validityData:d}=e,{formRef:f}=(0,h.useFormContext)(),m=o.useRef(null),x=o.useRef(null),p=o.useRef(null),b=(0,c.useStableCallback)(()=>{let e=x.current;if(e)return e.getValue?e.getValue():e.value});function g(e){return void 0===e.value?b():e.value}let v=(0,c.useStableCallback)(()=>{let e=x.current;(r.current=!0,e)?t(g(e)):t(d.value)});function y(e=x.current?.id){e&&f.current.fields.delete(e)}(0,u.useIsoLayoutEffect)(()=>{let e=x.current;e&&e.id&&(i(l?void 0:e.name),f.current.fields.set(e.id,{getValue:b,name:l??e.name,controlRef:e.controlRef??p,validityData:N(d,a),validate:v}))},[f,b,a,l,i,v,d]),(0,u.useIsoLayoutEffect)(()=>{let e=f.current.fields;return()=>{let t=x.current?.id;t&&e.delete(t)}},[f]);let j=(0,c.useStableCallback)((e,t)=>{let r;if(!t){m.current===e&&(m.current=null,y(),x.current=null,i(void 0),n(void 0));return}let o=x.current?.id;m.current=e,x.current=t,l||i(t.name),n(t.id),o&&o!==t.id&&y(o),function(){let e=x.current;if(!e)return;let t=g(e);null===d.initialValue&&null!==t&&s(e=>({...e,initialValue:t}))}(),(r=x.current)&&r.id&&f.current.fields.set(r.id,{getValue:b,name:l??r.name,controlRef:r.controlRef??p,validityData:N(d,a),validate:v})});return[v,j]}({commit:ef.commit,invalid:es,markedDirtyRef:J,name:R,setRegisteredFieldName:X,setRegisteredFieldId:et,setValidityData:ed,validityData:eo});o.useImperativeHandle(A,()=>({validate:em}),[em]);let ep=o.useMemo(()=>({invalid:es,name:Z,validityData:eo,setValidityData:ed,disabled:F,touched:Y,setTouched:er,dirty:G,setDirty:ea,filled:_,setFilled:K,focused:H,setFocused:W,validate:D,validationMode:y,validationDebounceTime:g,shouldValidateOnChange:el,state:ec,markedDirtyRef:J,registerFieldControl:ex,validation:ef}),[es,Z,eo,F,Y,er,G,ea,_,K,H,W,D,y,g,el,ec,ex,ef]),eh=(0,j.useRenderElement)("div",e,{ref:a,state:ec,props:V,stateAttributesMapping:m.fieldValidityMapping});return(0,t.jsx)(f.FieldRootContext.Provider,{value:ep,children:eh})}),T=o.forwardRef(function(e,a){return(0,t.jsx)(y,{children:(0,t.jsx)(R,{...e,ref:a})})});var E=e.i(29315),M=e.i(8868),$=e.i(47554);let A=o.createContext({disabled:!1});function L(){return o.useContext(A)}let V=o.forwardRef(function(e,t){let{render:a,className:r,style:l,id:i,nativeLabel:n=!0,...s}=e,d=(0,f.useFieldRootContext)(!1),x=L(),{labelId:p}=(0,v.useLabelableContext)(),h={...d.state,disabled:d.disabled||x.disabled},b=o.useRef(null),y=function(e={}){let t,{id:a,fallbackControlId:r,native:l=!1,setLabelId:i,focusControl:n}=e,{controlId:s,setLabelId:o}=(0,v.useLabelableContext)(),d=(0,c.useStableCallback)(e=>{o(e),i?.(e)}),f=(t=(0,g.useBaseUiId)(a),(0,u.useIsoLayoutEffect)(()=>(d(t),()=>{d(void 0)}),[t,d]),t),m=s??r;function x(e){let t=(0,$.getTarget)(e.nativeEvent);t?.closest("button,input,select,textarea")||(!e.defaultPrevented&&e.detail>1&&e.preventDefault(),l||function(e){if(n)return n(e,m);if(!m)return;let t=(0,M.ownerDocument)(e.currentTarget).getElementById(m);(0,E.isHTMLElement)(t)&&t.focus({focusVisible:!0})}(e))}return l?{id:f,htmlFor:m??void 0,onMouseDown:x}:{id:f,onClick:x,onPointerDown(e){e.preventDefault()}}}({id:p??i,native:n});return(0,j.useRenderElement)("label",e,{ref:[t,b],state:h,props:[y,s],stateAttributesMapping:m.fieldValidityMapping})});var z=e.i(37584),D=e.i(9407),F=e.i(23910);let O={...m.fieldValidityMapping,...D.transitionStatusMapping},B=o.forwardRef(function(e,a){let{render:r,id:l,className:i,match:n,style:s,...d}=e,c=(0,g.useBaseUiId)(l),{validityData:m,state:x,name:p}=(0,f.useFieldRootContext)(!1),{setMessageIds:b}=(0,v.useLabelableContext)(),{errors:y}=(0,h.useFormContext)(),w=p&&Object.hasOwn(y,p)?y[p]:null,C=!!(Array.isArray(w)?w.length:w),k="string"==typeof n,N=!1;N=!0===n||!x.disabled&&(k?!!m.state[n]:C||!1===m.state.valid);let{mounted:S,transitionStatus:I,setMounted:R}=(0,F.useTransitionStatus)(N);(0,u.useIsoLayoutEffect)(()=>{if(N&&c)return b(e=>e.concat(c)),()=>{b(e=>e.filter(e=>e!==c))}},[N,c,b]);let T=o.useRef(null),[E,M]=o.useState(null),[$,A]=o.useState(null),L=m.error;!k&&C?L=w:m.errors.length>1&&(L=m.errors);let V=L??"";Array.isArray(L)&&(V=L.length>1?(0,t.jsx)("ul",{children:L.map(e=>(0,t.jsx)("li",{children:e},e))}):L[0]??"");let D=Array.isArray(L)?JSON.stringify(L):L;N&&D!==$&&(A(D),M(V)),(0,z.useOpenChangeComplete)({open:N,ref:T,onComplete(){N||R(!1)}});let B={...x,transitionStatus:I},P=(0,j.useRenderElement)("div",e,{ref:[a,T],state:B,props:[{id:c,children:N?V:E},d],stateAttributesMapping:O,enabled:S});return S?P:null}),P=o.forwardRef(function(e,t){let{render:a,id:r,className:l,style:i,...n}=e,s=(0,g.useBaseUiId)(r),o=(0,f.useFieldRootContext)(!1),d=L(),{setMessageIds:c}=(0,v.useLabelableContext)(),x={...o.state,disabled:o.disabled||d.disabled};return(0,u.useIsoLayoutEffect)(()=>{if(s)return c(e=>e.concat(s)),()=>{c(e=>e.filter(e=>e!==s))}},[s,c]),(0,j.useRenderElement)("p",e,{ref:t,state:x,props:[{id:s},n],stateAttributesMapping:m.fieldValidityMapping})});var U=e.i(51437),_=e.i(81104),K=e.i(38489),H=e.i(75606),W=e.i(56434);let G=o.forwardRef(function(e,t){let{render:a,className:r,id:l,name:i,value:n,disabled:s=!1,onValueChange:d,defaultValue:x,autoFocus:p=!1,style:b,...g}=e,{state:y,name:w,disabled:C,setTouched:k,setDirty:N,validityData:S,setFocused:I,setFilled:R,validationMode:T,validation:E}=(0,f.useFieldRootContext)(),{clearErrors:A}=(0,h.useFormContext)(),L=C||s,V=w??i,z={...y,disabled:L},{labelId:D}=(0,v.useLabelableContext)(),F=(0,K.useLabelableId)({id:l});(0,u.useIsoLayoutEffect)(()=>{let e=null!=n;E.inputRef.current?.value||e&&""!==n?R(!0):e&&""===n&&R(!1)},[E.inputRef,R,n]);let O=o.useRef(null);(0,u.useIsoLayoutEffect)(()=>{p&&O.current===(0,$.activeElement)((0,M.ownerDocument)(O.current))&&I(!0)},[p,I]);let[B]=(0,U.useControlled)({controlled:n,default:x,name:"FieldControl",state:"value"}),P=void 0!==n,G=P?B:void 0,Y=(0,c.useStableCallback)(()=>E.inputRef.current?.value);return(0,_.useRegisterFieldControl)(E.inputRef,F,G,Y,!L,i),(0,j.useRenderElement)("input",e,{ref:[t,O],state:z,props:[{id:F,disabled:L,name:V,ref:E.inputRef,"aria-labelledby":D,autoFocus:p,...P?{value:G}:{defaultValue:x},onChange(e){let t=e.currentTarget.value;d?.(t,(0,H.createChangeEventDetails)(W.REASONS.none,e.nativeEvent)),N(t!==S.initialValue),R(""!==t),e.nativeEvent.defaultPrevented||(A(V),E.change(t))},onFocus(){I(!0)},onBlur(e){k(!0),I(!1),"onBlur"===T&&E.commit(e.currentTarget.value)},onKeyDown(e){"INPUT"===e.currentTarget.tagName&&"Enter"===e.key&&(k(!0),E.commit(e.currentTarget.value))}},g,e=>E.getValidationProps(L,e)],stateAttributesMapping:m.fieldValidityMapping})}),Y=o.createContext(void 0),J=o.forwardRef(function(e,a){let{render:r,className:l,style:i,disabled:n=!1,...s}=e,{state:d,disabled:u}=(0,f.useFieldRootContext)(!1),c=u||n,p={...d,disabled:c},h=function(e=!0){let t=o.useContext(Y);if(void 0===t&&!e)throw Error((0,x.default)(3));return t}(),b=h?.allValues!==void 0?h?.parent.id:void 0,g=o.useMemo(()=>({disabled:c}),[c]),v=(0,j.useRenderElement)("div",e,{ref:a,state:p,props:s,stateAttributesMapping:m.fieldValidityMapping});return(0,t.jsx)(y,{controlId:b,children:(0,t.jsx)(A.Provider,{value:g,children:v})})});e.s(["Control",0,G,"Description",0,P,"Error",0,B,"Item",0,J,"Label",0,V,"Root",0,T,"Validity",0,function(e){let{children:a}=e,{validityData:r,invalid:l}=(0,f.useFieldRootContext)(!1),i=o.useMemo(()=>N(r,l),[r,l]),n=!1===i.state.valid,{transitionStatus:s}=(0,F.useTransitionStatus)(n),d=o.useMemo(()=>({...i,validity:i.state,transitionStatus:s}),[i,s]);return(0,t.jsx)(o.Fragment,{children:a(d)})}],5359);var q=e.i(5359);e.s(["Field",0,q],71446);var q=q;let Q=o.forwardRef(function(e,a){return(0,t.jsx)(q.Control,{ref:a,...e})}),X=(0,o.memo)(({ref:e,className:a,classNames:r,styles:i,style:o,variant:u,shadow:c,size:f="middle",prefix:m,suffix:x,disabled:p,...h})=>{let{isDarkMode:b}=(0,d.useThemeMode)();return(0,t.jsxs)("div",{className:(0,l.cx)(s({shadow:c,size:f,variant:u||(b?"filled":"outlined")}),a),"data-disabled":p?"":void 0,style:o,children:[m&&(0,t.jsx)("span",{className:(0,l.cx)(n.slot,r?.prefix),style:i?.prefix,children:m}),(0,t.jsx)(Q,{className:(0,l.cx)(n.input,r?.input),disabled:p,ref:e,style:i?.input,...h}),x&&(0,t.jsx)("span",{className:(0,l.cx)(n.slot,r?.suffix),style:i?.suffix,children:x})]})});X.displayName="Input";var Z=e.i(92435),ee=e.i(65430);let et=(0,ee.default)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),ea=(0,ee.default)("eye-off",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]),er=(0,o.memo)(({visibilityToggle:e=!0,suffix:a,...r})=>{let[l,i]=(0,o.useState)(!1);return(0,t.jsx)(X,{type:l?"text":"password",suffix:(0,t.jsxs)(t.Fragment,{children:[a,e&&(0,t.jsx)("button",{"aria-label":l?"Hide password":"Show password",className:n.passwordToggle,tabIndex:-1,type:"button",onClick:()=>i(e=>!e),children:(0,t.jsx)(Z.default,{icon:l?et:ea,size:16})})]}),...r})});er.displayName="InputPassword";var el=e.i(67062);function ei({label:e,type:a="text",variant:r="faded",value:l,onValueChange:i,onChange:n,isInvalid:s,errorMessage:o,required:d,maxLength:u,placeholder:c,size:f,onKeyDown:m,startContent:x,endContent:p,className:h,classNames:b,"aria-label":g,...v}){let y="password"===a?er:X;return(0,t.jsxs)("div",{className:(0,el.cn)("flex w-full flex-col gap-1.5",h),children:[e&&(0,t.jsxs)("label",{className:"text-xs sm:text-sm text-foreground-500",children:[e,d&&(0,t.jsx)("span",{className:"text-danger",children:" *"})]}),(0,t.jsx)(y,{...v,type:"password"===a?void 0:a,variant:"bordered"===r?"outlined":"filled",value:l,onChange:e=>{n?.(e),i?.(e.target.value)},maxLength:u,placeholder:c,size:"lg"===f?"large":"sm"===f?"small":"middle",onKeyDown:m,prefix:x,suffix:p,"aria-label":g,"data-invalid":s?"":void 0}),s&&o&&(0,t.jsx)("p",{className:"text-xs text-danger",children:o})]})}e.s(["Input",()=>ei],93479)},3045,e=>{"use strict";var t=e.i(43476),a=e.i(63662),r=e.i(22016),l=e.i(71645),i=e.i(19455),n=e.i(15288),s=e.i(93479);function o({content:e}){let o=e.profile,[c,f]=(0,l.useState)(""),[m,x]=(0,l.useState)(!1),[p,h]=(0,l.useState)([]),[b,g]=(0,l.useState)(""),[v,y]=(0,l.useState)(""),[j,w]=(0,l.useState)(!1),[C,k]=(0,l.useState)(!1),N=(0,l.useRef)(null),S=(0,l.useRef)(null);(0,l.useEffect)(()=>{let e=localStorage.getItem("chat-user");e&&(f(e),x(!0))},[]),(0,l.useEffect)(()=>{if(!m||!c)return;let e=async()=>{try{let e=await fetch(`/api/chat?user=${encodeURIComponent(c)}`),t=await e.json();t.success&&h(t.messages)}catch{}};e();let t=setInterval(e,3e3);return()=>clearInterval(t)},[m,c]),(0,l.useEffect)(()=>{S.current?.scrollIntoView({behavior:"smooth"})},[p]);let I=async e=>{if(c&&(b.trim()||e)&&!j&&!C){w(!0),y("");try{let t=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c,text:b.trim(),...e?{file:e}:{}})}),a=await t.json();if(!t.ok)return void y(a.message||"Gönderilemedi.");g("");let r=await fetch(`/api/chat?user=${encodeURIComponent(c)}`),l=await r.json();l.success&&h(l.messages)}catch{y("Bir hata oluştu.")}finally{w(!1)}}},R=async e=>{let t=e.target.files?.[0];if(e.target.value="",t){k(!0),y("");try{let e=new FormData;e.append("file",t);let a=await fetch("/api/chat/upload",{method:"POST",body:e}),r=await a.json();if(!a.ok||!r.success)return void y(r.message||"Dosya yüklenemedi.");await I(r.file)}catch{y("Dosya yüklenemedi.")}finally{k(!1)}}};return m?(0,t.jsx)("div",{className:"flex w-full max-w-3xl flex-col gap-3",children:(0,t.jsxs)(n.Card,{className:"bg-white/5 backdrop-blur-xl overflow-hidden",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3 border-b border-white/10 bg-black/20 px-3 py-2.5 sm:px-4",children:[(0,t.jsxs)("div",{className:"relative shrink-0",children:[(0,t.jsx)(d,{profile:o,size:40}),(0,t.jsx)("span",{className:"absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 border-2 border-black"})]}),(0,t.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,t.jsx)("p",{className:"truncate text-sm sm:text-base font-semibold",children:o.displayName}),(0,t.jsxs)("p",{className:"truncate text-[11px] sm:text-xs text-emerald-400",children:["çevrimiçi",o.nickname&&(0,t.jsxs)("span",{className:"text-foreground-500",children:[" ","•",o.nickname]})]})]}),(0,t.jsxs)(r.default,{href:"/",className:"inline-flex shrink-0 items-center gap-1 text-xs text-foreground-500 transition-colors hover:text-foreground",title:"Ana sayfa",children:[(0,t.jsx)(a.Icon,{icon:"mdi:home",width:18,height:18}),(0,t.jsx)("span",{className:"hidden xs:inline",children:"Ana Sayfa"})]})]}),(0,t.jsxs)("div",{className:"flex h-[52vh] sm:h-[56vh] w-full flex-col gap-2 overflow-y-auto bg-[#0b0b0f] p-3 sm:p-4",children:[0===p.length?(0,t.jsxs)("div",{className:"flex h-full flex-col items-center justify-center gap-2 text-center text-foreground-500",children:[(0,t.jsx)(a.Icon,{icon:"mdi:chat-processing-outline",width:40,height:40}),(0,t.jsx)("p",{className:"text-sm",children:"Henüz mesaj yok. İlk mesajı sen yaz!"})]}):p.map(e=>{let a=!e.owner&&e.name===c;return(0,t.jsx)(u,{message:e,mine:a,profile:o},e.id)}),(0,t.jsx)("div",{ref:S})]}),(0,t.jsxs)("div",{className:"flex flex-col gap-2 border-t border-white/10 bg-black/20 p-3 sm:p-4",children:[v&&(0,t.jsx)("p",{className:"text-danger text-sm font-medium",children:v}),(0,t.jsxs)("div",{className:"flex flex-row items-end gap-2",children:[(0,t.jsx)("input",{ref:N,type:"file",className:"hidden",onChange:R}),(0,t.jsx)(i.Button,{isIconOnly:!0,variant:"bordered","aria-label":"Dosya ekle",isLoading:C,onPress:()=>N.current?.click(),className:"shrink-0",children:(0,t.jsx)(a.Icon,{icon:"mdi:paperclip",width:20,height:20})}),(0,t.jsx)(s.Input,{type:"text",variant:"flat",placeholder:"Mesajını yaz...",value:b,onValueChange:g,onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),I())},maxLength:500,className:"flex-1"}),(0,t.jsx)(i.Button,{color:"primary",isIconOnly:!0,"aria-label":"Gönder",onPress:()=>I(),isLoading:j,isDisabled:!b.trim()||C,className:"shrink-0",children:(0,t.jsx)(a.Icon,{icon:"mdi:send",width:20,height:20})})]})]})]})}):(0,t.jsx)("div",{className:"flex w-full max-w-md flex-col gap-4",children:(0,t.jsx)(n.Card,{className:"bg-white/5 backdrop-blur-xl",children:(0,t.jsxs)("div",{className:"flex flex-col items-center gap-4 p-6 sm:p-8",children:[(0,t.jsx)(d,{profile:o,size:72}),(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("h2",{className:"text-lg sm:text-xl font-bold",children:o.displayName}),(0,t.jsxs)("p",{className:"text-sm text-foreground-500",children:[o.nickname&&`"${o.nickname}"`," ","• Sohbete katılmak için ismini gir"]})]}),(0,t.jsxs)("form",{className:"flex w-full flex-col gap-3",onSubmit:e=>{let t;e.preventDefault(),(t=c.trim())&&(localStorage.setItem("chat-user",t),x(!0))},children:[(0,t.jsx)(s.Input,{type:"text",label:"Adın",variant:"faded",placeholder:"Örn. Ahmet",value:c,onValueChange:f,maxLength:30,required:!0}),(0,t.jsxs)(i.Button,{type:"submit",color:"primary",className:"w-full font-semibold",isDisabled:!c.trim(),children:[(0,t.jsx)(a.Icon,{icon:"mdi:chat",width:20,height:20}),"Sohbete Katıl"]})]}),(0,t.jsx)("p",{className:"text-center text-xs text-foreground-500",children:"Görsel, ses ve dosya gönderebilirsin. Sohbetin yalnızca aramızda."})]})})})}function d({profile:e,size:a}){return e.profileImage?(0,t.jsx)("img",{src:e.profileImage,alt:e.displayName,width:a,height:a,className:"rounded-full object-cover",style:{width:a,height:a}}):(0,t.jsx)("div",{className:"flex items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-600 font-black text-black",style:{width:a,height:a,fontSize:a/2.4},children:e.displayName.charAt(0)||"T"})}function u({message:e,mine:a,profile:r}){return(0,t.jsx)("div",{className:`flex w-full flex-col ${a?"items-end":"items-start"}`,children:(0,t.jsxs)("div",{className:`max-w-[82%] rounded-2xl px-3 py-2 text-sm break-words ${a?"rounded-br-sm bg-primary text-black":"rounded-bl-sm bg-[#232329] text-foreground"}`,children:[e.owner&&(0,t.jsx)("div",{className:"mb-1 flex items-center gap-1.5",children:e.file?.type.startsWith("image/")&&r.profileImage?(0,t.jsx)("img",{src:r.profileImage,alt:"",className:"h-4 w-4 rounded-full object-cover"}):(0,t.jsx)("span",{className:"text-[10px] text-foreground-500",children:"TARIKELER"})}),!e.owner&&!a&&(0,t.jsx)("p",{className:"mb-1 text-xs font-semibold text-primary",children:e.name}),e.file&&(0,t.jsx)(c,{file:e.file,mine:a}),e.text&&(0,t.jsx)("p",{className:"whitespace-pre-wrap",children:e.text}),(0,t.jsx)("p",{className:`mt-1 text-[10px] ${a?"text-black/60":"text-foreground-500"}`,children:new Date(e.createdAt).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"})})]})})}function c({file:e,mine:r}){var l;return e.type.startsWith("image/")?(0,t.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"mb-1 block",children:(0,t.jsx)("img",{src:e.url,alt:e.name,className:"max-h-64 rounded-xl object-contain"})}):e.type.startsWith("audio/")?(0,t.jsx)("audio",{controls:!0,src:e.url,className:"mb-1 h-9 w-full max-w-[240px]"}):(0,t.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:`mb-1 flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-xs ${r?"border-black/20 bg-black/10":"border-white/15 bg-white/5"}`,children:[(0,t.jsx)(a.Icon,{icon:"mdi:file",width:18,height:18,className:"shrink-0"}),(0,t.jsx)("span",{className:"max-w-[140px] truncate",children:e.name}),(0,t.jsx)("span",{className:"shrink-0 opacity-70",children:(l=e.size)<1024?`${l} B`:l<1048576?`${(l/1024).toFixed(1)} KB`:`${(l/1048576).toFixed(1)} MB`})]})}e.s(["ChatWindow",()=>o])}]);