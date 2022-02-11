"use strict";(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[6025],{1825:(e,t,r)=>{var n=r(20862),l=r(95318);t.Z=void 0;var a=l(r(59713)),o=l(r(67154)),i=l(r(63038)),c=n(r(67294)),s=l(r(69835)),u=l(r(8259)),d=l(r(40753)),f=l(r(94184)),p=r(31929),v=r(61592),y=l(r(23854)),m=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]])}return r},h=c.createContext(null),b=((0,v.tuple)("top","right","bottom","left"),{distance:180}),C=c.forwardRef((function(e,t){var r=e.width,n=void 0===r?256:r,l=e.height,p=void 0===l?256:l,v=e.closable,C=void 0===v||v,g=e.placement,x=void 0===g?"right":g,w=e.maskClosable,k=void 0===w||w,E=e.mask,S=void 0===E||E,N=e.level,O=void 0===N?null:N,I=e.keyboard,P=void 0===I||I,j=e.push,z=void 0===j?b:j,R=e.closeIcon,D=void 0===R?c.createElement(d.default,null):R,M=e.bodyStyle,Z=e.drawerStyle,F=e.prefixCls,H=e.className,T=e.direction,W=e.visible,X=e.children,Y=e.zIndex,q=e.destroyOnClose,A=e.style,B=e.title,G=e.headerStyle,J=e.onClose,K=e.footer,L=e.footerStyle,Q=m(e,["width","height","closable","placement","maskClosable","mask","level","keyboard","push","closeIcon","bodyStyle","drawerStyle","prefixCls","className","direction","visible","children","zIndex","destroyOnClose","style","title","headerStyle","onClose","footer","footerStyle"]),U=(0,y.default)(),V=c.useState(!1),$=(0,i.default)(V,2),_=$[0],ee=$[1],te=c.useContext(h),re=c.useRef(!1);c.useEffect((function(){return W&&te&&te.push(),function(){te&&te.pull()}}),[]),c.useEffect((function(){te&&(W?te.push():te.pull())}),[W]);var ne=c.useMemo((function(){return{push:function(){z&&ee(!0)},pull:function(){z&&ee(!1)}}}),[z]);c.useImperativeHandle(t,(function(){return ne}),[ne]);var le=q&&!W,ae=function(){le&&(W||(re.current=!0,U()))},oe=function(){if(!W&&!S)return{};var e={};return"left"===x||"right"===x?e.width=n:e.height=p,e};function ie(){if(!B&&!C)return null;var e="".concat(F,B?"-header":"-header-no-title");return c.createElement("div",{className:e,style:G},B&&c.createElement("div",{className:"".concat(F,"-title")},B),C&&C&&c.createElement("button",{type:"button",onClick:J,"aria-label":"Close",className:"".concat(F,"-close"),style:{"--scroll-bar":"".concat((0,u.default)(),"px")}},D))}var ce=(0,f.default)((0,a.default)({"no-mask":!S},"".concat(F,"-rtl"),"rtl"===T),H),se=S?oe():{};return c.createElement(h.Provider,{value:ne},c.createElement(s.default,(0,o.default)({handler:!1},(0,o.default)({placement:x,prefixCls:F,maskClosable:k,level:O,keyboard:P,children:X,onClose:J},Q),se,{open:W,showMask:S,style:function(){var e=S?{}:oe();return(0,o.default)((0,o.default)({zIndex:Y,transform:_?function(e){var t;return t="boolean"===typeof z?z?b.distance:0:z.distance,t=parseFloat(String(t||0)),"left"===e||"right"===e?"translateX(".concat("left"===e?t:-t,"px)"):"top"===e||"bottom"===e?"translateY(".concat("top"===e?t:-t,"px)"):void 0}(x):void 0},e),A)}(),className:ce}),function(){if(re.current&&!W)return null;re.current=!1;var e={};return le&&(e.opacity=0,e.transition="opacity .3s"),c.createElement("div",{className:"".concat(F,"-wrapper-body"),style:(0,o.default)((0,o.default)({},e),Z),onTransitionEnd:ae},ie(),c.createElement("div",{className:"".concat(F,"-body"),style:M},X),function(){if(!K)return null;var e="".concat(F,"-footer");return c.createElement("div",{className:e,style:L},K)}())}()))}));C.displayName="Drawer";var g=c.forwardRef((function(e,t){var r=e.prefixCls,n=e.getContainer,l=c.useContext(p.ConfigContext),a=l.getPopupContainer,i=l.getPrefixCls,s=l.direction,u=i("drawer",r),d=void 0===n&&a?function(){return a(document.body)}:n;return c.createElement(C,(0,o.default)({},e,{ref:t,prefixCls:u,getContainer:d,direction:s}))}));g.displayName="DrawerWrapper";var x=g;t.Z=x},16049:(e,t,r)=>{r(62263),r(35205)},35205:(e,t,r)=>{r.r(t)}}]);