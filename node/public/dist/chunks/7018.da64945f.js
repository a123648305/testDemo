(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[7018],{7018:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var t=n(85354),i=n.n(t),t=n(67294),o=n.n(t),a=n(92360),l=n(5133),r=n(36144),c=n(61193),s=function(e){function t(){var n=e.call(this)||this;return n.uploadExcel=function(e){n.state.uploadLink="excel/import",n.refs.uploadInput.click()},n.uploadBzy=function(e){n.refs.uploadBzyInput.click()},n.showDialog=function(e){n.setState({dialogVisible:!0})},n.reset=function(e){n.setState({dialogVisible:!1,projectId:""})},n.onChange=function(e){n.setState({projectId:e})},n.exportExcel=function(e){var t=n.state.projectId;r.h.post("/excel/connection/export",{projectId:t}).then(function(e){var t=e.data;2e4===t.code?((e=document.createElement("a")).href=t.result,e.click()):l.Z.error(t.msg)}),n.setState({dialogVisible:!1})},n.sendFile=function(e){var t=new FormData;t.append("file",e.target.files[0]),t.append("projectId",n.state.selProject.id),e.target.value="",r.v.post(n.state.uploadLink,t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){l.Z.success(e.data.result)}),n.setState({projectDialogVisible:!1})},n.sendBzyFile=function(e){var t=new FormData;t.append("file",e.target.files[0]),e.target.value="",r.v.post("excel/bzy_task/import",t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){l.Z.success(e.data.result)})},n.closeProjectDialog=function(e){n.setState({projectDialogVisible:!1})},n.importComment=function(e){null==n.state.selProject.id?l.Z.error("请选择导入评论的项目！"):(n.state.uploadLink="excel/import/comment",n.refs.uploadInput.click())},n.selectProject=function(e){n.setState({selProject:{id:e}})},n.state={dialogVisible:!1,projectId:"",projectDialogVisible:!1,projectList:[],selProject:{},upload:"excel/import"},n}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){var t=this;r.h.post("projects/list").then(function(e){t.state.projectList=e.data.result.list})},n.render=function(){var t=this,e=this.state.dialogVisible;return o().createElement("div",{style:{marginTop:"20px"}},o().createElement("input",{type:"file",ref:"uploadInput",hidden:!0,onChange:this.sendFile}),o().createElement("input",{type:"file",ref:"uploadBzyInput",hidden:!0,onChange:this.sendBzyFile}),c.Z.hasAuthority("PROJECT_EDIT")&&o().createElement(a.Button,{type:"primary",onClick:this.uploadBzy,className:"excel-btn"},"+   八爪鱼导入链接"),c.Z.hasAuthority("PROJECT_EDIT")&&o().createElement(a.Button,{type:"primary",onClick:this.uploadExcel,className:"excel-btn"},"+   Excel导入链接"),c.Z.hasAuthority("PROJECT_EDIT")&&o().createElement(a.Button,{type:"primary",onClick:this.showDialog,className:"excel-btn"},"+   导出项目链接"),c.Z.hasAuthority("PROJECT_EDIT")&&o().createElement(a.Button,{type:"primary",onClick:function(e){t.setState({projectDialogVisible:!0})},className:"excel-btn"},"+   导入评论"),o().createElement(a.Dialog,{title:"选择项目",size:"400",visible:this.state.projectDialogVisible,onCancel:this.closeProjectDialog.bind(this)},o().createElement(a.Dialog.Body,null,o().createElement(a.Select,{value:this.state.selProject.id,placeholder:"全部",onChange:this.selectProject},this.state.projectList.map(function(e,t){return o().createElement(a.Select.Option,{key:t,label:e.name,value:e.id},e.name)}))),o().createElement(a.Dialog.Footer,{className:"dialog-footer"},o().createElement(a.Button,{onClick:this.closeProjectDialog.bind(this)},"取 消"),o().createElement(a.Button,{type:"primary",onClick:this.importComment},"确 定"))),o().createElement(a.Dialog,{title:"输入项目Id",size:"tiny",visible:e,onCancel:this.reset.bind(this)},o().createElement(a.Dialog.Body,null,o().createElement(a.Form,null,o().createElement(a.Form.Item,{label:"项目Id"},o().createElement(a.Input,{placeholder:"请输入项目Id",type:"text",onChange:this.onChange.bind(this)})))),o().createElement(a.Dialog.Footer,{className:"dialog-footer"},o().createElement(a.Button,{onClick:this.reset.bind(this)},"取 消"),o().createElement(a.Button,{type:"primary",onClick:this.exportExcel},"确 定"))))},t}(t.Component)}}]);