"use strict";(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[3829],{43573:(e,t,n)=>{n.d(t,{Z:()=>K});n(1025);var a=n(65400),r=(n(43378),n(62443)),i=(n(35797),n(64749)),l=n(50361),s=n.n(l),o=n(67294),c=n(34717),u=(n(62713),n(14321)),d=n(30381),f=n.n(d),m="YYYY/MM/DD";const p=function(e){var t=e.value,n=void 0===t?void 0:t,a=e.func,r=e.disabledTimeFuc;return o.createElement(o.Fragment,null,o.createElement(u.default,{allowClear:!1,value:n?f()(n,m):void 0,format:m,style:{width:"291px"},onChange:function(t,n){e.value=n,a()},disabledDate:r||null}))};n(89858);var h=n(51024);const v=function(e,t){var n=e.value,a=(e.id,e.func);return o.createElement(o.Fragment,null,o.createElement(h.default,{value:n,placeholder:"\u8bf7\u8f93\u5165",style:{width:"371px"},onChange:function(t){e.value=t.target.value,a()}}))};const E=function(e,t){var n=e.value,a=e.func,r=e.style,i=e.onChange;return o.createElement(o.Fragment,null,o.createElement(h.default,{value:n,style:r||{width:"291px"},onChange:function(t){var n=t.target.value.replace(/[^\d.-]/g,"");if(n){var r,l=n.split("."),s=l[0],o=l[1],c=n.includes(".");(null==(r=o)?void 0:r.length)>0&&(o=o.replace(/[^\d]/g,"").substring(0,4)),s=s.substring(0,"-"===s[0]?16:15),t.target.value=isNaN(+s)?s:s+(o?"."+o:c?".":"")}else t.target.value=n;i?i(t.target.value):(e.value=t.target.value,a())},placeholder:"\u8bf7\u8f93\u5165\u6570\u5b57"}))};n(77785);var g=n(59361),y=n(15861),S=n(87462),k=(n(9405),n(89552)),_=n(63366),I=n(87757),T=n.n(I),L=n(23279),C=n.n(L),R=n(6406),w=["fetchOptions","debounceTimeout"];function D(e){var t=e.fetchOptions,n=e.debounceTimeout,a=void 0===n?800:n,r=(0,_.Z)(e,w),l=o.useState(!1),s=l[0],c=l[1],u=o.useState([]),d=u[0],f=u[1];o.useEffect((function(){(0,R.Bt)({userName:""}).then((function(e){return f(e.data.result.filter((function(e){return 0!==e.status})).map((function(e){return{label:e.username,value:e.id}})))}))}),[]);var m=o.useRef(0),p=o.useMemo((function(){return C()((function(e){m.current+=1;var n=m.current;f([]),c(!0),t(e).then((function(e){n===m.current&&(f(e),c(!1))}))}),a)}),[t,a]);return o.createElement(i.default,(0,S.Z)({labelInValue:!0,mode:"multiple",tagRender:function(e){return o.createElement(g.default,{style:{backgroundColor:"#F1F3F4",color:"#262626",marginBottom:"2px"},closable:e.closable,onClose:e.onClose},e.label)},filterOption:!1,onSearch:p,notFoundContent:s?o.createElement(k.default,{size:"small"}):null},r,{options:d}))}function b(e){return A.apply(this,arguments)}function A(){return(A=(0,y.Z)(T().mark((function e(t){return T().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,R.Bt)({userName:t}).then((function(e){return e.data.result.filter((function(e){return 0!==e.status})).map((function(e){return{label:e.username,value:e.id}}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}const N=function(e){var t=e.value,n=e.func;return o.createElement(D,{mode:"multiple",value:t||[],placeholder:"\u8bf7\u8f93\u5165",fetchOptions:b,onChange:function(t){var a;a=t,e.value=a,n()},style:{width:"371px"}})};var O=i.default.Option;const x=function(e){var t=e.itemNode,n=e.radioNode,a=e.kind,r=e.func,l=e.checkboxNodes,s=e.value,u=c.Ck[a].items,d=t||n,f=function(t){e.value=t,r()};return"multiple"!==c.Ck[a].mode?o.createElement(o.Fragment,null,d&&o.createElement(i.default,{value:s,style:{width:"371px"},mode:"multiple",placeholder:"\u8bf7\u9009\u62e9",onChange:f,tagRender:function(e){return o.createElement(g.default,{style:{backgroundColor:"#F1F3F4",color:"#262626",marginBottom:"2px"},closable:e.closable,onClose:e.onClose},e.label)}},d.items.map((function(e){return o.createElement(O,{value:e.id,key:e.id},e.value)}))),l&&o.createElement(i.default,{value:s,style:{width:"371px"},mode:"multiple",placeholder:"\u8bf7\u9009\u62e9",onChange:f,tagRender:function(e){return o.createElement(g.default,{style:{backgroundColor:"#F1F3F4",color:"#262626",marginBottom:"2px"},closable:e.closable,onClose:e.onClose},e.label)}},l.map((function(e){return o.createElement(O,{value:e.id,key:e.id},e.value)}))),u&&o.createElement(i.default,{value:s,style:{width:"371px"},placeholder:"\u8bf7\u9009\u62e9",onChange:f},u.map((function(e,t){return o.createElement(O,{value:e.id,key:t},e.value)})))):N(e)};var F="YYYY/MM/DD",M=u.default.RangePicker;const P=function(e,t){var n=e.value,a=e.func,r=e.disabledTimeFuc;return o.createElement(o.Fragment,null,o.createElement(M,{format:F,style:{width:"291px"},allowClear:!1,value:n?[f()(n[0],F),f()(n[1],F)]:[null,null],onChange:function(t,n){e.value=n,a()},disabledDate:r||null}))};n(75314);var Y=n(11187);const U={DatePicker:p,InputNumber:E,Select:x,Input:v,RangePicker:P,RangeNumber:function(e,t){var n=e.value,a=e.func,r=function(t,r){var i=n||[null,null],l=1===r?[t,i[1]]:[i[0],t];e.value=l,a(),l[0]&&l[1]&&+l[1]<+l[0]&&Y.default.warning("\u6570\u503c\u533a\u95f4\u6709\u8bef")};return o.createElement(o.Fragment,null,o.createElement(E,{value:n?n[0]:null,style:{width:133},onChange:function(e){return r(e,1)}}),o.createElement("span",{style:{margin:"0 6px"}},"\u81f3"),o.createElement(E,{value:n?n[1]:null,style:{width:133},onChange:function(e){return r(e,2)}}))}};var j=i.default.Option;const K=function(e){var t=e.changeScreenVisible,n=e.screensList,l=e.filtersList,u=e.handlefiltersList,d=e.updatafiltersList,f=e.changeOldFiltersList,m=e.typeContainer,p=e.handleClearFiltersList;return o.createElement("div",{className:"workorder_screen_work_order",id:"workorder_screen_work_order"},o.createElement("div",{className:"screen_header"},o.createElement("span",{className:"header_title"},"\u8bbe\u7f6e\u7b5b\u9009\u6761\u4ef6"),l.length>1&&o.createElement("span",{className:"header_desc"},"\u7b26\u5408\u4ee5\u4e0b\u6240\u6709\u6761\u4ef6")),l.length>=1&&o.createElement("div",{className:"screen_content"},l.length>0&&l.map((function(e,t){return e.func=d,o.createElement("div",{key:t,className:"screen_content_item"},o.createElement(i.default,{value:e.name,placeholder:"\u8bf7\u9009\u62e9",style:{width:"120px",marginRight:"50px"},onChange:function(e,a){!function(e,t,a){var r=s()(l),i=s()(n);r[a]=i[t.key],r[a].value=void 0,i.forEach((function(e){r.map((function(e){return e.id})).includes(e.id)?e.isShow=!1:e.isShow=!0})),u(r,i)}(0,a,t)}},n.map((function(e,t){return e.isShow&&o.createElement(j,{value:e.id,key:t,type:e.kind},e.name)}))),"board"===m&&"FINISHED_TIME"===e.kind&&o.createElement(r.default,{placement:"top",getPopupContainer:function(){return document.getElementById("workorder_screen_work_order")||document.body},overlayClassName:"tips_popover",content:o.createElement("span",{style:{width:"236px",display:"inline-block"}},"\u770b\u677f\u9690\u85cf\u7ed3\u675f\u65f6\u95f4\u8d85\u8fc77\u5929\u7684\u5de5\u5355\uff0c\u53ea\u80fd\u7b5b\u9009\u8fd17\u5929"),trigger:"hover"},o.createElement("i",{className:"icon-cem_file1",style:{color:"#8c8c8c",position:"absolute",top:"10px",left:"130px"}})),"NUMERIC"===e.kind&&o.createElement(r.default,{placement:"top",getPopupContainer:function(){return document.getElementById("workorder_screen_work_order")||document.body},overlayClassName:"tips_popover",content:o.createElement("span",{style:{width:"236px",display:"inline-block"}},"\u6570\u5b57\u6700\u591a\u652f\u630115\u4f4d\u6574\u6570\u30014\u4f4d\u5c0f\u6570"),trigger:"hover"},o.createElement("i",{className:"icon-cem_file1",style:{color:"#8c8c8c",position:"absolute",top:"10px",left:"130px"}})),c.rx.includes(e.kind)?o.createElement(i.default,{value:e.timeType,placeholder:"\u8bf7\u9009\u62e9",style:{width:"70px",marginRight:"10px"},onChange:function(e){!function(e,t){var a=s()(l);a[t].timeType=e,("be"===e||"be"!==e&&a[t].value instanceof Array)&&(a[t].value=void 0),u(a,n)}(e,t)}},e.kind&&c.Ck[e.kind].enum.map((function(e,t){return o.createElement(j,{value:e.value,key:t},e.name)}))):null,"be"===e.timeType?"NUMERIC"===e.kind?U.RangeNumber(e):U.RangePicker(e):U[c.Ck[e.kind].type](e),o.createElement("i",{className:"icon-cem_cancel",style:{marginLeft:"10px",color:"#BEBEBE"},onClick:function(){!function(e){var t=s()(l),a=s()(n);t.splice(e,1),a.forEach((function(e){e.value=void 0,t.map((function(e){return e.id})).includes(e.id)?e.isShow=!1:e.isShow=!0})),u(t,a)}(t)}}))}))),o.createElement("div",{className:"screen_bottom"},o.createElement("div",{className:"add-item"},o.createElement("i",{className:"icon-cem_add-to",style:{color:"#7262fd",fontSize:"18px",position:"relative",top:"2px",left:"-2px"}}),o.createElement("span",{onClick:function(){var e=s()(l).concat([{kind:"TEXT"}]);u(e,n)}},"\u6dfb\u52a0\u7b5b\u9009\u6761\u4ef6")),l.length>0&&o.createElement("span",{className:"clearAll",onClick:function(){p()}},"\u6e05\u7a7a"),o.createElement(a.default,{onClick:function(){t(!1)}},"\u53d6\u6d88"),o.createElement(a.default,{type:"primary",onClick:function(){f(l),t(!1,!0);var e=l.filter((function(e){return e.id&&(Array.isArray(e.value)?e.value.length>0:e.value)}));u(e,n,!0)}},"\u67e5\u8be2")))}},34717:(e,t,n)=>{n.d(t,{MI:()=>a,TL:()=>r,rx:()=>i,Ck:()=>s});var a=["CREATOR","ASSIGNEE","UPDATER","participators","followers","priorityIds"],r=["DATE_TIME","CREATED_TIME","DUE_TIME","UPDATED_TIME","FINISHED_TIME"],i=["DATE_TIME","CREATED_TIME","DUE_TIME","UPDATED_TIME","FINISHED_TIME","NUMERIC"],l=[{name:"\u7b49\u4e8e",id:"1",value:"eq"},{name:"\u65e9\u4e8e",id:"2",value:"ea"},{name:"\u665a\u4e8e",id:"3",value:"af"},{name:"\u4ecb\u4e8e",id:"4",value:"be"}],s={DATE_TIME:{enum:l,type:"DatePicker"},CHECKBOX:{type:"Select"},PRIORITY:{type:"Select"},RADIO:{type:"Select"},NUMERIC:{enum:[{name:"\u7b49\u4e8e",id:"1",value:"eq"},{name:"\u5927\u4e8e",id:"2",value:"ea"},{name:"\u5c0f\u4e8e",id:"3",value:"af"},{name:"\u4ecb\u4e8e",id:"4",value:"be"}],type:"InputNumber"},TEXT:{type:"Input"},RICH_TEXT:{type:"Input"},isFinished:{type:"Select",items:[{id:"true",value:"\u662f"},{id:"false",value:"\u5426"}]},ASSIGNEE:{type:"Select",mode:"multiple"},participators:{type:"Select",mode:"multiple"},followers:{type:"Select",mode:"multiple"},STATE:{type:"Select"},CREATOR:{type:"Select",mode:"multiple"},CREATED_TIME:{enum:l,type:"DatePicker"},DUE_TIME:{enum:l,type:"DatePicker"},UPDATER:{type:"Select",mode:"multiple"},UPDATED_TIME:{enum:l,type:"DatePicker"},FINISHED_TIME:{enum:l,type:"DatePicker"},DESCRIPTION:{type:"Input"},REMARK:{type:"Input"}}},93829:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var a=n(87462),r=n(97326),i=n(94578),l=n(50361),s=n.n(l),o=n(67294),c=(n(1025),n(65400)),u=(n(6373),n(82891)),d=(n(89858),n(51024)),f=(n(35797),n(64749)),m=n(96889),p=n(30579),h=n(43573),v=n(32624),E=n(61193),g=n(30381),y=n.n(g),S={PENDING:"#FF8A1A",PROCESSING:"#1B90FF",FINISHED:"#3bb346"},k=f.default.Option;const _=function(e){var t=e.dataList,n=e.filtersList,a=e.selectType,r=e.handleChange,i=e.handlekeyword,l=e.screensList,g=e.handlefiltersList,_=e.handleScreenList,I=e.updatafiltersList,T=e.stateList,L=e.loading,C=e.pagination,R=e.getPagination,w=e.onFresh,D=e.changeOldFiltersList,b=e.old_filtersList,A=e.handleClearFiltersList,N=(0,o.useState)(void 0),O=N[0],x=N[1],F=(0,o.useState)(void 0),M=F[0],P=F[1],Y=(0,o.useState)(!1),U=Y[0],j=Y[1],K=(0,o.useState)(""),Z=K[0],H=K[1],W=(0,o.useState)(""),B=W[0],z=W[1],G=(0,o.useState)(!1),V=G[0],$=G[1],q=(0,o.useState)(!1),J=q[0],X=q[1],Q=(0,o.useState)(0),ee=Q[0],te=Q[1];(0,o.useEffect)((function(){return window.addEventListener("click",ne),function(){window.removeEventListener("click",ne)}}),[]),(0,o.useEffect)((function(){te(document.body.offsetHeight-400)}),[]);var ne=function(e){P(e)},ae=function(e,t){void 0===t&&(t=!1),e||t||g(s()(b),l,a),X(e)},re=function(e,t){("new"!==e||E.Z.hasAuthority("ADD_WORK_ORDER"))&&(H("edit"===e?E.Z.hasAuthority("EDIT_WORK_ORDER")||t.assigneeId===E.Z.getUser().userId||t.creatorId===E.Z.getUser().userId?e:"view":e),"edit"===e&&$(!E.Z.hasAuthority("EDIT_WORK_ORDER")&&t.assigneeId===E.Z.getUser().userId&&t.creatorId!==E.Z.getUser().userId),"edit"===e&&t.id&&z(t.id),j(!0))},ie=function(e){e.length;return e.filter((function(e){return(e.value instanceof Array&&e.value.length>0||"number"===typeof e.value&&!isNaN(e.value)||"string"===typeof e.value&&e.value)&&void 0!==e.value})).length},le=[{title:"\u7f16\u53f7",dataIndex:"code",key:"code",width:"100px",render:function(e,t){return o.createElement("a",{onClick:function(){return re("edit",t)},className:"title_key"},e)}},{title:"\u6807\u9898",dataIndex:"title",key:"title",width:"450px",render:function(e,t){return o.createElement("a",{onClick:function(){return re("edit",t)},className:"title_key"},e)}},{title:"\u4f18\u5148\u7ea7",dataIndex:"priority",key:"priority",render:function(e){return e.name},width:"80px"},{title:"\u72b6\u6001",key:"stateName",dataIndex:"stateName",width:"100px",render:function(e,t){return o.createElement(o.Fragment,null,o.createElement("span",{className:"status_point",style:{backgroundColor:""+S[t.statusKind],marginRight:"8px"}}),o.createElement("span",null,t.stateName))}},{title:"\u521b\u5efa\u4eba",dataIndex:"creator",key:"creator",width:"120px"},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"createdAt",key:"createdAt",render:function(e){return"-"!==e?y()(e).format("YYYY/MM/DD HH:mm"):"--"},sorter:!0,width:"150px"},{title:"\u5904\u7406\u4eba",dataIndex:"assigneeUserName",key:"assigneeUserName",width:"120px"},{title:"\u622a\u6b62\u65f6\u95f4",dataIndex:"dueAt",key:"dueAt",width:"150px",render:function(e){return"-"!==e?y()(e).format("YYYY/MM/DD HH:mm"):"--"},sorter:!0}];return o.createElement(o.Fragment,null,o.createElement("div",{className:"board_list"},o.createElement("div",{className:"board_list_header"},o.createElement("p",null,"\u5de5\u5355\u5217\u8868")),o.createElement("div",{className:"board_list_content"},o.createElement("div",{className:"board_list_content_screen"},o.createElement("div",null,o.createElement("div",null,o.createElement(f.default,{placeholder:"\u6240\u6709\u5de5\u5355",value:a,style:{width:"160px",marginRight:"10px",height:"28px"},onChange:r,defaultActiveFirstOption:!1,dropdownClassName:"header_select"},p.Fz.map((function(e){return o.createElement(k,{key:e.value,value:e.value,style:{color:"#262626"}},e.name)}))),o.createElement(d.default,{placeholder:"\u8bf7\u8f93\u5165",value:O,onChange:function(e){x(e.target.value)},suffix:o.createElement("i",{className:"icon-cem_small-search",onClick:function(){i(O)}}),onPressEnter:function(){i(O)},style:{width:"160px",height:"28px"}}))),o.createElement("div",null,o.createElement("div",{className:"board_list_content_screen-right"},o.createElement(u.default,{placement:"bottomRight",overlayClassName:"overlayScreen",overlay:function(){return o.createElement(h.Z,{typeContainer:"list",changeScreenVisible:ae,screensList:l,filtersList:n,old_filtersList:b,changeOldFiltersList:D,handlefiltersList:g,handleScreenList:_,updatafiltersList:I,handleClearFiltersList:A})},trigger:["click"],visible:J,onVisibleChange:function(e){ae(e)}},o.createElement("div",{className:"screen"===M||ie(n)>0?"active screen":"screen",onClick:function(e){e.nativeEvent.stopImmediatePropagation(),ne("screen")}},o.createElement("div",null,o.createElement("i",{className:"icon-shaixuan",style:{fontSize:"12px",marginRight:"5px"}}),o.createElement("span",null,"\u7b5b\u9009"),ie(n)>0&&o.createElement("span",{className:"notice"},ie(n))))),E.Z.hasAuthority("ADD_WORK_ORDER")&&o.createElement(c.default,{type:"primary",onClick:function(){return re("new")}},"\u521b\u5efa\u5de5\u5355")))),o.createElement(m.ZP,{columns:le,search:!1,rowKey:function(e){return e.id},dataSource:t,pagination:C,options:!1,loading:L,onChange:function(e,t,n){R(e,n)},className:"pro_table",scroll:{y:ee}})),o.createElement(v.Z,{visible:U,editType:Z,workOrderId:B,stateList:T,normalAssignee:V,setVisible:function(e,t){j(e),!e&&z(""),t&&w()}})))};var I=n(35239),T=n(34717),L=n(49722);function C(e){var t=e.projectId;return L.h.get("/workorder/work-order-status/list?projectId="+t,{})}var R=function(e){function t(t){var n;return(n=e.call(this,t)||this).events=void 0,n._changeOldFiltersList=function(e){n.setState({old_filtersList:s()(e)})},n._handleChangeType=function(e){var t=n.state,a=t.owner,r=t.screensList,i=t.ownername,l=t.pagination;switch(e){case"1":n.setState({filtersList:[],old_filtersList:[]});break;case"CREATED_TIME":var o=r.filter((function(e){return"CREATED_TIME"===e.kind})),c=y()().format("YYYY/MM/DD");o.length>0&&(o[0].value=c),n.setState({filtersList:o,old_filtersList:o});break;case"ASSGINER":var u=r.filter((function(e){return"ASSIGNEE"===e.kind})),d=[{label:""+i,value:a,key:a}];u.length>0&&(u[0].value=d),n.setState({filtersList:u,old_filtersList:u});break;case"CREATOR":var f=r.filter((function(e){return"CREATOR"===e.kind})),m=[{label:""+i,value:a,key:a}];f.length>0&&(f[0].value=m),n.setState({filtersList:f,old_filtersList:f});break;case"participators":n.setState({filtersList:[{kind:"participators",name:"\u53c2\u4e0e\u4eba",isSystem:!0,value:[{label:""+i,value:a,key:a}]}],old_filtersList:[{kind:"participators",name:"\u53c2\u4e0e\u4eba",isSystem:!0,value:[{label:""+i,value:a,key:a}]}]});break;case"followers":n.setState({filtersList:[{kind:"followers",name:"\u5173\u6ce8\u4eba",isSystem:!0,value:[{label:""+i,value:a,key:a}]}],old_filtersList:[{kind:"followers",name:"\u5173\u6ce8\u4eba",isSystem:!0,value:[{label:""+i,value:a,key:a}]}]})}var p=s()(l);p.current=1,n.setState({selectType:e,pagination:p}),setTimeout((function(){n._getScreenList()}),100)},n._handleStateChange=function(e,t){"closeRemarkModal"===e&&n.setState((0,a.Z)({},t))},n.state={projectId:I.t.get(I.V.curProject).id,filtersList:[],old_filtersList:[],dataList:[],screensList:[],stateList:[],selectType:"1",loading:!1,isShow:!1,stateId:"",EditModalCallback:null,pagination:{current:1,pageSize:10,total:0,showSizeChanger:!0,size:"small"},keyword:"",orderKind:"CREATED_LATEST",owner:encodeURIComponent(JSON.parse(localStorage.getItem("__user__")).userId),ownername:JSON.parse(localStorage.getItem("__user__")).username},n.events={handlekeyword:n._getkeyword.bind((0,r.Z)(n)),handlefiltersList:n._handlefiltersList.bind((0,r.Z)(n)),handleScreenList:n._getScreenList.bind((0,r.Z)(n)),updatafiltersList:n._updatafiltersList.bind((0,r.Z)(n)),handleChange:n._handleChangeType.bind((0,r.Z)(n)),getPagination:n._getPagination.bind((0,r.Z)(n)),onStateChange:n._handleStateChange.bind((0,r.Z)(n)),onFresh:n._handleFresh.bind((0,r.Z)(n)),changeOldFiltersList:n._changeOldFiltersList.bind((0,r.Z)(n)),handleClearFiltersList:n._clearFiltersList.bind((0,r.Z)(n))},n}(0,i.Z)(t,e);var n=t.prototype;return n._clearFiltersList=function(){this.setState({filtersList:[],old_filtersList:[]})},n._getkeyword=function(e){var t=this,n=this.state.pagination,a={keyword:e||""},r=s()(n);r.current=1,this.setState({pagination:r,keyword:e});var i=this.handleScreenfieds(),l=Object.assign(i,a);setTimeout((function(){t._getWorkOrderScreenList(l)}),100)},n._getStateList=function(){var e=this,t=this.state,n=t.projectId,a=t.screensList;C({projectId:n}).then((function(t){if(2e4===t.data.code){var n=t.data.result;a.forEach((function(e){"STATE"===e.kind&&(e.checkboxNodes=n.map((function(e){return{id:e.id,value:e.name}})))})),e.setState({screensList:[].concat(a)})}}))},n._getWorkOrderScreenList=function(e){var t=this,n=this.state,a=n.projectId,r=n.pagination,i=n.orderKind,l=n.keyword,o=void 0===l?"":l,c=s()(r);this.setState({loading:!0}),function(e,t){return L.h.get("/workorder/work-order/list?"+e+"&projectId="+t+"&workOrderSceneKind=LIST")}((0,p.Dz)(Object.assign(e,{pageIndex:r.current,pageSize:r.pageSize,orderKind:i,keyword:o})),a).then((function(e){if(2e4===e.data.code){var n=e.data.result.list;c.total=e.data.result.total,t.setState({dataList:n,pagination:c})}})).finally((function(){t.setState({loading:!1})}))},n._getScreenList=function(){var e=this,t=this.state,n=t.projectId,a=t.filtersList,r=t.pagination,i=s()(r);i.current=1,this.setState({pagination:i}),setTimeout((function(){e._getWorkOrderScreenList(e.handleScreenfieds())}),200),function(e){var t=e.projectId,n=e.value,a=e.key;L.h.post("/default/value/update",{projectId:t,key:a,value:n})}({projectId:n,key:"WORK_ORDER_LIST_FILTER",value:JSON.stringify({filters:a})})},n._handlefiltersList=function(e,t,n){var a=this,r=this.state.selectType;t.forEach((function(t){e.map((function(e){return e.id})).includes(t.id)?t.isShow=!1:t.isShow=!0})),this.setState({filtersList:e.map((function(e){return e})),selectType:n?r:"1",screensList:[].concat(t)},(function(){n&&a._getScreenList()}))},n._updatafiltersList=function(){var e=this.state.filtersList;this.setState({filtersList:e.map((function(e){return e})),selectType:"1"})},n.handleScreenfieds=function(){var e=this.state.filtersList,t=s()(e),n={customRule:[]};t.forEach((function(e){if(T.MI.includes(e.kind))e.value=e.value?e.value.map((function(e){return e.value})).join(","):"";else if(T.rx.includes(e.kind)){var t=e.value?y()(e.value).format("YYYY-MM-DD"):"";if(!t)return void(e.value="");"eq"===e.timeType?e.value=t+","+t:"ea"===e.timeType?e.value=","+t:"af"===e.timeType?e.value=t+",":"be"===e.timeType?e.value=e.value.map((function(e){return y()(e).format("YYYY-MM-DD")})).join(","):e.value=t+","+t}else"STATE"!==e.kind&&"PRIORITY"!==e.kind||(e.value=e.value?e.value.join(","):"")}));var a=t.filter((function(e){return!e.isSystem})).map((function(e){return{key:e.id,kind:e.kind,value:""+e.value}}));return n.customRule=a,t.filter((function(e){return e.isSystem&&p.WI[e.kind]})).forEach((function(e){n[""+p.WI[e.kind]]=e.value||""})),n},n._getPagination=function(e,t){var n=this;this.setState({pagination:e}),"priority"===t.columnKey&&"ascend"===t.order?this.setState({orderKind:"PRIORITY_HIGHEST"}):"priority"===t.columnKey&&"descend"===t.order?this.setState({orderKind:"PRIORITY_LOWEST"}):"createdAt"===t.columnKey&&"ascend"===t.order?this.setState({orderKind:"CREATED_EARLIEST"}):"createdAt"===t.columnKey&&"descend"===t.order?this.setState({orderKind:"CREATED_LATEST"}):"dueAt"===t.columnKey&&"ascend"===t.order?this.setState({orderKind:"DUE_ASC"}):"dueAt"===t.columnKey&&"descend"===t.order?this.setState({orderKind:"DUE_DESC"}):this.setState({orderKind:"CREATED_LATEST"}),setTimeout((function(){n._getWorkOrderScreenList(n.handleScreenfieds())}),200)},n._fetchWorkOrderSchemaList=function(){var e=this;return function(e){var t=e.projectId;return L.h.get("/workorder/work-order/schema?projectId="+t)}({projectId:this.state.projectId}).then((function(t){if(2e4===t.data.code){var n=t.data.result;e.setState({screensList:n.filter((function(e){return e.isShow=!0,T.rx.includes(e.kind)&&(e.timeType="eq"),"WARNING"!==e.kind&&"MESSAGE"!==e.kind&&"ATTACHMENT"!==e.kind})).concat([{kind:"participators",name:"\u53c2\u4e0e\u4eba",isSystem:!0,isShow:!0,id:"ASDSDASD"},{kind:"followers",name:"\u5173\u6ce8\u4eba",isSystem:!0,isShow:!0,id:"euwqickdaspo"}])})}}))},n._getDefaultValue=function(){var e=this,t=this.state,n=t.projectId,a=t.screensList;return function(e){var t=e.projectId,n=e.key;return L.h.post("/default/value/find",{projectId:t,key:n})}({projectId:n,key:"WORK_ORDER_LIST_FILTER"}).then((function(t){if(2e4===t.data.code){var n=t.data.result;if(n){var r=JSON.parse(n).filters.filter((function(e){var t=a.filter((function(t){return t.id===e.id}));return t.length>0&&(e=Object.assign(e,t[0])),t.length>0})).map((function(e){var t=e.itemNode&&e.itemNode.items||e.checkboxNodes;return t&&e.value&&e.value.length>0&&(e.value=e.value.filter((function(e){var n=t.filter((function(t){return t.id===e}));return n.length>0&&(e=Object.assign(e,n[0])),n.length>0}))),e}));e.setState({filtersList:s()(r),old_filtersList:s()(r),screensList:a.map((function(e){return r.forEach((function(t){e.id===t.id&&(e.isShow=!1)})),e}))})}else{var i=["DUE_TIME","CREATED_TIME","PRIORITY"];e.setState({filtersList:a.filter((function(e){return i.includes(e.kind)})),old_filtersList:s()(a.filter((function(e){return i.includes(e.kind)}))),screensList:a.map((function(e){return i.includes(e.kind)?e.isShow=!1:e.isShow=!0,e}))})}}}))},n._handleFresh=function(){this._getScreenList()},n._fetchStatusList=function(){var e=this;C({projectId:this.state.projectId}).then((function(t){2e4===t.data.code&&e.setState({stateList:t.data.result})})).catch((function(e){return console.error(e)}))},n.componentDidMount=function(){var e=this;this._getDefaultValue().then((function(t){e._fetchWorkOrderSchemaList().then((function(t){e._getStateList(),e._getDefaultValue().then((function(t){e._getScreenList()}))}))})),this._fetchStatusList()},n.componentWillUnmount=function(){},n.render=function(){return o.createElement(_,(0,a.Z)({},this.props,this.state,this.events))},t}(o.Component);const w=R},30579:(e,t,n)=>{n.d(t,{WI:()=>a,Fz:()=>r,cB:()=>i,Dz:()=>l,dU:()=>s});const a={STATE:"stateIds",CREATOR:"creators",CREATED_TIME:"created",ASSIGNEE:"assignees",DUE_TIME:"due",PRIORITY:"priorityIds",UPDATER:"updaters",UPDATED_TIME:"updated",FINISHED_TIME:"finished",DESCRIPTION:"description",participators:"participators",followers:"followers",REMARK:"remark",isFinished:"isFinished"},r=[{name:"\u6240\u6709\u5de5\u5355",value:"1"},{name:"\u4eca\u65e5\u5de5\u5355",value:"CREATED_TIME"},{name:"\u6211\u8d1f\u8d23\u7684",value:"ASSGINER"},{name:"\u6211\u521b\u5efa\u7684",value:"CREATOR"},{name:"\u6211\u53c2\u4e0e\u7684",value:"participators"},{name:"\u6211\u5173\u6ce8\u7684",value:"followers"}],i=[{title:"\u6309\u624b\u52a8\u62d6\u62fd\u6392\u5e8f",key:"MOVE"},{title:"\u6309\u622a\u6b62\u65f6\u95f4\u6700\u8fd1",key:"DUE_CLOSEST"},{title:"\u6309\u66f4\u65b0\u65f6\u95f4\u6700\u65b0",key:"UPDATED_LATEST"},{title:"\u6309\u66f4\u65b0\u65f6\u95f4\u6700\u65e9",key:"UPDATED_EARLIEST"},{title:"\u6309\u521b\u5efa\u65f6\u95f4\u6700\u65b0",key:"CREATED_LATEST"},{title:"\u6309\u521b\u5efa\u65f6\u95f4\u6700\u65e9",key:"CREATED_EARLIEST"},{title:"\u6309\u4f18\u5148\u7ea7\u6700\u9ad8",key:"PRIORITY_HIGHEST"}],l=(e,t="customRules")=>{const n=[];for(const a in e)if(e.hasOwnProperty(a)&&e[a]instanceof Array&&"customRule"===a){const r=e[a].map(((e,n)=>{let a="";for(const r in e)a+=`${encodeURIComponent(`${t}[${n}].${r}`)}=${encodeURIComponent(`${e[r]||""}`)}&`;return a.substring(0,a.length-1)}));n.push(r.join("&"))}else n.push(`${encodeURIComponent(a)}=${encodeURIComponent(e[a])}`);return n.join("&")},s=(e,t="id")=>{const n={};return e.reduce(((e,a)=>(!n[a.id]&&(n[a[t]]=e.push(a)),e)),[])}}}]);