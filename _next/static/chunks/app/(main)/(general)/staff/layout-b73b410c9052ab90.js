(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6378],{11586:function(n,r,t){Promise.resolve().then(t.bind(t,23291))},23291:function(n,r,t){"use strict";t.r(r),t.d(r,{default:function(){return o}}),t(2265);var u=t(43194),e=t(24033),i=t(54477);function o(n){var r=n.children,t=(0,u.ei)();if((0,e.notFound)(),t.user||(0,e.redirect)("/login"),"staff"!==t.user.group)throw new i.$v;return r}},35239:function(n,r,t){"use strict";t.d(r,{g:function(){return i}});var u=t(57437),e=t(26782);function i(){return(0,u.jsx)("div",{children:(0,u.jsx)(e.default,{active:!0,paragraph:!0})})}},54477:function(n,r,t){"use strict";t.d(r,{$v:function(){return f},Dc:function(){return s},_e:function(){return c},sF:function(){return a}});var u=t(22977),e=t(6408),i=t(56417),o=t(93891),a=function(n){(0,e._)(t,n);var r=(0,o._)(t);function t(n){var e;return(0,u._)(this,t),(e=r.call(this,n||"")).name="NeverError",e}return t}((0,i._)(Error)),c=function(n){(0,e._)(t,n);var r=(0,o._)(t);function t(n){var e;return(0,u._)(this,t),(e=r.call(this,n||"")).name="InfoError",e}return t}((0,i._)(Error)),f=function(n){(0,e._)(t,n);var r=(0,o._)(t);function t(n){var e;return(0,u._)(this,t),(e=r.call(this,n||"")).name="NotStaffError",e}return t}((0,i._)(Error)),s=function(n){(0,e._)(t,n);var r=(0,o._)(t);function t(n,e){var i;return(0,u._)(this,t),(i=r.call(this,n||"")).name="DataError",i.title=e,i}return t}((0,i._)(Error))},43194:function(n,r,t){"use strict";t.d(r,{$3:function(){return s},_s:function(){return c},ei:function(){return v},t3:function(){return f}});var u=t(57437),e=t(2265),i=t(59666),o=t(35239),a=t(54477),c=(0,e.createContext)(void 0);function f(n){var r=n.children,t=(0,i.L)({endpoint:"game/game_info"}),e=t.data,a=t.mutate;return e?(0,u.jsx)(c.Provider,{value:{info:e,reloadInfo:a},children:r}):(0,u.jsx)(o.g,{})}function s(){return(0,e.useContext)(c).info}function v(){var n=s();if("success"!==n.status)throw new a._e;return n}},59666:function(n,r,t){"use strict";t.d(r,{F:function(){return o},L:function(){return i}});var u=t(42333),e=t(67912);function i(n){var r=(0,u.ZP)(n,function(n){return(0,e.HC)(n)},{refreshInterval:18e5});return{data:r.data,mutate:r.mutate}}function o(n){var r=(0,u.ZP)(n,function(n){return(0,e.HC)(n)});return{data:r.data,mutate:r.mutate}}},24033:function(n,r,t){n.exports=t(20290)}},function(n){n.O(0,[5583,4410,6857,2169,2971,7864,1744],function(){return n(n.s=11586)}),_N_E=n.O()}]);