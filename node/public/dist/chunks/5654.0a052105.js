(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[5654],{33299:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"html-bec210"},12008:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>L});var n=a(37316),r=a.n(n),t=a(67154),l=a.n(t),n=a(85354),c=a.n(n),t=a(67294),C=a.n(t);const s=function(e){var t=e.list,n=e.index,a=e.handelOnClick;return C().createElement("ul",{className:"step_button"},t&&t.map(function(e,t){return C().createElement("li",{className:(t+1===n?"sel":"")+" "+(t+1<n?"finish":""),key:t},C().createElement("section",{onClick:function(){return t+1<n?a(t+1):""}},C().createElement("span",null,t+1<n?C().createElement("i",{className:"icon-cem_big-gou"}):t+1),C().createElement("span",null,e.name)))}))};function k(e){var t=JSON.parse(JSON.stringify(i));return e.filter(function(e){return e.checked}).forEach(function(e){t.splice(t.length-1,0,e)}),t}var y=a(92360),u=a(8201),p=a(55815),m=a(64814),N=a(83330),w=a(29383),i=[{label:"链接唯一标志",prop:"syncKey"},{label:"链接名",prop:"url"},{label:"商品标题",prop:"name",render:function(e,t,n){return React.createElement("span",null,"1")}}],x=a(84267);const h=function(e){var t=e.value,n=e.changeValue,a=e.nextStep,r=e.tableList,l=e.tableListTotal,c=e.clearScreening,i=e.curScreeningMap,o=e.fetchTable,s=e.changePageSize,u=e.pageSize,p=e.fetchingTable,m=[];r&&r[0]&&r[0].configDetails&&(m=r[0].configDetails);var h=C().useState(1),d=h[0],f=h[1],e=C().useState(void 0),g=e[0],v=e[1],h=C().useState([]),b=h[0],E=h[1],e=C().useState(k(b)),h=e[0],S=e[1];return C().useEffect(function(){g&&m&&E(g.competeSelectMenuItem(m))},[g,r]),C().useEffect(function(){S(k(b))},[b]),C().createElement(C().Fragment,null,t.filterValue&&C().createElement(N.Z,{className:"edit_rule_filter",pageType:"BREAK_BACK_FILTER_CONNECTION",onChange:function(e){return n({id:"filterValue",value:e})},value:t.filterValue,option:{configurable:!1,draggable:!1}}),i&&C().createElement("div",{className:"nextStep"},C().createElement("span",{onClick:c},"清空选项"),C().createElement(y.Button,{onClick:a,type:"primary",style:{float:"right"}},"下一步")),C().createElement("div",{className:"table_wrap"},i&&r&&C().createElement(x.Z,{ref:function(e){return v(e)},multiSave:{name:"priceChaos_editRule"},columns:b,getShowColumns:function(e){return E(e)}}),i&&r&&C().createElement(w.Z,{columns:h,data:r,loading:p,currentPage:d,total:l,pageSize:u,onPage:function(e){f(e),o({currentPage:e})},pageSizeSelectorShow:!0,onPageSizeChange:function(e){s({pageSize:e}),f(1),o({currentPage:1})}})))};const o=function(e){var t=e.value,n=e.changeValue,e=(0,m.X0)(t.money);return C().createElement("div",{className:"step2"},C().createElement("div",{className:"price bottom-line"},C().createElement("span",{className:"title"},"金额"),C().createElement(y.Input,{className:"input "+(e?"":"err"),placeholder:"请填写金额",value:t.money,onChange:function(e){n({id:"money",value:e.trim()})}}),!e&&C().createElement("span",{className:"errTip"},"请输入正确的金额（0~100000之间）")),C().createElement("div",{className:"compareWay bottom-line"},C().createElement("span",{className:"title"},"比价方式"),C().createElement(y.Checkbox,{checked:!0,disabled:!0},"低于")))};var d=a(95814);const f=function(e){var t=e.value,n=e.changeValue,e=e.teamList;return C().createElement("div",{className:"step3"},C().createElement("div",{className:"way bottom-line"},C().createElement("span",{className:"title"},"通知方式"),C().createElement("span",null,C().createElement("img",{src:a(33299),alt:""})," 微信通知")),C().createElement("div",{className:"user-group bottom-line"},C().createElement("p",{className:"sel-user"},"选择通知用户组"),C().createElement(d.Z,{checkedList:t.userList,data:e,changeState:function(e){return n({id:"userList",value:e})}})))};const g=function(e){var t=e.value,n=e.changeValue,a=C().useState(!1),e=a[0],r=a[1],a=C().useState(!1),l=a[0],c=a[1],a=(0,m.kt)(t.warningName);return C().createElement("div",{className:"step4"},C().createElement("div",{className:"warning bottom-line"},C().createElement("span",{className:"title"},"预警名称"),C().createElement(y.Input,{className:"input "+(e&&!a?"err":""),placeholder:"请填写预警名称",defaultValue:t.warningName,maxLength:m.BS,onFocus:function(){return r(!0)},onBlur:function(){return r(!1)},onChange:function(e){l||n({id:"warningName",value:e.trim().substring(0,m.BS)})},onCompositionStart:function(){return c(!0)},onCompositionUpdate:function(){return c(!0)},onCompositionEnd:function(e){c(!1),n({id:"warningName",value:e.target.value.trim().substring(0,m.BS)})}}),e&&!a&&C().createElement("div",{className:"errTip"},"提示：最多只能输入"+m.BS+"个字符")))};var v=[{name:"筛选比价范围"},{name:"设置预警值"},{name:"通知策略"},{name:"预警名称（完成）"}];const b=function(r){function e(){for(var e,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=r.call.apply(r,[this].concat(n))||this).renderStep=function(){switch(e.props.step){case 1:return;case 2:return C().createElement(o,e.props);case 3:return C().createElement(f,e.props);case 4:return C().createElement(g,e.props);default:return}},e}return c()(e,r),e.prototype.render=function(){var e=this.props,t=e.step,n=e.nextStep,a=e.preStep,r=e.submit,l=e.curScreeningMap,c=e.id,i=e.hasChange,o=e.changeStep;return C().createElement("div",{className:"eidt_rule_wrap"},C().createElement(p.Z,{title:(0,m.uT)({title:c?"编辑规则":"创建规则"})}),C().createElement("div",{className:"scroll_wrap"},C().createElement("div",{className:"buttom_wrap"},C().createElement(u.Z,{data:l}),l&&C().createElement(s,{list:v,index:t,handelOnClick:function(e){return o({step:e})}}),C().createElement("div",{style:{display:1===t?"block":"none"}},C().createElement(h,this.props)),l&&this.renderStep(),1!==t&&l&&C().createElement("div",{className:"bottom_button"},C().createElement(y.Button,{type:"primary",onClick:t===v.length?r:n,disabled:!i&&t===v.length},t===v.length?"完成":"下一步"),C().createElement(y.Button,{onClick:a},"上一步")))))},e}(C().Component);var n=a(64396),t=a(55609),E=a(35239),S=a(61409),_=n.Z.price.editRule,V=n.Z.screening,n=function(r){function e(e){var a=r.call(this,e)||this;a._handelClearScreening=function(){a.props.clearScreening()},a._handelPreStep=function(){var e=a.props.step;a.props.changeStep({step:e-1})},a._handelNextStep=function(){var e=a.props,t=e.step,n=e.tableList,e=e.value;1!==t||0!==n.length?1!==t||e.filterValue&&(!e.filterValue||0!==e.filterValue.length)?2!==t||e.money.length&&(0,m.X0)(e.money)?3!==t||0!==e.userList.length?4!==t||e.warningName?a.props.changeStep({step:t+1}):y.Message.warning("请填写名称！"):y.Message.warning("请选择通知用户组！"):y.Message.warning("请输入正确的金额（0~100000之间）！"):y.Message.warning("请至少选择一项筛选条件！"):y.Message.warning("该比价商品范围内没有数据，无法比较！")},a._handelSubmit=function(){var e=a.props,t=e.step,e=e.value;4!==t||e.warningName?a.props.submit().then(function(){return S.mW.push({pathname:"/priceChaos/ruleList"})}):y.Message.warning("请填写名称！")},a.routerWillLeave=function(){return!a.props.hasChange||"信息还未保存，确认要离开？"},e.save({projectId:E.t.get(E.V.curProject).id,id:window.ruleId||null});var t=e.fetchDefaultValue,n=e.fetchTable;return(0,e.fetchTeam)(),window.ruleId?t().then(function(){return n()}):(e.save({value:l()({},e.value,{filterValue:[]})}),n()),a.state={},a._event={preStep:a._handelPreStep,nextStep:a._handelNextStep,submit:a._handelSubmit,clearScreening:a._handelClearScreening},a}c()(e,r);var t=e.prototype;return t.componentDidMount=function(){this.props.router.setRouteLeaveHook(this.props.route,this.routerWillLeave)},t.render=function(){return C().createElement(b,l()({},this.props,this.state,this._event))},e}(C().Component);const L=(0,t.connect)(function(e){var t=e.loading,e=r()(e,["loading"]);return l()({},e[_],{curScreeningMap:e[V].curScreeningMap,fetchingTable:t.effects[_+"/fetchTable"]||!1})},function(t){return{fetchDefaultValue:function(){return t({type:_+"/fetchDefaultValue"})},fetchTable:function(e){return t({type:_+"/fetchTable",payload:e})},fetchTeam:function(){return t({type:_+"/fetchTeam"})},changeValue:function(e){return t({type:_+"/changeValue",payload:e})},changeStep:function(e){return t({type:_+"/changeStep",payload:e})},changePageSize:function(e){return t({type:_+"/changePageSize",payload:e})},clearScreening:function(e){return t({type:_+"/clearScreening",payload:e})},submit:function(){return t({type:_+"/submit"})},save:function(e){return t({type:_+"/save",payload:e})}}})(n)},24473:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(67154),p=n.n(a),r=n(37316),m=n.n(r),t=n(85354),l=n.n(t),a=n(67294),h=n.n(a),r=n(45697),t=n.n(r),r=n(94184),d=n.n(r),a=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props,t=e.prefixCls,n=e.children,a=e.className,r=e.block,l=e.indeterminate,c=e.value,i=e.checked,o=e.defaultChecked,s=e.onChange,u=e.disabled,e=m()(e,["prefixCls","children","className","block","indeterminate","value","checked","defaultChecked","onChange","disabled"]),s={value:c,checked:i,defaultChecked:o,onChange:s,disabled:u},a=d()(t,((u={})[t+"-disabled"]=s.disabled,u[t+"-block"]=r,u[t+"-indeterminate"]=l,u),a);return h().createElement("label",p()({tabIndex:s.disabled?-1:0,className:a},e),h().createElement("input",p()({type:"checkbox",className:t+"-input"},s)),h().createElement("span",{className:t+"-status"}),n&&h().createElement("span",{className:t+"-text",title:n},n))},t}(a.Component);a.propTypes={prefixCls:t().string,value:t().oneOfType([t().string,t().number]),checked:t().bool,defaultChecked:t().bool,onChange:t().func,indeterminate:t().bool,disabled:t().bool,block:t().bool},a.defaultProps={prefixCls:"wt-checkbox"};const c=a},85151:(e,t,n)=>{"use strict";n.d(t,{Jg:()=>a.Z,CS:()=>i});var a=n(24473),r=n(67154),o=n.n(r),l=n(37316),s=n.n(l),t=n(85354),c=n.n(t),r=n(67294),u=n.n(r),l=n(45697),t=n.n(l),l=n(94184),p=n.n(l),l=function(r){function e(){for(var n,e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(n=r.call.apply(r,[this].concat(t))||this).handleCheckBoxChange=function(e){var t=n.props.onChange;t&&t(e)},n}return c()(e,r),e.prototype.render=function(){var r=this,e=this.props,t=e.prefixCls,n=e.children,a=e.className,l=(e.onChange,e.values),c=e.checkedList,i=e.block,e=s()(e,["prefixCls","children","className","onChange","values","checkedList","block"]),n=l?l.map(function(e,t){var n=0!==c.length&&-1!==c.indexOf(e);return u().createElement(Checkbox,{key:t,value:e,checked:n,onChange:function(e){return r.handleCheckBoxChange(e)},block:i},e)}):u().Children.map(n,function(e,t){if(e){var n=e.props,a=n.value,a=0!==c.length&&-1!==c.indexOf(a);return u().cloneElement(e,{checked:a,key:t,block:n.block||i,onChange:function(){var e=n.value;r.handleCheckBoxChange(e)}})}});return u().createElement("div",o()({className:p()(t,a)},e),n)},e}(r.Component);l.defaultProps={prefixCls:"wt-checkbox-group"},l.propTypes={onChange:t().func,values:t().array,block:t().bool};const i=l;var m=function(t){var n={};return Object.keys(t).forEach(function(e){/^data\-.+$/.test(e)&&(n[e]=t[e])}),n},r=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){var e=this.props,t=m(e);return u().createElement("label",{className:e.className,title:e.children},u().createElement("div",{className:"checkbox"},u().createElement("input",o()({checked:e.checked,type:"checkbox",name:e.name,onChange:e.onChange,disabled:e.disabled},t)),u().createElement("div",{className:"checkbox-body"}))," ",u().createElement("span",null,e.children))},t}(r.Component);r.defaultProps={className:"",name:"",checked:!1,disabled:!1,onChange:function(e){return e}}},84267:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var t=n(67154),a=n.n(t),t=n(85354),r=n.n(t),t=n(67294),c=n.n(t),l=n(85151),i=n(35239),o=function(t){function e(e){var l=t.call(this,e)||this;return l.openMenu=function(){l.setState({menuState:!l.state.menuState})},l.onChange=function(e){var t,n=l.props,a=n.columns,r=n.getShowColumns,n=n.multiSave;a&&a[e]&&((t=a.slice(0))[e].checked=!t[e].checked);e=n?n.name:"",n=i.t.get(i.V.storageColumns)?i.t.get(i.V.storageColumns):{};n[e]=t,i.t.set(i.V.storageColumns,n),r&&r(t),l.resize(),l.setState({columns:t})},l.competeSelectMenuItem=function(e){var t,n=l.props.multiSave,a=n?n.name:"",r=l.props.columns,n=i.t.get(i.V.storageColumns)?i.t.get(i.V.storageColumns)[a]:[];return r=n&&0!==n.length?("price_check"===a?n.map(function(a,e){return a.render=0<r.filter(function(e){return e.label===a.label}).length?r.filter(function(e){return e.label===a.label})[0].render:function(e,t,n){return c().createElement("span",null,e[a.prop])}}):n.map(function(e,a){return e.render=function(e,t,n){return c().createElement("span",null,e.configDetails[a]&&e.configDetails[a].topicValue)}}),n.slice(0)):e&&e.every(function(e){return e.label&&e.prop})?e:(t=[],e&&e.forEach(function(e,a){t.push({label:e.topicTypeValue,checked:!1,render:function(e,t,n){return c().createElement("span",null,e.configDetails[a].topicValue)}})}),t.slice(0)),l.setState({columns:r}),r},l.resize=function(){var e=document.querySelector(".connection-table .is-sortable");if(e){var t=l.getStyle(e,"width"),e=document.body.offsetWidth,n=l.state.columns;if(800<e&&2<n.length&&parseInt(t)<275)for(var a=0;a<n.length-2;a++)if(n[a].checked)return void l.onChange(a)}},l.close=function(e){l.state.menuState&&l.setState({menuState:!1})},l.state={menuState:!1,multiSave:null,columns:e.columns.map(function(e){return e.checked||(e.checked=!1),e})},l}r()(e,t);var n=e.prototype;return n.UNSAFE_componentWillReceiveProps=function(e){this.setState(a()({},e))},n.getStyle=function(e,t){return e.style[t]||(e.currentStyle||getComputedStyle(e,null))[t]},n.componentDidMount=function(){window.addEventListener("click",this.close),window.addEventListener("resize",this.resize,!1)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.resize,!1),window.removeEventListener("click",this.close)},n.render=function(){var n=this,e=this.state.columns;return c().createElement("div",{className:"menu-wrapper",onClick:function(e){e.nativeEvent.stopImmediatePropagation(),e.stopPropagation()}},c().createElement("span",{className:"el-dropdown-link "+(this.state.menuState?"sel":""),onClick:this.openMenu},"列",c().createElement("i",{className:"icon-cem_pull-down-or-take-up",style:{transform:this.state.menuState?"rotate(-180deg)":""}})),this.state.menuState&&c().createElement("div",{className:"menuList"},c().createElement("ul",null,0===e.length?c().createElement("li",{style:{color:"#8c8c8c"}},"无可选择内容"):e.map(function(e,t){return c().createElement("li",{key:t},c().createElement(l.Jg,{key:t,value:e.label,checked:e.checked,onChange:n.onChange.bind(n,t),block:!0},e.label))}))))},e}(t.Component)}}]);