"use strict";(self.webpackChunknifty_docs=self.webpackChunknifty_docs||[]).push([[8589],{9779:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var n=s(4848),r=s(8453),i=s(1470),a=s(9365);const c={sidebar_label:"Resize",sidebar_position:10},l="resize",o={id:"asset/instructions/resize",title:"resize",description:"Resizes an asset account. This instruction is used when adding extension data over the 10 kilobytes account resize limit to an asset via the update instruction. While it is possible to add the extension data to a buffer (uninitialized asset) account, executing an update with the buffer account will require resizing the asset account over the maximum realloc limit &mdash; using this instruction avoids this limitation, since the asset account can be resized multiple times up to the require size before the update instruction.",source:"@site/docs/asset/instructions/resize.md",sourceDirName:"asset/instructions",slug:"/asset/instructions/resize",permalink:"/docs/asset/instructions/resize",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_label:"Resize",sidebar_position:10},sidebar:"docsSidebar",previous:{title:"Remove",permalink:"/docs/asset/instructions/remove"},next:{title:"Revoke",permalink:"/docs/asset/instructions/revoke"}},u={},d=[{value:"Accounts",id:"accounts",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"resize",children:(0,n.jsx)(t.code,{children:"resize"})}),"\n",(0,n.jsxs)(t.p,{children:["Resizes an asset account. This instruction is used when adding extension data over the ",(0,n.jsx)(t.code,{children:"10"})," kilobytes account resize limit to an asset via the ",(0,n.jsx)(t.code,{children:"update"})," instruction. While it is possible to add the extension data to a buffer (uninitialized asset) account, executing an ",(0,n.jsx)(t.code,{children:"update"})," with the buffer account will require resizing the asset account over the maximum realloc limit \u2014 using this instruction avoids this limitation, since the asset account can be resized multiple times up to the require size before the ",(0,n.jsx)(t.code,{children:"update"})," instruction."]}),"\n",(0,n.jsx)(t.h2,{id:"accounts",children:"Accounts"}),"\n",(0,n.jsxs)(t.p,{children:["Below is the list of accounts expected by the ",(0,n.jsx)(t.code,{children:"resize"})," instruction."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Writable"}),(0,n.jsx)(t.th,{children:"Signer"}),(0,n.jsx)(t.th,{children:"Optional"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"asset"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Initialized asset account"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"authority"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Authority of the asset"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"payer"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{children:"(optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Account paying for the storage fees"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"system program"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{children:"System program"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"payer"})," pays for storage fees when the account size is extended and needs to be a signer; in this case, the ",(0,n.jsx)(t.code,{children:"system program"})," account is required. When the account is trimmed, the ",(0,n.jsx)(t.code,{children:"payer"})," receives the refunded rent."]}),"\n",(0,n.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"resize"})," instruction expects the type of the resize."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Offset"}),(0,n.jsx)(t.th,{children:"Size"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"strategy"})}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"Type of the resize."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"size"})}),(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"2"}),(0,n.jsx)(t.td,{children:"Extend size."})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["The resize strategy is specified as one of the values of the ",(0,n.jsx)(t.code,{children:"Strategy"})," enum:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Trim"}),": the account is resized to the minimum required size;"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Extend"}),": the account is resized by ",(0,n.jsx)(t.code,{children:"size"})," bytes."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n","\n","\n",(0,n.jsx)(i.A,{children:(0,n.jsx)(a.A,{value:"javascript",label:"JavaScript",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { resize, strategy } from '@nifty-oss/asset';\n\n// Accounts:\n//   - asset: PublicKey\n//   - authority: KeypairSigner\n//   - payer: KeypairSigner\nawait resize(umi, {\n  asset,\n  authority,\n  payer,\n  strategy: strategy('Extend', { value: 1000 }),\n}).sendAndConfirm(umi);\n"})})})})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},9365:(e,t,s)=>{s.d(t,{A:()=>a});s(6540);var n=s(4164);const r={tabItem:"tabItem_Ymn6"};var i=s(4848);function a(e){let{children:t,hidden:s,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,a),hidden:s,children:t})}},1470:(e,t,s)=>{s.d(t,{A:()=>z});var n=s(6540),r=s(4164),i=s(3104),a=s(6347),c=s(205),l=s(7485),o=s(1682),u=s(9466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:r}}=e;return{value:t,label:s,attributes:n,default:r}}))}(s);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function x(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:s}=e;const r=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function m(e){const{defaultValue:t,queryString:s=!1,groupId:r}=e,i=h(e),[a,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[o,d]=p({queryString:s,groupId:r}),[m,f]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,u.Dv)(s);return[r,(0,n.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:r}),b=(()=>{const e=o??m;return x({value:e,tabValues:i})?e:null})();(0,c.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=s(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=s(4848);function v(e){let{className:t,block:s,selectedValue:n,selectValue:a,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),u=e=>{const t=e.currentTarget,s=l.indexOf(t),r=c[s].value;r!==n&&(o(t),a(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;t=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;t=l[s]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},t),children:c.map((e=>{let{value:t,label:s,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function y(e){let{lazy:t,children:s,selectedValue:r}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function g(e){const t=m(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,j.jsx)(v,{...e,...t}),(0,j.jsx)(y,{...e,...t})]})}function z(e){const t=(0,f.A)();return(0,j.jsx)(g,{...e,children:d(e.children)},String(t))}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>c});var n=s(6540);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);