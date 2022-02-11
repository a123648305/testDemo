"use strict";(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[662],{70662:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m,fuzzyQuery:()=>d});var a=n(94578),l=n(67294),i=n(49722),s=n(30381),o=n.n(s),r=n(61409),c=n(92360);const u=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(t=e.call.apply(e,[this].concat(a))||this).onScroll=function(e){var n=e.target,a=t.props,l=a.total,i=a.list,s=a.onScrollLoadMore,o=a.scrollable,r=n.scrollTop,c=n.offsetHeight,u=n.scrollHeight;!o||i.length>=l||u-r-c>30||s&&s()},t}return(0,a.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.list,n=e.total,a=e.onClick,i=e.loading,s=e.showAll,r=e.onClear;return l.createElement(c.Loading,{loading:i},l.createElement("div",{onScroll:this.onScroll,className:"warning_list_view",style:{height:"calc(100vh - "+(s?"98px":"130px")+")"}},l.createElement("div",{className:"total_tips"},"\u5171 ",n," \u6761"),t.map((function(e){return l.createElement("div",{className:"list_item",key:e.id,onClick:function(){return a&&a(e.token,e.time)}},l.createElement("div",null,e.name),l.createElement("div",null,l.createElement("span",{className:"time"},o()(e.time).format("YYYY/MM/DD HH:mm")),l.createElement("span",{className:"tag",style:{background:"YES"===e.state?"#15B374":"#D96969"}},"YES"===e.state?"\u5df2\u5904\u7406":"\u5f85\u5904\u7406")))})),r&&t.length>0&&l.createElement(l.Fragment,null,l.createElement("div",{style:{height:42}}),l.createElement("div",{className:"clear",onClick:r},'\u5168\u90e8\u6807\u8bb0\u4e3a"\u5df2\u5904\u7406"'))))},t}(l.PureComponent);var h=n(61918);function d(e,t){for(var n=new RegExp(t.toLocaleLowerCase()),a=[],l=0;l<e.length;l++)n.test(e[l].name.toLocaleLowerCase())&&a.push(e[l]);return a}const m=function(e){function t(t){var n;(n=e.call(this,t)||this).fetchWarningList=function(e,t){var a=n.state,l=a.token,s=a.showAll,o=a.warningType;n.setState({loading:!0},(function(){var a={pageIndex:n.state["pageIndex"+e],pageSize:10,token:l,withPage:!0,showAll:s?"YES":"NO",warningType:o};"1"===e?a.state="NO":"2"===e&&(a.state="YES"),i.h.post("/price/warning/token/set/find",a).then((function(a){var l,i=a.data;2e4===i.code&&n.setState(((l={loading:!1,count:s?0:i.result.count})["total"+e]=i.result.count,l["pageIndex"+e]=n.state["pageIndex"+e]+1,l["list"+e]=t?[].concat(n.state["list"+e],i.result.result):i.result.result,l))}))}))},n.handleOnClose=function(){n.setState({showAll:!n.state.showAll,pageIndex1:1,pageIndex2:1,pageIndex3:1},(function(){return n.fetchWarningList(n.state.activeView)}))},n.handleOnTabClick=function(e){n.setState({activeView:e.props.name},(function(){0===n.state["list"+e.props.name].length&&n.fetchWarningList(e.props.name)}))},n.handleOnListClick=function(e,t){var a=n.state.warningType;r.mW.push("/warningNotice?token="+e+"&sendDate="+t+"&listToken="+n.state.token+"&listTime="+n.state.sendDate+(a&&"&type="+a))},n.handleOnClear=function(){i.h.post("/price/warning/token/set/update",{showAll:"YES",token:n.state.token,warningType:n.state.warningType}).then((function(e){2e4===e.data.code&&n.setState({pageIndex1:1},(function(){return n.fetchWarningList("1")}))}))},n.handleOnSearch=function(e){var t,a=n.state.activeView;n.setState(((t={})["filterList"+a]=e?d(n.state["list"+a],e):void 0,t))};var a=t.location.query,l=a.token,s=a.sendDate,o=a.type;return n.state={pageIndex1:1,pageIndex2:1,pageIndex3:1,list1:[],list2:[],list3:[],total1:0,total2:0,total3:0,filterList1:void 0,filterList2:void 0,filterList3:void 0,showAll:!1,token:l,activeView:"1",loading:!1,sendDate:s,count:0,warningType:o||""},n}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.fetchWarningList(this.state.activeView)},n.render=function(){var e=this,t=this.state,n=t.showAll,a=t.count,i=t.list1,s=t.list2,r=t.list3,d=t.loading,m=t.activeView,p=t.sendDate,f=t.total1,g=t.total2,v=t.total3,w=t.filterList1,k=t.filterList2,E=t.filterList3;return l.createElement("div",{className:"warning_notic_list"},!n&&l.createElement("div",{className:"top_tips"},o()(p).format("YYYY\u5e74MM\u6708DD\u65e5 HH:mm")," \u5171",a,"\u4e2a\u89c4\u5219\u89e6\u53d1\u9884\u8b66",l.createElement("i",{className:"icon-cem_cancel",onClick:this.handleOnClose})),l.createElement(h.Z,{className:"search_com",placeholder:"\u8bf7\u8f93\u5165\u5173\u952e\u8bcd",onSearch:this.handleOnSearch,onClear:this.handleOnSearch}),l.createElement("div",{className:"list_view"},l.createElement(c.Tabs,{activeName:m,onTabClick:this.handleOnTabClick},l.createElement(c.Tabs.Pane,{name:"1",label:"\u5f85\u5904\u7406"},l.createElement(u,{showAll:n,list:w||i,loading:d,total:f,scrollable:!w,onClick:this.handleOnListClick,onClear:this.handleOnClear,onScrollLoadMore:function(){return e.fetchWarningList("1",!0)}})),l.createElement(c.Tabs.Pane,{name:"2",label:"\u5df2\u5904\u7406"},l.createElement(u,{showAll:n,list:k||s,loading:d,total:g,scrollable:!k,onClick:this.handleOnListClick,onScrollLoadMore:function(){return e.fetchWarningList("2",!0)}})),l.createElement(c.Tabs.Pane,{name:"3",label:"\u5168\u90e8"},l.createElement(u,{showAll:n,list:E||r,loading:d,total:v,scrollable:!E,onClick:this.handleOnListClick,onScrollLoadMore:function(){return e.fetchWarningList("3",!0)}}))),l.createElement("span",{className:"pop"},f>99?"99+":f)))},t}(l.PureComponent)},61918:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),l=n(45697),i=n.n(l),s=function(e){var t=e.className,n=e.onClear,l=e.onSearch,i=e.placeholder,s=e.style,o=e.defValue,r=e.signal,c=a.useState(o),u=c[0],h=c[1];a.useEffect((function(){h(o)}),[o,r]);return a.createElement("div",{style:s,className:"yt_search_input_wrapper "+(t||"")},a.createElement("input",{placeholder:i,value:u,onKeyDown:function(e){13===e.keyCode&&l(u)},onChange:function(e){return h(e.target.value)},autoComplete:"off"}),u&&a.createElement("i",{className:"icon-cem_log-off",onClick:function(){h(""),n&&n("")}}),a.createElement("i",{className:"icon-cem_small-search",onClick:function(){return l(u)}}))};s.propTypes={className:i().string,onSearch:i().func.isRequired,placeholder:i().string,style:i().object,defValue:i().string,signal:i().any,onClear:i().func};const o=s}}]);