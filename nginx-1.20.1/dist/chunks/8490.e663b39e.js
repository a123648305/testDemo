"use strict";(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[8490],{98490:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var i=n(87462),o=n(94578),a=n(67294),c=n(92360),r=n(5133),l=n(49722),s=n(60530),d=n(61409),m=function(e){function t(t){var n;return(n=e.call(this,t)||this).state=n.props.location.state,n.getTopicData=function(e){l.h.post("/projects/connection/search",{id:n.id}).then((function(t){for(var o=t.data.result,a=o.titles,c=0;c<a.length;c++){var r=a[c].child;if(r){var l=r.id,s=r.name,d=r.values;a.push({id:l,name:s,values:d})}}var m={titles:o.titles,data:o.data,sourceList:o.sources,selSource:{id:e}};n.setState((0,i.Z)({},m),(function(){n.onChangeSource(e||o.sources[0].id),n.getConnectionDetail()}))}))},n.onChangeSource=function(e){n.setState({selSource:{id:e}}),n.resetForm(),l.h.post("/source/sourcechild/config",{sourceId:e}).then((function(e){var t=[],i=[];n.sourceData=e.data.result,"DEFAULT"===e.data.result[0].sourceChildName?(t=e.data.result[0].viewConfig,i=[]):e.data.result.map((function(e,t){i.push({sourceChildId:e.sourceChildId,sourceChildName:e.sourceChildName,sourceChildShowName:e.sourceChildShowName})})),n.setState({config:t,childSource:i})}))},n.onChangeTitles=function(e,t,i){var o=n.state.selTitles;i&&(o[e]={id:i,topicTypeId:t},n.setState({selTitles:o}))},n.filterId=null,n.filterMethod=function(e,t,i){var o=n.state,a=o.selTitles,c=o.titles.filter((function(e){return e.id==t}))[0].values.filter((function(e){return e.name==i}));0==c.length?(a[e]=i?{id:"",name:i,topicTypeId:t}:null,n.filterId&&clearTimeout(n.filterId)):a[e]={id:c[0].id,topicTypeId:t},n.filterId=setTimeout((function(){n.setState({selTitles:a})}),500)},n.onChangeName=function(e,t){var i;n.setState(((i={})[e]=t,i))},n.selectChileSource=function(e){var t=n.sourceData.length>0&&n.sourceData.filter((function(t){return t.sourceChildId==e}))[0],i=t?t.viewConfig:[];n.setState({selChildSource:e,config:i})},n.keydownHandle=function(e){var t=n.state,i=t.key,o=t.keyWord;32==e.keyCode&&i.trim()&&(o.push(i.trim()),n.setState({keyWord:o,key:""}))},n.cancel=function(){d.mW.go(-1)},n.confirm=function(){var e=n.state,t=e.key,i=e.name,o=e.selSource,a=e.selChildSource,c=e.childSource,s=e.config,m=e.titles,u=e.selTitles,p=e.keyWord,h=!0;void 0!=o.id&&""!=o.id||(r.Z.warning("\u8bf7\u9009\u62e9\u6570\u636e\u6765\u6e90"),h=!1),""==a&&c.length>0&&(r.Z.warning("\u8bf7\u9009\u62e9\u5b50\u6765\u6e90"),h=!1),s.length>0&&s.map((function(e){"name"==e.itemProperty.name&&""==i?(r.Z.warning("\u8bf7\u586b\u5199"+e.itemProperty.showName),h=!1):"key"==e.itemProperty.name&&""==t&&(r.Z.warning("\u8bf7"+("input"==e.itemType?"\u586b\u5199":"\u9009\u62e9")+e.itemProperty.showName),h=!1)}));var f=u.map((function(e,t){return e&&e.id?(e.name=m.filter((function(t){return e.topicTypeId==t.id}))[0].values.filter((function(t){return e.id==t.id}))[0].name,e):{name:e&&e.name||"",id:"",topicTypeId:m[t].id}})),y=c.length>0&&c.filter((function(e){return e.sourceChildId==a}))[0].sourceChildShowName;if(h){var g={key:0==p.length?t:p.join(","),name:i,projectId:n.id,sourceChildId:a,sourceChildName:y||"",sourceId:o.id,topics:f},S="/projects/connection/add";"edit"==n.type&&(g.id=n.connectionId,S="/connection/update"),n.setState({loading:!0}),l.h.post(S,g).then((function(e){n.setState({loading:!1}),r.Z.success(e.data.msg),d.mW.push({pathname:"/account/project/comment",state:{id:n.props.location.state.id,name:n.props.location.state.projectName}})})).catch((function(e){n.setState({loading:!1})}))}},n.confirm1=function(){var e=n.state,t=e.key,i=e.name,o=e.selSource,a=e.selChildSource,c=e.childSource,s=e.config,m=e.titles,u=e.selTitles,p=e.keyWord,h=!0;void 0!=o.id&&""!=o.id||(r.Z.warning("\u8bf7\u9009\u62e9\u6570\u636e\u6765\u6e90"),h=!1),""==a&&c.length>0&&(r.Z.warning("\u8bf7\u9009\u62e9\u5b50\u6765\u6e90"),h=!1),s.length>0&&s.map((function(e){"name"==e.itemProperty.name&&""==i?(r.Z.warning("\u8bf7\u586b\u5199"+e.itemProperty.showName),h=!1):"key"==e.itemProperty.name&&""==t&&(r.Z.warning("\u8bf7"+("input"==e.itemType?"\u586b\u5199":"\u9009\u62e9")+e.itemProperty.showName),h=!1)}));var f=u.map((function(e,t){return e&&e.id?(e.name=m.filter((function(t){return e.topicTypeId==t.id}))[0].values.filter((function(t){return e.id==t.id}))[0].name,e):{name:e&&e.name||"",id:"",topicTypeId:m[t].id}})),y=c.length>0&&c.filter((function(e){return e.sourceChildId==a}))[0].sourceChildShowName;if(h){var g={key:0==p.length?t:p.join(","),name:i,projectId:n.id,sourceChildId:a,sourceChildName:y||"",sourceId:o.id,topics:f},S="/projects/connection/add/test";"edit"==n.type&&(g.id=n.connectionId,S="/connection/update"),n.setState({loading:!0}),l.h.post(S,g).then((function(e){n.setState({loading:!1}),r.Z.success(e.data.msg),d.mW.push({pathname:"/account/project/comment",state:{id:n.props.location.state.id,name:n.props.location.state.projectName}})})).catch((function(e){n.setState({loading:!1})}))}},n.state={selSource:[],sourceList:[],titles:[],data:[],config:[],childSource:[],selChildSource:"",selTitles:[],name:"",key:"",sourceChildName:"",sourceChildId:"",projectId:"",keyWord:[],loading:!1},n}(0,o.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.props.location.state,t=e.sourceId,n=e.type,i=e.connectionId,o=e.id,a=e.filterModel;this.filterModel=a&&a.filterModel,this.id=o,this.connectionId=i,this.type=n,a?this.getTopicData(this.filterModel.source&&this.filterModel.source[0]):this.getTopicData(t)},n.getConnectionDetail=function(){var e=this;if(this.filterModel){var t=this.filterModel.connConfig,n=[];this.state.titles.map((function(e,i){var o=t?t.filter((function(t){return t.id==e.id}))[0]:[];n[i]=o?{id:o.values[0],topicTypeId:o.id}:{}})),this.setState({selTitles:n})}else l.h.post("/projects/connection/find",{id:this.connectionId}).then((function(t){var n=t.data.result,i=[];e.state.titles.map((function(e,t){var o=n.configDetails.filter((function(t){return t.topicTypeId==e.id}))[0];i[t]=o?{id:o.topicId,topicTypeId:o.topicTypeId}:{}})),e.setState({name:n.name,key:n.url,selSource:{id:n.sourceId},selTitles:i,selChildSource:n.sourceChildId},(function(){e.selectChileSource(e.state.selChildSource)}))}))},n.resetForm=function(){this.setState({config:[],childSource:[],selChildSource:"",selTitles:[],key:"",name:"",sourceChildId:"",sourceChildName:""})},n.delKeyWords=function(e){var t=this.state.keyWord;t.splice(e,1),this.setState({keyWord:t})},n.content=function(){var e=this,t=this.state,n=t.key,i=t.name,o=t.sourceList,r=t.titles,l=t.childSource,s=t.config,d=t.selChildSource,m=t.selSource,u=(t.selTitles,t.keyWord);return a.createElement("ul",{className:"connection-infos"},a.createElement("li",{className:"connection-info"},a.createElement("span",{className:"info-name"},"\u6570\u636e\u6765\u6e90"),a.createElement(c.Select,{className:"info-value connection-type",disabled:"edit"==this.type,value:m.id,onChange:this.onChangeSource.bind(this),placeholder:""},o&&o.map((function(e,t){return a.createElement(c.Select.Option,{key:e.id,label:e.name,value:e.id},e.name)})))),l.length>0&&a.createElement("li",{className:"connection-info"},a.createElement("span",{className:"info-name"},"\u5b50\u6765\u6e90"),a.createElement(c.Select,{value:d,onChange:this.selectChileSource.bind(this),disabled:"edit"==this.type},l.map((function(e){return a.createElement(c.Select.Option,{key:e.sourceChildId,label:e.sourceChildShowName,value:e.sourceChildId})})))),s.map((function(t,o){return"input"===t.itemType?a.createElement("li",{className:"connection-info",key:o},a.createElement("span",{className:"info-name"},t.itemProperty.showName),a.createElement("div",{className:"keyword-wrapper"},"key"==t.itemProperty.name&&u.map((function(t,n){return a.createElement("span",{title:t,className:"key-word",key:t+n},t,a.createElement("i",{onClick:function(){return e.delKeyWords(n)}},"\xd7"))})),a.createElement(c.Input,{className:"info-value connection-name",placeholder:t.itemProperty.placeholder,value:e.state[t.itemProperty.name]||("key"==t.itemProperty.name?n:i),onKeyDown:"111"==d?e.keydownHandle:null,onChange:e.onChangeName.bind(e,t.itemProperty.name),disabled:!("edit"!=e.type||"name"===t.itemProperty.name)}))):"select-dropdown"===t.itemType?a.createElement("li",{className:"connection-info",key:o},a.createElement("span",{className:"info-name"},t.itemProperty.showName),a.createElement(c.Select,{onChange:e.onChangeName.bind(e,t.itemProperty.name),value:e.state[t.itemProperty.name],disabled:!("edit"!=e.type||"name"===t.itemProperty.name)},t.itemProperty.selectItems.map((function(e,t){return e&&a.createElement(c.Select.Option,{key:e.id,label:e.name,value:e.id})})))):""})),r&&r.map((function(t,n){var i=e.state.selTitles;return a.createElement("li",{className:"connection-info titles",key:t.id},a.createElement("span",{className:"info-name"},t.name),a.createElement(c.Select,{className:"titles-select",filterMethod:function(i){return e.filterMethod(n,t.id,i)},filterable:!0,onChange:e.onChangeTitles.bind(e,n,t.id),value:i[n]&&i[n].id},t.values.map((function(e,t){return e&&(!i[n]||!i[n].name||i[n].name&&e.name.indexOf(i[n].name)>=0)&&a.createElement(c.Select.Option,{disabled:!1,key:e.id,label:e.name,value:e.id})})),i[n]&&!i[n].id&&t.values&&0===t.values.filter((function(e){return e.name===i[n].name})).length&&a.createElement(c.Select.Option,{className:"insertName",key:i[n].name,label:i[n].name,value:i[n].id})))})))},n.render=function(){var e="edit"==this.type?"\u7f16\u8f91":"\u6dfb\u52a0";return a.createElement("div",{className:"flex-col"},a.createElement("div",{className:"flex-other team-cont"},a.createElement(c.Loading,{classNmae:"loading",loading:this.state.loading},a.createElement(s.Z,{title:e+"\u94fe\u63a5",confirmName:"\u786e\u5b9a",content:this.content(),cancelFun:this.cancel.bind(this),confirmFun:this.confirm}))),a.createElement(c.Button,{onClick:this.confirm1,style:{display:"none"}},"test"))},t}(a.Component)},60530:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(94578),o=n(67294),a=n(45697),c=n.n(a),r=n(92360),l={picShow:c().bool,confirmShow:c().bool,cancelShow:c().bool,confirmFun:c().func,cancelFun:c().func},s={picShow:!0,src:n(13761),confirmShow:!0,cancelShow:!0,confirmFun:function(){},cancelFun:function(){},confirmName:"\u4e0b\u4e00\u6b65",cancelName:"\u53d6\u6d88"},d=function(e){function t(t){return e.call(this,t)||this}return(0,i.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.content,i=e.src,a=e.picShow,c=e.confirmName,l=e.confirmFun,s=e.confirmShow,d=e.cancelName,m=e.cancelFun,u=e.cancelShow;return o.createElement("div",{className:"confirm-model-wrap-main"},o.createElement("div",{className:"confirm-model"},o.createElement("h4",{className:"model-title"},t),o.createElement("div",{className:"model-content"},n),o.createElement("div",{className:"option-btns"},s&&o.createElement(r.Button,{type:"primary",onClick:l},c),u&&o.createElement(r.Button,{onClick:m},d))),a&&o.createElement("div",{className:"pic-wrap"},o.createElement("img",{src:i})))},t}(o.Component);d.propTypes=l,d.defaultProps=s;const m=d},13761:(e,t,n)=>{e.exports=n.p+"img/6f99ea838aec443b64e0.png"}}]);