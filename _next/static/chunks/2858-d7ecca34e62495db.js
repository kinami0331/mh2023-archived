(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2858],{42858:function(e,t,n){"use strict";n.d(t,{_:function(){return E}});var r=n(24670),a=n(57437),s=n(20273),o=n(88110),i=n.n(o),u=n(28170),c=n(13479),l=n(43574),d=n(33116),f=n(88500),m=n(36064),g=n(43194),h=n(54477),_=n(2265),v=n(7775),p=n(67912),x=n(98024),w=n(46912),j=n(38402),y=n.n(j),S=n(37856);function C(e){var t=e.message;return(0,a.jsx)("div",{className:y().message,children:(0,a.jsxs)(u.Z,{type:"inner",size:"small",bordered:!1,title:(0,a.jsx)(a.Fragment,{children:"to_staff"===t.direction?(0,a.jsxs)(f.Z,{style:{fontSize:"1em",fontWeight:"bold"},color:"blue",children:["【玩家】",t.user_name]}):(0,a.jsxs)(f.Z,{style:{fontSize:"1em",fontWeight:"bold"},color:"green",children:[" 【工作人员】",t.user_name," "]})}),children:[(0,a.jsx)(m.Bk,{name:"message",children:t.content}),(0,a.jsxs)("div",{className:"message-sent-time",children:[" ","发送于 ",new Date(1e3*t.timestamp_s).toLocaleString()]})]})})}function E(e){var t,n,o,f,m,j,E,N,b,k,A,M=e.teamId,R=(0,g.$3)();if("success"!==R.status||!R.user)throw new h.sF;var Z=(0,r._)((n=(t=(0,r._)((0,_.useState)(null),2))[0],o=t[1],m=(f=(0,r._)((0,_.useState)([]),2))[0],j=f[1],N=(E=(0,_.useContext)(v.s)).hasNewMessage,b=E.setHasNewMessage,k=(0,_.useCallback)(function(){(0,p.HC)({endpoint:"message/get_message",payload:{team_id:M,start_id:0}}).then(function(e){"error"===e.status?o(e):(o(null),j(e.data),void 0===window.messageStorage&&(window.messageStorage={}),window.messageStorage["team#".concat(M)]=e.data)})},[M]),A=(0,_.useCallback)(function(){if(null==m||0===m.length)return k();var e=m[m.length-1].id;(0,p.HC)({endpoint:"message/get_message",payload:{team_id:M,start_id:e}}).then(function(e){if("error"===e.status)o(e);else if(o(null),e.data.length>0){var t=m.concat(e.data);j(t),void 0===window.messageStorage&&(window.messageStorage={}),window.messageStorage["team#".concat(M)]=t}})},[m,k,M]),(0,_.useEffect)(function(){var e=void 0!==window.messageStorage?window.messageStorage["team#".concat(M)]:void 0;if(Array.isArray(e)){if(0===e.length)return k();var t=e[e.length-1].id;(0,p.HC)({endpoint:"message/get_message",payload:{team_id:M,start_id:t}}).then(function(t){if("error"===t.status)o(t);else{o(null),void 0===e&&(e=[]);var n=e.concat(t.data);j(n),window.messageStorage||(window.messageStorage={}),window.messageStorage["team#".concat(M)]=n}})}else k()},[k,M]),(0,_.useEffect)(function(){N&&(A(),b(!1))},[N,b,A]),[m,n,k,A]),3),H=Z[0],T=Z[1],P=Z[2],z=(0,r._)((0,_.useState)(""),2),I=z[0],F=z[1],B=(0,r._)(d.ZP.useMessage(),2),D=B[0],L=B[1],O=(0,_.useContext)(v.s).setHasNewMessage;if((0,_.useEffect)(function(){"success"===R.status&&R.user&&(!R.user||"staff"!==R.user.group)&&H&&(!H||0!==H.length)&&H[H.length-1].player_unread&&(0,p.HC)({endpoint:"message/read_message",payload:{team_id:M,msg_id:H[H.length-1].id}}).then(function(e){"error"===e.status&&d.ZP.error({content:"似乎出了点错误",key:"Message",duration:3}).then(),O(!1),P()})},[R.status,R.user,H,P,O,M]),T)return(0,a.jsx)(x.d,{res:T,reload:P});if(null==H)throw new h.sF;return(0,a.jsxs)("div",{className:"message-list",children:[L,(0,a.jsx)(s.Z,{message:"提示：",description:(0,a.jsx)(a.Fragment,{children:"你可以在这里向工作人员发送站内信，站内信支持部分 Markdown 语法（不支持表格）。如果你想发送图片， 可以将图片上传到其他图片站后在这里上传外链，直接发送链接或者写入 Markdown 均可。"}),className:"message-info",type:"info"}),(0,a.jsx)("br",{}),R.team&&R.team.spap>0&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{message:(0,a.jsxs)(a.Fragment,{children:["剩余猫条数量： "+R.team.spap," ",(0,a.jsx)(S.Un,{})," "]}),description:(0,a.jsx)(a.Fragment,{children:"若您要使用猫条，请在信息最开始添加【我要用猫条】的信息，并写清楚题目的名称， 您目前的进度，以及您所想询问的问题。"}),className:"message-info",type:"warning"}),(0,a.jsx)("br",{})]}),(0,a.jsx)("div",{className:y().sendMessageCard,children:(0,a.jsxs)(u.Z,{type:"inner",size:"small",bordered:!1,className:"input-card",children:[(0,a.jsx)(l.default.TextArea,{value:I,onChange:function(e){return F(e.target.value)},placeholder:"要发送的信息",autoSize:{minRows:3,maxRows:5}}),(0,a.jsxs)(i(),{type:"primary",size:"large",block:!0,disabled:""===I,onClick:function(){(0,p.HC)({endpoint:"message/send_message",payload:{team_id:M,type:"text",content:I}}).then(function(e){"error"===e.status?D.error({content:e.message,key:"send-msg-error",duration:3}).then():"info"===e.status?D.info({content:e.message,key:"send-msg-error",duration:3}).then():(D.success({content:"发送成功",key:"send-msg-success",duration:1}).then(),F(""))})},children:[(0,a.jsx)(w.Z,{})," 发送"]})]})}),Array.from(H).reverse().map(function(e){return(0,a.jsx)(C,{message:e},e.id)}),0===H.length&&(0,a.jsx)(c.default,{image:c.default.PRESENTED_IMAGE_SIMPLE,description:"暂无消息"})]})}},47915:function(e,t,n){"use strict";n.d(t,{a:function(){return u}});var r=n(57437),a=n(88110),s=n.n(a),o=n(22762),i=n(24033);function u(e){var t,n=e.title,a=e.subtitle,u=e.reload;return(0,i.useRouter)(),t=u?[(0,r.jsx)(s(),{type:"primary",onClick:u,children:"重试"},"reload"),(0,r.jsx)(s(),{onClick:function(){return window.location.href="/home"},children:"回到首页"},"home")]:[(0,r.jsx)(s(),{onClick:function(){return window.location.href="/home"},children:"回到首页"},"home")],(0,r.jsx)(o.ZP,{status:"error",title:n,subTitle:a,extra:t,style:{backgroundColor:"#fafafa",borderRadius:"16px"}})}n(2265)},36064:function(e,t,n){"use strict";n.d(t,{Gv:function(){return y},Bk:function(){return x},I$:function(){return j},BZ:function(){return w}});var r=n(35029),a=n(24670),s=n(57437),o=n(88110),i=n.n(o),u=n(52955),c=n(43574),l=n(26782),d=n(20273);function f(e){var t=e.message,n=e.reload;return(0,s.jsx)(d.Z,{type:"error",showIcon:!0,message:t,action:(0,s.jsx)(i(),{onClick:n,children:"重试"})})}var m=n(89376),g=n.n(m),h=n(42333),_=n(67912),v=n(2265),p=n(34040);function x(e){var t=e.name,n=e.children;return(0,s.jsx)("div",{className:"template-".concat(t," ")+g().template,dangerouslySetInnerHTML:{__html:n}})}function w(e){var t=e.name,n=e.children,a=(0,v.useRef)(null);return(0,v.useEffect)(function(){if(a.current){for(;a.current.firstChild;)a.current.removeChild(a.current.firstChild);var e=document.createElement("div");e.className="template-".concat(t," ")+g().template,e.innerHTML=n,Array.from(e.getElementsByClassName("template-antd-image")).forEach(function(e){var t=e.getAttribute("data-src");t&&(0,p.createRoot)(e).render((0,s.jsx)(u.Z,{src:t,alt:"image"}))}),Array.from(e.getElementsByClassName("template-antd-button")).forEach(function(e){var t=e.textContent,n=(0,p.createRoot)(e),r="button";"submit"==e.getAttribute("type")&&(r="submit");var a=e.getAttribute("data-href")||void 0;n.render((0,s.jsx)(i(),{type:"default",size:"large",href:a,htmlType:r,children:t}))}),Array.from(e.getElementsByClassName("template-antd-input")).forEach(function(e){var t=(0,p.createRoot)(e),n=JSON.parse(e.getAttribute("data-attr")||"{}");t.render((0,s.jsx)(c.default,(0,r._)({},n)))}),a.current.appendChild(e);var o=setTimeout(function(){Array.from(e.getElementsByTagName("script")).forEach(function(e){var t=e.innerHTML;window.eval(t)})},200);return function(){return clearTimeout(o)}}},[n,t]),(0,s.jsx)("div",{ref:a})}function j(e){var t=e.name,n=(0,h.ZP)([t],function(e){var t=(0,a._)(e,1)[0];return(0,_.Ym)(t)}),r=n.data,o=n.error,i=n.mutate;return o?(0,s.jsx)(f,{message:o.message,reload:i}):r?(0,s.jsx)(w,{name:t,children:r}):(0,s.jsx)(l.default,{})}function y(e){var t=e.name,n=(0,h.ZP)([t],function(e){var t=(0,a._)(e,1)[0];return(0,_.Ym)(t)}),r=n.data,o=n.error,i=n.mutate;return o?(0,s.jsx)(f,{message:o.message,reload:i}):r?(0,s.jsx)(x,{name:t,children:r}):(0,s.jsx)(l.default,{})}},98024:function(e,t,n){"use strict";n.d(t,{d:function(){return s}});var r=n(57437),a=n(47915);function s(e){var t=e.res,n=e.reload;return n?(0,r.jsx)(a.a,{title:"错误：".concat(t.message),subtitle:(0,r.jsxs)(r.Fragment,{children:["如果你确信这是异常情况，请先尝试重试，如果仍出现问题，请及时联系网站管理员。",(0,r.jsx)("br",{})]}),reload:n}):(0,r.jsx)(a.a,{title:"错误：".concat(t.message),subtitle:(0,r.jsx)(r.Fragment,{children:"如果你确信这是异常情况，请及时联系网站管理员。"})})}},54477:function(e,t,n){"use strict";n.d(t,{$v:function(){return c},Dc:function(){return l},_e:function(){return u},sF:function(){return i}});var r=n(22977),a=n(6408),s=n(56417),o=n(93891),i=function(e){(0,a._)(n,e);var t=(0,o._)(n);function n(e){var a;return(0,r._)(this,n),(a=t.call(this,e||"")).name="NeverError",a}return n}((0,s._)(Error)),u=function(e){(0,a._)(n,e);var t=(0,o._)(n);function n(e){var a;return(0,r._)(this,n),(a=t.call(this,e||"")).name="InfoError",a}return n}((0,s._)(Error)),c=function(e){(0,a._)(n,e);var t=(0,o._)(n);function n(e){var a;return(0,r._)(this,n),(a=t.call(this,e||"")).name="NotStaffError",a}return n}((0,s._)(Error)),l=function(e){(0,a._)(n,e);var t=(0,o._)(n);function n(e,a){var s;return(0,r._)(this,n),(s=t.call(this,e||"")).name="DataError",s.title=a,s}return n}((0,s._)(Error))},43194:function(e,t,n){"use strict";n.d(t,{$3:function(){return l},_s:function(){return u},ei:function(){return d},t3:function(){return c}});var r=n(57437),a=n(2265),s=n(59666),o=n(35239),i=n(54477),u=(0,a.createContext)(void 0);function c(e){var t=e.children,n=(0,s.L)({endpoint:"game/game_info"}),a=n.data,i=n.mutate;return a?(0,r.jsx)(u.Provider,{value:{info:a,reloadInfo:i},children:t}):(0,r.jsx)(o.g,{})}function l(){return(0,a.useContext)(u).info}function d(){var e=l();if("success"!==e.status)throw new i._e;return e}},7775:function(e,t,n){"use strict";n.d(t,{E:function(){return l},s:function(){return c}});var r=n(24670),a=n(57437),s=n(2265),o=n(67912),i=n(38225),u=n(43194),c=(0,s.createContext)(void 0);function l(e){var t=e.children,n=(0,r._)((0,s.useState)(!1),2),l=n[0],d=n[1],f=(0,r._)((0,s.useState)(!1),2),m=f[0],g=f[1],h=(0,r._)((0,s.useState)(!1),2),_=h[0],v=h[1],p=(0,r._)((0,s.useState)(!1),2),x=p[0],w=p[1],j=(0,r._)((0,s.useState)(!1),2),y=j[0],S=j[1],C=(0,r._)((0,s.useState)(!1),2),E=C[0],N=C[1],b=(0,r._)((0,s.useState)(!1),2),k=b[0],A=b[1],M=(0,r._)((0,s.useState)(0),2),R=M[0],Z=M[1],H=(0,r._)((0,s.useState)(0),2),T=H[0],P=H[1],z=(0,r._)((0,s.useState)(0),2),I=z[0],F=z[1],B=(0,r._)((0,s.useState)([[0,0]]),2),D=B[0],L=B[1],O=(0,u.ei)(),J=(0,s.useCallback)(function(){(0,o.HC)({endpoint:"game/team_ap_detail"}).then(function(e){if("error"!==e.status){var t=e.data.team_ap_change,n=e.data.ap_increase_policy;JSON.stringify(n)!==JSON.stringify(D)&&L(n),F(t),Z((0,i.Rp)(n,t)),P((0,i.Jy)(n))}})},[D]),U=(0,s.useCallback)(function(){D&&Z((0,i.Rp)(D,I))},[I,D]),$=(0,s.useRef)(J);return(0,s.useEffect)(function(){O.user&&O.team&&"staff"!==O.user.group&&$.current()},[O,$]),(0,s.useEffect)(function(){if(O.user&&O.team&&"staff"!==O.user.group){var e=setInterval(U,2e4);return function(){clearInterval(e)}}},[O,U]),(0,a.jsx)(c.Provider,{value:{needReloadAnnouncement:l,setNeedReloadAnnouncement:d,hasNewAnnouncement:x,setHasNewAnnouncement:w,staffUnreadOnly:y,setStaffUnreadOnly:S,staffTimeDesc:E,setStaffTimeDesc:N,hasNewMessage:k,setHasNewMessage:A,needReloadPuzzle:m,setNeedReloadPuzzle:g,needReloadArea:_,setNeedReloadArea:v,currentAp:R,currentApIncrease:T,updateCurrentAp:J},children:t})}},38402:function(e){e.exports={message:"MessageBox_message__PsNEx",sendMessageCard:"MessageBox_sendMessageCard__Y8Uhl"}},89376:function(e){e.exports={template:"Template_template__yfdH_",well:"Template_well__G_s1V"}}}]);