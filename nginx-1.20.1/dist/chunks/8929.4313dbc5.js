"use strict";(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[8929],{17190:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(87462),r=t(94578),i=t(67294),o=void 0;const l=function(e){var n=e.data.name,t=e.onCheck,a=e.checked,r=i.useState(a),l=r[0],c=r[1];return i.useEffect((function(){c(a)}),[a]),i.createElement("label",{className:"el-checkbox yt_product_subscribe_editable-radio",onClick:function(e){o=setTimeout((function(){o&&clearTimeout(o);var e=!l;c(e),t(e)}),100)}},i.createElement("input",{value:n,className:"ec-label "+(l?"is_checked":""),title:n,maxLength:6,style:{background:"transparent"}}))};var c=t(92360),s=void 0;const u=function(e){var n=e.keyword,t=e.onCloseClick,a=e.onChange,r=i.useState(n),o=r[0],l=r[1];return i.useEffect((function(){l(n)}),[n]),i.createElement(c.Input,{placeholder:"\u8bf7\u8f93\u5165\u5173\u952e\u5b57",value:o,icon:o&&"close",onIconClick:function(){l(""),t()},onChange:function(e){l(e),s&&clearTimeout(s),s=setTimeout((function(){a(e),s=void 0}),500)}})};const d=function(e){var n=e.className,t=e.onTipClick,a=e.show,r=e.onClick,o=e.onMouseEnter,c=e.onMouseLeave,s=e.addText,d=e.data,p=e.value,m=e.trigger,h=e.defaultValue,f=e.onTagChange,g=e.getTagListRef,v=e.onAddClick,_=e.disabled,C=e.keyword,E=p&&d.find((function(e){return e.id===p}))?d.find((function(e){return e.id===p})).name:h&&d&&d.some((function(e){return e.id===h}))?d&&d.find((function(e){return e.id===h})).name:d&&d.length?"\u8bf7\u9009\u62e9":"\u8bf7\u6dfb\u52a0",k=i.useState(C||""),y=k[0],w=k[1],b=i.useState(d),S=b[0],N=b[1];return i.useEffect((function(){N(d)}),[d]),i.useEffect((function(){var e=y?d.filter((function(e){return e.name.toLowerCase().indexOf(y.toLowerCase())>=0})):d;N(e)}),[y,d]),i.useEffect((function(){C&&w(C)}),[C]),i.createElement("div",{className:"yt_product_setting_edit_input_select_wraper "+n,onClick:"click"===m&&t,onMouseEnter:"hover"===m&&t,onMouseLeave:function(){"hover"===m&&(c(),y&&w(""))}},i.createElement("div",null,i.createElement("div",{className:"ets-trigger",onClick:function(){"click"===m&&(r(),y&&w(""))},onMouseEnter:function(){"hover"===m&&!a&&o()}},i.createElement("span",{className:"ets-trigger-title",style:{color:p||!d||d.find((function(e){return e.id===p}))||h?"#262626":"#bfbfbf"}},E),i.createElement("i",{className:"icon-cem_pull-down-or-take-up",style:{transform:a?"rotate(-180deg)":""}})),i.createElement("div",{className:"ets-option-panel "+(a?"ets-show":""),onClick:function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()}},i.createElement("div",{className:"ets-list",ref:g},d&&d.length>0?i.createElement(i.Fragment,null,i.createElement("div",{style:{maxHeight:260}},i.createElement("div",{className:"ets-search"},i.createElement(u,{keyword:y,onChange:w,onCloseClick:function(){return w("")}})),i.createElement("div",{className:"ets-list-content"},S&&S.length>0?i.createElement(i.Fragment,null,S.slice(0,100).map((function(e){return i.createElement(l,{key:e.id,data:e,checked:p===e.id,onCheck:function(){return e.id?f({id:e.id,name:e.name,split:e.split}):f({name:e.name,split:e.split})}})})),S.length>99&&i.createElement("div",{style:{color:"#d96969",paddingLeft:"18px",fontSize:"12px"}},"\u2014 \u67e5\u770b\u66f4\u591a\u8bf7\u641c\u7d22")):i.createElement("div",{className:"no_data"},"\u6682\u65e0\u6570\u636e")))):i.createElement("div",{className:"no_data"},"\u6682\u65e0\u6570\u636e")),i.createElement("div",{className:"ets-add"},i.createElement("div",{className:"ets-add-diviver"}),i.createElement("div",{className:"add_btn "+(_?"add_disabled_btn":""),onClick:function(){_||(v(),y&&w(""),"click"===m?r():o())}},s)))))};const p=function(e){function n(n){var t;return(t=e.call(this,n)||this)._handleOnTagChange=function(e){t.props.onChange(e),t._setPadShowFalse()},t._setPadShowFalse=function(){t.state.show&&t.setState({show:!1})},t._setPadShowTrue=function(){!t.state.show&&t.setState({show:!0})},t._handleOnMouseEnter=function(){var e=t.state.show;setTimeout((function(){t.setState({show:!e})}),0)},t._handleOnClick=function(e){var n=t.state.show;setTimeout((function(){t.setState({show:!n})}),0)},t.tagListRef=void 0,t.state={show:!1},t.event={onClick:t._handleOnClick,onMouseEnter:t._handleOnMouseEnter,onMouseLeave:t._setPadShowFalse,onTagChange:t._handleOnTagChange,getTagListRef:function(e){return t.tagListRef=e}},t}(0,r.Z)(n,e);var t=n.prototype;return t.UNSAFE_componentWillReceiveProps=function(e){e.show!==this.props.show&&this._setPadShowTrue()},t.componentDidMount=function(){window.addEventListener("click",this._setPadShowFalse)},t.componentWillUnmount=function(){window.addEventListener("click",this._setPadShowFalse)},t.render=function(){return i.createElement(d,(0,a.Z)({},this.props,this.state,this.event))},n}(i.PureComponent)},29257:(e,n,t)=>{t.d(n,{$:()=>a});var a=[{id:"\u672a\u77e5",name:"\u672a\u77e5"},{id:"\u5957\u88c5",name:"\u5957\u88c5"},{id:"\u975e\u5957\u88c5",name:"\u975e\u5957\u88c5"}]},61918:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(67294),r=t(45697),i=t.n(r),o=function(e){var n=e.className,t=e.onClear,r=e.onSearch,i=e.placeholder,o=e.style,l=e.defValue,c=e.signal,s=a.useState(l),u=s[0],d=s[1];a.useEffect((function(){d(l)}),[l,c]);return a.createElement("div",{style:o,className:"yt_search_input_wrapper "+(n||"")},a.createElement("input",{placeholder:i,value:u,onKeyDown:function(e){13===e.keyCode&&r(u)},onChange:function(e){return d(e.target.value)},autoComplete:"off"}),u&&a.createElement("i",{className:"icon-cem_log-off",onClick:function(){d(""),t&&t("")}}),a.createElement("i",{className:"icon-cem_small-search",onClick:function(){return r(u)}}))};o.propTypes={className:i().string,onSearch:i().func.isRequired,placeholder:i().string,style:i().object,defValue:i().string,signal:i().any,onClear:i().func};const l=o},2271:(e,n,t)=>{t.d(n,{Z:()=>T});var a=t(63366),r=t(87462),i=t(43144),o=t(94578),l=t(23279),c=t.n(l),s=t(67294),u=t(92360),d=t(35303),p=t(45697),m=t.n(p),h=[{label:"10\u9879/\u9875",value:10},{label:"20\u9879/\u9875",value:20},{label:"40\u9879/\u9875",value:40},{label:"100\u9879/\u9875",value:100}];const f=function(e){var n=e.onPageChange,t=e.onSizeChange,a=e.total,r=void 0===a?0:a,i=e.pageIndex,o=e.pageSize,l=e.currLength,c=e.layout,p=e.className,m=0===r?0:(i-1)*o+1,f=0===r?0:m+l-1;return 0===r?null:s.createElement("div",{className:"yt-awp-pagination "+(p||"")},s.createElement("span",{className:"total_num"},s.createElement("span",null,m+" - "+f+" "),"\u9879\uff0c\u5171",s.createElement("span",null," "+r+" "),"\u9879"),s.createElement("div",{style:{textAlign:"right",float:"right"},className:"new_pagination"},s.createElement(u.Pagination,{small:!0,pageSize:o,currentPage:i,pageCount:Math.ceil(r/o),layout:0===r?"":"prev, pager, next",onCurrentChange:n}),void 0===c||c.includes("sizes")?s.createElement(d.RS,{multiple:!1,tags:!1,showSearch:!1,optionFilterProp:"label",optionLabelProp:"label",animation:"slide-up",dropdownClassName:"custom-pagination-dropdown",value:o||10,onChange:t},h.map((function(e,n){return s.createElement(d.Wx,{key:n,label:e.label,value:e.value},e.label)}))):null))};m().propTypes={onPageChange:m().func,onSizeChange:m().func,total:m().number,pageIndex:m().number,pageSize:m().number,currLength:m().number,layout:m().string,className:m().string};var g=t(8201),v=t(15861),_=t(87757),C=t.n(_),E=t(49722);function k(){return(k=(0,v.Z)(C().mark((function e(n){var t,a;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.projectId,a=n.key,e.abrupt("return",E.h.post("/default/value/find",{projectId:t,key:a}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=(0,v.Z)(C().mark((function e(n){var t,a,r;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.projectId,a=n.value,r=n.key,e.abrupt("return",E.h.post("/default/value/update",{projectId:t,key:r,value:a}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=t(39432),b=t(43036),S=t(51474),N=t(87219),x=function(e){function n(n){var t;return(t=e.call(this,n)||this)._setShowFalse=function(){t.setState({show:!1})},t._handleParentClick=function(e){t.state.show&&(e.stopPropagation(),e.nativeEvent.stopImmediatePropagation())},t._handleOnTriggerClick=function(){setTimeout((function(){t.setState({show:!t.state.show})}),0)},t._renderOptionItem=function(e,n,a,r,i,o){var l=t.state.maxLabelWidth,c=t.props,u=c.value,d=c.savedKey,p=u.find((function(n){return n.prop===e.prop}));return s.createElement("div",{className:"opt_item "+(n?"draggable":""),key:e.prop},n&&s.createElement("i",{className:"icon-cem_move my_handle"}),s.createElement("div",{className:"opt_content",style:{width:l,marginLeft:n?0:12}},s.createElement("div",{className:"item_label",onClick:function(n){n.stopPropagation(),t._handleOnItemClick(e.prop)}},s.createElement("span",{className:"icon_checkbox "+(p&&p.checked?"checkbox_checked":"")}),s.createElement("span",null,e.label)),s.createElement("div",{className:"item_control",style:{display:"product_setting_link"===d?"none":"block"}},s.createElement(b.Z,{placement:"top",overlay:a},s.createElement("span",{onClick:function(n){return r(n,e.prop)}},s.createElement("i",{className:(n?"icon-cem_up":"icon-cem_up-and-down")+" fun_icon_a"}))),s.createElement(b.Z,{placement:"top",overlay:i},s.createElement("span",{onClick:function(n){return o(n,e.prop)},style:{marginLeft:4}},s.createElement("i",{className:"icon-cem_down fun_icon_b"}))))))},t._handleOnItemClick=function(e){var n=t.props,a=n.value,r=n.onChange;r&&r((0,N.ZP)(a,(function(n){var t=n.find((function(n){return n.prop===e}));t&&(t.checked=!t.checked)})))},t._handleOnFilxedLeftClick=function(e,n){e.stopPropagation(),t._handleOnFixedChange(n,"left")},t._handleOnCancelFixedClick=function(e,n){e.stopPropagation(),t._handleOnFixedChange(n,"")},t._handleOnFixedRightClick=function(e,n){e.stopPropagation(),t._handleOnFixedChange(n,"right")},t._handleOnFixedChange=function(e,n){var a=t.props,r=a.value,i=a.onChange;i&&i((0,N.ZP)(r,(function(t){var a=t.find((function(n){return n.prop===e}));a&&(a.fixed=n)})))},t.state={show:!1,value:[],leftOpts:[],normalOpts:[],rightOpts:[],maxLabelWidth:n.value.reduce((function(e,n){return Math.max((0,w.jD)(n.label,14)+56+16+16,e)}),0)},t}(0,o.Z)(n,e),n.getDerivedStateFromProps=function(e,n){if(JSON.stringify(e.value)!==JSON.stringify(n.value)){var t=e.value.reduce((function(n,t){var a=1;return"left"===t.fixed&&(a=0),"right"===t.fixed&&(a=2),n[a].push(e.value.find((function(e){return e.prop===t.prop}))),n}),[[],[],[]]),a=t[0],r=t[1],i=t[2];return{value:e.value,leftOpts:a,normalOpts:r,rightOpts:i,maxLabelWidth:e.value.reduce((function(e,n){return Math.max((0,w.jD)(n.label,14)+56+16+16,e)}),0)}}return null};var t=n.prototype;return t.componentDidMount=function(){var e=this;window.addEventListener("click",this._setShowFalse);var n=document.querySelectorAll("#draggable_zone");n.length&&n.forEach((function(n){S.default.create(n,{group:"draggable_zone",animation:150,filter:".undraggable",draggable:".draggable",handle:".my_handle",onEnd:function(n){var t=e.props,a=t.value,r=t.onChange,i=n.newIndex,o=n.oldIndex;if(i!==o){var l=a.filter((function(e){return"left"===e.fixed})),c=a.filter((function(e){return"right"===e.fixed})),s=(0,N.ZP)(a.filter((function(e){return!e.fixed})),(function(e){var n=e.splice(o,1)[0];e.splice(i,0,n)}));r&&r([].concat(l,s,c))}}})}))},t.componentWillUnmount=function(){window.removeEventListener("click",this._setShowFalse)},t.render=function(){var e=this,n=this.state,t=n.show,a=n.leftOpts,r=n.normalOpts,i=n.rightOpts,o=this.props,l=o.className,c=o.title;return s.createElement("div",{className:"yt_columns_selector_wrapper "+(l||""),onClick:this._handleParentClick},s.createElement("div",{className:"trigger "+(t?"sel":""),onClick:this._handleOnTriggerClick},c||"\u5217",s.createElement("i",{className:"icon-cem_arrow-launches",style:{transform:t?"rotate(-180deg)":""}})),s.createElement("div",{className:"options "+(t?"active":"")},a.length>0&&s.createElement(s.Fragment,null,s.createElement("div",{className:"opt_label"},"\u56fa\u5b9a\u5728\u5de6\u4fa7"),a.map((function(n){return e._renderOptionItem(n,!1,"\u4e0d\u56fa\u5b9a",e._handleOnCancelFixedClick,"\u56fa\u5b9a\u5728\u5217\u5c3e",e._handleOnFixedRightClick)}))),(a.length>0||i.length>0)&&s.createElement("div",{className:"opt_label"},"\u4e0d\u56fa\u5b9a"),s.createElement("div",{id:"draggable_zone",style:{visibility:r.length>0}},r.map((function(n){return e._renderOptionItem(n,!0,"\u56fa\u5b9a\u5728\u5217\u5934",e._handleOnFilxedLeftClick,"\u56fa\u5b9a\u5728\u5217\u5c3e",e._handleOnFixedRightClick)}))),i.length>0&&s.createElement(s.Fragment,null,s.createElement("div",{className:"opt_label"},"\u56fa\u5b9a\u5728\u53f3\u4fa7"),i.map((function(n){return e._renderOptionItem(n,!1,"\u4e0d\u56fa\u5b9a",e._handleOnCancelFixedClick,"\u56fa\u5b9a\u5728\u5217\u5934",e._handleOnFilxedLeftClick)})))))},n}(s.PureComponent);const O=x;x.propTypes={className:m().string,title:m().string,value:m().arrayOf(m().shape({label:m().string,prop:m().string,fixed:m().string,checked:m().bool})),onChange:m().func};var P,F,L=t(35239),I=["data","total","loading","savedKey","pageIndex","pageSize","onPageChange","onPageSizeChange","className"],z=function(e){function n(n){var t;return(t=e.call(this,n)||this)._handleOnResize=function(){var e=document.querySelector(".yt-listview-wrapper");e&&t.setState({tableWidth:e.clientWidth-5})},t._handleOnColumnsChange=function(e){t.setState({columns:e},(function(){t.props.savedKey&&function(e){return y.apply(this,arguments)}({projectId:L.t.get(L.V.curProject).id,key:t.props.savedKey,value:JSON.stringify(e.map((function(e){return{prop:e.prop,checked:e.checked,fixed:e.fixed}})))}).then((function(e){e.data}))}))},t.handleRoKey=function(e){var n=t.props.rowKeyProp;return n&&e&&e[n]?e[n]:JSON.stringify(e)},t.state={talbeWidth:0,columns:n.columns||[],loadingSave:!0},t}(0,o.Z)(n,e),n.getDerivedStateFromProps=function(e,n){};var t=n.prototype;return t.componentDidMount=function(){var e=this;window.addEventListener("resize",c()(this._handleOnResize,150)),this._handleOnResize();var n=this.props,t=n.savedKey,a=n.columns;t&&function(e){return k.apply(this,arguments)}({projectId:L.t.get(L.V.curProject).id,key:t}).then((function(n){var t,i=n.data;if(2e4===i.code)try{t=a.map((function(e,n){var t=JSON.parse(i.result).filter((function(n){var t=n.prop;return e.prop===t}));return t&&t.length>0?(0,r.Z)({},e,t[0]):e})).filter((function(e){return e}))}catch(o){}finally{e.setState({columns:t||e.state.columns,loadingSave:!1})}}))},t.componentWillUnmount=function(){window.removeEventListener("resize",this._handleOnResize)},t.componentDidUpdate=function(e,n){var t=this;JSON.stringify(e.columns)!==JSON.stringify(this.props.columns)&&this.props.columns.length>0&&this.setState({columns:this.props.columns.reduce((function(e,n,a){var i=t.state.columns.findIndex((function(e){var t=e.prop;return n.prop===t}));return e.splice(i>-1?i:a,0,(0,r.Z)({},n,t.state.columns[i])),e}),[]).filter((function(e){return e}))})},t.render=function(){var e=this.props,n=e.data,t=e.total,i=void 0===t?0:t,o=e.loading,l=e.savedKey,c=e.pageIndex,d=e.pageSize,p=e.onPageChange,m=e.onPageSizeChange,h=e.className,v=void 0===h?"":h,_=(0,a.Z)(e,I),C=this.state,E=C.columns,k=C.loadingSave;return s.createElement(g.Z,{data:n,className:"yt-listview-wrapper "+v,loading:l&&k||o},(0,g.P)(n)&&s.createElement(s.Fragment,null,s.createElement(u.Table,(0,r.Z)({},_,{columns:l?this.columns:this.props.columns,data:n,rowKey:this.handleRoKey})),p&&s.createElement(f,{onPageChange:p,onSizeChange:m,total:i,currLength:n.length,pageIndex:c,pageSize:d}),l&&s.createElement(O,{className:"column_selector",value:E,savedKey:l,onChange:this._handleOnColumnsChange})))},(0,i.Z)(n,[{key:"columns",get:function(){var e=this.state,n=e.tableWidth,t=e.columns,a=this.props,r=a.columnRenders,i=void 0===r?{}:r,o=a.headerRenders,l=void 0===o?{}:o,c=a.prefixColumns,s=0,u=0,d=0,p=[].concat(void 0===c?[]:c,JSON.parse(JSON.stringify(t.filter((function(e){var n=e.checked;return void 0===n||n})))));if(p.forEach((function(e){d+=e.width,e.fixed?s+=e.width:u+=e.width;var n=i[e.prop];n&&(e.render=n);var t=l[e.prop];t&&(e.renderHeader=t)})),n>d){var m=n-s;p.forEach((function(e){void 0!==e.checked&&!e.checked||e.fixed||(e.width=e.width/u*m)}))}return p}}]),n}(s.PureComponent);z.propTypes={className:m().string,savedKey:m().string.isRequired,rowKeyProp:m().string,data:m().any.isRequired,total:m().number,fixedHeight:m().bool,loading:m().bool,pageIndex:m().number,pageSize:m().number,onPageChange:m().func,onPageSizeChange:m().func,columnRenders:m().shape((P={},P[m().string]=m().func,P)),headerRenders:m().shape((F={},F[m().string]=m().func,F)),prefixColumns:m().arrayOf(m().shape({label:m().string,prop:m().string,fixed:m().oneOf(["","left","right"]),width:m().number,checked:m().bool})),columns:m().arrayOf(m().shape({label:m().string,prop:m().string,fixed:m().oneOf(["","left","right"]),width:m().number,checked:m().bool})).isRequired};const T=z}}]);