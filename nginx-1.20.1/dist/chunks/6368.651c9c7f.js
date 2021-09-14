(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[6368],{1242:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var t=n(67154),s=n.n(t),t=n(85354),a=n.n(t),t=n(67294),i=n.n(t),r=n(92360),o=n(5133),m=n(36144),u=n(12518),l=function(l){function e(){for(var e,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=l.call.apply(l,[this].concat(n))||this).state={form:{host:"",username:"",password:null,subjectPrefix:""},formClone:{},disabled:!0,rules:{host:[{required:!0,message:"请输入发件箱类型",trigger:"blur"}],username:[{required:!0,message:"请输入发件人",trigger:"blur"},{validator:function(e,t,n){/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(t)?n():n(new Error("请输入正确的发件地址"))}}],password:{required:!0,message:"请输入密码",trigger:"blur"}},sendDialogVisible:!1,sendMailForm:{sendTo:"",subject:"",text:""},options:[{value:"smtp.exmail.qq.com",label:"腾讯企业邮箱"},{value:"smtp.163.com",label:"163邮箱"},{value:"smtp.mail.yahoo.com.cn",label:"yahoo邮箱"},{value:"smtp.sohu.com",label:"sohu邮箱"},{value:"smtp.qq.com",label:"QQ邮箱"},{value:"smtp.gmail.com",label:"Gmail邮箱"}]},e}a()(e,l);var t=e.prototype;return t.onChange=function(e,t){var n;this.setState({form:Object.assign(this.state.form,((n={})[e]=t,n))})},t.sendMailOnChange=function(e,t){var n;this.setState({sendMailForm:Object.assign(this.state.sendMailForm,((n={})[e]=t,n))})},t.handleNameSubmit=function(){var t=this;this.refs.form.validate(function(e){return!!e&&void m.h.post("/mail/addConfig",s()({},t.state.form)).then(function(e){t.setState({disabled:!0,formClone:JSON.parse(JSON.stringify(t.state.form))})})})},t.cancel=function(){this.refs.form.resetFields(),this.setState({disabled:!0,form:JSON.parse(JSON.stringify(this.state.formClone))})},t.edit=function(){this.setState({disabled:!1})},t.sendEmailDialog=function(){this.setState({sendDialogVisible:!0})},t.resetForm=function(){this.setState({sendDialogVisible:!1,sendMailForm:{sendTo:"",subject:"",text:""}})},t.sendMail=function(){var e,t=this,n=this.state.sendMailForm;for(e in n)if(""===n[e].trim())return void o.Z.warning("请填写必要信息");/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(n.sendTo)?m.h.post("/mail/send",s()({},n)).then(function(e){o.Z.success(e.data.msg),t.setState({sendDialogVisible:!1,sendMailForm:{sendTo:"",subject:"",text:""}},function(e){return log(t.state.form)})}):o.Z.warning("请填写正确的邮箱地址")},t.componentDidMount=function(){var a=this;m.h.get("/mail/loadConfig").then(function(e){var t,n=e.data.result;for(t in n)null!==n[t]&&(n[t]=String(n[t]));a.setState({form:s()({},n,{password:null===n.password?null:""}),formClone:s()({},n,{password:null===n.password?null:""})})})},t.render=function(){var e=this.state,t=e.form,n=e.disabled,a=e.sendMailForm,l=e.sendDialogVisible,s=(s=this.state.options.filter(function(e){return e.value===t.host})[0])?s.label:"",e=document.documentElement.clientHeight-46-48-24;return i().createElement("div",{className:"outboxSettingWrap common-wrapper"},i().createElement(u.Z,{title:"发件箱配置"}),i().createElement("div",{className:"outboxSetting common-padding-12"},i().createElement("div",{style:{minHeight:e,backgroundColor:"#fff"}},i().createElement(r.Form,{model:t,rules:this.state.rules,className:"outboxForm",ref:"form",labelWidth:"120px",labelPosition:"left",width:"500px"},i().createElement(r.Form.Item,{label:"发件箱类型",prop:"host"},n?i().createElement("span",null,s):i().createElement("p",null,i().createElement(r.Select,{value:t.host,onChange:this.onChange.bind(this,"host")},this.state.options.map(function(e){return i().createElement(r.Select.Option,{key:e.value,label:e.label,value:e.value})})))),i().createElement(r.Form.Item,{label:"发件人",prop:"username"},i().createElement(r.Input,{onChange:this.onChange.bind(this,"username"),disabled:n,value:t.username})),i().createElement(r.Form.Item,{label:"授权码",prop:"password"},n?i().createElement("span",null,null===t.password?"":"******"):i().createElement(r.Input,{type:"password",onChange:this.onChange.bind(this,"password"),disabled:n,value:t.password})),i().createElement(r.Form.Item,{label:"标题前缀",prop:"subjectPrefix"},i().createElement(r.Input,{onChange:this.onChange.bind(this,"subjectPrefix"),disabled:n,value:t.subjectPrefix})),i().createElement("div",{className:"btn"},n?i().createElement("p",null,i().createElement(r.Button,{type:"primary",onClick:this.sendEmailDialog.bind(this)},"发送测试邮件"),i().createElement(r.Button,{type:"primary",onClick:this.edit.bind(this)},"编辑")):i().createElement("p",null,i().createElement(r.Button,{type:"primary",onClick:this.handleNameSubmit.bind(this)},"确认"),i().createElement(r.Button,{onClick:this.cancel.bind(this)},"取消"))))),i().createElement(r.Dialog,{title:"发送邮件",size:"tiny",visible:l,onCancel:this.resetForm.bind(this)},i().createElement(r.Dialog.Body,null,i().createElement(r.Form,{model:a},i().createElement(r.Form.Item,{label:"发送至",prop:"sendTo"},i().createElement(r.Input,{onChange:this.sendMailOnChange.bind(this,"sendTo"),value:a.sendTo}),i().createElement("i",null,"*")),i().createElement(r.Form.Item,{label:"主题",prop:"subject"},i().createElement(r.Input,{onChange:this.sendMailOnChange.bind(this,"subject"),value:a.subject}),i().createElement("i",null,"*")),i().createElement(r.Form.Item,{label:"内容",prop:"text"},i().createElement(r.Input,{placeholder:"输入内容",type:"textarea",value:a.text,onChange:this.sendMailOnChange.bind(this,"text")}),i().createElement("i",null,"*")))),i().createElement(r.Dialog.Footer,{className:"dialog-footer"},i().createElement(r.Button,{onClick:this.resetForm.bind(this)},"取 消"),i().createElement(r.Button,{type:"primary",onClick:this.sendMail.bind(this)},"确 定")))))},e}(t.Component)}}]);