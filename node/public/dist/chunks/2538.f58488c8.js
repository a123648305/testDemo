(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[2538],{2538:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var t=n(67154),f=n.n(t),t=n(85354),a=n.n(t),y=n(67294),v=n.n(y),C=n(29383),E=n(55815),S=n(13713),I=n(92360),l=n(5133),k=n(35303),N=n(37841),b=n(43036),o=n(35239),r=n(36144),i=function(t){function e(e){var i=t.call(this,e)||this;return i.handleInputChange=function(e){i.setState({searchText:e})},i.handleKeyUp=function(e){e.stopPropagation(),13===e.keyCode&&i.setState({pageIndex:1},function(){return i.fetchList()})},i.switchPage=function(e){i.setState({pageIndex:e},function(){return i.fetchList()})},i.switchPageSize=function(e){i.setState({pageSize:e,pageIndex:1},function(){return i.fetchList()})},i.fetchList=function(){var e=i.state,t=e.type,n=e.searchText,a=e.pageIndex,l=e.pageSize,e=e.projectId,o=t?{keyValue:n,type:t,projectId:e,pageIndex:a,pageSize:l}:{keyValue:n,projectId:e,pageIndex:a,pageSize:l};i.setState({loading:!0},function(){r.h.post("/userConfig/invalid/list",f()({},o)).then(function(e){var t;2e4===e.data.code&&(e=(t=e.data.result).count,t=t.result,i.setState({loading:!1,data:t,total:e}))}).catch(function(e){i.setState({loading:!1})})})},i.addUselessMsg=function(){var e=i.state.projectId,t=i.state.form,n=t.type,t=t.content;0!==t.length?r.h.post("/userConfig/add",{projectId:e,type:n,keyName:"",keyValue:t}).then(function(e){2e4===e.data.code&&(l.Z.success("添加成功"),i.handleCancel(),i.fetchList())}):l.Z.warning("请输入匹配内容")},i.deleteUselessMsg=function(){var e=i.state.targetItem.id;r.h.post("/userConfig/delete?id="+e).then(function(e){2e4===e.data.code&&(l.Z.success("删除成功"),i.handleCancel(),i.fetchList())})},i.handleConfirm=function(e){switch(e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),i.state.dialogType){case"add":i.addUselessMsg();break;case"delete":i.deleteUselessMsg()}},i.handleCancel=function(){i.setState({dialogShow:!1,targetItem:{id:""},form:{type:"CONTAIN",content:""},tempArray:[]})},i.changeType=function(e){i.setState({type:e,pageIndex:1},function(){return i.fetchList()})},i.handleKeywordInput=function(e){var t=i.state,n=t.form,t=t.tempArray;"CONTAIN"===n.type&&0===t.length&&i.setState({form:f()({},n,{content:e})})},i.handleClearContent=function(){var e=i.state,t=e.form,e=e.tempArray;"CONTAIN"===t.type&&0===e.length&&i.setState({form:f()({},t,{content:""})})},i.handleFormTypeChange=function(e){i.setState({form:{type:e,content:""},tempArray:[]})},i.handleFormContentChange=function(e){var t=i.state.form;i.setState({form:f()({},t,{content:e})})},i.handleTagChange=function(e){var t=i.state.form;i.setState({form:f()({},t,{content:e.join(" ")}),tempArray:e})},i.state={projectId:o.t.get(o.V.backProjectConfig).id,searchText:"",type:"",dialogShow:!1,dialogType:"add",loading:!1,targetItem:{id:""},form:{type:"CONTAIN",content:""},tempArray:[],columns:[{label:"",prop:"paddingLeft",width:50},{label:"消息内容",prop:"keyValue",minWidth:180,align:"left",render:function(e){return v().createElement("div",{className:"content"},e.keyValue)}},{label:"匹配方式",prop:"type",minWidth:60,align:"left",render:function(e){return v().createElement("div",{className:"content"},"被包含"===e.type?"包含":"相似度")}},{label:"消息数量",prop:"count",minWidth:120,align:"left",render:function(e,t,n){return v().createElement(b.Z,{overlay:"点击查看近30天的消息",placement:"top"},v().createElement("span",{className:"operation",onClick:function(){return window.open("/account/project/uselessMsg/detail?"+encodeURIComponent("type=custom&id="+e.id))}},e.count))}},{label:"添加时间",prop:"createDate",minWidth:120,align:"left"},{label:"操作",prop:"handle",minWidth:30,align:"left",render:function(e){return v().createElement("span",{className:"operation",onClick:function(){return i.setState({dialogShow:!0,dialogType:"delete",targetItem:{id:e.id}})}},"删除")}},{label:"",prop:"paddingRight",width:50}],data:[],pageIndex:1,pageSize:20,total:0},i}a()(e,t);var n=e.prototype;return n.componentDidMount=function(){this.fetchList(),window.addEventListener("click",this.handleClearContent)},n.componentWillUnmount=function(){window.removeEventListener("click",this.handleClearContent)},n.render=function(){var e=this,t=this.state,n=t.searchText,a=t.dialogShow,l=t.dialogType,o=t.columns,i=t.loading,r=t.pageIndex,c=t.pageSize,s=t.data,d=t.total,u=t.type,p=t.form,m=t.tempArray,g=[{key:"全部",value:""},{key:"包含",value:"CONTAIN"},{key:"相似度",value:"SIMILAR"}],h=document.documentElement.clientHeight-46-78-24,t=v().createElement("span",{className:"page-title"},v().createElement("span",null,"自定义无效消息"),v().createElement(b.Z,{overlay:v().createElement("span",null,"自定义无效消息，是通过手动的方式配置满足一定相似度或者内容全匹配的无效消息，是对智能识别算法的有效补充。",v().createElement("br",null),"被识别的无效消息将不会在消息模块中展示和统计，也不会被洞察模块统计分析。"),placement:"bottom",overlayClassName:"page-title-pop"},v().createElement("i",{className:"cem-icon icon-cem_problem"})));return v().createElement("div",{className:"useless-msg-wrapper"},v().createElement(E.Z,{title:(0,S.u)({title:"自定义无效消息"}),mainTitle:t,rightContent:v().createElement(I.Button,{type:"primary",onClick:function(){return e.setState({dialogShow:!0,dialogType:"add"})}},"添加无效消息")}),v().createElement("div",{className:"useless-msg-body"},v().createElement("div",{style:{backgroundColor:"#fff",minHeight:h}},v().createElement("div",{className:"useless-msg-search"},v().createElement("div",{className:"search-input-wrapper"},v().createElement(I.Input,{value:n,placeholder:"请输入消息内容",onChange:this.handleInputChange,onKeyUp:this.handleKeyUp,icon:"search",onIconClick:function(){e.setState({pageIndex:1},function(){return e.fetchList()})}})),v().createElement(N.Z,{activeKey:u,options:g,onTabClick:this.changeType})),v().createElement(I.Loading,{loading:i,text:"拼命加载中"},v().createElement(C.Z,{columns:o,data:s,total:d,pagePosition:"down",pageSize:c,currentPage:r,onPage:this.switchPage,pageSizeSelectorShow:!0,onPageSizeChange:this.switchPageSize,notLimit:!0})))),v().createElement(I.Dialog,{title:"edit"!==l&&"add"===l?"添加无效消息":"",customClass:"add"===l?"add-dialog":"",size:"tiny",visible:a,onCancel:function(){return e.handleCancel()},lockScroll:!0},v().createElement(I.Dialog.Body,null,"delete"===l&&v().createElement(y.Fragment,null,v().createElement("div",{className:"dialog-title"},v().createElement("i",{className:"icon-cem_warning",style:{color:"#D96969"}}),"确定删除此无效消息？"),v().createElement("div",{className:"delete-tips"},"被删除的无效消息将在消息模块中展示，也将被洞察模块统计分析")),"add"===l&&v().createElement(y.Fragment,null,v().createElement("div",{className:"form-item"},v().createElement("label",null,"匹配方式"),v().createElement(k.RS,f()({},{multiple:!1,tags:!1,optionFilterProp:"label",optionLabelProp:"label",showSearch:!1},{value:p.type,onChange:this.handleFormTypeChange}),g.slice(1,3).map(function(e,t){return v().createElement(k.Wx,{key:t,label:e.key,value:e.value},e.key)}))),v().createElement("div",{className:"form-item"},v().createElement("label",null,"匹配内容"),"CONTAIN"===p.type?v().createElement(k.RS,{value:m,onChange:this.handleTagChange,multiple:!0,tags:!0,placeholder:"多个关键词按回车即可",dropdownStyle:{visibility:"hidden"},onSearch:this.handleKeywordInput}):v().createElement(I.Input,{type:"textarea",value:p.content,autosize:{minRows:4,maxRows:4},onChange:this.handleFormContentChange,placeholder:"请输入关键词"})),v().createElement("div",{className:"form-item"},v().createElement("label",null),v().createElement("div",null,"CONTAIN"===p.type?"被包含：当消息内容包含匹配内容时，会将消息识别为无效消息":"相似度：当消息内容与匹配内容相似度达到70%以上时，会将消息识别为无效消息")))),v().createElement(I.Dialog.Footer,{className:"dialog-footer"},v().createElement(I.Button,{onClick:function(){return e.handleCancel()}},"取消"),v().createElement(I.Button,{type:"primary",onClick:this.handleConfirm},"确定"))))},e}(y.PureComponent)},13713:(e,t,n)=>{"use strict";n.d(t,{u:()=>l});var a=n(35239),l=function(e){var t=e.title,e=e.url;return[{title:"所有项目",url:"/account/project"},{title:a.t.get(a.V.backProjectConfig).name,url:"/account/project/preview"},{title:t,url:e}]}},37841:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var t=n(67294),l=n.n(t),t=n(45697),n=n.n(t),t=function(e){var n=e.activeKey,t=e.options,a=e.onTabClick;return l().createElement("div",{className:"tabs"},t.map(function(e,t){return l().createElement("div",{key:t,className:n===e.value?"active-tab":"",onClick:function(){return n!==e.value&&a(e.value,e)}},e.key||e.label)}))};t.propTypes={activeKey:n().oneOfType([n().string,n().number]),options:n().arrayOf(n().shape({key:n().string,value:n().oneOfType([n().string,n().number])})).isRequired,onTabClick:n().func.isRequired};const a=t}}]);