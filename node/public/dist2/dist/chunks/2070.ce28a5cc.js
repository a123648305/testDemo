(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[2070],{2070:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var t=n(85354),a=n.n(t),t=n(67294),r=n.n(t),l=n(36144),u=function(t){function e(e){e=t.call(this,e)||this;return e.state={app:{name:"",author:"",date:""},server:{name:"",author:"",date:""}},e}a()(e,t);var n=e.prototype;return n.componentDidMount=function(){this.fetchVersionInfo()},n.fetchVersionInfo=function(){var c=this;l.h.get("/about").then(function(e){var t=e.status,e=e.data;if(200<=t&&t<=304){var n=e.result;if(n&&0<n.length)for(var a=0;a<n.length;a++){var r=n[a],l=r.type,u=r.name,o=r.author,r=r.date;"app"===l?c.setState({app:{name:u,author:o,date:r}}):c.setState({server:{name:u,author:o,date:r}})}}})},n.render=function(){var e=this.state,t=e.app,e=e.server;return r().createElement("table",{className:"version-info-table"},r().createElement("caption",null,r().createElement("h1",null,"版本信息")),r().createElement("th",null,r().createElement("td",null),r().createElement("td",null,"版本名称"),r().createElement("td",null,"最后修改人"),r().createElement("td",null,"最后修改时间")),r().createElement("tr",null,r().createElement("td",null,"服务端（Server）"),r().createElement("td",{title:t.name}," ",e.name),r().createElement("td",{title:t.author},e.author),r().createElement("td",{title:t.date},e.date)))},e}(t.PureComponent)}}]);