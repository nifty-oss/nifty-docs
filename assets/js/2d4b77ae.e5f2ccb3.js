"use strict";(self.webpackChunknifty_docs=self.webpackChunknifty_docs||[]).push([[379],{1941:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=s(4848),a=s(8453);const i={sidebar_label:"Nifty Assets",sidebar_position:1},r="Nifty Assets",o={id:"asset/nifty-assets/assets",title:"Nifty Assets",description:"Nifty Assets are the single-account non-fungible digital assets that are the heart of the Nifty standard. They are designed to be a minimalistic and flexible standard for representing non-fungible assets on Solana.",source:"@site/docs/asset/nifty-assets/assets.md",sourceDirName:"asset/nifty-assets",slug:"/asset/nifty-assets/assets",permalink:"/docs/asset/nifty-assets/assets",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/asset/nifty-assets/assets.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Nifty Assets",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Nifty Assets",permalink:"/docs/category/nifty-assets"},next:{title:"Extensions",permalink:"/docs/asset/nifty-assets/extensions"}},d={},c=[{value:"Base Metadata",id:"base-metadata",level:2},{value:"Extensions",id:"extensions",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"nifty-assets",children:"Nifty Assets"}),"\n",(0,n.jsx)(t.p,{children:"Nifty Assets are the single-account non-fungible digital assets that are the heart of the Nifty standard. They are designed to be a minimalistic and flexible standard for representing non-fungible assets on Solana."}),"\n",(0,n.jsx)(t.p,{children:"Here we examine their make up and features in-depth."}),"\n",(0,n.jsx)(t.p,{children:"Nifty Assets are composed of two parts:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Base Metadata, which is common to every Nifty Asset and"}),"\n",(0,n.jsx)(t.li,{children:"Extensions, which are optional and can be combined to create a wide variety of non-fungible assets, from simple to complex."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"base-metadata",children:"Base Metadata"}),"\n",(0,n.jsx)(t.p,{children:"The base metadata of a Nifty Asset is composed of the following fields:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Discriminator"}),(0,n.jsxs)(t.td,{children:["Represents the type of account. Currently: ",(0,n.jsx)(t.code,{children:"Unitialized"})," or ",(0,n.jsx)(t.code,{children:"Asset"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"State"}),(0,n.jsxs)(t.td,{children:["The state of the asset: ",(0,n.jsx)(t.code,{children:"Locked"})," or ",(0,n.jsx)(t.code,{children:"Unlocked"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Standard"}),(0,n.jsxs)(t.td,{children:["The standard of the asset, to allow differnt types of Nifty Assets. Currently: ",(0,n.jsx)(t.code,{children:"NonFungible"}),", ",(0,n.jsx)(t.code,{children:"Subscription"})," and ",(0,n.jsx)(t.code,{children:"Soulbound"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Mutable"}),(0,n.jsx)(t.td,{children:"Whether or not the asset can be modified"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Owner"}),(0,n.jsx)(t.td,{children:"The owner of the asset. Owners can approve delegates, transfer, and burn the asset."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Group"}),(0,n.jsx)(t.td,{children:"What group, if any, the asset belongs to."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Authority"}),(0,n.jsx)(t.td,{children:"The authority of the asset. Authorities can update assets and verify them as a member of a group."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Delegate"}),(0,n.jsx)(t.td,{children:"The delegate of the asset. Delegates can burn, lock or transfer the asset, depending on the roles assigned  to them."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Name"}),(0,n.jsx)(t.td,{children:"The name of the asset, up to 35 characters in length."})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"These 168 bytes are the minimum required to represent a Nifty Asset and are common to every Nifty Asset. Any additional data is optional and stored in extensions."}),"\n",(0,n.jsx)(t.h2,{id:"extensions",children:"Extensions"}),"\n",(0,n.jsx)(t.p,{children:"Extensions are optional chunks of data that are stored on the asset after the base metadata. They are used to add additional functionality to the asset, such as on-chain traits, on-chain generic data, on-chain metadata, royalty enforcement, on-chain grouping/collections, pointers to off-chain data, and more."}),"\n",(0,n.jsx)(t.p,{children:"The following extensions are currently available:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Attributes"}),"\n",(0,n.jsx)(t.li,{children:"Blob"}),"\n",(0,n.jsx)(t.li,{children:"Creators"}),"\n",(0,n.jsx)(t.li,{children:"Grouping"}),"\n",(0,n.jsx)(t.li,{children:"Links"}),"\n",(0,n.jsx)(t.li,{children:"Metadata"}),"\n",(0,n.jsx)(t.li,{children:"Royalty"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Extensions must be allocated at the time of the asset creation in order to fix their location in the account data. This is done to aid in the zero-copy deserialization of the data and keep the program efficient. Once allocate, extensions cannot be removed, but can be updated by the ",(0,n.jsx)(t.code,{children:"authority"})," as long as the asset is mutable."]}),"\n",(0,n.jsxs)(t.p,{children:["For more information on each extension, see the ",(0,n.jsx)(t.a,{href:"/docs/asset/nifty-assets/extensions",children:"Extensions"})," page."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>o});var n=s(6540);const a={},i=n.createContext(a);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);