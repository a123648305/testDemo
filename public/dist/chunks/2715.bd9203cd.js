(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[2715],{92715:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var t=a(37316),n=a.n(t),t=a(67154),E=a.n(t),t=a(85354),l=a.n(t),S=a(67294),N=a.n(S),w=a(92360),u=a(5133),C=a(35303),k=a(29383),b=a(43036),I=a(55815),M=a(13713),x=a(61193),t=a(30381),i=a.n(t),r=a(61409),o=a(35239),t=a(55609),h=a(64396).Z.project.tag,a=function(n){function e(){for(var m,e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(m=n.call.apply(n,[this].concat(t))||this).openAddTagModal=function(){(0,m.props.dispatch)({type:h+"/saveState",payload:{modalShow:!0,modalMode:"addTag"}})},m.handleSearchTagType=function(t){var e=m.props,a=e.dispatch,n=e.tag,l=e.tag.tagTypeList,e=JSON.parse(JSON.stringify(l)),n=n.tempTagTypeList,n=(0<t.trim().length&&!l.some(function(e){return e.name===t})&&e.push({id:"",name:t}),e);a({type:h+"/saveState",payload:{tempTagTypeList:n}})},m.switchTagType=function(t){var e=m.props,a=e.dispatch,n=e.tag,e=n.targetTag,n=n.tagTypeList,n=0<n.filter(function(e){return e.name===t}).length?n.filter(function(e){return e.name===t})[0].id:"";a({type:h+"/saveState",payload:{targetTag:E()({},e,{tagTypeId:n,tagTypeName:t})}})},m.tagNameChange=function(e){var t=m.props,a=t.dispatch,t=t.tag.targetTag;a({type:h+"/saveState",payload:{targetTag:E()({},t,{name:e})}})},m.tagTypeNameChange=function(e){(0,m.props.dispatch)({type:h+"/saveState",payload:{tagTypeName:e}})},m.handleViewDetail=function(e){r.mW.push({pathname:"/account/project/messageRule",state:{tagIdList:e?[e]:[]}}),m.cancel()},m.handleTagRename=function(e,t,a){var n=m.props,l=n.dispatch,n=n.tag.targetTag;l({type:h+"/saveState",payload:{modalShow:!0,modalMode:"renameTag",targetTag:E()({},n,{id:t,name:a,tagTypeId:e})}})},m.handleTagTypeRename=function(e){var t=m.props,a=t.dispatch,t=t.tag.targetTag;a({type:h+"/saveState",payload:{targetTag:E()({},t,{tagTypeName:e})}})},m.handleCopy=function(e){(0,m.props.dispatch)({type:h+"/saveState",payload:{modalMode:"addTag",modalShow:!0,tagName:e,step:1}})},m.handleDelete=function(t,a){var e=m.props,n=e.dispatch,l=e.tag.targetTag;n({type:h+"/fetchTagReferenceNum",payload:{tagId:t}}).then(function(e){2e4===e.data.code&&(e=e.data.result,n({type:h+"/saveState",payload:{tipModalShow:!0,tipModalMode:"deleteTag",referenceNum:e,targetTag:E()({},l,{id:t,name:a})}}))})},m.handleDeleteTagType=function(t){var e=m.props,a=e.dispatch,n=e.tag.targetTag;a({type:h+"/fetchTagTypeReferenceNum",payload:{tagTypeId:t}}).then(function(e){2e4===e.data.code&&(e=e.data.result,a({type:h+"/saveState",payload:{tipModalShow:!0,tipModalMode:"deleteTagType",referenceNum:e,targetTag:E()({},n,{tagTypeId:t})}}))})},m.confirm=function(){var e=m.props,t=e.tag,a=t.modalMode,n=t.step,l=t.targetTag,i=t.targetTag,r=i.name,o=i.tagTypeId,i=i.tagTypeName,c=t.tagTypeList,e=e.dispatch;if("addTag"===a)if(1===n){if(0===i.trim().length)return void u.Z.warning("请选择标签类型");if(0===r.trim().length)return void u.Z.warning("请输入标签名称");e({type:h+"/addTag",payload:{targetTag:l}})}else e({type:h+"/reset"});if("renameTag"===a){if(0===r.trim().length)return void u.Z.warning("请输入标签名称");for(var p=!1,d=0;d<c.length;d++)if(c[d].id===o)for(var s=c[d].tagList,g=0;g<s.length;g++)if(s[g].name===r){p=!0;break}e(p?{type:h+"/saveState",payload:{nameExists:p}}:{type:h+"/renameTag"})}"renameTagType"===a&&(0!==i.trim().length?e({type:h+"/renameTagType"}):u.Z.warning("请输入标签名称"))},m.cancel=function(){(0,m.props.dispatch)({type:h+"/reset"})},m.confirmTip=function(){var e=m.props,t=e.tag.tipModalMode,a=e.dispatch;switch(t){case"deleteTag":a({type:h+"/deleteTag"});break;case"deleteTagType":a({type:h+"/deleteTagType"});break;default:a({type:h+"/reset"})}},m.cancelTip=function(){(0,m.props.dispatch)({type:h+"/reset"})},m.switchPage=function(e){var t=m.props.dispatch;t({type:h+"/saveState",payload:{pageIndex:e}}),t({type:h+"/fetchTagList"})},m.switchPageSize=function(e){var t=m.props.dispatch;t({type:h+"/saveState",payload:{pageIndex:1,pageSize:e}}),t({type:h+"/fetchTagList"})},m.handleKeyDown=function(e){var t=m.props.dispatch;e.stopPropagation(),13===e.keyCode&&t({type:h+"/renameTagType"})},m.handleFilter=function(e,t){return 0<=t.props.children.toLowerCase().indexOf(e.toLowerCase())},m.goInbox=function(e,t){var a=m.props.tag.projectId,n="YYYY-MM-DD",n={dateGroupType:"DAY",from:i()().subtract(29,"days").format(n),quickChoice:"近30天",remoteName:"cTime",to:i()().format(n)};window.open("/inbox/public?"+encodeURIComponent(JSON.stringify({dateFilter:n,filterModel:{tag:[{id:e,special:"tag",values:[t]}]},projectId:a,type:"TAG_LIST"})))},m}l()(e,n);var t=e.prototype;return t.componentDidMount=function(){var e=this.props.dispatch;e({type:h+"/saveState",payload:{projectId:o.t.get(o.V.backProjectConfig).id}}),e({type:h+"/fetchTagList"})},t.render=function(){var n=this;console.log(this.props);var e=this.props,l=e.dispatch,t=e.tag,i=t.targetTag,a=t.targetTag,r=a.name,o=a.tagTypeName,c=t.list,p=t.total,d=t.pageSize,s=t.pageIndex,g=t.modalShow,m=t.modalMode,u=t.tipModalMode,h=t.tipModalShow,y=t.step,T=t.tempTagTypeList,f=t.nameExists,v=t.referenceNum,a=e.loading,t=[{label:"",prop:"paddingLeft",width:50},{label:"标签类型",prop:"name",align:"left",width:300,render:function(e,t,a){return N().createElement("span",{className:"tag-name"},N().createElement("span",null,e.name),N().createElement("span",{className:"operation_columns",onClick:function(){return n.handleDeleteTagType(e.id)}},"删除"),N().createElement("span",{className:"operation_columns",onClick:function(){return l({type:"tag/saveState",payload:{modalShow:!0,modalMode:"renameTagType",targetTag:E()({},i,{tagTypeId:e.id,tagTypeName:e.name})}})}},"重命名"))}},{label:"",width:180},{label:"标签",render:function(e){return N().createElement("ul",null,e.tagList.map(function(e,t){return N().createElement("li",{key:e.id,className:"tagItem"},e.name)}))}},{label:"消息数",render:function(a){return N().createElement("ul",null,a.tagList.map(function(e,t){return N().createElement("li",{key:e.id,className:"tagItem",onClick:function(){return n.goInbox(a.id,e.id)}},N().createElement(b.Z,{overlay:function(){return N().createElement(S.Fragment,null,N().createElement("div",{style:{lineHeight:"22px"}},"数值为含有【",e.name,"】标签的消息数，"),N().createElement("div",{style:{lineHeight:"22px"}},"点击可查看近30天的消息。"))},placement:"left"},N().createElement("span",{className:"msg-count"},e.count)))}))}},{label:"标签操作",width:230,render:function(e){var a=e.id;return e.tagList.map(function(e,t){return N().createElement("div",{key:t,className:"operation"},N().createElement("span",null,x.Z.hasAuthority("PROJECT_EDIT")&&N().createElement("span",{className:"operation_columns",onClick:function(){return n.handleViewDetail(e.id)}},"查看规则"),x.Z.hasAuthority("PROJECT_EDIT")&&N().createElement("span",{className:"operation_columns",onClick:function(){return n.handleTagRename(a,e.id,e.name)}},"重命名"),x.Z.hasAuthority("PROJECT_EDIT")&&N().createElement("span",{className:"operation_columns",onClick:function(){return n.handleDelete(e.id,e.name)}},"删除")))})}},{label:"",prop:"paddingRight",width:50}],e=document.documentElement.clientHeight-46-78-24;return N().createElement("div",{className:"tag-wrapper flex-col"},N().createElement("div",{className:"flex-other container"},N().createElement(I.Z,{title:(0,M.u)({title:"标签"}),rightContent:N().createElement(w.Button,{type:"primary",onClick:this.openAddTagModal},"添加标签")}),N().createElement("div",{className:"topic"},N().createElement("div",{style:{minHeight:e,background:"#fff"}},N().createElement(w.Loading,{loading:a,text:"拼命加载中"},N().createElement(k.Z,{columns:t,data:c,total:p,pageSize:d,currentPage:s,pagePosition:"down",onPage:this.switchPage,pageSizeSelectorShow:!0,onPageSizeChange:this.switchPageSize,notLimit:!0}))),N().createElement(w.Dialog,{title:"addTag"===m&&1===y?"添加标签":"renameTag"===m?"重命名标签":"renameTagType"===m?"重命名标签类型":"",size:"tiny",visible:g,onCancel:this.cancel,lockScroll:!0},N().createElement(w.Dialog.Body,null,"addTag"===m&&1===y&&N().createElement("div",{className:"form-item",style:{marginBottom:"16px"}},N().createElement("label",null,"标签类型"),N().createElement(C.RS,{multiple:!1,tags:!1,value:o,optionFilterProp:"children",filterOption:function(e,t){return n.handleFilter(e,t)},showSearch:!0,onSearch:this.handleSearchTagType,onChange:this.switchTagType,placeholder:"请选择标签类型"},T.map(function(e,t){return N().createElement(C.Wx,{key:t,value:e.name,label:e.name},e.name)}))),("addTag"===m&&1===y||"renameTag"===m)&&N().createElement(S.Fragment,null,N().createElement("div",{className:"form-item"},N().createElement("label",null,"标签名称"),N().createElement(w.Input,{ref:function(e){return n.input=e},placeholder:"请输入标签名称",value:r,trim:!0,onChange:this.tagNameChange})),"renameTag"===m&&N().createElement("div",{className:"error-text",style:{visibility:f?"visible":"hidden"}},"同一标签类型下不能有相同名称的标签")),"renameTagType"===m&&N().createElement("div",{className:"form-item form-item-tag-type"},N().createElement("label",null,"标签类型名称"),N().createElement(w.Input,{placeholder:"请输入标签类型名称",value:o,trim:!0,onChange:this.handleTagTypeRename})),("addTag"===m&&2===y||"edit"===m)&&N().createElement(S.Fragment,null,N().createElement("div",{className:"mock-dialog-tilte"},N().createElement("i",{className:"icon-cem_complete1",style:{color:"#00B76E",marginRight:"8px",fontSize:"20px"}}),"添加标签成功"),N().createElement("div",{className:"add-success"},N().createElement("div",null,"点击进入",N().createElement("a",{onClick:function(){return n.handleViewDetail()}},"消息处理规则"),"列表，为新建文件夹配置规则")))),N().createElement(w.Dialog.Footer,{className:"dialog-footer"},N().createElement(w.Button,{type:"primary",onClick:this.confirm},"addTag"===m&&1===y?"立即添加":"确定"),!("addTag"===m&&2===y)&&N().createElement(w.Button,{type:"default",onClick:this.cancel},"取消"))),N().createElement(w.Dialog,{title:"",size:"tiny",visible:h,onCancel:this.cancelTip,lockScroll:!0,customClass:0===v?"without-padding-dialogbody":""},N().createElement(w.Dialog.Body,null,N().createElement("div",{className:"tips"},N().createElement("div",{className:"mock-dialog-tilte"},N().createElement("i",{className:"icon-cem_warning-hints",style:{color:"#D96969",marginRight:"8px",fontSize:"20px"}}),"是否删除该标签"+("deleteTagType"===u?"类型":"")+"？"),0<v&&N().createElement("div",{style:{paddingLeft:"24px"}},N().createElement("div",null,"有",v,"个规则正在使用该标签","deleteTagType"===u?"类型。":"。"),N().createElement("div",null,"删除该标签","deleteTagType"===u&&"类型","后，这些规则将受到影响。")))),N().createElement(w.Dialog.Footer,null,N().createElement(w.Button,{type:"primary",onClick:this.confirmTip},"是"),N().createElement(w.Button,{type:"default",onClick:this.cancelTip},"否"))))))},e}(S.Component);const c=(0,t.connect)(function(e){var t=e.loading,e=n()(e,["loading"]);return{loading:t.effects[h+"/fetchTagList"],tag:e[h]}})(a)},13713:(e,t,a)=>{"use strict";a.d(t,{u:()=>l});var n=a(35239),l=function(e){var t=e.title,e=e.url;return[{title:"所有项目",url:"/account/project"},{title:n.t.get(n.V.backProjectConfig).name,url:"/account/project/preview"},{title:t,url:e}]}}}]);