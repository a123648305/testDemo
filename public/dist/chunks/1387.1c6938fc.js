(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[1387],{23163:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});const i=a.p+"html-25f3ed"},61020:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});const i=a.p+"html-6388e3"},77316:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});const i=a.p+"html-b3d764"},88482:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});const i=a.p+"html-a84131"},46073:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});const i=a.p+"html-09118b"},88339:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});const i=a.p+"html-c164b4"},52387:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});const i=a.p+"html-789a05"},26950:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});const i=a.p+"html-88b0d1"},54033:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});const i=a.p+"html-d0ba5a"},21387:(e,t,h)=>{"use strict";h.r(t),h.d(t,{default:()=>a});var t=h(81506),n=h.n(t),t=h(85354),i=h.n(t),t=h(67294),f=h.n(t),r=h(36144),g=h(92360),s=h(5133),v=h(29383),p=h(61193),E=h(5747),b=h(88308),a=function(t){function e(e){var i=t.call(this,e)||this;return i.handleSubmit=function(e){e.preventDefault(),i.form.validate(function(e){if(!e||!i.competeChange())return!1;var t=i.state.form,a=t.name,e=(t.email,t.phone),t=t.job;r.h.post("settings/username/update",{username:a,phone:e,job:t}).then(function(e){var t=p.Z.getUser();t.username=a,p.Z.register(t),i.setState({refresh:!i.state.refresh}),s.Z.info(e.data.msg),i.setState({testForm:Object.assign(i.state.testForm,i.state.form)})})})},i.profilePicUpload=function(e){var t=n()(i),a=e.target.files[0];if(1024<a.size/1024)return s.Z.error("文件不能大于1M"),!1;e=new FileReader;e.readAsDataURL(a),e.onload=function(e){t.setState({cropShow:!0,uploadPic:e.target.result})}},i.deleteUser=function(){r.h.post("/user/delete",{id:i.props.location.query.id}).then(function(e){2e4===e.data.code&&(s.Z.success("删除成功"),i.setState({dialogVisible:!1}),window.history.back())})},i.state={form:{img:"",name:"",email:"",roleId:"",phone:""},testForm:{img:"",name:"",email:"",roleId:"",phone:""},rules:{name:[{message:"请输入名称",trigger:"blur"}]},uploadPic:"",cropPrePic:"",profilePic:"",cropShow:!1,cropLoading:!1,changeProfilePic:!1,profilePicList:[1,2,3,4,5,6,7,8,9],roleList:[],statusList:[{id:0,name:"禁用"},{id:1,name:"可用"}],teamList:[],selTeam:{},columns:[{label:"",prop:"paddingLeft",width:48},{label:"所在团队",render:function(e){return f().createElement("div",null,e.name)}},{label:"操作",width:180,render:function(e){return f().createElement("span",{onClick:i.delTeam.bind(n()(i),e.id),className:"operation_columns",style:{cursor:"pointer"}},"移出")}},{label:"",prop:"paddingRight",width:48}],data:[],dialogVisible:!1},i}i()(e,t);var a=e.prototype;return a.componentDidMount=function(){var t=this;this.getUser(),this.getRoleList(),this.getDataList(),this.getTeamList(),window.addEventListener("click",function(e){t.state.changeProfilePic&&t.setState({changeProfilePic:!1})},!1)},a.getUser=function(o,c){var l=this;r.h.post("/user/find",{id:this.props.location.query.id}).then(function(e){var t=e.data.result,a=t.email,i=t.username,n=t.roleId,r=t.status,s=t.userHeadUrl,t=t.remark,s=s?s+"?_="+(new Date).getTime():h(7810);l.setState({form:{email:a,name:i,roleId:n,status:r,remark:""===t?"无":t},testForm:{email:a,name:i,roleId:n,status:r},uploadPic:s,profilePic:s}),o&&((s=p.Z.getUser()).userId===l.props.location.query.id&&(s.userHeadUrl=e.data.result,s.headPic=c+"?_="+(new Date).getTime(),p.Z.register(s),document.querySelector(".portrait").setAttribute("src",s.headPic)),l.setState({cropShow:!1,changeProfilePic:!1,cropLoading:!1,profilePic:s.userId===l.props.location.query.id?s.headPic:c}))})},a.getRoleList=function(){var t=this;r.h.get("/role/list").then(function(e){e=[{id:"2",name:"企业管理员"},{id:"3",name:"普通成员"}].concat(e.data.result.list);t.setState({roleList:e})})},a.getDataList=function(){var t=this;r.h.post("team/list",{id:this.props.location.query.id}).then(function(e){t.setState({data:e.data.result})})},a.getTeamList=function(){var t=this;r.h.post("team/other/list",{users:[this.props.location.query.id]}).then(function(e){t.setState({teamList:e.data.result})})},a.onChange=function(a,i){var n=this;switch(a){case"status":r.h.post("/user/operate",{id:n.props.location.query.id,status:i,username:n.state.form.name}).then(function(e){var t;n.setState({form:Object.assign(n.state.form,((t={})[a]=i,t))}),s.Z.success("操作成功!")});break;case"roleId":!function(){n.state.roleMap;r.h.post("/user/role/update",{roleId:i,id:n.props.location.query.id,username:n.state.form.name}).then(function(e){var t;n.setState({form:Object.assign(n.state.form,((t={})[a]=i,t))}),s.Z.success("操作成功!")})}()}},a.competeChange=function(){var e,t=this.state,a=t.form,i=t.testForm,n=!1;for(e in i)i[e]!==a[e]&&(n=!0);return n||s.Z.warning("没有任何改动!"),n},a.convertImgToBase64=function(a,i){var n=document.createElement("CANVAS"),r=n.getContext("2d"),s=new Image;return s.crossOrigin="Anonymous",new Promise(function(t,e){s.onload=function(){n.height=s.height,n.width=s.width,r.drawImage(s,0,0);var e=n.toDataURL(i||"image/png");t(e),n=null},s.src=a})},a.getBase64=function(e){var r=new Image;if(r.crossOrigin="",r.src=e)return new Promise(function(n,e){r.onload=function(){var e,t,a,i;n((e=r,(i=document.createElement("canvas")).width=t||e.width,i.height=a||e.height,i.getContext("2d").drawImage(e,0,0,i.width,i.height),i.toDataURL()))}})},a.uploadDefault=function(e){var t=this,e=this.state.profilePicList[e],e=h(36219)("./profile_pic_0"+e+".png");this.getBase64(e).then(function(e){t.setState({cropPrePic:e}),t.cropConfirm(e)})},a._crop=function(){var e=this.cropper.getCroppedCanvas().toDataURL();this.setState({cropPrePic:e})},a.dataURLtoFile=function(e,t){for(var a=e.split(","),e=a[0].match(/:(.*?);/)[1],i=atob(a[1]),n=new Uint8Array(r),r=i.length;r--;)n[r]=i.charCodeAt(r);return new File([n],t,{type:e})},a.cropConfirm=function(a){var i=this;this.setState({cropLoading:!0},function(e){var t=window.location.hostname+"/-72_72.png",t={base64Code:a,fileName:t,userId:i.props.location.query.id},t=JSON.stringify(t);r.h.post("/upload/user/head",t).then(function(e){s.Z.success(e.data.msg),i.getUser(!0,e.data.result+"?_="+(new Date).getTime())})})},a.resetPass=function(){var t=this;r.h.post("invite/password/reset",{email:this.props.location.query.email}).then(function(e){s.Z.success("已向"+t.props.location.query.email+"邮箱发送重置密码邮件，请提醒该用户查收邮件。")})},a.updateName=function(e){var t=this,a=this.state.form;this.setState({form:Object.assign(a,{name:e})},function(e){r.h.post("settings/username/update",{username:a.name,id:t.props.location.query.id}).then(function(e){s.Z.success("修改成功")})})},a.updateRemark=function(e){var a=this,t=this.state.form;this.setState({form:Object.assign(t,{remark:e})},function(e){r.h.post("/user/remark/update",{remark:t.remark,id:a.props.location.query.id}).then(function(e){s.Z.success("修改成功");var t=a.state.form;t.remark=t.remark||"无",a.setState({form:t})})})},a.selectTeam=function(e){var t=this;r.h.post("team/user/add",{users:[this.props.location.query.id],id:e}).then(function(e){t.getDataList(),t.getTeamList()})},a.delTeam=function(e){var t=this;g.MessageBox.confirm("确认从该团队中移出此用户?","提示",{type:"warning"}).then(function(){r.h.post("team/user/remove",{users:[t.props.location.query.id],id:e}).then(function(e){t.getDataList(),t.getTeamList()})})},a.render=function(){var a=this,e=this.state,t=e.form,i=e.rules,n=e.roleList,r=e.profilePic,s=e.statusList,o=e.changeProfilePic,c=e.profilePicList,l=e.cropShow,p=e.cropLoading,m=e.uploadPic,u=e.columns,d=e.data,e=e.dialogVisible;return f().createElement("div",{className:"user-setting-container-wrap"},f().createElement(g.Layout.Row,{className:"user-setting-container"},f().createElement("div",{className:"profile-pic-cont",onClick:function(e){e.stopPropagation()}},f().createElement("div",{className:"profile-pic-wrap"},f().createElement("div",{className:"profile-pic",onClick:function(e){a.setState({changeProfilePic:!o})}},f().createElement("img",{src:r}),f().createElement("div",{className:"profile-hover"},"更换头像")),f().createElement(g.Form,{model:t,rules:i,ref:function(e){return a.form=e},labelWidth:"78px",labelPosition:"left"},f().createElement(g.Form.Item,{label:"用户名",prop:"name"},f().createElement(b.Z,{id:"editFilter",className:"user-name",value:t.name,confirm:this.updateName.bind(this)})),f().createElement(g.Form.Item,{label:"邮箱",prop:"email"},f().createElement("div",{style:{paddingLeft:"12px",textAlign:"left"}},t.email)),f().createElement(g.Form.Item,{label:"角色",prop:"roleId"},f().createElement(g.Select,{className:"hover-visible",value:t.roleId,onChange:this.onChange.bind(this,"roleId"),placeholder:""},n&&n.map(function(e,t){return f().createElement(g.Select.Option,{key:t,label:e.name,value:e.id},e.name)}))),f().createElement(g.Form.Item,{label:"状态",prop:"job"},f().createElement(g.Select,{className:"hover-visible",value:t.status,onChange:this.onChange.bind(this,"status"),placeholder:""},s&&s.map(function(e,t){return f().createElement(g.Select.Option,{key:t,label:e.name,value:e.id},e.name)}))),f().createElement(g.Form.Item,{label:"备注",prop:"remark"},f().createElement(b.Z,{id:"editFilterRemark",className:"user-name",inputType:"remark",name:"备注",value:t.remark,confirm:this.updateRemark.bind(this)}))),f().createElement(g.Dialog,{title:"",size:"tiny",visible:e,onCancel:function(){return a.setState({dialogVisible:!1})},lockScroll:!0},f().createElement(g.Dialog.Body,null,f().createElement("div",{className:"dialog-title"},f().createElement("i",{className:"icon-cem_warning",style:{color:"#D96969"}}),"确定删除该用户？")),f().createElement(g.Dialog.Footer,{className:"dialog-footer"},f().createElement(g.Button,{type:"primary",onClick:this.deleteUser},"确定"),f().createElement(g.Button,{onClick:function(){return a.setState({dialogVisible:!1})}},"取消"))),l&&f().createElement(E.Z,{src:m,title:"上传自定义头像",loading:p,tip:"仅支持png格式，文件小于1M，建议为正方形",confirm:this.cropConfirm.bind(this),cancel:function(e){a.setState({cropShow:!1})},borderRadius:!0}),f().createElement("div",{className:"operations"},f().createElement("span",{onClick:function(e){return a.resetPass()}},"重置密码"))),o&&f().createElement("div",{className:"profile-pic-select"},f().createElement("h4",{className:"cont-title"},f().createElement("span",null,"修改头像"),f().createElement("i",{className:"crop-close select-del",onClick:function(e){a.setState({changeProfilePic:!1})}})),f().createElement("div",{className:"marl-15"},f().createElement("ul",{className:"profile-pic-list"},c.map(function(e,t){return f().createElement("div",{className:"profile-pic-item",key:t,onClick:function(e){a.uploadDefault(t)}},f().createElement("img",{src:h(36219)("./profile_pic_0"+e+".png")}))}))),f().createElement("div",{className:"upload-wrap"},f().createElement("label",{className:"upload-btn",htmlFor:"uploadProfilePic"},f().createElement("i",{className:"el-icon-plus"}),"上传自定义头像"),f().createElement("input",{type:"file",hidden:!0,id:"uploadProfilePic",accept:"images/png",onChange:this.profilePicUpload}),f().createElement("div",{className:"upload-tip"},"仅支持png格式，文件小于1M，建议为正方形"))))),f().createElement("div",{className:"table"},f().createElement("div",{className:"top"},f().createElement("p",null,"团队"),f().createElement(g.Select,{value:this.state.selTeam.id,onChange:this.selectTeam.bind(this),placeholder:"添加到团队"},this.state.teamList&&this.state.teamList.map(function(e,t){return f().createElement(g.Select.Option,{key:t,label:e.name,value:e.id},e.name)}))),f().createElement(v.Z,{columns:u,data:d})))},e}(t.Component)},5747:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var i=a(85354),r=a.n(i),n=a(67294),f=a.n(n),t=a(45697),i=a.n(t),t=a(94184),g=a.n(t),v=a(55761),E=a(92360),s=a(5133),o=function(n){function e(){for(var e,t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return(e=n.call.apply(n,[this].concat(a))||this).state={src:e.props.src,preCropPic:"",once:!0,fileName:e.props.fileName},e}r()(e,n);var t=e.prototype;return t.UNSAFE_componentWillReceiveProps=function(e,t){this.setState({uploadPic:e.uploadPic},function(e){})},t._crop=function(){var e=this.props.refName,e=this.refs[e].getCroppedCanvas().toDataURL();this.setState({preCropPic:e})},t.profilePicUpload=function(e){var t=this.props.reUpload,a=this,i=e.target.files[0];if(1024<i.size/1024)return s.Z.error("文件不能大于1M"),!1;e=new FileReader;e.readAsDataURL(i),e.onload=function(e){a.setState({src:e.target.result,fileName:i.name}),t&&t(e.target.result)}},t.render=function(){var e=this.state,t=e.src,a=e.preCropPic,i=this.props,n=i.title,r=i.tip,s=i.style,o=i.className,c=i.loading,l=i.refName,p=i.aspectRatio,m=i.accept,u=i.confirm,d=i.cancel,e=i.borderRadius,h=this.state.fileName,i="cropper-pic-wrap";o&&(i=g()("cropper-pic-wrap",o));o=g()("pre-pic",{"border-radius":e}),e=1;return p&&"[object Number]"===Object.prototype.toString.call(e)&&(e=p),f().createElement("div",{className:i},f().createElement("div",{className:"crop-wrap"},f().createElement(E.Loading,{loading:c},f().createElement("div",{className:"crop-title"},f().createElement("span",null,n),f().createElement("i",{className:"icon-cem_cancel",onClick:function(){return d(a)}})),f().createElement("div",{className:"crop-cont"},f().createElement(v.Z,{ref:l,src:t,style:s,aspectRatio:e,guides:!1,crop:this._crop.bind(this)}),f().createElement("div",{className:"option-cont"},f().createElement("div",{className:"pre-cont"},f().createElement("img",{className:o,src:a})),f().createElement("div",{className:"pre-tip"},"预览"),f().createElement("div",{className:"reupload-cont"},f().createElement(E.Button,{type:"primary",onClick:function(){return document.getElementById("reupload").click()}},"重新上传"),f().createElement("input",{type:"file",id:"reupload",hidden:!0,accept:m,onChange:this.profilePicUpload.bind(this)})))),f().createElement("p",{className:"crop-tip"},r),f().createElement("div",{className:"crop-option"},f().createElement(E.Button,{onClick:function(){d(a)}},"取消"),f().createElement(E.Button,{type:"primary",onClick:function(){u(a,h)}},"确定")))),f().createElement("div",{className:"crop-bg"}))},e}(n.Component);o.propTypes={show:i().bool,title:i().string,tip:i().string,src:i().string,refName:i().string,accept:i().string,confirm:i().func,cancel:i().func,reUpload:i().func,borderRadius:i().bool,loading:i().bool,fileName:i().string},o.defaultProps={show:!1,src:"",title:"上传图片",accept:"images/png",tip:"仅支持png格式，文件小于1M",refName:"cropper"+(new Date).getTime(),style:{height:263,width:263},borderRadius:!1,loading:!1,fileName:""}},88308:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var i=a(85354),n=a.n(i),r=a(67294),l=a.n(r),t=a(45697),i=a.n(t),p=a(5133),m=a(43036),t=a(94184),u=a.n(t),t={value:i().string,id:i().any.isRequired,enter:i().bool,blurFun:i().func,name:i().string,empty:i().bool,placeholder:i().string,type:i().string,confirmNoChange:i().func},i={value:"",enter:!0,name:"名称",empty:!1,placeholder:"",cancel:function(e,t){console.log("取消")},confirm:function(e,t){console.log("确定后的value:"+e)},type:"normal"},r=function(a){function e(e){var t=a.call(this,e)||this;t.enter=function(e){t.props.enter&&13===e.keyCode&&t.confirmEdit()};e=t.props.value;return t.state={isEdit:!1,curValue:e||"",lastVal:e||"",hover:!1,canEdit:!1},t}n()(e,a);var t=e.prototype;return t.UNSAFE_componentWillReceiveProps=function(e){var t=this;e.value!==this.state.lastVal&&e.value&&this.setState({curValue:e.value,lastVal:e.value}),!0!==e.canEdit||this.state.canEdit||this.setState({canEdit:!0},function(e){t.toEdit()})},t.componentDidMount=function(){var i=this;document.body.addEventListener("click",function(e){var t=e.target||window.event.srcElement,a=i.props.className,e="edit-input-wrap";!function(e,t){for(var a=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;e&&!a.call(e,t);)e=e.parentElement;return e}(t,"."+(e=a?a.split(" ")[0]:e))&&i.cancelEdit()})},t.changeName=function(){var e=this.props.id,e=document.getElementById(e).value;this.setState({curValue:e})},t.toEdit=function(){var e=this.state,t=e.isEdit,a=(e.canEdit,this.props.id);t||this.setState({isEdit:!0,hover:!0},function(e){var t=document.getElementById(a);setTimeout(function(){t.focus()})})},t.checkEdit=function(){"normal"===this.props.type&&this.toEdit()},t.cancelEdit=function(){var e=this.state,t=e.curValue,a=e.lastVal,i=e.isEdit,e=e.canEdit,n=this.props.cancel;i&&(e&&this.setState({canEdit:!1}),this.setState({isEdit:!1,hover:!1,curValue:a},function(e){n&&n(t,a)}))},t.borderShow=function(){var e=this.state.hover;"normal"!==this.props.type||e||this.setState({hover:!0})},t.borderHide=function(){var e=this.state,t=e.hover,e=e.isEdit;"normal"===this.props.type&&t&&!e&&this.setState({hover:!1})},t.confirmEdit=function(){var e=this.state,t=e.curValue,a=e.lastVal,i=e.canEdit,n=this.props,r=n.confirm,s=n.id,o=n.name,c=n.empty,e=n.confirmNoChange,n=n.inputType,l=document.getElementById(s);""!==String(t).replace(/\s/g,"")||c||"remark"===n?(""===String(t).replace(/\s/g,"")&&c||"remark"==n?(this.setState({isEdit:!1,hover:!1,lastVal:t},function(e){l.blur()}),r&&r(t,a)):a===t?this.setState({isEdit:!1,hover:!1},function(e){l.blur()}):(this.setState({isEdit:!1,hover:!1,lastVal:t},function(e){l.blur()}),r&&r(t,a)),i&&(e&&e(t),this.setState({canEdit:!1}))):(p.Z.warning(o+"不能为空"),this.setState({curValue:a},function(e){l.focus()}))},t.render=function(){var e=this.props,t=e.id,a=e.style,i=e.className,n=e.placeholder,r=this.state,s=r.isEdit,o=r.curValue,c=r.hover,e=u()(["edit-input-wrap",i]),r=u()(["edit-input-cont",{hover:c,"is-edit":s}]),i=u()(["edit-input",{disabled:!s}]);return l().createElement("div",{className:e,style:a},l().createElement("div",{className:r,onMouseEnter:this.borderShow.bind(this),onMouseLeave:this.borderHide.bind(this),onClick:this.checkEdit.bind(this)},l().createElement("input",{id:t,className:i,type:"text",value:o,title:o,placeholder:n,style:a,disabled:!s,onInput:this.changeName.bind(this),onKeyDown:this.enter.bind(this)}),c&&!s&&l().createElement(m.Z,{placement:"top",overlay:"编辑"},l().createElement("div",{className:"btn-wrap",title:"编辑"},l().createElement("i",{className:"name-edit edit-btn icon-cem_edit"}))),c&&s&&l().createElement("div",{className:"btn-wrap"},l().createElement(m.Z,{placement:"top",overlay:"取消"},l().createElement("i",{className:"cancel-edit edit-btn icon-cem_delete",onClick:this.cancelEdit.bind(this),title:"取消"})),l().createElement(m.Z,{placement:"top",overlay:"确认"},l().createElement("i",{className:"confirm-edit edit-btn icon-cem_check-out",onClick:this.confirmEdit.bind(this),title:"确认"})))))},e}(r.Component);r.propTypes=t,r.defaultProps=i;const s=r},36219:(e,t,a)=>{var i={"./profile_pic_01.png":23163,"./profile_pic_02.png":61020,"./profile_pic_03.png":77316,"./profile_pic_04.png":88482,"./profile_pic_05.png":46073,"./profile_pic_06.png":88339,"./profile_pic_07.png":52387,"./profile_pic_08.png":26950,"./profile_pic_09.png":54033};function n(e){e=r(e);return a(e)}function r(e){if(a.o(i,e))return i[e];e=new Error("Cannot find module '"+e+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return Object.keys(i)},n.resolve=r,(e.exports=n).id=36219}}]);