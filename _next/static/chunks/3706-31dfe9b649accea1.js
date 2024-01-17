"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3706],{93706:function(e,n,t){t.r(n),t.d(n,{Divider:function(){return e_},Item:function(){return em},ItemGroup:function(){return eT},MenuItem:function(){return em},MenuItemGroup:function(){return eT},SubMenu:function(){return eK},default:function(){return ej},useFullPath:function(){return S}});var r=t(13428),o=t(21076),i=t(10870),l=t(16141),u=t(98961),a=t(82554),c=t(54440),s=t.n(c),f=t(62944),d=t(73310),v=t(41595),m=t(54812),p=t(2265),y=t(54887),b=p.createContext(null);function h(e,n){return void 0===e?null:"".concat(e,"-").concat(n)}function Z(e){return h(p.useContext(b),e)}var g=t(69320),C=["children","locked"],E=p.createContext(null);function M(e){var n=e.children,t=e.locked,r=(0,a.Z)(e,C),o=p.useContext(E),l=(0,g.Z)(function(){var e;return e=(0,i.Z)({},o),Object.keys(r).forEach(function(n){var t=r[n];void 0!==t&&(e[n]=t)}),e},[o,r],function(e,n){return!t&&(e[0]!==n[0]||!(0,v.Z)(e[1],n[1],!0))});return p.createElement(E.Provider,{value:l},n)}var I=p.createContext(null);function N(){return p.useContext(I)}var w=p.createContext([]);function S(e){var n=p.useContext(w);return p.useMemo(function(){return void 0!==e?[].concat((0,l.Z)(n),[e]):n},[n,e])}var k=p.createContext(null),R=p.createContext({}),x=t(42120);function K(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if((0,x.Z)(e)){var t=e.nodeName.toLowerCase(),r=["input","select","textarea","button"].includes(t)||e.isContentEditable||"a"===t&&!!e.getAttribute("href"),o=e.getAttribute("tabindex"),i=Number(o),l=null;return o&&!Number.isNaN(i)?l=i:r&&null===l&&(l=0),r&&e.disabled&&(l=null),null!==l&&(l>=0||n&&l<0)}return!1}var P=t(89017),A=t(43197),D=P.Z.LEFT,O=P.Z.RIGHT,T=P.Z.UP,_=P.Z.DOWN,L=P.Z.ENTER,z=P.Z.ESC,V=P.Z.HOME,F=P.Z.END,j=[T,_,D,O];function W(e,n){return(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=(0,l.Z)(e.querySelectorAll("*")).filter(function(e){return K(e,n)});return K(e,n)&&t.unshift(e),t})(e,!0).filter(function(e){return n.has(e)})}function G(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if(!e)return null;var o=W(e,n),i=o.length,l=o.findIndex(function(e){return t===e});return r<0?-1===l?l=i-1:l-=1:r>0&&(l+=1),o[l=(l+i)%i]}var B=function(e,n){var t=new Set,r=new Map,o=new Map;return e.forEach(function(e){var i=document.querySelector("[data-menu-id='".concat(h(n,e),"']"));i&&(t.add(i),o.set(i,e),r.set(e,i))}),{elements:t,key2element:r,element2key:o}},H="__RC_UTIL_PATH_SPLIT__",q=function(e){return e.join(H)},U="rc-menu-more";function X(e){var n=p.useRef(e);n.current=e;var t=p.useCallback(function(){for(var e,t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return null===(e=n.current)||void 0===e?void 0:e.call.apply(e,[n].concat(r))},[]);return e?t:void 0}var Y=Math.random().toFixed(5).toString().slice(2),J=0,Q=t(49034),$=t(88755),ee=t(91847),en=t(20994),et=t(54925),er=t(17146);function eo(e,n,t,r){var o=p.useContext(E),i=o.activeKey,l=o.onActive,u=o.onInactive,a={active:i===e};return n||(a.onMouseEnter=function(n){null==t||t({key:e,domEvent:n}),l(e)},a.onMouseLeave=function(n){null==r||r({key:e,domEvent:n}),u(e)}),a}function ei(e){var n=p.useContext(E),t=n.mode,r=n.rtl,o=n.inlineIndent;return"inline"!==t?null:r?{paddingRight:e*o}:{paddingLeft:e*o}}function el(e){var n,t=e.icon,r=e.props,o=e.children;return null===t||!1===t?null:("function"==typeof t?n=p.createElement(t,(0,i.Z)({},r)):"boolean"!=typeof t&&(n=t),n||o||null)}var eu=["item"];function ea(e){var n=e.item,t=(0,a.Z)(e,eu);return Object.defineProperty(t,"item",{get:function(){return(0,m.ZP)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),n}}),t}var ec=["title","attribute","elementRef"],es=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],ef=["active"],ed=function(e){(0,ee.Z)(t,e);var n=(0,en.Z)(t);function t(){return(0,Q.Z)(this,t),n.apply(this,arguments)}return(0,$.Z)(t,[{key:"render",value:function(){var e=this.props,n=e.title,t=e.attribute,o=e.elementRef,i=(0,a.Z)(e,ec),l=(0,et.Z)(i,["eventKey","popupClassName","popupOffset","onTitleClick"]);return(0,m.ZP)(!t,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),p.createElement(f.Z.Item,(0,r.Z)({},t,{title:"string"==typeof n?n:void 0},l,{ref:o}))}}]),t}(p.Component),ev=p.forwardRef(function(e,n){var t,u=e.style,c=e.className,f=e.eventKey,d=(e.warnKey,e.disabled),v=e.itemIcon,m=e.children,y=e.role,b=e.onMouseEnter,h=e.onMouseLeave,g=e.onClick,C=e.onKeyDown,M=e.onFocus,I=(0,a.Z)(e,es),N=Z(f),w=p.useContext(E),k=w.prefixCls,x=w.onItemClick,K=w.disabled,A=w.overflowDisabled,D=w.itemIcon,O=w.selectedKeys,T=w.onActive,_=p.useContext(R)._internalRenderMenuItem,L="".concat(k,"-item"),z=p.useRef(),V=p.useRef(),F=K||d,j=(0,er.x1)(n,V),W=S(f),G=function(e){return{key:f,keyPath:(0,l.Z)(W).reverse(),item:z.current,domEvent:e}},B=eo(f,F,b,h),H=B.active,q=(0,a.Z)(B,ef),U=O.includes(f),X=ei(W.length),Y={};"option"===e.role&&(Y["aria-selected"]=U);var J=p.createElement(ed,(0,r.Z)({ref:z,elementRef:j,role:null===y?"none":y||"menuitem",tabIndex:d?null:-1,"data-menu-id":A&&N?null:N},I,q,Y,{component:"li","aria-disabled":d,style:(0,i.Z)((0,i.Z)({},X),u),className:s()(L,(t={},(0,o.Z)(t,"".concat(L,"-active"),H),(0,o.Z)(t,"".concat(L,"-selected"),U),(0,o.Z)(t,"".concat(L,"-disabled"),F),t),c),onClick:function(e){if(!F){var n=G(e);null==g||g(ea(n)),x(n)}},onKeyDown:function(e){if(null==C||C(e),e.which===P.Z.ENTER){var n=G(e);null==g||g(ea(n)),x(n)}},onFocus:function(e){T(f),null==M||M(e)}}),m,p.createElement(el,{props:(0,i.Z)((0,i.Z)({},e),{},{isSelected:U}),icon:v||D}));return _&&(J=_(J,e,{selected:U})),J}),em=p.forwardRef(function(e,n){var t=e.eventKey,o=N(),i=S(t);return(p.useEffect(function(){if(o)return o.registerPath(t,i),function(){o.unregisterPath(t,i)}},[i]),o)?null:p.createElement(ev,(0,r.Z)({},e,{ref:n}))}),ep=["className","children"],ey=p.forwardRef(function(e,n){var t=e.className,o=e.children,i=(0,a.Z)(e,ep),l=p.useContext(E),u=l.prefixCls,c=l.mode,f=l.rtl;return p.createElement("ul",(0,r.Z)({className:s()(u,f&&"".concat(u,"-rtl"),"".concat(u,"-sub"),"".concat(u,"-").concat("inline"===c?"inline":"vertical"),t),role:"menu"},i,{"data-menu-list":!0,ref:n}),o)});ey.displayName="SubMenuList";var eb=t(79173);function eh(e,n){return(0,eb.Z)(e).map(function(e,t){if(p.isValidElement(e)){var r,o,i=e.key,u=null!==(r=null===(o=e.props)||void 0===o?void 0:o.eventKey)&&void 0!==r?r:i;null==u&&(u="tmp_key-".concat([].concat((0,l.Z)(n),[t]).join("-")));var a={key:u,eventKey:u};return p.cloneElement(e,a)}return e})}var eZ=t(16758),eg={adjustX:1,adjustY:1},eC={topLeft:{points:["bl","tl"],overflow:eg},topRight:{points:["br","tr"],overflow:eg},bottomLeft:{points:["tl","bl"],overflow:eg},bottomRight:{points:["tr","br"],overflow:eg},leftTop:{points:["tr","tl"],overflow:eg},leftBottom:{points:["br","bl"],overflow:eg},rightTop:{points:["tl","tr"],overflow:eg},rightBottom:{points:["bl","br"],overflow:eg}},eE={topLeft:{points:["bl","tl"],overflow:eg},topRight:{points:["br","tr"],overflow:eg},bottomLeft:{points:["tl","bl"],overflow:eg},bottomRight:{points:["tr","br"],overflow:eg},rightTop:{points:["tr","tl"],overflow:eg},rightBottom:{points:["br","bl"],overflow:eg},leftTop:{points:["tl","tr"],overflow:eg},leftBottom:{points:["bl","br"],overflow:eg}};function eM(e,n,t){return n||(t?t[e]||t.other:void 0)}var eI={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function eN(e){var n=e.prefixCls,t=e.visible,r=e.children,l=e.popup,a=e.popupStyle,c=e.popupClassName,f=e.popupOffset,d=e.disabled,v=e.mode,m=e.onVisibleChange,y=p.useContext(E),b=y.getPopupContainer,h=y.rtl,Z=y.subMenuOpenDelay,g=y.subMenuCloseDelay,C=y.builtinPlacements,M=y.triggerSubMenuAction,I=y.forceSubMenuRender,N=y.rootClassName,w=y.motion,S=y.defaultMotions,k=p.useState(!1),R=(0,u.Z)(k,2),x=R[0],K=R[1],P=h?(0,i.Z)((0,i.Z)({},eE),C):(0,i.Z)((0,i.Z)({},eC),C),D=eI[v],O=eM(v,w,S),T=p.useRef(O);"inline"!==v&&(T.current=O);var _=(0,i.Z)((0,i.Z)({},T.current),{},{leavedClassName:"".concat(n,"-hidden"),removeOnLeave:!1,motionAppear:!0}),L=p.useRef();return p.useEffect(function(){return L.current=(0,A.Z)(function(){K(t)}),function(){A.Z.cancel(L.current)}},[t]),p.createElement(eZ.Z,{prefixCls:n,popupClassName:s()("".concat(n,"-popup"),(0,o.Z)({},"".concat(n,"-rtl"),h),c,N),stretch:"horizontal"===v?"minWidth":null,getPopupContainer:b,builtinPlacements:P,popupPlacement:D,popupVisible:x,popup:l,popupStyle:a,popupAlign:f&&{offset:f},action:d?[]:[M],mouseEnterDelay:Z,mouseLeaveDelay:g,onPopupVisibleChange:m,forceRender:I,popupMotion:_,fresh:!0},r)}var ew=t(52640);function eS(e){var n=e.id,t=e.open,o=e.keyPath,l=e.children,a="inline",c=p.useContext(E),s=c.prefixCls,f=c.forceSubMenuRender,d=c.motion,v=c.defaultMotions,m=c.mode,y=p.useRef(!1);y.current=m===a;var b=p.useState(!y.current),h=(0,u.Z)(b,2),Z=h[0],g=h[1],C=!!y.current&&t;p.useEffect(function(){y.current&&g(!1)},[m]);var I=(0,i.Z)({},eM(a,d,v));o.length>1&&(I.motionAppear=!1);var N=I.onVisibleChanged;return(I.onVisibleChanged=function(e){return y.current||e||g(!0),null==N?void 0:N(e)},Z)?null:p.createElement(M,{mode:a,locked:!y.current},p.createElement(ew.default,(0,r.Z)({visible:C},I,{forceRender:f,removeOnLeave:!1,leavedClassName:"".concat(s,"-hidden")}),function(e){var t=e.className,r=e.style;return p.createElement(ey,{id:n,className:t,style:r},l)}))}var ek=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","popupStyle","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],eR=["active"],ex=function(e){var n,t=e.style,l=e.className,c=e.title,d=e.eventKey,v=(e.warnKey,e.disabled),m=e.internalPopupClose,y=e.children,b=e.itemIcon,h=e.expandIcon,g=e.popupClassName,C=e.popupOffset,I=e.popupStyle,N=e.onClick,w=e.onMouseEnter,x=e.onMouseLeave,K=e.onTitleClick,P=e.onTitleMouseEnter,A=e.onTitleMouseLeave,D=(0,a.Z)(e,ek),O=Z(d),T=p.useContext(E),_=T.prefixCls,L=T.mode,z=T.openKeys,V=T.disabled,F=T.overflowDisabled,j=T.activeKey,W=T.selectedKeys,G=T.itemIcon,B=T.expandIcon,H=T.onItemClick,q=T.onOpenChange,U=T.onActive,Y=p.useContext(R)._internalRenderSubMenuItem,J=p.useContext(k).isSubPathKey,Q=S(),$="".concat(_,"-submenu"),ee=V||v,en=p.useRef(),et=p.useRef(),er=null!=h?h:B,eu=z.includes(d),ec=!F&&eu,es=J(W,d),ef=eo(d,ee,P,A),ed=ef.active,ev=(0,a.Z)(ef,eR),em=p.useState(!1),ep=(0,u.Z)(em,2),eb=ep[0],eh=ep[1],eZ=function(e){ee||eh(e)},eg=p.useMemo(function(){return ed||"inline"!==L&&(eb||J([j],d))},[L,ed,j,eb,d,J]),eC=ei(Q.length),eE=X(function(e){null==N||N(ea(e)),H(e)}),eM=O&&"".concat(O,"-popup"),eI=p.createElement("div",(0,r.Z)({role:"menuitem",style:eC,className:"".concat($,"-title"),tabIndex:ee?null:-1,ref:en,title:"string"==typeof c?c:null,"data-menu-id":F&&O?null:O,"aria-expanded":ec,"aria-haspopup":!0,"aria-controls":eM,"aria-disabled":ee,onClick:function(e){ee||(null==K||K({key:d,domEvent:e}),"inline"===L&&q(d,!eu))},onFocus:function(){U(d)}},ev),c,p.createElement(el,{icon:"horizontal"!==L?er:void 0,props:(0,i.Z)((0,i.Z)({},e),{},{isOpen:ec,isSubMenu:!0})},p.createElement("i",{className:"".concat($,"-arrow")}))),ew=p.useRef(L);if("inline"!==L&&Q.length>1?ew.current="vertical":ew.current=L,!F){var ex=ew.current;eI=p.createElement(eN,{mode:ex,prefixCls:$,visible:!m&&ec&&"inline"!==L,popupClassName:g,popupOffset:C,popupStyle:I,popup:p.createElement(M,{mode:"horizontal"===ex?"vertical":ex},p.createElement(ey,{id:eM,ref:et},y)),disabled:ee,onVisibleChange:function(e){"inline"!==L&&q(d,e)}},eI)}var eK=p.createElement(f.Z.Item,(0,r.Z)({role:"none"},D,{component:"li",style:t,className:s()($,"".concat($,"-").concat(L),l,(n={},(0,o.Z)(n,"".concat($,"-open"),ec),(0,o.Z)(n,"".concat($,"-active"),eg),(0,o.Z)(n,"".concat($,"-selected"),es),(0,o.Z)(n,"".concat($,"-disabled"),ee),n)),onMouseEnter:function(e){eZ(!0),null==w||w({key:d,domEvent:e})},onMouseLeave:function(e){eZ(!1),null==x||x({key:d,domEvent:e})}}),eI,!F&&p.createElement(eS,{id:eM,open:ec,keyPath:Q},y));return Y&&(eK=Y(eK,e,{selected:es,active:eg,open:ec,disabled:ee})),p.createElement(M,{onItemClick:eE,mode:"horizontal"===L?"vertical":L,itemIcon:null!=b?b:G,expandIcon:er},eK)};function eK(e){var n,t=e.eventKey,r=e.children,o=S(t),i=eh(r,o),l=N();return p.useEffect(function(){if(l)return l.registerPath(t,o),function(){l.unregisterPath(t,o)}},[o]),n=l?i:p.createElement(ex,e,i),p.createElement(w.Provider,{value:o},n)}var eP=t(60075),eA=["className","title","eventKey","children"],eD=["children"],eO=function(e){var n=e.className,t=e.title,o=(e.eventKey,e.children),i=(0,a.Z)(e,eA),l=p.useContext(E).prefixCls,u="".concat(l,"-item-group");return p.createElement("li",(0,r.Z)({role:"presentation"},i,{onClick:function(e){return e.stopPropagation()},className:s()(u,n)}),p.createElement("div",{role:"presentation",className:"".concat(u,"-title"),title:"string"==typeof t?t:void 0},t),p.createElement("ul",{role:"group",className:"".concat(u,"-list")},o))};function eT(e){var n=e.children,t=(0,a.Z)(e,eD),r=eh(n,S(t.eventKey));return N()?r:p.createElement(eO,(0,et.Z)(t,["warnKey"]),r)}function e_(e){var n=e.className,t=e.style,r=p.useContext(E).prefixCls;return N()?null:p.createElement("li",{role:"separator",className:s()("".concat(r,"-item-divider"),n),style:t})}var eL=["label","children","key","type"],ez=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],eV=[],eF=p.forwardRef(function(e,n){var t,c,m,h,Z,g,C,E,N,w,S,x,K,P,Q,$,ee,en,et,er,eo,ei,el,eu,ec,es,ef,ed=e.prefixCls,ev=void 0===ed?"rc-menu":ed,ep=e.rootClassName,ey=e.style,eb=e.className,eZ=e.tabIndex,eg=e.items,eC=e.children,eE=e.direction,eM=e.id,eI=e.mode,eN=void 0===eI?"vertical":eI,ew=e.inlineCollapsed,eS=e.disabled,ek=e.disabledOverflow,eR=e.subMenuOpenDelay,ex=e.subMenuCloseDelay,eA=e.forceSubMenuRender,eD=e.defaultOpenKeys,eO=e.openKeys,eF=e.activeKey,ej=e.defaultActiveFirst,eW=e.selectable,eG=void 0===eW||eW,eB=e.multiple,eH=void 0!==eB&&eB,eq=e.defaultSelectedKeys,eU=e.selectedKeys,eX=e.onSelect,eY=e.onDeselect,eJ=e.inlineIndent,eQ=e.motion,e$=e.defaultMotions,e0=e.triggerSubMenuAction,e1=e.builtinPlacements,e2=e.itemIcon,e4=e.expandIcon,e8=e.overflowedIndicator,e5=void 0===e8?"...":e8,e7=e.overflowedIndicatorPopupClassName,e9=e.getPopupContainer,e6=e.onClick,e3=e.onOpenChange,ne=e.onKeyDown,nn=(e.openAnimation,e.openTransitionName,e._internalRenderMenuItem),nt=e._internalRenderSubMenuItem,nr=(0,a.Z)(e,ez),no=p.useMemo(function(){var e;return e=eC,eg&&(e=function e(n){return(n||[]).map(function(n,t){if(n&&"object"===(0,eP.Z)(n)){var o=n.label,i=n.children,l=n.key,u=n.type,c=(0,a.Z)(n,eL),s=null!=l?l:"tmp-".concat(t);return i||"group"===u?"group"===u?p.createElement(eT,(0,r.Z)({key:s},c,{title:o}),e(i)):p.createElement(eK,(0,r.Z)({key:s},c,{title:o}),e(i)):"divider"===u?p.createElement(e_,(0,r.Z)({key:s},c)):p.createElement(em,(0,r.Z)({key:s},c),o)}return null}).filter(function(e){return e})}(eg)),eh(e,eV)},[eC,eg]),ni=p.useState(!1),nl=(0,u.Z)(ni,2),nu=nl[0],na=nl[1],nc=p.useRef(),ns=(t=(0,d.Z)(eM,{value:eM}),m=(c=(0,u.Z)(t,2))[0],h=c[1],p.useEffect(function(){J+=1;var e="".concat(Y,"-").concat(J);h("rc-menu-uuid-".concat(e))},[]),m),nf="rtl"===eE,nd=(0,d.Z)(eD,{value:eO,postState:function(e){return e||eV}}),nv=(0,u.Z)(nd,2),nm=nv[0],np=nv[1],ny=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];function t(){np(e),null==e3||e3(e)}n?(0,y.flushSync)(t):t()},nb=p.useState(nm),nh=(0,u.Z)(nb,2),nZ=nh[0],ng=nh[1],nC=p.useRef(!1),nE=p.useMemo(function(){return("inline"===eN||"vertical"===eN)&&ew?["vertical",ew]:[eN,!1]},[eN,ew]),nM=(0,u.Z)(nE,2),nI=nM[0],nN=nM[1],nw="inline"===nI,nS=p.useState(nI),nk=(0,u.Z)(nS,2),nR=nk[0],nx=nk[1],nK=p.useState(nN),nP=(0,u.Z)(nK,2),nA=nP[0],nD=nP[1];p.useEffect(function(){nx(nI),nD(nN),nC.current&&(nw?np(nZ):ny(eV))},[nI,nN]);var nO=p.useState(0),nT=(0,u.Z)(nO,2),n_=nT[0],nL=nT[1],nz=n_>=no.length-1||"horizontal"!==nR||ek;p.useEffect(function(){nw&&ng(nm)},[nm]),p.useEffect(function(){return nC.current=!0,function(){nC.current=!1}},[]);var nV=(Z=p.useState({}),g=(0,u.Z)(Z,2)[1],C=(0,p.useRef)(new Map),E=(0,p.useRef)(new Map),N=p.useState([]),S=(w=(0,u.Z)(N,2))[0],x=w[1],K=(0,p.useRef)(0),P=(0,p.useRef)(!1),Q=function(){P.current||g({})},$=(0,p.useCallback)(function(e,n){var t=q(n);E.current.set(t,e),C.current.set(e,t),K.current+=1;var r=K.current;Promise.resolve().then(function(){r===K.current&&Q()})},[]),ee=(0,p.useCallback)(function(e,n){var t=q(n);E.current.delete(t),C.current.delete(e)},[]),en=(0,p.useCallback)(function(e){x(e)},[]),et=(0,p.useCallback)(function(e,n){var t=(C.current.get(e)||"").split(H);return n&&S.includes(t[0])&&t.unshift(U),t},[S]),er=(0,p.useCallback)(function(e,n){return e.some(function(e){return et(e,!0).includes(n)})},[et]),eo=(0,p.useCallback)(function(e){var n="".concat(C.current.get(e)).concat(H),t=new Set;return(0,l.Z)(E.current.keys()).forEach(function(e){e.startsWith(n)&&t.add(E.current.get(e))}),t},[]),p.useEffect(function(){return function(){P.current=!0}},[]),{registerPath:$,unregisterPath:ee,refreshOverflowKeys:en,isSubPathKey:er,getKeyPath:et,getKeys:function(){var e=(0,l.Z)(C.current.keys());return S.length&&e.push(U),e},getSubPathKeys:eo}),nF=nV.registerPath,nj=nV.unregisterPath,nW=nV.refreshOverflowKeys,nG=nV.isSubPathKey,nB=nV.getKeyPath,nH=nV.getKeys,nq=nV.getSubPathKeys,nU=p.useMemo(function(){return{registerPath:nF,unregisterPath:nj}},[nF,nj]),nX=p.useMemo(function(){return{isSubPathKey:nG}},[nG]);p.useEffect(function(){nW(nz?eV:no.slice(n_+1).map(function(e){return e.key}))},[n_,nz]);var nY=(0,d.Z)(eF||ej&&(null===(es=no[0])||void 0===es?void 0:es.key),{value:eF}),nJ=(0,u.Z)(nY,2),nQ=nJ[0],n$=nJ[1],n0=X(function(e){n$(e)}),n1=X(function(){n$(void 0)});(0,p.useImperativeHandle)(n,function(){return{list:nc.current,focus:function(e){var n,t,r=B(nH(),ns),o=r.elements,i=r.key2element,l=r.element2key,u=W(nc.current,o),a=null!=nQ?nQ:u[0]?l.get(u[0]):null===(n=no.find(function(e){return!e.props.disabled}))||void 0===n?void 0:n.key,c=i.get(a);a&&c&&(null==c||null===(t=c.focus)||void 0===t||t.call(c,e))}}});var n2=(0,d.Z)(eq||[],{value:eU,postState:function(e){return Array.isArray(e)?e:null==e?eV:[e]}}),n4=(0,u.Z)(n2,2),n8=n4[0],n5=n4[1],n7=function(e){if(eG){var n,t=e.key,r=n8.includes(t);n5(n=eH?r?n8.filter(function(e){return e!==t}):[].concat((0,l.Z)(n8),[t]):[t]);var o=(0,i.Z)((0,i.Z)({},e),{},{selectedKeys:n});r?null==eY||eY(o):null==eX||eX(o)}!eH&&nm.length&&"inline"!==nR&&ny(eV)},n9=X(function(e){null==e6||e6(ea(e)),n7(e)}),n6=X(function(e,n){var t=nm.filter(function(n){return n!==e});if(n)t.push(e);else if("inline"!==nR){var r=nq(e);t=t.filter(function(e){return!r.has(e)})}(0,v.Z)(nm,t,!0)||ny(t,!0)}),n3=(ei=function(e,n){var t=null!=n?n:!nm.includes(e);n6(e,t)},el=p.useRef(),(eu=p.useRef()).current=nQ,ec=function(){A.Z.cancel(el.current)},p.useEffect(function(){return function(){ec()}},[]),function(e){var n=e.which;if([].concat(j,[L,z,V,F]).includes(n)){var t=nH(),r=B(t,ns),i=r,l=i.elements,u=i.key2element,a=i.element2key,c=function(e,n){for(var t=e||document.activeElement;t;){if(n.has(t))return t;t=t.parentElement}return null}(u.get(nQ),l),s=a.get(c),f=function(e,n,t,r){var i,l,u,a,c="prev",s="next",f="children",d="parent";if("inline"===e&&r===L)return{inlineTrigger:!0};var v=(i={},(0,o.Z)(i,T,c),(0,o.Z)(i,_,s),i),m=(l={},(0,o.Z)(l,D,t?s:c),(0,o.Z)(l,O,t?c:s),(0,o.Z)(l,_,f),(0,o.Z)(l,L,f),l),p=(u={},(0,o.Z)(u,T,c),(0,o.Z)(u,_,s),(0,o.Z)(u,L,f),(0,o.Z)(u,z,d),(0,o.Z)(u,D,t?f:d),(0,o.Z)(u,O,t?d:f),u);switch(null===(a=({inline:v,horizontal:m,vertical:p,inlineSub:v,horizontalSub:p,verticalSub:p})["".concat(e).concat(n?"":"Sub")])||void 0===a?void 0:a[r]){case c:return{offset:-1,sibling:!0};case s:return{offset:1,sibling:!0};case d:return{offset:-1,sibling:!1};case f:return{offset:1,sibling:!1};default:return null}}(nR,1===nB(s,!0).length,nf,n);if(!f&&n!==V&&n!==F)return;(j.includes(n)||[V,F].includes(n))&&e.preventDefault();var d=function(e){if(e){var n=e,t=e.querySelector("a");null!=t&&t.getAttribute("href")&&(n=t);var r=a.get(e);n$(r),ec(),el.current=(0,A.Z)(function(){eu.current===r&&n.focus()})}};if([V,F].includes(n)||f.sibling||!c){var v,m=W(v=c&&"inline"!==nR?function(e){for(var n=e;n;){if(n.getAttribute("data-menu-list"))return n;n=n.parentElement}return null}(c):nc.current,l);d(n===V?m[0]:n===F?m[m.length-1]:G(v,l,c,f.offset))}else if(f.inlineTrigger)ei(s);else if(f.offset>0)ei(s,!0),ec(),el.current=(0,A.Z)(function(){r=B(t,ns);var e=c.getAttribute("aria-controls");d(G(document.getElementById(e),r.elements))},5);else if(f.offset<0){var p=nB(s,!0),y=p[p.length-2],b=u.get(y);ei(y,!1),d(b)}}null==ne||ne(e)});p.useEffect(function(){na(!0)},[]);var te=p.useMemo(function(){return{_internalRenderMenuItem:nn,_internalRenderSubMenuItem:nt}},[nn,nt]),tn="horizontal"!==nR||ek?no:no.map(function(e,n){return p.createElement(M,{key:e.key,overflowDisabled:n>n_},e)}),tt=p.createElement(f.Z,(0,r.Z)({id:eM,ref:nc,prefixCls:"".concat(ev,"-overflow"),component:"ul",itemComponent:em,className:s()(ev,"".concat(ev,"-root"),"".concat(ev,"-").concat(nR),eb,(ef={},(0,o.Z)(ef,"".concat(ev,"-inline-collapsed"),nA),(0,o.Z)(ef,"".concat(ev,"-rtl"),nf),ef),ep),dir:eE,style:ey,role:"menu",tabIndex:void 0===eZ?0:eZ,data:tn,renderRawItem:function(e){return e},renderRawRest:function(e){var n=e.length,t=n?no.slice(-n):null;return p.createElement(eK,{eventKey:U,title:e5,disabled:nz,internalPopupClose:0===n,popupClassName:e7},t)},maxCount:"horizontal"!==nR||ek?f.Z.INVALIDATE:f.Z.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(e){nL(e)},onKeyDown:n3},nr));return p.createElement(R.Provider,{value:te},p.createElement(b.Provider,{value:ns},p.createElement(M,{prefixCls:ev,rootClassName:ep,mode:nR,openKeys:nm,rtl:nf,disabled:eS,motion:nu?eQ:null,defaultMotions:nu?e$:null,activeKey:nQ,onActive:n0,onInactive:n1,selectedKeys:n8,inlineIndent:void 0===eJ?24:eJ,subMenuOpenDelay:void 0===eR?.1:eR,subMenuCloseDelay:void 0===ex?.1:ex,forceSubMenuRender:eA,builtinPlacements:e1,triggerSubMenuAction:void 0===e0?"hover":e0,getPopupContainer:e9,itemIcon:e2,expandIcon:e4,onItemClick:n9,onOpenChange:n6},p.createElement(k.Provider,{value:nX},tt),p.createElement("div",{style:{display:"none"},"aria-hidden":!0},p.createElement(I.Provider,{value:nU},no)))))});eF.Item=em,eF.SubMenu=eK,eF.ItemGroup=eT,eF.Divider=e_;var ej=eF},62944:function(e,n,t){t.d(n,{Z:function(){return R}});var r=t(13428),o=t(10870),i=t(98961),l=t(82554),u=t(2265),a=t(54440),c=t.n(a),s=t(11288),f=t(19836),d=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],v=void 0,m=u.forwardRef(function(e,n){var t,i=e.prefixCls,a=e.invalidate,f=e.item,m=e.renderItem,p=e.responsive,y=e.responsiveDisabled,b=e.registerSize,h=e.itemKey,Z=e.className,g=e.style,C=e.children,E=e.display,M=e.order,I=e.component,N=void 0===I?"div":I,w=(0,l.Z)(e,d),S=p&&!E;u.useEffect(function(){return function(){b(h,null)}},[]);var k=m&&f!==v?m(f):C;a||(t={opacity:S?0:1,height:S?0:v,overflowY:S?"hidden":v,order:p?M:v,pointerEvents:S?"none":v,position:S?"absolute":v});var R={};S&&(R["aria-hidden"]=!0);var x=u.createElement(N,(0,r.Z)({className:c()(!a&&i,Z),style:(0,o.Z)((0,o.Z)({},t),g)},R,w,{ref:n}),k);return p&&(x=u.createElement(s.default,{onResize:function(e){b(h,e.offsetWidth)},disabled:y},x)),x});m.displayName="Item";var p=t(28788),y=t(54887),b=t(43197);function h(e,n){var t=u.useState(n),r=(0,i.Z)(t,2),o=r[0],l=r[1];return[o,(0,p.Z)(function(n){e(function(){l(n)})})]}var Z=u.createContext(null),g=["component"],C=["className"],E=["className"],M=u.forwardRef(function(e,n){var t=u.useContext(Z);if(!t){var o=e.component,i=void 0===o?"div":o,a=(0,l.Z)(e,g);return u.createElement(i,(0,r.Z)({},a,{ref:n}))}var s=t.className,f=(0,l.Z)(t,C),d=e.className,v=(0,l.Z)(e,E);return u.createElement(Z.Provider,{value:null},u.createElement(m,(0,r.Z)({ref:n,className:c()(s,d)},f,v)))});M.displayName="RawItem";var I=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],N="responsive",w="invalidate";function S(e){return"+ ".concat(e.length," ...")}var k=u.forwardRef(function(e,n){var t,a,d=e.prefixCls,v=void 0===d?"rc-overflow":d,p=e.data,g=void 0===p?[]:p,C=e.renderItem,E=e.renderRawItem,M=e.itemKey,k=e.itemWidth,R=void 0===k?10:k,x=e.ssr,K=e.style,P=e.className,A=e.maxCount,D=e.renderRest,O=e.renderRawRest,T=e.suffix,_=e.component,L=void 0===_?"div":_,z=e.itemComponent,V=e.onVisibleChange,F=(0,l.Z)(e,I),j="full"===x,W=(t=u.useRef(null),function(e){t.current||(t.current=[],function(e){if("undefined"==typeof MessageChannel)(0,b.Z)(e);else{var n=new MessageChannel;n.port1.onmessage=function(){return e()},n.port2.postMessage(void 0)}}(function(){(0,y.unstable_batchedUpdates)(function(){t.current.forEach(function(e){e()}),t.current=null})})),t.current.push(e)}),G=h(W,null),B=(0,i.Z)(G,2),H=B[0],q=B[1],U=H||0,X=h(W,new Map),Y=(0,i.Z)(X,2),J=Y[0],Q=Y[1],$=h(W,0),ee=(0,i.Z)($,2),en=ee[0],et=ee[1],er=h(W,0),eo=(0,i.Z)(er,2),ei=eo[0],el=eo[1],eu=h(W,0),ea=(0,i.Z)(eu,2),ec=ea[0],es=ea[1],ef=(0,u.useState)(null),ed=(0,i.Z)(ef,2),ev=ed[0],em=ed[1],ep=(0,u.useState)(null),ey=(0,i.Z)(ep,2),eb=ey[0],eh=ey[1],eZ=u.useMemo(function(){return null===eb&&j?Number.MAX_SAFE_INTEGER:eb||0},[eb,H]),eg=(0,u.useState)(!1),eC=(0,i.Z)(eg,2),eE=eC[0],eM=eC[1],eI="".concat(v,"-item"),eN=Math.max(en,ei),ew=A===N,eS=g.length&&ew,ek=A===w,eR=eS||"number"==typeof A&&g.length>A,ex=(0,u.useMemo)(function(){var e=g;return eS?e=null===H&&j?g:g.slice(0,Math.min(g.length,U/R)):"number"==typeof A&&(e=g.slice(0,A)),e},[g,R,H,A,eS]),eK=(0,u.useMemo)(function(){return eS?g.slice(eZ+1):g.slice(ex.length)},[g,ex,eS,eZ]),eP=(0,u.useCallback)(function(e,n){var t;return"function"==typeof M?M(e):null!==(t=M&&(null==e?void 0:e[M]))&&void 0!==t?t:n},[M]),eA=(0,u.useCallback)(C||function(e){return e},[C]);function eD(e,n,t){(eb!==e||void 0!==n&&n!==ev)&&(eh(e),t||(eM(e<g.length-1),null==V||V(e)),void 0!==n&&em(n))}function eO(e,n){Q(function(t){var r=new Map(t);return null===n?r.delete(e):r.set(e,n),r})}function eT(e){return J.get(eP(ex[e],e))}(0,f.Z)(function(){if(U&&"number"==typeof eN&&ex){var e=ec,n=ex.length,t=n-1;if(!n){eD(0,null);return}for(var r=0;r<n;r+=1){var o=eT(r);if(j&&(o=o||0),void 0===o){eD(r-1,void 0,!0);break}if(e+=o,0===t&&e<=U||r===t-1&&e+eT(t)<=U){eD(t,null);break}if(e+eN>U){eD(r-1,e-o-ec+ei);break}}T&&eT(0)+ec>U&&em(null)}},[U,J,ei,ec,eP,ex]);var e_=eE&&!!eK.length,eL={};null!==ev&&eS&&(eL={position:"absolute",left:ev,top:0});var ez={prefixCls:eI,responsive:eS,component:z,invalidate:ek},eV=E?function(e,n){var t=eP(e,n);return u.createElement(Z.Provider,{key:t,value:(0,o.Z)((0,o.Z)({},ez),{},{order:n,item:e,itemKey:t,registerSize:eO,display:n<=eZ})},E(e,n))}:function(e,n){var t=eP(e,n);return u.createElement(m,(0,r.Z)({},ez,{order:n,key:t,item:e,renderItem:eA,itemKey:t,registerSize:eO,display:n<=eZ}))},eF={order:e_?eZ:Number.MAX_SAFE_INTEGER,className:"".concat(eI,"-rest"),registerSize:function(e,n){el(n),et(ei)},display:e_};if(O)O&&(a=u.createElement(Z.Provider,{value:(0,o.Z)((0,o.Z)({},ez),eF)},O(eK)));else{var ej=D||S;a=u.createElement(m,(0,r.Z)({},ez,eF),"function"==typeof ej?ej(eK):ej)}var eW=u.createElement(L,(0,r.Z)({className:c()(!ek&&v,P),style:K,ref:n},F),ex.map(eV),eR?a:null,T&&u.createElement(m,(0,r.Z)({},ez,{responsive:ew,responsiveDisabled:!eS,order:eZ,className:"".concat(eI,"-suffix"),registerSize:function(e,n){es(n)},display:!0,style:eL}),T));return ew&&(eW=u.createElement(s.default,{onResize:function(e,n){q(n.clientWidth)},disabled:!eS},eW)),eW});k.displayName="Overflow",k.Item=M,k.RESPONSIVE=N,k.INVALIDATE=w;var R=k}}]);