(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[769],{6979:function(e,n,t){"use strict";var r=(0,t(2265).createContext)({});n.Z=r},45161:function(e,n,t){"use strict";var r=t(13428),o=t(10870),i=t(21076),a=t(82554),c=t(2265),u=t(54440),s=t.n(u),l=t(17146),f=t(6979),d=t(95458),p=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],m=c.forwardRef(function(e,n){var t=e.className,u=e.component,m=e.viewBox,h=e.spin,v=e.rotate,y=e.tabIndex,g=e.onClick,b=e.children,x=(0,a.Z)(e,p),k=c.useRef(),_=(0,l.x1)(k,n);(0,d.Kp)(!!(u||b),"Should have `component` prop or `children`."),(0,d.C3)(k);var z=c.useContext(f.Z),C=z.prefixCls,S=void 0===C?"anticon":C,w=z.rootClassName,P=s()(w,S,t),j=s()((0,i.Z)({},"".concat(S,"-spin"),!!h)),E=(0,o.Z)((0,o.Z)({},d.vD),{},{className:j,style:v?{msTransform:"rotate(".concat(v,"deg)"),transform:"rotate(".concat(v,"deg)")}:void 0,viewBox:m});m||delete E.viewBox;var N=y;return void 0===N&&g&&(N=-1),c.createElement("span",(0,r.Z)({role:"img"},x,{ref:_,tabIndex:N,onClick:g,className:P}),u?c.createElement(u,E,b):b?((0,d.Kp)(!!m||1===c.Children.count(b)&&c.isValidElement(b)&&"use"===c.Children.only(b).type,"Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),c.createElement("svg",(0,r.Z)({},E,{viewBox:m}),b)):null)});m.displayName="AntdIcon",n.Z=m},95458:function(e,n,t){"use strict";t.d(n,{C3:function(){return y},H9:function(){return h},Kp:function(){return f},R_:function(){return function e(n,t,o){return o?s.createElement(n.tag,(0,r.Z)((0,r.Z)({key:t},p(n.attrs)),o),(n.children||[]).map(function(r,o){return e(r,"".concat(t,"-").concat(n.tag,"-").concat(o))})):s.createElement(n.tag,(0,r.Z)({key:t},p(n.attrs)),(n.children||[]).map(function(r,o){return e(r,"".concat(t,"-").concat(n.tag,"-").concat(o))}))}},pw:function(){return m},r:function(){return d},vD:function(){return v}});var r=t(10870),o=t(60075),i=t(1032),a=t(45570),c=t(9160),u=t(54812),s=t(2265),l=t(6979);function f(e,n){(0,u.ZP)(e,"[@ant-design/icons] ".concat(n))}function d(e){return"object"===(0,o.Z)(e)&&"string"==typeof e.name&&"string"==typeof e.theme&&("object"===(0,o.Z)(e.icon)||"function"==typeof e.icon)}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce(function(n,t){var r=e[t];return"class"===t?(n.className=r,delete n.class):(delete n[t],n[t.replace(/-(.)/g,function(e,n){return n.toUpperCase()})]=r),n},{})}function m(e){return(0,i.generate)(e)[0]}function h(e){return e?Array.isArray(e)?e:[e]:[]}var v={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},y=function(e){var n=(0,s.useContext)(l.Z),t=n.csp,r=n.prefixCls,o="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";r&&(o=o.replace(/anticon/g,r)),(0,s.useEffect)(function(){var n=e.current,r=(0,c.A)(n);(0,a.hq)(o,"@ant-design-icons",{prepend:!0,csp:t,attachTo:r})},[])}},83164:function(e,n,t){Promise.resolve().then(t.bind(t,21284))},21284:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var r=t(57437);t(2265);var o=t(24033),i=t(9736),a=t(37856),c=t(31731);function u(e){var n=e.children,t=(0,o.usePathname)(),u=(0,o.useRouter)(),s=[{label:(0,r.jsx)(c.g,{href:"/about/introduction",targetType:"menu",children:"游戏简介"}),key:"/about/introduction",icon:(0,r.jsx)(a.V3,{})},{label:(0,r.jsx)(c.g,{href:"/about/faq",targetType:"menu",children:"常见问题"}),key:"/about/faq",icon:(0,r.jsx)(a.nh,{})},{label:(0,r.jsx)(c.g,{href:"/about/tools",targetType:"menu",children:"常用工具"}),key:"/about/tools",icon:(0,r.jsx)(a.oE,{})}];return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"slim-container",children:[(0,r.jsx)(i.default,{className:"router-menu",selectedKeys:[t],mode:"horizontal",items:s,onClick:function(e){u.push(e.key)}}),(0,r.jsx)("br",{}),n]})})}},31731:function(e,n,t){"use strict";t.d(n,{g:function(){return l}});var r=t(35029),o=t(57437),i=t(2265),a=t(84987),c=t(24033),u=t(61396),s=t.n(u);function l(e){var n=e.children,t=e.href,u=e.targetType,l=e.onClick,f=e.className,d=e.style,p=e.disabled,m=void 0!==p&&p,h=(0,i.useContext)(a.Q).useLinkForPuzzle,v=(0,c.useRouter)(),y=!1,g=!1;return(h&&"puzzle"===u&&(y=!0),("header-menu"===u||"menu"==u)&&(g=!0),g)?n:y?(0,o.jsx)(s(),{className:null!=f?f:"",href:t,style:(0,r._)({textDecoration:"none",color:"inherit",cursor:"pointer"},d),onClick:function(e){if(m){e.preventDefault();return}e.stopPropagation(),l&&!m&&l()},children:n}):(0,o.jsx)("div",{className:null!=f?f:"",onClick:function(e){e.stopPropagation(),!m&&(v.push(t),l&&l())},style:(0,r._)({cursor:"pointer",display:"inline"},d),onMouseDown:function(e){e.preventDefault(),1===e.button&&window.open(t,"_blank")},children:n})}},54477:function(e,n,t){"use strict";t.d(n,{$v:function(){return s},Dc:function(){return l},_e:function(){return u},sF:function(){return c}});var r=t(22977),o=t(6408),i=t(56417),a=t(93891),c=function(e){(0,o._)(t,e);var n=(0,a._)(t);function t(e){var o;return(0,r._)(this,t),(o=n.call(this,e||"")).name="NeverError",o}return t}((0,i._)(Error)),u=function(e){(0,o._)(t,e);var n=(0,a._)(t);function t(e){var o;return(0,r._)(this,t),(o=n.call(this,e||"")).name="InfoError",o}return t}((0,i._)(Error)),s=function(e){(0,o._)(t,e);var n=(0,a._)(t);function t(e){var o;return(0,r._)(this,t),(o=n.call(this,e||"")).name="NotStaffError",o}return t}((0,i._)(Error)),l=function(e){(0,o._)(t,e);var n=(0,a._)(t);function t(e,o){var i;return(0,r._)(this,t),(i=n.call(this,e||"")).name="DataError",i.title=o,i}return t}((0,i._)(Error))},43194:function(e,n,t){"use strict";t.d(n,{$3:function(){return l},_s:function(){return u},ei:function(){return f},t3:function(){return s}});var r=t(57437),o=t(2265),i=t(59666),a=t(35239),c=t(54477),u=(0,o.createContext)(void 0);function s(e){var n=e.children,t=(0,i.L)({endpoint:"game/game_info"}),o=t.data,c=t.mutate;return o?(0,r.jsx)(u.Provider,{value:{info:o,reloadInfo:c},children:n}):(0,r.jsx)(a.g,{})}function l(){return(0,o.useContext)(u).info}function f(){var e=l();if("success"!==e.status)throw new c._e;return e}},84987:function(e,n,t){"use strict";t.d(n,{N:function(){return s},Q:function(){return u}});var r=t(24670),o=t(57437),i=t(2265),a=t(43194),c=t(38225),u=(0,i.createContext)(void 0);function s(e){var n,t=e.children,s=(0,a.ei)(),l=(0,r._)((0,i.useState)(!1),2),f=l[0],d=l[1],p=(0,r._)((0,i.useState)(!1),2),m=p[0],h=p[1],v=function(e){localStorage.setItem(e,(0,c.gz)({useLinkForPuzzle:!1,usePuzzleList:!1}))},y=null===(n=s.user)||void 0===n?void 0:n.id,g=y?y+"_setting":"default_setting";return(0,i.useEffect)(function(){var e=localStorage.getItem(g);if(!e){v(g);return}var n=(0,c.vT)(e);if(!n){v(g);return}d(!!n.useLinkForPuzzle),h(!!n.usePuzzleList)},[g]),(0,o.jsx)(u.Provider,{value:{useLinkForPuzzle:f,setUseLinkForPuzzle:function(e){localStorage.setItem(g,(0,c.gz)({useLinkForPuzzle:e,usePuzzleList:m})),d(e),localStorage.getItem(g)},usePuzzleList:m,setUsePuzzleList:function(e){localStorage.setItem(g,(0,c.gz)({useLinkForPuzzle:f,usePuzzleList:e})),h(e),localStorage.getItem(g)}},children:t})}},37673:function(e,n){"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=Symbol.for("react.element"),r=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),o=Object.assign,i={};function a(e,n,t){this.props=e,this.context=n,this.refs=i,this.updater=t||r}function c(){}function u(e,n,t){this.props=e,this.context=n,this.refs=i,this.updater=t||r}a.prototype.isReactComponent={},a.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},a.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},c.prototype=a.prototype;var s=u.prototype=new c;s.constructor=u,o(s,a.prototype),s.isPureReactComponent=!0;var l=Object.prototype.hasOwnProperty,f={key:!0,ref:!0,__self:!0,__source:!0};n.createElement=function(e,n,r){var o,i={},a=null,c=null;if(null!=n)for(o in void 0!==n.ref&&(c=n.ref),void 0!==n.key&&(a=""+n.key),n)l.call(n,o)&&!f.hasOwnProperty(o)&&(i[o]=n[o]);var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){for(var s=Array(u),d=0;d<u;d++)s[d]=arguments[d+2];i.children=s}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===i[o]&&(i[o]=u[o]);return{$$typeof:t,type:e,key:a,ref:c,props:i,_owner:null}}},90952:function(e,n,t){"use strict";e.exports=t(37673)}},function(e){e.O(0,[5583,4410,6857,6126,5193,5682,2044,3706,5602,1396,2169,7359,2971,7864,1744],function(){return e(e.s=83164)}),_N_E=e.O()}]);