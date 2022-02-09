(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[7182],{7182:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var t=n(67154),i=n.n(t),t=n(85354),a=n.n(t),h=n(67294),m=n.n(h),g=n(29383),f=n(55815),v=n(13713),C=n(92360),o=n(5133),r=n(43036),E=n(37841),b=n(85151),k=n(53754),d=n(35239),u=n(36144),w=[{id:"OVERVIEW",name:"项目概览"},{id:"OPINION",name:"典型意见"}],l=function(t){function e(e){var s=t.call(this,e)||this;return s.handleInputChange=function(e){s.setState({searchText:e})},s.handleKeyWordChange=function(e){var t=s.state.targetItem;s.setState({targetItem:i()({},t,{word:e})})},s.handleKeyUp=function(e){e.stopPropagation(),13===e.keyCode&&s.setState({pageIndex:1},function(){return s.fetchList()})},s.switchPage=function(e){s.setState({pageIndex:e},function(){return s.fetchList()})},s.switchPageSize=function(e){s.setState({pageIndex:1,pageSize:e},function(){return s.fetchList()})},s.handleSort=function(e){var t=e.prop,e="ascending"===e.order?"ASC":"DESC";s.setState({sortName:t?t.toUpperCase():"CREATED_AT",sortType:e},function(){return s.fetchList()})},s.fetchList=function(){var e=s.state,t=e.page,n=e.status,a=e.searchText,l=e.pageIndex,i=e.pageSize,o=e.sortName,r=e.sortType,c=d.t.get(d.V.backProjectConfig).id;s.setState({loading:!0},function(){u.h.post("/word/filter/list",{modules:t,status:n,word:a,projectId:c,pageIndex:l,pageSize:i,sortModel:{sortName:o,sortType:r}}).then(function(e){var t;2e4===e.data.code&&(e=(t=e.data.result).count,t=t.data,s.setState({loading:!1,data:t,total:e}))}).catch(function(e){s.setState({loading:!1})})})},s.handleChangeModules=function(e){var t=s.state,n=t.targetItem,a=t.targetItem,t=a.overviewVisible,a=a.opinionVisible;0===e?s.setState({targetItem:i()({},n,{overviewVisible:!t})}):s.setState({targetItem:i()({},n,{opinionVisible:!a})})},s.addUselessWord=function(){var e=d.t.get(d.V.backProjectConfig).id,t=s.state,n=t.targetItem,a=t.targetItem,l=a.word,t=a.overviewVisible,a=a.opinionVisible;0!==l.trim().length?t&&a?o.Z.warning("请至少选择一个页面模块"):u.h.post("/word/filter/add",i()({projectId:e},n)).then(function(e){2e4===e.data.code&&(o.Z.success("添加成功"),s.handleCancel(),s.fetchList())}):o.Z.warning("请输入无效词")},s.deleteUselessWord=function(){var e=d.t.get(d.V.backProjectConfig).id,t=s.state.targetItem.id;u.h.post("/word/filter/delete",{projectId:e,id:t}).then(function(e){2e4===e.data.code&&(o.Z.success("删除成功"),s.handleCancel(),s.fetchList())})},s.updateUselessWord=function(){var e=d.t.get(d.V.backProjectConfig).id,t=s.state.targetItem,t=JSON.parse(JSON.stringify(t));delete t.word,u.h.post("/word/filter/update",i()({projectId:e},t)).then(function(e){2e4===e.data.code&&(o.Z.success("更新成功"),s.handleCancel(),s.fetchList())})},s.handleConfirm=function(){switch(s.state.dialogType){case"add":s.addUselessWord();break;case"delete":s.deleteUselessWord();break;case"edit":case"toggle":s.updateUselessWord()}},s.handleCancel=function(){s.setState({dialogShow:!1,searchText:"",targetItem:{id:"",word:"",overviewVisible:!1,opinionVisible:!1}})},s.changeModules=function(e){s.setState({page:e,pageIndex:1},function(){return s.fetchList()})},s.changeStatus=function(e){s.setState({status:e,pageIndex:1},function(){return s.fetchList()})},s.state={searchText:"",dialogShow:!1,dialogType:"add",tipShow:!1,loading:!1,targetItem:{id:"",word:"",overviewVisible:!1,opinionVisible:!1,status:"ENABLE"},columns:[{label:"",prop:"paddingLeft",width:50},{label:"无效词",prop:"word",minWidth:180,align:"left",sortable:"custom"},{label:"词频数",prop:"count",minWidth:180,align:"left",sortable:"custom"},{label:"页面模块",prop:"modules",minWidth:360,align:"left",render:function(e,t,n){var a=e.overviewVisible,e=e.opinionVisible;return m().createElement("div",{className:"useless-word-modules"},!a&&m().createElement("span",null,"项目概览"),!e&&m().createElement("span",null,"典型意见"))}},{label:"操作",prop:"handle",minWidth:180,align:"left",render:function(e){var e=JSON.parse(JSON.stringify(e)),t=e.id,n=e.word,a=e.overviewVisible,l=e.opinionVisible,e=e.status;return m().createElement("div",{className:"handle"},m().createElement(r.Z,{overlay:"ENABLE"===e?"已启用":"已停用",placement:"top",trigger:"hover"},m().createElement("span",null,m().createElement(C.Switch,{value:"ENABLE"===e,onText:"",offText:"",onColor:"#0747A6",offColor:"#CCCCCC",onChange:function(e){return s.setState({dialogShow:!0,dialogType:"toggle",targetItem:{id:t,word:n,overviewVisible:a,opinionVisible:l,status:e?"DISABLE":"ENABLE"}})}}))),m().createElement("span",{onClick:function(){s.setState({dialogShow:!0,dialogType:"edit",targetItem:{id:t,word:n,overviewVisible:a,opinionVisible:l}})}},"编辑"),m().createElement("span",{onClick:function(){s.setState({dialogShow:!0,dialogType:"delete",targetItem:{id:t,word:n,overviewVisible:a,opinionVisible:l}})}},"删除"))}},{label:"",prop:"paddingRight",width:50}],data:[],pageIndex:1,pageSize:20,page:[],status:null,total:0,sortName:"CREATED_AT",sortType:"DESC"},s}a()(e,t);var n=e.prototype;return n.componentDidMount=function(){this.fetchList()},n.render=function(){var e=this,t=this.state,n=t.targetItem,a=t.searchText,l=t.dialogShow,i=t.dialogType,o=t.columns,r=t.loading,c=t.pageIndex,s=t.pageSize,d=t.data,u=t.total,p=t.status,t=document.documentElement.clientHeight-46-78-24;return m().createElement("div",{className:"useless-word-wrapper"},m().createElement(f.Z,{title:(0,v.u)({title:"无效词管理"}),rightContent:m().createElement(C.Button,{type:"primary",onClick:function(){return e.setState({dialogShow:!0,dialogType:"add"})}},"添加无效词")}),m().createElement("div",null,m().createElement("div",{style:{minHeight:t,backgroundColor:"#fff"}},m().createElement("div",{className:"useless-word-header"},m().createElement("div",{className:"search-input-wrapper"},m().createElement(C.Input,{value:a,onChange:this.handleInputChange,onKeyUp:this.handleKeyUp,placeholder:"请输入无效词",icon:"search",onIconClick:function(){return e.setState({pageIndex:1},function(){return e.fetchList()})}})),m().createElement(k.Z,{title:"页面模块",options:w,onChange:this.changeModules}),m().createElement(E.Z,{activeKey:p,options:[{key:"全部",value:null},{key:"启用",value:"ENABLE"},{key:"停用",value:"DISABLE"}],onTabClick:this.changeStatus})),m().createElement(C.Loading,{loading:r,text:"拼命加载中"},m().createElement(g.Z,{columns:o,data:d,total:u,pagePosition:"down",pageSize:s,currentPage:c,onPage:this.switchPage,onSortChange:this.handleSort,pageSizeSelectorShow:!0,onPageSizeChange:this.switchPageSize,notLimit:!0})))),m().createElement(C.Dialog,{title:"edit"===i?"编辑无效词":"add"===i?"添加无效词":"",size:"tiny",visible:l,onCancel:function(){return e.handleCancel()},lockScroll:!0},m().createElement(C.Dialog.Body,null,"delete"===i&&m().createElement(h.Fragment,null,m().createElement("div",{className:"dialog-title"},m().createElement("i",{className:"icon-cem_warning",style:{color:"#D96969"}}),"是否删除该无效词？"),m().createElement("div",{className:"delete-tips"},"删除",m().createElement("span",null,"“",n.word,"”"),"这个词，",m().createElement("span",null,"“",n.word,"”"),"将会在 ",m().createElement("span",null,"项目概览"),"、",m().createElement("span",null,"典型意见")," 功能模块中可见")),"toggle"===i&&m().createElement(h.Fragment,null,m().createElement("div",{className:"dialog-title"},m().createElement("i",{className:"icon-cem_warning",style:{color:"#D96969"}}),"是否","ENABLE"===n.status?"启用":"停用","该无效词？"),m().createElement("div",{className:"delete-tips"},"ENABLE"===n.status?"启用":"停用","对",m().createElement("span",null,"“",n.word,"”"),"的无效词管理功能后，",m().createElement("span",null,"“",n.word,"”"),"将","ENABLE"===n.status&&"不","会出现在 ",m().createElement("span",null,"项目概览"),"、",m().createElement("span",null,"典型意见")," 功能模块中")),("add"===i||"edit"===i)&&m().createElement(h.Fragment,null,m().createElement("div",{className:"form-item"},m().createElement("label",null,"无效词"),m().createElement(C.Input,{disabled:"add"!==i,value:n.word,placeholder:"请输入无效词",onChange:this.handleKeyWordChange})),m().createElement("div",{className:"form-item"},m().createElement("label",null,"页面模块"),m().createElement(h.Fragment,null,m().createElement(b.Jg,{value:0,checked:!n.overviewVisible,onChange:function(){return e.handleChangeModules(0)}},"项目概览"),m().createElement(b.Jg,{value:1,checked:!n.opinionVisible,onChange:function(){return e.handleChangeModules(1)}},"典型意见"))))),m().createElement(C.Dialog.Footer,{className:"dialog-footer"},m().createElement(C.Button,{type:"primary",onClick:this.handleConfirm},"add"===i||"edit"===i?"确定":"是"),m().createElement(C.Button,{onClick:function(){return e.handleCancel()}},"add"===i||"edit"===i?"取消":"否"))))},e}(h.Component)},13713:(e,t,n)=>{"use strict";n.d(t,{u:()=>l});var a=n(35239),l=function(e){var t=e.title,e=e.url;return[{title:"所有项目",url:"/account/project"},{title:a.t.get(a.V.backProjectConfig).name,url:"/account/project/preview"},{title:t,url:e}]}},24473:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(67154),u=n.n(a),l=n(37316),p=n.n(l),t=n(85354),i=n.n(t),a=n(67294),h=n.n(a),l=n(45697),t=n.n(l),l=n(94184),m=n.n(l),a=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.prefixCls,n=e.children,a=e.className,l=e.block,i=e.indeterminate,o=e.value,r=e.checked,c=e.defaultChecked,s=e.onChange,d=e.disabled,e=p()(e,["prefixCls","children","className","block","indeterminate","value","checked","defaultChecked","onChange","disabled"]),s={value:o,checked:r,defaultChecked:c,onChange:s,disabled:d},a=m()(t,((d={})[t+"-disabled"]=s.disabled,d[t+"-block"]=l,d[t+"-indeterminate"]=i,d),a);return h().createElement("label",u()({tabIndex:s.disabled?-1:0,className:a},e),h().createElement("input",u()({type:"checkbox",className:t+"-input"},s)),h().createElement("span",{className:t+"-status"}),n&&h().createElement("span",{className:t+"-text",title:n},n))},t}(a.Component);a.propTypes={prefixCls:t().string,value:t().oneOfType([t().string,t().number]),checked:t().bool,defaultChecked:t().bool,onChange:t().func,indeterminate:t().bool,disabled:t().bool,block:t().bool},a.defaultProps={prefixCls:"wt-checkbox"};const o=a},85151:(e,t,n)=>{"use strict";n.d(t,{Jg:()=>a.Z,CS:()=>r});var a=n(24473),l=n(67154),c=n.n(l),i=n(37316),s=n.n(i),t=n(85354),o=n.n(t),l=n(67294),d=n.n(l),i=n(45697),t=n.n(i),i=n(94184),u=n.n(i),i=function(l){function e(){for(var n,e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(n=l.call.apply(l,[this].concat(t))||this).handleCheckBoxChange=function(e){var t=n.props.onChange;t&&t(e)},n}return o()(e,l),e.prototype.render=function(){var l=this,e=this.props,t=e.prefixCls,n=e.children,a=e.className,i=(e.onChange,e.values),o=e.checkedList,r=e.block,e=s()(e,["prefixCls","children","className","onChange","values","checkedList","block"]),n=i?i.map(function(e,t){var n=0!==o.length&&-1!==o.indexOf(e);return d().createElement(Checkbox,{key:t,value:e,checked:n,onChange:function(e){return l.handleCheckBoxChange(e)},block:r},e)}):d().Children.map(n,function(e,t){if(e){var n=e.props,a=n.value,a=0!==o.length&&-1!==o.indexOf(a);return d().cloneElement(e,{checked:a,key:t,block:n.block||r,onChange:function(){var e=n.value;l.handleCheckBoxChange(e)}})}});return d().createElement("div",c()({className:u()(t,a)},e),n)},e}(l.Component);i.defaultProps={prefixCls:"wt-checkbox-group"},i.propTypes={onChange:t().func,values:t().array,block:t().bool};const r=i;var p=function(t){var n={};return Object.keys(t).forEach(function(e){/^data\-.+$/.test(e)&&(n[e]=t[e])}),n},l=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=p(e);return d().createElement("label",{className:e.className,title:e.children},d().createElement("div",{className:"checkbox"},d().createElement("input",c()({checked:e.checked,type:"checkbox",name:e.name,onChange:e.onChange,disabled:e.disabled},t)),d().createElement("div",{className:"checkbox-body"}))," ",d().createElement("span",null,e.children))},t}(l.Component);l.defaultProps={className:"",name:"",checked:!1,disabled:!1,onChange:function(e){return e}}},37841:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var t=n(67294),l=n.n(t),t=n(45697),n=n.n(t),t=function(e){var n=e.activeKey,t=e.options,a=e.onTabClick;return l().createElement("div",{className:"tabs"},t.map(function(e,t){return l().createElement("div",{key:t,className:n===e.value?"active-tab":"",onClick:function(){return n!==e.value&&a(e.value,e)}},e.key||e.label)}))};t.propTypes={activeKey:n().oneOfType([n().string,n().number]),options:n().arrayOf(n().shape({key:n().string,value:n().oneOfType([n().string,n().number])})).isRequired,onTabClick:n().func.isRequired};const a=t}}]);