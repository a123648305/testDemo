(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[214],{30214:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>q});var a=n(37316),i=n.n(a),r=n(67154),o=n.n(r),t=n(85354),s=n.n(t),a=n(67294),p=n.n(a),m=n(8201),f=n(55815),g=n(92360),h=n(61409),r=n(79361),c=n.n(r),y=n(57522);const v=function(e){var t=e.questionnaireId,n=e.title,a=e.questionnaireType,e=p().useState(void 0),i=e[0],r=e[1],e=p().useState(void 0),o=e[0],s=e[1],e=location.origin+"/research/answer?id="+t;return p().createElement("div",{className:"distribute_qr"},p().createElement("div",{className:"qr_wrap",ref:function(e){return s(e)}},p().createElement(c(),{size:124,value:e}),p().createElement("div",{className:"handel"},p().createElement("span",{onClick:function(){return(0,y.Z)({dialogType:"danger",titleText:"提示",showClose:!1,content:p().createElement("div",{style:{color:"#262626",padding:"0px 40px 8px 63px",width:"460px"}},"问卷「已发布」，你不能再对题型和选项做增删，但可以对文案做调整。"),onCancel:function(){},onOk:function(){return window.open("/research/questions?id="+t)},okText:"编辑问卷"})}},"编辑问卷"),p().createElement("span",{onClick:function(){return h.mW.push({pathname:"/research/manage/analysis",state:{questionnaireId:t,title:n,questionnaireType:a}})}},"查看数据"))),p().createElement("div",{className:"link"},p().createElement("div",{className:"question_title"},n),p().createElement("div",{className:"copy"},p().createElement("p",null,e),p().createElement(g.Button,{type:"primary",className:"but",onClick:function(){i.select(),document.execCommand("Copy"),g.Message.success("复制成功")}},"复制链接"),p().createElement("input",{type:"text",ref:function(e){return r(e)},value:e})),p().createElement("div",{className:"download"},p().createElement(g.Button,{style:{backgroundColor:"#fff",border:"1px solid #c4c4c4"},onClick:function(){var e=document.createElement("a");e.download=n+"_二维码",e.href=o.querySelector("canvas").toDataURL("image/jpeg"),document.body.appendChild(e),e.click(),e.remove()}},"下载二维码"))))};function E(e){return(e=(new Date(e).getTime()-(new Date).getTime())/1e3/60)<0?"已分发":(Math.floor(e/60/24)||"")+(Math.floor(e/60/24)?"天":"")+(Math.floor(e%1440/60)||"")+(Math.floor(e%1440/60)?"小时":"")+(Math.floor(e%60)||0)+"分钟"}var C=n(29383),b={WHOLE:"全部",PRIORITY:"优先"},T={SMS:"短信",EMAIL:"邮件"};const M=function(e){var t=e.list,n=e.pageChange,a=e.pageSizeChange,i=e.tableConfig,r=e.questionnaireId,o=e.title,s=e.deleteMission,c=e.fetchingMissionList,l=e.questionnaireType,u=i.pageSize,d=i.pageIndex,e=i.total,i=p().useState(void 0);i[0],i[1];return p().createElement("div",{className:"distribute_Table"},p().createElement("div",{className:"title"},p().createElement("div",null,"分发任务"),p().createElement(g.Button,{onClick:function(){return h.mW.push({pathname:"/research/manage/distribute/edit",state:{questionnaireId:r,title:o,questionnaireType:l}})}},"选定客户分发")),p().createElement(C.Z,{columns:[{label:"发送时间",prop:"sendTime"},{label:"分发状态",render:function(e){return p().createElement("div",null,E(e.sendTime)+" "+("已分发"===E(e.sendTime)?"":"后发送"))}},{label:"分发渠道客户数",prop:"sendCount"},{label:"分发渠道",render:function(e){return p().createElement("div",null,b[e.sendType]+"："+e.channel.map(function(e){return T[e]}).join("、"))}},{label:"操作",prop:"target",render:function(e){return p().createElement("div",{className:"handel"},"已分发"!==E(e.sendTime)&&p().createElement("span",{onClick:function(){return h.mW.push({pathname:"/research/manage/distribute/edit",state:{questionnaireId:r,id:e.id,title:o,questionnaireType:l}})}},"编辑"),"已分发"!==E(e.sendTime)&&p().createElement("span",{onClick:function(){return(0,y.Z)({dialogType:"danger",titleText:"确定要删除此分发任务？",showClose:!1,content:p().createElement("div",{style:{color:"#8C8C8C",padding:"16px 50px"}},"此发送任务将在",p().createElement("span",{style:{color:"#262626"}},E(e.sendTime)),"后发送。",p().createElement("br",null),"删除后，系统不会执行分发任务"),onCancel:function(){},onOk:function(){return s({id:e.id})}})}},"删除"))}}],data:t,pageSize:u,currentPage:d,total:e,onPage:n,pageSizeSelectorShow:!0,onPageSizeChange:a,loading:c}))};const S=function(e){var t=e.reSendDays,n=e.isOpen,a=e.configChange,i=p().useState(t),r=i[0],o=i[1],e=p().useState(!0),i=e[0],s=e[1];p().useEffect(function(){o(t)},[t,n]);function c(){return 0<Number(r)&&Number(r)<=30}return p().createElement("div",{className:"distribute_setting"},p().createElement("div",{className:"title"},"自动重发问卷"),p().createElement("div",null,p().createElement("span",null,"是否开启"),p().createElement(g.Radio.Group,{value:n,onChange:function(e){s(!0),e&&c()||!e?a({key:"isOpen",value:e}).then(function(e){2e4===e.data.code&&g.Message.success("修改成功")}):a({key:"isOpen",value:e,resetReSendDays:!0}).then(function(e){2e4===e.data.code&&g.Message.success("修改成功")})}},p().createElement(g.Radio,{value:!0},"开启"),p().createElement(g.Radio,{value:!1},"禁用"))),p().createElement("div",{style:{color:n?"#262626":"#BFBFBF"}},"客户打开问卷但没有回答任何题目，则",p().createElement(g.Input,{value:r,style:{width:"56px",margin:"0 4px",border:i?void 0:"1px solid #D96969"},disabled:!n,onBlur:function(){c()?t!==r&&a({key:"reSendDays",value:r}).then(function(e){return 2e4===e.data.code&&g.Message.success("修改成功")}):(s(!1),g.Message.warning("请输入0 ~ 30的数"))},onChange:function(e){s(!0),o(e.trim().replace(/[^0-9]/gi,""))}}),"天后，自动重发问卷1次"))};const l=function(t){function e(e){e=t.call(this,e)||this;return e.state={selSpecialType:""},e}return s()(e,t),e.prototype.render=function(){var e=this.props,t=e.questionnaireId,n=e.title,a=e.pageChange,i=e.pageSizeChange,r=e.missionList,o=e.tableConfig,s=e.reSendDays,c=e.isOpen,l=e.configChange,u=e.deleteMission,d=e.fetchingMissionList,e=e.questionnaireType;return p().createElement("div",{className:"research_distribute"},p().createElement(f.Z,{title:[{title:"问卷管理",url:"/research/manage"},{title:n},{title:"问卷分发"}]}),p().createElement("div",{className:"content"},p().createElement(m.Z,{data:r},p().createElement(v,{questionnaireId:t,title:n,questionnaireType:e}),p().createElement(M,{title:n,list:r,pageChange:a,pageSizeChange:i,tableConfig:o,questionnaireId:t,questionnaireType:e,deleteMission:u,fetchingMissionList:d}),p().createElement(S,{reSendDays:s,isOpen:c,configChange:l}))))},e}(a.Component);var t=n(55609),u=n(35239),r=n(64396),d=(n(5133),r.Z.research.distribute),a=function(t){function e(e){e=t.call(this,e)||this;return e.state={},e._event={},e}s()(e,t);var n=e.prototype;return n.componentDidMount=function(){this.props.save({projectId:u.t.get(u.V.curProject).id,questionnaireId:this.props.location.state.id,questionnaireType:this.props.location.state.questionnaireType,title:this.props.location.state.title}),this.props.fetchDefaultConfig(),this.props.fetchMissionList()},n.componentWillUnmount=function(){this.props.clear()},n.render=function(){return p().createElement(l,o()({},this.state,this.props,this._event))},e}(a.Component);const q=(0,t.connect)(function(e){var t=e.loading,e=i()(e,["loading"]);return o()({},e[d],{fetchingMissionList:t.effects[d+"/fetchMissionList"]||!1})},function(t){return{configChange:function(e){return t({type:d+"/configChange",payload:e})},fetchMissionList:function(e){return t({type:d+"/fetchMissionList",payload:e})},deleteMission:function(e){return t({type:d+"/deleteMission",payload:e})},fetchDefaultConfig:function(e){return t({type:d+"/fetchDefaultConfig",payload:e})},pageChange:function(e){return t({type:d+"/pageChange",payload:e})},pageSizeChange:function(e){return t({type:d+"/pageSizeChange",payload:e})},save:function(e){return t({type:d+"/save",payload:e})},submit:function(e){return t({type:d+"/submit",payload:e})},clear:function(){return t({type:d+"/clear"})}}})(a)}}]);