(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[8490],{92090:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});const i=n.p+"html-6f99ea"},98490:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var t=n(67154),r=n.n(t),t=n(85354),i=n.n(t),t=n(67294),m=n.n(t),u=n(92360),p=n(5133),h=n(36144),o=n(60530),f=n(61409),a=function(t){function e(e){var d=t.call(this,e)||this;return d.state=d.props.location.state,d.getTopicData=function(l){h.h.post("/projects/connection/search",{id:d.id}).then(function(e){for(var t=e.data.result,n=t.titles,i=0;i<n.length;i++){var o,a,c=n[i].child;c&&(o=c.id,a=c.name,c=c.values,n.push({id:o,name:a,values:c}))}e={titles:t.titles,data:t.data,sourceList:t.sources,selSource:{id:l}};d.setState(r()({},e),function(){d.onChangeSource(l||t.sources[0].id),d.getConnectionDetail()})})},d.onChangeSource=function(e){d.setState({selSource:{id:e}}),d.resetForm(),h.h.post("/source/sourcechild/config",{sourceId:e}).then(function(e){var t=[],n=[];d.sourceData=e.data.result,"DEFAULT"===e.data.result[0].sourceChildName?(t=e.data.result[0].viewConfig,n=[]):e.data.result.map(function(e,t){n.push({sourceChildId:e.sourceChildId,sourceChildName:e.sourceChildName,sourceChildShowName:e.sourceChildShowName})}),d.setState({config:t,childSource:n})})},d.onChangeTitles=function(e,t,n){var i=d.state.selTitles;n&&(i[e]={id:n,topicTypeId:t},d.setState({selTitles:i}))},d.filterId=null,d.filterMethod=function(e,t,n){var i=d.state,o=i.selTitles,i=i.titles.filter(function(e){return e.id==t})[0].values.filter(function(e){return e.name==n});0==i.length?(o[e]=n?{id:"",name:n,topicTypeId:t}:null,d.filterId&&clearTimeout(d.filterId)):o[e]={id:i[0].id,topicTypeId:t},d.filterId=setTimeout(function(){d.setState({selTitles:o})},500)},d.onChangeName=function(e,t){var n;d.setState(((n={})[e]=t,n))},d.selectChileSource=function(t){var e=0<d.sourceData.length&&d.sourceData.filter(function(e){return e.sourceChildId==t})[0],e=e?e.viewConfig:[];d.setState({selChildSource:t,config:e})},d.keydownHandle=function(e){var t=d.state,n=t.key,t=t.keyWord;32==e.keyCode&&n.trim()&&(t.push(n.trim()),d.setState({keyWord:t,key:""}))},d.cancel=function(){f.mW.go(-1)},d.confirm=function(){var e=d.state,t=e.key,n=e.name,i=e.selSource,o=e.selChildSource,a=e.childSource,c=e.config,l=e.titles,r=e.selTitles,e=e.keyWord,s=!0;null!=i.id&&""!=i.id||(p.Z.warning("请选择数据来源"),s=!1),""==o&&0<a.length&&(p.Z.warning("请选择子来源"),s=!1),0<c.length&&c.map(function(e){"name"==e.itemProperty.name&&""==n?(p.Z.warning("请填写"+e.itemProperty.showName),s=!1):"key"==e.itemProperty.name&&""==t&&(p.Z.warning("请"+("input"==e.itemType?"填写":"选择")+e.itemProperty.showName),s=!1)});r=r.map(function(t,e){return t&&t.id?(t.name=l.filter(function(e){return t.topicTypeId==e.id})[0].values.filter(function(e){return t.id==e.id})[0].name,t):{name:t&&t.name||"",id:"",topicTypeId:l[e].id}}),a=0<a.length&&a.filter(function(e){return e.sourceChildId==o})[0].sourceChildShowName;s&&(i={key:0==e.length?t:e.join(","),name:n,projectId:d.id,sourceChildId:o,sourceChildName:a||"",sourceId:i.id,topics:r},r="/projects/connection/add","edit"==d.type&&(i.id=d.connectionId,r="/connection/update"),d.setState({loading:!0}),h.h.post(r,i).then(function(e){d.setState({loading:!1}),p.Z.success(e.data.msg),f.mW.push({pathname:"/account/project/comment",state:{id:d.props.location.state.id,name:d.props.location.state.projectName}})}).catch(function(e){d.setState({loading:!1})}))},d.confirm1=function(){var e=d.state,t=e.key,n=e.name,i=e.selSource,o=e.selChildSource,a=e.childSource,c=e.config,l=e.titles,r=e.selTitles,e=e.keyWord,s=!0;null!=i.id&&""!=i.id||(p.Z.warning("请选择数据来源"),s=!1),""==o&&0<a.length&&(p.Z.warning("请选择子来源"),s=!1),0<c.length&&c.map(function(e){"name"==e.itemProperty.name&&""==n?(p.Z.warning("请填写"+e.itemProperty.showName),s=!1):"key"==e.itemProperty.name&&""==t&&(p.Z.warning("请"+("input"==e.itemType?"填写":"选择")+e.itemProperty.showName),s=!1)});r=r.map(function(t,e){return t&&t.id?(t.name=l.filter(function(e){return t.topicTypeId==e.id})[0].values.filter(function(e){return t.id==e.id})[0].name,t):{name:t&&t.name||"",id:"",topicTypeId:l[e].id}}),a=0<a.length&&a.filter(function(e){return e.sourceChildId==o})[0].sourceChildShowName;s&&(i={key:0==e.length?t:e.join(","),name:n,projectId:d.id,sourceChildId:o,sourceChildName:a||"",sourceId:i.id,topics:r},r="/projects/connection/add/test","edit"==d.type&&(i.id=d.connectionId,r="/connection/update"),d.setState({loading:!0}),h.h.post(r,i).then(function(e){d.setState({loading:!1}),p.Z.success(e.data.msg),f.mW.push({pathname:"/account/project/comment",state:{id:d.props.location.state.id,name:d.props.location.state.projectName}})}).catch(function(e){d.setState({loading:!1})}))},d.state={selSource:[],sourceList:[],titles:[],data:[],config:[],childSource:[],selChildSource:"",selTitles:[],name:"",key:"",sourceChildName:"",sourceChildId:"",projectId:"",keyWord:[],loading:!1},d}i()(e,t);var n=e.prototype;return n.componentDidMount=function(){var e=this.props.location.state,t=e.sourceId,n=e.type,i=e.connectionId,o=e.id,e=e.filterModel;this.filterModel=e&&e.filterModel,this.id=o,this.connectionId=i,this.type=n,e?this.getTopicData(this.filterModel.source&&this.filterModel.source[0]):this.getTopicData(t)},n.getConnectionDetail=function(){var i,o,t=this;this.filterModel?(i=this.filterModel.connConfig,o=[],this.state.titles.map(function(t,e){var n=i?i.filter(function(e){return e.id==t.id})[0]:[];o[e]=n?{id:n.values[0],topicTypeId:n.id}:{}}),this.setState({selTitles:o})):h.h.post("/projects/connection/find",{id:this.connectionId}).then(function(e){var i=e.data.result,o=[];t.state.titles.map(function(t,e){var n=i.configDetails.filter(function(e){return e.topicTypeId==t.id})[0];o[e]=n?{id:n.topicId,topicTypeId:n.topicTypeId}:{}}),t.setState({name:i.name,key:i.url,selSource:{id:i.sourceId},selTitles:o,selChildSource:i.sourceChildId},function(){t.selectChileSource(t.state.selChildSource)})})},n.resetForm=function(){this.setState({config:[],childSource:[],selChildSource:"",selTitles:[],key:"",name:"",sourceChildId:"",sourceChildName:""})},n.delKeyWords=function(e){var t=this.state.keyWord;t.splice(e,1),this.setState({keyWord:t})},n.content=function(){var o=this,e=this.state,n=e.key,i=e.name,t=e.sourceList,a=e.titles,c=e.childSource,l=e.config,r=e.selChildSource,s=e.selSource,d=(e.selTitles,e.keyWord);return m().createElement("ul",{className:"connection-infos"},m().createElement("li",{className:"connection-info"},m().createElement("span",{className:"info-name"},"数据来源"),m().createElement(u.Select,{className:"info-value connection-type",disabled:"edit"==this.type,value:s.id,onChange:this.onChangeSource.bind(this),placeholder:""},t&&t.map(function(e,t){return m().createElement(u.Select.Option,{key:e.id,label:e.name,value:e.id},e.name)}))),0<c.length&&m().createElement("li",{className:"connection-info"},m().createElement("span",{className:"info-name"},"子来源"),m().createElement(u.Select,{value:r,onChange:this.selectChileSource.bind(this),disabled:"edit"==this.type},c.map(function(e){return m().createElement(u.Select.Option,{key:e.sourceChildId,label:e.sourceChildShowName,value:e.sourceChildId})}))),l.map(function(e,t){return"input"===e.itemType?m().createElement("li",{className:"connection-info",key:t},m().createElement("span",{className:"info-name"},e.itemProperty.showName),m().createElement("div",{className:"keyword-wrapper"},"key"==e.itemProperty.name&&d.map(function(e,t){return m().createElement("span",{title:e,className:"key-word",key:e+t},e,m().createElement("i",{onClick:function(){return o.delKeyWords(t)}},"×"))}),m().createElement(u.Input,{className:"info-value connection-name",placeholder:e.itemProperty.placeholder,value:o.state[e.itemProperty.name]||("key"==e.itemProperty.name?n:i),onKeyDown:"111"==r?o.keydownHandle:null,onChange:o.onChangeName.bind(o,e.itemProperty.name),disabled:!("edit"!=o.type||"name"===e.itemProperty.name)}))):"select-dropdown"===e.itemType?m().createElement("li",{className:"connection-info",key:t},m().createElement("span",{className:"info-name"},e.itemProperty.showName),m().createElement(u.Select,{onChange:o.onChangeName.bind(o,e.itemProperty.name),value:o.state[e.itemProperty.name],disabled:!("edit"!=o.type||"name"===e.itemProperty.name)},e.itemProperty.selectItems.map(function(e,t){return e&&m().createElement(u.Select.Option,{key:e.id,label:e.name,value:e.id})}))):""}),a&&a.map(function(t,n){var i=o.state.selTitles;return m().createElement("li",{className:"connection-info titles",key:t.id},m().createElement("span",{className:"info-name"},t.name),m().createElement(u.Select,{className:"titles-select",filterMethod:function(e){return o.filterMethod(n,t.id,e)},filterable:!0,onChange:o.onChangeTitles.bind(o,n,t.id),value:i[n]&&i[n].id},t.values.map(function(e,t){return e&&(!i[n]||!i[n].name||i[n].name&&0<=e.name.indexOf(i[n].name))&&m().createElement(u.Select.Option,{disabled:!1,key:e.id,label:e.name,value:e.id})}),i[n]&&!i[n].id&&t.values&&0===t.values.filter(function(e){return e.name===i[n].name}).length&&m().createElement(u.Select.Option,{className:"insertName",key:i[n].name,label:i[n].name,value:i[n].id})))}))},n.render=function(){var e="edit"==this.type?"编辑":"添加";return m().createElement("div",{className:"flex-col"},m().createElement("div",{className:"flex-other team-cont"},m().createElement(u.Loading,{classNmae:"loading",loading:this.state.loading},m().createElement(o.Z,{title:e+"链接",confirmName:"确定",content:this.content(),cancelFun:this.cancel.bind(this),confirmFun:this.confirm}))),m().createElement(u.Button,{onClick:this.confirm1,style:{display:"none"}},"test"))},e}(t.Component)},60530:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(85354),o=n.n(i),t=n(67294),d=n.n(t),i=n(45697),i=n.n(i),m=n(92360),i={picShow:i().bool,confirmShow:i().bool,cancelShow:i().bool,confirmFun:i().func,cancelFun:i().func},n={picShow:!0,src:n(92090),confirmShow:!0,cancelShow:!0,confirmFun:function(){console.log("confirm")},cancelFun:function(){console.log("cancel")},confirmName:"下一步",cancelName:"取消"},t=function(t){function e(e){return t.call(this,e)||this}return o()(e,t),e.prototype.render=function(){var e=this.props,t=e.title,n=e.content,i=e.src,o=e.picShow,a=e.confirmName,c=e.confirmFun,l=e.confirmShow,r=e.cancelName,s=e.cancelFun,e=e.cancelShow;return d().createElement("div",{className:"confirm-model-wrap-main"},d().createElement("div",{className:"confirm-model"},d().createElement("h4",{className:"model-title"},t),d().createElement("div",{className:"model-content"},n),d().createElement("div",{className:"option-btns"},l&&d().createElement(m.Button,{type:"primary",onClick:c},a),e&&d().createElement(m.Button,{onClick:s},r))),o&&d().createElement("div",{className:"pic-wrap"},d().createElement("img",{src:i})))},e}(t.Component);t.propTypes=i,t.defaultProps=n;const a=t}}]);