(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[519],{39904:function(e,t,n){"use strict";var r=n(36199).default;Object.defineProperty(t,"__esModule",{value:!0}),t.cloneElement=function(e,t){return o(e,e,t)},t.isFragment=function(e){return e&&i(e)&&e.type===a.Fragment},t.isValidElement=void 0,t.replaceElement=o;var a=r(n(2265));let{isValidElement:i}=a;function o(e,t,n){return i(e)?a.cloneElement(e,"function"==typeof n?n(e.props||{}):n):t}t.isValidElement=i},98939:function(e,t,n){"use strict";var r=n(26314).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(2265)),i=r(n(27489));t.default=e=>{let t=a.default.useContext(i.default),n=a.default.useMemo(()=>e?"string"==typeof e?null!=e?e:t:e instanceof Function?e(t):t:t,[e,t]);return n}},91637:function(e,t,n){"use strict";var r=n(36199).default,a=n(26314).default;Object.defineProperty(t,"__esModule",{value:!0}),t.useCompactItemContext=t.default=t.SpaceCompactItemContext=t.NoCompactStyle=void 0;var i=a(n(54440)),o=a(n(2970)),u=r(n(2265)),l=n(9273),c=a(n(98939)),s=a(n(3951)),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};let d=t.SpaceCompactItemContext=u.createContext(null);t.useCompactItemContext=(e,t)=>{let n=u.useContext(d),r=u.useMemo(()=>{if(!n)return"";let{compactDirection:r,isFirstItem:a,isLastItem:o}=n,u="vertical"===r?"-vertical-":"-";return(0,i.default)(`${e}-compact${u}item`,{[`${e}-compact${u}first-item`]:a,[`${e}-compact${u}last-item`]:o,[`${e}-compact${u}item-rtl`]:"rtl"===t})},[e,t,n]);return{compactSize:null==n?void 0:n.compactSize,compactDirection:null==n?void 0:n.compactDirection,compactItemClassnames:r}},t.NoCompactStyle=e=>{let{children:t}=e;return u.createElement(d.Provider,{value:null},t)};let p=e=>{var{children:t}=e,n=f(e,["children"]);return u.createElement(d.Provider,{value:n},t)};t.default=e=>{let{getPrefixCls:t,direction:n}=u.useContext(l.ConfigContext),{size:r,direction:a,block:m,prefixCls:v,className:g,rootClassName:_,children:h}=e,x=f(e,["size","direction","block","prefixCls","className","rootClassName","children"]),y=(0,c.default)(e=>null!=r?r:e),C=t("space-compact",v),[S,b]=(0,s.default)(C),E=(0,i.default)(C,b,{[`${C}-rtl`]:"rtl"===n,[`${C}-block`]:m,[`${C}-vertical`]:"vertical"===a},g,_),j=u.useContext(d),O=(0,o.default)(h),$=u.useMemo(()=>O.map((e,t)=>{let n=e&&e.key||`${C}-item-${t}`;return u.createElement(p,{key:n,compactSize:y,compactDirection:a,isFirstItem:0===t&&(!j||(null==j?void 0:j.isFirstItem)),isLastItem:t===O.length-1&&(!j||(null==j?void 0:j.isLastItem))},e)}),[r,O,j]);return 0===O.length?null:S(u.createElement("div",Object.assign({className:E},x),$))}},8982:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=e=>{let{componentCls:t}=e;return{[t]:{"&-block":{display:"flex",width:"100%"},"&-vertical":{flexDirection:"column"}}}}},3951:function(e,t,n){"use strict";var r=n(26314).default;Object.defineProperty(t,"__esModule",{value:!0}),t.prepareComponentToken=t.default=void 0;var a=n(18710),i=r(n(8982));let o=e=>{let{componentCls:t}=e;return{[t]:{display:"inline-flex","&-rtl":{direction:"rtl"},"&-vertical":{flexDirection:"column"},"&-align":{flexDirection:"column","&-center":{alignItems:"center"},"&-start":{alignItems:"flex-start"},"&-end":{alignItems:"flex-end"},"&-baseline":{alignItems:"baseline"}},[`${t}-item:empty`]:{display:"none"}}}},u=e=>{let{componentCls:t}=e;return{[t]:{"&-gap-row-small":{rowGap:e.spaceGapSmallSize},"&-gap-row-middle":{rowGap:e.spaceGapMiddleSize},"&-gap-row-large":{rowGap:e.spaceGapLargeSize},"&-gap-col-small":{columnGap:e.spaceGapSmallSize},"&-gap-col-middle":{columnGap:e.spaceGapMiddleSize},"&-gap-col-large":{columnGap:e.spaceGapLargeSize}}}};t.prepareComponentToken=()=>({}),t.default=(0,a.genStyleHooks)("Space",e=>{let t=(0,a.mergeToken)(e,{spaceGapSmallSize:e.paddingXS,spaceGapMiddleSize:e.padding,spaceGapLargeSize:e.paddingLG});return[o(t),u(t),(0,i.default)(t)]},()=>({}),{resetStyle:!1})},41793:function(e,t,n){Promise.resolve().then(n.bind(n,40141))},40141:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(57437),a=n(88110),i=n.n(a),o=n(24033),u=n(4679),l=n.n(u),c=n(43194),s=n(54477);function f(){var e=(0,o.useRouter)(),t=(0,o.useSearchParams)().get("msg");if("error"===(0,c.$3)().status)throw new s.sF;return(0,r.jsxs)("div",{className:"slim-container "+l().main,children:[(0,r.jsx)("br",{}),"登录出错：",t,(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(i(),{danger:!0,onClick:function(){return e.push("/login")},children:"返回登录页面"})]})}},35239:function(e,t,n){"use strict";n.d(t,{g:function(){return i}});var r=n(57437),a=n(26782);function i(){return(0,r.jsx)("div",{children:(0,r.jsx)(a.default,{active:!0,paragraph:!0})})}},54477:function(e,t,n){"use strict";n.d(t,{$v:function(){return c},Dc:function(){return s},_e:function(){return l},sF:function(){return u}});var r=n(22977),a=n(6408),i=n(56417),o=n(93891),u=function(e){(0,a._)(n,e);var t=(0,o._)(n);function n(e){var a;return(0,r._)(this,n),(a=t.call(this,e||"")).name="NeverError",a}return n}((0,i._)(Error)),l=function(e){(0,a._)(n,e);var t=(0,o._)(n);function n(e){var a;return(0,r._)(this,n),(a=t.call(this,e||"")).name="InfoError",a}return n}((0,i._)(Error)),c=function(e){(0,a._)(n,e);var t=(0,o._)(n);function n(e){var a;return(0,r._)(this,n),(a=t.call(this,e||"")).name="NotStaffError",a}return n}((0,i._)(Error)),s=function(e){(0,a._)(n,e);var t=(0,o._)(n);function n(e,a){var i;return(0,r._)(this,n),(i=t.call(this,e||"")).name="DataError",i.title=a,i}return n}((0,i._)(Error))},43194:function(e,t,n){"use strict";n.d(t,{$3:function(){return s},_s:function(){return l},ei:function(){return f},t3:function(){return c}});var r=n(57437),a=n(2265),i=n(59666),o=n(35239),u=n(54477),l=(0,a.createContext)(void 0);function c(e){var t=e.children,n=(0,i.L)({endpoint:"game/game_info"}),a=n.data,u=n.mutate;return a?(0,r.jsx)(l.Provider,{value:{info:a,reloadInfo:u},children:t}):(0,r.jsx)(o.g,{})}function s(){return(0,a.useContext)(l).info}function f(){var e=s();if("success"!==e.status)throw new u._e;return e}},59666:function(e,t,n){"use strict";n.d(t,{F:function(){return o},L:function(){return i}});var r=n(42333),a=n(67912);function i(e){var t=(0,r.ZP)(e,function(e){return(0,a.HC)(e)},{refreshInterval:18e5});return{data:t.data,mutate:t.mutate}}function o(e){var t=(0,r.ZP)(e,function(e){return(0,a.HC)(e)});return{data:t.data,mutate:t.mutate}}},4679:function(){},24033:function(e,t,n){e.exports=n(20290)},2970:function(e,t,n){"use strict";var r=n(26314).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=[];return a.default.Children.forEach(t,function(t){(null!=t||n.keepEmpty)&&(Array.isArray(t)?r=r.concat(e(t)):(0,i.isFragment)(t)&&t.props?r=r.concat(e(t.props.children,n)):r.push(t))}),r};var a=r(n(2265)),i=n(73740)}},function(e){e.O(0,[5583,4410,6857,6559,8110,2169,2971,7864,1744],function(){return e(e.s=41793)}),_N_E=e.O()}]);