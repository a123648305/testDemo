"use strict";(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[2715],{92715:(e,t,a)=>{a.r(t),a.d(t,{default:()=>L});var n=a(63366),l=a(87462),i=a(94578),r=(a(48980),a(20838)),o=a(67294),c=a(92360),p=a(5133),s=a(35303),m=a(29383),g=a(43036),d=a(55815),u=a(13713),y=(a(61193),a(30381)),h=a.n(y),f=a(61409),T=a(35239),v=a(55609),E=a(64396),S=a(87219),N=["loading"],b=r.default.TabPane,w=E.Z.project.tag,C=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).openAddTagModal=function(){(0,t.props.dispatch)({type:w+"/saveState",payload:{modalShow:!0,modalMode:"addTag"}})},t.handleSearchTagType=function(e){var a=t.props,n=a.dispatch,l=a.tag,i=a.tag.tagTypeList,r=JSON.parse(JSON.stringify(i)),o=l.tempTagTypeList;e.trim().length>0&&!i.some((function(t){return t.name===e}))?(r.push({id:"",name:e}),o=r):o=r,n({type:w+"/saveState",payload:{tempTagTypeList:o}})},t.switchTagType=function(e){var a=t.props,n=a.dispatch,i=a.tag,r=i.targetTag,o=i.tagTypeList,c=o.filter((function(t){return t.name===e})).length>0?o.filter((function(t){return t.name===e}))[0].id:"";n({type:w+"/saveState",payload:{targetTag:(0,l.Z)({},r,{tagTypeId:c,tagTypeName:e})}})},t.tagNameChange=function(e){var a=t.props,n=a.dispatch,i=a.tag.targetTag;n({type:w+"/saveState",payload:{targetTag:(0,l.Z)({},i,{name:e})}})},t.tagTypeNameChange=function(e){(0,t.props.dispatch)({type:w+"/saveState",payload:{tagTypeName:e}})},t.handleViewDetail=function(e){f.mW.push({pathname:"/account/project/messageRule",state:{tagIdList:e?[e]:[]}}),t.cancel()},t.handleTagRename=function(e,a,n){var i=t.props,r=i.dispatch,o=i.tag.targetTag;r({type:w+"/saveState",payload:{modalShow:!0,modalMode:"renameTag",targetTag:(0,l.Z)({},o,{id:a,name:n,tagTypeId:e})}})},t.handleTagTypeRename=function(e){var a=t.props,n=a.dispatch,i=a.tag.targetTag;n({type:w+"/saveState",payload:{targetTag:(0,l.Z)({},i,{tagTypeName:e})}})},t.handleCopy=function(e){(0,t.props.dispatch)({type:w+"/saveState",payload:{modalMode:"addTag",modalShow:!0,tagName:e,step:1}})},t.handleDelete=function(e,a){var n=t.props,i=n.dispatch,r=n.tag.targetTag;i({type:w+"/fetchTagReferenceNum",payload:{tagId:e}}).then((function(t){if(2e4===t.data.code){var n=t.data.result;i({type:w+"/saveState",payload:{tipModalShow:!0,tipModalMode:"deleteTag",referenceNum:n,targetTag:(0,l.Z)({},r,{id:e,name:a})}})}}))},t.handleDeleteTagType=function(e){var a=t.props,n=a.dispatch,i=a.tag.targetTag;n({type:w+"/fetchTagTypeReferenceNum",payload:{tagTypeId:e}}).then((function(t){if(2e4===t.data.code){var a=t.data.result;n({type:w+"/saveState",payload:{tipModalShow:!0,tipModalMode:"deleteTagType",referenceNum:a,targetTag:(0,l.Z)({},i,{tagTypeId:e})}})}}))},t.confirm=function(){var e=t.props,a=e.tag,n=a.modalMode,l=a.step,i=a.targetTag,r=a.targetTag,o=r.name,c=r.tagTypeId,s=r.tagTypeName,m=a.tagTypeList,g=a.tabActiveKey,d=e.dispatch;if("addTag"===n)if(1===l){if(0===s.trim().length&&"RULE"===g)return void p.Z.warning("\u8bf7\u9009\u62e9\u6807\u7b7e\u7c7b\u578b");if(0===o.trim().length)return void p.Z.warning("\u8bf7\u8f93\u5165\u6807\u7b7e\u540d\u79f0");d({type:w+"/addTag",payload:{targetTag:i}})}else d({type:w+"/reset"});if("renameTag"===n){if(0===o.trim().length)return void p.Z.warning("\u8bf7\u8f93\u5165\u6807\u7b7e\u540d\u79f0");for(var u=!1,y=0;y<m.length;y++)if(m[y].id===c)for(var h=m[y].tagList,f=0;f<h.length;f++)if(h[f].name===o){u=!0;break}d(u?{type:w+"/saveState",payload:{nameExists:u}}:{type:w+"/renameTag"})}if("renameTagType"===n){if(0===s.trim().length)return void p.Z.warning("\u8bf7\u8f93\u5165\u6807\u7b7e\u540d\u79f0");d({type:w+"/renameTagType"})}},t.cancel=function(){(0,t.props.dispatch)({type:w+"/reset"})},t.confirmTip=function(){var e=t.props,a=e.tag.tipModalMode,n=e.dispatch;switch(a){case"deleteTag":n({type:w+"/deleteTag"});break;case"deleteTagType":n({type:w+"/deleteTagType"});break;default:n({type:w+"/reset"})}},t.cancelTip=function(){(0,t.props.dispatch)({type:w+"/reset"})},t.switchPage=function(e){var a=t.props,n=a.dispatch,i=a.tag,r=i.tabActiveKey,o=i.customPagtion,c=i.systemPagtion,p=i.customSourceList,s="RULE"===r?{systemPagtion:(0,l.Z)({},c,{pageIndex:e})}:{customPagtion:(0,l.Z)({},o,{pageIndex:e})};if(n({type:w+"/saveState",payload:s}),"RULE"===r)n({type:w+"/fetchTagList"});else{var m=(0,S.ZP)(p,(function(t){return t.slice((e-1)*o.pageSize,e*o.pageSize)}));n({type:w+"/saveState",payload:{customList:m}})}},t.switchPageSize=function(e){var a=t.props,n=a.dispatch,i=a.tag,r=i.tabActiveKey,o=i.customPagtion,c=i.systemPagtion,p=i.customSourceList,s="RULE"===r?{systemPagtion:(0,l.Z)({},c,{pageIndex:1,pageSize:e})}:{customPagtion:(0,l.Z)({},o,{pageIndex:1,pageSize:e})};if(n({type:w+"/saveState",payload:s}),"RULE"===r)n({type:w+"/fetchTagList"});else{var m=(0,S.ZP)(p,(function(t){return t.slice(0,e)}));n({type:w+"/saveState",payload:{customList:m}})}},t.handleKeyDown=function(e){var a=t.props.dispatch;e.stopPropagation(),13===e.keyCode&&a({type:w+"/renameTagType"})},t.handleFilter=function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0},t.goInbox=function(e,a){var n=t.props.tag.projectId,l="YYYY-MM-DD",i={dateFilter:{dateGroupType:"DAY",from:h()().subtract(29,"days").format(l),quickChoice:"\u8fd130\u5929",remoteName:"cTime",to:h()().format(l)},filterModel:{tag:[{id:e,special:"tag",values:[a]}]},projectId:n,type:"TAG_LIST"};window.open("/inbox/public?"+encodeURIComponent(JSON.stringify(i)))},t.tabChange=function(e){var a=t.props,n=a.dispatch,i=a.tag,r=i.tabActiveKey,o=i.customPagtion,c=i.systemPagtion,p="RULE"===r?{systemPagtion:(0,l.Z)({},c,{pageIndex:1})}:{customPagtion:(0,l.Z)({},o,{pageIndex:1})};n({type:w+"/saveState",payload:(0,l.Z)({},p,{tabActiveKey:e})}),n({type:w+"/fetchTagList"})},t}(0,i.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.props.dispatch;e({type:w+"/saveState",payload:{projectId:T.t.get(T.V.backProjectConfig).id}}),e({type:w+"/fetchTagList"})},a.componentWillUnmount=function(){var e=this.props,t=e.dispatch,a=e.tag,n=a.systemPagtion,i=a.customPagtion,r={systemPagtion:(0,l.Z)({},n,{pageIndex:1}),customPagtion:(0,l.Z)({},i,{pageIndex:1})};t({type:w+"/saveState",payload:r})},a.render=function(){var e=this,t=this.props,a=t.dispatch,n=t.tag,i=n.targetTag,p=n.targetTag,y=p.name,h=p.tagTypeName,f=n.modalShow,T=n.modalMode,v=n.tipModalMode,E=n.tipModalShow,S=n.step,N=n.tempTagTypeList,C=n.nameExists,L=n.referenceNum,k=n.tabActiveKey,P=n.systemList,I=n.systemPagtion,Z=n.customList,x=n.customPagtion,M=t.loading,R=[{label:"",prop:"paddingLeft",width:50},{label:"\u6807\u7b7e\u7c7b\u578b",prop:"name",align:"left",width:300,render:function(t,n,r){return o.createElement("span",{className:"tag-name"},o.createElement("span",null,t.name),o.createElement("span",{className:"operation_columns",onClick:function(){return e.handleDeleteTagType(t.id)}},"\u5220\u9664"),o.createElement("span",{className:"operation_columns",onClick:function(){return a({type:w+"/saveState",payload:{modalShow:!0,modalMode:"renameTagType",targetTag:(0,l.Z)({},i,{tagTypeId:t.id,tagTypeName:t.name})}})}},"\u91cd\u547d\u540d"))}},{label:"",width:180},{label:"\u6807\u7b7e",render:function(e){return o.createElement("ul",null,e.tagList.map((function(e,t){return o.createElement("li",{key:e.id,className:"tagItem"},e.name)})))}},{label:"\u6d88\u606f\u6570",render:function(t){return o.createElement("ul",null,t.tagList.map((function(a,n){return o.createElement("li",{key:a.id,className:"tagItem",onClick:function(){return e.goInbox(t.id,a.id)}},o.createElement(g.Z,{overlay:function(){return o.createElement(o.Fragment,null,o.createElement("div",{style:{lineHeight:"22px"}},"\u6570\u503c\u4e3a\u542b\u6709\u3010",a.name,"\u3011\u6807\u7b7e\u7684\u6d88\u606f\u6570\uff0c"),o.createElement("div",{style:{lineHeight:"22px"}},"\u70b9\u51fb\u53ef\u67e5\u770b\u8fd130\u5929\u7684\u6d88\u606f\u3002"))},placement:"left"},o.createElement("span",{className:"msg-count"},a.count)))})))}},{label:"\u6807\u7b7e\u64cd\u4f5c",width:230,render:function(t){var a=t.id;return t.tagList.map((function(t,n){return o.createElement("div",{key:n,className:"operation"},o.createElement("span",null,o.createElement("span",{className:"operation_columns",onClick:function(){return e.handleViewDetail(t.id)}},"\u67e5\u770b\u89c4\u5219"),o.createElement("span",{className:"operation_columns",onClick:function(){return e.handleTagRename(a,t.id,t.name)}},"\u91cd\u547d\u540d"),o.createElement("span",{className:"operation_columns",onClick:function(){return e.handleDelete(t.id,t.name)}},"\u5220\u9664")))}))}},{label:"",prop:"paddingRight",width:50}],D=[{label:"",prop:"paddingLeft",width:50},{label:"\u6807\u7b7e",prop:"name",render:function(e){return o.createElement("span",{className:"tagItem"},e.name)}},{label:"\u6d88\u606f\u6570",render:function(t){return o.createElement("li",{className:"tagItem",onClick:function(){return e.goInbox("CUSTOMIZATION",t.id)}},o.createElement(g.Z,{overlay:function(){return o.createElement(o.Fragment,null,o.createElement("div",{style:{lineHeight:"22px"}},"\u6570\u503c\u4e3a\u542b\u6709\u3010",t.name,"\u3011\u6807\u7b7e\u7684\u6d88\u606f\u6570\uff0c"),o.createElement("div",{style:{lineHeight:"22px"}},"\u70b9\u51fb\u53ef\u67e5\u770b\u8fd130\u5929\u7684\u6d88\u606f\u3002"))},placement:"left"},o.createElement("span",{className:"msg-count"},t.count)))}},{label:"\u6807\u7b7e\u64cd\u4f5c",width:230,render:function(t){return o.createElement("div",{className:"operation"},o.createElement("span",null,o.createElement("span",{className:"operation_columns",onClick:function(){return e.handleTagRename("CUSTOMIZATION",t.id,t.name)}},"\u91cd\u547d\u540d"),o.createElement("span",{className:"operation_columns",onClick:function(){return e.handleDelete(t.id,t.name)}},"\u5220\u9664")))}},{label:"",prop:"paddingRight",width:50}],z=document.documentElement.clientHeight-46-78-24;return o.createElement("div",{className:"tag-wrapper flex-col"},o.createElement("div",{className:"flex-other container"},o.createElement(d.Z,{title:(0,u.u)({title:"\u6807\u7b7e"}),rightContent:o.createElement(c.Button,{type:"primary",onClick:this.openAddTagModal},"\u6dfb\u52a0\u6807\u7b7e")}),o.createElement("div",{className:"topic"},o.createElement("div",{style:{minHeight:z,background:"#fff"}},o.createElement(r.default,{defaultActiveKey:k,onChange:this.tabChange,tabBarStyle:{paddingLeft:"48px"}},o.createElement(b,{tab:"\u7cfb\u7edf\u6807\u7b7e",key:"RULE"},o.createElement(c.Loading,{loading:M,text:"\u62fc\u547d\u52a0\u8f7d\u4e2d"},o.createElement(m.Z,{columns:R,data:P,total:I.total,pageSize:I.pageSize,currentPage:I.pageIndex,pagePosition:"down",onPage:this.switchPage,pageSizeSelectorShow:!0,onPageSizeChange:this.switchPageSize,notLimit:!0}))),o.createElement(b,{tab:"\u81ea\u5b9a\u4e49\u6807\u7b7e",key:"CUSTOMIZATION"},o.createElement(c.Loading,{loading:M,text:"\u62fc\u547d\u52a0\u8f7d\u4e2d"},o.createElement(m.Z,{columns:D,data:Z,total:x.total,pageSize:x.pageSize,currentPage:x.pageIndex,pagePosition:"down",onPage:this.switchPage,pageSizeSelectorShow:!0,onPageSizeChange:this.switchPageSize,notLimit:!0}))))),o.createElement(c.Dialog,{title:"addTag"===T&&1===S?"\u6dfb\u52a0\u6807\u7b7e":"renameTag"===T?"\u91cd\u547d\u540d\u6807\u7b7e":"renameTagType"===T?"\u91cd\u547d\u540d\u6807\u7b7e\u7c7b\u578b":"",size:"tiny",visible:f,onCancel:this.cancel,lockScroll:!0},o.createElement(c.Dialog.Body,null,"addTag"===T&&1===S&&"RULE"===k&&o.createElement("div",{className:"form-item",style:{marginBottom:"16px"}},o.createElement("label",null,"\u6807\u7b7e\u7c7b\u578b"),o.createElement(s.RS,{multiple:!1,tags:!1,value:h,optionFilterProp:"children",filterOption:function(t,a){return e.handleFilter(t,a)},showSearch:!0,onSearch:this.handleSearchTagType,onChange:this.switchTagType,placeholder:"\u8bf7\u9009\u62e9\u6807\u7b7e\u7c7b\u578b"},N.map((function(e,t){return o.createElement(s.Wx,{key:t,value:e.name,label:e.name},e.name)})))),("addTag"===T&&1===S||"renameTag"===T)&&o.createElement(o.Fragment,null,o.createElement("div",{className:"form-item"},o.createElement("label",null,"\u6807\u7b7e\u540d\u79f0"),o.createElement(c.Input,{ref:function(t){return e.input=t},placeholder:"\u8bf7\u8f93\u5165\u6807\u7b7e\u540d\u79f0",value:y,trim:!0,onChange:this.tagNameChange,maxLength:30})),"renameTag"===T&&o.createElement("div",{className:"error-text",style:{visibility:C?"visible":"hidden"}},"\u540c\u4e00\u6807\u7b7e\u7c7b\u578b\u4e0b\u4e0d\u80fd\u6709\u76f8\u540c\u540d\u79f0\u7684\u6807\u7b7e")),"renameTagType"===T&&o.createElement("div",{className:"form-item form-item-tag-type"},o.createElement("label",null,"\u6807\u7b7e\u7c7b\u578b\u540d\u79f0"),o.createElement(c.Input,{placeholder:"\u8bf7\u8f93\u5165\u6807\u7b7e\u7c7b\u578b\u540d\u79f0",value:h,trim:!0,onChange:this.handleTagTypeRename})),("addTag"===T&&2===S||"edit"===T)&&o.createElement(o.Fragment,null,o.createElement("div",{className:"mock-dialog-tilte"},o.createElement("i",{className:"icon-cem_complete1",style:{color:"#00B76E",marginRight:"8px",fontSize:"20px"}}),"\u6dfb\u52a0\u6807\u7b7e\u6210\u529f"),o.createElement("div",{className:"add-success"},"RULE"===k?o.createElement("div",null,"\u70b9\u51fb\u8fdb\u5165",o.createElement("a",{onClick:function(){return e.handleViewDetail()}},"\u6d88\u606f\u5904\u7406\u89c4\u5219"),"\u5217\u8868\uff0c\u4e3a\u65b0\u5efa\u6587\u4ef6\u5939\u914d\u7f6e\u89c4\u5219"):o.createElement("div",null,"\u81ea\u5b9a\u4e49\u6807\u7b7e\u6dfb\u52a0\u6210\u529f")))),o.createElement(c.Dialog.Footer,{className:"dialog-footer"},o.createElement(c.Button,{type:"primary",onClick:this.confirm},"addTag"===T&&1===S?"\u7acb\u5373\u6dfb\u52a0":"\u786e\u5b9a"),!("addTag"===T&&2===S)&&o.createElement(c.Button,{type:"default",onClick:this.cancel},"\u53d6\u6d88"))),o.createElement(c.Dialog,{title:"",size:"tiny",visible:E,onCancel:this.cancelTip,lockScroll:!0,customClass:0===L?"without-padding-dialogbody":""},o.createElement(c.Dialog.Body,null,o.createElement("div",{className:"tips"},o.createElement("div",{className:"mock-dialog-tilte"},o.createElement("i",{className:"icon-cem_warning-hints",style:{color:"#D96969",marginRight:"8px",fontSize:"20px"}}),"\u662f\u5426\u5220\u9664\u8be5\u6807\u7b7e"+("deleteTagType"===v?"\u7c7b\u578b":"")+"\uff1f"),L>0&&o.createElement("div",{style:{paddingLeft:"24px"}},o.createElement("div",null,"\u6709",L,"\u4e2a\u89c4\u5219\u6b63\u5728\u4f7f\u7528\u8be5\u6807\u7b7e","deleteTagType"===v?"\u7c7b\u578b\u3002":"\u3002"),o.createElement("div",null,"\u5220\u9664\u8be5\u6807\u7b7e","deleteTagType"===v&&"\u7c7b\u578b","\u540e\uff0c\u8fd9\u4e9b\u89c4\u5219\u5c06\u53d7\u5230\u5f71\u54cd\u3002")))),o.createElement(c.Dialog.Footer,null,o.createElement(c.Button,{type:"primary",onClick:this.confirmTip},"\u662f"),o.createElement(c.Button,{type:"default",onClick:this.cancelTip},"\u5426"))))))},t}(o.Component);const L=(0,v.connect)((function(e){var t=e.loading,a=(0,n.Z)(e,N);return{loading:t.effects[w+"/fetchTagList"],tag:a[w]}}))(C)},13713:(e,t,a)=>{a.d(t,{u:()=>l});var n=a(35239),l=function(e){var t=e.title,a=e.url,l=n.t.get(n.V.backProjectConfig).name;return a&&-1!==a.indexOf("memberlist")?[{title:l,url:"/account/project/preview"},{title:"\u7528\u6237\u7ec4",url:"/account/project/usergroup"},{title:t,url:a}]:[{title:l,url:"/account/project/preview"},{title:t,url:a}]}},55815:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(94578),l=a(67294),i=a(45697),r=a.n(i),o=a(43036),c=a(61409),p=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this)._handleBreadcrumbClick=function(e){var a=t.props,n=a.title,l=a.beforeJump;e!==n.length-1&&(l?new Promise((function(e,t){return l(e,t)})).then((function(){c.mW.push({pathname:n[e].url,state:n[e].state})})):c.mW.push({pathname:n[e].url,state:n[e].state}))},t}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.title,n=t.mainTitle,i=t.rightContent,r=t.className,c=t.overlay;return l.createElement("div",{className:"breadcumb-wrapper "+r},a instanceof Array?l.createElement("div",{className:"breadcrumb-left"},l.createElement("div",null,a.map((function(t,n){return l.createElement("span",{className:t.url?"":"not_clickable",key:n,onClick:function(){return t.url&&n!==a.length-1&&e._handleBreadcrumbClick(n)}},t.title,n!==a.length-1&&" / ")}))),l.createElement("span",null,n||a[a.length-1].title,c&&l.createElement(o.Z,{placement:"top",overlay:c},l.createElement("i",{className:"icon-cem_file1",style:{color:"#8c8c8c",marginLeft:8}})))):l.createElement("div",{className:"normal-title"},a,c&&l.createElement(o.Z,{placement:"top",overlay:c},l.createElement("i",{className:"icon-cem_file1",style:{color:"#8c8c8c",marginLeft:8}}))),i||"")},t}(l.Component);p.propTypes={className:r().string,title:r().oneOfType([r().string,r().arrayOf(r().shape({title:r().string,url:r().string,state:r().object}))]).isRequired,overlay:r().oneOfType([r().string,r().node]),mainTitle:r().oneOfType([r().string,r().node]),beforeJump:r().func,rightContent:r().node};const s=p}}]);