(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[1086],{61086:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var t=s(85354),a=s.n(t),t=s(67294),r=s.n(t),n=s(36144),o=s(92360),l=s(5133),i=(s(61193),s(12518)),c=function(t){function e(e){var a=t.call(this,e)||this;return a.handleSubmit=function(e){e.preventDefault(),a.refs.form.validate(function(e){if(!e)return!1;var t=a.state.form,s=t.oldPass,e=t.pass,t=t.checkPass;t&&e===t&&n.h.post("settings/password/update",{oldPassword:s,newPassword:t}).then(function(e){l.Z.success("操作成功");var t,s=a.state.form;for(t in s)s[t]="";a.setState({form:s})})})},a.handleReset=function(e){var t=a.state.form;""===t.pass&&""===t.oldPass&&""===t.checkPass?l.Z.warning("没有任何改动!"):a.setState({form:Object.assign(a.state.form,{oldPass:"",pass:"",checkPass:""})}),a.refs.form.resetFields()},a.state={form:{oldPass:"",pass:"",checkPass:""},rules:{oldPass:[{message:"请输入原密码",trigger:"blur",required:!0}],pass:[{message:"请输入新密码",trigger:"blur",required:!0},{validator:function(e,t,s){t&&""!==a.state.form.checkPass&&a.refs.form.validateField("checkPass"),s()}}],checkPass:[{message:"请再次输入密码",trigger:"blur",required:!0},{validator:function(e,t,s){""!==t&&t!==a.state.form.pass?s(new Error("两次输入密码不一致!")):s()}}]}},a}a()(e,t);var s=e.prototype;return s.onChange=function(e,t){var s;this.setState({form:Object.assign(this.state.form,((s={})[e]=t,s))})},s.render=function(){var e=this.state.refresh;return r().createElement("div",null,r().createElement(i.Z,{title:"账号密码",refresh:e}),r().createElement(o.Layout.Row,{className:"personal-container"},r().createElement(o.Layout.Col,{span:"24"},r().createElement(o.Form,{model:this.state.form,rules:this.state.rules,ref:"form",labelWidth:"100px",labelPosition:"left"},r().createElement(o.Form.Item,{label:"密码",prop:"oldPass"},r().createElement(o.Input,{type:"password",value:this.state.form.oldPass,onChange:this.onChange.bind(this,"oldPass"),autoComplete:"off"})),r().createElement(o.Form.Item,{label:"新密码",prop:"pass"},r().createElement(o.Input,{type:"password",value:this.state.form.pass,onChange:this.onChange.bind(this,"pass"),autoComplete:"off"})),r().createElement(o.Form.Item,{label:"确认密码",prop:"checkPass"},r().createElement(o.Input,{type:"password",value:this.state.form.checkPass,onChange:this.onChange.bind(this,"checkPass"),autoComplete:"off"})),r().createElement(o.Form.Item,{className:"footer"},r().createElement(o.Button,{type:"primary",onClick:this.handleSubmit},"提交"),r().createElement(o.Button,{onClick:this.handleReset},"清空"))))))},e}(r().Component)}}]);