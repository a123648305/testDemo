(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[7740],{81266:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"html-14b04c"},57740:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>n});function a(e){return e=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),null!=(e=window.location.search.substr(1).match(e))?unescape(e[2]):null}var t=l(67154),r=l.n(t),t=l(85354),s=l.n(t),t=l(67294),i=l.n(t),u=l(36144),c=l(92360),o=l(61409),n=function(e){function t(){var s=e.call(this)||this;return s.fetchData=function(){var e=s.state,t=e.id,e=e.uniqueKey;u.h.post("/nps/find-for-answer-page",{id:t,uniqueKey:e}).then(function(e){e.data.result||o.mW.push("/notFind"),"EXPIRE"!==e.data.result.status&&!e.data.result.submitted||s.setState({step:3}),s.setState({show:e.data.result,loading:!1,uniqueKey:e.data.result.uniqueKey})})},s.renderStep1=function(){var e=s.state,n=e.submit,a=e.submit.score,e=e.show;return i().createElement("div",{className:"wrap"},i().createElement("header",null,i().createElement("img",{src:e.logoUrl||l(81266),alt:""})),i().createElement("h4",null,e.title),i().createElement("h5",null,e.description),i().createElement("div",{className:"line"}),i().createElement("div",{className:"content"},i().createElement("div",{className:"title"},"1."+e.scoreQuestion),i().createElement("div",{className:"score"},i().createElement("ul",null,new Array(11).fill(0).map(function(e,t){return i().createElement("li",{className:a===t?"sel":"",key:t,onClick:function(){return s.setState({submit:r()({},n,{score:t})})}},t)})),i().createElement("p",null,i().createElement("span",null,"0：不可能"),i().createElement("span",null,"10：极有可能")))),i().createElement(c.Button,{disabled:null===a,className:"button",type:"primary",onClick:function(){return s.setState({step:2})}},"下一题(1/2)"))},s.renderStep2=function(){var e=s.state,t=e.submit,e=e.show;return i().createElement("div",{className:"wrap_2"},i().createElement("h4",null,"2."+e.adviceQuestion.replace(/#分值#/g," "+t.score+"分 ")),i().createElement("div",{className:"content"},i().createElement("textarea",{placeholder:"您的宝贵意见将是我们改进的方向",onChange:function(e){return s.setState({submit:r()({},t,{advice:e.target.value})})}})),i().createElement(c.Button,{className:"button",type:"primary",disabled:!t.advice&&null===t.score,onClick:s.submit},"提交"))},s.finish=function(){return i().createElement("div",{className:"wrap_3 "+("EXPIRE"===s.state.show.status?"expire":"")},i().createElement("header",null,i().createElement("i",{className:"EXPIRE"===s.state.show.status?"icon-cem_cancel":"icon-cem_complete1"})),i().createElement("h4",null,"EXPIRE"===s.state.show.status?"该问卷已过期":"感谢您的反馈"),i().createElement("h5",null,"您的建议是我们改进的方向"))},s.submit=function(){var e,t,n;"DISPATCHED"===s.state.show.status?(e=(n=s.state).submit,t=n.id,n=n.uniqueKey,s.setState({loading:!0}),u.h.post("/nps/submit",r()({},e,{id:t,uniqueKey:n})).then(function(){s.setState({loading:!1,step:3})})):s.setState({step:3})},s.state={loading:!0,step:1,show:{logoUrl:"",title:"IQOO Neo 手机客户推荐度调查",description:"我用百分努力，期待您的10分推荐，感谢您的宝贵意见",scoreQuestion:"您向朋友或同事推荐我们的可能性有多大？",adviceQuestion:"能告诉我们你给9分的理由吗？",status:""},submit:{score:null,advice:""},id:a("id")||"",uniqueKey:a("uniqueKey")||""},s}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.fetchData()},n.render=function(){var e=this.state,t=e.step,n=e.loading,e=e.show;return i().createElement("div",{className:"nps_answer"},n&&i().createElement(c.Loading,{loading:!0,fullscreen:!0}),i().createElement("div",{className:"wrap_base"},"UN_DISPATCH"===e.status&&3!==t&&i().createElement("div",{className:"tips"},"提示：当前为预览页面，回答将不记入结果"),!n&&(1===t?this.renderStep1():2===t?this.renderStep2():this.finish())))},t}(t.Component)}}]);