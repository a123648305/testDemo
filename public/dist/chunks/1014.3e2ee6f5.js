(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[1014],{91014:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x});var a=n(85354),l=n.n(a),g=n(67294),v=n.n(g),r=n(55815),t=n(37316),i=n.n(t),a=n(67154),C=n.n(a),m=n(61918),y=n(92360),t=n(45697),a=n.n(t),t=n(94184),k=n.n(t),f=function(t){function e(e){var a=t.call(this,e)||this;return a.togglePanel=function(e){var t=a.state.panelShow;t&&(e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()),setTimeout(function(){return a.setState({panelShow:!t})},0)},a.handleCheckAllStatus=function(){var e=a.state,t=e.tempValue,n=e.filteredOptions,e=a.props.options,e=n||e;a.setState({allChecked:0<t.length&&t.length===e.length,indeterminate:0<t.length&&t.length<e.length})},a.handleConfirm=function(){var e=a.state.tempValue;a.setState({value:JSON.parse(JSON.stringify(e)),panelShow:!1}),a.props.onChange(e)},a.handleCancel=function(){var e=a.state,t=e.value,n=e.filteredOptions,e=a.props.options,e=n||e;a.setState({tempValue:JSON.parse(JSON.stringify(t)),panelShow:!1,allChecked:t&&0<t.length&&t.length===e.length,indeterminate:t&&0<t.length&&t.length<e.length},function(){return a.handleClearInput()})},a.handleReset=function(){a.setState({tempValue:[],value:[],panelShow:!1,searchText:""},function(){return a.handleCheckAllStatus()})},a.handleFilter=function(t){var e=a.props.options;0<t.trim().length?(e=e.filter(function(e){return e.name.toUpperCase().includes(t.toUpperCase())}),a.setState({searchText:t,filteredOptions:e})):a.setState({filteredOptions:void 0,searchText:t})},a.handleClearInput=function(){0<a.state.searchText.length&&a.setState({searchText:"",filteredOptions:void 0},function(){return a.handleCheckAllStatus()})},a.state={type:e.type||2,title:e.title||"",filteredOptions:void 0,tempValue:e.defaultValue||[],value:e.defaultValue||[],maxLength:e.maxLength||0,indeterminate:!1,allChecked:!1,panelShow:!1,searchText:""},a}l()(e,t);var n=e.prototype;return n.componentDidMount=function(){window.addEventListener("click",this.handleCancel)},e.getDerivedStateFromProps=function(e,t){var n=e.type,a=e.title,l=e.options,r=e.value;if(n!==t.type)return{type:n};if(a!==t.title)return{title:a};if(JSON.stringify(r)===JSON.stringify(t.value))return null;l=0<r.length?l.reduce(function(e,t){var n=r.indexOf(t.id);return-1<n?e[n]=t:e.splice(e.length,0,t),e},r.slice()):void 0;return{filteredOptions:l,value:r,tempValue:r||[],allChecked:r&&0<r.length&&l&&r.length===l.length,indeterminate:r&&0<r.length&&l&&r.length<l.length}},n.componentWillUnmount=function(){window.removeEventListener("click",this.handleCancel)},n.handleCheckAll=function(){var e=this,t=this.state,n=t.tempValue,a=t.filteredOptions,t=this.props.options,t=a||t;this.setState({tempValue:n.length===t.length?[]:t.map(function(e){return e.id})},function(){return e.handleCheckAllStatus()})},n.handleCheckOne=function(e){var t=this,n=this.state,a=n.tempValue,n=n.maxLength;(0<n&&(a.length>=n&&a.includes(e)||a.length<n)||0===n)&&(-1<(n=a.indexOf(e))?a.splice(n,1):a.push(e),this.setState({tempValue:a},function(){return t.handleCheckAllStatus()}))},n.render=function(){var n=this,e=this.state,t=e.type,a=e.title,l=e.filteredOptions,r=e.indeterminate,i=e.allChecked,o=e.panelShow,c=e.tempValue,s=e.value,u=e.maxLength,p=e.style,d=e.searchText,h=this.props.options,m=0<h.length?h.filter(function(e){return s.includes(e.id)}).map(function(e){return e.name}):[],e=k()({"cc_multi-select-wrapper":!0,whiteBg:1===t,sel:o}),t=t&&1===t?"请选择":"全部",f=this.props.note,l=l||h;return v().createElement("div",{className:e,style:C()({backgroundColor:o?"rgb(97,121,155)":""},p),onClick:this.togglePanel},v().createElement("span",null,a&&a+"："),v().createElement("span",{className:"currValue",title:0<m.length?m.length===h.length?"全部":m.join("，"):t},0<m.length?m.length===h.length?"全部":m.join("，"):t),v().createElement("i",{className:"icon-cem_arrow-launches",style:{transform:o?"rotate(-180deg)":"",top:o?"-2px":"3px"}}),v().createElement("div",{className:"multi-select-panel",style:{display:o?"block":"none"},onClick:function(e){return e.stopPropagation()}},v().createElement("div",{className:"multi-select-header"},!!u&&v().createElement("div",{className:"limit_info"},"添加展示",v().createElement("span",null,"（最多"+u+"个，已添加"+c.length+"个）")),v().createElement(y.Input,{ref:function(e){return n.input=e},value:d,onChange:this.handleFilter,placeholder:"请输入搜索关键词",icon:0<d.length?"close":"search",onIconClick:this.handleClearInput})),v().createElement("ul",{className:"multi-select-panel-body"},0<l.length?v().createElement(g.Fragment,null,0===u&&v().createElement("li",{className:"all_check",onClick:function(){return n.handleCheckAll()}},v().createElement("div",{className:"all_select"},v().createElement(y.Checkbox,{checked:i,indeterminate:r,onChange:function(){return n.handleCheckAll()}}),v().createElement("label",null,"全选"))),l.map(function(e,t){return v().createElement("li",{key:t,className:0<u&&c.length>=u&&!c.includes(e.id)?"disabled":"",onClick:function(){return n.handleCheckOne(e.id)},style:{height:f?"50px":"36px"}},v().createElement(y.Checkbox,{disabled:0<u&&c.length>=u&&!c.includes(e.id),checked:c.includes(e.id),value:e.id,onChange:function(){return n.handleCheckOne(e.id)}}),v().createElement("label",{title:e.name},e.name),f&&v().createElement("p",{className:"note"},f(e)))})):v().createElement("li",null,v().createElement("label",null,"暂无数据"))),v().createElement("div",{className:"multi-select-panel-footer"},v().createElement(y.Button,{type:"primary",onClick:this.handleConfirm},"确认"),v().createElement(y.Button,{onClick:this.handleCancel},"取消"))))},e}(g.Component);f.propTypes={type:a().number,title:a().string.isRequired,options:a().arrayOf(a().shape({id:a().oneOfType([a().string,a().number]),name:a().string})),defaultValue:a().arrayOf(a().string),value:a().arrayOf(a().string),maxLength:a().number,onChange:a().func.isRequired,style:a().object,note:a().func};var t=n(93913),o=n.n(t),c=n(2271),s=n(43036),t=function(e){var t=e.value,n=e.onChange,a=e.options,l=v().useRef(void 0),r=a.find(function(e){return e.value===t}),e=v().useState(!1),i=e[0],o=e[1];return v().useEffect(function(){function e(){i&&o(!1)}return window.addEventListener("click",e),function(){return window.removeEventListener("click",e)}}),r?v().createElement("div",{className:"yt_table_item_selector_wrapper"},r.title,v().createElement(s.Z,{ref:l,visible:i,placement:"bottom",overlayClassName:"yt_table_item_selector_overlay",overlay:v().createElement(v().Fragment,null,a.map(function(e){return v().createElement("div",{className:"item "+(e.value===t?"sel":""),key:e.value,onClick:function(){return n&n(e.value)}},e.title)}))},v().createElement("i",{className:"icon-cem_pull-down-or-take-up "+(i?"active":""),style:{transform:i?"rotate(-180deg)":""},onClick:function(e){e.stopPropagation(),o(!i)}}))):"差价高于"};const u=t;t.propTypes={value:a().string,onChange:a().func,options:a().shape({title:a().string,value:a().string})};var _=n(79607),p=n(87219),d={callback:void 0,visible:!1,type:"UNKNOWN"};const h=function(t){function e(e){var n=t.call(this,e)||this;return n._handleOnConfirm=function(){var e=n.state,t=e.callback,e=e.type;t&&t({type:e}),n._handleOnCancel()},n._handleOnCancel=function(){n.setState(JSON.parse(JSON.stringify(d)))},n._handleOnTypeChange=function(e){n.setState({type:e})},n.state=JSON.parse(JSON.stringify(d)),n}l()(e,t);var n=e.prototype;return n.show=function(e){this.setState(C()({visible:!0},e))},n.render=function(){var e=this.state,t=e.visible,e=e.type;return v().createElement(y.Dialog,{title:"客服批量分类",className:"yt_conversation_setting_edit_config_wrapper",size:"tiny",visible:t,onCancel:this._handleOnCancel},v().createElement(y.Dialog.Body,null,v().createElement("div",{className:"item"},v().createElement("span",null,"客服类型"),v().createElement(y.Radio.Group,{value:e,onChange:this._handleOnTypeChange},v().createElement(y.Radio,{value:"PRE_SALE"},"售前"),v().createElement(y.Radio,{value:"AFTER_SALE"},"售后"),v().createElement(y.Radio,{value:"UNKNOWN"},"未分类")))),v().createElement(y.Dialog.Footer,null,v().createElement(y.Button,{type:"default",onClick:this._handleOnCancel},"取消"),v().createElement(y.Button,{type:"primary",onClick:this._handleOnConfirm},"确定")))},e}(v().PureComponent),E=function(t){function e(e){var r=t.call(this,e)||this;return r._handleOnTypeChange=function(e,t){var n=r.props.onTypeChange;n&&n(e,[t.id])},r._handleOnPageChange=function(e){var t=r.props.onChange;t&&t({pageIndex:e})},r._handleOnPageSizeChange=function(e){var t=r.props.onChange;t&&t({pageSize:e,pageIndex:1})},r._handleOnBashChangeClick=function(){var t=r.state.checkedWaiters,n=r.props.onTypeChange;r.dialogRef.show({callback:function(e){e=e.type;n&&n(e,t),r.setState({checkedWaiters:[],isAllChecked:!1,indeterminate:!1})}})},r._handleOnSelectChange=function(t,n){var e=r.state.checkedWaiters,a=r.props.allData,l=(0,p.ZP)(e,function(e){return t?void e.push(n):e.filter(function(e){return e!==n})}),e=l.length===a.length,a=!e&&0<l.length;r.setState({checkedWaiters:l,isAllChecked:e,indeterminate:a})},r._handleOnSelectAll=function(e){var t=r.props.allData;r.setState({isAllChecked:e,indeterminate:!1,checkedWaiters:e?t.map(function(e){return e.id}):[]})},r._getDialogRef=function(e){return r.dialogRef=e},r.state={isAllChecked:!1,indeterminate:!1,checkedWaiters:[]},r.columns=[{label:"客服名称",prop:"waiterName",width:200,fixed:"",checked:!0},{label:"平台",prop:"platform",width:120,fixed:"",checked:!0},{label:"店铺名称",prop:"shopName",width:200,fixed:"",checked:!0},{label:"客服类型",prop:"waiterType",width:80,fixed:"",checked:!0}],r.prefixColumns=[{fixed:"left",label:"",width:16},{width:50,fixed:"left",prop:"selection",label:""}],r}return l()(e,t),e.prototype.render=function(){var e=this.props,t=e.data,n=e.loading,a=e.className,l=e.total,r=e.pageIndex,i=e.pageSize,e=(e.visibleChange,this.state.checkedWaiters);return v().createElement(v().Fragment,null,v().createElement(y.Button,{className:"bashTypeChangeBtn",type:"primary",onClick:this._handleOnBashChangeClick,disabled:!e.length},"批量分类"),v().createElement(c.Z,{savedKey:"conversation_setting",total:l,pageIndex:r,pageSize:i,className:a,prefixColumns:this.prefixColumns,data:t,loading:n,columns:this.columns,columnRenders:this.columnRenders,headerRenders:this.headerRenders,onPageChange:this._handleOnPageChange,onPageSizeChange:this._handleOnPageSizeChange}),v().createElement(h,{ref:this._getDialogRef}))},o()(e,[{key:"headerRenders",get:function(){var e=this,t=this.state,n=t.isAllChecked,a=t.indeterminate;return{selection:function(){return v().createElement("span",{className:(n?"checkbox_checked":a?"checkbox_indeterminate":"")+" icon_checkbox",onClick:function(){return e._handleOnSelectAll(!n)}})}}}},{key:"columnRenders",get:function(){var n=this,a=this.state.checkedWaiters;return{selection:function(e){var t=a.includes(e.id);return v().createElement("span",{className:(t?"checkbox_checked":"")+" icon_checkbox",onClick:function(){return n._handleOnSelectChange(!t,e.id)}})},waiterType:function(t){return v().createElement(u,{value:t.waiterType,options:_.uG,onChange:function(e){return n._handleOnTypeChange(e,t)}})}}}}]),e}(g.PureComponent);const O=function(e){var n=e.onFilterChange,t=e.type,a=e.platform,l=e.store,r=e.platformOpts,i=e.storeOpts,o=e.clusterDataList,c=e.fetchingDataList,s=e.total,u=e.dataList,p=e.pageIndex,d=e.pageSize,h=e.visibleChange,e=function(e){n({keyword:e})};return v().createElement("div",{className:"yt_convasation_setting_edit_wrapper"},v().createElement("div",{className:"title"},v().createElement(m.Z,{onSearch:e,onClear:e,placeholder:"请输入客服名称",style:{width:260}}),v().createElement(f,{title:"客服类型",value:t,options:_.Lh,onChange:function(e){n({type:e})}}),v().createElement(f,{title:"平台",value:a,options:r,onChange:function(e){n({platform:e})}}),v().createElement(f,{title:"店铺名称",value:l,options:i,onChange:function(e){n({store:e})}})),v().createElement(E,{allData:u,total:s,className:"list_content",data:o,loading:c,pageIndex:p,pageSize:d,onChange:n,onTypeChange:function(e,t){n({waiterIds:t,type:e})},visibleChange:h}))};var b=n(35239),a=n(55609),S=n(64396).Z.conversation.setting,n=function(n){function e(e){var t=n.call(this,e)||this;return t._handleOnFilterChange=function(e){e.waiterIds?t.props.updateWaiterType(e):void 0!==e.keyword||e.type||e.platform||e.store?t.props.fetchDataList(e):e.pageIndex&&t.props.updateClusterDataList(e)},t.state={},t.event={onFilterChange:t._handleOnFilterChange},t}l()(e,n);var t=e.prototype;return t.componentDidMount=function(){this.props.fetchParams({projectId:b.t.get(b.V.curProject).id})},t.render=function(){return v().createElement(O,C()({},this.props,this.state,this.event))},e}(g.PureComponent);const w={Edit:(0,a.connect)(function(e){var t=e.loading,e=i()(e,["loading"]);return C()({},e[S],{fetchingDataList:t.effects[S+"/fetchDataList"]||t.effects[S+"/updateWaiterType"]||!1})},function(t){return{fetchParams:function(e){return t({type:S+"/fetchParams",payload:e})},fetchDataList:function(e){return t({type:S+"/fetchDataList",payload:e})},updateWaiterType:function(e){return t({type:S+"/updateWaiterType",payload:e})},updateClusterDataList:function(e){return t({type:S+"/updateClusterDataList",payload:e})},visibleChange:function(e){return t({type:"pushRule/visibleChange",payload:e})}}})(n)};var N=[{name:"客服分类设置",com:"Edit"}],n=function(n){function e(e){var t=n.call(this,e)||this;return t._handleOnClick=function(e){t.state.curPage.com!==e.com&&t.setState({curPage:e})},t.state={curPage:N[0]},t}return l()(e,n),e.prototype.render=function(){var t=this,n=this.state.curPage,a=this.props.unknownTotal,e=w[n.com];return v().createElement("div",{className:"conversation_setting_wrapper"},v().createElement(r.Z,{title:[{title:"配置"},{title:n.name}]}),v().createElement("div",{className:"setting_wrap"},v().createElement("div",{className:"left"},N.map(function(e){return v().createElement("div",{className:(n.com===e.com?"sel":"")+" item",key:e.com,onClick:function(){return t._handleOnClick(e)}},e.name,!!a&&v().createElement("span",{className:"pop"},99<a?"99+":a))})),v().createElement("div",{className:"right"},v().createElement(e,null))))},e}(v().PureComponent);const x=(0,a.connect)(function(e){return{unknownTotal:e.conversationSetting.unknownTotal}})(n)},61918:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var t=n(67294),u=n.n(t),t=n(45697),n=n.n(t),t=function(e){var t=e.className,n=e.onClear,a=e.onSearch,l=e.placeholder,r=e.style,i=e.defValue,o=e.signal,e=u().useState(i),c=e[0],s=e[1];u().useEffect(function(){s(i)},[i,o]);return u().createElement("div",{style:r,className:"yt_search_input_wrapper "+(t||"")},u().createElement("input",{placeholder:l,value:c,onKeyDown:function(e){13===e.keyCode&&a(c)},onChange:function(e){return s(e.target.value)},autoComplete:"off"}),c&&u().createElement("i",{className:"icon-cem_log-off",onClick:function(){s(""),n&&n("")}}),u().createElement("i",{className:"icon-cem_small-search",onClick:function(){return a(c)}}))};t.propTypes={className:n().string,onSearch:n().func.isRequired,placeholder:n().string,style:n().object,defValue:n().string,signal:n().any,onClear:n().func};const a=t},2271:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var a=n(37316),d=n.n(a),t=n(67154),h=n.n(t),a=n(93913),l=n.n(a),t=n(85354),r=n.n(t),a=n(23279),i=n.n(a),t=n(67294),m=n.n(t),f=n(92360),s=n(35303),a=n(45697),t=n.n(a),u=[{label:"10项/页",value:10},{label:"20项/页",value:20},{label:"40项/页",value:40},{label:"100项/页",value:100}];const g=function(e){var t=e.onPageChange,n=e.onSizeChange,a=e.total,l=void 0===a?0:a,r=e.pageIndex,i=e.pageSize,o=e.currLength,c=e.layout,a=e.className,e=0===l?0:(r-1)*i+1,o=0===l?0:e+o-1;return 0===l?null:m().createElement("div",{className:"yt-awp-pagination "+(a||"")},m().createElement("span",{className:"total_num"},m().createElement("span",null,e+" - "+o+" "),"项，共",m().createElement("span",null," "+l+" "),"项"),m().createElement("div",{style:{textAlign:"right",float:"right"},className:"new_pagination"},m().createElement(f.Pagination,{small:!0,pageSize:i,currentPage:r,pageCount:Math.ceil(l/i),layout:0===l?"":"prev, pager, next",onCurrentChange:t}),void 0===c||c.includes("sizes")?m().createElement(s.RS,{multiple:!1,tags:!1,showSearch:!1,optionFilterProp:"label",optionLabelProp:"label",animation:"slide-up",dropdownClassName:"custom-pagination-dropdown",value:i||10,onChange:n},u.map(function(e,t){return m().createElement(s.Wx,{key:t,label:e.label,value:e.value},e.label)})):null))};t().propTypes={onPageChange:t().func,onSizeChange:t().func,total:t().number,pageIndex:t().number,pageSize:t().number,currLength:t().number,layout:t().string,className:t().string};var v=n(8201),a=n(48926),o=n.n(a),a=n(87757),c=n.n(a),p=n(36144);function C(){return(C=o()(c().mark(function e(t){var n,a;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.projectId,a=t.key,e.abrupt("return",p.h.post("/default/value/find",{projectId:n,key:a}));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function y(){return(y=o()(c().mark(function e(t){var n,a,l;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.projectId,a=t.value,l=t.key,e.abrupt("return",p.h.post("/default/value/update",{projectId:n,key:l,value:a}));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}var k=n(39432),_=n(43036),E=n(51474),O=n(87219),a=function(t){function e(e){var s=t.call(this,e)||this;return s._setShowFalse=function(){s.setState({show:!1})},s._handleParentClick=function(e){s.state.show&&(e.stopPropagation(),e.nativeEvent.stopImmediatePropagation())},s._handleOnTriggerClick=function(){setTimeout(function(){s.setState({show:!s.state.show})},0)},s._renderOptionItem=function(t,e,n,a,l,r){var i=s.state.maxLabelWidth,o=s.props,c=o.value,o=o.savedKey,c=c.find(function(e){return e.prop===t.prop});return m().createElement("div",{className:"opt_item "+(e?"draggable":""),key:t.prop},e&&m().createElement("i",{className:"icon-cem_move my_handle"}),m().createElement("div",{className:"opt_content",style:{width:i,marginLeft:e?0:12}},m().createElement("div",{className:"item_label",onClick:function(e){e.stopPropagation(),s._handleOnItemClick(t.prop)}},m().createElement("span",{className:"icon_checkbox "+(c&&c.checked?"checkbox_checked":"")}),m().createElement("span",null,t.label)),m().createElement("div",{className:"item_control",style:{display:"product_setting_link"===o?"none":"block"}},m().createElement(_.Z,{placement:"top",overlay:n},m().createElement("span",{onClick:function(e){return a(e,t.prop)}},m().createElement("i",{className:(e?"icon-cem_up":"icon-cem_up-and-down")+" fun_icon_a"}))),m().createElement(_.Z,{placement:"top",overlay:l},m().createElement("span",{onClick:function(e){return r(e,t.prop)},style:{marginLeft:4}},m().createElement("i",{className:"icon-cem_down fun_icon_b"}))))))},s._handleOnItemClick=function(t){var e=s.props,n=e.value,e=e.onChange;e&&e((0,O.ZP)(n,function(e){e=e.find(function(e){return e.prop===t});e&&(e.checked=!e.checked)}))},s._handleOnFilxedLeftClick=function(e,t){e.stopPropagation(),s._handleOnFixedChange(t,"left")},s._handleOnCancelFixedClick=function(e,t){e.stopPropagation(),s._handleOnFixedChange(t,"")},s._handleOnFixedRightClick=function(e,t){e.stopPropagation(),s._handleOnFixedChange(t,"right")},s._handleOnFixedChange=function(t,n){var e=s.props,a=e.value,e=e.onChange;e&&e((0,O.ZP)(a,function(e){e=e.find(function(e){return e.prop===t});e&&(e.fixed=n)}))},s.state={show:!1,value:[],leftOpts:[],normalOpts:[],rightOpts:[],maxLabelWidth:e.value.reduce(function(e,t){return Math.max((0,k.jD)(t.label,14)+56+16+16,e)},0)},s}r()(e,t),e.getDerivedStateFromProps=function(a,e){if(JSON.stringify(a.value)===JSON.stringify(e.value))return null;var t=a.value.reduce(function(e,t){var n=1;return"left"===t.fixed&&(n=0),e[n="right"===t.fixed?2:n].push(a.value.find(function(e){return e.prop===t.prop})),e},[[],[],[]]),n=t[0],e=t[1],t=t[2];return{value:a.value,leftOpts:n,normalOpts:e,rightOpts:t,maxLabelWidth:a.value.reduce(function(e,t){return Math.max((0,k.jD)(t.label,14)+56+16+16,e)},0)}};var n=e.prototype;return n.componentDidMount=function(){var i=this;window.addEventListener("click",this._setShowFalse);var e=document.querySelectorAll("#draggable_zone");e.length&&e.forEach(function(e){E.ZP.create(e,{group:"draggable_zone",animation:150,filter:".undraggable",draggable:".draggable",handle:".my_handle",onEnd:function(e){var t=i.props,n=t.value,a=t.onChange,l=e.newIndex,r=e.oldIndex;l!==r&&(t=n.filter(function(e){return"left"===e.fixed}),e=n.filter(function(e){return"right"===e.fixed}),n=(0,O.ZP)(n.filter(function(e){return!e.fixed}),function(e){var t=e.splice(r,1)[0];e.splice(l,0,t)}),a&&a([].concat(t,n,e)))}})})},n.componentWillUnmount=function(){window.removeEventListener("click",this._setShowFalse)},n.render=function(){var t=this,e=this.state,n=e.show,a=e.leftOpts,l=e.normalOpts,r=e.rightOpts,i=this.props,e=i.className,i=i.title;return m().createElement("div",{className:"yt_columns_selector_wrapper "+(e||""),onClick:this._handleParentClick},m().createElement("div",{className:"trigger "+(n?"sel":""),onClick:this._handleOnTriggerClick},i||"列",m().createElement("i",{className:"icon-cem_arrow-launches",style:{transform:n?"rotate(-180deg)":""}})),m().createElement("div",{className:"options "+(n?"active":"")},0<a.length&&m().createElement(m().Fragment,null,m().createElement("div",{className:"opt_label"},"固定在左侧"),a.map(function(e){return t._renderOptionItem(e,!1,"不固定",t._handleOnCancelFixedClick,"固定在列尾",t._handleOnFixedRightClick)})),(0<a.length||0<r.length)&&m().createElement("div",{className:"opt_label"},"不固定"),m().createElement("div",{id:"draggable_zone",style:{visibility:0<l.length}},l.map(function(e){return t._renderOptionItem(e,!0,"固定在列头",t._handleOnFilxedLeftClick,"固定在列尾",t._handleOnFixedRightClick)})),0<r.length&&m().createElement(m().Fragment,null,m().createElement("div",{className:"opt_label"},"固定在右侧"),r.map(function(e){return t._renderOptionItem(e,!1,"不固定",t._handleOnCancelFixedClick,"固定在列头",t._handleOnFilxedLeftClick)}))))},e}(m().PureComponent);const b=a;a.propTypes={className:t().string,title:t().string,value:t().arrayOf(t().shape({label:t().string,prop:t().string,fixed:t().string,checked:t().bool})),onChange:t().func};var S=n(35239),a=function(t){function e(e){var n=t.call(this,e)||this;return n._handleOnResize=function(){var e=document.querySelector(".yt-listview-wrapper");e&&n.setState({tableWidth:e.clientWidth-5})},n._handleOnColumnsChange=function(e){n.setState({columns:e},function(){n.props.savedKey&&!function(){return y.apply(this,arguments)}({projectId:S.t.get(S.V.curProject).id,key:n.props.savedKey,value:JSON.stringify(e.map(function(e){return{prop:e.prop,checked:e.checked,fixed:e.fixed}}))}).then(function(e){e.data})})},n.handleRoKey=function(e){var t=n.props.rowKeyProp;return t&&e&&e[t]?e[t]:JSON.stringify(e)},n.state={talbeWidth:0,columns:e.columns||[],loadingSave:!0},n}r()(e,t),e.getDerivedStateFromProps=function(e,t){};var n=e.prototype;return n.componentDidMount=function(){var n=this;window.addEventListener("resize",i()(this._handleOnResize,150)),this._handleOnResize();var e=this.props,t=e.savedKey,l=e.columns;t&&!function(){return C.apply(this,arguments)}({projectId:S.t.get(S.V.curProject).id,key:t}).then(function(e){var t,a=e.data;if(2e4===a.code)try{t=l.map(function(t,e){var n=JSON.parse(a.result).filter(function(e){e=e.prop;return t.prop===e});return n&&0<n.length?h()({},t,n[0]):t}).filter(function(e){return e})}catch(e){}finally{n.setState({columns:t||n.state.columns,loadingSave:!1})}})},n.componentWillUnmount=function(){window.removeEventListener("resize",this._handleOnResize)},n.componentDidUpdate=function(e,t){var l=this;JSON.stringify(e.columns)!==JSON.stringify(this.props.columns)&&0<this.props.columns.length&&this.setState({columns:this.props.columns.reduce(function(e,t,n){var a=l.state.columns.findIndex(function(e){e=e.prop;return t.prop===e});return e.splice(-1<a?a:n,0,h()({},t,l.state.columns[a])),e},[]).filter(function(e){return e})})},n.render=function(){var e=this.props,t=e.data,n=e.total,a=void 0===n?0:n,l=e.loading,r=e.savedKey,i=e.pageIndex,o=e.pageSize,c=e.onPageChange,s=e.onPageSizeChange,u=e.className,p=void 0===u?"":u,n=d()(e,["data","total","loading","savedKey","pageIndex","pageSize","onPageChange","onPageSizeChange","className"]),u=this.state,e=u.columns,u=u.loadingSave;return m().createElement(v.Z,{data:t,className:"yt-listview-wrapper "+p,loading:r&&u||l},(0,v.P)(t)&&m().createElement(m().Fragment,null,m().createElement(f.Table,h()({},n,{columns:(r?this:this.props).columns,data:t,rowKey:this.handleRoKey})),c&&m().createElement(g,{onPageChange:c,onSizeChange:s,total:a,currLength:t.length,pageIndex:i,pageSize:o}),r&&m().createElement(b,{className:"column_selector",value:e,savedKey:r,onChange:this._handleOnColumnsChange})))},l()(e,[{key:"columns",get:function(){var t,e=this.state,n=e.tableWidth,a=e.columns,l=this.props,e=l.columnRenders,r=void 0===e?{}:e,e=l.headerRenders,i=void 0===e?{}:e,l=l.prefixColumns,o=0,c=0,s=0,a=[].concat(void 0===l?[]:l,JSON.parse(JSON.stringify(a.filter(function(e){e=e.checked;return void 0===e||e}))));return a.forEach(function(e){s+=e.width,e.fixed?o+=e.width:c+=e.width;var t=r[e.prop];t&&(e.render=t);t=i[e.prop];t&&(e.renderHeader=t)}),s<n&&(t=n-o,a.forEach(function(e){void 0!==e.checked&&!e.checked||e.fixed||(e.width=e.width/c*t)})),a}}]),e}(m().PureComponent);a.propTypes={className:t().string,savedKey:t().string.isRequired,rowKeyProp:t().string,data:t().any.isRequired,total:t().number,fixedHeight:t().bool,loading:t().bool,pageIndex:t().number,pageSize:t().number,onPageChange:t().func,onPageSizeChange:t().func,columnRenders:t().shape(((n={})[t().string]=t().func,n)),headerRenders:t().shape(((n={})[t().string]=t().func,n)),prefixColumns:t().arrayOf(t().shape({label:t().string,prop:t().string,fixed:t().oneOf(["","left","right"]),width:t().number,checked:t().bool})),columns:t().arrayOf(t().shape({label:t().string,prop:t().string,fixed:t().oneOf(["","left","right"]),width:t().number,checked:t().bool})).isRequired};const w=a}}]);