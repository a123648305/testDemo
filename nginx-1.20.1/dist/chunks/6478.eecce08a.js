"use strict";(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[6478],{86478:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var a=n(43144),r=n(94578),s=n(67294),i=n(29383),l=n(49722),c=n(12518),o=n(30381),u=n.n(o),h=n(72305),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).getUsers=function(e){return l.h.get("/history/users/list")},n.getTypes=function(e){return l.h.get("/history/types/list")},n.getHistoryList=function(e){var t=n.state,a=t.startTime,r=t.endTime,s=t.selUsers,i=t.selTypes,c=t.currentPage,o=t.pageSize;l.h.post("history/log/list",{username:s,action:i,startTime:a,endTime:r,pageNum:c,pageSize:o}).then((function(e){n.setState({data:[],pageSize:e.data.result.size,totalNumber:e.data.result.totalElements},(function(t){return n.setState({data:e.data.result.content})}))}))},n.getPage=function(e){n.setState({currentPage:e},(function(e){return n.getHistoryList()}))},n.timeConfirm=function(e,t,a){n.setState({startTime:e[0],endTime:e[1]},(function(e){return n.getPage(1)}))},n.state={startTime:u()().subtract(7,"days").format("YYYY-MM-DD"),endTime:u()().startOf("day").format("YYYY-MM-DD"),columns:[{label:"",prop:"paddingLeft",width:16},{label:"\u59d3\u540d",prop:"username"},{label:"\u64cd\u4f5c",prop:"target"},{label:"\u65e5\u671f",prop:"createdAt"},{label:"",prop:"paddingRight",width:16}],data:[],users:[],selUsers:[],types:[],selTypes:[],currentPage:1,pageSize:20,totalNumber:0},n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;Promise.all([this.getUsers(),this.getTypes()]).then((function(t){e.setState({users:t[0].data.result.map((function(e){return{name:e.username,id:e.id}})),types:t[1].data.result.map((function(e){return{name:e.action,id:e.keyword}}))},(function(t){return e.getHistoryList()}))}))},n.selTopics=function(e,t){var n,a=this;this.setState(((n={})[e]=t,n.currentPage=1,n),(function(e){return a.getPage(1)}))},n.render=function(){var e=this,t=this.state,n=(t.startTime,t.endTime,t.totalNumber),a=t.currentPage,r=t.pageSize,l=document.documentElement.clientHeight-46-48-44;return s.createElement("div",{className:"historyLog common-wrapper"},s.createElement(c.Z,{title:"\u64cd\u4f5c\u65e5\u5fd7"}),s.createElement("div",{className:"common-padding-12"},s.createElement("div",{style:{minHeight:l,backgroundColor:"#fff"}},s.createElement("div",{className:"filter"},s.createElement(h.Z,{list:this.allList,onChange:function(t){return e.allList=t}})),s.createElement("div",{className:"log"},s.createElement(i.Z,{columns:this.state.columns,data:this.state.data,pageSize:r,currentPage:a,total:n,onPage:this.getPage})))))},(0,a.Z)(t,[{key:"allList",get:function(){return[{name:"\u7528\u6237",list:this.state.users,value:this.state.selUsers},{name:"\u64cd\u4f5c\u7c7b\u578b",list:this.state.types,value:this.state.selTypes}]},set:function(e){var t=this,n=this.state,a=n.selUsers,r=n.selTypes;e.forEach((function(e){switch(e.name){case"\u7528\u6237":a=e.value;break;case"\u64cd\u4f5c\u7c7b\u578b":r=e.value}})),this.setState({selUsers:a,selTypes:r,currentPage:1},(function(e){return t.getHistoryList()}))}}]),t}(s.Component)},24473:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(63366),s=n(94578),i=n(67294),l=n(45697),c=n.n(l),o=n(94184),u=n.n(o),h=["prefixCls","children","className","block","indeterminate","value","checked","defaultChecked","onChange","disabled"],p=function(e){function t(){return e.apply(this,arguments)||this}return(0,s.Z)(t,e),t.prototype.render=function(){var e,t=this.props,n=t.prefixCls,s=t.children,l=t.className,c=t.block,o=t.indeterminate,p=t.value,d=t.checked,m=t.defaultChecked,f=t.onChange,g=t.disabled,v=(0,r.Z)(t,h),k={value:p,checked:d,defaultChecked:m,onChange:f,disabled:g},y=u()(n,((e={})[n+"-disabled"]=k.disabled,e[n+"-block"]=c,e[n+"-indeterminate"]=o,e),l);return i.createElement("label",(0,a.Z)({tabIndex:k.disabled?-1:0,className:y},v),i.createElement("input",(0,a.Z)({type:"checkbox",className:n+"-input"},k)),i.createElement("span",{className:n+"-status"}),s&&i.createElement("span",{className:n+"-text",title:s},s))},t}(i.Component);p.propTypes={prefixCls:c().string,value:c().oneOfType([c().string,c().number]),checked:c().bool,defaultChecked:c().bool,onChange:c().func,indeterminate:c().bool,disabled:c().bool,block:c().bool},p.defaultProps={prefixCls:"wt-checkbox"};const d=p},85151:(e,t,n)=>{n.d(t,{Jg:()=>a.Z,CS:()=>m});var a=n(24473),r=n(87462),s=n(63366),i=n(94578),l=n(67294),c=n(45697),o=n.n(c),u=n(94184),h=n.n(u),p=["prefixCls","children","className","onChange","values","checkedList","block"],d=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).handleCheckBoxChange=function(e){var n=t.props.onChange;n&&n(e)},t}return(0,i.Z)(t,e),t.prototype.render=function(){var e,t=this,n=this.props,a=n.prefixCls,i=n.children,c=n.className,o=(n.onChange,n.values),u=n.checkedList,d=n.block,m=(0,s.Z)(n,p);return e=o?o.map((function(e,n){var a=0!==u.length&&-1!==u.indexOf(e);return l.createElement(Checkbox,{key:n,value:e,checked:a,onChange:function(e){return t.handleCheckBoxChange(e)},block:d},e)})):l.Children.map(i,(function(e,n){if(e){var a=e.props,r=a.value,s=0!==u.length&&-1!==u.indexOf(r);return l.cloneElement(e,{checked:s,key:n,block:a.block||d,onChange:function(){var e=a.value;t.handleCheckBoxChange(e)}})}})),l.createElement("div",(0,r.Z)({className:h()(a,c)},m),e)},t}(l.Component);d.defaultProps={prefixCls:"wt-checkbox-group"},d.propTypes={onChange:o().func,values:o().array,block:o().bool};const m=d;var f=function(e){var t={};return Object.keys(e).forEach((function(n){/^data\-.+$/.test(n)&&(t[n]=e[n])})),t},g=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){var e=this.props,t=f(e);return l.createElement("label",{className:e.className,title:e.children},l.createElement("div",{className:"checkbox"},l.createElement("input",(0,r.Z)({checked:e.checked,type:"checkbox",name:e.name,onChange:e.onChange,disabled:e.disabled},t)),l.createElement("div",{className:"checkbox-body"})),"\xa0",l.createElement("span",null,e.children))},t}(l.Component);g.defaultProps={className:"",name:"",checked:!1,disabled:!1,onChange:function(e){return e}}},72305:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(36459),r=n(94578),s=n(67294),i=n(43144),l=n(85151);const c=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleClear=function(e){var t=n.state.list;t.forEach((function(e){return e.sel=!1})),n.setState({list:t},(function(e){return n.commitUserSel()}))},n.hoverDropToggle=function(e){if(e){var t=setTimeout((function(){n.setState({open:e,timeout:null})}),100);n.setState({timeout:t})}else clearTimeout(n.state.timeout),n.setState({open:e,timeout:null})},n.clickDropToggle=function(e){n.setState({open:!n.state.open})},n.stop=function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},n.closeDrop=function(e){n.setState({open:!1})},n.state={list:JSON.parse(JSON.stringify(t.list||[])),searchKeyWords:"",open:!1,timeout:""},n}(0,r.Z)(t,e);var n=t.prototype;return n.search=function(){this.setState({searchKeyWords:this.refs.searchInput.value})},n.handleChecked=function(e){var t=this,n=this.state.list;this.props.singleSel?n.forEach((function(t){t.sel=t.id===e})):n.forEach((function(t){t.id===e&&(t.sel=!t.sel)})),this.setState({list:n},(function(e){return t.commitUserSel()}))},n.handleCheckedAll=function(){var e=this,t=!this.checkedAll,n=this.state.list;n.forEach((function(e){return e.sel=t})),this.setState({list:n},(function(t){return e.commitUserSel()}))},n.commitUserSel=function(){this.props.onSel(this.selList)},n.UNSAFE_componentWillReceiveProps=function(e,t){if(e.list||e.value){var n=JSON.parse(JSON.stringify(e.list));n.forEach((function(t){t.sel=-1!==e.value.indexOf(t.id)})),this.setState({list:n})}},n.componentDidMount=function(){var e=this;if(this.props.value){var t=JSON.parse(JSON.stringify(this.state.list));t.forEach((function(t){t.sel=-1!==e.props.value.indexOf(t.id)})),this.setState({list:t})}},n.render=function(){var e=this,t=this.props,n=t.classNames,a=t.style,r=t.title,i=t.selectPosition,c=t.special,o=t.singleSel,u=this.state,h=u.list,p=u.searchKeyWords,d=u.open,m=p.length>0?this.searchList:h,f=h.find((function(t){return e.props.list.value===t.id}));return s.createElement("div",{className:(n||"")+" back-search-select-wrap",onClick:function(t){e.stop(t)},style:a,onMouseEnter:function(){e.hoverDropToggle(!0)},onMouseLeave:function(){e.hoverDropToggle(!1)}},s.createElement("div",{className:d?"open sel-wrap":"sel-wrap"},s.createElement("div",{className:"span-wrap"},s.createElement("span",{className:"title"},r+(c?"":" : ")),!c&&(this.selList.length>0?this.selList.map((function(t,n){return s.createElement("span",{key:n},t.name,n===e.selList.length-1?"":" ,")})):s.createElement("span",null,o&&f?f.name:"\u5168\u90e8"))),s.createElement("i",{className:"icon-cem_pull-down-or-take-up"})),d&&s.createElement(s.Fragment,null,s.createElement("div",{className:"allSelContent",style:{left:"left"===i?"0":"",right:"right"===i?"0":""}},s.createElement("div",{className:"search"},s.createElement("p",{style:{padding:"5px"}},s.createElement("input",{value:p,placeholder:"\u8bf7\u8f93\u5165",ref:"searchInput",type:"text",onChange:function(t){return e.search()}}))),m.length>0?s.createElement("div",{className:"all"},s.createElement("div",{className:"all_check"},!o&&p.length<1&&s.createElement(l.Jg,{checked:this.checkedAll,indeterminate:this.indeterminate,onChange:function(){return e.handleCheckedAll()},block:!0},"\u5168\u9009")),m.map((function(t){return e.props.singleSel?s.createElement("p",{className:t.sel?"singleSel sel":"singleSel",key:t.id,onClick:function(){return e.handleChecked(t.id)}},t.name):s.createElement(l.Jg,{key:t.id,value:t.id,checked:t.sel,onChange:function(){return e.handleChecked(t.id)},block:!0},t.name)}))):s.createElement("div",{className:"all"},"\u65e0\u9009\u9879"),s.createElement("div",{className:"search_bottom"},s.createElement("p",null,s.createElement("span",{onClick:function(t){return e.handleClear()}},"\u6e05\u9664"))))))},(0,i.Z)(t,[{key:"selList",get:function(){return this.state.list.filter((function(e,t){return e.sel}))}},{key:"checkedAll",get:function(){return this.state.list.every((function(e){return e.sel}))}},{key:"indeterminate",get:function(){return!this.checkedAll&&this.state.list.some((function(e){return e.sel}))}},{key:"searchList",get:function(){var e=this;return this.state.list.filter((function(t){if(-1!==t.name.toLocaleLowerCase().indexOf(e.state.searchKeyWords.trim().toLocaleLowerCase()))return!0}))}}]),t}(s.Component);var o=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={filterList:[],inputVal:""},t.inputChange=function(e){t.setState({inputVal:e.target.value})},t.keywordChange=function(e){},t}(0,r.Z)(t,e);var n=t.prototype;return n.handleSel=function(e,t){var n=this.props,a=n.list,r=n.onChange;a.forEach((function(n){n.name===e&&(n.value=t.map((function(e){return e.id})))})),r(a)},n.UNSAFE_componentWillReceiveProps=function(e,t){e&&this.setState({filterList:e.list})},n.componentDidMount=function(){},n.buildHeaderFilter=function(){var e=this;(0,a.Z)(this.props);var t=this.state,n=(t.inputVal,t.filterList);return s.createElement("div",{className:"back-end-filter"},n.map((function(t,n){return s.createElement(c,{key:n,list:t&&t.list,value:t.value||[],onSel:e.handleSel.bind(e,t.name),title:t.name,singleSel:t.singleSel})})))},n.render=function(){return this.buildHeaderFilter()},t}(s.Component)},12518:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(94578),r=n(67294),s=n(45697),i=n.n(s),l=n(61409),c=n(92360),o=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this)._handleBreadcrumbClick=function(e){var n=t.props.title;e!==n.length-1&&l.mW.go(e-n.length+1)},t}return(0,a.Z)(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.title,a=t.rightContent;return r.createElement("div",{className:"secondary-header"},n instanceof Array?r.createElement(c.Breadcrumb,{className:"breadcrumb-style",separator:""},n.map((function(t,n){return r.createElement(c.Breadcrumb.Item,{key:n},r.createElement("span",{onClick:function(){return e._handleBreadcrumbClick(n)}},t))}))):r.createElement("div",{className:"normal-title"},n),a&&a)},t}(r.Component);o.propTypes={title:i().oneOfType([i().string,i().array]).isRequired,rightContent:i().node};const u=o}}]);