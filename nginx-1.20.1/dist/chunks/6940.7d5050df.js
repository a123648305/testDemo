(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[6940],{16940:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>h});var t=i(85354),n=i.n(t),t=i(67294),r=i.n(t),a=i(55815),l=i(61193),o=i(92360),s=i(5133),u=i(36144),c=function(t){function e(e){var i=t.call(this,e)||this;return i.handleSubmit=function(e){e.preventDefault(),i.refs.form.validate(function(e){if(!e)return s.Z.error("输入有误"),!1;var e=i.state.form,t=e.email,e=e.role;u.h.post("/invite/email/send",{email:t,roleId:e}).then(function(e){s.Z.info("已向"+t+"邮箱发送激活邮件，请提醒该用户查收邮件。"),i.setState({dialogVisible:!1})})})},i.state={dialogVisible:!1,labelPosition:"left",form:{email:"",role:""},rules:{email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:function(e,t,i){/^[\w-.]+@[\w-]+(.[\w_-]+)+$/.test(t)?i():i(new Error("邮箱格式不正确"))}}],role:[{required:!0,message:"请给该用户指定角色",trigger:"change"}]},roleList:[]},i}n()(e,t);var i=e.prototype;return i.onChange=function(e,t){var i;this.setState({form:Object.assign(this.state.form,((i={})[e]=t,i))})},i.getRoleList=function(){var t=this;u.h.get("/role/list").then(function(e){t.setState({roleList:[{name:"企业管理员",id:"2"},{name:"普通成员",id:"3"}].concat(e.data.result.list)})})},i.componentDidMount=function(){this.getRoleList()},i.render=function(){var e=this;return r().createElement("div",{className:"invitePeople"},r().createElement(o.Dialog,{title:"邀请用户",size:"tiny",visible:this.state.dialogVisible,onCancel:function(){return e.setState({dialogVisible:!1})}},r().createElement(o.Dialog.Body,null,r().createElement(o.Form,{model:this.state.form,rules:this.state.rules,ref:"form",labelPosition:this.state.labelPosition},r().createElement(o.Form.Item,{label:"邮箱",prop:"email"},r().createElement(o.Input,{value:this.state.form.email,onChange:this.onChange.bind(this,"email")})),r().createElement(o.Form.Item,{label:"角色",prop:"role"},r().createElement(o.Select,{value:this.state.form.rile,placeholder:"请分配角色",onChange:this.onChange.bind(this,"role")},this.state.roleList.map(function(e,t){return r().createElement(o.Select.Option,{key:e.id,label:e.name,value:e.id})}))))),r().createElement(o.Dialog.Footer,{className:"dialog-footer"},r().createElement(o.Button,{onClick:function(){return e.setState({dialogVisible:!1})}},"取 消"),r().createElement(o.Button,{type:"primary",onClick:this.handleSubmit},"确 定"))),r().createElement(o.Button,{type:"primary",onClick:function(){return e.setState({dialogVisible:!0})},className:"invite"},"邀请用户"))},e}(t.Component),m=[{title:"用户",url:"/account/user"},{title:"用户信息",url:"/account/user/userEdit"}],h=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){return r().createElement("div",{className:"user-container common-wrapper"},r().createElement(a.Z,{title:-1===this.props.location.pathname.indexOf("userEdit")?"用户":m,rightContent:-1===this.props.location.pathname.indexOf("userEdit")&&l.Z.hasAuthority("USER_EDIT")?r().createElement(c,null):null}),this.props.children)},t}(t.PureComponent)}}]);