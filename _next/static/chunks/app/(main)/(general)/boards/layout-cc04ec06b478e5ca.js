(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1232],{84250:function(e,n,t){Promise.resolve().then(t.bind(t,55407))},55407:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var r=t(57437);t(2265);var u=t(43194),o=t(24033),i=t(9736),s=t(31731),a=t(37856),c=t(10035),l=t(21684),f=t(97741);function d(e){switch(e.iconName){case"ranking":return(0,r.jsx)(l.Z,{});case"first-blood":return(0,r.jsx)(c.Z,{});case"building":return(0,r.jsx)(a.Zy,{});case"instruction":return(0,r.jsx)(a.DA,{});case"vacation":return(0,r.jsx)(a._c,{});default:return(0,r.jsx)(f.default,{})}}function v(e){var n=e.children,t=(0,u.ei)(),a=(0,o.useRouter)(),c=(0,o.useSearchParams)().get("key");c&&t.game.boards.map(function(e){return e.key}).includes(c)||(t.game.boards.length>0?(0,o.redirect)("/boards?key=".concat(t.game.boards[0].key)):(0,o.redirect)("/home"));var l=t.game.boards.map(function(e){return{label:(0,r.jsx)(s.g,{href:"/boards?key=".concat(e.key),targetType:"menu",children:e.name}),key:"".concat(e.key),icon:(0,r.jsx)(d,{iconName:e.icon})}});return(0,r.jsxs)("div",{children:[(0,r.jsx)(i.default,{className:"router-menu",selectedKeys:[c],mode:"horizontal",items:l,onClick:function(e){a.push("/boards?key=".concat(e.key))},style:{marginBottom:"8px"}}),n]})}},31731:function(e,n,t){"use strict";t.d(n,{g:function(){return l}});var r=t(35029),u=t(57437),o=t(2265),i=t(84987),s=t(24033),a=t(61396),c=t.n(a);function l(e){var n=e.children,t=e.href,a=e.targetType,l=e.onClick,f=e.className,d=e.style,v=e.disabled,m=void 0!==v&&v,h=(0,o.useContext)(i.Q).useLinkForPuzzle,_=(0,s.useRouter)(),g=!1,z=!1;return(h&&"puzzle"===a&&(g=!0),("header-menu"===a||"menu"==a)&&(z=!0),z)?n:g?(0,u.jsx)(c(),{className:null!=f?f:"",href:t,style:(0,r._)({textDecoration:"none",color:"inherit",cursor:"pointer"},d),onClick:function(e){if(m){e.preventDefault();return}e.stopPropagation(),l&&!m&&l()},children:n}):(0,u.jsx)("div",{className:null!=f?f:"",onClick:function(e){e.stopPropagation(),!m&&(_.push(t),l&&l())},style:(0,r._)({cursor:"pointer",display:"inline"},d),onMouseDown:function(e){e.preventDefault(),1===e.button&&window.open(t,"_blank")},children:n})}},54477:function(e,n,t){"use strict";t.d(n,{$v:function(){return c},Dc:function(){return l},_e:function(){return a},sF:function(){return s}});var r=t(22977),u=t(6408),o=t(56417),i=t(93891),s=function(e){(0,u._)(t,e);var n=(0,i._)(t);function t(e){var u;return(0,r._)(this,t),(u=n.call(this,e||"")).name="NeverError",u}return t}((0,o._)(Error)),a=function(e){(0,u._)(t,e);var n=(0,i._)(t);function t(e){var u;return(0,r._)(this,t),(u=n.call(this,e||"")).name="InfoError",u}return t}((0,o._)(Error)),c=function(e){(0,u._)(t,e);var n=(0,i._)(t);function t(e){var u;return(0,r._)(this,t),(u=n.call(this,e||"")).name="NotStaffError",u}return t}((0,o._)(Error)),l=function(e){(0,u._)(t,e);var n=(0,i._)(t);function t(e,u){var o;return(0,r._)(this,t),(o=n.call(this,e||"")).name="DataError",o.title=u,o}return t}((0,o._)(Error))},43194:function(e,n,t){"use strict";t.d(n,{$3:function(){return l},_s:function(){return a},ei:function(){return f},t3:function(){return c}});var r=t(57437),u=t(2265),o=t(59666),i=t(35239),s=t(54477),a=(0,u.createContext)(void 0);function c(e){var n=e.children,t=(0,o.L)({endpoint:"game/game_info"}),u=t.data,s=t.mutate;return u?(0,r.jsx)(a.Provider,{value:{info:u,reloadInfo:s},children:n}):(0,r.jsx)(i.g,{})}function l(){return(0,u.useContext)(a).info}function f(){var e=l();if("success"!==e.status)throw new s._e;return e}},84987:function(e,n,t){"use strict";t.d(n,{N:function(){return c},Q:function(){return a}});var r=t(24670),u=t(57437),o=t(2265),i=t(43194),s=t(38225),a=(0,o.createContext)(void 0);function c(e){var n,t=e.children,c=(0,i.ei)(),l=(0,r._)((0,o.useState)(!1),2),f=l[0],d=l[1],v=(0,r._)((0,o.useState)(!1),2),m=v[0],h=v[1],_=function(e){localStorage.setItem(e,(0,s.gz)({useLinkForPuzzle:!1,usePuzzleList:!1}))},g=null===(n=c.user)||void 0===n?void 0:n.id,z=g?g+"_setting":"default_setting";return(0,o.useEffect)(function(){var e=localStorage.getItem(z);if(!e){_(z);return}var n=(0,s.vT)(e);if(!n){_(z);return}d(!!n.useLinkForPuzzle),h(!!n.usePuzzleList)},[z]),(0,u.jsx)(a.Provider,{value:{useLinkForPuzzle:f,setUseLinkForPuzzle:function(e){localStorage.setItem(z,(0,s.gz)({useLinkForPuzzle:e,usePuzzleList:m})),d(e),localStorage.getItem(z)},usePuzzleList:m,setUsePuzzleList:function(e){localStorage.setItem(z,(0,s.gz)({useLinkForPuzzle:f,usePuzzleList:e})),h(e),localStorage.getItem(z)}},children:t})}}},function(e){e.O(0,[5583,4410,6857,6126,5193,5682,2044,3706,5602,1396,442,2169,7359,2971,7864,1744],function(){return e(e.s=84250)}),_N_E=e.O()}]);