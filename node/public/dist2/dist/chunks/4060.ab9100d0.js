(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[4060],{44060:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>_});var a=n(37316),i=n.n(a),o=n(67154),E=n.n(o),t=n(85354),r=n.n(t),a=n(67294),w=n.n(a),k=n(92360),S=n(61918),O=n(60496),P=n(55815),o=n(93913),l=n.n(o),t=n(23279),s=n.n(t),c=n(29383),o=n(45697),t=n.n(o),u=n(39432),p=n(43036),d=n(51474),m=n(87219),o=function(t){function e(e){var s=t.call(this,e)||this;return s._setShowFalse=function(){s.setState({show:!1})},s._handleParentClick=function(e){s.state.show&&(e.stopPropagation(),e.nativeEvent.stopImmediatePropagation())},s._handleOnTriggerClick=function(){setTimeout(function(){s.setState({show:!s.state.show})},0)},s._renderOptionItem=function(t,e,n,a,i,o){var r=s.state.maxLabelWidth,l=s.props.value.find(function(e){return e.value===t.value});return w().createElement("div",{className:"opt_item "+(e?"draggable":""),key:t.value},e&&w().createElement("i",{className:"icon-cem_move my_handle"}),w().createElement("div",{className:"opt_content",style:{width:r,marginLeft:e?0:14}},w().createElement("div",{className:"item_label",onClick:function(e){e.stopPropagation(),s._handleOnItemClick(t.value)}},w().createElement("span",{className:"icon_checkbox "+(l&&l.checked?"checkbox_checked":"")}),w().createElement("span",null,t.label)),w().createElement("div",{className:"item_control"},w().createElement(p.Z,{placement:"top",overlay:n},w().createElement("span",{onClick:function(e){return a(e,t.value)}},w().createElement("i",{className:(e?"icon-cem_up":"icon-cem_up-and-down")+" fun_icon_a"}))),w().createElement(p.Z,{placement:"top",overlay:i},w().createElement("span",{onClick:function(e){return o(e,t.value)},style:{marginLeft:4}},w().createElement("i",{className:"icon-cem_down fun_icon_b"}))))))},s._handleOnItemClick=function(t){var e=s.props,n=e.value,e=e.onChange;e&&e((0,m.ZP)(n,function(e){e=e.find(function(e){return e.value===t});e&&(e.checked=!e.checked)}))},s._handleOnFilxedLeftClick=function(e,t){e.stopPropagation(),s._handleOnFixedChange(t,"left")},s._handleOnCancelFixedClick=function(e,t){e.stopPropagation(),s._handleOnFixedChange(t,"")},s._handleOnFixedRightClick=function(e,t){e.stopPropagation(),s._handleOnFixedChange(t,"right")},s._handleOnFixedChange=function(t,n){var e=s.props,a=e.value,e=e.onChange;e&&e((0,m.ZP)(a,function(e){e=e.find(function(e){return e.value===t});e&&(e.fixed=n)}))},s.state={show:!1,value:[],leftOpts:[],normalOpts:[],rightOpts:[],maxLabelWidth:e.options.reduce(function(e,t){return Math.max((0,u.jD)(t.label,14)+56+16+16,e)},0)},s}r()(e,t),e.getDerivedStateFromProps=function(a,e){if(JSON.stringify(a.value)!==JSON.stringify(e.value)){var t=a.value.reduce(function(e,t){var n=1;return"left"===t.fixed&&(n=0),e[n="right"===t.fixed?2:n].push(a.options.find(function(e){return e.value===t.value})),e},[[],[],[]]),n=t[0],e=t[1],t=t[2];return{value:a.value,leftOpts:n,normalOpts:e,rightOpts:t}}};var n=e.prototype;return n.componentDidMount=function(){var r=this;window.addEventListener("click",this._setShowFalse);var e=document.getElementById("draggable_zone");e&&d.ZP.create(e,{group:"draggable_zone",animation:150,filter:".undraggable",draggable:".draggable",handle:".my_handle",onEnd:function(e){var n,t=r.props,a=t.value,t=t.onChange,i=e.newIndex,o=e.oldIndex;i!==o&&(n=a.filter(function(e){return"left"===e.fixed}),t&&t((0,m.ZP)(a,function(e){var t=e.splice(o+n.length,1)[0];e.splice(i+n.length,0,t)})))}})},n.componentWillUnmount=function(){window.removeEventListener("click",this._setShowFalse)},n.render=function(){var t=this,e=this.state,n=e.show,a=e.leftOpts,i=e.normalOpts,o=e.rightOpts,r=this.props,e=r.className,r=r.title;return w().createElement("div",{className:"yt_column_selector_wrapper "+(e||""),onClick:this._handleParentClick},w().createElement("div",{className:"trigger "+(n?"sel":""),onClick:this._handleOnTriggerClick},r||"列",w().createElement("i",{className:"icon-cem_arrow-launches",style:{transform:n?"rotate(-180deg)":""}})),w().createElement("div",{className:"options "+(n?"active":"")},0<a.length&&w().createElement(w().Fragment,null,w().createElement("div",{className:"opt_label"},"固定在左侧"),a.map(function(e){return t._renderOptionItem(e,!1,"不固定",t._handleOnCancelFixedClick,"固定在列尾",t._handleOnFixedRightClick)})),(0<a.length||0<o.length)&&w().createElement("div",{className:"opt_label"},"不固定"),w().createElement("div",{id:"draggable_zone",style:{visibility:0<i.length}},i.map(function(e){return t._renderOptionItem(e,!0,"固定在列头",t._handleOnFilxedLeftClick,"固定在列尾",t._handleOnFixedRightClick)})),0<o.length&&w().createElement(w().Fragment,null,w().createElement("div",{className:"opt_label"},"固定在右侧"),o.map(function(e){return t._renderOptionItem(e,!1,"不固定",t._handleOnCancelFixedClick,"固定在列头",t._handleOnFilxedLeftClick)}))))},e}(w().PureComponent);const h=o;o.propTypes={className:t().string,title:t().string,options:t().shape({label:t().string,value:t().string}),value:t().arrayOf({value:t().string,fixed:t().string,checked:t().bool}),onChange:t().func};var o=n(30381),f=n.n(o),T=n(33722);const b=function(t){function e(e){var o=t.call(this,e)||this;return o.handleResize=s()(function(){var e=document.getElementById("table_zone");e&&o.setState({tableWidth:e.clientWidth})},150),o.getDropDown=function(t,n){var e=o.state,a=e.active,i=e.activeId,e="UN_DISPATCH"===t.status?T.pX:"DISPATCHED"===t.status?T.CQ:T._d;return w().createElement("div",{className:"button-panel",style:{minWidth:function(e){e=Math.max.apply(null,e.map(function(e){return(0,u.jD)(e.title,14)}))+2+10+32;return 98<(e+=0)?e:98}(e)}},e.map(function(e){return w().createElement("div",{key:e.value,className:"panel-item ellipsis "+(e.value===a&&e.id===i&&"sel"),style:{maxWidth:97.5},onClick:function(){o.setState({active:e.value,activeId:e.id}),n(e.value,t)}},e.title)}))},o.handleOnColumnChange=function(e){o.props.setDefaultValue({activeColumnProps:e}),o.props.save({activeColumnProps:e})},o.state={tableWidth:0},o}r()(e,t);var n=e.prototype;return n.componentDidMount=function(){window.addEventListener("rezise",this.handleResize),this.handleResize()},n.componentWillUnmount=function(){window.removeEventListener("rezise",this.handleResize)},n.render=function(){var e=this.props,t=e.loading,n=e.data,a=e.total,i=e.pageIndex,o=e.pageSize,r=e.onPageSizeChange,l=e.onPageChange,s=e.onColumnChange,e=e.activeColumnProps;return w().createElement("div",{id:"table_zone",className:"yt_research_nps_manage_list"},w().createElement(c.Z,{loading:t,columns:this.columns,data:n,total:a,currentPage:i,pageSize:o,pageSizeSelectorShow:!0,onPageSizeChange:r,onPage:l}),w().createElement(h,{className:"column_selector",options:T.SE,value:e,onChange:s}))},l()(e,[{key:"columns",get:function(){var t,o=this,e=this.state.tableWidth,r=this.props.onClick,l=0,s=0,c=0,n=this.props.activeColumnProps.reduce(function(e,t,n,a){var i;return t.checked&&(c+=t.width,t.fixed?l+=t.width:s+=t.width,i=E()({},t,{prop:t.value}),e.push(i),"title"===t.value?i.render=function(e){return w().createElement(p.Z,{placement:"top",overlay:e.title},w().createElement("span",{style:{cursor:"pointer",color:"#0847a6"},onClick:function(){return r("detail",e)}},e.title))}:"questionnaireType"===t.value?i.render=function(e){e=JSON.parse(JSON.stringify(e.questionnaireType));return e.some(function(e){return"SATISFACTION"===e})&&e.splice(e.indexOf("SATISFACTION"),1,"满意度"),e.some(function(e){return"NORMAL"===e})&&e.splice(e.indexOf("NORMAL"),1,"普通题型"),e.join("，")}:"status"===t.value?i.render=function(t){return T.hm.find(function(e){return e.value===t.status}).title}:"submitted"===t.value?i.render=function(e){return u.ZP.getApproximateNum(e.submitted)}:"npsScore"===t.value||"satisfactionScore"===t.value?i.render=function(e,t){return e[t.prop]?Number(e[t.prop]).toFixed(2):"--"}:"createdAt"===t.value?i.render=function(e){return f()(e.createdAt).format("YYYY-MM-DD HH:mm")}:"updatedAt"===t.value?i.render=function(e){return(0,T.Go)(e.updatedAt)}:"operator"===t.value&&(i.render=function(e){return w().createElement("div",{className:"col-nm-control"},w().createElement("span",{onClick:function(){return r("edit",e)}},"编辑"),w().createElement("span",{onClick:function(){return r("dispatch",e)}},"分发"),w().createElement("span",{onClick:function(){return r("detail",e)}},"数据"),w().createElement(p.Z,{placement:"bottom",overlayClassName:"research_nps_manage_list_overlay",overlay:function(){return o.getDropDown(e,r)}},w().createElement("span",{className:"icon-cem_more-more"})))})),e},[]);return this.props.activeColumnProps.find(function(e){return"right"===e.fixed}),c<e&&(t=e-l,n.forEach(function(e){e.fixed||(e.width=e.width/s*t)})),n}}]),e}(w().PureComponent);var D=n(26056),o=function(e){function t(){document.querySelector(".manage_dialog")&&document.querySelector(".manage_dialog").remove()}e.value,e.list,e.getValue;return w().createElement("div",{className:"yt_modal_warning_prefer_wrapper"},w().createElement("div",{className:"section"},w().createElement("div",{onClick:function(){t(),setTimeout(function(){return window.open("/research/questions")},100)}},"+ 空白创建"),w().createElement("div",{onClick:function(){t(),setTimeout(function(){return window.open("/research/questions?type=NPS")},100)}},w().createElement("p",null,"品牌NPS调查"),w().createElement("div",{className:"tag"},w().createElement("span",null,"NPS")),w().createElement("div",{className:"total"},"共 2 题")),w().createElement("div",{onClick:function(){t(),setTimeout(function(){return window.open("/research/questions?type=SATISFACTION")},100)}},w().createElement("p",null,"品牌满意度调查"),w().createElement("div",{className:"tag"},w().createElement("span",null,"满意度")),w().createElement("div",{className:"total"},"共 2 题"))))};const I=o;o.propTypes={value:t().object,getValue:t().func};var x=n(57522);const g=function(e){function t(){var e=document.getElementById("nps_manage_list");N(e.clientWidth)}var n=e.activeColumnProps,a=e.loading,i=e.data,o=e.name,r=e.pageIndex,l=e.pageSize,s=e.sortType,c=e.nps,u=e.questionnaireType,p=e.status,d=e.timeType,m=e.onPageChange,h=e.onPaseSizeChange,f=e.onColumnChange,g=e.onBtnClick,v=e.getNpsDialogRef,C=e.updateNps,y=e.onFilterChange,_=w().useState(0),e=_[0],N=_[1];return w().useEffect(function(){return window.addEventListener("resize",t),t(),function(){return window.removeEventListener("resize",t)}},[]),w().createElement("div",{className:"yt_nps_manage_wrapper"},w().createElement(P.Z,{title:"问卷管理"}),w().createElement("div",{className:"yt_nps_manage_list_wrap",id:"nps_manage_list"},w().createElement("div",{className:"table"},w().createElement("div",{className:"filter-wrapper"},w().createElement(S.Z,{style:{width:150},placeholder:"搜索问卷名称",defValue:o,onClear:function(e){return y&&y({name:e})},onSearch:function(e){return y&&y({name:e})}}),w().createElement(O.Z,{options:T.nx,onChange:y,objName:"questionnaireType",preTitle:"体验题型",divider:"none",type:"button",activeObj:u,sufIcon:"icon-cem_pull-down-or-take-up"}),w().createElement(O.Z,{options:T.hm,onChange:y,objName:"status",preTitle:"状态",divider:"none",type:"button",activeObj:p,sufIcon:"icon-cem_pull-down-or-take-up"}),w().createElement(O.Z,{options:T.qr,onChange:y,objName:"timeType",preTitle:"排序",divider:"none",type:"button",activeObj:d,sufIcon:"icon-cem_pull-down-or-take-up"}),w().createElement("span",null,w().createElement(k.Button,{type:"primary",onClick:function(){return new Promise(function(e,t){var n=E()({},a,{titleText:"选择模板",content:w().createElement(I,a),top:"50%",noFoot:!0,className:"manage_dialog"});n.onOk=function(){return e()},n.onCancel=t,(0,x.Z)(n)});var a}},"新建问卷"))),w().createElement("div",{className:"table_zone"},w().createElement(b,{activeColumnProps:n,order:s,data:i&&i.list instanceof Array?i.list:[],total:i?i.total:0,pageIndex:r,pageSize:l,loading:a,onClick:g,option:{width:e},onPageSizeChange:h,onPageChange:m,onColumnChange:f}))),w().createElement(D.Z,{ref:v,nps:c,updateNps:C})))};var t=n(55609),v=n(35239),C=n(61409),y=n(64396).Z.research.npsManage,a=function(t){function e(e){var r=t.call(this,e)||this;return r._handleOnColumnChange=function(e){r.props.save({activeColumnProps:e}),r.props.setDefaultValue({activeColumnProps:e})},r._handleOnFilterChange=function(e){var t=r.props,n=t.name,a=t.questionnaireType,i=t.status,o=t.sortName,t=t.sortType;e.timeType?(r.props.fetchNpsList({sortName:e.timeType.split("_")[0],sortType:e.timeType.split("_")[1],pageIndex:1,name:n,questionnaireType:a,status:i}),r.props.save({timeType:e.timeType})):(void 0!==e.name||e.questionnaireType||e.status)&&r.props.fetchNpsList(E()({pageIndex:1,sortName:o,sortType:t,name:n,questionnaireType:a,status:i},e))},r._handleOnPageChange=function(e){var t=r.props,n=t.name;(0,t.fetchNpsList)({pageIndex:e,name:n})},r._handleOnPageSizeChange=function(e){var t=r.props,n=t.name;(0,t.fetchNpsList)({pageSize:e,pageIndex:1,name:n})},r._handleOnBtnClick=function(e,t){var n=r.state.projectId,a=r.props;a.updateNps,a.updateNpsTime;"newNps"===e?C.mW.push({pathname:"/nps/edit",state:{projectId:n}}):"switch"===e?"DISPATCHED"===t.status?r.npsDialogRef.showDialog({type:"switch",nps:t,callback:function(e,t){r.props.updateNpsStatus({id:t.id,projectId:r.state.projectId,status:"CLOSED"})}}):"CLOSED"===t.status&&r.npsDialogRef.showDialog({type:"switch",nps:t,callback:function(e,t){r.props.updateNpsStatus({id:t.id,status:"DISPATCHED"})}}):"edit"===e?"UN_DISPATCH"===t.status?window.open("/research/questions?id="+t.id):r.npsDialogRef.showDialog({type:"edit",nps:t,callback:function(e,t){window.open("/research/questions?id="+t.id)}}):"dispatch"===e?"CLOSED"===t.status?r.npsDialogRef.showDialog({type:"dispatch",nps:t,callback:function(e,t){r.props.updateNpsStatus({id:t.id,status:"DISPATCHED",type:"UN_DISPATCH"}),C.mW.push({pathname:"/research/manage/distribute",state:{id:t.id,title:t.title,questionnaireType:t.questionnaireType}})}}):"UN_DISPATCH"===t.status?r.npsDialogRef.showDialog({type:"dispatch",nps:t,callback:function(e,t){r.props.updateNpsStatus({id:t.id,status:"DISPATCHED",type:"UN_DISPATCH"}),C.mW.push({pathname:"/research/manage/distribute",state:{id:t.id,title:t.title,questionnaireType:t.questionnaireType}})}}):C.mW.push({pathname:"/research/manage/distribute",state:{id:t.id,title:t.title,questionnaireType:t.questionnaireType}}):"detail"===e?C.mW.push({pathname:"/research/manage/analysis",state:{questionnaireId:t.id,title:t.title,questionnaireType:t.questionnaireType}}):"delete"===e?r.npsDialogRef.showDialog({type:"delete",nps:t,callback:function(e,t){r.props.deleteNps({id:t.id})}}):"copy"===e&&window.open("/research/questions?id="+t.id+"&copy=true")},r.state={projectId:v.t.get(v.V.curProject).id},r._event={onFilterChange:r._handleOnFilterChange,onPageChange:r._handleOnPageChange,onPaseSizeChange:r._handleOnPageSizeChange,onBtnClick:r._handleOnBtnClick,onColumnChange:r._handleOnColumnChange,getNpsDialogRef:function(e){return r.npsDialogRef=e}},e.fetchParams({projectId:v.t.get(v.V.curProject).id}),r}r()(e,t);var n=e.prototype;return n.componentWillUnmount=function(){},n.render=function(){return w().createElement(g,E()({},this.state,this.props,this._event))},e}(a.Component);const _=(0,t.connect)(function(e){var t=e.loading,e=i()(e,["loading"]);return E()({},e[y],{loading:t.effects[y+"/fetchNpsList"]||!1})},function(t){return{fetchParams:function(e){return t({type:y+"/fetchParams",payload:e})},fetchNpsList:function(e){return t({type:y+"/fetchNpsList",payload:e})},deleteNps:function(e){return t({type:y+"/deleteNps",payload:e})},updateNpsStatus:function(e){return t({type:y+"/updateNpsStatus",payload:e})},copyNps:function(e){return t({type:y+"/copyNps",payload:e})},updateNps:function(e){return t({type:y+"/updateNps",payload:e})},updateNpsTime:function(e){return t({type:y+"/updateNpsTime",payload:e})},setDefaultValue:function(e){return t({type:y+"/setDefaultValue",payload:e})},save:function(e){return t({type:y+"/save",payload:e})},clean:function(){return t({type:y+"/clean"})}}})(a)},61918:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var t=n(67294),u=n.n(t),t=n(45697),n=n.n(t),t=function(e){var t=e.className,n=e.onClear,a=e.onSearch,i=e.placeholder,o=e.style,r=e.defValue,l=e.signal,e=u().useState(r),s=e[0],c=e[1];u().useEffect(function(){c(r)},[r,l]);return u().createElement("div",{style:o,className:"yt_search_input_wrapper "+(t||"")},u().createElement("input",{placeholder:i,value:s,onKeyDown:function(e){13===e.keyCode&&a(s)},onChange:function(e){return c(e.target.value)},autoComplete:"off"}),s&&u().createElement("i",{className:"icon-cem_log-off",onClick:function(){c(""),n&&n("")}}),u().createElement("i",{className:"icon-cem_small-search",onClick:function(){return a(s)}}))};t.propTypes={className:n().string,onSearch:n().func.isRequired,placeholder:n().string,style:n().object,defValue:n().string,signal:n().any,onClear:n().func};const a=t}}]);