(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[1450],{61450:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>b});var a=t(37316),r=t.n(a),n=t(67154),l=t.n(n),a=t(85354),i=t.n(a),n=t(67294),s=t.n(n),u=t(55815),p=t(35239),o=t(2271),c=t(61918),d=t(92360),a=t(30381),h=t.n(a),m=t(39432),f=t(61409),g={visible:!1,id:"",callback:void 0};const v=function(n){function e(e){var t=n.call(this,e)||this;return t.showDialog=function(e){t.setState(l()({visible:!0},e))},t._handleOnCancel=function(){t.setState(JSON.parse(JSON.stringify(g)))},t._handleOnConfrim=function(){var e=t.state,n=e.callback,e=e.id;n&&n(e),t._handleOnCancel()},t.state=JSON.parse(JSON.stringify(g)),t}return i()(e,n),e.prototype.render=function(){var e=this.state.visible;return s().createElement(d.Dialog,{className:"yt-nps-template-delete-dialog-wrapper",size:"tiny",visible:e,title:"确定删除此规则",closeOnClickModal:!1,onCancel:this._handleOnCancel},s().createElement(d.Dialog.Body,null,"删除此订阅规则，与之相关的商品链接和消息也将一并移出项目，包括在商品链接中维护的主题值"),s().createElement(d.Dialog.Footer,null,s().createElement(d.Button,{onClick:this._handleOnCancel},"取消"),s().createElement(d.Button,{type:"primary",onClick:this._handleOnConfrim},"确定")))},e}(s().PureComponent);var y=t(43036);const C=function(n){function e(e){var r=n.call(this,e)||this;return r._handleOnSearch=function(e){var n=r.props.onFilterChange;n&&n({keyword:e})},r._handleOnEditClick=function(e){var n,t,a={};e&&(n=e.id,t=e.idValuesModels,a.id=n,a.rules=t.map(function(t){var e="price"===t.id?t.values:t.values?t.values.map(function(e,n){return{id:e,name:t.names[n]}}):null;return{id:t.id,values:e}}),a.rules.push({id:"autoAdd",values:[e.autoAdd]})),f.mW.push({pathname:"/account/project/"+r.props.route+"/subscribe/rules/edit",state:a})},r._handleOnDeleteClick=function(e){var n=r.props.onDelete;r.dialogRef.current.showDialog({id:e,callback:function(e){n&&n({id:e})}})},r._handleOnPageSizeChange=function(e){var n=r.props.onFilterChange;n&&n({pageIndex:1,pageSize:e})},r._handleOnPageChange=function(e){var n=r.props.onFilterChange;n&&n({pageIndex:e})},r._renderOverlay=function(e){return s().createElement(s().Fragment,null,e.reduce(function(e,n){return n.values&&n.values.length&&e.push(s().createElement("div",{className:"rule_item",key:n.id},s().createElement("span",null,n.name),s().createElement("span",null,n.names.join("price"===n.id?" - ":"，")))),e},[]))},r.dialogRef=s().createRef(),r.columns=[{label:"ID",prop:"number",width:180,fixed:"",checked:!0},{label:"订阅规则",prop:"rule",width:320,fixed:"",checked:!0},{label:"新发现商品链接数",prop:"linkCount",width:100,fixed:"",checked:!0},{label:"创建时间",prop:"createdAt",width:160,fixed:"",checked:!0},{label:"最近修改时间",prop:"updatedAt",width:100,fixed:"",checked:!0},{label:"状态",prop:"status",width:100,fixed:"",checked:!0},{label:"操作",prop:"control",width:100,fixed:"",checked:!0}],r.prefixColumns=[{label:"",width:16,fixed:"left"}],r.columnRenders={rule:function(e){e=e.idValuesModels;return s().createElement("div",{className:"rule_wrapper"},s().createElement("div",null,s().createElement("div",{className:"rule_title"},"内容"),s().createElement("div",{className:"rule_content"},e.reduce(function(e,n){return n.values&&n.values.length&&e.push(s().createElement("div",{className:"rule_item",key:n.id},s().createElement("span",null,n.name),s().createElement("span",null,n.names.join("price"===n.id?" - ":"，")))),e},[]))),s().createElement(y.Z,{placement:"top",overlayClassName:"popover-detail-tips",overlay:r._renderOverlay(e)},s().createElement("span",{className:"rule_detail"},"详情")))},linkCount:function(e){return e.syncTime&&"null"!==e.syncTime?s().createElement(y.Z,{placement:"top",overlay:e.syncTime?h()(e.syncTime).format("YYYY年MM月DD日 HH:mm 更新"):""},s().createElement("span",null,e.linkCount||0)):s().createElement("span",null,e.linkCount||0)},createdAt:function(e){return h()(e.createAt).format("YYYY-MM-DD HH:mm")},updatedAt:function(e){return(0,m.Go)(e.updateAt)},status:function(e){switch(e.status){case"Enable":return"排队中";case"Sync":return"同步中";case"Sync_Finish":return"同步完成"}},control:function(e){return s().createElement("div",{className:"item-control "+e.status},s().createElement("span",{onClick:function(){return"Sync"!==e.status&&r._handleOnEditClick(e)}},"编辑"),s().createElement("span",{onClick:function(){return"Sync"!==e.status&&r._handleOnDeleteClick(e.id)}},"删除"))}},r}return i()(e,n),e.prototype.render=function(){var e=this,n=this.props,t=n.data,a=n.loading,r=n.pageSize,l=n.pageIndex,n=n.total;return s().createElement("div",{className:"yt_product_setting_rule_listview_wrapper"},s().createElement("div",{className:"header_title"},s().createElement(c.Z,{onSearch:this._handleOnSearch,onClear:this._handleOnSearch,placeholder:"搜索ID"}),s().createElement(d.Button,{onClick:function(){return e._handleOnEditClick()},type:"primary"},"新建规则")),s().createElement(o.Z,{savedKey:"product_setting_subscribe_rule",rowKeyProp:"id",total:n,pageIndex:l,pageSize:r,onPageChange:this._handleOnPageChange,onPageSizeChange:this._handleOnPageSizeChange,data:t,loading:a,columns:this.columns,columnRenders:this.columnRenders,prefixColumns:this.prefixColumns}),s().createElement(v,{ref:this.dialogRef}))},e}(n.PureComponent);const _=function(e){var n=e.ruleList,t=e.total,a=e.pageIndex,r=e.pageSize,l=e.loading,i=e.onDelete,o=e.onFilterChange,c=e.connectCount,e=e.location.pathname.split("/")[3];return s().createElement("div",{className:"yt_product_setting_subscribe_rules_wrapper"},s().createElement(u.Z,{title:function(e){e=e.title;return[{title:"所有项目",url:"/account/project"},{title:p.t.get(p.V.backProjectConfig).name,url:"/account/project/preview"},{title:e,url:"/account/project/"+location.pathname.split("/")[3]+"/subscribe"},{title:"智能订阅",url:"/account/project/"+location.pathname.split("/")[3]+"/subscribe",state:{type:"SubscribeOverview"}},{title:"订阅规则",url:"/account/project/"+location.pathname.split("/")[3]+"/subscribe/rules"}]}({title:"comment"===e?"电商评论":"电商监控"})}),.95<=c[0]/c[1]&&s().createElement("div",{className:"warning_tip"},s().createElement("i",{className:"icon-cem_warning"}),"提示：项目中链接权益为"+c[0]+"，已使用"+c[1]+",已超过"+(c[0]/c[1]*100).toFixed(1)+"%；系统已停止自动同步，但你可以手动添加，如有疑问，请联系客户成功"),s().createElement("div",{className:"content"},s().createElement(C,{data:n,total:t,pageSize:r,pageIndex:a,loading:l,onFilterChange:o,onDelete:i,route:e})))};var a=t(64396),t=t(55609),E=a.Z.product.setting.subscribe.rule,n=function(n){function e(e){var a=n.call(this,e)||this;return a._handleOnWsMessage=function(e){var t,n=e.data;n.type&&"ws"===n.type&&(n=(e=n.payload).type,t=e.result,"SUBSCRIBE_RULE_PRODUCT_NUM"===n&&(n=(a.props.ruleList||[]).map(function(n){var e=t.idLog.find(function(e){return String(e.id)===String(n.id)});return l()({},n,{linkCount:e?e.number:0,finishTime:e?e.time:""})}),a.props.save({ruleList:n})))},a._handleOnFilterChange=function(e){void 0===e.keyword&&!e.pageIndex||a.props.fetchRuleList(l()({},e,{type:a.props.location.pathname.includes("/price")?"PRICE":"DEFAULT"}))},a._handleOnDelete=function(e){a.props.deleteRule(e)},a.state={},a.event={onFilterChange:a._handleOnFilterChange,onDelete:a._handleOnDelete},e.location.pathname.includes("/price")?e.save({type:"PRICE"}):e.save({type:"DEFAULT"}),a}i()(e,n);var t=e.prototype;return t.componentDidMount=function(){this.props.fetchRuleList({projectId:p.t.get(p.V.curProject).id,type:this.props.location.pathname.includes("/price")?"PRICE":"DEFAULT"}),this.props.fetchConnectCount(),window.addEventListener("message",this._handleOnWsMessage)},t.componentWillUnmount=function(){window.removeEventListener("message",this._handleOnWsMessage),this.props.clean()},t.render=function(){return s().createElement(_,l()({},this.props,this.state,this.event))},e}(n.PureComponent);const b=(0,t.connect)(function(e){var n=e.loading,e=r()(e,["loading"]);return l()({},e[E],{loading:n.effects[E+"/fetchRuleList"]||!1})},function(n){return{fetchRuleList:function(e){return n({type:E+"/fetchRuleList",payload:e})},deleteRule:function(e){return n({type:E+"/deleteRule",payload:e})},fetchConnectCount:function(){return n({type:E+"/fetchConnectCount"})},save:function(e){return n({type:E+"/save",payload:e})},clean:function(e){return n({type:E+"/clean",payload:e})}}})(n)},61918:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var n=t(67294),u=t.n(n),n=t(45697),t=t.n(n),n=function(e){var n=e.className,t=e.onClear,a=e.onSearch,r=e.placeholder,l=e.style,i=e.defValue,o=e.signal,e=u().useState(i),c=e[0],s=e[1];u().useEffect(function(){s(i)},[i,o]);return u().createElement("div",{style:l,className:"yt_search_input_wrapper "+(n||"")},u().createElement("input",{placeholder:r,value:c,onKeyDown:function(e){13===e.keyCode&&a(c)},onChange:function(e){return s(e.target.value)},autoComplete:"off"}),c&&u().createElement("i",{className:"icon-cem_log-off",onClick:function(){s(""),t&&t("")}}),u().createElement("i",{className:"icon-cem_small-search",onClick:function(){return a(c)}}))};n.propTypes={className:t().string,onSearch:t().func.isRequired,placeholder:t().string,style:t().object,defValue:t().string,signal:t().any,onClear:t().func};const a=n},2271:(e,n,t)=>{"use strict";t.d(n,{Z:()=>S});var a=t(37316),d=t.n(a),n=t(67154),h=t.n(n),a=t(93913),r=t.n(a),n=t(85354),l=t.n(n),a=t(23279),i=t.n(a),n=t(67294),m=t.n(n),f=t(92360),s=t(35303),a=t(45697),n=t.n(a),u=[{label:"10项/页",value:10},{label:"20项/页",value:20},{label:"40项/页",value:40},{label:"100项/页",value:100}];const g=function(e){var n=e.onPageChange,t=e.onSizeChange,a=e.total,r=void 0===a?0:a,l=e.pageIndex,i=e.pageSize,o=e.currLength,c=e.layout,a=e.className,e=0===r?0:(l-1)*i+1,o=0===r?0:e+o-1;return 0===r?null:m().createElement("div",{className:"yt-awp-pagination "+(a||"")},m().createElement("span",{className:"total_num"},m().createElement("span",null,e+" - "+o+" "),"项，共",m().createElement("span",null," "+r+" "),"项"),m().createElement("div",{style:{textAlign:"right",float:"right"},className:"new_pagination"},m().createElement(f.Pagination,{small:!0,pageSize:i,currentPage:l,pageCount:Math.ceil(r/i),layout:0===r?"":"prev, pager, next",onCurrentChange:n}),void 0===c||c.includes("sizes")?m().createElement(s.RS,{multiple:!1,tags:!1,showSearch:!1,optionFilterProp:"label",optionLabelProp:"label",animation:"slide-up",dropdownClassName:"custom-pagination-dropdown",value:i||10,onChange:t},u.map(function(e,n){return m().createElement(s.Wx,{key:n,label:e.label,value:e.value},e.label)})):null))};n().propTypes={onPageChange:n().func,onSizeChange:n().func,total:n().number,pageIndex:n().number,pageSize:n().number,currLength:n().number,layout:n().string,className:n().string};var v=t(8201),a=t(48926),o=t.n(a),a=t(87757),c=t.n(a),p=t(36144);function y(){return(y=o()(c().mark(function e(n){var t,a;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.projectId,a=n.key,e.abrupt("return",p.h.post("/default/value/find",{projectId:t,key:a}));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function C(){return(C=o()(c().mark(function e(n){var t,a,r;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.projectId,a=n.value,r=n.key,e.abrupt("return",p.h.post("/default/value/update",{projectId:t,key:r,value:a}));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}var _=t(39432),E=t(43036),b=t(51474),k=t(87219),a=function(n){function e(e){var s=n.call(this,e)||this;return s._setShowFalse=function(){s.setState({show:!1})},s._handleParentClick=function(e){s.state.show&&(e.stopPropagation(),e.nativeEvent.stopImmediatePropagation())},s._handleOnTriggerClick=function(){setTimeout(function(){s.setState({show:!s.state.show})},0)},s._renderOptionItem=function(n,e,t,a,r,l){var i=s.state.maxLabelWidth,o=s.props,c=o.value,o=o.savedKey,c=c.find(function(e){return e.prop===n.prop});return m().createElement("div",{className:"opt_item "+(e?"draggable":""),key:n.prop},e&&m().createElement("i",{className:"icon-cem_move my_handle"}),m().createElement("div",{className:"opt_content",style:{width:i,marginLeft:e?0:12}},m().createElement("div",{className:"item_label",onClick:function(e){e.stopPropagation(),s._handleOnItemClick(n.prop)}},m().createElement("span",{className:"icon_checkbox "+(c&&c.checked?"checkbox_checked":"")}),m().createElement("span",null,n.label)),m().createElement("div",{className:"item_control",style:{display:"product_setting_link"===o?"none":"block"}},m().createElement(E.Z,{placement:"top",overlay:t},m().createElement("span",{onClick:function(e){return a(e,n.prop)}},m().createElement("i",{className:(e?"icon-cem_up":"icon-cem_up-and-down")+" fun_icon_a"}))),m().createElement(E.Z,{placement:"top",overlay:r},m().createElement("span",{onClick:function(e){return l(e,n.prop)},style:{marginLeft:4}},m().createElement("i",{className:"icon-cem_down fun_icon_b"}))))))},s._handleOnItemClick=function(n){var e=s.props,t=e.value,e=e.onChange;e&&e((0,k.ZP)(t,function(e){e=e.find(function(e){return e.prop===n});e&&(e.checked=!e.checked)}))},s._handleOnFilxedLeftClick=function(e,n){e.stopPropagation(),s._handleOnFixedChange(n,"left")},s._handleOnCancelFixedClick=function(e,n){e.stopPropagation(),s._handleOnFixedChange(n,"")},s._handleOnFixedRightClick=function(e,n){e.stopPropagation(),s._handleOnFixedChange(n,"right")},s._handleOnFixedChange=function(n,t){var e=s.props,a=e.value,e=e.onChange;e&&e((0,k.ZP)(a,function(e){e=e.find(function(e){return e.prop===n});e&&(e.fixed=t)}))},s.state={show:!1,value:[],leftOpts:[],normalOpts:[],rightOpts:[],maxLabelWidth:e.value.reduce(function(e,n){return Math.max((0,_.jD)(n.label,14)+56+16+16,e)},0)},s}l()(e,n),e.getDerivedStateFromProps=function(a,e){if(JSON.stringify(a.value)===JSON.stringify(e.value))return null;var n=a.value.reduce(function(e,n){var t=1;return"left"===n.fixed&&(t=0),e[t="right"===n.fixed?2:t].push(a.value.find(function(e){return e.prop===n.prop})),e},[[],[],[]]),t=n[0],e=n[1],n=n[2];return{value:a.value,leftOpts:t,normalOpts:e,rightOpts:n,maxLabelWidth:a.value.reduce(function(e,n){return Math.max((0,_.jD)(n.label,14)+56+16+16,e)},0)}};var t=e.prototype;return t.componentDidMount=function(){var i=this;window.addEventListener("click",this._setShowFalse);var e=document.querySelectorAll("#draggable_zone");e.length&&e.forEach(function(e){b.ZP.create(e,{group:"draggable_zone",animation:150,filter:".undraggable",draggable:".draggable",handle:".my_handle",onEnd:function(e){var n=i.props,t=n.value,a=n.onChange,r=e.newIndex,l=e.oldIndex;r!==l&&(n=t.filter(function(e){return"left"===e.fixed}),e=t.filter(function(e){return"right"===e.fixed}),t=(0,k.ZP)(t.filter(function(e){return!e.fixed}),function(e){var n=e.splice(l,1)[0];e.splice(r,0,n)}),a&&a([].concat(n,t,e)))}})})},t.componentWillUnmount=function(){window.removeEventListener("click",this._setShowFalse)},t.render=function(){var n=this,e=this.state,t=e.show,a=e.leftOpts,r=e.normalOpts,l=e.rightOpts,i=this.props,e=i.className,i=i.title;return m().createElement("div",{className:"yt_columns_selector_wrapper "+(e||""),onClick:this._handleParentClick},m().createElement("div",{className:"trigger "+(t?"sel":""),onClick:this._handleOnTriggerClick},i||"列",m().createElement("i",{className:"icon-cem_arrow-launches",style:{transform:t?"rotate(-180deg)":""}})),m().createElement("div",{className:"options "+(t?"active":"")},0<a.length&&m().createElement(m().Fragment,null,m().createElement("div",{className:"opt_label"},"固定在左侧"),a.map(function(e){return n._renderOptionItem(e,!1,"不固定",n._handleOnCancelFixedClick,"固定在列尾",n._handleOnFixedRightClick)})),(0<a.length||0<l.length)&&m().createElement("div",{className:"opt_label"},"不固定"),m().createElement("div",{id:"draggable_zone",style:{visibility:0<r.length}},r.map(function(e){return n._renderOptionItem(e,!0,"固定在列头",n._handleOnFilxedLeftClick,"固定在列尾",n._handleOnFixedRightClick)})),0<l.length&&m().createElement(m().Fragment,null,m().createElement("div",{className:"opt_label"},"固定在右侧"),l.map(function(e){return n._renderOptionItem(e,!1,"不固定",n._handleOnCancelFixedClick,"固定在列头",n._handleOnFilxedLeftClick)}))))},e}(m().PureComponent);const O=a;a.propTypes={className:n().string,title:n().string,value:n().arrayOf(n().shape({label:n().string,prop:n().string,fixed:n().string,checked:n().bool})),onChange:n().func};var w=t(35239),a=function(n){function e(e){var t=n.call(this,e)||this;return t._handleOnResize=function(){var e=document.querySelector(".yt-listview-wrapper");e&&t.setState({tableWidth:e.clientWidth-5})},t._handleOnColumnsChange=function(e){t.setState({columns:e},function(){t.props.savedKey&&!function(){return C.apply(this,arguments)}({projectId:w.t.get(w.V.curProject).id,key:t.props.savedKey,value:JSON.stringify(e.map(function(e){return{prop:e.prop,checked:e.checked,fixed:e.fixed}}))}).then(function(e){e.data})})},t.handleRoKey=function(e){var n=t.props.rowKeyProp;return n&&e&&e[n]?e[n]:JSON.stringify(e)},t.state={talbeWidth:0,columns:e.columns||[],loadingSave:!0},t}l()(e,n),e.getDerivedStateFromProps=function(e,n){};var t=e.prototype;return t.componentDidMount=function(){var t=this;window.addEventListener("resize",i()(this._handleOnResize,150)),this._handleOnResize();var e=this.props,n=e.savedKey,r=e.columns;n&&!function(){return y.apply(this,arguments)}({projectId:w.t.get(w.V.curProject).id,key:n}).then(function(e){var n,a=e.data;if(2e4===a.code)try{n=r.map(function(n,e){var t=JSON.parse(a.result).filter(function(e){e=e.prop;return n.prop===e});return t&&0<t.length?h()({},n,t[0]):n}).filter(function(e){return e})}catch(e){}finally{t.setState({columns:n||t.state.columns,loadingSave:!1})}})},t.componentWillUnmount=function(){window.removeEventListener("resize",this._handleOnResize)},t.componentDidUpdate=function(e,n){var r=this;JSON.stringify(e.columns)!==JSON.stringify(this.props.columns)&&0<this.props.columns.length&&this.setState({columns:this.props.columns.reduce(function(e,n,t){var a=r.state.columns.findIndex(function(e){e=e.prop;return n.prop===e});return e.splice(-1<a?a:t,0,h()({},n,r.state.columns[a])),e},[]).filter(function(e){return e})})},t.render=function(){var e=this.props,n=e.data,t=e.total,a=void 0===t?0:t,r=e.loading,l=e.savedKey,i=e.pageIndex,o=e.pageSize,c=e.onPageChange,s=e.onPageSizeChange,u=e.className,p=void 0===u?"":u,t=d()(e,["data","total","loading","savedKey","pageIndex","pageSize","onPageChange","onPageSizeChange","className"]),u=this.state,e=u.columns,u=u.loadingSave;return m().createElement(v.Z,{data:n,className:"yt-listview-wrapper "+p,loading:l&&u||r},(0,v.P)(n)&&m().createElement(m().Fragment,null,m().createElement(f.Table,h()({},t,{columns:(l?this:this.props).columns,data:n,rowKey:this.handleRoKey})),c&&m().createElement(g,{onPageChange:c,onSizeChange:s,total:a,currLength:n.length,pageIndex:i,pageSize:o}),l&&m().createElement(O,{className:"column_selector",value:e,savedKey:l,onChange:this._handleOnColumnsChange})))},r()(e,[{key:"columns",get:function(){var n,e=this.state,t=e.tableWidth,a=e.columns,r=this.props,e=r.columnRenders,l=void 0===e?{}:e,e=r.headerRenders,i=void 0===e?{}:e,r=r.prefixColumns,o=0,c=0,s=0,a=[].concat(void 0===r?[]:r,JSON.parse(JSON.stringify(a.filter(function(e){e=e.checked;return void 0===e||e}))));return a.forEach(function(e){s+=e.width,e.fixed?o+=e.width:c+=e.width;var n=l[e.prop];n&&(e.render=n);n=i[e.prop];n&&(e.renderHeader=n)}),s<t&&(n=t-o,a.forEach(function(e){void 0!==e.checked&&!e.checked||e.fixed||(e.width=e.width/c*n)})),a}}]),e}(m().PureComponent);a.propTypes={className:n().string,savedKey:n().string.isRequired,rowKeyProp:n().string,data:n().any.isRequired,total:n().number,fixedHeight:n().bool,loading:n().bool,pageIndex:n().number,pageSize:n().number,onPageChange:n().func,onPageSizeChange:n().func,columnRenders:n().shape(((t={})[n().string]=n().func,t)),headerRenders:n().shape(((t={})[n().string]=n().func,t)),prefixColumns:n().arrayOf(n().shape({label:n().string,prop:n().string,fixed:n().oneOf(["","left","right"]),width:n().number,checked:n().bool})),columns:n().arrayOf(n().shape({label:n().string,prop:n().string,fixed:n().oneOf(["","left","right"]),width:n().number,checked:n().bool})).isRequired};const S=a}}]);