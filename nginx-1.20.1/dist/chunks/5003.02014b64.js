"use strict";(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[5003],{5003:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(97326),i=n(94578),l=n(67294),o=n(92360),c=n(29383),r=n(49722),s=n(55815),d=n(13713),m=n(51474),u=n(61409),p=n(35239),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).initSortable=function(){var e=(0,a.Z)(n),t=document.querySelector(".el-table table tbody");n.sortable=m.default.create(t,{sort:!0,animation:150,onEnd:function(t){var n=t.oldIndex,a=t.newIndex;e.handleSort(n,a)}})},n.manualSort=function(){var e=n.state.idList;n.sortable.sort(e)},n.handleSort=function(e,t){var a=n.state,i=a.idList,l=a.id,o=i[e],c=JSON.parse(JSON.stringify(i));c.splice(e,1),c.splice(t>=1?t:0,0,o),r.h.post("/project/config/order",{ids:c,projectId:l}).then((function(e){2e4===e.data.code&&n.setState({idList:c})}))},n.handleNameChange=function(e){n.setState({topicName:e})},n.handleConfirm=function(){switch(n.state.dialogType){case"add":n.handleAddTopic();break;case"rename":n.handleRenameTopic();break;case"delete":n.handleDeleteTopic()}},n.handleCancel=function(){n.setState({dialogVisible:!1,topicId:"",topicName:""})},n.handleAddTopic=function(){var e=n.state,t=e.id,a=e.topicName;0!==a.trim().length?r.h.post("/project/config/add",{projectId:t,name:a,parentId:""}).then((function(e){2e4===e.data.code&&(o.Message.success("\u6dfb\u52a0\u6210\u529f"),n.handleCancel(),n.getProject(!1,!0))})):o.Message.warning("\u8bf7\u8f93\u5165\u4e3b\u9898\u540d\u79f0")},n.handleRenameTopic=function(){var e=n.state,t=e.topicId,a=e.topicName;0!==a.trim().length?r.h.post("/project/config/update",{id:t,configName:a}).then((function(e){2e4===e.data.code&&(o.Message.success("\u66f4\u65b0\u6210\u529f"),n.getProject(!1,!0),n.handleCancel())})):o.Message.warning("\u8bf7\u8f93\u5165\u4e3b\u9898\u540d\u79f0")},n.handleDeleteTopic=function(){var e=n.state.topicId;r.h.post("/project/config/delete",{id:e}).then((function(e){2e4===e.data.code&&(o.Message.success("\u5220\u9664\u6210\u529f"),n.getProject(!1,!0),n.handleCancel())}))},n.state={id:p.t.get(p.V.backProjectConfig).id,name:"",type:"",topicId:[],topicName:"",topicList:[],idList:[],data:[],columns:[{label:"",prop:"paddingLeft",width:50,render:function(){return l.createElement("div",{className:"move_icon_container"},l.createElement("i",{className:"icon-cem_move"}))}},{label:"\u4e3b\u9898",prop:"configName",width:400},{label:"\u4e3b\u9898\u503c\u6570\u91cf",prop:"topicCount",render:function(e){return l.createElement("span",{className:"operation_columns",onClick:n.startEdit.bind((0,a.Z)(n),e)},e.topicCount)}},{label:"\u64cd\u4f5c",prop:"operate",render:function(e,t,i){return l.createElement("div",{className:"operates"},l.createElement("button",{type:"button",className:"operation_columns",onClick:n.startEdit.bind((0,a.Z)(n),e)},"\u4e3b\u9898\u503c\u7ba1\u7406"),l.createElement("button",{type:"button",className:"operation_columns",onClick:function(){return n.setState({dialogVisible:!0,topicId:e.id,topicName:e.configName,dialogType:"rename"})}},"\u91cd\u547d\u540d"),l.createElement("button",{type:"button",className:"operation_columns",onClick:function(){return n.setState({dialogVisible:!0,topicId:e.id,topicName:e.configName,dialogType:"delete"})}},"\u5220\u9664"))}}],dialogVisible:!1,dialogType:""},n}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.getProject(!0,!1),this.initSortable()},n.componentDidUpdate=function(){var e=this.state.topicList,t=document.querySelectorAll(".el-table__body tbody tr");if(t&&t.length>0)for(var n=0;n<t.length;n++)for(var a=0;a<e.length;a++){t[n].children[1].innerText===e[a].name&&t[n].setAttribute("data-id",e[a].id)}},n.changeData=function(e){var t=[];for(var n in e.configList)if(e.configList.hasOwnProperty(n)){var a=e.configList[n];a.level=1,a.disabled=!0,a.canEdit=!1,t.push(a),a.child&&(a.child.level=2,a.child.disabled=!0,a.child.canEdit=!1,t.push(a.child),a.child.child&&(a.child.child.level=3,a.child.child.disabled=!0,a.child.child.canEdit=!1,t.push(a.child.child)))}return t},n.addChild=function(e){u.mW.push({pathname:"/account/project/topic",state:{id:"",parentTypeId:e,projectId:this.state.id}})},n.startEdit=function(e){u.mW.push({pathname:"/account/project/topic/topicValue",state:{id:e.id,parentTypeId:e.parentId,projectId:this.state.id,name:e.configName}})},n.getProject=function(e,t){var n=this,a=this.state.id;this.setState({loading:!0},(function(){r.h.post("/project/config/list",{projectId:a,projectConfigIds:[]}).then((function(i){var l=i.data,o=l.result,c=l.result.configList;o.id=a,n.setState({id:a,name:o.name,type:o.templateName,data:n.changeData(o),idList:c.map((function(e){return e.id}))},(function(){t&&n.manualSort()})),e&&n.setState({topicList:c.map((function(e){return{id:e.id,name:e.configName}}))})})).finally((function(){return n.setState({loading:!1})}))}))},n.render=function(){var e=this,t=this.state,n=t.columns,a=t.data,i=t.loading,r=t.dialogVisible,m=t.dialogType,u=t.topicName,p=document.documentElement.clientHeight-46-78-24;return l.createElement("div",{className:"flex-col"},l.createElement("div",{className:"flex-other"},l.createElement(s.Z,{title:(0,d.u)({title:"\u4e3b\u9898"}),rightContent:l.createElement(o.Button,{type:"primary",onClick:function(){return e.setState({dialogVisible:!0,dialogType:"add"})}},"\u6dfb\u52a0\u4e3b\u9898")}),l.createElement("div",{className:"topic"},l.createElement("div",{style:{minHeight:p}},l.createElement(o.Loading,{loading:i,text:"\u62fc\u547d\u52a0\u8f7d\u4e2d"},l.createElement(c.Z,{className:"topic-table",columns:n,data:a,rowClassName:function(){return"sortable-row"},notLimit:!0}))),l.createElement(o.Dialog,{title:"rename"===m?"\u91cd\u547d\u540d\u4e3b\u9898":"add"===m?"\u6dfb\u52a0\u4e3b\u9898":"",size:"tiny",visible:r,onCancel:function(){return e.handleCancel()},customClass:"toggle"===m?"without-padding-dialogbody":"",lockScroll:!0},l.createElement(o.Dialog.Body,null,"delete"===m&&l.createElement(l.Fragment,null,l.createElement("div",{className:"dialog-title"},l.createElement("i",{className:"icon-cem_warning",style:{color:"#D96969"}}),"\u662f\u5426\u5220\u9664\u8be5\u4e3b\u9898\uff1f"),l.createElement("div",{className:"delete-tips"},"\u5220\u9664\u540e",l.createElement("span",{style:{color:"#262626",fontWeight:"bold"}},"\u201c",u,"\u201d"),"\u8fd9\u4e2a\u4e3b\u9898\u540e\uff0c\u5c5e\u4e8e",l.createElement("span",{style:{color:"#262626",fontWeight:"bold"}},"\u201c",u,"\u201d"),"\u7684\u4e3b\u9898\u503c\u5c06\u4ece\u63d0\u6570\u4efb\u52a1\u4e0a\u79fb\u9664")),("add"===m||"rename"===m)&&l.createElement(l.Fragment,null,l.createElement("div",{className:"form-item"},l.createElement("label",null,"\u4e3b\u9898\u540d\u79f0"),("add"===m||"rename"===m)&&l.createElement(o.Input,{value:u,placeholder:"\u8bf7\u8f93\u5165\u4e3b\u9898\u540d\u79f0",onChange:this.handleNameChange})))),l.createElement(o.Dialog.Footer,{className:"dialog-footer"},l.createElement(o.Button,{type:"primary",onClick:this.handleConfirm},"delete"===m?"\u662f":"\u786e\u5b9a"),!("add"===m)&&l.createElement(o.Button,{onClick:function(){return e.handleCancel()}},"delete"===m?"\u5426":"\u53d6\u6d88"))))))},t}(l.Component)},13713:(e,t,n)=>{n.d(t,{u:()=>i});var a=n(35239),i=function(e){var t=e.title,n=e.url,i=a.t.get(a.V.backProjectConfig).name;return n&&-1!==n.indexOf("memberlist")?[{title:i,url:"/account/project/preview"},{title:"\u7528\u6237\u7ec4",url:"/account/project/usergroup"},{title:t,url:n}]:[{title:i,url:"/account/project/preview"},{title:t,url:n}]}},55815:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(94578),i=n(67294),l=n(45697),o=n.n(l),c=n(43036),r=n(61409),s=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this)._handleBreadcrumbClick=function(e){var n=t.props,a=n.title,i=n.beforeJump;e!==a.length-1&&(i?new Promise((function(e,t){return i(e,t)})).then((function(){r.mW.push({pathname:a[e].url,state:a[e].state})})):r.mW.push({pathname:a[e].url,state:a[e].state}))},t}return(0,a.Z)(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.title,a=t.mainTitle,l=t.rightContent,o=t.className,r=t.overlay;return i.createElement("div",{className:"breadcumb-wrapper "+o},n instanceof Array?i.createElement("div",{className:"breadcrumb-left"},i.createElement("div",null,n.map((function(t,a){return i.createElement("span",{className:t.url?"":"not_clickable",key:a,onClick:function(){return t.url&&a!==n.length-1&&e._handleBreadcrumbClick(a)}},t.title,a!==n.length-1&&" / ")}))),i.createElement("span",null,a||n[n.length-1].title,r&&i.createElement(c.Z,{placement:"top",overlay:r},i.createElement("i",{className:"icon-cem_file1",style:{color:"#8c8c8c",marginLeft:8}})))):i.createElement("div",{className:"normal-title"},n,r&&i.createElement(c.Z,{placement:"top",overlay:r},i.createElement("i",{className:"icon-cem_file1",style:{color:"#8c8c8c",marginLeft:8}}))),l||"")},t}(i.Component);s.propTypes={className:o().string,title:o().oneOfType([o().string,o().arrayOf(o().shape({title:o().string,url:o().string,state:o().object}))]).isRequired,overlay:o().oneOfType([o().string,o().node]),mainTitle:o().oneOfType([o().string,o().node]),beforeJump:o().func,rightContent:o().node};const d=s}}]);