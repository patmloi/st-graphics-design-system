import{r as m}from"./index-f1f749bf.js";import{M as c}from"./index-2e777bef.js";import{u as p}from"./index-9ec211f2.js";import"./_commonjsHelpers-042e6b4d.js";import"./preload-helper-41c905a7.js";import"./index-468f78b1.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./chunk-XHUUYXNA-48cd50f6.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-3EFM6HRY-4c51b38f.js";import"./_getTag-597ba865.js";import"./index-4d2c998a.js";var e={},x={get exports(){return e},set exports(s){e=s}},o={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=m,h=Symbol.for("react.element"),f=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,j=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function d(s,t,n){var r,i={},a=null,l=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)u.call(t,r)&&!b.hasOwnProperty(r)&&(i[r]=t[r]);if(s&&s.defaultProps)for(r in t=s.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:h,type:s,key:a,ref:l,props:i,_owner:j.current}}o.Fragment=f;o.jsx=d;o.jsxs=d;(function(s){s.exports=o})(x);const k=""+new URL("comments-f15a6837.svg",import.meta.url).href,y=""+new URL("flow-275142c6.svg",import.meta.url).href,w=""+new URL("plugin-57148314.svg",import.meta.url).href,v=""+new URL("repo-fb4ece47.svg",import.meta.url).href;function U(s={}){const{wrapper:t}=Object.assign({},p(),s.components);return t?e.jsx(t,Object.assign({},s,{children:e.jsx(n,{})})):n();function n(){const r=Object.assign({h1:"h1",p:"p",strong:"strong"},p(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Introduction"}),`
`,e.jsx("style",{children:`
    .subheading {
      --mediumdark: '#999999';
      font-weight: 900;
      font-size: 13px;
      color: #999;
      letter-spacing: 6px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
      margin-top: 40px;
    }

    .link-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    @media (min-width: 620px) {
      .link-list {
        row-gap: 20px;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }

    @media all and (-ms-high-contrast:none) {
    .link-list {
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr;
        -ms-grid-rows: 1fr 1fr;
      }
    }

    .link-item {
      display: block;
      padding: 20px 30px 20px 15px;
      border: 1px solid #00000010;
      border-radius: 5px;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #333333;
      display: flex;
      align-items: flex-start;
    }

    .link-item:hover {
      border-color: #1EA7FD50;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }

    .link-item:active {
      border-color: #1EA7FD;
      transform: translate3d(0, 0, 0);
    }

    .link-item strong {
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }

    .link-item img {
      height: 40px;
      width: 40px;
      margin-right: 15px;
      flex: none;
    }

    .link-item span {
      font-size: 14px;
      line-height: 20px;
    }

    .tip {
      display: inline-block;
      border-radius: 1em;
      font-size: 11px;
      line-height: 12px;
      font-weight: 700;
      background: #E7FDD8;
      color: #66BF3C;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `}),`
`,e.jsx(r.h1,{children:"ST Graphics Design System"}),`
`,e.jsxs(r.p,{children:["The design system aims to provide reference to ",e.jsx(r.strong,{children:"designers and developers"})," about existing components, tools, guidelines, and resources"]}),`
`,e.jsx("div",{className:"subheading",children:"Configure"}),`
`,e.jsxs("div",{className:"link-list",children:[e.jsxs("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank",children:[e.jsx("img",{src:w,alt:"plugin"}),e.jsx("span",{children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"Presets for popular tools"}),`
Easy setup for TypeScript, SCSS and more.`]})})]}),e.jsxs("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank",children:[e.jsx("img",{src:y,alt:"flow"}),e.jsx("span",{children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"Data"}),`
Providers and mocking for data libraries`]})})]})]}),`
`,e.jsx("div",{className:"subheading",children:"Learn"}),`
`,e.jsxs("div",{className:"link-list",children:[e.jsxs("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank",children:[e.jsx("img",{src:v,alt:"repo"}),e.jsx("span",{children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"Storybook documentation"}),`
Configure, customize, and extend`]})})]}),e.jsxs("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank",children:[e.jsx("img",{src:k,alt:"comments"}),e.jsx("span",{children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"Discord chat"}),`
Chat with maintainers and the community`]})})]})]}),`
`,e.jsx("div",{className:"tip-wrapper",children:e.jsxs(r.p,{children:[e.jsx("span",{className:"tip",children:"Tip"}),"Edit the Markdown in"," ",`
`,e.jsx("code",{children:"stories/Introduction.stories.mdx"})]})})]})}}export{U as default};
//# sourceMappingURL=Introduction-554eac3e.js.map
