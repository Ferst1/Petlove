import{K as D,j as ne,B as At}from"./index-CDfUhzho.js";var de=e=>e.type==="checkbox",ie=e=>e instanceof Date,T=e=>e==null;const tt=e=>typeof e=="object";var U=e=>!T(e)&&!Array.isArray(e)&&tt(e)&&!ie(e),rt=e=>U(e)&&e.target?de(e.target)?e.target.checked:e.target.value:e,mt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,st=(e,s)=>e.has(mt(s)),Dt=e=>{const s=e.constructor&&e.constructor.prototype;return U(s)&&s.hasOwnProperty("isPrototypeOf")},Ue=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function O(e){let s;const t=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Ue&&(e instanceof Blob||e instanceof FileList))&&(t||U(e)))if(s=t?[]:{},!t&&!Dt(e))s=e;else for(const u in e)e.hasOwnProperty(u)&&(s[u]=O(e[u]));else return e;return s}var Ae=e=>Array.isArray(e)?e.filter(Boolean):[],w=e=>e===void 0,f=(e,s,t)=>{if(!s||!U(e))return t;const u=Ae(s.split(/[,[\].]+?/)).reduce((n,l)=>T(n)?n:n[l],e);return w(u)||u===e?w(e[s])?t:e[s]:u},H=e=>typeof e=="boolean",Re=e=>/^\w*$/.test(e),it=e=>Ae(e.replace(/["|']|\]/g,"").split(/\.|\[/)),A=(e,s,t)=>{let u=-1;const n=Re(s)?[s]:it(s),l=n.length,y=l-1;for(;++u<l;){const h=n[u];let m=t;if(u!==y){const S=e[h];m=U(S)||Array.isArray(S)?S:isNaN(+n[u+1])?{}:[]}if(h==="__proto__")return;e[h]=m,e=e[h]}return e};const _e={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},q={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},z={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},wt=D.createContext(null),Le=()=>D.useContext(wt);var ut=(e,s,t,u=!0)=>{const n={defaultValues:s._defaultValues};for(const l in e)Object.defineProperty(n,l,{get:()=>{const y=l;return s._proxyFormState[y]!==q.all&&(s._proxyFormState[y]=!u||q.all),t&&(t[y]=!0),e[y]}});return n},M=e=>U(e)&&!Object.keys(e).length,at=(e,s,t,u)=>{t(e);const{name:n,...l}=e;return M(l)||Object.keys(l).length>=Object.keys(s).length||Object.keys(l).find(y=>s[y]===(!u||q.all))},fe=e=>Array.isArray(e)?e:[e],lt=(e,s,t)=>!e||!s||e===s||fe(e).some(u=>u&&(t?u===s:u.startsWith(s)||s.startsWith(u)));function Te(e){const s=D.useRef(e);s.current=e,D.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}function Et(e){const s=Le(),{control:t=s.control,disabled:u,name:n,exact:l}=e||{},[y,h]=D.useState(t._formState),m=D.useRef(!0),S=D.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),_=D.useRef(n);return _.current=n,Te({disabled:u,next:v=>m.current&&lt(_.current,v.name,l)&&at(v,S.current,t._updateFormState)&&h({...t._formState,...v}),subject:t._subjects.state}),D.useEffect(()=>(m.current=!0,S.current.isValid&&t._updateValid(!0),()=>{m.current=!1}),[t]),ut(y,t,S.current,!1)}var $=e=>typeof e=="string",nt=(e,s,t,u,n)=>$(e)?(u&&s.watch.add(e),f(t,e,n)):Array.isArray(e)?e.map(l=>(u&&s.watch.add(l),f(t,l))):(u&&(s.watchAll=!0),t);function St(e){const s=Le(),{control:t=s.control,name:u,defaultValue:n,disabled:l,exact:y}=e||{},h=D.useRef(u);h.current=u,Te({disabled:l,subject:t._subjects.values,next:_=>{lt(h.current,_.name,y)&&S(O(nt(h.current,t._names,_.values||t._formValues,!1,n)))}});const[m,S]=D.useState(t._getWatch(u,n));return D.useEffect(()=>t._removeUnmounted()),m}function kt(e){const s=Le(),{name:t,disabled:u,control:n=s.control,shouldUnregister:l}=e,y=st(n._names.array,t),h=St({control:n,name:t,defaultValue:f(n._formValues,t,f(n._defaultValues,t,e.defaultValue)),exact:!0}),m=Et({control:n,name:t}),S=D.useRef(n.register(t,{...e.rules,value:h,...H(e.disabled)?{disabled:e.disabled}:{}}));return D.useEffect(()=>{const _=n._options.shouldUnregister||l,v=(I,W)=>{const R=f(n._fields,I);R&&R._f&&(R._f.mount=W)};if(v(t,!0),_){const I=O(f(n._options.defaultValues,t));A(n._defaultValues,t,I),w(f(n._formValues,t))&&A(n._formValues,t,I)}return()=>{(y?_&&!n._state.action:_)?n.unregister(t):v(t,!1)}},[t,n,y,l]),D.useEffect(()=>{f(n._fields,t)&&n._updateDisabledField({disabled:u,fields:n._fields,name:t,value:f(n._fields,t)._f.value})},[u,t,n]),{field:{name:t,value:h,...H(u)||m.disabled?{disabled:m.disabled||u}:{},onChange:D.useCallback(_=>S.current.onChange({target:{value:rt(_),name:t},type:_e.CHANGE}),[t]),onBlur:D.useCallback(()=>S.current.onBlur({target:{value:f(n._formValues,t),name:t},type:_e.BLUR}),[t,n]),ref:_=>{const v=f(n._fields,t);v&&_&&(v._f.ref={focus:()=>_.focus(),select:()=>_.select(),setCustomValidity:I=>_.setCustomValidity(I),reportValidity:()=>_.reportValidity()})}},formState:m,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!f(m.errors,t)},isDirty:{enumerable:!0,get:()=>!!f(m.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!f(m.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!f(m.validatingFields,t)},error:{enumerable:!0,get:()=>f(m.errors,t)}})}}const $t=e=>e.render(kt(e));var pt=(e,s,t,u,n)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[u]:n||!0}}:{},Ge=e=>({isOnSubmit:!e||e===q.onSubmit,isOnBlur:e===q.onBlur,isOnChange:e===q.onChange,isOnAll:e===q.all,isOnTouch:e===q.onTouched}),ze=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(u=>e.startsWith(u)&&/^\.\w+/.test(e.slice(u.length))));const ce=(e,s,t,u)=>{for(const n of t||Object.keys(e)){const l=f(e,n);if(l){const{_f:y,...h}=l;if(y){if(y.refs&&y.refs[0]&&s(y.refs[0],n)&&!u)break;if(y.ref&&s(y.ref,y.name)&&!u)break;ce(h,s)}else U(h)&&ce(h,s)}}};var Ct=(e,s,t)=>{const u=fe(f(e,t));return A(u,"root",s[t]),A(e,t,u),e},Oe=e=>e.type==="file",X=e=>typeof e=="function",be=e=>{if(!Ue)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},ve=e=>$(e),Be=e=>e.type==="radio",Ve=e=>e instanceof RegExp;const Je={value:!1,isValid:!1},Qe={value:!0,isValid:!0};var ot=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!w(e[0].attributes.value)?w(e[0].value)||e[0].value===""?Qe:{value:e[0].value,isValid:!0}:Qe:Je}return Je};const Xe={isValid:!1,value:null};var ft=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,Xe):Xe;function Ye(e,s,t="validate"){if(ve(e)||Array.isArray(e)&&e.every(ve)||H(e)&&!e)return{type:t,message:ve(e)?e:"",ref:s}}var se=e=>U(e)&&!Ve(e)?e:{value:e,message:""},Ze=async(e,s,t,u,n)=>{const{ref:l,refs:y,required:h,maxLength:m,minLength:S,min:_,max:v,pattern:I,validate:W,name:R,valueAsNumber:me,mount:J,disabled:Q}=e._f,V=f(s,R);if(!J||Q)return{};const K=y?y[0]:l,G=b=>{u&&K.reportValidity&&(K.setCustomValidity(H(b)?"":b||""),K.reportValidity())},k={},ee=Be(l),ye=de(l),Y=ee||ye,te=(me||Oe(l))&&w(l.value)&&w(V)||be(l)&&l.value===""||V===""||Array.isArray(V)&&!V.length,N=pt.bind(null,R,t,k),ge=(b,F,p,L=z.maxLength,j=z.minLength)=>{const P=b?F:p;k[R]={type:b?L:j,message:P,ref:l,...N(b?L:j,P)}};if(n?!Array.isArray(V)||!V.length:h&&(!Y&&(te||T(V))||H(V)&&!V||ye&&!ot(y).isValid||ee&&!ft(y).isValid)){const{value:b,message:F}=ve(h)?{value:!!h,message:h}:se(h);if(b&&(k[R]={type:z.required,message:F,ref:K,...N(z.required,F)},!t))return G(F),k}if(!te&&(!T(_)||!T(v))){let b,F;const p=se(v),L=se(_);if(!T(V)&&!isNaN(V)){const j=l.valueAsNumber||V&&+V;T(p.value)||(b=j>p.value),T(L.value)||(F=j<L.value)}else{const j=l.valueAsDate||new Date(V),P=le=>new Date(new Date().toDateString()+" "+le),ue=l.type=="time",ae=l.type=="week";$(p.value)&&V&&(b=ue?P(V)>P(p.value):ae?V>p.value:j>new Date(p.value)),$(L.value)&&V&&(F=ue?P(V)<P(L.value):ae?V<L.value:j<new Date(L.value))}if((b||F)&&(ge(!!b,p.message,L.message,z.max,z.min),!t))return G(k[R].message),k}if((m||S)&&!te&&($(V)||n&&Array.isArray(V))){const b=se(m),F=se(S),p=!T(b.value)&&V.length>+b.value,L=!T(F.value)&&V.length<+F.value;if((p||L)&&(ge(p,b.message,F.message),!t))return G(k[R].message),k}if(I&&!te&&$(V)){const{value:b,message:F}=se(I);if(Ve(b)&&!V.match(b)&&(k[R]={type:z.pattern,message:F,ref:l,...N(z.pattern,F)},!t))return G(F),k}if(W){if(X(W)){const b=await W(V,s),F=Ye(b,K);if(F&&(k[R]={...F,...N(z.validate,F.message)},!t))return G(F.message),k}else if(U(W)){let b={};for(const F in W){if(!M(b)&&!t)break;const p=Ye(await W[F](V,s),K,F);p&&(b={...p,...N(F,p.message)},G(p.message),t&&(k[R]=b))}if(!M(b)&&(k[R]={ref:K,...b},!t))return k}}return G(!0),k};function Ut(e,s){const t=s.slice(0,-1).length;let u=0;for(;u<t;)e=w(e)?u++:e[s[u++]];return e}function Rt(e){for(const s in e)if(e.hasOwnProperty(s)&&!w(e[s]))return!1;return!0}function C(e,s){const t=Array.isArray(s)?s:Re(s)?[s]:it(s),u=t.length===1?e:Ut(e,t),n=t.length-1,l=t[n];return u&&delete u[l],n!==0&&(U(u)&&M(u)||Array.isArray(u)&&Rt(u))&&C(e,t.slice(0,-1)),e}var ke=()=>{let e=[];return{get observers(){return e},next:n=>{for(const l of e)l.next&&l.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(l=>l!==n)}}),unsubscribe:()=>{e=[]}}},Fe=e=>T(e)||!tt(e);function Z(e,s){if(Fe(e)||Fe(s))return e===s;if(ie(e)&&ie(s))return e.getTime()===s.getTime();const t=Object.keys(e),u=Object.keys(s);if(t.length!==u.length)return!1;for(const n of t){const l=e[n];if(!u.includes(n))return!1;if(n!=="ref"){const y=s[n];if(ie(l)&&ie(y)||U(l)&&U(y)||Array.isArray(l)&&Array.isArray(y)?!Z(l,y):l!==y)return!1}}return!0}var ct=e=>e.type==="select-multiple",Lt=e=>Be(e)||de(e),pe=e=>be(e)&&e.isConnected,dt=e=>{for(const s in e)if(X(e[s]))return!0;return!1};function xe(e,s={}){const t=Array.isArray(e);if(U(e)||t)for(const u in e)Array.isArray(e[u])||U(e[u])&&!dt(e[u])?(s[u]=Array.isArray(e[u])?[]:{},xe(e[u],s[u])):T(e[u])||(s[u]=!0);return s}function yt(e,s,t){const u=Array.isArray(e);if(U(e)||u)for(const n in e)Array.isArray(e[n])||U(e[n])&&!dt(e[n])?w(s)||Fe(t[n])?t[n]=Array.isArray(e[n])?xe(e[n],[]):{...xe(e[n])}:yt(e[n],T(s)?{}:s[n],t[n]):t[n]=!Z(e[n],s[n]);return t}var he=(e,s)=>yt(e,s,xe(s)),gt=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:u})=>w(e)?e:s?e===""?NaN:e&&+e:t&&$(e)?new Date(e):u?u(e):e;function Ce(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return Oe(s)?s.files:Be(s)?ft(e.refs).value:ct(s)?[...s.selectedOptions].map(({value:t})=>t):de(s)?ot(e.refs).value:gt(w(s.value)?e.ref.value:s.value,e)}var Tt=(e,s,t,u)=>{const n={};for(const l of e){const y=f(s,l);y&&A(n,l,y._f)}return{criteriaMode:t,names:[...e],fields:n,shouldUseNativeValidation:u}},oe=e=>w(e)?e:Ve(e)?e.source:U(e)?Ve(e.value)?e.value.source:e.value:e,Ot=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function et(e,s,t){const u=f(e,t);if(u||Re(t))return{error:u,name:t};const n=t.split(".");for(;n.length;){const l=n.join("."),y=f(s,l),h=f(e,l);if(y&&!Array.isArray(y)&&t!==l)return{name:t};if(h&&h.type)return{name:l,error:h};n.pop()}return{name:t}}var Bt=(e,s,t,u,n)=>n.isOnAll?!1:!t&&n.isOnTouch?!(s||e):(t?u.isOnBlur:n.isOnBlur)?!e:(t?u.isOnChange:n.isOnChange)?e:!0,Mt=(e,s)=>!Ae(f(e,s)).length&&C(e,s);const Nt={mode:q.onSubmit,reValidateMode:q.onChange,shouldFocusError:!0};function Pt(e={}){let s={...Nt,...e},t={submitCount:0,isDirty:!1,isLoading:X(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},u={},n=U(s.defaultValues)||U(s.values)?O(s.defaultValues||s.values)||{}:{},l=s.shouldUnregister?{}:O(n),y={action:!1,mount:!1,watch:!1},h={mount:new Set,unMount:new Set,array:new Set,watch:new Set},m,S=0;const _={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:ke(),array:ke(),state:ke()},I=Ge(s.mode),W=Ge(s.reValidateMode),R=s.criteriaMode===q.all,me=r=>i=>{clearTimeout(S),S=setTimeout(r,i)},J=async r=>{if(_.isValid||r){const i=s.resolver?M((await Y()).errors):await N(u,!0);i!==t.isValid&&v.state.next({isValid:i})}},Q=(r,i)=>{(_.isValidating||_.validatingFields)&&((r||Array.from(h.mount)).forEach(a=>{a&&(i?A(t.validatingFields,a,i):C(t.validatingFields,a))}),v.state.next({validatingFields:t.validatingFields,isValidating:!M(t.validatingFields)}))},V=(r,i=[],a,d,c=!0,o=!0)=>{if(d&&a){if(y.action=!0,o&&Array.isArray(f(u,r))){const g=a(f(u,r),d.argA,d.argB);c&&A(u,r,g)}if(o&&Array.isArray(f(t.errors,r))){const g=a(f(t.errors,r),d.argA,d.argB);c&&A(t.errors,r,g),Mt(t.errors,r)}if(_.touchedFields&&o&&Array.isArray(f(t.touchedFields,r))){const g=a(f(t.touchedFields,r),d.argA,d.argB);c&&A(t.touchedFields,r,g)}_.dirtyFields&&(t.dirtyFields=he(n,l)),v.state.next({name:r,isDirty:b(r,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else A(l,r,i)},K=(r,i)=>{A(t.errors,r,i),v.state.next({errors:t.errors})},G=r=>{t.errors=r,v.state.next({errors:t.errors,isValid:!1})},k=(r,i,a,d)=>{const c=f(u,r);if(c){const o=f(l,r,w(a)?f(n,r):a);w(o)||d&&d.defaultChecked||i?A(l,r,i?o:Ce(c._f)):L(r,o),y.mount&&J()}},ee=(r,i,a,d,c)=>{let o=!1,g=!1;const x={name:r},E=!!(f(u,r)&&f(u,r)._f&&f(u,r)._f.disabled);if(!a||d){_.isDirty&&(g=t.isDirty,t.isDirty=x.isDirty=b(),o=g!==x.isDirty);const B=E||Z(f(n,r),i);g=!!(!E&&f(t.dirtyFields,r)),B||E?C(t.dirtyFields,r):A(t.dirtyFields,r,!0),x.dirtyFields=t.dirtyFields,o=o||_.dirtyFields&&g!==!B}if(a){const B=f(t.touchedFields,r);B||(A(t.touchedFields,r,a),x.touchedFields=t.touchedFields,o=o||_.touchedFields&&B!==a)}return o&&c&&v.state.next(x),o?x:{}},ye=(r,i,a,d)=>{const c=f(t.errors,r),o=_.isValid&&H(i)&&t.isValid!==i;if(e.delayError&&a?(m=me(()=>K(r,a)),m(e.delayError)):(clearTimeout(S),m=null,a?A(t.errors,r,a):C(t.errors,r)),(a?!Z(c,a):c)||!M(d)||o){const g={...d,...o&&H(i)?{isValid:i}:{},errors:t.errors,name:r};t={...t,...g},v.state.next(g)}},Y=async r=>{Q(r,!0);const i=await s.resolver(l,s.context,Tt(r||h.mount,u,s.criteriaMode,s.shouldUseNativeValidation));return Q(r),i},te=async r=>{const{errors:i}=await Y(r);if(r)for(const a of r){const d=f(i,a);d?A(t.errors,a,d):C(t.errors,a)}else t.errors=i;return i},N=async(r,i,a={valid:!0})=>{for(const d in r){const c=r[d];if(c){const{_f:o,...g}=c;if(o){const x=h.array.has(o.name);Q([d],!0);const E=await Ze(c,l,R,s.shouldUseNativeValidation&&!i,x);if(Q([d]),E[o.name]&&(a.valid=!1,i))break;!i&&(f(E,o.name)?x?Ct(t.errors,E,o.name):A(t.errors,o.name,E[o.name]):C(t.errors,o.name))}g&&await N(g,i,a)}}return a.valid},ge=()=>{for(const r of h.unMount){const i=f(u,r);i&&(i._f.refs?i._f.refs.every(a=>!pe(a)):!pe(i._f.ref))&&De(r)}h.unMount=new Set},b=(r,i)=>(r&&i&&A(l,r,i),!Z(Me(),n)),F=(r,i,a)=>nt(r,h,{...y.mount?l:w(i)?n:$(r)?{[r]:i}:i},a,i),p=r=>Ae(f(y.mount?l:n,r,e.shouldUnregister?f(n,r,[]):[])),L=(r,i,a={})=>{const d=f(u,r);let c=i;if(d){const o=d._f;o&&(!o.disabled&&A(l,r,gt(i,o)),c=be(o.ref)&&T(i)?"":i,ct(o.ref)?[...o.ref.options].forEach(g=>g.selected=c.includes(g.value)):o.refs?de(o.ref)?o.refs.length>1?o.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(c)?!!c.find(x=>x===g.value):c===g.value)):o.refs[0]&&(o.refs[0].checked=!!c):o.refs.forEach(g=>g.checked=g.value===c):Oe(o.ref)?o.ref.value="":(o.ref.value=c,o.ref.type||v.values.next({name:r,values:{...l}})))}(a.shouldDirty||a.shouldTouch)&&ee(r,c,a.shouldTouch,a.shouldDirty,!0),a.shouldValidate&&le(r)},j=(r,i,a)=>{for(const d in i){const c=i[d],o=`${r}.${d}`,g=f(u,o);(h.array.has(r)||!Fe(c)||g&&!g._f)&&!ie(c)?j(o,c,a):L(o,c,a)}},P=(r,i,a={})=>{const d=f(u,r),c=h.array.has(r),o=O(i);A(l,r,o),c?(v.array.next({name:r,values:{...l}}),(_.isDirty||_.dirtyFields)&&a.shouldDirty&&v.state.next({name:r,dirtyFields:he(n,l),isDirty:b(r,o)})):d&&!d._f&&!T(o)?j(r,o,a):L(r,o,a),ze(r,h)&&v.state.next({...t}),v.values.next({name:y.mount?r:void 0,values:{...l}})},ue=async r=>{y.mount=!0;const i=r.target;let a=i.name,d=!0;const c=f(u,a),o=()=>i.type?Ce(c._f):rt(r),g=x=>{d=Number.isNaN(x)||x===f(l,a,x)};if(c){let x,E;const B=o(),re=r.type===_e.BLUR||r.type===_e.FOCUS_OUT,Vt=!Ot(c._f)&&!s.resolver&&!f(t.errors,a)&&!c._f.deps||Bt(re,f(t.touchedFields,a),t.isSubmitted,W,I),Ee=ze(a,h,re);A(l,a,B),re?(c._f.onBlur&&c._f.onBlur(r),m&&m(0)):c._f.onChange&&c._f.onChange(r);const Se=ee(a,B,re,!1),Ft=!M(Se)||Ee;if(!re&&v.values.next({name:a,type:r.type,values:{...l}}),Vt)return _.isValid&&J(),Ft&&v.state.next({name:a,...Ee?{}:Se});if(!re&&Ee&&v.state.next({...t}),s.resolver){const{errors:$e}=await Y([a]);if(g(B),d){const xt=et(t.errors,u,a),Ke=et($e,u,xt.name||a);x=Ke.error,a=Ke.name,E=M($e)}}else Q([a],!0),x=(await Ze(c,l,R,s.shouldUseNativeValidation))[a],Q([a]),g(B),d&&(x?E=!1:_.isValid&&(E=await N(u,!0)));d&&(c._f.deps&&le(c._f.deps),ye(a,E,x,Se))}},ae=(r,i)=>{if(f(t.errors,i)&&r.focus)return r.focus(),1},le=async(r,i={})=>{let a,d;const c=fe(r);if(s.resolver){const o=await te(w(r)?r:c);a=M(o),d=r?!c.some(g=>f(o,g)):a}else r?(d=(await Promise.all(c.map(async o=>{const g=f(u,o);return await N(g&&g._f?{[o]:g}:g)}))).every(Boolean),!(!d&&!t.isValid)&&J()):d=a=await N(u);return v.state.next({...!$(r)||_.isValid&&a!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:a}:{},errors:t.errors}),i.shouldFocus&&!d&&ce(u,ae,r?c:h.mount),d},Me=r=>{const i={...y.mount?l:n};return w(r)?i:$(r)?f(i,r):r.map(a=>f(i,a))},Ne=(r,i)=>({invalid:!!f((i||t).errors,r),isDirty:!!f((i||t).dirtyFields,r),error:f((i||t).errors,r),isValidating:!!f(t.validatingFields,r),isTouched:!!f((i||t).touchedFields,r)}),ht=r=>{r&&fe(r).forEach(i=>C(t.errors,i)),v.state.next({errors:r?t.errors:{}})},Pe=(r,i,a)=>{const d=(f(u,r,{_f:{}})._f||{}).ref,c=f(t.errors,r)||{},{ref:o,message:g,type:x,...E}=c;A(t.errors,r,{...E,...i,ref:d}),v.state.next({name:r,errors:t.errors,isValid:!1}),a&&a.shouldFocus&&d&&d.focus&&d.focus()},vt=(r,i)=>X(r)?v.values.subscribe({next:a=>r(F(void 0,i),a)}):F(r,i,!0),De=(r,i={})=>{for(const a of r?fe(r):h.mount)h.mount.delete(a),h.array.delete(a),i.keepValue||(C(u,a),C(l,a)),!i.keepError&&C(t.errors,a),!i.keepDirty&&C(t.dirtyFields,a),!i.keepTouched&&C(t.touchedFields,a),!i.keepIsValidating&&C(t.validatingFields,a),!s.shouldUnregister&&!i.keepDefaultValue&&C(n,a);v.values.next({values:{...l}}),v.state.next({...t,...i.keepDirty?{isDirty:b()}:{}}),!i.keepIsValid&&J()},Ie=({disabled:r,name:i,field:a,fields:d,value:c})=>{if(H(r)&&y.mount||r){const o=r?void 0:w(c)?Ce(a?a._f:f(d,i)._f):c;A(l,i,o),ee(i,o,!1,!1,!0)}},we=(r,i={})=>{let a=f(u,r);const d=H(i.disabled);return A(u,r,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:r}},name:r,mount:!0,...i}}),h.mount.add(r),a?Ie({field:a,disabled:i.disabled,name:r,value:i.value}):k(r,!0,i.value),{...d?{disabled:i.disabled}:{},...s.progressive?{required:!!i.required,min:oe(i.min),max:oe(i.max),minLength:oe(i.minLength),maxLength:oe(i.maxLength),pattern:oe(i.pattern)}:{},name:r,onChange:ue,onBlur:ue,ref:c=>{if(c){we(r,i),a=f(u,r);const o=w(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,g=Lt(o),x=a._f.refs||[];if(g?x.find(E=>E===o):o===a._f.ref)return;A(u,r,{_f:{...a._f,...g?{refs:[...x.filter(pe),o,...Array.isArray(f(n,r))?[{}]:[]],ref:{type:o.type,name:r}}:{ref:o}}}),k(r,!1,void 0,o)}else a=f(u,r,{}),a._f&&(a._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(st(h.array,r)&&y.action)&&h.unMount.add(r)}}},je=()=>s.shouldFocusError&&ce(u,ae,h.mount),_t=r=>{H(r)&&(v.state.next({disabled:r}),ce(u,(i,a)=>{const d=f(u,a);d&&(i.disabled=d._f.disabled||r,Array.isArray(d._f.refs)&&d._f.refs.forEach(c=>{c.disabled=d._f.disabled||r}))},0,!1))},qe=(r,i)=>async a=>{let d;a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let c=O(l);if(v.state.next({isSubmitting:!0}),s.resolver){const{errors:o,values:g}=await Y();t.errors=o,c=g}else await N(u);if(C(t.errors,"root"),M(t.errors)){v.state.next({errors:{}});try{await r(c,a)}catch(o){d=o}}else i&&await i({...t.errors},a),je(),setTimeout(je);if(v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:M(t.errors)&&!d,submitCount:t.submitCount+1,errors:t.errors}),d)throw d},bt=(r,i={})=>{f(u,r)&&(w(i.defaultValue)?P(r,O(f(n,r))):(P(r,i.defaultValue),A(n,r,O(i.defaultValue))),i.keepTouched||C(t.touchedFields,r),i.keepDirty||(C(t.dirtyFields,r),t.isDirty=i.defaultValue?b(r,O(f(n,r))):b()),i.keepError||(C(t.errors,r),_.isValid&&J()),v.state.next({...t}))},We=(r,i={})=>{const a=r?O(r):n,d=O(a),c=M(r),o=c?n:d;if(i.keepDefaultValues||(n=a),!i.keepValues){if(i.keepDirtyValues)for(const g of h.mount)f(t.dirtyFields,g)?A(o,g,f(l,g)):P(g,f(o,g));else{if(Ue&&w(r))for(const g of h.mount){const x=f(u,g);if(x&&x._f){const E=Array.isArray(x._f.refs)?x._f.refs[0]:x._f.ref;if(be(E)){const B=E.closest("form");if(B){B.reset();break}}}}u={}}l=e.shouldUnregister?i.keepDefaultValues?O(n):{}:O(o),v.array.next({values:{...o}}),v.values.next({values:{...o}})}h={mount:i.keepDirtyValues?h.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},y.mount=!_.isValid||!!i.keepIsValid||!!i.keepDirtyValues,y.watch=!!e.shouldUnregister,v.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:c?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!Z(r,n)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:c?{}:i.keepDirtyValues?i.keepDefaultValues&&l?he(n,l):t.dirtyFields:i.keepDefaultValues&&r?he(n,r):i.keepDirty?t.dirtyFields:{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},He=(r,i)=>We(X(r)?r(l):r,i);return{control:{register:we,unregister:De,getFieldState:Ne,handleSubmit:qe,setError:Pe,_executeSchema:Y,_getWatch:F,_getDirty:b,_updateValid:J,_removeUnmounted:ge,_updateFieldArray:V,_updateDisabledField:Ie,_getFieldArray:p,_reset:We,_resetDefaultValues:()=>X(s.defaultValues)&&s.defaultValues().then(r=>{He(r,s.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_disableForm:_t,_subjects:v,_proxyFormState:_,_setErrors:G,get _fields(){return u},get _formValues(){return l},get _state(){return y},set _state(r){y=r},get _defaultValues(){return n},get _names(){return h},set _names(r){h=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:le,register:we,handleSubmit:qe,watch:vt,setValue:P,getValues:Me,reset:He,resetField:bt,clearErrors:ht,unregister:De,setError:Pe,setFocus:(r,i={})=>{const a=f(u,r),d=a&&a._f;if(d){const c=d.refs?d.refs[0]:d.ref;c.focus&&(c.focus(),i.shouldSelect&&c.select())}},getFieldState:Ne}}function Kt(e={}){const s=D.useRef(),t=D.useRef(),[u,n]=D.useState({isDirty:!1,isValidating:!1,isLoading:X(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:X(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Pt(e),formState:u});const l=s.current.control;return l._options=e,Te({subject:l._subjects.state,next:y=>{at(y,l._proxyFormState,l._updateFormState,!0)&&n({...l._formState})}}),D.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),D.useEffect(()=>{if(l._proxyFormState.isDirty){const y=l._getDirty();y!==u.isDirty&&l._subjects.state.next({isDirty:y})}},[l,u.isDirty]),D.useEffect(()=>{e.values&&!Z(e.values,t.current)?(l._reset(e.values,l._options.resetOptions),t.current=e.values,n(y=>({...y}))):l._resetDefaultValues()},[e.values,l]),D.useEffect(()=>{e.errors&&l._setErrors(e.errors)},[e.errors,l]),D.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),D.useEffect(()=>{e.shouldUnregister&&l._subjects.values.next({values:l._getWatch()})},[e.shouldUnregister,l]),s.current.formState=ut(u,l),s.current}const It="/Petlove/images/upload-url.svg",Gt=({handleFileChange:e,handleAvatarUpload:s,register:t})=>ne.jsxs("div",{className:"form-group",children:[ne.jsx("input",{type:"text",placeholder:"Enter URL",className:"url-input",...t("avatar")}),ne.jsx(At,{type:"button",text:"Upload photo",className:"button-upload",onClick:s,children:ne.jsx("img",{src:It,alt:"Upload",className:"button-icon"})}),ne.jsx("input",{type:"file",name:"file",onChange:e,className:"select-avatar-input"})]});export{$t as C,Gt as U,pt as a,f as g,A as s,Kt as u};